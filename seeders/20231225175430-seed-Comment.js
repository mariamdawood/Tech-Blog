const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'I agree with you!',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: 'I disagree with you!',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: 'Great article!',
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = async () => {
  try {
    await Comment.bulkCreate(commentData);
    console.log('Comments seeded successfully!');
  } catch (error) {
    console.error('Error seeding comments:', error);
  }
};

const undoSeedComments = async () => {
  try {
    await Comment.destroy(commentData);
    console.log('Comments seeding undone successfully!');
  } catch (error) {
    console.error('Error undoing comment seeding:', error);
  }
};

module.exports = {
  up: seedComments,
  down: undoSeedComments,
};