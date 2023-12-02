import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  navButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: 30,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
  },
});

export default styles;