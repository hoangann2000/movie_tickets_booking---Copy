import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../Component/Header/Header";
import FooterHome from "../../Page/Home/Footer/FooterHome";
import Home from "../../Page/Home/Home";
export const CheckoutTemplate = (props) => {
    let { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRouter) => {
        return <Fragment>
            <Header />
            <Component {...propsRouter} />
            <FooterHome />
        </Fragment>
    }} />

}