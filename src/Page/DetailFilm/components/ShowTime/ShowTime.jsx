import { Tab } from '@headlessui/react'
import { Tabs } from 'antd'
import { values } from 'lodash'
import moment from 'moment'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Checkout from '../../../Checkout/Checkout'

const ShowTime = ({ film }) => {
    // console.log("========",film)
    return (
        <div>
            <Tabs tabPosition='left' defaultActiveKey="1">
                {film?.map((value, index) => {
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
                                          <NavLink to={`/checkout/${value.tenRap}/${value.maLichChieu}`}  className='col-md-3 col-sm-4 col-6' key={index}>
                                                <p className='btn btn-time'>
                                                    {moment(value.ngayGioChieu).format('hh:mm A')}
                                                </p>
                                            </NavLink>
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