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
            `/api/QuanLyDatVe/DatVe`, {danhSachVe:thongTinDatVe}
        )
    }

    taoLichChieu = (lichchieu) => {
        return this.POST(
            `/api/QuanLyDatVe/TaoLichChieu`, lichchieu
        )
    }

    layGheTheoRap = (maRap) => {
        return this.GET(
          `/api/QuanLyRap/layGheTheoRap?maRap=${maRap}`
        )
      }

    layGheDaDat = (malichchieu) => {
        return this.GET(
            `/api/QuanLyDatVe/LayVeDaDat?malichchieu=${malichchieu}`,
        )
    }

    layLichSuDatVe = (taiKhoan) => {
        return this.GET(
            `/api/lichSuPhim?taiKhoan=${taiKhoan}`
        )
    }
}

export const QuanLyDatVeServices = new QLDatVeServices();



