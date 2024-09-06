import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { DataTable } from 'react-native-paper';

export default function Attendanceinfo2() {
  return (
    <View>
      <View style={style.Dashboard}>
        <View style={style.Icon1}>
          <TouchableOpacity>
            <AntDesign name="menu-unfold" size={25} color="white" />
          </TouchableOpacity>
          <Text style={style.Attendanceinfo}>Attendance Info</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="bell-outline"
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={style.attendanceforview}>
          <Text style={style.attendancefor}>Attendance Info</Text>
          <Text style={style.dates}>8 February 2024</Text>
        </View>
        <View style={style.view1}>
          <View style={style.border1}>
            <View style={style.attendanceforfirstrow}>
              <Text style={style.text2}>First In Time</Text>
              <Text style={style.text2}>Last Out Time </Text>
              <Text style={style.text2}>Total Work Hours</Text>
            </View>
            <View style={style.attendanceforsecondrow}>
              <Text style={style.numbers}>8:55</Text>
              <Text style={style.numbers}>18:55</Text>
              <Text style={style.numbers}>09:21</Text>
            </View>
            <View style={style.earlyoutdays}>
              <View style={style.attendanceforfirstrow}>
                <Text style={style.text2}>Break Hours</Text>
                <Text style={style.text2}>Actual Work Hours</Text>
                <Text style={style.text2}>Shotfall Hours</Text>
              </View>
              <View style={style.attendanceforsecondrow}>
                <Text style={style.numbers}>---</Text>
                <Text style={style.numbers}>09:30</Text>
                <Text style={style.numbers}>--00:38</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={style.swipeview}>
        <View>
          <Text style={style.swipes}>Swipes</Text>
        </View>
        <View>
          <View style={style.container}>
            <DataTable style={style.table}>
              <DataTable.Header style={style.tableHeader}>
                <DataTable.Title>Door/ Address</DataTable.Title>
                <DataTable.Title>In Time</DataTable.Title>
                <DataTable.Title>Out Time</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row style={style.tableRow}>
                <DataTable.Cell>Micronsure</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
              </DataTable.Row>

              {/* Repeat the rows as necessary */}
              <DataTable.Row style={style.tableRow}>
                <DataTable.Cell>Micronsure</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={style.tableRow}>
                <DataTable.Cell>Micronsure</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={style.tableRow}>
                <DataTable.Cell>Micronsure</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={style.tableRow}>
                <DataTable.Cell>Micronsure</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={style.tableRow}>
                <DataTable.Cell>Micronsure</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
                <DataTable.Cell>09:19:22</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  Dashboard: {
    flex: "1",
    backgroundColor: "#ffffff",
  },
  Icon1: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
    backgroundColor: "#4e5bf2",
  },
  Attendanceinfo: {
    color: "white",
    fontSize: "18px",
    marginRight: "50%",
    marginTop: "1%",
  },
  attendanceforview: {
    flexDirection: "row",
    padding: "2%",
    justifyContent: "space-between",
  },
  attendancefor: {
    fontSize: "14px",
    color: "#07041C",
    fontWeight: "400",
  },
  dates: {
    fontWeight: "500",
  },
  view1: {
    padding: "3%",
  },
  border1: {
    padding: "4%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#F1F1F1",
    //shadowColor: "#000000",
    //shadowOffset: { width: 0, height: 1 },
    //shadowOpacity: 0.8,
    //shadowRadius: 1,
  },
  attendanceforfirstrow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  attendanceforsecondrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
  },
  earlyoutdays: {
    paddingTop: "4%",
  },
  swipeview: {
    padding: "2%",
  },
  swipes: {
    fontSize: "16px",
    color: "#0D0733",
    fontWeight: "400",
  },
  container: {
    paddingTop:"5%",
    margin:1,
    borderRadius: 10,
  },
  table: {
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#D5D5D5", 
    width:"100%"// This ensures the border-radius is applied to the table
  },
  tableHeader: {
    backgroundColor: "#F7F7F7",
    color: "#D5D5D5",
  },
});