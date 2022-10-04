import React from 'react'
import "./FooterLeft.scss"

export default function FooterLeft() {
    return (
        <div className='footer__left'>
            <div className='logo_movie'>
                <img className='logo_movie img-fluid' src="../img/logomovie.png" alt="" />
            </div>
            {/* <h1 className='contact_title'>CONTACT</h1> */}
            <div className='contact_item'>
                <ul>
                    <li>
                        <i className="fa fa-map-marker-alt"></i>
                        <span className='contact_title'>Quận Hải Châu.TP Đà Nẵng</span></li>
                    <li><i className="fab fa-instagram"></i>
                        <span className='contact_title'>https://www.instagram.com</span></li>
                    <li><i className="fab fa-whatsapp"></i>
                        <span className='contact_title'>+84 123456789</span></li>
                    <li><i className="fab fa-facebook-square"></i>
                        <span className='contact_title'>https://www.facebook.com</span></li>
                    <li><i className="fab fa-twitch"></i>
                        <span className='contact_title'>https://twitter.com</span></li>
                </ul>
            </div >
        </div >
    )
}
