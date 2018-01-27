import axios from 'axios';
import { connect } from 'react-redux';
import {
    Text, Linking
} from 'react-native';
import React, { Component } from 'react';
import { fetchLocationAction, stopLocationAction } from './../actions/fetchLocationAction';

class ShowMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseUrl: ''
        };
    }
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchLocationAction());
        this.fetchLocation();
    }

    fetchLocation() {
        axios.get('http://ipinfo.io').then((res) => {
            const loc = res.data.loc;
            const baseUrl = `http://maps.google.com?q=${loc}`;
            const { dispatch } = this.props;
            this.setState({ baseUrl });
            console.log(this.state.baseUrl);
            
            dispatch(stopLocationAction());
        });
    }

    render() {
        return (this.props.isFetching ? <Text> Loading...</Text> : <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL(this.state.baseUrl)}
        >
            Google
        </Text>);
    }
}

export default connect((state) => ({ isFetching: state.location.isFetching }))(ShowMap);
