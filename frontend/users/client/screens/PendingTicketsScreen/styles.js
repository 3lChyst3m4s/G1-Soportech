import { StyleSheet } from "react-native";
import colors from '../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  statusContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 20,
  },
  space: {
    width: 0.5,
  },
  statusBox: {
    backgroundColor: colors.primary,
    padding: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 85,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    color: "white",
    fontWeight: "light",
    fontSize: 11,
  },
  titleContainer: {
    alignItems: "left",
    marginBottom: 15,
    borderColor: "gray",
    borderWidth: 0.8,
    marginHorizontal: 20,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  requirementTitle: {
    fontSize: 15,
    fontWeight: "light",
    backgroundColor: colors.primGray ,
    padding: 10,
    borderWidth: 0.5,
    borderColor: colors.primGray,
  },
  requirementBox: {
    backgroundColor: "#E7E7E" ,
    height: 635,
    borderWidth: 0.1,
    borderColor: "E7E7E",
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
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
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