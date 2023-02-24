import moment from 'moment/moment';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thongTinNDAction } from '../../../Redux/action/QLUserAction';
import './InfoTicketBooked.scss'
import InfiniteScroll from "react-infinite-scroll-component";
import { layLichSuDatVe } from '../../../Redux/action/QuanLyDatVeAction';

export default function InfoTicketBooked() {
    let sortBy = require('lodash.sortby');
    const dispatch = useDispatch();
    const { thongTinND } = useSelector(state => state.QLNDReducer)
    const { UserLogin } = useSelector(state => state.QLNDReducer)
    const {lichsudatve} = useSelector(state => state.QuanLyDatVeReducer)
    
    useEffect(() => {
        const action = thongTinNDAction();
        dispatch(layLichSuDatVe(UserLogin.tai_khoan))
        dispatch(action);
    }, [])

    console.log('thong tin', lichsudatve)

    // ! xử lý mảng lịch sử đặt vế, nếu trùng mã lịch chiếu thì gộp giá vé và tên ghế vào để render ra 1 row
    const combinedLichSuDatVe = [];
    for(let i = 0;i<lichsudatve.length; i++)  {
        const currentLSDV = lichsudatve[i];

        // kiểm tra xem mã lịch chiếu đã có trong currentLSDV chưa
        const index = combinedLichSuDatVe.findIndex(t => t.ma_lich_chieu === currentLSDV.ma_lich_chieu)
        if(index === -1) {
            // nếu chưa tồn tại, thêm object vào 
            const newlichsudatve = {
                taiKhoan: UserLogin.tai_khoan,
                tenPhim: currentLSDV.tenPhim,
                hinhAnh: currentLSDV.hinhAnh,
                ngayDat: currentLSDV.ngayDat,
                ngayGioChieu: currentLSDV.ngayGioChieu,
                ma_rap: currentLSDV.ma_rap,
                tenRap: currentLSDV.tenRap,
                ma_lich_chieu: currentLSDV.ma_lich_chieu,
                danh_sach_ghe: [currentLSDV.ten_ghe],
                tong_gia_ve: currentLSDV.gia_ve
            }
            combinedLichSuDatVe.push(newlichsudatve)
        }else {
            combinedLichSuDatVe[index].danh_sach_ghe.push(currentLSDV.ten_ghe);
            combinedLichSuDatVe[index].tong_gia_ve += currentLSDV.gia_ve;
        }
    }

    console.log("fix", combinedLichSuDatVe)


    const renderLichSuDatVe = () => {
        return combinedLichSuDatVe?.map((value, index) => {
            return <tbody key={index}>
                <tr>
                    <th className='lichsuve-title'>
                        <div>
                            <img style={{ width: 110, height: 110 }} src={value.hinhAnh} alt="" />
                        </div>
                        {value.tenPhim}
                    </th>
                     <td><p>{value.tenRap}</p>
                        <p>Rạp số {value.ma_rap}</p>
                    </td>
                    <td>{moment(value.ngayGioChieu).format('DD-MM-YYYY')} - {moment(value.ngayGioChieu).format('hh:mm')}</td>
                    <td>
                            {/* <span className="lichsu-tenghe">{value.ten_ghe}</span> */}
                            {value.danh_sach_ghe.join(" ")}
                    </td>
                    <td>{moment(value.ngayDat).format('DD-MM-YYYY')}</td>
                    <td>{(value.tong_gia_ve).toLocaleString()} VNĐ</td> 
                </tr>
            </tbody>
        })
    }
    return (
        <div className='lichsuve'>
            <div className='lichsuve__content mx-5 my-2'>
                <table className="table table-bordered  table-dark text-center">
                    <thead>
                        <tr>
                            <th scope="col">Phim</th>
                            <th scope="col">Rạp</th>
                            <th scope="col">Ngày giờ chiếu</th>
                            <th scope="col">Số Ghế</th>
                            <th scope="col">Ngày Đặt</th>
                            <th scope="col">Giá Vé</th>
                        </tr>
                    </thead>
                    {renderLichSuDatVe()}
                </table>
            </div>

        </div>
    )
}
