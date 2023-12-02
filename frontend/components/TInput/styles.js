import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.8,
    marginBottom: 10,
  },
  inputContainer: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    flexDirection: 'row',
  },
  logo: {
    fontSize: 20,
    color: colors.primary,
    marginTop: 10,
  },
  input: {
    fontSize: 14,
    color: 'black',
    opacity: 0.4,
    marginLeft: 10,
    paddingLeft: 5,
    width: 250,
  },
});

export default styles;