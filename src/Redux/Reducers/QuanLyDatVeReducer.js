import { CHI_TIET_PHONG_VE, DAT_VE, LAY_GHE, LAY_GHE_DA_DAT, LICH_SU } from "../action/Type/QLDatVe"

const initialState = {
    laychitietghe: [],
    layghedadat: [],
    chiTietPhongve: [],
    lichsudatve: [],
    danhSachGheDangDat: [
    ],
    danhSachGheKhachDat: [{ maGhe: 86121 }, { maGhe: 86122 }],
}

export const QuanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_GHE: 
            state.laychitietghe = action.laychitietghe;
            return {...state}
        case LAY_GHE_DA_DAT: 
            state.layghedadat = action.layghedadat;
            return {...state}
        case CHI_TIET_PHONG_VE:
            state.chiTietPhongve = action.chiTietPhongve
            return { ...state }
        case DAT_VE:
            // console.log("đang đặt",state.danhSachGheDangDat);

            let UpdateGhe = [...state.danhSachGheDangDat];
            //? tìm từng vị trí trong UpdateGhe xem có = GheDuocChonj không, nếu = thì xóa đi, nếu không trùng thì push vào ghế đang đặt. rồi return ghế đang đặt = updateghe
            let index = UpdateGhe.findIndex(gheDangDat => gheDangDat.ma_ghe === action.gheDuocChon.ma_ghe)
            if (index != -1) {
                UpdateGhe.splice(index, 1)
            } else {
                UpdateGhe.push(action.gheDuocChon)
            }
            return { ...state, danhSachGheDangDat: UpdateGhe }
        case LICH_SU:
            state.lichsudatve = action.lichsudatve;
            return {...state}
        default:
            return state
    }
}

