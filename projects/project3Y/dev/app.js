(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["app"] = factory();
	else
		root["app"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dev/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scenes_TitleScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/TitleScene */ "./src/scenes/TitleScene.js");
/* harmony import */ var _scenes_FieldScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/FieldScene */ "./src/scenes/FieldScene.js");
/* harmony import */ var _scenes_BootScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/BootScene */ "./src/scenes/BootScene.js");
/* harmony import */ var _scenes_LoadingScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/LoadingScene */ "./src/scenes/LoadingScene.js");




let titleScene = new _scenes_TitleScene__WEBPACK_IMPORTED_MODULE_0__["default"]();
let fieldScene = new _scenes_FieldScene__WEBPACK_IMPORTED_MODULE_1__["default"]();
let bootScene = new _scenes_BootScene__WEBPACK_IMPORTED_MODULE_2__["default"]();
let loadingScene = new _scenes_LoadingScene__WEBPACK_IMPORTED_MODULE_3__["default"]();
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 360
};
let game = new Phaser.Game(config);
game.scene.add('TitleScene', titleScene);
game.scene.add('FieldScene', fieldScene);
game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
game.scene.start('BootScene', {
  scene: 'title'
});

/***/ }),

/***/ "./src/prefabs/Prefab.js":
/*!*******************************!*\
  !*** ./src/prefabs/Prefab.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Prefab extends Phaser.GameObjects.Sprite {
  constructor(scene, name, position, properties) {
    super(scene, position.x, position.y, properties.texture, properties.frame);
    this.scene = scene;
    this.name = name;
    this.scene.add.existing(this);
    this.scene.groups[properties.group].add(this);

    if (properties.scale) {
      this.setScale(properties.scale.x, properties.scale.y);
    }

    if (properties.anchor) {
      this.setOrigin(properties.anchor.x, properties.anchor.y);
    }

    this.scene.sprites[name] = this;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Prefab);

/***/ }),

/***/ "./src/prefabs/TextPrefab.js":
/*!***********************************!*\
  !*** ./src/prefabs/TextPrefab.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class TextPrefab extends Phaser.GameObjects.Text {
  constructor(scene, name, position, properties) {
    super(scene, position.x, position.y, properties.text, properties.style);
    this.scene = scene;
    this.name = name;
    this.scene.add.existing(this);
    this.scene.groups[properties.group].add(this);

    if (properties.scale) {
      this.setScale(properties.scale.x, properties.scale.y);
    }

    if (properties.anchor) {
      this.setOrigin(properties.anchor.x, properties.anchor.y);
    }

    this.scene.sprites[name] = this;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TextPrefab);

/***/ }),

/***/ "./src/scenes/BootScene.js":
/*!*********************************!*\
  !*** ./src/scenes/BootScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene'
    });
    this.levels = {
      title: {
        key: 'TitleScene',
        path: 'assets/levels/title_screen.json'
      },
      screenOne: {
        key: 'FieldScene',
        path: 'assets/levels/screen1.json'
      }
    };
  }

  preload() {
    for (let level_name in this.levels) {
      let level = this.levels[level_name];
      this.load.json(level_name, level.path);
    }
  }

  create(data) {
    let level_data = this.cache.json.get(data.scene);
    this.scene.start('LoadingScene', {
      level_data: level_data,
      scene: this.levels[data.scene].key
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BootScene);

/***/ }),

/***/ "./src/scenes/FieldScene.js":
/*!**********************************!*\
  !*** ./src/scenes/FieldScene.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JSONLevelScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSONLevelScene */ "./src/scenes/JSONLevelScene.js");
/* harmony import */ var _prefabs_Prefab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prefabs/Prefab */ "./src/prefabs/Prefab.js");
/* harmony import */ var _prefabs_TextPrefab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prefabs/TextPrefab */ "./src/prefabs/TextPrefab.js");




class FieldScene extends _JSONLevelScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('FieldScene');
    this.prefab_classes = {
      player: _prefabs_Prefab__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.constructor
    };
  }

  create() {
    this.map = this.add.tilemap(this.level_data.map.key);
    let tileset_index = 0;
    this.tilesets = {};
    this.map.tilesets.forEach(function (tileset) {
      let map_tileset = this.map.addTilesetImage(tileset.name, this.level_data.map.tilesets[tileset_index]);
      this.tilesets[this.level_data.map.tilesets[tileset_index]] = map_tileset;
      tileset_index += 1;
    }, this);
    this.layers = {};
    this.map.layers.forEach(function (layer) {
      this.layers[layer.name] = this.map.createStaticLayer(layer.name, this.tilesets[layer.properties.tileset]);

      if (layer.properties.collision) {
        this.map.setCollisionByExclusion([-1], true, layer.name);
      }
    }, this);
    super.create();
    this.map.objects.forEach(function (object_layer) {
      object_layer.objects.forEach(this.create_object, this);
    }, this);
  }

  create_object(object) {
    let position = {
      x: object.x + object.width / 2,
      y: object.y + object.height / 2
    };

    if (this.prefab_classes.hasOwnProperty(object.type)) {
      let prefab = new this.prefab_classes[object.type](this, object.name, position, object.properties);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FieldScene);

/***/ }),

/***/ "./src/scenes/JSONLevelScene.js":
/*!**************************************!*\
  !*** ./src/scenes/JSONLevelScene.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prefabs_Prefab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prefabs/Prefab */ "./src/prefabs/Prefab.js");
/* harmony import */ var _prefabs_TextPrefab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prefabs/TextPrefab */ "./src/prefabs/TextPrefab.js");



class JSONLevelScene extends Phaser.Scene {
  constructor(key) {
    super({
      key: key
    });
  }

  init(data) {
    this.level_data = data.level_data;
  }

  create() {
    this.groups = {};
    this.level_data.groups.forEach(function (group_name) {
      this.groups[group_name] = this.add.group();
    }, this);
    this.sprites = {};

    for (let sprite_name in this.level_data.sprites) {
      let sprite_data = this.level_data.sprites[sprite_name];
      let sprite = new this.prefab_classes[sprite_data.type](this, sprite_name, sprite_data.position, sprite_data.properties);
      console.log(sprite_data);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (JSONLevelScene);

/***/ }),

/***/ "./src/scenes/LoadingScene.js":
/*!************************************!*\
  !*** ./src/scenes/LoadingScene.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class LoadingScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'LoadingScene'
    });
  }

  init(data) {
    this.level_data = data.level_data;
    let loading_message = this.add.text(320, 240, "LOADING", {
      font: "48px Courier",
      fill: "#FF0000"
    });
    console.log(loading_message);
  }

  preload() {
    let assets = this.level_data.assets;

    for (let asset_key in assets) {
      let asset = assets[asset_key];

      switch (asset.type) {
        case 'image':
          this.load.image(asset_key, asset.source);
          break;

        case 'spritesheet':
          this.load.spritesheet(asset_key, asset.source, {
            frameWidth: asset.frame_width,
            frameHeight: asset.frame_height,
            frames: asset.frames,
            margin: asset.margin,
            spacing: asset.spacing
          });

        case 'tilemap':
          this.load.tilemapTiledJSON(asset_key, asset.source);
          break;
      }
    }
  }

  create(data) {
    this.scene.start(data.scene, {
      level_data: this.level_data
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoadingScene);

/***/ }),

/***/ "./src/scenes/TitleScene.js":
/*!**********************************!*\
  !*** ./src/scenes/TitleScene.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JSONLevelScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSONLevelScene */ "./src/scenes/JSONLevelScene.js");
/* harmony import */ var _prefabs_Prefab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prefabs/Prefab.js */ "./src/prefabs/Prefab.js");
/* harmony import */ var _prefabs_TextPrefab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prefabs/TextPrefab.js */ "./src/prefabs/TextPrefab.js");




class TitleScene extends _JSONLevelScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('TitleScene');
    this.prefab_classes = {
      background: _prefabs_Prefab_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.constructor,
      text: _prefabs_TextPrefab_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.constructor
    };
  }

  update() {
    if (this.input.activePointer.isDown) {
      this.start_game();
    }
  }

  start_game() {
    console.log("starting game");
    this.scene.start('BootScene', {
      scene: 'screenOne'
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TitleScene);

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/haroldsimpkins/Desktop/school 2019/cart263/projects/project3Y/src/main.js */"./src/main.js");


/***/ })

/******/ });
});
//# sourceMappingURL=app.js.map