const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 128,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    }]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const reactionSchema = new Schema(
  {
    reactionId:{
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  }
)

userSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

module.exports = thoughtSchema;
