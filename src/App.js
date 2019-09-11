import React from 'react';
import '@/App.css';
import TabsMenu from '@/components/TabsMenu'
import { withRouter } from 'react-router-dom'
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes'

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            hidden: false,
        }
    }

    componentDidMount() {
        const {routes} = this.props;
        let routesAll =[];
        routes.forEach(item => {
            routesAll.push(item.path);
        });
        this.props.history.listen((res)=> {
            this.setState({
                hidden: !routesAll.includes(res.pathname)
            });
        });
        this.setState({
            hidden: !routesAll.includes(this.props.location.pathname)
        })
    }

    render() {
        const {routes} = this.props;
        const {hidden} = this.state;
        return (
            <div className="App" >
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
                <TabsMenu hidden={hidden} {...this.props} />
            </div>
        );
  }
}
export default withRouter(App);
