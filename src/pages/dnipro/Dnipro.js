import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export class Dnipro extends Component {
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    <h2>ДНІПРО 13.11.19</h2>
                    <Link to="/dnipro/stands">СТЕНДИ<br></br></Link>
                    <Link to='/stend'>Внутрішня схема стендів</Link>
                    <Link to='/dnipro/training'>TRAINING ZONES</Link>
                    <Link to="/">назад</Link>
                </div>
            </div>
        )
    }
}

export default Dnipro
