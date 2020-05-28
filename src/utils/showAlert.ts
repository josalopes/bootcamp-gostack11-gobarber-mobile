import { Alert } from 'react-native';

export default function showAlert(alerta: string, mensagem: string): void {
  Alert.alert(
    alerta, mensagem,
    [
      {
        /* text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel', */
      },
      { text: 'OK', onPress: () => '' },
    ]
  );

}

