import React from 'react';

class BasicLayout extends React.Component {
  componentDidMount() {
    console.log(1)
    const { history, location } = this.props
    console.log(location)
    if (location.pathname === '/') {
      history.push('/login')
    }
  }
  render() {
    return (
      <div></div>
    )
  }
}
export default BasicLayout