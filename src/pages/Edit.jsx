import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Edit = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h1>Edit</h1>
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

export default Edit;
