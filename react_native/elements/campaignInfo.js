import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Image
} from 'react-native';

import Dash from 'react-native-dash';

import { connect } from 'react-redux';

import { closeCampaignInfo } from '../Redux/actions';

import PlatformStat from './platformFullStat.js';

class CampaignInfo extends Component {

    render() {

        let googleOffset = this.props.googleOffset;

        if (Platform.OS === 'ios') googleOffset = 0;

        const data = this.props.campaignData;

        if (!data || !data.platforms) return (<Text>Loading...</Text>);

        return (
            <View style={[styles.stylesWrapper, (Platform.OS === 'ios') ? { "marginTop" : 50 } : {} ]}>

                <TouchableOpacity onPress={this.props.closeCampaignInfo}>

                    <View style={styles.nameWrapper}>
                        <View style={styles.listImageWrapper}><Image source={require("../assets/list.png")} style={styles.listImage} /></View>
                        <Text style={styles.campaignName}>{data.name}</Text>
                    </View>
                    <Dash style={styles.campaignNameUnderline}/>
                </TouchableOpacity>

                <View style={styles.element}>
                    <Text style={styles.label}>goal: </Text>
                    <Text style={[styles.data, styles.goal]}> {data.goal}</Text>
                </View>

                <View style={styles.element}>
                    <Text style={styles.label}>budget: </Text>
                    <Text style={[styles.data, styles.budget]}> {data.total_budget}¥</Text>
                </View>

                <Text style={[styles.status, data.status == "Scheduled" ? { backgroundColor: "#F2B705" } : data.status == "Delivering" ? { backgroundColor: "#1CC4B4" } : data.status == "Ended" ? { backgroundColor: "#92196695" } : {}]}>{data.status}</Text>

                {(data.platforms.facebook) ? (
                    <PlatformStat name={"facebook"}  backgroud={"#9CB2CE"} data={data.platforms.facebook}  visible={this.props.facebookVisible}/>
                ) : ( <View></View> )}

                {(data.platforms.instagram) ? (
                    <PlatformStat name={"instagram"} backgroud={"#F77737"} data={data.platforms.instagram} visible={this.props.instagramVisible}/>
                ) : ( <View></View> )}

                {(data.platforms.google) ? (
                    <PlatformStat name={"google"} backgroud={"#4285F4"} data={data.platforms.google} visible={this.props.googleVisible} offset={googleOffset}/>
                ) : ( <View></View> )}

            </View>

        );
    }
}

const styles = StyleSheet.create({
    stylesWrapper: {
        marginTop: 4
    },
    campaignName: {
        //marginLeft: 20,
        fontFamily: (Platform.OS === 'ios') ? "Helvetica-Light" : "sans-serif-thin",
        fontSize: 34,
    },
    campaignNameUnderline: {
        //width:"100%",
        height:1,
        marginLeft: 20,
        marginBottom: 10,
        marginLeft: 50
    },
    label: {
        width: "30%",
        height: 35,
        textAlign: "right",
        fontSize: 24,
        fontFamily: (Platform.OS === 'ios') ? "Helvetica-Light" : "sans-serif-thin",
    },
    data: {
        //height: 50,
        fontFamily: (Platform.OS === 'ios') ? "Futura-Medium" : "sans-serif-medium",
    },
    status: {
        height: 50,
        fontSize: 34,
        marginLeft: 36,
        borderRadius: 2,
        paddingLeft: 10,
        fontFamily: (Platform.OS === 'ios') ? "Helvetica-Light" : "sans-serif-thin",
        color: "#fff",
        overflow: 'hidden',
        marginTop: 6
    },
    goal: {
        fontSize: 24,
    },
    element: {
        flexWrap:'wrap',
        flexDirection:'row',
    },
    budget: {
        fontSize: 24
    },
    listImage: {
        width: 50,
        height: 50,
    },
    listImageWrapper: {

    },
    nameWrapper: {
        flexWrap:'wrap',
        flexDirection:'row',
    }
});

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    closeCampaignInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignInfo);