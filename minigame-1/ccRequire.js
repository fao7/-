"use strict";

var moduleMap = {
  'src/assets/scripts/play.js': function srcAssetsScriptsPlayJs() {
    require('src/assets/scripts/play.js');
  },
  'src/project.js': function srcProjectJs() {
    require('src/project.js');
  }
};

window.__cocos_require__ = function (moduleName) {
  var func = moduleMap[moduleName];
  func && func();
};