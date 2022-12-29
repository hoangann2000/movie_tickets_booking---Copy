import React, { Fragment } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "./FooterRight.scss";

export default function FooterRight() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "Tên người dùng chưa hợp lệ",
    types: {
      email: "Email chưa hợp lệ!",
    },
  };
  const onFinish = (values) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Bạn đã đăng ký thành công",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <Fragment>
      <div className="footer_right ">
        <h1 className="right_title">
          ĐĂNG KÍ THÔNG TIN ĐỂ NHẬN CẬP NHẬP <br />
          FILM NHANH NHẤT
        </h1>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input className="right_input" placeholder="Nhập họ tên của bạn" />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            rules={[
              {
                email: true,
                type: "email",
              },
            ]}
          >
            <Input className="right_input" placeholder="Nhập email của bạn" />
          </Form.Item>
          <Form.Item name={["user", "introduction"]}>
            <Input.TextArea
              className="right_input"
              placeholder="Nhập nội dung cần quan tâm"
            />
          </Form.Item>
          <Form.Item>
            <button type="submit" className="btn btn-successs">
              ĐĂNG KÍ THÔNG TIN
            </button>
          </Form.Item>
        </Form>
      </div>
    </Fragment>
  );
}
