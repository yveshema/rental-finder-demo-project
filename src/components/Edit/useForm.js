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

    const address = new Address(
      data.streetNo,
      data.streetName,
      data.city,
      data.province,
      data.zip,
    );
    const specs = new Specs(data.beds, data.baths, data.floor, data.type);
    const contact = {
      email: data.email,
      phone: data.phone,
    };

    const { name, description, utilities, features, policies, management } =
      data;

    const formData = {
      id,
      name,
      description,
      address,
      specs,
      utilities,
      features,
      policies,
      management,
    };

    submit(formData, {
      method: "post",
      encType: "application/json",
      action: `/listings/${id}/edit`,
    });
  };

  return {
    data,
    handleChange,
    patch,
    onSubmit,
  };
}

