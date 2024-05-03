import { Button, View, Text, TouchableOpacity } from 'react-native'

export default function CustomButton(props) {
    const {name, onPress} = props;
  return (
    <TouchableOpacity
    className="bg-green self-center rounded-full"
    onPress={onPress}
    >
      <Text className='text-white px-5 py-3 text-button font-display'>{name}</Text>
    {/* <TouchableOpacity title={name} onPress={onPress} color="#FFF"/> */}
    </TouchableOpacity>
  )
}