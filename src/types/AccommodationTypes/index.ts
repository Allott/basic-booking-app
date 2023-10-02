export type FacilityType = {
    id: number;
    label: string;
}

export type AccommodationType = {
    id: number;
    name: string;
    description: string;
    type: {
        id: number;
        name: string;
    };
    facilities: FacilityType[];   
}