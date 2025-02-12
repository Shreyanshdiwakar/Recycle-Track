import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Header Section */}
      <ThemedView style={styles.headerSection}>
        <ThemedView style={styles.welcomeContainer}>
          <ThemedView>
            <ThemedText style={styles.greeting}>Hi there!</ThemedText>
            <ThemedText style={styles.subtitle}>Let's contribute to our earth.</ThemedText>
          </ThemedView>
          <TouchableOpacity>
            <IconSymbol name="bell" size={24} color="#4CAF50" />
          </TouchableOpacity>
        </ThemedView>

        {/* Quick Category Pills */}
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryPill}>
            <IconSymbol name="leaf" size={20} color="#4CAF50" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryPill}>
            <IconSymbol name="recycle" size={20} color="#4CAF50" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryPill, styles.activePill]}>
            <ThemedText style={styles.pillText}>Plastic</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryPill}>
            <IconSymbol name="timer" size={20} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </ThemedView>

      {/* Mission Card */}
      <ThemedView style={styles.missionCard}>
        <ThemedText style={styles.missionTitle}>Recycle 5 plastic</ThemedText>
        <ThemedText style={styles.pointsText}>EARN 100 POINTS</ThemedText>
      </ThemedView>

      {/* Core Features Section */}
      <ThemedView style={styles.actionsSection}>
        <Link href="/scan" asChild>
          <TouchableOpacity style={styles.actionButton}>
            <IconSymbol name="barcode.viewfinder" size={24} color="#fff" />
            <ThemedText style={styles.actionButtonText}>Scan Item</ThemedText>
          </TouchableOpacity>
        </Link>

        <Link href="/map" asChild>
          <TouchableOpacity style={[styles.actionButton, styles.mapButton]}>
            <IconSymbol name="map.fill" size={24} color="#fff" style={styles.actionIcon} />
            <ThemedText style={styles.actionButtonText}>Find Centers</ThemedText>
          </TouchableOpacity>
        </Link>
      </ThemedView>

      {/* Stats Section */}
      <ThemedView style={styles.statsSection}>
        <ThemedView style={styles.statCard}>
          <ThemedText style={styles.statNumber}>0</ThemedText>
          <ThemedText style={styles.statLabel}>Items Recycled</ThemedText>
        </ThemedView>
        <ThemedView style={styles.statCard}>
          <ThemedText style={styles.statNumber}>0</ThemedText>
          <ThemedText style={styles.statLabel}>Points Earned</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  headerSection: {
    marginTop: 20,
    marginBottom: 24,
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    marginTop: 4,
  },
  categoryContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  categoryPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activePill: {
    backgroundColor: '#4CAF50',
  },
  pillText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  missionCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  pointsText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
  actionsSection: {
    gap: 16,
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },
  mapButton: {
    backgroundColor: '#1976D2',
  },
  actionIcon: {
    marginRight: 12,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  statsSection: {
    flexDirection: 'row',
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666666',
  },
});
