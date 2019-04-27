import React, { Component } from 'react';
class List extends Component {
  render() {
    return (
      <div>
        这是列表页面 id:{this.props.match.params.id}
      </div>
    );
  }
}

export default List;
