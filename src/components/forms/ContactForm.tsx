"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

const subjectOptions = [
  "General Inquiry",
  "Membership",
  "Partnerships",
  "Degree Recognition",
  "Other",
] as const;

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.enum(subjectOptions, {
    message: "Please select a subject",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

// Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (from web3forms.com) to send submissions
// live. Without it, the form runs in demo mode for local QA.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const inputClasses =
  "focus-ring w-full rounded-btn border border-gray-100 bg-gray-50 px-4 py-3 text-[15px] text-ink placeholder:text-gray-400";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(false);
    try {
      if (WEB3FORMS_ACCESS_KEY) {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: values.name,
            email: values.email,
            subject: `InterProFinland contact form — ${values.subject}`,
            message: values.message,
          }),
        });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error("Submission failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700));
      }
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-card bg-accent-green/10 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-green" />
        <h3 className="text-h3 font-semibold text-ink">Message sent</h3>
        <p className="text-body text-gray-600">
          Thanks for reaching out — we&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="focus-ring mt-2 text-sm font-semibold text-secondary hover:text-primary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Name
        </label>
        <input id="name" type="text" className={inputClasses} {...register("name")} />
        {errors.name && (
          <p className="mt-1.5 text-xs text-accent-red">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input id="email" type="email" className={inputClasses} {...register("email")} />
        {errors.email && (
          <p className="mt-1.5 text-xs text-accent-red">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
          Subject
        </label>
        <select
          id="subject"
          defaultValue=""
          className={inputClasses}
          {...register("subject")}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className="mt-1.5 text-xs text-accent-red">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-accent-red">{errors.message.message}</p>
        )}
      </div>

      {submitError && (
        <p className="text-sm text-accent-red">
          Something went wrong sending your message. Please try again or email
          us directly.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
