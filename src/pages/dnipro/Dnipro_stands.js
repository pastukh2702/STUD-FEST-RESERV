import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import getRegistrations from '../../components/getRegistrators';
import changeStatus from '../../components/changeStatus';

export class Dnipro_stands extends Component {
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
                    changeStatus('dnipro', this.state[event.target.dataset.name].id, datas).then(() => {
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
        getRegistrations("dnipro").then((res) => {
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
        console.log(this.state)
        if(this.state.load){
            return (
                <div className="wrapper">
                    <center>
                        <h1>ДНІПРО 13.11.19</h1>
                        <div className="menu-wrapper-2">
                            <div className="menu-2">
                                <Link to="/dnipro/reg">Переглянути список<br></br> зареестрованих місць</Link>
                                <Link to="/dnipro">назад</Link><br></br>
                            </div>
                        </div>

                        <div className="map-4">
    
                            <div className="map-image-4">

                                <div className="1 block" style={{height: '57px', width: '26px', top: '328px', left: '70px', background: this.state['1'].bg}} data-name="1" data-status={this.state['1'].status} onClick={this.handler}>1</div>
                                <div className="2 block" style={{height: '57px', width: '26px', top: '265px', left: '70px', background: this.state['2'].bg}} data-name="2" data-status={this.state['2'].status} onClick={this.handler}>2</div>
                                <div className="3 block" style={{height: '57px', width: '26px', top: '203px', left: '70px', background: this.state['3'].bg}} data-name="3" data-status={this.state['3'].status} onClick={this.handler}>3</div>
                                
                                <div className="4 block" style={{height: '26px', width: '57px', top: '177px', left: '95px', background: this.state['4'].bg}} data-name="4" data-status={this.state['4'].status} onClick={this.handler}>4</div>
                                <div className="5 block" style={{height: '57px', width: '26px', top: '104px', left: '157px', background: this.state['5'].bg}} data-name="5" data-status={this.state['5'].status} onClick={this.handler}>5</div>
                                <div className="6 block" style={{height: '27px', width: '57px', top: '69px', left: '174px', background: this.state['6'].bg}} data-name="6" data-status={this.state['6'].status} onClick={this.handler}>6</div>
                                <div className="7 block" style={{height: '27px', width: '57px', top: '69px', left: '235px', background: this.state['7'].bg}} data-name="7" data-status={this.state['7'].status} onClick={this.handler}>7</div>

                                <div className="8 block" style={{height: '27px', width: '57px', top: '69px', left: '390px', background: this.state['8'].bg}} data-name="8" data-status={this.state['8'].status} onClick={this.handler}>8</div>
                                <div className="9 block" style={{height: '27px', width: '57px', top: '69px', left: '451px', background: this.state['9'].bg}} data-name="9" data-status={this.state['9'].status} onClick={this.handler}>9</div>
                                <div className="10 block" style={{height: '57px', width: '26px', top: '104px', left: '497px', background: this.state['10'].bg}} data-name="10" data-status={this.state['10'].status} onClick={this.handler}>10</div>
                                <div className="11 block" style={{height: '26px', width: '57px', top: '177px', left: '527px', background: this.state['11'].bg}} data-name="11" data-status={this.state['11'].status} onClick={this.handler}>11</div>
                                
                                <div className="12 block" style={{height: '57px', width: '27px', top: '203px', left: '584px', background: this.state['12'].bg}} data-name="12" data-status={this.state['12'].status} onClick={this.handler}>12</div>
                                <div className="13 block" style={{height: '57px', width: '27px', top: '265px', left: '584px', background: this.state['13'].bg}} data-name="13" data-status={this.state['13'].status} onClick={this.handler}>13</div>
                                <div className="14 block" style={{height: '57px', width: '27px', top: '328px', left: '584px', background: this.state['14'].bg}} data-name="14" data-status={this.state['14'].status} onClick={this.handler}>14</div>

                                <div className="15 block" style={{height: '27px', width: '57px', top: '292px', left: '220px', background: this.state['15'].bg}} data-name="15" data-status={this.state['15'].status} onClick={this.handler}>15</div>
                                <div className="16 block" style={{height: '27px', width: '57px', top: '292px', left: '282px', background: this.state['16'].bg}} data-name="16" data-status={this.state['16'].status} onClick={this.handler}>16</div>
                                <div className="17 block" style={{height: '27px', width: '57px', top: '292px', left: '345px', background: this.state['17'].bg}} data-name="17" data-status={this.state['17'].status} onClick={this.handler}>17</div>
                                <div className="18 block" style={{height: '27px', width: '57px', top: '292px', left: '405.5px', background: this.state['18'].bg}} data-name="18" data-status={this.state['18'].status} onClick={this.handler}>18</div>
                                
                                <div className="19 block" style={{height: '27px', width: '57px', top: '325px', left: '220px', background: this.state['19'].bg}} data-name="19" data-status={this.state['19'].status} onClick={this.handler}>19</div>
                                <div className="20 block" style={{height: '27px', width: '57px', top: '325px', left: '405.5px', background: this.state['20'].bg}} data-name="20" data-status={this.state['20'].status} onClick={this.handler}>20</div>
                                
                                <div className="21 block" style={{height: '27px', width: '57px', top: '493px', left: '185px', background: this.state['21'].bg}} data-name="21" data-status={this.state['21'].status} onClick={this.handler}>21</div>
                                <div className="22 block" style={{height: '57px', width: '27px', top: '492px', left: '275px', background: this.state['22'].bg}} data-name="22" data-status={this.state['22'].status} onClick={this.handler}>22</div>
                                <div className="23 block" style={{height: '57px', width: '27px', top: '492px', left: '373px', background: this.state['23'].bg}} data-name="23" data-status={this.state['23'].status} onClick={this.handler}>23</div>
                                
                                <Link to="/dnipro/training" className="TZ block" style={{height: '40px', width: '40px', top: '559px', left: '501px', background: '#3ebf65', borderRadius: '50px'}}>TZ</Link>

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

export default Dnipro_stands
