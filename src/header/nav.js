import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';


class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.renderHrefs = this.renderHrefs.bind(this);
  }

  renderHrefs(list) {
    return list.map((list_item, idx) => {
      let routes = [
        <li key={0}><h3><NavLink to={list_item.href} activeClassName="active">{list_item.name}</NavLink></h3></li>
      ];

      if(list_item.routes && list_item.routes.length > 0) {
        routes.push(<li key={1}><ul>{this.renderHrefs(list_item.routes)}</ul></li>);
      }

      return routes;
    });
  }

  render() {
    return <nav id="side-nav">
      <ul>{this.renderHrefs(this.props.routes)}</ul>
    </nav>;
  }
}

export default Nav;
