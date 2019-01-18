import React, { Component } from 'react'


class AnimalList extends Component {
    render() {
        return (
            <section className="animals, ownership, owners">
            {
                this.props.ownership.animals.owners.map(owner =>
                    <div key={owner.id}>
                        {owner.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default AnimalList

// { this.props.ownership.forEach(own => {
//     <div key={own.id}>
//     {own.name}
//     </div>
// })
