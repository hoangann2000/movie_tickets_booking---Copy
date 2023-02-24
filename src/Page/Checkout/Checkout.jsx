import React, { Fragment, useEffect, useState } from "react";
import { Col, Row } from "antd";
import "./Checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import { datGheAction, datVeAction, layChiTietPhongVeAction, layGheDaDatAction, layGheTheoRapAction } from "../../Redux/action/QuanLyDatVeAction";
import { DAT_VE } from "../../Redux/action/Type/QLDatVe";
import Header from "../../Component/Header/Header";
import FooterHome from "../Home/Footer/FooterHome";
import { ACCESS_TOKEN } from "../../Redux/action/Type/TypeND";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { History, parsePath } from "history";
import { history } from "../../App";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { Redirect, Route } from "react-router-dom";
import { USER_ND } from "../../Util/setting";
import moment from "moment";
import { times } from "lodash";
import { formatCountdown } from "antd/lib/statistic/utils";


export default function Checkout(props) {
    let sortBy = require('lodash.sortby');
    const [disabled, setDisabled] = useState(true)
    const { UserLogin } = useSelector(state => state.QLNDReducer)
    const {laychitietghe} = useSelector(state => state.QuanLyDatVeReducer)
    const {layghedadat} = useSelector(state => state.QuanLyDatVeReducer)
    const {lichchieu} = useSelector(state => state.DSFilmRecucer);
    const { chiTietPhongve, danhSachGheDangDat, danhSachGheKhachDat } = useSelector(state => state.QuanLyDatVeReducer);
    // console.log(danhSachGheDangDat);
    const { thongTinPhim, danhSachGhe } = chiTietPhongve
    const {filmDetail} = useSelector(state => state.DSFilmRecucer);
    const dispatch = useDispatch()
    const [counter, setCounter] = useState((60 * 2));
    const [chairs, setChairs] = useState([]);
    useEffect(() => {
        // const action = layChiTietPhongVeAction(props.match.params.id)
        // dispatch(action)
        dispatch(layGheTheoRapAction(props.match.params.id))
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if (counter === 0) {
            Swal.fire("Bạn đã giữ ghế quá lâu!", {
                icon: "warning",
            });
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    }, [counter])

    console.log(window.location)
    
    useEffect(() => {
        dispatch(layGheDaDatAction(props.match.params.id))
          const newData = laychitietghe?.map((l) => {
            if (l.tenGhe > 70) {
              return { ...l, giaVe: 150000};
            }
            return { ...l, giaVe: 100000};
          });
          if (newData) setChairs(newData);
      
    },[])


    if (!localStorage.getItem(USER_ND)) {
        return <Redirect to={'/login'} />
    }
    // console.log(filmDetail)
    const renderGhe = () => {
        // console.log(chairs)
        return chairs?.map((ghe, index) => {
            // ! tạo 3 biến class
            
            // let ClassGheDaDat = ghe.ma_ghe === 1  ? 'ghe-da-dat' : '';
            let classGheVip = ghe.giaVe === 150000 ? 'ghe-vip' : '';
            let ClassGheDangDat = '';
            let ClassGheKhachDat = '';
            let ClassGheDaDat = '';

            layghedadat.map((ghedd) => {
                if(ghedd.ten_ghe === ghe.tenGhe) {
                   return ClassGheDaDat = 'ghe-da-dat'
                }
                return ClassGheDaDat
            })
            
            // console.log('đã đặt',layghedadat)
            // console.log(chairs)

            let indexGheKhachDat = danhSachGheKhachDat.findIndex(gheKhachDat => gheKhachDat.ma_ghe === ghe.ma_ghe);

            // ! duyển mảng ghế đang đặt, nếu mà mã ghế đang đặt = mã ghế thì trả về -1 và gán class = 'ghedangdat' để hiển thị màu xanh
            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.ma_ghe === ghe.ma_ghe);
            if (indexGheKhachDat != -1) {
                ClassGheKhachDat = 'ghe-khach-dat';
            }

            if (indexGheDangDat != -1) {
                ClassGheDangDat = 'ghe-dang-dat'
            }

            if (ClassGheDaDat ==='ghe-da-dat' | ClassGheDangDat === 'ghe-dang-dat') {
                classGheVip = '';
            }

            return <button onClick={() => {
                setDisabled(false)

                dispatch(
                    {
                        type: DAT_VE,
                        gheDuocChon: ghe
                    }
                )
            }} className={`ghe ${ClassGheDaDat} ${classGheVip} ${ClassGheDangDat} ${ClassGheKhachDat}`} key={index}>
                {ghe.tenGhe}
            </button>

        })
    }

    const datVe = () => {
        let laymaghe = danhSachGheDangDat.map((ghe,indenx) => {
            return ghe
        })
       let  thongTinDatVe = laymaghe.map((value) => {
            return {ma_ghe:value.ma_ghe,tai_khoan: UserLogin.tai_khoan,ma_lich_chieu:props.match.params.id,gia_ve: value.giaVe}
        })
        dispatch(datVeAction(thongTinDatVe))
        // console.log(thongTinDatVe)
    }
    const Modal = () => {
        Swal.fire({
            title: 'Vui lòng xác nhận đặt vé ?',
            icon: "question",
            showDenyButton: true,
            confirmButtonColor: `#3085d6`,
            denyButtonText: `Hủy`,
            confirmButtonText: `Xác Nhận`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                datVe()
                Swal.fire({
                    title: 'Bạn có muốn tiếp tục đặt vé không ?',
                    icon: "question",
                    showDenyButton: true,
                    confirmButtonColor: `#3085d6`,
                    confirmButtonText: `Xác Nhận`,
                    denyButtonText: `Xem lịch sử`,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        window.location.reload();
                    } else if (result.isDenied) {
                        history.push("/info");
                    }
                });
            } else if (result.isDenied) {
            }
        });
    }
    return (
        <Fragment>
            <Header />
            <div className="book__ticket">
                <div className="book__content myContainer">
                    <Row>
                        <Col className="book__left mx-auto my-2" xs={22} sm={20} lg={14} >
                            <div className="screen mx-auto">
                                <p className="small text-center">Screen</p>
                            </div>
                            <div className="book__left-ghe text-center">
                                {renderGhe()}
                            </div>
                            <div className="book__left-loaighe d-flex">
                                <div className="loaighe-chuadat d-flex">
                                    <div className="ghe-chuaDat boxghe"></div>
                                    <p>Chưa đặt</p>
                                </div>
                                <div className="loaighe-dadat d-flex">
                                    <div className="ghe-dadat boxghe"></div>
                                    <p>Đã đặt</p>
                                </div>
                                <div className="loaighe-dangdat d-flex">
                                    <div className="ghe-dangdat boxghe"></div>
                                    <p>Đang đặt</p>
                                </div>

                                <div className="loaighe-vip d-flex">
                                    <div className="ghe-vip boxghe"></div>
                                    <p>Vip</p>
                                </div>
                                {/* <div className="loaighe-vip d-flex">
                                    <div className="ghe-khachdat boxghe"></div>
                                    <p>Khách đặt</p>
                                </div> */}
                            </div>
                        </Col>

                        <Col className="book__right" xs={22} sm={20} lg={10}>
                            <div className="info-film row">
                                <div className="info-img col-4">
                                    <img src={filmDetail?.hinhAnh} alt="" />
                                </div>
                                <div className="info-ve col-8">
                                    <p className="info-name">{filmDetail?.tenPhim}</p>
                                    <div className="ngaychieu d-flex">
                                        <p className="suatChieu__2D mr-3">2D</p>
                                        <p className="ngaygio">{moment(filmDetail.ngaykhoichieu).format('DD-MM-YYYY')} - {moment(filmDetail.ngaykhoichieu).format('hh:mm:ss')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info-rap row">
                                <div className="rap-img col-4">
                                    <img src="https://du-an-phim-80edb.web.app/assets/img/rap-demo.jpg" alt="" />
                                </div>
                                <div className="rap-name col-8">
                                    <p className="rap-title">{props.match.params.tenRap}</p>
                                    {/* <p className="small">{thongTinPhim?.diaChi}</p> */}
                                </div>
                            </div>
                            <div className="info-ghe row">
                                <div className="col-7">
                                    <p className="ghe-dat">Rạp {props.match.params.id} - Ghế Đang Đặt:</p>

                                    {sortBy(danhSachGheDangDat, ['stt']).map((ghedd, index) => {
                                        return <Fragment key={index} >
                                            <p className="ghedd-tenghe">{ghedd.tenGhe}
                                            </p>
                                            {(index + 1) % 4 == 0 ? <br /> : null}
                                        </Fragment>
                                    })}
                                    <div className="tong__tien d-flex">
                                        <p p className="tong__tien-left">Tổng tiền:</p>
                                        <p className="tong__tien-right">
                                            {danhSachGheDangDat.reduce((tongtien, ghe, index) => {
                                                return tongtien += ghe.giaVe
                                            }, 0).toLocaleString()} VND
                                        </p>
                                    </div>
                                </div>
                                <div className="thoigian col-5 text-center">
                                    <p className="my-1">Thời gian giữ ghế</p>
                                    <span className="time">{(counter) + " s"}</span>
                                </div>
                            </div>
                            <div>
                                <button
                                    disabled={disabled}
                                    data-toggle="modal"
                                    data-target="#modalConfirm"
                                    onClick={() => {
                                        if (danhSachGheDangDat.length === 0) {
                                            setDisabled(true)
                                        }
                                        else {
                                            setDisabled(false)
                                            Modal()
                                        }
                                    }} className="btn-muave">Mua Vé</button>
                            </div>
                        </Col>
                    </Row >
                </div >
            </div >
            <FooterHome />
        </Fragment >
    );
}






