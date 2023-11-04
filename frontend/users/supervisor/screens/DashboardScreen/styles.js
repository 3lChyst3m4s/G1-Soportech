import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  webLayout: {
    flex: 1,
    flexDirection: 'row',
  },
  mobileLayout: {
    flex: 1,
  },
  leftColumn: {
    flex: 1,
    padding: 16,
  },
  meter: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  meterText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  meterProgressContainer: {
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  rightColumn: {
    flex: 1,
    padding: 16,
  },
  randomCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: "80%",
    width: "100%",
  },
  randomCard: {
    width: '45%', // Ajusta el ancho para mostrar dos columnas
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    height: 190,
  },
  randomCardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  randomCardNumber: {
    fontSize: 36,
  },
  satisfactionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: "20%",
    width: "100%",
  },
  satisfactionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 36,
    color: 'yellow',
  },
});


export default styles;