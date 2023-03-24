const connection = require('../config/connection');
const { Thought, User } = require('../models');

connection.on('error', (err) => {
  console.error('Database connection error:', err);
});

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
    "email": "carl@carl.com"
  },
  {
    "username": "jimbo",
    "email": "jimbo@jimbo.com"
  },
  {
    "username": "katy",
    "email": "katy@katy.com"
  },
];
  const thoughts = [
      {
        "thoughtText": "Jimbo is kinda weird",
        "username": "bob",
      },     
       {
        "thoughtText": "Carl is kinda weird",
        "username": "jimbo",
      },     
       {
        "thoughtText": "Katy is kinda weird",
        "username": "carl",
      },    
        {
        "thoughtText": "Bob is kinda weird",
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
