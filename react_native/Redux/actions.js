
import {
    Platform
} from 'react-native';

let serverHost = "127.0.0.1";
let serverPort = 5070;

if (Platform.OS !== 'ios') {
    serverHost = "10.0.2.2";
}

export function fetchCampaigns() {
    return async function(dispatch) {

        const response = await fetch('http://' + serverHost + ':' + serverPort + '/api/v1/campaigns');
        const body = await response.json();

        dispatch(setCampaigns(body.campaigns));
    };
}

function setCampaigns(data) {
    return {
        type: "SET_CAMPAIGNS",
        payload: data
    };
}

export function fetchCampaignDetails(id) {
    return async function(dispatch) {

        const response = await fetch('http://' + serverHost + ':' + serverPort + '/api/v1/campaign/' + id);
        const body = await response.json();

        dispatch(setCampaignDetails(body.campaign));
    };
}

function setCampaignDetails(data) {
    return {
        type: "SET_CAMPAIGN_DETAILS",
        payload: data
    };
}

export function switchPlatformStat(id) {
    return {
        type: "SWITCH_PLATFORM_STAT",
        payload: {
            id
        }
    };
}

export function switchPlatform(platform) {
    return {
        type: "SWITCH_PLATFORM",
        platform
    };
}

export function closeCampaignInfo() {
    return {
        type: "CLOSE_CAMPAIGN",
        payload: {}
    };
}


export function selectLang(lang) {
    return {
        type: "SELECT_LANG",
        payload: lang
    };
}

/*
    Increase height of platform block element in case of many elements in arrays
 */

export function setBlockOffset(amount) {
    return {
        type: "SET_BLOCK_OFFSET",
        payload: amount
    };
}