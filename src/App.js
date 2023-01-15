import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [index, setIndex] = useState(1);
  const { name, image, title, quote } = data[index];

  const checkNumber = (number) => {
    const lastIndex = data.length - 1;
    if (number > lastIndex) {
      return 0;
    }
    if (number < 0) {
      return lastIndex;
    }
    return number;
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(checkNumber(index + 1));
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  // prevPerson and nextPerson are the same, just different ways of writing the code
  const prevPerson = () => {
    setIndex(checkNumber(index - 1));
  };

  const nextPerson = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    });
  };

  return (
    <section className="section-center">
      <article>
        <div className="title">
          <h2>
            <span>/</span> reviews
          </h2>
        </div>
        <img src={image} alt={name} className="person-img" />
        <h4>{name}</h4>
        <p className="title">{title}</p>
        <button className="prev" onClick={prevPerson}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextPerson}>
          <FiChevronRight />
        </button>
        <p className="text">{quote}</p>
        <span className="icon">
          <FaQuoteRight />
        </span>
      </article>
    </section>
  );
}

export default App;
