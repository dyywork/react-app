import React from 'react';

class BasicLayout extends React.Component {
  componentDidMount() {
    const { location } = this.props
    if (location.pathname === '/') {
      // history.push('/login')
    }
  }
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}
export default BasicLayout