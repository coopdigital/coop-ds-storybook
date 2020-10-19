import React from "react";
import InputSelect from "./InputSelect";

export default {
  title: "Base/InputSelect",
  component: InputSelect,
};

export const Basic = (args) => <InputSelect {...args} />;
Basic.args = {
  id: "basic",
  name: "basic",
  options: [
    {
      value: "1",
      text: "one",
    },
    {
      value: "2",
      text: "two",
    },
  ],
};

export const All = () => {
  const options = [
    {
      value: "1",
      text: "one",
    },
    {
      value: "2",
      text: "two",
    },
  ];
  return (
    <>
      <InputSelect id="id" name="name" options={options} />
      <InputSelect id="id" name="name" options={options} width={10} />
      <InputSelect
        id="id"
        name="name"
        options={options}
        placeholder="Placeholder"
      />
      <InputSelect id="id" name="name" label="With Label" options={options} />
      <InputSelect id="id" name="name" hint="With Hint" options={options} />
      <InputSelect
        id="id"
        name="name"
        label="With Label and Hint"
        hint="With Label and Hint"
        options={options}
      />
    </>
  );
};

export const WithError = () => {
  const options = [
    {
      value: "1",
      text: "one",
    },
    {
      value: "2",
      text: "two",
    },
  ];
  return (
    <>
      <InputSelect
        id="id"
        name="name"
        hasError
        errorMsg="Error Message"
        options={options}
      />
      <InputSelect
        id="id"
        name="name"
        hasError
        errorMsg="Error Message"
        options={options}
        width={10}
      />
      <InputSelect
        id="id"
        name="name"
        hasError
        errorMsg="Error Message"
        options={options}
        placeholder="Placeholder"
      />
      <InputSelect
        id="id"
        name="name"
        label="With Label"
        hasError
        errorMsg="Error Message"
        options={options}
      />
      <InputSelect
        id="id"
        name="name"
        hint="With Hint"
        hasError
        errorMsg="Error Message"
        options={options}
      />
      <InputSelect
        id="id"
        name="name"
        label="With Label and Hint"
        hint="With Label and Hint"
        hasError
        errorMsg="Error Message"
        options={options}
      />
    </>
  );
};
