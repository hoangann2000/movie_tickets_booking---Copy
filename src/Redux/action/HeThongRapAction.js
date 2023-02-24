import { QuanLyDatVeServices } from "../../Service/QLDatVeServices";
import { quanLyRapService } from "../../Service/ServiceQLRap";
import { LAY_DS_RAP } from "./Type/QLRapType";
export const layDSRap = (dispatch) => {
  return async (dispatch2) => {
    try {
      // thành công
      const result = await quanLyRapService.layDSHeThongRap();
      // console.log("du lieu rap", result.data?.content);
      dispatch2({
        type: LAY_DS_RAP,
        array: result.data?.content,
      });
    } catch (error) {
      console.log(error)
    }
  };
};
export const layLogoRap = async (setState) => {
  try {
    // thành công
    const result = await quanLyRapService.layLogoRapFooter();
    setState(result.data?.content)
  } catch (error) {
    console.log(error)
  }
}

export const taoLichChieuAction = async (lichchieu) => {
  try {
    const result = await QuanLyDatVeServices.taoLichChieu(lichchieu)
    console.log(result);
  } catch (error) {
    console.log(error)
  }
}

// export const layCupRapAction = async() => {
//   try {
//     const reslut = await quanLyRapService.layCupRap()
//     console.log(reslut);
//   } catch (error) {
//     console.log(error);
//   }
// }

