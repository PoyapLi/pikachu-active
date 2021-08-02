// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var string = '\n.skin * {box-sizing: border-box;margin: 0;padding: 0;}\n.skin *::before\uFF0C.skin*::after {box-sizing: border-box;}\n\n.skin{\n    position: relative;\n    background: #ffe600;\n    min-height: 100vh;\n}\n\n.yuan{\n    position: absolute;\n    background-color:black;\n    width: 20px;\n    height: 6px;\n    top:-16px;\n    left:-10px;\n    border-radius: 10px 10px 0 0;\n}\n\n@keyframes wave {\n    0%{\n        transform: rotate(0deg);\n    }\n    34%{\n        transform: rotate(10deg);\n    }\n    80%{\n        transform: rotate(-10deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n\n.nose:hover {\n    transform-origin: center bottom;\n    animation: wave .3s infinite linear;\n}\n\n.nose{\n    position: absolute;\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    height:0px;\n    width: 0px;\n    left:50%;\n    top: 145px;\n    margin-left: -10px;\n}\n.eye{\n    position: absolute;\n    border: 2px solid #000;\n    width: 64px;\n    height: 64px;\n    left:50%;\n    top:100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n}\n\n.eye::before{\n    position: relative;\n    content:\'\'; \n    display: block; \n    border: 3px solid #000;\n    width: 30px;\n    height: 30px;\n    background: #fff;\n    border-radius: 50%;\n    left:4px;\n    top: 2px;\n}\n\n.eye.left{\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translateX(100px);\n}\n\n@keyframes moveEyeLeft {\n    from{\n        transform: rotate(0deg);\n    }\n    to{\n        transform: rotate(-360deg);\n    }\n}\n@keyframes moveEyeRight {\n    from{\n        transform: rotate(0deg);\n    }\n    to{\n        transform: rotate(360deg);\n    }\n}\n\n.eye.left:hover::before{\n    transform-origin: 27px 28px;\n    animation: moveEyeLeft .5s infinite linear;\n}\n.eye.right:hover::before{\n    transform-origin: 27px 28px;\n    animation: moveEyeRight .5s infinite linear;\n}\n.mouth{\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 180px;\n    margin-left: -100px;\n}\n\n.mouth .up{\n    position: relative;\n    z-index: 1;\n    top: -10px;\n}\n\n.mouth .up .lip{\n    border:3px solid black;\n    width: 90px;\n    height:30px;\n    border-top-color: transparent;\n    position: absolute;\n    background: #ffe600;\n}\n\n.mouth .up .lip.left{\n    border-radius: 0 0 0 25px;\n    border-right-color: transparent;\n    transform: rotate(-20deg) translateX(2px);\n    left: 50%;\n    margin-left: -90px;\n}\n.mouth .up .lip.right{\n    border-radius: 0 0 25px 0;\n    border-left-color: transparent;\n    transform: rotate(20deg) translateX(-2px);\n    right: 50%;\n    margin-right: -90px;\n}\n\n.mouth .down{\n    position: absolute;\n    height: 180px;\n    width:100%;\n    overflow: hidden;\n    top: 3px;\n}\n\n.mouth .down .yuan1{\n    border: 3px solid black;\n    width: 150px;\n    height: 5000px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 90px/450px;  \n    background: #9b000a;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -160px;\n    left: 50%;\n    margin-left: -100px;\n    background: #ff485f;\n    border-radius: 100px;\n}\n\n.face {\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 220px;\n    margin-left: -44px;\n    z-index: 3;\n}\n\n.face > img{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n.face.left {\n    transform:translateX(-170px);\n    background: #ff0000;\n    border-radius: 50%;\n}\n\n.face.left > img{\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n}\n\n.face.right {\n    transform: translateX(170px);\n    background: #ff0000;\n    border-radius: 50%;\n}\n';

var player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    n: 1,
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: function init() {
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.bindEvents();
        player.play();
    },
    bindEvents: function bindEvents() {
        for (var key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                var value = player.events[key]; // pause /play /slow
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: function run() {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        // 在控制台demo.scrollHeight即可得到scroll高度，使之自动下滚
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: function play() {
        window.clearInterval(player.id);
        player.id = setInterval(player.run, player.time);
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    slow: function slow() {
        player.pause();
        player.time = 300;
        player.play();
    },
    normal: function normal() {
        player.pause();
        player.time = 100;
        player.play();
    },
    fast: function fast() {
        player.pause();
        player.time = 0;
        player.play();
    }
};

player.init();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.5c20a743.map