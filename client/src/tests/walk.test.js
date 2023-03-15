import { render, fireEvent } from "@testing-library/react";
import Walk from "../components/Walk";
import "@testing-library/jest-dom/extend-expect";

const walk = {
  _id: "1",
  ownerID: "1",
  dogName: "Buddy",
  date: new Date("2023-03-20T12:00:00"),
  pickUpLocation: "Test Park",
  walkerID: "1",
  imageURL: [],
  coordinates: [0, 0],
  didPee: false,
  didPoo: false,
};

const onDeleteMock = jest.fn();
const onJoinMock = jest.fn();

const defaultProps = {
  walk: walk,
  onDelete: onDeleteMock,
  formPath: "/test/",
  findWalks: false,
  ownerHistory: false,
  ownerUpcoming: false,
  onJoin: onJoinMock,
};

describe("Walk component", () => {
  test("renders the Walk component with dog name, date and location", () => {
    const { getByText } = render(<Walk {...defaultProps} />);
    expect(getByText("Buddy")).toBeInTheDocument();
    expect(getByText("20th Mar")).toBeInTheDocument();
    expect(getByText("Test Park")).toBeInTheDocument();
  });

  test("calls onDelete when the delete button is clicked", () => {
    const { getByTestId } = render(<Walk {...defaultProps} />);
    const deleteButton = getByTestId("delete-button");
    fireEvent.click(deleteButton);
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
    expect(onDeleteMock).toHaveBeenCalledWith(walk._id);
  });

  test("calls onJoin when the join button is clicked in findWalks mode", () => {
    const { getByText } = render(<Walk {...defaultProps} findWalks />);
    const joinButton = getByText("Walk this doggy!");
    fireEvent.click(joinButton);
    expect(onJoinMock).toHaveBeenCalledTimes(1);
    expect(onJoinMock).toHaveBeenCalledWith(walk._id);
  });
});
