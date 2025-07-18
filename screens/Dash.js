import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {View,Text,SafeAreaView,FlatList,TouchableOpacity,StyleSheet,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ExpContext } from '../components/ExpContext';
import { useContext } from 'react';


export default function Dash() {
  const { transactions } = useContext(ExpContext);
  const navigation = useNavigation();

  const income = transactions
    .filter((tran) => tran.amount > 0)
    .reduce((sum, tran) => sum + tran.amount, 0);

  const expenses = transactions
    .filter((tran) => tran.amount < 0)
    .reduce((sum, tran) => sum + Math.abs(tran.amount), 0);

  const balance = income - expenses;

  const handleTran = ({ item }) => (
    <View style={styles.transaction}>
      <Text style={styles.transactionTitle}>{item.title}</Text>
      <Text
        style={[
          styles.transactionAmount,
          { color: item.amount >= 0 ? 'green' : 'red' },
        ]}
      >
        {item.amount >= 0 ? `+₦${item.amount}` : `-₦${Math.abs(item.amount)}`}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome, Abubakar 👋</Text>

      <View style={styles.epxBoard}>
        <Text style={styles.discText}>Current Balance</Text>
        <Text style={styles.bal}>₦{balance.toLocaleString()}</Text>
      </View>

      <View style={styles.summary}>
        <View style={styles.income}>
          <Text style={styles.discText}>Income</Text>
          <Text style={[styles.amt, { color: 'green' }]}>
            ₦{income.toLocaleString()}
          </Text>
        </View>
        <View style={styles.exp}>
          <Text style={[styles.amt, { color: 'red' }]}>
            ₦{expenses.toLocaleString()}
          </Text>
        </View>
      </View>

      <Text style={styles.RecentTitle}>Recent Transactions</Text>
      <FlatList
        data={[...transactions.slice(-6)].reverse()}
        renderItem={handleTran}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('AddExp')}
        style={styles.fab}
      >
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0077cc',
    marginBottom: 20,
    marginTop:20
  },
  epxBoard: {
    backgroundColor: '#f0f8ff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#0077cc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  discText: {
    fontSize: 14,
    color: '#666',
  },
  bal: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0077cc',
    marginTop: 5,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  income: {
    width: '48%',
    padding: 15,
    backgroundColor: '#e7f9ed',
    borderRadius: 10,
  },
  exp: {
    width: '48%',
    padding: 15,
    backgroundColor: '#ffeef0',
    borderRadius: 10,
  },
  amt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  RecentTitleTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#0077cc',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  transactionTitle: {
    fontSize: 16,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0077cc',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0077cc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    lineHeight: 32,
  },
});



