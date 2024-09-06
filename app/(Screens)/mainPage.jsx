import { View, Text } from 'react-native'
import React from 'react'
import Home from '../../components/Project/Home'
import Attendanceinfo from '../../components/Project/Attendanceinfo';
import Attendenceinout from '../../components/Project/Attendenceinout';
import Session from '../../components/Project/Session';
import Attendance from '../../components/Project/Attendance';
import AttendanceInOut from '../../components/Project/Attendenceinout';
import Attendanceinfo2 from '../../components/Project/Attendanceinfo2';
import Payslips from '../../components/Project/Payslips';
import Peers from '../../components/Project/Peers';
import Assests from '../../components/Project/Asset';
import Payslips2 from '../../components/Project/Payslips2';
import List from "../../components/Project/List";
import Prathyusha from "../../components/Project/Prathyusha";




export default function mainPage() {
  return (
    <View style={{backgroundColor:"#fff",height:"100%",width:"100%"}}>
      <Prathyusha/>
    </View>
  );
}