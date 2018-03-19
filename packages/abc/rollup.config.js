const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/router': 'ng.router',
    '@angular/common/http': 'ng.common.http',
    '@angular/forms': 'ng.forms',

    'ng-zorro-antd': 'ngZorro.antd',
    'ng-zorro-antd-extra': 'ngZorro.antd_extra',
    'file-saver': 'saveAs',
    'ngx-countdown': 'ngxCountDown',
    'xlsx': 'xlsx',
    'jszip': 'jszip',

    '@angular/cdk': 'ng.cdk',
    '@angular/cdk/coercion': 'ng.cdk.coercion',
    '@angular/cdk/overlay': 'ng.cdk.overlay',
    '@angular/cdk/portal': 'ng.cdk.portal',

    'rxjs/BehaviorSubject': 'Rx',
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/operators': 'Rx.Observable.prototype',
    'rxjs/observable/of': 'Rx.Observable',
    'rxjs/observable/zip': 'Rx.Observable',
    'rxjs/observable/fromEvent': 'Rx.Observable',
    'rxjs/observable/FromEventObservable': 'Rx.Observable',
    'rxjs/observable/combineLatest': 'Rx.Observable',

    'date-fns/format': 'date-fns/format/index',
    'date-fns/parse': 'date-fns/parse/index',
    'date-fns/add_seconds': 'date-fns/add_seconds/index',
    'date-fns/add_weeks': 'date-fns/add_weeks/index',
    'date-fns/start_of_month': 'date-fns/start_of_month/index',
    'date-fns/end_of_month': 'date-fns/end_of_month/index',
    'date-fns/sub_months': 'date-fns/sub_months/index',
    'date-fns/start_of_year': 'date-fns/start_of_year/index',
    'date-fns/end_of_year': 'date-fns/end_of_year/index',
    'date-fns/sub_years': 'date-fns/sub_years/index',
    'date-fns/add_days': 'date-fns/add_days/index',

    '@delon/theme': 'alain.theme',
    '@delon/acl': 'alain.acl'
};

const listOfDateFns = [
    'format',
    'parse',
    'addSeconds',
    'addWeeks',
    'startOfMonth',
    'endOfMonth',
    'subMonths',
    'startOfYear',
    'endOfYear',
    'subYears',
    'addDays'
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
        file: 'abc.umd.js',
        name: 'alain.abc',
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
