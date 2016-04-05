// nodejs �е�pathģ��
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // ����ļ���path.resolve()���������Խ�����Ǹ�������������������ɾ���·��������ָ��ľ������ǵ�index.js�ļ�
    entry: {
     index: path.resolve(__dirname, '../app/index/index.js')},
       
    // �������
    output: {
        // ���·���� myProject/output/static
        path: path.resolve(__dirname, '../output/static'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        
        loaders: [
            // ʹ��vue-loader ���� .vue ��β���ļ�
            {
                test: /\.vue$/, 
                loader: 'vue'   
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'app/index/index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
    ]
}