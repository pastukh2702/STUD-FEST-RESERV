import React, { Component } from 'react';
import getRegistrators from '../../components/getRegistrators';
import Admin from './Admin'

export class Admin_login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userN: '',
            passN: '',
            user: '',
            pass: '',
            login: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getLocal = this.getLocal.bind(this);
        this.setLocal = this.setLocal.bind(this);
        this.exitLocal = this.exitLocal.bind(this);
    }

    getLocal(){
        if(localStorage.getItem('dsfbdfvdsvdvs') === this.state.passN){
            this.setState({
                login: true
            })
        }
    }

    exitLocal(){
        if(localStorage.getItem('dsfbdfvdsvdvs') === this.state.passN){
            localStorage.clear();
            window.location.reload()
        }
    }
    
    setLocal(){
        if(localStorage.getItem('dsfbdfvdsvdvs') !== this.state.passN){
            localStorage.setItem('dsfbdfvdsvdvs', this.state.passN)
        }
    }

    componentDidMount(){
        getRegistrators('admin').then((res) => {
            this.setState({
                userN: res.docs[0].data().user,
                passN: res.docs[0].data().pass,
            })
        }).then(()=>{
            this.getLocal()
        })
    }

    handleChange(e){
        this.setState({
            [e.target.dataset.type] : e.target.value
        })
        
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.userN == this.state.user && this.state.passN == this.state.pass){
            alert('ok')
            this.setState({
                login: true
            })
            this.setLocal();
        }else{
            alert('no')
        }
    }

    render() {
        if(this.state.login){
            return(
                <>
                    <button onClick={this.exitLocal}>EXIT</button>
                    <Admin/>
                </>
            )
            
        }else{
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" data-type='user' onChange={this.handleChange}/>
                        <input type="text" data-type='pass' onChange={this.handleChange}/>
                        <input type="submit"/>
                    </form>
                </div>
            )
        }
        
    }
}

export default Admin_login
