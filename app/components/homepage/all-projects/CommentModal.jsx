// components/CommentModal.jsx
import React, { useState, useEffect } from 'react';
import AddComment from './AddComment';

const CommentModal = ({ project, onClose }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://portfolio-api-8sz6.onrender.com/api/get-comments/${project._id}`
        );
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [project._id]);

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.text}</p>
            <p>By: {comment.user.name}</p>
          </div>
        ))}
        <AddComment projectId={project._id} />
      </div>
    </div>
  );
};

export default CommentModal;
