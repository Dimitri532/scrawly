export const UPDATE_SLUG = "UPDATE_SLUG";
export const SCRAWLY_SHOW_ERROR = "SCRAWLY_SHOW_ERROR";
export const SCRAWLY_SHOW_SUCCESS = "SCRAWLY_SHOW_SUCCESS";
export const SCRAWLY_CREATE_ERROR = "SCRAWLY_CREATE_ERROR";
export const SCRAWLY_CREATE_SUCCESS = "SCRAWLY_CREATE_SUCCESS";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_CHOICES = "UPDATE_CHOICES";
export const ADD_CHOICE_SUCCESS = "ADD_CHOICE_SUCCESS";
export const ADD_CHOICE_ERROR = "ADD_CHOICE_ERROR";
export const CREATE_SCRAWL_LOADING = "CREATE_SCRAWL_LOADING";

export function updateTitle(title) {
    return {
        type:   UPDATE_TITLE,
        payload: title
    };
}
export function updateSlug(slug) {
    return {
        type: UPDATE_SLUG,
        payload: slug
    };
}
export function scrawlyShow(slug) {
    return dispatch => {
        fetch(process.env.REACT_APP_API + '/polls?slug=' + slug)
            .then(response => response.json())
            .then(data => {
                if (data["hydra:member"].length > 0) {
                    dispatch(scrawlyShowSuccess(data["hydra:member"][0]));
                } else {
                    dispatch(scrawlyShowError());
                }
            })
    }
}
export function scrawlyShowSuccess(scrawl) {
    return {
        type: SCRAWLY_SHOW_SUCCESS,
        payload: scrawl
    };
}
export function scrawlyShowError() {
    return { type: SCRAWLY_SHOW_ERROR };
}


export function scrawlyCreate(scrawl) {
    return dispatch => {
        dispatch(createScrawlLoading());
        fetch(process.env.REACT_APP_API + '/polls', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(scrawl)
        })
            .then(response => response.json())
            .then(data => {
                if (data["@type"] !== "hydra:Error") {
                    dispatch(scrawlyCreateSuccess(data));
                } else {
                    dispatch(scrawlyCreateError());
                }
            })
    }
}
export function scrawlyCreateSuccess(scrawl) {
    return {
        type: SCRAWLY_SHOW_SUCCESS,
        payload: scrawl
    };
}
export function scrawlyCreateError() {
}
export function createScrawlLoading() {
    return { type: CREATE_SCRAWL_LOADING }
}

export function updateChoices(choices) {
    return {
        type:   UPDATE_CHOICES,
        payload: choices
    };
}
export function addChoice(choices) {
    return dispatch =>{
        fetch( process.env.REACT_APP_API + '/choices', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                choices
            )
        })
            .then(response=>response.json())
            .then(data=>{
                if (data["@type"]!== "hydra:Error") {
                    dispatch(addChoiceSuccess(data))
                }else{
                    dispatch(addChoiceError());
                }
            })
    }
}
export function addChoiceSuccess(choices) {
    return {
        type: ADD_CHOICE_SUCCESS,
        payload: choices
    }
}
export function addChoiceError() {
    return {
        type: ADD_CHOICE_ERROR,
    }
}