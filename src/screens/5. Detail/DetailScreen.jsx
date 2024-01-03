import React from "react";
import { Animated, Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View, } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';


import { Colors } from "../../../assets/themes/Theme";

const windowWidth = Dimensions.get("window").width;

const DetailScreen = ({ route, navigation }) => {
  const { foodId, foodName, foodDescription, foodImg, foodCategory, foodTime, userAvatar, userName } = route.params;
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 225],
    outputRange: [0, -225]
  });

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle={'light-content'} />
    
      <Animated.View
        style={{ 
          transform: [
            {translateY: translateY}
          ],
          elevation: 4,
          zIndex: 100,
        }}
      >
        <View style={styles.imgContainer}>
          <Image source={foodImg} style={styles.foodImg}/>
        </View>
      </Animated.View>

      <ScrollView contentContainerStyle={styles.detailContainer} onScroll={(e) => {
        scrollY.setValue(e.nativeEvent.contentOffset.y)
      }}>
        <Text style={styles.foodNameTxt}>{foodName}</Text>
        <Text style={styles.foodCategoryTxt}>{foodCategory}{foodTime}</Text>

        <View style={styles.userContainer}>
          <Image source={userAvatar} style={styles.userAvatarImg}/>
          <Text style={styles.userNameTxt}>{userName}</Text>
        </View>
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.titleTxt}>Description</Text>
          <Text style={styles.contentTxt}>{foodDescription}</Text>
        </View>

        {/* Separate Line */}
        <View style={styles.separateLine} />

        <View style={styles.ingredientsContainer}>
          <Text style={styles.titleTxt}>Ingredients</Text>
          
          <View style={styles.ingredientContainer}>
            <FontAwesomeIcon icon={faCircleCheck} size={25} style={styles.icon}/>
            <Text style={styles.contentTxt}>Ingredient 1</Text>
          </View>

          <View style={styles.ingredientContainer}>
            <FontAwesomeIcon icon={faCircleCheck} size={25} style={styles.icon}/>
            <Text style={styles.contentTxt}>Ingredient 2</Text>
          </View>
          
          <View style={styles.ingredientContainer}>
            <FontAwesomeIcon icon={faCircleCheck} size={25} style={styles.icon}/>
            <Text style={styles.contentTxt}>Ingredient 3</Text>
          </View>
        </View>

        {/* Separate Line */}
        <View style={styles.separateLine} />

        <View style={styles.stepsContainer}>
          <View style={styles.stepContainer}>
            <Text style={styles.stepNumber}>1</Text>
            <View>
              <Text style={styles.stepInstruction}>Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your</Text>
              <Image source={foodImg} style={styles.stepImg} />
            </View>
          </View>

          <View style={styles.stepContainer}>
            <Text style={styles.stepNumber}>2</Text>
            <View>
              <Text style={styles.stepInstruction}>Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your</Text>
              <Image source={foodImg} style={styles.stepImg} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 225,
  },
  foodImg: {
    width: "100%",
    height: 225,
  },
  detailContainer: {
    paddingTop: 235,
    paddingHorizontal: "5%",
    paddingVertical: "6%",
    backgroundColor: "white",
    borderRadius: 25,
  },
  foodNameTxt: {
    color: Colors.PRIMARY_MAIN,
    fontFamily: "MulishBold",
    fontSize: 20,
  },
  foodCategoryTxt: {
    color: "black",
    opacity: 0.4,
    fontFamily: "MulishMedium",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
  },
  userAvatarImg: {
    width: 35,
    height: 35,
    borderRadius: 30,
  },
  userNameTxt: {
    marginLeft: "3%",
    fontFamily: "MulishBold",
    fontSize: 16,
  },
  descriptionContainer: {
    marginTop: "6%",
  },
  titleTxt: {
    marginBottom: "2%",
    fontFamily: "MulishBold",
    fontSize: 16,
  },
  contentTxt: {
    fontFamily: "MulishMedium",
    fontSize: 15,
  },
  separateLine: {
    marginVertical: "5%",
    backgroundColor: "black",
    opacity: 0.4,
    height: 0.5,
  },
  ingredientsContainer: {
    marginTop: "2%",
  },
  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "1.5%",
  },
  icon: {
    marginRight: "4%",
    color: Colors.PRIMARY_MAIN,
  },
  stepsContainer: {
    flex: 1,
  },
  stepContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: "3%",
  },
  stepNumber: {
    marginRight: "4%",
    paddingHorizontal: "3%",
    paddingVertical: "1.5%",
    borderRadius: 30,
    backgroundColor: Colors.PRIMARY_MAIN,
    color: "white",
    fontFamily: "MulishMedium",
  },
  stepInstruction: {
    marginRight: "10%",
    marginBottom: "3%",
    fontFamily: "MulishMedium",
    fontSize: 15,
  },
  stepImg: {
    marginRight: "10%",
    borderRadius: 15,
    width: 0.78*windowWidth,
    height: 0.78*windowWidth,
    resizeMode: "contain",
  },
});

export default DetailScreen;
