import React, { useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const Task = (props: any) => {
    var text = props.text
    var [idk, setIdk] = useState("World!")
    return (
        <View>
            <Text>{text + idk}</Text>
            <Button
                title={"Click me!"}
                onPress={() => {
                    setIdk("HAH")
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default Task
