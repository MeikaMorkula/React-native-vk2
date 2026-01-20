import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [modalVisibile, setModalVisible] = useState<boolean>(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={modalVisibile}
        onRequestClose={() => {
          setModalVisible(!modalVisibile);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>This is a modal</Text>
          <Pressable onPress={() => setModalVisible(!modalVisibile)} style={[styles.button, styles.buttonClose]}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
          <StatusBar style="auto" />
        </View>
        </View>
        
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text>Click to show modal message</Text>
      </Pressable>
    </View>
  );
}

//Tyylit otettu https://reactnative.dev/docs/modal esimerkistä
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
