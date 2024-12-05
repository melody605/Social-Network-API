import { Schema, Types } from 'mongoose';
import dayjs from 'dayjs';
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (rawValue) => {
            return dayjs(rawValue).format('MMMM/DD/YYYY');
        }
    },
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true
});
export default reactionSchema;
