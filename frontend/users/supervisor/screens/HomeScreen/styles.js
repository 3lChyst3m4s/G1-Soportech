import { StyleSheet } from "react-native";
import colors from '../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0',
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
    marginBottom: 15,
    marginHorizontal: 20,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  requirementTitle: {
    fontSize: 15,
    fontWeight: "light",
    backgroundColor: colors.primGray,
    padding: 10,
  },
  statusImage: {
    width: 24, // Ajusta el ancho de la imagen
    height: 24, // Ajusta el alto de la imagen
    resizeMode: 'contain', // Ajusta la forma en que se adapta la imagen
  },
  requirementBox: {
    backgroundColor: "#E7E7E",
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
    margin: 20,  // Agrega un margen para separar la tabla del borde de la pantalla
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    padding: 20,  // Aumenta el espacio entre los elementos del encabezado
  },
  headerCell: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20, // Tamaño de fuente más grande para el encabezado
    width: 150,  // Ancho de las celdas del encabezado
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,  // Aumenta el espacio entre las filas
    padding: 20,  // Aumenta el espacio entre los elementos de las filas
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  tableCell: {
    textAlign: "center",
    minWidth: 150,  // Ancho de las celdas de contenido
    padding: 20,  // Aumenta el espacio dentro de las celdas
    fontSize: 18, // Tamaño de fuente más grande para el contenido
  },
  statusCell: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#DAE8FC"
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    position: "absolute",
    top: "40%", 
    left: "10%",
    right: "10%",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: 'center', 
    maxWidth: 300, 
  },
  modalContent: {
    padding: 20,
    justifyContent: 'center', 
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding:10,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  optionImage: {
    width: 24, 
    height: 24, 
    marginRight: 10, 
  },
  optionText: {
    fontSize: 16,
  },
});

export default styles;