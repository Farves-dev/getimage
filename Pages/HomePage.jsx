import React, { useEffect, useState, useRef } from "react";
import "../components/Hero/Hero.css";
import "./ContentPage.css";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

const HomePage = () => {
  const [srch, setSrch] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const ref = useRef(null);

  const fetchData = async (keyword) => {
    setData(null);

    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${keyword}&per_page=80`,
      {
        headers: {
          Authorization:
            "563492ad6f91700001000001a3321c0fd1154ba9b76de56f6075ea82",
        },
      }
    );
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData("welcome");
  }, []);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section id="hero">
        <div className="heading" id="hero-sec">
          GETIMAGE
        </div>

        <div className="description">
          THE AMAZING PLACE TO EXPLORE AND GET <br />
          BEAUTIFUL IMAGES
        </div>

        <div className="hero-input">
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            onChange={(e) => {
              setSrch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchData(srch);
                handleClick();
              }
            }}
          />

          <span
            smooth
            className="search-icon"
            onClick={() => {
              fetchData(srch);
              handleClick();
            }}
          >
            <BiSearchAlt2 />
          </span>
        </div>
      </section>

      {data === null ? (
        <Loader />
      ) : (
        <div className="container" ref={ref}>
          <div className="dark-container" id="images">
            <div className="light-container">
              <div className="main-container">
                {data.photos.map((photo) => (
                  <img
                    className="image"
                    src={photo.src.medium}
                    key={photo.id}
                    onClick={() => {
                      navigate(`/image/${photo.id}`);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
