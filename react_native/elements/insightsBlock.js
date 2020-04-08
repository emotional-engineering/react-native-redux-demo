import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import { connect } from 'react-redux';

import { switchPlatformStat } from '../Redux/actions.js';

const deviceHeight = Dimensions.get('window').height;

const InsightBlock = ({data, visible, switchPlatformStat, offset}) => {

    return (
        <View style={styles.stylesWrapper}>

            {(visible) ? (

                <View>

                    <View style={styles.element}>
                        <Text style={styles.label}>advanced kpi 1: </Text>
                        <Text style={styles.value}>{data.advanced_kpi_1}</Text>
                    </View>

                    {(data.advanced_kpi_2) ? (

                        <View style={styles.element}>
                            <Text style={styles.label}>advanced kpi 2: </Text>
                            <Text style={styles.value}>{data.advanced_kpi_2}</Text>
                        </View>

                    ) : ( <View></View> )}

                    <View style={styles.element}>
                        <Text style={styles.label}>click through rate: </Text>
                        <Text style={styles.value}>{data.click_through_rate}</Text>
                    </View>

                    {(data.website_visits) ? (

                        <View style={styles.element}>
                            <Text style={styles.label}>website visits: </Text>
                            <Text style={styles.value}>{data.website_visits}</Text>
                        </View>

                    ) : ( <View></View> )}

                    <View style={styles.element}>
                        <Text style={styles.label}>clicks: </Text>
                        <Text style={styles.value}>{data.clicks}</Text>
                    </View>

                    <View style={styles.element}>
                        <Text style={styles.label}>cost per click: </Text>
                        <Text style={styles.value}>{data.cost_per_click} ¥</Text>
                    </View>

                    <View style={styles.element}>
                        <Text style={styles.label}>impressions: </Text>
                        <Text style={styles.value}>{data.impressions}</Text>
                    </View>

                    {(data.nanos_score) ? (

                        <View style={styles.element}>
                            <Text style={styles.label}>Score: </Text>
                            <Text style={styles.value}>{data.nanos_score}</Text>
                        </View>

                    ) : ( <View></View> )}


                </View>

            ) : (
                <TouchableOpacity style={[styles.openButton, (offset ? { top: (188 + (deviceHeight - 640 - ((Platform.OS === 'ios') ? 40 : 0)) + offset) } : {})]} onPress={switchPlatformStat.bind(this, "insights")}>
                    <Text style={styles.openButtonText}>insights</Text>
                </TouchableOpacity>
            )}

        </View> );
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
        top: 188 + (deviceHeight - 640 - ((Platform.OS === 'ios') ? 40 : 0)),
        left: -136,
        borderRadius: 2,
    },
    openButtonText: {
        textAlign: 'center'
    },
    stylesWrapper: {
        position: "absolute",
        top:16,
        left: 104,
    },
    label: {
        width: 140,
        textAlign: "right",
        fontSize: 16,
        //fontWeight: "tiny",
        marginRight: 6,
        color:"#fff"
    },
    value: {
        fontWeight: "bold",
        color:"#fff",
        fontSize: 18,
    },
    goal: {
        fontSize: 24,
    },
    element: {
        flexWrap:'wrap',
        flexDirection:'row',
        marginBottom: 6
    },
    langValue: {
        backgroundColor: "#ccc",
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 6,
        color: "#fff",
        borderRadius: 2,
        marginLeft: 6,
        fontWeight: "bold",
        fontSize: 14
    },
    gender: {
        fontSize: 48,
        marginRight: 10,
        position: "relative",
        top: -22,
        left: 2,
        color: "#fff"

    }
});

const mapStateToProps = (state) => {
    return {
        campaignId: state.campaignId,
        data: state.insightsData,
        visible: state.tabPlatformInsightsVisible
    };
};

const mapDispatchToProps = {
    switchPlatformStat
};

export default connect(mapStateToProps, mapDispatchToProps)(InsightBlock);