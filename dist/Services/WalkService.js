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
var BASE_URL = "http://localhost:3001";
export var getWalk = function (id) {
    return fetch("".concat(BASE_URL, "/walk/").concat(id))
        .then(function (res) { return (res.status <= 400 ? res : Promise.reject(res)); })
        .then(function (res) { return res.json(); })
        .catch(function (err) { return err; });
};
export var getWalks = function () {
    return fetch("".concat(BASE_URL, "/walks"))
        .then(function (res) { return (res.status <= 400 ? res : Promise.reject(res)); })
        .then(function (res) { return res.json(); })
        .catch(function (err) { return err; });
};
export var postWalk = function (body) {
    return fetch("".concat(BASE_URL, "/walk"), {
        method: "POST",
        body: JSON.stringify(body),
        credentials: "include",
        mode: "cors",
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then(function (res) { return res.json(); })
        .catch(function (err) { return console.log(err); });
};
export var joinWalk = function (id, walkerID) {
    return fetch("".concat(BASE_URL, "/joinwalk/").concat(id), {
        method: "PUT",
        body: JSON.stringify({ walkerID: walkerID }),
        credentials: "include",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
    })
        .then(function (res) { return res.json(); })
        .catch(function (err) { return console.log(err); });
};
export var updateWalkRecord = function (record) {
    var ID = record.eventId;
    return fetch("".concat(BASE_URL, "/walk/").concat(ID), {
        method: "PUT",
        body: JSON.stringify(record),
        credentials: "include",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
    })
        .then(function (res) { return res.json(); })
        .catch(function (err) { return console.log(err); });
};
export var updateWalkImage = function (link, id) { return __awaiter(void 0, void 0, void 0, function () {
    var ID, URL;
    return __generator(this, function (_a) {
        ID = id;
        URL = link;
        return [2 /*return*/, fetch("".concat(BASE_URL, "/walk/").concat(ID, "/image"), {
                method: "PUT",
                body: JSON.stringify({ URL: URL }),
                headers: {
                    "Content-type": "application/json",
                },
                credentials: "include",
                mode: "cors",
            })
                .then(function (res) { return res.json(); })
                .catch(function (err) { return console.log(err); })];
    });
}); };
export var deleteWalk = function (id) {
    return fetch("".concat(BASE_URL, "/walk/").concat(id), {
        method: "DELETE",
        credentials: "include",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
    })
        .then(function (res) { return res.json(); })
        .catch(function (err) { return console.log(err); });
};
// export const updateWalkLocation = (location, id) => {
//   console.log("walkservice", location);
//   const ID = id;
//   return fetch(`${BASE_URL}/walk/${ID}/location`, {
//     method: "PUT",
//     credentials: "include",
//     mode: "cors",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(location),
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };
//# sourceMappingURL=WalkService.js.map