import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BigImage from "../components/BigImage";
import Footer from "../components/Footer";

const Add = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <Header></Header>
      <BigImage />

      <Footer />
    </>
  );
};

export default Add;
