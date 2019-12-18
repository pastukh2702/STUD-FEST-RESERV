import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import getRegistrations from '../../components/getRegistrators';
import changeStatus from '../../components/changeStatus';

export class Kyiv_1_3_stands extends Component {
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
                    changeStatus('kyiv-1', this.state[event.target.dataset.name].id, datas).then(() => {
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
        getRegistrations("kyiv-1").then((res) => {
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
                        <h1>КИЇВ 29.10.19</h1>
                        <h2>3 поверх</h2>
                        <div className="menu-wrapper-2">
                            <div className="menu-2">
                                <Link to="/kyiv1/reg">Переглянути список<br></br> зареестрованих місць</Link>
                                <Link to="/kyiv1/stands/1">Перейти на 1 поверх <br></br></Link>
                                <Link to="/kyiv1/stands/2">Перейти на 2 поверх</Link>
                                <Link to="/kyiv1">назад</Link>
                            </div>
                        </div>
                        <div className="map-1-3">
    
                            <div className="map-image-1-3">
                                {/* <div className="blockT" style={{height: '30px', borderRadius: '50%', width: '30px', top: '472px', left: '63px'}}>1TZ</div>
                                <div className="blockT" style={{height: '30px', borderRadius: '50%', width: '30px', top: '472px', left: '416px'}}>2TZ</div> */}

                                <div className="1c block" style={{height: '27px', width: '27px', top: '416px', left: '163px', background: this.state['1c'].bg}} data-name="1c" data-status={this.state['1c'].status} onClick={this.handler}>1c</div>
                                <div className="2c block" style={{height: '27px', width: '27px', top: '379px', left: '163px', background: this.state['2c'].bg}} data-name="2c" data-status={this.state['2c'].status} onClick={this.handler}>2c</div>
                                <div className="3c block" style={{height: '27px', width: '27px', top: '344px', left: '163px', background: this.state['3c'].bg}} data-name="3c" data-status={this.state['3c'].status} onClick={this.handler}>3c</div>
                                <div className="4c block" style={{height: '27px', width: '27px', top: '308px', left: '163px', background: this.state['4c'].bg}} data-name="4c" data-status={this.state['4c'].status} onClick={this.handler}>4c</div>
                                <div className="5c block" style={{height: '27px', width: '27px', top: '272px', left: '163px', background: this.state['5c'].bg}} data-name="5c" data-status={this.state['5c'].status} onClick={this.handler}>5c</div>
                                <div className="6c block" style={{height: '27px', width: '27px', top: '236px', left: '163px', background: this.state['6c'].bg}} data-name="6c" data-status={this.state['6c'].status} onClick={this.handler}>6c</div>
                                <div className="7c block" style={{height: '27px', width: '27px', top: '157px', left: '203px', background: this.state['7c'].bg}} data-name="7c" data-status={this.state['7c'].status} onClick={this.handler}>7c</div>
                                <div className="8c block" style={{height: '27px', width: '27px', top: '157px', left: '239px', background: this.state['8c'].bg}} data-name="8c" data-status={this.state['8c'].status} onClick={this.handler}>8c</div>
                                <div className="9c block" style={{height: '27px', width: '27px', top: '157px', left: '274px', background: this.state['9c'].bg}} data-name="9c" data-status={this.state['9c'].status} onClick={this.handler}>9c</div>
                                <div className="10c block" style={{height: '27px', width: '27px', top: '236px', left: '322px', background: this.state['10c'].bg}} data-name="10c" data-status={this.state['10c'].status} onClick={this.handler}>10c</div>
                                <div className="11c block" style={{height: '27px', width: '27px', top: '272px', left: '322px', background: this.state['11c'].bg}} data-name="11c" data-status={this.state['11c'].status} onClick={this.handler}>11c</div>
                                <div className="12c block" style={{height: '27px', width: '27px', top: '308px', left: '322px', background: this.state['12c'].bg}} data-name="12c" data-status={this.state['12c'].status} onClick={this.handler}>12c</div>
                                <div className="13c block" style={{height: '27px', width: '27px', top: '344px', left: '322px', background: this.state['13c'].bg}} data-name="13c" data-status={this.state['13c'].status} onClick={this.handler}>13c</div>

                                <div className="14c block" style={{height: '27px', width: '27px', top: '379px', left: '322px', background: this.state['14c'].bg}} data-name="14c" data-status={this.state['14c'].status} onClick={this.handler}>14c</div>
                                <div className="15c block" style={{height: '27px', width: '27px', top: '416px', left: '322px', background: this.state['15c'].bg}} data-name="15c" data-status={this.state['15c'].status} onClick={this.handler}>15c</div>
                                
                                <Link to="/kyiv1/training" className="TZ block" style={{height: '28px', width: '28px', top: '547px', left: '417px', background: '#3ebf65', borderRadius: '50px'}}>TZ</Link>
                                <Link to="/kyiv1/training" className="TZ block" style={{height: '28px', width: '28px', top: '359px', left: '241px', background: '#3ebf65', borderRadius: '50px'}}>TZ</Link>


                                
                                
                                {/* <div className="15c block" style={{height: '21px', width: '34px', top: '52px', left: '154px', background: this.state['15c'].bg}} data-name="15c" data-status={this.state['15c'].status} onClick={this.handler}>15c</div>
                                <div className="16c block" style={{height: '21px', width: '34px', top: '52px', left: '210px', background: this.state['16c'].bg}} data-name="16c" data-status={this.state['16c'].status} onClick={this.handler}>16c</div>
                                <div className="17c block" style={{height: '21px', width: '34px', top: '52px', left: '262px', background: this.state['17c'].bg}} data-name="17c" data-status={this.state['17c'].status} onClick={this.handler}>17c</div>
                                <div className="18c block" style={{height: '22px', width: '35px', top: '52px', left: '317px', background: this.state['18c'].bg}} data-name="18c" data-status={this.state['18c'].status} onClick={this.handler}>18c</div> */}


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

export default Kyiv_1_3_stands
