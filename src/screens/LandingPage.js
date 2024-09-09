import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>YangTu</Text>
        <TouchableHighlight style={styles.loginButton}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Login</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.content}>
        <View style={{ gap: 24 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
            Segala sesuatu yang dapat anda bayangkan adalah nyata
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '300' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            tortor sed ex ultrices tempus. Proin egestas commodo lorem non
            fringilla. Praesent fermentum libero sed nibh sodales, at viverra
            ex.
          </Text>
          <View
            style={{ flexDirection: 'row', gap: 16, justifyContent: 'center' }}
          >
            <TouchableHighlight style={styles.registerButton}>
              <Text style={styles.registerText}>Daftar Yasa</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.registerButton}>
              <Text style={styles.registerText}>Daftar Jalu</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    flex: 1,
  },
  loginButton: {
    backgroundColor: '#09CC9E',
    padding: 12,
    borderRadius: 50,
  },
  registerButton: {
    backgroundColor: '#1E204C',
    padding: 12,
    borderRadius: 50,
    width: 120,
  },
  registerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
  content: {
    flex: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
