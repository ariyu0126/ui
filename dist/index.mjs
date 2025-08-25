import default2 from 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useId, useState, useRef, useMemo, useEffect } from 'react';

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require_interop_require_wildcard = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports) {
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = { __proto__: null };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
          else newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      if (cache) cache.set(obj, newObj);
      return newObj;
    }
    exports._ = _interop_require_wildcard;
  }
});

// node_modules/next/dist/shared/lib/router/utils/querystring.js
var require_querystring = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/querystring.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      assign: function() {
        return assign;
      },
      searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
      },
      urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
      }
    });
    function searchParamsToUrlQuery(searchParams) {
      const query = {};
      for (const [key, value] of searchParams.entries()) {
        const existing = query[key];
        if (typeof existing === "undefined") {
          query[key] = value;
        } else if (Array.isArray(existing)) {
          existing.push(value);
        } else {
          query[key] = [
            existing,
            value
          ];
        }
      }
      return query;
    }
    function stringifyUrlQueryParam(param) {
      if (typeof param === "string") {
        return param;
      }
      if (typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
      } else {
        return "";
      }
    }
    function urlQueryToSearchParams(query) {
      const searchParams = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (Array.isArray(value)) {
          for (const item of value) {
            searchParams.append(key, stringifyUrlQueryParam(item));
          }
        } else {
          searchParams.set(key, stringifyUrlQueryParam(value));
        }
      }
      return searchParams;
    }
    function assign(target) {
      for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        searchParamsList[_key - 1] = arguments[_key];
      }
      for (const searchParams of searchParamsList) {
        for (const key of searchParams.keys()) {
          target.delete(key);
        }
        for (const [key, value] of searchParams.entries()) {
          target.append(key, value);
        }
      }
      return target;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/format-url.js
var require_format_url = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/format-url.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      formatUrl: function() {
        return formatUrl;
      },
      formatWithValidation: function() {
        return formatWithValidation;
      },
      urlObjectKeys: function() {
        return urlObjectKeys;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _querystring = /* @__PURE__ */ _interop_require_wildcard._(require_querystring());
    var slashedProtocols = /https?|ftp|gopher|file/;
    function formatUrl(urlObj) {
      let { auth, hostname } = urlObj;
      let protocol = urlObj.protocol || "";
      let pathname = urlObj.pathname || "";
      let hash = urlObj.hash || "";
      let query = urlObj.query || "";
      let host = false;
      auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
      if (urlObj.host) {
        host = auth + urlObj.host;
      } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
          host += ":" + urlObj.port;
        }
      }
      if (query && typeof query === "object") {
        query = String(_querystring.urlQueryToSearchParams(query));
      }
      let search = urlObj.search || query && "?" + query || "";
      if (protocol && !protocol.endsWith(":")) protocol += ":";
      if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
      } else if (!host) {
        host = "";
      }
      if (hash && hash[0] !== "#") hash = "#" + hash;
      if (search && search[0] !== "?") search = "?" + search;
      pathname = pathname.replace(/[?#]/g, encodeURIComponent);
      search = search.replace("#", "%23");
      return "" + protocol + host + pathname + search + hash;
    }
    var urlObjectKeys = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    function formatWithValidation(url) {
      if (process.env.NODE_ENV === "development") {
        if (url !== null && typeof url === "object") {
          Object.keys(url).forEach((key) => {
            if (!urlObjectKeys.includes(key)) {
              console.warn("Unknown key passed via urlObject into url.format: " + key);
            }
          });
        }
      }
      return formatUrl(url);
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/omit.js
var require_omit = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/omit.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "omit", {
      enumerable: true,
      get: function() {
        return omit;
      }
    });
    function omit(object, keys) {
      const omitted = {};
      Object.keys(object).forEach((key) => {
        if (!keys.includes(key)) {
          omitted[key] = object[key];
        }
      });
      return omitted;
    }
  }
});

// node_modules/next/dist/shared/lib/utils.js
var require_utils = __commonJS({
  "node_modules/next/dist/shared/lib/utils.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      DecodeError: function() {
        return DecodeError;
      },
      MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
      },
      MissingStaticPage: function() {
        return MissingStaticPage;
      },
      NormalizeError: function() {
        return NormalizeError;
      },
      PageNotFoundError: function() {
        return PageNotFoundError;
      },
      SP: function() {
        return SP;
      },
      ST: function() {
        return ST;
      },
      WEB_VITALS: function() {
        return WEB_VITALS;
      },
      execOnce: function() {
        return execOnce;
      },
      getDisplayName: function() {
        return getDisplayName;
      },
      getLocationOrigin: function() {
        return getLocationOrigin;
      },
      getURL: function() {
        return getURL;
      },
      isAbsoluteUrl: function() {
        return isAbsoluteUrl;
      },
      isResSent: function() {
        return isResSent;
      },
      loadGetInitialProps: function() {
        return loadGetInitialProps;
      },
      normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
      },
      stringifyError: function() {
        return stringifyError;
      }
    });
    var WEB_VITALS = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function execOnce(fn) {
      let used = false;
      let result;
      return function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (!used) {
          used = true;
          result = fn(...args);
        }
        return result;
      };
    }
    var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
    function getLocationOrigin() {
      const { protocol, hostname, port } = window.location;
      return protocol + "//" + hostname + (port ? ":" + port : "");
    }
    function getURL() {
      const { href } = window.location;
      const origin = getLocationOrigin();
      return href.substring(origin.length);
    }
    function getDisplayName(Component) {
      return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
    }
    function isResSent(res) {
      return res.finished || res.headersSent;
    }
    function normalizeRepeatedSlashes(url) {
      const urlParts = url.split("?");
      const urlNoQuery = urlParts[0];
      return urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
    }
    async function loadGetInitialProps(App, ctx) {
      if (process.env.NODE_ENV !== "production") {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
          const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
          throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
          });
        }
      }
      const res = ctx.res || ctx.ctx && ctx.ctx.res;
      if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
          return {
            pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
          };
        }
        return {};
      }
      const props = await App.getInitialProps(ctx);
      if (res && isResSent(res)) {
        return props;
      }
      if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: false,
          configurable: true
        });
      }
      if (process.env.NODE_ENV !== "production") {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
          console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
      }
      return props;
    }
    var SP = typeof performance !== "undefined";
    var ST = SP && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((method) => typeof performance[method] === "function");
    var DecodeError = class extends Error {
    };
    var NormalizeError = class extends Error {
    };
    var PageNotFoundError = class extends Error {
      constructor(page) {
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
      }
    };
    var MissingStaticPage = class extends Error {
      constructor(page, message) {
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
      }
    };
    var MiddlewareNotFoundError = class extends Error {
      constructor() {
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
      }
    };
    function stringifyError(error) {
      return JSON.stringify({
        message: error.message,
        stack: error.stack
      });
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
var require_remove_trailing_slash = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "removeTrailingSlash", {
      enumerable: true,
      get: function() {
        return removeTrailingSlash;
      }
    });
    function removeTrailingSlash(route) {
      return route.replace(/\/$/, "") || "/";
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/parse-path.js
var require_parse_path = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "parsePath", {
      enumerable: true,
      get: function() {
        return parsePath;
      }
    });
    function parsePath(path) {
      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");
      const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
      if (hasQuery || hashIndex > -1) {
        return {
          pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
          query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
          hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
      }
      return {
        pathname: path,
        query: "",
        hash: ""
      };
    }
  }
});

// node_modules/next/dist/client/normalize-trailing-slash.js
var require_normalize_trailing_slash = __commonJS({
  "node_modules/next/dist/client/normalize-trailing-slash.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "normalizePathTrailingSlash", {
      enumerable: true,
      get: function() {
        return normalizePathTrailingSlash;
      }
    });
    var _removetrailingslash = require_remove_trailing_slash();
    var _parsepath = require_parse_path();
    var normalizePathTrailingSlash = (path) => {
      if (!path.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      if (process.env.__NEXT_TRAILING_SLASH) {
        if (/\.[^/]+\/?$/.test(pathname)) {
          return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
        } else if (pathname.endsWith("/")) {
          return "" + pathname + query + hash;
        } else {
          return pathname + "/" + query + hash;
        }
      }
      return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
    };
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
var require_path_has_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "pathHasPrefix", {
      enumerable: true,
      get: function() {
        return pathHasPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function pathHasPrefix(path, prefix) {
      if (typeof path !== "string") {
        return false;
      }
      const { pathname } = (0, _parsepath.parsePath)(path);
      return pathname === prefix || pathname.startsWith(prefix + "/");
    }
  }
});

// node_modules/next/dist/client/has-base-path.js
var require_has_base_path = __commonJS({
  "node_modules/next/dist/client/has-base-path.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "hasBasePath", {
      enumerable: true,
      get: function() {
        return hasBasePath;
      }
    });
    var _pathhasprefix = require_path_has_prefix();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function hasBasePath(path) {
      return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/is-local-url.js
var require_is_local_url = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/is-local-url.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isLocalURL", {
      enumerable: true,
      get: function() {
        return isLocalURL;
      }
    });
    var _utils = require_utils();
    var _hasbasepath = require_has_base_path();
    function isLocalURL(url) {
      if (!(0, _utils.isAbsoluteUrl)(url)) return true;
      try {
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
      } catch (_) {
        return false;
      }
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/sorted-routes.js
var require_sorted_routes = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/sorted-routes.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      getSortedRouteObjects: function() {
        return getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return getSortedRoutes;
      }
    });
    var UrlNode = class _UrlNode {
      insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
          ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c) => this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr) => [
          ...prev,
          ...curr
        ], []);
        if (this.slugName !== null) {
          routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
          const r = prefix === "/" ? "/" : prefix.slice(0, -1);
          if (this.optionalRestSlugName != null) {
            throw Object.defineProperty(new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").'), "__NEXT_ERROR_CODE", {
              value: "E458",
              enumerable: false,
              configurable: true
            });
          }
          routes.unshift(r);
        }
        if (this.restSlugName !== null) {
          routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
          routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
      }
      _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
          this.placeholder = false;
          return;
        }
        if (isCatchAll) {
          throw Object.defineProperty(new Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
            value: "E392",
            enumerable: false,
            configurable: true
          });
        }
        let nextSegment = urlPaths[0];
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
          let handleSlug = function(previousSlug, nextSlug) {
            if (previousSlug !== null) {
              if (previousSlug !== nextSlug) {
                throw Object.defineProperty(new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "')."), "__NEXT_ERROR_CODE", {
                  value: "E337",
                  enumerable: false,
                  configurable: true
                });
              }
            }
            slugNames.forEach((slug) => {
              if (slug === nextSlug) {
                throw Object.defineProperty(new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path'), "__NEXT_ERROR_CODE", {
                  value: "E247",
                  enumerable: false,
                  configurable: true
                });
              }
              if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                throw Object.defineProperty(new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path'), "__NEXT_ERROR_CODE", {
                  value: "E499",
                  enumerable: false,
                  configurable: true
                });
              }
            });
            slugNames.push(nextSlug);
          };
          let segmentName = nextSegment.slice(1, -1);
          let isOptional = false;
          if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
            segmentName = segmentName.slice(1, -1);
            isOptional = true;
          }
          if (segmentName.startsWith("\u2026")) {
            throw Object.defineProperty(new Error("Detected a three-dot character ('\u2026') at ('" + segmentName + "'). Did you mean ('...')?"), "__NEXT_ERROR_CODE", {
              value: "E147",
              enumerable: false,
              configurable: true
            });
          }
          if (segmentName.startsWith("...")) {
            segmentName = segmentName.substring(3);
            isCatchAll = true;
          }
          if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
            throw Object.defineProperty(new Error("Segment names may not start or end with extra brackets ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
              value: "E421",
              enumerable: false,
              configurable: true
            });
          }
          if (segmentName.startsWith(".")) {
            throw Object.defineProperty(new Error("Segment names may not start with erroneous periods ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
              value: "E288",
              enumerable: false,
              configurable: true
            });
          }
          if (isCatchAll) {
            if (isOptional) {
              if (this.restSlugName != null) {
                throw Object.defineProperty(new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).'), "__NEXT_ERROR_CODE", {
                  value: "E299",
                  enumerable: false,
                  configurable: true
                });
              }
              handleSlug(this.optionalRestSlugName, segmentName);
              this.optionalRestSlugName = segmentName;
              nextSegment = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null) {
                throw Object.defineProperty(new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                  value: "E300",
                  enumerable: false,
                  configurable: true
                });
              }
              handleSlug(this.restSlugName, segmentName);
              this.restSlugName = segmentName;
              nextSegment = "[...]";
            }
          } else {
            if (isOptional) {
              throw Object.defineProperty(new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                value: "E435",
                enumerable: false,
                configurable: true
              });
            }
            handleSlug(this.slugName, segmentName);
            this.slugName = segmentName;
            nextSegment = "[]";
          }
        }
        if (!this.children.has(nextSegment)) {
          this.children.set(nextSegment, new _UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
      }
      constructor() {
        this.placeholder = true;
        this.children = /* @__PURE__ */ new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
      }
    };
    function getSortedRoutes(normalizedPages) {
      const root = new UrlNode();
      normalizedPages.forEach((pagePath) => root.insert(pagePath));
      return root.smoosh();
    }
    function getSortedRouteObjects(objects, getter) {
      const indexes = {};
      const pathnames = [];
      for (let i = 0; i < objects.length; i++) {
        const pathname = getter(objects[i]);
        indexes[pathname] = i;
        pathnames[i] = pathname;
      }
      const sorted = getSortedRoutes(pathnames);
      return sorted.map((pathname) => objects[indexes[pathname]]);
    }
  }
});

// node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js
var require_ensure_leading_slash = __commonJS({
  "node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ensureLeadingSlash", {
      enumerable: true,
      get: function() {
        return ensureLeadingSlash;
      }
    });
    function ensureLeadingSlash(path) {
      return path.startsWith("/") ? path : "/" + path;
    }
  }
});

// node_modules/next/dist/shared/lib/segment.js
var require_segment = __commonJS({
  "node_modules/next/dist/shared/lib/segment.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
      },
      PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
      },
      addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
      },
      isGroupSegment: function() {
        return isGroupSegment;
      },
      isParallelRouteSegment: function() {
        return isParallelRouteSegment;
      }
    });
    function isGroupSegment(segment) {
      return segment[0] === "(" && segment.endsWith(")");
    }
    function isParallelRouteSegment(segment) {
      return segment.startsWith("@") && segment !== "@children";
    }
    function addSearchParamsIfPageSegment(segment, searchParams) {
      const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
      if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== "{}" ? PAGE_SEGMENT_KEY + "?" + stringifiedQuery : PAGE_SEGMENT_KEY;
      }
      return segment;
    }
    var PAGE_SEGMENT_KEY = "__PAGE__";
    var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
  }
});

// node_modules/next/dist/shared/lib/router/utils/app-paths.js
var require_app_paths = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/app-paths.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      normalizeAppPath: function() {
        return normalizeAppPath;
      },
      normalizeRscURL: function() {
        return normalizeRscURL;
      }
    });
    var _ensureleadingslash = require_ensure_leading_slash();
    var _segment = require_segment();
    function normalizeAppPath(route) {
      return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments) => {
        if (!segment) {
          return pathname;
        }
        if ((0, _segment.isGroupSegment)(segment)) {
          return pathname;
        }
        if (segment[0] === "@") {
          return pathname;
        }
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
          return pathname;
        }
        return pathname + "/" + segment;
      }, ""));
    }
    function normalizeRscURL(url) {
      return url.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/interception-routes.js
var require_interception_routes = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/interception-routes.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
      },
      extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
      },
      isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
      }
    });
    var _apppaths = require_app_paths();
    var INTERCEPTION_ROUTE_MARKERS = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function isInterceptionRouteAppPath(path) {
      return path.split("/").find((segment) => INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m))) !== void 0;
    }
    function extractInterceptionRouteInformation(path) {
      let interceptingRoute, marker, interceptedRoute;
      for (const segment of path.split("/")) {
        marker = INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
        if (marker) {
          [interceptingRoute, interceptedRoute] = path.split(marker, 2);
          break;
        }
      }
      if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"), "__NEXT_ERROR_CODE", {
          value: "E269",
          enumerable: false,
          configurable: true
        });
      }
      interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute);
      switch (marker) {
        case "(.)":
          if (interceptingRoute === "/") {
            interceptedRoute = "/" + interceptedRoute;
          } else {
            interceptedRoute = interceptingRoute + "/" + interceptedRoute;
          }
          break;
        case "(..)":
          if (interceptingRoute === "/") {
            throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..) marker at the root level, use (.) instead."), "__NEXT_ERROR_CODE", {
              value: "E207",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
          break;
        case "(...)":
          interceptedRoute = "/" + interceptedRoute;
          break;
        case "(..)(..)":
          const splitInterceptingRoute = interceptingRoute.split("/");
          if (splitInterceptingRoute.length <= 2) {
            throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..)(..) marker at the root level or one level up."), "__NEXT_ERROR_CODE", {
              value: "E486",
              enumerable: false,
              configurable: true
            });
          }
          interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
          break;
        default:
          throw Object.defineProperty(new Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", {
            value: "E112",
            enumerable: false,
            configurable: true
          });
      }
      return {
        interceptingRoute,
        interceptedRoute
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/is-dynamic.js
var require_is_dynamic = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/is-dynamic.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isDynamicRoute", {
      enumerable: true,
      get: function() {
        return isDynamicRoute;
      }
    });
    var _interceptionroutes = require_interception_routes();
    var TEST_ROUTE = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
    var TEST_STRICT_ROUTE = /\/\[[^/]+\](?=\/|$)/;
    function isDynamicRoute(route, strict) {
      if (strict === void 0) strict = true;
      if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
      }
      if (strict) {
        return TEST_STRICT_ROUTE.test(route);
      }
      return TEST_ROUTE.test(route);
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/index.js
var require_utils2 = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      getSortedRouteObjects: function() {
        return _sortedroutes.getSortedRouteObjects;
      },
      getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
      }
    });
    var _sortedroutes = require_sorted_routes();
    var _isdynamic = require_is_dynamic();
  }
});

// node_modules/next/dist/shared/lib/router/utils/route-matcher.js
var require_route_matcher = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/route-matcher.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getRouteMatcher", {
      enumerable: true,
      get: function() {
        return getRouteMatcher;
      }
    });
    var _utils = require_utils();
    function getRouteMatcher(param) {
      let { re, groups } = param;
      return (pathname) => {
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param2) => {
          try {
            return decodeURIComponent(param2);
          } catch (e) {
            throw Object.defineProperty(new _utils.DecodeError("failed to decode param"), "__NEXT_ERROR_CODE", {
              value: "E528",
              enumerable: false,
              configurable: true
            });
          }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)) {
          const match = routeMatch[group.pos];
          if (match !== void 0) {
            if (group.repeat) {
              params[key] = match.split("/").map((entry) => decode(entry));
            } else {
              params[key] = decode(match);
            }
          }
        }
        return params;
      };
    }
  }
});

// node_modules/next/dist/lib/constants.js
var require_constants = __commonJS({
  "node_modules/next/dist/lib/constants.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
      },
      APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
      },
      CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
      },
      DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
      },
      INFINITE_CACHE: function() {
        return INFINITE_CACHE;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
      },
      MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
      },
      MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
      },
      NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
      },
      NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
      },
      NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
      },
      NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
      },
      NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
      },
      NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
      },
      PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
      },
      ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
      },
      RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
      },
      RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
      },
      RSC_PREFETCH_SUFFIX: function() {
        return RSC_PREFETCH_SUFFIX;
      },
      RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
      },
      RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
      },
      RSC_SUFFIX: function() {
        return RSC_SUFFIX;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
      },
      SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
      },
      WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
      }
    });
    var NEXT_QUERY_PARAM_PREFIX = "nxtP";
    var NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
    var MATCHED_PATH_HEADER = "x-matched-path";
    var PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
    var PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
    var RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
    var RSC_SEGMENTS_DIR_SUFFIX = ".segments";
    var RSC_SEGMENT_SUFFIX = ".segment.rsc";
    var RSC_SUFFIX = ".rsc";
    var ACTION_SUFFIX = ".action";
    var NEXT_DATA_SUFFIX = ".json";
    var NEXT_META_SUFFIX = ".meta";
    var NEXT_BODY_SUFFIX = ".body";
    var NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
    var NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
    var NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
    var NEXT_RESUME_HEADER = "next-resume";
    var NEXT_CACHE_TAG_MAX_ITEMS = 128;
    var NEXT_CACHE_TAG_MAX_LENGTH = 256;
    var NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
    var NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
    var CACHE_ONE_YEAR = 31536e3;
    var INFINITE_CACHE = 4294967294;
    var MIDDLEWARE_FILENAME = "middleware";
    var MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
    var INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
    var PAGES_DIR_ALIAS = "private-next-pages";
    var DOT_NEXT_ALIAS = "private-dot-next";
    var ROOT_DIR_ALIAS = "private-next-root-dir";
    var APP_DIR_ALIAS = "private-next-app-dir";
    var RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
    var RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
    var RSC_ACTION_PROXY_ALIAS = "private-next-rsc-server-reference";
    var RSC_CACHE_WRAPPER_ALIAS = "private-next-rsc-cache-wrapper";
    var RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = "private-next-rsc-track-dynamic-import";
    var RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
    var RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
    var PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
    var SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
    var SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
    var SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
    var STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
    var SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
    var GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
    var GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
    var UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.";
    var GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
    var NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
    var SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
    var ESLINT_DEFAULT_DIRS = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ];
    var SERVER_RUNTIME = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    };
    var WEBPACK_LAYERS_NAMES = {
      /**
      * The layer for the shared code between the client and server bundles.
      */
      shared: "shared",
      /**
      * The layer for server-only runtime and picking up `react-server` export conditions.
      * Including app router RSC pages and app router custom routes and metadata routes.
      */
      reactServerComponents: "rsc",
      /**
      * Server Side Rendering layer for app (ssr).
      */
      serverSideRendering: "ssr",
      /**
      * The browser client bundle layer for actions.
      */
      actionBrowser: "action-browser",
      /**
      * The Node.js bundle layer for the API routes.
      */
      apiNode: "api-node",
      /**
      * The Edge Lite bundle layer for the API routes.
      */
      apiEdge: "api-edge",
      /**
      * The layer for the middleware code.
      */
      middleware: "middleware",
      /**
      * The layer for the instrumentation hooks.
      */
      instrument: "instrument",
      /**
      * The layer for assets on the edge.
      */
      edgeAsset: "edge-asset",
      /**
      * The browser client bundle layer for App directory.
      */
      appPagesBrowser: "app-pages-browser",
      /**
      * The browser client bundle layer for Pages directory.
      */
      pagesDirBrowser: "pages-dir-browser",
      /**
      * The Edge Lite bundle layer for Pages directory.
      */
      pagesDirEdge: "pages-dir-edge",
      /**
      * The Node.js bundle layer for Pages directory.
      */
      pagesDirNode: "pages-dir-node"
    };
    var WEBPACK_LAYERS = {
      ...WEBPACK_LAYERS_NAMES,
      GROUP: {
        builtinReact: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
          // pages api
          WEBPACK_LAYERS_NAMES.apiNode,
          WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.shared,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
          // app router pages and layouts
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ]
      }
    };
    var WEBPACK_RESOURCE_QUERIES = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  }
});

// node_modules/next/dist/shared/lib/escape-regexp.js
var require_escape_regexp = __commonJS({
  "node_modules/next/dist/shared/lib/escape-regexp.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "escapeStringRegexp", {
      enumerable: true,
      get: function() {
        return escapeStringRegexp;
      }
    });
    var reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
    var reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
    function escapeStringRegexp(str) {
      if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
      }
      return str;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/route-regex.js
var require_route_regex = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/route-regex.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
      },
      getNamedRouteRegex: function() {
        return getNamedRouteRegex;
      },
      getRouteRegex: function() {
        return getRouteRegex;
      },
      parseParameter: function() {
        return parseParameter;
      }
    });
    var _constants = require_constants();
    var _interceptionroutes = require_interception_routes();
    var _escaperegexp = require_escape_regexp();
    var _removetrailingslash = require_remove_trailing_slash();
    var PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
    function parseParameter(param) {
      const match = param.match(PARAMETER_PATTERN);
      if (!match) {
        return parseMatchedParameter(param);
      }
      return parseMatchedParameter(match[2]);
    }
    function parseMatchedParameter(param) {
      const optional = param.startsWith("[") && param.endsWith("]");
      if (optional) {
        param = param.slice(1, -1);
      }
      const repeat = param.startsWith("...");
      if (repeat) {
        param = param.slice(3);
      }
      return {
        key: param,
        repeat,
        optional
      };
    }
    function getParametrizedRoute(route, includeSuffix, includePrefix) {
      const groups = {};
      let groupIndex = 1;
      const segments = [];
      for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/")) {
        const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
        const paramMatches = segment.match(PARAMETER_PATTERN);
        if (markerMatch && paramMatches && paramMatches[2]) {
          const { key, optional, repeat } = parseMatchedParameter(paramMatches[2]);
          groups[key] = {
            pos: groupIndex++,
            repeat,
            optional
          };
          segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)");
        } else if (paramMatches && paramMatches[2]) {
          const { key, repeat, optional } = parseMatchedParameter(paramMatches[2]);
          groups[key] = {
            pos: groupIndex++,
            repeat,
            optional
          };
          if (includePrefix && paramMatches[1]) {
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
          }
          let s = repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          if (includePrefix && paramMatches[1]) {
            s = s.substring(1);
          }
          segments.push(s);
        } else {
          segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
        }
        if (includeSuffix && paramMatches && paramMatches[3]) {
          segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
        }
      }
      return {
        parameterizedRoute: segments.join(""),
        groups
      };
    }
    function getRouteRegex(normalizedRoute, param) {
      let { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = param === void 0 ? {} : param;
      const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
      let re = parameterizedRoute;
      if (!excludeOptionalTrailingSlash) {
        re += "(?:/)?";
      }
      return {
        re: new RegExp("^" + re + "$"),
        groups
      };
    }
    function buildGetSafeRouteKey() {
      let i = 0;
      return () => {
        let routeKey = "";
        let j = ++i;
        while (j > 0) {
          routeKey += String.fromCharCode(97 + (j - 1) % 26);
          j = Math.floor((j - 1) / 26);
        }
        return routeKey;
      };
    }
    function getSafeKeyFromSegment(param) {
      let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys } = param;
      const { key, optional, repeat } = parseMatchedParameter(segment);
      let cleanedKey = key.replace(/\W/g, "");
      if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
      }
      let invalidKey = false;
      if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
      }
      if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
      }
      if (invalidKey) {
        cleanedKey = getSafeRouteKey();
      }
      const duplicateKey = cleanedKey in routeKeys;
      if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
      } else {
        routeKeys[cleanedKey] = key;
      }
      const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : "";
      let pattern;
      if (duplicateKey && backreferenceDuplicateKeys) {
        pattern = "\\k<" + cleanedKey + ">";
      } else if (repeat) {
        pattern = "(?<" + cleanedKey + ">.+?)";
      } else {
        pattern = "(?<" + cleanedKey + ">[^/]+?)";
      }
      return optional ? "(?:/" + interceptionPrefix + pattern + ")?" : "/" + interceptionPrefix + pattern;
    }
    function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys) {
      const getSafeRouteKey = buildGetSafeRouteKey();
      const routeKeys = {};
      const segments = [];
      for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/")) {
        const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m) => segment.startsWith(m));
        const paramMatches = segment.match(PARAMETER_PATTERN);
        if (hasInterceptionMarker && paramMatches && paramMatches[2]) {
          segments.push(getSafeKeyFromSegment({
            getSafeRouteKey,
            interceptionMarker: paramMatches[1],
            segment: paramMatches[2],
            routeKeys,
            keyPrefix: prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : void 0,
            backreferenceDuplicateKeys
          }));
        } else if (paramMatches && paramMatches[2]) {
          if (includePrefix && paramMatches[1]) {
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
          }
          let s = getSafeKeyFromSegment({
            getSafeRouteKey,
            segment: paramMatches[2],
            routeKeys,
            keyPrefix: prefixRouteKeys ? _constants.NEXT_QUERY_PARAM_PREFIX : void 0,
            backreferenceDuplicateKeys
          });
          if (includePrefix && paramMatches[1]) {
            s = s.substring(1);
          }
          segments.push(s);
        } else {
          segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
        }
        if (includeSuffix && paramMatches && paramMatches[3]) {
          segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
        }
      }
      return {
        namedParameterizedRoute: segments.join(""),
        routeKeys
      };
    }
    function getNamedRouteRegex(normalizedRoute, options) {
      var _options_includeSuffix, _options_includePrefix, _options_backreferenceDuplicateKeys;
      const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, (_options_includeSuffix = options.includeSuffix) != null ? _options_includeSuffix : false, (_options_includePrefix = options.includePrefix) != null ? _options_includePrefix : false, (_options_backreferenceDuplicateKeys = options.backreferenceDuplicateKeys) != null ? _options_backreferenceDuplicateKeys : false);
      let namedRegex = result.namedParameterizedRoute;
      if (!options.excludeOptionalTrailingSlash) {
        namedRegex += "(?:/)?";
      }
      return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: "^" + namedRegex + "$",
        routeKeys: result.routeKeys
      };
    }
    function getNamedMiddlewareRegex(normalizedRoute, options) {
      const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
      const { catchAll = true } = options;
      if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
          namedRegex: "^/" + catchAllRegex + "$"
        };
      }
      const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false);
      let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
      return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/interpolate-as.js
var require_interpolate_as = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/interpolate-as.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "interpolateAs", {
      enumerable: true,
      get: function() {
        return interpolateAs;
      }
    });
    var _routematcher = require_route_matcher();
    var _routeregex = require_route_regex();
    function interpolateAs(route, asPathname, query) {
      let interpolatedRoute = "";
      const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
      const dynamicGroups = dynamicRegex.groups;
      const dynamicMatches = (
        // Try to match the dynamic route against the asPath
        (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        query
      );
      interpolatedRoute = route;
      const params = Object.keys(dynamicGroups);
      if (!params.every((param) => {
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        let replaced = "[" + (repeat ? "..." : "") + param + "]";
        if (optional) {
          replaced = (!value ? "/" : "") + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
          value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (segment) => encodeURIComponent(segment)
        ).join("/") : encodeURIComponent(value)) || "/");
      })) {
        interpolatedRoute = "";
      }
      return {
        params,
        result: interpolatedRoute
      };
    }
  }
});

// node_modules/next/dist/client/resolve-href.js
var require_resolve_href = __commonJS({
  "node_modules/next/dist/client/resolve-href.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "resolveHref", {
      enumerable: true,
      get: function() {
        return resolveHref;
      }
    });
    var _querystring = require_querystring();
    var _formaturl = require_format_url();
    var _omit = require_omit();
    var _utils = require_utils();
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var _islocalurl = require_is_local_url();
    var _utils1 = require_utils2();
    var _interpolateas = require_interpolate_as();
    function resolveHref(router, href, resolveAs) {
      let base;
      let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
      const urlProtoMatch = urlAsString.match(/^[a-z][a-z0-9+.-]*:\/\//i);
      const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
      const urlParts = urlAsStringNoProto.split("?", 1);
      if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
      }
      if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
      try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
      } catch (_) {
        base = new URL("/", "http://n");
      }
      try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
          const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
          const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
          if (result) {
            interpolatedAs = (0, _formaturl.formatWithValidation)({
              pathname: result,
              hash: finalUrl.hash,
              query: (0, _omit.omit)(query, params)
            });
          }
        }
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
          resolvedHref,
          interpolatedAs || resolvedHref
        ] : resolvedHref;
      } catch (_) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
var require_add_path_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "addPathPrefix", {
      enumerable: true,
      get: function() {
        return addPathPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function addPathPrefix(path, prefix) {
      if (!path.startsWith("/") || !prefix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      return "" + prefix + pathname + query + hash;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-locale.js
var require_add_locale = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "addLocale", {
      enumerable: true,
      get: function() {
        return addLocale;
      }
    });
    var _addpathprefix = require_add_path_prefix();
    var _pathhasprefix = require_path_has_prefix();
    function addLocale(path, locale, defaultLocale, ignorePrefix) {
      if (!locale || locale === defaultLocale) return path;
      const lower = path.toLowerCase();
      if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
      }
      return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
    }
  }
});

// node_modules/next/dist/client/add-locale.js
var require_add_locale2 = __commonJS({
  "node_modules/next/dist/client/add-locale.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "addLocale", {
      enumerable: true,
      get: function() {
        return addLocale;
      }
    });
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var addLocale = function(path) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (process.env.__NEXT_I18N_SUPPORT) {
        return (0, _normalizetrailingslash.normalizePathTrailingSlash)(require_add_locale().addLocale(path, ...args));
      }
      return path;
    };
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require_interop_require_default = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports) {
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports._ = _interop_require_default;
  }
});

// node_modules/next/dist/shared/lib/router-context.shared-runtime.js
var require_router_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/router-context.shared-runtime.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "RouterContext", {
      enumerable: true,
      get: function() {
        return RouterContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var RouterContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      RouterContext.displayName = "RouterContext";
    }
  }
});

// node_modules/next/dist/client/request-idle-callback.js
var require_request_idle_callback = __commonJS({
  "node_modules/next/dist/client/request-idle-callback.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      cancelIdleCallback: function() {
        return cancelIdleCallback;
      },
      requestIdleCallback: function() {
        return requestIdleCallback;
      }
    });
    var requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
      let start = Date.now();
      return self.setTimeout(function() {
        cb({
          didTimeout: false,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - start));
          }
        });
      }, 1);
    };
    var cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
      return clearTimeout(id);
    };
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/use-intersection.js
var require_use_intersection = __commonJS({
  "node_modules/next/dist/client/use-intersection.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "useIntersection", {
      enumerable: true,
      get: function() {
        return useIntersection;
      }
    });
    var _react = __require("react");
    var _requestidlecallback = require_request_idle_callback();
    var hasIntersectionObserver = typeof IntersectionObserver === "function";
    var observers = /* @__PURE__ */ new Map();
    var idList = [];
    function createObserver(options) {
      const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
      };
      const existing = idList.find((obj) => obj.root === id.root && obj.margin === id.margin);
      let instance;
      if (existing) {
        instance = observers.get(existing);
        if (instance) {
          return instance;
        }
      }
      const elements = /* @__PURE__ */ new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callback = elements.get(entry.target);
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
          if (callback && isVisible) {
            callback(isVisible);
          }
        });
      }, options);
      instance = {
        id,
        observer,
        elements
      };
      idList.push(id);
      observers.set(id, instance);
      return instance;
    }
    function observe(element, callback, options) {
      const { id, observer, elements } = createObserver(options);
      elements.set(element, callback);
      observer.observe(element);
      return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        if (elements.size === 0) {
          observer.disconnect();
          observers.delete(id);
          const index = idList.findIndex((obj) => obj.root === id.root && obj.margin === id.margin);
          if (index > -1) {
            idList.splice(index, 1);
          }
        }
      };
    }
    function useIntersection(param) {
      let { rootRef, rootMargin, disabled } = param;
      const isDisabled = disabled || !hasIntersectionObserver;
      const [visible, setVisible] = (0, _react.useState)(false);
      const elementRef = (0, _react.useRef)(null);
      const setElement = (0, _react.useCallback)((element) => {
        elementRef.current = element;
      }, []);
      (0, _react.useEffect)(() => {
        if (hasIntersectionObserver) {
          if (isDisabled || visible) return;
          const element = elementRef.current;
          if (element && element.tagName) {
            const unobserve = observe(element, (isVisible) => isVisible && setVisible(isVisible), {
              root: rootRef == null ? void 0 : rootRef.current,
              rootMargin
            });
            return unobserve;
          }
        } else {
          if (!visible) {
            const idleCallback = (0, _requestidlecallback.requestIdleCallback)(() => setVisible(true));
            return () => (0, _requestidlecallback.cancelIdleCallback)(idleCallback);
          }
        }
      }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
      ]);
      const resetVisible = (0, _react.useCallback)(() => {
        setVisible(false);
      }, []);
      return [
        setElement,
        visible,
        resetVisible
      ];
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "normalizeLocalePath", {
      enumerable: true,
      get: function() {
        return normalizeLocalePath;
      }
    });
    var cache = /* @__PURE__ */ new WeakMap();
    function normalizeLocalePath(pathname, locales) {
      if (!locales) return {
        pathname
      };
      let lowercasedLocales = cache.get(locales);
      if (!lowercasedLocales) {
        lowercasedLocales = locales.map((locale) => locale.toLowerCase());
        cache.set(locales, lowercasedLocales);
      }
      let detectedLocale;
      const segments = pathname.split("/", 2);
      if (!segments[1]) return {
        pathname
      };
      const segment = segments[1].toLowerCase();
      const index = lowercasedLocales.indexOf(segment);
      if (index < 0) return {
        pathname
      };
      detectedLocale = locales[index];
      pathname = pathname.slice(detectedLocale.length + 1) || "/";
      return {
        pathname,
        detectedLocale
      };
    }
  }
});

// node_modules/next/dist/client/normalize-locale-path.js
var require_normalize_locale_path2 = __commonJS({
  "node_modules/next/dist/client/normalize-locale-path.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "normalizeLocalePath", {
      enumerable: true,
      get: function() {
        return normalizeLocalePath;
      }
    });
    var normalizeLocalePath = (pathname, locales) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_normalize_locale_path().normalizeLocalePath(pathname, locales);
      }
      return {
        pathname,
        detectedLocale: void 0
      };
    };
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "detectDomainLocale", {
      enumerable: true,
      get: function() {
        return detectDomainLocale;
      }
    });
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      if (!domainItems) return;
      if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
      }
      for (const item of domainItems) {
        var _item_domain, _item_locales;
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale) => locale.toLowerCase() === detectedLocale))) {
          return item;
        }
      }
    }
  }
});

// node_modules/next/dist/client/detect-domain-locale.js
var require_detect_domain_locale2 = __commonJS({
  "node_modules/next/dist/client/detect-domain-locale.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "detectDomainLocale", {
      enumerable: true,
      get: function() {
        return detectDomainLocale;
      }
    });
    var detectDomainLocale = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_detect_domain_locale().detectDomainLocale(...args);
      }
    };
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/get-domain-locale.js
var require_get_domain_locale = __commonJS({
  "node_modules/next/dist/client/get-domain-locale.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getDomainLocale", {
      enumerable: true,
      get: function() {
        return getDomainLocale;
      }
    });
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function getDomainLocale(path, locale, locales, domainLocales) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const normalizeLocalePath = require_normalize_locale_path2().normalizeLocalePath;
        const detectDomainLocale = require_detect_domain_locale2().detectDomainLocale;
        const target = locale || normalizeLocalePath(path, locales).detectedLocale;
        const domain = detectDomainLocale(domainLocales, void 0, target);
        if (domain) {
          const proto = "http" + (domain.http ? "" : "s") + "://";
          const finalLocale = target === domain.defaultLocale ? "" : "/" + target;
          return "" + proto + domain.domain + (0, _normalizetrailingslash.normalizePathTrailingSlash)("" + basePath + finalLocale + path);
        }
        return false;
      } else {
        return false;
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/add-base-path.js
var require_add_base_path = __commonJS({
  "node_modules/next/dist/client/add-base-path.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "addBasePath", {
      enumerable: true,
      get: function() {
        return addBasePath;
      }
    });
    var _addpathprefix = require_add_path_prefix();
    var _normalizetrailingslash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function addBasePath(path, required) {
      return (0, _normalizetrailingslash.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !required ? path : (0, _addpathprefix.addPathPrefix)(path, basePath));
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/use-merged-ref.js
var require_use_merged_ref = __commonJS({
  "node_modules/next/dist/client/use-merged-ref.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "useMergedRef", {
      enumerable: true,
      get: function() {
        return useMergedRef;
      }
    });
    var _react = __require("react");
    function useMergedRef(refA, refB) {
      const cleanupA = (0, _react.useRef)(null);
      const cleanupB = (0, _react.useRef)(null);
      return (0, _react.useCallback)((current) => {
        if (current === null) {
          const cleanupFnA = cleanupA.current;
          if (cleanupFnA) {
            cleanupA.current = null;
            cleanupFnA();
          }
          const cleanupFnB = cleanupB.current;
          if (cleanupFnB) {
            cleanupB.current = null;
            cleanupFnB();
          }
        } else {
          if (refA) {
            cleanupA.current = applyRef(refA, current);
          }
          if (refB) {
            cleanupB.current = applyRef(refB, current);
          }
        }
      }, [
        refA,
        refB
      ]);
    }
    function applyRef(refA, current) {
      if (typeof refA === "function") {
        const cleanup = refA(current);
        if (typeof cleanup === "function") {
          return cleanup;
        } else {
          return () => refA(null);
        }
      } else {
        refA.current = current;
        return () => {
          refA.current = null;
        };
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/utils/error-once.js
var require_error_once = __commonJS({
  "node_modules/next/dist/shared/lib/utils/error-once.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "errorOnce", {
      enumerable: true,
      get: function() {
        return errorOnce;
      }
    });
    var errorOnce = (_) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const errors = /* @__PURE__ */ new Set();
      errorOnce = (msg) => {
        if (!errors.has(msg)) {
          console.error(msg);
        }
        errors.add(msg);
      };
    }
  }
});

// node_modules/next/dist/client/link.js
var require_link = __commonJS({
  "node_modules/next/dist/client/link.js"(exports, module) {
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      default: function() {
        return _default;
      },
      useLinkStatus: function() {
        return useLinkStatus;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _jsxruntime = __require("react/jsx-runtime");
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var _resolvehref = require_resolve_href();
    var _islocalurl = require_is_local_url();
    var _formaturl = require_format_url();
    var _utils = require_utils();
    var _addlocale = require_add_locale2();
    var _routercontextsharedruntime = require_router_context_shared_runtime();
    var _useintersection = require_use_intersection();
    var _getdomainlocale = require_get_domain_locale();
    var _addbasepath = require_add_base_path();
    var _usemergedref = require_use_merged_ref();
    var _erroronce = require_error_once();
    var prefetched = /* @__PURE__ */ new Set();
    function prefetch(router, href, as, options) {
      if (typeof window === "undefined") {
        return;
      }
      if (!(0, _islocalurl.isLocalURL)(href)) {
        return;
      }
      if (!options.bypassPrefetchedCheck) {
        const locale = (
          // Let the link's locale prop override the default router locale.
          typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : void 0
        );
        const prefetchedKey = href + "%" + as + "%" + locale;
        if (prefetched.has(prefetchedKey)) {
          return;
        }
        prefetched.add(prefetchedKey);
      }
      router.prefetch(href, as, options).catch((err) => {
        if (process.env.NODE_ENV !== "production") {
          throw err;
        }
      });
    }
    function isModifiedEvent(event) {
      const eventTarget = event.currentTarget;
      const target = eventTarget.getAttribute("target");
      return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
      event.nativeEvent && event.nativeEvent.which === 2;
    }
    function linkClicked(e, router, href, as, replace, shallow, scroll, locale, onNavigate) {
      const { nodeName } = e.currentTarget;
      const isAnchorNodeName = nodeName.toUpperCase() === "A";
      if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute("download")) {
        return;
      }
      if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
          e.preventDefault();
          location.replace(href);
        }
        return;
      }
      e.preventDefault();
      const navigate = () => {
        if (onNavigate) {
          let isDefaultPrevented = false;
          onNavigate({
            preventDefault: () => {
              isDefaultPrevented = true;
            }
          });
          if (isDefaultPrevented) {
            return;
          }
        }
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
          router[replace ? "replace" : "push"](href, as, {
            shallow,
            locale,
            scroll: routerScroll
          });
        } else {
          router[replace ? "replace" : "push"](as || href, {
            scroll: routerScroll
          });
        }
      };
      navigate();
    }
    function formatStringOrUrl(urlObjOrString) {
      if (typeof urlObjOrString === "string") {
        return urlObjOrString;
      }
      return (0, _formaturl.formatUrl)(urlObjOrString);
    }
    var Link2 = /* @__PURE__ */ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
      let children;
      const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onNavigate, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
      children = childrenProp;
      if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /* @__PURE__ */ (0, _jsxruntime.jsx)("a", {
          children
        });
      }
      const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
      const prefetchEnabled = prefetchProp !== false;
      if (process.env.NODE_ENV !== "production") {
        let createPropError = function(args) {
          return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== "undefined" ? "\nOpen your browser's console to view the Component stack trace." : "")), "__NEXT_ERROR_CODE", {
            value: "E319",
            enumerable: false,
            configurable: true
          });
        };
        const requiredPropsGuard = {
          href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key) => {
          if (key === "href") {
            if (props[key] == null || typeof props[key] !== "string" && typeof props[key] !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: props[key] === null ? "null" : typeof props[key]
              });
            }
          }
        });
        const optionalPropsGuard = {
          as: true,
          replace: true,
          scroll: true,
          shallow: true,
          passHref: true,
          prefetch: true,
          locale: true,
          onClick: true,
          onMouseEnter: true,
          onTouchStart: true,
          legacyBehavior: true,
          onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key) => {
          const valType = typeof props[key];
          if (key === "as") {
            if (props[key] && valType !== "string" && valType !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: valType
              });
            }
          } else if (key === "locale") {
            if (props[key] && valType !== "string") {
              throw createPropError({
                key,
                expected: "`string`",
                actual: valType
              });
            }
          } else if (key === "onClick" || key === "onMouseEnter" || key === "onTouchStart" || key === "onNavigate") {
            if (props[key] && valType !== "function") {
              throw createPropError({
                key,
                expected: "`function`",
                actual: valType
              });
            }
          } else if (key === "replace" || key === "scroll" || key === "shallow" || key === "passHref" || key === "legacyBehavior") {
            if (props[key] != null && valType !== "boolean") {
              throw createPropError({
                key,
                expected: "`boolean`",
                actual: valType
              });
            }
          } else if (key === "prefetch") {
            if (props[key] != null && valType !== "boolean" && props[key] !== "auto") {
              throw createPropError({
                key,
                expected: '`boolean | "auto"`',
                actual: valType
              });
            }
          } else ;
        });
      }
      const { href, as } = _react.default.useMemo(() => {
        if (!router) {
          const resolvedHref2 = formatStringOrUrl(hrefProp);
          return {
            href: resolvedHref2,
            as: asProp ? formatStringOrUrl(asProp) : resolvedHref2
          };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, hrefProp, true);
        return {
          href: resolvedHref,
          as: asProp ? (0, _resolvehref.resolveHref)(router, asProp) : resolvedAs || resolvedHref
        };
      }, [
        router,
        hrefProp,
        asProp
      ]);
      const previousHref = _react.default.useRef(href);
      const previousAs = _react.default.useRef(as);
      let child;
      if (legacyBehavior) {
        if (process.env.NODE_ENV === "development") {
          if (onClick) {
            console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
          }
          if (onMouseEnterProp) {
            console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
          }
          try {
            child = _react.default.Children.only(children);
          } catch (err) {
            if (!children) {
              throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                value: "E320",
                enumerable: false,
                configurable: true
              });
            }
            throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== "undefined" ? " \nOpen your browser's console to view the Component stack trace." : "")), "__NEXT_ERROR_CODE", {
              value: "E266",
              enumerable: false,
              configurable: true
            });
          }
        } else {
          child = _react.default.Children.only(children);
        }
      } else {
        if (process.env.NODE_ENV === "development") {
          if ((children == null ? void 0 : children.type) === "a") {
            throw Object.defineProperty(new Error("Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor"), "__NEXT_ERROR_CODE", {
              value: "E209",
              enumerable: false,
              configurable: true
            });
          }
        }
      }
      const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
      const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
      });
      const setIntersectionWithResetRef = _react.default.useCallback((el) => {
        if (previousAs.current !== as || previousHref.current !== href) {
          resetVisible();
          previousAs.current = as;
          previousHref.current = href;
        }
        setIntersectionRef(el);
      }, [
        as,
        href,
        resetVisible,
        setIntersectionRef
      ]);
      const setRef = (0, _usemergedref.useMergedRef)(setIntersectionWithResetRef, childRef);
      _react.default.useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
          return;
        }
        if (!router) {
          return;
        }
        if (!isVisible || !prefetchEnabled) {
          return;
        }
        prefetch(router, href, as, {
          locale
        });
      }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        router == null ? void 0 : router.locale,
        router
      ]);
      const childProps = {
        ref: setRef,
        onClick(e) {
          if (process.env.NODE_ENV !== "production") {
            if (!e) {
              throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                value: "E312",
                enumerable: false,
                configurable: true
              });
            }
          }
          if (!legacyBehavior && typeof onClick === "function") {
            onClick(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
            child.props.onClick(e);
          }
          if (!router) {
            return;
          }
          if (e.defaultPrevented) {
            return;
          }
          linkClicked(e, router, href, as, replace, shallow, scroll, locale, onNavigate);
        },
        onMouseEnter(e) {
          if (!legacyBehavior && typeof onMouseEnterProp === "function") {
            onMouseEnterProp(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
            child.props.onMouseEnter(e);
          }
          if (!router) {
            return;
          }
          prefetch(router, href, as, {
            locale,
            priority: true,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: true
          });
        },
        onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? void 0 : function onTouchStart(e) {
          if (!legacyBehavior && typeof onTouchStartProp === "function") {
            onTouchStartProp(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
            child.props.onTouchStart(e);
          }
          if (!router) {
            return;
          }
          prefetch(router, href, as, {
            locale,
            priority: true,
            // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
            bypassPrefetchedCheck: true
          });
        }
      };
      if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
      } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : router == null ? void 0 : router.locale;
        const localeDomain = (router == null ? void 0 : router.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, router == null ? void 0 : router.locales, router == null ? void 0 : router.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, router == null ? void 0 : router.defaultLocale));
      }
      if (legacyBehavior) {
        if (process.env.NODE_ENV === "development") {
          (0, _erroronce.errorOnce)("`legacyBehavior` is deprecated and will be removed in a future release. A codemod is available to upgrade your components:\n\nnpx @next/codemod@latest new-link .\n\nLearn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components");
        }
        return /* @__PURE__ */ _react.default.cloneElement(child, childProps);
      }
      return /* @__PURE__ */ (0, _jsxruntime.jsx)("a", {
        ...restProps,
        ...childProps,
        children
      });
    });
    var LinkStatusContext = /* @__PURE__ */ (0, _react.createContext)({
      // We do not support link status in the Pages Router, so we always return false
      pending: false
    });
    var useLinkStatus = () => {
      return (0, _react.useContext)(LinkStatusContext);
    };
    var _default = Link2;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/link.js
var require_link2 = __commonJS({
  "node_modules/next/link.js"(exports, module) {
    module.exports = require_link();
  }
});
var SearchIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var DownIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8 12L12 16M12 16L16 12M12 16V4M4 20H20",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var NewWindowIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M7 17L17 7M17 7H8M17 7V16",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var BrowserIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M3 10H21M6 7.5H6.01M9 7.5H18M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var ArrowDownIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M6 9L12 15L18 9",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var ArrowLeftIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M15 6L9 12L15 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var ArrowLeftDoubleIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18 17L13 12L18 7M11 17L6 12L11 7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var ArrowRightDoubleIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M6 17L11 12L6 7M13 17L18 12L13 7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var ArrowRightIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M9 6L15 12L9 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var InfoIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 8H12.01M12 11V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var CodeIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var EyeOpenIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var EyeOffIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var CloseIcon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "800px",
    height: "800px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M4 4L20 20M20 4L4 20",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var Icon = {
  search: SearchIcon,
  newWindow: NewWindowIcon,
  down: DownIcon,
  browser: BrowserIcon,
  arrowDown: ArrowDownIcon,
  arrowLeft: ArrowLeftIcon,
  arrowLeftDouble: ArrowLeftDoubleIcon,
  arrowRightDouble: ArrowRightDoubleIcon,
  arrowRight: ArrowRightIcon,
  info: InfoIcon,
  code: CodeIcon,
  eyeOpen: EyeOpenIcon,
  eyeOff: EyeOffIcon,
  close: CloseIcon
};
var icons = {
  search: /* @__PURE__ */ jsx(Icon.search, {}),
  new: /* @__PURE__ */ jsx(Icon.newWindow, {}),
  down: /* @__PURE__ */ jsx(Icon.down, {})
};
var Button = ({
  size = "md",
  style = "fill",
  icon,
  align = "left",
  color = "white",
  disabled = false,
  children = "\uBC84\uD2BC",
  onClick,
  className = "",
  ...rest
}) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: default2(
        "button__default",
        `size--${size}`,
        `align--${align}`,
        `color--${color}`,
        `style--${style}`,
        "no-drag",
        className,
        disabled && "is-disabled"
      ),
      disabled,
      onClick,
      ...rest,
      children: [
        icon && icon !== "null" && /* @__PURE__ */ jsx("span", { className: "icon", children: icons[icon] }),
        /* @__PURE__ */ jsx("span", { className: "button__text", children })
      ]
    }
  );
};
var Button_default = Button;

// src/components/Button/ButtonLink.tsx
var import_link = __toESM(require_link2());
var icons2 = {
  search: /* @__PURE__ */ jsx(Icon.search, {}),
  new: /* @__PURE__ */ jsx(Icon.newWindow, {}),
  down: /* @__PURE__ */ jsx(Icon.down, {})
};
var ButtonLink = ({
  size = "md",
  style = "fill",
  icon,
  align = "left",
  color = "white",
  children = "\uB9C1\uD06C",
  className = "",
  href = "#",
  target = "_self",
  ...rest
}) => {
  return /* @__PURE__ */ jsxs(
    import_link.default,
    {
      href,
      className: default2(
        "button__default",
        `size--${size}`,
        `align--${align}`,
        `color--${color}`,
        `style--${style}`,
        "no-drag",
        className
      ),
      target,
      ...rest,
      children: [
        icon && icon !== "null" && /* @__PURE__ */ jsx("span", { className: "icon", children: icons2[icon] }),
        /* @__PURE__ */ jsx("span", { className: "button__text", children })
      ]
    }
  );
};
var ButtonLink_default = ButtonLink;
var ButtonGroup = ({ alignGroup = "left", children, ...rest }) => {
  return /* @__PURE__ */ jsx("div", { className: default2("button__group", `button__group-${alignGroup}`), ...rest, children });
};
var ButtonGroup_default = ButtonGroup;

// src/components/Button/index.tsx
var Button2 = Object.assign(Button_default, {
  Link: ButtonLink_default,
  Group: ButtonGroup_default
});
var Button_default2 = Button2;
var Checkbox = ({
  name,
  label,
  value,
  size = "md",
  checked,
  defaultChecked = false,
  disabled = false,
  required = false,
  className = "",
  onChange,
  color = "white",
  ...rest
}) => {
  const checkboxId = useId();
  const isControlled = checked !== void 0;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const currentChecked = isControlled ? checked : internalChecked;
  const handleChange = (e) => {
    const next = e.target.checked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(e);
  };
  const {
    defaultValue: _omitDefaultValue,
    defaultChecked: _omitDefaultChecked,
    ...restSafe
  } = rest || {};
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: default2(
        "input__checkbox",
        size && `size--${size}`,
        color && `color--${color}`,
        disabled && "is-disabled",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            id: checkboxId,
            name,
            value,
            checked: currentChecked,
            disabled,
            required,
            "aria-required": required,
            "aria-checked": currentChecked,
            "aria-label": typeof label === "string" ? label : void 0,
            onChange: handleChange,
            ...restSafe
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "checkbox__custom", "aria-hidden": "true" }),
        label && /* @__PURE__ */ jsx("span", { className: "checkbox__label", children: label }),
        required && !currentChecked && /* @__PURE__ */ jsx("p", { id: checkboxId, className: "error-message", role: "alert", children: "\uD544\uC218 \uC120\uD0DD\uC785\uB2C8\uB2E4." })
      ]
    }
  );
};
var Checkbox_default = Checkbox;
var CheckboxGroup = ({
  options = [],
  name = "",
  value,
  defaultChecked = [],
  label,
  direction = "row",
  optionType = "default",
  disabled = false,
  groupDisabled = false,
  required = false,
  color = "white",
  size = "md",
  className = "",
  onChange,
  ...rest
}) => {
  const isControlled = value !== void 0;
  const [internalValue, setInternalValue] = useState(defaultChecked);
  const currentValue = isControlled ? value : internalValue;
  const isInvalid = required && currentValue.length === 0;
  const errorId = useId();
  const handleChange = (optionValue) => (e) => {
    const next = e.target.checked ? currentValue.includes(optionValue) ? currentValue : [...currentValue, optionValue] : currentValue.filter((v) => v !== optionValue);
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };
  return /* @__PURE__ */ jsxs("div", { className: "checkbox__group-container", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: default2(
          "checkbox__group",
          optionType && `checkbox__group-option-${optionType}`,
          direction && `checkbox__group-direction-${direction}`,
          color && `checkbox__group-color-${color}`,
          groupDisabled && "is-disabled",
          className
        ),
        role: "group",
        "aria-describedby": isInvalid ? errorId : void 0,
        children: options.map((option) => /* @__PURE__ */ jsx(
          Checkbox_default,
          {
            label: option.label,
            value: option.value,
            name,
            checked: currentValue.includes(option.value),
            disabled: option.disabled ?? groupDisabled ?? disabled,
            color,
            size,
            onChange: handleChange(option.value),
            ...rest
          },
          option.value
        ))
      }
    ),
    isInvalid && /* @__PURE__ */ jsx("p", { id: errorId, className: "error-message", role: "alert", children: "\uD544\uC218 \uC120\uD0DD\uC785\uB2C8\uB2E4." })
  ] });
};
var CheckboxGroup_default = CheckboxGroup;

// src/components/Checkbox/index.tsx
var _Checkbox = Checkbox_default;
_Checkbox.Group = CheckboxGroup_default;
var Checkbox_default2 = _Checkbox;
var Flex = ({
  direction = "",
  justify = "",
  align = "",
  gap = "",
  wrap = "",
  className = "",
  children,
  ...rest
}) => {
  const flaxClassName = default2(
    "flex",
    direction && `flex--direction-${direction}`,
    justify && `flex--justify-${justify}`,
    align && `flex--align-${align}`,
    gap && `flex--gap-${gap}`,
    wrap && `flex--wrap-${wrap}`,
    className
  );
  return /* @__PURE__ */ jsx("div", { className: flaxClassName, ...rest, children });
};
var Flex_default = Flex;

// src/lib/getValidationMessage.tsx
var getValidationMessage = ({
  required = false,
  validate,
  label = "\uC785\uB825\uAC12",
  min,
  max,
  value,
  type
}) => {
  const trimmedValue = (value ?? "").toString().trim();
  if (required && trimmedValue === "") {
    console.log("required");
    return `${label || "\uC785\uB825\uAC12"} \uC740(\uB294) \uD544\uC218 \uC785\uB825 \uC0AC\uD56D\uC785\uB2C8\uB2E4.`;
  }
  const isNumber = !isNaN(Number(trimmedValue)) && trimmedValue !== "";
  if (type === "number" && !isNumber) {
    console.log("number");
    return "\uC22B\uC790\uB9CC \uC785\uB825\uD558\uC138\uC694.";
  }
  if (type === "number" && isNumber) {
    console.log("number min/max");
    const num = Number(trimmedValue);
    const minNum = !isNaN(Number(min)) ? Number(min) : null;
    const maxNum = !isNaN(Number(max)) ? Number(max) : null;
    if (minNum !== null && num < minNum) {
      return `\uCD5C\uC18C ${minNum}\uC790 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694.`;
    }
    if (maxNum !== null && num > maxNum) {
      return `\uCD5C\uB300 ${maxNum}\uC790 \uC774\uD558\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.`;
    }
  }
  if (type !== "number") {
    console.log("number else min/max");
    const minLength = typeof min === "number" ? Number(min) : void 0;
    const maxLength = typeof max === "number" ? Number(max) : void 0;
    console.log("minLength", minLength);
    console.log("maxLength", maxLength);
    if (minLength !== void 0 && trimmedValue.length < minLength) {
      return `\uCD5C\uC18C ${minLength}\uC790 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694.`;
    }
    if (maxLength !== void 0 && trimmedValue.length > maxLength) {
      return `\uCD5C\uB300 ${maxLength}\uC790 \uC774\uD558\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.`;
    }
  }
  if (type === "tel") {
    console.log("tel");
    const telRegex = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
    if (!telRegex.test(value)) {
      return "\uC804\uD654\uBC88\uD638 \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
    }
  }
  if (type === "email") {
    console.log("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "\uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
    }
  }
  if (validate) {
    console.log("validate");
    const result = validate(value);
    if (result !== true) return result || "\uC785\uB825\uAC12\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.";
  }
  return true;
};
var getValidationMessage_default = getValidationMessage;
var Input = ({
  size = "md",
  type = "text",
  error,
  hint,
  required = false,
  disabled = false,
  readOnly = false,
  placeholder = "",
  label = "",
  value: propValue,
  onChange,
  onReset,
  className = "",
  validate,
  min,
  max,
  errorBlur = false,
  errorTouched,
  ...rest
}) => {
  const isControlled = propValue !== void 0;
  const [internalValue, setInternalValue] = useState("");
  const [touched, setTouched] = useState(false);
  const currentValue = isControlled ? propValue || "" : internalValue;
  const [errorMessage, setErrorMessage] = useState("");
  const [hintVisible, setHintVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;
  const showHintMessage = hintVisible && !(error || errorMessage);
  const showErrorMessage = !hintVisible && (error || errorMessage) && (errorTouched || touched);
  const handleFocus = () => {
    if (hint) setHintVisible(true);
  };
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (!readOnly) {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    }
    if (newValue.trim() !== "") {
      setErrorMessage("");
    }
  };
  const handleReset = () => {
    setTouched(false);
    setInternalValue("");
    setErrorMessage("");
    setHintVisible(false);
    onReset?.();
  };
  const handleBlur = () => {
    setTouched(true);
    setHintVisible(false);
    if (errorBlur || !error) {
      validateValue();
      console.log("validateValue");
    }
  };
  const validateValue = () => {
    const result = getValidationMessage_default({
      required,
      validate,
      label,
      min,
      max,
      value: currentValue,
      type
    });
    if (result !== true) {
      setErrorMessage(result);
      return false;
    }
    setErrorMessage("");
    return true;
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: default2(
        "input__text",
        (error || errorMessage) && "input__text-error",
        required && "input__text-required",
        hint && "input__text-hint",
        disabled && "is-disabled",
        readOnly && "is-readOnly",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("span", { className: "input__text-wrapper", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: inputId,
              value: currentValue,
              type: type === "password" && showPassword ? "text" : type,
              className: `input__default size--${size}`,
              disabled,
              readOnly,
              required,
              "aria-required": required,
              "aria-label": label,
              placeholder,
              onChange: handleChange,
              onBlur: handleBlur,
              onFocus: handleFocus,
              "aria-describedby": error || errorMessage ? errorId : hint,
              ...rest
            }
          ),
          !readOnly && currentValue !== "" && type !== "number" && /* @__PURE__ */ jsx("button", { className: "button__reset", onClick: handleReset, "aria-label": "reset", children: /* @__PURE__ */ jsx(Icon.close, {}) }),
          !readOnly && type === "password" && /* @__PURE__ */ jsx(
            "button",
            {
              className: "button__eye",
              onClick: togglePasswordVisibility,
              "aria-label": "toggle password visibility",
              children: showPassword ? /* @__PURE__ */ jsx(Icon.eyeOff, {}) : /* @__PURE__ */ jsx(Icon.eyeOpen, {})
            }
          )
        ] }),
        !readOnly && showErrorMessage && /* @__PURE__ */ jsx("p", { id: errorId, className: "error-message", role: "alert", children: error || errorMessage || "\uC785\uB825\uAC12\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694." }),
        !readOnly && showHintMessage && /* @__PURE__ */ jsx("p", { id: hintId, className: "hint-message", role: "alert", children: hint || "\uD78C\uD2B8! \uC785\uB825\uAC12\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694" })
      ]
    }
  );
};
var Input_default = Input;
var InputText = (props) => {
  return /* @__PURE__ */ jsx(Input_default, { ...props, type: "text" });
};
var InputText_default = InputText;
var InputPassword = (props) => {
  return /* @__PURE__ */ jsx(Input_default, { ...props, type: "password" });
};
var InputPassword_default = InputPassword;
var InputEmail = (props) => {
  return /* @__PURE__ */ jsx(Input_default, { ...props, type: "email" });
};
var InputEmail_default = InputEmail;
var InputNumber = (props) => {
  return /* @__PURE__ */ jsx(Input_default, { ...props, type: "number" });
};
var InputNumber_default = InputNumber;
var InputTel = (props) => {
  return /* @__PURE__ */ jsx(Input_default, { ...props, type: "tel" });
};
var InputTel_default = InputTel;

// src/components/Input/index.tsx
var Input2 = {
  Text: InputText_default,
  Password: InputPassword_default,
  Email: InputEmail_default,
  Number: InputNumber_default,
  Tel: InputTel_default
};
var Input_default2 = Input2;
var Pagination = ({
  total,
  pageSize,
  current,
  onChange,
  ellipsis = true,
  paginationPosition
}) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const clamp = (n) => Math.min(Math.max(n, 1), totalPages);
  const goTo = (page) => {
    const next = clamp(page);
    if (next !== current) onChange(next);
  };
  const getPages = () => {
    if (!ellipsis) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages = [];
    pages.push(1);
    const start = Math.max(2, current - 1);
    const end = Math.min(totalPages - 1, current + 1);
    if (start > 2) pages.push("ellipsis");
    for (let p = start; p <= end; p += 1) pages.push(p);
    if (end < totalPages - 1) pages.push("ellipsis");
    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };
  const isFirstDisabled = current <= 1;
  const isLastDisabled = current >= totalPages;
  let area;
  if (paginationPosition?.startsWith("top")) {
    area = "top";
  } else if (paginationPosition?.startsWith("bottom")) {
    area = "bottom";
  } else {
    area = void 0;
  }
  let side;
  if (paginationPosition?.endsWith("Left")) {
    side = "left";
  } else if (paginationPosition?.endsWith("Right")) {
    side = "right";
  } else if (paginationPosition?.endsWith("Center")) {
    side = "center";
  } else {
    side = void 0;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: default2(
        "pagination",
        side === "left" && "pagination--left",
        side === "center" && "pagination--center",
        side === "right" && "pagination--right",
        area === "top" && "pagination--top",
        area === "bottom" && "pagination--bottom"
      ),
      role: "navigation",
      "aria-label": "pagination",
      children: /* @__PURE__ */ jsxs("div", { className: default2("pagination__inner", ellipsis && "pagination__inner--ellipsis"), children: [
        !isFirstDisabled && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "pagination__button pagination__button-first",
            onClick: () => goTo(1),
            "aria-label": "First page",
            children: /* @__PURE__ */ jsx(Icon.arrowLeftDouble, {})
          }
        ),
        !isFirstDisabled && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "pagination__button pagination__button-prev",
            onClick: () => goTo(current - 1),
            "aria-label": "Previous page",
            children: /* @__PURE__ */ jsx(Icon.arrowLeft, {})
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pagination__number", children: getPages().map(
          (item, idx) => item === "ellipsis" ? /* @__PURE__ */ jsx("span", { className: "pagination__ellipsis", "aria-hidden": true, children: "\u2026" }, `e-${idx}`) : /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: `pagination__number-page ${current === item ? "is-active" : ""}`,
              "aria-current": current === item ? "page" : void 0,
              onClick: () => goTo(item),
              children: item
            },
            item
          )
        ) }),
        !isLastDisabled && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "pagination__button pagination__button-next",
            onClick: () => goTo(current + 1),
            "aria-label": "Next page",
            children: /* @__PURE__ */ jsx(Icon.arrowRight, {})
          }
        ),
        !isLastDisabled && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "pagination__button pagination__button-last",
            onClick: () => goTo(totalPages),
            "aria-label": "Last page",
            children: /* @__PURE__ */ jsx(Icon.arrowRightDouble, {})
          }
        )
      ] })
    }
  );
};
var Pagination_default = Pagination;
var Radio = ({
  name,
  label,
  value,
  size = "md",
  checked,
  disabled = false,
  required = false,
  className = "",
  onChange,
  color = "white",
  ...rest
}) => {
  const radioId = useId();
  const labelId = `${radioId}-label`;
  const isChecked = !!checked;
  const handleChange = (e) => {
    if (e.target) {
      onChange?.(e);
    }
  };
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: default2(
        "input__radio",
        `size--${size}`,
        `color--${color}`,
        disabled && "is-disabled",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: radioId,
            name,
            value,
            ...checked !== void 0 ? { checked } : {},
            disabled,
            required,
            "aria-label": typeof label === "string" ? label : void 0,
            onChange: (e) => handleChange(e),
            ...rest
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "radio__custom", "aria-hidden": "true" }),
        label && /* @__PURE__ */ jsx("span", { className: "radio__label", children: label }),
        required && !isChecked && /* @__PURE__ */ jsx("p", { id: labelId, className: "error-message", role: "alert", children: "\uD544\uC218 \uC120\uD0DD\uC785\uB2C8\uB2E4." })
      ]
    }
  );
};
var Radio_default = Radio;
var RadioGroup = ({
  options = [],
  name = "",
  value,
  checked,
  label,
  direction = "row",
  optionType = "default",
  children,
  disabled = false,
  required = false,
  color = "white",
  size = "md",
  className = "",
  onChange,
  ...rest
}) => {
  const isControlled = value !== void 0;
  const [selectedValue, setSelectedValue] = useState(checked);
  const currentValue = isControlled ? value : selectedValue;
  useEffect(() => {
    setSelectedValue(checked);
  }, [checked]);
  const handleChange = (e) => {
    if (!isControlled) setSelectedValue(e.target.value);
    onChange?.(e);
  };
  return /* @__PURE__ */ jsxs("div", { className: "radio__group-container", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: default2(
          "radio__group",
          `radio__group-option-${optionType}`,
          `radio__group-direction-${direction}`,
          `radio__group-color-${color}`,
          disabled && "is-disabled",
          className
        ),
        children: options.map((option) => /* @__PURE__ */ jsx(
          Radio_default,
          {
            label: option.label,
            value: option.value,
            name,
            checked: currentValue === option.value,
            disabled,
            color,
            size,
            onChange: handleChange,
            ...rest
          },
          option.value
        ))
      }
    ),
    required && !currentValue && /* @__PURE__ */ jsx("p", { className: "error-message", role: "alert", children: "\uD544\uC218 \uC120\uD0DD\uC785\uB2C8\uB2E4." })
  ] });
};
var RadioGroup_default = RadioGroup;

// src/components/Radio/index.tsx
var _Radio = Radio_default;
_Radio.Group = RadioGroup_default;
var Radio_default2 = _Radio;
var Select = ({
  options,
  size = "md",
  color = "white",
  minWidth,
  maxWidth,
  disabledValues,
  defaultSelected,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectTop, setSelectTop] = useState(true);
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);
  useId();
  const currentLabel = useMemo(() => {
    if (selected) return selected.name;
    return options && options.length > 0 ? options[0].name : "";
  }, [options, selected]);
  useEffect(() => {
    if (!defaultSelected) return;
    const target = options.find((opt) => opt.value === defaultSelected.value);
    if (!target) return;
    if (target.disabled || disabledValues) return;
    setSelected({ value: target.value, name: target.name });
  }, [defaultSelected, defaultSelected?.value, options, disabledValues]);
  const handleSelect = (option, index) => {
    const isDisabled = Boolean(option.disabled || disabledValues);
    if (isDisabled) return;
    setSelected(option);
    setIsOpen(false);
  };
  const labelClickSelect = () => {
    if (disabledValues) return;
    setIsOpen((prev) => !prev);
    const root = containerRef.current;
    if (!root) return;
    const labelEl = root.querySelector(".selectbox__label");
    if (!labelEl) return;
    const { top } = labelEl.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    setSelectTop(top > viewportHeight / 2);
  };
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const root = containerRef.current;
      if (!root) return;
      const target = event.target;
      if (target && !root.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("touchstart", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, []);
  const labelStyle = {
    ["--selectbox-min-width"]: minWidth,
    ["--selectbox-max-width"]: maxWidth
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: default2(
        "selectbox",
        "no-drag",
        isOpen && "is-open",
        `size--${size}`,
        `color--${color}`,
        disabledValues && "is-disabled",
        className,
        selectTop && "selectbox__top"
      ),
      style: labelStyle,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "selectbox__label", onClick: () => labelClickSelect(), children: [
          /* @__PURE__ */ jsx("span", { className: "label", children: currentLabel }),
          /* @__PURE__ */ jsx("span", { className: "icon", children: /* @__PURE__ */ jsx(Icon.arrowDown, {}) })
        ] }),
        isOpen && /* @__PURE__ */ jsx("div", { className: `selectbox__input`, children: /* @__PURE__ */ jsx("ul", { children: options.map((option, index) => {
          const isDisabled = Boolean(option.disabled || disabledValues);
          return /* @__PURE__ */ jsx(
            "li",
            {
              role: "option",
              className: isDisabled ? "is-disabled" : "",
              tabIndex: isDisabled ? -1 : 0,
              "aria-selected": option.value === selected?.value,
              "aria-disabled": isDisabled,
              onClick: () => handleSelect(option),
              children: option.name
            },
            option.value
          );
        }) }) })
      ]
    }
  );
};
var Selectbox_default = Select;
var SourceCodeViewer = ({
  code,
  btnText = "\uCF54\uB4DC",
  hidden = true,
  copy = true,
  className = ""
}) => {
  const [showCode, setShowCode] = useState(!hidden);
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: `source-code-viewer ${className}`, children: [
    hidden && /* @__PURE__ */ jsx(
      Button_default,
      {
        color: "dark",
        style: "fill",
        size: "sm",
        align: "right",
        onClick: () => setShowCode(!showCode),
        "aria-pressed": showCode,
        children: showCode ? `Hide ${btnText}` : `Show ${btnText}`
      }
    ),
    (showCode || !hidden) && /* @__PURE__ */ jsx("pre", { role: "region", "aria-label": "Source code", children: /* @__PURE__ */ jsxs("div", { className: "source-code-viewer__content", children: [
      /* @__PURE__ */ jsx("code", { children: code }),
      copy && /* @__PURE__ */ jsx(
        Button_default,
        {
          color: "point",
          style: "line",
          size: "sm",
          onClick: handleCopy,
          "aria-label": "Copy code",
          className: "source-code-viewer__copy-btn",
          children: copied ? "Copied!" : "Copy"
        }
      )
    ] }) })
  ] });
};
var SourceCodeViewer_default = SourceCodeViewer;
var Table = ({
  caption,
  bordered = false,
  scroll = false,
  dataSource,
  columns,
  footerContent,
  pagination = "none",
  paginationProps
}) => {
  const uid = useId();
  const descId = footerContent ? `table-desc-${uid}` : void 0;
  return /* @__PURE__ */ jsxs("div", { className: default2("table", scroll && "table__scroll", bordered && "table__borderd"), children: [
    (pagination === "topLeft" || pagination === "topRight" || pagination === "topCenter") && paginationProps && /* @__PURE__ */ jsx(
      Pagination_default,
      {
        total: paginationProps.total,
        pageSize: paginationProps.pageSize,
        current: paginationProps.current,
        onChange: paginationProps.onChange,
        ellipsis: paginationProps.ellipsis,
        paginationPosition: pagination
      }
    ),
    /* @__PURE__ */ jsxs("table", { ...descId ? { "aria-describedby": descId } : {}, children: [
      caption && /* @__PURE__ */ jsx("caption", { children: caption || "\uB370\uC774\uD130 \uD45C" }),
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: columns.map((column) => /* @__PURE__ */ jsx("th", { title: column.title, style: { width: column.width }, children: /* @__PURE__ */ jsx("span", { children: column.title }) }, column.key)) }) }),
      /* @__PURE__ */ jsx("tbody", { children: dataSource.map((row, rowIndex) => /* @__PURE__ */ jsx("tr", { children: columns.map((col, idx) => {
        const onCell = typeof col.onCell === "function" ? col.onCell(row, rowIndex) || {} : {};
        const rowSpan = onCell.rowSpan ?? void 0;
        const colSpan = onCell.colSpan ?? void 0;
        const isMergedOut = rowSpan === 0 || colSpan === 0;
        if (isMergedOut) return null;
        const isRowHeaderCell = Boolean(
          onCell.isRowHeader || col.isRowHeader || row.isRowHeader && idx === 0
        );
        const CellTag = isRowHeaderCell ? "th" : "td";
        const content = typeof col.render === "function" ? col.render(row[col.dataIndex], row, rowIndex) : row[col.dataIndex];
        return /* @__PURE__ */ jsx(
          CellTag,
          {
            ...rowSpan ? { rowSpan } : {},
            ...colSpan ? { colSpan } : {},
            ...isRowHeaderCell ? { scope: "row", title: col.title } : {},
            children: content
          },
          col.key
        );
      }) }, row.key)) }),
      footerContent !== void 0 && /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("th", { colSpan: columns.length, children: footerContent }) }) })
    ] }),
    footerContent && !caption && /* @__PURE__ */ jsx("p", { id: descId, className: "sr-only", children: footerContent }),
    (pagination === "bottomLeft" || pagination === "bottomRight" || pagination === "bottomCenter") && paginationProps && /* @__PURE__ */ jsx(
      Pagination_default,
      {
        total: paginationProps.total,
        pageSize: paginationProps.pageSize,
        current: paginationProps.current,
        onChange: paginationProps.onChange,
        ellipsis: paginationProps.ellipsis,
        paginationPosition: pagination
      }
    )
  ] });
};
var Table_default = Table;
var Textarea = ({
  resize = "none",
  className = "",
  ...rest
}) => {
  const textareaRef = useRef(null);
  return /* @__PURE__ */ jsx("div", { className: "textarea", children: /* @__PURE__ */ jsx(
    "textarea",
    {
      ref: textareaRef,
      className: default2("textarea__input", className),
      style: { resize },
      "aria-multiline": "true",
      ...rest
    }
  ) });
};
var Textarea_default = Textarea;
var Title = ({
  level = 1,
  title,
  titleClass = "",
  children,
  titleColor = "",
  titleWeight = "",
  ...rest
}) => {
  const Tag = `h${level}`;
  const content = title || children;
  return content ? /* @__PURE__ */ jsx(
    Tag,
    {
      className: default2(
        `title__${level}`,
        titleClass,
        titleColor && `color__${titleColor}`,
        titleWeight && `title__${titleWeight}`
      ),
      ...rest,
      children: content
    }
  ) : null;
};
var Title_default = Title;
var Text = ({
  textWeight = "400",
  weight,
  text,
  children,
  textClass,
  ptag = false,
  textColor = "",
  size = "default",
  ellipsis = "",
  ...rest
}) => {
  const Tag = ptag ? "p" : "div";
  const effectiveWeight = textWeight ?? weight ?? "400";
  const content = text || children;
  return content ? /* @__PURE__ */ jsx(
    Tag,
    {
      className: default2(
        `text__${effectiveWeight}`,
        textClass,
        textColor && `color__${textColor}`,
        `size__${size}`,
        ellipsis && `ellipsis__${ellipsis}`
      ),
      ...rest,
      children: content
    }
  ) : null;
};
var Text_default = Text;
var Typography = ({
  // typography group
  className = "",
  // title
  level = 1,
  title,
  titleColor,
  titleClass,
  titleWeight,
  // text
  text,
  textWeight,
  weight,
  textClass,
  textColor,
  ptag,
  size,
  ellipsis,
  ...rest
}) => {
  return /* @__PURE__ */ jsxs("div", { className: default2("typography--layout", className), children: [
    title && /* @__PURE__ */ jsx(
      Title_default,
      {
        level,
        title,
        titleClass,
        titleColor,
        titleWeight,
        ...rest
      }
    ),
    text && /* @__PURE__ */ jsx(
      Text_default,
      {
        textWeight: textWeight ?? weight,
        text,
        textClass,
        textColor,
        ptag,
        size,
        ellipsis,
        ...rest
      }
    )
  ] });
};
Typography.Title = Title_default;
Typography.Text = Text_default;
var Typography_default = Typography;

export { Button_default2 as Button, Checkbox_default2 as Checkbox, Flex_default as Flex, Icon, Input_default2 as Input, Pagination_default as Pagination, Radio_default2 as Radio, Selectbox_default as Selectbox, SourceCodeViewer_default as SourceCodeViewer, Table_default as Table, Textarea_default as Textarea, Typography_default as Typography };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map