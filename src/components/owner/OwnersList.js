import React, { Component } from 'react'


class OwnersList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                        <div key={owner.id}>
                        {owner.name}
                        {owner.phonenumber}
                    </div>
            
                )
            }
            </section>
        )
    }
}

export default OwnersList