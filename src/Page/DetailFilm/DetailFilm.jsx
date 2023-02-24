import React, { Fragment, useEffect, useState } from 'react'
import "../DetailFilm/DetailFilm.scss"
import "../DetailFilm/circle.scss"
import { Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { LayThongTinChiTietPhim, layThongTinLichChieuPhim } from '../../Redux/action/DetailHeThongRapAction';
import TrailerFilmDetail from './TrailerFilmDetail';
import Description from './components/Description/Description';
import ShowTime from './components/ShowTime/ShowTime';
import MovieIntro from './components/MovieIntro/MovieIntro';
import Header from '../../Component/Header/Header';
import FooterHome from '../Home/Footer/FooterHome';
import Review from './components/Review/Review';
export default function DetailFilm(props) {
    const {filmDetail} = useSelector(state => state.DSFilmRecucer);
    const {lichchieu} = useSelector(state => state.DSFilmRecucer);
    const dispatch = useDispatch();
    useEffect(() => {
        let { id } = props.match.params;
        console.log(id)
       dispatch(LayThongTinChiTietPhim(id));
       dispatch(layThongTinLichChieuPhim(id));
    }, [])
    return (
        <Fragment>
            <Header />
            <div className='movieInfo'>
                <MovieIntro film={filmDetail} />
                <div className='movie__detail'>
                    <div className='detail__film'>
                        <Tabs defaultActiveKey="1" centered>
                            <Tabs.TabPane className='detail__lichchieu' tab="LỊCH CHIẾU" key="1" style={{ minHeight: 300 }}>
                                <ShowTime film={lichchieu} />
                            </Tabs.TabPane>
                            <Tabs.TabPane className='detail__thongtin row' tab="THÔNG TIN" key="2" style={{ minHeight: 300 }}>
                                <Description film={filmDetail} />
                            </Tabs.TabPane>
                            <Tabs.TabPane className='detail__danhgia' tab="ĐÁNH GIÁ" key="3" style={{ minHeight: 300 }}>
                                <Review/>
                            </Tabs.TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
            <FooterHome />
        </Fragment>

    )
}


