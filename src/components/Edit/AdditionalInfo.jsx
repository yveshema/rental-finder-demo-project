import { useState } from "react";

import InfoCategory from "./InfoCategory";

export default function AdditionalInfo() {
  const [option, setOption] = useState("");

  return (
    <fieldset>
      <legend>Additional Info</legend>
      <div className="input-control">
        <label htmlFor="category">Add:</label>
        <select id="category" onChange={(e) => setOption(e.target.value)}>
          <option value="">--Choose an option--</option>
          <option value="utilities">Utilities</option>
          <option value="features">Features</option>
          <option value="policies">Policies</option>
        </select>
      </div>
      {option !== "" && <InfoCategory category={option} />}
    </fieldset>
  );
}
