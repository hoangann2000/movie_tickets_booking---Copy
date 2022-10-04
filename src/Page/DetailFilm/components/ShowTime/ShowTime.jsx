import { Tabs } from 'antd'
import moment from 'moment'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ShowTime = ({ film }) => {
    return (
        <div>
            <Tabs tabPosition='left' defaultActiveKey="1">
                {film.heThongRapChieu?.map((value, index) => {
                    return <Tabs.TabPane tab=
                        {<div style={{ color: 'black' }}>
                            <img className='mr-2' src={value.logo} width='50' height={50} alt="" />
                            {value.tenHeThongRap}
                        </div>}
                        key={index}>

                        {value.cumRapChieu?.map((cumRap, index) => {
                            return <div className='mt-4' key={index}>
                                <div className='d-flex '>
                                    <img style={{ width: 50, height: 50 }} src={cumRap.hinhAnh} alt="" />
                                    <div className='ml-2'>
                                        <span className='' style={{ fontSize: 17, fontWeight: 700 }}>{cumRap.tenCumRap}</span>
                                        <p style={{ lineHeight: 2, color: 'gray' }}>{cumRap.diaChi}</p>
                                    </div>
                                </div>
                                <div className='lich-chieu'>
                                    <div className="row">
                                        {cumRap.lichChieuPhim?.slice(0, 10).map((lichchieu, index) => {
                                            return <NavLink to={`/checkout/${lichchieu.maLichChieu}`} className='col-md-3 col-sm-4 col-6' key={index}>
                                                <p className='btn btn-time'>
                                                    {moment(lichchieu.ngayChieuGioChieu).format('hh:mm A')}
                                                </p>
                                            </NavLink>
                                        })}
                                    </div>
                                </div>
                            </div>
                        })}
                    </Tabs.TabPane>
                })}
            </Tabs>
        </div>
    )
}
export default ShowTime