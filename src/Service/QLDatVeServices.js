import { GPOUP_ID } from "../Util/setting";
import ServicebaseAxios from "./ServicebaseAxios";

export class QLDatVeServices extends ServicebaseAxios {

    layChiTietPhongVe = (maLichChieu) => {
        return this.GET(
            `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
        )
    }

    datVe = (thongTinDatVe) => {
        return this.POST(
            `api/QuanLyDatVe/DatVe`, thongTinDatVe,
        )
    }

    taoLichChieu = (lichchieu) => {
        return this.POST(
            `/api/QuanLyDatVe/TaoLichChieu`, lichchieu
        )
    }
}

export const QuanLyDatVeServices = new QLDatVeServices();



