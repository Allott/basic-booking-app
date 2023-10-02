export type FacilityType = {
    id: number;
    label: string;
}

export type Price = {
    price: string;
}

export type Room = {
    id: number;
    name: string;
    type: string;
    max_occupancy: number;
    min_occupancy: number;
    price?: Price;
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
    rooms: Room[];
}