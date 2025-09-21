"use client"
import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

export type UserProfile = {
    fullName: string;
    email: string;
    preferredPageSize: number;
    theme: "system" | "light" | "dark"
};

export type RegistrationEntry = {
    conferenceId: string;
    name: string;
    email: string;
    registeredAtMs: number;
};

export type AppState = {
    favorites: string[];
    registrations: RegistrationEntry[];
    profile: UserProfile;
};

type AppAction = 
| { type: "toggle_favorite"; conferenceId: string }
| { type: "add_registration"; entry: RegistrationEntry }
| { type: "remove_registration"; conferenceId: string }
| { type: "set_profile"; partial: Partial<UserProfile> }
| { type: "load_from_storage"; state: AppState }
| { type: "clear_all"; };

const STORAGE_KEY = "tech-conf-explorer/app-state:v1";

const defaultState: AppState = {
    favorites: [],
    registrations: [],
    profile: {
        fullName: "",
        email: "",
        preferredPageSize: 6,
        theme: "system",
    },
};

/**
 * Pure reducer for global app state. 
 */
function appReducer(current: AppState, action: AppAction): AppState {
    switch(action.type){
        case "toggle_favorite": {
            const isFavorite = current.favorites.includes(action.conferenceId);
            const nextFavorites = isFavorite 
                ? current.favorites.filter((id) => id !== action.conferenceId)
                : [...current.favorites, action.conferenceId];
                return { ...current, favorites: nextFavorites };
            
        }
        case "add_registration": {
            const withoutDuplicates = current.registrations.filter(
                (r) => r.conferenceId !== action.entry.conferenceId
            );
            return { ...current, registrations: [action.entry, ...withoutDuplicates] };
        }
        case "remove_registration": {
            return {
                ...current,
                registrations: current.registrations.filter(
                    (r) => r.conferenceId !== action.conferenceId
                ),
            };
        }
        case "set_profile": {
            return { ...current, profile: { ...current.profile, ...action.partial }};
        }
        case "load_from_storage": {
            return action.state;
        }
        case "clear_all": {
            return defaultState;
        }
        default:
            return current;
    }
}

const AppStoreContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
} | null>(null);


/**
 * AppStoreProvider wraps any part of the tree that needs access to favorites, registrations, or user profile. It persists to localStorage.
 */
export function AppStoreProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(appReducer, defaultState);

    //Load once on mount
    useEffect(() => {
        try{
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if(raw) {
                const parsed = JSON.parse(raw) as AppState;
                dispatch({ type: "load_from_storage", state: parsed });
            }
        } catch {

        }
    }, []);

    //Persist on changes 
    useEffect(() => {
        try{
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch {

        }
    }, [state]);

    const value = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <AppStoreContext.Provider value={value}>
            {children}
        </AppStoreContext.Provider>
    )
}

export function useAppStore(){
    const context = useContext(AppStoreContext);
    if(!context){
        throw new Error("useAppStore must be used inside <AppStoreProvider");
    }
    return context;
}

