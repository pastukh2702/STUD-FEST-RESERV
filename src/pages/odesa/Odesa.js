import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export class Odesa extends Component {
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    <h2>ОДЕСА 06.11.19</h2>
                    <Link to="/odesa/stands">СТЕНДИ<br></br></Link>
                    <Link to='/stend'>Внутрішня схема стендів</Link>
                    <Link to='/odesa/training'>TRAINING ZONES</Link>
                    <Link to="/">назад</Link>
                </div>
            </div>
        )
    }
}

export default Odesa
