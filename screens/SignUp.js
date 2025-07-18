import React, { useState } from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,Alert,} from 'react-native';



export default function SignUp({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('');
  const [range, setRange] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSignUp = () => {
    if (!fullName || !phone || !occupation || !email || !password || !confirm || !range ) {
      Alert.alert('All fields are required');
    } else if (password !== confirm) {
      Alert.alert('Passwords do not match');
    } else {
      Alert.alert(`Welcome, ${fullName}! Sign-up success`);
      navigation.replace('Home'); // Replace with your home screen route
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Your Ambat Fin-Tracker Account</Text>

      {/* Personal Info Section */}
      <Text style={styles.sectionHeader}>Personal Information</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholderTextColor="#999"
      />

      {/* Occupation Info Section */}
      <Text style={styles.sectionHeader}>Occupation Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Occupation"
        value={occupation}
        onChangeText={setOccupation}
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="income range[$ 100 - $ 20,000]"
        value={range}
        onChangeText={setRange}
        keyboardType="phone-pad"
        placeholderTextColor="#999"
      />

      {/* Account Info Section */}
      <Text style={styles.sectionHeader}>Account Information</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirm}
        onChangeText={setConfirm}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0077cc',
    marginBottom: 30,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0077cc',
    marginBottom: 10,
    marginTop: 25,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#0077cc',
    borderRadius: 10,
    backgroundColor: '#f8faff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#0077cc',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: '#0077cc',
    fontSize: 14,
    fontWeight: '500',
  },
});