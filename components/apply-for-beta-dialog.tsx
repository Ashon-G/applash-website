"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { auth } from "@/lib/firebase";

type BetaDialogProps = {
  triggerClassName?: string;
  triggerVariant?: "simple" | "outline" | "primary" | "muted";
  onTriggerClick?: () => void;
};

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  businessName: string;
  website: string;
  idealCustomers: string;
  productDescription: string;
  businessStage: string;
};

const INITIAL_FORM: FormData = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  businessName: "",
  website: "",
  idealCustomers: "",
  productDescription: "",
  businessStage: "",
};

const stageOptions = [
  "Just an idea",
  "Early startup",
  "Growing business",
  "Established business",
];

const TOTAL_STEPS = 6;

export function ApplyForBetaDialog({
  triggerClassName,
  triggerVariant = "primary",
  onTriggerClick,
}: BetaDialogProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [completedSignupNumber, setCompletedSignupNumber] = useState<number | null>(null);
  const [nextSignupNumber, setNextSignupNumber] = useState(1732);

  const resetForm = () => {
    setStep(0);
    setFormData(INITIAL_FORM);
    setError(null);
    setLoading(false);
    setCompletedSignupNumber(null);
  };

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value) {
      resetForm();
    }
  };

  const canGoBack = step > 0;
  const isLastStep = step === TOTAL_STEPS - 1;

  const handleInputChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateCurrentStep = () => {
    switch (step) {
      case 0: {
        if (!formData.email.trim()) {
          return "Please enter your email.";
        }
        if (!formData.password) {
          return "Please create a password.";
        }
        if (formData.password.length < 6) {
          return "Passwords must be at least 6 characters.";
        }
        if (formData.password !== formData.confirmPassword) {
          return "Passwords do not match.";
        }
        return null;
      }
      case 1: {
        if (!formData.firstName.trim() || !formData.lastName.trim()) {
          return "Tell us your first and last name.";
        }
        return null;
      }
      case 2: {
        if (!formData.businessName.trim()) {
          return "What is your business name?";
        }
        return null;
      }
      case 3: {
        if (!formData.idealCustomers.trim()) {
          return "Describe your ideal customers.";
        }
        return null;
      }
      case 4: {
        if (!formData.productDescription.trim()) {
          return "Tell us about your product or service.";
        }
        return null;
      }
      case 5: {
        if (!formData.businessStage) {
          return "Select the stage of your business.";
        }
        return null;
      }
      default:
        return null;
    }
  };

  const persistSignup = async (uid: string, signupNumber: number, idToken: string) => {
    const response = await fetch("/api/beta-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        uid,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        businessName: formData.businessName,
        website: formData.website,
        idealCustomers: formData.idealCustomers,
        productDescription: formData.productDescription,
        businessStage: formData.businessStage,
        signupNumber,
      }),
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      const message = payload?.error ?? "We couldn't save your application. Please try again.";
      throw new Error(message);
    }
  };

  const handleNext = async () => {
    const validationError = validateCurrentStep();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    if (isLastStep) {
      setLoading(true);
      try {
        const credentials = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        try {
          await updateProfile(credentials.user, {
            displayName: `${formData.firstName} ${formData.lastName}`.trim(),
          });
        } catch (profileError) {
          console.error("Failed to update display name", profileError);
        }

        const idToken = await credentials.user.getIdToken();

        await persistSignup(credentials.user.uid, nextSignupNumber, idToken);

        setCompletedSignupNumber(nextSignupNumber);
        setNextSignupNumber((current) => current + 1);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Something went wrong. Please try again.";
        setError(message);
      } finally {
        setLoading(false);
      }
    } else {
      setStep((current) => current + 1);
    }
  };

  const handleBack = () => {
    if (!canGoBack) return;
    setError(null);
    setStep((current) => Math.max(0, current - 1));
  };

  const renderStep = () => {
    if (completedSignupNumber !== null) {
      return (
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <p className="text-sm text-secondary/80">You&apos;re all set!</p>
            <h2 className="text-2xl font-semibold text-white">
              Congrats! You are signup #{completedSignupNumber}
            </h2>
            <p className="text-sm text-zinc-300">
              We will notify you as soon as you can download the app.
            </p>
          </div>
          <Button
            className="w-full"
            onClick={() => handleOpenChange(false)}
          >
            Close
          </Button>
        </div>
      );
    }

    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <DialogHeader className="items-start space-y-2">
              <DialogDescription className="text-xs uppercase tracking-widest text-secondary/80">
                Step {step + 1} of {TOTAL_STEPS}
              </DialogDescription>
              <DialogTitle className="text-2xl font-semibold text-white">
                Create Account
              </DialogTitle>
              <p className="text-sm text-zinc-300">
                Set up your login so we can reserve your place in the beta.
              </p>
            </DialogHeader>
            <div className="space-y-4">
              <label className="flex flex-col gap-1 text-left text-sm text-zinc-200">
                Email
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => handleInputChange("email", event.target.value)}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="flex flex-col gap-1 text-left text-sm text-zinc-200">
                Password
                <input
                  type="password"
                  value={formData.password}
                  onChange={(event) => handleInputChange("password", event.target.value)}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
                  placeholder="Create a secure password"
                  required
                />
              </label>
              <label className="flex flex-col gap-1 text-left text-sm text-zinc-200">
                Confirm Password
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(event) => handleInputChange("confirmPassword", event.target.value)}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
                  placeholder="Retype your password"
                  required
                />
              </label>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <DialogHeader className="items-start space-y-2">
              <DialogDescription className="text-xs uppercase tracking-widest text-secondary/80">
                Step {step + 1} of {TOTAL_STEPS}
              </DialogDescription>
              <DialogTitle className="text-2xl font-semibold text-white">
                Tell us about yourself
              </DialogTitle>
              <p className="text-sm text-zinc-300">
                We&apos;d love to know who will be leading the charge.
              </p>
            </DialogHeader>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-left text-sm text-zinc-200">
                First name
                <input
                  value={formData.firstName}
                  onChange={(event) => handleInputChange("firstName", event.target.value)}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
                  placeholder="Jane"
                  required
                />
              </label>
              <label className="flex flex-col gap-1 text-left text-sm text-zinc-200">
                Last name
                <input
                  value={formData.lastName}
                  onChange={(event) => handleInputChange("lastName", event.target.value)}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
                  placeholder="Doe"
                  required
                />
              </label>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <DialogHeader className="items-start space-y-2">
              <DialogDescription className="text-xs uppercase tracking-widest text-secondary/80">
                Step {step + 1} of {TOTAL_STEPS}
              </DialogDescription>
              <DialogTitle className="text-2xl font-semibold text-white">
                Tell us about your business
              </DialogTitle>
              <p className="text-sm text-zinc-300">
                Share a few details about what you’re building.
              </p>
            </DialogHeader>
            <div className="space-y-4">
              <label className="flex flex-col gap-1 text-left text-sm text-zinc-200">
                Business name
                <input
                  value={formData.businessName}
                  onChange={(event) => handleInputChange("businessName", event.target.value)}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
                  placeholder="Acme Inc."
                  required
                />
              </label>
              <label className="flex flex-col gap-1 text-left text-sm text-zinc-200">
                Website
                <input
                  value={formData.website}
                  onChange={(event) => handleInputChange("website", event.target.value)}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
                  placeholder="https://"
                />
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <DialogHeader className="items-start space-y-2">
              <DialogDescription className="text-xs uppercase tracking-widest text-secondary/80">
                Step {step + 1} of {TOTAL_STEPS}
              </DialogDescription>
              <DialogTitle className="text-2xl font-semibold text-white">
                Who are your ideal customers?
              </DialogTitle>
              <p className="text-sm text-zinc-300">
                Help us understand who you’re targeting.
              </p>
            </DialogHeader>
            <label className="flex flex-col gap-2 text-left text-sm text-zinc-200">
              Ideal customer profile
              <textarea
                value={formData.idealCustomers}
                onChange={(event) => handleInputChange("idealCustomers", event.target.value)}
                className="min-h-[120px] w-full resize-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
                placeholder="Describe the people or companies you serve"
                required
              />
            </label>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <DialogHeader className="items-start space-y-2">
              <DialogDescription className="text-xs uppercase tracking-widest text-secondary/80">
                Step {step + 1} of {TOTAL_STEPS}
              </DialogDescription>
              <DialogTitle className="text-2xl font-semibold text-white">
                What do you do?
              </DialogTitle>
              <p className="text-sm text-zinc-300">
                Tell us about your product or service.
              </p>
            </DialogHeader>
            <label className="flex flex-col gap-2 text-left text-sm text-zinc-200">
              Product or service description
              <textarea
                value={formData.productDescription}
                onChange={(event) => handleInputChange("productDescription", event.target.value)}
                className="min-h-[120px] w-full resize-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/60"
                placeholder="Explain how you help your customers"
                required
              />
            </label>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <DialogHeader className="items-start space-y-2">
              <DialogDescription className="text-xs uppercase tracking-widest text-secondary/80">
                Step {step + 1} of {TOTAL_STEPS}
              </DialogDescription>
              <DialogTitle className="text-2xl font-semibold text-white">
                Sales context
              </DialogTitle>
              <p className="text-sm text-zinc-300">
                What stage is your business in?
              </p>
            </DialogHeader>
            <div className="grid gap-3">
              {stageOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleInputChange("businessStage", option)}
                  className={cn(
                    "w-full rounded-md border px-3 py-3 text-left text-sm transition",
                    formData.businessStage === option
                      ? "border-secondary bg-secondary/10 text-white"
                      : "border-white/10 bg-white/5 text-zinc-200 hover:border-secondary/50 hover:bg-secondary/5"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant={triggerVariant}
          className={triggerClassName}
          onClick={onTriggerClick}
        >
          Apply for the beta
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-neutral-900 text-white">
        <div className="space-y-6">
          {error && (
            <div className="rounded-md border border-red-500/70 bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {error}
            </div>
          )}
          {renderStep()}
          {completedSignupNumber === null && (
            <div className="flex items-center justify-between gap-2">
              <Button
                variant="simple"
                className={cn("w-full", !canGoBack && "invisible")}
                onClick={handleBack}
                disabled={!canGoBack || loading}
              >
                Back
              </Button>
              <Button
                className="w-full"
                onClick={handleNext}
                disabled={loading}
              >
                {loading
                  ? "Submitting..."
                  : isLastStep
                  ? "Submit"
                  : "Continue"}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
