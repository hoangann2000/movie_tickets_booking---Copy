import React, { Component } from 'react'
import ServicebaseAxios from './ServicebaseAxios'
import { GPOUP_ID } from '../Util/setting';

export class QLNDService extends ServicebaseAxios {
    dangKyND = (thongTinDangKy) => {
        return this.POST("/api/QuanLyNguoiDung/DangKy", thongTinDangKy);
    }
    dangNhapND = (thongTinDangNhap) => {
        return this.POST("/api/QuanLyNguoiDung/DangNhap", thongTinDangNhap);
    }
    capNhapND = (taikhoan,thongTinCapNhap) => {
        return this.PUT(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung/${taikhoan}`, thongTinCapNhap);
    }
    thongTinND = () => {
        return this.POST("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
    }
    layDanhSachNguoiDung = (taikhoan = "") => {
        if (taikhoan.trim() != "") {
            return this.GET(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?email=${taikhoan}`)
        }
        return this.GET(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung`)
    }
    themNguoiDung = (values) => {
        return this.POST(`/api/QuanLyNguoiDung/ThemNguoiDung`, values)
    }
    xoaNguoiDung = (taikhoan) => {
        return this.DELETE(`/api/QuanLyNguoiDung/XoaNguoiDung/${taikhoan}`)
    }

    layThongTinTaiKhoanAdmin = (taikhoan) => {
        return this.GET(`/api/QuanLyNguoiDung/ThongTinTaiKhoan/${taikhoan}`)
    }

    capNhatThongTinNguoiDung = (id,values) => {
        return this.PUT(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung/${id}`, values);
    };
}
export const NDService = new QLNDService();
