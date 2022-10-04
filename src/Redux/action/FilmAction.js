import { DS_FILM } from "./Type/TypeActionFilm";
import { quanLyFilmService } from "../../Service/QLFilmService";
// lấy danh sách phim
export const DSFilm = () => {
  return async (dispatch2) => {
    try {
      // xử lý thành công
      const result = await quanLyFilmService.layDSFilm();
      // console.log(result)
      // console.log("thành công lấy phim", result.data.content);
      let action = {
        type: DS_FILM,
        arrayFilm: result.data.content,
      };
      dispatch2(action);
    } catch (error) {
      // thất bại
      console.log(error);
    }
  };
};
// DSFilm()();
