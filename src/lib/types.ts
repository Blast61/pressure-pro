export interface Speaker {
    id: string;
    name: string;
    title: string;
    company: string;
    bio: string;
    avatarURL?: string;
}

export interface Conference {
    id: string;
    name: string;
    description: string;
    date: string;
    endDate: string;
    location: string;
    price: number;
    category: string [];
    imageUrl?: string;
    speakers: Speaker[];
    maxAttendees: number;
    currentAttendees: number;
    isFeatured: boolean;
}

export type RegistrationStatus = "Open" | "Closed" | "Sold Out";