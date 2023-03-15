import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Book from "../pages/owneraccount/book";
import "@testing-library/jest-dom/extend-expect";
import * as WalkService from "../services/WalkServiceDEL";

jest.mock("../services/WalkServiceDEL", () => {
  return {
    postWalk: jest.fn(() => Promise.resolve({})),
  };
});

describe("Book component", () => {
  test("renders form elements", () => {
    const { getByPlaceholderText } = render(<Book />);

    // Need to change the aria labels in book once TS refactor is done:
    // expect(getByLabelText("DOG NAME")).toBeInTheDocument();
    expect(getByPlaceholderText("your dog's name")).toBeInTheDocument();
    // expect(getByLabelText("DATE")).toBeInTheDocument();
    // expect(getByLabelText("PICK-UP LOCATION")).toBeInTheDocument();
    expect(getByPlaceholderText("pick up address")).toBeInTheDocument();
  });


//Need to test how it will select a date
  // test("submits the form with user input", async () => {
  //   const { getByPlaceholderText, getByText } = render(<Book />);

  //   fireEvent.change(getByPlaceholderText("your dog's name"), {
  //     target: { value: "Buddy" },
  //   });

  //   fireEvent.change(getByPlaceholderText("pick up address"), {
  //     target: { value: "123 Doggy Street" },
  //   });

  //   const datePickerLabel = getByText("DATE");
  //   const datePickerInput = datePickerLabel.nextElementSibling.querySelector('input');
  //   userEvent.click(datePickerInput);
  //   fireEvent(
  //     datePickerInput,
  //     new CustomEvent("react-datepicker__input-container", {
  //       detail: { value: new Date("2023-03-20T12:00:00") },
  //     })
  //   );

  //   fireEvent.click(getByText("BOOK"));
  //   await waitFor(() => {
  //     expect(WalkService.postWalk).toHaveBeenCalled();
  //   });
  // });
});
