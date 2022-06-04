import {render} from "@testing-library/react";
import RoundedButton from "../../../src/components/atoms/RoundedButton";

describe("Rounded Button component", () => {

  const props = {
    text: 'text'
  }

  test("should be defined", () => {
    expect(RoundedButton).toBeDefined();
  })

  test("should render a button", () => {
    const {getByRole} = render(<RoundedButton {...props} />);
    expect(getByRole("button")).toBeDefined();
  })

  test("should render a button with specified text", () => {
    const {getByText} = render(<RoundedButton {...props} />);
    expect(getByText(props.text)).toBeDefined();
  })

})