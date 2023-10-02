import { AccommodationType } from "../../types/AccommodationTypes";

const filterAccommodation = (accommodation: AccommodationType[], search: string) => {
    const searchTerm = search.toLowerCase();
    return accommodation.filter((accommodation) => {
        const accommodationName = accommodation.name.toLowerCase();
        const accommodationType = accommodation.type.name.toLowerCase();
        const accommodationFacility = accommodation.facilities.map((facility) => facility.label.toLowerCase());

        if(accommodationName.includes(searchTerm)) return true;
        if(accommodationType.includes(searchTerm)) return true;
        if(accommodationFacility.includes(searchTerm)) return true;
    })

}

export default filterAccommodation;