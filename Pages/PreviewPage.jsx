import React, { useEffect } from "react";
import { useState } from "react";
import { BiDownload } from "react-icons/bi";
import Loader from "../components/Loader/Loader";
import "./PreviewPage.css";
import { FiArrowLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

const ContentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imgData, setImgData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const fetchImage = async () => {
    try {
      const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
        headers: {
          Authorization:
            "563492ad6f91700001000001a3321c0fd1154ba9b76de56f6075ea82",
        },
      });
      const datas = await res.json();
      console.log(datas);
      setImgData(datas);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="dark-container-1">
      <div className="light-container-1">
        {imgData === undefined ? (
          <Loader />
        ) : (
          <>
            <div className="btns">
              <button
                className="goback-btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                <span>
                  <FiArrowLeft className="back-icon" />
                </span>{" "}
                Go Back
              </button>

              <a href={imgData.src.original} download className="download-btn">
                <span>
                  <BiDownload className="download-icon" />
                </span>{" "}
                Download
              </a>
            </div>

            <img className="prev-img" src={imgData?.src.large} alt="" />
          </>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
