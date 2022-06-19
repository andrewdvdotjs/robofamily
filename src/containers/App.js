import React, { Component} from 'react';
import CardList from "./CardList";
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json();
        })
            .then(users =>{
                this.setState({ robots: users })
            })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return <h1 className='tc'>Loading the Robots! Please wait</h1>
        } else {
        return (
            <div className='tc'>
                <h1 className='f1'>Robot Family</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );
        }
    }
}


export default App;