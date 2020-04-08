import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import { connect } from 'react-redux';

import CreativitiesBlock from './creativitiesBlock';
import AudienceBlock from './audienceBlock';
import PlatformGeneral from './platformGeneral';
import InsightsBlock from './insightsBlock';

import { switchPlatform } from '../Redux/actions.js';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const PlatformStat = ({ name, data, visible, backgroud, tabPlatformGeneralVisible, tabPlatformCreativitiesVisible, tabPlatformAudianceVisible, tabPlatformInsightsVisible, switchPlatform, audianceData, offset }) => {

    return (
        <View style={[styles.stylesWrapper, { backgroundColor: backgroud + (!visible ? "80" : "") }]}>

            {(visible) ? (

                <View>
                    <View style={styles.nameWrapper}>
                        <Text style={styles.name}>{name}</Text>
                    </View>

                    <View style={[styles.blocksWrapper, (offset) ? { paddingBottom:  276 + (deviceHeight - 640 - ((Platform.OS === 'ios') ? 40 : 0)) + offset } : {}]}>
                        <PlatformGeneral visible={tabPlatformGeneralVisible} offset={offset}/>
                        <CreativitiesBlock visible={tabPlatformCreativitiesVisible}/>
                        <AudienceBlock visible={tabPlatformAudianceVisible}/>
                        <InsightsBlock visible={tabPlatformInsightsVisible} offset={offset}/>

                    </View>
                </View>

            ) : (
                <TouchableOpacity style={styles.nameWrapper} onPress={switchPlatform.bind(this, name)}>
                    <Text style={styles.name}>{name}</Text>
                </TouchableOpacity>
            )}

        </View>

    );
}


const styles = StyleSheet.create({
    nameWrapper: {
        width: "100%",
        textAlign: "right",
        //flex: 1
    },
    name: {
        fontSize: 26,
        color: "white",
        textAlign: "right",
        marginRight: 10
    },
    stylesWrapper: {
        marginTop: 12
    },
    label: {
        width: "40%",
        height: 50,
        backgroundColor: "#F28627",
        textAlign: "right",
        fontSize: 34
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
    },
    blocksWrapper: {
        flexWrap:'wrap',
        flexDirection:'row',
        paddingBottom: 276 + (deviceHeight - 640 - ((Platform.OS === 'ios') ? 40 : 0))
    }
});

const mapStateToProps = (state) => {
    return {
        tabPlatformGeneralVisible: state.tabPlatformGeneralVisible,
        tabPlatformCreativitiesVisible: state.tabPlatformCreativitiesVisible,
        tabPlatformAudianceVisible: state.tabPlatformAudianceVisible,
        tabPlatformInsightsVisible: state.tabPlatformInsightsVisible,
        data: state.campaignData,
        audianceData: state.audianceData,
    };
};

const mapDispatchToProps = {
    switchPlatform
};

export default connect(mapStateToProps, mapDispatchToProps)(PlatformStat);