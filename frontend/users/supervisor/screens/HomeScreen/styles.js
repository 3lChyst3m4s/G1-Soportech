import { StyleSheet } from "react-native";
import colors from '../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    marginTop: 30,
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
  statusImageContainer: {
    width: 35, // Ancho fijo del contenedor de la imagen
    height: 35, // Alto fijo del contenedor de la imagen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#DAE8FC"
  },
  statusImage: {
    width: 24, // Ancho de la imagen dentro del contenedor
    height: 24, // Alto de la imagen dentro del contenedor
    resizeMode: 'contain',
  },
  statusCircle: {
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 5,
    borderRadius: 5,
    
  },
  statusCell: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 5,
    width: 150,
  },
  statusCircleGreen: {
    backgroundColor: "green",
  },
  statusCircleYellow: {
    backgroundColor: "yellow",
  },
  statusCircleRed: {
    backgroundColor: "red",
  },

});

export default styles;