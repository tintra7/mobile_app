import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AboutScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAboutOmurice = () => {
    console.log('Navigate to About Omurice');
  };

  const handleFeedbackSupport = () => {
    console.log('Navigate to Feedback & Support');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={handleGoBack}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} color="white" />
      </TouchableOpacity>
      <Image source={require('../../../assets/images/AboutBackground.png')} style={styles.headerImage} />
      <Text style={styles.overlayTitle}>About Omurice</Text>
      <Text style={styles.overlayText}>Welcome to Omurice, the heart of innovation for food lovers! At Omurice, we've reimagined the way you approach cooking. Our mobile app is your passport to a world of culinary exploration, effortlessly detecting ingredients with a simple snapshot. {'\n\n'}
      What sets us apart? Omurice isn't just about recognition; it's about inspiration. We're your go-to kitchen companion, suggesting personalized recipes based on what's in your pantry. Say goodbye to meal planning stress and hello to delightful surprises on your plate! {'\n\n'}
      Our mission is to make every cooking experience seamless, enjoyable, and filled with flavor. Join us on this flavor-filled journey, where your next culinary masterpiece is just a tap away. Omurice: Redefining the art of cooking, one ingredient at a time.</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  backIcon: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginBottom: 12
  },
  overlayTitle: {
    position: 'absolute',
    top: 80, // Điều chỉnh vị trí dọc theo chiều dưới của hình ảnh
    left: 18, // Điều chỉnh vị trí ngang theo chiều trái của hình ảnh
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  overlayText: {
    position: 'absolute',
    top: 150, 
    left: 18, 
    right: 18,
    textAlign: 'justify',
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});
