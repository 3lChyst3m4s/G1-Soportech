import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    color: colors.primary,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 30,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  infoArea: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: colors.primary,
    color: '#fff',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 6,
  },
  infoCell: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: '#666',
  },
  profileImage: {
    width: 150,
    height: 150,
    margin: 16,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 18,
    color: '#888',
  },
});

export default styles;