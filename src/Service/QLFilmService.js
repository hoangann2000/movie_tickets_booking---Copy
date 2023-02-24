import React from "react";
import { GPOUP_ID } from "../Util/setting";
import ServicebaseAxios from "./ServicebaseAxios";

export class QLFilmService extends ServicebaseAxios {
  layDSBanner = () => {
    return this.GET(`/api/QuanLyPhim/LayDanhSachBanner`);
  };
  layDSFilm = (tenphim = "") => {
    if (tenphim.trim() != "") {
      return this.GET(`/api/QuanLyPhim/LayDanhSachPhim?&tenPhim=${tenphim}`);
    }
    return this.GET(`/api/QuanLyPhim/LayDanhSachPhim`);
  };

  
  themPhimUploadHinh = (formData) => {
    return this.POST(`/api/QuanLyPhim`, formData);
  }
  capNhatPhimUpload = (id,formData) => {
    return this.PUT(`/api/QuanLyPhim/CapNhatPhimUpload/${id}`, formData);
  };
  xoaPhim = (maPhim) => {
    return this.DELETE(`/api/QuanLyPhim/XoaPhim/${maPhim}`);
  };
}
export const quanLyFilmService = new QLFilmService();
