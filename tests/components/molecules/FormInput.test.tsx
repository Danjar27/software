import {render} from "@testing-library/react";
import FormInput from "../../../src/components/molecules/FormInput";
import {Formik} from "formik";

describe("FormInput", () => {

  const initialValues = {
    test: "",
  };

  const onSubmit = jest.fn();

  const props = {
    name: 'test',
  }

  it("should be defined", () => {
    expect(FormInput).toBeDefined();
  });

  it("should throw an error if no name is passed", () => {
    expect(() => {
      render(<FormInput name = '' />);
    }).toThrow();
  });

  it("should throw an error if it's no wrapped inside a formik tag", () => {
    expect(() => {
      render(<FormInput {...props}/>);
    }).toThrow();
  });

  it("should render an input", () => {
    const {getByRole} = render(
      <Formik initialValues = {initialValues} onSubmit={onSubmit}>
        <FormInput {...props}/>
      </Formik>
    );
    expect(getByRole("textbox")).toBeDefined();
  });

});