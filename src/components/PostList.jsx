import CommentForm from './CommentForm';

const postList = ({ setPosts, posts }) => {
  const addLike = (e, postId) => {
    posts[postId - 1].likes += 1;
    setPosts([...posts]);
  }

  return (
    <div>
      <h2>posts Liste</h2>
      <div className="cardsContainer">
        {posts.map((post) => (
          <ul className="card" key={post.id}>
            <li><img src={post.image} /></li>
            <li className="author">{post.author}</li>
            <li className="description">{post.description}</li>
            <li className="likes"><button onClick={(e) => addLike(e, post.id)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/968px-Love_Heart_SVG.svg.png" ></img></button>{post.likes}</li>
            <CommentForm postId={post.id} setPosts={setPosts} posts={posts} />
          </ul>
        ))}
      </div>
    </div>
  );
};

export default postList;