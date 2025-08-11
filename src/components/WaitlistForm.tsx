"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Schema = z.object({
    email: z.string().email(),
    goal: z.enum(["study", "work", "visit"]).optional(),
    token: z.string().optional(),
});

type FormValues = z.infer<typeof Schema>;

export function WaitlistForm({ source, goal }: { source?: string; goal?: string }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>({ resolver: zodResolver(Schema) });

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const onSubmit = async (values: FormValues) => {
        setStatus("idle");
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, source, goal }),
            });
            if (res.ok) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg'>
            <div className='flex flex-col gap-3 sm:flex-row'>
                <label className='sr-only' htmlFor='email'>
                    Email address
                </label>
                <input
                    id='email'
                    type='email'
                    placeholder='Enter your email address'
                    className='flex-1 rounded-full border-2 border-white/20 bg-white/10 px-6 py-4 text-white placeholder-white/70 backdrop-blur-sm focus:border-white focus:bg-white/20 focus:outline-none'
                    {...register("email")}
                    autoComplete='email'
                    required
                />
                <input
                    type='text'
                    className='hidden'
                    tabIndex={-1}
                    autoComplete='off'
                    {...register("token")}
                />
                <button
                    disabled={isSubmitting}
                    className='btn-submit-hover transform whitespace-nowrap rounded-full bg-orange-500 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-300/50 disabled:opacity-60'
                    type='submit'
                    aria-disabled={isSubmitting}
                >
                    {isSubmitting ? "Joining..." : "Join Waitlist ↗"}
                </button>
            </div>
            {errors.email && <p className='mt-3 text-sm text-red-300'>{errors.email.message}</p>}
            {status === "success" && (
                <p className='mt-3 text-sm text-green-300'>
                    🎉 Welcome to JustJapa! Check your email for next steps.
                </p>
            )}
            {status === "error" && (
                <p className='mt-3 text-sm text-red-300'>Something went wrong. Please try again.</p>
            )}
        </form>
    );
}
