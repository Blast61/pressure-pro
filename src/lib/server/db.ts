import { SEED_CONFERENCES } from "@/data/conferences.seed";
import { Conference } from "@/lib/types"

/**
 * In-memory store shared by API routes in this build/runtime.
 * Initialized from seed date. Not persistent across restarts.
 */

class ConferenceStore {
    private byId = new Map<string, Conference>();

    constructor(seed: Conference[]){
        seed.forEach((conf) => this.byId.set(conf.id, {...conf }));
    }

    //Return a cloned object to avoid external mutation.
    list(): Conference[]{
        return Array.from(this.byId.values()).map((c) => ({ ...c }));
    }

    /**Get a single conference by id, or null if not found */
    get(id: string): Conference | null {
        const found = this.byId.get(id);
        return found ? { ...found } : null;
    }

    /** Create a new conference; id must be unique */
    create(input: Conference): Conference {
        if(this.byId.has(input.id)){
            throw new Error(`Conference with id "${input.id}" already exists`);
        }
        //shallow clone to avoid external mutation
        const record = { ...input };
        this.byId.set(record.id, record);
        return { ...record };
    }

    /** Update an existing conferency by id */
    update(id: string, partial: Partial<Conference>): Conference {
        const existing = this.byId.get(id);
        if(!existing){
            throw new Error(`Conference "${id}" not found`);
        }
          const sanitized: Partial<Conference> = {};
        for (const key of Object.keys(partial) as (keyof Conference)[]) {
            const value = partial[key];
            if (value === undefined) continue;                 
            if (key === "agenda" && value === null) continue;  // don't wipe agenda unless explicitly set

            Object.assign(sanitized, { [key]: value } as Pick<Conference, typeof key>);
        }
        const updated: Conference = { ...existing, ...sanitized, id: existing.id };
        
        this.byId.set(id, updated);
        return { ...updated };
    }

    /** Delete a conference by id (no-op if missing) */
    delete(id: string): void {
        this.byId.delete(id);
    }
}

//Singleton instace for this server runtime
export const db = new ConferenceStore(SEED_CONFERENCES);

/** Helper: all known categories (for UI) */
export function allCategories(): string[]{
    return Array.from(
        new Set(db.list().flatMap((c) => c.category))
    ).sort();
}