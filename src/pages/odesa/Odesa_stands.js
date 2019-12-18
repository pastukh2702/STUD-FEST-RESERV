import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import getRegistrations from '../../components/getRegistrators';
import changeStatus from '../../components/changeStatus';

export class Odesa_stands extends Component {
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
                    changeStatus('odessa', this.state[event.target.dataset.name].id, datas).then(() => {
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
        getRegistrations("odessa").then((res) => {
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
                        <h1>ОДЕСА 06.11.19</h1>
                        <div className="menu-wrapper-2">
                            <div className="menu-2">
                                <Link to="/odesa/reg">Переглянути список<br></br> зареестрованих місць</Link>
                                <Link to="/odesa">назад</Link><br></br>
                            </div>
                        </div>

                        <div className="map-3">
    
                            <div className="map-image-3">

                                <div className="1 block" style={{height: '43px', width: '21px', top: '550px', left: '128px', background: this.state['1'].bg}} data-name="1" data-status={this.state['1'].status} onClick={this.handler}>1</div>
                                <div className="2 block" style={{height: '44px', width: '21px', top: '459px', left: '128px', background: this.state['2'].bg}} data-name="2" data-status={this.state['2'].status} onClick={this.handler}>2</div>
                                <div className="3 block" style={{height: '43px', width: '21px', top: '412px', left: '128px', background: this.state['3'].bg}} data-name="3" data-status={this.state['3'].status} onClick={this.handler}>3</div>
                                <div className="4 block" style={{height: '43px', width: '21px', top: '365px', left: '128px', background: this.state['4'].bg}} data-name="4" data-status={this.state['4'].status} onClick={this.handler}>4</div>
                                <div className="5 block" style={{height: '43px', width: '21px', top: '317px', left: '128px', background: this.state['5'].bg}} data-name="5" data-status={this.state['5'].status} onClick={this.handler}>5</div>
                                <div className="6 block" style={{height: '44px', width: '21px', top: '269px', left: '128px', background: this.state['6'].bg}} data-name="6" data-status={this.state['6'].status} onClick={this.handler}>6</div>
                                <div className="7 block" style={{height: '43px', width: '21px', top: '223px', left: '128px', background: this.state['7'].bg}} data-name="7" data-status={this.state['7'].status} onClick={this.handler}>7</div>

                                <div className="8 block" style={{height: '50px', width: '22px', top: '222px', left: '227px', background: this.state['8'].bg}} data-name="8" data-status={this.state['8'].status} onClick={this.handler}>8</div>
                                <div className="9 block" style={{height: '50px', width: '22px', top: '277px', left: '227px', background: this.state['9'].bg}} data-name="9" data-status={this.state['9'].status} onClick={this.handler}>9</div>
                                <div className="10 block" style={{height: '50px', width: '22px', top: '331px', left: '227px', background: this.state['10'].bg}} data-name="10" data-status={this.state['10'].status} onClick={this.handler}>10</div>
                                <div className="11 block" style={{height: '50px', width: '22px', top: '387px', left: '227px', background: this.state['11'].bg}} data-name="11" data-status={this.state['11'].status} onClick={this.handler}>11</div>
                                <div className="12 block" style={{height: '50px', width: '22px', top: '440px', left: '227px', background: this.state['12'].bg}} data-name="12" data-status={this.state['12'].status} onClick={this.handler}>12</div>
                                <div className="13 block" style={{height: '50px', width: '22px', top: '495px', left: '227px', background: this.state['13'].bg}} data-name="13" data-status={this.state['13'].status} onClick={this.handler}>13</div>
                                <div className="14 block" style={{height: '22px', width: '62px', top: '552px', left: '228px', background: this.state['14'].bg}} data-name="14" data-status={this.state['14'].status} onClick={this.handler}>14</div>

                                <div className="15 block" style={{height: '50px', width: '22px', top: '495px', left: '269px', background: this.state['15'].bg}} data-name="15" data-status={this.state['15'].status} onClick={this.handler}>15</div>
                                <div className="16 block" style={{height: '50px', width: '22px', top: '440px', left: '269px', background: this.state['16'].bg}} data-name="16" data-status={this.state['16'].status} onClick={this.handler}>16</div>
                                <div className="17 block" style={{height: '50px', width: '22px', top: '387px', left: '269px', background: this.state['17'].bg}} data-name="17" data-status={this.state['17'].status} onClick={this.handler}>17</div>
                                <div className="18 block" style={{height: '50px', width: '22px', top: '331px', left: '269px', background: this.state['18'].bg}} data-name="18" data-status={this.state['18'].status} onClick={this.handler}>18</div>
                                <div className="19 block" style={{height: '50px', width: '22px', top: '277px', left: '269px', background: this.state['19'].bg}} data-name="19" data-status={this.state['19'].status} onClick={this.handler}>19</div>
                                <div className="20 block" style={{height: '50px', width: '22px', top: '222px', left: '269px', background: this.state['20'].bg}} data-name="20" data-status={this.state['20'].status} onClick={this.handler}>20</div>
                                <div className="21 block" style={{height: '22px', width: '62px', top: '194px', left: '228px', background: this.state['21'].bg}} data-name="21" data-status={this.state['21'].status} onClick={this.handler}>21</div>

                                <div className="22 block" style={{height: '44px', width: '21px', top: '406px', left: '337px', background: this.state['22'].bg}} data-name="22" data-status={this.state['22'].status} onClick={this.handler}>22</div>
                                <div className="23 block" style={{height: '43px', width: '21px', top: '455px', left: '337px', background: this.state['23'].bg}} data-name="23" data-status={this.state['23'].status} onClick={this.handler}>23</div>
                                <div className="24 block" style={{height: '43px', width: '21px', top: '503px', left: '337px', background: this.state['24'].bg}} data-name="24" data-status={this.state['24'].status} onClick={this.handler}>24</div>
                                <div className="25 block" style={{height: '43px', width: '21px', top: '550px', left: '353px', transform: 'rotate(-45deg)', background: this.state['25'].bg}} data-name="25" data-status={this.state['25'].status} onClick={this.handler}>25</div>

                                <div className="26 block" style={{height: '43px', width: '21px', top: '16px', left: '241px', background: this.state['26'].bg}} data-name="26" data-status={this.state['26'].status} onClick={this.handler}>26</div>
                                <div className="27 block" style={{height: '43px', width: '21px', top: '62px', left: '241px', background: this.state['27'].bg}} data-name="27" data-status={this.state['27'].status} onClick={this.handler}>27</div>
                                <div className="28 block" style={{height: '43px', width: '21px', top: '107px', left: '241px', background: this.state['28'].bg}} data-name="28" data-status={this.state['28'].status} onClick={this.handler}>28</div>

                                <Link to="/odesa/training" className="TZ block" style={{height: '28px', width: '28px', top: '54px', left: '55px', background: '#3ebf65', borderRadius: '50px'}}>TZ</Link>

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

export default Odesa_stands
