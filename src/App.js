// Libs
import React, { Component } from 'react';
import "./style.css";
import axios from "axios";



class Netflix extends Component {
  state = {
    movies: [],
    //shows: [],
  };

//movies
  async componentDidMount() {
    const response = await axios.get(`${process.env.REACT_APP_API}/movies`)
    console.log(response.data)
    
      this.setState({
        movies: response.data
    })

    //image-poster-movies-shows
    const filmes = response.data.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
    movies: filmes
});



}   

  
  render () {
    console.log("teste-r", this.state.movies)
    return ( 
      <div>
        <div className = "box-title">
        <h1 className = "title-movies">NetMovies</h1>
        <ul className = "box-menu">
          <li className = "menu">FILMES</li>
          <li className = "menu">SERIES</li>
          <li className = "menu">TV</li>
        </ul>
        </div>
         <div>
           {this.state.movies.map((item,index) =>(
            <div key={index} className="box-movies-map-return">
              <div className = "box-movies-description">
              <h2 className ="subtitle-movies">{item.title}</h2>
              <p className = "Date">{item.release_date}</p>
              <p className ="Description">{item.overview}</p>
              </div>
              <div className = "box-poster"> 
            <img className = "posterFilme" src={item.poster_path} alt="poster-movies" /> 
            </div>                  
          </div>
        ))}
      </div>
  
      </div>           
    )    
  }
}
export default Netflix;
