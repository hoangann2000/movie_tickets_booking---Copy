import { UserOutlined, FileOutlined, LoginOutlined, DollarOutlined, CalendarOutlined, HomeOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Breadcrumb, Layout, Menu, Tabs } from "antd";
import { Fragment, useEffect, useState } from "react";
import { Link, NavLink, Redirect, Route } from "react-router-dom";
import { history } from "../../App";
// import { TOKEN, USER_LOGIN } from "../../ulti/setting";
import _ from "lodash";
import swal from "sweetalert";
import { TOKEN, TOKEN_ND, USER_ND } from "../../Util/setting";
import "./adminTemplate.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {
  const { Component, ...restProps } = props;
  const { UserLogin } = useSelector((state) => state.QLNDReducer);

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_ND)) {
    // swal("Bạn không có quyền truy cập vào trang này!", "", "warning");
    return <Redirect to="/" />;
  }

  if (UserLogin.loai_nguoi_dung !== "QuanTri") {
    // swal("Bạn không có quyền truy cập vào trang này!", "", "warning");
    return <Redirect to="/" />;
  }

  const operations = (
    <Fragment>
      {!_.isEmpty(UserLogin) ? (
        <Fragment>
          <div className="flex items-center justify-between px-6">
            <div className=" flex" style={{ color: "#f14c24" }}>
              {" "}
              <button
                disabled
                onClick={() => {
                  history.push("/profile");
                }}
                className=" font-bold"
              >
                Admin: {UserLogin.hoTen}{" "}
              </button>{" "}
            </div>
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );

  const operations1 = (
    <button
      onClick={() => {
        localStorage.removeItem(USER_ND);
        localStorage.removeItem(TOKEN);
        localStorage.removeItem("accessToken");
        history.push("/");
        window.location.reload();
      }}
      className="text-800"
    >
      Sign out
    </button>
  );
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }} className="bgr">
              <div className="flex flex-col bgr items-center">
                <Link to={"/admin"}>
                  <img src="../../img/logomovie.png" className="logo" />
                </Link>
                <div className="bgr">{operations}</div>
                <Sider
                  collapsible
                  collapsed={collapsed}
                  onCollapse={onCollapse}
                  className="mt-3"
                >
                  <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    <SubMenu key="sub2" icon={<UserOutlined />} title="Tài Khoản">
                      <Menu.Item key="1" icon={<UserOutlined />}>
                        <NavLink to="/admin/users">Tài Khoản</NavLink>
                      </Menu.Item>
                      <Menu.Item key="2" icon={<UserOutlined />}>
                        <NavLink to="/admin/users/adduser">Thêm Tài Khoản</NavLink>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub1" icon={<FileOutlined />} title="Phim">
                      <Menu.Item key="10" icon={<FileOutlined />}>
                        <NavLink to="/admin/films">Phim</NavLink>
                      </Menu.Item>
                      <Menu.Item key="11" icon={<FileOutlined />}>
                        <NavLink to="/admin/films/addnew">Thêm Phim</NavLink>
                      </Menu.Item>
                      {/* <Menu.Item key="12" icon={<CalendarOutlined />}>
                        <NavLink to="/admin/films/calender">Rạp phim</NavLink>
                      </Menu.Item> */}
                    </SubMenu>
                    <SubMenu key="sub3" icon={<DollarOutlined />} title="Doanh Thu">
                      <Menu.Item key="3" icon={<CalendarOutlined />}>
                        <NavLink to="/admin/revenue">Theo ngày</NavLink>
                      </Menu.Item>
                      <Menu.Item key="4" icon={<HomeOutlined />}>
                        <NavLink to="/admin/doanhthurap">Theo rạp</NavLink>
                      </Menu.Item>
                      <Menu.Item key="5" icon={<SortDescendingOutlined />}>
                        <NavLink to="/admin/doanhthuphim">Theo phim</NavLink>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub3"
                      icon={<LoginOutlined />}
                      title={operations1}
                    ></SubMenu>
                  </Menu>
                </Sider>
              </div>
              <Layout className="site-layout">
                <Content style={{ margin: "0 16px" }}>
                  {/* <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb> */}
                  <div
                    className="site-layout-background"
                    style={{ padding: 24 }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
