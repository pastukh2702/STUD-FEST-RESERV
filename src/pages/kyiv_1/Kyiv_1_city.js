import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Kyiv_1_city extends Component {
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    <h2>КИЇВ 29.10.19</h2>
                    <Link to='/kyiv1/stands/1'>1 поверх</Link>
                    <Link to='/kyiv1/stands/2'>2 поверх</Link>
                    <Link to='/kyiv1/stands/3'>3 поверх</Link>
                    <Link to='/kyiv1'>назад</Link>
                </div>
            </div>
        )
    }
}

export default Kyiv_1_city
