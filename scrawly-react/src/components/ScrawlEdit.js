import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ScrawlEdit extends Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.scrawlyCreate({
               choices: this.props.scrawl.choices,
            }
        );
    }

    render() {
        return (
            <div>
                <h1>{this.props.scrawl.title}</h1>
                <ul>

                </ul>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="date" value={this.props.scrawl.choices} onChange={event => this.props.updateChoices(event.target.value)}/>
                    <button type="submit" className="button button-primary">
                        <i className="fa fa-plus"></i>
                        Add
                    </button>
                </form>
                <Link to={'/scrawl'}>Create a new Scrawl</Link>
            </div>
        );
    }
}

export default ScrawlEdit;