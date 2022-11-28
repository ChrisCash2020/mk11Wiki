import { useEffect, useState } from 'react';
import Card from '../helpers/Card';
import AddIcon from '@mui/icons-material/Add';

export default function Home(props) {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const res = await fetch('http://localhost:3000/posts');
      const data = await res.json();
      setAllPosts(data.allPosts);
    }
    getPosts();
  }, []);
  const cards = allPosts.map((post, i) => (
    <Card
      key={i}
      userId={post.userId}
      id={post.id}
      name={post.name}
      image={post.image}
    />
  ));
  return (
    <>
      <div className='container'>{cards}</div>
      {props.authState.status && (
        <>
          <div id='form-btn'>
            <AddIcon
              style={{ fontSize: '2.5rem', textShadow: '-1px 1px 0 #000' }}
            />
          </div>
          <div id='create'>create</div>
        </>
      )}
    </>
  );
}
