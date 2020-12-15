// Libs
import React, { Component } from 'react';
import "./style.css";
import axios from "axios";


class Netflix extends Component {
  state = {
    movies: [],
    shows: [],
  };

  
//movies/ shows === filmes/series
  async componentDidMount() {
    const responseMovies = await axios.get(`${process.env.REACT_APP_API}/movies`);
    console.log(responseMovies.data)

    const responseShows = await axios.get(`${process.env.REACT_APP_API}/shows`)
    console.log(responseShows.data)
      
          
      this.setState({
        movies: responseMovies.data
    });

     this.setState({
     shows: responseShows.data
    });
    
    //image-poster-movies
    const filmes = responseMovies.data.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
    movies: filmes
});

const series = responseShows.data.map((item) => {
  return {
    ...item,
    poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
  };
});

this.setState({
shows: series
});


}   
  
  render () {
    
    return ( 
      <div>
        <div className = "box-title">
        <h1 className = "title-movies">NetMovies</h1>
        <ul className = "box-menu">
          <li className = "menu">MOVIES</li>
          <li className = "menu">SHOWS</li>
          <li className = "menu">SEARCH</li>
        </ul>
        </div>
         <div>
           {this.state.movies.map((item,index) =>(
            <div key={index} className="box-movies-map-return">
              <div className = "box-description">
              <h2 className ="subtitle-movies">{item.title}</h2>
              <p className = "Date">{item.release_date}</p>
              <p className ="Description">{item.overview}</p>
              </div>
              <div className = "box-posterFilmes"> 
            <img className = "posterFilme" src={item.poster_path} alt="poster-movies" /> 
            </div>                  
          </div>
        ))}
      </div>
      <div>
      <div className = "box-title">
        <h1 className = "title-movies">NetShows</h1>
        <ul className = "box-menu">
          <li className = "menu">MOVIES</li>
          <li className = "menu">SHOWS</li>
          <li className = "menu">SEARCH</li>
        </ul>
        </div>
      </div>
      <div>
           {this.state.shows.map((item,index) =>(
            <div key={index} className="box-shows-map-return">
              <div className = "box-posterSeries"> 
            <img className = "posterSeries" src={item.poster_path} alt="poster-series" /> 
            </div>
              <div className = "box-shows-description">              
              <h2 className ="subtitle-shows">{item.name}</h2>
              <p className = "vote">Mais Populares {item.vote_average}</p>
              <p className ="Description">{item.overview}</p>
              </div>                        
          </div>
        ))}
      </div>
  
      </div>           
    );   
  }
}
export default Netflix;
