import React, { useState, useRef } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import HeartAnimation from "./app/animations/Heart";
import FadeAnimation from "./app/animations/Fade";
import GenericModal from "./app/modals/GenericModal";
import Like from "./app/icons/Like";
import { colors } from "./app/Theme";

export default function App() {
  //Like
  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(13);
  //Modals
  const [isModalVisible, setIsModalVisible] = useState(false);
  //Animation Refs
  const animationHeartRef = useRef();
  const animationFadeRef = useRef();
  //SinglePress vs DoublePress
  const [lastPress, setLastPress] = useState(0);
  const timeout = useRef();
  //Fade Animation Bool
  const [isFadeLoaded, setIsFadeLoaded] = useState(false);

  const handleDoublePress = () => {
    // API CALL
    setIsLiked((prevLike) => !prevLike);
    if (isLiked == true) {
      setNumberOfLikes(numberOfLikes - 1);
      setIsLiked(false);
    } else {
      setNumberOfLikes(numberOfLikes + 1);
      setIsLiked(true);
      heartAnimation();
    }
  };

  
  const handleSinglePress = async () => {
    if (!isFadeLoaded) {
      fadeInAnimation();
      setIsFadeLoaded(true);
    }
    if (isFadeLoaded) {
      fadeOutAnimation();
      setIsFadeLoaded(false);
    }
  };

  const onManualPress = async () => { 
    const time = new Date().getTime();
    const delta = time - lastPress;
    const DOUBLE_PRESS_DELAY = 300;
    //Double Tap Event
    if (delta < DOUBLE_PRESS_DELAY) {
      handleDoublePress();
      setLastPress(time);
      clearTimeout(timeout.current);
    }
    //Single Tap Event
    else {
      timeout.current = setTimeout(() => {
        handleSinglePress();
      }, DOUBLE_PRESS_DELAY);
      setLastPress(time);
    }
  };

  const onManualLongPress = () => {
    setIsModalVisible(true);
  };
  
  const fadeAnimation = () => {
    if (animationFadeRef.current) {
      animationFadeRef.current.fadeAnimation();
    }
  }
  
  const fadeInAnimation = () => {
    if (animationFadeRef.current) {
      animationFadeRef.current.fadeInAnimation();
    }
  };
  
  const fadeOutAnimation = () => {
    if (animationFadeRef.current) {
      animationFadeRef.current.fadeOutAnimation();
    }
  };
  
  const heartAnimation = () => {
    if (animationHeartRef.current) {
      animationHeartRef.current.heartAnimation();
    }
  };

  return (
    <View style={{ marginTop: 45, flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={onManualPress}
        onLongPress={onManualLongPress}
      >
        <View style={styles.container}>
          {/* Animations */}
          <HeartAnimation ref={animationHeartRef} />
          <FadeAnimation ref={animationFadeRef} />
          <View >
            <View style={styles.icon}>
              <Like
                isLiked={isLiked}
                numberOfLikes={numberOfLikes}
                handleLike={handleDoublePress}
                iconSize={31}
                textSize={12}
                textColor={colors.darkGray}
              />
            </View>
            <TouchableWithoutFeedback onPress={handleDoublePress}>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Text>Like Animation</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleSinglePress}>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Text>Fade Animation</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <Text style={{fontSize: 20, color: colors.slategray}}>Single tap for fade Animation</Text>
            <Text style={{fontSize: 20, color: colors.slategray}}>Press and Hold for a Modal</Text>
            <Text style={{fontSize: 20, color: colors.slategray}}>Double tap to like/unlike</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <GenericModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "50%",
    height: 45,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.darkRed,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  icon: {
    height: 80,
    width: "100%",
  },
});
