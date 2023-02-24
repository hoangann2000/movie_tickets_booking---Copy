import { TOKEN_ND, USER_ND } from "../../Util/setting"
import { CAP_NHAP, DANG_KY, DANG_NHAP, DANG_XUAT, SET_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_TAI_KHOAN_ADMIN, THONG_TINND } from "../action/Type/TypeND"
import { history } from '../../App';
let user = null
if (localStorage.getItem(USER_ND)) {
    user = JSON.parse(localStorage.getItem(USER_ND))
}
const initialState = {
    UserLogin: user,
    NDRegister: {},
    thongTinND: {},
    arrUserDefault: [],

    thongTinNguoiDung: {},
    thongTinTaiKhoanAdmin: {},
}
console.log(initialState.UserLogin, "user")
export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_KY:
            state.NDRegister = action.dataDK
            return { ...state }
        case DANG_NHAP:
            state.UserLogin = action.dataDN
            localStorage.setItem(USER_ND, JSON.stringify(action.dataDN))
            localStorage.setItem(TOKEN_ND, action.dataDN.accessToken)
            return { ...state }
        case DANG_XUAT:
            state.UserLogin = action.dataDX
            localStorage.removeItem(USER_ND)
            localStorage.removeItem(TOKEN_ND)
            return { ...state }
        case CAP_NHAP:
            state.UserLogin = action.dataCN
            localStorage.setItem(USER_ND, JSON.stringify(action.dataCN))
            // localStorage.setItem(TOKEN_ND, action.token.slice(8))
            // console.log(state, "thông tin đã cập nhập")
            return { ...state }
        case THONG_TINND:
            state.thongTinND = action.thongTinND
            return { ...state }
        case SET_DANH_SACH_NGUOI_DUNG:
            state.arrUserDefault = action.arrUser
            return { ...state }
        case SET_THONG_TIN_TAI_KHOAN_ADMIN:
            state.thongTinTaiKhoanAdmin = action.thongTinTaiKhoanAdmin
            return { ...state }
        default:
            return state
    }
}
