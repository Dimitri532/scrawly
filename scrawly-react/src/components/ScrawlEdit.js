import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ScrawlEdit extends Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.addChoices({
            date: this.props.scrawl.choices,
            poll: this.props.scrawl['@id'],
            }
        );
    }

    render() {
        /*const choice = this.props.scrawl.choices;
        const ChoiceList = choice.map((choice) =>
            <li key={choice['@id']} />
        )*/
        return (
            <div>
                <h1>{this.props.scrawl.title}</h1>
                <ul>

                </ul>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="date" name="date" value={this.props.scrawl.choices} onChange={event => this.props.updateChoices(event.target.value)}/>
                    <button type="submit" className="button button-primary">
                        <i className="fa fa-plus"></i>
                        Add
                    </button>
                </form>
                <Link to={"/scrawl/" + this.props.slug}>Create a new Scrawl</Link>
            </div>
        );
    }
}

export default ScrawlEdit;