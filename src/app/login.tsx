import { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Switch } from 'react-native'
import CustomButton from '../components/CustomButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

export default function Login() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const { bottom } = useSafeAreaInsets();
    const login = async () => {
        setTimeout(()=>{router.replace('/');}, 1000);
        
    }
    return (
        <SafeAreaView className='relative h-full pb-[72px]'>
            <Text className='font-display text-point text-center mt-[72px]'>Welcome back</Text>
            <Text className='text-center font-display color-grey'>Fill the below form to continue using the app</Text>
            <View className='flex mt-[62px] mx-[16px] gap-5'>
                <View>
                    <Text className='font-display'>Email/Username</Text>
                    <TextInput
                        className='border-[1.5px] border-grey p-4 rounded-[8px] mt-[6px] placeholder-gray-700::placeholder'
                        placeholder="user@gmail.com"
                        placeholderTextColor="#BFC1C5"
                        onChangeText={onChangeEmail}
                        value={email}
                    /> 
                </View>
                <View>
                    <Text className='font-display'>Password</Text>
                    <TextInput
                        className='border-[1.5px] border-grey p-4 rounded-[8px] mt-[6px]'
                        placeholder='Password'
                        placeholderTextColor="#BFC1C5"
                        onChangeText={onChangePassword}
                        value={password}
                    />
                </View>
                <View className='flex flex-row font-display justify-between items-center'>
                    <View className='flex flex-row items-center'>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                    />
                    
                    <Text className='ml-[4px] font-display'>Remember me</Text>
                    </View>
                    <Text className='fonts-display color-green font-medium'>forgot password?</Text>
                </View>
            </View>
            <View className='absolute bottom-0 flex justify-center' style={{ paddingBottom: bottom }}>
                <CustomButton name="Continue Signup" onPress={login}/>
                
                <View className='flex flex-row items-center justify-around my-5 w-full'>
                    <View className='h-[1px] bg-grey border-grey w-[120px]' />
                    <Text className="ml-[4px] font-display">or continue with</Text>
                    <View className='h-[1px] bg-grey border-grey w-[120px]' />
                </View>
                <CustomButton name="Login with Google" onPress={() => {console.log("Print")}}/>
            </View>
        </SafeAreaView>
    )
}