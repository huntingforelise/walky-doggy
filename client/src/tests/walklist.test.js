import { render } from "@testing-library/react";
import WalkList from "../components/WalkList";
import "@testing-library/jest-dom/extend-expect";

const walks = [
  {
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
  },
  {
    _id: "2",
    ownerID: "2",
    dogName: "Max",
    date: new Date("2023-03-21T12:00:00"),
    pickUpLocation: "Test Park",
    walkerID: "1",
    imageURL: [],
    coordinates: [0, 0],
    didPee: false,
    didPoo: false,
  },
];

const onDeleteMock = jest.fn();
const onJoinMock = jest.fn();

const defaultProps = {
  walks: walks,
  onDelete: onDeleteMock,
  formPath: "/test/",
  findWalks: false,
  ownerHistory: false,
  ownerUpcoming: false,
  onJoin: onJoinMock,
};

describe("WalkList component", () => {
  test("renders the correct number of Walk components", () => {
    const { getAllByTestId } = render(<WalkList {...defaultProps} />);
    const walkComponents = getAllByTestId("walk-component");
    expect(walkComponents.length).toBe(walks.length);
  });
});
