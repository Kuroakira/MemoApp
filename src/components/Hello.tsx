import { View, Text, StyleSheet, type TextStyle } from "react-native"

interface Props {
    children: string
    bang?: boolean
    style?: TextStyle
}

export default function Hello({ children, bang = false, style }: Props) {
    return (
        <View>
            <Text style={[styles.text, style]}>Hello {children} {bang && '!'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16
    }
})
