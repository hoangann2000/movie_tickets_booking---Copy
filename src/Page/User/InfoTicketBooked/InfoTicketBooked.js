import moment from 'moment/moment';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thongTinNDAction } from '../../../Redux/action/QLUserAction';
import './InfoTicketBooked.scss'
import InfiniteScroll from "react-infinite-scroll-component";

export default function InfoTicketBooked() {
    let sortBy = require('lodash.sortby');
    const dispatch = useDispatch();
    const { thongTinND } = useSelector(state => state.QLNDReducer)
    console.log('thong tin', thongTinND)
    useEffect(() => {
        const action = thongTinNDAction();
        dispatch(action);
    }, [])


    const renderLichSuDatVe = () => {
        return thongTinND.thongTinDatVe?.map((value, index) => {
            return <tbody key={index}>
                <tr>
                    <th className='lichsuve-title'>
                        <div>
                            <img style={{ width: 110, height: 110 }} src={value.hinhAnh} alt="" />
                        </div>
                        {value.tenPhim}
                    </th>
                    <td>{sortBy(value.danhSachGhe, ['maGhe'])?.map((ghe, index) => {
                        return <Fragment key={index}>
                            <span className="lichsu-tenghe">{ghe.tenGhe}</span>
                            {(index + 1) % 5 == 0 ? <br /> : null}
                        </Fragment>

                    })}</td>
                    <td>{moment(value.ngayDat).format('DD-MM-YYYY')} - {moment(value.ngayDat).format('hh:mm')}</td>
                    <td>{(value.giaVe).toLocaleString()} VNĐ</td>
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
