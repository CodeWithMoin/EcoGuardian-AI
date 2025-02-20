import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { icons } from '../../constants/icons'

const Stats = () => {
  // Sample data for the weekly activity chart
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      data: [32, 45, 38, 52, 42, 35, 45]
    }]
  }

  return (
    <SafeAreaView className="flex-1 bg-accent">
      <ScrollView className="flex-1">
        <View className="p-6 mx-[16px]">
          <Text className="text-3xl font-poppins-semibold mb-6 text-center">Statistics</Text>
          
          {/* User Profile Section */}
          <View className="bg-[#009C82] p-6 rounded-2xl mb-6">
            <View className="flex-row items-center mb-4">
              <Image source={icons.prof} className="w-16 h-16 rounded-full mr-4" />
              <View>
                <Text className="text-white text-xl font-poppins-semibold">Sarah Anderson</Text>
                <Text className="text-white/80 font-poppins-regular">Level 24 EcoGuardian</Text>
                <View className="flex-row items-center mt-1">
                  <Text className="text-white font-poppins-medium">4,521 points</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Activity Metrics */}
          <View className="flex-row justify-between mb-6">
            <View className="bg-white p-4 rounded-2xl flex-1 mr-4">
              <Text className="text-grey-100 font-poppins-regular">Weekly Scans</Text>
              <Text className="text-3xl font-poppins-semibold">247</Text>
              <Text className="text-[#009C82] font-poppins-medium">+12% vs last week</Text>
            </View>
            <View className="bg-white p-4 rounded-2xl flex-1">
              <Text className="text-grey-100 font-poppins-regular">Achievements</Text>
              <Text className="text-3xl font-poppins-semibold">18</Text>
              <Text className="text-[#009C82] font-poppins-medium">3 new this month</Text>
            </View>
          </View>

          {/* Weekly Activity Chart */}
          <View className="bg-white p-4 rounded-2xl mb-6 items-center pr-[50px]">
            <Text className="text-xl font-poppins-semibold mb-4 pl-[30px]">Weekly Activity</Text>
            <LineChart
              data={data}
              width={Dimensions.get('window').width - 48}
              height={220}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 156, 130, ${opacity})`,
                style: {
                  borderRadius: 16
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
                alignSelf: 'center'
              }}
            />
          </View>

          {/* Environmental Impact */}
          <View className="bg-white p- rounded-2xl mb-6">
            <Text className="text-xl font-poppins-semibold mb-4 text-center p-[16px]">Environmental Impact</Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-3xl font-poppins-semibold text-[#009C82]">127</Text>
                <Text className="text-sm font-poppins-regular text-grey-100">kg CO₂ Saved</Text>
              </View>
              <View className="items-center">
                <Text className="text-3xl font-poppins-semibold text-[#009C82]">89</Text>
                <Text className="text-sm font-poppins-regular text-grey-100">kg Waste Diverted</Text>
              </View>
              <View className="items-center">
                <Text className="text-3xl font-poppins-semibold text-[#009C82]">12</Text>
                <Text className="text-sm font-poppins-regular text-grey-100">Trees Saved</Text>
              </View>
            </View>
          </View>

          {/* Recent Badges */}
          <View className="mb-6">
            <Text className="text-xl font-poppins-semibold mb-4 text-center mt-[24px] p-[16px]">Recent Badges</Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <View className="w-20 h-20 bg-[#009C82] rounded-full items-center justify-center mb-2">
                  <Image source={icons.green} className="w-9 h-9" />
                </View>
                <Text className="text-sm font-poppins-regular">Green Pioneer</Text>
              </View>
              <View className="items-center">
                <View className="w-20 h-20 bg-[#009C82] rounded-full items-center justify-center mb-2">
                  <Image source={icons.pro} className="w-9 h-9" />
                </View>
                <Text className="text-sm font-poppins-regular">Recycling Pro</Text>
              </View>
              <View className="items-center">
                <View className="w-20 h-20 bg-[#009C82] rounded-full items-center justify-center mb-2">
                  <Image source={icons.forest} className="w-9 h-9" />
                </View>
                <Text className="text-sm font-poppins-regular">Forest Guardian</Text>
              </View>
            </View>
          </View>

          {/* Community Ranking */}
          <View className="bg-white rounded-2xl mb-6 mt-[24px]">
            <Text className="text-xl font-poppins-semibold mb-4 pb-[16px]">Community Ranking</Text>
            <View>
              <Text className="text-base font-poppins-medium">Local Ranking</Text>
              <View className="flex-row items-center mt-2 mb-[25px]">
                <View className="flex-1 h-2 bg-[#009C82] rounded-full mr-2" />
                <Text className="font-poppins-semibold text-[#009C82]">#7 of 234</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Stats