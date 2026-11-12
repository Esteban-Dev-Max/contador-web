import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [likes, setLikes] = useState(0);
  const [registros, setRegistros] = useState<{ id: number; numero: number; hora: string }[]>([]);

  const incrementarContador = () => {
    const nuevoTotal = likes + 1;
    setLikes(nuevoTotal);

    // Obtener hora actual formateada
    const ahora = new Date();
    const horaExacta = ahora.toTimeString().split(' ')[0]; // HH:MM:SS

    const nuevoRegistro = {
      id: Date.now(),
      numero: nuevoTotal,
      hora: horaExacta,
    };

    setRegistros([nuevoRegistro, ...registros]);
  };

  const reiniciarContador = () => {
    setLikes(0);
    setRegistros([]);
  };

  return (
    <View style={estilos.body}>
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Interactividad en Móvil</Text>
        <Text style={estilos.subtitulo}>Contador de clics con React Native</Text>

        {/* Reto 2: Color condicional si supera 10 */}
        <Text style={[estilos.counterBox, likes > 10 && { color: '#e67e22' }]}>
          {likes}
        </Text>

        {/* Botón Principal */}
        <TouchableOpacity style={estilos.btnClick} onPress={incrementarContador}>
          <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
        </TouchableOpacity>

        {/* Reto 1: Botón Reiniciar */}
        <TouchableOpacity style={estilos.btnReset} onPress={reiniciarContador}>
          <Text style={estilos.btnText}>Reiniciar a Cero</Text>
        </TouchableOpacity>

        {/* Tabla de Registros */}
        <View style={estilos.tableContainer}>
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>Nº Clic</Text>
            <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
          </View>
          <ScrollView style={estilos.tableBody}>
            {registros.map((item, index) => (
              <View 
                key={item.id} 
                style={[estilos.tr, index % 2 === 0 ? estilos.trEven : null]}
              >
                <Text style={[estilos.td, estilos.cellNumero]}>{item.numero}</Text>
                <Text style={[estilos.td, estilos.cellHora]}>{item.hora}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f4f7f6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 15,
    textAlign: 'center',
  },
  counterBox: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 20,
  },
  btnClick: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnReset: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tableContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tableBody: {
    maxHeight: 150,
  },
  tr: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#ffffff',
  },
  trEven: {
    backgroundColor: '#fafafa',
  },
  th: {
    color: '#7f8c8d',
    fontWeight: '600',
    fontSize: 13,
    padding: 8,
    textAlign: 'center',
  },
  td: {
    color: '#333',
    fontSize: 13,
    padding: 8,
    textAlign: 'center',
  },
  