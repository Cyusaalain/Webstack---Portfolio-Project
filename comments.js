import React, { useState, useEffect } from 'react';
import { getCommentsByEvent, addComment } from '../services/api';

const Comments = ({ eventId }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getCommentsByEvent(eventId);
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments', error);
      }
    };
    fetchComments();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newComment = await addComment({ text, eventId });
      setComments([...comments, newComment]);
      setText('');
    } catch (error) {
      console.error('Error adding comment', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <strong>{comment.userId.username}:</strong> {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
