import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView, Edge } from 'react-native-safe-area-context'
import { images } from './constants/images'
import icons from './constants/icons'

const signIn = () => {
  return (
    <SafeAreaView className='bg-white h-full' edges={['bottom', 'left', 'right']}>
        <Image source={images.recycle_bin} className='w-full h-[50%]' resizeMode='cover' />
        <View className='flex-1 -mt-[35px] rounded-tl-[35px] rounded-tr-[35px] bg-accent p-[20px] pb-[50px] pt-[30px] -mb-[35px]'>
          <Image source={icons.logo_g} className='w-14 h-14 self-center mb-[5px]' resizeMode='contain' />
          <Text className='text-primary font-poppins-semibold text-center text-4xl'>EcoGuardian</Text>
          <Text className='text-3xl font-poppins-semibold text-center mb-[15px] mt-[15px]'>Let's Go Sign in</Text>
          <Text className='text-black-600 font-poppins-regular text-center mb-[15px]'>Lorem ipsum dolor sit amet sit amet.</Text>
          
          <TouchableOpacity>
            <View className=" w-[325px] h-14 mb-[15px] mt-[15px] bg-primary rounded-[12px] items-center justify-center self-center">
              <Text className="text-accent font-poppins-regular text-lg">Create Account</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <View className="w-[325px] h-14 mb-8 border border-grey rounded-[12px] items-center justify-center self-center">
              <Text className="text-black font-poppins-regular text-lg">Sign In</Text>
            </View>
          </TouchableOpacity>

          <Text className='text-black text-xs font-poppins-regular text-center mb-[15px]'>Sign in with</Text>
          <View className='flex-row justify-center gap-[15px]'>
            <TouchableOpacity>
              <Image source={icons.facebook} className='w-[45px] h-[45px]' resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={icons.google} className='w-[45px] h-[45px]' resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={icons.apple} className='w-[45px] h-[45px]' resizeMode='contain' />
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default signIn