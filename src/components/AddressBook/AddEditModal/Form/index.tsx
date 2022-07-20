import Select from "react-select";
import { Address } from "components/AddressBook";
import { InputErrorMessage, InputLabel, InputText } from "components/";
import { FormikErrors } from "formik";

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

const countries = [{ value: "England" }, { value: "Wales" },{ value: "Scotland" }]; // prettier-ignore

export const Form: React.FC<FormProps> = (props) => {
  const { values, errors, submitCount, setFieldValue } = props;
  const { line1, line2, line3, country, postcode, town } = values;
  const isFormEverSubmitted = submitCount > 0;
  return (
    <form>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-2">
        <InputText
          label="Line 1"
          onChange={setFieldValue}
          name="line1"
          id={"line1"}
          value={line1}
          error={isFormEverSubmitted && errors.line1}
          required
        />
        <InputText
          label="Line 2"
          onChange={setFieldValue}
          name="line2"
          id={"line2"}
          value={line2}
          error={isFormEverSubmitted && errors.line2}
        />
        <InputText
          label="Line 3"
          onChange={setFieldValue}
          name="line3"
          id={"line3"}
          value={line3}
          error={isFormEverSubmitted && errors.line3}
        />
        <InputText
          label="Town"
          onChange={setFieldValue}
          name="town"
          id={"town"}
          value={town}
          error={isFormEverSubmitted && errors.town}
          required
        />
        <InputText
          label="Post code"
          onChange={setFieldValue}
          name="postcode"
          id={"postcode"}
          value={postcode}
          error={isFormEverSubmitted && errors.postcode}
          required
        />
        <div>
          <InputLabel text="Country" required htmlFor="country" />
          <Select<{ value: string }>
            classNamePrefix="react-select"
            name="country"
            inputId="country"
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
    </form>
  );
};
