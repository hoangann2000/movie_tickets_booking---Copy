import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Switch,
} from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { GPOUP_ID } from "../../../../Util/setting";
import { themPhimUploadHinhAction } from "../../../../Redux/action/FilmAction";

const AddNew = () => {
    const [componentSize, setComponentSize] = useState("default");
    const [imgSrc, setImgSrc] = useState("");
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            tenPhim: "",
            trailer: "",
            moTa: "",
            ngayKhoiChieu: "",
            dangChieu: 0,
            sapChieu: 0,
            hot: 0,
            danhGia: 0,
            hinhAnh: {},
        },
        onSubmit: (values) => {
            console.log(values);
            let formData = new FormData();
            for (let key in values) {
                if (key !== "hinhAnh") {
                    formData.append(key, values[key]);
                } else {
                    formData.append("File", values.hinhAnh, values.hinhAnh.name);
                }
            }
            dispatch(themPhimUploadHinhAction(formData));
        },
    });

    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format("YYYY/MM/DD");
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

    const handleChangeFile = (e) => {
        let file = e.target.files[0];
        if (
            file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/gif" ||
            file.type === "image/png"
        ) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result);
            };
            formik.setFieldValue("hinhAnh", file);
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
                <h3>Th??m m???i phim</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="T??n phim">
                    <Input name="tenPhim" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="M?? t???">
                    <Input name="moTa" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Ng??y kh???i chi???u">
                    <DatePicker format={"YYYY/MM/DD"} onChange={handleChangeDatePicker} />
                </Form.Item>
                <Form.Item label="??ang chi???u" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch("dangChieu")} />
                </Form.Item>
                <Form.Item label="S???p chi???u" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch("sapChieu")} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch("hot")} />
                </Form.Item>

                <Form.Item label="S??? sao">
                    <InputNumber
                        onChange={handleChangeInputNumber("danhGia")}
                        min={1}
                        max={10}
                    />
                </Form.Item>

                <Form.Item label="H??nh ???nh">
                    <input
                        type="file"
                        onChange={handleChangeFile}
                        accept="image/png , image/jpeg , image/gif , image/png"
                    />

                    <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
                </Form.Item>
                <Form.Item label="T??c v???">
                    <button type="submit" className="bg-blue-700 text-white p-2">
                        Th??m phim
                    </button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddNew;