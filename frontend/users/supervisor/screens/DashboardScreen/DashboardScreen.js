import React from 'react';
import { View, ScrollView, Text, Platform } from 'react-native';
import Svg, { G, Rect } from 'react-native-svg';

import { Layout } from "../../../../components/Layout";
import styles from './styles';

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {  
    const starColor = i <= rating ? '#FFD400' : '#D5D8E8';
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

const DashboardScreen = ({ navigation }) => {
  const meters = [
    { name: 'JUAN', percentage: 85, color: '#2C3B9C' },
    { name: 'PEDRO', percentage: 45, color: '#4488FD' },
    { name: 'LUIS', percentage: 15, color: '#0DC0C8' },
    { name: 'LIAN', percentage: 63, color: '#00CFBD' },
  ];

  return (
    <Layout
      navigation={navigation}
      title="Dashboard"
     >
      <View style={styles.container}>
        {Platform.OS === 'web' ? (
          <View style={styles.webLayout}>
            <View style={styles.leftColumn}>
              {meters.map((meter, index) => (
                <View key={index} style={styles.meter}>
                  <Text style={styles.meterText}>{meter.name}</Text>
                  <View style={styles.meterProgressContainer}>
                    <Svg width="100%" height={10}>
                      <G>
                        <Rect width="100%" height="100%" rx={5} ry={5} fill="#D5D8E8" />
                        <Rect
                          width={(meter.percentage / 100) * 100 + '%'}
                          height="100%"
                          rx={5}
                          ry={5}
                          fill={meter.color}
                        />
                      </G>
                    </Svg>
                  </View>
                  <Text>{meter.percentage}%</Text>
                </View>
              ))}
            </View>
            <View style={styles.rightColumn}>
              {renderStars(4)}
              <View style={styles.randomCardContainer}>
                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Cantidad Total de Usuarios</Text>
                  <Text style={styles.randomCardNumber}>
                    {generateRandomNumber()}
                  </Text>
                </View>

                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Cantidad Total de Solicitudes</Text>
                  <Text style={styles.randomCardNumber}>
                    {generateRandomNumber()}
                  </Text>
                </View>

                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Tickets Caducados</Text>
                  <Text style={styles.randomCardNumber}>
                    {generateRandomNumber()}
                  </Text>
                </View>

                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Tickets por Atender</Text>
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

              </View>
            </View>
          </View>
        ) : (
          <ScrollView style={styles.mobileLayout}>
            <ScrollView style={styles.medidores}>
              {meters.map((meter, index) => (
                <View key={index} style={styles.meter}>
                  <Text style={styles.meterText}>{meter.name}</Text>
                  <View style={styles.meterProgressContainer}>
                    <Svg width="100%" height={10}>
                      <G>
                        <Rect width="100%" height="100%" rx={5} ry={5} fill="#ccc" />
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
            </ScrollView>
            <View style={styles.rightColumn}>
              {renderStars(4)}
              <View style={styles.randomCardContainer}>
                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Cantidad total de usuarios</Text>
                  <Text style={styles.randomCardNumber}>
                    {generateRandomNumber()}
                  </Text>
                </View>

                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>Cantidad total de solicitudes</Text>
                  <Text style={styles.randomCardNumber}>
                    {generateRandomNumber()}
                  </Text>
                </View>

                <View style={styles.randomCard}>
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
                  <Text style={styles.randomCardTitle}>Tickets en Proceso</Text>
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

              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </Layout>
  );
};

export default DashboardScreen;