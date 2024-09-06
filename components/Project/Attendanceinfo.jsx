import { View, Text, SafeAreaView ,TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

export default function Attendanceinfo() {
    const [activeTab, setActiveTab] = useState('Attendence Info');
    const tabs = ['Attendence Info', 'In&Out', 'Session Details'];
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#FFFFFF",height:"100%",width:"100%"}}>
      <View>
        <View>
          {/*EMS bar*/}
          <View
            style={{
              backgroundColor: "#6366FF",
              width: "100%",
              padding: 10,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity style={{ backgroundColor: "#6366FF" }}>
              <AntDesign name="menu-unfold" size={24} color="white" />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "#FFFFFF",
                  paddingLeft: 15,
                  paddingTop: 5,
                  fontFamily: "sans-serif",
                  width: "400",
                }}
              >
                Attendance Info
              </Text>
            </View>
            <View style={{ paddingLeft: 240 }}>
              <TouchableOpacity style={{ backgroundColor: "#6366FF" }}>
                <FontAwesome name="bell-o" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{backgroundColor:"#FFFFFF"}}>
            <Text style={style.text1}>8 February 2024</Text>
          </View>
          <View>
            <View style={style.tabContainer}>
              {tabs.map((tab) => (
                <TouchableOpacity
                  key={tab}
                  style={[
                    style.tab,
                    activeTab === tab && style.activeTab,
                    tab === "Attendence Info" && style.leftTab,
                    tab === "Session Details" && style.rightTab,
                  ]}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text
                    style={[
                      style.tabText,
                      activeTab === tab && style.activeTabText,
                    ]}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 50,
                marginTop: 25,
                backgroundColor:"#FFFFFF",
              }}
            >
              <Text style={style.text2}>First In Time</Text>
              <Text style={style.text3}>Last Out Time</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 50,
                marginTop: -45,
                marginLeft: 30,
              }}
            >
              <Text style={style.text4}>8:55</Text>
              <Text style={style.text4}>18:55</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 50,
                marginTop: -30,
              }}
            >
              <Text style={style.text2}>Total Work Hours</Text>
              <Text style={style.text3}>Break Hours</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 50,
                marginTop: -45,
                marginLeft: 30,
              }}
            >
              <Text style={style.text4}>09:21</Text>
              <Text style={style.text4}>---</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 50,
                marginTop: -30,
              }}
            >
              <Text style={style.text2}>Actual Work Hours</Text>
              <Text style={style.text3}>Shotfall Hours</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 50,
                marginTop: -45,
                marginLeft: 30,
              }}
            >
              <Text style={style.text4}>09:21</Text>
              <Text style={style.text4}>-00.38</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  text2:{
    fontFamily:"sans-serif",
    fontSize:12,
    color:"#606060",
    
  },
   text3:{
    fontFamily:"sans-serif",
    fontSize:12,
    color:"#606060",
  },
  text4:{
    color:"#606060",
     fontFamily:"sans-serif",
    fontSize:16,
    marginLeft:20,
  },
   text1:{
    fontFamily:"sans-serif",
    fontSize:16,
    color:"#515151",
    marginTop:40,
    marginLeft:20,
  },
   tabContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#6366FF',
    borderRadius: 25,
    marginLeft:20,
    height:50,
    marginTop:30,
    width:"87%",
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color:"#606060",

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
    backgroundColor: '#6366FF',
  },
  tabText: {
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
})