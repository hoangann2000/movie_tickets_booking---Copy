import { Table } from 'antd'
import useSelection from 'antd/lib/table/hooks/useSelection'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DTMaPhimAction, DTMaRapAction } from '../../../../Redux/action/DoanhThuAction'

export default function TenPhim() {
    const dispatch = useDispatch()
    const {doanhthutheophim} = useSelector(state => state.DoanhThuReducer);
    const [value, setValue] = useState('');
    useEffect(() => {
        dispatch(DTMaPhimAction())
      },[])

      const sumPrice = doanhthutheophim
      ?.map((s) => s.gia_ve)
      ?.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sumPrice)
  console.log(doanhthutheophim)
  const columns = [
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
      title: "Tài khoản",
      dataIndex: "tai_khoan",
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
    title: "Giá tiền",
    dataIndex: "gia_ve",
    sorter: (a,b) => a.gia_ve - b.gia_ve,
    sortDirections: ["descend", "ascend"],
    width: "15%",
  },
];
const data = doanhthutheophim;
const handleChange = (event) => {
    setValue(event.target.value);
  };
  
const handleClick = () => {
    console.log(value)
    dispatch(DTMaPhimAction(value))
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
