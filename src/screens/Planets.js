import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Card, CardBody,
    CardTitle, CardFooter , Button
} from 'reactstrap';

import { get_planets, next_planets_data } from '../redux/actions/get_planets';

class Planets extends Component {
    componentDidMount() {
        let { planets_data } = this.props
        let list_data = planets_data.list

        if(list_data.length <= 0) {
            this.props.fetchPlanets()
        }
    }

    loadMoreData(url, props) {
        this.props.NextFetchPlanetsData(url);
    }

    render() {
        let { planets_data } = this.props
        let list_planets = planets_data.list
        let next_api = planets_data.next_uri

        if(list_planets.length > 0) {
            return(
                <div>
                    <div className="row">
                        { list_planets.map((key, index) => {
                            return (
                                <div className="col-sm-12 col-md-4 mt-2" key={index}>
                                    <Card className="hover_shadow" style={{height: 430}}>
                                        <CardBody>
                                        <CardTitle tag="h5">{key.name}</CardTitle>
                                        <div className="row container d-flex justify-content-start">
                                            
                                                <table style={{listStyle: 'none'}}> 
                                                <tbody>
                                                    <tr>
                                                        <td>Rotation period</td>
                                                        <td>:</td>
                                                        <td>{key.rotation_period}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Orbital period</td>
                                                        <td>:</td>
                                                        <td>{key.orbital_period}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Terrain</td>
                                                        <td>:</td>
                                                        <td>{key.terrain}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Diameter</td>
                                                        <td>:</td>
                                                        <td>{key.diameter}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Climate</td>
                                                        <td>:</td>
                                                        <td>{key.climate}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gravity</td>
                                                        <td>:</td>
                                                        <td>{key.gravity}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Diameter</td>
                                                        <td>:</td>
                                                        <td>{key.diameter}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Population</td>
                                                        <td>:</td>
                                                        <td>{key.population}</td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            
                                        </div>
                                        </CardBody>
                                        <CardFooter>
                                            <p>Surface water : {key.surface_water}</p>
                                        </CardFooter>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                        <Button color="success" onClick={ this.loadMoreData.bind(this, next_api) } > Load more </Button>
                    </div>
                </div>
            );
        } else {
            return (
                <h1 className="text-center">Fetching Data</h1>
            );
        }
    }
}

const MapStateToProps = state => {
    return {
        planets_data : state.planets
    }
}

const MapDispatchToProps = dispatch => {
    return {
        fetchPlanets : () => dispatch(get_planets()),
        NextFetchPlanetsData : (url) => dispatch(next_planets_data(url))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Planets);