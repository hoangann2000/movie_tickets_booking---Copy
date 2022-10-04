import React, { Fragment } from 'react'
import FooterCenter from './FooterCenter/FooterCenter'
import "./FooterHome.scss"
import FooterLeft from './FooterLeft/FooterLeft'
import FooterRight from './FooterRight/FooterRight'

export default function FooterHome() {
    return (
        <Fragment>
            <div className='Footer__home' id='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-4"><FooterLeft /></div>
                        <div className="col-4"><FooterCenter /></div>
                        <div className="col-4"><FooterRight /></div>
                    </div>
                </div>
            </div>
            <div className="FooterBottom">
                <h1>Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.Hotline: 1900 6017<br /> COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</h1>
            </div>
        </Fragment>
    )
}
