import { useState } from "react";
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <h1>Posts</h1>
      <PostForm setPosts={setPosts} posts={posts} />
      <PostList setPosts={setPosts} posts={posts} />
    </div>
  );
}

export default App;
