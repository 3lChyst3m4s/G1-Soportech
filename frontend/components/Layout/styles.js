import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
  menu: {
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 110,
    width: 412,
    padding: 10,
    zIndex: 100,
  },
  sep: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginVertical: 10,
  },
});

export default styles;