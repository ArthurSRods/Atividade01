import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { useFonts, Inter_300Light } from "@expo-google-fonts/inter";

import NissanImg from "./assets/nissan.jpg";
import DolphinImg from "./assets/byd-dolphin.jpg";
import SealImg from "./assets/byd-seal.jpg";

const carros = [
  { id: "1", nome: "Nissan March", ano: "2017", cor: "Prata", imagem: NissanImg },
  { id: "2", nome: "BYD Dolphin", ano: "2025", cor: "Grafite", imagem: DolphinImg },
  { id: "3", nome: "BYD Seal", ano: "2025", cor: "Cinza", imagem: SealImg },
];

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_300Light });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Objeto</Text>
      
      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.carName}>{item.nome}</Text>
              <Text style={styles.carDetails}>Ano: {item.ano}</Text>
              <Text style={styles.carDetails}>Cor: {item.cor}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#1c1c1e" },
  header: { fontSize: 22, fontFamily: "Inter_300Light", fontWeight: "bold", marginBottom: 10, color: "#fff" },
  card: {
    backgroundColor: "#2c2c2e",
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row", // Faz com que a imagem e o texto fiquem lado a lado
    alignItems: "center", // Alinha os itens verticalmente
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    borderRadius: 40,
    marginRight: 10, // Espaçamento entre a imagem e o texto
  },
  info: {
    flex: 1, // Faz com que o texto ocupe o espaço restante
  },
  carName: { fontSize: 18, fontFamily: "Inter_300Light", fontWeight: "bold", color: "#fff" },
  carDetails: { fontSize: 14, fontFamily: "Inter_300Light", color: "#bbb" },
});

