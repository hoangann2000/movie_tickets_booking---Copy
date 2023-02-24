import React from 'react'
import { NDService, QLNDService } from '../../Service/QLNDService';
import { CAP_NHAP, DANG_KY, DANG_NHAP, DANG_XUAT, SET_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_TAI_KHOAN_ADMIN, THONG_TINND } from './Type/TypeND';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { history } from '../../App';
import { quanLyFilmService } from '../../Service/QLFilmService';
export const DangKyAction = (thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await NDService.dangKyND(thongTinND);
            if (result.data.code == "OK200") {
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
            console.log(error.response.data.message)
            alert(error.response.data.message)
        }
    }
}
export const DangNhapAction = (thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await NDService.dangNhapND(thongTinND);
            // console.log(result.data.content.maLoaiNguoiDung)
            // console.log(result)
            if (result.data.code == "OK200") {
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
                if (result.data.content.loai_nguoi_dung !== "Khách Hàng") {
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
export const updateUser = (taikhoan,thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await NDService.capNhapND(taikhoan,thongTinND);
           
            if (result.data.code == "OK200") {
                await dispatch2({
                    type: CAP_NHAP,
                    dataCN: JSON.parse(result.config.data),
                    // token: result.config.headers.Authorization
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

export const capNhatThongTinNguoiDungAction = (id,values) => {
    return async () => {
        try {
            const result = await NDService.capNhatThongTinNguoiDung(
                id,values
            );
            console.log(result)
            await Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Cập nhập thành công',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            await Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Cập nhập thất bại',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
};

export const layThongTinTaiKhoanAdminAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await NDService.layThongTinTaiKhoanAdmin(
                taiKhoan
            );

            dispatch({
                type: SET_THONG_TIN_TAI_KHOAN_ADMIN,
                thongTinTaiKhoanAdmin: result.data.content,
            });
        } catch (error) { }
    };
};


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

export const layDanhSachNguoiDungAction = (taikhoan = "") => {
    return async (dispatch) => {
        try {
            const result = await NDService.layDanhSachNguoiDung(taikhoan);
            console.log(result)
            dispatch({
                type: SET_DANH_SACH_NGUOI_DUNG,
                arrUser: result.data.content,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const themNguoiDungAction = (values) => {
    return async (dispatch) => {
        try {
            const result = await NDService.themNguoiDung(values)
            // console.log(result)
            await Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Thêm người dùng thành công!',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log(error);
            await Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error.response.data.content,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
}

export const xoaNguoiDungAction = (taikhoan) => {
    return async (dispatch) => {
        try {
            const result = await NDService.xoaNguoiDung(taikhoan)
            await Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Xóa người dùng thành công!',
                showConfirmButton: false,
                timer: 1500
            });

            dispatch(layDanhSachNguoiDungAction());
        } catch (error) {
            console.log(error);
            await Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error.response.data.content,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
}
