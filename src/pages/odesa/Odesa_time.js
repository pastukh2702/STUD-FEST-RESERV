import React, { Component } from 'react';
import getRegistrations from '../../components/getRegistrators'
import changeStatus from '../../components/changeStatus'
import { Link } from 'react-router-dom';

const ZONES = ['Marketing Zone', 'IT Zone'];
let TIMES = [];

let STATUS = ['#3ebf65', '#d24a43', '#f0ea53']

function compareValues(key, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || 
         !b.hasOwnProperty(key)) {
          return 0; 
      }
      
      const varA = (typeof a[key] === 'string') ? 
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? 
        b[key].toUpperCase() : b[key];
        
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? 
        (comparison * -1) : comparison
      );
    };
  }

export class Odesa_time extends Component {
    constructor(props) {
        super(props);

        this.state = {
            load: false,
            zone: 1,
            trLoad: true,
        }
    
        this.handler = this.handler.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
      }

    componentDidMount(){
        TIMES = [];
        getRegistrations("odessa-lec").then((res) => {
            res.forEach((doc) => {
                if(doc.data().zone == 1){
                    if(doc.data().about == ''){
                        TIMES.push({
                            about: 'вільно',
                            status: doc.data().status,
                            time: doc.data().time,
                            id: doc.id,
                            city: doc.data().city,
                            company: doc.data().company,
                            zone: doc.data().zone,
                            stand: doc.data().stand
                        })
                    }else{
                        TIMES.push({
                            about: doc.data().about,
                            status: doc.data().status,
                            time: doc.data().time,
                            id: doc.id,
                            city: doc.data().city,
                            company: doc.data().company,
                            zone: doc.data().zone,
                            stand: doc.data().stand
                        })
                    }
                }
            })
            this.setState({
                data: TIMES.sort(compareValues('stand')),
                load: true
            })
            console.log(TIMES)
        })
    }

    handler(event){
        let zon = event.target.value;
        TIMES = [];
        this.setState({
            trLoad: false
        })

        

        getRegistrations("odessa-lec").then((res) => {
            res.forEach((doc) => {
                if(doc.data().zone == zon){
                    if(doc.data().about == ''){
                        TIMES.push({
                            about: 'вільно',
                            status: doc.data().status,
                            time: doc.data().time,
                            id: doc.id,
                            city: doc.data().city,
                            company: doc.data().company,
                            zone: doc.data().zone,
                            stand: doc.data().stand
                        })
                    }else{
                        TIMES.push({
                            about: doc.data().about,
                            status: doc.data().status,
                            time: doc.data().time,
                            id: doc.id,
                            city: doc.data().city,
                            company: doc.data().company,
                            zone: doc.data().zone,
                            stand: doc.data().stand
                        })
                    }
                    
                }
            })
            this.setState({
                data: TIMES.sort(compareValues('stand')),
                load: true,
                trLoad: true
            })
            console.log(TIMES)
        })
    }

    handlerClick(el){
        console.log(el.status)
        if(el.status === 0){

            let company = prompt('Назва компаниії: ', '');
            let about = prompt('Тема тренінгу: ', '');

            if(company !== null && company.trim() !== '' &&  about !== null && about.trim() !== ''){
                changeStatus(el.city, el.id, {
                    about: about,
                    status: 2,
                    time: el.time,
                    id: el.id,
                    city: el.city,
                    company: company,
                    zone: el.zone,
                    stand: el.stand
                }).then(() => {
                    alert('OK')
                    window.location.reload()
                })
            }else{
                alert('Пусто!')
            }
        }else{
            alert('Будь ласка, виберіть інший час!')
        }
        
        
    }


    
    

    render() {
        if(this.state.load){
            if(this.state.trLoad){
                return (
                    <div className="wrapper">
                    <center>
                    <h1>ОДЕСА 06.11.19</h1>
                    </center>
                    
                        <div className="menu-wrapper-2">
                            <div className="menu-2">
                                
                                <Link to="/odesa">назад</Link>
                                <select onChange={this.handler}>
                                    <option value="1">{ZONES[0]}</option>
                                    <option value="2">{ZONES[1]}</option>
                                </select>
                                
                            </div>
                        </div>

                        <div className='timeWrap'>
                            {TIMES.map((el) => (
                                <h1 className='timeItem' onClick={() => {this.handlerClick(el)}} style={{background: STATUS[el.status]}}>{el.time}<span>- {el.company}</span> <span>- {el.about}</span></h1>
                            ))}
                        </div>
                    </div>
                    
                )}else{
                    return (
                        <div className="wrapper">
                        <center>
                        <h1>ОДЕСА 06.11.19</h1>
                        </center>
                        
                            <div className="menu-wrapper-2">
                                <div className="menu-2">
                                    
                                    <Link to="/odesa">назад</Link>
                                    <select onChange={this.handler}>
                                        <option value="1">{ZONES[0]}</option>
                                        <option value="2">{ZONES[1]}</option>
                                    </select>
                                    
                                </div>
                            </div>
    
                            <div className='timeWrap'>
                                <h1>ЗАЧЕКАЙТЕ...</h1>
                            </div>
                        </div>
                        
                    )
                }

        }else{
            return (<h1>ЗАЧЕКАЙТЕ...</h1>)
        }
        
    }
}

export default Odesa_time
