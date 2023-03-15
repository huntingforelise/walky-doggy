import { render } from "@testing-library/react";
import WalkList from "../components/WalkList";
import "@testing-library/jest-dom/extend-expect";
var walks = [
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
var onDeleteMock = jest.fn();
var onJoinMock = jest.fn();
var defaultProps = {
    walks: walks,
    onDelete: onDeleteMock,
    formPath: "/test/",
    findWalks: false,
    ownerHistory: false,
    ownerUpcoming: false,
    onJoin: onJoinMock,
};
describe("WalkList component", function () {
    test("renders the correct number of Walk components", function () {
        var getAllByTestId = render(<WalkList {...defaultProps}/>).getAllByTestId;
        var walkComponents = getAllByTestId("walk-component");
        expect(walkComponents.length).toBe(walks.length);
    });
});
//# sourceMappingURL=walklist.test.js.map