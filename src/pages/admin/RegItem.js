import React, { Component } from 'react';
import changeStatus from '../../components/changeStatus';

const status = ['Подтверждено', 'НЕЕ Подтверждено']
const zones = {
    'kyiv_1': ['Tech Zone', 'Marketing', 'Managment']
}

export class RegItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.reg,
            empty: false
        }

        this.delete = this.delete.bind(this);
        this.apply = this.apply.bind(this);
        this.uNapply = this.uNapply.bind(this);
    }

    delete() {
        let dataS = {};

        if(this.state.data.time != undefined){
            dataS = {
                stand: this.state.data.stand,
                company: '',
                about: '',
                time: this.state.data.time,
                zone: this.state.data.zone,
                status: 0,
                city: this.state.data.city,
                id: this.state.data.id
            } 
        }else{
            dataS = {
                stand: this.state.data.stand,
                name: '',
                status: 0,
                bg: '#3ebf65',
                city: this.state.data.city,
                id: this.state.data.id
            }
        }
        

        changeStatus(this.state.data.city, this.state.data.id, dataS).then(() => {
            this.setState({
                empty: true
            })
        }
        );

        console.log(this.state.data)
    }

    apply() {
        let dataS = {};

        if(this.state.data.status !== 1){
            if(this.state.data.time != undefined){
                dataS = {
                    stand: this.state.data.stand,
                    company: this.state.data.company,
                    about: this.state.data.about,
                    time: this.state.data.time,
                    zone: this.state.data.zone,
                    status: 1,
                    city: this.state.data.city,
                    id: this.state.data.id
                }
            }else{
                dataS = {
                    stand: this.state.data.stand,
                    name: this.state.data.name,
                    status: 1,
                    bg: '#d24a43',
                    city: this.state.data.city,
                    id: this.state.data.id
                }
            }
            
            console.log(this.state.data)
            changeStatus(this.state.data.city, this.state.data.id, dataS).then(() => {
                this.setState({
                    data: dataS
                })
            }
            );
        }else{
            console.log(this.state.data)
            alert('Уже подтверждено!')
        }

        

    }

    uNapply() {
        let dataS = {}
        if(this.state.data.status !== 2){
            if(this.state.data.time != undefined){
                dataS = {
                    stand: this.state.data.stand,
                    company: this.state.data.company,
                    about: this.state.data.about,
                    time: this.state.data.time,
                    zone: this.state.data.zone,
                    status: 2,
                    city: this.state.data.city,
                    id: this.state.data.id
                }
            }else{
                dataS = {
                    stand: this.state.data.stand,
                    name: this.state.data.name,
                    status: 2,
                    bg: '#f0ea53',
                    city: this.state.data.city,
                    id: this.state.data.id
                }
            }
            
            changeStatus(this.state.data.city, this.state.data.id, dataS).then(() => {
                this.setState({
                    data: dataS
                })
            }
            );
        }else{
            alert('Еще не подтверждено!')
        }


    }

    render() {
        if(!this.state.empty){
            if(this.state.data.time != undefined){
                return (
                    <tr>
                        <td>{this.state.data.company}</td>
                        <td>{this.state.data.about}</td>
                        <td>{zones.kyiv_1[this.state.data.zone-1]}</td>
                        <td>{this.state.data.time}</td>
                        <td>{status[this.state.data.status - 1]}</td>
                        <td>
                            <button onClick={this.delete}>Delete</button>
                            <button onClick={this.apply}>Apply</button>
                            <button onClick={this.uNapply}>Unpply</button>
                        
                        </td>
                    </tr>
                )
            }
            else{
                return (
                    <tr>
                        <td>{this.state.data.name}</td>
                        <td>{this.state.data.stand}</td>
                        <td>{status[this.state.data.status - 1]}</td>
                        <td>
                            <button onClick={this.delete}>Delete</button>
                            <button onClick={this.apply}>Apply</button>
                            <button onClick={this.uNapply}>Unpply</button>
                        
                        </td>
                    </tr>
                )
            }
            
        }
        return(<></>)
        
    }
}

export default RegItem
