import React, { useContext } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Svg, { G, Rect } from 'react-native-svg';

import { Layout } from "../../../../components/Layout";
import styles from './styles';

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};


const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starColor = i <= rating ? 'yellow' : 'gray';
    stars.push(
      <Text key={i} style={[styles.star, { color: starColor }]}>★</Text>
    );
  }
  return (
    <View style={styles.satisfactionCard}>
      <Text style={styles.satisfactionTitle}>Nivel de satisfacción</Text>
      <View style={styles.starsContainer}>
        {stars}
      </View>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const meters = [
    { name: 'JUAN', percentage: 40 },
    { name: 'PEDRO', percentage: 60 },
    { name: 'LUIS', percentage: 75 },
    { name: 'MIGUEL', percentage: 90 },
  ];

  return (
    <Layout 
      navigation={navigation}
      title="Consultas Pendientes"
      screen={
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            {meters.map((meter, index) => (
              <View key={index} style={styles.meter}>
                <Text style={styles.meterText}>{meter.name}</Text>
                <View style={styles.meterProgressContainer}>
                  <Svg width="100%" height="10">
                    <G>
                      <Rect
                        width="100%"
                        height="100%"
                        rx={5}
                        ry={5}
                        fill="#ccc"
                      />
                      <Rect
                        width={(meter.percentage / 100) * 100 + '%'}
                        height="100%"
                        rx={5}
                        ry={5}
                        fill="#4CAF50"
                      />
                    </G>
                  </Svg>
                </View>
                <Text>{meter.percentage}%</Text>
              </View>
            ))}
          </View>
          <View style={styles.rightColumn}>
            {renderStars(4)} {/* Puedes ajustar el número de estrellas aquí */}
            <View style={styles.randomCardContainer}>
                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Cantidad Total de Usuarios</Text>
                  <Text style={styles.randomCardNumber}>
                    {generateRandomNumber()}
                  </Text>
                </View>

                <View  style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Cantidad Total de Solicitudes</Text>
                  <Text style={styles.randomCardNumber}>
                    {generateRandomNumber()}
                  </Text>
                </View>

                <View  style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Tickets Caducados</Text>
                  <Text style={styles.randomCardNumber}>
                    {generateRandomNumber()}
                  </Text>
                </View>

                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Tickets en Proceso</Text>
                  <Text style={styles.randomCardNumber}>
                    {generateRandomNumber()}
                  </Text>
                </View>

                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Tickets Observados</Text>
                  <Text style={styles.randomCardNumber}>
                    {generateRandomNumber()}
                  </Text>
                </View>

                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Tickets Cerrados</Text>
                  <Text style={styles.randomCardNumber}>
                    {generateRandomNumber()}
                  </Text>
                </View>

            </View>
          </View>
        </View>
      }
    />
  );
}


export default HomeScreen;