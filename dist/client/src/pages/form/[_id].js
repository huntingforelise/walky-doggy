var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useRouter } from "next/router";
import { useState } from "react";
import * as WalkService from "../../services/WalkService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var form = function () {
    var router = useRouter();
    var _id = router.query._id;
    var _a = useState(""), image = _a[0], setImage = _a[1];
    var _b = useState(false), pee = _b[0], setPee = _b[1];
    var _c = useState(false), poo = _c[0], setPoo = _c[1];
    var onSubmit = function (e) {
        e.preventDefault();
        addRecord({ eventId: _id, pee: pee, poo: poo });
        setPee(false);
        setPoo(false);
        router.push("/walkeraccount");
    };
    // const [location, setLocation] = useState([]);
    var addRecord = function (record) { return __awaiter(void 0, void 0, void 0, function () {
        var output, successToast, errorToast;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, WalkService.updateWalkRecord(record)];
                case 1:
                    output = _a.sent();
                    if (!output.error) {
                        successToast = function () { return toast("Thanks for updating this walky!"); };
                        successToast();
                    }
                    else {
                        errorToast = function () { return toast(output.res); };
                        errorToast();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var addImage = function (url, id) { return __awaiter(void 0, void 0, void 0, function () {
        var output, successToast, errorToast;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, WalkService.updateWalkImage(url, id)];
                case 1:
                    output = _a.sent();
                    if (!output.error) {
                        successToast = function () { return toast("Thanks for updating this walky!"); };
                        successToast();
                    }
                    else {
                        errorToast = function () { return toast(output.res); };
                        errorToast();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    // const addLocation = async (location, id) => {
    //   await WalkService.updateWalkLocation(location, id);
    // };
    // useEffect(() => {
    //   console.log("useEffect Location: " + JSON.stringify(location));
    //   const postLocation = async () => {
    //     const locationServer = await addLocation(location, _id);
    //     //setLocation(eventsServer);
    //   };
    //   if (JSON.stringify(location) !== "{}") postLocation();
    // }, [location]);
    // const startTracking = () => {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.watchPosition(function (position) {
    //       console.log("Latitude is :", position.coords.latitude);
    //       console.log("Longitude is :", position.coords.longitude);
    //     });
    //   }
    //   navigator.geolocation.watchPosition(
    //     (data) => {
    //       setLocation([data.coords.longitude, data.coords.latitude]);
    //       // coordinates.push([data.coords.longitude,data.coords.latitude]);
    //       // window.localStorage.setItem("coordinates",JSON.stringify(coordinates));
    //     },
    //     (error) => console.log(error),
    //     {
    //       enableHighAccuracy: true,
    //     }
    //   );
    // };
    // const stopTracking = () => {
    //   return;
    // };
    var uploadImage = function () {
        var data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "geixym3t");
        data.append("cloud_name", "dljhj1szz");
        fetch("https://api.cloudinary.com/v1_1/dljhj1szz/image/upload", {
            method: "POST",
            body: data,
        })
            .then(function (res) { return res.json(); })
            .then(function (data) { return addImage(data.url, _id); })
            .catch(function (error) { return console.log(error); });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "addform" },
            React.createElement("form", { className: "add-form", onSubmit: onSubmit },
                React.createElement("div", { className: "submit-form-title" },
                    React.createElement("h1", null, "POO/PEE RECORD")),
                React.createElement("div", null,
                    React.createElement("div", null,
                        React.createElement("div", { className: "submit-form-control" },
                            React.createElement("label", { className: "adjustfont" }, "PEE"),
                            React.createElement("input", { type: "checkbox", name: "pee", value: pee, onChange: function (e) { return setPee(e.target.checked); } })),
                        React.createElement("div", null,
                            React.createElement("div", { className: "submit-form-control" },
                                React.createElement("label", null, "POO"),
                                React.createElement("input", { type: "checkbox", name: "poo", value: poo, onChange: function (e) { return setPoo(e.target.checked); } })))),
                    React.createElement("div", { className: "submit-div" },
                        React.createElement("input", { type: "submit", value: "Submit", className: "btn-record" }))))),
        React.createElement("div", { className: "upload-container-outer" },
            React.createElement("div", { className: "upload-container" },
                React.createElement("div", null,
                    React.createElement("input", { type: "file", onChange: function (e) { return setImage(e.target.files[0]); } }),
                    React.createElement("button", { onClick: uploadImage }, "Upload"))))));
};
export default form;
//# sourceMappingURL=%5B_id%5D.js.map