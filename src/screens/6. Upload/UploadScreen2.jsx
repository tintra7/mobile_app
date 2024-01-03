import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus, faGripVertical } from '@fortawesome/free-solid-svg-icons';

import { Colors } from '../../../assets/themes/Theme';

const UploadScreen2 = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState([{ number: 1, text: '' }]);

  navigation = useNavigation();

  const handleFinishPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('HomeScreen');
  };

  const addIngredient = () => {
    setIngredients((prevIngredients) => ['', ...prevIngredients]);
  };

  const addStep = () => {
    const newStepNumber = steps.length + 1;
    setSteps((prevSteps) => [...prevSteps, { number: newStepNumber, text: '' }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.progressText}>2/2</Text>
        </View>

        {/* Ingredients Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Ingredients</Text>
            <TouchableOpacity>
              <Text style={styles.sectionButton}>＋ Group</Text>
            </TouchableOpacity>
          </View>
          {ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientsRow}>
              <FontAwesomeIcon
                icon={faGripVertical}
                color={Colors.INFO_SECONDARY}
                style={styles.gripIcon}
              />
              <TextInput
                style={styles.ingredientsInputText}
                placeholder="Enter ingredient"
                placeholderTextColor={Colors.INFO_SECONDARY}
                value={ingredient}
                onChangeText={(text) => {
                  const updatedIngredients = [...ingredients];
                  updatedIngredients[index] = text;
                  setIngredients(updatedIngredients);
                }}
              />
            </View>
          ))}

          <TouchableOpacity onPress={addIngredient}>
            <Text style={styles.addButton}>＋ Ingredient</Text>
          </TouchableOpacity>
        </View>

        {/* Steps Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeaderText}>Steps</Text>
          
          {steps.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <Text style={styles.stepNumber}>{step.number}</Text>
              <TextInput
                style={[styles.stepInputText, { height: 100 }]}
                placeholder={`Step ${step.number}`}
                placeholderTextColor={Colors.INFO_SECONDARY}
                multiline
                value={step.text}
                onChangeText={(text) => {
                  const updatedSteps = [...steps];
                  updatedSteps[index].text = text;
                  setSteps(updatedSteps);
                }}
              />
            </View>
          ))}

          <TouchableOpacity style={styles.addStepsButton} onPress={addStep}>
            <FontAwesomeIcon icon={faCirclePlus} size={22} color={Colors.PRIMARY_MAIN} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Back & Finish Button */}
      <HideWithKeyboard>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.finishButton}
            onPress={handleFinishPress}
          >
            <Text style={styles.finishButtonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </HideWithKeyboard>

      {/* Modal */}
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContainer}>
          <Image
            source={require("../../../assets/images/Modal.png")}
            style={styles.modalImage}
          />
          <Text style={styles.modalTitle}>Upload Success!</Text>
          <Text style={styles.modalText}>
            Your recipe has been uploaded, you can see it on your profile
          </Text>
          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.modalButton}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: "5%",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: "5%",
  },
  cancelText: {
    color: Colors.PRIMARY_MAIN,
    fontFamily: "MulishBold",
    fontSize: 18,
  },
  progressText: {
    color: 'black',
    fontFamily: "MulishBold",
    fontSize: 16,
  },
  finishButton: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    padding: 10,
  },
  finishButtonText: {
    color: Colors.PRIMARY_MAIN,
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContainer: {
    borderBottomWidth: 5,
    borderBottomColor: '#F1F1F1',
    paddingBottom: 40,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionHeaderText: {
    color: Colors.INFO_MAIN,
    fontFamily: "MulishBold",
    fontSize: 18,
  },
  sectionButton: {
    color: Colors.PRIMARY_MAIN,
    fontFamily: "MulishMedium",
    fontSize: 16,
  },
  ingredientsRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: Colors.INFO_SECONDARY,
  },
  gripIcon: {
    marginRight: "3%",
    color: Colors.INFO_SECONDARY,
  },
  ingredientsInputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.INFO_SECONDARY,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 10,
    borderRadius: 30,
    fontFamily: "MulishMedium",
  },
  addButton: {
    color: Colors.PRIMARY_MAIN,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.INFO_SECONDARY,
    top: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  stepContainer: {
    marginTop: "2%",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stepNumber: {
    width: 25,
    height: 25,
    marginRight: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: Colors.INFO_MAIN,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    borderRadius: 50,
  },
  stepInputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.INFO_SECONDARY,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: "3%",
    borderRadius: 15,
    fontFamily: "MulishMedium",
  },
  addStepsButton: {
    color: Colors.PRIMARY_MAIN,
    backgroundColor: Colors.PRIMARY_SECONDARY,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 15,
    textAlign: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 60,
    bottom: "2%",
  },
  backButton: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_SECONDARY,
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  finishButton: {
    color: 'white',
    flex: 1,
    backgroundColor: Colors.PRIMARY_MAIN,
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  backButtonText: {
    color: Colors.PRIMARY_MAIN,
    fontFamily: "MulishBold",
    fontSize: 16,
    textAlignVertical: 'center',
  },
  finishButtonText: {
    color: 'white',
    fontFamily: "MulishBold",
    fontSize: 16,
    textAlignVertical: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 250,
    height: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontFamily: "MulishBold",
    fontSize: 20,
    marginBottom: "2%",
  },
  modalText: {
    fontFamily: "MulishMedium",
    fontSize: 14,
    color: Colors.INFO_SECONDARY,
    marginBottom: "10%",
    textAlign: 'center',
  },
  modalImage: {
    width: 120,
    height: 120
  },
  modalButton: {
    backgroundColor: Colors.SUCCESS_MAIN,
    paddingVertical: "6%",
    paddingHorizontal: "10%",
    color: 'white',
    borderRadius: 30,
    fontFamily: "MulishBold",
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10
  },
});

export default UploadScreen2;
