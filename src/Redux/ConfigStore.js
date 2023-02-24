import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { bannerReducer } from "./Reducers/CarouselReducer";
import { DoanhThuReducer } from "./Reducers/DoanhThuReducer";
import { DSFilmRecucer } from "./Reducers/FilmReducer";
import { QLNDReducer } from "./Reducers/NDReducers";
import { HeThongDSRapReducer } from "./Reducers/QLRapreducers";
import { QuanLyDatVeReducer } from './Reducers/QuanLyDatVeReducer';
const rootReducers = combineReducers({
  // khai báo các reducer
  bannerReducer,
  DSFilmRecucer,
  HeThongDSRapReducer,
  QLNDReducer,
  QuanLyDatVeReducer,
  DoanhThuReducer,
});
export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
