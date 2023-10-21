import { StyleSheet } from 'react-native';
import colors from '../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  menu: {
    marginTop: 50,
    height: 'auto',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  tableContainer: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  table: {
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  headerCell: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  tableCell: {
    textAlign: "center",
    minWidth: 100,
    padding: 5,
  },
});

export default styles;