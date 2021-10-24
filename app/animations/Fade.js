import React, { useRef } from "react";
import { Animated, Text, View } from "react-native";

import Style from "./Style";

FadeAnimation = React.forwardRef(({}, ref) => {
  const fade = useRef(new Animated.Value(0)).current;

  React.useImperativeHandle(ref, () => ({
    fadeInAnimation,
    fadeOutAnimation,
    fadeAnimation,
  }));
  const fadeAnimation = () => {
    fadeInAnimation();
    setTimeout(() => {
      fadeOutAnimation();
    }, 600);
  };
  const fadeInAnimation = () => {
    Animated.timing(fade, {
      toValue: 0.35,
      //duration: 600,
      useNativeDriver: true,
    }).start();
  };
  const fadeOutAnimation = () => {
    Animated.timing(fade, {
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
            opacity: fade,
          },
        ]}
      >
        <Text>***Tap Again***</Text>
      </Animated.View>
    </View>
  );
});

export default FadeAnimation;
