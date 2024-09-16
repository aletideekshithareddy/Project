import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons,Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { FlatList } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";

export default function PayslipSummary() {
  return (
    <ScrollView>
      <View style={{ width: "100%", height: "100%" }}>
        {/* Header and Year/Month Selection */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.Payslips}>Payslips</Text>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={25} color="white" />
          </TouchableOpacity>
        </View>
        {/* Header and Year/Month Selection */}
        {/* Payslip Display */}
        <View style={styles.payslip}>
          <ImageBackground
            source={require("../../assets/images/back.png")}
            style={styles.backgroundImage}
          >
            <View style={styles.text}>
              <Text style={styles.imagetext1}>
                You have earned Net Pay of Apr Month
              </Text>
            </View>
            <View>
              <Text style={styles.netpayamount}>₹ 21,489.00</Text>
            </View>
            <View>
              <Text style={styles.netpaytext}>Net Pay </Text>
            </View>
          </ImageBackground>
        </View>
        {/* Payslip Display */}
        {/* First Box */}
        <View style={{ padding: "5%" }}>
          <Text style={styles.Income}>Income</Text>
          <View style={styles.box1}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.basic}>Days in month</Text>
              <Text style={styles.earningnumber}>30</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.basic}>EMP Effective Working Days</Text>
              <Text style={styles.earningnumber}>30</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "3%",
              }}
            >
              <View>
                <Text style={styles.basic}>Basic</Text>
                <Text style={styles.basic}>HRA</Text>
                <Text style={styles.basic}>Conveyance</Text>
                <Text style={styles.basic}>Add allowance</Text>
              </View>
              <View>
                <Text style={styles.amounts}>₹ 11,205.00</Text>
                <Text style={styles.amounts}>₹ 4,482.00</Text>
                <Text style={styles.amounts}>₹ 1,600.00</Text>
                <Text style={styles.amounts}>₹ 5,607.00</Text>
              </View>
            </View>
            <View style={styles.grossview}>
              <Text style={styles.gross}>Gross Earning</Text>
              <Text style={styles.total}>₹ 22,894.00</Text>
            </View>
          </View>
        </View>
        {/* First Box */}
        {/*Second Box */}
        <View style={{ padding: "5%" }}>
          <Text style={styles.Income}>Deductions</Text>
          <View style={styles.box1}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={styles.basic}>P.F</Text>
                <Text style={styles.basic}>Prof Tax</Text>
              </View>
              <View>
                <Text style={styles.amounts}>₹ 1,205.00</Text>
                <Text style={styles.amounts}>₹ 200.00</Text>
              </View>
            </View>
            <View style={styles.grossview}>
              <Text style={styles.gross}>Deductions</Text>
              <Text style={styles.total}>₹ 1,450.00</Text>
            </View>
          </View>
        </View>
        {/*Second Box */}
        
        

        <View style={styles.downloadview}>
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>
              Download Payslip{" "}
              <AntDesign name="download" size={16} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", padding: "2%" }}>
          <TouchableOpacity style={styles.backtohome}>
            <Entypo name="home" size={24} color="#6366FF" />
            <Text style={styles.backtohometext}>Back to Home</Text>
          </TouchableOpacity>
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
    fontSize: "24px",
    paddingRight: "60%",
  },
  backgroundImage: {
    height: 136,
    width: "100%",
  },
  text: {
    flexDirection: "row",
    justifyContent: "center",
  },
  payslip: {
    marginTop: "5%",
  },
  imagetext1: {
    color: "#606060",
    fontSize: "16px",
    lineHeight: "4",
  },
  netpayamount: {
    fontSize: "20px",
    color: "#6366FF",
    fontWeight: "600",
    alignSelf: "center",
    lineHeight: "1",
  },
  netpaytext: {
    fontSize: "14px",
    color: "#606060",
    alignSelf: "center",
    lineHeight: "4",
  },
  Income: {
    fontSize: "18px",
    color: "#07041C",
    padding: "1%",
  },
  box1: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: "2%",
  },
  earning: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#0D0733",
  },
  earningnumber: {
    color: "#3D395C",
    fontSize: "16px",
    fontWeight: "400",
  },
  basic: {
    fontSize: "14px",
    color: "#606060",
    fontWeight: "400",
    paddingTop: "3%",
  },
  grossview: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
    marginTop: "2%",
  },
  gross: {
    fontSize: "14px",
    color: "#606060",
    fontWeight: "400",
    paddingTop: "3%",
  },
  amounts: {
    fontSize: "14px",
    color: "#3D395C",
    fontWeight: "400",
    paddingTop: "4%",
  },
  pfview:{
    paddingLeft:"5%",
  },
  pfstatement: {
    color: "#000000",
    fontSize:"18px",
  },
  total: {
    fontSize: "14px",
    color: "#3D395C",
    fontWeight: "400",
    paddingTop: "3%",
  },
  downloadview: {
    alignItems: "center",
  },
  downloadButton: {
    backgroundColor: "#4C4CF1",
    padding: "3%",
    borderRadius: 50,
    alignItems: "center",
    width: "60%",
  },
  downloadButtonText: {
    color: "#fff",
    fontSize: "16px",
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
    fontSize: "16px",
  },
});
