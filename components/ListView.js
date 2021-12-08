import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';



export default function ListView() {

  const renderItem = ({item}) => (
    <Item
      title = {item.title}
      desc = {item.desc}
    />
  );

  return (
    <View style={styles.container}>
        <FlatList
          style = {styles.paragraph}
          data = {datalist}
          renderItem = {renderItem}
          keyExtractor = {item => item.id}
        />
    </View>
  );
}

const Item = ({title, desc}) => (
  <View style = {styles.listItemBox}>
    <Text style = {styles.listItemTitle}>{title}</Text>
    <Text style = {styles.listItemDesc}>{desc}</Text>
  </View>
)

const datalist = [
  {
    id: 1,
    title: 'John Doe',
    desc: 'A random guy'
  },
  {
    id: 2,
    title: 'Peter Parker',
    desc: 'President of a country'
  },
  {
    id: 3,
    title: 'Max Power',
    desc: 'Insert creative description here'
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItemBox: {
    backgroundColor: '#f0f2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  listItemTitle: {
    fontWeight: 'bold'
  },
  listItemDesc: {
    fontWeight: 'normal'
  }
});