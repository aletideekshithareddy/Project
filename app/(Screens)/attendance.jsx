import { View, Text } from 'react-native'
import React from 'react'
import Attendance from '../../components/Project/Attendance'

export default function attendance() {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%", width: "100%" }}>
      <Attendance />
    </View>
  );
}