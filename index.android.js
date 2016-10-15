import React, {Component} from 'react';
import FormatTime from 'minutes-seconds-milliseconds';
import {
    Text,
    View,
    TouchableHighlight,
    AppRegistry,
    StyleSheet
} from 'react-native';

class StopWatch extends Component {

    constructor(props) {
      super(props);

      this.state = {
        timeElapsed: null,
        isRunning: false
      };

      this.handleStartPress = this.handleStartPress.bind(this);
    }

    startStopButton() {
      var text = this.state.isRunning ? 'Stop' : 'Start';
      var style = this.state.isRunning ? styles.stopButton : styles.startButton;

      return (
        <TouchableHighlight
          underlayColor="gray"
          onPress={this.handleStartPress}
          style={[style, styles.button]}>
          <Text>
             {text}
          </Text>
        </TouchableHighlight>
      );
    }

    handleStartPress() {
      if(this.state.isRunning) {
        clearInterval(this.timer);
        this.timer = undefined;
        this.setState({
          isRunning: false
        });

        return;
      }

      var startTime = new Date();

      this.timer = setInterval(() => {
        this.setState({
          timeElapsed: new Date() - startTime,
          isRunning: true
        });
      }, 30);
    }

    lapButton() {
      return (
        <View style={styles.button}>
          <Text>
            Lap
          </Text>
        </View>
      );
    }

    render() {
       return (
         <View style={styles.container}>
             <View style={styles.header}>
                <View style={styles.timerWrapper}>
                  <Text style={styles.timer}>
                    {FormatTime(this.state.timeElapsed)}
                  </Text>
                </View>
                <View style={styles.buttonWrapper}>
                  {this.startStopButton()}
                  {this.lapButton()}
                </View>
             </View>
             <View style={styles.footer}>
               <Text>
                 I am a list of Laps
               </Text>
             </View>
         </View>
       );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire the screen
    alignItems: 'stretch', // Child max width
  },
  header: { // Yellow
    flex: 1,
  },
  footer: { // Footer
    flex: 1,
  },
  timerWrapper: { // Red
    flex: 5, // Take up 5/8 available space
    justifyContent: 'center', // y
    alignItems: 'center' // x
  },
  buttonWrapper: { // Green
    flex: 3, // Take up 3/8 available space
    flexDirection: 'row', // Side by side
    justifyContent: 'space-around', // x
    alignItems: 'center' // y
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
