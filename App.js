import React, { Component } from 'react';
import {
  Button,
  LayoutAnimation,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rect: {
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    height: 100,
    backgroundColor: 'red',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  rectLabel: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
  }
});

const contents = [
  'Curiouser and curiouser!',
  'Begin at the beginning,',
  'How long is forever?',
  'Sometimes, just one second.',
];

export default class App extends Component {
  state = {
    currentIndex: 0,
  };

  handlePressButton = () => {
    LayoutAnimation.configureNext({
      duration: 1000,
      update: {
        springDamping: 0.2,
        type: LayoutAnimation.Types.spring,
      }
    });
    this.setState({
      currentIndex: this.state.currentIndex < contents.length - 1 ?
        this.state.currentIndex + 1 :
        0
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect}>
          <Text style={styles.rectLabel}>
            {contents[this.state.currentIndex]}
          </Text>
        </View>
        <View style={[styles.rect, { width: this.state.currentIndex * 50 }]}></View>
        <Button
          style={styles.button}
          onPress={this.handlePressButton}
          title="Press Me"
        />
      </View>
    );
  }
}
