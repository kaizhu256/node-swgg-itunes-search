/*
example.js

this script will run a web-demo of swgg-itunes-search

instruction
    1. save this script as example.js
    2. run the shell command:
        $ npm install kaizhu256/node-swgg-itunes-search#alpha && PORT=8081 node example.js
    3. open a browser to http://127.0.0.1:8081 and play with the web-demo
    4. edit this script to suit your needs
*/



/* istanbul instrument in package swgg_itunes_search */
/* jslint-utility2 */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 4,
    maxlen: 100,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    var local;



    // run shared js-env code - init-before
    (function () {
        // init local
        local = {};
        // init modeJs
        (function () {
            try {
                local.modeJs = typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            } catch (ignore) {
            }
            local.modeJs = local.modeJs || 'browser';
        }());
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        // re-init local
        local = local.global.utility2_rollup || (local.modeJs === 'browser'
            ? local.global.utility2_swgg_itunes_search
            : require('swgg-itunes-search'));
        // init exports
        local.global.local = local;
        // init assets
        local.assetsDict['/assets.index.template.html'] = local.assetsDict['/assets.swgg.html'];
    }());
    switch (local.modeJs) {



    // run browser js-env code - init-test
    /* istanbul ignore next */
    case 'browser':
        break;



    // run node js-env code - init-test
    /* istanbul ignore next */
    case 'node':
        // init exports
        module.exports = local;
        // require builtins
        // local.assert = require('assert');
        local.buffer = require('buffer');
        local.child_process = require('child_process');
        local.cluster = require('cluster');
        local.console = require('console');
        local.constants = require('constants');
        local.crypto = require('crypto');
        local.dgram = require('dgram');
        local.dns = require('dns');
        local.domain = require('domain');
        local.events = require('events');
        local.fs = require('fs');
        local.http = require('http');
        local.https = require('https');
        local.module = require('module');
        local.net = require('net');
        local.os = require('os');
        local.path = require('path');
        local.process = require('process');
        local.punycode = require('punycode');
        local.querystring = require('querystring');
        local.readline = require('readline');
        local.repl = require('repl');
        local.stream = require('stream');
        local.string_decoder = require('string_decoder');
        local.timers = require('timers');
        local.tls = require('tls');
        local.tty = require('tty');
        local.url = require('url');
        local.util = require('util');
        local.v8 = require('v8');
        local.vm = require('vm');
        local.zlib = require('zlib');
        /* validateLineSortedReset */
        // init assets
        local.assetsDict = local.assetsDict || {};
        [
            'assets.index.template.html',
            'assets.swgg.swagger.json',
            'assets.swgg.swagger.server.json'
        ].forEach(function (file) {
            file = '/' + file;
            local.assetsDict[file] = local.assetsDict[file] || '';
            if (local.fs.existsSync(local.__dirname + file)) {
                local.assetsDict[file] = local.fs.readFileSync(
                    local.__dirname + file,
                    'utf8'
                );
            }
        });
        /* validateLineSortedReset */
        /* jslint-ignore-begin */
        // bug-workaround - long $npm_package_buildCustomOrg
        local.assetsDict['/assets.swgg_itunes_search.js'] =
            local.assetsDict['/assets.swgg_itunes_search.js'] ||
            local.fs.readFileSync(local.__dirname + '/lib.swgg_itunes_search.js', 'utf8'
        ).replace((/^#!\//), '// ');
        /* jslint-ignore-end */
        /* validateLineSortedReset */
        local.assetsDict['/'] =
            local.assetsDict['/assets.example.html'] =
            local.assetsDict['/assets.index.template.html']
            .replace((/\{\{env\.(\w+?)\}\}/g), function (match0, match1) {
                switch (match1) {
                case 'npm_package_description':
                    return 'the greatest app in the world!';
                case 'npm_package_name':
                    return 'swgg-itunes-search';
                case 'npm_package_nameLib':
                    return 'swgg_itunes_search';
                case 'npm_package_version':
                    return '0.0.1';
                default:
                    return match0;
                }
            });
        // init cli
        if (module !== require.main || local.global.utility2_rollup) {
            break;
        }
        local.assetsDict['/assets.example.js'] =
            local.assetsDict['/assets.example.js'] ||
            local.fs.readFileSync(__filename, 'utf8');
        local.assetsDict['/favicon.ico'] = local.assetsDict['/favicon.ico'] || '';
        // if $npm_config_timeout_exit exists,
        // then exit this process after $npm_config_timeout_exit ms
        if (Number(process.env.npm_config_timeout_exit)) {
            setTimeout(process.exit, Number(process.env.npm_config_timeout_exit));
        }
        // start server
        if (local.global.utility2_serverHttp1) {
            break;
        }
        process.env.PORT = process.env.PORT || '8081';
        console.error('server starting on port ' + process.env.PORT);
        local.http.createServer(function (request, response) {
            request.urlParsed = local.url.parse(request.url);
            if (local.assetsDict[request.urlParsed.pathname] !== undefined) {
                response.end(local.assetsDict[request.urlParsed.pathname]);
                return;
            }
            response.statusCode = 404;
            response.end();
        }).listen(process.env.PORT);
        break;
    }
}());