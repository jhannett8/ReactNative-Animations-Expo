import React, { useRef } from "react";
import { Animated, Text, View } from "react-native";

import Style from "./Style";

FadeAnimation = React.forwardRef(({}, ref) => {
  const fadePlay = useRef(new Animated.Value(0)).current;

  React.useImperativeHandle(ref, () => ({
    fadeInPlay,
    fadeOutPlay,
    fadeAnimation,
  }));
  const fadeAnimation = () => {
    fadeInPlay();
    setTimeout(() => {
      fadeOutPlay();
    }, 600);
  };
  const fadeInPlay = () => {
    Animated.timing(fadePlay, {
      toValue: 0.35,
      //duration: 600,
      useNativeDriver: true,
    }).start();
  };
  const fadeOutPlay = () => {
    Animated.timing(fadePlay, {
      toValue: 0,
      duration: 1250,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={Style.AnimationContainer}>
      <Animated.View
        style={[
            Style.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadePlay,
          },
        ]}
      >
        <Text>Tap Again To Fade Out</Text>
      </Animated.View>
    </View>
  );
});

export default FadeAnimation;
