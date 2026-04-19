"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { serviceFormOptions, type ServiceFormOption } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone"),
  service: z.enum(serviceFormOptions as unknown as [string, ...string[]]),
  message: z.string().max(2000).optional().or(z.literal("")),
  postcode: z.string().optional().or(z.literal("")),
  company: z.string().max(0).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

export function CallbackForm({
  variant = "light",
  defaultService,
  showPostcode = false,
  compact = false,
  heading,
  subheading,
}: {
  variant?: "light" | "dark";
  defaultService?: ServiceFormOption;
  showPostcode?: boolean;
  compact?: boolean;
  heading?: string;
  subheading?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: defaultService ?? "Annual Service" },
  });

  const onSubmit = async (data: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      reset();
    } catch {
      setServerError(
        "Something went wrong. Please call us on 0333 XXX XXXX or try again."
      );
    }
  };

  const container =
    variant === "dark"
      ? "bg-[var(--white)] text-[var(--charcoal)] p-6 md:p-8 border-2 border-[var(--green)] offset-amber"
      : "bg-[var(--white)] text-[var(--charcoal)] p-6 md:p-8 border-2 border-[var(--green)] offset-amber-sm";

  if (submitted) {
    return (
      <div className={container}>
        <h3 className="font-display text-2xl mb-3">Thank you.</h3>
        <p className="text-[var(--mid)]">
          We&apos;ve received your request and a member of the team will be in touch shortly. For
          urgent breakdowns please call 0333 XXX XXXX.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={container} noValidate>
      {heading && (
        <div className="mb-4">
          <h3 className="font-display text-2xl">{heading}</h3>
          {subheading && <p className="text-sm text-[var(--mid)] mt-1">{subheading}</p>}
        </div>
      )}

      <div className={compact ? "grid grid-cols-1 md:grid-cols-2 gap-3" : "space-y-3"}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" autoComplete="name" {...register("name")} />
          {errors.name && <p className="text-xs text-red-700 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" {...register("email")} />
          {errors.email && <p className="text-xs text-red-700 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
          {errors.phone && <p className="text-xs text-red-700 mt-1">{errors.phone.message}</p>}
        </div>
        {showPostcode && (
          <div>
            <label htmlFor="postcode">Postcode</label>
            <input id="postcode" autoComplete="postal-code" {...register("postcode")} />
          </div>
        )}
        <div className={compact ? "md:col-span-2" : ""}>
          <label htmlFor="service">Service required</label>
          <select id="service" {...register("service")}>
            {serviceFormOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className={compact ? "md:col-span-2" : ""}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={4} {...register("message")} />
        </div>
      </div>

      {/* honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("company")}
      />

      {serverError && <p className="text-sm text-red-700 mt-3">{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-green-solid w-full mt-4 disabled:opacity-70"
      >
        {isSubmitting ? "Sending…" : "Request Callback"}
      </button>
      <p className="text-xs text-[var(--muted)] mt-3">
        We respond during working hours. For urgent breakdowns call 0333 XXX XXXX.
      </p>
    </form>
  );
}
