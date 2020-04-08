import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import { switchPlatformStat, selectLang, setBlockOffset } from '../Redux/actions.js';

import normalize from './normalizeSize';

const AudienceBlock = ({data, visible, switchPlatformStat, selectLang, selectedLang, setBlockOffset}) => {
/*
    if (data.locations.length > 3) {
        setBlockOffset(data.locations.length - 3);
    }
*/
    return (
        <View style={styles.stylesWrapper}>

            {(visible) ? (

                <View>
                    <View style={styles.element}>
                        <Text style={styles.label}>languages:</Text>
                        {data.languages && data.languages.map((value, index) => {
                            return <Text style={[styles.langValue, selectedLang == value ? { backgroundColor: "#444" } : {}]} key={index + "_lang"} onPress={selectLang.bind(this, value)}>{value}</Text>
                        })}
                    </View>

                    <View style={styles.element}>
                        <Text style={[styles.label, {position: "relative", "top": 20}]}>genders:</Text>
                        {data.genders && data.genders.map((value, index) => {
                            if (value == "F") return <View key={"F"}><Text style={styles.gender}>♀</Text></View>
                            else return <View key={"M"}><Text style={[styles.gender, styles.genderM]}>♂</Text></View>
                        })}
                    </View>

                    <View style={styles.element}>
                        <Text style={[styles.label]}>age range:</Text>
                        <Text style={styles.ageValue}>{data.age_range[0]} - {data.age_range[1]}</Text>
                    </View>

                    <View style={styles.element}>
                        <Text style={[styles.label]}>locations:</Text>
                        <View style={styles.locationsList}>
                            {data.locations && data.locations.map((value, index) => {
                                return <Text style={styles.locationValue} key={index + "_loc"}>{value}</Text>
                            })}
                        </View>
                    </View>

                {(data.interests) ? (

                    <View style={styles.element}>
                        <Text style={[styles.label]}>interests:</Text>
                        <View style={styles.interestsList}>
                            {data.interests && data.interests.map((value, index) => {
                                return <Text style={styles.interestValue} key={index + "_inter"}>{value}</Text>
                            })}
                        </View>
                    </View>

                ) : (<View></View>)}

                {(data.KeyWords) ? (

                    <View style={styles.element}>
                        <Text style={[styles.label]}>key words:</Text>
                        <View style={styles.interestsList}>
                            {data.KeyWords && data.KeyWords.map((value, index) => {
                                return <Text style={styles.interestValue} key={index + "_inter"}>{value}</Text>
                            })}
                        </View>
                    </View>

                ) : (<View></View>)}

                </View>

            ) : (
                <TouchableOpacity style={styles.openButton} onPress={switchPlatformStat.bind(this, "audiance")}>
                    <Text style={styles.openButtonText}>audience</Text>
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
        /*marginTop: 70,*/
        width: 110,
        textAlign: "center",
        position: "relative",
        top: -12,
        left: -136,
        borderRadius: 2
    },
    openButtonText: {
        textAlign: 'center'
    },
    stylesWrapper: {
        position: "absolute",
        top:10,
        left: 104,
        width: 260,
        height: 74,
    },
    label: {
        width: 120,
        textAlign: "right",
        fontSize: 22,
        fontWeight: "bold",
        marginRight: 6,
        color:"#fff"
    },
    goal: {
        fontSize: 24,
    },
    element: {
        flexWrap:'wrap',
        flexDirection:'row',
        marginTop: normalize(10),
        position: "relative"
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
        marginRight: 2,
        position: "absolute",
        top: -14,
        left: 2,
        color: "#fff"
    },
    genderM: {
        left: (Platform.OS === 'ios') ? 44 : 34,
        top: (Platform.OS === 'ios') ? -12 : -18,
    },
    ageValue: {
        fontSize: 22,
        color: "#fff"
    },
    locationsList: {
        marginTop: 4
    },
    locationValue: {
        fontSize: normalize(11),
        color: "#fff"
    },
    interestsList: {
        //position: "absolute",
        //left: 130,
        marginTop: 4
    },
    interestValue: {
        fontSize: normalize(9),
        color: "#fff"
    },
});

const mapStateToProps = (state) => {
    return {
        campaignId: state.campaignId,
        data: state.audianceData,
        selectedLang: state.selectedLang
    };
};

const mapDispatchToProps = {
    switchPlatformStat,
    selectLang,
    setBlockOffset
};

export default connect(mapStateToProps, mapDispatchToProps)(AudienceBlock);