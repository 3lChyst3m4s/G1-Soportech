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
    borderBottomWidth: 1,
    borderColor: colors.primGray,
    marginVertical: 10,
  },
  typeText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  space1: {
    backgroundColor: colors.support,
    width: 330,
    height: 40,
    marginVertical: 30,
  },
  space2: {
    backgroundColor: colors.support,
    width: 330,
    height: 300,
    marginBottom: 30,
  },
});

export default styles;