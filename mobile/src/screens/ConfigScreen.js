import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ConfigScreen({ route }) {
  const { socket } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configurações do Aplicativo</Text>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>👤 Meu Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>🔔 Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>🌐 Servidor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>ℹ️ Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.option, styles.logoutButton]}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Versão 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a'
  },
  section: {
    padding: 15
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  option: {
    backgroundColor: '#2d3748',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },
  optionText: {
    color: '#fff',
    fontSize: 16
  },
  logoutButton: {
    backgroundColor: '#dc2626',
    marginTop: 20
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#374151'
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 14
  }
});
