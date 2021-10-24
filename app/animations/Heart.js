import React, { useRef } from "react";
import { Animated, View } from "react-native";

import Icon from "../svgIcons/Icon";

import { colors } from "../Theme";
import Style from "./Style";

HeartAnimation = React.forwardRef(({}, ref) => {
  const fadeHeart = useRef(new Animated.Value(0)).current;

  React.useImperativeHandle(ref, () => ({
    heartAnimation,
  }));

  const heartAnimation = () => {
    fadeInLike();
    setTimeout(() => {
      fadeOutLike();
    }, 500);
  };

  const fadeInLike = () => {
    Animated.timing(fadeHeart, {
      toValue: 0.5,
      //duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const fadeOutLike = () => {
    Animated.timing(fadeHeart, {
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
            opacity: fadeHeart,
          },
        ]}
      >
        <Icon name="heart" size={175} fill={colors.red} />
        {/* <MaterialCommunityIcons name="heart" size={175} color={colors.red} /> */}
      </Animated.View>
    </View>
  );
});
export default HeartAnimation;
