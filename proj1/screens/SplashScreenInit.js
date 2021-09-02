import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const textStyles = {
  width: 150,
  height: 150,
  resizeMode: 'stretch',
};
class SplashScreen extends React.Component {

  render() {


    return (
      <View style={[styles.container, { backgroundColor: 'white' }]}>
        <Image style={textStyles} source={require('./Images/logo.png')} />
      </View>
    );
  }
}

export default class SplashScreenInit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  performTimeConsumingTask = async () => {

    return new Promise(resolve =>
      setTimeout(() => {
        this.props.navigation.navigate('MainScreen');
      }, 2000),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
});
