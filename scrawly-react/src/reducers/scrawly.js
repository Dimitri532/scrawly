import {SCRAWLY_ADD, UPDATE_SLUG} from '../actions/scrawly';

const initialState = {
   scrawl: {
       title:"",
       slug:"Test",
       choices: [],
       person:[],
   }
};

function scrawlyApp(state = initialState, action){
    let newScrawl = Object.assign({}, state.scrawl);
    switch(action.type){
        case SCRAWLY_ADD:
            newScrawl.items.push(action.payload);
            return { scrawl: newScrawl };
        case UPDATE_SLUG:
            newScrawl.slug = action.payload;
            return { scrawl: newScrawl };
        default:
            return state;
    }
};

export default scrawlyApp;