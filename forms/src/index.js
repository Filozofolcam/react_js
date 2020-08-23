import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Forms extends React.Component {
    render() {
        return (
            <div className="my-form">
                <div className="essay">
                    <h1>Essay</h1>
                    <Essay/>
                </div>
                <div className="flavor">
                    <h1>Choosing Flavor</h1>
                    <FlavorForm/>
                </div>
                <div className="reservation">
                    <h1>Reservation</h1>
                    <Reservation />
                </div>
            </div>
        );
    }

}

class Essay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write something.'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Vegetable'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your Favorite Fruit is ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Choose Your Favorite Fruit:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="apple"> Apple</option>
                        <option value="pear"> Pear</option>
                        <option value="carrot"> Carrot</option>
                        <option value="banana"> Banana</option>
                    </select>
                </label>
                <input type="submit" value="Send"/>
            </form>
        );
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }

}


ReactDOM.render(
    <Forms/>,
    document.getElementById('root')
);
