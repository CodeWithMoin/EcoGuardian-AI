import { Fontisto } from '@expo/vector-icons';
import { icons } from '../constants/icons';
import { CameraCapturedPicture } from 'expo-camera';
import React from 'react';
import { TouchableOpacity, SafeAreaView, Image, View, Text } from 'react-native';
import { useRouter } from 'expo-router';

interface PhotoPreviewSectionProps {
    photo: CameraCapturedPicture;
    handleRetakePhoto: () => void;
}

const PhotoPreviewSection = ({
    photo,
    handleRetakePhoto
}: PhotoPreviewSectionProps) => {
    const router = useRouter();
    <SafeAreaView className="flex-1 bg-[#000000] items-center justify-center">
        <View className="rounded-[15px] w-[95%] justify-center items-center -mt-20">
            <Image
                className="w-[95%] h-[85%] rounded-[15px]"
                source={{uri: 'data:image/jpg;base64,' + photo.base64}}
            />
        </View>

        <View className="absolute bottom-20 flex-row justify-center w-full gap-4">
            <TouchableOpacity 
                className="w-36 h-12 justify-center items-center bg-[#ED2015] rounded-xl" 
                onPress={handleRetakePhoto}
            >
                <Text className="text-white font-poppins-medium text-lg">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                className="w-36 h-12 justify-center items-center bg-primary rounded-xl"
                onPress={() => router.push({
                    pathname: '/scan-result',
                    params: { photoUri: photo.uri }
                })}
            >
                <Text className="text-white font-poppins-medium text-lg">Proceed</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
return (
    <SafeAreaView className="flex-1 bg-[#000000] items-center justify-center">
        <View className="rounded-[15px] w-[95%] justify-center items-center -mt-20">
            <Image
                className="w-[95%] h-[85%] rounded-[15px]"
                source={{uri: 'data:image/jpg;base64,' + photo.base64}}
            />
        </View>

        <View className="absolute bottom-20 flex-row justify-center w-full gap-4">
            <TouchableOpacity 
                className="w-36 h-12 justify-center items-center bg-[#ED2015] rounded-xl" 
                onPress={handleRetakePhoto}
            >
                <Text className="text-white font-poppins-medium text-lg">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                className="w-36 h-12 justify-center items-center bg-primary rounded-xl"
                onPress={() => router.push({
                    pathname: '/scan-result',
                    params: { photoUri: photo.uri }
                })}
            >
                <Text className="text-white font-poppins-medium text-lg">Proceed</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);
};

export default PhotoPreviewSection;