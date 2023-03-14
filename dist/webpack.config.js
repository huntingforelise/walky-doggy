var path = require("path");
module.exports = {
    entry: { app: "./client/src/pages/_app.js" },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
//# sourceMappingURL=webpack.config.js.map