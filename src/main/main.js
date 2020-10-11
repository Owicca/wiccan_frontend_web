import React from 'react';
import {Route, Switch} from 'react-router-dom';

import IndexPage from './index_page.js';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.renderRoutes = this.renderRoutes.bind(this);
    this.routes = [];
  }

  renderRoutes(list) {
    list.map((list_item, idx) => {
      if((list_item.routes !== undefined) && list_item.routes.length > 0) {
        this.renderRoutes(list_item.routes);
      }
      this.routes.push(<Route key={idx} path={list_item.path} component={list_item.component} />);
    });

    return this.routes;
  }

  render() {
    let routes = this.renderRoutes(this.props.routes);

    return <Switch>
      {routes}
      <Route path="/" children={IndexPage} />
    </Switch>;
  }
}

export default Main;
