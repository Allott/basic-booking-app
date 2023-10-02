const Occupants = ({max_occupancy, min_occupancy}: {max_occupancy: number, min_occupancy: number}) => {
    if(max_occupancy === min_occupancy) return (
        <p>Occupants: {max_occupancy}</p>
    )
    return (
        <p>Occupants: {min_occupancy}-{max_occupancy}</p>
    )
}

export default Occupants;