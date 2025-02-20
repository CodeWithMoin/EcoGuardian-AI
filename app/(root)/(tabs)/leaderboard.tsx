import { View, Text, Image, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants/images'

const LeaderboardTabs = ['Daily', 'Weekly', 'Monthly'];

// Update the interface
interface LeaderboardEntry {
  id: number;
  name: string;
  role: string;
  points: number;
  avatar: any; // Change from string to any for local images
}

const leaderboardData: LeaderboardEntry[] = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'Product Designer',
    points: 9847,
    avatar: images.emma,
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Software Engineer',
    points: 9521,
    avatar: images.james,
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Marketing Lead',
    points: 9234,
    avatar: images.sarah,
  },
  {
    id: 4,
    name: 'Michael Anderson',
    role: 'Sales Director',
    points: 8967,
    avatar: images.michael,
  },
  {
    id: 5,
    name: 'Priya Patel',
    role: 'UX Researcher',
    points: 8756,
    avatar: images.priya,
  },
];

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('Daily');

  // Add back the sorting functions
  const getDailyData = () => [...leaderboardData].map(item => ({
    ...item,
    points: Math.floor(item.points * 0.3)
  })).sort((a, b) => b.points - a.points);
  
  const getWeeklyData = () => [...leaderboardData].map(item => ({
    ...item,
    points: Math.floor(item.points * 0.6)
  })).sort((a, b) => Math.random() - 0.5);
  
  const getMonthlyData = () => [...leaderboardData].sort((a, b) => b.points - a.points);
  
  const getCurrentData = () => {
    switch (activeTab) {
      case 'Weekly':
        return getWeeklyData();
      case 'Monthly':
        return getMonthlyData();
      default:
        return getDailyData();
    }
  };

  // Add back the renderLeaderboardItem function
  const renderLeaderboardItem = (item: LeaderboardEntry, index: number) => (
    <View key={item.id} className="flex-row items-center py-4 px-4 border-b border-grey mb-3">
      <View className="w-8">
        <Text className="text-xl font-poppins-semibold text-black">{index + 1}</Text>
      </View>
      <Image source={item.avatar} className="w-12 h-12 rounded-full mr-4" />
      <View className="flex-1">
        <Text className="text-lg font-poppins-semibold text-black">{item.name}</Text>
        <Text className="text-base text-grey-100 font-poppins-regular">{item.role}</Text>
      </View>
      <View className="items-end">
        <Text className="text-xl font-poppins-bold text-black">{item.points.toLocaleString()}</Text>
        <Text className="text-sm text-grey-100 font-poppins-regular">points</Text>
      </View>
    </View>
  );

  // Add back the currentUser data
  const currentUser: LeaderboardEntry = {
    id: 24,
    name: 'You',
    role: 'Product Manager',
    points: 7234,
    avatar: images.you,
  };

  const getCurrentUserPoints = () => {
    switch (activeTab) {
      case 'Weekly':
        return Math.floor(currentUser.points * 0.6);
      case 'Monthly':
        return currentUser.points;
      default:
        return Math.floor(currentUser.points * 0.3);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-accent">
      <View className="absolute left-0 right-0 z-20 top-0">
        <BlurView intensity={80} tint="light">
          <View className="pt-[72px] pb-6">
            <Text className="text-3xl font-poppins-semibold text-black text-center mb-[22px]">
              Leaderboard
            </Text>
            
            <View className="mx-4 rounded-2xl overflow-hidden">
              <View className="flex-row p-2 gap-2">
                {LeaderboardTabs.map((tab) => (
                  <TouchableOpacity
                    key={tab}
                    className={`flex-1 py-3 items-center rounded-xl ${
                      activeTab === tab ? 'bg-black-100' : 'bg-[#f5f5f5]'
                    }`}
                    onPress={() => setActiveTab(tab)}
                  >
                    <Text className={`text-lg font-poppins-medium ${
                      activeTab === tab ? 'text-accent' : 'text-grey-100'
                    }`}>
                      {tab}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </BlurView>
      </View>

      <ScrollView className="flex-1 px-6 pt-[145px]">
        {getCurrentData().map((item, index) => renderLeaderboardItem(item, index))}
      </ScrollView>

      <View className="px-6 border-t border-grey mb-[44px]">
        {renderLeaderboardItem({
          ...currentUser,
          points: getCurrentUserPoints()
        }, 23)}
      </View>
    </SafeAreaView>
  );
};

export default Leaderboard;