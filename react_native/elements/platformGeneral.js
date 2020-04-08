import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Platform,
} from 'react-native';

import { connect } from 'react-redux';

import { switchPlatformStat } from '../Redux/actions.js';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const PlatformGeneral = ({data, visible, switchPlatformStat, offset}) => {

    return (
        <View style={styles.stylesWrapper}>

            {(visible) ? (

                <View style={styles.contentWrapper}>

                    <View style={styles.statusWrapper}>
                        <Text style={[styles.status, data.status == "Scheduled" ? { backgroundColor: "#F2B705" } : data.status == "Delivering" ? { backgroundColor: "#1CC4B4" } : data.status == "Ended" ? { backgroundColor: "#92196690" } : {}]}>{data.status.toLowerCase()}</Text>
                    </View>

                    <View style={styles.element}>
                        <Text style={styles.label}>budget: </Text>
                        <Text style={styles.value}>{data.remaining_budget}</Text>
                        <Text style={styles.value}>/</Text>
                        <Text style={styles.value}>{data.total_budget} ¥</Text>
                    </View>

                    <View style={styles.element}>
                        <Text style={styles.label}>period: </Text>
                        <Text style={styles.valueStamp}>{convertTimestamp(data.start_date)}</Text>
                        <Text style={styles.valueStamp}> - </Text>
                        <Text style={styles.valueStamp}>{convertTimestamp(data.end_date)}</Text>
                    </View>

                </View>

            ) : (
                <TouchableOpacity style={[styles.openButton, (offset ? { top: (194 + (deviceHeight - 640 - ((Platform.OS === 'ios') ? 40 : 0)) + offset) } : {})]} onPress={switchPlatformStat.bind(this, "general")}>
                    <Text style={styles.openButtonText}>general</Text>
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
        width: 110,
        position: "relative",
        top: 194 + (deviceHeight - 640 - ((Platform.OS === 'ios') ? 40 : 0)),
        left: -94,
        borderRadius: 2
    },
    openButtonText: {
        textAlign: 'center',
    },
    stylesWrapper: {
        position: "absolute",
        top:10,
        left: 104,
        width: 260,
        height: 74,
    },
    contentWrapper: {
        //position: "absolute",
        //left: 100
    },
    label: {
        width: 90,
        //height: 20,
        textAlign: "right",
        fontSize: 24,
        color: "#fff"
    },
    value: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
    },
    valueStamp: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 3
    },
    data: {
        fontSize: 34,
        height: 50,
    },
    goal: {
        fontSize: 24,
    },
    element: {
        flexWrap:'wrap',
        flexDirection:'row',
        marginTop: 10
    },
    status: {
        width: 140,
        padding: 2,
        //borderRadius: 1,
        marginBottom: 10,
        borderColor:"#fff",
        borderWidth: 1,
        color: "#fff",
        paddingLeft: 8,
        marginLeft: 110 + (deviceWidth - 360),
        borderRadius: 2
    }
});

const convertTimestamp = function(UNIX_timestamp){
    const a = new Date(UNIX_timestamp);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = date + ' ' + month; //+ ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

const mapStateToProps = (state) => {

    return {
        campaignId: state.campaignId,
        data: state.generalPlatformData,
    };
};

const mapDispatchToProps = {
    switchPlatformStat
};

export default connect(mapStateToProps, mapDispatchToProps)(PlatformGeneral);