import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    width: 400,
    maxWidth: '80%'
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 16
  },

  form: {
    marginTop: 24,
    gap: 16
  }
});
