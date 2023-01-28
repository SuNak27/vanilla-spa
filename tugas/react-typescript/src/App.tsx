import React from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
};

function App() {
  // https://posts-api-production-b0b2.up.railway.app/posts
  // Make a GET request to the above URL
  // Display the response in the browser

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch('https://posts-api-production-b0b2.up.railway.app/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  
  return (
    <div className="App">
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: Post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
