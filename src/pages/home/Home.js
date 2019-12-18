import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export class Home extends Component {
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    <h2>"Impulse Smart" <br></br> Система бронювання  стендів та тренінг зон</h2>
                    <Link to='/kyiv1'>КИЇВ - 29.10.19</Link>
                    <Link to='/kyiv2'>КИЇВ - 30.10.19</Link>
                    <Link to='/odesa'>ОДЕСА - 06.11.19</Link>
                    <Link to='/dnipro'>ДНІПРО - 13.11.19</Link>
                    <Link to='/kharkiv'>ХАРКІВ - 20.11.19</Link>
                    {/* <Link to='/admin'>Admin</Link> */}
                </div>
            </div>
        )
    }
}

export default Home
