import Swal from 'sweetalert2/dist/sweetalert2.js'
import { QuanLyDatVeServices } from "../../Service/QLDatVeServices";
import { CHI_TIET_PHONG_VE, DAT_VE, LAY_GHE, LAY_GHE_DA_DAT, LICH_SU } from "./Type/QLDatVe";
import { history } from '../../App';



export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch2) => {
        try {
            const result = await QuanLyDatVeServices.layChiTietPhongVe(maLichChieu);
            // console.log(result)
            dispatch2({
                type: CHI_TIET_PHONG_VE,
                chiTietPhongve: result.data.content
            });

        } catch (error) {
            console.log(error);
        }
    };
};


export const datVeAction = (thongTinDatVe) => {
    return async (dispatch2) => {
        try {
            const result = await QuanLyDatVeServices.datVe(thongTinDatVe);
            // console.log(result)
        } catch (error) {
            console.log(error);
        }
    }
}

export const layGheTheoRapAction = (maRap) => {
    return async (dispatch2) => {
        try {
           const result = await QuanLyDatVeServices.layGheTheoRap(maRap);
           console.log(result)
           dispatch2({
            type: LAY_GHE,
            laychitietghe: result.data.content
           })
        } catch (error) {
            console.log(error)
        }
    }
}

export const layGheDaDatAction = (malichchieu) =>  { 
    return async(dispatch2) => {
        try {
            const result = await QuanLyDatVeServices.layGheDaDat(malichchieu)
            dispatch2({
                type: LAY_GHE_DA_DAT,
                layghedadat: result.data.content
               })
            // console.log(result.data.content)
        } catch (error) {
            console.log(error)
        }
    }
}

export const layLichSuDatVe = (taiKhoan) => {
    return async(dispatch2) => {
        try {
            const result = await QuanLyDatVeServices.layLichSuDatVe(taiKhoan)
            console.log(result)
            dispatch2({
                type: LICH_SU,
                lichsudatve: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}
