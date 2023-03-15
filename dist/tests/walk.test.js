import { render, fireEvent } from "@testing-library/react";
import Walk from "../components/Walk";
import "@testing-library/jest-dom/extend-expect";
var walk = {
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
var onDeleteMock = jest.fn();
var onJoinMock = jest.fn();
var defaultProps = {
    walk: walk,
    onDelete: onDeleteMock,
    formPath: "/test/",
    findWalks: false,
    ownerHistory: false,
    ownerUpcoming: false,
    onJoin: onJoinMock,
};
describe("Walk component", function () {
    test("renders the Walk component with dog name, date and location", function () {
        var getByText = render(<Walk {...defaultProps}/>).getByText;
        expect(getByText("Buddy")).toBeInTheDocument();
        expect(getByText("20th Mar")).toBeInTheDocument();
        expect(getByText("Test Park")).toBeInTheDocument();
    });
    test("calls onDelete when the delete button is clicked", function () {
        var getByTestId = render(<Walk {...defaultProps}/>).getByTestId;
        var deleteButton = getByTestId("delete-button");
        fireEvent.click(deleteButton);
        expect(onDeleteMock).toHaveBeenCalledTimes(1);
        expect(onDeleteMock).toHaveBeenCalledWith(walk._id);
    });
    test("calls onJoin when the join button is clicked in findWalks mode", function () {
        var getByText = render(<Walk {...defaultProps} findWalks/>).getByText;
        var joinButton = getByText("Walk this doggy!");
        fireEvent.click(joinButton);
        expect(onJoinMock).toHaveBeenCalledTimes(1);
        expect(onJoinMock).toHaveBeenCalledWith(walk._id);
    });
});
//# sourceMappingURL=walk.test.js.map