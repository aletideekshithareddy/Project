import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { ProgressBar, TouchableOpacity } from "react-native";
import { SwipeableButton } from "react-swipeable-button";
import * as Progress from "react-native-progress";
import PieChart from "react-native-pie-chart";
const logoImg = require("../../assets/images/b.png");
import { ImageBackground } from "react-native";
const element = <FontAwesome name="send" size={25} color="red" />;

export default function Home() {
   const [selectedCard, setSelectedCard] = useState(0);
    const JS = [
      { label: "Jilla Sridhar" },
      { label: "IT DEPARTMENT" },
      { label: "IT MANAGER" },
    ];

    const RP = [
      { label: "Jilla Sridhar" },
      { label: "IT DEPARTMENT" },
      { label: "IT MANAGER" },
    ];

    // Render function for each card in the slider
    const renderCard = ({ item, index }) => (
      <View style={style.card}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={style.cardTitle}>
              {index === 0 ? "Today's Celebrations" : "Today's Celebrations"}
            </Text>
            <View style={style.CircleShape}>
              <Text style={style.JS}> {index === 0 ? "JS" : "RP"}</Text>
            </View>
            {item.map((detail, idx) => (
              <Text
                key={idx}
                style={{
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  color: "#606060",
                  padding: "2%",
                 
                }}
              >
                {detail.label}
              </Text>
            ))}
          </View>
        </View>
      </View>
    );
  const [text, setText] = useState("");
  const [activeTab, setActiveTab] = useState("June");

  const tabs = ["June", "July", "August"];
  const handleSend = () => {
    if (text.trim().length > 0) {
      console.log("Sending:", text);
      setText("");
    }
  };
  const onSuccess = () => {
    console.log("Successfully Swiped!");
  };
  const texts=[
    "06",
    "01",
    "03",
    "02",
    "00"
  ]

  const widthAndHeight = 125;
  const series = [231, 431, 113, 109, 409];
  const sliceColor = ["#FACC15", "#028FCC", "#C802CC", "#30FF5E", "#F55F0B"];
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#F9F9F9" }}>
        <View style={style.Dashboard}>
          <View style={style.Icon1}>
            <TouchableOpacity>
              <AntDesign name="menu-unfold" size={25} color="white" />
            </TouchableOpacity>
            <Text style={style.EMS}>EMS</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="bell-outline"
                size={25}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.card1}>
          <View style={style.Feburary}>
            <View style={style.Day}>
              <Text style={style.Today}>Today</Text>
              <Text style={style.Feb}>27 Feburary 2024</Text>
            </View>
            <View style={style.Date}>
              <Text style={style.Tuesday}>Tuesday</Text>
              <Text style={style.Times}>8:30 AM to 06:30 PM</Text>
            </View>
          </View>

          <View>
            <Text style={style.Time}>11:30 AM</Text>
          </View>

          <View style={style.ProgressBar}>
            <Progress.Bar
              progress={0.3}
              width={300}
              color="#6366FF"
              backgroundColor="gray"
            />
          </View>

          <View style={style.SwipeBar}>
            <View style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}>
              <SwipeableButton
                onSuccess={onSuccess}
                text="Swipe to sign In"
                text_unlocked="Signed in"
                color="#6366FF"
                backgroundColor="#ECECFF"
              />
            </View>
          </View>
        </View>
        <View>
          <View style={style.performance}>
            <View style={style.monthsPerformance}>
              <Text style={style.title}>3 Months Performance</Text>
              <View style={style.tabContainer}>
                {tabs.map((tab) => (
                  <TouchableOpacity
                    key={tab}
                    style={[
                      style.tab,
                      activeTab === tab && style.activeTab,
                      tab === "June" && style.leftTab,
                      tab === "August" && style.rightTab,
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
            </View>
            <View>
              <Text style={style.month}>Month of August</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <ScrollView>
                <View style={style.PieChart}>
                  <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.75}
                    coverFill={"#FFF"}
                  />
                </View>
              </ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "50%",
                  height: "90%",
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "#028FCC" }}>{"\u2B24"}</Text>
                  <Text style={{ color: "#C802CC" }}>{"\u2B24"}</Text>
                  <Text style={{ color: "#F55F0B" }}>{"\u2B24"}</Text>
                  <Text style={{ color: "#30FF5E" }}>{"\u2B24"}</Text>
                  <Text style={{ color: "#FACC15" }}>{"\u2B24"}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Present</Text>
                  <Text>Leave</Text>
                  <Text>Late Coming</Text>
                  <Text>Over Time</Text>
                  <Text>Early Leaving</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                    {texts.map((items, index) => (
                      <Text key={index}>{items}</Text>
                    ))}
    
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "white", marginTop: "1%" }}>
          <Text style={style.payslips}>PaySlips</Text>
          <View style={style.payslip}>
            <ImageBackground
              source={require("../../assets/images/back.png")}
              style={style.backgroundImage}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: "#0D0733",
                    fontFamily: "sans-serif",
                    padding: 5,
                  }}
                >
                  August 2024
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: "#6366FF", fontSize: 16, padding: 5 }}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: "#3D395C",
                  marginTop: 4,
                  padding: 5,
                }}
              >
                31 paid days
              </Text>

              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text
                  style={{
                    fontSize: 20,
                    lineHeight: 24.2,
                    color: "#3D395C",
                    fontWeight: "600",
                    marginTop: 10,
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  Net Pay
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    lineHeight: 24.2,
                    color: "#028FCC",
                    fontWeight: "600",
                    marginTop: 10,
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  {" "}
                  XXXXXXXX
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 16, color: "#3D395C" }}>
                  Gross Pay XXXXXXXX
                </Text>
                <Text style={{ fontSize: 16, color: "#3D395C" }}>
                  Deductions XXXXXXXX
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <TouchableOpacity>
                  <Text style={{ color: "#6366FF", fontSize: 16, padding: 5 }}>
                    Download
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ color: "#6366FF", fontSize: 16, padding: 5 }}>
                    Unhide
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View>
          {/* Slider Component */}
          <View style={style.sliderContainer}>
            <FlatList
              data={[JS, RP]}
              renderItem={renderCard}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={(e) => {
                const contentOffsetX = e.nativeEvent.contentOffset.x;
                const currentIndex = Math.round(
                  contentOffsetX / e.nativeEvent.layoutMeasurement.width
                );
                setSelectedCard(currentIndex);
              }}
            />
          </View>
          {/* Dots Indicator */}
          <View style={style.dotsContainer}>
            {[0, 1].map((_, i) => (
              <View
                key={i}
                style={[
                  style.dot,
                  selectedCard === i ? style.activeDot : style.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
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
  EMS: {
    color: "white",
    fontSize: "18px",
    marginRight: "70%",
    paddingTop:"1%",
  },
  card1: {
    backgroundColor: "#FFFFFF",
  },
  Feburary: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "3%",
    marginTop: "3%",
  },
  Day: {
    justifyContent: "space-between",
    margin: "1%",
    fontFamily: "sans-serif",
  },
  Today: {
    color: "#0D0733",
    fontSize: "16px",
    fontFamily: "sans-serif",
  },
  Feb: {
    color: "#7D7D7D",
    fontSize: "14px",
    fontFamily: "sans-serif",
  },
  Date: {
    justifyContent: "space-between",
    margin: "1%",
  },
  Tuesday: {
    fontFamily: "sans-serif",
    color: "#0D0733",
    fontSize: "16px",
  },
  Time: {
    textAlign: "center",
    color: "#6366FF",
    fontSize: 20,
  },
  Times: {
    color: "#0D0733",
    fontSize: "16px",
    fontFamily: "sans-serif",
  },
  ProgressBar: {
    alignItems: "center",
  },
  SwipeBar: {
    paddingTop: "20",
    width: "80%",
    height: "5%",
    margin: "10%",//aaaa20
    marginTop: "5%",//aaaa10
    marginLeft: "10%",//aaa15
    fontColor: "#4C4C4C",
    alignSelf: "center",
  },
  performance: {
    backgroundColor: "#FFFFFF",
    marginTop: "1%",
  },
  monthsPerformance: {
    marginLeft: "4%",
    margin: "2%",
  },
  backgroundImage: {
    height: "100%",//aaa180
    width: "100%",
  },
  input: {
    height: "30%",//aaaa40
    margin: "10%",//aaa12
    borderWidth: 1,
    padding: "5%",//aaa10
    color: "#A1A0A0",
    borderColor: "#A1A0A0",
    borderRadius: 5,
  },
  JS: {
    fontSize: 14,
    paddingLeft: "30%",//aaaa10
    paddingTop: "20%",//aaaa12
    color: "#5589B1",
  },

  CircleShape: {
    width: "50%",//aaaaa40
    height: "60%",//aa40
    borderRadius: 150 / 2,
    backgroundColor: "#E7EDF1",
    marginLeft: "10%",//aaa20
    marginTop: "5%",//aa10
  },
  name: {
    paddingLeft: "10%",//aaa10
    paddingTop:"10%",//aaaa10
  },
  celebration: {
    fontSize: 18,
    fontFamily: "sans-serif",
    color: "#4C4C4C",
  },
  birthday: {
    padding:"2%",
    flexDirection: "row",
    justifyContent:"space-between",
  },
  payslips: {
    margin: "4%",
    fontSize: "18px",
    color: "#4C4C4C",
  },
  payslip: {
    padding: "5%",//aaa20
    marginTop: "-5%",///aaa-10
  },
  payslipstyle: {
    fontFamily: "sans-serif",
    fontSize: 18,
    color: "#4C4C4C",
  },
  font: {
    fontSize: 13,
    color: "#07041C",
    marginLeft: "5%",//aa8
    marginTop: "1%",//aa1
  },
  month: {
    padding: "2%",
    fontSize: "16px",
    color: "#4C4C4C",
  },
  textField: {
    flexDirection: "row",
    alignItems: "center",
    padding: "3%",//aaa15
  },
  TextInput: {
    flex: 1,
    height: "150%",//aaa40
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: "10%",//aaa15
    color: "#000",
    backgroundColor: "#f9f9f9",
  },
  sendButton: {
    height:"150%",//aaaa40
    width: "20%",//aa40
    backgroundColor: "#6366FF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  PieChart: {
    padding: "10%",
  },
  title: {
    fontSize: 18,
    marginBottom:"3%",//aa10
    color: "#555",
  },
  tabContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#6366FF",
    borderRadius: 25,
    marginLeft: "0%",//aaa-10
    height: "60%",//aaa50
    width: "100%",
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
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
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
  },
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 15,
    marginVertical: 1,
    padding: "5%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: 380,
    height: 180,
    justifyContent: "center",
  },
  cardTitle: {
    fontFamily: "sans-serif",
    fontWeight: "400",
    fontSize: "16px",
    color: "#0D0733",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "1%",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "black",
  },
  inactiveDot: {
    backgroundColor: "#D3D3D3",
  },
  JS: {
    fontSize: 14,
    alignSelf:"center",
   // paddingLeft: "30%", //aaaa10
    //paddingTop: "20%", //aaaa12
    color: "#5589B1",
  },

  CircleShape: {
    justifyContent:"center",
    width: "20%", //aaaaa40
    height: "20%", //aa40
    borderRadius: 150 / 2,
    backgroundColor: "#E7EDF1",
    //marginLeft: "10%", //aaa20
   // marginTop: "5%", //aa10
  },
});
