import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GridItem from './GridItem';
import { selectScene } from '../../actions/scenes';
import styles from './styles';

class Grid extends Component {
  handlePress = (scene) => {
    this.props.selectScene(scene);
  };

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.gridContainer}
        numColumns={this.props.columns}
        data={this.props.data.scenes}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <GridItem item={item} handlePress={() => this.handlePress(item)} />
        )}
      />
    );
  }
}

Grid.propTypes = {
  data: PropTypes.object,
  columns: PropTypes.number,
  selectScene: PropTypes.func,
};

export default connect(null, { selectScene })(Grid);
