import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import { colors } from "../Theme";

function GenericModal({ isModalVisible, setIsModalVisible }) {
  const topFlex = 1;
  const bottomFlex = 1;

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
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
          onPress={() => setIsModalVisible(!isModalVisible)}
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
              backgroundColor: colors.slategray,
              borderRadius: 10,
            },
          ]}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.modalView}>
              <View style={styles.itemContainer}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={[styles.itemText, { color: colors.red }]}>
                    Text
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.itemContainer}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={[styles.itemText, { color: colors.red }]}>
                    Text
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.itemContainer}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={styles.itemText}>Text</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.itemContainer}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={styles.itemText}>Text</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.itemContainer}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={styles.itemText}>Text</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.itemContainer}>
                <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={styles.itemText}>Text</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
          <View style={[styles.cancelContainer, { marginBottom: 30 }]}>
            <Text style={styles.cancelText}>Cancel</Text>
          </View>
        </TouchableOpacity>
      </>
    </Modal>
  );
}
const styles = StyleSheet.create({
  cancelContainer: {
    height: 50,
    backgroundColor: colors.slategray,
    flexDirection: "row",
    padding: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelText: {
    color: colors.darkRed,
    textAlign: "center",
    fontSize: 18,
  },
  itemContainer: {
    flex: 1,
  },
  itemText: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
  },
  modalView: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: colors.white,
    opacity: 0.2,
    margin: 5,
  },
});

GenericModal.propTypes = {
  setIsModalVisible: PropTypes.func.isRequired,
};

export default GenericModal;
