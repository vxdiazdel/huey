import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import styles from './styles';
import { logoutUser } from '../../actions/auth';

class List extends Component {
  componentWillUpdate(nextProps) {
    if (!nextProps.user) {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Login' })],
      });
      this.props.navigation.dispatch(resetAction);
    }
  }

  handleLogOut = () => {
    this.props.logoutUser();
  }

  render() {
    return (
      <ScrollView style={styles.list}>
        <ListItem style={styles.listItem} onPress={this.handleLogOut}>
          <Text style={styles.listItemText}>Log Out</Text>
          <Ionicons name="ios-log-out" size={28} color="white" />
        </ListItem>
      </ScrollView>
    );
  }
}

List.propTypes = {
  navigation: PropTypes.object,
  user: PropTypes.object,
  logoutUser: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logoutUser })(List);
