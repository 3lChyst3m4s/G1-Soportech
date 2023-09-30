import { StyleSheet } from 'react-native';
import colors from '../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  menu: {
    marginTop: 50,
    height: 220,
    justifyContent: 'space-between',
  },
  navButton: {
    backgroundColor: colors.primary,
    width: 300,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;