"use client";

import { useState } from "react";
import site from "@/data/site.json";

const inputClass =
  "w-full border border-dark bg-white px-4 py-3 focus:outline-none focus:border-primary";

export default function ContactForm() {
  // form = what the person typed, sent = did they press the button
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  // update one field when the person types
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // there is no backend yet, so we only show the thank you message
    setSent(true);
  }

  function handleReset() {
    setForm({ name: "", email: "", subject: "", message: "" });
    setSent(false);
  }

  // thank you message after submit
  if (sent) {
    return (
      <div className="border border-dark bg-white p-8 text-center">
        <h3 className="font-heading text-4xl uppercase text-primary mb-3">
          {site.contactPage.successTitle}
        </h3>
        <p className="text-gray-700 mb-6">
          {site.contactPage.successText}
        </p>
        <button
          onClick={handleReset}
          className="border border-dark px-6 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-dark hover:text-white"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm uppercase tracking-wider font-semibold mb-2">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm uppercase tracking-wider font-semibold mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm uppercase tracking-wider font-semibold mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm uppercase tracking-wider font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className={inputClass}
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-6 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-dark"
      >
        Send Message
      </button>
    </form>
  );
}