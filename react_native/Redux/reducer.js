
const initialState = {
    selectedCampaign: false,
    campaignData: false,
    loading: false,
    activePlatform: "facebook",
    tabPlatformGeneralVisible: true,
    tabPlatformCreativitiesVisible: false,
    tabPlatformAudianceVisible: false,
    tabPlatformInsightsVisible: false,
    facebookVisible: true,
    instagramVisible: false,
    googleVisible: false,
    selectedLang: false,
    googleOffset: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case "SET_CAMPAIGNS":
            return { ...state,
                campaigns: action.payload,
            };

        case "SET_CAMPAIGN_DETAILS":
            
            const defaultPlatform = "facebook";

            let googleOffset = 0;

            if (action.payload.platforms["google"] && action.payload.platforms["google"].target_audiance.locations.length > 3) {
                googleOffset = (action.payload.platforms["google"].target_audiance.locations.length - 3) * 20
            }

            return { ...state,
                campaignData: action.payload,
                generalPlatformData: action.payload.platforms[defaultPlatform],
                audianceData: action.payload.platforms[defaultPlatform].target_audiance,
                creativitiesData: action.payload.platforms[defaultPlatform].creatives,
                insightsData: action.payload.platforms[defaultPlatform].insights,
                activePlatform: defaultPlatform,
                facebookVisible: true,
                instagramVisible: false,
                googleVisible: false,
                googleOffset
            };

        case "SWITCH_PLATFORM_STAT":

            switch (action.payload.id) {
                case "general":
                    return {
                        ...state,
                        tabPlatformGeneralVisible:      true,
                        tabPlatformCreativitiesVisible: false,
                        tabPlatformAudianceVisible:     false,
                        tabPlatformInsightsVisible:     false
                    };
                case "creativities":
                    return {
                        ...state,
                        tabPlatformGeneralVisible:      false,
                        tabPlatformCreativitiesVisible: true,
                        tabPlatformAudianceVisible:     false,
                        tabPlatformInsightsVisible:     false
                    };
                case "audiance":
                    return {
                        ...state,
                        tabPlatformGeneralVisible:      false,
                        tabPlatformCreativitiesVisible: false,
                        tabPlatformAudianceVisible:     true,
                        tabPlatformInsightsVisible:     false
                    };
                case "insights":
                    return {
                        ...state,
                        tabPlatformGeneralVisible:      false,
                        tabPlatformCreativitiesVisible: false,
                        tabPlatformAudianceVisible:     false,
                        tabPlatformInsightsVisible:     true
                    };
            }

            return state;

        case "SWITCH_PLATFORM":

            const dataState = {
                generalPlatformData: state.campaignData.platforms[action.platform],
                audianceData: state.campaignData.platforms[action.platform].target_audiance,
                creativitiesData: state.campaignData.platforms[action.platform].creatives,
                insightsData: state.campaignData.platforms[action.platform].insights
            };

            switch (action.platform) {
                case "facebook":
                    return {
                        ...state,
                        ...dataState,
                        activePlatform: action.platform,
                        facebookVisible:  true,
                        instagramVisible: false,
                        googleVisible:    false };
                case "instagram":
                    return {
                        ...state,
                        ...dataState,
                        activePlatform: action.platform,
                        facebookVisible:  false,
                        instagramVisible: true,
                        googleVisible:    false };
                case "google":
                    return {
                        ...state,
                        ...dataState,
                        activePlatform: action.platform,
                        facebookVisible:  false,
                        instagramVisible: false,
                        googleVisible:    true };
            }

            return state;


        case "CLOSE_CAMPAIGN":

            return {
                ...state,
                campaignData: false,
            };

        case "SELECT_LANG":

            const selectedLang = action.payload;

            if (selectedLang === state.selectedLang) {

                let facebookVisible = false;
                let instagramVisible = false;
                let googleVisible = false;

                if (state.activePlatform === "facebook") facebookVisible = true;
                else if (state.activePlatform === "instagram") instagramVisible = true;
                else if (state.activePlatform === "google") googleVisible = true;

                return {
                    ...state,
                    facebookVisible,
                    instagramVisible,
                    googleVisible,
                    selectedLang : false
                };
            }

            let facebookVisible = false;
            let instagramVisible = false;
            let googleVisible = false;

            for (let platform in state.campaignData.platforms) {

                state.campaignData.platforms[platform].target_audiance.languages.forEach((lang) => {

                    switch (platform) {

                        case "facebook":
                            if (selectedLang === lang) facebookVisible = true;
                            break;

                        case "instagram":
                            if (selectedLang === lang) instagramVisible = true;
                            break;

                        case "google":
                            if (selectedLang === lang) googleVisible = true;
                            break;
                    }
                })
            }

            return {
                ...state,
                facebookVisible,
                instagramVisible,
                googleVisible,
                selectedLang
            };

        default:
            return state;
    }
}