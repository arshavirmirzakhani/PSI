hljs.registerLanguage('psilang', function(hljs) {
    return {
        name: 'PSI',

        keywords: {
            keyword: 'module entry required constant function',
            literal: 'true false null'
        },

        contains: [
            // single-line comments
            {
                className: 'comment',
                begin: '//',
                end: '$'
            },
            
            // multi-line comments
            hljs.COMMENT(
                '//\\*', // begin
                '\\*//', // end
            ),
            // strings
            {
                className: 'string',
                begin: '"',
                end: '"',
                contains: [{
                    begin: '\\\\.'
                }]
            },

            // numbers
            {
                className: 'number',
                begin: '\\b\\d+(\\.\\d+)?\\b'
            },

            // type
            {
                className: 'type',
                begin: '\\$[a-zA-z_][a-zA-z0-9_]*',
            },

            // locals
            {
                className: 'local',
                begin: '\\%[a-zA-z_][a-zA-z0-9_]*',
            },

            // constants
            {
                className: 'constant',
                begin: '\\@[a-zA-z_][a-zA-z0-9_]*',
            },

            // metas
            {
                className: 'meta',
                begin: '\\#[a-zA-z_][a-zA-z0-9_]*',
            },

            // argument
            {
                className: 'argument',
                begin: '\\![0-9]*',
            },

        ]
    };
});

hljs.highlightAll();