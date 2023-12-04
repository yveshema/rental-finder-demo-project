import { useState } from "react";

import { useSubmit } from "react-router-dom";

import { Address, Specs } from "../../utils/classes";

const flatten = (data) => {
  return {
    ...data,
    ...data.address,
    ...data.specs,
    ...data.contact,
  };
};

const DEFAULT_DATA = {
  beds: 1,
  baths: 1,
  floor: 320,
  type: "apartment",
  province: "B.C",
};

export default function useForm(listing = null) {
  const [data, setData] = useState(listing || DEFAULT_DATA);
  const submit = useSubmit();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const patch = (field, updates) => {
    setData({
      ...data,
      [field]: updates,
    });
  };

  const onSubmit = (e, id) => {
    e.preventDefault();

    submit(
      { ...data, id },
      {
        method: "post",
        encType: "application/json",
        action: `/listings/${id}/edit`,
      },
    );
  };

  return {
    data,
    handleChange,
    patch,
    onSubmit,
  };
}

