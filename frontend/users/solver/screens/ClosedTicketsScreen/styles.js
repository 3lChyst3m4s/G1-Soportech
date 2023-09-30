import { StyleSheet } from "react-native";
import colors from '../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  filterInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tableHeaderText: {
    color: "white",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primGray,
    padding: 10,
    borderBottomWidth: .5,
    borderBottomColor: "black",
  },
});

export default styles;