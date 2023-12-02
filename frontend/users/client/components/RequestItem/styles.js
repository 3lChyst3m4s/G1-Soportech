import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    marginVertical: 2.5,
    marginHorizontal: 5,
  },
  tableCell: {
    textAlign: "center",
    minWidth: 100,
    padding: 5,
  },
});

export default styles