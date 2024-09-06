import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";


export default function Session() {
     const [activeTab, setActiveTab] = useState("Session Details");
     const tabs = ["Attendence Info", "In&Out", "Session Details"];
  return (
    <View style={{flex:1,backgroundColor:"#FFFFFF",height:"100%",width:"100%"}}>
      <View style={{ backgroundColor: "#FFFFFF" }}>
        {/*EMS bar*/}
        <View>
          <View
            style={{
              padding: "2%",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#F1F1F1",
              marginTop: 10,
              margin: 15,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={style.session}>Session 1</Text>
              <Text style={style.sessiontime}> 09:15-13:00</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ paddingTop: "5%", width: "65%" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={style.text}>First In Time</Text>
                  <Text style={style.time}>09:15</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Text style={style.text}>Last Out Time</Text>
                  <Text style={style.time}>---</Text>
                </View>
              </View>
              <View style={{ paddingTop: "5%", width: "50%" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={style.text}>Late By time(hrs)</Text>
                  <Text style={style.negative}>-00:49</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Text style={style.text}>Early Out By</Text>
                  <Text style={style.time}>+00.00</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingTop: "5%" }}>
              <Text style={style.session}>Session 2</Text>
              <Text style={style.sessiontime}> 13:00-18:00</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ paddingTop: "5%", width: "65%" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={style.text}>First In Time</Text>
                  <Text style={style.time}>09:15</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Text style={style.text}>Last Out Time</Text>
                  <Text style={style.time}>---</Text>
                </View>
              </View>
              <View style={{ paddingTop: "5%", width: "50%" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={style.text}>Late By time(hrs)</Text>
                  <Text style={style.positive}>+00:49</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Text style={style.text}>Early Out By</Text>
                  <Text style={style.time}>+00.00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  session: {
    fontSize: "14px",
    color: "#474267",
  },
  sessiontime: {
    fontsize: "14px",
    color: "#1B1B1B",
  },
  time: {
    padding: "5%",
    color: "#0D0733",
    fontSize: "14px",
  },
  negative: {
    padding: "5%",
    color: "#0D0733",
    fontSize: "14px",
    color: "#F4371D",
  },
  positive: {
    padding: "5%",
    color: "#0D0733",
    fontSize: "14px",
    color: "#06CF0E",
  },
  text: {
    color: "#606060",
    fontSize: "12px",
  },
  text1: {
    fontFamily: "sans-serif",
    fontSize: 16,
    color: "#515151",
    marginTop: 40,
    marginLeft: 20,
  },
  tabContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#6366FF",
    borderRadius: 25,
    marginLeft: 20,
    height: 50,
    marginTop: 30,
    width: "87%",
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "#606060",
  },
  leftTab: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  rightTab: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  activeTab: {
    backgroundColor: "#6366FF",
  },
  tabText: {
    color: "#000",
  },
  activeTabText: {
    color: "#fff",
  },
});