module.exports = {
    settings: {
        fences: false,
        bullet: '-',
        listItemIndent: '1',
        incrementListMarker: true,
        rule: '-',
        ruleRepetition: 3,
        ruleSpaces: false,
        strong: '*',
        emphasis: '_'
    },
    plugins: {
        'remark-lint-blockquote-indentation': ['error', 2],
        'remark-lint-code-block-style': ['error', 'indented'],
        'remark-lint-emphasis-marker': ['error', '_'],
        'remark-lint-final-newline': ['error'],
        'remark-lint-hard-break-spaces': ['error'],
        'remark-lint-link-title-style': ['error', '"'],
        'remark-lint-list-item-bullet-indent': ['error'],
        'remark-lint-list-item-content-indent': ['error'],
        'remark-lint-list-item-indent': ['error', 'space'],
        'remark-lint-no-auto-link-without-protocol': ['error'],
        'remark-lint-no-blockquote-without-marker': ['error'],
        'remark-lint-no-duplicate-definitions': ['error'],
        'remark-lint-no-heading-content-indent': ['error'],
        'remark-lint-no-inline-padding': ['error'],
        'remark-lint-no-shortcut-reference-image': ['error'],
        'remark-lint-no-shortcut-reference-link': ['error'],
        'remark-lint-no-undefined-references': ['error'],
        'remark-lint-no-unused-definitions': ['error'],
        'remark-lint-ordered-list-marker-style': ['error', '.'],
        'remark-lint-ordered-list-marker-value': ['error', 'ordered'],
        'remark-lint-rule-style': ['error', '---'],
        'remark-lint-strong-marker': ['error', '*'],
        'remark-lint-unordered-list-marker-style': ['error', '-']
    }
};