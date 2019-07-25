import {
    UPDATE_SLUG,
    SCRAWLY_SHOW_SUCCESS,
    SCRAWLY_CREATE_SUCCESS,
    UPDATE_TITLE,
    UPDATE_CHOICES,
    ADD_CHOICE_SUCCESS,
    CREATE_SCRAWL_LOADING
} from "../actions/scrawly";
import slugme from "slugme";

const initialState = {
    scrawl: {
        title:"",
        slug:"",
        choices:[

        ],
        person:[

        ]
    }
}
function scrawlyApp (state = initialState, action){
    switch (action.type){
        case CREATE_SCRAWL_LOADING:
            return {
                ...state,
                createScrawlLoading: true
            };
        case ADD_CHOICE_SUCCESS:
            return {
                ...state,
                choices: action.payload
            };
        case UPDATE_CHOICES:
            return {
                ...state,
                scrawl: {...state.scrawl, choices: action.payload}
            };
        case UPDATE_TITLE:
            return {
                ...state,
                scrawl: {...state.scrawl, title: action.payload, slug: slugme(action.payload)}
            };
        case SCRAWLY_CREATE_SUCCESS:
            return {
                ...state,
                scrawl: action.payload
            };
        case UPDATE_SLUG:
            return {
                ...state,
                scrawl: { ...state.scrawl, slug: slugme (action.payload) }
            };
        case SCRAWLY_SHOW_SUCCESS:
            return {
                ...state,
                scrawl: action.payload
            };
        default:
            return state;
    };
}
export default scrawlyApp;