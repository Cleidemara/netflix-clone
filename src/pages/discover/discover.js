import React, { Component } from 'react';
import axios from 'axios';

class Discover extends Component{
getBooks = {
    axios.get(`${process.env.REACT_APP_API=https://api.themoviedb.org/3}`);
    }

    render() {
        return (
            <div>
                Discover
            </div>
        )
    }
}
export default Discover;