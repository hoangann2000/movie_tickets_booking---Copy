import React, { useState } from 'react'
import TrailerFilmDetail from '../../Page/DetailFilm/TrailerFilmDetail'

export default function Play({ trailer }) {
    // ? sử dụng thư viện React-youtube truyền vào tham số /ID 
    // ? trailer = link/ID => cắt ID để truyền biến vào TrailerFilmDetail
    let idtrailer = trailer.trailer?.slice(30, trailer.trailer.legnth)
    // console.log(idtrailer)

    const [hasid, setHasId] = useState('')
    const showTrailer = (id) => {
        if ((hasid.length > 0))
            return < TrailerFilmDetail id={id} />
    }
    return (
        <div>
            <div className='play__btn'>
                <button onClick={() => {
                    setHasId(idtrailer)
                }} className='fa fa-play'>
                </button>
            </div>
        </div>
    )
}
