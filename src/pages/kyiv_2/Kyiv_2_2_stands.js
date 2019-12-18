import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import getRegistrations from '../../components/getRegistrators';
import changeStatus from '../../components/changeStatus';

export class Kyiv_2_2_stands extends Component {
    constructor(props) {
        super(props);

        this.state = {
            load: false
        }
    
        this.handler = this.handler.bind(this);
      }

    handler = (event) => {
        if(event.target.dataset.status == 0){
        
            let result = prompt('Назва компаниії: ', '');

            if(result != null){
                if(result.trim() !== ''){
                    let datas = {
                        stand: event.target.dataset.name,
                        status: 2,
                        bg: '#f0ea53',
                        name: result,
                        city: this.state[event.target.dataset.name].city
                    }
    
                    alert(event.target.dataset.name)
                    changeStatus('kyiv-2', this.state[event.target.dataset.name].id, datas).then(() => {
                        alert('ok');
                    })
    
                    this.setState({
                        [event.target.dataset.name]:datas
                    })
                }else{
                    alert('Пусто')
                }
            }
             
        }
        else{
            alert('Будь ласка, виберіть інше місце!')
        }
        console.log(this.state);
    }

    componentDidMount(){
        getRegistrations("kyiv-2").then((res) => {
            res.forEach((doc) => {
                // console.log(doc.data())
                this.setState({
                    [doc.data().stand]:{
                        stand: doc.data().stand,
                        name: doc.data().name,
                        status: doc.data().status,
                        bg: doc.data().bg,
                        id: doc.id,
                        city: doc.data().city
                    }
                })
            })
            this.setState({load: true})
        })

    }

    render() {
        if(this.state.load){
            return (
                <div className="wrapper">
                    <center>
                        <h1>КИЇВ 30.10.19</h1>
                        <h2>2 поверх</h2>
                        <div className="menu-wrapper-2">
                            <div className="menu-2">
                                <Link to="/kyiv2/reg">Переглянути список<br></br> зареестрованих місць</Link>
                                <Link to="/kyiv2/stands/1">Перейти на 1 поверх <br></br></Link>
                                <Link to="/kyiv2">назад</Link>
                            </div>
                        </div>
                        <div className="map-2-2">
    
                            <div className="map-image-2-2">
                                <Link to="/kyiv2/training" className="TZ block" style={{height: '40px', width: '40px', top: '531px', left: '324px', background: '#3ebf65', borderRadius: '50px'}}>TZ</Link>
                                <Link to="/kyiv2/training" className="TZ block" style={{height: '40px', width: '40px', top: '266px', left: '80px', background: '#3ebf65', borderRadius: '50px'}}>TZ</Link>

                                <div className="11e block" style={{height: '29px', width: '47px', top: '382px', left: '69px', background: this.state['11e'].bg}} data-name="11e" data-status={this.state['11e'].status} onClick={this.handler}>11e</div>
                                <div className="10e block" style={{height: '29px', width: '47px', top: '382px', left: '122px', background: this.state['10e'].bg}} data-name="10e" data-status={this.state['10e'].status} onClick={this.handler}>10e</div>
                                <div className="9e block" style={{height: '29px', width: '47px', top: '382px', left: '268px', background: this.state['9e'].bg}} data-name="9e" data-status={this.state['9e'].status} onClick={this.handler}>9e</div>
                                <div className="8e block" style={{height: '29px', width: '47px', top: '382px', left: '366px', background: this.state['8e'].bg}} data-name="8e" data-status={this.state['8e'].status} onClick={this.handler}>8e</div>

                                <div className="7e block" style={{height: '29px', width: '47px', top: '382px', left: '418px', background: this.state['7e'].bg}} data-name="7e" data-status={this.state['7e'].status} onClick={this.handler}>7e</div>
                                <div className="6e block" style={{height: '29px', width: '47px', top: '382px', left: '469px', background: this.state['6e'].bg}} data-name="6e" data-status={this.state['6e'].status} onClick={this.handler}>6e</div>
                                <div className="5e block" style={{height: '29px', width: '47px', top: '382px', left: '523px', background: this.state['5e'].bg}} data-name="5e" data-status={this.state['5e'].status} onClick={this.handler}>5e</div>
                                <div className="4e block" style={{height: '29px', width: '47px', top: '382px', left: '575px', background: this.state['4e'].bg}} data-name="4e" data-status={this.state['4e'].status} onClick={this.handler}>4e</div>

                                <div className="0e block" style={{height: '30px', width: '49px', top: '275px', left: '316px', background: this.state['0e'].bg}} data-name="0e" data-status={this.state['0e'].status} onClick={this.handler}>0e</div>
                                <div className="1e block" style={{height: '30px', width: '49px', top: '238px', left: '262px', background: this.state['1e'].bg}} data-name="1e" data-status={this.state['1e'].status} onClick={this.handler}>1e</div>
                                <div className="2e block" style={{height: '30px', width: '49px', top: '238px', left: '316px', background: this.state['2e'].bg}} data-name="2e" data-status={this.state['2e'].status} onClick={this.handler}>2e</div>
                                <div className="3e block" style={{height: '30px', width: '49px', top: '238px', left: '370px', background: this.state['3e'].bg}} data-name="3e" data-status={this.state['3e'].status} onClick={this.handler}>3e</div>

                            </div>
    
                        </div>
                    </center>
                </div>
            )
        }else{
            return (<h1>ЗАЧЕКАЙТЕ...</h1>)
        }

        
    }
}

export default Kyiv_2_2_stands
