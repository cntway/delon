const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/router': 'ng.router',
    '@angular/common/http': 'ng.common.http',
    '@angular/forms': 'ng.forms',

    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/BehaviorSubject': 'Rx',
    'rxjs/operators': 'Rx.Observable.prototype',
    'rxjs/observable/of': 'Rx.Observable',
    'rxjs/observable/fromEvent': 'Rx.Observable',
    'rxjs/observable/FromEventObservable': 'Rx.Observable',
    'rxjs/observable/ErrorObservable': 'Rx.Observable',

    'date-fns/add_seconds': 'date-fns/add_seconds/index'
};

const listOfDateFns = [
    'addSeconds'
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
        file: 'cache.umd.js',
        name: 'alain.cache',
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
