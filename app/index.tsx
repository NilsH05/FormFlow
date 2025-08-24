import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  // Funktionen, die ausgeführt werden, wenn der Nutzer klickt
  const handleFormularSuchen = () => {
    Alert.alert("Formular suchen", "Hier geht es zum Formularauswahl-Screen!");
  };

  const handleAnalyseStarten = () => {
    Alert.alert("Analyse starten", "Hier beginnt die persönliche Analyse!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Willkommen zur Kindergeld-App!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Formular suchen" onPress={handleFormularSuchen} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Analyse starten" onPress={handleAnalyseStarten} />
      </View>
    </View>
  );
}

// Styles = Gestaltung
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
});
