import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { icons } from './constants/icons';

const ScanResult = () => {
  const router = useRouter();
  const { photoUri } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-accent">
      <View className="flex-row justify-between items-center px-6 mt-2">
        <TouchableOpacity onPress={() => router.back()}>
          <View className="w-12 h-12 rounded-xl border border-grey/20 items-center justify-center">
            <Ionicons name="chevron-back" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <Text className="text-3xl font-poppins-semibold text-primary">
          Analysis Result
        </Text>

        <View className="w-12 h-12" />
      </View>

      <ScrollView className="flex-1 px-6">
        <View className="mt-4 bg-white rounded-2xl p-4 mb-4">
          <Image 
            source={{ uri: photoUri }}
            className="w-full h-48 rounded-xl"
            resizeMode="cover"
          />
        </View>

        <View className="bg-white rounded-2xl p-6 mb-4">
          <View className="flex-row items-center mb-4">
            <View className="w-10 h-10 bg-primary rounded-full items-center justify-center mr-3">
              <Image source={icons.recycle} className="w-6 h-6 tint-white" />
            </View>
            <View>
              <Text className="text-2xl font-poppins-semibold">Plastic Bottle</Text>
              <Text className="text-base font-poppins-regular text-grey-100">Recyclable Material</Text>
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-lg font-poppins-semibold mb-2">Material Composition</Text>
            <Text className="text-base font-poppins-regular text-grey-100">PET (Polyethylene Terephthalate)</Text>
          </View>

          <View className="mb-4">
            <Text className="text-lg font-poppins-semibold mb-2">Disposal Instructions</Text>
            <View className="gap-2">
              <Text className="text-base font-poppins-regular text-grey-100">1. Empty and rinse the bottle</Text>
              <Text className="text-base font-poppins-regular text-grey-100">2. Remove cap and label if possible</Text>
              <Text className="text-base font-poppins-regular text-grey-100">3. Crush to save space</Text>
              <Text className="text-base font-poppins-regular text-grey-100">4. Place in recycling bin</Text>
            </View>
          </View>

          <View>
            <Text className="text-lg font-poppins-semibold mb-2">Environmental Impact</Text>
            <View className="bg-accent/50 p-4 rounded-xl">
              <View className="flex-row justify-between mb-2">
                <Text className="font-poppins-medium">CO2 Saved:</Text>
                <Text className="font-poppins-semibold text-primary">0.08 kg</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="font-poppins-medium">Water Saved:</Text>
                <Text className="font-poppins-semibold text-primary">3.2 L</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="font-poppins-medium">Energy Saved:</Text>
                <Text className="font-poppins-semibold text-primary">0.12 kWh</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          className="bg-primary py-4 rounded-xl mb-6"
          onPress={() => router.replace('/(root)/(tabs)')}
        >
          <Text className="text-accent text-center font-poppins-semibold text-lg">
            Back to Home
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScanResult;