import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";

export default function Peers() {
  const [activeTab, setActiveTab] = useState("All List");
  const tabs = ["All List", "Favorite List"];
  const [searchQuery, setSearchQuery] = useState("");

  const [peersData, setPeersData] = useState([
    {
      id: "1",
      name: "Nithin",
      position: "UI/UX Trainee",
      employeeID: "100251",
      location: "Hyderabad, 500094",
      isFavorite: false,
    },
    {
      id: "2",
      name: "John",
      position: "Backend Developer",
      employeeID: "100252",
      location: "Mumbai, 400001",
      isFavorite: false,
    },
    {
      id: "3",
      name: "Jane",
      position: "Frontend Developer",
      employeeID: "100253",
      location: "Bangalore, 560001",
      isFavorite: false,
    },
    {
      id: "4",
      name: "Jane",
      position: "Frontend Developer",
      employeeID: "100253",
      location: "Bangalore, 560001",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id) => {
    setPeersData((prevPeersData) =>
      prevPeersData.map((peer) =>
        peer.id === id ? { ...peer, isFavorite: !peer.isFavorite } : peer
      )
    );
  };

  const filteredPeers = peersData.filter((peer) =>
    peer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <FlatList
        data={filteredPeers}
        keyExtractor={(item) => item.employeeID}
        renderItem={({ item }) => (
          <View style={{ padding: "3%" }}>
            <View style={styles.box1}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "50%" }}>
                  <Text style={styles.nithin}>{item.name}</Text>
                  <Text style={styles.trainee}>{item.position}</Text>
                  <Text style={styles.number}>{item.employeeID}</Text>
                  <Text style={styles.hyderabad}>{item.location}</Text>
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

                  <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                    <FontAwesome
                      name="heart"
                      size={24}
                      color={item.isFavorite ? "red" : "black"} 
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
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
