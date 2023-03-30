import { StyleSheet, Text, KeyboardAvoidingView, View, TextInput, Platform,SafeAreaView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'






const EmojiTranslator = () => {
    const [getText, setText] = useState('');
    const [getEmoji, setEmoji] = useState('')

  return (
    
    <KeyboardAvoidingView behavior={Platform.OS==="ios" ? "padding" : "height"} className="flex-1">

        <SafeAreaView>
            <TouchableOpacity>
                <Text className="dark:text-white ml-3">M😀😀d</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
        
        <KeyboardAvoidingView className="items-center justify-center h-5/6">
            
            <Text className="my-8">Enter your emoji, watch every word convert it</Text>

            <TextInput 
                className="my-8"
                style={{height:40}}
                placeholder="Enter your best emoji!"
                onChangeText = {newEmoji => setEmoji(newEmoji)}
                defaultValue={getEmoji}
            />

            <TextInput 

                style={{height:40}}
                placeholder="Type here to translate"
                onChangeText={newText => setText(newText)}
                defaultValue={getText}

            />



            <Text style={{padding:10, fontSize:42}}>

                {
                    getText
                            .split(' ')
                            .map(word => word && `${getEmoji}`)
                            .join(' ')
                
                }

            </Text>
        </KeyboardAvoidingView>

        
    </KeyboardAvoidingView>
  )
}

export default EmojiTranslator

const styles = StyleSheet.create({})