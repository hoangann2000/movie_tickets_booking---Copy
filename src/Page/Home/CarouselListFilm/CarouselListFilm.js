import React, { useEffect } from "react";
import { DSFilm } from "../../../Redux/action/FilmAction";
import { useDispatch } from "react-redux";
import FilmSapChieu from "./FilmSapChieu/FilmSapChieu";
import FilmDangChieu from "./FilmDangChieu/FilmDangChieu";
import "./CarouselListFilm.scss";

export default function CarouselListFilm() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch lần 1 (truyền dispatch)
    const action = DSFilm();
    dispatch(action);
    // dispatch(LayDSFilm());
  }, []);
  return (
    <div className="BG_Film">
      <ul
        className="nav justify-content-center text-white"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="button_Carousel nav-link active"
            id="home-tab"
            data-toggle="tab"
            data-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            <span className="title_CA">Phim Sắp Chiếu</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="button_Carousel nav-link"
            id="profile-tab"
            data-toggle="tab"
            data-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <span className="title_CA">Phim Đang Chiếu</span>
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <FilmSapChieu />
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <FilmDangChieu />
        </div>
      </div>
    </div>
  );
}
