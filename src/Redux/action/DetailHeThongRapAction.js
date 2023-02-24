import { quanLyRapService } from "../../Service/ServiceQLRap";
import { CHI_TIET_PHIM, LICH_CHIEU } from "./Type/QLRapType";
export const layDSRap = () => {
  const result = quanLyRapService.layDSHeThongRap();
  return result;
};

export const LayThongTinChiTietPhim = (id) => {
  return async (dispatch2) => {
    try {

      const result = await quanLyRapService.layThongTinPhim(id);
      // console.log(result);

      let action = {
        type: CHI_TIET_PHIM,
        filmDetail: result.data.content
      }

      dispatch2(action);
    } catch (error) {
      console.log(error);
    }
  }
}

export const layThongTinLichChieuPhim = (id) => {
  return async (dispatch2) => {
    try {
      const result = await quanLyRapService.layThongTinLichChieuPhim(id);
      // console.log("lịch chiếu",result.data.content);
      let action = {
        type: LICH_CHIEU,
        lichchieu: result.data.content
      }
      dispatch2(action)
    } catch (error) {
     console.log(error) 
    }
  }
}