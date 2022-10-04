import React, { Fragment } from 'react'
import Header from '../../../Component/Header/Header'
import FooterHome from '../../Home/Footer/FooterHome'
import './InfoAccount.scss'
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import InfoUser from '../InfoUser/InfoUser';
import UpdateUser from '../UpdateUser/UpdateUser';
import InfoTicketBooked from '../InfoTicketBooked/InfoTicketBooked';

export default function InfoAccount() {
    const onChange = (key) => {
        console.log(key);
    };

    const { UserLogin } = useSelector(state => state.QLNDReducer)
    console.log('ok', UserLogin)
    return (
        <Fragment>
            <Header />
            <div className='info__account'>
                <div className='account__content myContainer'>
                    <Tabs className='text-white' tabPosition='left' defaultActiveKey="1">
                        <Tabs.TabPane className='bg' tab="THÔNG TIN TÀI KHOẢN" key="1" style={{ minHeight: 500 }}>
                            <InfoUser UserLogin={UserLogin} />
                        </Tabs.TabPane>
                        <Tabs.TabPane className='bg' tab="CẬP NHẬT TÀI KHOẢN" key="2" style={{ minHeight: 500 }}>
                            <UpdateUser UserLogin={UserLogin} />
                        </Tabs.TabPane>
                        <Tabs.TabPane className='bg' tab="LỊCH SỬ ĐẶT VÉ" key="3">
                            <InfoTicketBooked />
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>
            <FooterHome />
        </Fragment>
    )
}
