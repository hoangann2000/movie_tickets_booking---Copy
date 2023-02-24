import React, { useEffect, useState } from "react";
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
// import {
//     capNhatPhimUploadAction,
//     layThongTinPhimAction,
// } from "../../../../redux/actions/QuanLyPhimAction";

import { capNhatPhimUploadAction, DSFilm } from "../../../../Redux/action/FilmAction";
import { GPOUP_ID } from "../../../../Util/setting";
import { LayThongTinChiTietPhim } from "../../../../Redux/action/DetailHeThongRapAction";

const Edit = (props) => {
    const [componentSize, setComponentSize] = useState("default");
    const { filmDetail } = useSelector((state) => state.DSFilmRecucer);


    const [imgSrc, setImgSrc] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params;

        dispatch(LayThongTinChiTietPhim(id));
    }, []);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: filmDetail.maPhim,
            dangChieu: filmDetail.dangChieu,
            sapChieu: filmDetail.sapChieu,
            hot: filmDetail.hot,
            tenPhim: filmDetail.tenPhim,
            trailer: filmDetail.trailer,
            moTa: filmDetail.moTa,
            ngayKhoiChieu: filmDetail.ngayKhoiChieu,
            danhGia: filmDetail.danhGia,
            hinhAnh: null,
        },

        onSubmit: (values) => {
            console.log(values)
            let formData = new FormData();
            for (let key in values) {
                if (key !== "hinhAnh") {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append("File", values.hinhAnh, values.hinhAnh.name);
                    }
                }
            }

            dispatch(capNhatPhimUploadAction(props.match.params.id,formData));
        },
    });

    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value);
        formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
    };

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleChangeFile = async (e) => {
        let file = e.target.files[0];
        if (
            file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/gif" ||
            file.type === "image/png"
        ) {
            await formik.setFieldValue("hinhAnh", file);

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result);
            };
        }
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
                <h3>Thêm mới phim</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim">
                    <Input
                        name="tenPhim"
                        onChange={formik.handleChange}
                        value={formik.values.tenPhim}
                    />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input
                        name="trailer"
                        onChange={formik.handleChange}
                        value={formik.values.trailer}
                    />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input
                        name="moTa"
                        onChange={formik.handleChange}
                        value={formik.values.moTa}
                    />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker
                        format="DD/MM/YYYY"
                        onChange={handleChangeDatePicker}
                        value={moment(formik.values.ngayKhoiChieu)}
                    />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch
                        onChange={handleChangeSwitch("dangChieu")}
                        checked={formik.values.dangChieu}
                    />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch
                        onChange={handleChangeSwitch("sapChieu")}
                        checked={formik.values.sapChieu}
                    />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch
                        onChange={handleChangeSwitch("hot")}
                        checked={formik.values.hot}
                    />
                </Form.Item>

                <Form.Item label="Số sao">
                    <InputNumber
                        onChange={handleChangeInputNumber("danhGia")}
                        value={formik.values.danhGia}
                    />
                </Form.Item>

                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeFile} />
                    <img
                        style={{ width: 150, height: 150 }}
                        src={imgSrc === "" ? filmDetail.hinhAnh : imgSrc}
                        alt="..."
                    />
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

export default Edit;
