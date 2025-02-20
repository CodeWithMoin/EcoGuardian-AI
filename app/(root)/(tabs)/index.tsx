import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { icons } from "../../constants/icons";
export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-accent">
      <ScrollView className="flex-1">
        {/* Header Section */}
        <View className="px-6 pt-4">
          <View className="flex-row justify-between items-center">
            <Image source={icons.logo_g} className="w-12 h-12" resizeMode="contain" />
            <TouchableOpacity onPress={() => router.push('/profile')}>
              <View className="w-12 h-12 rounded-full bg-black-100 items-center justify-center">
                <Image source={icons.setting} className="w-8 h-8" resizeMode="contain" />
              </View>
            </TouchableOpacity>
          </View>
          <Text className="text-3xl font-poppins-semibold mt-6 mb-2">Welcome Back!</Text>
          <Text className="text-grey-100 text-base font-poppins-regular">Let's make our environment cleaner today</Text>
        </View>

        {/* Quick Actions Section */}
        <View className="mt-8 px-6">
          <Text className="text-xl font-poppins-semibold mb-4">Quick Actions</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity 
              className="bg-black-100 rounded-2xl p-4 flex-1 mr-4"
              onPress={() => router.push('/scan')}
            >
              <Image source={icons.scanhome} className="w-12 h-12 mb-4" resizeMode="contain" />
              <Text className="text-accent font-poppins-medium text-lg">Scan Waste</Text>
              <Text className="text-accent-light font-poppins-regular mt-1">Identify & sort waste</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="bg-black-100 rounded-2xl p-4 flex-1"
              onPress={() => router.push('/stats')}
            >
              <Image source={icons.stats} className="w-12 h-12 mb-4" resizeMode="contain" />
              <Text className="text-accent font-poppins-medium text-lg">Statistics</Text>
              <Text className="text-accent-light font-poppins-regular mt-1">View your impact</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Leaderboard Preview Section */}
        <View className="mt-8 px-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-poppins-semibold">Leaderboard</Text>
            <TouchableOpacity onPress={() => router.push('/leaderboard')}>
              <Text className="text-primary font-poppins-medium">See All</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-black-100 rounded-2xl p-6">
            <Image source={icons.leaderboard} className="w-16 h-16 mb-4" resizeMode="contain" />
            <Text className="text-accent font-poppins-medium text-lg mb-2">Top Recycler</Text>
            <Text className="text-accent-light font-poppins-regular">Compete with others and earn rewards for your recycling efforts</Text>
          </View>
        </View>

        {/* Tips Section */}
        <View className="mt-8 px-6 mb-[60px]">
          <Text className="text-xl font-poppins-semibold mb-4">Daily Eco Tips</Text>
          <View className="bg-black-100 rounded-2xl p-6">
            <Text className="text-accent font-poppins-medium text-lg mb-2">Did You Know?</Text>
            <Text className="text-accent-light font-poppins-regular">Recycling one aluminum can saves enough energy to run a TV for 3 hours.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
