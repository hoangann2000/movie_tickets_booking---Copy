import React from "react";
import { GPOUP_ID } from "../Util/setting";
import ServicebaseAxios from "./ServicebaseAxios";

export class QLFilmService extends ServicebaseAxios {
  layDSBanner = () => {
    return this.GET(`/api/QuanLyPhim/LayDanhSachBanner`);
  };
  layDSFilm = () => {
    return this.GET(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GPOUP_ID}`);
  };
}
export const quanLyFilmService = new QLFilmService();
