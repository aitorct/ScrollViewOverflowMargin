import React from 'react';
import {Text, View, Animated, StyleSheet} from 'react-native';

export default function App() {
  const items = Array(10).fill(0);

  return (
    <View style={styles.container}>
      <Animated.ScrollView style={styles.list}>
        <View style={styles.content}>
          {items.map((_, idx) => (
            <Text key={idx} style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eu eros purus.
            </Text>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 8,
  },
  list: {
    flex: 1,
    marginTop: 120,
    overflow: 'visible',
  },
  content: {
    backgroundColor: 'red',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
