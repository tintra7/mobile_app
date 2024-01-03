import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "../../assets/themes/Theme";

const Tabs = ({ items }) => {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {items.map((tab, i) => {
          return <TouchableOpacity key={i} onPress={() => setIndex(i)}>
            <Text style={i === index ? styles.tabActiveTitle : styles.tabTitle}>{tab.title}</Text>
          </TouchableOpacity>
        })}
      </View>
      {items[index].content()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "5%",
    marginBottom: "13%",
    paddingHorizontal: "5%",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "4%",
  },
  tabActiveTitle: {
    paddingHorizontal: "6%",
    paddingVertical: "4%",
    color: "white",
    backgroundColor: Colors.PRIMARY_MAIN,
    borderRadius: 50,
  },
  tabTitle: {
    paddingHorizontal: "6%",
    paddingVertical: "4%",
    color: Colors.INFO_SECONDARY,
    backgroundColor: Colors.PRIMARY_SECONDARY,
    borderRadius: 50,
  }
});

export default Tabs;