import { SearchOutlined } from '@ant-design/icons';
import { DatePicker, Form, Input, Table } from 'antd';
import axios from 'axios'
import { Formik, useFormik } from 'formik';
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DTTheoNgayAction } from '../../../../Redux/action/DoanhThuAction';
import "../DateTime/DateTime.scss"

export default function DateTime() {
  // const [giaVe, setGiaVe] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(DTTheoNgayAction())
  },[])

  // setGiaVe(doanhthungay.total.giaVe)
  //   console.log('====',giaVe)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { doanhthungay } = useSelector((state) => state.DoanhThuReducer);
  console.log("doanhthu",doanhthungay)


const handleStartDateChange = (date, dateString) => {
  setStartDate(dateString);
};

const handleEndDateChange = (date, dateString) => {
  setEndDate(dateString);
};

const handleButtonClick = () => {
  dispatch(DTTheoNgayAction(startDate,endDate))
}
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "tai_khoan",
      sorter: (a,b) => a.tai_khoan - b.tai_khoan,
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Họ Tên",
      dataIndex: "ho_ten",
      // sorter: (a,b) => a.ho_ten - b.ho_ten,
      // sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Tên phim",
      dataIndex: "ten_phim",
      sorter: (a, b) => {
          let tenPhimA = a.tenPhim.toLowerCase().trim();
          let tenPhimB = b.tenPhim.toLowerCase().trim();
          if (tenPhimA > tenPhimB) {
              return 1;
          }
          return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
  },
  {
    title: "Ghế",
    dataIndex: "ten_ghe",
    // sorter: (a,b) => a.ho_ten - b.ho_ten,
    // sortDirections: ["descend", "ascend"],
    width: "15%",
  },
  {
    title: "Giá tiền",
    dataIndex: "gia_ve",
    sorter: (a,b) => a.gia_ve - b.gia_ve,
    sortDirections: ["descend", "ascend"],
    width: "15%",
  },
    // {
    //     title: "Hình ảnh",
    //     dataIndex: "hinhAnh",
    //     render: (text, film, index) => {
    //         return (
    //             <Fragment>
    //                 <img
    //                     src={film.hinh_anh}
                    
    //                     width={50}
    //                     height={50}
    //                     onError={(e) => {
    //                         e.target.onError = null;
    //                         e.target.src = `https://picsum.photos/id/${index}/50/50`;
    //                     }}
    //                 />
    //             </Fragment>
    //         );
    //     },
    //     width: "15%",
    // },
];
const data = doanhthungay;

const sumPrice = doanhthungay
    ?.map((s) => s.gia_ve)
    ?.reduce((partialSum, a) => partialSum + a, 0);
console.log(sumPrice)
  return (
    <div className='body'>
       <h3 className="text-4xl text-center title">Quản lý Doanh Thu</h3>
       <Form className='d-flex align-items-center justify-center' >
              <Form.Item className='textlbl' label="Ngày bắt đầu">
                    <DatePicker
                        format="YYYY/MM/DD"
                        showTime
                        onChange={handleStartDateChange}
                    />
                </Form.Item>
                <Form.Item className='textlbl' label="Ngày kết thúc">
                    <DatePicker
                        format="YYYY/MM/DD"
                        showTime
                        onChange={handleEndDateChange}
                    />
                </Form.Item>
                 <button type="submit"  onClick={handleButtonClick} className="btn_search">
                        Tìm Kiếm
                  </button>
       </Form>
       <p className='text_total'>
  Tổng doanh thu từ ngày {startDate} - {endDate}: <span className='sum_price'>{sumPrice} VND</span>
</p>
          <Table
                columns={columns}
                dataSource={data}
                // onChange={onChange}
                // rowKey={"tai_khoan"}
            />
    </div>
  )
}
