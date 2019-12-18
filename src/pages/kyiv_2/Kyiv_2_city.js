import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Kyiv_2_city extends Component {
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    <h2>КИЇВ 30.10.19</h2>
                    <Link to='/kyiv2/stands/1'>1 поверх</Link>
                    <Link to='/kyiv2/stands/2'>2 поверх</Link>
                    <Link to='/kyiv2'>назад</Link>
                </div>
            </div>
        )
    }
}

export default Kyiv_2_city
