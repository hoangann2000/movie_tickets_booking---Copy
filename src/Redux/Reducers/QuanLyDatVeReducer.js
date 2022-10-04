import { CHI_TIET_PHONG_VE, DAT_VE } from "../action/Type/QLDatVe"

const initialState = {
    chiTietPhongve: {},
    danhSachGheDangDat: [
    ],
    danhSachGheKhachDat: [{ maGhe: 86121 }, { maGhe: 86122 }],
}

export const QuanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHI_TIET_PHONG_VE:
            state.chiTietPhongve = action.chiTietPhongve
            return { ...state }
        case DAT_VE:
            // console.log(state.danhSachGheDangDat);

            let UpdateGhe = [...state.danhSachGheDangDat];
            //? tìm từng vị trí trong UpdateGhe xem có = GheDuocChonj không, nếu = thì xóa đi, nếu không trùng thì push vào ghế đang đặt. rồi return ghế đang đặt = updateghe
            let index = UpdateGhe.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDuocChon.maGhe)
            if (index != -1) {
                UpdateGhe.splice(index, 1)
            } else {
                UpdateGhe.push(action.gheDuocChon)
            }
            return { ...state, danhSachGheDangDat: UpdateGhe }
        default:
            return state
    }
}

