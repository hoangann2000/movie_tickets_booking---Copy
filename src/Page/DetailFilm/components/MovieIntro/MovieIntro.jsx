import { Rate } from 'antd'
import moment from 'moment'
import React from 'react'
import './MovieIntro.scss'
import { useState } from 'react'
import TrailerFilmDetail from '../../TrailerFilmDetail'
import YouTube from 'react-youtube'
import Play from '../../../../Component/PlayVideo/Playvideo'
const MovieIntro = ({ film }) => {

  let [play, setPlay] = useState(false);
  let [playButton, setPlayButton] = useState(true);
  // ? sử dụng thư viện React-youtube truyền vào tham số /ID 
  // ? trailer = link/ID => cắt ID để truyền biến vào TrailerFilmDetail
  let trailer = film.trailer?.slice(30, film.trailer.legnth)

  const [hasid, setHasId] = useState('')
  const [closeTrailer, setCloseTrailer] = useState(false); //ban đầu cho false để k hiện
  const showTrailer = (id) => {
    if ((hasid.length > 0))
      return < TrailerFilmDetail id={id} />
  }

  return (
    <div className='movie__intro'>
      <div className='full__background'>
        <div className='carousel__img'>
          <img src={film.hinhAnh} alt="" />
        </div>
      </div>
      <div className='blur__overlay'></div>
      <div className='detail__info  myContainer'>
        <div className="detail__info-content row">
          <div className="movie__poster col-md-3 col-12">
            <div className="poster__img d-flex justify-content-center align-items-center" >
              <img className='w-100 h-100' src={film.hinhAnh} alt="" />
              <div className='play__btn'>
                <button onClick={() => {
                  setCloseTrailer(true) // click button chạy trailer đồng thời hiện button close
                  setHasId(trailer)
                }} className='fa fa-play'>
                </button>
              </div>
            </div>
          </div>
          <div className="movie__info col-md-6 col-6 ">
            <div className='movie__info-content'>
              <div className='showtime'>Ngày chiếu: {moment(film.ngayKhoiChieu).format('DD-MM-YYYY')}
              </div>
              <div>
                <span className='c18'>C18</span>
                <span className='movie__name'>{film.tenPhim}</span>
              </div>
              <a href="">
                <button className='btn btn-danger'>Mua Vé</button>
              </a>
            </div>
          </div>
          <div className="movie__rating  d-flex col-md-3 col-6">
            <div className={`c100 p${film.danhGia * 10} big`}>
              <span>{film.danhGia}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <Rate className='rating__start' allowHalf value={film.danhGia / 2} />
          </div>
        </div>
      </div>
      {/* nếu closetrailer là true thì đồng nghĩa với hiện button close trailer + showtrailer */}
      {closeTrailer == true ? <div className='show__trailer' >{showTrailer(hasid)}
        <button
          onClick={() => {
            setCloseTrailer(false) // truyền ngược lại false để đóng button + showtrailer
          }}
          className="close_trailerFilm btn"
        >
          <i
            style={{ color: "red", fontSize: "40px" }}
            className="fa fa-times-circle"
          ></i>
        </button>
      </div> : null}
    </div >
  )
}

export default MovieIntro