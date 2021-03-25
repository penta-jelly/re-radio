import React, { useCallback, useState } from 'react';
import { Alert, Button, Dimensions, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <YoutubePlayer
          height={300}
          width={Dimensions.get('window').width}
          play={playing}
          videoId={'iee2TATGMyI'}
          onChangeState={onStateChange}
          initialPlayerParams={{ controls: false }}
        />
      </View>
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
