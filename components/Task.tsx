import React, { useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const Task = (props: any) => {
    var text = props.text
    var [idk, setIdk] = useState("World!")
    return (
        <View>
            <Text style={styles.text}>{text + idk}</Text>
            <Button
                title={"Click me!"}
                onPress={() => {
                    setIdk("lol")
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
})

export default Task
