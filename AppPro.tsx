import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'


function AppPro() : JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style ={styles.container}>
            <Text style = {isDarkMode ? styles.darkText : styles.darkText}>Hello man</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems :"flex-end",
        justifyContent : 'center',
        backgroundColor : 'white'
    },
    whiteText :{
        color : "white"
    },
    darkText:{
        color: 'black'
    }
})

export default AppPro;