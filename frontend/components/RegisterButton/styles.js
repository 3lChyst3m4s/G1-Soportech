import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  registerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: colors.primary,
  },
  registerButton: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default styles;