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
  activeTabText: {
    color: '#000', // Color del texto cuando la pestaña está activa
    fontWeight: 'bold', // Fuente en negrita para indicar que está seleccionada
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000', // Línea de abajo cuando la pestaña está activa
  },  
  statusText: {
    color: "white",
    fontWeight: "light",
    fontSize: 11,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ContainerTitle: {
    borderColor: "gray",
    backgroundColor: "#E7EDFF",
    marginHorizontal: 20,
    height: 377,
  },
  titleColumn: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  subtitle: {
    color: "black",
    fontWeight: "light",
    fontSize: 14,
    marginBottom: 20,
  },
  description: {
    color: "black",
    fontWeight: "light",
    fontSize: 14,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default styles;