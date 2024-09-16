import { View, Text } from 'react-native'
import React from 'react'
import Pays from '../../components/Project/Pays'
import Attendanceinfo from '../../components/Project/Attendanceinfo';
import List from '../../components/Project/List'

export default function academics() {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%", width: "100%" }}>
      <List/>
    </View>
  );
}