const { User } = require('../models');

const userData = [
  {
    username: 'user1',
    email: 'user1@example.com',
    password: 'password1',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: 'password2',
  },
  {
    username: 'user3',
    email: 'user3@example.com',
    password: 'password3',
  },
];

const seedUsers = async () => {
  try {
    await User.bulkCreate(userData);
    console.log('Users seeded successfully!');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

const undoSeedUsers = async () => {
  try {
    await User.destroy(userData);
    console.log('Users seeding undone successfully!');
  } catch (error) {
    console.error('Error undoing user seeding:', error);
  }
};

module.exports = {
  up: seedUsers,
  down: undoSeedUsers
};