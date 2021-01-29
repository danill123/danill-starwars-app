import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Card, CardBody,
    CardTitle, CardFooter , Button
  } from 'reactstrap';

import { get_people, next_people_data } from '../redux/actions/get_people';

class People extends Component {
    componentDidMount() {
        let { people_data } = this.props
        let list_data = people_data.list

        if(list_data.length <= 0) {
            this.props.fetchPeople()
        }
    }

    loadMoreData(url, props) {
        this.props.nextPeopleData(url)
    }
    
    render() {
        let { people_data } = this.props
        let list_data = people_data.list // list data from props
        let next_api = people_data.next_uri
        
        if(list_data.length > 0) {
            return(
                <div>
                    <div className="row">
                        { list_data.map((key, index) => {
                            return (
                                <div className="col-sm-12 col-md-4 mt-2" key={index}>
                                    <Card className="hover_shadow">
                                        <CardBody>
                                        <CardTitle tag="h5">{key.name}</CardTitle>
                                        <div className="row container d-flex justify-content-around">
                                            <div>
                                                <table style={{listStyle: 'none'}}> 
                                                <tbody>
                                                    <tr>
                                                        <td>Height</td>
                                                        <td>:</td>
                                                        <td>{key.height}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mass</td>
                                                        <td>:</td>
                                                        <td>{key.mass}</td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </div>
                                            <div>        
                                                <table style={{listStyle: 'none'}}> 
                                                <tbody>
                                                    <tr>
                                                        <td>Eye color</td>
                                                        <td>:</td>
                                                        <td>{key.eye_color}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Birth year</td>
                                                        <td>:</td>
                                                        <td>{key.birth_year}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gender</td>
                                                        <td>:</td>
                                                        <td>{key.gender}</td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        </CardBody>
                                        <CardFooter>
                                            <p>Skin Color : {key.skin_color} , Hair Color : {key.hair_color}</p>
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

const mapStateToProps = (state) => {
    return {
        people_data : state.people
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeople : () => dispatch(get_people()),
        nextPeopleData : (url) => dispatch(next_people_data(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);