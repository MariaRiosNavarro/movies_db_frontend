import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BigImage from "../components/BigImage";

const Home = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <Header></Header>
      <BigImage />
      <h1>Home</h1>
      <section>
        <article>
          <h2>{props.property}</h2>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            click +1
          </button>
          <p>{count}</p>
          <Link to="/">See More</Link>
        </article>
      </section>
    </>
  );
};

export default Home;
