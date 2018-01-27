import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Scene, Actions, Router } from 'react-native-router-flux';
import ShowMap from './src/components/ShowMap';
import RegisterStudent from './src/components/RegisterStudent';
import StudentDetails from './src/components/StudentDetails';

import { appReducer } from './src/reducers';

const Scenes = Actions.create(
    <Scene key='root'>
        <Scene
            initial
            key='registerStudent' hideNavBar
            component={RegisterStudent} title="Register Student"
        />
        <Scene key='studentDetails' component={StudentDetails} hideNavBar />
        <Scene key='mapLocation' component={ShowMap} title="Current Location" />
    </Scene>
);
const ConnectedRouter = connect()(Router);
const store = createStore(appReducer);

store.subscribe(() => {
    console.log(store.getState());
});

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter scenes={Scenes} />
            </Provider>
        );
    }
}
