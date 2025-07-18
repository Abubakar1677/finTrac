import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Sett = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleNotifications = () => setNotificationsEnabled(prev => !prev);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', onPress: () => console.log('Logged out') },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Profile</Text>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="person-circle-outline" size={24} color="#333" />
        <Text style={styles.itemText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="lock-closed-outline" size={24} color="#333" />
        <Text style={styles.itemText}>Change Password</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Preferences</Text>
      <View style={styles.item}>
        <Ionicons name="notifications-outline" size={24} color="#333" />
        <Text style={styles.itemText}>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.item}>
        <Ionicons name="moon-outline" size={24} color="#333" />
        <Text style={styles.itemText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      <Text style={styles.sectionTitle}>Other</Text>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="information-circle-outline" size={24} color="#333" />
        <Text style={styles.itemText}>About App</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="red" />
        <Text style={[styles.itemText, { color: 'red' }]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: 'dodgerblue',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  itemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default Sett;
