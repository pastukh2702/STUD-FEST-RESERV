import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import getRegistrations from '../../components/getRegistrators';
import changeStatus from '../../components/changeStatus';

export class Kyiv_1_1_stands extends Component {
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
        console.log(this.state)
        if(this.state.load){
            return (
                <div className="wrapper">
                    <center>
                        <h1>КИЇВ 29.10.19</h1>
                        <h2>1 поверх</h2>

                        <div className="menu-wrapper-2">
                            <div className="menu-2">
                                <Link to="/kyiv1/reg">Переглянути список<br></br> зареестрованих місць</Link>
                                <Link to="/kyiv1/stands/2">Перейти на 2 поверх <br></br></Link>
                                <Link to="/kyiv1/stands/3">Перейти на 3 поверх</Link>
                                <Link to="/kyiv1">назад</Link>
                            </div>
                        </div>
                        
                        
                        <div className="map-1">
    
                            <div className="map-image-1">

                                <div className="7a block" style={{height: '35px', width: '21.5px', top: '508px', left: '115px', background: this.state['7a'].bg}} data-name="7a" data-status={this.state['7a'].status} onClick={this.handler}>7a</div>

                                <div className="8a block" style={{height: '35px', width: '21.5px', top: '469px', left: '115px', background: this.state['8a'].bg}} data-name="8a" data-status={this.state['8a'].status} onClick={this.handler}>8a</div>
                                <div className="9a block" style={{height: '35px', width: '21.5px', top: '431px', left: '115px', background: this.state['9a'].bg}} data-name="9a" data-status={this.state['9a'].status} onClick={this.handler}>9a</div>
                                <div className="10a block" style={{height: '35px', width: '21.5px', top: '393px', left: '115px', background: this.state['10a'].bg}} data-name="10a" data-status={this.state['10a'].status} onClick={this.handler}>10a</div>
                                <div className="11a block" style={{height: '35px', width: '21.5px', top: '355.8px', left: '115px', background: this.state['11a'].bg}} data-name="11a" data-status={this.state['11a'].status} onClick={this.handler}>11a</div>
                                <div className="12a block" style={{height: '35px', width: '21.5px', top: '317.8px', left: '115px', background: this.state['12a'].bg}} data-name="12a" data-status={this.state['12a'].status} onClick={this.handler}>12a</div>

                                <div className="16a block" style={{height: '30px', width: '20px', top: '185px', left: '116px', background: this.state['16a'].bg}} data-name="16a" data-status={this.state['16a'].status} onClick={this.handler}>16a</div>
                                <div className="15a block" style={{height: '30px', width: '20px', top: '218px', left: '116px', background: this.state['15a'].bg}} data-name="15a" data-status={this.state['15a'].status} onClick={this.handler}>15a</div>

                                <div className="13a block" style={{height: '22px', width: '34px', top: '158px', left: '130px', background: this.state['13a'].bg}} data-name="13a" data-status={this.state['13a'].status} onClick={this.handler}>13a</div>
                                <div className="14a block" style={{height: '22px', width: '34px', top: '158px', left: '164px', background: this.state['14a'].bg}} data-name="14a" data-status={this.state['14a'].status} onClick={this.handler}>14a</div>

                                <div className="21a block" style={{height: '23px', width: '21.8px', top: '159px', left: '313px', background: this.state['21a'].bg}} data-name="21a" data-status={this.state['21a'].status} onClick={this.handler}>21a</div>
                                <div className="20a block" style={{height: '23px', width: '21.8px', top: '183px', left: '313px', background: this.state['20a'].bg}} data-name="20a" data-status={this.state['20a'].status} onClick={this.handler}>20a</div>
                                <div className="19a block" style={{height: '23px', width: '21.8px', top: '208px', left: '313px', background: this.state['19a'].bg}} data-name="19a" data-status={this.state['19a'].status} onClick={this.handler}>19a</div>
                                <div className="18a block" style={{height: '23px', width: '21.8px', top: '232px', left: '313px', background: this.state['18a'].bg}} data-name="18a" data-status={this.state['18a'].status} onClick={this.handler}>18a</div>

                                <div className="1a block" style={{height: '34px', width: '21px', top: '342px', left: '274px', background: this.state['1a'].bg}} data-name="1a" data-status={this.state['1a'].status} onClick={this.handler}>1a</div>
                                <div className="2a block" style={{height: '34px', width: '21px', top: '380px', left: '274px', background: this.state['2a'].bg}} data-name="2a" data-status={this.state['2a'].status} onClick={this.handler}>2a</div>
                                <div className="3a block" style={{height: '34px', width: '21px', top: '418px', left: '274px', background: this.state['3a'].bg}} data-name="3a" data-status={this.state['3a'].status} onClick={this.handler}>3a</div>
                                <div className="4a block" style={{height: '34px', width: '21px', top: '455px', left: '274px', background: this.state['4a'].bg}} data-name="4a" data-status={this.state['4a'].status} onClick={this.handler}>4a</div>
                                <div className="5a block" style={{height: '34px', width: '21px', top: '493px', left: '274px', background: this.state['5a'].bg}} data-name="5a" data-status={this.state['5a'].status} onClick={this.handler}>5a</div>

                                <div className="25a block" style={{height: '22px', width: '34px', top: '53px', left: '157.5px', background: this.state['25a'].bg}} data-name="25a" data-status={this.state['25a'].status} onClick={this.handler}>25a</div>
                                <div className="24a block" style={{height: '22px', width: '34px', top: '53px', left: '211px', background: this.state['24a'].bg}} data-name="24a" data-status={this.state['24a'].status} onClick={this.handler}>24a</div>
                                <div className="23a block" style={{height: '22px', width: '34px', top: '53px', left: '265px', background: this.state['23a'].bg}} data-name="23a" data-status={this.state['23a'].status} onClick={this.handler}>23a</div>
                                <div className="22a block" style={{height: '22px', width: '34px', top: '53px', left: '318px', background: this.state['22a'].bg}} data-name="22a" data-status={this.state['22a'].status} onClick={this.handler}>22a</div>


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

export default Kyiv_1_1_stands
