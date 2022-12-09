import React from 'react';

const CommentForm = ({ postId, setPosts, posts }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: posts[postId - 1].comments.length + 1,
      author: e.target.author.value,
      content: e.target.content.value
    }
    posts[postId - 1].comments.push(newComment);
    setPosts([...posts]);
    console.log(posts);
  };
  
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="author">
          <label htmlFor="author">author :</label>
          <input type="text" name="author" />
        </div>
        <div className="content">
          <label htmlFor="content">content :</label>
          <textarea type="text" name="content" />
        </div>

        <button type="submit">comment</button>
      </form>

      {posts[postId - 1].comments.map((comment) => (
        <ul className="comment" key={comment.id}>
          <li>{comment.author} : </li>
          <li>{comment.content}</li>
        </ul>
      ))}
    </div>
  );
};

export default CommentForm;