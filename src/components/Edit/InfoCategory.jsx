import { useContext, useState } from "react";
import { FormContext } from "./Edit";

export default function InfoCategory({ category }) {
  const [input, setInput] = useState("");
  const [option, setOption] = useState("unit");
  const { data, patch } = useContext(FormContext);

  const onAdd = () => {
    switch (category) {
      case "features": {
        const features = data.features ? { ...data.features } : {};
        if (!features[option]) {
          features[option] = [];
        }
        features[option].push(input);
        patch(category, features);
        break;
      }
      default: {
        const values = data[category] ? [...data[category]] : [];
        values.push(input);
        patch(category, values);
        break;
      }
    }
    setInput("");
  };

  return (
    <div className="input-control">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      {category === "features" && (
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="unit">Unit</option>
          <option value="building">Building</option>
          <option value="nearby">Nearby</option>
          <option value="other">Other</option>
        </select>
      )}
      <button type="button" onClick={onAdd}>
        Add
      </button>
    </div>
  );
}
