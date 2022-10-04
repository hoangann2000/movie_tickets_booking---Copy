import React, { Component } from 'react'
import ServicebaseAxios from './ServicebaseAxios'

export class QLNDService extends ServicebaseAxios {
    dangKyND = (thongTinDangKy) => {
        return this.POST("/api/QuanLyNguoiDung/DangKy", thongTinDangKy);
    }
    dangNhapND = (thongTinDangNhap) => {
        return this.POST("/api/QuanLyNguoiDung/DangNhap", thongTinDangNhap);
    }
    capNhapND = (thongTinCapNhap) => {
        return this.PUT("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", thongTinCapNhap);
    }
    thongTinND = () => {
        return this.POST("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
    }
}
export const NDService = new QLNDService();
