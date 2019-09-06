import React from 'react';
import '@/App.css';
import { Button } from 'antd-mobile'

class App extends React.Component{
  render() {
    return (
        <div className="App">
            {this.props.children}
            <Button>按钮</Button>
        </div>
    );
  }
}

export default App;
