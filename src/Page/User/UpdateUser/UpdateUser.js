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

    let { tai_khoan, maLoaiNguoiDung, ho_ten, so_dt, email } = props.UserLogin
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            tai_khoan: tai_khoan,
            mat_khau: '',
            email: email,
            so_dt: so_dt,
            ho_ten: ho_ten,
        },
        validationSchema: Yup.object({
            mat_khau: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/, "Mật khẩu tối thiếu từ 6 kí tự (Gồm ít nhất 1 chữ in hoa,1 kí tự,1 số) ").required("Mật khẩu không được để trống"),
            email: Yup.string().required("Mật khẩu không để trống").email("Email không đúng format"),
            so_dt: Yup.string().required("Số điện thoại không để trống"),
            ho_ten: Yup.string().required("Họ tên không để trống")
        }),
        onSubmit: values => {
            console.log("du lieu", values)
            dispatch(updateUser(props.UserLogin.tai_khoan,values))
        },
    });
    return (
        <div className='update'>
            <form onSubmit={formik.handleSubmit} className='form_update'>
                {/* <h1 className=''>Tài Khoản : {taiKhoan}</h1> */}

                 <div className="form-group">
                    <label htmlFor="mat_khau">Mật khẩu</label>
                    <input onChange={formik.handleChange}
                        value={formik.values.mat_khau} type="password" className="form-control" id="mat_khau" name='mat_khau' placeholder="Nhập mật khẩu mới" />
                    {formik.touched.mat_khau && formik.errors.mat_khau ? (
                        <div className="text-danger">{formik.errors.mat_khau}</div>
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
                    <label htmlFor="so_dt">Số Điện Thoại</label>
                    <input onChange={formik.handleChange}
                        value={formik.values.so_dt} type="text" className="form-control" id="so_dt" name='so_dt' placeholder="Nhập số điện thoại" />
                    {formik.touched.so_dt && formik.errors.so_dt ? (
                        <div className="text-danger">{formik.errors.so_dt}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="ho_ten">Họ Tên</label>
                    <input onChange={formik.handleChange}
                        value={formik.values.ho_ten} type="text" className="form-control" id="ho_ten" name='ho_ten' placeholder="Nhập họ và tên" />
                    {formik.touched.ho_ten && formik.errors.ho_ten ? (
                        <div className="text-danger">{formik.errors.ho_ten}</div>
                    ) : null}
                </div>  
                <button type='submit' className='btn btn-success d-block'>Cập Nhập</button>  
            </form>
        </div>
    )
}
