import { StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

// Mock data - replace with real data from your backend
const REWARDS = [
  {
    id: '1',
    title: '$5 Coffee Voucher',
    points: 500,
    image: require('@/assets/images/icon.png'), // Using the default Expo icon
  },
  {
    id: '2',
    title: 'Plant a Tree',
    points: 1000,
    image: require('@/assets/images/icon.png'), // Using the default Expo icon
  },
  // Add more rewards...
];

export default function RewardsScreen() {
  const [userPoints] = useState(750); // Replace with actual user points from your backend

  return (
    <ScrollView style={styles.container}>
      {/* Points Overview */}
      <ThemedView style={styles.pointsCard}>
        <ThemedText style={styles.pointsTitle}>Your Points</ThemedText>
        <ThemedText style={styles.pointsValue}>{userPoints}</ThemedText>
        <ThemedText style={styles.pointsSubtitle}>Keep recycling to earn more!</ThemedText>
      </ThemedView>

      {/* Available Rewards */}
      <ThemedText style={styles.sectionTitle}>Available Rewards</ThemedText>
      {REWARDS.map((reward) => (
        <TouchableOpacity 
          key={reward.id}
          style={[
            styles.rewardCard,
            userPoints < reward.points && styles.rewardCardDisabled
          ]}
          disabled={userPoints < reward.points}
        >
          <Image source={reward.image} style={styles.rewardImage} />
          <ThemedView style={styles.rewardInfo}>
            <ThemedText style={styles.rewardTitle}>{reward.title}</ThemedText>
            <ThemedView style={styles.pointsRow}>
              <IconSymbol name="gift.fill" size={16} color="#4CAF50" />
              <ThemedText style={styles.rewardPoints}>{reward.points} points</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText 
            style={[
              styles.redeemButton,
              userPoints < reward.points && styles.redeemButtonDisabled
            ]}
          >
            {userPoints >= reward.points ? 'Redeem' : 'Not Enough Points'}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  pointsCard: {
    backgroundColor: '#4CAF50',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  pointsTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  pointsValue: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  pointsSubtitle: {
    color: '#fff',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  rewardCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rewardCardDisabled: {
    opacity: 0.6,
  },
  rewardImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  rewardInfo: {
    flex: 1,
    marginLeft: 16,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewardPoints: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  redeemButton: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  redeemButtonDisabled: {
    color: '#666',
  },
}); 