"use client";

import { useState } from "react";

const labelClass = "block text-sm uppercase tracking-wider font-semibold mb-2";

// the thank you text comes from the Contact page, which reads site.json
export default function ContactForm({ successTitle, successText }) {
  // form = what the person typed, errors = the messages under the fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // update one field when the person types
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // remove the error of this field while the person is typing
    setErrors({ ...errors, [name]: "" });
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

    if (form.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (form.subject.trim() === "") {
      newErrors.subject = "Subject is required";
    }

    if (form.message.trim() === "") {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message is too short, please write at least 10 characters";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    // stop here if there is any error
    if (Object.keys(newErrors).length > 0) return;

    // there is no backend yet, so we only show the thank you message
    setSent(true);
  }

  function handleReset() {
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setSent(false);
  }

  // thank you message after submit
  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-md">
        <h3 className="font-heading text-4xl uppercase text-accent mb-3">
          {successTitle}
        </h3>
        <p className="text-ink mb-6">{successText}</p>
        <button onClick={handleReset} className="btn-outline">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    // noValidate turns off the browser's own pop-up messages, we show ours
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Your Name
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

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
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

      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          aria-invalid={errors.subject ? "true" : "false"}
          className={fieldClass("subject")}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-700">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          aria-invalid={errors.message ? "true" : "false"}
          className={fieldClass("message")}
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-700">{errors.message}</p>}
      </div>

      <button type="submit" className="btn">
        Send Message
      </button>
    </form>
  );
}
