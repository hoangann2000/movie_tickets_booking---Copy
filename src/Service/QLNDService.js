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
    capNhapND = (thongTinCapNhap) => {
        return this.PUT("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", thongTinCapNhap);
    }
    thongTinND = () => {
        return this.POST("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
    }
    layDanhSachNguoiDung = (taikhoan = "") => {
        if (taikhoan.trim() != "") {
            return this.GET(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GPOUP_ID}&tuKhoa=${taikhoan}`)
        }
        return this.GET(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GPOUP_ID}`)
    }
    themNguoiDung = (values) => {
        return this.POST(`/api/QuanLyNguoiDung/ThemNguoiDung`, values)
    }
    xoaNguoiDung = (taikhoan) => {
        return this.DELETE(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`)
    }

    layThongTinTaiKhoanAdmin = (taikhoan) => {
        return this.POST(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taikhoan}`)
    }

    capNhatThongTinNguoiDung = (values) => {
        return this.POST(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, values);
    };
}
export const NDService = new QLNDService();
