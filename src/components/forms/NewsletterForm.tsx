"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});

type FormValues = z.infer<typeof schema>;

// Set NEXT_PUBLIC_WEB3FORMS_NEWSLETTER_KEY (from web3forms.com) to collect
// submissions live — kept separate from the contact form's key so signups
// land in their own inbox. Without it, the form runs in local demo mode.
const WEB3FORMS_NEWSLETTER_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_NEWSLETTER_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function NewsletterForm() {
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
      if (WEB3FORMS_NEWSLETTER_KEY) {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_NEWSLETTER_KEY,
            email: values.email,
            subject: "New newsletter signup — InterProFinland",
            message: `New newsletter subscriber: ${values.email}`,
          }),
        });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error("Submission failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-btn bg-accent-green/10 px-4 py-3 text-sm font-medium text-accent-green">
        <CheckCircle2 className="h-[18px] w-[18px]" />
        Thanks for subscribing — welcome to the community!
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 sm:flex-row"
        noValidate
      >
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@example.com"
            className="focus-ring w-full rounded-btn border border-gray-100 bg-gray-50 px-4 py-3 text-[15px] text-ink placeholder:text-gray-400"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-left text-xs text-accent-red">
              {errors.email.message}
            </p>
          )}
        </div>
        <Button type="submit" className="shrink-0">
          <Send className="h-4 w-4" />
          {isSubmitting ? "Sending..." : "Subscribe"}
        </Button>
      </form>
      {submitError && (
        <p className="mt-2 text-center text-xs text-accent-red">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </div>
  );
}
