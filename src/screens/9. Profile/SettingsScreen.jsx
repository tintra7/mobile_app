import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');


  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAboutOmurice = () => {
    navigation.navigate('AboutScreen');
  };

  const handleFeedbackSupport = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmitFeedback = () => {
    console.log('Submitting feedback:', feedbackText);

    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon} onPress={handleGoBack}>
          <FontAwesomeIcon icon={faChevronLeft} size={20} color="white" />
        </TouchableOpacity>
        <Image source={require('../../../assets/images/SettingBanner.png')} style={styles.headerImage} />
      </View>

      {/* About Omurice */}
      <TouchableOpacity style={styles.optionItem} onPress={handleAboutOmurice}>
        <Text style={styles.optionText}>About Omurice</Text>
      </TouchableOpacity>

      {/* Feedback & Support */}
      <TouchableOpacity style={styles.optionItem} onPress={handleFeedbackSupport}>
        <Text style={styles.optionText}>Feedback & Support</Text>
      </TouchableOpacity>

      {/* Feedback Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Feedback</Text>
            <View style={styles.modalLine}></View>
            <TextInput
              style={styles.modalInput}
              multiline
              placeholder="Type your feedback here..."
              value={feedbackText}
              onChangeText={(text) => setFeedbackText(text)}
            />
            <TouchableOpacity style={styles.modalSubmit} onPress={handleSubmitFeedback}>
              <Text style={styles.modalSubmitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
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
    height: 240,
    resizeMode: 'cover',
    marginBottom: 12
  },
  optionItem: {
    padding: 12,
    paddingHorizontal: 20
  },
  optionText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 12,
  },
  modalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#9FA5C0',
    marginBottom: 10,
  },
  modalInput: {
    width: '100%',
    height: 150,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  modalSubmit: {
    backgroundColor: '#FF6A00',
    padding: 12,
  },
  modalSubmitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default SettingsScreen;
