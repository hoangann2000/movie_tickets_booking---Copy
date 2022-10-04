import React from "react";
import { Rate } from 'antd'
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import { Options } from "@splidejs/splide";
import "./FilmSapChieu.scss";
import { NavLink } from "react-router-dom";
export default function FilmSapChieu() {
  let { DSFilmSapChieu } = useSelector((state) => {
    return state.DSFilmRecucer;
  });
  // console.log("lấy ok", DSFilmSapChieu);
  return (
    <div className="MovieContainer">
      <div className="movieSlide container">
        <Splide
          //   hasTrack={true}
          options={{
            rewind: true,
            width: "100%",
            gap: "1.1rem",
            perPage: 5,
            perMove: 1,
            autoplay: false,
            breakpoints: {
              1024: {
                perPage: 3,
                width: "100%",

              }
            },
          }
          }
          aria-label="React Splide Example"
        >
          {DSFilmSapChieu.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className="FILM__SAPCHIEU">
                  <div className="movieItem">
                    <img
                      className="img_render img-fluid"
                      src={item.hinhAnh}
                      alt=""
                    />
                  </div>
                  <div className="Title_bottom">
                    <div>
                      <div className="movieDanhGia mb-0">
                        <Rate className='rating' disabled defaultValue={item.danhGia / 2} />
                      </div>
                      <h1 className="movieName pt-2"> {item.tenPhim}</h1>
                    </div>
                    <div className="btn__chitiet">
                      <NavLink
                        className="button_Film"
                        to={`/detail/${item.maPhim}`}
                      >
                        CHI TIẾT
                      </NavLink>
                    </div>
                    <div className="btn__mua">
                      <NavLink
                        className="button_Film"
                        to={`/detail/${item.maPhim}`}
                      >
                        MUA VÉ
                      </NavLink>
                    </div>
                  </div>

                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
