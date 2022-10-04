import { quanLyRapService } from "../../Service/ServiceQLRap";
import { CHI_TIET_PHIM } from "./Type/QLRapType";
export const layDSRap = () => {
  const result = quanLyRapService.layDSHeThongRap();
  return result;
};

export const LayThongTinChiTietPhim = (id) => {
  return async (dispatch2) => {
    try {

      const result = await quanLyRapService.layThongTinLichChieuPhim(id);
      console.log(result);

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