import React from "react";
import { View, ScrollView, Text, Platform } from "react-native";
import Svg, { G, Rect } from "react-native-svg";

import { Layout } from "../../../../components/Layout";
import BarChartComponent from "../../components/BarChartComponent";
import LineChartComponent from "../../components/LineChartComponent";
import styles from "./styles";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starColor = i <= rating ? "#8892EF" : "#D5D8E8";
    stars.push(
      <Text key={i} style={[styles.star, { color: starColor }]}>
        ★
      </Text>
    );
  }
  return (
    <View style={styles.satisfactionCard}>
      <View style={styles.starsContainer}>{stars}</View>
      <Text style={{ fontSize: 16, marginTop: 15 }}>
        Promedio Semanal: {rating}
      </Text>
    </View>
  );
};

const DashboardScreen = ({ navigation }) => {
  const meters = [
    { name: "JUAN", percentage: 85, color: "#2C3B9C" },
    { name: "PEDRO", percentage: 45, color: "#4488FD" },
    { name: "LUIS", percentage: 15, color: "#0DC0C8" },
    { name: "LIAN", percentage: 63, color: "#00CFBD" },
  ];

  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Tickets Resueltos",
        type: "pie",
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "center",
          fontSize: 35,
          fontWeight: "bold",
        },
        radius: ["40%", "50%"],
        center: ["50%", "70%"],
        startAngle: 180,
        endAngle: 30,
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          color: "#3e4ed4",
          borderRadius: 30,
        },
        data: [{ value: 57, name: "88%" }],
        chartArea: {
          width: "100%",
          height: "100%",
        },
      },
    ],
  };

  return (
    <Layout navigation={navigation} title="Dashboard">
      <View style={styles.container}>
        {Platform.OS === "web" ? (
          <View style={styles.webLayout}>
            <View style={styles.leftColumn}>
              {meters.map((meter, index) => (
                <View key={index} style={styles.meter}>
                  <View style={{ justifyContent: "space-between" }}>
                    <Text style={styles.meterText}>{meter.name}</Text>
                    <Text>{meter.percentage}%</Text>
                  </View>
                  <View style={styles.meterProgressContainer}>
                    <Svg width="100%" height={10}>
                      <G>
                        <Rect
                          width="100%"
                          height="100%"
                          rx={5}
                          ry={5}
                          fill="#D5D8E8"
                        />
                        <Rect
                          width={(meter.percentage / 100) * 100 + "%"}
                          height="100%"
                          rx={5}
                          ry={5}
                          fill={meter.color}
                        />
                      </G>
                    </Svg>
                  </View>
                </View>
              ))}

              <View style={styles.chartContainer}>
                <Text style={styles.randomCardTitle}>
                  Analisis de Sentimientos
                </Text>
                <BarChartComponent />
              </View>
            </View>
            <View style={styles.rightColumn}>
              <View style={styles.chartContainer}>
                <LineChartComponent option={option} />
              </View>
              {renderStars(4)}
              <View style={styles.randomCardContainer}>
                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>
                    Numero de Solicitudes Completadas
                  </Text>
                  <Text style={styles.randomCardNumber}>57</Text>
                </View>

                <View style={styles.randomCard}>
                  <Text style={styles.randomCardTitle}>
                    Número de Solicitudes en Proceso
                  </Text>
                  <Text style={styles.randomCardNumber}>13</Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <ScrollView style={styles.mobileLayout}>
            <View
              style={
                styles.chartContainer && {
                  height: "12%",
                  flexDirection: "column-reverse",
                }
              }
            >
              <LineChartComponent option={option} />
              <Text style={{ textAlign: "center", fontSize: 15 }}>
                TICKETS RESUELTOS
              </Text>
            </View>

            <Text style={styles.globalTitle}>Satisfacción del Cliente</Text>
            {renderStars(4)}

            <Text style={styles.globalTitle}>Avance Individual</Text>
            {meters.map((meter, index) => (
              <View key={index} style={styles.meter}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.meterText}>{meter.name}</Text>
                  <Text style={{ color: "#7C7D99", fontSize: 15 }}>
                    {meter.percentage}%
                  </Text>
                </View>
                <View style={styles.meterProgressContainer}>
                  <Svg width="100%" height={10}>
                    <G>
                      <Rect
                        width="100%"
                        height="100%"
                        rx={5}
                        ry={5}
                        fill="#f4f4ff"
                      />
                      <Rect
                        width={(meter.percentage / 100) * 100 + "%"}
                        height="100%"
                        rx={5}
                        ry={5}
                        fill="#2D3ECB"
                      />
                    </G>
                  </Svg>
                </View>
              </View>
            ))}

            <View style={styles.chartContainer}>
              <Text style={styles.globalTitle}>Analisis de Sentimientos</Text>
              <BarChartComponent />
            </View>

            <Text style={styles.globalTitle}>Métricas Mensuales</Text>
            <View style={styles.randomCardContainer}>
              <View style={styles.randomCard}>
                <Text style={styles.randomCardNumber}>
                  {generateRandomNumber()}
                </Text>
                <Text style={styles.randomCardTitle}>Cantidad de usuarios</Text>
              </View>

              <View style={styles.randomCard}>
                <Text style={styles.randomCardNumber}>
                  {generateRandomNumber()}
                </Text>
                <Text style={styles.randomCardTitle}>
                  Cantidad de solicitudes
                </Text>
              </View>

              <View style={styles.randomCard}>
                <Text style={styles.randomCardNumber}>
                  {generateRandomNumber()}
                </Text>
                <Text style={styles.randomCardTitle}>Tickets Atendidos</Text>
              </View>

              <View style={styles.randomCard}>
                <Text style={styles.randomCardNumber}>
                  {generateRandomNumber()}
                </Text>
                <Text style={styles.randomCardTitle}>Tickets en Proceso</Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </Layout>
  );
};

export default DashboardScreen;
