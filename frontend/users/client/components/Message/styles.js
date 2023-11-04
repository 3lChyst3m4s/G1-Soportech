import { StyleSheet } from 'react-native';
import colors from '../../../../config/colors';
import tailwindColors from '../../../../config/tailwindColors';

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: tailwindColors.blue["700"],
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '80%',
  },
  remitente: {
    fontSize: 13.5,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  contentSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contenido: {
    fontSize: 13,
    color: '#ffffff',
    width: '90%',
    alignSelf: 'flex-start',
  },
  horaEnvio: {
    color: '#dddddd',
    fontSize: 10,
    alignSelf: 'flex-end',
  },
});

export default styles;