import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome6
} from "@expo/vector-icons";

export default function Profile() {
  return (
    <View>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={34} color="white" />
        <Text style={styles.headertext}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={34} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <Text style={styles.rajkumar}>KANDUKURI RAJKUMAR</Text>
        <Text style={styles.temple}>
          Temple Tree Technologies Private Limited
        </Text>
        <Text style={styles.ux}>UX Engineer,100093</Text>
        <Text style={styles.ux}>9437857687,7586950432</Text>
        <Text style={styles.ux}>rajkumar@micronsure.com,Hyderabad</Text>
      </View>
      <View style={{ padding: "3%" }}>
        <View style={styles.box1}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "2%",
            }}
          >
            <View style={{ width: "100%" }}>
              <View
                style={{
                  flexDirection: "column",
                  margin: "2%",
                }}
              ></View>
              {/* Personal Details Row */}
              <TouchableOpacity style={styles.row}>
                <FontAwesome name="user" size={20} color="black" />
                <Text style={styles.text}>Personal Details</Text>
                <AntDesign name="right" size={20} color="#6366FF" />
              </TouchableOpacity>

              {/* Experience Details Row */}
              <TouchableOpacity style={styles.row}>
                <FontAwesome5 name="folder-open" size={20} color="black" />
                <Text style={styles.text}>Experience Details</Text>
                <AntDesign name="right" size={20} color="#6366FF" />
              </TouchableOpacity>

              {/* Education Details Row */}
              <TouchableOpacity style={styles.row}>
                <FontAwesome name="graduation-cap" size={20} color="black" />
                <Text style={styles.text}>Education Details</Text>
                <AntDesign name="right" size={20} color="#6366FF" />
              </TouchableOpacity>

              {/* Certification Details Row */}
              <TouchableOpacity style={styles.row}>
                <MaterialCommunityIcons
                  name="certificate"
                  size={20}
                  color="black"
                />
                <Text style={styles.text}>Certification Details</Text>
                <AntDesign name="right" size={20} color="#6366FF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingTop:"10%"}}>
          <View style={styles.box2}>
            <View style={{ width: "100%" }}>
              <View
                style={{
                  flexDirection: "column",
                  margin: "2%",
                  paddingTop: "5%",
                }}
              >
                {/* Row for Accounts */}
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "2%",
                  }}
                >
                  <FontAwesome name="bank" size={20} color="black" />
                  <View>
                    <Text style={styles.text}>Accounts</Text>
                  </View>
                  <View>
                    <AntDesign name="right" size={20} color="#6366FF" />
                  </View>
                </TouchableOpacity>

                {/* Row for Documents */}
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "2%",
                  }}
                >
                  <Ionicons
                    name="document-text-outline"
                    size={20}
                    color="black"
                  />
                  <View>
                    <Text style={styles.text}>Documents</Text>
                  </View>
                  <View>
                    <AntDesign name="right" size={20} color="#6366FF" />
                  </View>
                </TouchableOpacity>

                {/* Row for Peers */}
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "2%",
                  }}
                >
                  <FontAwesome6 name="users" size={20} color="black" />
                  <View>
                    <Text style={styles.text}>Peers</Text>
                  </View>
                  <View>
                    <AntDesign name="right" size={20} color="#6366FF" />
                  </View>
                </TouchableOpacity>

                {/* Row for Assets */}
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "2%",
                  }}
                >
                  <FontAwesome name="laptop" size={20} color="black" />
                  <View>
                    <Text style={styles.text}>Assets</Text>
                  </View>
                  <View>
                    <AntDesign name="right" size={20} color="#6366FF" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4e5bf2",
    padding: "4%",
  },
  headertext: {
    fontSize: "20px",
    color: "#fff",
    marginRight: "65%",
    flexDirection: "row",
  },
  profile: {
    alignItems: "center",
    paddingTop: "5%",
  },
  rajkumar: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#4A4A4A",
  },
  temple: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#4A4A4A",
  },
  ux: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#606060",
  },
  box1: {
    borderWidth: 1,
    borderColor: "#EDEDED",
    //padding: "3%",
   // paddingTop: "5%",
  },
  box2: {
    borderWidth: 1,
    borderColor: "#EDEDED",
   // padding: "3%",
   // paddingTop: "20%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
    padding: "2%",
   
    borderRadius: 5,
  },
  text: {
    color: "#0D0733",
    fontSize:"16px",
    fontWeight:"400",
  },
});
