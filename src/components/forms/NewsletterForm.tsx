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

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
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
  );
}
