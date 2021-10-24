import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { colors } from "../Theme";
import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";

const Like = ({
  iconSize,
  isLiked,
  handleLike,
  numberOfLikes,
  textColor,
  textSize,
}) => {
  const likeColor = isLiked === true ? colors.red : colors.darkGray;

  const text = {
    color: textColor,
    fontSize: textSize,
  };

  return (
    <TouchableWithoutFeedback onPress={handleLike}>
      <View style={styles.likes}>
        <FontAwesome name="heart" size={iconSize} color={likeColor} />
        <Text style={text}>{numberOfLikes}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  likes: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});

Like.defaultProps = {
  iconSize: 35,
  isLiked: false,
  handleLike: () => console.log("Liked Icon Pressed"),
  numberOfLikes: 35,
  textColor: colors.white,
  textSize: 12,
};

Like.propTypes = {
  iconSize: PropTypes.number,
  isLiked: PropTypes.bool,
  handleLike: PropTypes.func,
  numberOfLikes: PropTypes.number,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
};

export default Like;
