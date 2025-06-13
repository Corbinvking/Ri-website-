import React from "react";
import Image from "next/image";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0d17] text-white px-4">
      <div className="max-w-xl w-full text-center">
        {/* Logo at the top */}
        <a href="/" className="inline-block mb-8">
          <Image
            src="/rivers-intelligence-logo.png"
            alt="Rivers Intelligence Logo"
            width={160}
            height={40}
            className="mx-auto object-contain hover:opacity-80 transition-opacity"
            priority
          />
        </a>
        <h1 className="text-3xl font-bold mb-4">Thank You for Booking!</h1>
        <p className="mb-6 text-lg">
          Your call is confirmed. We look forward to speaking with you and helping your business grow with AI.
        </p>
        {/* Replace the src with your own video link or embed */}
        <div className="mb-6">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Thank You Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
        <div className="bg-[#1a1a2e] rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">What Happens Next?</h2>
          <ul className="text-left list-disc list-inside text-gray-300">
            <li>Check your email for a calendar invite and details.</li>
            <li>Prepare any questions you have about AI for your business.</li>
            <li>We'll call you at your scheduled time!</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 