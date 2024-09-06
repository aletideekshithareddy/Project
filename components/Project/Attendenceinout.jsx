import React from "react";
import { StyleSheet, View } from "react-native";
import { DataTable } from "react-native-paper";

export default function AttendanceInOut() {
  return (
    <View style={styles.container}>
      <DataTable style={styles.table}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Door/ Address</DataTable.Title>
          <DataTable.Title>In Time</DataTable.Title>
          <DataTable.Title>Out Time</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row style={styles.tableRow}>
          <DataTable.Cell>Micronsure</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
        </DataTable.Row>

        {/* Repeat the rows as necessary */}
        <DataTable.Row style={styles.tableRow}>
          <DataTable.Cell>Micronsure</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.tableRow}>
          <DataTable.Cell>Micronsure</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.tableRow}>
          <DataTable.Cell>Micronsure</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.tableRow}>
          <DataTable.Cell>Micronsure</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.tableRow}>
          <DataTable.Cell>Micronsure</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
          <DataTable.Cell>09:19:22</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  table: {
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#D5D5D5", // This ensures the border-radius is applied to the table
  },
  tableHeader: {
    backgroundColor: "#F7F7F7",
    color: "#D5D5D5",
  },
});

