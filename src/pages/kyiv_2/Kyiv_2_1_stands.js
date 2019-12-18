import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import getRegistrations from '../../components/getRegistrators';
import changeStatus from '../../components/changeStatus';

export class Kyiv_2_1_stands extends Component {
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
        console.log(this.state)
        if(this.state.load){
            return (
                <div className="wrapper">
                    <center>
                        <h1>КИЇВ 30.10.19</h1>
                        <h2>1 поверх</h2>
                        <div className="menu-wrapper-2">
                            <div className="menu-2">
                                <Link to="/kyiv2/reg">Переглянути список<br></br> зареестрованих місць</Link>
                                <Link to="/kyiv2/stands/2">Перейти на 2 поверх <br></br></Link>
                                <Link to="/kyiv2">назад</Link>
                            </div>
                        </div>
                        <div className="map-2-1">
    
                            <div className="map-image-2-1">

                                <div className="2d block" style={{height: '41px', width: '28px', top: '484px', left: '137px', background: this.state['2d'].bg}} data-name="2d" data-status={this.state['2d'].status} onClick={this.handler}>2d</div>
                                <div className="3d block" style={{height: '36px', width: '28px', top: '443px', left: '137px', background: this.state['3d'].bg}} data-name="3d" data-status={this.state['3d'].status} onClick={this.handler}>3d</div>
                                <div className="4d block" style={{height: '36px', width: '28px', top: '404px', left: '137px', background: this.state['4d'].bg}} data-name="4d" data-status={this.state['4d'].status} onClick={this.handler}>4d</div>
                                
                                <div className="5d block" style={{height: '29px', width: '28px', top: '372px', left: '137px', background: this.state['5d'].bg}} data-name="5d" data-status={this.state['5d'].status} onClick={this.handler}>5d</div>
                                <div className="21d block" style={{height: '29px', width: '28px', top: '340px', left: '137px', background: this.state['21d'].bg}} data-name="21d" data-status={this.state['21d'].status} onClick={this.handler}>21d</div>

                                <div className="11d block" style={{height: '29px', width: '28px', top: '340px', left: '363px', background: this.state['11d'].bg}} data-name="11d" data-status={this.state['11d'].status} onClick={this.handler}>11d</div>
                                <div className="10d block" style={{height: '29px', width: '28px', top: '372px', left: '363px', background: this.state['10d'].bg}} data-name="10d" data-status={this.state['10d'].status} onClick={this.handler}>10d</div>
                                
                                <div className="9d block" style={{height: '36px', width: '28px', top: '404px', left: '363px', background: this.state['9d'].bg}} data-name="9d" data-status={this.state['9d'].status} onClick={this.handler}>9d</div>
                                <div className="8d block" style={{height: '36px', width: '28px', top: '443px', left: '363px', background: this.state['8d'].bg}} data-name="8d" data-status={this.state['8d'].status} onClick={this.handler}>8d</div>
                                <div className="7d block" style={{height: '41px', width: '28px', top: '484px', left: '363px', background: this.state['7d'].bg}} data-name="7d" data-status={this.state['7d'].status} onClick={this.handler}>7d</div>

                                <div className="20d block" style={{height: '29px', width: '28px', top: '212px', left: '136px', background: this.state['20d'].bg}} data-name="20d" data-status={this.state['20d'].status} onClick={this.handler}>20d</div>
                                <div className="19d block" style={{height: '29px', width: '28px', top: '194px', left: '168px', background: this.state['19d'].bg}} data-name="19d" data-status={this.state['19d'].status} onClick={this.handler}>19d</div>
                            
                                <div className="13d block" style={{height: '29px', width: '28px', top: '194px', left: '332px', background: this.state['13d'].bg}} data-name="13d" data-status={this.state['13d'].status} onClick={this.handler}>13d</div>
                                <div className="12d block" style={{height: '29px', width: '28px', top: '213px', left: '363px', background: this.state['12d'].bg}} data-name="12d" data-status={this.state['12d'].status} onClick={this.handler}>12d</div>

                             
                                <div className="18d block" style={{height: '22px', width: '35px', top: '55px', left: '159px', background: this.state['18d'].bg}} data-name="18d" data-status={this.state['18d'].status} onClick={this.handler}>18d</div>
                                <div className="17d block" style={{height: '22px', width: '37px', top: '55px', left: '202px', background: this.state['17d'].bg}} data-name="17d" data-status={this.state['17d'].status} onClick={this.handler}>17d</div>
                                <div className="16d block" style={{height: '22px', width: '37px', top: '55px', left: '246px', background: this.state['16d'].bg}} data-name="16d" data-status={this.state['16d'].status} onClick={this.handler}>16d</div>
                                <div className="15d block" style={{height: '22px', width: '37px', top: '55px', left: '289px', background: this.state['15d'].bg}} data-name="15d" data-status={this.state['15d'].status} onClick={this.handler}>15d</div>
                                <div className="14d block" style={{height: '22px', width: '37px', top: '55px', left: '333px', background: this.state['14d'].bg}} data-name="14d" data-status={this.state['14d'].status} onClick={this.handler}>14d</div>

                                <div className="22d block" style={{height: '22px', width: '37px', top: '296px', left: '57px', background: this.state['22d'].bg}} data-name="22d" data-status={this.state['22d'].status} onClick={this.handler}>22d</div>


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

export default Kyiv_2_1_stands
