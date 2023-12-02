import { StyleSheet } from 'react-native'
import colors from '../../../../config/colors'
import tailwindColors from '../../../../config/tailwindColors'

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '50%',
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    maxHeight: '80%',
    marginTop: 15,
    marginBottom: 30,
  },
  tableContainer: {
    width: '100%',
    maxHeight: '100%',
  },
  table: {
    backgroundColor: tailwindColors.blue["100"],
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
    marginHorizontal: 5,
  },
});

export default styles