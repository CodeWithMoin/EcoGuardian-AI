import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '../../constants/icons'


const TabIcon = ({focused, icon}: {focused: boolean, icon: any}) => {
    const isLargeIcon = icon === icons.stats || icon === icons.setting;
    return (
        <View className='items-center' >
            <Image 
                source={icon} 
                style={{
                    tintColor: focused ? '#000' : '#AAAAAA',
                    width: isLargeIcon ? 45 : 28,
                    height: isLargeIcon ? 45 : 28
                }} 
                resizeMode='contain'
            />
        </View>
    )
}

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'absolute',
                height: 90,
                paddingHorizontal: 25,
                paddingTop: 15,
                paddingBottom: 20,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: -4,
                },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 5,
            }
        }}
    >
        <Tabs.Screen 
            name="index"
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon icon={icons.home} focused={focused}/>
                )
            }}
        />

        <Tabs.Screen 
            name="leaderboard"
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon icon={icons.leaderboard} focused={focused}/>
                )
            }}
        />

        <Tabs.Screen 
            name="scan"
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View >
                        <Image 
                            source={icons.scan}
                            className="w-[60px] h-[60px]"
                            resizeMode='contain'
                        />
                    </View>
                )
            }}
        />

        <Tabs.Screen 
            name="stats"
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon 
                        icon={icons.stats} 
                        focused={focused}
                    />
                )
            }}
        />

        <Tabs.Screen 
            name="profile"
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon icon={icons.setting} focused={focused}/>
                )
            }}
        />
    </Tabs>
  )
}

export default TabsLayout