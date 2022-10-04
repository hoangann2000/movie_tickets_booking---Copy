import React, { Fragment } from "react"
import { Route } from "react-router-dom"
import FooterHome from "../../Page/Home/Footer/FooterHome";
export const Usertemplate = (props) => {
    let { Component, ...restProps } = props
    return <Route {...restProps} render={(PropsRouter) => {
        return <Fragment>
            <Component {...PropsRouter} />
            {/* <FooterHome /> */}
        </Fragment>
    }} />
}

