import React, { Component } from 'react'

// Add the same functionality to the OwnerList for when they decide they no longer want to be a customer.

export default class OwnersList extends Component {
    render () {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {owner.name}
                                <a href="#"
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">I Don't wanna be a customer no mo!</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}