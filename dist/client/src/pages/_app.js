var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import "@/styles/globals.css";
import Layout from "../components/Layout";
import { AuthProvider } from "../utils/AuthContext";
import { ToastContainer } from "react-toastify";
export default function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(AuthProvider, null,
        React.createElement(Layout, null,
            React.createElement(Component, __assign({}, pageProps)),
            React.createElement(ToastContainer, null))));
}
//# sourceMappingURL=_app.js.map