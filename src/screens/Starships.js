import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Card, CardBody,
    CardTitle, CardFooter , Button
} from 'reactstrap';

import { get_starships, next_starships_data } from '../redux/actions/get_starships';

class Starships extends Component {
    componentDidMount() {
        let { starships_state } = this.props
        let list_data = starships_state.list

        if(list_data.length <= 0) {
            this.props.fetchStarships();
        }
    }

    fetchMoreData(url, props) {
        this.props.NextStarshipsData(url);
    }

    render() {
        let { starships_state } = this.props
        let list_data = starships_state.list
        let next_api = starships_state.next_uri

        if(list_data.length > 0) {
            return(
                <div>
                    <div className="row">
                        { list_data.map((key, index) => {
                            return (
                                <div className="col-sm-12 col-md-4 mt-2" key={index}>
                                    <Card className="hover_shadow" style={{height: 680}}>
                                        <CardBody>
                                        <CardTitle tag="h5">{key.name}</CardTitle>
                                        <div className="row container d-flex justify-content-start">
                                            
                                                <table style={{listStyle: 'none'}}> 
                                                <tbody>
                                                    <tr>
                                                        <td>Model</td>
                                                        <td>:</td>
                                                        <td>{key.model}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Manufacturer</td>
                                                        <td>:</td>
                                                        <td>{key.manufacturer}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cost in credits</td>
                                                        <td>:</td>
                                                        <td>{key.cost_in_credits}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>length</td>
                                                        <td>:</td>
                                                        <td>{key.skin_colors}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Max atmosphering speed</td>
                                                        <td>:</td>
                                                        <td>{key.max_atmosphering_speed}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>crew</td>
                                                        <td>:</td>
                                                        <td>{key.crew}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Passengers</td>
                                                        <td>:</td>
                                                        <td>{key.average_lifespan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cargo Capacity</td>
                                                        <td>:</td>
                                                        <td>{key.cargo_capacity}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Consumables</td>
                                                        <td>:</td>
                                                        <td>{key.consumables}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hyperdrive rating</td>
                                                        <td>:</td>
                                                        <td>{key.hyperdrive_rating}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>MGLT</td>
                                                        <td>:</td>
                                                        <td>{key.MGLT}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Starship class</td>
                                                        <td>:</td>
                                                        <td>{key.starship_class}</td>
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
                        <Button color="success" onClick={this.fetchMoreData.bind(this, next_api)}>Load More</Button>
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
        starships_state : state.starships
    }
}

const MapDispatchToProps = dispatch => {
    return {
        fetchStarships : () => dispatch(get_starships()),
        NextStarshipsData : (url) => dispatch(next_starships_data(url))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Starships);