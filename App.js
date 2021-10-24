import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View } from 'react-native';

import HeartAnimation from "./app/animations/Heart";
import FadeAnimation from './app/animations/Fade';
import Modal from './app/modals/Modal';

export default function App() {
    //Like State Variables
    const [isLiked, setIsLiked] = useState(false);
    const [numberOfLikes, setNumberOfLikes] = useState(13);
    //Animation Refs
    const animationHeartRef = useRef();
    const animationFadeRef = useRef();

     
    const handleLike = () => {
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

    const heartAnimation = () => {
      if (animationHeartRef.current) {
        animationHeartRef.current.heartAnimation();
      }
    };

    const handleSinglePress = async () => {
          fadeOutPlayAnimation();
          fadeInPlayAnimation();
        };
    
    const onManualPress = async () => {
      const time = new Date().getTime();
      const delta = time - lastPress;
      const DOUBLE_PRESS_DELAY = 300;
      //Double Tap Event
      if (delta < DOUBLE_PRESS_DELAY) {
        handleLike();
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

  return (
    <>
    <TouchableWithoutFeedback  
      onPress={onManualPress}
      onLongPress={onManualLongPress}
    >
      <View style={styles.container}>
          <Text>***Single tap for fade Animation***</Text>
          <Text>***Double tap to like/unlike***</Text>
        <View style={{flexDirection: 'column-reverse'}}>
          <TouchableWithoutFeedback>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Text>Like Animation</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Text>Fade Animation</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {/* Animations */}
        <HeartAnimation ref={animationHeartRef} />
        <FadeAnimation ref={animationFadeRef} />
      </View>
    </TouchableWithoutFeedback>
    <Modal/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    height: 80, 
    width: '100%', 
    alignItems: "center", 
    justifyContent: "center",
  }, 
  button: {
    width: '85%',
    height: '100%',
    marginHorizontal: 5,
    alignItems: "center", 
    justifyContent: "center",
  }
});
