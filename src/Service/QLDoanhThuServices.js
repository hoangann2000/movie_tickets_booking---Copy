import React, { Component } from 'react'
import ServicebaseAxios from './ServicebaseAxios'

export default class QLDoanhThuServices extends ServicebaseAxios {
    DTMaLichChieu = (malichchieu) => {
        return this.GET(
            `/api/QuanLyDoanhThu/lichChieu?maLichChieu=${malichchieu}`
        )
    }

    DTNgayGio = (startD="",endD="") => {
        return this.GET(
            `/api/QuanLyDoanhThu/theoNgay?startDt=${startD}&endDt${endD}}`
        )
    }

    DTMaRap = (tenrap= "") => {
        if(tenrap.trim() != "") {
            return this.GET(
                `/api/QuanLyDoanhThu/rap?ten_rap=${tenrap}`
            )
        }
        return this.GET(
            `/api/QuanLyDoanhThu/rap?ten_rap`
        )
    }

    DTMaPhim = (tenphim="") => {
        if(tenphim.trim() != "") {
            return this.GET(
                `/api/QuanLyDoanhThu/phim?tenPhim=${tenphim}`
            )
        }
        return this.GET(
            `/api/QuanLyDoanhThu/phim?tenPhim`
        )
        
    }
}

export const quanLyDoanhThuServices = new QLDoanhThuServices();
