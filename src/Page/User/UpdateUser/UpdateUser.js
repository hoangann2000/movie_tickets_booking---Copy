import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { GPOUP_ID, TOKEN_ND } from '../../../Util/setting';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../Redux/action/QLUserAction';
import "./UpdateUser.scss"
export default function UpdateUser(props) {
    // console.log(props.UserLogin, "lấy thành công")
    // console.log(localStorage.getItem(TOKEN_ND))

    let { taiKhoan, maLoaiNguoiDung, hoTen, soDT, email } = props.UserLogin
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: taiKhoan,
            matKhau: '',
            email: email,
            maLoaiNguoiDung: "khachHang",
            soDT: soDT,
            hoTen: hoTen,
            maNhom: GPOUP_ID,
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("Tài khoản không được để trống").min(6, "Tối thiểu đủ 6 kí tự").max(20, "Tối đa 10 kí tự").matches(/^[A-Z a-z]+$/, "Tài khoản không được có kí tự đặc biệt"),
            matKhau: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/, "Mật khẩu tối thiếu từ 6 kí tự (Gồm ít nhất 1 chữ in hoa,1 kí tự,1 số) ").required("Mật khẩu không được để trống"),
            email: Yup.string().required("Mật khẩu không để trống").email("Email không đúng format"),
            soDT: Yup.string().required("Số điện thoại không để trống"),
            hoTen: Yup.string().required("Họ tên không để trống")
        }),
        onSubmit: values => {
            dispatch(updateUser(values))

        },
    });
    return (
        <div className='update'>
            <form onSubmit={formik.handleSubmit} className='form_update'>
                {/* <h1 className=''>Tài Khoản : {taiKhoan}</h1> */}
                <div className="form-group">
                    <label htmlFor="matKhau">Mật khẩu</label>
                    <input onChange={formik.handleChange}
                        value={formik.values.matKhau} type="password" className="form-control" id="matKhau" name='matKhau' placeholder="Nhập mật khẩu mới" />
                    {formik.touched.matKhau && formik.errors.matKhau ? (
                        <div className="text-danger">{formik.errors.matKhau}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={formik.handleChange}
                        value={formik.values.email} type="email" className="form-control" id="email" name='email' placeholder="Nhập Email" />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="soDT">Số Điện Thoại</label>
                    <input onChange={formik.handleChange}
                        value={formik.values.soDT} type="text" className="form-control" id="soDT" name='soDT' placeholder="Nhập số điện thoại" />
                    {formik.touched.soDT && formik.errors.soDT ? (
                        <div className="text-danger">{formik.errors.soDT}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="hoTen">Họ Tên</label>
                    <input onChange={formik.handleChange}
                        value={formik.values.hoTen} type="text" className="form-control" id="hoTen" name='hoTen' placeholder="Nhập họ và tên" />
                    {formik.touched.hoTen && formik.errors.hoTen ? (
                        <div className="text-danger">{formik.errors.hoTen}</div>
                    ) : null}
                </div>
                <button type='submit' className='btn btn-success d-block'>Cập Nhập</button>
            </form>
        </div>
    )
}
