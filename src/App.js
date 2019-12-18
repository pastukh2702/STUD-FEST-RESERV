import React, { Component } from 'react';
import Add from './pages/add/Add';
import Stend from './pages/stend/Stend';

import Kyiv_1 from './pages/kyiv_1/Kyiv_1';
import Kyiv_1_see from './pages/kyiv_1/Kyiv_1_see';
import Kyiv_1_city from './pages/kyiv_1/Kyiv_1_city';
import Kyiv_1_time from './pages/kyiv_1/Kyiv_1_time';
import Kyiv_1_1_stands from './pages/kyiv_1/Kyiv_1_1_stands';
import Kyiv_1_2_stands from './pages/kyiv_1/Kyiv_1_2_stands';
import Kyiv_1_3_stands from './pages/kyiv_1/Kyiv_1_3_stands';

import Kyiv_2 from './pages/kyiv_2/Kyiv_2';
import Kyiv_2_see from './pages/kyiv_2/Kyiv_2_see';
import Kyiv_2_city from './pages/kyiv_2/Kyiv_2_city';
import Kyiv_2_time from './pages/kyiv_2/Kyiv_2_time';
import Kyiv_2_1_stands from './pages/kyiv_2/Kyiv_2_1_stands';
import Kyiv_2_2_stands from './pages/kyiv_2/Kyiv_2_2_stands';

import Odesa from './pages/odesa/Odesa';
import Odesa_see from './pages/odesa/Odesa_see';
import Odesa_time from './pages/odesa/Odesa_time';
import Odesa_stands from './pages/odesa/Odesa_stands';

import Dnipro from './pages/dnipro/Dnipro';
import Dnipro_see from './pages/dnipro/Dnipro_see';
import Dnipro_time from './pages/dnipro/Dnipro_time';
import Dnipro_stands from './pages/dnipro/Dnipro_stands';

import Kharkiv from './pages/kharkiv/Kharkiv';
import Kharkiv_see from './pages/kharkiv/Kharkiv_see';
import Kharkiv_city from './pages/kharkiv/Kharkiv_city';
import Kharkiv_time from './pages/kharkiv/Kharkiv_time';
import Kharkiv_1_stands from './pages/kharkiv/Kharkiv_1_stands';
import Kharkiv_2_stands from './pages/kharkiv/Kharkiv_2_stands';

import Admin_login from './pages/admin/Admin_login';
import Home from './pages/home/Home';
import { HashRouter, Switch, Route } from 'react-router-dom';

import './App.css'

export class App extends Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/add' component={Add}/>
          <Route exact path='/stend' component={Stend}/>

          <Route exact path='/kyiv1' component={Kyiv_1}/>
          <Route exact path='/kyiv1/reg' component={Kyiv_1_see}/>
          <Route exact path='/kyiv1/stands' component={Kyiv_1_city}/>
          <Route exact path='/kyiv1/training' component={Kyiv_1_time}/>
          <Route exact path='/kyiv1/stands/1' component={Kyiv_1_1_stands}/>
          <Route exact path='/kyiv1/stands/2' component={Kyiv_1_2_stands}/>
          <Route exact path='/kyiv1/stands/3' component={Kyiv_1_3_stands}/>

          <Route exact path='/kyiv2' component={Kyiv_2}/>
          <Route exact path='/kyiv2/reg' component={Kyiv_2_see}/>
          <Route exact path='/kyiv2/stands' component={Kyiv_2_city}/>
          <Route exact path='/kyiv2/training' component={Kyiv_2_time}/>
          <Route exact path='/kyiv2/stands/1' component={Kyiv_2_1_stands}/>
          <Route exact path='/kyiv2/stands/2' component={Kyiv_2_2_stands}/>

          <Route exact path='/kharkiv' component={Kharkiv}/>
          <Route exact path='/kharkiv/reg' component={Kharkiv_see}/>
          <Route exact path='/kharkiv/stands' component={Kharkiv_city}/>
          <Route exact path='/kharkiv/training' component={Kharkiv_time}/>
          <Route exact path='/kharkiv/stands/1' component={Kharkiv_1_stands}/>
          <Route exact path='/kharkiv/stands/2' component={Kharkiv_2_stands}/>

          <Route exact path='/odesa' component={Odesa}/>
          <Route exact path='/odesa/reg' component={Odesa_see}/>
          <Route exact path='/odesa/stands' component={Odesa_stands}/>
          <Route exact path='/odesa/training' component={Odesa_time}/>

          <Route exact path='/dnipro' component={Dnipro}/>
          <Route exact path='/dnipro/reg' component={Dnipro_see}/>
          <Route exact path='/dnipro/stands' component={Dnipro_stands}/>
          <Route exact path='/dnipro/training' component={Dnipro_time}/>

          <Route exact path='/admin' component={Admin_login}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App

