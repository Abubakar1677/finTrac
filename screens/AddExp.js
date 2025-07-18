// screens/AddExpense.js
import React, { useContext, useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Platform,Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { ExpContext } from '../components/ExpContext';
import { useNavigation } from '@react-navigation/native';


const AddExpense = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const {addTransaction} = useContext(ExpContext)

  const handleSubmit = () => {
    if (!title || !amount || !category || !date) {
      Alert.alert('All fields are required');
      return; 
    }

    const newTransaction = {
      title,
      amount: parseFloat(amount),
      category,
      note,
      date: date.toDateString(),
    };

    addTransaction(newTransaction);
    Alert.alert('Expense added successfully!');
    navigation.goBack();
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Expense</Text>

      <TextInput
        placeholder="Title (e.g., Grocery)"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Amount (₦) ; if expense, use negative value"
        keyboardType="numeric"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        placeholder="Category (e.g., Food, Transport)"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />

      <TouchableOpacity onPress={showDatePicker} style={styles.dateButton}>
        <Ionicons name="calendar-outline" size={20} color="#0D47A1" />
        <Text style={styles.dateText}>{date.toDateString()}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShowPicker(false);
            setDate(currentDate);
          }}
        />
      )}

      <TextInput
        placeholder="Note (optional)"
        multiline
        numberOfLines={3}
        style={[styles.input, { height: 80 }]}
        value={note}
        onChangeText={setNote}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#0077cc',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:20
  },
  input: {
    borderColor: 'dodgerblue',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#f8faff',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderColor: 'dodgerblue',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
  },
  dateText: {
    marginLeft: 10,
    color: '#0D47A1',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0077cc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


