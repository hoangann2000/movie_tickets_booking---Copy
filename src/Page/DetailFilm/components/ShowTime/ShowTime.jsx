import { Tab } from '@headlessui/react'
import { Tabs } from 'antd'
import { values } from 'lodash'
import moment from 'moment'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Checkout from '../../../Checkout/Checkout'

const ShowTime = ({ film }) => {
    console.log("========",film)
    const combinedfilm = [];
    for(let i = 0;i<film.length; i++)  {
        const currentfilm = film[i];
        // kiểm tra xem mã lịch chiếu đã có trong currentLSDV chưa
        const index = combinedfilm.findIndex(t => t.maRap === currentfilm.maRap)
        if(index === -1) {
            // nếu chưa tồn tại, thêm object vào 
            const newfilm = {
                diaChi: currentfilm.diaChi,
                gia_thuong: currentfilm.gia_thuong,
                gia_vip: currentfilm.gia_vip,
                logo: currentfilm.logo,
                maRap: currentfilm.maRap,
                tenRap: currentfilm.tenRap,
                lichChieu: [{
                    maLichChieu: currentfilm.maLichChieu,
                    ngayGioChieu: currentfilm.ngayGioChieu
                  }]
            }
            combinedfilm.push(newfilm)
        }else {
            combinedfilm[index].lichChieu.push({
                maLichChieu: currentfilm.maLichChieu,
                    ngayGioChieu: currentfilm.ngayGioChieu
            })
        }
    }

    console.log("fix", combinedfilm)
    return (
        <div>
            <Tabs tabPosition='left' defaultActiveKey="1">
                {combinedfilm?.map((value, index) => {
                    return <Tabs.TabPane tab=
                        {<div style={{ color: 'black' }}>
                            <img className='mr-2' src={value.logo} width='50' height={50} alt="" />
                            {value.tenRap}
                        </div>}
                        key={index}>
                      <div className='mt-4'>
                      <div className='d-flex '>
                                    <img style={{ width: 50, height: 50 }} src={value.logo} alt="" />
                                    <div className='ml-2'>
                                        <span className='' style={{ fontSize: 17, fontWeight: 700 }}>{value.tenRap}</span>
                                        <p style={{ lineHeight: 2, color: 'gray' }}>{value.diaChi}</p>
                                    </div>
                                </div>
                                <div className='lich-chieu'>
                                    <div className="row">
                                        {value.lichChieu.map((malchieu)=> {
                                            return <NavLink to={`/checkout/${value.tenRap}/${malchieu.maLichChieu
                                            }`}  className='col-md-3 col-sm-4 col-6' key={index}>
                                            <p className='btn btn-time'>
                                                {moment(malchieu.ngayGioChieu).format('hh:mm A')}
                                            </p>
                                        </NavLink>
                                        })}
                                          
                                    </div>
                                </div>
                            </div>
                    </Tabs.TabPane>
                })}
            </Tabs>
        </div>
    )
}
export default ShowTime