import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { H1 } from '../H1';
import { emailChanged, passwordChanged, loginUser } from '../../actions/auth';
import styles from './styles';

class LoginForm extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate('Home');
    }
  }

  handleSignIn = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });

    // this.setState({ hasErrors: false, isLoading: true });
    // app
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((user) => {
    //     this.setState({ isLoading: false });
    //     console.log('signInWithEmailAndPassword', user);
    //     this.props.navigation.navigate('Home');
    //   })
    //   .catch(() => {
    //     app
    //       .auth()
    //       .createUserWithEmailAndPassword(email, password)
    //       .then((user) => {
    //         this.createUser(user, email);
    //         this.setState({ isLoading: false });
    //         console.log('signInWithEmailAndPassword', this.props);
    //         this.props.navigation.navigate('Home');
    //       })
    //       .catch((e) => {
    //         this.setState({ hasErrors: true, isLoading: false });
    //         console.log('Error', e);
    //       });
    //   });
  };

  renderButton() {
    return this.props.isLoading ? (
      <ActivityIndicator size="small" color="#fff" />
    ) : (
      <Text style={styles.buttonText}>Sign In</Text>
    );
  }

  renderErrors() {
    const { error } = this.props;
    return error ? <Text style={styles.errorText}>{error}</Text> : null;
  }

  render() {
    const { email, password } = this.props;

    return (
      <KeyboardAvoidingView style={styles.formContainer} behavior="position">
        <View style={styles.textWrap}>
          <H1 text="Huey" textColor="#fff" />
        </View>
        <View style={styles.inputWrap}>
          <EvilIcons name="envelope" size={32} color="white" />
          <TextInput
            style={styles.input}
            placeholder="myemail@gmail.com"
            placeholderTextColor="white"
            value={email}
            onChangeText={text => this.props.emailChanged(text)}
            spellCheck={false}
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputWrap}>
          <EvilIcons name="lock" size={32} color="white" />
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="white"
            secureTextEntry
            value={password}
            onChangeText={text => this.props.passwordChanged(text)}
            spellCheck={false}
            autoCorrect={false}
          />
        </View>
        <View style={[styles.inputWrap, { paddingHorizontal: 0 }]}>
          <TouchableOpacity style={styles.button} onPress={this.handleSignIn}>
            {this.renderButton()}
          </TouchableOpacity>
        </View>
        {this.renderErrors()}
      </KeyboardAvoidingView>
    );
  }
}

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  emailChanged: PropTypes.func,
  passwordChanged: PropTypes.func,
  loginUser: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  user: PropTypes.object,
  navigation: PropTypes.object,
};

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  isLoading: state.auth.isLoading,
  error: state.auth.error,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser,
})(LoginForm);
