import { StyleSheet } from "react-native";
import colors from '../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  type: {
    width: 330,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#D8D8D8",
    marginVertical: 10,
  },
  typeText: {
    color: '#000',
    fontSize: 16,
  },
  space1: {
    backgroundColor: colors.support,
    width: 330,
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  space2: {
    backgroundColor: colors.support,
    width: 330,
    height: 300,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
    textAlignVertical: 'top',
  },
  space3: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: colors.support,
    width: 150,
    height: 40,

  },
  space4: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: colors.support,
    width: 150,
    height: 40,
  },
  datosContainer: {
    width: 330,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  label: {
    fontWeight: 'bold',
    color: '#ffff',
    backgroundColor: "#2F58E9",
    height: 40,
    padding:5,
    textAlignVertical: "center",
  },
  contenedor: {
    textAlign: "center",
    alignSelf:"center",
    paddingLeft:10,
    width:"60%",
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  optionItem: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeButton: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default styles;