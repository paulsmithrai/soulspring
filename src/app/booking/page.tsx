import BookingForm from "@/components/BookingForm";

export default function Booking() {
  return (
    <div className="max-w-xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Book a Session</h1>
      <p className="mb-8 text-center text-lg">
        Book a free 20-minute clarity call or secure your first session. You'll receive a confirmation email with next steps.
      </p>
      <BookingForm />
    </div>
  );
} 