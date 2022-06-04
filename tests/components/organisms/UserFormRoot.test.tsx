import {render} from "@testing-library/react";
import UserFormRoot from "../../../src/components/organisms/UserFormRoot";

describe("User Form Root component", () => {

  test("should be defined", () => {
    expect(UserFormRoot).toBeDefined();
  })

  test("should render five input elements", () => {
    const {getAllByTestId} = render(<UserFormRoot />);
    expect(getAllByTestId('form-input').length).toBe(5);
  })

})