import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';
import tailwindColors from '../../../config/tailwindColors';

const styles = StyleSheet.create({
  dialog: {
    width: '90%',
    height: 'auto',
    backgroundColor: tailwindColors.blue[400],
    borderRadius: 10,
  },
  dialogTitle: {
    backgroundColor: tailwindColors.blue[600],
    borderBottomWidth: 0,
    padding: 10,
  },
  dialogTitleText: {
    color: tailwindColors.gray[100],
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  dialogContent: {
    padding: 30,
    backgroundColor: tailwindColors.blue[400],
  },
  dialogText: {
    color: tailwindColors.gray[100],
    fontSize: 14,
    alignSelf: 'center',
  },
  dialogFooter: {
    backgroundColor: tailwindColors.blue[400],
    borderTopWidth: 0,
    justifyContent: 'center',
  },
  dialogButton: {
    borderWidth: 1,
    borderColor: tailwindColors.gray[100],
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  dialogButtonText: {
    color: tailwindColors.gray[100],
    fontSize: 14,
  },
});

export default styles;