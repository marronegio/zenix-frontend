import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: '100%'
  },
  container: {
    width: 330,
    maxWidth: '80%'
  },
  loginTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    textAlign: 'center'
  },
  form: {
    marginTop: 44,
    marginBottom: 24,
    gap: 16,
  },
  createAccount: {
    // width: 280,
    gap: 16
  },

  button: {
    width: 148,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 8
  },
});
