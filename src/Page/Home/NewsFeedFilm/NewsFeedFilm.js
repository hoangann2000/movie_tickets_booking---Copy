import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NewsFeedFilm.scss";
export default function NewsFeedFilm() {
  const News1 = [
    {
      img: "https://znews-photo.zingcdn.me/w1920/Uploaded/gtnnz2/2022_09_06/1658725076_thumbnail_2.jpg",
      title: "Nữ diễn viên nổi tiếng từ 'Extraordinary Attorney Woo",
      content:
        "Vai diễn Choi Soo Yeon trong bộ phim 'Extraordinary Attorney Woo' giúp Ha Yoon Kyung nhận được sự chú ý từ khán giả và nhiều lời mời casting phim mới.Ha Yoon Kyung ra mắt năm 2015 với vở kịch Ballad for Roxanne. Tới năm 2020, nữ diễn viên đảm nhiệm vai phụ trong dự án Hospital Playlist. Ha Yoon Kyung chia sẻ vai diễn Choi Soo Yeon trong Extraordinary Attorney Woo là vai diễn đầu tiên cô được nhận mà không cần casting...",
    },
    {
      img: "https://znews-photo.zingcdn.me/w660/Uploaded/wobvjuz/2022_09_06/cu_lao_xac_song_thumb.jpg",
      title: "Nực cười zombie Việt",
      content:
        "Trước khi ra mắt, 'Cù lao xác sống' hứa hẹn mang đến tia hy vọng cho dòng phim xác sống Việt. Song, tác phẩm có chất lượng kịch bản yếu, lạm dụng gây cười và sáng tạo chưa hợp lý...",
    },
    {
      img: "https://znews-photo.zingcdn.me/w660/Uploaded/wpdhnwhnw/2022_09_04/1_753.jpeg",
      title: "Người Nhện' đối đầu phim của Brad Pitt",
      content:
        "Trở lại với bản phát hành dài hơn 11 phút so với bộ phim gốc, 'Spider Man: No Way Home' đang cạnh tranh vị trí quán quân phòng vé với nhiều tác phẩm lớn...",
    },
    {
      img: "https://znews-photo.zingcdn.me/w360/Uploaded/rohunaa/2022_09_04/2021_Avatar_2_Films_HD_Poster_3840x2400.jpg",
      title: "Lộ diện mối đe dọa trong 'Avatar 2'",
      content:
        "Sau 13 năm kể từ khi 'bom tấn lớn nhất thế kỷ' ra mắt công chúng, phần phim thứ hai dự kiến công chiếu vào cuối năm nay...",
    },
    {
      img: "https://znews-photo.zingcdn.me/w360/Uploaded/rohunaa/2022_09_03/top_gun_maverick_review.jpg",
      title: "'Top Gun 2' lập kỷ lục mới",
      content:
        "Bom tấn mới nhất của tài tử Tom Cruise trở thành bộ phim bán chạy nhất từ trước đến nay tại Mỹ sau chỉ một tuần phát hành.",
    },
    {
      img: "https://znews-photo.zingcdn.me/w360/Uploaded/rohunaa/2022_09_02/The_Batman_Robert_Pattinson_m_3746_9797_1646190326.png",
      title: "5 'Người Dơi' kinh điển nhất",
      content:
        "'The Batman' (2022) vừa kỷ niệm 6 tháng xuất hiện trên màn ảnh rộng. Tác phẩm tiếp nối chuỗi thành công của loạt phim siêu anh hùng ăn khách vốn được nhiều khán giả yêu quý.",
    },
  ];
  const News2 = [
    {
      img: "https://znews-photo.zingcdn.me/w360/Uploaded/rohunaa/2022_09_01/Jurassic_World_Dominion_IMAX_Poster_1_1654754370579.jpg",
      title: "Thế giới khủng long' sắp đạt 1 tỷ USD doanh thu bất chấp chê bai",
      content: `Ngoài dự đoán, 'Jurassic World 3' vừa vượt mặt 'Doctor Strange 2' để trở thành bom tấn có doanh thu phòng vé cao thứ hai của năm sau gần ba tháng ra mắt.
      Bất chấp những lời phê bình gay gắt từ phía khán giả lẫn giới chuyên môn, doanh thu phòng vé của Jurassic World: Dominion (10/6/2022) vừa chạm đến con số 990,6 triệu USD, dự kiến cán mốc 1 tỷ USD trong thời gian ngắn sắp tới.`,
    },
    {
      img: "https://znews-photo.zingcdn.me/w360/Uploaded/rohunaa/2022_08_30/peele.jpg",
      title: "Người gieo rắc ác mộng trên màn ảnh",
      content:
        "Jordan Peele được nhắc tới như cái tên bảo chứng cho thành công của dòng phim kinh dị thế giới với ngôn ngữ điện ảnh sáng tạo và ấn tượng....",
    },
    {
      img: "https://znews-photo.zingcdn.me/w360/Uploaded/wobvjuz/2022_09_01/phim_viet_that_the_02.jpg",
      title: "Phim Việt ảm đạm dịp lễ 2/9",
      content:
        "Dịp lễ năm nay, chỉ có một phim Việt ra rạp đối đầu với một phim chiếu trước đó. Không chỉ thất thế về số lượng, phim nội địa còn thua kém phim ngoại về cả chất lượng.",
    },
    {
      img: "https://znews-photo.zingcdn.me/w360/Uploaded/wyhktpu/2022_09_01/thumb_300x220.jpg",
      title: "Loạt phim giới siêu giàu lọt top đề cử",
      content:
        "Khai thác cuộc sống giàu có của giới tài phiệt, các series đề cử tại Emmy 2022 có kịch bản mới mẻ và...",
    },
    {
      img: "https://znews-photo.zingcdn.me/w360/Uploaded/wyhktpu/2022_08_31/image002_3_1.jpg",
      title: "Spider-man: No way home",
      content:
        "Trong phiên bản mới, “Spider-man: No way home” sẽ mang đến nhiều tình tiết thú vị chưa từng xuất hiện trước đó.",
    },
    {
      img: "https://znews-photo.zingcdn.me/w360/Uploaded/rohunaa/2022_08_31/taron_egerton_tu_choi_cyclops_cuong_phim4_1024x576.jpg",
      title: "Người Sói tiếp theo",
      content:
        "Taylor Lautner gọi chế độ ăn kiêng của anh hồi đóng 'Twilight' là 'ác mộng', khi nam diễn viên phải tiêu thụ ít nhất 5.000 calo một ngày để giữ cơ.",
    },
  ];
  let [button1, setButton1] = useState(true);
  let [button2, setButton2] = useState(false);
  const renderCard1 = () => {
    return News1.map((product, index) => {
      return (
        <div className={`item${index}`} key={index}>
          <a
            className="card"
            target="https://zingnews.vn/giai-tri.html"
            href="https://zingnews.vn/giai-tri.html"
          >
            <img src={product.img} className="img-fluid" />
            <div className="card-body">
              <h6
                className="card-title font-weight-bold"
              >
                {product.title}
              </h6>
              <p className="card-text">
                {product.content}
              </p>
            </div>
            <div style={{ paddingLeft: 20 }} className="card-bottom">
              <p style={{ height: 30, marginBottom: 0 }} className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </a>
        </div>
      );
    });
  };
  const renderCard2 = () => {
    return News2.map((product, index) => {
      return (
        <div className={`item${index}`}>
          <a
            className="card"
            target="https://zingnews.vn/giai-tri.html"
            href="https://zingnews.vn/giai-tri.html"
          >
            <img src={product.img} className="img-fluid" />
            <div className="card-body p-3">
              <h6
                className="card-title font-weight-bold"
              >
                {product.title}
              </h6>
              <p className="card-text">
                {product.content}
              </p>
            </div>
            <div style={{ paddingLeft: 20 }} className="card-bottom">
              <p style={{ height: 30, marginBottom: 0 }} className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </a>
        </div>
      );
    });
  };
  return (
    <div className="NEWS pb-5" id="news">
      <div className="container mt-4">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => {
              setButton1(true);
              setButton2(false);
            }}
            className={`btn_news ${button1 == true ? "active" : ""}`}
          >
            TIN NỔI BẬT
          </button>
          <button
            onClick={() => {
              setButton1(false);
              setButton2(true);
            }}
            className={`btn_news ${button2 == true ? "active" : ""}`}
          >
            ĐỜI SỐNG PHIM
          </button>
        </div>
        {button1 == true ? (
          <div className="newsfeed">{renderCard1()}</div>
        ) : null}
        {button2 == true ? (
          <div className="newsfeed">{renderCard2()}</div>
        ) : null}
      </div>
    </div>
  );
}
