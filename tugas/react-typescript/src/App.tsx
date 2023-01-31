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
  const [post, setPost] = React.useState({
    title: '',
    body: '',
  });

  React.useEffect(() => {
    fetch('https://posts-api-production-b0b2.up.railway.app/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPost({ ...post, title: value });
  };

  const bodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPost({ ...post, body: value });
  };

  const editClick = (id: number) => {
    fetch(`https://posts-api-production-b0b2.up.railway.app/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  };

  const deleteClick = (id: number) => {
    fetch(`https://posts-api-production-b0b2.up.railway.app/posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  // Get Values from Form
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(post);
    

    fetch('https://posts-api-production-b0b2.up.railway.app/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      }).catch((error) => {
        console.error('Error:', error);
      });
  };

  
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
              <td>
                <button onClick={() => editClick(post.id)}>Edit</button>
                <button onClick={() => deleteClick(post.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Post</h1>
      <form onSubmit={submit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={post.title} onChange={titleChange} />
        <label htmlFor="body">Body</label>
        <input type="text" name="body" id="body" value={post.body} onChange={bodyChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
