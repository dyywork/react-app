import React from 'react'
import {Router, Route } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import App from '@/App'
import Home from '@/Tabs/Home'
import Person from '@/Tabs/Person'

const customHistory = createBrowserHistory();

class RouterMap extends React.Component {
    render () {
        return (
            <div>
                <Router history={customHistory}>
                    <App>
                        <Route path="/" exact component={Home} />
                        <Route path="/person" component={Person} />
                    </App>
                </Router>
            </div>
        )
    }
}

export default RouterMap
