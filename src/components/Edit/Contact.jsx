import { useContext } from "react";
import { FormContext } from "./Edit";

export default function Contact() {
  const { data, handleChange } = useContext(FormContext);

  return (
    <fieldset>
      <legend>Contact Details</legend>
      <div className="input-control">
        <label htmlFor="management">Managed by:</label>
        <input
          id="management"
          type="text"
          value={data.management || ""}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={data.email || ""}
          onChange={handleChange}
        />
      </div>
      <div className="input-control">
        <label htmlFor="phone">Email:</label>
        <input
          id="phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
          value={data.phone || ""}
          onChange={handleChange}
        />
      </div>
    </fieldset>
  );
}
