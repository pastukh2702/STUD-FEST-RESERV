import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import getRegistrations from '../../components/getRegistrators';
import changeStatus from '../../components/changeStatus';

export class Kharkiv_2_stands extends Component {
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
                    changeStatus('kharkiv', this.state[event.target.dataset.name].id, datas).then(() => {
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
        getRegistrations("kharkiv").then((res) => {
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
                        <h1>ХАРКІВ 20.11.19</h1>
                        <h2>2 поверх</h2>
                        <div className="menu-wrapper-2">
                            <div className="menu-2">
                                <Link to="/kharkiv/reg">Переглянути список<br></br> зареестрованих місць</Link>
                                <Link to="/kharkiv/stands/1">Перейти на 1 поверх <br></br></Link>
                                <Link to="/kharkiv">назад</Link>
                            </div>
                        </div>
                        <div className="map-2-2">
    
                            <div className="map-image-5-2">
                                {/* <Link to="/kharkiv/training" className="TZ block" style={{height: '40px', width: '40px', top: '531px', left: '324px', background: '#3ebf65', borderRadius: '50px'}}>TZ</Link>
                                <Link to="/kharkiv/training" className="TZ block" style={{height: '40px', width: '40px', top: '266px', left: '80px', background: '#3ebf65', borderRadius: '50px'}}>TZ</Link> */}

                         
                                <div className="29 block" style={{height: '34px', width: '51px', top: '82px', left: '247px', background: this.state['29'].bg}} data-name="29" data-status={this.state['29'].status} onClick={this.handler}>29</div>
                                <div className="30 block" style={{height: '34px', width: '51px', top: '82px', left: '302px', background: this.state['30'].bg}} data-name="30" data-status={this.state['30'].status} onClick={this.handler}>30</div>
                                <div className="31 block" style={{height: '34px', width: '51px', top: '82px', left: '357px', background: this.state['31'].bg}} data-name="31" data-status={this.state['31'].status} onClick={this.handler}>31</div>
                                <div className="32 block" style={{height: '34px', width: '51px', top: '82px', left: '413px', background: this.state['32'].bg}} data-name="32" data-status={this.state['32'].status} onClick={this.handler}>32</div>

                                <div className="33 block" style={{height: '34px', width: '51px', top: '207px', left: '220px', background: this.state['33'].bg}} data-name="33" data-status={this.state['33'].status} onClick={this.handler}>33</div>
                                
                                <div className="34 block" style={{height: '56px', width: '34px', top: '270px', left: '181px', background: this.state['34'].bg}} data-name="34" data-status={this.state['34'].status} onClick={this.handler}>34</div>
                                <div className="35 block" style={{height: '56px', width: '34px', top: '332px', left: '181px', background: this.state['35'].bg}} data-name="35" data-status={this.state['35'].status} onClick={this.handler}>35</div>

                                <div className="36 block" style={{height: '56px', width: '34px', top: '325px', left: '319px', background: this.state['36'].bg}} data-name="36" data-status={this.state['36'].status} onClick={this.handler}>36</div>
                                <div className="37 block" style={{height: '56px', width: '34px', top: '325px', left: '359px', background: this.state['37'].bg}} data-name="37" data-status={this.state['37'].status} onClick={this.handler}>37</div>

                                <div className="38 block" style={{height: '34px', width: '51px', top: '468px', left: '213px', background: this.state['38'].bg}} data-name="38" data-status={this.state['38'].status} onClick={this.handler}>38</div>
                                <div className="39 block" style={{height: '34px', width: '51px', top: '468px', left: '272px', background: this.state['39'].bg}} data-name="39" data-status={this.state['39'].status} onClick={this.handler}>39</div>
                                <div className="40 block" style={{height: '34px', width: '51px', top: '468px', left: '331px', background: this.state['40'].bg}} data-name="40" data-status={this.state['40'].status} onClick={this.handler}>40</div>
                                <div className="41 block" style={{height: '34px', width: '51px', top: '468px', left: '390px', background: this.state['41'].bg}} data-name="41" data-status={this.state['41'].status} onClick={this.handler}>41</div>
                                <div className="42 block" style={{height: '34px', width: '51px', top: '468px', left: '448px', background: this.state['42'].bg}} data-name="42" data-status={this.state['42'].status} onClick={this.handler}>42</div>

                                <div className="43 block" style={{height: '56px', width: '34px', top: '332px', left: '498px', background: this.state['43'].bg}} data-name="43" data-status={this.state['43'].status} onClick={this.handler}>43</div>
                                <div className="44 block" style={{height: '56px', width: '34px', top: '270px', left: '498px', background: this.state['44'].bg}} data-name="44" data-status={this.state['44'].status} onClick={this.handler}>44</div>

                                <div className="45 block" style={{height: '34px', width: '52px', top: '207px', left: '439px', background: this.state['45'].bg}} data-name="45" data-status={this.state['45'].status} onClick={this.handler}>45</div>

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

export default Kharkiv_2_stands
