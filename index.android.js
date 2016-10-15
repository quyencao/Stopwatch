import React, {Component} from 'react';
import {
    Text,
    View,
    AppRegistry,
    StyleSheet
} from 'react-native';

class StopWatch extends Component {
    startStopButton() {
      return (
        <View>
          <Text>
             Start
          </Text>
        </View>
      );
    }

    lapButton() {
      return (
        <View>
          <Text>
            Lap
          </Text>
        </View>
      );
    }

    border(color) {
      return {
        borderColor: color,
        borderWidth: 4
      }
    }

    render() {
       return (
         <View style={styles.container}>
             <View style={[styles.header, this.border('yellow')]}>
                <View style={[this.border('red'), styles.timerWrapper]}>
                  <Text>
                    00:00:00
                  </Text>
                </View>
                <View style={[this.border('green'), styles.buttonWrapper]}>
                  {this.startStopButton()}
                  {this.lapButton()}
                </View>
             </View>
             <View style={[styles.footer, this.border('blue')]}>
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
    alignItems: 'center'
  },
  buttonWrapper: { // Green
    flex: 3, // Take up 3/8 available space
    flexDirection: 'row', // Side by side
    justifyContent: 'space-around', // x
    alignItems: 'center' // y
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
