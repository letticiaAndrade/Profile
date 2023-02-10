import { StyleSheet, View } from 'react-native';
import TopoPerfil from './components/TopoPerfil';
import BottomPerfil from './components/BottomPerfil';

export default function App() {
  
  return (
    <View style={styles.container}>
      <TopoPerfil/>
      <BottomPerfil/>
     
    </View>
    // o StatusBar tem como utilidade alterar a barra de status do respectivo dispositivo móvel
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F271B',
    alignItems: 'center',
  },
});


