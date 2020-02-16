import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-animated-progressbar';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        paddingHorizontal: 16
      }}>
      <View>
        <Text style={{ marginBottom: 20 }}>Default with indeterminate</Text>
        <ProgressBar indeterminate backgroundColor="#4a0072" />
      </View>
      <View>
        <Text style={{ marginBottom: 20 }}>
          Default with indeterminate and increased height
        </Text>
        <ProgressBar height={5} indeterminate backgroundColor="#4a0072" />
      </View>
      <View>
        <Text style={{ marginBottom: 20 }}>
          Progress with animation and increased height
        </Text>
        <ProgressBar progress={60} height={7} backgroundColor="#4a0072" />
      </View>
      <View>
        <Text style={{ marginBottom: 20 }}>Progress without animation</Text>
        <ProgressBar
          progress={30}
          height={7}
          backgroundColor="#4a0072"
          animated={false}
        />
      </View>
    </View>
  );
};
export default App;
