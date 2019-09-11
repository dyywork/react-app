import React, {Component} from 'react';

class PageContentWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height:window.screen.height-95 +'px',
        }
    }
    render() {
        const {height} = this.state;
        return (
            <div style={{height:height, overflowY:'scroll'}}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContentWrapper
