import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

import { connect } from 'react-redux';

import {switchPlatformStat} from '../Redux/actions.js';

let serverHost = "127.0.0.1";
let serverPort = 5070;

if (Platform.OS !== 'ios') {
    serverHost = "10.0.2.2";
}

const CreativitiesBlock = ({data, visible, switchPlatformStat}) => {

    return (
            <View style={styles.stylesWrapper}>

                {(visible) ? (
                    <View style={styles.contentWrapper}>
                        <Text style={styles.contentBold}>{data.header}</Text>
                        <Text style={styles.contentThin}>{data.description}</Text>
                        <Text style={styles.contentBold}>{data.url}</Text>
                        <Image source={{uri: 'http://' + serverHost + ':' + serverPort + '/' + data.image}} style={styles.image} />

                    </View>
                ) : (
                    <TouchableOpacity style={styles.openButton} onPress={switchPlatformStat.bind(this, "creativities")}>
                        <Text style={styles.openButtonText}>creativities</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
}

const styles = StyleSheet.create({
    openButton: {
        backgroundColor: "#fff",
        transform: [{ rotate: '90deg'}],
        height: 40,
        lineHeight: 40,
        padding: 8,
        /*marginTop: 70,*/
        width: 110,
        textAlign: "center",
        position: "relative",
        top: -10,
        left: -94,
        borderRadius: 2,
    },
    openButtonText: {
        textAlign: 'center',
    },
    stylesWrapper: {
        /*marginTop: 20*/
        position: "absolute",
        top:8,
        left: 104,

    },
    contentWrapper: {
        width: 250
    },
    contentBold: {
        color: "#fff",
        //fontFamily: "sans-serif-bold",
        fontSize: 16
    },
    contentThin: {
        //fontFamily: "sans-serif-bold",
        color: "#000",
        fontSize: 12
    },
    image: {
        height: 120,
    },
});

const mapStateToProps = (state) => {
    return {
        data: state.creativitiesData,
        campaignId: state.campaignId
    };
};

const mapDispatchToProps = {
    switchPlatformStat
};

export default connect(mapStateToProps, mapDispatchToProps)(CreativitiesBlock);