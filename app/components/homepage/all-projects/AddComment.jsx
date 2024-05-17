// components/AddComment.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddComment = ({ projectId }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Handle unauthenticated user
        return;
      }

      const response = await axios.post(
        'https://portfolio-api-8sz6.onrender.com/api/create-comment',
        { projectId, text: comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        // Clear the comment input field
        setComment('');
        // Optionally, update the comments list on the project
      } else {
        console.error('Failed to add comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <h3>Add Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Enter your comment...'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddComment;
