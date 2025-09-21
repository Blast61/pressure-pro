"use client"

import { useState } from "react";
import { useConferenceValidator } from "@/lib/validators/useConferenceValidator";

type RegisterError = { error: string };

function getErrorMessage(err: unknown): string {
    if(err instanceof Error) return err.message;
    if(typeof err === "string") return err;
    return "Something went wrong";
}

function validateFields(name: string, email: string){
    const errors: { name? : string; email?: string } = {};
    const nameField = name.trim();
    const emailField = email.trim();

    if(!nameField) {
        errors.name = "Please enter your name.";
    } else if(nameField.length < 2) errors.name = "Name must be at least 2 characters.";

    if(!emailField){
        errors.email = "Please enter your email.";
    } else if(!/^[^\s@]+\.[^\s@]+$/.test(emailField)) {
        errors.email = "Please enter a valid email."
    }
    return errors;
}

export default function RegistrationForm({
    conferenceId,
    dateISO,
}: {
    conferenceId: string;
    dateISO: string;
}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [submitting, setSubmitting] = useState(false);
    const [msg, setMsg] = useState<string | null>(null);

    const { isValid, issues, status } = useConferenceValidator(dateISO);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMsg(null);

        //Client-side field validation
        const nextErrors = validateFields(name, email);
        setErrors(nextErrors);
        if(Object.keys(nextErrors).length > 0) return;

        if(!isValid) {
            setMsg("Registration is closed for this event.");
            return;
        }

        setSubmitting(true);
        try{
            const res = await fetch(`/api/conferences/${conferenceId}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name.trim(), email: email.trim() })
            });
            if(!res.ok){
                const j = (await res.json().catch(() => null)) as RegisterError | null;
                throw new Error(j?.error || "Registration failed");
            }
            setMsg("Registered! 🎉")
            setName(""); 
            setEmail("");
            setErrors({}); 
        } catch(err: unknown){
            setMsg(getErrorMessage(err));
        } finally {
            setSubmitting(false);
        }
    }
    const disabled = submitting || !isValid || Object.keys(errors).length > 0;
    
    return (
        <form
        onSubmit={onSubmit}
        className="mt-6 space-y-4 rounded border p-4"
        aria-busy={submitting}
        >
            {/* Status + validation badges */}
            <div className="flex flex-wrap gap-2 text-sm">
                {status === "TechMeet 2024" && (
                    <span className="rounded bg-indigo-50 px-2 py-1 text-indigo-700">TechMeet 2024</span>
                )}
                {!isValid && issues.length > 0 && (
                    <span className="rounded bg-red-50 px-2 py-1 text-red-700">
                        {issues.join("; ")}
                    </span>
                )}
            </div>

            {/* Name */}
            <div>
                <label htmlFor="reg-name" className="block text-sm font-medium">
                    Name
                </label>
                <input
                    id="reg-name"
                    name="name"
                    className={`mt-1 w-full rounded border px-3 py-2 ${errors.name ? "border-red-500" : ""}`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setErrors((p) => ({ ...p, ...validateFields(name, email) }))}
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "reg-name-error" : undefined}
                />
                {errors.name && (
                    <p id="reg-name-error" className="mt-1 text-xs text-red-600" role="alert">
                        {errors.name}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="reg-email" className="block text-sm font-medium">
                    Email
                </label>
                <input
                id="reg-email"
                name="email"
                type="email"
                className={`mt-1 w-full rounded border px-3 py-2 ${errors.email ? "border-red-500" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setErrors((p) => ({ ...p, ...validateFields(name, email) }))}
                autoComplete="email"
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "reg-email-error" : undefined}
                />
                {errors.email && (
                    <p id="reg-email-error" className="mt-1 text-xs text-red-600" role="alert">
                        {errors.email}
                    </p>
                )}
            </div>

            {/* Submit */}
            <button
            type="submit"
            disabled={disabled}
            className="rounded bg-black px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
                {submitting ? "Submitting..." : "Register"}
            </button>

            {/* Message */}
            {msg && (
                <p className="text-sm text-neutral-700" role="status" aria-live="polite">
                    {msg}
                </p>
            )}
        </form>
    );
}