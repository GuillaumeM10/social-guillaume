import React from 'react';

const postForm = ({ setPosts, posts }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = [
      {
        id: posts.length + 1,
        image: e.target.image.value,
        description: e.target.description.value,
        author: e.target.author.value,
        likes: 0,
        comments: []
      },
    ]
    setPosts([...posts, ...newPost]);
  };

  return (
    <div className="postForm">
      <h2>post Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="image">
          <div className="label">
            <label htmlFor="image">image url :</label>
            <p>image lien : <kbd>https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png</kbd></p>
          </div>
          <input type="text" name="image" />
        </div>
        <div className="description">
          <label htmlFor="description">description :</label>
          <input type="text" name="description" />
        </div>
        <div className="author">
          <label htmlFor="author">author :</label>
          <input type="text" name="author" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default postForm;