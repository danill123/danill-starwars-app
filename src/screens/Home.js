import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink  } from "react-router-dom";

import People from './People';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';

class Home extends Component {
    render() {
        return(
            <div className="mt-3">

                <div className="d-flex justify-content-center mb-2">
                    <img src="https://image.shutterstock.com/image-photo/kiev-ukraine-september-11-2018-260nw-1293816985.jpg" width="300"/>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="btn-group shadow">
                        <NavLink exact to="/people" activeClassName="text-dark" className="btn btn-primary">
                            People
                        </NavLink>
                        <NavLink exact to="/planets" activeClassName="text-dark" className="btn btn-primary">
                            Planets
                        </NavLink>
                        <NavLink exact to="/species" activeClassName="text-dark" className="btn btn-primary">
                            Species
                        </NavLink>
                        <NavLink exact to="/starships" activeClassName="text-dark" className="btn btn-primary">
                            Starships
                        </NavLink>
                    </div>
                </div>

                <div className="container mt-5 mb-5">
                    <Switch>
                        <Route path="/people" exact={true} component={People} />
                        <Route path="/planets" exact={true} component={Planets} />
                        <Route path="/species" exact={true} component={Species} />
                        <Route path="/starships" exact={true} component={Starships} />
                        <Redirect from="/*" to="/people" />
                    </Switch>
                </div>

            </div>
        );
    }
}

export default Home;