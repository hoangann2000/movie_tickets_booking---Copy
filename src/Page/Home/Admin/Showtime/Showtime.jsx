import React, { useState, useEffect } from "react";
import { InputNumber, Select } from "antd";
import { Button, Form, DatePicker } from "antd";

import { useFormik } from "formik";
import moment from "moment";

import swal from "sweetalert";
import { QuanLyDatVeServices } from "../../../../Service/QLDatVeServices";
import { quanLyRapService } from "../../../../Service/ServiceQLRap";

export default function ShowTime(props) {
    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: "",
            maRap: "",
            giaVe: "",
        },
        onSubmit: async (values) => {
            console.log(values)
            try {
                const result = await QuanLyDatVeServices.taoLichChieu(values);

                swal("Tạo lịch chiếu thành công!", "", "success");
            } catch (error) {
                swal(error.response.data.content, "", "error");
                // console.log(error.response.data.content);
            }
        },
    });

    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: [],
        danhSachRap: [],
    });

    useEffect(() => {
        async function fetchData() {
            try {
                let result = await quanLyRapService.layLogoRapFooter();
                // console.log('=================', result)
                setState({
                    ...state,
                    heThongRapChieu: result.data.content,
                });
            } catch (error) { }
        }
        fetchData();
    }, []);

    const handleChangeHeThongRap = async (value) => {
        // console.log(value);
        try {
            let result = await quanLyRapService.layThongTinCumRap(value);
            // console.log("=======================", result.data.content);
            setState({
                ...state,
                cumRapChieu: result.data.content,
            });
        } catch (error) {
            // console.log(error)
        }
    };

    const handleChangeCumRap = (value) => {
        // console.log(value);
        let filterCupRap = state.cumRapChieu.filter((item) => {
            return item.maCumRap === value
        })

        let listDanhSachRap = filterCupRap.map((item, index) => {
            return item.danhSachRap.map((values, index) => {
                return values
            })
        })

        setState({
            ...state,
            danhSachRap: listDanhSachRap
        })
        formik.setFieldValue("maRap", value);
    };

    const handleChangeMaRap = (value) => {
        // formik.setFieldValue("maRap", value)
    }

    const onOk = (values) => {
        formik.setFieldValue(
            "ngayChieuGioChieu",
            moment(values).format("DD/MM/YYYY hh:mm:ss")
        );
    };

    const onChangeDate = (values) => {
        formik.setFieldValue(
            "ngayChieuGioChieu",
            moment(values).format("DD/MM/YYYY hh:mm:ss")
        );
    };
    const onChangeInputNumber = (value) => {
        formik.setFieldValue("giaVe", value);
    };
    const convertSelectHTR = () => {
        return state.heThongRapChieu?.map((htr, index) => {
            // console.log(htr);
            return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
        });
    };
    const convertSelectMaRap = () => {
        return state.danhSachRap.map((values, index) => {
            return values.map((maRap, i) => {
                // console.log(maRap)
                return <Select.Option key={i} value={maRap.maRap}>
                    {maRap.tenRap}
                </Select.Option>
            })
        })
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

                <Form.Item label="Hệ thống rạp">
                    <Select
                        options={convertSelectHTR()}
                        onChange={handleChangeHeThongRap}
                        placeholder="Chọn hệ thống rạp"
                    />
                </Form.Item>

                <Form.Item label="Cụm rạp">
                    <Select
                        options={state.cumRapChieu?.map((cumRap, index) => ({
                            label: cumRap.tenCumRap,
                            value: cumRap.maCumRap,
                        }))}
                        onChange={handleChangeCumRap}
                        placeholder="Chọn cụm rạp"
                    >
                    </Select>
                </Form.Item>

                <Form.Item label="Tên rạp">
                    <Select onChange={handleChangeMaRap} placeholder="Tên Rạp">
                        {convertSelectMaRap()}
                    </Select>
                </Form.Item>

                <Form.Item label="Ngày chiếu giờ chiếu">
                    <DatePicker
                        format="DD/MM/YYYY hh:mm:ss"
                        showTime
                        onChange={onChangeDate}
                        onOk={onOk}
                    />
                </Form.Item>
                <Form.Item label="Giá vé">
                    <InputNumber onChange={onChangeInputNumber} />
                </Form.Item>
                <Form.Item className="text-right">
                    <Button type="primary" style={{ fontSize: 20, fontWeight: 600, height: 40 }} htmlType="submit">Tạo lịch chiếu</Button>
                </Form.Item>
            </Form>
        </div>
    );
}
