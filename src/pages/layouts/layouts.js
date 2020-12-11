//libs
import React, { Component, Fragment } from 'react';
import {Switch, Route } from 'react-router-dom';

//pages
import Discover from '../discover/discover';
import Movies from '../movies/movies';
import Shows from '../shows/shows';

//Components
import Navigation from '../../components/navigation';

class layouts extends Component {
    renderRoutes = () =>(
        <Switch>
                <Route
                exact
                path='/discover'
                render={(props) => (
                    <Discover {...props} />
                )}
                />
                <Route
                exact
                path='/movies'
                render={(props) => (
                    <Movies {...props} />
                )}
                />
                <Route
                exact
                path='/shows'
                render={(props) => (
                    <Shows {...props} />
                )}
                />
            </Switch>
    )


    render() {
        return (
           <Fragment>
            <Navigation />
            {this.renderRoutes()}   
           </Fragment> 
        )
    }
}
export default layouts;