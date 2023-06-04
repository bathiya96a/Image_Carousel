/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, slides: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

function App() {
  const [{ loading, error, slides }, dispatch] = useReducer(logger(reducer), {
    slides: [],
    loading: true,
    error: "",
  });

  // const [slides, setSlides] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/carousel");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }

      // setSlides(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <header></header>
      <main>
        <h1>Image Carousel</h1>
        <div className="slide-carousel">
          {slides.map((slide) => (
            <>
              <div className="slides fade">
                <img src={slide.image} alt={slide.title} />
                <h2 className="text1">{slide.title}</h2>
                <p className="text2">{slide.subtitle}</p>
              </div>
              <a className="prev" onclick="plusSlides(-1)">
                &#10094;
              </a>
              <a className="next" onclick="plusSlides(+1)">
                &#10095;
              </a>
            </>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
