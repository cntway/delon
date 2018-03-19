const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/router': 'ng.router',
    '@angular/common/http': 'ng.common.http',

    'ng-zorro-antd': 'ngZorro.antd',
    '@delon/acl': 'alain.acl',

    'rxjs/BehaviorSubject': 'Rx',
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/operators': 'Rx.Observable.prototype',
    'rxjs/observable/zip': 'Rx.Observable',
    'rxjs/observable/fromEvent': 'Rx.Observable',
    'rxjs/observable/FromEventObservable': 'Rx.Observable',
    'rxjs/observable/combineLatest': 'Rx.Observable',
    'rxjs/add/observable/throw': 'Rx.Observable',

    'date-fns/format': 'date-fns/format/index',
    'date-fns/parse': 'date-fns/parse/index',
    'date-fns/distance_in_words_to_now': 'date-fns/distance_in_words_to_now/index'
};

const listOfDateFns = [
    'format',
    'parse',
    'distanceInWordsToNow'
];

const listOfReplace = listOfDateFns.map(name => {
    const map = {};
    map[`import * as ${name}`] = `import ${name}`;
    return replace(map)
});

module.exports = {
    rollup: require('rollup'),
    context: 'this',
    output: {
        file: 'theme.umd.js',
        name: 'alain.theme',
        format: 'umd',
        sourcemap: true,
        globals: globals
    },
    plugins: [
        ...listOfReplace,
        resolve({
            jsnext: true,
            main: true
        })
    ],
    external: Object.keys(globals)
};
