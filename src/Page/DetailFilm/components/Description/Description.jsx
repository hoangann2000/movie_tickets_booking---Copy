import moment from 'moment'
import React from 'react'
import './Description.scss'

const Description = ({ film }) => {

    return (
        <>
            <div className="col-md-6 detail__thongtin-left">
                <div className='row-info'>
                    <div className="title-info">Ngày khởi chiếu</div>
                    <div className="content-info">{moment(film.ngayKhoiChieu).format('DD-MM-YYYY')}</div>
                </div>
                <div className='row-info'>
                    <div className="title-info">Đạo diễn</div>
                    <div className="content-info">
                        Quo vero architecto</div>
                </div>
                <div className='row-info'>
                    <div className="title-info">Diễn viên</div>
                    <div className="content-info">Lorem range, Ipsum dolor</div>
                </div>
                <div className='row-info'>
                    <div className="title-info">Thể loại</div>
                    <div className="content-info">
                        Dramma, Vietsub</div>
                </div>
                <div className='row-info'>
                    <div className="title-info">Định dạng</div>
                    <div className="content-info">
                        2D/Digital</div>
                </div>
                <div className='row-info'>
                    <div className="title-info">Ngôn Ngữ</div>
                    <div className="content-info">
                        Tiếng Việt</div>
                </div>
            </div>
            <div className="col-md-6 detail__thongtin-right">
                <div className="title-info">Nội dung</div>
                <div className="content-info">{film.moTa}</div>
            </div>
        </>
    )
}

export default Description