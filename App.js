import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ToastAndroid,
  Text,
  View,
  TouchableOpacity,
  Icon,
  Modal,
  Dimensions,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

const FoodList = (props) => {
  const food = props.food;
  return (
    <View style={foodListStyles.mainContainer}>
      {/* Dashboard Sign Container*/}
      <View style={foodListStyles.iconsDashboard}>
        <TouchableOpacity>
          <Ionicons name="apps" size={23} color="#CFCFCF" />
        </TouchableOpacity>
      </View>
      {/* Food Name Container */}
      <View style={foodListStyles.foodNameContainerStyle}>
        <Text style={foodListStyles.foodNameTextStyle}>{props.food.name}</Text>
      </View>
      {/* Price Container */}
      <View>
        <Text style={foodListStyles.priceTextStyle}>{"Price : ₹ "}</Text>
      </View>
      <View>
        <Text>{props.food.price}</Text>
      </View>
      {/* Vertical Line Container */}
      <View>
        <View style={foodListStyles.boldVerticalLine}></View>
      </View>
      {/* Edit Icon Container */}

      <View style={foodListStyles.icons}>
        <TouchableOpacity>
          <Ionicons name="pencil" size={23} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Delete Icon Container */}
      <View style={foodListStyles.icons}>
        <TouchableOpacity>
          <Ionicons name="ios-trash-bin-sharp" size={23} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  const HEADING_TEXT = "Food List";
  const ADD_FOOD_ITEM_TEXT = "Add Food Item";
  const ICON = "Entypo";
  const ICON2 = "AntDesign";
  const EDIT_ICON = "edit";
  const DELETE_ICON = "delete";
  const ADD_FOOD_TEXT_MODAL = "Add Food";

  const foodObject = [
    {
      name: "mango",
      price: "30",
    },
    {
      name: "banana",
      price: "40",
    },
    {
      name: "orange",
      price: "30",
    },
    {
      name: "mangod",
      price: "30",
    },
    {
      name: "bananda",
      price: "40",
    },
    {
      name: "orangde",
      price: "30",
    },
    {
      name: "mango",
      price: "30",
    },
    {
      name: "banana",
      price: "40",
    },
    {
      name: "orange",
      price: "30",
    },
  ];

  const [foodList, setFoodList] = useState(foodObject);
  const [modalOpen, setmodalOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={styles.heading}>
        <Text style={styles.headingText}>{HEADING_TEXT}</Text>
      </View>

      {/*Bold Horizontal Line */}
      <View style={styles.boldHorizontalLine}></View>

      {/* Food list Items */}
      {foodList.length > 0 && (
        <View style={styles.foodItemsContainer}>
          <ScrollView>
            {foodList.map((value, index, array) => (
              <FoodList
                key={index}
                food={{ name: value.name, price: value.price }}
              />
            ))}
          </ScrollView>
        </View>
      )}

      {/* Dotted Horizontal Line */}
      <View style={styles.dottedHorizontalLine}></View>

      {/* Add Food Item */}
      <TouchableOpacity onPress={() => setmodalOpen(true)}>
        <View style={styles.addFoodItemContainer}>
          <View style={styles.icons}>
            <Ionicons name="add" size={30} color="black" />
          </View>
          <View>
            <Text style={styles.addFoodItemTextStyle}>
              {ADD_FOOD_ITEM_TEXT}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Add Food Items Pop Up Modal*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => {
          setmodalOpen(false);
        }}
      >
        <View style={modalStyles.fullContainer}>

          {/* Half screen */}
          <View style={modalStyles.mainContainer}>

            {/* smallHorizontalBar */}
            <View style={modalStyles.smallHorizontalBarContainer}>
              <View style={modalStyles.smallHorizontalBar}></View>
            </View>

            {/* Model Header Content */}
            <View style={modalStyles.modalHeader}>

              {/* Add Food */}
              <View style={modalStyles.addFoodTextContainer}>
                <View style={modalStyles.addFoodTextSubContainer}>
                  <Text style={styles.mediumBoldText}>
                    {ADD_FOOD_TEXT_MODAL}
                  </Text>
                </View>
              </View>

              {/* Close Button */}
              <View style={modalStyles.close}>
                <View style={modalStyles.closeSubContainer}>
                  <TouchableOpacity onPress={()=>{
                    setmodalOpen(false)
                  }}>
                  <Entypo name="cross" size={30} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 100,
    display: "flex",
    alignItems: "center",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  boldHorizontalLine: {
    borderColor: "#F3E9E5",
    borderWidth: 0,
    height: 10,
    // marginLeft: 30,
    // marginRight: 30,
    marginTop: 10,
    // marginBottom: 10,
    backgroundColor: "#F3E9E5",
    // borderRadius: 5,
    elevation: 20,
  },
  foodItemsContainer: {
    maxHeight: 500,
  },
  dottedHorizontalLine: {
    borderColor: "#F3E9E5",
    borderStyle: "dotted",
    borderTopWidth: 2,
    height: 5,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  addFoodItemContainer: {
    flexDirection: "row",
    // justifyContent : 'center',
    alignItems: "center",
    borderColor: "#B1E8CE",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#F5F5F5",
  },
  addFoodItemTextStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  icons: {
    marginLeft: 10,
    marginRight: 10,
  },
  mediumBoldText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

const foodListStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#F3E9E5",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#F5F5F5",
    elevation: 3,
  },
  foodNameContainerStyle: {
    width: "35%",
  },
  foodNameTextStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  priceTextStyle: {
    color: "#C6C6C6",
  },
  boldVerticalLine: {
    borderLeftColor: "#F3E9E5",
    height: 25,
    width: 1,
    borderLeftWidth: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  icons: {
    marginLeft: 10,
    marginRight: 10,
  },
  iconsDashboard: {
    marginLeft: 10,
    marginRight: 15,
  },
});

const modalStyles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainContainer: {
    display: "flex",
    // alignItems: "center",
    // justifyContent: 'center',
    marginTop: 400,
    width: "100%",
    height: Dimensions.get("screen").height * 0.9,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
  },
  smallHorizontalBarContainer: {
    display: "flex",
    alignItems: "center",
    // justifyContent: 'center',
    // width : '100%',
  },
  smallHorizontalBar: {
    padding: 4,
    width: 50,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#ddd",
    elevation : 5
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "fl",
  },
  addFoodTextContainer: {
    width: "50%",
  },
  addFoodTextSubContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20,
  },
  close: {
    width: "50%",
  },
  closeSubContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: 20,
    marginRight: 20,
    // borderWidth : 1,
  },
});
