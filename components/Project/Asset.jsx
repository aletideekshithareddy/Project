import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons,MaterialIcons } from '@expo/vector-icons';

export default function Assests() {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.Asset}>Asset</Text>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ padding: "5%" }}>
        <View style={styles.box1}>
          <View>
            <Text style={styles.assetname}>Asset Name</Text>
            <Text style={styles.assetnumber}>HP240G9</Text>
          </View>
          <View style={styles.assetmodel}>
            <Text style={styles.assetname}>Asset Model No.</Text>
            <Text style={styles.assetnumber}>5C47C7EC9CX9</Text>
          </View>
          <View style={styles.assetmodel}>
            <Text style={styles.assetname}>Internal Id No.</Text>
            <Text style={styles.assetnumber}>TTT/LAPTOP/290622/75</Text>
          </View>
          <View style={styles.assetmodel}>
            <Text style={styles.assetname}>Charger Model No.</Text>
            <Text style={styles.assetnumber}>WHGRKOHFUDU50E</Text>
          </View>
          <View style={styles.assetmodel}>
            <Text style={styles.assetname}>Mouse Model No.</Text>
            <Text style={styles.assetnumber}>GDHGDNN75</Text>
          </View>
          <View style={styles.assetmodel}>
            <Text style={styles.assetname}>Date of issue</Text>
            <Text style={styles.assetnumber}>20/6/2024</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: "5%" }}>
        <View style={styles.box1}>
          <View>
            <Text style={styles.assetname}>Asset Description</Text>
            <Text style={styles.assettext}>i5/12th Gen,16GB,512SSD,intel IRSXE GRAPHICS,TNRBCKLIT KBD ALEXA,WIN 11,15.6 </Text>
          </View>
        </View>
      </View>
    </View>
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
  Asset: {
    color: "#FFF",
    fontSize: "24px",
    paddingRight: "60%",
  },
  box1: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: "2%",
  },
  assetmodel: {
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
    marginTop: "2%",
  },
  assetname: {
    fontSize: "12px",
    color: "#606060",
    padding: "1%",
  },
  assetnumber: {
    fontSize: "16px",
    color: "#0D0733",
    padding: "1%",
  },
  assettext: {
    fontSize: "16px",
    color: "#0D0733",
    padding: "2%",
  },
});