const { Post } = require('../models');

const postData = [
  {
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.',
    user_id: 1,
  },
  {
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post.',
    user_id: 2,
  },
  {
    title: 'Third Blog Post',
    content: 'This is the content of the third blog post.',
    user_id: 3,
  },
];

const seedPosts = async () => {
  try {
    await Post.bulkCreate(postData);
    console.log('Posts seeded successfully!');
  } catch (error) {
    console.error('Error seeding posts:', error);
  }
};

const undoSeedPosts = async () => {
  try {
    await Post.destroy(postData);
    console.log('Posts seeding undone successfully!');
  } catch (error) {
    console.error('Error undoing post seeding:', error);
  }
};

module.exports = {
  up: seedPosts,
  down: undoSeedPosts,
};