/* eslint-disable */
export interface AccountAccountCounters {
    /**
     * New app requests number
     */
    app_requests?: number;
    /**
     * New events number
     */
    events?: number;
    /**
     * New faves number
     */
    faves?: number;
    /**
     * New friends requests number
     */
    friends?: number;
    /**
     * New friends suggestions number
     */
    friends_suggestions?: number;
    /**
     * New friends recommendations number
     */
    friends_recommendations?: number;
    /**
     * New gifts number
     */
    gifts?: number;
    /**
     * New groups number
     */
    groups?: number;
    /**
     * New messages number
     */
    messages?: number;
    /**
     * New memories number
     */
    memories?: number;
    /**
     * New notes number
     */
    notes?: number;
    /**
     * New notifications number
     */
    notifications?: number;
    /**
     * New photo tags number
     */
    photos?: number;
    /**
     * New sdk number
     */
    sdk?: number;
    [key: string]: any;
    menu_discover_badge?: number;
}

export interface AccountInfo {
    /**
     * Country code
     */
    country?: string;
    /**
     * Ads slot id for MyTarget
     */
    mini_apps_ads_slot_id?: number;
    /**
     * Language ID
     */
    lang?: number;
    [key: string]: any;
    show_vk_apps_intro?: boolean | number;
    qr_promotion?: number;
    subscriptions?: number[];
}

export interface AccountNameRequest {
    /**
     * First name in request
     */
    first_name?: string;
    /**
     * Request ID needed to cancel the request
     */
    id?: number;
    /**
     * Last name in request
     */
    last_name?: string;
    /**
     * Text to display to user
     */
    lang?: string;
    /**
     * href for link in lang field
     */
    link_href?: string;
    /**
     * label to display for link in lang field
     */
    link_label?: string;
    [key: string]: any;
}

export type AccountNameRequestStatus = "success" | "processing" | "declined" | "was_accepted" | "was_declined" | "declined_with_link" | "response" | "response_with_link";

export interface AccountOffer {
    /**
     * Offer description
     */
    description?: string;
    /**
     * Offer ID
     */
    id?: number;
    /**
     * URL of the preview image
     */
    img?: string;
    /**
     * Instruction how to process the offer
     */
    instruction?: string;
    /**
     * Instruction how to process the offer (HTML format)
     */
    instruction_html?: string;
    /**
     * Offer price
     */
    price?: number;
    /**
     * Offer short description
     */
    short_description?: string;
    /**
     * Offer tag
     */
    tag?: string;
    /**
     * Offer title
     */
    title?: string;
    /**
     * Currency amount
     */
    currency_amount?: number;
    /**
     * Link id
     */
    link_id?: number;
    /**
     * Link type
     */
    link_type?: "profile" | "group" | "app";
    [key: string]: any;
}

export interface AccountPushConversations {
    /**
     * Items count
     */
    count?: number;
    [key: string]: any;
    items?: AccountPushConversationsItem[];
}

export interface AccountPushConversationsItem {
    /**
     * Time until that notifications are disabled in seconds
     */
    disabled_until: number;
    /**
     * Peer ID
     */
    peer_id: number;
    [key: string]: any;
}

export interface AccountPushParams {
    [key: string]: any;
    msg?: AccountPushParamsMode[];
    chat?: AccountPushParamsMode[];
    like?: AccountPushParamsSettings[];
    repost?: AccountPushParamsSettings[];
    comment?: AccountPushParamsSettings[];
    mention?: AccountPushParamsSettings[];
    reply?: AccountPushParamsOnoff[];
    new_post?: AccountPushParamsOnoff[];
    wall_post?: AccountPushParamsOnoff[];
    wall_publish?: AccountPushParamsOnoff[];
    friend?: AccountPushParamsOnoff[];
    friend_found?: AccountPushParamsOnoff[];
    friend_accepted?: AccountPushParamsOnoff[];
    group_invite?: AccountPushParamsOnoff[];
    group_accepted?: AccountPushParamsOnoff[];
    birthday?: AccountPushParamsOnoff[];
    event_soon?: AccountPushParamsOnoff[];
    app_request?: AccountPushParamsOnoff[];
    sdk_open?: AccountPushParamsOnoff[];
}

export type AccountPushParamsMode = "on" | "off" | "no_sound" | "no_text";

export type AccountPushParamsOnoff = "on" | "off";

export type AccountPushParamsSettings = "on" | "off" | "fr_of_fr";

export interface AccountPushSettings {
    /**
     * Time until that notifications are disabled in Unixtime
     */
    disabled_until?: number;
    [key: string]: any;
}

export interface AccountUserSettings1 {
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200?: string;
    /**
     * flag about service account
     */
    is_service_account?: boolean | number;
}

export type AccountUserSettings = UsersUserMin & UsersUserSettingsXtr & AccountUserSettings1;

export interface AccountUserSettingsInterest {
    [key: string]: any;
    title: string;
    value: string;
}

export interface AccountUserSettingsInterests {
    [key: string]: any;
}

export type AddressesFields = "id" | "title" | "address" | "additional_address" | "country_id" | "city_id" | "metro_station_id" | "latitude" | "longitude" | "distance" | "work_info_status" | "timetable" | "phone" | "time_offset";

export type AdsAccessRole = "admin" | "manager" | "reports";

export interface AdsAccesses {
    /**
     * Client ID
     */
    client_id?: string;
    [key: string]: any;
}

export interface AdsAccount {
    /**
     * Account ID
     */
    account_id: number;
    [key: string]: any;
}

export type AdsAccountType = "general" | "agency";

export interface AdsAd {
    /**
     * Ad format
     */
    ad_format: number;
    /**
     * Total limit
     */
    all_limit: number;
    /**
     * Campaign ID
     */
    campaign_id: number;
    /**
     * Category ID
     */
    category1_id?: number;
    /**
     * Additional category ID
     */
    category2_id?: number;
    /**
     * Cost of a click, kopecks
     */
    cpc?: number;
    /**
     * Cost of 1000 impressions, kopecks
     */
    cpm?: number;
    /**
     * Cost of an action, kopecks
     */
    cpa?: number;
    /**
     * Cost of 1000 impressions optimized, kopecks
     */
    ocpm?: number;
    /**
     * Max cost of target actions for autobidding, kopecks
     */
    autobidding_max_cost?: number;
    /**
     * Ad ID
     */
    id: number;
    /**
     * Impressions limit
     */
    impressions_limit?: number;
    /**
     * Ad title
     */
    name: string;
    [key: string]: any;
}

export type AdsAdApproved = 0 | 1 | 2 | 3;

export type AdsAdCostType = 0 | 1 | 2 | 3;

export interface AdsAdLayout {
    /**
     * Ad format
     */
    ad_format: number;
    /**
     * Campaign ID
     */
    campaign_id: number;
    /**
     * Ad description
     */
    description: string;
    /**
     * Ad ID
     */
    id: number;
    /**
     * Image URL
     */
    image_src: string;
    /**
     * URL of the preview image in double size
     */
    image_src_2x?: string;
    /**
     * Domain of advertised object
     */
    link_domain?: string;
    /**
     * URL of advertised object
     */
    link_url: string;
    /**
     * Ad title
     */
    title: string;
    [key: string]: any;
}

export type AdsAdStatus = 0 | 1 | 2;

export interface AdsCampaign {
    /**
     * Campaign's total limit, rubles
     */
    all_limit: string;
    /**
     * Campaign's day limit, rubles
     */
    day_limit: string;
    /**
     * Campaign ID
     */
    id: number;
    /**
     * Campaign title
     */
    name: string;
    /**
     * Campaign start time, as Unixtime
     */
    start_time: number;
    /**
     * Campaign stop time, as Unixtime
     */
    stop_time: number;
    [key: string]: any;
}

export type AdsCampaignStatus = 0 | 1 | 2;

export type AdsCampaignType = "normal" | "vk_apps_managed" | "mobile_apps" | "promoted_posts";

export interface AdsCategory {
    /**
     * Category ID
     */
    id: number;
    /**
     * Category name
     */
    name: string;
    [key: string]: any;
    subcategories?: BaseObjectWithName[];
}

export interface AdsClient {
    /**
     * Client's total limit, rubles
     */
    all_limit: string;
    /**
     * Client's day limit, rubles
     */
    day_limit: string;
    /**
     * Client ID
     */
    id: number;
    /**
     * Client name
     */
    name: string;
    [key: string]: any;
}

export interface AdsCriteria {
    /**
     * Age from
     */
    age_from?: number;
    /**
     * Age to
     */
    age_to?: number;
    /**
     * Apps IDs
     */
    apps?: string;
    /**
     * Apps IDs to except
     */
    apps_not?: string;
    /**
     * Days to birthday
     */
    birthday?: number;
    /**
     * Cities IDs
     */
    cities?: string;
    /**
     * Cities IDs to except
     */
    cities_not?: string;
    /**
     * Country ID
     */
    country?: number;
    /**
     * Districts IDs
     */
    districts?: string;
    /**
     * Communities IDs
     */
    groups?: string;
    /**
     * Interests categories IDs
     */
    interest_categories?: string;
    /**
     * Interests
     */
    interests?: string;
    /**
     * Positions IDs
     */
    positions?: string;
    /**
     * Religions IDs
     */
    religions?: string;
    /**
     * Retargeting groups IDs
     */
    retargeting_groups?: string;
    /**
     * Retargeting groups IDs to except
     */
    retargeting_groups_not?: string;
    /**
     * School graduation year from
     */
    school_from?: number;
    /**
     * School graduation year to
     */
    school_to?: number;
    /**
     * Schools IDs
     */
    schools?: string;
    /**
     * Stations IDs
     */
    stations?: string;
    /**
     * Relationship statuses
     */
    statuses?: string;
    /**
     * Streets IDs
     */
    streets?: string;
    /**
     * University graduation year from
     */
    uni_from?: number;
    /**
     * University graduation year to
     */
    uni_to?: number;
    /**
     * Browsers
     */
    user_browsers?: string;
    /**
     * Devices
     */
    user_devices?: string;
    /**
     * Operating systems
     */
    user_os?: string;
    [key: string]: any;
}

export type AdsCriteriaSex = 0 | 1 | 2;

export interface AdsDemoStats {
    /**
     * Object ID
     */
    id?: number;
    [key: string]: any;
}

export interface AdsDemostatsFormat {
    /**
     * Day as YYYY-MM-DD
     */
    day?: string;
    /**
     * Month as YYYY-MM
     */
    month?: string;
    /**
     * 1 if period=overall
     */
    overall?: number;
    [key: string]: any;
    age?: AdsStatsAge[];
    cities?: AdsStatsCities[];
    sex?: AdsStatsSex[];
    sex_age?: AdsStatsSexAge[];
}

export interface AdsFloodStats {
    /**
     * Requests left
     */
    left: number;
    /**
     * Time to refresh in seconds
     */
    refresh: number;
    [key: string]: any;
}

export interface AdsLinkStatus {
    /**
     * Reject reason
     */
    description: string;
    /**
     * URL
     */
    redirect_url: string;
    /**
     * Link status
     */
    status: string;
    [key: string]: any;
}

export interface AdsLookalikeRequest {
    /**
     * Lookalike request ID
     */
    id: number;
    /**
     * Lookalike request create time, as Unixtime
     */
    create_time: number;
    /**
     * Lookalike request update time, as Unixtime
     */
    update_time: number;
    /**
     * Time by which lookalike request would be deleted, as Unixtime
     */
    scheduled_delete_time?: number;
    /**
     * Lookalike request status
     */
    status: "search_in_progress" | "search_failed" | "search_done" | "save_in_progress" | "save_failed" | "save_done";
    /**
     * Lookalike request source type
     */
    source_type: "retargeting_group";
    /**
     * Retargeting group id, which was used as lookalike seed
     */
    source_retargeting_group_id?: number;
    /**
     * Lookalike request seed name (retargeting group name)
     */
    source_name?: string;
    /**
     * Lookalike request seed audience size
     */
    audience_count?: number;
    [key: string]: any;
    save_audience_levels?: AdsLookalikeRequestSaveAudienceLevel[];
}

export interface AdsLookalikeRequestSaveAudienceLevel {
    /**
     * Save audience level id, which is used in save audience queries
     */
    level?: number;
    /**
     * Saved audience audience size for according level
     */
    audience_count?: number;
    [key: string]: any;
}

export interface AdsMusician {
    /**
     * Targeting music artist ID
     */
    id: number;
    /**
     * Music artist name
     */
    name: string;
    [key: string]: any;
}

export type AdsObjectType = "ad" | "campaign" | "client" | "office";

export interface AdsParagraphs {
    /**
     * Rules paragraph
     */
    paragraph?: string;
    [key: string]: any;
}

export interface AdsPromotedPostReach {
    /**
     * Hides amount
     */
    hide: number;
    /**
     * Object ID from 'ids' parameter
     */
    id: number;
    /**
     * Community joins
     */
    join_group: number;
    /**
     * Link clicks
     */
    links: number;
    /**
     * Subscribers reach
     */
    reach_subscribers: number;
    /**
     * Total reach
     */
    reach_total: number;
    /**
     * Reports amount
     */
    report: number;
    /**
     * Community clicks
     */
    to_group: number;
    /**
     * 'Unsubscribe' events amount
     */
    unsubscribe: number;
    /**
     * Video views for 100 percent
     */
    video_views_100p?: number;
    /**
     * Video views for 25 percent
     */
    video_views_25p?: number;
    /**
     * Video views for 3 seconds
     */
    video_views_3s?: number;
    /**
     * Video views for 50 percent
     */
    video_views_50p?: number;
    /**
     * Video views for 75 percent
     */
    video_views_75p?: number;
    /**
     * Video starts
     */
    video_views_start?: number;
    [key: string]: any;
}

export interface AdsRejectReason {
    /**
     * Comment text
     */
    comment?: string;
    [key: string]: any;
    rules?: AdsRules[];
}

export interface AdsRules {
    /**
     * Comment
     */
    title?: string;
    [key: string]: any;
    paragraphs?: AdsParagraphs[];
}

export interface AdsStats {
    /**
     * Object ID
     */
    id?: number;
    [key: string]: any;
}

export interface AdsStatsAge {
    /**
     * Clicks rate
     */
    clicks_rate?: number;
    /**
     * Impressions rate
     */
    impressions_rate?: number;
    /**
     * Age interval
     */
    value?: string;
    [key: string]: any;
}

export interface AdsStatsCities {
    /**
     * Clicks rate
     */
    clicks_rate?: number;
    /**
     * Impressions rate
     */
    impressions_rate?: number;
    /**
     * City name
     */
    name?: string;
    /**
     * City ID
     */
    value?: number;
    [key: string]: any;
}

export interface AdsStatsFormat {
    /**
     * Clicks number
     */
    clicks?: number;
    /**
     * Day as YYYY-MM-DD
     */
    day?: string;
    /**
     * Impressions number
     */
    impressions?: number;
    /**
     * Events number
     */
    join_rate?: number;
    /**
     * Month as YYYY-MM
     */
    month?: string;
    /**
     * 1 if period=overall
     */
    overall?: number;
    /**
     * Reach
     */
    reach?: number;
    /**
     * Spent funds
     */
    spent?: number;
    /**
     * Clickthoughs to the advertised site
     */
    video_clicks_site?: number;
    /**
     * Video views number
     */
    video_views?: number;
    /**
     * Video views (full video)
     */
    video_views_full?: number;
    /**
     * Video views (half of video)
     */
    video_views_half?: number;
    [key: string]: any;
}

export interface AdsStatsSex {
    /**
     * Clicks rate
     */
    clicks_rate?: number;
    /**
     * Impressions rate
     */
    impressions_rate?: number;
    [key: string]: any;
}

export interface AdsStatsSexAge {
    /**
     * Clicks rate
     */
    clicks_rate?: number;
    /**
     * Impressions rate
     */
    impressions_rate?: number;
    /**
     * Sex and age interval
     */
    value?: string;
    [key: string]: any;
}

export type AdsStatsSexValue = "f" | "m";

export interface AdsStatsViewsTimes {
    [key: string]: any;
    views_ads_times_1?: number;
    views_ads_times_2?: number;
    views_ads_times_3?: number;
    views_ads_times_4?: number;
    views_ads_times_5?: string;
    views_ads_times_6?: number;
    views_ads_times_7?: number;
    views_ads_times_8?: number;
    views_ads_times_9?: number;
    views_ads_times_10?: number;
    views_ads_times_11_plus?: number;
}

export interface AdsTargSettings1 {
    /**
     * Ad ID
     */
    id?: number;
    /**
     * Campaign ID
     */
    campaign_id?: number;
}

export type AdsTargSettings = AdsTargSettings1 & AdsCriteria;

export interface AdsTargStats {
    /**
     * Audience
     */
    audience_count: number;
    /**
     * Recommended CPC value for 50% reach (old format)
     */
    recommended_cpc?: number;
    /**
     * Recommended CPM value for 50% reach (old format)
     */
    recommended_cpm?: number;
    /**
     * Recommended CPC value for 50% reach
     */
    recommended_cpc_50?: number;
    /**
     * Recommended CPM value for 50% reach
     */
    recommended_cpm_50?: number;
    /**
     * Recommended CPC value for 70% reach
     */
    recommended_cpc_70?: number;
    /**
     * Recommended CPM value for 70% reach
     */
    recommended_cpm_70?: number;
    /**
     * Recommended CPC value for 90% reach
     */
    recommended_cpc_90?: number;
    /**
     * Recommended CPM value for 90% reach
     */
    recommended_cpm_90?: number;
    [key: string]: any;
}

export interface AdsTargSuggestions {
    /**
     * Object ID
     */
    id?: number;
    /**
     * Object name
     */
    name?: string;
    [key: string]: any;
}

export interface AdsTargSuggestionsCities {
    /**
     * Object ID
     */
    id?: number;
    /**
     * Object name
     */
    name?: string;
    /**
     * Parent object
     */
    parent?: string;
    [key: string]: any;
}

export interface AdsTargSuggestionsRegions {
    /**
     * Object ID
     */
    id?: number;
    /**
     * Object name
     */
    name?: string;
    /**
     * Object type
     */
    type?: string;
    [key: string]: any;
}

export interface AdsTargSuggestionsSchools {
    /**
     * Full school title
     */
    desc?: string;
    /**
     * School ID
     */
    id?: number;
    /**
     * School title
     */
    name?: string;
    /**
     * City name
     */
    parent?: string;
    [key: string]: any;
}

export type AdsTargSuggestionsSchoolsType = "school" | "university" | "faculty" | "chair";

export interface AdsTargetGroup {
    /**
     * Audience
     */
    audience_count?: number;
    /**
     * Site domain
     */
    domain?: string;
    /**
     * Group ID
     */
    id?: number;
    /**
     * Number of days for user to be in group
     */
    lifetime?: number;
    /**
     * Group name
     */
    name?: string;
    /**
     * Pixel code
     */
    pixel?: string;
    [key: string]: any;
}

export interface AdsUsers {
    /**
     * User ID
     */
    user_id: number;
    [key: string]: any;
    accesses: AdsAccesses[];
}

export interface AppsApp1 {
    /**
     * Application author's URL
     */
    author_url?: string;
    /**
     * URL of the app banner with 1120 px in width
     */
    banner_1120?: string;
    /**
     * URL of the app banner with 560 px in width
     */
    banner_560?: string;
    /**
     * URL of the app icon with 16 px in width
     */
    icon_16?: string;
    /**
     * Screen orientation
     */
    screen_orientation?: number;
    /**
     * Catalog position
     */
    catalog_position?: number;
    /**
     * Application description
     */
    description?: string;
    /**
     * Genre name
     */
    genre?: string;
    /**
     * Genre ID
     */
    genre_id?: number;
    /**
     * Information whether the application is multilanguage
     */
    international?: boolean | number;
    /**
     * Information whether application is in mobile catalog
     */
    is_in_catalog?: number;
    /**
     * Members number
     */
    members_count?: number;
    /**
     * Application ID in store
     */
    platform_id?: string;
    /**
     * Date when the application has been published in Unixtime
     */
    published_date?: number;
    /**
     * Screen name
     */
    screen_name?: string;
    /**
     * Application section name
     */
    section?: string;
    is_new?: BaseBoolInt;
    push_enabled?: BaseBoolInt;
    friends?: number[];
    leaderboard_type?: AppsAppLeaderboardType;
}

export type AppsApp = AppsAppMin & AppsApp1;

export type AppsAppLeaderboardType = 0 | 1 | 2;

export interface AppsAppMin {
    /**
     * Application ID
     */
    id: number;
    /**
     * Application title
     */
    title: string;
    /**
     * Application author's ID
     */
    author_owner_id?: number;
    /**
     * Is application installed
     */
    is_installed?: boolean | number;
    /**
     * URL of the app icon with 139 px in width
     */
    icon_139?: string;
    /**
     * URL of the app icon with 150 px in width
     */
    icon_150?: string;
    /**
     * URL of the app icon with 278 px in width
     */
    icon_278?: string;
    /**
     * URL of the app icon with 576 px in width
     */
    icon_576?: string;
    /**
     * Hex color code without hash sign
     */
    background_loader_color?: string;
    /**
     * SVG data
     */
    loader_icon?: string;
    /**
     * URL of the app icon with 75 px in width
     */
    icon_75?: string;
    [key: string]: any;
}

export type AppsAppType = "app" | "game" | "site" | "standalone" | "vk_app" | "community_app" | "html5_game" | "mini_app";

export interface AppsLeaderboard {
    /**
     * Level
     */
    level?: number;
    /**
     * Points number
     */
    points?: number;
    /**
     * Score number
     */
    score?: number;
    /**
     * User ID
     */
    user_id: number;
    [key: string]: any;
}

/*Scope description*/
export interface AppsScope {
    /**
     * Scope name
     */
    name: "friends" | "photos" | "video" | "pages" | "status" | "notes" | "wall" | "docs" | "groups" | "stats" | "market";
    /**
     * Scope title
     */
    title?: string;
    [key: string]: any;
}

export interface AudioAudio {
    /**
     * Artist name
     */
    artist: string;
    /**
     * Audio ID
     */
    id: number;
    /**
     * Title
     */
    title: string;
    /**
     * URL of mp3 file
     */
    url?: string;
    /**
     * Duration in seconds
     */
    duration: number;
    /**
     * Date when uploaded
     */
    date?: number;
    /**
     * Album ID
     */
    album_id?: number;
    /**
     * Genre ID
     */
    genre_id?: number;
    /**
     * Performer name
     */
    performer?: string;
    [key: string]: any;
}

export type BaseBoolInt = 0 | 1;

export interface BaseCity {
    /**
     * City ID
     */
    id: number;
    /**
     * City title
     */
    title: string;
    [key: string]: any;
}

export interface BaseCommentsInfo {
    /**
     * Comments number
     */
    count?: number;
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: boolean | number;
    [key: string]: any;
}

export interface BaseCountry {
    /**
     * Country ID
     */
    id: number;
    /**
     * Country title
     */
    title: string;
    [key: string]: any;
}

export interface BaseError {
    /**
     * Error code
     */
    error_code?: number;
    /**
     * Error message
     */
    error_msg?: string;
    [key: string]: any;
    request_params?: BaseRequestParam[];
}

export interface BaseGeo {
    /**
     * Information whether a map is showed
     */
    showmap?: number;
    /**
     * Place type
     */
    type?: string;
    [key: string]: any;
}

export interface BaseGeoCoordinates {
    [key: string]: any;
    latitude: number;
    longitude: number;
}

export interface BaseGradientPoint {
    /**
     * Hex color code without #
     */
    color: string;
    /**
     * Point position
     */
    position: number;
    [key: string]: any;
}

export interface BaseImage {
    /**
     * Image height
     */
    height: number;
    /**
     * Image url
     */
    url: string;
    /**
     * Image width
     */
    width: number;
    [key: string]: any;
    id?: string;
}

export interface BaseLikes {
    /**
     * Likes number
     */
    count?: number;
    [key: string]: any;
}

export interface BaseLikesInfo {
    /**
     * Likes number
     */
    count: number;
    /**
     * Information whether current uer has liked the post
     */
    user_likes: number;
    [key: string]: any;
}

export interface BaseLink {
    /**
     * Link caption
     */
    caption?: string;
    /**
     * Link description
     */
    description?: string;
    /**
     * Link ID
     */
    id?: string;
    /**
     * String ID of the page with article preview
     */
    preview_page?: string;
    /**
     * URL of the page with article preview
     */
    preview_url?: string;
    /**
     * Link title
     */
    title?: string;
    /**
     * Link URL
     */
    url: string;
    /**
     * Information whether the current link is external
     */
    is_external?: boolean | number;
    [key: string]: any;
    is_favorite?: boolean | number;
}

export interface BaseLinkApplication {
    /**
     * Application Id
     */
    app_id?: number;
    [key: string]: any;
}

export interface BaseLinkApplicationStore {
    /**
     * Store Id
     */
    id?: number;
    /**
     * Store name
     */
    name?: string;
    [key: string]: any;
}

export interface BaseLinkButton {
    /**
     * Button title
     */
    title?: string;
    /**
     * Target block id
     */
    block_id?: string;
    /**
     * Target section id
     */
    section_id?: string;
    /**
     * Owner id
     */
    owner_id?: number;
    /**
     * Button icon name, e.g. 'phone' or 'gift'
     */
    icon?: string;
    [key: string]: any;
}

export interface BaseLinkButtonAction {
    /**
     * Action URL
     */
    url?: string;
    [key: string]: any;
    consume_reason?: string;
}

export type BaseLinkButtonActionType = "open_url";

export interface BaseLinkProduct {
    [key: string]: any;
    merchant?: string;
    orders_count?: number;
}

export interface BaseLinkRating {
    /**
     * Count of reviews
     */
    reviews_count?: number;
    /**
     * Count of stars
     */
    stars?: number;
    [key: string]: any;
}

export interface BaseMessageError {
    /**
     * Error code
     */
    code?: number;
    /**
     * Error message
     */
    description?: string;
    [key: string]: any;
}

export interface BaseObject {
    /**
     * Object ID
     */
    id: number;
    /**
     * Object title
     */
    title: string;
    [key: string]: any;
}

export interface BaseObjectCount {
    /**
     * Items count
     */
    count?: number;
    [key: string]: any;
}

export interface BaseObjectWithName {
    /**
     * Object ID
     */
    id: number;
    /**
     * Object name
     */
    name: string;
    [key: string]: any;
}

export interface BasePlace {
    /**
     * Place address
     */
    address?: string;
    /**
     * Checkins number
     */
    checkins?: number;
    /**
     * City name
     */
    city?: string;
    /**
     * Country name
     */
    country?: string;
    /**
     * Date of the place creation in Unixtime
     */
    created?: number;
    /**
     * URL of the place's icon
     */
    icon?: string;
    /**
     * Place ID
     */
    id?: number;
    /**
     * Place latitude
     */
    latitude?: number;
    /**
     * Place longitude
     */
    longitude?: number;
    /**
     * Place title
     */
    title?: string;
    /**
     * Place type
     */
    type?: string;
    [key: string]: any;
}

export type BasePropertyExists = 1;

export interface BaseRepostsInfo {
    /**
     * Reposts number
     */
    count?: number;
    /**
     * Information whether current user has reposted the post
     */
    user_reposted?: number;
    [key: string]: any;
}

export interface BaseRequestParam {
    /**
     * Parameter name
     */
    key?: string;
    /**
     * Parameter value
     */
    value?: string;
    [key: string]: any;
}

export type BaseSex = 0 | 1 | 2;

export interface BaseSticker {
    /**
     * Sticker ID
     */
    sticker_id?: number;
    /**
     * Pack ID
     */
    product_id?: number;
    /**
     * URL of sticker animation script
     */
    animation_url?: string;
    /**
     * Information whether the sticker is allowed
     */
    is_allowed?: boolean | number;
    [key: string]: any;
    images?: BaseImage[];
    images_with_background?: BaseImage[];
    animations?: BaseStickerAnimation[];
}

export interface BaseStickerAnimation {
    /**
     * Type of animation script
     */
    type?: "light" | "dark";
    /**
     * URL of animation script
     */
    url?: string;
    [key: string]: any;
}

export interface BaseUploadServer {
    /**
     * Upload URL
     */
    upload_url: string;
    [key: string]: any;
}

export type BaseUserGroupFields = "about" | "action_button" | "activities" | "activity" | "addresses" | "admin_level" | "age_limits" | "author_id" | "ban_info" | "bdate" | "blacklisted" | "blacklisted_by_me" | "books" | "can_create_topic" | "can_message" | "can_post" | "can_see_all_posts" | "can_see_audio" | "can_send_friend_request" | "can_upload_video" | "can_write_private_message" | "career" | "city" | "common_count" | "connections" | "contacts" | "counters" | "country" | "cover" | "crop_photo" | "deactivated" | "description" | "domain" | "education" | "exports" | "finish_date" | "fixed_post" | "followers_count" | "friend_status" | "games" | "has_market_app" | "has_mobile" | "has_photo" | "home_town" | "id" | "interests" | "is_admin" | "is_closed" | "is_favorite" | "is_friend" | "is_hidden_from_feed" | "is_member" | "is_messages_blocked" | "can_send_notify" | "is_subscribed" | "last_seen" | "links" | "lists" | "maiden_name" | "main_album_id" | "main_section" | "market" | "member_status" | "members_count" | "military" | "movies" | "music" | "name" | "nickname" | "occupation" | "online" | "online_status" | "personal" | "phone" | "photo_100" | "photo_200" | "photo_200_orig" | "photo_400_orig" | "photo_50" | "photo_id" | "photo_max" | "photo_max_orig" | "quotes" | "relation" | "relatives" | "schools" | "screen_name" | "sex" | "site" | "start_date" | "status" | "timezone" | "trending" | "tv" | "type" | "universities" | "verified" | "wall_comments" | "wiki_page" | "vk_admin_status";

export interface BaseUserId {
    /**
     * User ID
     */
    user_id?: number;
    [key: string]: any;
}

export type BoardDefaultOrder = 1 | 2 | -1 | -2;

export interface BoardTopic {
    /**
     * Comments number
     */
    comments?: number;
    /**
     * Date when the topic has been created in Unixtime
     */
    created?: number;
    /**
     * Creator ID
     */
    created_by?: number;
    /**
     * Topic ID
     */
    id?: number;
    /**
     * Topic title
     */
    title?: string;
    /**
     * Date when the topic has been updated in Unixtime
     */
    updated?: number;
    /**
     * ID of user who updated the topic
     */
    updated_by?: number;
    [key: string]: any;
}

export interface BoardTopicComment {
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number;
    /**
     * Author ID
     */
    from_id: number;
    /**
     * Comment ID
     */
    id: number;
    /**
     * Real position of the comment
     */
    real_offset?: number;
    /**
     * Comment text
     */
    text: string;
    [key: string]: any;
    attachments?: WallCommentAttachment[];
}

export interface BoardTopicPoll {
    /**
     * Current user's answer ID
     */
    answer_id: number;
    /**
     * Date when poll has been created in Unixtime
     */
    created: number;
    /**
     * Poll owner's ID
     */
    owner_id: number;
    /**
     * Poll ID
     */
    poll_id: number;
    /**
     * Poll question
     */
    question: string;
    /**
     * Votes number
     */
    votes: string;
    [key: string]: any;
    answers: PollsAnswer[];
}

export interface CallbackBoardPostDelete {
    [key: string]: any;
    topic_owner_id: number;
    topic_id: number;
    id: number;
}

export interface CallbackConfirmationMessage {
    [key: string]: any;
    group_id: number;
    secret: string;
}

export interface CallbackGroupChangePhoto {
    [key: string]: any;
    user_id: number;
}

export interface CallbackGroupChangeSettings {
    [key: string]: any;
    user_id: number;
}

export interface CallbackGroupJoin {
    [key: string]: any;
    user_id: number;
}

export type CallbackGroupJoinType = "join" | "unsure" | "accepted" | "approved" | "request";

export interface CallbackGroupLeave {
    [key: string]: any;
    user_id?: number;
}

export type CallbackGroupMarket = 0 | 1;

export type CallbackGroupOfficerRole = 0 | 1 | 2 | 3;

export interface CallbackGroupOfficersEdit {
    [key: string]: any;
    admin_id: number;
    user_id: number;
}

export interface CallbackGroupSettingsChanges {
    [key: string]: any;
    title?: string;
    description?: string;
    screen_name?: string;
    public_category?: number;
    public_subcategory?: number;
    website?: string;
}

export interface CallbackLikeAddRemove {
    [key: string]: any;
    liker_id: number;
    object_type: "video" | "photo" | "post" | "comment" | "note" | "topic_comment" | "photo_comment" | "video_comment" | "market" | "market_comment";
    object_owner_id: number;
    object_id: number;
    post_id: number;
    thread_reply_id?: number;
}

export interface CallbackMarketComment {
    [key: string]: any;
    id: number;
    from_id: number;
    date: number;
    text?: string;
    market_owner_od?: number;
    photo_id?: number;
}

export interface CallbackMarketCommentDelete {
    [key: string]: any;
    owner_id: number;
    id: number;
    user_id: number;
    item_id: number;
}

export interface CallbackMessageAllow {
    [key: string]: any;
    user_id: number;
    key: string;
}

export interface CallbackMessageBase {
    [key: string]: any;
    group_id: number;
}

export interface CallbackMessageDeny {
    [key: string]: any;
    user_id: number;
}

export type CallbackMessageType = "confirmation" | "group_change_photo" | "group_change_settings" | "group_officers_edit" | "lead_forms_new" | "market_comment_delete" | "market_comment_edit" | "market_comment_restore" | "message_allow" | "message_deny" | "message_read" | "message_reply" | "message_typing_state" | "messages_edit" | "photo_comment_delete" | "photo_comment_edit" | "photo_comment_restore" | "poll_vote_new" | "user_block" | "user_unblock" | "video_comment_delete" | "video_comment_edit" | "video_comment_restore" | "wall_reply_delete" | "wall_reply_restore" | "wall_repost";

export interface CallbackPhotoComment {
    [key: string]: any;
    id: number;
    from_id: number;
    date: number;
    text: string;
    photo_owner_od: number;
}

export interface CallbackPhotoCommentDelete {
    [key: string]: any;
    id: number;
    owner_id: number;
    user_id: number;
    photo_id: number;
}

export interface CallbackPollVoteNew {
    [key: string]: any;
    owner_id: number;
    poll_id: number;
    option_id: number;
    user_id: number;
}

export interface CallbackQrScan {
    [key: string]: any;
    user_id: number;
    data: string;
    type: string;
    subtype: string;
    reread: boolean | number;
}

export interface CallbackUserBlock {
    [key: string]: any;
    admin_id: number;
    user_id: number;
    unblock_date: number;
    reason: number;
    comment?: string;
}

export interface CallbackUserUnblock {
    [key: string]: any;
    admin_id: number;
    user_id: number;
    by_end_date: number;
}

export interface CallbackVideoComment {
    [key: string]: any;
    id: number;
    from_id: number;
    date: number;
    text: string;
    video_owner_od: number;
}

export interface CallbackVideoCommentDelete {
    [key: string]: any;
    id: number;
    owner_id: number;
    user_id: number;
    video_id: number;
}

export interface CallbackWallCommentDelete {
    [key: string]: any;
    owner_id: number;
    id: number;
    user_id: number;
    post_id: number;
}

export interface CommentThread {
    /**
     * Information whether current user can comment the post
     */
    can_post?: boolean | number;
    /**
     * Comments number
     */
    count: number;
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: boolean | number;
    /**
     * Information whether recommended to display reply button
     */
    show_reply_button?: boolean | number;
    [key: string]: any;
    items?: WallWallComment[];
}

export interface DatabaseCity1 {
    /**
     * Area title
     */
    area?: string;
    /**
     * Region title
     */
    region?: string;
    important?: BaseBoolInt;
}

export type DatabaseCity = BaseObject & DatabaseCity1;

export interface DatabaseFaculty {
    /**
     * Faculty ID
     */
    id?: number;
    /**
     * Faculty title
     */
    title?: string;
    [key: string]: any;
}

export interface DatabaseRegion {
    /**
     * Region ID
     */
    id?: number;
    /**
     * Region title
     */
    title?: string;
    [key: string]: any;
}

export interface DatabaseSchool {
    /**
     * School ID
     */
    id?: number;
    /**
     * School title
     */
    title?: string;
    [key: string]: any;
}

export interface DatabaseStation {
    /**
     * City ID
     */
    city_id?: number;
    /**
     * Hex color code without #
     */
    color?: string;
    /**
     * Station ID
     */
    id: number;
    /**
     * Station name
     */
    name: string;
    [key: string]: any;
}

export interface DatabaseUniversity {
    /**
     * University ID
     */
    id?: number;
    /**
     * University title
     */
    title?: string;
    [key: string]: any;
}

export interface DocsDoc {
    /**
     * Document ID
     */
    id: number;
    /**
     * Document owner ID
     */
    owner_id: number;
    /**
     * Document title
     */
    title: string;
    /**
     * File size in bites
     */
    size: number;
    /**
     * File extension
     */
    ext: string;
    /**
     * File URL
     */
    url?: string;
    /**
     * Date when file has been uploaded in Unixtime
     */
    date: number;
    /**
     * Document type
     */
    type: number;
    /**
     * Access key for the document
     */
    access_key?: string;
    [key: string]: any;
    tags?: string[];
}

export type DocsDocAttachmentType = "doc" | "graffiti" | "audio_message";

export interface DocsDocPreview {
    [key: string]: any;
}

export interface DocsDocPreviewAudioMsg {
    /**
     * Audio message duration in seconds
     */
    duration: number;
    /**
     * MP3 file URL
     */
    link_mp3: string;
    /**
     * OGG file URL
     */
    link_ogg: string;
    /**
     * Sound visualisation
     */
    waveform: number[];
    [key: string]: any;
}

export interface DocsDocPreviewGraffiti {
    /**
     * Graffiti file URL
     */
    src: string;
    /**
     * Graffiti width
     */
    width: number;
    /**
     * Graffiti height
     */
    height: number;
    [key: string]: any;
}

export interface DocsDocPreviewPhoto {
    [key: string]: any;
    sizes?: DocsDocPreviewPhotoSizes[];
}

export interface DocsDocPreviewPhotoSizes {
    /**
     * URL of the image
     */
    src: string;
    /**
     * Width in px
     */
    width: number;
    /**
     * Height in px
     */
    height: number;
    [key: string]: any;
}

export interface DocsDocPreviewVideo {
    /**
     * Video URL
     */
    src: string;
    /**
     * Video's width in pixels
     */
    width: number;
    /**
     * Video's height in pixels
     */
    height: number;
    /**
     * Video file size in bites
     */
    file_size: number;
    [key: string]: any;
}

export interface DocsDocTypes {
    /**
     * Doc type ID
     */
    id: number;
    /**
     * Doc type title
     */
    name: string;
    /**
     * Number of docs
     */
    count: number;
    [key: string]: any;
}

export interface DocsDocUploadResponse {
    /**
     * Uploaded file data
     */
    file?: string;
    [key: string]: any;
}

export interface EventsEventAttach {
    /**
     * address of event
     */
    address?: string;
    /**
     * text of attach
     */
    button_text: string;
    /**
     * event ID
     */
    id: number;
    /**
     * is favorite
     */
    is_favorite: boolean | number;
    /**
     * text of attach
     */
    text: string;
    /**
     * event start time
     */
    time?: number;
    [key: string]: any;
    friends: number[];
}

export interface FaveBookmark {
    /**
     * Timestamp, when this item was bookmarked
     */
    added_date: number;
    /**
     * Has user seen this item
     */
    seen: boolean | number;
    [key: string]: any;
    tags: FaveTag[];
}

export type FaveBookmarkType = "post" | "video" | "product" | "article" | "link";

export interface FavePage {
    /**
     * Some info about user or group
     */
    description: string;
    /**
     * Timestamp, when this page was bookmarked
     */
    updated_date?: number;
    [key: string]: any;
    tags: FaveTag[];
}

export type FavePageType = "user" | "group" | "hints";

export interface FaveTag {
    /**
     * Tag id
     */
    id?: number;
    /**
     * Tag name
     */
    name?: string;
    [key: string]: any;
}

export interface FriendsFriendExtendedStatus1 {
    /**
     * Is friend request from other user unread
     */
    is_request_unread?: boolean | number;
}

export type FriendsFriendExtendedStatus = FriendsFriendStatus & FriendsFriendExtendedStatus1;

export interface FriendsFriendStatus {
    /**
     * MD5 hash for the result validation
     */
    sign?: string;
    /**
     * User ID
     */
    user_id: number;
    [key: string]: any;
}

export type FriendsFriendStatusStatus = 0 | 1 | 2 | 3;

export interface FriendsFriendsList {
    /**
     * List ID
     */
    id: number;
    /**
     * List title
     */
    name: string;
    [key: string]: any;
}

export interface FriendsMutualFriend {
    /**
     * Total mutual friends number
     */
    common_count?: number;
    /**
     * User ID
     */
    common_friends?: number[];
    /**
     * User ID
     */
    id?: number;
    [key: string]: any;
}

export interface FriendsRequests {
    /**
     * ID of the user by whom friend has been suggested
     */
    from?: string;
    /**
     * User ID
     */
    user_id?: number;
    [key: string]: any;
}

export interface FriendsRequestsMutual {
    /**
     * Total mutual friends number
     */
    count?: number;
    /**
     * User ID
     */
    users?: number[];
    [key: string]: any;
}

export interface FriendsRequestsXtrMessage {
    /**
     * ID of the user by whom friend has been suggested
     */
    from?: string;
    /**
     * Message sent with a request
     */
    message?: string;
    /**
     * User ID
     */
    user_id?: number;
    [key: string]: any;
}

export interface FriendsUserXtrLists1 {
    /**
     * IDs of friend lists with user
     */
    lists?: number[];
}

export type FriendsUserXtrLists = UsersUserFull & FriendsUserXtrLists1;

export interface FriendsUserXtrPhone1 {
    /**
     * User phone
     */
    phone?: string;
}

export type FriendsUserXtrPhone = UsersUserFull & FriendsUserXtrPhone1;

export interface GiftsGift {
    /**
     * Date when gist has been sent in Unixtime
     */
    date?: number;
    /**
     * Gift sender ID
     */
    from_id?: number;
    /**
     * Hash
     */
    gift_hash?: string;
    /**
     * Gift ID
     */
    id?: number;
    /**
     * Comment text
     */
    message?: string;
    [key: string]: any;
}

export type GiftsGiftPrivacy = 0 | 1 | 2;

export interface GiftsLayout {
    /**
     * Gift ID
     */
    id?: number;
    /**
     * URL of the preview image with 512 px in width
     */
    thumb_512?: string;
    /**
     * URL of the preview image with 256 px in width
     */
    thumb_256?: string;
    /**
     * URL of the preview image with 48 px in width
     */
    thumb_48?: string;
    /**
     * URL of the preview image with 96 px in width
     */
    thumb_96?: string;
    /**
     * ID of the sticker pack, if the gift is representing one
     */
    stickers_product_id?: number;
    /**
     * ID of the build of constructor gift
     */
    build_id?: string;
    /**
     * Keywords used for search
     */
    keywords?: string;
    [key: string]: any;
}

export interface GroupsAddress {
    /**
     * Additional address to the place (6 floor, left door)
     */
    additional_address?: string;
    /**
     * String address to the place (Nevsky, 28)
     */
    address?: string;
    /**
     * City id of address
     */
    city_id?: number;
    /**
     * Country id of address
     */
    country_id?: number;
    /**
     * Distance from the point
     */
    distance?: number;
    /**
     * Address id
     */
    id: number;
    /**
     * Address latitude
     */
    latitude?: number;
    /**
     * Address longitude
     */
    longitude?: number;
    /**
     * Metro id of address
     */
    metro_station_id?: number;
    /**
     * Address phone
     */
    phone?: string;
    /**
     * Time offset int minutes from utc time
     */
    time_offset?: number;
    /**
     * Title of the place (Zinger, etc)
     */
    title?: string;
    [key: string]: any;
}

/*Timetable for a week*/
export interface GroupsAddressTimetable {
    [key: string]: any;
}

/*Timetable for one day*/
export interface GroupsAddressTimetableDay {
    /**
     * Close time of the break in minutes
     */
    break_close_time?: number;
    /**
     * Start time of the break in minutes
     */
    break_open_time?: number;
    /**
     * Close time in minutes
     */
    close_time: number;
    /**
     * Open time in minutes
     */
    open_time: number;
    [key: string]: any;
}

export type GroupsAddressWorkInfoStatus = "no_information" | "temporarily_closed" | "always_opened" | "timetable" | "forever_closed";

export interface GroupsAddressesInfo {
    /**
     * Information whether addresses is enabled
     */
    is_enabled: boolean | number;
    /**
     * Main address id for group
     */
    main_address_id?: number;
    [key: string]: any;
}

export interface GroupsBanInfo {
    /**
     * Administrator ID
     */
    admin_id?: number;
    /**
     * Comment for a ban
     */
    comment?: string;
    /**
     * Show comment for user
     */
    comment_visible?: boolean | number;
    /**
     * Date when user has been added to blacklist in Unixtime
     */
    date?: number;
    /**
     * Date when user will be removed from blacklist in Unixtime
     */
    end_date?: number;
    [key: string]: any;
    is_closed?: boolean | number;
}

export type GroupsBanInfoReason = 0 | 1 | 2 | 3 | 4;

export type GroupsBannedItem = GroupsOwnerXtrBanInfo;

export interface GroupsCallbackServer {
    [key: string]: any;
    id: number;
    title: string;
    creator_id: number;
    url: string;
    secret_key: string;
    status: "unconfigured" | "failed" | "wait" | "ok";
}

export interface GroupsCallbackSettings {
    /**
     * API version used for the events
     */
    api_version?: string;
    [key: string]: any;
}

export interface GroupsContactsItem {
    /**
     * Contact description
     */
    desc?: string;
    /**
     * Contact email
     */
    email?: string;
    /**
     * Contact phone
     */
    phone?: string;
    /**
     * User ID
     */
    user_id?: number;
    [key: string]: any;
}

export interface GroupsCountersGroup {
    /**
     * Addresses number
     */
    addresses?: number;
    /**
     * Photo albums number
     */
    albums?: number;
    /**
     * Audios number
     */
    audios?: number;
    /**
     * Audio playlists number
     */
    audio_playlists?: number;
    /**
     * Docs number
     */
    docs?: number;
    /**
     * Market items number
     */
    market?: number;
    /**
     * Photos number
     */
    photos?: number;
    /**
     * Topics number
     */
    topics?: number;
    /**
     * Videos number
     */
    videos?: number;
    [key: string]: any;
}

export interface GroupsCover {
    [key: string]: any;
    images?: BaseImage[];
}

export type GroupsFields = "market" | "member_status" | "is_favorite" | "is_subscribed" | "city" | "country" | "verified" | "description" | "wiki_page" | "members_count" | "counters" | "cover" | "can_post" | "can_see_all_posts" | "activity" | "fixed_post" | "can_create_topic" | "can_upload_video" | "has_photo" | "status" | "main_album_id" | "links" | "contacts" | "site" | "main_section" | "trending" | "can_message" | "is_market_cart_enabled" | "is_messages_blocked" | "can_send_notify" | "online_status" | "start_date" | "finish_date" | "age_limits" | "ban_info" | "action_button" | "author_id" | "phone" | "has_market_app" | "addresses" | "live_covers" | "is_adult" | "can_subscribe_posts" | "warning_notification" | "msg_push_allowed" | "stories_archive_count" | "video_live_level" | "video_live_count" | "clips_count";

export type GroupsFilter = "admin" | "editor" | "moder" | "advertiser" | "groups" | "publics" | "events" | "has_addresses";

export interface GroupsGroup {
    /**
     * Information whether community is banned
     */
    deactivated?: string;
    /**
     * Finish date in Unixtime format
     */
    finish_date?: number;
    /**
     * Community ID
     */
    id?: number;
    /**
     * Community name
     */
    name?: string;
    /**
     * URL of square photo of the community with 100 pixels in width
     */
    photo_100?: string;
    /**
     * URL of square photo of the community with 200 pixels in width
     */
    photo_200?: string;
    /**
     * URL of square photo of the community with 50 pixels in width
     */
    photo_50?: string;
    /**
     * Domain of the community page
     */
    screen_name?: string;
    /**
     * Start date in Unixtime format
     */
    start_date?: number;
    [key: string]: any;
}

export type GroupsGroupAccess = 0 | 1 | 2;

export type GroupsGroupAdminLevel = 1 | 2 | 3;

export type GroupsGroupAgeLimits = 1 | 2 | 3;

export interface GroupsGroupAttach {
    /**
     * group ID
     */
    id: number;
    /**
     * text of attach
     */
    text: string;
    /**
     * activity or category of group
     */
    status: string;
    /**
     * size of group
     */
    size: number;
    /**
     * is favorite
     */
    is_favorite: boolean | number;
    [key: string]: any;
}

export type GroupsGroupAudio = 0 | 1 | 2;

export interface GroupsGroupBanInfo {
    /**
     * Ban comment
     */
    comment?: string;
    /**
     * End date of ban in Unixtime
     */
    end_date?: number;
    [key: string]: any;
}

export interface GroupsGroupCategory {
    /**
     * Category ID
     */
    id: number;
    /**
     * Category name
     */
    name: string;
    [key: string]: any;
    subcategories?: BaseObjectWithName[];
}

export interface GroupsGroupCategoryFull {
    /**
     * Category ID
     */
    id: number;
    /**
     * Category name
     */
    name: string;
    /**
     * Pages number
     */
    page_count: number;
    [key: string]: any;
    page_previews: GroupsGroup[];
    subcategories?: GroupsGroupCategory[];
}

export interface GroupsGroupCategoryType {
    [key: string]: any;
    id: number;
    name: string;
}

export type GroupsGroupDocs = 0 | 1 | 2;

export interface GroupsGroupFull1 {
    /**
     * Community description
     */
    description?: string;
    /**
     * Community's main wiki page title
     */
    wiki_page?: string;
    /**
     * Community members number
     */
    members_count?: number;
    /**
     * Community level live streams achievements
     */
    video_live_level?: number;
    /**
     * Number of community's live streams
     */
    video_live_count?: number;
    /**
     * Type of group, start date of event or category of public page
     */
    activity?: string;
    /**
     * Fixed post ID
     */
    fixed_post?: number;
    /**
     * Community status
     */
    status?: string;
    /**
     * Community's main photo album ID
     */
    main_album_id?: number;
    /**
     * Information about wall status in community
     */
    wall?: 0 | 1 | 2 | 3;
    /**
     * Community's website
     */
    site?: string;
    /**
     * Information whether community has installed market app
     */
    has_market_app?: boolean | number;
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts?: boolean | number;
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts?: boolean | number;
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts?: boolean | number;
    market?: GroupsMarketInfo;
    member_status?: GroupsGroupFullMemberStatus;
    is_adult?: BaseBoolInt;
    is_hidden_from_feed?: BaseBoolInt;
    is_favorite?: BaseBoolInt;
    is_subscribed?: BaseBoolInt;
    city?: BaseObject;
    country?: BaseCountry;
    verified?: BaseBoolInt;
    counters?: GroupsCountersGroup;
    cover?: GroupsCover;
    can_post?: BaseBoolInt;
    can_see_all_posts?: BaseBoolInt;
    can_create_topic?: BaseBoolInt;
    can_upload_doc?: BaseBoolInt;
    can_upload_story?: BaseBoolInt;
    can_upload_video?: BaseBoolInt;
    has_photo?: BaseBoolInt;
    links?: GroupsLinksItem[];
    contacts?: GroupsContactsItem[];
    main_section?: GroupsGroupFullMainSection;
    trending?: BaseBoolInt;
    can_message?: BaseBoolInt;
    is_messages_blocked?: BaseBoolInt;
    can_send_notify?: BaseBoolInt;
    online_status?: GroupsOnlineStatus;
    age_limits?: GroupsGroupFullAgeLimits;
    ban_info?: GroupsGroupBanInfo;
    addresses?: GroupsAddressesInfo;
}

export type GroupsGroupFull = GroupsGroup & GroupsGroupFull1;

export type GroupsGroupFullAgeLimits = 1 | 2 | 3;

export type GroupsGroupFullMainSection = 0 | 1 | 2 | 3 | 4 | 5;

export type GroupsGroupFullMemberStatus = 0 | 1 | 2 | 3 | 4 | 5;

export type GroupsGroupIsClosed = 0 | 1 | 2;

export interface GroupsGroupLink {
    /**
     * Link label
     */
    name?: string;
    /**
     * Link description
     */
    desc?: string;
    /**
     * Link ID
     */
    id?: number;
    /**
     * Link URL
     */
    url?: string;
    [key: string]: any;
}

export type GroupsGroupMarketCurrency = 643 | 980 | 398 | 978 | 840;

export type GroupsGroupPhotos = 0 | 1 | 2;

export interface GroupsGroupPublicCategoryList {
    [key: string]: any;
    id?: number;
    name?: string;
    subcategories?: GroupsGroupCategoryType[];
}

export type GroupsGroupRole = "moderator" | "editor" | "administrator";

export type GroupsGroupSubject = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42";

export type GroupsGroupTopics = 0 | 1 | 2;

export type GroupsGroupType = "group" | "page" | "event";

export type GroupsGroupVideo = 0 | 1 | 2;

export type GroupsGroupWall = 0 | 1 | 2 | 3;

export type GroupsGroupWiki = 0 | 1 | 2;

export interface GroupsGroupXtrInvitedBy {
    /**
     * Community ID
     */
    id?: number;
    /**
     * Inviter ID
     */
    invited_by?: number;
    /**
     * Community name
     */
    name?: string;
    /**
     * URL of square photo of the community with 100 pixels in width
     */
    photo_100?: string;
    /**
     * URL of square photo of the community with 200 pixels in width
     */
    photo_200?: string;
    /**
     * URL of square photo of the community with 50 pixels in width
     */
    photo_50?: string;
    /**
     * Domain of the community page
     */
    screen_name?: string;
    [key: string]: any;
}

export type GroupsGroupXtrInvitedByAdminLevel = 1 | 2 | 3;

export type GroupsGroupXtrInvitedByType = "group" | "page" | "event";

export interface GroupsGroupsArray {
    /**
     * Communities number
     */
    count: number;
    /**
     * Community ID
     */
    items: number[];
    [key: string]: any;
}

export interface GroupsLinksItem {
    /**
     * Link description
     */
    desc?: string;
    /**
     * Link ID
     */
    id?: number;
    /**
     * Link title
     */
    name?: string;
    /**
     * URL of square image of the link with 100 pixels in width
     */
    photo_100?: string;
    /**
     * URL of square image of the link with 50 pixels in width
     */
    photo_50?: string;
    /**
     * Link URL
     */
    url?: string;
    [key: string]: any;
}

export interface GroupsLongPollEvents {
    [key: string]: any;
}

export interface GroupsLongPollServer {
    /**
     * Long Poll key
     */
    key: string;
    /**
     * Long Poll server address
     */
    server: string;
    /**
     * Number of the last event
     */
    ts: string;
    [key: string]: any;
}

export interface GroupsLongPollSettings {
    /**
     * API version used for the events
     */
    api_version?: string;
    /**
     * Shows whether Long Poll is enabled
     */
    is_enabled: boolean | number;
    [key: string]: any;
}

export interface GroupsMarketInfo {
    /**
     * Contact person ID
     */
    contact_id?: number;
    /**
     * Currency name
     */
    currency_text?: string;
    /**
     * Main market album ID
     */
    main_album_id?: number;
    /**
     * Maximum price
     */
    price_max?: string;
    /**
     * Minimum price
     */
    price_min?: string;
    [key: string]: any;
}

export interface GroupsMemberRole {
    /**
     * User ID
     */
    id?: number;
    [key: string]: any;
    permissions?: GroupsMemberRolePermission[];
}

export type GroupsMemberRolePermission = "ads";

export type GroupsMemberRoleStatus = "moderator" | "editor" | "administrator" | "creator";

export interface GroupsMemberStatus {
    /**
     * User ID
     */
    user_id: number;
    [key: string]: any;
}

export interface GroupsMemberStatusFull {
    /**
     * User ID
     */
    user_id: number;
    [key: string]: any;
}

/*Online status of group*/
export interface GroupsOnlineStatus {
    /**
     * Estimated time of answer (for status = answer_mark)
     */
    minutes?: number;
    [key: string]: any;
}

export type GroupsOnlineStatusType = "none" | "online" | "answer_mark";

export interface GroupsOwnerXtrBanInfo {
    [key: string]: any;
}

export type GroupsOwnerXtrBanInfoType = "group" | "profile";

export type GroupsRoleOptions = "moderator" | "editor" | "administrator" | "creator";

export interface GroupsSettingsTwitter {
    [key: string]: any;
    status: "loading" | "sync";
    name?: string;
}

export interface GroupsSubjectItem {
    /**
     * Subject ID
     */
    id: number;
    /**
     * Subject title
     */
    name: string;
    [key: string]: any;
}

export interface GroupsTokenPermissionSetting {
    [key: string]: any;
    name: string;
    setting: number;
}

export interface GroupsUserXtrRole1 {
    role?: GroupsRoleOptions;
}

export type GroupsUserXtrRole = UsersUserFull & GroupsUserXtrRole1;

export interface LeadsChecked {
    /**
     * Reason why user can't start the lead
     */
    reason?: string;
    /**
     * Session ID
     */
    sid?: string;
    /**
     * URL user should open to start the lead
     */
    start_link?: string;
    [key: string]: any;
}

export type LeadsCheckedResult = "true" | "false";

export interface LeadsComplete {
    /**
     * Offer cost
     */
    cost?: number;
    /**
     * Offer limit
     */
    limit?: number;
    /**
     * Amount of spent votes
     */
    spent?: number;
    [key: string]: any;
    success?: number;
}

export interface LeadsEntry {
    /**
     * Application ID
     */
    aid?: number;
    /**
     * Comment text
     */
    comment?: string;
    /**
     * Date when the action has been started in Unixtime
     */
    date?: number;
    /**
     * Session string ID
     */
    sid?: string;
    /**
     * Start date in Unixtime (for status=2)
     */
    start_date?: number;
    /**
     * Action type
     */
    status?: number;
    /**
     * User ID
     */
    uid?: number;
    [key: string]: any;
}

export interface LeadsLead {
    /**
     * Completed offers number
     */
    completed?: number;
    /**
     * Offer cost
     */
    cost?: number;
    /**
     * Impressions number
     */
    impressions?: number;
    /**
     * Lead limit
     */
    limit?: number;
    /**
     * Amount of spent votes
     */
    spent?: number;
    /**
     * Started offers number
     */
    started?: number;
    [key: string]: any;
}

export interface LeadsLeadDays {
    /**
     * Completed offers number
     */
    completed?: number;
    /**
     * Impressions number
     */
    impressions?: number;
    /**
     * Amount of spent votes
     */
    spent?: number;
    /**
     * Started offers number
     */
    started?: number;
    [key: string]: any;
}

export interface LeadsStart {
    /**
     * Session data
     */
    vk_sid?: string;
    [key: string]: any;
}

export type LikesType = "post" | "comment" | "photo" | "audio" | "video" | "note" | "market" | "photo_comment" | "video_comment" | "topic_comment" | "market_comment" | "sitepage";

export interface LinkTargetObject {
    /**
     * Object type
     */
    type?: string;
    /**
     * Owner ID
     */
    owner_id?: number;
    /**
     * Item ID
     */
    item_id?: number;
    [key: string]: any;
}

export interface MarketCurrency {
    /**
     * Currency ID
     */
    id: number;
    /**
     * Currency sign
     */
    name: string;
    [key: string]: any;
}

export interface MarketMarketAlbum {
    /**
     * Items number
     */
    count: number;
    /**
     * Market album ID
     */
    id: number;
    /**
     * Market album owner's ID
     */
    owner_id: number;
    /**
     * Market album title
     */
    title: string;
    /**
     * Date when album has been updated last time in Unixtime
     */
    updated_time: number;
    [key: string]: any;
}

export interface MarketMarketCategory {
    /**
     * Category ID
     */
    id: number;
    /**
     * Category name
     */
    name: string;
    [key: string]: any;
}

export interface MarketMarketItem {
    /**
     * Access key for the market item
     */
    access_key?: string;
    /**
     * Title for button for url
     */
    button_title?: string;
    /**
     * Date when the item has been created in Unixtime
     */
    date?: number;
    /**
     * Item description
     */
    description: string;
    /**
     * Item ID
     */
    id: number;
    /**
     * Item owner's ID
     */
    owner_id: number;
    /**
     * URL of the preview image
     */
    thumb_photo: string;
    /**
     * Item title
     */
    title: string;
    /**
     * URL to item
     */
    url?: string;
    [key: string]: any;
    external_id?: string;
    is_favorite?: boolean | number;
    variants_grouping_id?: number;
    is_main_variant?: boolean | number;
}

export type MarketMarketItemAvailability = 0 | 1 | 2;

export interface MarketMarketItemFull1 {
    /**
     * Views number
     */
    views_count?: number;
    albums_ids?: number[];
    photos?: PhotosPhoto[];
    can_comment?: BaseBoolInt;
    can_repost?: BaseBoolInt;
    likes?: BaseLikes;
    reposts?: BaseRepostsInfo;
}

export type MarketMarketItemFull = MarketMarketItem & MarketMarketItemFull1;

export interface MarketPrice {
    /**
     * Amount
     */
    amount?: string;
    /**
     * Text
     */
    text?: string;
    [key: string]: any;
    discount_rate?: number;
    old_amount?: string;
}

export interface MarketSection {
    /**
     * Section ID
     */
    id: number;
    /**
     * Section name
     */
    name: string;
    [key: string]: any;
}

/*Media restrictions*/
export interface MediaRestriction {
    [key: string]: any;
    text?: string;
    title: string;
    card_icon?: BaseImage[];
    list_icon?: BaseImage[];
}

export interface MessageChatPreview {
    [key: string]: any;
    admin_id?: number;
    joined?: boolean | number;
    local_id?: number;
    members?: number[];
    members_count?: number;
    title?: string;
}

export interface MessagesAudioMessage {
    /**
     * Access key for audio message
     */
    access_key?: string;
    /**
     * Audio message duration in seconds
     */
    duration: number;
    /**
     * Audio message ID
     */
    id: number;
    /**
     * MP3 file URL
     */
    link_mp3: string;
    /**
     * OGG file URL
     */
    link_ogg: string;
    /**
     * Audio message owner ID
     */
    owner_id: number;
    /**
     * Sound visualisation
     */
    waveform: number[];
    [key: string]: any;
}

export interface MessagesChat {
    /**
     * Chat creator ID
     */
    admin_id: number;
    /**
     * Chat ID
     */
    id: number;
    /**
     * URL of the preview image with 100 px in width
     */
    photo_100?: string;
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200?: string;
    /**
     * URL of the preview image with 50 px in width
     */
    photo_50?: string;
    /**
     * Chat title
     */
    title?: string;
    /**
     * Chat type
     */
    type: string;
    /**
     * User ID
     */
    users: number[];
    /**
     * If provided photo is default
     */
    is_default_photo?: boolean | number;
    [key: string]: any;
}

export interface MessagesChatFull {
    /**
     * Chat creator ID
     */
    admin_id: number;
    /**
     * Chat ID
     */
    id: number;
    /**
     * URL of the preview image with 100 px in width
     */
    photo_100?: string;
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200?: string;
    /**
     * URL of the preview image with 50 px in width
     */
    photo_50?: string;
    /**
     * Chat title
     */
    title?: string;
    /**
     * Chat type
     */
    type: string;
    [key: string]: any;
    users: MessagesUserXtrInvitedBy[];
}

export interface MessagesChatPushSettings {
    /**
     * Time until that notifications are disabled
     */
    disabled_until?: number;
    [key: string]: any;
}

export interface MessagesChatRestrictions {
    /**
     * Only admins can promote users to admins
     */
    admins_promote_users?: boolean | number;
    /**
     * Only admins can change chat info
     */
    only_admins_edit_info?: boolean | number;
    /**
     * Only admins can edit pinned message
     */
    only_admins_edit_pin?: boolean | number;
    /**
     * Only admins can invite users to this chat
     */
    only_admins_invite?: boolean | number;
    /**
     * Only admins can kick users from this chat
     */
    only_admins_kick?: boolean | number;
    [key: string]: any;
}

export interface MessagesConversation {
    /**
     * ID of the last message in conversation
     */
    last_message_id: number;
    /**
     * Last message user have read
     */
    in_read: number;
    /**
     * Last outcoming message have been read by the opponent
     */
    out_read: number;
    /**
     * Unread messages number
     */
    unread_count?: number;
    /**
     * Is this conversation uread
     */
    is_marked_unread?: boolean | number;
    /**
     * Message id of message with mention
     */
    mentions?: number[];
    [key: string]: any;
    important?: boolean | number;
    unanswered?: boolean | number;
    special_service_type?: "business_notify";
}

export interface MessagesConversationMember {
    /**
     * Is it possible for user to kick this member
     */
    can_kick?: boolean | number;
    /**
     * Message request date
     */
    request_date?: number;
    [key: string]: any;
    invited_by?: number;
    is_admin?: boolean | number;
    is_owner?: boolean | number;
    is_message_request?: boolean | number;
    join_date?: number;
    member_id: number;
}

export interface MessagesConversationPeer {
    [key: string]: any;
    id: number;
    local_id?: number;
}

export type MessagesConversationPeerType = "chat" | "email" | "user" | "group";

export interface MessagesConversationWithMessage {
    [key: string]: any;
}

export interface MessagesForeignMessage {
    /**
     * Conversation message ID
     */
    conversation_message_id?: number;
    /**
     * Date when the message was created
     */
    date: number;
    /**
     * Message author's ID
     */
    from_id: number;
    /**
     * Message ID
     */
    id?: number;
    /**
     * Peer ID
     */
    peer_id?: number;
    /**
     * Message text
     */
    text: string;
    /**
     * Date when the message has been updated in Unixtime
     */
    update_time?: number;
    /**
     * Was the audio message inside already listened by you
     */
    was_listened?: boolean | number;
    /**
     * Additional data sent along with message for developer convenience
     */
    payload?: string;
    [key: string]: any;
    attachments?: MessagesMessageAttachment[];
    fwd_messages?: MessagesForeignMessage[];
}

export interface MessagesGraffiti {
    /**
     * Access key for graffiti
     */
    access_key?: string;
    /**
     * Graffiti height
     */
    height: number;
    /**
     * Graffiti ID
     */
    id: number;
    /**
     * Graffiti owner ID
     */
    owner_id: number;
    /**
     * Graffiti URL
     */
    url: string;
    /**
     * Graffiti width
     */
    width: number;
    [key: string]: any;
}

export interface MessagesHistoryAttachment {
    /**
     * Message ID
     */
    message_id: number;
    /**
     * Message author's ID
     */
    from_id: number;
    [key: string]: any;
}

export interface MessagesHistoryMessageAttachment {
    [key: string]: any;
}

export type MessagesHistoryMessageAttachmentType = "photo" | "video" | "audio" | "doc" | "link" | "market" | "wall" | "share" | "graffiti" | "audio_message";

export interface MessagesKeyboard {
    /**
     * Community or bot, which set this keyboard
     */
    author_id?: number;
    /**
     * Should this keyboard disappear on first use
     */
    one_time: boolean | number;
    [key: string]: any;
    buttons: MessagesKeyboardButton[][];
    inline?: boolean | number;
}

export interface MessagesKeyboardButton {
    /**
     * Button color
     */
    color?: "default" | "positive" | "negative" | "primary";
    [key: string]: any;
}

/*Description of the action, that should be performed on button click*/
export interface MessagesKeyboardButtonAction {
    /**
     * Fragment value in app link like vk.com/app{app_id}_-654321#hash
     */
    app_id?: number;
    /**
     * Fragment value in app link like vk.com/app123456_-654321#{hash}
     */
    hash?: string;
    /**
     * Label for button
     */
    label?: string;
    /**
     * link for button
     */
    link?: string;
    /**
     * Fragment value in app link like vk.com/app123456_{owner_id}#hash
     */
    owner_id?: number;
    /**
     * Additional data sent along with message for developer convenience
     */
    payload?: string;
    [key: string]: any;
}

export interface MessagesLastActivity {
    /**
     * Time when user was online in Unixtime
     */
    time: number;
    [key: string]: any;
}

export interface MessagesLongpollMessages {
    /**
     * Total number
     */
    count?: number;
    [key: string]: any;
    items?: MessagesMessage[];
}

export interface MessagesLongpollParams {
    /**
     * Key
     */
    key?: string;
    /**
     * Persistent timestamp
     */
    pts?: number;
    /**
     * Server URL
     */
    server?: string;
    /**
     * Timestamp
     */
    ts?: string;
    [key: string]: any;
}

export interface MessagesMessage {
    /**
     * Only for messages from community. Contains user ID of community admin, who sent this message.
     */
    admin_author_id?: number;
    /**
     * Unique auto-incremented number for all messages with this peer
     */
    conversation_message_id?: number;
    /**
     * Date when the message has been sent in Unixtime
     */
    date: number;
    /**
     * Message author's ID
     */
    from_id: number;
    /**
     * Message ID
     */
    id: number;
    /**
     * Is it an important message
     */
    important?: boolean | number;
    /**
     * this message is cropped for bot
     */
    is_cropped?: boolean | number;
    /**
     * Members number
     */
    members_count?: number;
    /**
     * Peer ID
     */
    peer_id: number;
    /**
     * ID used for sending messages. It returned only for outgoing messages
     */
    random_id?: number;
    /**
     * Message text
     */
    text: string;
    /**
     * Date when the message has been updated in Unixtime
     */
    update_time?: number;
    /**
     * Was the audio message inside already listened by you
     */
    was_listened?: boolean | number;
    /**
     * Date when the message has been pinned in Unixtime
     */
    pinned_at?: number;
    [key: string]: any;
    attachments?: MessagesMessageAttachment[];
    fwd_messages?: MessagesForeignMessage[];
    is_hidden?: boolean | number;
    payload?: string;
    ref?: string;
    ref_source?: string;
}

export interface MessagesMessageAction {
    /**
     * Message ID
     */
    conversation_message_id?: number;
    /**
     * Email address for chat_invite_user or chat_kick_user actions
     */
    email?: string;
    /**
     * User or email peer ID
     */
    member_id?: number;
    /**
     * Message body of related message
     */
    message?: string;
    /**
     * New chat title for chat_create and chat_title_update actions
     */
    text?: string;
    [key: string]: any;
}

export interface MessagesMessageActionPhoto {
    /**
     * URL of the preview image with 100px in width
     */
    photo_100: string;
    /**
     * URL of the preview image with 200px in width
     */
    photo_200: string;
    /**
     * URL of the preview image with 50px in width
     */
    photo_50: string;
    [key: string]: any;
}

export type MessagesMessageActionStatus = "chat_photo_update" | "chat_photo_remove" | "chat_create" | "chat_title_update" | "chat_invite_user" | "chat_kick_user" | "chat_pin_message" | "chat_unpin_message" | "chat_invite_user_by_link";

export interface MessagesMessageAttachment {
    [key: string]: any;
}

export type MessagesMessageAttachmentType = "photo" | "audio" | "video" | "doc" | "link" | "market" | "market_album" | "gift" | "sticker" | "wall" | "wall_reply" | "article" | "graffiti" | "audio_message";

export interface MessagesMessageRequestData {
    /**
     * Status of message request
     */
    status?: string;
    /**
     * Message request sender id
     */
    inviter_id?: number;
    /**
     * Message request date
     */
    request_date?: number;
    [key: string]: any;
}

export interface MessagesPinnedMessage {
    /**
     * Unique auto-incremented number for all messages with this peer
     */
    conversation_message_id?: number;
    /**
     * Date when the message has been sent in Unixtime
     */
    date: number;
    /**
     * Message author's ID
     */
    from_id: number;
    /**
     * Message ID
     */
    id: number;
    /**
     * Peer ID
     */
    peer_id: number;
    /**
     * Message text
     */
    text: string;
    [key: string]: any;
    attachments?: MessagesMessageAttachment[];
    fwd_messages?: MessagesForeignMessage[];
}

export type MessagesTemplateActionTypeNames = "text" | "start" | "location" | "vkpay" | "open_app" | "open_photo" | "open_link";

export interface MessagesUserXtrInvitedBy1 {
    /**
     * ID of the inviter
     */
    invited_by?: number;
}

export type MessagesUserXtrInvitedBy = UsersUserXtrType & MessagesUserXtrInvitedBy1;

export type NewsfeedCommentsFilters = "post" | "photo" | "video" | "topic" | "note";

export interface NewsfeedEventActivity {
    /**
     * address of event
     */
    address?: string;
    /**
     * text of attach
     */
    button_text: string;
    /**
     * text of attach
     */
    text: string;
    /**
     * event start time
     */
    time?: number;
    [key: string]: any;
    friends: number[];
}

export type NewsfeedFilters = "post" | "photo" | "photo_tag" | "wall_photo" | "friend" | "recommended_groups" | "note" | "audio" | "video" | "audio_playlist" | "clip";

export type NewsfeedIgnoreItemType = "wall" | "tag" | "profilephoto" | "video" | "photo" | "audio";

export interface NewsfeedItemAudio1 {
    /**
     * Post ID
     */
    post_id?: number;
    audio?: NewsfeedItemAudioAudio;
}

export type NewsfeedItemAudio = NewsfeedItemBase & NewsfeedItemAudio1;

export interface NewsfeedItemAudioAudio {
    /**
     * Audios number
     */
    count?: number;
    [key: string]: any;
    items?: AudioAudio[];
}

export interface NewsfeedItemBase {
    /**
     * Item source ID
     */
    source_id: number;
    /**
     * Date when item has been added in Unixtime
     */
    date: number;
    [key: string]: any;
}

export interface NewsfeedItemDigest1 {
    /**
     * id of feed in digest
     */
    feed_id?: string;
    /**
     * type of digest
     */
    template?: "list" | "grid";
    button_text?: string;
    items?: WallWallpost[];
    main_post_ids?: string[];
    title?: string;
    track_code?: string;
}

export type NewsfeedItemDigest = NewsfeedItemBase & NewsfeedItemDigest1;

export interface NewsfeedItemFriend1 {
    friends?: NewsfeedItemFriendFriends;
}

export type NewsfeedItemFriend = NewsfeedItemBase & NewsfeedItemFriend1;

export interface NewsfeedItemFriendFriends {
    /**
     * Number of friends has been added
     */
    count?: number;
    [key: string]: any;
    items?: BaseUserId[];
}

export interface NewsfeedItemHolidayRecommendationsBlockHeader {
    /**
     * Title of the header
     */
    title?: string;
    /**
     * Subtitle of the header
     */
    subtitle?: string;
    [key: string]: any;
    image?: BaseImage[];
}

export interface NewsfeedItemNote1 {
    notes?: NewsfeedItemNoteNotes;
}

export type NewsfeedItemNote = NewsfeedItemBase & NewsfeedItemNote1;

export interface NewsfeedItemNoteNotes {
    /**
     * Notes number
     */
    count?: number;
    [key: string]: any;
    items?: NewsfeedNewsfeedNote[];
}

export interface NewsfeedItemPhoto1 {
    /**
     * Post ID
     */
    post_id?: number;
    photos?: NewsfeedItemPhotoPhotos;
}

export type NewsfeedItemPhoto = WallCarouselBase & NewsfeedItemBase & NewsfeedItemPhoto1;

export interface NewsfeedItemPhotoPhotos {
    /**
     * Photos number
     */
    count?: number;
    [key: string]: any;
    items?: NewsfeedNewsfeedPhoto[];
}

export interface NewsfeedItemPhotoTag1 {
    /**
     * Post ID
     */
    post_id?: number;
    photo_tags?: NewsfeedItemPhotoTagPhotoTags;
}

export type NewsfeedItemPhotoTag = WallCarouselBase & NewsfeedItemBase & NewsfeedItemPhotoTag1;

export interface NewsfeedItemPhotoTagPhotoTags {
    /**
     * Tags number
     */
    count?: number;
    [key: string]: any;
    items?: NewsfeedNewsfeedPhoto[];
}

export interface NewsfeedItemPromoButton1 {
    text?: string;
    title?: string;
    action?: NewsfeedItemPromoButtonAction;
    images?: NewsfeedItemPromoButtonImage[];
    track_code?: string;
}

export type NewsfeedItemPromoButton = NewsfeedItemBase & NewsfeedItemPromoButton1;

export interface NewsfeedItemPromoButtonAction {
    [key: string]: any;
    url?: string;
    type?: string;
    target?: string;
}

export interface NewsfeedItemPromoButtonImage {
    [key: string]: any;
    width?: number;
    height?: number;
    url?: string;
}

export interface NewsfeedItemTopic1 {
    /**
     * Topic post ID
     */
    post_id?: number;
    /**
     * Post text
     */
    text?: string;
    comments?: BaseCommentsInfo;
    likes?: BaseLikesInfo;
}

export type NewsfeedItemTopic = NewsfeedItemBase & NewsfeedItemTopic1;

export interface NewsfeedItemVideo1 {
    video?: NewsfeedItemVideoVideo;
}

export type NewsfeedItemVideo = WallCarouselBase & NewsfeedItemBase & NewsfeedItemVideo1;

export interface NewsfeedItemVideoVideo {
    /**
     * Tags number
     */
    count?: number;
    [key: string]: any;
    items?: VideoVideo[];
}

export interface NewsfeedItemWallpost1 {
    /**
     * Information whether the post in favorites list
     */
    is_favorite?: boolean | number;
    /**
     * Post ID
     */
    post_id?: number;
    /**
     * Post signer ID
     */
    signer_id?: number;
    /**
     * Post text
     */
    text?: string;
    /**
     * Preview length control parameter
     */
    short_text_rate?: number;
    activity?: NewsfeedEventActivity;
    attachments?: WallWallpostAttachment[];
    comments?: BaseCommentsInfo;
    copy_history?: WallWallpost[];
    feedback?: NewsfeedItemWallpostFeedback;
    geo?: BaseGeo;
    likes?: BaseLikesInfo;
    marked_as_ads?: BaseBoolInt;
    post_source?: WallPostSource;
    post_type?: NewsfeedItemWallpostType;
    reposts?: BaseRepostsInfo;
    views?: WallViews;
}

export type NewsfeedItemWallpost = WallCarouselBase & NewsfeedItemBase & NewsfeedItemWallpost1;

export interface NewsfeedItemWallpostFeedback {
    [key: string]: any;
    question: string;
    answers?: NewsfeedItemWallpostFeedbackAnswer[];
    stars_count?: number;
    gratitude?: string;
}

export interface NewsfeedItemWallpostFeedbackAnswer {
    [key: string]: any;
    title: string;
    id: string;
}

export type NewsfeedItemWallpostFeedbackType = "buttons" | "stars";

export type NewsfeedItemWallpostType = "post" | "copy" | "reply";

export interface NewsfeedList {
    /**
     * List ID
     */
    id: number;
    /**
     * List title
     */
    title: string;
    [key: string]: any;
}

export interface NewsfeedListFull1 {
    /**
     * Users and communities IDs
     */
    source_ids?: number[];
    no_reposts?: BaseBoolInt;
}

export type NewsfeedListFull = NewsfeedList & NewsfeedListFull1;

export type NewsfeedNewsfeedItem = any;

export type NewsfeedNewsfeedItemType = "post" | "photo" | "photo_tag" | "wall_photo" | "friend" | "note" | "audio" | "video" | "topic" | "digest" | "stories" | "tags_suggestions";

export interface NewsfeedNewsfeedNote {
    /**
     * Comments Number
     */
    comments?: number;
    /**
     * Note ID
     */
    id?: number;
    /**
     * integer
     */
    owner_id?: number;
    /**
     * Note title
     */
    title?: string;
    [key: string]: any;
}

export interface NewsfeedNewsfeedPhoto1 {
    likes?: BaseLikes;
    comments?: BaseObjectCount;
    can_repost?: BaseBoolInt;
}

export type NewsfeedNewsfeedPhoto = PhotosPhoto & NewsfeedNewsfeedPhoto1;

export interface NotesNote {
    /**
     * Comments number
     */
    comments: number;
    /**
     * Date when the note has been created in Unixtime
     */
    date: number;
    /**
     * Note ID
     */
    id: number;
    /**
     * Note owner's ID
     */
    owner_id: number;
    /**
     * Note text
     */
    text?: string;
    /**
     * Note text in wiki format
     */
    text_wiki?: string;
    /**
     * Note title
     */
    title: string;
    /**
     * URL of the page with note preview
     */
    view_url: string;
    [key: string]: any;
    read_comments?: number;
}

export interface NotesNoteComment {
    /**
     * Date when the comment has beed added in Unixtime
     */
    date: number;
    /**
     * Comment ID
     */
    id: number;
    /**
     * Comment text
     */
    message: string;
    /**
     * Note ID
     */
    nid: number;
    /**
     * Note ID
     */
    oid: number;
    /**
     * ID of replied comment
     */
    reply_to?: number;
    /**
     * Comment author's ID
     */
    uid: number;
    [key: string]: any;
}

export interface NotificationsFeedback {
    /**
     * Reply author's ID
     */
    from_id?: number;
    /**
     * Item ID
     */
    id?: number;
    /**
     * Reply text
     */
    text?: string;
    /**
     * Wall owner's ID
     */
    to_id?: number;
    [key: string]: any;
    attachments?: WallWallpostAttachment[];
}

export interface NotificationsNotification {
    /**
     * Date when the event has been occurred
     */
    date?: number;
    /**
     * Notification type
     */
    type?: string;
    [key: string]: any;
}

export type NotificationsNotificationItem = any;

export type NotificationsNotificationParent = WallWallpostToId & PhotosPhoto & BoardTopic & VideoVideo & NotificationsNotificationsComment;

export interface NotificationsNotificationsComment {
    /**
     * Date when the comment has been added in Unixtime
     */
    date?: number;
    /**
     * Comment ID
     */
    id?: number;
    /**
     * Author ID
     */
    owner_id?: number;
    /**
     * Comment text
     */
    text?: string;
    [key: string]: any;
}

export interface NotificationsReply {
    /**
     * Date when the reply has been created in Unixtime
     */
    date?: number;
    /**
     * Reply ID
     */
    id?: number;
    /**
     * Reply text
     */
    text?: number;
    [key: string]: any;
}

export interface NotificationsSendMessageError {
    /**
     * Error code
     */
    code?: 1 | 2 | 3 | 4;
    /**
     * Error description
     */
    description?: string;
    [key: string]: any;
}

export interface NotificationsSendMessageItem {
    /**
     * User ID
     */
    user_id?: number;
    /**
     * Notification status
     */
    status?: boolean | number;
    [key: string]: any;
}

export interface OauthError {
    /**
     * Error type
     */
    error: string;
    /**
     * Error description
     */
    error_description: string;
    /**
     * URI for validation
     */
    redirect_uri?: string;
    [key: string]: any;
}

export interface OrdersAmount {
    /**
     * Currency name
     */
    currency?: string;
    [key: string]: any;
    amounts?: OrdersAmountItem[];
}

export interface OrdersAmountItem {
    /**
     * Votes amount in user's currency
     */
    amount?: number;
    /**
     * Amount description
     */
    description?: string;
    /**
     * Votes number
     */
    votes?: string;
    [key: string]: any;
}

export interface OrdersOrder {
    /**
     * Amount
     */
    amount?: number;
    /**
     * App order ID
     */
    app_order_id?: number;
    /**
     * Cancel transaction ID
     */
    cancel_transaction_id?: number;
    /**
     * Date of creation in Unixtime
     */
    date?: number;
    /**
     * Order ID
     */
    id?: number;
    /**
     * Order item
     */
    item?: string;
    /**
     * Receiver ID
     */
    receiver_id?: number;
    /**
     * Order status
     */
    status?: string;
    /**
     * Transaction ID
     */
    transaction_id?: number;
    /**
     * User ID
     */
    user_id?: number;
    [key: string]: any;
}

export interface OrdersSubscription {
    /**
     * Cancel reason
     */
    cancel_reason?: string;
    /**
     * Date of creation in Unixtime
     */
    create_time: number;
    /**
     * Subscription ID
     */
    id: number;
    /**
     * Subscription order item
     */
    item_id: string;
    /**
     * Date of next bill in Unixtime
     */
    next_bill_time?: number;
    /**
     * Pending cancel state
     */
    pending_cancel?: boolean | number;
    /**
     * Subscription period
     */
    period: number;
    /**
     * Date of last period start in Unixtime
     */
    period_start_time: number;
    /**
     * Subscription price
     */
    price: number;
    /**
     * Subscription status
     */
    status: string;
    /**
     * Is test subscription
     */
    test_mode?: boolean | number;
    /**
     * Date of trial expire in Unixtime
     */
    trial_expire_time?: number;
    /**
     * Date of last change in Unixtime
     */
    update_time: number;
    [key: string]: any;
}

export interface OwnerState {
    /**
     * wiki text to describe user state
     */
    description?: string;
    [key: string]: any;
    state?: 1 | 2 | 3 | 4;
}

export type PagesPrivacySettings = 0 | 1 | 2;

export interface PagesWikipage {
    /**
     * Page creator ID
     */
    creator_id?: number;
    /**
     * Page creator name
     */
    creator_name?: number;
    /**
     * Last editor ID
     */
    editor_id?: number;
    /**
     * Last editor name
     */
    editor_name?: string;
    /**
     * Community ID
     */
    group_id: number;
    /**
     * Page ID
     */
    id: number;
    /**
     * Page title
     */
    title: string;
    /**
     * Views number
     */
    views: number;
    [key: string]: any;
}

export interface PagesWikipageFull {
    /**
     * Date when the page has been created in Unixtime
     */
    created: number;
    /**
     * Page creator ID
     */
    creator_id?: number;
    /**
     * Date when the page has been edited in Unixtime
     */
    edited: number;
    /**
     * Last editor ID
     */
    editor_id?: number;
    /**
     * Community ID
     */
    group_id: number;
    /**
     * Page content, HTML
     */
    html?: string;
    /**
     * Page ID
     */
    id: number;
    /**
     * Page content, wiki
     */
    source?: string;
    /**
     * Page title
     */
    title: string;
    /**
     * URL of the page preview
     */
    view_url: string;
    /**
     * Views number
     */
    views: number;
    [key: string]: any;
}

export interface PagesWikipageHistory {
    /**
     * Version ID
     */
    id: number;
    /**
     * Page size in bytes
     */
    length: number;
    /**
     * Date when the page has been edited in Unixtime
     */
    date: number;
    /**
     * Last editor ID
     */
    editor_id: number;
    /**
     * Last editor name
     */
    editor_name: string;
    [key: string]: any;
}

export interface PhotosCommentXtrPid {
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number;
    /**
     * Author ID
     */
    from_id: number;
    /**
     * Comment ID
     */
    id: number;
    /**
     * Photo ID
     */
    pid: number;
    /**
     * Replied comment ID
     */
    reply_to_comment?: number;
    /**
     * Replied user ID
     */
    reply_to_user?: number;
    /**
     * Comment text
     */
    text: string;
    [key: string]: any;
    attachments?: WallCommentAttachment[];
    parents_stack?: number[];
}

export interface PhotosImage {
    /**
     * Height of the photo in px.
     */
    height?: number;
    /**
     * Photo URL.
     */
    url?: string;
    /**
     * Width of the photo in px.
     */
    width?: number;
    [key: string]: any;
}

export type PhotosImageType = "s" | "m" | "x" | "l" | "o" | "p" | "q" | "r" | "y" | "z" | "w";

export interface PhotosMarketAlbumUploadResponse {
    /**
     * Community ID
     */
    gid?: number;
    /**
     * Uploading hash
     */
    hash?: string;
    /**
     * Uploaded photo data
     */
    photo?: string;
    /**
     * Upload server number
     */
    server?: number;
    [key: string]: any;
}

export interface PhotosMarketUploadResponse {
    /**
     * Crop data
     */
    crop_data?: string;
    /**
     * Crop hash
     */
    crop_hash?: string;
    /**
     * Community ID
     */
    group_id?: number;
    /**
     * Uploading hash
     */
    hash?: string;
    /**
     * Uploaded photo data
     */
    photo?: string;
    /**
     * Upload server number
     */
    server?: number;
    [key: string]: any;
}

export interface PhotosMessageUploadResponse {
    /**
     * Uploading hash
     */
    hash?: string;
    /**
     * Uploaded photo data
     */
    photo?: string;
    /**
     * Upload server number
     */
    server?: number;
    [key: string]: any;
}

export interface PhotosOwnerUploadResponse {
    /**
     * Uploading hash
     */
    hash?: string;
    /**
     * Uploaded photo data
     */
    photo?: string;
    /**
     * Upload server number
     */
    server?: number;
    [key: string]: any;
}

export interface PhotosPhoto {
    /**
     * Access key for the photo
     */
    access_key?: string;
    /**
     * Album ID
     */
    album_id: number;
    /**
     * Date when uploaded
     */
    date: number;
    /**
     * Original photo height
     */
    height?: number;
    /**
     * Photo ID
     */
    id: number;
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    long?: number;
    /**
     * Photo owner's ID
     */
    owner_id: number;
    /**
     * URL of image with 2560 px width
     */
    photo_256?: string;
    /**
     * Post ID
     */
    post_id?: number;
    /**
     * Photo caption
     */
    text?: string;
    /**
     * ID of the user who have uploaded the photo
     */
    user_id?: number;
    /**
     * Original photo width
     */
    width?: number;
    /**
     * Whether photo has attached tag links
     */
    has_tags: boolean | number;
    [key: string]: any;
    images?: PhotosImage[];
    place?: string;
    sizes?: PhotosPhotoSizes[];
}

export interface PhotosPhotoAlbum {
    /**
     * Date when the album has been created in Unixtime
     */
    created: number;
    /**
     * Photo album description
     */
    description?: string;
    /**
     * Photo album ID
     */
    id: number;
    /**
     * Album owner's ID
     */
    owner_id: number;
    /**
     * Photos number
     */
    size: number;
    /**
     * Photo album title
     */
    title: string;
    /**
     * Date when the album has been updated last time in Unixtime
     */
    updated: number;
    [key: string]: any;
}

export interface PhotosPhotoAlbumFull {
    /**
     * Date when the album has been created in Unixtime
     */
    created: number;
    /**
     * Photo album description
     */
    description?: string;
    /**
     * Photo album ID
     */
    id: number;
    /**
     * Album owner's ID
     */
    owner_id: number;
    /**
     * Photos number
     */
    size: number;
    /**
     * Thumb photo ID
     */
    thumb_id?: number;
    /**
     * URL of the thumb image
     */
    thumb_src?: string;
    /**
     * Photo album title
     */
    title: string;
    /**
     * Date when the album has been updated last time in Unixtime
     */
    updated: number;
    [key: string]: any;
    sizes?: PhotosPhotoSizes[];
}

export interface PhotosPhotoFull {
    /**
     * Access key for the photo
     */
    access_key?: string;
    /**
     * Album ID
     */
    album_id: number;
    /**
     * Date when uploaded
     */
    date: number;
    /**
     * Original photo height
     */
    height?: number;
    /**
     * Photo ID
     */
    id: number;
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    long?: number;
    /**
     * Photo owner's ID
     */
    owner_id: number;
    /**
     * Post ID
     */
    post_id?: number;
    /**
     * Photo caption
     */
    text?: string;
    /**
     * ID of the user who have uploaded the photo
     */
    user_id?: number;
    /**
     * Original photo width
     */
    width?: number;
    [key: string]: any;
    images?: PhotosImage[];
}

export interface PhotosPhotoFullXtrRealOffset {
    /**
     * Access key for the photo
     */
    access_key?: string;
    /**
     * Album ID
     */
    album_id: number;
    /**
     * Date when uploaded
     */
    date: number;
    /**
     * Original photo height
     */
    height?: number;
    /**
     * Photo ID
     */
    id: number;
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    long?: number;
    /**
     * Photo owner's ID
     */
    owner_id: number;
    /**
     * URL of image with 1280 px width
     */
    photo_1280?: string;
    /**
     * URL of image with 130 px width
     */
    photo_130?: string;
    /**
     * URL of image with 2560 px width
     */
    photo_2560?: string;
    /**
     * URL of image with 604 px width
     */
    photo_604?: string;
    /**
     * URL of image with 75 px width
     */
    photo_75?: string;
    /**
     * URL of image with 807 px width
     */
    photo_807?: string;
    /**
     * Post ID
     */
    post_id?: number;
    /**
     * Real position of the photo
     */
    real_offset?: number;
    /**
     * Photo caption
     */
    text?: string;
    /**
     * ID of the user who have uploaded the photo
     */
    user_id?: number;
    /**
     * Original photo width
     */
    width?: number;
    [key: string]: any;
    sizes?: PhotosPhotoSizes[];
}

export interface PhotosPhotoSizes {
    /**
     * Height in px
     */
    height: number;
    /**
     * URL of the image
     */
    url: string;
    /**
     * URL of the image
     */
    src?: string;
    /**
     * Width in px
     */
    width: number;
    [key: string]: any;
}

export type PhotosPhotoSizesType = "s" | "m" | "x" | "o" | "p" | "q" | "r" | "k" | "l" | "y" | "z" | "c" | "w";

export interface PhotosPhotoTag {
    /**
     * Date when tag has been added in Unixtime
     */
    date: number;
    /**
     * Tag ID
     */
    id: number;
    /**
     * ID of the tag creator
     */
    placer_id: number;
    /**
     * Tag description
     */
    tagged_name: string;
    /**
     * Tagged user ID
     */
    user_id: number;
    /**
     * Coordinate X of the left upper corner
     */
    x: number;
    /**
     * Coordinate X of the right lower corner
     */
    x2: number;
    /**
     * Coordinate Y of the left upper corner
     */
    y: number;
    /**
     * Coordinate Y of the right lower corner
     */
    y2: number;
    [key: string]: any;
}

export interface PhotosPhotoUpload {
    /**
     * Album ID
     */
    album_id: number;
    /**
     * URL to upload photo
     */
    upload_url: string;
    /**
     * Fallback URL if upload_url returned error
     */
    fallback_upload_url?: string;
    /**
     * User ID
     */
    user_id: number;
    /**
     * Group ID
     */
    group_id?: number;
    [key: string]: any;
}

export interface PhotosPhotoUploadResponse {
    /**
     * Album ID
     */
    aid?: number;
    /**
     * Uploading hash
     */
    hash?: string;
    /**
     * Uploaded photos data
     */
    photos_list?: string;
    /**
     * Upload server number
     */
    server?: number;
    [key: string]: any;
}

export interface PhotosPhotoXtrRealOffset {
    /**
     * Access key for the photo
     */
    access_key?: string;
    /**
     * Album ID
     */
    album_id: number;
    /**
     * Date when uploaded
     */
    date: number;
    /**
     * Original photo height
     */
    height?: number;
    /**
     * Photo ID
     */
    id: number;
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    long?: number;
    /**
     * Photo owner's ID
     */
    owner_id: number;
    /**
     * URL of image with 1280 px width
     */
    photo_1280?: string;
    /**
     * URL of image with 130 px width
     */
    photo_130?: string;
    /**
     * URL of image with 2560 px width
     */
    photo_2560?: string;
    /**
     * URL of image with 604 px width
     */
    photo_604?: string;
    /**
     * URL of image with 75 px width
     */
    photo_75?: string;
    /**
     * URL of image with 807 px width
     */
    photo_807?: string;
    /**
     * Post ID
     */
    post_id?: number;
    /**
     * Real position of the photo
     */
    real_offset?: number;
    /**
     * Photo caption
     */
    text?: string;
    /**
     * ID of the user who have uploaded the photo
     */
    user_id?: number;
    /**
     * Original photo width
     */
    width?: number;
    [key: string]: any;
    sizes?: PhotosPhotoSizes[];
}

export interface PhotosPhotoXtrTagInfo {
    /**
     * Access key for the photo
     */
    access_key?: string;
    /**
     * Album ID
     */
    album_id: number;
    /**
     * Date when uploaded
     */
    date: number;
    /**
     * Original photo height
     */
    height?: number;
    /**
     * Photo ID
     */
    id: number;
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    long?: number;
    /**
     * Photo owner's ID
     */
    owner_id: number;
    /**
     * URL of image with 1280 px width
     */
    photo_1280?: string;
    /**
     * URL of image with 130 px width
     */
    photo_130?: string;
    /**
     * URL of image with 2560 px width
     */
    photo_2560?: string;
    /**
     * URL of image with 604 px width
     */
    photo_604?: string;
    /**
     * URL of image with 75 px width
     */
    photo_75?: string;
    /**
     * URL of image with 807 px width
     */
    photo_807?: string;
    /**
     * ID of the tag creator
     */
    placer_id?: number;
    /**
     * Post ID
     */
    post_id?: number;
    /**
     * Date when tag has been added in Unixtime
     */
    tag_created?: number;
    /**
     * Tag ID
     */
    tag_id?: number;
    /**
     * Photo caption
     */
    text?: string;
    /**
     * ID of the user who have uploaded the photo
     */
    user_id?: number;
    /**
     * Original photo width
     */
    width?: number;
    [key: string]: any;
    sizes?: PhotosPhotoSizes[];
}

export interface PhotosTagsSuggestionItem {
    [key: string]: any;
    title?: string;
    type?: string;
    buttons?: PhotosTagsSuggestionItemButton[];
    tags?: PhotosPhotoTag[];
}

export interface PhotosTagsSuggestionItemButton {
    [key: string]: any;
    title?: string;
    action?: "confirm" | "decline" | "show_tags";
    style?: "primary" | "secondary";
}

export interface PhotosWallUploadResponse {
    /**
     * Uploading hash
     */
    hash?: string;
    /**
     * Uploaded photo data
     */
    photo?: string;
    /**
     * Upload server number
     */
    server?: number;
    [key: string]: any;
}

export interface PollsAnswer {
    /**
     * Answer ID
     */
    id: number;
    /**
     * Answer rate in percents
     */
    rate: number;
    /**
     * Answer text
     */
    text: string;
    /**
     * Votes number
     */
    votes: number;
    [key: string]: any;
}

export interface PollsBackground {
    /**
     * Gradient angle with 0 on positive X axis
     */
    angle?: number;
    /**
     * Hex color code without #
     */
    color?: string;
    /**
     * Original height of pattern tile
     */
    height?: number;
    /**
     * Original with of pattern tile
     */
    width?: number;
    [key: string]: any;
    id?: number;
    name?: string;
    images?: BaseImage[];
    points?: BaseGradientPoint[];
    type?: "gradient" | "tile";
}

export interface PollsFriend {
    [key: string]: any;
    id: number;
}

export interface PollsPoll {
    /**
     * Information whether the poll with multiple choices
     */
    multiple: boolean | number;
    /**
     * Current user's answer ID
     */
    answer_id?: number;
    /**
     * Date when poll has been created in Unixtime
     */
    created: number;
    /**
     * Poll ID
     */
    id: number;
    /**
     * Poll owner's ID
     */
    owner_id: number;
    /**
     * Poll author's ID
     */
    author_id?: number;
    /**
     * Poll question
     */
    question: string;
    /**
     * Votes number
     */
    votes: number;
    [key: string]: any;
    friends?: PollsFriend[];
    end_date: number;
    answer_ids?: number[];
    closed: boolean | number;
    is_board: boolean | number;
    can_edit: boolean | number;
    can_vote: boolean | number;
    can_report: boolean | number;
    can_share: boolean | number;
    answers: PollsAnswer[];
    disable_unvote: boolean | number;
}

export type PollsPollAnonymous = boolean | number;

export interface PollsVoters {
    /**
     * Answer ID
     */
    answer_id?: number;
    [key: string]: any;
}

export interface PollsVotersUsers {
    /**
     * Votes number
     */
    count?: number;
    /**
     * User ID
     */
    items?: number[];
    [key: string]: any;
}

export interface PrettyCardsPrettyCard {
    /**
     * Button key
     */
    button?: string;
    /**
     * Button text in current language
     */
    button_text?: string;
    /**
     * Card ID (long int returned as string)
     */
    card_id: string;
    /**
     * Link URL
     */
    link_url: string;
    /**
     * Photo ID (format "<owner_id>_<media_id>")
     */
    photo: string;
    /**
     * Price if set (decimal number returned as string)
     */
    price?: string;
    /**
     * Old price if set (decimal number returned as string)
     */
    price_old?: string;
    /**
     * Title
     */
    title: string;
    [key: string]: any;
    images?: BaseImage[];
}

export interface SearchHint {
    /**
     * Object description
     */
    description: string;
    [key: string]: any;
}

export type SearchHintSection = "groups" | "events" | "publics" | "correspondents" | "people" | "friends" | "mutual_friends";

export type SearchHintType = "group" | "profile" | "vk_app" | "app" | "html5_game";

export interface SecureLevel {
    /**
     * Level
     */
    level?: number;
    /**
     * User ID
     */
    uid?: number;
    [key: string]: any;
}

export interface SecureSmsNotification {
    /**
     * Application ID
     */
    app_id?: string;
    /**
     * Date when message has been sent in Unixtime
     */
    date?: string;
    /**
     * Notification ID
     */
    id?: string;
    /**
     * Messsage text
     */
    message?: string;
    /**
     * User ID
     */
    user_id?: string;
    [key: string]: any;
}

export interface SecureTokenChecked {
    /**
     * Date when access_token has been generated in Unixtime
     */
    date?: number;
    /**
     * Date when access_token will expire in Unixtime
     */
    expire?: number;
    /**
     * Returns if successfully processed
     */
    success?: number;
    /**
     * User ID
     */
    user_id?: number;
    [key: string]: any;
}

export interface SecureTransaction {
    /**
     * Transaction date in Unixtime
     */
    date?: number;
    /**
     * Transaction ID
     */
    id?: number;
    /**
     * From ID
     */
    uid_from?: number;
    /**
     * To ID
     */
    uid_to?: number;
    /**
     * Votes number
     */
    votes?: number;
    [key: string]: any;
}

/*Activity stats*/
export interface StatsActivity {
    /**
     * Comments number
     */
    comments?: number;
    /**
     * Reposts number
     */
    copies?: number;
    /**
     * Hidden from news count
     */
    hidden?: number;
    /**
     * Likes number
     */
    likes?: number;
    /**
     * New subscribers count
     */
    subscribed?: number;
    /**
     * Unsubscribed count
     */
    unsubscribed?: number;
    [key: string]: any;
}

export interface StatsCity {
    /**
     * Visitors number
     */
    count?: number;
    /**
     * City name
     */
    name?: string;
    /**
     * City ID
     */
    value?: number;
    [key: string]: any;
}

export interface StatsCountry {
    /**
     * Country code
     */
    code?: string;
    /**
     * Visitors number
     */
    count?: number;
    /**
     * Country name
     */
    name?: string;
    /**
     * Country ID
     */
    value?: number;
    [key: string]: any;
}

export interface StatsPeriod {
    /**
     * Unix timestamp
     */
    period_from?: number;
    /**
     * Unix timestamp
     */
    period_to?: number;
    [key: string]: any;
}

/*Reach stats*/
export interface StatsReach {
    /**
     * Reach count from mobile devices
     */
    mobile_reach?: number;
    /**
     * Reach count
     */
    reach?: number;
    /**
     * Subscribers reach count
     */
    reach_subscribers?: number;
    [key: string]: any;
    age?: StatsSexAge[];
    cities?: StatsCity[];
    countries?: StatsCountry[];
    sex?: StatsSexAge[];
    sex_age?: StatsSexAge[];
}

export interface StatsSexAge {
    /**
     * Visitors number
     */
    count?: number;
    /**
     * Sex/age value
     */
    value: string;
    [key: string]: any;
    reach?: number;
    reach_subscribers?: number;
    count_subscribers?: number;
}

/*Views stats*/
export interface StatsViews {
    /**
     * Number of views from mobile devices
     */
    mobile_views?: number;
    /**
     * Views number
     */
    views?: number;
    /**
     * Visitors number
     */
    visitors?: number;
    [key: string]: any;
    age?: StatsSexAge[];
    cities?: StatsCity[];
    countries?: StatsCountry[];
    sex?: StatsSexAge[];
    sex_age?: StatsSexAge[];
}

export interface StatsWallpostStat {
    /**
     * Hidings number
     */
    hide?: number;
    /**
     * People have joined the group
     */
    join_group?: number;
    /**
     * Link clickthrough
     */
    links?: number;
    /**
     * Subscribers reach
     */
    reach_subscribers?: number;
    /**
     * Total reach
     */
    reach_total?: number;
    /**
     * Reports number
     */
    report?: number;
    /**
     * Clickthrough to community
     */
    to_group?: number;
    /**
     * Unsubscribed members
     */
    unsubscribe?: number;
    [key: string]: any;
    post_id?: number;
    reach_subscribers_count?: number;
    reach_total_count?: number;
    reach_viral?: number;
    reach_ads?: number;
    sex_age?: StatsSexAge[];
}

export interface StatusStatus {
    /**
     * Status text
     */
    text?: string;
    [key: string]: any;
}

export interface StorageValue {
    [key: string]: any;
    key: string;
    value: string;
}

export interface StoriesClickableArea {
    [key: string]: any;
    x?: number;
    y?: number;
}

export interface StoriesClickableSticker {
    /**
     * Clickable sticker ID
     */
    id: number;
    /**
     * Color, hex format
     */
    color?: string;
    /**
     * Sticker ID
     */
    sticker_id?: number;
    /**
     * Sticker pack ID
     */
    sticker_pack_id?: number;
    /**
     * Additional context for app sticker
     */
    app_context?: string;
    /**
     * Whether current user has unread interaction with this app
     */
    has_new_interactions?: boolean | number;
    /**
     * Whether current user allowed broadcast notify from this app
     */
    is_broadcast_notify_allowed?: boolean | number;
    [key: string]: any;
    clickable_area: StoriesClickableArea[];
    hashtag?: string;
    mention?: string;
    tooltip_text?: string;
    owner_id?: number;
    story_id?: number;
    question?: string;
    question_button?: string;
    place_id?: number;
    audio_start_time?: number;
    style?: "transparent" | "blue_gradient" | "red_gradient" | "underline" | "blue" | "green" | "white" | "question_reply" | "light" | "impressive";
    type: "hashtag" | "mention" | "link" | "question" | "place" | "market_item" | "music" | "story_reply" | "owner" | "post" | "poll" | "sticker" | "app";
    subtype?: "market_item" | "aliexpress_product";
    post_owner_id?: number;
    post_id?: number;
}

export interface StoriesClickableStickers {
    [key: string]: any;
    clickable_stickers: StoriesClickableSticker[];
    original_height: number;
    original_width: number;
}

export interface StoriesFeedItem {
    /**
     * Type of Feed Item
     */
    type: "promo_stories" | "stories" | "live_active" | "live_finished" | "community_grouped_stories" | "app_grouped_stories" | "birthday";
    [key: string]: any;
    stories?: StoriesStory[];
    grouped?: StoriesFeedItem[];
}

/*Additional data for promo stories*/
export interface StoriesPromoBlock {
    /**
     * Promo story title
     */
    name: string;
    /**
     * RL of square photo of the story with 50 pixels in width
     */
    photo_50: string;
    /**
     * RL of square photo of the story with 100 pixels in width
     */
    photo_100: string;
    /**
     * Hide animation for promo story
     */
    not_animated: boolean | number;
    [key: string]: any;
}

export interface StoriesReplies {
    /**
     * Replies number.
     */
    count: number;
    /**
     * New replies number.
     */
    new?: number;
    [key: string]: any;
}

export interface StoriesStatLine {
    [key: string]: any;
    name: string;
    counter?: number;
    is_unavailable?: boolean | number;
}

export interface StoriesStory {
    /**
     * Access key for private object.
     */
    access_key?: string;
    /**
     * Information whether current user can like the story.
     */
    can_like?: boolean | number;
    /**
     * Date when story has been added in Unixtime.
     */
    date?: number;
    /**
     * Story expiration time. Unixtime.
     */
    expires_at?: number;
    /**
     * Story ID.
     */
    id: number;
    /**
     * Information whether the story is deleted (false - no, true - yes).
     */
    is_deleted?: boolean | number;
    /**
     * Information whether the story is expired (false - no, true - yes).
     */
    is_expired?: boolean | number;
    /**
     * Story owner's ID.
     */
    owner_id: number;
    /**
     * Access key for private object.
     */
    parent_story_access_key?: string;
    /**
     * Parent story ID.
     */
    parent_story_id?: number;
    /**
     * Parent story owner's ID.
     */
    parent_story_owner_id?: number;
    /**
     * Views number.
     */
    views?: number;
    [key: string]: any;
    narratives_count?: number;
    first_narrative_title?: string;
    birthday_wish_user_id?: number;
}

export interface StoriesStoryLink {
    /**
     * Link text
     */
    text: string;
    /**
     * Link URL
     */
    url: string;
    [key: string]: any;
}

export interface StoriesStoryStats {
    [key: string]: any;
}

export interface StoriesStoryStatsStat {
    /**
     * Stat value
     */
    count?: number;
    [key: string]: any;
}

export type StoriesStoryStatsState = "on" | "off" | "hidden";

export type StoriesStoryType = "photo" | "video" | "live_active" | "live_finished";

export type StoriesUploadLinkText = "to_store" | "vote" | "more" | "book" | "order" | "enroll" | "fill" | "signup" | "buy" | "ticket" | "write" | "open" | "learn_more" | "view" | "go_to" | "contact" | "watch" | "play" | "install" | "read" | "calendar";

export interface StoriesViewersItem {
    /**
     * user has like for this object
     */
    is_liked: boolean | number;
    /**
     * user id
     */
    user_id: number;
    [key: string]: any;
}

export interface UsersCareer {
    /**
     * City ID
     */
    city_id?: number;
    /**
     * Company name
     */
    company?: string;
    /**
     * Country ID
     */
    country_id?: number;
    /**
     * From year
     */
    from?: number;
    /**
     * Community ID
     */
    group_id?: number;
    /**
     * Career ID
     */
    id?: number;
    /**
     * Position
     */
    position?: string;
    /**
     * Till year
     */
    until?: number;
    [key: string]: any;
}

export interface UsersCropPhoto {
    [key: string]: any;
}

export interface UsersCropPhotoCrop {
    /**
     * Coordinate X of the left upper corner
     */
    x?: number;
    /**
     * Coordinate X of the right lower corner
     */
    x2?: number;
    /**
     * Coordinate Y of the left upper corner
     */
    y?: number;
    /**
     * Coordinate Y of the right lower corner
     */
    y2?: number;
    [key: string]: any;
}

export interface UsersCropPhotoRect {
    /**
     * Coordinate X of the left upper corner
     */
    x?: number;
    /**
     * Coordinate X of the right lower corner
     */
    x2?: number;
    /**
     * Coordinate Y of the left upper corner
     */
    y?: number;
    /**
     * Coordinate Y of the right lower corner
     */
    y2?: number;
    [key: string]: any;
}

export interface UsersExports {
    [key: string]: any;
    facebook?: number;
    livejournal?: number;
    twitter?: number;
}

export type UsersFields = "photo_id" | "verified" | "sex" | "bdate" | "city" | "country" | "home_town" | "has_photo" | "photo_50" | "photo_100" | "photo_200_orig" | "photo_200" | "photo_400_orig" | "photo_max" | "photo_max_orig" | "online" | "lists" | "domain" | "has_mobile" | "contacts" | "site" | "education" | "universities" | "schools" | "status" | "last_seen" | "followers_count" | "counters" | "common_count" | "occupation" | "nickname" | "relatives" | "relation" | "personal" | "connections" | "exports" | "wall_comments" | "activities" | "interests" | "music" | "movies" | "tv" | "books" | "games" | "about" | "quotes" | "can_post" | "can_see_all_posts" | "can_see_audio" | "can_write_private_message" | "can_send_friend_request" | "is_favorite" | "is_hidden_from_feed" | "timezone" | "screen_name" | "maiden_name" | "crop_photo" | "is_friend" | "friend_status" | "career" | "military" | "blacklisted" | "blacklisted_by_me" | "can_subscribe_posts" | "descriptions" | "trending" | "mutual" | "friendship_weeks" | "can_invite_to_chats" | "stories_archive_count" | "video_live_level" | "video_live_count" | "clips_count";

export interface UsersLastSeen {
    /**
     * Type of the platform that used for the last authorization
     */
    platform?: number;
    /**
     * Last visit date (in Unix time)
     */
    time?: number;
    [key: string]: any;
}

export interface UsersMilitary {
    /**
     * Country ID
     */
    country_id: number;
    /**
     * From year
     */
    from?: number;
    /**
     * Military ID
     */
    id?: number;
    /**
     * Unit name
     */
    unit: string;
    /**
     * Unit ID
     */
    unit_id: number;
    /**
     * Till year
     */
    until?: number;
    [key: string]: any;
}

export interface UsersOccupation {
    /**
     * ID of school, university, company group
     */
    id?: number;
    /**
     * Name of occupation
     */
    name?: string;
    /**
     * Type of occupation
     */
    type?: string;
    [key: string]: any;
}

export interface UsersPersonal {
    /**
     * User's views on alcohol
     */
    alcohol?: number;
    /**
     * User's inspired by
     */
    inspired_by?: string;
    /**
     * User's languages
     */
    langs?: string[];
    /**
     * User's personal priority in life
     */
    life_main?: number;
    /**
     * User's personal priority in people
     */
    people_main?: number;
    /**
     * User's political views
     */
    political?: number;
    /**
     * User's religion
     */
    religion?: string;
    /**
     * User's religion id
     */
    religion_id?: number;
    /**
     * User's views on smoking
     */
    smoking?: number;
    [key: string]: any;
}

export interface UsersRelative {
    /**
     * Date of child birthday (format dd.mm.yyyy)
     */
    birth_date?: string;
    /**
     * Relative ID
     */
    id?: number;
    /**
     * Name of relative
     */
    name?: string;
    /**
     * Relative type
     */
    type: "parent" | "child" | "grandparent" | "grandchild" | "sibling";
    [key: string]: any;
}

export interface UsersSchool {
    /**
     * City ID
     */
    city?: number;
    /**
     * School class letter
     */
    class?: string;
    /**
     * Country ID
     */
    country?: number;
    /**
     * School ID
     */
    id?: string;
    /**
     * School name
     */
    name?: string;
    /**
     * School type ID
     */
    type?: number;
    /**
     * School type name
     */
    type_str?: string;
    /**
     * Year the user started to study
     */
    year_from?: number;
    /**
     * Graduation year
     */
    year_graduated?: number;
    /**
     * Year the user finished to study
     */
    year_to?: number;
    [key: string]: any;
}

export type UsersSubscriptionsItem = any;

export interface UsersUniversity {
    /**
     * Chair ID
     */
    chair?: number;
    /**
     * Chair name
     */
    chair_name?: string;
    /**
     * City ID
     */
    city?: number;
    /**
     * Country ID
     */
    country?: number;
    /**
     * Education form
     */
    education_form?: string;
    /**
     * Education status
     */
    education_status?: string;
    /**
     * Faculty ID
     */
    faculty?: number;
    /**
     * Faculty name
     */
    faculty_name?: string;
    /**
     * Graduation year
     */
    graduation?: number;
    /**
     * University ID
     */
    id?: number;
    /**
     * University name
     */
    name?: string;
    [key: string]: any;
}

export interface UsersUser1 {
    /**
     * Domain name of the user's page
     */
    screen_name?: string;
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50?: string;
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100?: string;
    /**
     * Application ID
     */
    online_app?: number;
    sex?: BaseSex;
    online?: BaseBoolInt;
    online_mobile?: BaseBoolInt;
    verified?: BaseBoolInt;
    trending?: BaseBoolInt;
    friend_status?: FriendsFriendStatusStatus;
    mutual?: FriendsRequestsMutual;
}

export type UsersUser = UsersUserMin & UsersUser1;

export interface UsersUserConnections {
    /**
     * User's Skype nickname
     */
    skype: string;
    /**
     * User's Facebook account
     */
    facebook: string;
    /**
     * User's Facebook name
     */
    facebook_name?: string;
    /**
     * User's Twitter account
     */
    twitter: string;
    /**
     * User's Livejournal account
     */
    livejournal?: string;
    /**
     * User's Instagram account
     */
    instagram: string;
    [key: string]: any;
}

export interface UsersUserCounters {
    /**
     * Albums number
     */
    albums?: number;
    /**
     * Audios number
     */
    audios?: number;
    /**
     * Followers number
     */
    followers?: number;
    /**
     * Friends number
     */
    friends?: number;
    /**
     * Gifts number
     */
    gifts?: number;
    /**
     * Communities number
     */
    groups?: number;
    /**
     * Notes number
     */
    notes?: number;
    /**
     * Online friends number
     */
    online_friends?: number;
    /**
     * Public pages number
     */
    pages?: number;
    /**
     * Photos number
     */
    photos?: number;
    /**
     * Subscriptions number
     */
    subscriptions?: number;
    /**
     * Number of photos with user
     */
    user_photos?: number;
    /**
     * Number of videos with user
     */
    user_videos?: number;
    /**
     * Videos number
     */
    videos?: number;
    [key: string]: any;
}

export interface UsersUserFull1 {
    /**
     * User's first name in nominative case
     */
    first_name_nom?: string;
    /**
     * User's first name in genitive case
     */
    first_name_gen?: string;
    /**
     * User's first name in dative case
     */
    first_name_dat?: string;
    /**
     * User's first name in accusative case
     */
    first_name_acc?: string;
    /**
     * User's first name in instrumental case
     */
    first_name_ins?: string;
    /**
     * User's first name in prepositional case
     */
    first_name_abl?: string;
    /**
     * User's last name in nominative case
     */
    last_name_nom?: string;
    /**
     * User's last name in genitive case
     */
    last_name_gen?: string;
    /**
     * User's last name in dative case
     */
    last_name_dat?: string;
    /**
     * User's last name in accusative case
     */
    last_name_acc?: string;
    /**
     * User's last name in instrumental case
     */
    last_name_ins?: string;
    /**
     * User's last name in prepositional case
     */
    last_name_abl?: string;
    /**
     * User nickname
     */
    nickname?: string;
    /**
     * User maiden name
     */
    maiden_name?: string;
    /**
     * Domain name of the user's page
     */
    domain?: string;
    /**
     * User's date of birth
     */
    bdate?: string;
    /**
     * User's timezone
     */
    timezone?: number;
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200?: string;
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max?: string;
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig?: string;
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig?: string;
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig?: string;
    /**
     * ID of the user's main photo
     */
    photo_id?: string;
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group?: boolean | number;
    /**
     * User's mobile phone number
     */
    mobile_phone?: string;
    /**
     * User's additional phone number
     */
    home_phone?: string;
    /**
     * User's website
     */
    site?: string;
    /**
     * User's status
     */
    status?: string;
    /**
     * User's status
     */
    activity?: string;
    /**
     * Number of user's followers
     */
    followers_count?: number;
    /**
     * User level in live streams achievements
     */
    video_live_level?: number;
    /**
     * Number of user's live streams
     */
    video_live_count?: number;
    /**
     * Number of common friends with current user
     */
    common_count?: number;
    /**
     * University ID
     */
    university?: number;
    /**
     * University name
     */
    university_name?: string;
    /**
     * Faculty ID
     */
    faculty?: number;
    /**
     * Faculty name
     */
    faculty_name?: string;
    /**
     * Graduation year
     */
    graduation?: number;
    /**
     * Education form
     */
    education_form?: string;
    /**
     * User's education status
     */
    education_status?: string;
    /**
     * User hometown
     */
    home_town?: string;
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts?: boolean | number;
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts?: boolean | number;
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts?: boolean | number;
    city?: BaseObject;
    country?: BaseCountry;
    owner_state?: OwnerState;
    has_photo?: BaseBoolInt;
    has_mobile?: BaseBoolInt;
    is_friend?: BaseBoolInt;
    wall_comments?: BaseBoolInt;
    can_post?: BaseBoolInt;
    can_see_all_posts?: BaseBoolInt;
    can_see_audio?: BaseBoolInt;
    can_write_private_message?: BaseBoolInt;
    can_send_friend_request?: BaseBoolInt;
    status_audio?: AudioAudio;
    last_seen?: UsersLastSeen;
    exports?: UsersExports;
    crop_photo?: UsersCropPhoto;
    blacklisted?: BaseBoolInt;
    blacklisted_by_me?: BaseBoolInt;
    is_favorite?: BaseBoolInt;
    is_hidden_from_feed?: BaseBoolInt;
    occupation?: UsersOccupation;
    career?: UsersCareer[];
    military?: UsersMilitary[];
    relation?: UsersUserRelation;
    relation_partner?: UsersUserMin;
    personal?: UsersPersonal;
    universities?: UsersUniversity[];
    schools?: UsersSchool[];
    relatives?: UsersRelative[];
}

export type UsersUserFull = UsersUser & UsersUserFull1;

export interface UsersUserMin {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated?: string;
    /**
     * User first name
     */
    first_name: string;
    /**
     * Returns if a profile is hidden.
     */
    hidden?: number;
    /**
     * User ID
     */
    id: number;
    /**
     * User last name
     */
    last_name: string;
    [key: string]: any;
    can_access_closed?: boolean | number;
    is_closed?: boolean | number;
}

export type UsersUserRelation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface UsersUserSettingsXtr {
    /**
     * User's date of birth
     */
    bdate?: string;
    /**
     * Information whether user's birthdate are hidden
     */
    bdate_visibility?: number;
    /**
     * User first name
     */
    first_name?: string;
    /**
     * User's hometown
     */
    home_town: string;
    /**
     * User last name
     */
    last_name?: string;
    /**
     * User maiden name
     */
    maiden_name?: string;
    /**
     * User phone number with some hidden digits
     */
    phone?: string;
    /**
     * Domain name of the user's page
     */
    screen_name?: string;
    /**
     * User status
     */
    status: string;
    [key: string]: any;
    relation_requests?: UsersUserMin[];
    languages?: string[];
}

export type UsersUserType = "profile";

export interface UsersUserXtrCounters1 {
    counters?: UsersUserCounters;
}

export type UsersUserXtrCounters = UsersUserFull & UsersUserXtrCounters1;

export interface UsersUserXtrType1 {
    type?: UsersUserType;
}

export type UsersUserXtrType = UsersUser & UsersUserXtrType1;

export interface UsersUsersArray {
    /**
     * Users number
     */
    count: number;
    /**
     * User ID
     */
    items: number[];
    [key: string]: any;
}

export interface UtilsDomainResolved {
    /**
     * Object ID
     */
    object_id?: number;
    /**
     * Group ID
     */
    group_id?: number;
    [key: string]: any;
}

export type UtilsDomainResolvedType = "user" | "group" | "application" | "page";

export interface UtilsLastShortenedLink {
    /**
     * Access key for private stats
     */
    access_key?: string;
    /**
     * Link key (characters after vk.cc/)
     */
    key?: string;
    /**
     * Short link URL
     */
    short_url?: string;
    /**
     * Creation time in Unixtime
     */
    timestamp?: number;
    /**
     * Full URL
     */
    url?: string;
    /**
     * Total views number
     */
    views?: number;
    [key: string]: any;
}

export interface UtilsLinkChecked {
    /**
     * Link URL
     */
    link?: string;
    [key: string]: any;
}

export type UtilsLinkCheckedStatus = "not_banned" | "banned" | "processing";

export interface UtilsLinkStats {
    /**
     * Link key (characters after vk.cc/)
     */
    key?: string;
    [key: string]: any;
    stats?: UtilsStats[];
}

export interface UtilsLinkStatsExtended {
    /**
     * Link key (characters after vk.cc/)
     */
    key?: string;
    [key: string]: any;
    stats?: UtilsStatsExtended[];
}

export interface UtilsShortLink {
    /**
     * Access key for private stats
     */
    access_key?: string;
    /**
     * Link key (characters after vk.cc/)
     */
    key?: string;
    /**
     * Short link URL
     */
    short_url?: string;
    /**
     * Full URL
     */
    url?: string;
    [key: string]: any;
}

export interface UtilsStats {
    /**
     * Start time
     */
    timestamp?: number;
    /**
     * Total views number
     */
    views?: number;
    [key: string]: any;
}

export interface UtilsStatsCity {
    /**
     * City ID
     */
    city_id?: number;
    /**
     * Views number
     */
    views?: number;
    [key: string]: any;
}

export interface UtilsStatsCountry {
    /**
     * Country ID
     */
    country_id?: number;
    /**
     * Views number
     */
    views?: number;
    [key: string]: any;
}

export interface UtilsStatsExtended {
    /**
     * Start time
     */
    timestamp?: number;
    /**
     * Total views number
     */
    views?: number;
    [key: string]: any;
    cities?: UtilsStatsCity[];
    countries?: UtilsStatsCountry[];
    sex_age?: UtilsStatsSexAge[];
}

export interface UtilsStatsSexAge {
    /**
     * Age denotation
     */
    age_range?: string;
    /**
     * Views by female users
     */
    female?: number;
    /**
     * Views by male users
     */
    male?: number;
    [key: string]: any;
}

/*Video live settings*/
export interface VideoLiveSettings {
    /**
     * Max possible time for rewind
     */
    max_duration?: number;
    [key: string]: any;
}

/*Video restriction button*/
export interface VideoRestrictionButton {
    [key: string]: any;
    action?: "play";
    title?: string;
}

export interface VideoSaveResult {
    /**
     * Video access key
     */
    access_key?: string;
    /**
     * Video description
     */
    description?: string;
    /**
     * Video owner ID
     */
    owner_id?: number;
    /**
     * Video title
     */
    title?: string;
    /**
     * URL for the video uploading
     */
    upload_url?: string;
    /**
     * Video ID
     */
    video_id?: number;
    [key: string]: any;
}

export interface VideoVideo1 {
    /**
     * Video access key
     */
    access_key?: string;
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date?: number;
    /**
     * Number of comments
     */
    comments?: number;
    /**
     * Date when video has been uploaded in Unixtime
     */
    date?: number;
    /**
     * Video description
     */
    description?: string;
    /**
     * Video duration in seconds
     */
    duration?: number;
    /**
     * Video width
     */
    width?: number;
    /**
     * Video height
     */
    height?: number;
    /**
     * Video ID
     */
    id?: number;
    /**
     * Video owner ID
     */
    owner_id?: number;
    /**
     * Id of the user who uploaded the video if it was uploaded to a group by member
     */
    user_id?: number;
    /**
     * Video title
     */
    title?: string;
    /**
     * Whether video is added to bookmarks
     */
    is_favorite?: boolean | number;
    /**
     * Video embed URL
     */
    player?: string;
    /**
     * Number of views
     */
    views?: number;
    /**
     * If video is external, number of views on vk
     */
    local_views?: number;
    /**
     * Restriction code
     */
    content_restricted?: number;
    /**
     * Restriction text
     */
    content_restricted_message?: string;
    /**
     * Live donations balance
     */
    balance?: number;
    /**
     * Live stream status
     */
    live_status?: "waiting" | "started" | "finished" | "failed" | "upcoming";
    /**
     * Number of spectators of the stream
     */
    spectators?: number;
    /**
     * External platform
     */
    platform?: string;
    can_comment?: BaseBoolInt;
    can_edit?: BaseBoolInt;
    can_like?: BaseBoolInt;
    can_repost?: BaseBoolInt;
    can_subscribe?: BaseBoolInt;
    can_add_to_faves?: BaseBoolInt;
    can_add?: BaseBoolInt;
    can_attach_link?: BaseBoolInt;
    is_private?: BaseBoolInt;
    image?: VideoVideoImage[];
    first_frame?: VideoVideoImage[];
    processing?: BasePropertyExists;
    converting?: BaseBoolInt;
    restriction?: MediaRestriction;
    added?: BaseBoolInt;
    is_subscribed?: BaseBoolInt;
    track_code?: string;
    repeat?: BasePropertyExists;
    type?: "video" | "music_video" | "movie";
    live?: BasePropertyExists;
    upcoming?: BasePropertyExists;
    likes?: BaseLikes;
    reposts?: BaseRepostsInfo;
}

export type VideoVideo = VideoVideo1;

export interface VideoVideoAlbumFull {
    /**
     * Total number of videos in album
     */
    count: number;
    /**
     * Album ID
     */
    id?: number;
    /**
     * Album owner's ID
     */
    owner_id: number;
    /**
     * Album title
     */
    title: string;
    /**
     * Date when the album has been updated last time in Unixtime
     */
    updated_time: number;
    [key: string]: any;
    image?: VideoVideoImage[];
}

export interface VideoVideoFiles {
    /**
     * URL of the external player
     */
    external?: string;
    /**
     * URL of the mpeg4 file with 240p quality
     */
    mp4_240?: string;
    /**
     * URL of the mpeg4 file with 360p quality
     */
    mp4_360?: string;
    /**
     * URL of the mpeg4 file with 480p quality
     */
    mp4_480?: string;
    /**
     * URL of the mpeg4 file with 720p quality
     */
    mp4_720?: string;
    /**
     * URL of the mpeg4 file with 1080p quality
     */
    mp4_1080?: string;
    /**
     * URL of the flv file with 320p quality
     */
    flv_320?: string;
    [key: string]: any;
}

export interface VideoVideoFull1 {
    files?: VideoVideoFiles;
    live_settings?: VideoLiveSettings;
}

export type VideoVideoFull = VideoVideo & VideoVideoFull1;

export interface VideoVideoImage1 {
    with_padding?: BasePropertyExists;
}

export type VideoVideoImage = BaseImage & VideoVideoImage1;

export interface WallAppPost {
    /**
     * Application ID
     */
    id?: number;
    /**
     * Application name
     */
    name?: string;
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130?: string;
    /**
     * URL of the preview image with 604 px in width
     */
    photo_604?: string;
    [key: string]: any;
}

export interface WallAttachedNote {
    /**
     * Comments number
     */
    comments: number;
    /**
     * Date when the note has been created in Unixtime
     */
    date: number;
    /**
     * Note ID
     */
    id: number;
    /**
     * Note owner's ID
     */
    owner_id: number;
    /**
     * Read comments number
     */
    read_comments: number;
    /**
     * Note title
     */
    title: string;
    /**
     * URL of the page with note preview
     */
    view_url: string;
    [key: string]: any;
}

export interface WallCarouselBase {
    /**
     * Index of current carousel element
     */
    carousel_offset?: number;
    [key: string]: any;
}

export interface WallCommentAttachment {
    [key: string]: any;
}

export type WallCommentAttachmentType = "photo" | "audio" | "video" | "doc" | "link" | "note" | "page" | "market_market_album" | "market" | "sticker";

export interface WallGeo {
    /**
     * Coordinates as string. <latitude> <longtitude>
     */
    coordinates?: string;
    /**
     * Information whether a map is showed
     */
    showmap?: number;
    /**
     * Place type
     */
    type?: string;
    [key: string]: any;
}

export interface WallGraffiti {
    /**
     * Graffiti ID
     */
    id?: number;
    /**
     * Graffiti owner's ID
     */
    owner_id?: number;
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200?: string;
    /**
     * URL of the preview image with 586 px in width
     */
    photo_586?: string;
    [key: string]: any;
}

export interface WallPostCopyright {
    [key: string]: any;
    id?: number;
    link: string;
    name: string;
    type: string;
}

export interface WallPostSource {
    /**
     * Additional data
     */
    data?: string;
    /**
     * Platform name
     */
    platform?: string;
    /**
     * URL to an external site used to publish the post
     */
    url?: string;
    [key: string]: any;
}

export type WallPostSourceType = "vk" | "widget" | "api" | "rss" | "sms";

export type WallPostType = "post" | "copy" | "reply" | "postpone" | "suggest";

export interface WallPostedPhoto {
    /**
     * Photo ID
     */
    id?: number;
    /**
     * Photo owner's ID
     */
    owner_id?: number;
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130?: string;
    /**
     * URL of the preview image with 604 px in width
     */
    photo_604?: string;
    [key: string]: any;
}

export interface WallViews {
    /**
     * Count
     */
    count?: number;
    [key: string]: any;
}

export interface WallWallComment {
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number;
    /**
     * Author ID
     */
    from_id: number;
    /**
     * Comment ID
     */
    id: number;
    /**
     * Real position of the comment
     */
    real_offset?: number;
    /**
     * Replied comment ID
     */
    reply_to_comment?: number;
    /**
     * Replied user ID
     */
    reply_to_user?: number;
    /**
     * Comment text
     */
    text: string;
    [key: string]: any;
    attachments?: WallCommentAttachment[];
    post_id?: number;
    owner_id?: number;
    parents_stack?: number[];
    deleted?: boolean | number;
}

export interface WallWallpost {
    /**
     * Access key to private object
     */
    access_key?: string;
    /**
     * Date of publishing in Unixtime
     */
    date?: number;
    /**
     * Date of editing in Unixtime
     */
    edited?: number;
    /**
     * Post author ID
     */
    from_id?: number;
    /**
     * Post ID
     */
    id?: number;
    /**
     * Is post archived, only for post owners
     */
    is_archived?: boolean | number;
    /**
     * Information whether the post in favorites list
     */
    is_favorite?: boolean | number;
    /**
     * Wall owner's ID
     */
    owner_id?: number;
    /**
     * Post signer ID
     */
    signer_id?: number;
    /**
     * Post text
     */
    text?: string;
    [key: string]: any;
    attachments?: WallWallpostAttachment[];
}

export interface WallWallpostAttachment {
    /**
     * Access key for the audio
     */
    access_key?: string;
    /**
     * String ID of photo
     */
    photos_list?: string[];
    [key: string]: any;
}

export type WallWallpostAttachmentType = "photo" | "posted_photo" | "audio" | "video" | "doc" | "link" | "graffiti" | "note" | "app" | "poll" | "page" | "album" | "photos_list" | "market_market_album" | "market" | "event";

export interface WallWallpostFull1 {
    /**
     * Post creator ID (if post still can be edited)
     */
    created_by?: number;
    /**
     * Information whether the post is pinned
     */
    is_pinned?: number;
    /**
     * Preview length control parameter
     */
    short_text_rate?: number;
    copy_history?: WallWallpost[];
    can_edit?: BaseBoolInt;
    can_delete?: BaseBoolInt;
    can_pin?: BaseBoolInt;
    comments?: BaseCommentsInfo;
    marked_as_ads?: BaseBoolInt;
}

export type WallWallpostFull = WallCarouselBase & WallWallpost & WallWallpostFull1;

export interface WallWallpostToId {
    /**
     * ID of the source post owner
     */
    copy_owner_id?: number;
    /**
     * ID of the source post
     */
    copy_post_id?: number;
    /**
     * Date of publishing in Unixtime
     */
    date?: number;
    /**
     * Post author ID
     */
    from_id?: number;
    /**
     * Post ID
     */
    id?: number;
    /**
     * Information whether the post in favorites list
     */
    is_favorite?: boolean | number;
    /**
     * wall post ID (if comment)
     */
    post_id?: number;
    /**
     * Post signer ID
     */
    signer_id?: number;
    /**
     * Post text
     */
    text?: string;
    /**
     * Wall owner's ID
     */
    to_id?: number;
    [key: string]: any;
    attachments?: WallWallpostAttachment[];
}

export interface WidgetsCommentMedia {
    /**
     * Media item ID
     */
    item_id?: number;
    /**
     * Media owner's ID
     */
    owner_id?: number;
    /**
     * URL of the preview image (type=photo only)
     */
    thumb_src?: string;
    [key: string]: any;
}

export type WidgetsCommentMediaType = "audio" | "photo" | "video";

export interface WidgetsCommentReplies {
    /**
     * Comments number
     */
    count?: number;
    [key: string]: any;
    replies?: WidgetsCommentRepliesItem[];
}

export interface WidgetsCommentRepliesItem {
    /**
     * Comment ID
     */
    cid?: number;
    /**
     * Date when the comment has been added in Unixtime
     */
    date?: number;
    /**
     * Comment text
     */
    text?: string;
    /**
     * User ID
     */
    uid?: number;
    [key: string]: any;
}

export interface WidgetsWidgetComment {
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number;
    /**
     * Comment author ID
     */
    from_id: number;
    /**
     * Comment ID
     */
    id: number;
    /**
     * Post type
     */
    post_type: number;
    /**
     * Comment text
     */
    text: string;
    /**
     * Wall owner
     */
    to_id: number;
    [key: string]: any;
    attachments?: WallCommentAttachment[];
}

export interface WidgetsWidgetLikes {
    /**
     * Likes number
     */
    count?: number;
    [key: string]: any;
}

export interface WidgetsWidgetPage {
    /**
     * Date when widgets on the page has been initialized firstly in Unixtime
     */
    date?: number;
    /**
     * Page description
     */
    description?: string;
    /**
     * Page ID
     */
    id?: number;
    /**
     * page_id parameter value
     */
    page_id?: string;
    /**
     * URL of the preview image
     */
    photo?: string;
    /**
     * Page title
     */
    title?: string;
    /**
     * Page absolute URL
     */
    url?: string;
    [key: string]: any;
}

