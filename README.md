# React Native Animated Progress

Need a lightweight and easy-to-use Progress Bar? Here it is!

A cross-platform Progress Bar component with different customize options.

![](example.gif)

- Checkout the [example/](https://github.com/kcotias/react-native-animated-progress/tree/master/examples) folder for use example.

## Features

- Good fit for loading situations
- Good fit for progress display
- Smooth animations
- Highly customizable
- Very lightweight

## Installation

Open a Terminal in the project root and run:

```sh
npm install react-native-animated-progress
```

## Quick Start

```js
import React from "react";
import { View, Text } from "react-native";
import ProgressBar from "react-native-animated-progress";

const App = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "space-evenly", paddingHorizontal: 16 }}
    >
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
```

### Props

##### `height` - integer (`Default - 2`)

Sets the height of the bar.

##### `backgroundColor` - string (`Default - none`)

Sets the color of the progress bar.

##### `animated` - boolean (`Default - true`)

Chooses wheter to animate the progress or not

##### `indeterminate` - boolean (`Default - false`)

Sets the bar to animate constantly as a loading progress.

##### `progress` - integer - From 0 to 100 (`Default - 0`)

Chooses the point where the progress should animate to, based on the progress bar width.

##### `trackColor` - string (`Default - #A6A6A6`)

Sets the color of the progress bar track.
