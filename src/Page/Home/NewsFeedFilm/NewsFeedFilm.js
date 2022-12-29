import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NewsFeedFilm.scss";
export default function NewsFeedFilm() {
  return (
    <div className="NEWS pb-5 flex justify-center items-center" id="news">
      <div className="flex items-center">
        <div className="advertisement">
          <h1 style={{ fontSize: "35px", color: "white" }}>
            Ứng dụng tiện lợi dành cho người yêu điện ảnh
          </h1>
          <span style={{ fontSize: "20px", color: "#c1c9ce" }}>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </span>
          <Link className="btn-app" to="">
            App miễn phí - Tải về ngay!
          </Link>
        </div>
        <div className="mt-4">
          <img src="../../../img/telephone.png" />
        </div>
      </div>
    </div>
  );
}
