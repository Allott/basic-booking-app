import { FacilityType } from "../../types/AccommodationTypes";
import { useState } from "react";

type ListFacilitiesType = {
    facilities: FacilityType[],
    max?: number
}
const ListFacilities = ({facilities, max = 5}: ListFacilitiesType) => {

    const [showAll, setShowAll] = useState(false);

    return (
        <ul className='flex flex-row space-x-2 italic flex-wrap list-none'>
            {facilities.map((facility: FacilityType, index) => {
                if (index >= max && !showAll) return null;
                return (
                    <li key={facility.id}>
                        {facility.label}
                        {!(index + 1 === (showAll? facilities.length : max)) && (',')}
                    </li>
                )
            })}
            {(facilities.length > max) && !showAll && (
                <li>
                    <button 
                        type="button"
                        className="underline text-blue-500" 
                        onClick={()=>setShowAll(true)}
                    >
                        Show more
                    </button>
                </li>
            )}
        </ul>
    )
}

export default ListFacilities;