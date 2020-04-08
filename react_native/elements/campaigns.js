import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    ScrollView
} from 'react-native';

import Dash from 'react-native-dash';

import { connect } from 'react-redux';

import { fetchCampaigns, fetchCampaignDetails } from '../Redux/actions';

import MenuItem from './menuElement';

import CampaignInfo from './campaignInfo';

class Campaigns extends Component {

    state = {};
    componentDidMount() {
        this.props.fetchCampaigns();
    }

    selectItem(id) {
        this.props.fetchCampaignDetails(id);
    }

    render() {

        return (
            <View style={styles.stylesWrapper}>

                <View>

                    {(!this.props.campaignData && this.props.campaigns) ? (

                        <View><Text style={[styles.sign, (Platform.OS === 'ios') ? { "marginTop" : 50 } : {} ]}>Campaigns:</Text></View>

                    ) : ( <View></View> ) }

                    {!this.props.campaignData && this.props.campaigns && this.props.campaigns.map((value, index) => {
                        return <MenuItem key={"index_" + index} value={value.name} id={value.id} context={this} onPress={this.selectItem}/>
                    })}

                    {(this.props.campaignData) ? (

                        <ScrollView>

                            <CampaignInfo/>

                        </ScrollView>

                    ) : ( <View></View> )}

                </View>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    sign: {
        fontSize: 28,
        marginTop: 18,
        marginLeft: 10,
        fontFamily: (Platform.OS === 'ios') ? "Futura-Medium" : "sans-serif-medium",
    },
    stylesWrapper: {
        marginTop: 4
    },
});

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    fetchCampaigns,
    fetchCampaignDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);