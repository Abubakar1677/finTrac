import React, { useState } from 'react';
import {View,Text,FlatList,StyleSheet,TouchableOpacity,Alert,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import {ExpContext} from '../components/ExpContext'

const primaryColor = '#007BFF';
const backgroundColor = '#F2F6FF';
const textColor = '#1A1A1A';

const Hist = () => {
  const { transactions, setTransactions } = useContext(ExpContext);
  const [expandedId, setExpandedId] = useState(null);

  const handleDelete = (id) => {
    Alert.alert('Delete', 'Are you sure you want to delete this expense?', [
      { text: 'Cancel'},
      {
        text: 'Delete',
        
        onPress: () =>
          setTransactions((prevTransactions) =>
            prevTransactions.filter((item) => item.id !== id)
          ),
      },
    ]);
  };

  const renderItem = ({ item }) => {
    const isExpanded = item.id === expandedId;

    return (
      <View style={styles.historyItem}>
        <TouchableOpacity
          style={{ flexDirection: 'row', flex: 1 }}
          onPress={() => setExpandedId(isExpanded ? null : item.id)}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="time-outline" size={20} color={primaryColor} />
          </View>
          <View style={styles.info}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.date}>{item.date}</Text>
            {isExpanded && (
              <Text style={styles.note}>Note: {item.note || 'No notes'}</Text>
            )}
          </View>
          <Text style={styles.amount}>
              {item.amount >= 0 ? `+₦${item.amount}` : `-₦${Math.abs(item.amount)}`}
          </Text>
        </TouchableOpacity>

        {isExpanded && (
          <TouchableOpacity
            style={styles.deleteTextButton}
            onPress={() => handleDelete(item.id)}
          >
            <Ionicons name="trash-outline" size={20} color="red" />
            <Text style={{ color: 'red', marginLeft: 4 }}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense History</Text>
      {transactions.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="document-text-outline" size={40} color="#ccc" />
          <Text style={styles.emptyText}>History appears here</Text>
        </View>
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: primaryColor,
    marginBottom: 15,
    marginTop: 20,
  },
  historyItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  iconContainer: {
    marginRight: 12,
    marginTop: 5,
  },
  info: {
    flex: 1,
  },
  category: {
    fontSize: 16,
    fontWeight: '500',
    color: textColor,
  },
  date: {
    fontSize: 13,
    color: '#666',
  },
  note: {
    marginTop: 6,
    fontSize: 13,
    color: '#333',
    fontStyle: 'italic',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: primaryColor,
    marginTop: 4,
  },
  deleteTextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 100,
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: '#999',
  },
});

export default Hist;
