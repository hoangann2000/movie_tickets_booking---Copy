import {
    Form,
    Input,
    Radio,
    Select,
} from "antd";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GPOUP_ID } from "../../../../Util/setting";
import { Option } from "antd/lib/mentions";
import { capNhatThongTinNguoiDungAction, layThongTinTaiKhoanAdminAction, updateUser } from "../../../../Redux/action/QLUserAction";
// import { capNhatThongTinNguoiDungAction, layThongTinTaiKhoanAdminAction, themNguoiDungAction } from "../../../../redux/actions/QuanLyNguoiDungAction";

const EditUsers = (props) => {
    const [componentSize, setComponentSize] = useState("default");
    const { thongTinTaiKhoanAdmin } = useSelector(state => state.QLNDReducer)
    const dispatch = useDispatch();
    console.log(thongTinTaiKhoanAdmin);

    useEffect(() => {
        let { id } = props.match.params

        dispatch(layThongTinTaiKhoanAdminAction(id))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: thongTinTaiKhoanAdmin.taiKhoan,
            matKhau: thongTinTaiKhoanAdmin.matKhau,
            hoTen: thongTinTaiKhoanAdmin.hoTen,
            soDT: thongTinTaiKhoanAdmin.soDT,
            email: thongTinTaiKhoanAdmin.email,
            maLoaiNguoiDung: thongTinTaiKhoanAdmin.maLoaiNguoiDung,

            maNhom: GPOUP_ID,
        },

        onSubmit: (values) => {
            values.maNhom = GPOUP_ID;
            dispatch(capNhatThongTinNguoiDungAction(values));
        },
    });



    const handleChangeOption = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };


    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <h3>Thêm mới người dùng</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tài khoản">
                    <Input disabled name="taiKhoan" onChange={formik.handleChange} value={formik.values.taiKhoan} />
                </Form.Item>
                <Form.Item label="Mật khẩu">
                    <Input name="matKhau" onChange={formik.handleChange} value={formik.values.matKhau} />
                </Form.Item>
                <Form.Item label="Họ tên">
                    <Input name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen} />
                </Form.Item>

                <Form.Item label="SĐT">
                    <Input name="soDT" onChange={formik.handleChange} value={formik.values.soDT} />
                </Form.Item>

                <Form.Item label="Email">
                    <Input name="email" onChange={formik.handleChange} value={formik.values.email} />
                </Form.Item>

                <Form.Item label="Loại người dùng" >
                    <Select defaultValue="" onChange={handleChangeOption("maLoaiNguoiDung")} value={formik.values.maLoaiNguoiDung}>
                        <Select.Option value="KhachHang">Khách hàng</Select.Option>
                        <Select.Option value="QuanTri">Quản trị</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Tác vụ">
                    <button type="submit" className="bg-blue-300 text-white p-2">
                        Cập nhật
                    </button>
                </Form.Item>
            </Form>
        </>
    );
};

export default EditUsers;
