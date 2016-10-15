import React, {Component} from 'react';
import {
    Text,
    View,
    AppRegistry
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

    render() {
       return (
         <View>
             <Text>
               00:00:00
             </Text>
             {this.startStopButton()}
             {this.lapButton()}
         </View>
       );
    }
}

AppRegistry.registerComponent('stopwatch', () => StopWatch);
