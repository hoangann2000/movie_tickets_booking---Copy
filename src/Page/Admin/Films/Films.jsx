import React, { Fragment, useEffect } from "react";
import { Button, Table } from "antd";
import {
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
    CalendarOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import { DSFilm, xoaPhimAction } from "../../../Redux/action/FilmAction";
const { Search } = Input;

export default function Films() {
    const { DSFilmDangChieu, DSFilmSapChieu } = useSelector((state) => state.DSFilmRecucer);

    const arrFilm = DSFilmDangChieu.concat(DSFilmSapChieu)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DSFilm());
    }, []);

    const columns = [
        {
            title: "Mã phim",
            dataIndex: "maPhim",
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ["descend", "ascend"],
            width: "15%",
        },

        {
            title: "Hình ảnh",
            dataIndex: "hinhAnh",
            render: (text, film, index) => {
                return (
                    <Fragment>
                        <img
                            src={film.hinhAnh}
                            alt={film.tenPhim}
                            width={50}
                            height={50}
                            onError={(e) => {
                                e.target.onError = null;
                                e.target.src = `https://picsum.photos/id/${index}/50/50`;
                            }}
                        />
                    </Fragment>
                );
            },
            width: "15%",
        },
        {
            title: "Tên phim",
            dataIndex: "tenPhim",
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
            title: "Mô tả phim",
            dataIndex: "moTa",
            sorter: (a, b) => {
                let moTaA = a.moTa.toLowerCase().trim();
                let moTaB = b.moTa.toLowerCase().trim();
                if (moTaA > moTaB) {
                    return 1;
                }
                return -1;
            },
            render: (text, film) => {
                return (
                    <Fragment>
                        {film.moTa.length > 50
                            ? film.moTa.substr(0, 50) + " ..."
                            : film.moTa}
                    </Fragment>
                );
            },
            sortDirections: ["descend", "ascend"],
            width: "25%",
        },
        {
            title: "Hành động",
            dataIndex: "maPhim",

            render: (text, film) => {
                return (
                    <Fragment>
                        <NavLink
                            key={1}
                            className="mr-2 text-2xl "
                            to={`/admin/films/edit/${film.maPhim}`}
                        >
                            {" "}
                            <EditOutlined style={{ color: "blue" }} />{" "}
                        </NavLink>
                        <span
                            style={{ cursor: "pointer" }}
                            key={2}
                            className="text-2xl"
                            onClick={() => {
                                //Gọi action xóa
                                if (
                                    window.confirm("Bạn có chắc muốn xóa phim " + film.tenPhim)
                                ) {
                                    dispatch(xoaPhimAction(film.maPhim));
                                }
                            }}
                        >
                            <DeleteOutlined style={{ color: "red" }} />
                        </span>

                        <NavLink
                            key={3}
                            className="mr-2 text-2xl "
                            to={`/admin/films/showtime/${film.maPhim}`}
                        >
                            {" "}
                            <CalendarOutlined style={{ color: "green" }} />{" "}
                        </NavLink>
                    </Fragment>
                );
            },
            sortDirections: ["descend", "ascend"],
            width: "25%",
        },
    ];

    const data = arrFilm;

    const onSearch = (value) => {
        //gọi api layDanhSachPhim
        dispatch(DSFilm(value));
    };

    const onChange = () => { };

    return (
        <div>
            <h3 className="text-4xl">Quản lý Phim</h3>
            <Button
                className="mb-5"
                onClick={() => {
                    history.push("/admin/films/addnew");
                }}
            >
                Thêm phim
            </Button>
            <Search
                className="mb-5"
                placeholder="Input search text"
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            ></Search>

            <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
                rowKey={"maPhim"}
            />
        </div>
    );
}
