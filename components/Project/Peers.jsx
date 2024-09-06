import { View, Text ,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons,Ionicons,Feather ,FontAwesome} from '@expo/vector-icons';
import { Searchbar } from "react-native-paper";

export default function Peers() {
    const [activeTab, setActiveTab] = useState("All List");
    const tabs = ["All List", "Favorite List"];
    const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.Peers}>Peers</Text>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.container1}>
          <View style={styles.tabContainer}>
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tab,
                  activeTab === tab && styles.activeTab,
                  tab === "All List" && styles.leftTab,
                  tab === "Favourite List" && styles.rightTab,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.textField}>
        <Searchbar
          placeholder="Search employee name/employee ID"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
          placeholderTextColor="#999"
        />
      </View>
      <View>
        <View style={{ padding: "3%", paddingTop: "7%" }}>
          <View style={styles.box1}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={styles.nithin}>Nithin</Text>
                <Text style={styles.trainee}>UI/UX Trainee</Text>
                <Text style={styles.number}>100251</Text>
                <Text style={styles.hyderabad}>Hyderabad,500094</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ paddingRight: "5%" }}>
                  <Feather name="message-square" size={24} color="black" />
                </Text>
                <FontAwesome name="heart-o" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: "3%" }}>
          <View style={styles.box1}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={styles.nithin}>Nithin</Text>
                <Text style={styles.trainee}>UI/UX Trainee</Text>
                <Text style={styles.number}>100251</Text>
                <Text style={styles.hyderabad}>Hyderabad,500094</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ paddingRight: "5%" }}>
                  <Feather name="message-square" size={24} color="black" />
                </Text>
                <FontAwesome name="heart-o" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: "3%" }}>
          <View style={styles.box1}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={styles.nithin}>Nithin</Text>
                <Text style={styles.trainee}>UI/UX Trainee</Text>
                <Text style={styles.number}>100251</Text>
                <Text style={styles.hyderabad}>Hyderabad,500094</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ paddingRight: "5%" }}>
                  <Feather name="message-square" size={24} color="black" />
                </Text>
                <FontAwesome name="heart-o" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: "3%" }}>
          <View style={styles.box1}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={styles.nithin}>Nithin</Text>
                <Text style={styles.trainee}>UI/UX Trainee</Text>
                <Text style={styles.number}>100251</Text>
                <Text style={styles.hyderabad}>Hyderabad,500094</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ paddingRight: "5%" }}>
                  <Feather name="message-square" size={24} color="black" />
                </Text>
                <FontAwesome name="heart-o" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: "3%" }}>
          <View style={styles.box1}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={styles.nithin}>Nithin</Text>
                <Text style={styles.trainee}>UI/UX Trainee</Text>
                <Text style={styles.number}>100251</Text>
                <Text style={styles.hyderabad}>Hyderabad,500094</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ paddingRight: "5%" }}>
                  <Feather name="message-square" size={24} color="black" />
                </Text>
                <FontAwesome name="heart-o" size={24} color="black" />
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
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3%",
    backgroundColor: "#4e5bf2",
  },
  Peers: {
    color: "#FFF",
    fontSize: "24px",
    paddingRight: "60%",
  },
  container1: {
    padding: "5%",
    width: "70%",
  },
  tabContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#6366FF",
    borderRadius: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: "3%",
    alignItems: "center",
    justifyContent: "center",
  },
  leftTab: {
    fontSize: "16px",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  rightTab: {
    fontSize: "16px",
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  activeTab: {
    backgroundColor: "#6366FF",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  tabText: {
    color: "#000",
  },
  activeTabText: {
    color: "#fff",
  },
  textField: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: "3%",
  },
  searchbar: {
    flexDirection: "row-reverse",
    width: "100%",
    height: 50,
    backgroundColor: "#f9f9f9",
    borderRadius: 30,
    paddingHorizontal: 10,
  },

  TextInput: {
    textAlign: "center",
    height: "250%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 30,
    color: "#000",
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  box1: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: "2%",
  },
  nithin: {
    fontSize: "16px",
    color: "#4A4A4A",
    fontWeight: "400",
    padding: "1%",
  },
  trainee: {
    color: "#606060",
    fontSize: "14px",
    fontWeight: "400",
    padding: "1%",
  },
  number: {
    color: "#606060",
    fontSize: "14px",
    fontWeight: "400",
    padding: "1%",
  },
  hyderabad: {
    color: "#AAA8A8",
    fontSize: "12px",
    fontWeight: "400",
    padding: "1%",
  },
});