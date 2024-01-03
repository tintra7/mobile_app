import React from 'react';
import { StatusBar, View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { Colors } from '../../../assets/themes/Theme';

const Onboarding2 = ({ navigation }) => {
  const data = [1, 2, 3]; // Số lượng dots
  const activeIndex = 1; // Chỉ số của màn hình đang ở

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={'dark-content'}/>

      {/* Logo */}
      <Image source={require('../../../assets/images/Logo.png')} style={styles.logo} />

      {/* Tên ứng dụng */}
      <Text style={styles.appName}>Omurice</Text>

      {/* Mô tả ứng dụng */}
      <Text style={styles.slogan}>Cook it your way</Text>

      {/* Hình ảnh */}
      <Image source={require('../../../assets/images/Onboarding2.png')} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>Suggest Suitable Dishes</Text>

      <Text style={styles.description}>Explore a variety of recipes and cooking techniques to enhance your culinary skills.</Text>

      {/* Process Dots */}
      <View style={styles.processDots}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.toString()}
          renderItem={({ index }) => (
            <View
              style={[
                styles.dot,
                {
                  backgroundColor: index === activeIndex ? Colors.PRIMARY_MAIN : '#D3D3D3', // Màu của dot đang được chọn và màu của các dot khác
                },
              ]}
            />
          )}
          horizontal
          contentContainerStyle={styles.processDotsContent}
        />
      </View>

      {/* Nút chuyển trang */}
      <TouchableOpacity style={styles.buttonContainer} onPress={() => {navigation.navigate("Onboarding3")}}>
        <View style={styles.customButton}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: "5%",
    backgroundColor: 'white'
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: "-15%",
  },
  appName: {
    color: Colors.PRIMARY_MAIN,
    marginTop: "-5%", 
    fontFamily: "Pacifico",
    fontSize: 24,
  },
  slogan: {
    color: '#919495',
    fontFamily: "MulishLight",
    fontSize: 12,
    marginTop: "-2%",
  },
  image: {
    width: 270,
    height: 270,
    marginTop: 25,
    marginBottom: 20,
  },
  title: {
    color: 'black',
    fontFamily: "MulishBold",
    fontSize: 24,
    marginTop: "5%",
  },
  description: {
    color: '#919495',
    fontFamily: "MulishLight",
    fontSize: 14,
    marginVertical: 10,
    marginHorizontal: "3%",
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  customButton: {
    height: 55,
    borderRadius: 30,
    backgroundColor: Colors.PRIMARY_MAIN,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -50
  },
  buttonText: {
    color: 'white',
    fontFamily: "MulishBold",
    fontSize: 16,
    fontWeight: 'bold',
  },
  processDots: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  processDotsContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    marginHorizontal: 5,
  }
});

export default Onboarding2;
