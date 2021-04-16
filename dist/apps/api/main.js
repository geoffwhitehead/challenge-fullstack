(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const types_1 = __webpack_require__(/*! @org/types */ "./libs/types/src/index.ts");
const auth_service_1 = __webpack_require__(/*! ../auth/auth.service */ "./apps/api/src/auth/auth.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../auth/jwt-auth.guard */ "./apps/api/src/auth/jwt-auth.guard.ts");
const local_auth_guard_1 = __webpack_require__(/*! ../auth/local-auth.guard */ "./apps/api/src/auth/local-auth.guard.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService, authService) {
        this.appService = appService;
        this.authService = authService;
    }
    getSettings() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.appService.getSettings();
        });
    }
    postSettings(settings) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.appService.updateSettings(settings);
        });
    }
    login(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // If password validation through local strategy is successful the user details will be
            // appended onto the request.
            return this.authService.login(req.user);
        });
    }
};
tslib_1.__decorate([
    common_1.Get('settings'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getSettings", null);
tslib_1.__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('settings'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof types_1.Settings !== "undefined" && types_1.Settings) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "postSettings", null);
tslib_1.__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('auth/login'),
    tslib_1.__param(0, common_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _b : Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _c : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const serve_static_1 = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const path_1 = __webpack_require__(/*! path */ "path");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/api/src/auth/auth.module.ts");
const config_2 = __webpack_require__(/*! ../config/config */ "./apps/api/src/config/config.ts");
const database_module_1 = __webpack_require__(/*! ../database/database.module */ "./apps/api/src/database/database.module.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/api/src/users/users.module.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
const settings_entity_1 = __webpack_require__(/*! ./settings.entity */ "./apps/api/src/app/settings.entity.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([settings_entity_1.SettingsEntity]),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            database_module_1.DatabaseModule,
            config_1.ConfigModule.forRoot({
                load: [config_2.config],
                isGlobal: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'ui'),
                exclude: ['/api*'],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const settings_entity_1 = __webpack_require__(/*! ./settings.entity */ "./apps/api/src/app/settings.entity.ts");
let AppService = class AppService {
    constructor(settingsRepository) {
        this.settingsRepository = settingsRepository;
    }
    getSettings() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const globalSettings = yield this.settingsRepository.findOne();
            if (!globalSettings) {
                const newGlobalSettings = this.settingsRepository.create();
                return lodash_1.omit(yield this.settingsRepository.save(newGlobalSettings), 'id');
            }
            else {
                return lodash_1.omit(globalSettings, 'id');
            }
        });
    }
    updateSettings(settings) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const globalSettings = yield this.settingsRepository.findOne();
            console.log(`globalRecord`, globalSettings);
            console.log(`settings`, settings);
            if (!globalSettings) {
                const newGlobalSettings = this.settingsRepository.create(Object.assign({}, settings));
                return lodash_1.omit(yield this.settingsRepository.save(newGlobalSettings), 'id');
            }
            else {
                // TODO: possible to combine update and return into single op?
                yield this.settingsRepository.update({ id: globalSettings.id }, Object.assign(Object.assign({}, globalSettings), settings));
                const updated = yield this.settingsRepository.findOne();
                console.log(`updated`, updated);
                return lodash_1.omit(updated, 'id');
            }
        });
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(settings_entity_1.SettingsEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/app/settings.entity.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/app/settings.entity.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsEntity = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let SettingsEntity = class SettingsEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SettingsEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], SettingsEntity.prototype, "isUsersGridActive", void 0);
SettingsEntity = tslib_1.__decorate([
    typeorm_1.Entity()
], SettingsEntity);
exports.SettingsEntity = SettingsEntity;


/***/ }),

/***/ "./apps/api/src/auth/auth.module.ts":
/*!******************************************!*\
  !*** ./apps/api/src/auth/auth.module.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const config_2 = __webpack_require__(/*! ../config/config */ "./apps/api/src/config/config.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/api/src/users/users.module.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/api/src/auth/auth.service.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./apps/api/src/auth/jwt.strategy.ts");
const local_strategy_1 = __webpack_require__(/*! ./local.strategy */ "./apps/api/src/auth/local.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule,
            passport_1.PassportModule,
            config_1.ConfigModule,
            jwt_1.JwtModule.register({
                secret: config_2.config().jwtKey,
                signOptions: { expiresIn: '60s' },
            }),
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api/src/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./apps/api/src/auth/auth.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.authUsers = [
            {
                id: '1',
                email: 'geoff1012@gmail.com',
                password: 'Password1!',
            },
        ];
    }
    validateUser(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // TODO: Here you would check the user details against a record in the db
            const user = this.authUsers.find((user) => user.email === email && user.password === password);
            if (user) {
                return user;
            }
            return false;
        });
    }
    login(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const payload = { email: user.email, sub: user.id };
            return {
                access_token: this.jwtService.sign(payload),
            };
        });
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/api/src/auth/jwt-auth.guard.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/auth/jwt-auth.guard.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
};
JwtAuthGuard = tslib_1.__decorate([
    common_1.Injectable()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./apps/api/src/auth/jwt.strategy.ts":
/*!*******************************************!*\
  !*** ./apps/api/src/auth/jwt.strategy.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const config_1 = __webpack_require__(/*! ../config/config */ "./apps/api/src/config/config.ts");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config_1.config().jwtKey,
        });
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return { userId: payload.sub, email: payload.email };
        });
    }
};
JwtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/api/src/auth/local-auth.guard.ts":
/*!***********************************************!*\
  !*** ./apps/api/src/auth/local-auth.guard.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthGuard = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends passport_1.AuthGuard('local') {
};
LocalAuthGuard = tslib_1.__decorate([
    common_1.Injectable()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./apps/api/src/auth/local.strategy.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/auth/local.strategy.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/api/src/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(authService) {
        super({ usernameField: 'email' });
        this.authService = authService;
    }
    validate(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.validateUser(email, password);
            if (!user) {
                throw new common_1.UnauthorizedException();
            }
            return user;
        });
    }
};
LocalStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./apps/api/src/config/config.ts":
/*!***************************************!*\
  !*** ./apps/api/src/config/config.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// defaults here for local development
const config = () => ({
    port: parseInt(process.env.PORT, 10) || 3333,
    jwtKey: process.env.JWT_KEY || 'localSecretKey',
    dbPort: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    dbHost: process.env.POSTGRES_HOST || 'localhost',
    dbUser: process.env.POSTGRES_USER || 'test',
    dbPassword: process.env.POSTGRES_PASSWORD || 'test',
    dbName: process.env.POSTGRES_DB || 'test',
});
exports.config = config;


/***/ }),

/***/ "./apps/api/src/database/database.module.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/database/database.module.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    return {
                        type: 'postgres',
                        host: configService.get('dbHost'),
                        port: configService.get('dbPort'),
                        username: configService.get('dbUser'),
                        password: configService.get('dbPassword'),
                        database: configService.get('dbName'),
                        synchronize: true,
                        autoLoadEntities: true,
                    };
                },
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
const config_1 = __webpack_require__(/*! ./config/config */ "./apps/api/src/config/config.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const swaggerOpts = new swagger_1.DocumentBuilder()
            .setTitle('fullstack')
            .setDescription('fullstack')
            .setVersion('1.0')
            .addTag('fullstack')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, swaggerOpts);
        swagger_1.SwaggerModule.setup('/swagger', app, document);
        yield app.listen(config_1.config().port, () => {
            common_1.Logger.log('Listening on ' + config_1.config().port);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./apps/api/src/users/user.entity.ts":
/*!*******************************************!*\
  !*** ./apps/api/src/users/user.entity.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let UserEntity = class UserEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "photo", void 0);
UserEntity = tslib_1.__decorate([
    typeorm_1.Entity()
], UserEntity);
exports.UserEntity = UserEntity;


/***/ }),

/***/ "./apps/api/src/users/users.controller.ts":
/*!************************************************!*\
  !*** ./apps/api/src/users/users.controller.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const multer_1 = __webpack_require__(/*! multer */ "multer");
const path_1 = __webpack_require__(/*! path */ "path");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/api/src/users/users.service.ts");
const FILE_SIZE = 1000000 * 3; // in bytes;
const SUPPORTED_FORMATS = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.getUsers();
        });
    }
    createUser(file, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // TODO: save all file info in asset record
            return this.userService.createUser(Object.assign({ photo: file.filename }, user));
        });
    }
    test(imgId, res) {
        const imgPath = imgId;
        return res.sendFile(imgPath, { root: 'uploads' });
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
tslib_1.__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('photo', {
        storage: multer_1.diskStorage({
            destination: 'uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                return cb(null, `${randomName}${path_1.extname(file.originalname)}`);
            },
        }),
        limits: { fileSize: FILE_SIZE },
        fileFilter: (req, file, cb) => cb(null, SUPPORTED_FORMATS.includes(file.mimetype)),
    })),
    tslib_1.__param(0, common_1.UploadedFile()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof Omit !== "undefined" && Omit) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
tslib_1.__decorate([
    common_1.Get('photo/:imgId'),
    tslib_1.__param(0, common_1.Param('imgId')), tslib_1.__param(1, common_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "test", null);
UsersController = tslib_1.__decorate([
    common_1.Controller('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/api/src/users/users.module.ts":
/*!********************************************!*\
  !*** ./apps/api/src/users/users.module.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./apps/api/src/users/user.entity.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./apps/api/src/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/api/src/users/users.service.ts");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity])],
        providers: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/api/src/users/users.service.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/users/users.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./apps/api/src/users/user.entity.ts");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    getUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.usersRepository.find();
        });
    }
    createUser(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.usersRepository.create(user);
            yield this.usersRepository.save(newUser);
            return newUser;
        });
    }
};
UsersService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "./libs/types/src/index.ts":
/*!*********************************!*\
  !*** ./libs/types/src/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/types */ "./libs/types/src/lib/types.ts"), exports);


/***/ }),

/***/ "./libs/types/src/lib/types.ts":
/*!*************************************!*\
  !*** ./libs/types/src/lib/types.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/geoff/code/org/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map