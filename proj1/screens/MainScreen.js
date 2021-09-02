import React, { Component } from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';



// const [webViewUrl, setWebViewUrl] = useState('https://holid.io/member?app=true');

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webViewUrl: "https://holid.io/member?app=true"
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.state.webViewUrl ?
          <WebView
            source={{ uri: this.state.webViewUrl }}
            //renderLoading={LoadingIndicatorView}
            startInLoadingState={true}

          />
          :
          <View style={styles.tabBarContainer}>
            <TouchableOpacity >
              <Text style={{ color: 'green' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ webViewUrl: "https://holid.io/reports?app=true" })}>
              <Text style={{ color: 'green' }}>Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ webViewUrl: "https://holid.io/websites?app=true" })}>
              <Text style={{ color: 'green' }}>Websites</Text>
            </TouchableOpacity>
          </View>
        }
      </SafeAreaView>
    );

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
