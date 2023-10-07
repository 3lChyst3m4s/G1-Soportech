import { StyleSheet } from 'react-native';
import colors from '../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 300,
    height: 150,
    borderRadius: 10,

  },
  leftPart: {
    backgroundColor: "#2737C8",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  rightPart: {
    flex: 1.4,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  number: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    tintColor: 'black',
  },
});

export default styles;