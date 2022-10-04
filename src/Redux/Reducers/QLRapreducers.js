import { LAY_DS_RAP } from "../action/Type/QLRapType";

const initialState = {
  DSHeThongRap: [],
};

export const HeThongDSRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DS_RAP:
      state.DSHeThongRap = action.array;
      //   console.log("thành công", state.DSHeThongRap);
      return { ...state };
    default:
      return state;
  }
};
