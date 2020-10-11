import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import Main from './main/main.js';
import Header from './header/header.js';
import Footer from './footer/footer.js';

import HostItemPage from './main/host/host_item_page.js';
import HostListPage from './main/host/host_list_page.js';
import DomainItemPage from './main/domain/domain_item_page.js';
import DomainListPage from './main/domain/domain_list_page.js';
import AnalysisItemPage from './main/analysis/analysis_item_page.js';
import AnalysisListPage from './main/analysis/analysis_list_page.js';
import Nav from './header/nav.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

  routes = [
    {
      name: 'Host',
      href: '/host/',
      path: '/host/',
      component: HostListPage,
      routes: [
        {
          name: 'HostItem',
          href: '/host/1/',
          path: '/host/:id/',
          component: HostItemPage,
        },
      ]
    },
    {
      name: 'Domain',
      href: '/domain/',
      path: '/domain/',
      component: DomainListPage,
      routes: [
        {
          name: 'DomainItem',
          href: '/domain/2/',
          path: '/domain/:id/',
          component: DomainItemPage,
        },
      ]
    },
    {
      name: 'Analysis',
      href: '/analysis/',
      path: '/analysis/',
      component: AnalysisListPage,
      routes: [
        {
          name: 'AnalysisItem',
          href: '/analysis/3/',
          path: '/analysis/:id/',
          component: AnalysisItemPage,
        },
      ]
    },
  ];

	render() {
		return <BrowserRouter>
        <Nav routes={this.routes}></Nav>
        <Header routes={this.routes}>
        </Header>
        <main>
          <Main routes={this.routes} >
          </Main>
        </main>
        <Footer>
        </Footer>
      </BrowserRouter>;
	}
}

export default App;
