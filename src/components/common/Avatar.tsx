"use client";
import Image from "next/image";

function initials(name: string){
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]!.toUpperCase()).join("");
}

export default function Avatar({
    name, src, size = 40, className = "",
}: { 
    name: string; 
    src?: string;
    size?: number;
    className?: string;    
}) {
    if(src){
        return (
            <Image
            src={src}
            alt={`${name} avatar`}
            width={size}
            height={size}
            sizes={`${size}px`}
            className={`rounded-full object-cover ${className}`}
            />
        );
    }
    return (
        <div
        aria-label={`${name} avatar fallback`}
        style={{ width: size, height: size }}
        className={`grid place-items-center rounded-full bg-neutral-200 text-[0.7rem] font-medium text-neutral-700 ${className}`}
        >
            {initials(name)}
        </div>
    );
}