import { quanLyFilmService } from "../../Service/QLFilmService";
import { DS_BANER } from "./Type/CarouselType";
export const layDSBanner = () => {
  return async (dispatch2) => {
    try {
      // xử lý thành công
      const result = await quanLyFilmService.layDSBanner();
      // console.log(result.data.content);
      let action = {
        type: DS_BANER,
        arrayBanner: result.data.content,
      };
      dispatch2(action);
    } catch (error) {
      // thất bại
      console.log(error);
    }
  };
};
