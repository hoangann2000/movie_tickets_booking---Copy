import { DT_Ngay, DT_Phim, DT_Rap } from "../action/Type/TypeActionFilm"

const initialState = {
    doanhthungay: [],
    doanhthurap: [],
    doanhthutheophim: [],
}

export const DoanhThuReducer = (state = initialState, action) => {
  switch (action.type) {

  case DT_Ngay:
    state.doanhthungay = action.doanhthungay;
    return { ...state}
  case DT_Rap: 
    state.doanhthurap = action.doanhthurap;
    return {...state}
  case DT_Phim: 
    state.doanhthutheophim = action.doanhthutheophim;
    return {...state}
  default:
    return state
  }
}
