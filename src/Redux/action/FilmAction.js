import { DS_FILM } from "./Type/TypeActionFilm";
import { quanLyFilmService } from "../../Service/QLFilmService";
import swal from "sweetalert";
// lấy danh sách phim
export const DSFilm = (tenphim = "") => {
  return async (dispatch2) => {
    try {
      // xử lý thành công
      const result = await quanLyFilmService.layDSFilm(tenphim);
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

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch2) => {
    try {
      let result = await quanLyFilmService.themPhimUploadHinh(formData);
      swal("Thêm phim thành công!", "", "success");
    } catch (error) {
      console.log(error)
    }
  }
}

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch2) => {
    try {
      let result = await quanLyFilmService.capNhatPhimUpload(formData);
      swal("Cập nhật phim thành công!", "", "success");
    } catch (error) {
      swal("Cập nhật phim thành công!", "", "error");
    }
  }
}

export const xoaPhimAction = (id) => {
  return async (dispatch2) => {
    try {
      let result = await quanLyFilmService.xoaPhim(id);
      swal("Xóa phim thành công!", "", "success");
      dispatch2(DSFilm());
    } catch (error) {
      swal(error.content, "", "error");
    }
  }
}