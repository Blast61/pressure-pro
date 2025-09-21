"use client";

import { useAppStore } from "@/lib/state/app-store";

/**
 * Small toggle to add/remove a conference id from favorites.
 */
export default function FavoriteButton({
    conferenceId,
    size = "sm",
}: {
    conferenceId: string;
    size?: "sm" | "md";
}) {
    const { state, dispatch } = useAppStore();
    const isFavorite = state.favorites.includes(conferenceId);

    const baseStyle = "rounded px-2 py-1";
    const sizeStyle = size === "md" ? "text-sm" : "text-xs";
    const visualStyle = isFavorite
        ? "bg-yellow-200 text-yellow-900"
        : "bg-neutral-100 text-neutral-800";
    
    return (
        <button
            type="button"
            onClick={() => dispatch({ type: "toggle_favorite", conferenceId })}
            className={`${baseStyle} ${sizeStyle} ${visualStyle}`}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            title={isFavorite ?  "Remove from favorites" : "Add to favorites"}
        >
            {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </button>
    );
}