import { CHI_TIET_PHIM, LICH_CHIEU } from "../action/Type/QLRapType";
import { DS_FILM } from "../action/Type/TypeActionFilm";
const initialState = {
  DSFilmSapChieu: [],
  DSFilmDangChieu: [],

  filmDetail: [],

  lichchieu: []
};


export const DSFilmRecucer = (state = initialState, action) => {
  switch (action.type) {
    // lấy danh sách Film
    case DS_FILM:
      {
        // danh sách đang chiếu
        state.DSFilmDangChieu = [
          ...action.arrayFilm.filter((film) => {
            return film.dangChieu === 1;
          }),
        ];
        // danh sách sắp chiếu
        state.DSFilmSapChieu = [
          ...action.arrayFilm.filter((film) => {
            return film.sapChieu === 1;
          }),
        ];
        // console.log("danh sách đang chiếu", state.DSFilmDangChieu);
        // console.log("danh sách sắp chiếu", state.DSFilmSapChieu);
      }
      return { ...state };

    case CHI_TIET_PHIM: 
      state.filmDetail = action.filmDetail;
      return{...state}
    case LICH_CHIEU:
      state.lichchieu = action.lichchieu;
      return{...state}
    default:
      return state;
  }
};
