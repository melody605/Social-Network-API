import { Schema, model, type Document } from 'mongoose';
import dayjs from 'dayjs';
import reactionSchema from './Reaction.js';

interface IThought extends Document {
    thoughtText: string,
    createdAt: Schema.Types.Date,
    username: string,
    reactions: [],
    
}

const thoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280, 
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (rawValue: any) => {
                return dayjs(rawValue).format('MMMM/DD/YYYY') 
            }
        },

        username: {
            type: String,
            required: true
        },
      
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true
    },
);

thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length 
})


const Thought = model<IThought>('Thought', thoughtSchema);

export default Thought;
