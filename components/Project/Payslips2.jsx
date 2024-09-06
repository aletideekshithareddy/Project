import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons,Ionicons ,AntDesign,Feather,Entypo} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function Payslips2() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedYear, setSelectedYear] = useState("2024-2025");
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };

    const selectYear = (year) => {
      setSelectedYear(year);
      setDropdownVisible(false);
    };
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.Payslips}>Payslips</Text>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "3%",
          }}
        >
          <View style={{ flexDirection: "row", paddingTop: "3%" }}>
            <Text style={styles.selectedtext}>Selected</Text>
            <View style={{ width: "50%" }}>
              <Text style={styles.selected1}>01</Text>
            </View>
          </View>
          <View style={styles.yearMonthContainer}>
            <View style={styles.yearSelection}>
              <TouchableOpacity
                style={styles.dropdownButton}
                onPress={toggleDropdown}
              >
                <Text style={styles.dropdownButtonText}>{selectedYear}</Text>
                <Ionicons
                  name={
                    dropdownVisible
                      ? "chevron-up-outline"
                      : "chevron-down-outline"
                  }
                  size={16}
                  color="#6366FF"
                />
              </TouchableOpacity>
              {dropdownVisible && (
                <View style={styles.dropdown}>
                  <TouchableOpacity onPress={() => selectYear("2024-2025")}>
                    <Text style={styles.dropdownItem}>2024-2025</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => selectYear("2023-2024")}>
                    <Text style={styles.dropdownItem}>2023-2024</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
        <View>
          <View style={{ padding: "3%" }}>
            <View style={styles.box1}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.march}>March</Text>
                    <AntDesign name="checksquare" size={24} color="#6366FF" />
                  </View>
                  <Text style={styles.pdf}>March 2024 PDF</Text>
                  <Text style={styles.lastupdate}>
                    Last updated on 24 Nov 2024
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ padding: "3%", paddingTop: "2%" }}>
            <View style={styles.box1}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.march}>February</Text>
                    <Feather name="square" size={24} color="#6366FF" />
                  </View>
                  <Text style={styles.pdf}>February 2024 PDF</Text>
                  <Text style={styles.lastupdate}>
                    Last updated on 24 Nov 2024
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ padding: "3%", paddingTop: "2%" }}>
            <View style={styles.box1}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.march}>January</Text>
                    <Feather name="square" size={24} color="#6366FF" />
                  </View>
                  <Text style={styles.pdf}>January 2024 PDF</Text>
                  <Text style={styles.lastupdate}>
                    Last updated on 24 Nov 2024
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ padding: "3%", paddingTop: "2%" }}>
            <View style={styles.box1}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.march}>December</Text>
                    <Feather name="square" size={24} color="#6366FF" />
                  </View>
                  <Text style={styles.pdf}>December 2024 PDF</Text>
                  <Text style={styles.lastupdate}>
                    Last updated on 24 Nov 2024
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "4%",
            paddingTop:"30%",
          }}
        >
          <View style={{ alignItems: "center", padding: "2%", width: "50%" }}>
            <TouchableOpacity style={styles.backtohome}>
              <Entypo name="home" size={18} color="#6366FF" />
              <Text style={styles.backtohometext}>Back to Home</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "50%",marginTop:"2%",marginLeft:"5%"}}>
            <TouchableOpacity>
              <Text style={styles.download}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3%",
    backgroundColor: "#4e5bf2",
  },
  Payslips: {
    color: "#FFF",
    fontSize: "18px",
    paddingRight: "60%",
  },
  selectedtext: {
    fontSize: "16px",
    color: "#818181",
  },
  selected1: {
    marginLeft: "10%",
    borderWidth: 1,
    backgroundColor: "#EDEDFE",
    borderColor: "#EDEDFE",
    borderRadius: 50,
    color: "#6366FF",
    fontWeight: "700",
    textAlign: "center",
  },
  yearMonthContainer: {
    //alignItems: "center",
    //padding: "3%",
    backgroundColor: "#FFFFFF",
    //width:"100%",
    //height: "100%",
    width: "37%",
  },
  yearSelection: {
    //position: "relative",
    zIndex: 2,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6366FF",
    borderRadius: 25,
    //  paddingHorizontal: "8%",
    //paddingVertical: "10%",
    padding: "8%",
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  dropdownButtonText: {
    color: "#6366FF",
    fontSize: "16px",
    marginRight: "5%",
  },
  dropdown: {
    marginTop: "2%",
    borderWidth: 2,
    borderColor: "#6366FF",
    //borderRadius: 25,
    backgroundColor: "#FFFFFF",
    position: "static",
    padding: "8%",
    alignItems: "center",
    width: "100%",
  },
  dropdownItem: {
    // padding: "4%",
    textAlign: "center",
    color: "#6366FF",
  },
  box1: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: "2%",
  },
  march: {
    fontSize: "16px",
    color: "#0D0733",
    padding: "1%",
    fontWeight: "400",
  },
  pdf: {
    color: "#4A4A4A",
    fontSize: "16px",
    padding: "1%",
    fontWeight: "400",
  },
  lastupdate: {
    color: "#606060",
    fontSize: "12px",
    padding: "1%",
    fontWeight: "400",
  },
  backtohome: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#6366FF",
    padding: "2%",
  },
  backtohometext: {
    color: "#6366FF",
    marginTop: "3%",
    fontSize: "14px",
  },
  download:{
    backgroundColor:"#6366FF",
    color:"#fff",
    padding:"3%",
    textAlign:"center",
    borderRadius: 30,
    fontSize:"14px",
    width:"50%",
  },
});