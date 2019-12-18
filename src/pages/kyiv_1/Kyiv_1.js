import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export class Kyiv_1 extends Component {
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    <h2>КИЇВ 29.10.19</h2>
                    <Link to='/kyiv1/stands'>СТЕНДИ</Link>
                    <Link to='/stend'>Внутрішня схема стендів</Link>
                    <Link to='/kyiv1/training'>TRAINING ZONES</Link>
                    <Link to='/'>назад</Link>
                </div>
            </div>
        )
    }
}

export default Kyiv_1
