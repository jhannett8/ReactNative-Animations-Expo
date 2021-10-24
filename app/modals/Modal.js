import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import { colors } from "../Theme";

function Modal({
  ismodalVisible,
  setIsModalVisible,
}) {
  const insets = useSafeAreaInsets();
  const topFlex = 1;
  const bottomFlex = 1;

  return (
    <Modal animationType="slide" transparent={true} visible={ismodalVisible}>
      <>
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
          }}
        >
          <View style={{ flex: 1, opacity: 0.3 }} />
          <LinearGradient
            colors={["transparent", colors.black, colors.black]}
            style={{ flex: 1, opacity: 0.9 }}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => setIsModalVisible(!ismodalVisible)}
        >
          <View style={{ flex: topFlex }} />
        </TouchableWithoutFeedback>
        <View
          style={[
            {
              flex: bottomFlex,
              bottom: 0,
              marginHorizontal: 15,
              marginVertical: 15,
              backgroundColor: colors.charcoal,
              borderRadius: 10,
            },
          ]}
        >
          <View style={[{ flex: 1 }, styles.container]}>
            <View style={styles.modalView}>
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <Text style={[styles.itemText, { color: colors.red }]}>
                    Text
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <Text style={[styles.itemText, { color: colors.red }]}>
                    Text
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <Text style={styles.itemText}>Text</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <Text style={styles.itemText}>
                    Text
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <Text style={styles.itemText}>Text</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <Text style={styles.itemText}>Text</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => setIsModalVisible(!ismodalVisible)}>
          <View
            style={[styles.cancelContainer, { marginBottom: insets.bottom }]}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </View>
        </TouchableOpacity>
      </>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalView: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
  },
  separator: {
    height: 1,
    backgroundColor: colors.lightGrey,
    opacity: 0.2,
    margin: 5,
  },
  itemText: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
  },
  itemContainer: {
    flex: 1,
  },
  cancelText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 18,
  },
  cancelContainer: {
    height: 50,
    backgroundColor: colors.charcoal,
    flexDirection: "row",
    padding: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
Modal.propTypes = {
  setIsModalVisible: PropTypes.func.isRequired,
  setIsShareVisible: PropTypes.func.isRequired,
  setIsCommentVisible: PropTypes.func.isRequired,
};

export default Modal;
