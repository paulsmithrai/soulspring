"use client";
import { useForm } from "react-hook-form";

const services = [
  "1:1 Emotional Clarity Session",
  "Anxiety & Stress Relief Package",
  "Trauma-Informed Healing Sessions",
  "Confidence & Purpose Coaching",
  "Mindset Reset Package",
  "SoulSpring Blend Coaching",
];

type BookingFormFields = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function BookingForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<BookingFormFields>();

  const onSubmit = (_data: BookingFormFields) => {
    // For now, just reset and show a message
    reset();
    alert("Thank you for booking! We&apos;ll be in touch soon.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("name", { required: true })} placeholder="Name" className="w-full p-3 rounded-lg border" />
      {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
      <input {...register("email", { required: true })} type="email" placeholder="Email" className="w-full p-3 rounded-lg border" />
      {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
      <select {...register("service", { required: true })} className="w-full p-3 rounded-lg border">
        <option value="">Choose service</option>
        {services.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      {errors.service && <span className="text-red-500 text-sm">Please select a service</span>}
      <textarea {...register("message")} placeholder="Message / Notes (optional)" className="w-full p-3 rounded-lg border min-h-[100px]" />
      <button type="submit" className="btn-soulspring w-full">Book Now</button>
      {isSubmitSuccessful && <div className="text-green-600 text-center mt-2">Booking submitted!</div>}
    </form>
  );
} 