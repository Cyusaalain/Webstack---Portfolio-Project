const Comment = require('../models/commentModel');

exports.addComment = async (req, res) => {
  const { text, eventId } = req.body;
  try {
    const comment = new Comment({
      text,
      eventId,
      userId: req.user.id,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCommentsByEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const comments = await Comment.find({ eventId }).populate('userId', 'username');
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
