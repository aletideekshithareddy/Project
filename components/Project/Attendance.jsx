import { View, Text, StyleSheet,TouchableOpacity,Modal } from "react-native";
import React, { useState } from "react";
import { AntDesign,MaterialCommunityIcons,FontAwesome,Entypo } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native-gesture-handler";

export default function Attendance2() {

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <ScrollView>
    <View>
      <View style={{ backgroundColor: "#F9F9F9" }}>
        <View style={style.Dashboard}>
          <View style={style.Icon1}>
            <TouchableOpacity>
              <AntDesign name="menu-unfold" size={25} color="white" />
            </TouchableOpacity>
            <Text style={style.Attendance}>Attendance</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="bell-outline"
                size={25}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={style.tapondatesview}>
        <Text style={style.tapondatestext}>
          <AntDesign name="exclamationcircleo" size={12} color="#FFCF27" />
          Tap on dates to view attendance
        </Text>
        <View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            {" "}
            <Text style={style.legends}>Show Legends</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Calendar />
      </View>
      <View>
        <View style={style.attendanceforview}>
          <Text style={style.attendancefor}>Attendance For</Text>
          <Text style={style.dates}> 26 Jan to 25 Feb</Text>
        </View>
        <View style={style.view1}>
          <View style={style.border1}>
            <View style={style.attendanceforfirstrow}>
              <Text style={style.text2}>Avg work hrs</Text>
              <Text style={style.text2}>Avg Actual Work Hrs</Text>
              <Text style={style.text2}>Penalty Days</Text>
            </View>
            <View style={style.attendanceforsecondrow}>
              <Text style={style.numbers}>9:15</Text>
              <Text style={style.numbers}>9:15</Text>
              <Text style={style.numbers}>0</Text>
            </View>
            <View style={style.earlyoutdays}>
              <View style={style.attendanceforfirstrow}>
                <Text style={style.text2}>Early Out Days</Text>
                <Text style={style.text2}>Late In Days</Text>
              </View>
              <View style={style.attendanceforsecondrow}>
                <Text style={style.numbers}>0</Text>
                <Text style={style.numbers}>18</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={style.attendanceforview}>
          <Text style={style.attendancefor}>Annual Attendance From</Text>
          <Text style={style.dates}> Apr 23 to Mar 24</Text>
        </View>
        <View style={style.view1}>
          <View style={style.border1}>
            <View style={style.attendanceforfirstrow}>
              <Text style={style.text2}>Total Working Days</Text>
              <Text style={style.text2}>Effective Working Days</Text>
            </View>
            <View style={style.attendanceforsecondrow}>
              <Text style={style.numbers}>240</Text>
              <Text style={style.numbers}>216</Text>
            </View>
            <View style={{ paddingTop: "4%" }}>
              <View style={style.absent}>
                <Text style={style.text2}>Leave/Absent Days</Text>
              </View>
              <View style={style.absent}>
                <Text style={style.absentnumber}>24</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={style.activityModalContainer}>
          <View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Entypo name="circle-with-cross" size={24} color="red"/>            
            </TouchableOpacity>
          </View>
          <View style={style.legendsview}>
            <View>
              <Text style={style.legend}>Legends</Text>
            </View>
            <View style={style.shiftview}>
              <Text style={style.shift}>Shift Codes</Text>
            </View>
            <View style={style.shiftcodes}>
              <View style={{ flexDirection: "row" }}>
                <AntDesign name="caretup" size={15} color="#1D72D6" />
                <Text style={style.grace}>Grace</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <AntDesign name="caretup" size={15} color="#D61DAD" />
                <Text style={style.grace}>Deduction Alert</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <AntDesign name="caretup" size={15} color="#B11DD6" />
                <Text style={style.grace}>Deduction</Text>
              </View>
            </View>
            <View style={style.shiftview}>
              <Text style={style.shift}>Status</Text>
            </View>
            <View>
              <View style={style.statusview}>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="circle" size={14} color="#D604DA" />
                    <Text style={style.holiday}>Holiday</Text>
                  </View>
                  <View style={{ flexDirection: "row", paddingTop: "20%" }}>
                    <Text style={style.L}>L</Text>
                    <Text style={style.leave}>Leave</Text>
                  </View>
                </View>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={style.P}>P</Text>
                    <Text style={style.present}>Present</Text>
                  </View>
                  <View style={{ flexDirection: "row", paddingTop: "20%" }}>
                    <FontAwesome name="circle" size={14} color="#AD1CF2" />
                    <Text style={style.leave}>CL</Text>
                  </View>
                </View>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={style.A}>A</Text>
                    <Text style={style.modalabsent}>Absent</Text>
                  </View>
                  <View style={{ flexDirection: "row", paddingTop: "20%" }}>
                    <FontAwesome name="circle" size={14} color="#F2821C" />
                    <Text style={style.sl}>SL</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  </ScrollView>
  );
}
const style = StyleSheet.create({
  activityModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
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
  Attendance: {
    color: "white",
    fontSize: "18px",
    marginRight: "60%",
    marginTop:"1%",
  },
  tapondatesview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "3%",
  },
  tapondatestext: {
    fontSize: "12px",
    color: "#FFCF27",
    backgroundColor: "#FFFEED",
    padding: "2%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#FFFEED",
  },
  legends: {
    color: "#6366FF",
    fontSize: "14px",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#6366FF",
    padding: 10,
  },
  attendanceforview: {
    flexDirection: "row",
    padding: "2%",
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
    width: "80%",
    justifyContent: "space-between",
    paddingLeft: "15%",
  },
  absent: {
    alignItems: "center",
    padding: "1%",
  },
  text2: {
    fontSize: "12px",
    color: "#474267",
    fontWeight: "400",
  },
  numbers: {
    fontSize: "14px",
    color: "#0D0733",
    fontWeight: "400",
  },
  absentnumber: {
    fontSize: "14px",
    color: "#0D0733",
    fontWeight: "400",
  },
  statusview: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "3%",
  },
  legendsview: {
    padding: "4%",
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: 15,
  },
  legend: {
    fontSize: "18px",
    color: "#0D0733",
    fontWeight: "400",
  },
  shiftview: {
    paddingTop: "5%",
  },
  shift: {
    fontWeight: "600",
    fontSize: "14px",
    color: "#474267",
  },
  grace: {
    fontSize: "14px",
    color: "#474267",
    fontWeight: "400",
  },
  shiftcodes: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "3%",
  },
  holiday: {
    color: "#474267",
    fontSize: "14px",
    fontWeight: "400",
    paddingLeft: "12%",
  },
  leave: {
    color: "#474267",
    fontSize: "14px",
    fontWeight: "400",
    paddingLeft: "20%",
  },
  present: {
    fontSize: "14px",
    color: "#474267",
    fontWeight: "400",
    paddingLeft: "25%",
  },
  modalabsent: {
    fontSize: "14px",
    color: "#474267",
    fontWeight: "400",
    paddingLeft: "15%",
  },
  sl: {
    fontSize: "14px",
    color: "#474267",
    fontWeight: "400",
    paddingLeft: "10%",
  },
  A: {
    fontSize: "14px",
    color: "#F21C4F",
    fontWeight: "500",
  },
  P: {
    fontSize: "14px",
    color: "#6366FF",
    fontWeight: "500",
  },
  L: {
    fontSize: "14px",
    color: "#FFEF63",
    fontWeight: "500",
  },
});