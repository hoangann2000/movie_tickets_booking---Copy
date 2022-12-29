import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";
import "./FilmDangChieu.scss";
export default function FilmDangChieu() {
  let { DSFilmDangChieu } = useSelector((state) => {
    return state.DSFilmRecucer;
  });
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
              },
            },
          }}
          aria-label="React Splide Example"
        >
          {DSFilmDangChieu.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className="FILM__DANGCHIEU">
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
                        <Rate
                          className="rating"
                          disabled
                          defaultValue={item.danhGia / 2}
                        />
                      </div>
                      <h1 className="movieName pt-2"> {item.tenPhim}</h1>
                    </div>
                    {/* đánh giá code theo ngôi sao */}
                    {/* <div className="btn__chitiet">
                      <NavLink
                        className="button_Film"
                        to={`/detail/${item.maPhim}`}
                      >
                        CHI TIẾT
                      </NavLink>
                    </div> */}
                    <div className="btn__mua">
                      <NavLink
                        className="button_Film"
                        to={`/detail/${item.maPhim}`}
                      >
                        <ShoppingCartOutlined
                          style={{ color: "red", fontSize: "30px" }}
                        />
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
