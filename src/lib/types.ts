export interface Speaker {
    id: string;
    name: string;
    title: string;
    company: string;
    bio: string;
    avatarUrl?: string;
}

export interface Conference {
    id: string;
    name: string;
    description: string;
    date: string;
    endDate?: string;
    location: string;
    price: number;
    category: string [];
    imageUrl?: string;
    speakers: Speaker[];
    maxAttendees: number;
    currentAttendees: number;
    isFeatured: boolean;
    agenda?: AgendaDay[];
}

export type RegistrationStatus = "Open" | "Closed" | "Sold Out";

export type AgendaDay = {
    date: string;
    items: Array<{
        start: string;
        end?: string;
        title: string;
        speakerId?: string;
        track?: string;
        location?: string;
        description?: string;
    }>;
};