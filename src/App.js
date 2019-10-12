import React from 'react';
import '@/App.css';
import TabsMenu from '@/components/TabsMenu'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
        }
    }

    componentDidMount() {
        const { routes } = this.props;
        let routesAll = [];
        routes.forEach(item => {
            if (item.tab) {
                routesAll.push(item.path);
            }
        });
        this.props.history.listen((res) => {
            this.setState({
                hidden: !routesAll.includes(res.pathname)
            });
        });
        this.setState({
            hidden: !routesAll.includes(this.props.location.pathname)
        })
    }

    render() {
        const { hidden } = this.state;
        return (
            <div className="App" >
                <TabsMenu hidden={hidden} {...this.props} />
            </div>
        );
    }
}
export default App;
