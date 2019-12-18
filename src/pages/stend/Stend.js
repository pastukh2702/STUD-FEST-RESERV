import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'


export class Stend extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="map-s">
                    
                    <div className="menu-wrapper-2">
                        <div className="menu-2">
                            <h2>ВНУТРІШНЯ СХЕМА СТЕНДІВ</h2>
                            <Link onClick={()=>{window.history.back()}}>назад</Link>
                        </div>
                    </div>

                    <div className="map-image-s"></div>
                </div>
            </div>
        )
    }
}

export default Stend
