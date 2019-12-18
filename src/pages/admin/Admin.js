import React, { Component } from 'react';
import getRegistrations from '../../components/getRegistrators';
import RegItem from './RegItem';
import './style.css'

let dataS = [];

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

export class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            load: false
        }

        this.chooseCity = this.chooseCity.bind(this);
    }
    
    componentDidMount(){
        
    }

    chooseCity(event){

        this.setState({load: false})
        dataS = [];
        getRegistrations(event.target.dataset.city).then((res) => {
            res.forEach((doc) => {
                if(doc.data().name != ''){
                    if(doc.data().time != undefined){
                        if(doc.data().company != ''){
                            dataS.push({
                                stand: doc.data().stand,
                                company: doc.data().company,
                                about: doc.data().about,
                                time: doc.data().time,
                                status: doc.data().status,
                                city: doc.data().city,
                                id: doc.id,
                                zone: doc.data().zone,
                                number: parseInt(doc.data().stand, 10)
                            }) 
                        }
                    }else{
                        if(doc.data().stand.length > 2){
                            dataS.push({
                                stand: doc.data().stand,
                                name: doc.data().name,
                                status: doc.data().status,
                                bg: doc.data().bg,
                                city: doc.data().city,
                                id: doc.id,
                                number: parseInt(doc.data().stand.slice(0,-1), 10)
                            })
                        }else{
                            dataS.push({
                                stand: doc.data().stand,
                                name: doc.data().name,
                                status: doc.data().status,
                                bg: doc.data().bg,
                                city: doc.data().city,
                                id: doc.id,
                                number: parseInt(doc.data().stand, 10)
                            })
                        }
                        
                    }
                }
            })
            this.setState({data: dataS.sort(compareValues('number'))})
            this.setState({load: true})
        })
    }

    
    render() {
        const { data, load } = this.state;

        if(load){
            if(data == ''){
                return( 
                    <div className="admin-wrapper">
                        <div className="nav">
                            <button data-city="kyiv-1" onClick={this.chooseCity}>Kyiv 1</button>  
                            <button data-city="kyiv-1-lec" onClick={this.chooseCity}>Kyiv 1 TZ</button>  
                            <button data-city="kyiv-2" onClick={this.chooseCity}>Kyiv 2</button> 
                            <button data-city="kyiv-2-lec" onClick={this.chooseCity}>Kyiv 2 TZ</button>  
                            <button data-city="odessa" onClick={this.chooseCity}>Odesa</button> 
                            <button data-city="odessa-lec" onClick={this.chooseCity}>Odesa TZ</button>    
                            <button data-city="dnipro" onClick={this.chooseCity}>Dnipro</button> 
                            <button data-city="dnipro-lec" onClick={this.chooseCity}>Dnipro TZ</button> 
                            <button data-city="kharkiv" onClick={this.chooseCity}>Kharkiv</button> 
                            <button data-city="kharkiv-lec" onClick={this.chooseCity}>Kharkiv TZ</button> 
                        </div>
                        <table className="content">
                            <caption>{this.state.data.city}</caption>
                            <h1>Еще все пусто!</h1> 
                        </table>
                        
                    </div>
                )
            }else{
                if(data[0].time != undefined){
                    return (
                        <div className="admin-wrapper">
                            <div className="nav">
                                <button data-city="kyiv-1" onClick={this.chooseCity}>Kyiv 1</button>  
                                <button data-city="kyiv-1-lec" onClick={this.chooseCity}>Kyiv 1 TZ</button>  
                                <button data-city="kyiv-2" onClick={this.chooseCity}>Kyiv 2</button> 
                                <button data-city="kyiv-2-lec" onClick={this.chooseCity}>Kyiv 2 TZ</button>  
                                <button data-city="odessa" onClick={this.chooseCity}>Odesa</button> 
                                <button data-city="odessa-lec" onClick={this.chooseCity}>Odesa TZ</button>    
                                <button data-city="dnipro" onClick={this.chooseCity}>Dnipro</button> 
                                <button data-city="dnipro-lec" onClick={this.chooseCity}>Dnipro TZ</button> 
                                <button data-city="kharkiv" onClick={this.chooseCity}>Kharkiv</button>  
                                <button data-city="kharkiv-lec" onClick={this.chooseCity}>Kharkiv TZ</button> 

                            </div>
                            <table className="content">
                                <caption>{this.state.data.city}</caption>
                                <tr>
                                    <th>Company</th>
                                    <th>About</th>
                                    <th>Zone</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                {data.map(reg => (
                                    <RegItem key={reg.id} reg={reg}></RegItem>
                                ))}
                            </table>
                        </div>
                    )
                }
                else{
                    return (
                        <div className="admin-wrapper">
                            <div className="nav">
                                <button data-city="kyiv-1" onClick={this.chooseCity}>Kyiv 1</button>  
                                <button data-city="kyiv-1-lec" onClick={this.chooseCity}>Kyiv 1 TZ</button>  
                                <button data-city="kyiv-2" onClick={this.chooseCity}>Kyiv 2</button> 
                                <button data-city="kyiv-2-lec" onClick={this.chooseCity}>Kyiv 2 TZ</button>  
                                <button data-city="odessa" onClick={this.chooseCity}>Odesa</button> 
                                <button data-city="odessa-lec" onClick={this.chooseCity}>Odesa TZ</button>    
                                <button data-city="dnipro" onClick={this.chooseCity}>Dnipro</button> 
                                <button data-city="dnipro-lec" onClick={this.chooseCity}>Dnipro TZ</button> 
                                <button data-city="kharkiv" onClick={this.chooseCity}>Kharkiv</button> 
                                <button data-city="kharkiv-lec" onClick={this.chooseCity}>Kharkiv TZ</button> 


                            </div>
                            <table className="content">
                                <caption>{this.state.data.city}</caption>
                                <tr>
                                    <th>Name</th>
                                    <th>Stand</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                {data.map(reg => (
                                    <RegItem key={reg.id} reg={reg}></RegItem>
                                ))}
                            </table>
                        </div>
                    )
                }
                
            }
            
        }

        return (
            <div className="admin-wrapper">
                <div className="nav">
                    <button data-city="kyiv-1" onClick={this.chooseCity}>Kyiv 1</button>  
                    <button data-city="kyiv-1-lec" onClick={this.chooseCity}>Kyiv 1 TZ</button>  
                    <button data-city="kyiv-2" onClick={this.chooseCity}>Kyiv 2</button> 
                    <button data-city="kyiv-2-lec" onClick={this.chooseCity}>Kyiv 2 TZ</button>  
                    <button data-city="odessa" onClick={this.chooseCity}>Odesa</button> 
                    <button data-city="odessa-lec" onClick={this.chooseCity}>Odesa TZ</button>    
                    <button data-city="dnipro" onClick={this.chooseCity}>Dnipro</button> 
                    <button data-city="dnipro-lec" onClick={this.chooseCity}>Dnipro TZ</button>  
                    <button data-city="kharkiv" onClick={this.chooseCity}>Kharkiv</button>  
                    <button data-city="kharkiv-lec" onClick={this.chooseCity}>Kharkiv TZ</button> 

                </div>
                <table className="content">
                    <h1>Выбери бронь ^</h1> 
                </table>
            </div>
        )

    }
}

export default Admin
