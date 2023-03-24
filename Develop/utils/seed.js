const connection = require('../config/connection');
const { Thought, User } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [
    {
    "username": "bob",
    "email": "bob@bob.com"
  },
  {
    "username": "carl",
    "email": "bob@bob.com"
  },
  {
    "username": "jimbo",
    "email": "bob@bob.com"
  },
  {
    "username": "katy",
    "email": "bob@bob.com"
  },
];
  const thoughts = [
      {
        "thoughtText": "bob is kinda weird",
        "username": "bob",
      },     
       {
        "thoughtText": "bob is kinda weird",
        "username": "jimbo",
      },     
       {
        "thoughtText": "bob is kinda weird",
        "username": "carl",
      },    
        {
        "thoughtText": "bob is kinda weird",
        "username": "katy",
      }
  ];
   // Add users to the collection and await the results
  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts)
  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
