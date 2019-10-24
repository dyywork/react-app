import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes'
import App from '@/App'
import Home from '@/Tabs/Home'
import Person from '@/Tabs/Person'
import Tabs from '@/Tabs/Tabs'
import Login from '@/page/Login'
import BasicLayout from '@/layout/BasicLayout'

const routes = [
    {
        path: '/',
        redirect: 'login',
        component: BasicLayout,
        routes: [
            {
                path: '/login',
                component: Login,
            },
        ]
    },

    {
        path: '/app',
        redirect: 'home',
        component: App,
        routes: [
            {
                path: "/app/home",
                tab: true,
                component: Home,
            },
            {
                path: '/app/person',
                tab: true,
                component: Person
            },
            {
                path: '/app/tabs',
                component: Tabs,
            },
        ]
    },
];
console.log(window.location)
const pathArr = window.location.pathname.split('/')
const search = window.location.search
routes.forEach(item => {
    if (item.path.includes(pathArr[1])) {
        item.redirect = pathArr[2]
    }
    if (search) {
        console.log(search)
        item.routes.forEach(itemChild => {
            if (itemChild.path.includes(pathArr[3])) {
                itemChild.path = itemChild.path + search
            }
        })
    }
})
console.log(routes)
class RouterMap extends React.Component {
    render() {
        return (
            <BrowserRouter>
                {routes.map((route, i) => {
                    return <div key={i}>
                        <RouteWithSubRoutes key={i} {...route} />
                        {route.routes && route.routes.map((route1, j) => {
                            return <RouteWithSubRoutes key={j} {...route1} />
                        })}
                    </div>
                })}
            </BrowserRouter>
        )
    }
}

export default RouterMap
