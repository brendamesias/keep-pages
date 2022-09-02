import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

const Home = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (<div>
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me please
      </button>
    </div>
    <br />
    <br />
    <span>Bienvenido a mi app de crear notas :D </span>
    <Link to="/list-notes">
      <button>Lets go</button>
    </Link>
  </ div>)
}

export default Home;