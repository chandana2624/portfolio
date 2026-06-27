// src/components/ContactForm.tsx
"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import Confetti from "react-confetti";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

export const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // Placeholder: replace with real email service (e.g., EmailJS, Formspree)
    console.log("Form data", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="max-w-xl mx-auto">
      {sent && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-pastel-lavender"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-pastel-lavender"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            {...register("subject")}
            className="w-full rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-pastel-lavender"
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className="w-full rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-pastel-lavender"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-pastel-lavender text-white py-2 rounded-xl hover:scale-105 transform transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
