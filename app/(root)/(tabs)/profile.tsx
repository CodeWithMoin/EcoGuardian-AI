import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Profile = () => {
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
    } catch (error) {
      console.log('Not logged in');
    }
  };

  const handleSendCode = async () => {
    try {
      const response = await account.createPhoneToken(ID.unique(), phone);
      setUserId(response.userId);
      Alert.alert('Success', 'Verification code sent!');
    } catch (error) {
      Alert.alert('Error', 'Failed to send verification code');
    }
  };

  const handleVerify = async () => {
    try {
      await account.createSession(userId, verificationCode);
      checkUser();
    } catch (error) {
      Alert.alert('Error', 'Invalid verification code');
    }
  };

  if (user) {
    return (
      <SafeAreaView className="flex-1 bg-accent p-4">
        <Text className="text-3xl font-poppins-semibold text-black text-center mt-6">
          Welcome {user.phone}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-accent p-4">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-poppins-semibold text-black text-center mb-8">
          Sign In
        </Text>
        
        <TextInput
          className="w-full h-12 bg-white rounded-xl px-4 mb-4"
          placeholder="+1234567890"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        
        <TouchableOpacity 
          className="w-full h-12 bg-primary rounded-xl items-center justify-center mb-4"
          onPress={handleSendCode}
        >
          <Text className="text-white font-poppins-medium">Send Code</Text>
        </TouchableOpacity>

        {userId && (
          <>
            <TextInput
              className="w-full h-12 bg-white rounded-xl px-4 mb-4"
              placeholder="Enter verification code"
              value={verificationCode}
              onChangeText={setVerificationCode}
              keyboardType="number-pad"
            />
            
            <TouchableOpacity 
              className="w-full h-12 bg-primary rounded-xl items-center justify-center"
              onPress={handleVerify}
            >
              <Text className="text-white font-poppins-medium">Verify</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;