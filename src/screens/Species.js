import React, { Component } from 'react';
import {
    Card, CardBody,
    CardTitle, CardFooter , Button
} from 'reactstrap';
import { connect } from 'react-redux';

import { get_species, next_species_data } from '../redux/actions/get_species';

class Species extends Component {

    componentDidMount() {
        let { species_state } = this.props;
        let list_data = species_state.list

        if(list_data.length <= 0) {
            this.props.fetchSpecies();
        }
    }

    loadMoreData(url, props) {
        this.props.NextSpeciesData(url);
    }

    render() {
        let { species_state } = this.props
        let list_data = species_state.list
        let next_api = species_state.next_uri

        if(list_data.length > 0) {
            return(
                <div>
                    <div className="row">
                        {list_data.map((key, index) => {
                            return (
                                <div className="col-sm-12 col-md-6 mt-2" key={index}>
                                    <Card className="hover_shadow" style={{height: 430}}>
                                        <CardBody>
                                        <CardTitle tag="h5">{key.name}</CardTitle>
                                        <div className="row container d-flex justify-content-start">
                                            
                                                <table style={{listStyle: 'none'}}> 
                                                <tbody>
                                                    <tr>
                                                        <td>Classification</td>
                                                        <td>:</td>
                                                        <td>{key.classification}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Designation</td>
                                                        <td>:</td>
                                                        <td>{key.designation}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Average height</td>
                                                        <td>:</td>
                                                        <td>{key.average_height}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Skin colors</td>
                                                        <td>:</td>
                                                        <td>{key.skin_colors}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hair colors</td>
                                                        <td>:</td>
                                                        <td>{key.hair_colors}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Eye colors</td>
                                                        <td>:</td>
                                                        <td>{key.eye_colors}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Average lifespanr</td>
                                                        <td>:</td>
                                                        <td>{key.average_lifespan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Language</td>
                                                        <td>:</td>
                                                        <td>{key.language}</td>
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
                        <Button color="success" onClick={this.loadMoreData.bind(this, next_api)}> Load more </Button>
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
        species_state : state.species
    }
}

const MapDispatchToProps = dispatch => {
    return {
        fetchSpecies : () => dispatch(get_species()),
        NextSpeciesData : (url) => dispatch(next_species_data(url))
    };
}

export default connect(MapStateToProps, MapDispatchToProps)(Species);