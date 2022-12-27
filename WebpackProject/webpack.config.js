const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        homePage: {
            import: './src/Index_Page/homePage.js',
        },
        fetchBeveragesList: {
            import: './src/Customer_View/fetchBeveragesList.js',
            dependOn: 'sharedGetCustomersData',
        },
        // removeOrderFromQueue: {
        //     import: './src/Customer_View/removeOrderFromQueue.js',
        //     dependOn: 'sharedFireStoreAccess',
        // },
        storeCustomerData: {
            import: './src/Beverage_Order_Form/storeCustomerData.js',
            dependOn: 'sharedFireStoreAccess',
        },
        shiftToNextQueue: {
            import: './src/Admin_View/shiftToNextQueue.js',
            dependOn: ['sharedFireStoreAccess', 'sharedGetCustomersData'],
        },
        getAndUpdateFirebaseData: {
            import: './src/Admin_OrderListView/getAndUpdateFirebaseData.js',
            dependOn: 'sharedFireStoreAccess',
        },
        sharedFireStoreAccess: './src/Index_Page/fireStoreAccess.js',
        sharedGetCustomersData: './src/Customer_View/getCustomersData.js',
    },
    devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    // },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/Index_Page/index.html',
            chunks: ['homePage']
        }),
        new HtmlWebpackPlugin({
            filename: 'customerView_Page.html',
            template: './src/Customer_View/customerView_Page.html',
            chunks: ['fetchBeveragesList', 'removeOrderFromQueue', 'sharedGetCustomersData', 'sharedFireStoreAccess']
        }),
        new HtmlWebpackPlugin({
            filename: 'orderForm.html',
            template: './src/Beverage_Order_Form/orderForm.html',
            chunks: ['storeCustomerData', 'sharedFireStoreAccess']
        }),
        new HtmlWebpackPlugin({
            filename: 'adminView.html',
            template: './src/Admin_View/adminView.html',
            chunks: ['shiftToNextQueue', 'sharedFireStoreAccess', 'sharedGetCustomersData']
        }),
        new HtmlWebpackPlugin({
            filename: 'ordersListView.html',
            template: './src/Admin_OrderListView/ordersListView.html',
            chunks: ['getAndUpdateFirebaseData', 'sharedFireStoreAccess']
        }),
        new MiniCssExtractPlugin(),
    ],
};