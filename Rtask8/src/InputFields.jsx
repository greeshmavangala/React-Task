import React, { useContext } from "react";
import { FormContext } from "./App";

function InputFields() {
  const { formData, handleChange } = useContext(FormContext);

  return (
    <div className="input-group">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option>Female</option>
        <option>Male</option>
        <option>Other</option>
      </select>

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />

      <input
        type="text"
        name="college"
        placeholder="College Name"
        value={formData.college}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={formData.course}
        onChange={handleChange}
      />

      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      ></textarea>

      <textarea
        name="message"
        placeholder="Write Your Message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default InputFields;