import React, { Component } from 'react';
import db from '../../components/firebase';

export class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: 'kyiv-1',
            letter: '',
            count: 1
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
            [event.target.dataset.type]: event.target.value
        });
      }
    
      handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.city)


        for (let i = 1; i < this.state.count; i++) {
            db.collection(this.state.city).add({
                about: '',
                status: 0,
                time: `1${i+1}:00 - 1${i+1}:50`,
                city: this.state.city,
                company: '',
                zone: this.state.letter,
                stand: i
                // city: this.state.city,
                // stand: (i+35)+this.state.letter,
                // status: 0,
                // name: '',
                // bg: '#3ebf65',
            })
            .then(function(docRef) {
                console.log("Stand-OK:", docRef.id);
            })
            .catch(function(error) {
                console.error("Stand-Error", error);
            });

        }

      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                
                    <h4>Город:</h4>
                    <input type="text" data-type="city" onChange={this.handleChange} />

                    <h4>Буква:</h4>
                    <input type="text" data-type="letter" onChange={this.handleChange} />

                    <h4>Сколько:</h4>
                    <input type="text" data-type="count" onChange={this.handleChange} />


                    <input type="submit" value="Отправить" />
                </form>
            </div>  
        )
    }
}

export default Add
