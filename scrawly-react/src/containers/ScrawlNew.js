import { connect } from "react-redux";
import { scrawlyCreate, updateSlug, updateTitle } from "../actions/scrawly";
import ScrawlNew from "../components/ScrawlNew";
// TODO import du composant

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
        id: state.scrawly.scrawl["@id"],
        loading: state.scrawly.createScrawlLoading,
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateTitle: title => dispatch(updateTitle(title)),
    scrawlyCreate: scrawl => dispatch(scrawlyCreate(scrawl)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlNew)