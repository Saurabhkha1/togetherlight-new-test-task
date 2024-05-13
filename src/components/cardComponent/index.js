import React from 'react';
const {Text, View} = require('react-native');
import styles from './styles';

const CardComponent = ({title, body}) => (
  <View style={styles.item}>
    <Text style={styles.title}>Title: {title}</Text>
    <View style={styles.hrline} />
    <View style={styles.subText}>
      <Text style={styles.body}>Body: {body}</Text>
    </View>
  </View>
);

export default CardComponent;
