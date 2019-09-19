import React from 'react'
import {BrowserRouter  } from 'react-router-dom'
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes'
import App from '@/App'
import Home from '@/Tabs/Home'
import Person from '@/Tabs/Person'
import Tabs from '@/Tabs/Tabs'
import Login from '@/page/Login'

const routes = [
    {
      path:'/',
        redirect: '/login'
    },
    {
        path:'/login',
        component: Login,
    },
    {
        path: '/app',
        component: App,
        routes:[
            {
                path: "/app/home",
                component: Home,
            },
            {
                path:'/app/person',
                component:Person
            },
        ]
    },
    {
        path: '/tabs',
        component: Tabs,
    },

];

class RouterMap extends React.Component {
    render () {
        return (
            <BrowserRouter>
                {routes.map((route, i) => {
                    return <RouteWithSubRoutes key={i} {...route} />
                })}
            </BrowserRouter>
        )
    }
}

export default RouterMap
