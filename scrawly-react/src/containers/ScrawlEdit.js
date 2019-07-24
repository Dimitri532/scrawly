import { connect } from "react-redux";
import { scrawlyCreate, updateChoices } from "../actions/scrawly";
import ScrawlEdit from "../components/ScrawlEdit";
// TODO import du composant

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    scrawlyCreate: scrawl => dispatch(scrawlyCreate(scrawl)),
    updateChoices: choices => dispatch(updateChoices(choices)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlEdit)