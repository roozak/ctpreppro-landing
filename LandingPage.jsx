
import React, { useState } from 'react';

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: e.target.email.value, name: e.target.name.value })
    }).then(() => setSubmitted(true));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-4">You're on the list!</h1>
        <p className="text-gray-700 text-lg text-center max-w-md">
          Thank you for signing up. We'll notify you when CTPrepPro launches — and you're now eligible for a founding member discount.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">CTPrepPro is launching Summer 2025</h1>
        <p className="text-lg text-gray-700 mb-6">
          Get early access to the most realistic ARRT CT registry prep system — and lock in a launch-day discount. Only 100 spots available.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" type="text" placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          <input name="email" type="email" placeholder="Your Email" required className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Claim My Discount
          </button>
        </form>
      </div>
    </div>
  );
}
