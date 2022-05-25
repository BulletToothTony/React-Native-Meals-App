import { Text, View, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e2b497",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomWidth: 2,
  },
});
