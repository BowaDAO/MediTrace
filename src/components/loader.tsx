import { View, ActivityIndicator, Modal, StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants";

const Loader = () => {
  return (
    <Modal transparent={true} animationType="none">
      <View style={styles.container}>
        <View style={styles.card}>
          <ActivityIndicator size={"large"} color={COLORS.blue} />
          <Text>Please wait...</Text>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    backgroundColor: COLORS.black,
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Loader;
