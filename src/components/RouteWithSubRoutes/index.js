/**
*@author: dingyongya
*@date : 2019/9/11
*@params:{
 *
 *}
 * 路由初始化
**/

import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";

class RouteWithSubRoutes extends Component {
    render() {
        const route = this.props;
        return (
            <Route
                path={route.path}
                render={props => (
                    route.redirect?<Redirect
                        path='/'
                        to={{
                            pathname: route.redirect,
                        }}
                    />: <route.component {...props} routes={route.routes} />
                )}
            />
        );
    }
}

export default RouteWithSubRoutes
