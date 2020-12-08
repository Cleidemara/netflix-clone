// Libs
import React, { Component } from 'react';
import "./style.css";
import axios from "axios";



class Netflix extends Component {
  state = {
    movie: [],
  };

  async componentDidMount() {
    const response = await axios.get(`${process.env.REACT_APP_API}/movies`)

      
    this.setState({
      movie: response.data
    });


    const filmes = response.data.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
    movie: filmes
})

         
  }
  
  render (){
    console.log("teste-r", this.state.movie)
    return (
      <div>
        <header>
          
        </header>
        <h1 className = "title-movie">NetMovie</h1>
        <div>
       {this.state.movie.map((item,index) =>(
         <div key={index} className="box-map-return">
          <h2 className ="subtitle-movie">{item.title}</h2>
          <p className = "Date">{item.release_date}</p>
          <p className ="Description">{item.overview}</p>
          <img src={item.poster_path} alt="poster" />
                 
         </div>
       ))}

      </div>
      </div>
      
    )    
  }
}

export default Netflix;
