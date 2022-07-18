import { Address } from "components/AddressBook";
import { InputErrorMessage } from "components/InputErrorMessage";
import { InputLabel } from "components/InputLabel";
import { InputText } from "components/InputText";
import { FormikErrors } from "formik";
import Select from "react-select";

interface FormProps {
  values: Address;
  errors: FormikErrors<Address>;
  submitCount: number;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<Address>> | Promise<void>;
}

const countries = [{ value: "england" }, { value: "spain" }];

export const Form: React.FC<FormProps> = (props) => {
  const { values, errors, submitCount, setFieldValue } = props;
  const { line1, line2, line3, country, postcode, town } = values;
  const isFormEverSubmitted = submitCount > 0;
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-2">
      <InputText
        label="Line 1"
        onChange={setFieldValue}
        name="line1"
        value={line1}
        error={isFormEverSubmitted && errors.line1}
        required
      />
      <InputText
        label="Line 2"
        onChange={setFieldValue}
        name="line2"
        value={line2}
        error={isFormEverSubmitted && errors.line2}
      />
      <InputText
        label="Line 3"
        onChange={setFieldValue}
        name="line3"
        value={line3}
        error={isFormEverSubmitted && errors.line3}
      />
      <InputText
        label="Town"
        onChange={setFieldValue}
        name="town"
        value={town}
        error={isFormEverSubmitted && errors.town}
        required
      />
      <InputText
        label="Post code"
        onChange={setFieldValue}
        name="postcode"
        value={postcode}
        error={isFormEverSubmitted && errors.postcode}
        required
      />
      <div>
        <InputLabel text="Country" required />
        <Select<{ value: string }>
          classNamePrefix="react-select"
          name="country"
          placeholder=""
          value={countries.find((el) => el.value === country)}
          getOptionLabel={({ value }): string => value}
          options={countries}
          onChange={({ value }: any, { name }): void =>
            setFieldValue(name as string, value) as unknown as void
          }
          menuPosition={"fixed"}
        />
        <InputErrorMessage text={isFormEverSubmitted && errors.country} />
      </div>
    </div>
  );
};
