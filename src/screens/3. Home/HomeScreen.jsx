import React from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import { faCamera, faMagnifyingGlass, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { useFocusEffect } from '@react-navigation/native';

import { Colors } from '../../../assets/themes/Theme';
import recipes from './mockData';
import Tabs from '../../components/Tab';

const HomeScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [selectedNavItem, setSelectedNavItem] = React.useState('Home');
  const [selectedTab, setSelectedTab] = React.useState('EXPLORE');
  const [currentTabContent, setCurrentTabContent] = React.useState([]);

  const tabs = [
    {
      title: "All",
      content: () => (
        <View>
          <FlatList
            data={currentTabContent.length > 0 ? currentTabContent : recipes}
            renderItem={renderRecipeItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.recipeList}
          />
        </View>
      ),
    },
    {
      title: "Food",
      content: () => (
        <View>
          <FlatList
            data={recipes.filter((recipe) => recipe.category == "Food")}
            renderItem={renderRecipeItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.recipeList}
          />
        </View>
      ),
    },
    {
      title: "Drink",
      content: () => (
        <View>
          <FlatList
            data={recipes.filter((recipe) => recipe.category == "Drink")}
            renderItem={renderRecipeItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.recipeList}
          />
        </View>
      ),
    },
    {
      title: "Dessert",
      content: () => (
        <View>
          <FlatList
            data={recipes.filter((recipe) => recipe.category == "Dessert")}
            renderItem={renderRecipeItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.recipeList}
          />
        </View>
      ),
    },
  ];

  const handleNavPress = (navItem) => {
    setSelectedNavItem(navItem);

    if (navItem === 'Upload') {
      navigation.navigate('UploadScreen1');
    } else if (navItem === 'Profile') {
      navigation.navigate('ProfileScreen');
    } else if (navItem === 'Notification') {
      navigation.navigate('NotiScreen');
    }

    // Chuyển hướng đến trang Camera khi nhấn vào item nav Camera
    if (navItem === 'Camera') {
      navigation.navigate('CameraScreen');
    } else if (navItem === 'Profile') {
      navigation.navigate('ProfileScreen');
    } else if (navItem === 'Notification') {
      navigation.navigate('NotiScreen');
    }
  };

  const renderRecipeItem = ({ item }) => (
    <View style={styles.recipeItem}>
      <TouchableOpacity
        onPress={() => navigation.navigate('UserProfileScreen', { userId: item.id, userName: item.userName, userDescription: item.userDescription })}
        style={styles.userContainer}
      >
        <Image source={item.avatar} style={styles.avatarContainer} />
        <Text style={styles.userName} numberOfLines={1}>{item.userName}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("DetailScreen", { foodId: item.id, foodName: item.name, foodDescription: item.description, foodImg: item.image, foodCategory: item.category, foodTime: item.time, userAvatar: item.avatar , userName: item.userName })}>
        <Image source={item.image} style={styles.recipeImage} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("DetailScreen", { foodId: item.id, foodName: item.name, foodDescription: item.description, foodImg: item.image, foodCategory: item.category, foodTime: item.time, userAvatar: item.avatar , userName: item.userName })}>
        <Text style={styles.recipeName}>{item.name}</Text>
      </TouchableOpacity>

      <View style={styles.recipeInfo}>
        <Text style={styles.categoryInfo}>{item.category}{item.time}</Text>
      </View>
    </View>
  );

  const shuffleRecipes = (list) => {
    const shuffledList = [...list];
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }
    return shuffledList;
  };

  const handleTabPress = (tab) => {
    setSelectedTab(tab);

    if (tab === 'JUST FOR YOU') {
      // Trộn lại danh sách công thức của "JUST FOR YOU" khi chọn lại tab
      const randomRecipes = shuffleRecipes(recipes.filter((recipe) => recipe.category !== 'JUST FOR YOU')).slice(0, 6);
      setCurrentTabContent([...randomRecipes]);
    } else {
      // Nếu chọn một tab khác, đặt lại danh sách công thức của "JUST FOR YOU" để trộn lại khi chọn lại tab
      setCurrentTabContent([]);
    }
  };

  // Sử dụng useFocusEffect để cập nhật trạng thái khi màn hình được tập trung
  useFocusEffect(
    React.useCallback(() => {
      setSelectedNavItem('Home'); // Thiết lập trạng thái khi màn hình được tập trung
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={'dark-content'} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>Omurice</Text>

        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => handleTabPress('EXPLORE')}>
            <Text style={[styles.exploreText, { color: selectedTab === 'EXPLORE' ? Colors.PRIMARY_MAIN : Colors.INFO_SECONDARY }]}>EXPLORE</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleTabPress('JUST FOR YOU')}>
            <Text style={[styles.justForYouText, { color: selectedTab === 'JUST FOR YOU' ? Colors.PRIMARY_MAIN : Colors.INFO_SECONDARY }]}>JUST FOR YOU</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faMagnifyingGlass} color={Colors.INFO_SECONDARY} />
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search"
          placeholderTextColor={Colors.INFO_SECONDARY}
          value={searchValue}
          onChangeText={setSearchValue}
          onSubmitEditing={() => { searchValue ? navigation.navigate("SearchScreen", { searchedValue: searchValue }) : false }}
        />
      </View>

      {/* Tabs */}
      <Tabs items={tabs} />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Home')}
        >
          <FontAwesomeIcon icon={faHouse} size={20} color={selectedNavItem === 'Home' ? Colors.PRIMARY_MAIN : Colors.INFO_SECONDARY} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Home' ? Colors.PRIMARY_MAIN : Colors.INFO_SECONDARY }]}
            numberOfLines={1}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Upload')}
        >
          <FontAwesomeIcon icon={faPenToSquare} size={20} color={selectedNavItem === 'Upload' ? Colors.PRIMARY_MAIN : Colors.INFO_SECONDARY} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Upload' ? Colors.PRIMARY_MAIN : Colors.INFO_SECONDARY }]}
            numberOfLines={1}
          >
            Upload
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Camera')}
        >
          <View style={styles.cameraIcon}>
            <FontAwesomeIcon icon={faCamera} size={20} color={'white'} />
          </View>
          <Text style={[styles.navText, { color: selectedNavItem === 'Camera' ? Colors.PRIMARY_MAIN : Colors.INFO_SECONDARY, marginTop: "29%" }]}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Notification')}
        >
          <FontAwesomeIcon icon={faBell} size={20} color={selectedNavItem === 'Notification' ? Colors.PRIMARY_MAIN : Colors.INFO_SECONDARY} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Notification' ? Colors.PRIMARY_MAIN : Colors.INFO_SECONDARY }]}
            numberOfLines={1}
          >
            Notification
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Profile')}
        >
          <FontAwesomeIcon icon={faUser} size={20} color={selectedNavItem === 'Profile' ? Colors.PRIMARY_MAIN : Colors.INFO_SECONDARY} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Profile' ? Colors.PRIMARY_MAIN : Colors.INFO_SECONDARY }]}
            numberOfLines={1}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "5%",
    marginTop: "-2%",
  },
  appName: {
    color: Colors.PRIMARY_MAIN,
    fontFamily: "Pacifico",
    fontSize: 20,
  },
  headerRight: {
    flexDirection: 'row',
  },
  exploreText: {
    fontFamily: "MulishMedium",
    color: Colors.PRIMARY_MAIN,
    marginRight: "4%",
  },
  justForYouText: {
    fontFamily: "MulishMedium",
    color: Colors.INFO_SECONDARY,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: "5%",
    paddingLeft: "5%",
    backgroundColor: '#F1F1F1',
    paddingVertical: "3%",
    borderRadius: 50,
  },
  searchTextInput: {
    flex: 1,
    marginLeft: 8,
    color: Colors.INFO_SECONDARY,
    fontFamily: "MulishMedium",
  },
  recipeList: {
    flexGrow: 1,
    alignItems: 'center',
  },
  recipeItem: {
    width: 150,
    marginBottom: 16,
    marginHorizontal: "2%",
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 15
  },
  userName: {
    flex: 1,
    color: Colors.INFO_MAIN,
    fontFamily: "MulishMedium",
    fontSize: 14,
  },
  recipeImage: {
    width: 150,
    height: 150,
    marginVertical: "8%",
    borderRadius: 20
  },
  recipeName: {
    color: Colors.PRIMARY_MAIN,
    fontFamily: "MulishBold",
    fontSize: 20,
  },
  recipeInfo: {
    color: Colors.INFO_SECONDARY,
    fontFamily: "MulishLight",
  },
  categoryInfo: {
    color: Colors.INFO_SECONDARY,
    fontFamily: "MulishMedium",
    fontSize: 12,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingVertical: "3%",
    backgroundColor: "white",
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: Colors.INFO_SECONDARY,
    fontFamily: "MulishMedium",
    fontSize: 12,
    top: "7%",
  },
  cameraIcon: {
    position: 'absolute',
    top: "-105%",
    backgroundColor: Colors.PRIMARY_MAIN,
    borderRadius: 50,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
