"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
      <div className="flex flex-col sm:flex-row gap-3">
        <label className="sr-only" htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/20 backdrop-blur-sm"
          {...register("email")}
          autoComplete="email"
          required
        />
        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("token")} />
        <button
          disabled={isSubmitting}
          className="px-8 py-4 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 disabled:opacity-60 transition-colors whitespace-nowrap"
          type="submit"
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? "Joining..." : "Join Waitlist ↗"}
        </button>
      </div>
      {errors.email && (
        <p className="mt-3 text-sm text-red-300">{errors.email.message}</p>
      )}
      {status === "success" && (
        <p className="mt-3 text-sm text-green-300">🎉 Welcome to JustJapa! Check your email for next steps.</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-300">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
