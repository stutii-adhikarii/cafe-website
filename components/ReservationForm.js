"use client";

import { useState } from "react";
import site from "@/data/site.json";

const inputClass =
  "w-full border border-ink bg-white px-4 py-3 focus:outline-none focus:border-primary";

export default function ReservationForm() {
  const page = site.reservationPage;

  const emptyForm = {
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  // today's date as yyyy-mm-dd, so past dates can't be picked
  const today = new Date().toISOString().split("T")[0];

  // numbers 1 to maxGuests for the guests dropdown
  const guestOptions = [];
  for (let i = 1; i <= page.maxGuests; i++) {
    guestOptions.push(i);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // only allow numbers in the phone field
  function handlePhoneChange(e) {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
    setForm({ ...form, phone: onlyNumbers });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // no backend yet, so we only show the confirmation
    setSent(true);
  }

  function handleReset() {
    setForm(emptyForm);
    setSent(false);
  }

  // confirmation after submit
  if (sent) {
    return (
      <div className="border border-ink bg-white p-8 text-center">
        <h3 className="font-heading text-4xl uppercase text-accent mb-3">
          {page.successTitle}
        </h3>
        <p className="text-ink mb-2">
          Thank you, {form.name}. You asked for a table for {form.guests}{" "}
          {form.guests === "1" ? "person" : "people"} on {form.date} at {form.time}.
        </p>
        <p className="text-ink mb-6">
          {page.successText} We will use {form.phone}.
        </p>
        <button onClick={handleReset} className="btn-outline">
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm uppercase tracking-wider font-semibold mb-2">
          Full Name
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm uppercase tracking-wider font-semibold mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            pattern="[0-9]{10}"
            title="Please enter a 10 digit phone number, numbers only"
            placeholder="98XXXXXXXX"
            value={form.phone}
            onChange={handlePhoneChange}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm uppercase tracking-wider font-semibold mb-2">
            Email (optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="date" className="block text-sm uppercase tracking-wider font-semibold mb-2">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            min={today}
            value={form.date}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm uppercase tracking-wider font-semibold mb-2">
            Time
          </label>
          <select
            id="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Select time</option>
            {page.times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm uppercase tracking-wider font-semibold mb-2">
            Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className={inputClass}
          >
            {guestOptions.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm uppercase tracking-wider font-semibold mb-2">
          Special Requests (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows="4"
          value={form.notes}
          onChange={handleChange}
          className={inputClass}
        ></textarea>
      </div>

      <button type="submit" className="btn">
        Book Table
      </button>
    </form>
  );
}
