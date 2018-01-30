import React from 'react';
import { Container, Content, Text, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

const routes = ['Student Details', 'Current Location', 'Profile'];
export default class SideBar extends React.Component {

    // constructor(props) {
    //     super(props);
     
    //     // this.handleClick = this.handleClick.bind(this);
    // }
    handleClick(action) {
        console.log(action);
        
        this.props.onSelect();

        switch (action) {
            case 'Current Location':
                Actions.mapLocation();
                break;
            case 'Student Details':
                Actions.studentDetails();
                break;
            default:
                Actions.registerStudent();
                break;
        }
    }
    render() {
        return (
            <Container style={{ backgroundColor: 'blue' }} >
                <Content >
                    <List
                        dataArray={routes}
                        renderRow={data =>
                            (
                                <ListItem
                                    button
                                    onPress={this.handleClick.bind(this, data)}
                                >
                                    <Text>{data}</Text>
                                </ListItem>
                            )
                        }
                    />
                </ Content>
            </Container>
        );
    }
}
