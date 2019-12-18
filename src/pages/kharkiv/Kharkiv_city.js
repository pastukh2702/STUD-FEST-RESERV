import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Kharkiv_city extends Component {
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    <h2>ХАРКІВ 20.11.19</h2>
                    <Link to='/kharkiv/stands/1'>1 поверх</Link>
                    <Link to='/kharkiv/stands/2'>2 поверх</Link>
                    <Link to='/kharkiv'>назад</Link>
                </div>
            </div>
        )
    }
}

export default Kharkiv_city
