var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as WalkService from "../../services/WalkService";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var book = function () {
    var _a = useState(""), dogName = _a[0], setDogName = _a[1];
    var _b = useState(""), date = _b[0], setDate = _b[1];
    var _c = useState(""), pickUpLocation = _c[0], setPickUpLocation = _c[1];
    var ownerID = localStorage.getItem("userId");
    var postWalk = function (walk) {
        return __awaiter(void 0, void 0, void 0, function () {
            var output, successToast, errorToast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, WalkService.postWalk(walk)];
                    case 1:
                        output = _a.sent();
                        if (!output.error) {
                            successToast = function () { return toast("Your walky has been booked!"); };
                            successToast();
                        }
                        else {
                            errorToast = function () { return toast(output.res); };
                            errorToast();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    var onSubmit = function (e) {
        e.preventDefault();
        postWalk({ ownerID: ownerID, dogName: dogName, date: date, pickUpLocation: pickUpLocation });
        setDogName("");
        setDate("");
        setPickUpLocation("");
    };
    return (React.createElement(React.Fragment, null, React.createElement("div", { className: "myaccount" }, React.createElement(Link, { href: "/owneraccount/book" }, React.createElement("button", { className: styles.buttonselected }, "Book a walk")), React.createElement(Link, { href: "/owneraccount/ownerhistory" }, React.createElement("button", { className: styles.button }, "View My Walk History")), React.createElement(Link, { href: "/owneraccount/upcoming" }, React.createElement("button", { className: styles.button }, "Upcoming Walks"))), React.createElement("form", { className: "add-form", onSubmit: onSubmit }, React.createElement("div", { className: "form-control" }, React.createElement("label", null, "DOG NAME"), React.createElement("input", { type: "text", name: "title", placeholder: "your dog's name", required: true, value: dogName, onChange: function (e) { return setDogName(e.target.value); } })), React.createElement("div", { className: "form-control" }, React.createElement("label", null, "DATE"), React.createElement(DatePicker, { className: "date-picker", showTimeSelect: true, required: true, selected: date, onSelect: function (date) { return setDate(date); }, onChange: function (date) { return setDate(date); }, dateFormat: "Pp" })), React.createElement("div", { className: "form-control" }, React.createElement("label", null, "PICK-UP LOCATION"), React.createElement("input", { type: "text", name: "venue", placeholder: "pick up address", required: true, value: pickUpLocation, onChange: function (e) { return setPickUpLocation(e.target.value); } })), React.createElement("input", { type: "submit", value: "BOOK", className: "btn-block" }))));
};
export default book;
//# sourceMappingURL=book.js.map
//# sourceMappingURL=book.js.map