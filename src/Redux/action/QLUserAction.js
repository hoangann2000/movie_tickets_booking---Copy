import React from 'react'
import { NDService } from '../../Service/QLNDService';
import { CAP_NHAP, DANG_KY, DANG_NHAP, DANG_XUAT, THONG_TINND } from './Type/TypeND';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { history } from '../../App';
export const DangKyAction = (thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await NDService.dangKyND(thongTinND);
            if (result.data.statusCode == 200) {
                await dispatch2({
                    type: DANG_KY,
                    dataDK: result.data.content
                });
                await Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Bạn đã đăng ký thành công',
                    showConfirmButton: false,
                    timer: 1500
                });
                history.push("/login");
            }
        } catch (error) {
            console.log(error.response.data.content)
            alert(`${error.response.data.content}`)
        }
    }
}
export const DangNhapAction = (thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await NDService.dangNhapND(thongTinND);
            console.log(result, "đăng nhập")
            if (result.data.statusCode == 200) {
                await dispatch2({
                    type: DANG_NHAP,
                    dataDN: result.data.content
                });
                await Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Đăng nhập thành công',
                    showConfirmButton: false,
                    timer: 1500
                });
                if (result.maLoaiNguoiDung !== "KhachHang") {
                    history.push("/admin");
                } else {
                    history.push("/");
                }
            }
        } catch (error) {
            console.log(error)
            alert("tài khoản hoặc mật khẩu chưa chính xác")
        }
    }
}
export const updateUser = (thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await NDService.capNhapND(thongTinND);
            console.log(result)
            if (result.data.statusCode == 200) {
                await dispatch2({
                    type: CAP_NHAP,
                    dataCN: JSON.parse(result.config.data),
                    token: result.config.headers.Authorization
                });
                await Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Cập nhập thành công',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const thongTinNDAction = () => {
    return async (dispatch2) => {
        try {
            const result = await NDService.thongTinND();
            dispatch2({
                type: THONG_TINND,
                thongTinND: result.data.content,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

