
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
} from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';

import thunk from "redux-thunk";

import reducer from './Redux/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

import Campaigns from './elements/campaigns';

//console.disableYellowBox = true;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campaigns: false,
            error: false
        }
    }

    render() {

        return (
            <Provider store={store}>
                <Campaigns/>
            </Provider>
        );
    };
};

export default App;
