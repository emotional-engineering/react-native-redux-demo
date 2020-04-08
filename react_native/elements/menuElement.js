import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';

const MenuItem = ({value, id, onPress, context}) => {
    return (
        <Text style={styles.element} onPress={onPress.bind(context, id)}>{value}</Text>
    );
}

const styles = StyleSheet.create({
    element: {
        //width: "100%",
        height: 60,
        lineHeight: 60,
        backgroundColor: "#6563A3",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        textAlign: "center",
        color: "#ffffff",
        fontSize: 28,
        borderRadius: 8,
        overflow: 'hidden',
        fontFamily: (Platform.OS === 'ios') ? "Futura" : "sans-serif-medium",

    }
});

export default MenuItem;