import { connect } from "react-redux";
import { scrawlyCreate, updateChoices, addChoice } from "../actions/scrawly";
import ScrawlEdit from "../components/ScrawlEdit";
// TODO import du composant


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
        poll: state.scrawly.scrawl["@id"]
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    addChoices: choices => dispatch(addChoice(choices)),
    scrawlyCreate: scrawl => dispatch(scrawlyCreate(scrawl)),
    updateChoices: choices => dispatch(updateChoices(choices)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlEdit)