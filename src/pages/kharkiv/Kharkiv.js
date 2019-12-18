import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export class Kharkiv extends Component {
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    <h2>ХАРКІВ 20.11.19</h2>
                    <Link to='/kharkiv/stands'>СТЕНДИ</Link>
                    <Link to='/stend'>Внутрішня схема стендів</Link>
                    <Link to='/kharkiv/training'>TRAINING ZONES</Link>
                    <Link to='/'>назад</Link>
                </div>
            </div>
        )
    }
}

export default Kharkiv
