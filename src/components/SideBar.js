import React from 'react';
import { Container, Content, Text, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

const routes = ['Student Details', 'Chat', 'Profile'];
export default class SideBar extends React.Component {
    render() {
        return (
            <Container style={{ backgroundColor: 'green' }} >
                <Content >
                    <List
                        dataArray={routes}
                        renderRow={data =>
                            (
                                <ListItem
                                    button
                                    onPress={() => Actions.studentDetails()}
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
