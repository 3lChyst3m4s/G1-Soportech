import { StyleSheet } from "react-native";
import colors from '../../../../config/colors';

const styles = StyleSheet.create({
  activeTabBox: {
    backgroundColor: '#5D6AE0',
    padding: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 85,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
    borderBottomColor: 'white',
  },  
  statusText: {
    color: "white",
    fontWeight: "light",
    fontSize: 11,
  },
});

export default styles;