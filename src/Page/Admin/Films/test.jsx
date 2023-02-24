import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { result } from 'lodash'

export default function Test() {
    const [result,setresult] = useState()

    useEffect(()=> {
        axios.get(`http://localhost:3000/api/QuanLyDoanhThu/lichChieu?maLichChieu=2`)
        .then(response => {
            setresult(response.data.content)
            
        })
        .catch(error => console.log(error))    
    },[])

    console.log(result.total)
  return (
    <div>a</div>
  )
}
