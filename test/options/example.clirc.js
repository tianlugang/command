module.exports = {
    root: '.',
    action: './src',
    order: {
        help: {
            alias: [
                '-h',
                '--help'
            ],
            param: []
        },
        version: {
            alias: [
                'v',
                'V',
                '-v',
                '--version'
            ]
        }
    }
};
