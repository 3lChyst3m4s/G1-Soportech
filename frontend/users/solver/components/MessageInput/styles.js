import { StyleSheet } from 'react-native';
import colors from '../../../../config/colors';

const styles = StyleSheet.create({
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  messageInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 10,
  },
  sendMessageButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: colors.primary,
    color: '#fff',
    borderRadius: 10,
  },
});

export default styles