'use strict';
function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    console.log(Search());
  }

  // return React.createElement(
  //   'button',
  //   {
  //     onClick: () => setLiked(true),
  //   },
  //   'Like'
  // );

  return (
    <>
      <button onClick={() => setLiked(true)}>Like</button>
      <button onClick={() => setLiked(true)}>Test</button>
    </>
  )
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));