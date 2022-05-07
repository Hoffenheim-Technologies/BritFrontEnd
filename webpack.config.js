const path = require("path");

module.exports = {
    output: { chunkFilename: "js/[name].js?id=[chunkhash]" },
    resolve: {
        alias: {
            "@": path.resolve("resources/js"),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
            },
        ],
    },
};
