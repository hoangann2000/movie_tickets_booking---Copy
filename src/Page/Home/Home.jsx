import React from 'react'
import CarouselHome from './CarouselHome/CarouselHome'
import CarouselListFilm from './CarouselListFilm/CarouselListFilm'
import { useSelector } from 'react-redux'
import DetailRap from './DetailCumRapPhim/DSHeThongRap';
import NewsFeedFilm from './NewsFeedFilm/NewsFeedFilm';


export default function Home() {
    let { DSHeThongRap } = useSelector((state) => state.HeThongDSRapReducer);
    return (
        <div>
            <CarouselHome />
            <CarouselListFilm />
            <DetailRap DSHeThongRap={DSHeThongRap} />
            <NewsFeedFilm />
        </div>
    )
}
