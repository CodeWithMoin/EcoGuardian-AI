import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Tabs } from 'expo-router';
import { icons } from '../../constants/icons';
import { useState } from 'react';
import CameraComponent from '../../components/CameraComponent';
import PhotoPreviewSection from '../../components/PhotoPreviewSection';
import { CameraCapturedPicture } from 'expo-camera';

const { width } = Dimensions.get('window');
const FRAME_SIZE = width * 0.7;

const Scan = () => {
  const router = useRouter();
  const [photo, setPhoto] = useState<CameraCapturedPicture | null>(null);

  const handleCapture = (capturedPhoto: CameraCapturedPicture) => {
    setPhoto(capturedPhoto);
  };

  const handleRetakePhoto = () => {
    setPhoto(null);
  };

  if (photo) {
    return <PhotoPreviewSection photo={photo} handleRetakePhoto={handleRetakePhoto} />;
  }

  return (
    <>
      <Tabs.Screen options={{ 
        headerShown: false,
        tabBarStyle: { display: 'none' }
      }} />
      
      <SafeAreaView className="flex-1 bg-[#000000]">
        <View className="flex-row justify-between items-center px-6 mt-2">
          <TouchableOpacity onPress={() => router.back()}>
            <View className="w-12 h-12 rounded-xl border border-white/20 items-center justify-center">
              <Ionicons name="chevron-back" size={24} color="white" />
            </View>
          </TouchableOpacity>
      
          <Text className="text-3xl font-poppins-semibold text-accent-light">
            Scan Waste
          </Text>
      
          <View className="w-12 h-12" />
        </View>
      
        <View className="flex-1">
          <Text className="text-lg text-accent-light text-center font-poppins-medium px-6 mb-2 mt-4 leading-7">
            Point your camera to identify and sort waste within the guidelines.
          </Text>

          <CameraComponent onCapture={handleCapture} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Scan;