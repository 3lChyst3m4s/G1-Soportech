import { StyleSheet } from 'react-native';
import colors from '../../config/tailwindColors';

const gStyles = (color, buttonStyle) => {
  return StyleSheet.create({
    default: {
      backgroundColor: colors[color]['500'],
      ...buttonStyle,
    },
    hovered: {
      backgroundColor: colors[color]['600'],
      ...buttonStyle,
    },
    pressed: {
      backgroundColor: colors[color]['700'],
      ...buttonStyle,
    },
    focused: {
      backgroundColor: colors[color]['800'],
      ...buttonStyle,
    },
    disabled: {
      backgroundColor: colors.gray['200'],
      ...buttonStyle,
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    disabledText: {
      color: colors.gray['400'],
    },
  });
}

export default gStyles;