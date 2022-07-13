import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { InputRadioGroup, InputText } from "./components";

interface Form {
  radio: string;
  text: string;
}

const App: React.FC = (props) => {
  const [values, setValues] = useState<Form>({ radio: "1", text: "string" });
  console.log(values);
  return (
    <>
      <InputRadioGroup
        name="radio"
        value={values.radio}
        options={[
          { label: "opcion 1", value: "1" },
          { label: "opcion 2", value: "2" }
        ]}
        onChange={(name, val): void => setValues({ ...values, [name]: val })}
        label={"label test"}
        customLabel={<span>qw</span>}
      />
      <InputText
        label="Label input"
        required={true}
        onChange={(name, val): void => setValues({ ...values, [name]: val })}
        name="text"
        value={values.text}
      />
    </>
  );
};

export default App;
