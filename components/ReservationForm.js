"use client";

import { useState } from "react";
import site from "@/data/site.json";

const labelClass = "block text-sm uppercase tracking-wider font-semibold mb-2";

// today's date as yyyy-mm-dd (from the computer's own clock, so it is right in Nepal)
function getToday() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return now.getFullYear() + "-" + month + "-" + day;
}

// is the chosen date and time already over? time looks like "6:00 PM"
function isPastTime(date, time) {
  const parts = time.split(" ");
  const clock = parts[0].split(":");
  let hours = Number(clock[0]);
  const minutes = Number(clock[1]);

  if (parts[1] === "PM" && hours !== 12) hours = hours + 12;
  if (parts[1] === "AM" && hours === 12) hours = 0;

  const chosen = new Date(date + "T00:00:00");
  chosen.setHours(hours, minutes, 0, 0);
  return chosen < new Date();
}

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

  // form = what the person typed, errors = the messages under the fields
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // numbers 1 to maxGuests for the guests dropdown
  const guestOptions = [];
  for (let i = 1; i <= page.maxGuests; i++) {
    guestOptions.push(i);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // remove the error of this field while the person is typing
    setErrors({ ...errors, [name]: "" });
  }

  // only allow numbers in the phone field
  function handlePhoneChange(e) {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
    setForm({ ...form, phone: onlyNumbers });
    setErrors({ ...errors, phone: "" });
  }

  // class for a field, the border turns red when it has an error
  function fieldClass(name) {
    const base = "w-full rounded-lg border bg-white px-4 py-3";
    return errors[name] ? base + " border-red-600" : base + " border-ink/30";
  }

  // check every field and collect the messages
  function validate() {
    const newErrors = {};

    if (form.name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 letters";
    }

    if (form.phone === "") {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // email is optional, but if it is filled it must look like an email
    if (form.email.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (form.date === "") {
      newErrors.date = "Date is required";
    } else if (form.date < getToday()) {
      newErrors.date = "Please choose today or a later date";
    }

    if (form.time === "") {
      newErrors.time = "Please select a time";
    } else if (!newErrors.date && isPastTime(form.date, form.time)) {
      newErrors.time = "That time has already passed, please choose a later time";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    // stop here if there is any error
    if (Object.keys(newErrors).length > 0) return;

    // no backend yet, so we only show the confirmation
    setSent(true);
  }

  function handleReset() {
    setForm(emptyForm);
    setErrors({});
    setSent(false);
  }

  // confirmation after submit
  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-md">
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
    // noValidate turns off the browser's own pop-up messages, we show ours
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          aria-invalid={errors.name ? "true" : "false"}
          className={fieldClass("name")}
        />
        {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder="98XXXXXXXX"
            value={form.phone}
            onChange={handlePhoneChange}
            aria-invalid={errors.phone ? "true" : "false"}
            className={fieldClass("phone")}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-700">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email (optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={errors.email ? "true" : "false"}
            className={fieldClass("email")}
          />
          {errors.email && <p className="mt-1 text-sm text-red-700">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="date" className={labelClass}>
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            min={getToday()}
            value={form.date}
            onChange={handleChange}
            aria-invalid={errors.date ? "true" : "false"}
            className={fieldClass("date")}
          />
          {errors.date && <p className="mt-1 text-sm text-red-700">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="time" className={labelClass}>
            Time
          </label>
          <select
            id="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            aria-invalid={errors.time ? "true" : "false"}
            className={fieldClass("time")}
          >
            <option value="">Select time</option>
            {page.times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && <p className="mt-1 text-sm text-red-700">{errors.time}</p>}
        </div>

        <div>
          <label htmlFor="guests" className={labelClass}>
            Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className={fieldClass("guests")}
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
        <label htmlFor="notes" className={labelClass}>
          Special Requests (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows="4"
          value={form.notes}
          onChange={handleChange}
          className={fieldClass("notes")}
        ></textarea>
      </div>

      <button type="submit" className="btn">
        Book Table
      </button>
    </form>
  );
}
