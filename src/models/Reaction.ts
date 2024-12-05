import { Schema, Types, type Document } from 'mongoose';
import dayjs from 'dayjs';

interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId,
    reactionBody: string,
    username: string,
    createdAt: Schema.Types.Date,    
}

const reactionSchema = new Schema<IReaction>(
    {
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
            get: (rawValue: any) => {
                return dayjs(rawValue).format('MMMM/DD/YYYY') 
            }
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true
    },
);


export default reactionSchema;
