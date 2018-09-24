import React, { Component } from 'react'
class Octocat extends Component {
    state = {}
    render() {
        return (
            <article className="cat-element">
                <div className="top-image">
                    <img className="main-image" src={this.props.image} />
                </div>
                <div className="image-footer">
                    <p className="number">#{this.props.number}</p>
                    <p>the
                            <a href={this.props.link} >{this.props.name} </a>
                        by
                        <img className="author-icon" src={this.props.avatar} />
                    </p>
                </div>
            </article>

        )
    }
}

export default Octocat;