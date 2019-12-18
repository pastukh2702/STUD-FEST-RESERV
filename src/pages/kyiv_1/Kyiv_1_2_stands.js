import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import getRegistrations from '../../components/getRegistrators';
import changeStatus from '../../components/changeStatus';

export class Kyiv_1_2_stands extends Component {
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
                        <h2>2 поверх</h2>
                        <div className="menu-wrapper-2">
                            <div className="menu-2">
                                <Link to="/kyiv1/reg">Переглянути список<br></br> зареестрованих місць</Link>
                                <Link to="/kyiv1/stands/1">Перейти на 1 поверх <br></br></Link>
                                <Link to="/kyiv1/stands/3">Перейти на 3 поверх</Link>
                                <Link to="/kyiv1">назад</Link>
                            </div>
                        </div>

                        <div className="map-1-2">
    
                            <div className="map-image-1-2">

                                <Link to="/kyiv1/training" className="TZ block" style={{height: '28px', width: '28px', top: '550px', left: '242px', background: '#3ebf65', borderRadius: '50px'}}>TZ</Link>


                                <div className="18b block" style={{height: '22px', width: '40px', top: '454px', left: '215px', background: this.state['18b'].bg}} data-name="18b" data-status={this.state['18b'].status} onClick={this.handler}>18b</div>
                                <div className="17b block" style={{height: '22px', width: '40px', top: '454px', left: '257px', background: this.state['17b'].bg}} data-name="17b" data-status={this.state['17b'].status} onClick={this.handler}>17b</div>

                                <div className="16b block" style={{height: '27px', width: '27px', top: '382px', left: '188px', background: this.state['16b'].bg}} data-name="16b" data-status={this.state['16b'].status} onClick={this.handler}>16b</div>
                                <div className="15b block" style={{height: '27px', width: '27px', top: '382px', left: '224px', background: this.state['15b'].bg}} data-name="15b" data-status={this.state['15b'].status} onClick={this.handler}>15b</div>
                                <div className="14b block" style={{height: '27px', width: '27px', top: '382px', left: '260px', background: this.state['14b'].bg}} data-name="14b" data-status={this.state['14b'].status} onClick={this.handler}>14b</div>
                                <div className="13b block" style={{height: '27px', width: '27px', top: '382px', left: '296px', background: this.state['13b'].bg}} data-name="13b" data-status={this.state['13b'].status} onClick={this.handler}>13b</div>

                                <div className="12b block" style={{height: '27px', width: '27px', top: '344px', left: '322px', background: this.state['12b'].bg}} data-name="12b" data-status={this.state['12b'].status} onClick={this.handler}>12b</div>
                                <div className="11b block" style={{height: '27px', width: '27px', top: '308px', left: '322px', background: this.state['11b'].bg}} data-name="11b" data-status={this.state['11b'].status} onClick={this.handler}>11b</div>
                                <div className="10b block" style={{height: '27px', width: '27px', top: '272px', left: '322px', background: this.state['10b'].bg}} data-name="10b" data-status={this.state['10b'].status} onClick={this.handler}>10b</div>
                                <div className="9b block" style={{height: '27px', width: '27px', top: '236px', left: '322px', background: this.state['9b'].bg}} data-name="9b" data-status={this.state['9b'].status} onClick={this.handler}>9b</div>

                                <div className="8b block" style={{height: '27px', width: '27px', top: '202px', left: '296px', background: this.state['8b'].bg}} data-name="8b" data-status={this.state['8b'].status} onClick={this.handler}>8b</div>
                                <div className="7b block" style={{height: '27px', width: '27px', top: '202px', left: '260px', background: this.state['7b'].bg}} data-name="7b" data-status={this.state['7b'].status} onClick={this.handler}>7b</div>
                                <div className="6b block" style={{height: '27px', width: '27px', top: '202px', left: '224px', background: this.state['6b'].bg}} data-name="6b" data-status={this.state['6b'].status} onClick={this.handler}>6b</div>
                                <div className="5b block" style={{height: '27px', width: '27px', top: '202px', left: '188px', background: this.state['5b'].bg}} data-name="5b" data-status={this.state['5b'].status} onClick={this.handler}>5b</div>
                                
                                <div className="4b block" style={{height: '27px', width: '27px', top: '236px', left: '163px', background: this.state['4b'].bg}} data-name="4b" data-status={this.state['4b'].status} onClick={this.handler}>4b</div>
                                <div className="3b block" style={{height: '27px', width: '27px', top: '272px', left: '163px', background: this.state['3b'].bg}} data-name="3b" data-status={this.state['3b'].status} onClick={this.handler}>3b</div>
                                <div className="2b block" style={{height: '27px', width: '27px', top: '308px', left: '163px', background: this.state['2b'].bg}} data-name="2b" data-status={this.state['2b'].status} onClick={this.handler}>2b</div>
                                <div className="1b block" style={{height: '27px', width: '27px', top: '344px', left: '163px', background: this.state['1b'].bg}} data-name="1b" data-status={this.state['1b'].status} onClick={this.handler}>1b</div>
                                
                                <div className="33b block" style={{height: '21px', width: '34px', top: '52px', left: '154px', background: this.state['33b'].bg}} data-name="33b" data-status={this.state['33b'].status} onClick={this.handler}>33b</div>
                                <div className="32b block" style={{height: '21px', width: '34px', top: '52px', left: '210px', background: this.state['32b'].bg}} data-name="32b" data-status={this.state['32b'].status} onClick={this.handler}>32b</div>
                                <div className="31b block" style={{height: '21px', width: '34px', top: '52px', left: '262px', background: this.state['31b'].bg}} data-name="31b" data-status={this.state['31b'].status} onClick={this.handler}>31b</div>
                                <div className="30b block" style={{height: '22px', width: '35px', top: '52px', left: '317px', background: this.state['30b'].bg}} data-name="30b" data-status={this.state['30b'].status} onClick={this.handler}>30b</div>


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

export default Kyiv_1_2_stands
