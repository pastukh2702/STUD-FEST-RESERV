import React, { Component } from 'react';
import getRegistrations from '../../components/getRegistrators';
import { Link } from 'react-router-dom';

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

export class Kharkiv_see extends Component {
    constructor(props) {
        super(props);

        this.state = {
            load: false
        }
    
        // this.handler = this.handler.bind(this);
      }

    componentDidMount(){
        dataS = []
        getRegistrations("kharkiv").then((res) => {
            res.forEach((doc) => {
                console.log(doc.data())
                if(doc.data().name !== ''){
                    dataS.push({
                        stand: doc.data().stand,
                        name: doc.data().name,
                        id: doc.id,
                        number: parseInt(doc.data().stand, 10)
                    })
                    console.log(doc.data().stand)
                }
                
            })
            this.setState({data: dataS.sort(compareValues('number'))})
            this.setState({load: true})
        })

    }

    render() {
        if(this.state.load){
            console.log(dataS)
            return (
                <div>
                    <div className="menu-wrapper-2">
                        <div className="menu-2">
                            <Link to="/kharkiv/stands/1">назад</Link>
                        </div>
                    </div>
                    <table className="content">
                        <tr>
                            <th>Компанія</th>
                            <th>Стенд</th>
                        </tr>
                        {dataS.map(reg => (
                            <tr key={reg.id}>
                                <td>{reg.name}</td>
                                <td>{reg.stand}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            )
        }else{
            return (<h1>ЗАЧЕКАЙТЕ...</h1>)
        }
        
    }
}

export default Kharkiv_see
