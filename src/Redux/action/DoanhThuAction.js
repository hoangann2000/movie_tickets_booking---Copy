import { quanLyDoanhThuServices } from "../../Service/QLDoanhThuServices"
import { DT_Ngay, DT_Phim, DT_Rap } from "./Type/TypeActionFilm";

export const DTTheoNgayAction = (startD="",endD="") => {
    return async (dispatch2) => {
        try {
            const result = await quanLyDoanhThuServices.DTNgayGio(startD,endD);
            console.log(result)
            dispatch2({
                type:DT_Ngay,
                doanhthungay: result.data.content.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const DTMaRapAction = (marap) => {
    return async (dispatch2) => {
        try {
            const result = await quanLyDoanhThuServices.DTMaRap(marap)
            console.log(result.data.content)
            // console.log(marap)
            dispatch2({
                type: DT_Rap,
                doanhthurap: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const DTMaPhimAction =(tenphim) => {
    return async (dispatch2) => {
        try {
            const result = await quanLyDoanhThuServices.DTMaPhim(tenphim)
            console.log('====',result)
            dispatch2({
                type: DT_Phim,
                doanhthutheophim: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}