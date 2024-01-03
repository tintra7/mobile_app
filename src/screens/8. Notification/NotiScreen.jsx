import React, { useState, useCallback } from 'react';
import { View, Text, SectionList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faBell, faPenToSquare, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import notifications from './mockData';

const NotiScreen = ({ navigation }) => {
  const [selectedNavItem, setSelectedNavItem] = useState('Notification');

  const handleNavPress = (navItem) => {
    setSelectedNavItem(navItem);
  
    if (navItem === 'Upload') {
      navigation.navigate('UploadScreen1');
    } else if (navItem === 'Profile') {
      navigation.navigate('ProfileScreen');
    } else if (navItem === 'Notification') {
      navigation.navigate('NotiScreen');
    } else if (navItem === 'Camera') {
      navigation.navigate('CameraScreen');
    } else if (navItem === 'Home') {
      navigation.navigate('HomeScreen');
    }
  };

  const filterByDate = (dateCriteria) => {
    const sortedNotifications = notifications.sort((a, b) => b.id - a.id);
    
    if (dateCriteria === 'New') {
      return sortedNotifications.slice(0, 2);
    } else if (dateCriteria === 'Today') {
      return sortedNotifications.slice(0, 3);
    } else if (dateCriteria === 'Previous7Days') {
      return sortedNotifications.slice(3, 10);
    }

    return [];
  };

  const data = [
    { title: 'New', data: filterByDate('New') },
    { title: 'Today', data: filterByDate('Today') },
    { title: 'Previous 7 Days', data: filterByDate('Previous7Days') },
  ];

  const renderItem = ({ item }) => (
    <NotificationItem item={item} />
  );

  const keyExtractor = (item) => item.id;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  useFocusEffect(
    useCallback(() => {
      setSelectedNavItem('Notification');
    }, [])
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Home')}
        >
          <FontAwesomeIcon icon={faHouse} size={20} color={selectedNavItem === 'Home' ? '#FF6A00' : '#9FA5C0'} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Home' ? '#FF6A00' : '#9FA5C0' }]}
            numberOfLines={1}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Upload')}
        >
          <FontAwesomeIcon icon={faPenToSquare} size={20} color={selectedNavItem === 'Upload' ? '#FF6A00' : '#9FA5C0'} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Upload' ? '#FF6A00' : '#9FA5C0' }]}
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
            <FontAwesomeIcon icon={faCamera} size={20} color={selectedNavItem === 'Camera' ? 'white' : '#F1F1F1'} />
          </View>
          <Text style={[styles.navText, { color: selectedNavItem === 'Camera' ? '#FF6A00' : '#9FA5C0', marginTop: "29%" }]}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Notification')}
        >
          <FontAwesomeIcon icon={faBell} size={20} color={selectedNavItem === 'Notification' ? '#FF6A00' : '#9FA5C0'} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Notification' ? '#FF6A00' : '#9FA5C0' }]}
            numberOfLines={1}
          >
            Notification
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleNavPress('Profile')}
        >
          <FontAwesomeIcon icon={faUser} size={20} color={selectedNavItem === 'Profile' ? '#FF6A00' : '#9FA5C0'} />
          <Text
            style={[styles.navText, { color: selectedNavItem === 'Profile' ? '#FF6A00' : '#9FA5C0' }]}
            numberOfLines={1}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NotificationItem = ({ item }) => {
  const [followed, setFollowed] = useState(item.followed);

  const handleFollowToggle = () => {
    setFollowed(!followed);
  };

  return (
    <View style={styles.gridItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.followButton,
          { backgroundColor: followed ? '#F1F1F1' : '#FF6A00' },
        ]}
        onPress={handleFollowToggle}
      >
        <Text style={[styles.followButtonText, { color: followed ? 'black' : 'white' }]}>
          {followed ? 'Followed' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  gridItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#9FA5C0',
  },
  followButton: {
    padding: 8,
    borderRadius: 20,
    width: 80,
    height: 40,
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  followButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    paddingHorizontal: 24,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingVertical: "3%",
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: '#9FA5C0',
    fontFamily: "MulishMedium",
    fontSize: 12,
    top: "7%",
  },
  cameraIcon: {
    position: 'absolute',
    top: "-105%",
    backgroundColor: '#FF6A00',
    borderRadius: 50,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotiScreen;
