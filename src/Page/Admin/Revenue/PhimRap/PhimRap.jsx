import { SearchOutlined } from '@ant-design/icons'
import { Table,Button } from 'antd'
import Search from 'antd/lib/transfer/search'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from "antd";
import { DTMaRapAction } from '../../../../Redux/action/DoanhThuAction'
import { size } from 'lodash'

export default function PhimRap() {

  const dispatch = useDispatch()
  const {doanhthurap} = useSelector(state => state.DoanhThuReducer)
  const [value, setValue] = useState('');
  useEffect(() => {
    dispatch(DTMaRapAction())
  },[])
  console.log(doanhthurap)

  const sumPrice = doanhthurap
    ?.map((s) => s.gia_ve)
    ?.reduce((partialSum, a) => partialSum + a, 0);
console.log(sumPrice)


  const columns = [

    {
      title: "Tên Rạp",
      dataIndex: "ten_rap",
      sorter: (a, b) => {
          let tenPhimA = a.ten_rap.toLowerCase().trim();
          let tenPhimB = b.ten_rap.toLowerCase().trim();
          if (tenPhimA > tenPhimB) {
              return 1;
          }
          return -1;
      },
      sortDirections: ["descend", "ascend"],
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
    title: "Giá tiền",
    dataIndex: "gia_ve",
    sorter: (a,b) => a.gia_ve - b.gia_ve,
    sortDirections: ["descend", "ascend"],
    width: "15%",
  },
];
const data = doanhthurap;
const handleChange = (event) => {
  setValue(event.target.value);
};

const handleClick = () => {
  console.log(value)
  dispatch(DTMaRapAction(value))
};

  return (
    <div className='text-center'>
        <div className='body'>
        <h3 className="text-4xl text-center title">Quản lý Doanh Thu</h3>

        <input style={{fontSize: 20, marginRight: 20, width: 600, borderRadius: 10}} type="text" value={value} onChange={handleChange} />
        <button className='btn_search' onClick={handleClick}>Tìm Kiếm</button>
       <p className='text_total'>
  Tổng doanh thu : <span className='sum_price'>{sumPrice} VND</span>
</p>
          <Table
                columns={columns}
                dataSource={data}
            />
    </div>
    </div>
  )
}
