import { GPOUP_ID } from "../Util/setting";
import ServicebaseAxios from "./ServicebaseAxios";

export class QLRapService extends ServicebaseAxios {
  layDSHeThongRap = () => {
    return this.GET(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GPOUP_ID}`
    );
  };
  // layThongTinLichChieuPhim = (maPhim) => {
  //   return this.GET(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}&MaNhom=${GPOUP_ID}`);
  // };
  layThongTinLichChieuPhim = (maPhim) => {
    return this.GET(`/api/QuanLyRap/LayThongTinLichChieu?maPhim=${maPhim}`);
  };
  layThongTinPhim = (maPhim) => {
    return this.GET(`/api/QuanLyPhim/LayThongTinPhim/${maPhim}`)
  }
  layLogoRapFooter = () => {
    return this.GET(`/api/QuanLyRap/LayThongTinHeThongRap`)
  }
  layThongTinCumRap = (maHeThongRap) => {
    return this.GET(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  };

  layCupRap = () => {
    return this.GET(
      `/api/cumrap`
    )
  }

}
export const quanLyRapService = new QLRapService();
