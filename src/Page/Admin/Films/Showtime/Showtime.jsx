import React, { useState, useEffect } from "react";
import { Input, InputNumber, Select } from "antd";
import { Button, Form, DatePicker } from "antd";

import { useFormik } from "formik";
import moment from "moment";

import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { taoLichChieuAction } from "../../../../Redux/action/HeThongRapAction";

export default function ShowTime(props) {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            ma_phim: parseInt(props.match.params.id),
            ngay_gio_chieu: "",
            ma_rap: 2,
            gia_thuong: "",
            gia_vip: "",
        },
        onSubmit: async (values) => {
            console.log(values)
            dispatch(taoLichChieuAction(values))
            try {
                swal("Tạo lịch chiếu thành công!", "", "success");
            } catch (error) {
                swal(error.response.data.content, "", "error");
            }
        },
    });


    const handleChangeMaRap = (value) => {
        // formik.setFieldValue("maRap", value)
    }

    // const onOk = (values) => {
    //     formik.setFieldValue(
    //         "ngay_gio_chieu",
    //         moment(values).format("DD/MM/YYYY hh:mm:ss")
    //     );
    // };

    const onChangeDate = (values) => {
        formik.setFieldValue(
            "ngay_gio_chieu",
            moment(values).format("YYYY-MM-DD hh:mm")
        );
    };
    const onChangeInputNumber = (value) => {
        formik.setFieldValue("gia_thuong", value);
    };

    const onChangeInputNumber1 = (value) => {
        formik.setFieldValue("gia_vip", value);
    };

    return (
        <div className="container">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onSubmitCapture={formik.handleSubmit}
            >
                <h3 className="text-2xl">Tạo lịch chiếu </h3>

                <Form.Item label="Mã Phim">
                    <Input disabled name="ma_phim" 
                    // onChange={formik.handleChange} 
                    value={props.match.params.id} />
                </Form.Item>

                {/* <Form.Item label="Cụm rạp">
                    <Select
                        options={state.cumRapChieu?.map((cumRap, index) => ({
                            label: cumRap.tenCumRap,
                            value: cumRap.maCumRap,
                        }))}
                        onChange={handleChangeCumRap}
                        placeholder="Chọn cụm rạp"
                    >
                    </Select>
                </Form.Item> */}

                <Form.Item label="Tên rạp">
                    <Select onChange={handleChangeMaRap} placeholder="Tên Rạp">
                        {/* {convertSelectMaRap()} */}
                    </Select>
                </Form.Item>

                <Form.Item label="Ngày chiếu giờ chiếu">
                    <DatePicker
                        format="YYYY/MM/DD hh:mm"
                        showTime
                        onChange={onChangeDate}
                        // onOk={onOk}
                    />
                </Form.Item>
                <Form.Item label="Giá thường">
                    <InputNumber onChange={onChangeInputNumber} />
                </Form.Item>
                <Form.Item label="Giá vip">
                    <InputNumber onChange={onChangeInputNumber1} />
                </Form.Item>
                <Form.Item className="text-right">
                    <Button type="primary" style={{ fontSize: 20, fontWeight: 600, height: 50, borderRadius:20, backgroundColor: '#318009', color: "white" }} htmlType="submit">Tạo lịch chiếu</Button>
                </Form.Item>
            </Form>
        </div>
    );
}
