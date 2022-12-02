import React from "react";
import { GPOUP_ID } from "../Util/setting";
import ServicebaseAxios from "./ServicebaseAxios";

export class QLFilmService extends ServicebaseAxios {
  layDSBanner = () => {
    return this.GET(`/api/QuanLyPhim/LayDanhSachBanner`);
  };
  layDSFilm = (tenphim = "") => {
    if (tenphim.trim() != "") {
      return this.GET(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GPOUP_ID}&tenPhim=${tenphim}`);
    }
    return this.GET(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GPOUP_ID}`);
  };

  themPhimUploadHinh = (formData) => {
    return this.POST(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  }
  capNhatPhimUpload = (formData) => {
    return this.POST(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };
  xoaPhim = (maPhim) => {
    return this.DELETE(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
}
export const quanLyFilmService = new QLFilmService();
