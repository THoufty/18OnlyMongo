const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(val) {
          // used a regex to test the email.
          return /\S+@\S+\.\S+/.test(val)
        },
        message: noVal => `${noVal.value} is not a valid email address!`
      }
    },
    thought: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
  );

  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

  const User = model('User', userSchema);
 
module.exports = { User };
