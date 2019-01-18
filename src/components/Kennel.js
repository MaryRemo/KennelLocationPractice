import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
// import OwnersList from "./owner/OwnersList"
import "./Kennel.css"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Daisy" },
        { id: 2, name: "James" },
        { id: 3, name: "Lily" },
        { id: 4, name: "Nitro" },
        { id: 5, name: "Chloe" },
        { id: 6, name: "Harris" },
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]

    ownershipFromAPI = [
        { ownersId: 1, animalsId: 1, },
        { ownersId: 2, animalsId: 2, },
        { ownersId: 3, animalsId: 3, },
        { ownersId: 4, animalsId: 4, },
        { ownersId: 5, animalsId: 5, },
        { ownersId: 6, animalsId: 6, }
    ]


    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        ownership: this.ownershipFromAPI
    }
    // this.setState(animals:this.animalsFromAPI)

// this is what you use to pass location and employee info into the children
    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals}  ownership={this.state.ownership}  owners={this.state.owners} />

            </article>
        )
    }
}

export default Kennel