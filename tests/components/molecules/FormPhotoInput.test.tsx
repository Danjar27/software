import { render } from "@testing-library/react";
import FormPhotoInput from "../../../src/components/molecules/FormPhotoInput";
import { Formik } from "formik";

describe("Form Photo Input component", () => {
  const props = {
    name: "photo",
  };

  const initialValues = {
    test: "",
  };

  const onSubmit = jest.fn();

  test("should be defined", () => {
    expect(FormPhotoInput).toBeDefined();
  });

  test("should throw error if is not wrapped in a formik component", () => {
    expect(() => {
      render(<FormPhotoInput {...props} />);
    }).toThrow();
  });

  test("should render a form-photo-input", () => {
    const { getByTestId } = render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <FormPhotoInput {...props} />
      </Formik>
    );
    expect(getByTestId("form-photo-input")).toBeDefined();
  });

  test("should render a form-photo-input with type file", () => {
    const { getByTestId } = render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <FormPhotoInput {...props} />
      </Formik>
    );
    expect(getByTestId("form-photo-input").getAttribute("type")).toBe("file");
  });
});
