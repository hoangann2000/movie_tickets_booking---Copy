import Swal from 'sweetalert2/dist/sweetalert2.js'
import { QuanLyDatVeServices } from "../../Service/QLDatVeServices";
import { CHI_TIET_PHONG_VE, DAT_VE } from "./Type/QLDatVe";
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

