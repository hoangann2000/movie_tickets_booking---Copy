import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { layDSBanner } from "../../../Redux/action/CarouselAction";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import "./CarouselHome.scss";
import BannerTrailer from "./BannerTrailer/BannerTrailer";

export default function CarouselHome() {
    const Trailer = [{ maTrailer: 102, trailer: "Fva_W_AF0IM" },
    { maTrailer: 103, trailer: "WWWDskI46Js" },
    { maTrailer: 104, trailer: "xU47nhruN-Q" },]
    let [showTrailer, setShowtrailer] = useState();
    let [closeTrailer, setCloseTrailer] = useState(false);
    let [playButton, setPlayButton] = useState(true);
    let dispacth = useDispatch();
    useEffect(() => {
        dispacth(layDSBanner());
    }, []);
    let { mangBanner } = useSelector((state) => {
        return state.bannerReducer;
    });

    const contentStyle = {
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    const renderBanner = () =>
        mangBanner.map((item, index) => {
            return (
                <div key={index}>
                    <div className="img__BG"
                        style={{ ...contentStyle, backgroundImage: `url(${item.hinh_anh})`, position: "relative" }}
                    >
                        <div className="img_play_carousel">
                            {playButton ? <button onClick={() => {
                                setCloseTrailer(true);
                                setPlayButton(false);
                                renderTrailer(item.ma_phim)
                            }}> <img
                                    className="img-fluid"
                                    style={{ height: "100px" }}
                                    src="../img/play.png"
                                    alt=""
                                /></button> : null}
                        </div>
                    </div>
                </div >
            );
        });
    const renderTrailer = (id) => {
        console.log(id)
        const okla = Trailer.filter((item) => {
            return item.maTrailer === id
        })
        setShowtrailer(okla)
    }
    return (
        <div className="carousel_BG">
            <div className="carousel_banner">
                <Carousel autoplay>{renderBanner()}</Carousel>
            </div>
            {closeTrailer ? (
                <div>
                    {<BannerTrailer prop={showTrailer} />}
                    <button
                        onClick={() => {
                            setCloseTrailer(false);
                            setPlayButton(true);
                        }}
                        className="close_trailer btn"
                    >
                        <i
                            style={{ color: "red", fontSize: "40px" }}
                            className="fa fa-times-circle"
                        ></i>
                    </button>
                </div>
            ) : null}
        </div>
    );
}
