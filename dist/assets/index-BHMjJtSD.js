function Xh(o, i) {
  for (var a = 0; a < i.length; a++) {
    const c = i[a];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const u in c)
        if (u !== "default" && !(u in o)) {
          const d = Object.getOwnPropertyDescriptor(c, u);
          d &&
            Object.defineProperty(
              o,
              u,
              d.get ? d : { enumerable: !0, get: () => c[u] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(o, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) c(u);
  new MutationObserver((u) => {
    for (const d of u)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(u) {
    const d = {};
    return (
      u.integrity && (d.integrity = u.integrity),
      u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function c(u) {
    if (u.ep) return;
    u.ep = !0;
    const d = a(u);
    fetch(u.href, d);
  }
})();
function qh(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var Fu = { exports: {} },
  Xr = {},
  Vu = { exports: {} },
  fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mf;
function Zh() {
  if (mf) return fe;
  mf = 1;
  var o = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    h = Symbol.for("react.context"),
    g = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function I(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (w && x[w]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    _ = {};
  function O(x, T, te) {
    (this.props = x),
      (this.context = T),
      (this.refs = _),
      (this.updater = te || M);
  }
  (O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (x, T) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, x, T, "setState");
    }),
    (O.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    });
  function N() {}
  N.prototype = O.prototype;
  function U(x, T, te) {
    (this.props = x),
      (this.context = T),
      (this.refs = _),
      (this.updater = te || M);
  }
  var j = (U.prototype = new N());
  (j.constructor = U), L(j, O.prototype), (j.isPureReactComponent = !0);
  var W = Array.isArray,
    R = Object.prototype.hasOwnProperty,
    B = { current: null },
    $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(x, T, te) {
    var le,
      se = {},
      ae = null,
      de = null;
    if (T != null)
      for (le in (T.ref !== void 0 && (de = T.ref),
      T.key !== void 0 && (ae = "" + T.key),
      T))
        R.call(T, le) && !$.hasOwnProperty(le) && (se[le] = T[le]);
    var ce = arguments.length - 2;
    if (ce === 1) se.children = te;
    else if (1 < ce) {
      for (var xe = Array(ce), rt = 0; rt < ce; rt++)
        xe[rt] = arguments[rt + 2];
      se.children = xe;
    }
    if (x && x.defaultProps)
      for (le in ((ce = x.defaultProps), ce))
        se[le] === void 0 && (se[le] = ce[le]);
    return {
      $$typeof: o,
      type: x,
      key: ae,
      ref: de,
      props: se,
      _owner: B.current,
    };
  }
  function ge(x, T) {
    return {
      $$typeof: o,
      type: x.type,
      key: T,
      ref: x.ref,
      props: x.props,
      _owner: x._owner,
    };
  }
  function Pe(x) {
    return typeof x == "object" && x !== null && x.$$typeof === o;
  }
  function De(x) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (te) {
        return T[te];
      })
    );
  }
  var Ee = /\/+/g;
  function Te(x, T) {
    return typeof x == "object" && x !== null && x.key != null
      ? De("" + x.key)
      : T.toString(36);
  }
  function be(x, T, te, le, se) {
    var ae = typeof x;
    (ae === "undefined" || ae === "boolean") && (x = null);
    var de = !1;
    if (x === null) de = !0;
    else
      switch (ae) {
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case o:
            case i:
              de = !0;
          }
      }
    if (de)
      return (
        (de = x),
        (se = se(de)),
        (x = le === "" ? "." + Te(de, 0) : le),
        W(se)
          ? ((te = ""),
            x != null && (te = x.replace(Ee, "$&/") + "/"),
            be(se, T, te, "", function (rt) {
              return rt;
            }))
          : se != null &&
            (Pe(se) &&
              (se = ge(
                se,
                te +
                  (!se.key || (de && de.key === se.key)
                    ? ""
                    : ("" + se.key).replace(Ee, "$&/") + "/") +
                  x
              )),
            T.push(se)),
        1
      );
    if (((de = 0), (le = le === "" ? "." : le + ":"), W(x)))
      for (var ce = 0; ce < x.length; ce++) {
        ae = x[ce];
        var xe = le + Te(ae, ce);
        de += be(ae, T, te, xe, se);
      }
    else if (((xe = I(x)), typeof xe == "function"))
      for (x = xe.call(x), ce = 0; !(ae = x.next()).done; )
        (ae = ae.value),
          (xe = le + Te(ae, ce++)),
          (de += be(ae, T, te, xe, se));
    else if (ae === "object")
      throw (
        ((T = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return de;
  }
  function Ce(x, T, te) {
    if (x == null) return x;
    var le = [],
      se = 0;
    return (
      be(x, le, "", "", function (ae) {
        return T.call(te, ae, se++);
      }),
      le
    );
  }
  function pe(x) {
    if (x._status === -1) {
      var T = x._result;
      (T = T()),
        T.then(
          function (te) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = te));
          },
          function (te) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = te));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = T));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var he = { current: null },
    A = { transition: null },
    Z = {
      ReactCurrentDispatcher: he,
      ReactCurrentBatchConfig: A,
      ReactCurrentOwner: B,
    };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (fe.Children = {
      map: Ce,
      forEach: function (x, T, te) {
        Ce(
          x,
          function () {
            T.apply(this, arguments);
          },
          te
        );
      },
      count: function (x) {
        var T = 0;
        return (
          Ce(x, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (x) {
        return (
          Ce(x, function (T) {
            return T;
          }) || []
        );
      },
      only: function (x) {
        if (!Pe(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    }),
    (fe.Component = O),
    (fe.Fragment = a),
    (fe.Profiler = u),
    (fe.PureComponent = U),
    (fe.StrictMode = c),
    (fe.Suspense = p),
    (fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
    (fe.act = H),
    (fe.cloneElement = function (x, T, te) {
      if (x == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            x +
            "."
        );
      var le = L({}, x.props),
        se = x.key,
        ae = x.ref,
        de = x._owner;
      if (T != null) {
        if (
          (T.ref !== void 0 && ((ae = T.ref), (de = B.current)),
          T.key !== void 0 && (se = "" + T.key),
          x.type && x.type.defaultProps)
        )
          var ce = x.type.defaultProps;
        for (xe in T)
          R.call(T, xe) &&
            !$.hasOwnProperty(xe) &&
            (le[xe] = T[xe] === void 0 && ce !== void 0 ? ce[xe] : T[xe]);
      }
      var xe = arguments.length - 2;
      if (xe === 1) le.children = te;
      else if (1 < xe) {
        ce = Array(xe);
        for (var rt = 0; rt < xe; rt++) ce[rt] = arguments[rt + 2];
        le.children = ce;
      }
      return {
        $$typeof: o,
        type: x.type,
        key: se,
        ref: ae,
        props: le,
        _owner: de,
      };
    }),
    (fe.createContext = function (x) {
      return (
        (x = {
          $$typeof: h,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (x.Provider = { $$typeof: d, _context: x }),
        (x.Consumer = x)
      );
    }),
    (fe.createElement = J),
    (fe.createFactory = function (x) {
      var T = J.bind(null, x);
      return (T.type = x), T;
    }),
    (fe.createRef = function () {
      return { current: null };
    }),
    (fe.forwardRef = function (x) {
      return { $$typeof: g, render: x };
    }),
    (fe.isValidElement = Pe),
    (fe.lazy = function (x) {
      return { $$typeof: S, _payload: { _status: -1, _result: x }, _init: pe };
    }),
    (fe.memo = function (x, T) {
      return { $$typeof: v, type: x, compare: T === void 0 ? null : T };
    }),
    (fe.startTransition = function (x) {
      var T = A.transition;
      A.transition = {};
      try {
        x();
      } finally {
        A.transition = T;
      }
    }),
    (fe.unstable_act = H),
    (fe.useCallback = function (x, T) {
      return he.current.useCallback(x, T);
    }),
    (fe.useContext = function (x) {
      return he.current.useContext(x);
    }),
    (fe.useDebugValue = function () {}),
    (fe.useDeferredValue = function (x) {
      return he.current.useDeferredValue(x);
    }),
    (fe.useEffect = function (x, T) {
      return he.current.useEffect(x, T);
    }),
    (fe.useId = function () {
      return he.current.useId();
    }),
    (fe.useImperativeHandle = function (x, T, te) {
      return he.current.useImperativeHandle(x, T, te);
    }),
    (fe.useInsertionEffect = function (x, T) {
      return he.current.useInsertionEffect(x, T);
    }),
    (fe.useLayoutEffect = function (x, T) {
      return he.current.useLayoutEffect(x, T);
    }),
    (fe.useMemo = function (x, T) {
      return he.current.useMemo(x, T);
    }),
    (fe.useReducer = function (x, T, te) {
      return he.current.useReducer(x, T, te);
    }),
    (fe.useRef = function (x) {
      return he.current.useRef(x);
    }),
    (fe.useState = function (x) {
      return he.current.useState(x);
    }),
    (fe.useSyncExternalStore = function (x, T, te) {
      return he.current.useSyncExternalStore(x, T, te);
    }),
    (fe.useTransition = function () {
      return he.current.useTransition();
    }),
    (fe.version = "18.3.1"),
    fe
  );
}
var vf;
function bo() {
  return vf || ((vf = 1), (Vu.exports = Zh())), Vu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gf;
function Jh() {
  if (gf) return Xr;
  gf = 1;
  var o = bo(),
    i = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    c = Object.prototype.hasOwnProperty,
    u = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(g, p, v) {
    var S,
      w = {},
      I = null,
      M = null;
    v !== void 0 && (I = "" + v),
      p.key !== void 0 && (I = "" + p.key),
      p.ref !== void 0 && (M = p.ref);
    for (S in p) c.call(p, S) && !d.hasOwnProperty(S) && (w[S] = p[S]);
    if (g && g.defaultProps)
      for (S in ((p = g.defaultProps), p)) w[S] === void 0 && (w[S] = p[S]);
    return {
      $$typeof: i,
      type: g,
      key: I,
      ref: M,
      props: w,
      _owner: u.current,
    };
  }
  return (Xr.Fragment = a), (Xr.jsx = h), (Xr.jsxs = h), Xr;
}
var yf;
function em() {
  return yf || ((yf = 1), (Fu.exports = Jh())), Fu.exports;
}
var X = em(),
  b = bo();
const tm = qh(b),
  Sf = Xh({ __proto__: null, default: tm }, [b]);
var go = {},
  bu = { exports: {} },
  ft = {},
  zu = { exports: {} },
  ju = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf;
function nm() {
  return (
    wf ||
      ((wf = 1),
      (function (o) {
        function i(A, Z) {
          var H = A.length;
          A.push(Z);
          e: for (; 0 < H; ) {
            var x = (H - 1) >>> 1,
              T = A[x];
            if (0 < u(T, Z)) (A[x] = Z), (A[H] = T), (H = x);
            else break e;
          }
        }
        function a(A) {
          return A.length === 0 ? null : A[0];
        }
        function c(A) {
          if (A.length === 0) return null;
          var Z = A[0],
            H = A.pop();
          if (H !== Z) {
            A[0] = H;
            e: for (var x = 0, T = A.length, te = T >>> 1; x < te; ) {
              var le = 2 * (x + 1) - 1,
                se = A[le],
                ae = le + 1,
                de = A[ae];
              if (0 > u(se, H))
                ae < T && 0 > u(de, se)
                  ? ((A[x] = de), (A[ae] = H), (x = ae))
                  : ((A[x] = se), (A[le] = H), (x = le));
              else if (ae < T && 0 > u(de, H))
                (A[x] = de), (A[ae] = H), (x = ae);
              else break e;
            }
          }
          return Z;
        }
        function u(A, Z) {
          var H = A.sortIndex - Z.sortIndex;
          return H !== 0 ? H : A.id - Z.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          o.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            g = h.now();
          o.unstable_now = function () {
            return h.now() - g;
          };
        }
        var p = [],
          v = [],
          S = 1,
          w = null,
          I = 3,
          M = !1,
          L = !1,
          _ = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          N = typeof clearTimeout == "function" ? clearTimeout : null,
          U = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function j(A) {
          for (var Z = a(v); Z !== null; ) {
            if (Z.callback === null) c(v);
            else if (Z.startTime <= A)
              c(v), (Z.sortIndex = Z.expirationTime), i(p, Z);
            else break;
            Z = a(v);
          }
        }
        function W(A) {
          if (((_ = !1), j(A), !L))
            if (a(p) !== null) (L = !0), pe(R);
            else {
              var Z = a(v);
              Z !== null && he(W, Z.startTime - A);
            }
        }
        function R(A, Z) {
          (L = !1), _ && ((_ = !1), N(J), (J = -1)), (M = !0);
          var H = I;
          try {
            for (
              j(Z), w = a(p);
              w !== null && (!(w.expirationTime > Z) || (A && !De()));

            ) {
              var x = w.callback;
              if (typeof x == "function") {
                (w.callback = null), (I = w.priorityLevel);
                var T = x(w.expirationTime <= Z);
                (Z = o.unstable_now()),
                  typeof T == "function"
                    ? (w.callback = T)
                    : w === a(p) && c(p),
                  j(Z);
              } else c(p);
              w = a(p);
            }
            if (w !== null) var te = !0;
            else {
              var le = a(v);
              le !== null && he(W, le.startTime - Z), (te = !1);
            }
            return te;
          } finally {
            (w = null), (I = H), (M = !1);
          }
        }
        var B = !1,
          $ = null,
          J = -1,
          ge = 5,
          Pe = -1;
        function De() {
          return !(o.unstable_now() - Pe < ge);
        }
        function Ee() {
          if ($ !== null) {
            var A = o.unstable_now();
            Pe = A;
            var Z = !0;
            try {
              Z = $(!0, A);
            } finally {
              Z ? Te() : ((B = !1), ($ = null));
            }
          } else B = !1;
        }
        var Te;
        if (typeof U == "function")
          Te = function () {
            U(Ee);
          };
        else if (typeof MessageChannel < "u") {
          var be = new MessageChannel(),
            Ce = be.port2;
          (be.port1.onmessage = Ee),
            (Te = function () {
              Ce.postMessage(null);
            });
        } else
          Te = function () {
            O(Ee, 0);
          };
        function pe(A) {
          ($ = A), B || ((B = !0), Te());
        }
        function he(A, Z) {
          J = O(function () {
            A(o.unstable_now());
          }, Z);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            L || M || ((L = !0), pe(R));
          }),
          (o.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ge = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return I;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return a(p);
          }),
          (o.unstable_next = function (A) {
            switch (I) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = I;
            }
            var H = I;
            I = Z;
            try {
              return A();
            } finally {
              I = H;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (A, Z) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var H = I;
            I = A;
            try {
              return Z();
            } finally {
              I = H;
            }
          }),
          (o.unstable_scheduleCallback = function (A, Z, H) {
            var x = o.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? x + H : x))
                : (H = x),
              A)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = H + T),
              (A = {
                id: S++,
                callback: Z,
                priorityLevel: A,
                startTime: H,
                expirationTime: T,
                sortIndex: -1,
              }),
              H > x
                ? ((A.sortIndex = H),
                  i(v, A),
                  a(p) === null &&
                    A === a(v) &&
                    (_ ? (N(J), (J = -1)) : (_ = !0), he(W, H - x)))
                : ((A.sortIndex = T), i(p, A), L || M || ((L = !0), pe(R))),
              A
            );
          }),
          (o.unstable_shouldYield = De),
          (o.unstable_wrapCallback = function (A) {
            var Z = I;
            return function () {
              var H = I;
              I = Z;
              try {
                return A.apply(this, arguments);
              } finally {
                I = H;
              }
            };
          });
      })(ju)),
    ju
  );
}
var Cf;
function rm() {
  return Cf || ((Cf = 1), (zu.exports = nm())), zu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xf;
function im() {
  if (xf) return ft;
  xf = 1;
  var o = bo(),
    i = rm();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var c = new Set(),
    u = {};
  function d(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var g = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    p = Object.prototype.hasOwnProperty,
    v =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    S = {},
    w = {};
  function I(e) {
    return p.call(w, e)
      ? !0
      : p.call(S, e)
      ? !1
      : v.test(e)
      ? (w[e] = !0)
      : ((S[e] = !0), !1);
  }
  function M(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function L(e, t, n, r) {
    if (t === null || typeof t > "u" || M(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function _(e, t, n, r, l, s, f) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = f);
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      O[e] = new _(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      O[t] = new _(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      O[e] = new _(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      O[e] = new _(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        O[e] = new _(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      O[e] = new _(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      O[e] = new _(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      O[e] = new _(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      O[e] = new _(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var N = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(N, U);
      O[t] = new _(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(N, U);
        O[t] = new _(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(N, U);
      O[t] = new _(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      O[e] = new _(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new _(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      O[e] = new _(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function j(e, t, n, r) {
    var l = O.hasOwnProperty(t) ? O[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (L(t, n, l, r) && (n = null),
      r || l === null
        ? I(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var W = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    R = Symbol.for("react.element"),
    B = Symbol.for("react.portal"),
    $ = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    Pe = Symbol.for("react.provider"),
    De = Symbol.for("react.context"),
    Ee = Symbol.for("react.forward_ref"),
    Te = Symbol.for("react.suspense"),
    be = Symbol.for("react.suspense_list"),
    Ce = Symbol.for("react.memo"),
    pe = Symbol.for("react.lazy"),
    he = Symbol.for("react.offscreen"),
    A = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (A && e[A]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var H = Object.assign,
    x;
  function T(e) {
    if (x === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        x = (t && t[1]) || "";
      }
    return (
      `
` +
      x +
      e
    );
  }
  var te = !1;
  function le(e, t) {
    if (!e || te) return "";
    te = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (P) {
            var r = P;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (P) {
            r = P;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          r = P;
        }
        e();
      }
    } catch (P) {
      if (P && r && typeof P.stack == "string") {
        for (
          var l = P.stack.split(`
`),
            s = r.stack.split(`
`),
            f = l.length - 1,
            m = s.length - 1;
          1 <= f && 0 <= m && l[f] !== s[m];

        )
          m--;
        for (; 1 <= f && 0 <= m; f--, m--)
          if (l[f] !== s[m]) {
            if (f !== 1 || m !== 1)
              do
                if ((f--, m--, 0 > m || l[f] !== s[m])) {
                  var y =
                    `
` + l[f].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      y.includes("<anonymous>") &&
                      (y = y.replace("<anonymous>", e.displayName)),
                    y
                  );
                }
              while (1 <= f && 0 <= m);
            break;
          }
      }
    } finally {
      (te = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? T(e) : "";
  }
  function se(e) {
    switch (e.tag) {
      case 5:
        return T(e.type);
      case 16:
        return T("Lazy");
      case 13:
        return T("Suspense");
      case 19:
        return T("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = le(e.type, !1)), e;
      case 11:
        return (e = le(e.type.render, !1)), e;
      case 1:
        return (e = le(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ae(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case B:
        return "Portal";
      case ge:
        return "Profiler";
      case J:
        return "StrictMode";
      case Te:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case De:
          return (e.displayName || "Context") + ".Consumer";
        case Pe:
          return (e._context.displayName || "Context") + ".Provider";
        case Ee:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ce:
          return (
            (t = e.displayName || null), t !== null ? t : ae(e.type) || "Memo"
          );
        case pe:
          (t = e._payload), (e = e._init);
          try {
            return ae(e(t));
          } catch {}
      }
    return null;
  }
  function de(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ae(t);
      case 8:
        return t === J ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ce(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function xe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function rt(e) {
    var t = xe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        s = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (f) {
            (r = "" + f), s.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (f) {
            r = "" + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function vn(e) {
    e._valueTracker || (e._valueTracker = rt(e));
  }
  function cr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = xe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ln(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Nn(e, t) {
    var n = t.checked;
    return H({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ui(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ce(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function xa(e, t) {
    (t = t.checked), t != null && j(e, "checked", t, !1);
  }
  function Ho(e, t) {
    xa(e, t);
    var n = ce(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Bo(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Bo(e, t.type, ce(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function ka(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Bo(e, t, n) {
    (t !== "number" || Ln(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var fr = Array.isArray;
  function Dn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ce(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Wo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return H({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ea(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (fr(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ce(n) };
  }
  function Oa(e, t) {
    var n = ce(t.value),
      r = ce(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Pa(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function _a(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Qo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? _a(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ai,
    Ia = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          ai = ai || document.createElement("div"),
            ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ai.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function dr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var pr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    tp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pr).forEach(function (e) {
    tp.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pr[t] = pr[e]);
    });
  });
  function Ma(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (pr.hasOwnProperty(e) && pr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Ra(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Ma(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var np = H(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Ko(e, t) {
    if (t) {
      if (np[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function Yo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Go = null;
  function Xo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var qo = null,
    Fn = null,
    Vn = null;
  function Ta(e) {
    if ((e = Fr(e))) {
      if (typeof qo != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = Ti(t)), qo(e.stateNode, e.type, t));
    }
  }
  function La(e) {
    Fn ? (Vn ? Vn.push(e) : (Vn = [e])) : (Fn = e);
  }
  function Na() {
    if (Fn) {
      var e = Fn,
        t = Vn;
      if (((Vn = Fn = null), Ta(e), t)) for (e = 0; e < t.length; e++) Ta(t[e]);
    }
  }
  function Da(e, t) {
    return e(t);
  }
  function Fa() {}
  var Zo = !1;
  function Va(e, t, n) {
    if (Zo) return e(t, n);
    Zo = !0;
    try {
      return Da(e, t, n);
    } finally {
      (Zo = !1), (Fn !== null || Vn !== null) && (Fa(), Na());
    }
  }
  function hr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ti(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var Jo = !1;
  if (g)
    try {
      var mr = {};
      Object.defineProperty(mr, "passive", {
        get: function () {
          Jo = !0;
        },
      }),
        window.addEventListener("test", mr, mr),
        window.removeEventListener("test", mr, mr);
    } catch {
      Jo = !1;
    }
  function rp(e, t, n, r, l, s, f, m, y) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, P);
    } catch (F) {
      this.onError(F);
    }
  }
  var vr = !1,
    si = null,
    ci = !1,
    el = null,
    ip = {
      onError: function (e) {
        (vr = !0), (si = e);
      },
    };
  function op(e, t, n, r, l, s, f, m, y) {
    (vr = !1), (si = null), rp.apply(ip, arguments);
  }
  function lp(e, t, n, r, l, s, f, m, y) {
    if ((op.apply(this, arguments), vr)) {
      if (vr) {
        var P = si;
        (vr = !1), (si = null);
      } else throw Error(a(198));
      ci || ((ci = !0), (el = P));
    }
  }
  function gn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ba(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function za(e) {
    if (gn(e) !== e) throw Error(a(188));
  }
  function up(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = gn(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var s = l.alternate;
      if (s === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === s.child) {
        for (s = l.child; s; ) {
          if (s === n) return za(l), e;
          if (s === r) return za(l), t;
          s = s.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = s);
      else {
        for (var f = !1, m = l.child; m; ) {
          if (m === n) {
            (f = !0), (n = l), (r = s);
            break;
          }
          if (m === r) {
            (f = !0), (r = l), (n = s);
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = s.child; m; ) {
            if (m === n) {
              (f = !0), (n = s), (r = l);
              break;
            }
            if (m === r) {
              (f = !0), (r = s), (n = l);
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function ja(e) {
    return (e = up(e)), e !== null ? Aa(e) : null;
  }
  function Aa(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Aa(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var $a = i.unstable_scheduleCallback,
    Ua = i.unstable_cancelCallback,
    ap = i.unstable_shouldYield,
    sp = i.unstable_requestPaint,
    ze = i.unstable_now,
    cp = i.unstable_getCurrentPriorityLevel,
    tl = i.unstable_ImmediatePriority,
    Ha = i.unstable_UserBlockingPriority,
    fi = i.unstable_NormalPriority,
    fp = i.unstable_LowPriority,
    Ba = i.unstable_IdlePriority,
    di = null,
    Tt = null;
  function dp(e) {
    if (Tt && typeof Tt.onCommitFiberRoot == "function")
      try {
        Tt.onCommitFiberRoot(di, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Et = Math.clz32 ? Math.clz32 : mp,
    pp = Math.log,
    hp = Math.LN2;
  function mp(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((pp(e) / hp) | 0)) | 0;
  }
  var pi = 64,
    hi = 4194304;
  function gr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function mi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      s = e.pingedLanes,
      f = n & 268435455;
    if (f !== 0) {
      var m = f & ~l;
      m !== 0 ? (r = gr(m)) : ((s &= f), s !== 0 && (r = gr(s)));
    } else (f = n & ~l), f !== 0 ? (r = gr(f)) : s !== 0 && (r = gr(s));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (s = t & -t), l >= s || (l === 16 && (s & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Et(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function vp(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function gp(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;

    ) {
      var f = 31 - Et(s),
        m = 1 << f,
        y = l[f];
      y === -1
        ? (!(m & n) || m & r) && (l[f] = vp(m, t))
        : y <= t && (e.expiredLanes |= m),
        (s &= ~m);
    }
  }
  function nl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Wa() {
    var e = pi;
    return (pi <<= 1), !(pi & 4194240) && (pi = 64), e;
  }
  function rl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function yr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Et(t)),
      (e[t] = n);
  }
  function yp(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Et(n),
        s = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s);
    }
  }
  function il(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Et(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ke = 0;
  function Qa(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ka,
    ol,
    Ya,
    Ga,
    Xa,
    ll = !1,
    vi = [],
    Xt = null,
    qt = null,
    Zt = null,
    Sr = new Map(),
    wr = new Map(),
    Jt = [],
    Sp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function qa(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xt = null;
        break;
      case "dragenter":
      case "dragleave":
        qt = null;
        break;
      case "mouseover":
      case "mouseout":
        Zt = null;
        break;
      case "pointerover":
      case "pointerout":
        Sr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wr.delete(t.pointerId);
    }
  }
  function Cr(e, t, n, r, l, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [l],
        }),
        t !== null && ((t = Fr(t)), t !== null && ol(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function wp(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Xt = Cr(Xt, e, t, n, r, l)), !0;
      case "dragenter":
        return (qt = Cr(qt, e, t, n, r, l)), !0;
      case "mouseover":
        return (Zt = Cr(Zt, e, t, n, r, l)), !0;
      case "pointerover":
        var s = l.pointerId;
        return Sr.set(s, Cr(Sr.get(s) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (s = l.pointerId), wr.set(s, Cr(wr.get(s) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Za(e) {
    var t = yn(e.target);
    if (t !== null) {
      var n = gn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ba(n)), t !== null)) {
            (e.blockedOn = t),
              Xa(e.priority, function () {
                Ya(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function gi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Go = r), n.target.dispatchEvent(r), (Go = null);
      } else return (t = Fr(n)), t !== null && ol(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Ja(e, t, n) {
    gi(e) && n.delete(t);
  }
  function Cp() {
    (ll = !1),
      Xt !== null && gi(Xt) && (Xt = null),
      qt !== null && gi(qt) && (qt = null),
      Zt !== null && gi(Zt) && (Zt = null),
      Sr.forEach(Ja),
      wr.forEach(Ja);
  }
  function xr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ll ||
        ((ll = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Cp)));
  }
  function kr(e) {
    function t(l) {
      return xr(l, e);
    }
    if (0 < vi.length) {
      xr(vi[0], e);
      for (var n = 1; n < vi.length; n++) {
        var r = vi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Xt !== null && xr(Xt, e),
        qt !== null && xr(qt, e),
        Zt !== null && xr(Zt, e),
        Sr.forEach(t),
        wr.forEach(t),
        n = 0;
      n < Jt.length;
      n++
    )
      (r = Jt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
      Za(n), n.blockedOn === null && Jt.shift();
  }
  var bn = W.ReactCurrentBatchConfig,
    yi = !0;
  function xp(e, t, n, r) {
    var l = ke,
      s = bn.transition;
    bn.transition = null;
    try {
      (ke = 1), ul(e, t, n, r);
    } finally {
      (ke = l), (bn.transition = s);
    }
  }
  function kp(e, t, n, r) {
    var l = ke,
      s = bn.transition;
    bn.transition = null;
    try {
      (ke = 4), ul(e, t, n, r);
    } finally {
      (ke = l), (bn.transition = s);
    }
  }
  function ul(e, t, n, r) {
    if (yi) {
      var l = al(e, t, n, r);
      if (l === null) Ol(e, t, r, Si, n), qa(e, r);
      else if (wp(l, e, t, n, r)) r.stopPropagation();
      else if ((qa(e, r), t & 4 && -1 < Sp.indexOf(e))) {
        for (; l !== null; ) {
          var s = Fr(l);
          if (
            (s !== null && Ka(s),
            (s = al(e, t, n, r)),
            s === null && Ol(e, t, r, Si, n),
            s === l)
          )
            break;
          l = s;
        }
        l !== null && r.stopPropagation();
      } else Ol(e, t, r, null, n);
    }
  }
  var Si = null;
  function al(e, t, n, r) {
    if (((Si = null), (e = Xo(r)), (e = yn(e)), e !== null))
      if (((t = gn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ba(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Si = e), null;
  }
  function es(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (cp()) {
          case tl:
            return 1;
          case Ha:
            return 4;
          case fi:
          case fp:
            return 16;
          case Ba:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var en = null,
    sl = null,
    wi = null;
  function ts() {
    if (wi) return wi;
    var e,
      t = sl,
      n = t.length,
      r,
      l = "value" in en ? en.value : en.textContent,
      s = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === l[s - r]; r++);
    return (wi = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ci(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function xi() {
    return !0;
  }
  function ns() {
    return !1;
  }
  function pt(e) {
    function t(n, r, l, s, f) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = f),
        (this.currentTarget = null);
      for (var m in e)
        e.hasOwnProperty(m) && ((n = e[m]), (this[m] = n ? n(s) : s[m]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? xi
          : ns),
        (this.isPropagationStopped = ns),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = xi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = xi));
        },
        persist: function () {},
        isPersistent: xi,
      }),
      t
    );
  }
  var zn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    cl = pt(zn),
    Er = H({}, zn, { view: 0, detail: 0 }),
    Ep = pt(Er),
    fl,
    dl,
    Or,
    ki = H({}, Er, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Or &&
              (Or && e.type === "mousemove"
                ? ((fl = e.screenX - Or.screenX), (dl = e.screenY - Or.screenY))
                : (dl = fl = 0),
              (Or = e)),
            fl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : dl;
      },
    }),
    rs = pt(ki),
    Op = H({}, ki, { dataTransfer: 0 }),
    Pp = pt(Op),
    _p = H({}, Er, { relatedTarget: 0 }),
    pl = pt(_p),
    Ip = H({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mp = pt(Ip),
    Rp = H({}, zn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Tp = pt(Rp),
    Lp = H({}, zn, { data: 0 }),
    is = pt(Lp),
    Np = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Dp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Fp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Vp(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Fp[e])
      ? !!t[e]
      : !1;
  }
  function hl() {
    return Vp;
  }
  var bp = H({}, Er, {
      key: function (e) {
        if (e.key) {
          var t = Np[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ci(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Dp[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hl,
      charCode: function (e) {
        return e.type === "keypress" ? Ci(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ci(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    zp = pt(bp),
    jp = H({}, ki, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    os = pt(jp),
    Ap = H({}, Er, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hl,
    }),
    $p = pt(Ap),
    Up = H({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hp = pt(Up),
    Bp = H({}, ki, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Wp = pt(Bp),
    Qp = [9, 13, 27, 32],
    ml = g && "CompositionEvent" in window,
    Pr = null;
  g && "documentMode" in document && (Pr = document.documentMode);
  var Kp = g && "TextEvent" in window && !Pr,
    ls = g && (!ml || (Pr && 8 < Pr && 11 >= Pr)),
    us = " ",
    as = !1;
  function ss(e, t) {
    switch (e) {
      case "keyup":
        return Qp.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function cs(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var jn = !1;
  function Yp(e, t) {
    switch (e) {
      case "compositionend":
        return cs(t);
      case "keypress":
        return t.which !== 32 ? null : ((as = !0), us);
      case "textInput":
        return (e = t.data), e === us && as ? null : e;
      default:
        return null;
    }
  }
  function Gp(e, t) {
    if (jn)
      return e === "compositionend" || (!ml && ss(e, t))
        ? ((e = ts()), (wi = sl = en = null), (jn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ls && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Xp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function fs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xp[e.type] : t === "textarea";
  }
  function ds(e, t, n, r) {
    La(r),
      (t = Ii(t, "onChange")),
      0 < t.length &&
        ((n = new cl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var _r = null,
    Ir = null;
  function qp(e) {
    Rs(e, 0);
  }
  function Ei(e) {
    var t = Bn(e);
    if (cr(t)) return e;
  }
  function Zp(e, t) {
    if (e === "change") return t;
  }
  var ps = !1;
  if (g) {
    var vl;
    if (g) {
      var gl = "oninput" in document;
      if (!gl) {
        var hs = document.createElement("div");
        hs.setAttribute("oninput", "return;"),
          (gl = typeof hs.oninput == "function");
      }
      vl = gl;
    } else vl = !1;
    ps = vl && (!document.documentMode || 9 < document.documentMode);
  }
  function ms() {
    _r && (_r.detachEvent("onpropertychange", vs), (Ir = _r = null));
  }
  function vs(e) {
    if (e.propertyName === "value" && Ei(Ir)) {
      var t = [];
      ds(t, Ir, e, Xo(e)), Va(qp, t);
    }
  }
  function Jp(e, t, n) {
    e === "focusin"
      ? (ms(), (_r = t), (Ir = n), _r.attachEvent("onpropertychange", vs))
      : e === "focusout" && ms();
  }
  function eh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ei(Ir);
  }
  function th(e, t) {
    if (e === "click") return Ei(t);
  }
  function nh(e, t) {
    if (e === "input" || e === "change") return Ei(t);
  }
  function rh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ot = typeof Object.is == "function" ? Object.is : rh;
  function Mr(e, t) {
    if (Ot(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!p.call(t, l) || !Ot(e[l], t[l])) return !1;
    }
    return !0;
  }
  function gs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ys(e, t) {
    var n = gs(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = gs(n);
    }
  }
  function Ss(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ss(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ws() {
    for (var e = window, t = Ln(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ln(e.document);
    }
    return t;
  }
  function yl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function ih(e) {
    var t = ws(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ss(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && yl(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            s = Math.min(r.start, l);
          (r = r.end === void 0 ? s : Math.min(r.end, l)),
            !e.extend && s > r && ((l = r), (r = s), (s = l)),
            (l = ys(n, s));
          var f = ys(n, r);
          l &&
            f &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== f.node ||
              e.focusOffset !== f.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(f.node, f.offset))
              : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var oh = g && "documentMode" in document && 11 >= document.documentMode,
    An = null,
    Sl = null,
    Rr = null,
    wl = !1;
  function Cs(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wl ||
      An == null ||
      An !== Ln(r) ||
      ((r = An),
      "selectionStart" in r && yl(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Rr && Mr(Rr, r)) ||
        ((Rr = r),
        (r = Ii(Sl, "onSelect")),
        0 < r.length &&
          ((t = new cl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = An))));
  }
  function Oi(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var $n = {
      animationend: Oi("Animation", "AnimationEnd"),
      animationiteration: Oi("Animation", "AnimationIteration"),
      animationstart: Oi("Animation", "AnimationStart"),
      transitionend: Oi("Transition", "TransitionEnd"),
    },
    Cl = {},
    xs = {};
  g &&
    ((xs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete $n.animationend.animation,
      delete $n.animationiteration.animation,
      delete $n.animationstart.animation),
    "TransitionEvent" in window || delete $n.transitionend.transition);
  function Pi(e) {
    if (Cl[e]) return Cl[e];
    if (!$n[e]) return e;
    var t = $n[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in xs) return (Cl[e] = t[n]);
    return e;
  }
  var ks = Pi("animationend"),
    Es = Pi("animationiteration"),
    Os = Pi("animationstart"),
    Ps = Pi("transitionend"),
    _s = new Map(),
    Is =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function tn(e, t) {
    _s.set(e, t), d(t, [e]);
  }
  for (var xl = 0; xl < Is.length; xl++) {
    var kl = Is[xl],
      lh = kl.toLowerCase(),
      uh = kl[0].toUpperCase() + kl.slice(1);
    tn(lh, "on" + uh);
  }
  tn(ks, "onAnimationEnd"),
    tn(Es, "onAnimationIteration"),
    tn(Os, "onAnimationStart"),
    tn("dblclick", "onDoubleClick"),
    tn("focusin", "onFocus"),
    tn("focusout", "onBlur"),
    tn(Ps, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Tr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    ah = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Tr)
    );
  function Ms(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), lp(r, t, void 0, e), (e.currentTarget = null);
  }
  function Rs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var f = r.length - 1; 0 <= f; f--) {
            var m = r[f],
              y = m.instance,
              P = m.currentTarget;
            if (((m = m.listener), y !== s && l.isPropagationStopped()))
              break e;
            Ms(l, m, P), (s = y);
          }
        else
          for (f = 0; f < r.length; f++) {
            if (
              ((m = r[f]),
              (y = m.instance),
              (P = m.currentTarget),
              (m = m.listener),
              y !== s && l.isPropagationStopped())
            )
              break e;
            Ms(l, m, P), (s = y);
          }
      }
    }
    if (ci) throw ((e = el), (ci = !1), (el = null), e);
  }
  function Ie(e, t) {
    var n = t[Tl];
    n === void 0 && (n = t[Tl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ts(t, e, 2, !1), n.add(r));
  }
  function El(e, t, n) {
    var r = 0;
    t && (r |= 4), Ts(n, e, r, t);
  }
  var _i = "_reactListening" + Math.random().toString(36).slice(2);
  function Lr(e) {
    if (!e[_i]) {
      (e[_i] = !0),
        c.forEach(function (n) {
          n !== "selectionchange" && (ah.has(n) || El(n, !1, e), El(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_i] || ((t[_i] = !0), El("selectionchange", !1, t));
    }
  }
  function Ts(e, t, n, r) {
    switch (es(t)) {
      case 1:
        var l = xp;
        break;
      case 4:
        l = kp;
        break;
      default:
        l = ul;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Jo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Ol(e, t, n, r, l) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var f = r.tag;
        if (f === 3 || f === 4) {
          var m = r.stateNode.containerInfo;
          if (m === l || (m.nodeType === 8 && m.parentNode === l)) break;
          if (f === 4)
            for (f = r.return; f !== null; ) {
              var y = f.tag;
              if (
                (y === 3 || y === 4) &&
                ((y = f.stateNode.containerInfo),
                y === l || (y.nodeType === 8 && y.parentNode === l))
              )
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (((f = yn(m)), f === null)) return;
            if (((y = f.tag), y === 5 || y === 6)) {
              r = s = f;
              continue e;
            }
            m = m.parentNode;
          }
        }
        r = r.return;
      }
    Va(function () {
      var P = s,
        F = Xo(n),
        V = [];
      e: {
        var D = _s.get(e);
        if (D !== void 0) {
          var Q = cl,
            Y = e;
          switch (e) {
            case "keypress":
              if (Ci(n) === 0) break e;
            case "keydown":
            case "keyup":
              Q = zp;
              break;
            case "focusin":
              (Y = "focus"), (Q = pl);
              break;
            case "focusout":
              (Y = "blur"), (Q = pl);
              break;
            case "beforeblur":
            case "afterblur":
              Q = pl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = rs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Pp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = $p;
              break;
            case ks:
            case Es:
            case Os:
              Q = Mp;
              break;
            case Ps:
              Q = Hp;
              break;
            case "scroll":
              Q = Ep;
              break;
            case "wheel":
              Q = Wp;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Tp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = os;
          }
          var G = (t & 4) !== 0,
            je = !G && e === "scroll",
            k = G ? (D !== null ? D + "Capture" : null) : D;
          G = [];
          for (var C = P, E; C !== null; ) {
            E = C;
            var z = E.stateNode;
            if (
              (E.tag === 5 &&
                z !== null &&
                ((E = z),
                k !== null &&
                  ((z = hr(C, k)), z != null && G.push(Nr(C, z, E)))),
              je)
            )
              break;
            C = C.return;
          }
          0 < G.length &&
            ((D = new Q(D, Y, null, n, F)), V.push({ event: D, listeners: G }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((D = e === "mouseover" || e === "pointerover"),
            (Q = e === "mouseout" || e === "pointerout"),
            D &&
              n !== Go &&
              (Y = n.relatedTarget || n.fromElement) &&
              (yn(Y) || Y[jt]))
          )
            break e;
          if (
            (Q || D) &&
            ((D =
              F.window === F
                ? F
                : (D = F.ownerDocument)
                ? D.defaultView || D.parentWindow
                : window),
            Q
              ? ((Y = n.relatedTarget || n.toElement),
                (Q = P),
                (Y = Y ? yn(Y) : null),
                Y !== null &&
                  ((je = gn(Y)), Y !== je || (Y.tag !== 5 && Y.tag !== 6)) &&
                  (Y = null))
              : ((Q = null), (Y = P)),
            Q !== Y)
          ) {
            if (
              ((G = rs),
              (z = "onMouseLeave"),
              (k = "onMouseEnter"),
              (C = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((G = os),
                (z = "onPointerLeave"),
                (k = "onPointerEnter"),
                (C = "pointer")),
              (je = Q == null ? D : Bn(Q)),
              (E = Y == null ? D : Bn(Y)),
              (D = new G(z, C + "leave", Q, n, F)),
              (D.target = je),
              (D.relatedTarget = E),
              (z = null),
              yn(F) === P &&
                ((G = new G(k, C + "enter", Y, n, F)),
                (G.target = E),
                (G.relatedTarget = je),
                (z = G)),
              (je = z),
              Q && Y)
            )
              t: {
                for (G = Q, k = Y, C = 0, E = G; E; E = Un(E)) C++;
                for (E = 0, z = k; z; z = Un(z)) E++;
                for (; 0 < C - E; ) (G = Un(G)), C--;
                for (; 0 < E - C; ) (k = Un(k)), E--;
                for (; C--; ) {
                  if (G === k || (k !== null && G === k.alternate)) break t;
                  (G = Un(G)), (k = Un(k));
                }
                G = null;
              }
            else G = null;
            Q !== null && Ls(V, D, Q, G, !1),
              Y !== null && je !== null && Ls(V, je, Y, G, !0);
          }
        }
        e: {
          if (
            ((D = P ? Bn(P) : window),
            (Q = D.nodeName && D.nodeName.toLowerCase()),
            Q === "select" || (Q === "input" && D.type === "file"))
          )
            var q = Zp;
          else if (fs(D))
            if (ps) q = nh;
            else {
              q = eh;
              var ne = Jp;
            }
          else
            (Q = D.nodeName) &&
              Q.toLowerCase() === "input" &&
              (D.type === "checkbox" || D.type === "radio") &&
              (q = th);
          if (q && (q = q(e, P))) {
            ds(V, q, n, F);
            break e;
          }
          ne && ne(e, D, P),
            e === "focusout" &&
              (ne = D._wrapperState) &&
              ne.controlled &&
              D.type === "number" &&
              Bo(D, "number", D.value);
        }
        switch (((ne = P ? Bn(P) : window), e)) {
          case "focusin":
            (fs(ne) || ne.contentEditable === "true") &&
              ((An = ne), (Sl = P), (Rr = null));
            break;
          case "focusout":
            Rr = Sl = An = null;
            break;
          case "mousedown":
            wl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (wl = !1), Cs(V, n, F);
            break;
          case "selectionchange":
            if (oh) break;
          case "keydown":
          case "keyup":
            Cs(V, n, F);
        }
        var re;
        if (ml)
          e: {
            switch (e) {
              case "compositionstart":
                var ue = "onCompositionStart";
                break e;
              case "compositionend":
                ue = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ue = "onCompositionUpdate";
                break e;
            }
            ue = void 0;
          }
        else
          jn
            ? ss(e, n) && (ue = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ue = "onCompositionStart");
        ue &&
          (ls &&
            n.locale !== "ko" &&
            (jn || ue !== "onCompositionStart"
              ? ue === "onCompositionEnd" && jn && (re = ts())
              : ((en = F),
                (sl = "value" in en ? en.value : en.textContent),
                (jn = !0))),
          (ne = Ii(P, ue)),
          0 < ne.length &&
            ((ue = new is(ue, e, null, n, F)),
            V.push({ event: ue, listeners: ne }),
            re
              ? (ue.data = re)
              : ((re = cs(n)), re !== null && (ue.data = re)))),
          (re = Kp ? Yp(e, n) : Gp(e, n)) &&
            ((P = Ii(P, "onBeforeInput")),
            0 < P.length &&
              ((F = new is("onBeforeInput", "beforeinput", null, n, F)),
              V.push({ event: F, listeners: P }),
              (F.data = re)));
      }
      Rs(V, t);
    });
  }
  function Nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ii(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        s = l.stateNode;
      l.tag === 5 &&
        s !== null &&
        ((l = s),
        (s = hr(e, n)),
        s != null && r.unshift(Nr(e, s, l)),
        (s = hr(e, t)),
        s != null && r.push(Nr(e, s, l))),
        (e = e.return);
    }
    return r;
  }
  function Un(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ls(e, t, n, r, l) {
    for (var s = t._reactName, f = []; n !== null && n !== r; ) {
      var m = n,
        y = m.alternate,
        P = m.stateNode;
      if (y !== null && y === r) break;
      m.tag === 5 &&
        P !== null &&
        ((m = P),
        l
          ? ((y = hr(n, s)), y != null && f.unshift(Nr(n, y, m)))
          : l || ((y = hr(n, s)), y != null && f.push(Nr(n, y, m)))),
        (n = n.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var sh = /\r\n?/g,
    ch = /\u0000|\uFFFD/g;
  function Ns(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        sh,
        `
`
      )
      .replace(ch, "");
  }
  function Mi(e, t, n) {
    if (((t = Ns(t)), Ns(e) !== t && n)) throw Error(a(425));
  }
  function Ri() {}
  var Pl = null,
    _l = null;
  function Il(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ml = typeof setTimeout == "function" ? setTimeout : void 0,
    fh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ds = typeof Promise == "function" ? Promise : void 0,
    dh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ds < "u"
        ? function (e) {
            return Ds.resolve(null).then(e).catch(ph);
          }
        : Ml;
  function ph(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Rl(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), kr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    kr(t);
  }
  function nn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Fs(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Hn = Math.random().toString(36).slice(2),
    Lt = "__reactFiber$" + Hn,
    Dr = "__reactProps$" + Hn,
    jt = "__reactContainer$" + Hn,
    Tl = "__reactEvents$" + Hn,
    hh = "__reactListeners$" + Hn,
    mh = "__reactHandles$" + Hn;
  function yn(e) {
    var t = e[Lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[jt] || n[Lt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Fs(e); e !== null; ) {
            if ((n = e[Lt])) return n;
            e = Fs(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Fr(e) {
    return (
      (e = e[Lt] || e[jt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Bn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Ti(e) {
    return e[Dr] || null;
  }
  var Ll = [],
    Wn = -1;
  function rn(e) {
    return { current: e };
  }
  function Me(e) {
    0 > Wn || ((e.current = Ll[Wn]), (Ll[Wn] = null), Wn--);
  }
  function _e(e, t) {
    Wn++, (Ll[Wn] = e.current), (e.current = t);
  }
  var on = {},
    qe = rn(on),
    lt = rn(!1),
    Sn = on;
  function Qn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return on;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      s;
    for (s in n) l[s] = t[s];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function ut(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Li() {
    Me(lt), Me(qe);
  }
  function Vs(e, t, n) {
    if (qe.current !== on) throw Error(a(168));
    _e(qe, t), _e(lt, n);
  }
  function bs(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, de(e) || "Unknown", l));
    return H({}, n, r);
  }
  function Ni(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        on),
      (Sn = qe.current),
      _e(qe, e),
      _e(lt, lt.current),
      !0
    );
  }
  function zs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = bs(e, t, Sn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Me(lt),
        Me(qe),
        _e(qe, e))
      : Me(lt),
      _e(lt, n);
  }
  var At = null,
    Di = !1,
    Nl = !1;
  function js(e) {
    At === null ? (At = [e]) : At.push(e);
  }
  function vh(e) {
    (Di = !0), js(e);
  }
  function ln() {
    if (!Nl && At !== null) {
      Nl = !0;
      var e = 0,
        t = ke;
      try {
        var n = At;
        for (ke = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (At = null), (Di = !1);
      } catch (l) {
        throw (At !== null && (At = At.slice(e + 1)), $a(tl, ln), l);
      } finally {
        (ke = t), (Nl = !1);
      }
    }
    return null;
  }
  var Kn = [],
    Yn = 0,
    Fi = null,
    Vi = 0,
    yt = [],
    St = 0,
    wn = null,
    $t = 1,
    Ut = "";
  function Cn(e, t) {
    (Kn[Yn++] = Vi), (Kn[Yn++] = Fi), (Fi = e), (Vi = t);
  }
  function As(e, t, n) {
    (yt[St++] = $t), (yt[St++] = Ut), (yt[St++] = wn), (wn = e);
    var r = $t;
    e = Ut;
    var l = 32 - Et(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var s = 32 - Et(t) + l;
    if (30 < s) {
      var f = l - (l % 5);
      (s = (r & ((1 << f) - 1)).toString(32)),
        (r >>= f),
        (l -= f),
        ($t = (1 << (32 - Et(t) + l)) | (n << l) | r),
        (Ut = s + e);
    } else ($t = (1 << s) | (n << l) | r), (Ut = e);
  }
  function Dl(e) {
    e.return !== null && (Cn(e, 1), As(e, 1, 0));
  }
  function Fl(e) {
    for (; e === Fi; )
      (Fi = Kn[--Yn]), (Kn[Yn] = null), (Vi = Kn[--Yn]), (Kn[Yn] = null);
    for (; e === wn; )
      (wn = yt[--St]),
        (yt[St] = null),
        (Ut = yt[--St]),
        (yt[St] = null),
        ($t = yt[--St]),
        (yt[St] = null);
  }
  var ht = null,
    mt = null,
    Re = !1,
    Pt = null;
  function $s(e, t) {
    var n = kt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Us(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ht = e), (mt = nn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ht = e), (mt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = wn !== null ? { id: $t, overflow: Ut } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = kt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (ht = e),
              (mt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Vl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function bl(e) {
    if (Re) {
      var t = mt;
      if (t) {
        var n = t;
        if (!Us(e, t)) {
          if (Vl(e)) throw Error(a(418));
          t = nn(n.nextSibling);
          var r = ht;
          t && Us(e, t)
            ? $s(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (ht = e));
        }
      } else {
        if (Vl(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (Re = !1), (ht = e);
      }
    }
  }
  function Hs(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    ht = e;
  }
  function bi(e) {
    if (e !== ht) return !1;
    if (!Re) return Hs(e), (Re = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Il(e.type, e.memoizedProps))),
      t && (t = mt))
    ) {
      if (Vl(e)) throw (Bs(), Error(a(418)));
      for (; t; ) $s(e, t), (t = nn(t.nextSibling));
    }
    if ((Hs(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                mt = nn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        mt = null;
      }
    } else mt = ht ? nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Bs() {
    for (var e = mt; e; ) e = nn(e.nextSibling);
  }
  function Gn() {
    (mt = ht = null), (Re = !1);
  }
  function zl(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  var gh = W.ReactCurrentBatchConfig;
  function Vr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (f) {
              var m = l.refs;
              f === null ? delete m[s] : (m[s] = f);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function zi(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Ws(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Qs(e) {
    function t(k, C) {
      if (e) {
        var E = k.deletions;
        E === null ? ((k.deletions = [C]), (k.flags |= 16)) : E.push(C);
      }
    }
    function n(k, C) {
      if (!e) return null;
      for (; C !== null; ) t(k, C), (C = C.sibling);
      return null;
    }
    function r(k, C) {
      for (k = new Map(); C !== null; )
        C.key !== null ? k.set(C.key, C) : k.set(C.index, C), (C = C.sibling);
      return k;
    }
    function l(k, C) {
      return (k = hn(k, C)), (k.index = 0), (k.sibling = null), k;
    }
    function s(k, C, E) {
      return (
        (k.index = E),
        e
          ? ((E = k.alternate),
            E !== null
              ? ((E = E.index), E < C ? ((k.flags |= 2), C) : E)
              : ((k.flags |= 2), C))
          : ((k.flags |= 1048576), C)
      );
    }
    function f(k) {
      return e && k.alternate === null && (k.flags |= 2), k;
    }
    function m(k, C, E, z) {
      return C === null || C.tag !== 6
        ? ((C = Mu(E, k.mode, z)), (C.return = k), C)
        : ((C = l(C, E)), (C.return = k), C);
    }
    function y(k, C, E, z) {
      var q = E.type;
      return q === $
        ? F(k, C, E.props.children, z, E.key)
        : C !== null &&
          (C.elementType === q ||
            (typeof q == "object" &&
              q !== null &&
              q.$$typeof === pe &&
              Ws(q) === C.type))
        ? ((z = l(C, E.props)), (z.ref = Vr(k, C, E)), (z.return = k), z)
        : ((z = ao(E.type, E.key, E.props, null, k.mode, z)),
          (z.ref = Vr(k, C, E)),
          (z.return = k),
          z);
    }
    function P(k, C, E, z) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== E.containerInfo ||
        C.stateNode.implementation !== E.implementation
        ? ((C = Ru(E, k.mode, z)), (C.return = k), C)
        : ((C = l(C, E.children || [])), (C.return = k), C);
    }
    function F(k, C, E, z, q) {
      return C === null || C.tag !== 7
        ? ((C = Mn(E, k.mode, z, q)), (C.return = k), C)
        : ((C = l(C, E)), (C.return = k), C);
    }
    function V(k, C, E) {
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return (C = Mu("" + C, k.mode, E)), (C.return = k), C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case R:
            return (
              (E = ao(C.type, C.key, C.props, null, k.mode, E)),
              (E.ref = Vr(k, null, C)),
              (E.return = k),
              E
            );
          case B:
            return (C = Ru(C, k.mode, E)), (C.return = k), C;
          case pe:
            var z = C._init;
            return V(k, z(C._payload), E);
        }
        if (fr(C) || Z(C))
          return (C = Mn(C, k.mode, E, null)), (C.return = k), C;
        zi(k, C);
      }
      return null;
    }
    function D(k, C, E, z) {
      var q = C !== null ? C.key : null;
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return q !== null ? null : m(k, C, "" + E, z);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case R:
            return E.key === q ? y(k, C, E, z) : null;
          case B:
            return E.key === q ? P(k, C, E, z) : null;
          case pe:
            return (q = E._init), D(k, C, q(E._payload), z);
        }
        if (fr(E) || Z(E)) return q !== null ? null : F(k, C, E, z, null);
        zi(k, E);
      }
      return null;
    }
    function Q(k, C, E, z, q) {
      if ((typeof z == "string" && z !== "") || typeof z == "number")
        return (k = k.get(E) || null), m(C, k, "" + z, q);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case R:
            return (
              (k = k.get(z.key === null ? E : z.key) || null), y(C, k, z, q)
            );
          case B:
            return (
              (k = k.get(z.key === null ? E : z.key) || null), P(C, k, z, q)
            );
          case pe:
            var ne = z._init;
            return Q(k, C, E, ne(z._payload), q);
        }
        if (fr(z) || Z(z)) return (k = k.get(E) || null), F(C, k, z, q, null);
        zi(C, z);
      }
      return null;
    }
    function Y(k, C, E, z) {
      for (
        var q = null, ne = null, re = C, ue = (C = 0), Qe = null;
        re !== null && ue < E.length;
        ue++
      ) {
        re.index > ue ? ((Qe = re), (re = null)) : (Qe = re.sibling);
        var ve = D(k, re, E[ue], z);
        if (ve === null) {
          re === null && (re = Qe);
          break;
        }
        e && re && ve.alternate === null && t(k, re),
          (C = s(ve, C, ue)),
          ne === null ? (q = ve) : (ne.sibling = ve),
          (ne = ve),
          (re = Qe);
      }
      if (ue === E.length) return n(k, re), Re && Cn(k, ue), q;
      if (re === null) {
        for (; ue < E.length; ue++)
          (re = V(k, E[ue], z)),
            re !== null &&
              ((C = s(re, C, ue)),
              ne === null ? (q = re) : (ne.sibling = re),
              (ne = re));
        return Re && Cn(k, ue), q;
      }
      for (re = r(k, re); ue < E.length; ue++)
        (Qe = Q(re, k, ue, E[ue], z)),
          Qe !== null &&
            (e &&
              Qe.alternate !== null &&
              re.delete(Qe.key === null ? ue : Qe.key),
            (C = s(Qe, C, ue)),
            ne === null ? (q = Qe) : (ne.sibling = Qe),
            (ne = Qe));
      return (
        e &&
          re.forEach(function (mn) {
            return t(k, mn);
          }),
        Re && Cn(k, ue),
        q
      );
    }
    function G(k, C, E, z) {
      var q = Z(E);
      if (typeof q != "function") throw Error(a(150));
      if (((E = q.call(E)), E == null)) throw Error(a(151));
      for (
        var ne = (q = null), re = C, ue = (C = 0), Qe = null, ve = E.next();
        re !== null && !ve.done;
        ue++, ve = E.next()
      ) {
        re.index > ue ? ((Qe = re), (re = null)) : (Qe = re.sibling);
        var mn = D(k, re, ve.value, z);
        if (mn === null) {
          re === null && (re = Qe);
          break;
        }
        e && re && mn.alternate === null && t(k, re),
          (C = s(mn, C, ue)),
          ne === null ? (q = mn) : (ne.sibling = mn),
          (ne = mn),
          (re = Qe);
      }
      if (ve.done) return n(k, re), Re && Cn(k, ue), q;
      if (re === null) {
        for (; !ve.done; ue++, ve = E.next())
          (ve = V(k, ve.value, z)),
            ve !== null &&
              ((C = s(ve, C, ue)),
              ne === null ? (q = ve) : (ne.sibling = ve),
              (ne = ve));
        return Re && Cn(k, ue), q;
      }
      for (re = r(k, re); !ve.done; ue++, ve = E.next())
        (ve = Q(re, k, ue, ve.value, z)),
          ve !== null &&
            (e &&
              ve.alternate !== null &&
              re.delete(ve.key === null ? ue : ve.key),
            (C = s(ve, C, ue)),
            ne === null ? (q = ve) : (ne.sibling = ve),
            (ne = ve));
      return (
        e &&
          re.forEach(function (Gh) {
            return t(k, Gh);
          }),
        Re && Cn(k, ue),
        q
      );
    }
    function je(k, C, E, z) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === $ &&
          E.key === null &&
          (E = E.props.children),
        typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case R:
            e: {
              for (var q = E.key, ne = C; ne !== null; ) {
                if (ne.key === q) {
                  if (((q = E.type), q === $)) {
                    if (ne.tag === 7) {
                      n(k, ne.sibling),
                        (C = l(ne, E.props.children)),
                        (C.return = k),
                        (k = C);
                      break e;
                    }
                  } else if (
                    ne.elementType === q ||
                    (typeof q == "object" &&
                      q !== null &&
                      q.$$typeof === pe &&
                      Ws(q) === ne.type)
                  ) {
                    n(k, ne.sibling),
                      (C = l(ne, E.props)),
                      (C.ref = Vr(k, ne, E)),
                      (C.return = k),
                      (k = C);
                    break e;
                  }
                  n(k, ne);
                  break;
                } else t(k, ne);
                ne = ne.sibling;
              }
              E.type === $
                ? ((C = Mn(E.props.children, k.mode, z, E.key)),
                  (C.return = k),
                  (k = C))
                : ((z = ao(E.type, E.key, E.props, null, k.mode, z)),
                  (z.ref = Vr(k, C, E)),
                  (z.return = k),
                  (k = z));
            }
            return f(k);
          case B:
            e: {
              for (ne = E.key; C !== null; ) {
                if (C.key === ne)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === E.containerInfo &&
                    C.stateNode.implementation === E.implementation
                  ) {
                    n(k, C.sibling),
                      (C = l(C, E.children || [])),
                      (C.return = k),
                      (k = C);
                    break e;
                  } else {
                    n(k, C);
                    break;
                  }
                else t(k, C);
                C = C.sibling;
              }
              (C = Ru(E, k.mode, z)), (C.return = k), (k = C);
            }
            return f(k);
          case pe:
            return (ne = E._init), je(k, C, ne(E._payload), z);
        }
        if (fr(E)) return Y(k, C, E, z);
        if (Z(E)) return G(k, C, E, z);
        zi(k, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number"
        ? ((E = "" + E),
          C !== null && C.tag === 6
            ? (n(k, C.sibling), (C = l(C, E)), (C.return = k), (k = C))
            : (n(k, C), (C = Mu(E, k.mode, z)), (C.return = k), (k = C)),
          f(k))
        : n(k, C);
    }
    return je;
  }
  var Xn = Qs(!0),
    Ks = Qs(!1),
    ji = rn(null),
    Ai = null,
    qn = null,
    jl = null;
  function Al() {
    jl = qn = Ai = null;
  }
  function $l(e) {
    var t = ji.current;
    Me(ji), (e._currentValue = t);
  }
  function Ul(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Zn(e, t) {
    (Ai = e),
      (jl = qn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (at = !0), (e.firstContext = null));
  }
  function wt(e) {
    var t = e._currentValue;
    if (jl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), qn === null)) {
        if (Ai === null) throw Error(a(308));
        (qn = e), (Ai.dependencies = { lanes: 0, firstContext: e });
      } else qn = qn.next = e;
    return t;
  }
  var xn = null;
  function Hl(e) {
    xn === null ? (xn = [e]) : xn.push(e);
  }
  function Ys(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Hl(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Ht(e, r)
    );
  }
  function Ht(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var un = !1;
  function Bl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Gs(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Bt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function an(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), me & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ht(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Hl(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ht(e, n)
    );
  }
  function $i(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), il(e, n);
    }
  }
  function Xs(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          s === null ? (l = s = f) : (s = s.next = f), (n = n.next);
        } while (n !== null);
        s === null ? (l = s = t) : (s = s.next = t);
      } else l = s = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Ui(e, t, n, r) {
    var l = e.updateQueue;
    un = !1;
    var s = l.firstBaseUpdate,
      f = l.lastBaseUpdate,
      m = l.shared.pending;
    if (m !== null) {
      l.shared.pending = null;
      var y = m,
        P = y.next;
      (y.next = null), f === null ? (s = P) : (f.next = P), (f = y);
      var F = e.alternate;
      F !== null &&
        ((F = F.updateQueue),
        (m = F.lastBaseUpdate),
        m !== f &&
          (m === null ? (F.firstBaseUpdate = P) : (m.next = P),
          (F.lastBaseUpdate = y)));
    }
    if (s !== null) {
      var V = l.baseState;
      (f = 0), (F = P = y = null), (m = s);
      do {
        var D = m.lane,
          Q = m.eventTime;
        if ((r & D) === D) {
          F !== null &&
            (F = F.next =
              {
                eventTime: Q,
                lane: 0,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null,
              });
          e: {
            var Y = e,
              G = m;
            switch (((D = t), (Q = n), G.tag)) {
              case 1:
                if (((Y = G.payload), typeof Y == "function")) {
                  V = Y.call(Q, V, D);
                  break e;
                }
                V = Y;
                break e;
              case 3:
                Y.flags = (Y.flags & -65537) | 128;
              case 0:
                if (
                  ((Y = G.payload),
                  (D = typeof Y == "function" ? Y.call(Q, V, D) : Y),
                  D == null)
                )
                  break e;
                V = H({}, V, D);
                break e;
              case 2:
                un = !0;
            }
          }
          m.callback !== null &&
            m.lane !== 0 &&
            ((e.flags |= 64),
            (D = l.effects),
            D === null ? (l.effects = [m]) : D.push(m));
        } else
          (Q = {
            eventTime: Q,
            lane: D,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            F === null ? ((P = F = Q), (y = V)) : (F = F.next = Q),
            (f |= D);
        if (((m = m.next), m === null)) {
          if (((m = l.shared.pending), m === null)) break;
          (D = m),
            (m = D.next),
            (D.next = null),
            (l.lastBaseUpdate = D),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (F === null && (y = V),
        (l.baseState = y),
        (l.firstBaseUpdate = P),
        (l.lastBaseUpdate = F),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (f |= l.lane), (l = l.next);
        while (l !== t);
      } else s === null && (l.shared.lanes = 0);
      (On |= f), (e.lanes = f), (e.memoizedState = V);
    }
  }
  function qs(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var br = {},
    Nt = rn(br),
    zr = rn(br),
    jr = rn(br);
  function kn(e) {
    if (e === br) throw Error(a(174));
    return e;
  }
  function Wl(e, t) {
    switch ((_e(jr, t), _e(zr, e), _e(Nt, br), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Qo(t, e));
    }
    Me(Nt), _e(Nt, t);
  }
  function Jn() {
    Me(Nt), Me(zr), Me(jr);
  }
  function Zs(e) {
    kn(jr.current);
    var t = kn(Nt.current),
      n = Qo(t, e.type);
    t !== n && (_e(zr, e), _e(Nt, n));
  }
  function Ql(e) {
    zr.current === e && (Me(Nt), Me(zr));
  }
  var Le = rn(0);
  function Hi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Kl = [];
  function Yl() {
    for (var e = 0; e < Kl.length; e++)
      Kl[e]._workInProgressVersionPrimary = null;
    Kl.length = 0;
  }
  var Bi = W.ReactCurrentDispatcher,
    Gl = W.ReactCurrentBatchConfig,
    En = 0,
    Ne = null,
    Ue = null,
    Be = null,
    Wi = !1,
    Ar = !1,
    $r = 0,
    yh = 0;
  function Ze() {
    throw Error(a(321));
  }
  function Xl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ot(e[n], t[n])) return !1;
    return !0;
  }
  function ql(e, t, n, r, l, s) {
    if (
      ((En = s),
      (Ne = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Bi.current = e === null || e.memoizedState === null ? xh : kh),
      (e = n(r, l)),
      Ar)
    ) {
      s = 0;
      do {
        if (((Ar = !1), ($r = 0), 25 <= s)) throw Error(a(301));
        (s += 1),
          (Be = Ue = null),
          (t.updateQueue = null),
          (Bi.current = Eh),
          (e = n(r, l));
      } while (Ar);
    }
    if (
      ((Bi.current = Yi),
      (t = Ue !== null && Ue.next !== null),
      (En = 0),
      (Be = Ue = Ne = null),
      (Wi = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function Zl() {
    var e = $r !== 0;
    return ($r = 0), e;
  }
  function Dt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Be === null ? (Ne.memoizedState = Be = e) : (Be = Be.next = e), Be;
  }
  function Ct() {
    if (Ue === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = Be === null ? Ne.memoizedState : Be.next;
    if (t !== null) (Be = t), (Ue = e);
    else {
      if (e === null) throw Error(a(310));
      (Ue = e),
        (e = {
          memoizedState: Ue.memoizedState,
          baseState: Ue.baseState,
          baseQueue: Ue.baseQueue,
          queue: Ue.queue,
          next: null,
        }),
        Be === null ? (Ne.memoizedState = Be = e) : (Be = Be.next = e);
    }
    return Be;
  }
  function Ur(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Jl(e) {
    var t = Ct(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Ue,
      l = r.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (l !== null) {
        var f = l.next;
        (l.next = s.next), (s.next = f);
      }
      (r.baseQueue = l = s), (n.pending = null);
    }
    if (l !== null) {
      (s = l.next), (r = r.baseState);
      var m = (f = null),
        y = null,
        P = s;
      do {
        var F = P.lane;
        if ((En & F) === F)
          y !== null &&
            (y = y.next =
              {
                lane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null,
              }),
            (r = P.hasEagerState ? P.eagerState : e(r, P.action));
        else {
          var V = {
            lane: F,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          y === null ? ((m = y = V), (f = r)) : (y = y.next = V),
            (Ne.lanes |= F),
            (On |= F);
        }
        P = P.next;
      } while (P !== null && P !== s);
      y === null ? (f = r) : (y.next = m),
        Ot(r, t.memoizedState) || (at = !0),
        (t.memoizedState = r),
        (t.baseState = f),
        (t.baseQueue = y),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (s = l.lane), (Ne.lanes |= s), (On |= s), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function eu(e) {
    var t = Ct(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      s = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = (l = l.next);
      do (s = e(s, f.action)), (f = f.next);
      while (f !== l);
      Ot(s, t.memoizedState) || (at = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s);
    }
    return [s, r];
  }
  function Js() {}
  function ec(e, t) {
    var n = Ne,
      r = Ct(),
      l = t(),
      s = !Ot(r.memoizedState, l);
    if (
      (s && ((r.memoizedState = l), (at = !0)),
      (r = r.queue),
      tu(rc.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (Be !== null && Be.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Hr(9, nc.bind(null, n, r, l, t), void 0, null),
        We === null)
      )
        throw Error(a(349));
      En & 30 || tc(n, t, l);
    }
    return l;
  }
  function tc(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function nc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ic(t) && oc(e);
  }
  function rc(e, t, n) {
    return n(function () {
      ic(t) && oc(e);
    });
  }
  function ic(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ot(e, n);
    } catch {
      return !0;
    }
  }
  function oc(e) {
    var t = Ht(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function lc(e) {
    var t = Dt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ur,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ch.bind(null, Ne, e)),
      [t.memoizedState, e]
    );
  }
  function Hr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function uc() {
    return Ct().memoizedState;
  }
  function Qi(e, t, n, r) {
    var l = Dt();
    (Ne.flags |= e),
      (l.memoizedState = Hr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Ki(e, t, n, r) {
    var l = Ct();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ue !== null) {
      var f = Ue.memoizedState;
      if (((s = f.destroy), r !== null && Xl(r, f.deps))) {
        l.memoizedState = Hr(t, n, s, r);
        return;
      }
    }
    (Ne.flags |= e), (l.memoizedState = Hr(1 | t, n, s, r));
  }
  function ac(e, t) {
    return Qi(8390656, 8, e, t);
  }
  function tu(e, t) {
    return Ki(2048, 8, e, t);
  }
  function sc(e, t) {
    return Ki(4, 2, e, t);
  }
  function cc(e, t) {
    return Ki(4, 4, e, t);
  }
  function fc(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function dc(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Ki(4, 4, fc.bind(null, t, e), n)
    );
  }
  function nu() {}
  function pc(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xl(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function hc(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xl(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function mc(e, t, n) {
    return En & 21
      ? (Ot(n, t) ||
          ((n = Wa()), (Ne.lanes |= n), (On |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = n));
  }
  function Sh(e, t) {
    var n = ke;
    (ke = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Gl.transition;
    Gl.transition = {};
    try {
      e(!1), t();
    } finally {
      (ke = n), (Gl.transition = r);
    }
  }
  function vc() {
    return Ct().memoizedState;
  }
  function wh(e, t, n) {
    var r = dn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gc(e))
    )
      yc(t, n);
    else if (((n = Ys(e, t, n, r)), n !== null)) {
      var l = ot();
      Rt(n, e, r, l), Sc(n, t, r);
    }
  }
  function Ch(e, t, n) {
    var r = dn(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (gc(e)) yc(t, l);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var f = t.lastRenderedState,
            m = s(f, n);
          if (((l.hasEagerState = !0), (l.eagerState = m), Ot(m, f))) {
            var y = t.interleaved;
            y === null
              ? ((l.next = l), Hl(t))
              : ((l.next = y.next), (y.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ys(e, t, l, r)),
        n !== null && ((l = ot()), Rt(n, e, r, l), Sc(n, t, r));
    }
  }
  function gc(e) {
    var t = e.alternate;
    return e === Ne || (t !== null && t === Ne);
  }
  function yc(e, t) {
    Ar = Wi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Sc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), il(e, n);
    }
  }
  var Yi = {
      readContext: wt,
      useCallback: Ze,
      useContext: Ze,
      useEffect: Ze,
      useImperativeHandle: Ze,
      useInsertionEffect: Ze,
      useLayoutEffect: Ze,
      useMemo: Ze,
      useReducer: Ze,
      useRef: Ze,
      useState: Ze,
      useDebugValue: Ze,
      useDeferredValue: Ze,
      useTransition: Ze,
      useMutableSource: Ze,
      useSyncExternalStore: Ze,
      useId: Ze,
      unstable_isNewReconciler: !1,
    },
    xh = {
      readContext: wt,
      useCallback: function (e, t) {
        return (Dt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: wt,
      useEffect: ac,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Qi(4194308, 4, fc.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Qi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Qi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Dt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Dt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = wh.bind(null, Ne, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Dt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: lc,
      useDebugValue: nu,
      useDeferredValue: function (e) {
        return (Dt().memoizedState = e);
      },
      useTransition: function () {
        var e = lc(!1),
          t = e[0];
        return (e = Sh.bind(null, e[1])), (Dt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ne,
          l = Dt();
        if (Re) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), We === null)) throw Error(a(349));
          En & 30 || tc(r, t, n);
        }
        l.memoizedState = n;
        var s = { value: n, getSnapshot: t };
        return (
          (l.queue = s),
          ac(rc.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          Hr(9, nc.bind(null, r, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Dt(),
          t = We.identifierPrefix;
        if (Re) {
          var n = Ut,
            r = $t;
          (n = (r & ~(1 << (32 - Et(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = $r++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = yh++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    kh = {
      readContext: wt,
      useCallback: pc,
      useContext: wt,
      useEffect: tu,
      useImperativeHandle: dc,
      useInsertionEffect: sc,
      useLayoutEffect: cc,
      useMemo: hc,
      useReducer: Jl,
      useRef: uc,
      useState: function () {
        return Jl(Ur);
      },
      useDebugValue: nu,
      useDeferredValue: function (e) {
        var t = Ct();
        return mc(t, Ue.memoizedState, e);
      },
      useTransition: function () {
        var e = Jl(Ur)[0],
          t = Ct().memoizedState;
        return [e, t];
      },
      useMutableSource: Js,
      useSyncExternalStore: ec,
      useId: vc,
      unstable_isNewReconciler: !1,
    },
    Eh = {
      readContext: wt,
      useCallback: pc,
      useContext: wt,
      useEffect: tu,
      useImperativeHandle: dc,
      useInsertionEffect: sc,
      useLayoutEffect: cc,
      useMemo: hc,
      useReducer: eu,
      useRef: uc,
      useState: function () {
        return eu(Ur);
      },
      useDebugValue: nu,
      useDeferredValue: function (e) {
        var t = Ct();
        return Ue === null ? (t.memoizedState = e) : mc(t, Ue.memoizedState, e);
      },
      useTransition: function () {
        var e = eu(Ur)[0],
          t = Ct().memoizedState;
        return [e, t];
      },
      useMutableSource: Js,
      useSyncExternalStore: ec,
      useId: vc,
      unstable_isNewReconciler: !1,
    };
  function _t(e, t) {
    if (e && e.defaultProps) {
      (t = H({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ru(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : H({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Gi = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? gn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ot(),
        l = dn(e),
        s = Bt(r, l);
      (s.payload = t),
        n != null && (s.callback = n),
        (t = an(e, s, l)),
        t !== null && (Rt(t, e, l, r), $i(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ot(),
        l = dn(e),
        s = Bt(r, l);
      (s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = an(e, s, l)),
        t !== null && (Rt(t, e, l, r), $i(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ot(),
        r = dn(e),
        l = Bt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = an(e, l, r)),
        t !== null && (Rt(t, e, r, n), $i(t, e, r));
    },
  };
  function wc(e, t, n, r, l, s, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, s, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Mr(n, r) || !Mr(l, s)
        : !0
    );
  }
  function Cc(e, t, n) {
    var r = !1,
      l = on,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = wt(s))
        : ((l = ut(t) ? Sn : qe.current),
          (r = t.contextTypes),
          (s = (r = r != null) ? Qn(e, l) : on)),
      (t = new t(n, s)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Gi),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    );
  }
  function xc(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Gi.enqueueReplaceState(t, t.state, null);
  }
  function iu(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Bl(e);
    var s = t.contextType;
    typeof s == "object" && s !== null
      ? (l.context = wt(s))
      : ((s = ut(t) ? Sn : qe.current), (l.context = Qn(e, s))),
      (l.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (ru(e, t, s, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Gi.enqueueReplaceState(l, l.state, null),
        Ui(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function er(e, t) {
    try {
      var n = "",
        r = t;
      do (n += se(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (s) {
      l =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ou(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function lu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Oh = typeof WeakMap == "function" ? WeakMap : Map;
  function kc(e, t, n) {
    (n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        no || ((no = !0), (Cu = r)), lu(e, t);
      }),
      n
    );
  }
  function Ec(e, t, n) {
    (n = Bt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          lu(e, t);
        });
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
          lu(e, t),
            typeof r != "function" &&
              (cn === null ? (cn = new Set([this])) : cn.add(this));
          var f = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: f !== null ? f : "",
          });
        }),
      n
    );
  }
  function Oc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Oh();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = jh.bind(null, e, t, n)), t.then(e, e));
  }
  function Pc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function _c(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Bt(-1, 1)), (t.tag = 2), an(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Ph = W.ReactCurrentOwner,
    at = !1;
  function it(e, t, n, r) {
    t.child = e === null ? Ks(t, null, n, r) : Xn(t, e.child, n, r);
  }
  function Ic(e, t, n, r, l) {
    n = n.render;
    var s = t.ref;
    return (
      Zn(t, l),
      (r = ql(e, t, n, r, s, l)),
      (n = Zl()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Wt(e, t, l))
        : (Re && n && Dl(t), (t.flags |= 1), it(e, t, r, l), t.child)
    );
  }
  function Mc(e, t, n, r, l) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !Iu(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), Rc(e, t, s, r, l))
        : ((e = ao(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !(e.lanes & l))) {
      var f = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Mr), n(f, r) && e.ref === t.ref)
      )
        return Wt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = hn(s, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Rc(e, t, n, r, l) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Mr(s, r) && e.ref === t.ref)
        if (((at = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
          e.flags & 131072 && (at = !0);
        else return (t.lanes = e.lanes), Wt(e, t, l);
    }
    return uu(e, t, n, r, l);
  }
  function Tc(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          _e(nr, vt),
          (vt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            _e(nr, vt),
            (vt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : n),
          _e(nr, vt),
          (vt |= r);
      }
    else
      s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        _e(nr, vt),
        (vt |= r);
    return it(e, t, l, n), t.child;
  }
  function Lc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function uu(e, t, n, r, l) {
    var s = ut(n) ? Sn : qe.current;
    return (
      (s = Qn(t, s)),
      Zn(t, l),
      (n = ql(e, t, n, r, s, l)),
      (r = Zl()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Wt(e, t, l))
        : (Re && r && Dl(t), (t.flags |= 1), it(e, t, n, l), t.child)
    );
  }
  function Nc(e, t, n, r, l) {
    if (ut(n)) {
      var s = !0;
      Ni(t);
    } else s = !1;
    if ((Zn(t, l), t.stateNode === null))
      qi(e, t), Cc(t, n, r), iu(t, n, r, l), (r = !0);
    else if (e === null) {
      var f = t.stateNode,
        m = t.memoizedProps;
      f.props = m;
      var y = f.context,
        P = n.contextType;
      typeof P == "object" && P !== null
        ? (P = wt(P))
        : ((P = ut(n) ? Sn : qe.current), (P = Qn(t, P)));
      var F = n.getDerivedStateFromProps,
        V =
          typeof F == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function";
      V ||
        (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
          typeof f.componentWillReceiveProps != "function") ||
        ((m !== r || y !== P) && xc(t, f, r, P)),
        (un = !1);
      var D = t.memoizedState;
      (f.state = D),
        Ui(t, r, f, l),
        (y = t.memoizedState),
        m !== r || D !== y || lt.current || un
          ? (typeof F == "function" && (ru(t, n, F, r), (y = t.memoizedState)),
            (m = un || wc(t, n, m, r, D, y, P))
              ? (V ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = y)),
            (f.props = r),
            (f.state = y),
            (f.context = P),
            (r = m))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (f = t.stateNode),
        Gs(e, t),
        (m = t.memoizedProps),
        (P = t.type === t.elementType ? m : _t(t.type, m)),
        (f.props = P),
        (V = t.pendingProps),
        (D = f.context),
        (y = n.contextType),
        typeof y == "object" && y !== null
          ? (y = wt(y))
          : ((y = ut(n) ? Sn : qe.current), (y = Qn(t, y)));
      var Q = n.getDerivedStateFromProps;
      (F =
        typeof Q == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function") ||
        (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
          typeof f.componentWillReceiveProps != "function") ||
        ((m !== V || D !== y) && xc(t, f, r, y)),
        (un = !1),
        (D = t.memoizedState),
        (f.state = D),
        Ui(t, r, f, l);
      var Y = t.memoizedState;
      m !== V || D !== Y || lt.current || un
        ? (typeof Q == "function" && (ru(t, n, Q, r), (Y = t.memoizedState)),
          (P = un || wc(t, n, P, r, D, Y, y) || !1)
            ? (F ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(r, Y, y),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(r, Y, y)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (m === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = Y)),
          (f.props = r),
          (f.state = Y),
          (f.context = y),
          (r = P))
        : (typeof f.componentDidUpdate != "function" ||
            (m === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return au(e, t, n, r, s, l);
  }
  function au(e, t, n, r, l, s) {
    Lc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!r && !f) return l && zs(t, n, !1), Wt(e, t, s);
    (r = t.stateNode), (Ph.current = t);
    var m =
      f && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && f
        ? ((t.child = Xn(t, e.child, null, s)), (t.child = Xn(t, null, m, s)))
        : it(e, t, m, s),
      (t.memoizedState = r.state),
      l && zs(t, n, !0),
      t.child
    );
  }
  function Dc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Vs(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Vs(e, t.context, !1),
      Wl(e, t.containerInfo);
  }
  function Fc(e, t, n, r, l) {
    return Gn(), zl(l), (t.flags |= 256), it(e, t, n, r), t.child;
  }
  var su = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Vc(e, t, n) {
    var r = t.pendingProps,
      l = Le.current,
      s = !1,
      f = (t.flags & 128) !== 0,
      m;
    if (
      ((m = f) ||
        (m = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      m
        ? ((s = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      _e(Le, l & 1),
      e === null)
    )
      return (
        bl(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((f = r.children),
            (e = r.fallback),
            s
              ? ((r = t.mode),
                (s = t.child),
                (f = { mode: "hidden", children: f }),
                !(r & 1) && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = f))
                  : (s = so(f, r, 0, null)),
                (e = Mn(e, r, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = cu(n)),
                (t.memoizedState = su),
                e)
              : fu(t, f))
      );
    if (((l = e.memoizedState), l !== null && ((m = l.dehydrated), m !== null)))
      return _h(e, t, f, r, m, l, n);
    if (s) {
      (s = r.fallback), (f = t.mode), (l = e.child), (m = l.sibling);
      var y = { mode: "hidden", children: r.children };
      return (
        !(f & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = y),
            (t.deletions = null))
          : ((r = hn(l, y)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        m !== null ? (s = hn(m, s)) : ((s = Mn(s, f, n, null)), (s.flags |= 2)),
        (s.return = t),
        (r.return = t),
        (r.sibling = s),
        (t.child = r),
        (r = s),
        (s = t.child),
        (f = e.child.memoizedState),
        (f =
          f === null
            ? cu(n)
            : {
                baseLanes: f.baseLanes | n,
                cachePool: null,
                transitions: f.transitions,
              }),
        (s.memoizedState = f),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = su),
        r
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = hn(s, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function fu(e, t) {
    return (
      (t = so({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Xi(e, t, n, r) {
    return (
      r !== null && zl(r),
      Xn(t, e.child, null, n),
      (e = fu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function _h(e, t, n, r, l, s, f) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ou(Error(a(422)))), Xi(e, t, f, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (l = t.mode),
          (r = so({ mode: "visible", children: r.children }, l, 0, null)),
          (s = Mn(s, l, f, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Xn(t, e.child, null, f),
          (t.child.memoizedState = cu(f)),
          (t.memoizedState = su),
          s);
    if (!(t.mode & 1)) return Xi(e, t, f, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var m = r.dgst;
      return (
        (r = m), (s = Error(a(419))), (r = ou(s, r, void 0)), Xi(e, t, f, r)
      );
    }
    if (((m = (f & e.childLanes) !== 0), at || m)) {
      if (((r = We), r !== null)) {
        switch (f & -f) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | f) ? 0 : l),
          l !== 0 &&
            l !== s.retryLane &&
            ((s.retryLane = l), Ht(e, l), Rt(r, e, l, -1));
      }
      return _u(), (r = ou(Error(a(421)))), Xi(e, t, f, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Ah.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (mt = nn(l.nextSibling)),
        (ht = t),
        (Re = !0),
        (Pt = null),
        e !== null &&
          ((yt[St++] = $t),
          (yt[St++] = Ut),
          (yt[St++] = wn),
          ($t = e.id),
          (Ut = e.overflow),
          (wn = t)),
        (t = fu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function bc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ul(e.return, t, n);
  }
  function du(e, t, n, r, l) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = l));
  }
  function zc(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      s = r.tail;
    if ((it(e, t, r.children, n), (r = Le.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && bc(e, n, t);
          else if (e.tag === 19) bc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((_e(Le, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Hi(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            du(t, !1, l, n, s);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Hi(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          du(t, !0, n, null, s);
          break;
        case "together":
          du(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function qi(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Wt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (On |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = hn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Ih(e, t, n) {
    switch (t.tag) {
      case 3:
        Dc(t), Gn();
        break;
      case 5:
        Zs(t);
        break;
      case 1:
        ut(t.type) && Ni(t);
        break;
      case 4:
        Wl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        _e(ji, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (_e(Le, Le.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Vc(e, t, n)
            : (_e(Le, Le.current & 1),
              (e = Wt(e, t, n)),
              e !== null ? e.sibling : null);
        _e(Le, Le.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return zc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          _e(Le, Le.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Tc(e, t, n);
    }
    return Wt(e, t, n);
  }
  var jc, pu, Ac, $c;
  (jc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (pu = function () {}),
    (Ac = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), kn(Nt.current);
        var s = null;
        switch (n) {
          case "input":
            (l = Nn(e, l)), (r = Nn(e, r)), (s = []);
            break;
          case "select":
            (l = H({}, l, { value: void 0 })),
              (r = H({}, r, { value: void 0 })),
              (s = []);
            break;
          case "textarea":
            (l = Wo(e, l)), (r = Wo(e, r)), (s = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Ri);
        }
        Ko(n, r);
        var f;
        n = null;
        for (P in l)
          if (!r.hasOwnProperty(P) && l.hasOwnProperty(P) && l[P] != null)
            if (P === "style") {
              var m = l[P];
              for (f in m) m.hasOwnProperty(f) && (n || (n = {}), (n[f] = ""));
            } else
              P !== "dangerouslySetInnerHTML" &&
                P !== "children" &&
                P !== "suppressContentEditableWarning" &&
                P !== "suppressHydrationWarning" &&
                P !== "autoFocus" &&
                (u.hasOwnProperty(P)
                  ? s || (s = [])
                  : (s = s || []).push(P, null));
        for (P in r) {
          var y = r[P];
          if (
            ((m = l != null ? l[P] : void 0),
            r.hasOwnProperty(P) && y !== m && (y != null || m != null))
          )
            if (P === "style")
              if (m) {
                for (f in m)
                  !m.hasOwnProperty(f) ||
                    (y && y.hasOwnProperty(f)) ||
                    (n || (n = {}), (n[f] = ""));
                for (f in y)
                  y.hasOwnProperty(f) &&
                    m[f] !== y[f] &&
                    (n || (n = {}), (n[f] = y[f]));
              } else n || (s || (s = []), s.push(P, n)), (n = y);
            else
              P === "dangerouslySetInnerHTML"
                ? ((y = y ? y.__html : void 0),
                  (m = m ? m.__html : void 0),
                  y != null && m !== y && (s = s || []).push(P, y))
                : P === "children"
                ? (typeof y != "string" && typeof y != "number") ||
                  (s = s || []).push(P, "" + y)
                : P !== "suppressContentEditableWarning" &&
                  P !== "suppressHydrationWarning" &&
                  (u.hasOwnProperty(P)
                    ? (y != null && P === "onScroll" && Ie("scroll", e),
                      s || m === y || (s = []))
                    : (s = s || []).push(P, y));
        }
        n && (s = s || []).push("style", n);
        var P = s;
        (t.updateQueue = P) && (t.flags |= 4);
      }
    }),
    ($c = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Br(e, t) {
    if (!Re)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Mh(e, t, n) {
    var r = t.pendingProps;
    switch ((Fl(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Je(t), null;
      case 1:
        return ut(t.type) && Li(), Je(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Jn(),
          Me(lt),
          Me(qe),
          Yl(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (bi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Pt !== null && (Eu(Pt), (Pt = null)))),
          pu(e, t),
          Je(t),
          null
        );
      case 5:
        Ql(t);
        var l = kn(jr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Ac(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return Je(t), null;
          }
          if (((e = kn(Nt.current)), bi(t))) {
            (r = t.stateNode), (n = t.type);
            var s = t.memoizedProps;
            switch (((r[Lt] = t), (r[Dr] = s), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Ie("cancel", r), Ie("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ie("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tr.length; l++) Ie(Tr[l], r);
                break;
              case "source":
                Ie("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ie("error", r), Ie("load", r);
                break;
              case "details":
                Ie("toggle", r);
                break;
              case "input":
                ui(r, s), Ie("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!s.multiple }),
                  Ie("invalid", r);
                break;
              case "textarea":
                Ea(r, s), Ie("invalid", r);
            }
            Ko(n, s), (l = null);
            for (var f in s)
              if (s.hasOwnProperty(f)) {
                var m = s[f];
                f === "children"
                  ? typeof m == "string"
                    ? r.textContent !== m &&
                      (s.suppressHydrationWarning !== !0 &&
                        Mi(r.textContent, m, e),
                      (l = ["children", m]))
                    : typeof m == "number" &&
                      r.textContent !== "" + m &&
                      (s.suppressHydrationWarning !== !0 &&
                        Mi(r.textContent, m, e),
                      (l = ["children", "" + m]))
                  : u.hasOwnProperty(f) &&
                    m != null &&
                    f === "onScroll" &&
                    Ie("scroll", r);
              }
            switch (n) {
              case "input":
                vn(r), ka(r, s, !0);
                break;
              case "textarea":
                vn(r), Pa(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = Ri);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (f = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = _a(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = f.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = f.createElement(n, { is: r.is }))
                  : ((e = f.createElement(n)),
                    n === "select" &&
                      ((f = e),
                      r.multiple
                        ? (f.multiple = !0)
                        : r.size && (f.size = r.size)))
                : (e = f.createElementNS(e, n)),
              (e[Lt] = t),
              (e[Dr] = r),
              jc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((f = Yo(n, r)), n)) {
                case "dialog":
                  Ie("cancel", e), Ie("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ie("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Tr.length; l++) Ie(Tr[l], e);
                  l = r;
                  break;
                case "source":
                  Ie("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Ie("error", e), Ie("load", e), (l = r);
                  break;
                case "details":
                  Ie("toggle", e), (l = r);
                  break;
                case "input":
                  ui(e, r), (l = Nn(e, r)), Ie("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = H({}, r, { value: void 0 })),
                    Ie("invalid", e);
                  break;
                case "textarea":
                  Ea(e, r), (l = Wo(e, r)), Ie("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ko(n, l), (m = l);
              for (s in m)
                if (m.hasOwnProperty(s)) {
                  var y = m[s];
                  s === "style"
                    ? Ra(e, y)
                    : s === "dangerouslySetInnerHTML"
                    ? ((y = y ? y.__html : void 0), y != null && Ia(e, y))
                    : s === "children"
                    ? typeof y == "string"
                      ? (n !== "textarea" || y !== "") && dr(e, y)
                      : typeof y == "number" && dr(e, "" + y)
                    : s !== "suppressContentEditableWarning" &&
                      s !== "suppressHydrationWarning" &&
                      s !== "autoFocus" &&
                      (u.hasOwnProperty(s)
                        ? y != null && s === "onScroll" && Ie("scroll", e)
                        : y != null && j(e, s, y, f));
                }
              switch (n) {
                case "input":
                  vn(e), ka(e, r, !1);
                  break;
                case "textarea":
                  vn(e), Pa(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ce(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? Dn(e, !!r.multiple, s, !1)
                      : r.defaultValue != null &&
                        Dn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ri);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Je(t), null;
      case 6:
        if (e && t.stateNode != null) $c(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = kn(jr.current)), kn(Nt.current), bi(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Lt] = t),
              (s = r.nodeValue !== n) && ((e = ht), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Mi(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Mi(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            s && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Lt] = t),
              (t.stateNode = r);
        }
        return Je(t), null;
      case 13:
        if (
          (Me(Le),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Re && mt !== null && t.mode & 1 && !(t.flags & 128))
            Bs(), Gn(), (t.flags |= 98560), (s = !1);
          else if (((s = bi(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(a(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(a(317));
              s[Lt] = t;
            } else
              Gn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Je(t), (s = !1);
          } else Pt !== null && (Eu(Pt), (Pt = null)), (s = !0);
          if (!s) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Le.current & 1 ? He === 0 && (He = 3) : _u())),
            t.updateQueue !== null && (t.flags |= 4),
            Je(t),
            null);
      case 4:
        return (
          Jn(),
          pu(e, t),
          e === null && Lr(t.stateNode.containerInfo),
          Je(t),
          null
        );
      case 10:
        return $l(t.type._context), Je(t), null;
      case 17:
        return ut(t.type) && Li(), Je(t), null;
      case 19:
        if ((Me(Le), (s = t.memoizedState), s === null)) return Je(t), null;
        if (((r = (t.flags & 128) !== 0), (f = s.rendering), f === null))
          if (r) Br(s, !1);
          else {
            if (He !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((f = Hi(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      Br(s, !1),
                      r = f.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (s = n),
                      (e = r),
                      (s.flags &= 14680066),
                      (f = s.alternate),
                      f === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = f.childLanes),
                          (s.lanes = f.lanes),
                          (s.child = f.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = f.memoizedProps),
                          (s.memoizedState = f.memoizedState),
                          (s.updateQueue = f.updateQueue),
                          (s.type = f.type),
                          (e = f.dependencies),
                          (s.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return _e(Le, (Le.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            s.tail !== null &&
              ze() > rr &&
              ((t.flags |= 128), (r = !0), Br(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Hi(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Br(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !f.alternate &&
                  !Re)
              )
                return Je(t), null;
            } else
              2 * ze() - s.renderingStartTime > rr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Br(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((n = s.last),
              n !== null ? (n.sibling = f) : (t.child = f),
              (s.last = f));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = ze()),
            (t.sibling = null),
            (n = Le.current),
            _e(Le, r ? (n & 1) | 2 : n & 1),
            t)
          : (Je(t), null);
      case 22:
      case 23:
        return (
          Pu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? vt & 1073741824 &&
              (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Je(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Rh(e, t) {
    switch ((Fl(t), t.tag)) {
      case 1:
        return (
          ut(t.type) && Li(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Jn(),
          Me(lt),
          Me(qe),
          Yl(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ql(t), null;
      case 13:
        if (
          (Me(Le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          Gn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Me(Le), null;
      case 4:
        return Jn(), null;
      case 10:
        return $l(t.type._context), null;
      case 22:
      case 23:
        return Pu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Zi = !1,
    et = !1,
    Th = typeof WeakSet == "function" ? WeakSet : Set,
    K = null;
  function tr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Fe(e, t, r);
        }
      else n.current = null;
  }
  function hu(e, t, n) {
    try {
      n();
    } catch (r) {
      Fe(e, t, r);
    }
  }
  var Uc = !1;
  function Lh(e, t) {
    if (((Pl = yi), (e = ws()), yl(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0,
              m = -1,
              y = -1,
              P = 0,
              F = 0,
              V = e,
              D = null;
            t: for (;;) {
              for (
                var Q;
                V !== n || (l !== 0 && V.nodeType !== 3) || (m = f + l),
                  V !== s || (r !== 0 && V.nodeType !== 3) || (y = f + r),
                  V.nodeType === 3 && (f += V.nodeValue.length),
                  (Q = V.firstChild) !== null;

              )
                (D = V), (V = Q);
              for (;;) {
                if (V === e) break t;
                if (
                  (D === n && ++P === l && (m = f),
                  D === s && ++F === r && (y = f),
                  (Q = V.nextSibling) !== null)
                )
                  break;
                (V = D), (D = V.parentNode);
              }
              V = Q;
            }
            n = m === -1 || y === -1 ? null : { start: m, end: y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      _l = { focusedElem: e, selectionRange: n }, yi = !1, K = t;
      K !== null;

    )
      if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (K = e);
      else
        for (; K !== null; ) {
          t = K;
          try {
            var Y = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Y !== null) {
                    var G = Y.memoizedProps,
                      je = Y.memoizedState,
                      k = t.stateNode,
                      C = k.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? G : _t(t.type, G),
                        je
                      );
                    k.__reactInternalSnapshotBeforeUpdate = C;
                  }
                  break;
                case 3:
                  var E = t.stateNode.containerInfo;
                  E.nodeType === 1
                    ? (E.textContent = "")
                    : E.nodeType === 9 &&
                      E.documentElement &&
                      E.removeChild(E.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (z) {
            Fe(t, t.return, z);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (K = e);
            break;
          }
          K = t.return;
        }
    return (Y = Uc), (Uc = !1), Y;
  }
  function Wr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var s = l.destroy;
          (l.destroy = void 0), s !== void 0 && hu(t, n, s);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ji(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function mu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Hc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Hc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Lt],
          delete t[Dr],
          delete t[Tl],
          delete t[hh],
          delete t[mh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Bc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Wc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Ri));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (vu(e, t, n), e = e.sibling; e !== null; )
        vu(e, t, n), (e = e.sibling);
  }
  function gu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (gu(e, t, n), e = e.sibling; e !== null; )
        gu(e, t, n), (e = e.sibling);
  }
  var Ye = null,
    It = !1;
  function sn(e, t, n) {
    for (n = n.child; n !== null; ) Qc(e, t, n), (n = n.sibling);
  }
  function Qc(e, t, n) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function")
      try {
        Tt.onCommitFiberUnmount(di, n);
      } catch {}
    switch (n.tag) {
      case 5:
        et || tr(n, t);
      case 6:
        var r = Ye,
          l = It;
        (Ye = null),
          sn(e, t, n),
          (Ye = r),
          (It = l),
          Ye !== null &&
            (It
              ? ((e = Ye),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ye.removeChild(n.stateNode));
        break;
      case 18:
        Ye !== null &&
          (It
            ? ((e = Ye),
              (n = n.stateNode),
              e.nodeType === 8
                ? Rl(e.parentNode, n)
                : e.nodeType === 1 && Rl(e, n),
              kr(e))
            : Rl(Ye, n.stateNode));
        break;
      case 4:
        (r = Ye),
          (l = It),
          (Ye = n.stateNode.containerInfo),
          (It = !0),
          sn(e, t, n),
          (Ye = r),
          (It = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !et &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var s = l,
              f = s.destroy;
            (s = s.tag),
              f !== void 0 && (s & 2 || s & 4) && hu(n, t, f),
              (l = l.next);
          } while (l !== r);
        }
        sn(e, t, n);
        break;
      case 1:
        if (
          !et &&
          (tr(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (m) {
            Fe(n, t, m);
          }
        sn(e, t, n);
        break;
      case 21:
        sn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((et = (r = et) || n.memoizedState !== null), sn(e, t, n), (et = r))
          : sn(e, t, n);
        break;
      default:
        sn(e, t, n);
    }
  }
  function Kc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Th()),
        t.forEach(function (r) {
          var l = $h.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function Mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var s = e,
            f = t,
            m = f;
          e: for (; m !== null; ) {
            switch (m.tag) {
              case 5:
                (Ye = m.stateNode), (It = !1);
                break e;
              case 3:
                (Ye = m.stateNode.containerInfo), (It = !0);
                break e;
              case 4:
                (Ye = m.stateNode.containerInfo), (It = !0);
                break e;
            }
            m = m.return;
          }
          if (Ye === null) throw Error(a(160));
          Qc(s, f, l), (Ye = null), (It = !1);
          var y = l.alternate;
          y !== null && (y.return = null), (l.return = null);
        } catch (P) {
          Fe(l, t, P);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Yc(t, e), (t = t.sibling);
  }
  function Yc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Mt(t, e), Ft(e), r & 4)) {
          try {
            Wr(3, e, e.return), Ji(3, e);
          } catch (G) {
            Fe(e, e.return, G);
          }
          try {
            Wr(5, e, e.return);
          } catch (G) {
            Fe(e, e.return, G);
          }
        }
        break;
      case 1:
        Mt(t, e), Ft(e), r & 512 && n !== null && tr(n, n.return);
        break;
      case 5:
        if (
          (Mt(t, e),
          Ft(e),
          r & 512 && n !== null && tr(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            dr(l, "");
          } catch (G) {
            Fe(e, e.return, G);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var s = e.memoizedProps,
            f = n !== null ? n.memoizedProps : s,
            m = e.type,
            y = e.updateQueue;
          if (((e.updateQueue = null), y !== null))
            try {
              m === "input" && s.type === "radio" && s.name != null && xa(l, s),
                Yo(m, f);
              var P = Yo(m, s);
              for (f = 0; f < y.length; f += 2) {
                var F = y[f],
                  V = y[f + 1];
                F === "style"
                  ? Ra(l, V)
                  : F === "dangerouslySetInnerHTML"
                  ? Ia(l, V)
                  : F === "children"
                  ? dr(l, V)
                  : j(l, F, V, P);
              }
              switch (m) {
                case "input":
                  Ho(l, s);
                  break;
                case "textarea":
                  Oa(l, s);
                  break;
                case "select":
                  var D = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!s.multiple;
                  var Q = s.value;
                  Q != null
                    ? Dn(l, !!s.multiple, Q, !1)
                    : D !== !!s.multiple &&
                      (s.defaultValue != null
                        ? Dn(l, !!s.multiple, s.defaultValue, !0)
                        : Dn(l, !!s.multiple, s.multiple ? [] : "", !1));
              }
              l[Dr] = s;
            } catch (G) {
              Fe(e, e.return, G);
            }
        }
        break;
      case 6:
        if ((Mt(t, e), Ft(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (s = e.memoizedProps);
          try {
            l.nodeValue = s;
          } catch (G) {
            Fe(e, e.return, G);
          }
        }
        break;
      case 3:
        if (
          (Mt(t, e), Ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            kr(t.containerInfo);
          } catch (G) {
            Fe(e, e.return, G);
          }
        break;
      case 4:
        Mt(t, e), Ft(e);
        break;
      case 13:
        Mt(t, e),
          Ft(e),
          (l = e.child),
          l.flags & 8192 &&
            ((s = l.memoizedState !== null),
            (l.stateNode.isHidden = s),
            !s ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (wu = ze())),
          r & 4 && Kc(e);
        break;
      case 22:
        if (
          ((F = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((et = (P = et) || F), Mt(t, e), (et = P)) : Mt(t, e),
          Ft(e),
          r & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null),
            (e.stateNode.isHidden = P) && !F && e.mode & 1)
          )
            for (K = e, F = e.child; F !== null; ) {
              for (V = K = F; K !== null; ) {
                switch (((D = K), (Q = D.child), D.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Wr(4, D, D.return);
                    break;
                  case 1:
                    tr(D, D.return);
                    var Y = D.stateNode;
                    if (typeof Y.componentWillUnmount == "function") {
                      (r = D), (n = D.return);
                      try {
                        (t = r),
                          (Y.props = t.memoizedProps),
                          (Y.state = t.memoizedState),
                          Y.componentWillUnmount();
                      } catch (G) {
                        Fe(r, n, G);
                      }
                    }
                    break;
                  case 5:
                    tr(D, D.return);
                    break;
                  case 22:
                    if (D.memoizedState !== null) {
                      qc(V);
                      continue;
                    }
                }
                Q !== null ? ((Q.return = D), (K = Q)) : qc(V);
              }
              F = F.sibling;
            }
          e: for (F = null, V = e; ; ) {
            if (V.tag === 5) {
              if (F === null) {
                F = V;
                try {
                  (l = V.stateNode),
                    P
                      ? ((s = l.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((m = V.stateNode),
                        (y = V.memoizedProps.style),
                        (f =
                          y != null && y.hasOwnProperty("display")
                            ? y.display
                            : null),
                        (m.style.display = Ma("display", f)));
                } catch (G) {
                  Fe(e, e.return, G);
                }
              }
            } else if (V.tag === 6) {
              if (F === null)
                try {
                  V.stateNode.nodeValue = P ? "" : V.memoizedProps;
                } catch (G) {
                  Fe(e, e.return, G);
                }
            } else if (
              ((V.tag !== 22 && V.tag !== 23) ||
                V.memoizedState === null ||
                V === e) &&
              V.child !== null
            ) {
              (V.child.return = V), (V = V.child);
              continue;
            }
            if (V === e) break e;
            for (; V.sibling === null; ) {
              if (V.return === null || V.return === e) break e;
              F === V && (F = null), (V = V.return);
            }
            F === V && (F = null),
              (V.sibling.return = V.return),
              (V = V.sibling);
          }
        }
        break;
      case 19:
        Mt(t, e), Ft(e), r & 4 && Kc(e);
        break;
      case 21:
        break;
      default:
        Mt(t, e), Ft(e);
    }
  }
  function Ft(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Bc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (dr(l, ""), (r.flags &= -33));
            var s = Wc(e);
            gu(e, s, l);
            break;
          case 3:
          case 4:
            var f = r.stateNode.containerInfo,
              m = Wc(e);
            vu(e, m, f);
            break;
          default:
            throw Error(a(161));
        }
      } catch (y) {
        Fe(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Nh(e, t, n) {
    (K = e), Gc(e);
  }
  function Gc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; K !== null; ) {
      var l = K,
        s = l.child;
      if (l.tag === 22 && r) {
        var f = l.memoizedState !== null || Zi;
        if (!f) {
          var m = l.alternate,
            y = (m !== null && m.memoizedState !== null) || et;
          m = Zi;
          var P = et;
          if (((Zi = f), (et = y) && !P))
            for (K = l; K !== null; )
              (f = K),
                (y = f.child),
                f.tag === 22 && f.memoizedState !== null
                  ? Zc(l)
                  : y !== null
                  ? ((y.return = f), (K = y))
                  : Zc(l);
          for (; s !== null; ) (K = s), Gc(s), (s = s.sibling);
          (K = l), (Zi = m), (et = P);
        }
        Xc(e);
      } else
        l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (K = s)) : Xc(e);
    }
  }
  function Xc(e) {
    for (; K !== null; ) {
      var t = K;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                et || Ji(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !et)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : _t(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var s = t.updateQueue;
                s !== null && qs(t, s, r);
                break;
              case 3:
                var f = t.updateQueue;
                if (f !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  qs(t, f, n);
                }
                break;
              case 5:
                var m = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = m;
                  var y = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      y.autoFocus && n.focus();
                      break;
                    case "img":
                      y.src && (n.src = y.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var P = t.alternate;
                  if (P !== null) {
                    var F = P.memoizedState;
                    if (F !== null) {
                      var V = F.dehydrated;
                      V !== null && kr(V);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          et || (t.flags & 512 && mu(t));
        } catch (D) {
          Fe(t, t.return, D);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (K = n);
        break;
      }
      K = t.return;
    }
  }
  function qc(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (K = n);
        break;
      }
      K = t.return;
    }
  }
  function Zc(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ji(4, t);
            } catch (y) {
              Fe(t, n, y);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                Fe(t, l, y);
              }
            }
            var s = t.return;
            try {
              mu(t);
            } catch (y) {
              Fe(t, s, y);
            }
            break;
          case 5:
            var f = t.return;
            try {
              mu(t);
            } catch (y) {
              Fe(t, f, y);
            }
        }
      } catch (y) {
        Fe(t, t.return, y);
      }
      if (t === e) {
        K = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        (m.return = t.return), (K = m);
        break;
      }
      K = t.return;
    }
  }
  var Dh = Math.ceil,
    eo = W.ReactCurrentDispatcher,
    yu = W.ReactCurrentOwner,
    xt = W.ReactCurrentBatchConfig,
    me = 0,
    We = null,
    Ae = null,
    Ge = 0,
    vt = 0,
    nr = rn(0),
    He = 0,
    Qr = null,
    On = 0,
    to = 0,
    Su = 0,
    Kr = null,
    st = null,
    wu = 0,
    rr = 1 / 0,
    Qt = null,
    no = !1,
    Cu = null,
    cn = null,
    ro = !1,
    fn = null,
    io = 0,
    Yr = 0,
    xu = null,
    oo = -1,
    lo = 0;
  function ot() {
    return me & 6 ? ze() : oo !== -1 ? oo : (oo = ze());
  }
  function dn(e) {
    return e.mode & 1
      ? me & 2 && Ge !== 0
        ? Ge & -Ge
        : gh.transition !== null
        ? (lo === 0 && (lo = Wa()), lo)
        : ((e = ke),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : es(e.type))),
          e)
      : 1;
  }
  function Rt(e, t, n, r) {
    if (50 < Yr) throw ((Yr = 0), (xu = null), Error(a(185)));
    yr(e, n, r),
      (!(me & 2) || e !== We) &&
        (e === We && (!(me & 2) && (to |= n), He === 4 && pn(e, Ge)),
        ct(e, r),
        n === 1 &&
          me === 0 &&
          !(t.mode & 1) &&
          ((rr = ze() + 500), Di && ln()));
  }
  function ct(e, t) {
    var n = e.callbackNode;
    gp(e, t);
    var r = mi(e, e === We ? Ge : 0);
    if (r === 0)
      n !== null && Ua(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Ua(n), t === 1))
        e.tag === 0 ? vh(ef.bind(null, e)) : js(ef.bind(null, e)),
          dh(function () {
            !(me & 6) && ln();
          }),
          (n = null);
      else {
        switch (Qa(r)) {
          case 1:
            n = tl;
            break;
          case 4:
            n = Ha;
            break;
          case 16:
            n = fi;
            break;
          case 536870912:
            n = Ba;
            break;
          default:
            n = fi;
        }
        n = sf(n, Jc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Jc(e, t) {
    if (((oo = -1), (lo = 0), me & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if (ir() && e.callbackNode !== n) return null;
    var r = mi(e, e === We ? Ge : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = uo(e, r);
    else {
      t = r;
      var l = me;
      me |= 2;
      var s = nf();
      (We !== e || Ge !== t) && ((Qt = null), (rr = ze() + 500), _n(e, t));
      do
        try {
          bh();
          break;
        } catch (m) {
          tf(e, m);
        }
      while (!0);
      Al(),
        (eo.current = s),
        (me = l),
        Ae !== null ? (t = 0) : ((We = null), (Ge = 0), (t = He));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = nl(e)), l !== 0 && ((r = l), (t = ku(e, l)))),
        t === 1)
      )
        throw ((n = Qr), _n(e, 0), pn(e, r), ct(e, ze()), n);
      if (t === 6) pn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !Fh(l) &&
            ((t = uo(e, r)),
            t === 2 && ((s = nl(e)), s !== 0 && ((r = s), (t = ku(e, s)))),
            t === 1))
        )
          throw ((n = Qr), _n(e, 0), pn(e, r), ct(e, ze()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            In(e, st, Qt);
            break;
          case 3:
            if (
              (pn(e, r),
              (r & 130023424) === r && ((t = wu + 500 - ze()), 10 < t))
            ) {
              if (mi(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                ot(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Ml(In.bind(null, e, st, Qt), t);
              break;
            }
            In(e, st, Qt);
            break;
          case 4:
            if ((pn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var f = 31 - Et(r);
              (s = 1 << f), (f = t[f]), f > l && (l = f), (r &= ~s);
            }
            if (
              ((r = l),
              (r = ze() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Dh(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Ml(In.bind(null, e, st, Qt), r);
              break;
            }
            In(e, st, Qt);
            break;
          case 5:
            In(e, st, Qt);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return ct(e, ze()), e.callbackNode === n ? Jc.bind(null, e) : null;
  }
  function ku(e, t) {
    var n = Kr;
    return (
      e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256),
      (e = uo(e, t)),
      e !== 2 && ((t = st), (st = n), t !== null && Eu(t)),
      e
    );
  }
  function Eu(e) {
    st === null ? (st = e) : st.push.apply(st, e);
  }
  function Fh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              s = l.getSnapshot;
            l = l.value;
            try {
              if (!Ot(s(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function pn(e, t) {
    for (
      t &= ~Su,
        t &= ~to,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Et(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function ef(e) {
    if (me & 6) throw Error(a(327));
    ir();
    var t = mi(e, 0);
    if (!(t & 1)) return ct(e, ze()), null;
    var n = uo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = nl(e);
      r !== 0 && ((t = r), (n = ku(e, r)));
    }
    if (n === 1) throw ((n = Qr), _n(e, 0), pn(e, t), ct(e, ze()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      In(e, st, Qt),
      ct(e, ze()),
      null
    );
  }
  function Ou(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      (me = n), me === 0 && ((rr = ze() + 500), Di && ln());
    }
  }
  function Pn(e) {
    fn !== null && fn.tag === 0 && !(me & 6) && ir();
    var t = me;
    me |= 1;
    var n = xt.transition,
      r = ke;
    try {
      if (((xt.transition = null), (ke = 1), e)) return e();
    } finally {
      (ke = r), (xt.transition = n), (me = t), !(me & 6) && ln();
    }
  }
  function Pu() {
    (vt = nr.current), Me(nr);
  }
  function _n(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), fh(n)), Ae !== null))
      for (n = Ae.return; n !== null; ) {
        var r = n;
        switch ((Fl(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Li();
            break;
          case 3:
            Jn(), Me(lt), Me(qe), Yl();
            break;
          case 5:
            Ql(r);
            break;
          case 4:
            Jn();
            break;
          case 13:
            Me(Le);
            break;
          case 19:
            Me(Le);
            break;
          case 10:
            $l(r.type._context);
            break;
          case 22:
          case 23:
            Pu();
        }
        n = n.return;
      }
    if (
      ((We = e),
      (Ae = e = hn(e.current, null)),
      (Ge = vt = t),
      (He = 0),
      (Qr = null),
      (Su = to = On = 0),
      (st = Kr = null),
      xn !== null)
    ) {
      for (t = 0; t < xn.length; t++)
        if (((n = xn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            s = n.pending;
          if (s !== null) {
            var f = s.next;
            (s.next = l), (r.next = f);
          }
          n.pending = r;
        }
      xn = null;
    }
    return e;
  }
  function tf(e, t) {
    do {
      var n = Ae;
      try {
        if ((Al(), (Bi.current = Yi), Wi)) {
          for (var r = Ne.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          Wi = !1;
        }
        if (
          ((En = 0),
          (Be = Ue = Ne = null),
          (Ar = !1),
          ($r = 0),
          (yu.current = null),
          n === null || n.return === null)
        ) {
          (He = 1), (Qr = t), (Ae = null);
          break;
        }
        e: {
          var s = e,
            f = n.return,
            m = n,
            y = t;
          if (
            ((t = Ge),
            (m.flags |= 32768),
            y !== null && typeof y == "object" && typeof y.then == "function")
          ) {
            var P = y,
              F = m,
              V = F.tag;
            if (!(F.mode & 1) && (V === 0 || V === 11 || V === 15)) {
              var D = F.alternate;
              D
                ? ((F.updateQueue = D.updateQueue),
                  (F.memoizedState = D.memoizedState),
                  (F.lanes = D.lanes))
                : ((F.updateQueue = null), (F.memoizedState = null));
            }
            var Q = Pc(f);
            if (Q !== null) {
              (Q.flags &= -257),
                _c(Q, f, m, s, t),
                Q.mode & 1 && Oc(s, P, t),
                (t = Q),
                (y = P);
              var Y = t.updateQueue;
              if (Y === null) {
                var G = new Set();
                G.add(y), (t.updateQueue = G);
              } else Y.add(y);
              break e;
            } else {
              if (!(t & 1)) {
                Oc(s, P, t), _u();
                break e;
              }
              y = Error(a(426));
            }
          } else if (Re && m.mode & 1) {
            var je = Pc(f);
            if (je !== null) {
              !(je.flags & 65536) && (je.flags |= 256),
                _c(je, f, m, s, t),
                zl(er(y, m));
              break e;
            }
          }
          (s = y = er(y, m)),
            He !== 4 && (He = 2),
            Kr === null ? (Kr = [s]) : Kr.push(s),
            (s = f);
          do {
            switch (s.tag) {
              case 3:
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var k = kc(s, y, t);
                Xs(s, k);
                break e;
              case 1:
                m = y;
                var C = s.type,
                  E = s.stateNode;
                if (
                  !(s.flags & 128) &&
                  (typeof C.getDerivedStateFromError == "function" ||
                    (E !== null &&
                      typeof E.componentDidCatch == "function" &&
                      (cn === null || !cn.has(E))))
                ) {
                  (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                  var z = Ec(s, m, t);
                  Xs(s, z);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        of(n);
      } catch (q) {
        (t = q), Ae === n && n !== null && (Ae = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nf() {
    var e = eo.current;
    return (eo.current = Yi), e === null ? Yi : e;
  }
  function _u() {
    (He === 0 || He === 3 || He === 2) && (He = 4),
      We === null || (!(On & 268435455) && !(to & 268435455)) || pn(We, Ge);
  }
  function uo(e, t) {
    var n = me;
    me |= 2;
    var r = nf();
    (We !== e || Ge !== t) && ((Qt = null), _n(e, t));
    do
      try {
        Vh();
        break;
      } catch (l) {
        tf(e, l);
      }
    while (!0);
    if ((Al(), (me = n), (eo.current = r), Ae !== null)) throw Error(a(261));
    return (We = null), (Ge = 0), He;
  }
  function Vh() {
    for (; Ae !== null; ) rf(Ae);
  }
  function bh() {
    for (; Ae !== null && !ap(); ) rf(Ae);
  }
  function rf(e) {
    var t = af(e.alternate, e, vt);
    (e.memoizedProps = e.pendingProps),
      t === null ? of(e) : (Ae = t),
      (yu.current = null);
  }
  function of(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Rh(n, t)), n !== null)) {
          (n.flags &= 32767), (Ae = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (He = 6), (Ae = null);
          return;
        }
      } else if (((n = Mh(n, t, vt)), n !== null)) {
        Ae = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function In(e, t, n) {
    var r = ke,
      l = xt.transition;
    try {
      (xt.transition = null), (ke = 1), zh(e, t, n, r);
    } finally {
      (xt.transition = l), (ke = r);
    }
    return null;
  }
  function zh(e, t, n, r) {
    do ir();
    while (fn !== null);
    if (me & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
      (yp(e, s),
      e === We && ((Ae = We = null), (Ge = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        ro ||
        ((ro = !0),
        sf(fi, function () {
          return ir(), null;
        })),
      (s = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || s)
    ) {
      (s = xt.transition), (xt.transition = null);
      var f = ke;
      ke = 1;
      var m = me;
      (me |= 4),
        (yu.current = null),
        Lh(e, n),
        Yc(n, e),
        ih(_l),
        (yi = !!Pl),
        (_l = Pl = null),
        (e.current = n),
        Nh(n),
        sp(),
        (me = m),
        (ke = f),
        (xt.transition = s);
    } else e.current = n;
    if (
      (ro && ((ro = !1), (fn = e), (io = l)),
      (s = e.pendingLanes),
      s === 0 && (cn = null),
      dp(n.stateNode),
      ct(e, ze()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (no) throw ((no = !1), (e = Cu), (Cu = null), e);
    return (
      io & 1 && e.tag !== 0 && ir(),
      (s = e.pendingLanes),
      s & 1 ? (e === xu ? Yr++ : ((Yr = 0), (xu = e))) : (Yr = 0),
      ln(),
      null
    );
  }
  function ir() {
    if (fn !== null) {
      var e = Qa(io),
        t = xt.transition,
        n = ke;
      try {
        if (((xt.transition = null), (ke = 16 > e ? 16 : e), fn === null))
          var r = !1;
        else {
          if (((e = fn), (fn = null), (io = 0), me & 6)) throw Error(a(331));
          var l = me;
          for (me |= 4, K = e.current; K !== null; ) {
            var s = K,
              f = s.child;
            if (K.flags & 16) {
              var m = s.deletions;
              if (m !== null) {
                for (var y = 0; y < m.length; y++) {
                  var P = m[y];
                  for (K = P; K !== null; ) {
                    var F = K;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wr(8, F, s);
                    }
                    var V = F.child;
                    if (V !== null) (V.return = F), (K = V);
                    else
                      for (; K !== null; ) {
                        F = K;
                        var D = F.sibling,
                          Q = F.return;
                        if ((Hc(F), F === P)) {
                          K = null;
                          break;
                        }
                        if (D !== null) {
                          (D.return = Q), (K = D);
                          break;
                        }
                        K = Q;
                      }
                  }
                }
                var Y = s.alternate;
                if (Y !== null) {
                  var G = Y.child;
                  if (G !== null) {
                    Y.child = null;
                    do {
                      var je = G.sibling;
                      (G.sibling = null), (G = je);
                    } while (G !== null);
                  }
                }
                K = s;
              }
            }
            if (s.subtreeFlags & 2064 && f !== null) (f.return = s), (K = f);
            else
              e: for (; K !== null; ) {
                if (((s = K), s.flags & 2048))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wr(9, s, s.return);
                  }
                var k = s.sibling;
                if (k !== null) {
                  (k.return = s.return), (K = k);
                  break e;
                }
                K = s.return;
              }
          }
          var C = e.current;
          for (K = C; K !== null; ) {
            f = K;
            var E = f.child;
            if (f.subtreeFlags & 2064 && E !== null) (E.return = f), (K = E);
            else
              e: for (f = C; K !== null; ) {
                if (((m = K), m.flags & 2048))
                  try {
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ji(9, m);
                    }
                  } catch (q) {
                    Fe(m, m.return, q);
                  }
                if (m === f) {
                  K = null;
                  break e;
                }
                var z = m.sibling;
                if (z !== null) {
                  (z.return = m.return), (K = z);
                  break e;
                }
                K = m.return;
              }
          }
          if (
            ((me = l),
            ln(),
            Tt && typeof Tt.onPostCommitFiberRoot == "function")
          )
            try {
              Tt.onPostCommitFiberRoot(di, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ke = n), (xt.transition = t);
      }
    }
    return !1;
  }
  function lf(e, t, n) {
    (t = er(n, t)),
      (t = kc(e, t, 1)),
      (e = an(e, t, 1)),
      (t = ot()),
      e !== null && (yr(e, 1, t), ct(e, t));
  }
  function Fe(e, t, n) {
    if (e.tag === 3) lf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          lf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (cn === null || !cn.has(r)))
          ) {
            (e = er(n, e)),
              (e = Ec(t, e, 1)),
              (t = an(t, e, 1)),
              (e = ot()),
              t !== null && (yr(t, 1, e), ct(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function jh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = ot()),
      (e.pingedLanes |= e.suspendedLanes & n),
      We === e &&
        (Ge & n) === n &&
        (He === 4 || (He === 3 && (Ge & 130023424) === Ge && 500 > ze() - wu)
          ? _n(e, 0)
          : (Su |= n)),
      ct(e, t);
  }
  function uf(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = hi), (hi <<= 1), !(hi & 130023424) && (hi = 4194304))
        : (t = 1));
    var n = ot();
    (e = Ht(e, t)), e !== null && (yr(e, t, n), ct(e, n));
  }
  function Ah(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), uf(e, n);
  }
  function $h(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), uf(e, n);
  }
  var af;
  af = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || lt.current) at = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (at = !1), Ih(e, t, n);
        at = !!(e.flags & 131072);
      }
    else (at = !1), Re && t.flags & 1048576 && As(t, Vi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        qi(e, t), (e = t.pendingProps);
        var l = Qn(t, qe.current);
        Zn(t, n), (l = ql(null, t, r, e, l, n));
        var s = Zl();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ut(r) ? ((s = !0), Ni(t)) : (s = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Bl(t),
              (l.updater = Gi),
              (t.stateNode = l),
              (l._reactInternals = t),
              iu(t, r, e, n),
              (t = au(null, t, r, !0, s, n)))
            : ((t.tag = 0), Re && s && Dl(t), it(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (qi(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Hh(r)),
            (e = _t(r, e)),
            l)
          ) {
            case 0:
              t = uu(null, t, r, e, n);
              break e;
            case 1:
              t = Nc(null, t, r, e, n);
              break e;
            case 11:
              t = Ic(null, t, r, e, n);
              break e;
            case 14:
              t = Mc(null, t, r, _t(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          uu(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          Nc(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Dc(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (s = t.memoizedState),
            (l = s.element),
            Gs(e, t),
            Ui(t, r, null, n);
          var f = t.memoizedState;
          if (((r = f.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: f.cache,
                pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
                transitions: f.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              (l = er(Error(a(423)), t)), (t = Fc(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = er(Error(a(424)), t)), (t = Fc(e, t, r, n, l));
              break e;
            } else
              for (
                mt = nn(t.stateNode.containerInfo.firstChild),
                  ht = t,
                  Re = !0,
                  Pt = null,
                  n = Ks(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Gn(), r === l)) {
              t = Wt(e, t, n);
              break e;
            }
            it(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Zs(t),
          e === null && bl(t),
          (r = t.type),
          (l = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (f = l.children),
          Il(r, l) ? (f = null) : s !== null && Il(r, s) && (t.flags |= 32),
          Lc(e, t),
          it(e, t, f, n),
          t.child
        );
      case 6:
        return e === null && bl(t), null;
      case 13:
        return Vc(e, t, n);
      case 4:
        return (
          Wl(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Xn(t, null, r, n)) : it(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          Ic(e, t, r, l, n)
        );
      case 7:
        return it(e, t, t.pendingProps, n), t.child;
      case 8:
        return it(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return it(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (s = t.memoizedProps),
            (f = l.value),
            _e(ji, r._currentValue),
            (r._currentValue = f),
            s !== null)
          )
            if (Ot(s.value, f)) {
              if (s.children === l.children && !lt.current) {
                t = Wt(e, t, n);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var m = s.dependencies;
                if (m !== null) {
                  f = s.child;
                  for (var y = m.firstContext; y !== null; ) {
                    if (y.context === r) {
                      if (s.tag === 1) {
                        (y = Bt(-1, n & -n)), (y.tag = 2);
                        var P = s.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var F = P.pending;
                          F === null
                            ? (y.next = y)
                            : ((y.next = F.next), (F.next = y)),
                            (P.pending = y);
                        }
                      }
                      (s.lanes |= n),
                        (y = s.alternate),
                        y !== null && (y.lanes |= n),
                        Ul(s.return, n, t),
                        (m.lanes |= n);
                      break;
                    }
                    y = y.next;
                  }
                } else if (s.tag === 10) f = s.type === t.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((f = s.return), f === null)) throw Error(a(341));
                  (f.lanes |= n),
                    (m = f.alternate),
                    m !== null && (m.lanes |= n),
                    Ul(f, n, t),
                    (f = s.sibling);
                } else f = s.child;
                if (f !== null) f.return = s;
                else
                  for (f = s; f !== null; ) {
                    if (f === t) {
                      f = null;
                      break;
                    }
                    if (((s = f.sibling), s !== null)) {
                      (s.return = f.return), (f = s);
                      break;
                    }
                    f = f.return;
                  }
                s = f;
              }
          it(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Zn(t, n),
          (l = wt(l)),
          (r = r(l)),
          (t.flags |= 1),
          it(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = _t(r, t.pendingProps)),
          (l = _t(r.type, l)),
          Mc(e, t, r, l, n)
        );
      case 15:
        return Rc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : _t(r, l)),
          qi(e, t),
          (t.tag = 1),
          ut(r) ? ((e = !0), Ni(t)) : (e = !1),
          Zn(t, n),
          Cc(t, r, l),
          iu(t, r, l, n),
          au(null, t, r, !0, e, n)
        );
      case 19:
        return zc(e, t, n);
      case 22:
        return Tc(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function sf(e, t) {
    return $a(e, t);
  }
  function Uh(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function kt(e, t, n, r) {
    return new Uh(e, t, n, r);
  }
  function Iu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Hh(e) {
    if (typeof e == "function") return Iu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Ee)) return 11;
      if (e === Ce) return 14;
    }
    return 2;
  }
  function hn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = kt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function ao(e, t, n, r, l, s) {
    var f = 2;
    if (((r = e), typeof e == "function")) Iu(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else
      e: switch (e) {
        case $:
          return Mn(n.children, l, s, t);
        case J:
          (f = 8), (l |= 8);
          break;
        case ge:
          return (
            (e = kt(12, n, t, l | 2)), (e.elementType = ge), (e.lanes = s), e
          );
        case Te:
          return (e = kt(13, n, t, l)), (e.elementType = Te), (e.lanes = s), e;
        case be:
          return (e = kt(19, n, t, l)), (e.elementType = be), (e.lanes = s), e;
        case he:
          return so(n, l, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Pe:
                f = 10;
                break e;
              case De:
                f = 9;
                break e;
              case Ee:
                f = 11;
                break e;
              case Ce:
                f = 14;
                break e;
              case pe:
                (f = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = kt(f, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = s), t
    );
  }
  function Mn(e, t, n, r) {
    return (e = kt(7, e, r, t)), (e.lanes = n), e;
  }
  function so(e, t, n, r) {
    return (
      (e = kt(22, e, r, t)),
      (e.elementType = he),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Mu(e, t, n) {
    return (e = kt(6, e, null, t)), (e.lanes = n), e;
  }
  function Ru(e, t, n) {
    return (
      (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Bh(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = rl(0)),
      (this.expirationTimes = rl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = rl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Tu(e, t, n, r, l, s, f, m, y) {
    return (
      (e = new Bh(e, t, n, m, y)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = kt(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Bl(s),
      e
    );
  }
  function Wh(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function cf(e) {
    if (!e) return on;
    e = e._reactInternals;
    e: {
      if (gn(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ut(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ut(n)) return bs(e, n, t);
    }
    return t;
  }
  function ff(e, t, n, r, l, s, f, m, y) {
    return (
      (e = Tu(n, r, !0, e, l, s, f, m, y)),
      (e.context = cf(null)),
      (n = e.current),
      (r = ot()),
      (l = dn(n)),
      (s = Bt(r, l)),
      (s.callback = t ?? null),
      an(n, s, l),
      (e.current.lanes = l),
      yr(e, l, r),
      ct(e, r),
      e
    );
  }
  function co(e, t, n, r) {
    var l = t.current,
      s = ot(),
      f = dn(l);
    return (
      (n = cf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Bt(s, f)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = an(l, t, f)),
      e !== null && (Rt(e, l, f, s), $i(e, l, f)),
      f
    );
  }
  function fo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function df(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Lu(e, t) {
    df(e, t), (e = e.alternate) && df(e, t);
  }
  var pf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Nu(e) {
    this._internalRoot = e;
  }
  (po.prototype.render = Nu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      co(e, t, null, null);
    }),
    (po.prototype.unmount = Nu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Pn(function () {
            co(null, e, null, null);
          }),
            (t[jt] = null);
        }
      });
  function po(e) {
    this._internalRoot = e;
  }
  po.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ga();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++);
      Jt.splice(n, 0, e), n === 0 && Za(e);
    }
  };
  function Du(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ho(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function hf() {}
  function Qh(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var P = fo(f);
          s.call(P);
        };
      }
      var f = ff(t, r, e, 0, null, !1, !1, "", hf);
      return (
        (e._reactRootContainer = f),
        (e[jt] = f.current),
        Lr(e.nodeType === 8 ? e.parentNode : e),
        Pn(),
        f
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var m = r;
      r = function () {
        var P = fo(y);
        m.call(P);
      };
    }
    var y = Tu(e, 0, !1, null, null, !1, !1, "", hf);
    return (
      (e._reactRootContainer = y),
      (e[jt] = y.current),
      Lr(e.nodeType === 8 ? e.parentNode : e),
      Pn(function () {
        co(t, y, n, r);
      }),
      y
    );
  }
  function mo(e, t, n, r, l) {
    var s = n._reactRootContainer;
    if (s) {
      var f = s;
      if (typeof l == "function") {
        var m = l;
        l = function () {
          var y = fo(f);
          m.call(y);
        };
      }
      co(t, f, e, l);
    } else f = Qh(n, t, e, l, r);
    return fo(f);
  }
  (Ka = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = gr(t.pendingLanes);
          n !== 0 &&
            (il(t, n | 1), ct(t, ze()), !(me & 6) && ((rr = ze() + 500), ln()));
        }
        break;
      case 13:
        Pn(function () {
          var r = Ht(e, 1);
          if (r !== null) {
            var l = ot();
            Rt(r, e, 1, l);
          }
        }),
          Lu(e, 1);
    }
  }),
    (ol = function (e) {
      if (e.tag === 13) {
        var t = Ht(e, 134217728);
        if (t !== null) {
          var n = ot();
          Rt(t, e, 134217728, n);
        }
        Lu(e, 134217728);
      }
    }),
    (Ya = function (e) {
      if (e.tag === 13) {
        var t = dn(e),
          n = Ht(e, t);
        if (n !== null) {
          var r = ot();
          Rt(n, e, t, r);
        }
        Lu(e, t);
      }
    }),
    (Ga = function () {
      return ke;
    }),
    (Xa = function (e, t) {
      var n = ke;
      try {
        return (ke = e), t();
      } finally {
        ke = n;
      }
    }),
    (qo = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ho(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Ti(r);
                if (!l) throw Error(a(90));
                cr(r), Ho(r, l);
              }
            }
          }
          break;
        case "textarea":
          Oa(e, n);
          break;
        case "select":
          (t = n.value), t != null && Dn(e, !!n.multiple, t, !1);
      }
    }),
    (Da = Ou),
    (Fa = Pn);
  var Kh = { usingClientEntryPoint: !1, Events: [Fr, Bn, Ti, La, Na, Ou] },
    Gr = {
      findFiberByHostInstance: yn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Yh = {
      bundleType: Gr.bundleType,
      version: Gr.version,
      rendererPackageName: Gr.rendererPackageName,
      rendererConfig: Gr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: W.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ja(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Gr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vo.isDisabled && vo.supportsFiber)
      try {
        (di = vo.inject(Yh)), (Tt = vo);
      } catch {}
  }
  return (
    (ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kh),
    (ft.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Du(t)) throw Error(a(200));
      return Wh(e, t, null, n);
    }),
    (ft.createRoot = function (e, t) {
      if (!Du(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = pf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Tu(e, 1, !1, null, null, n, !1, r, l)),
        (e[jt] = t.current),
        Lr(e.nodeType === 8 ? e.parentNode : e),
        new Nu(t)
      );
    }),
    (ft.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = ja(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (ft.flushSync = function (e) {
      return Pn(e);
    }),
    (ft.hydrate = function (e, t, n) {
      if (!ho(t)) throw Error(a(200));
      return mo(null, e, t, !0, n);
    }),
    (ft.hydrateRoot = function (e, t, n) {
      if (!Du(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        s = "",
        f = pf;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (f = n.onRecoverableError)),
        (t = ff(t, null, e, 1, n ?? null, l, !1, s, f)),
        (e[jt] = t.current),
        Lr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new po(t);
    }),
    (ft.render = function (e, t, n) {
      if (!ho(t)) throw Error(a(200));
      return mo(null, e, t, !1, n);
    }),
    (ft.unmountComponentAtNode = function (e) {
      if (!ho(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (Pn(function () {
            mo(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[jt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (ft.unstable_batchedUpdates = Ou),
    (ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!ho(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return mo(e, t, n, !1, r);
    }),
    (ft.version = "18.3.1-next-f1338f8080-20240426"),
    ft
  );
}
var kf;
function od() {
  if (kf) return bu.exports;
  kf = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), (bu.exports = im()), bu.exports;
}
var Ef;
function om() {
  if (Ef) return go;
  Ef = 1;
  var o = od();
  return (go.createRoot = o.createRoot), (go.hydrateRoot = o.hydrateRoot), go;
}
var lm = om();
const um = () =>
    X.jsx(X.Fragment, {
      children: X.jsxs("div", {
        className: "sidebar",
        children: [
          X.jsx("div", {
            className: "sidebar__logo",
            children: X.jsx("a", {
              href: "/",
              children: X.jsx("img", {
                src: "src/assets/logo/logo.png",
                alt: "Logo Image",
              }),
            }),
          }),
          X.jsx("div", {
            className: "sidebar__title",
            children: X.jsx("a", {
              href: "/",
              children: X.jsx("h2", { children: "Sobriété énergetique" }),
            }),
          }),
        ],
      }),
    }),
  am = ({
    name: o,
    update: i,
    temperature: a,
    humidity: c,
    co2: u,
    presence: d,
    status: h,
  }) => {
    const g = (p, v) => {
      let S = 0,
        w = "#000000",
        I = X.jsx("div", {
          className: "end",
          style: { color: w },
          children: v,
        });
      switch (p) {
        case "update":
          I = X.jsx("i", { children: v });
          break;
        case "temperature":
          (S = Number(v)),
            S < 16
              ? (w = "#2d67e3")
              : S < 21
              ? (w = "#32eb21")
              : S < 27
              ? (w = "#eb7221")
              : (w = "#eb2121"),
            (I = X.jsxs("div", {
              className: "end",
              style: { color: w },
              children: [v, " °C"],
            }));
          break;
        case "humidity":
          S < 20
            ? (w = "#2d67e3")
            : S < 50
            ? (w = "#32eb21")
            : S < 70
            ? (w = "#eb7221")
            : (w = "#eb2121"),
            (I = X.jsxs("div", {
              className: "end",
              style: { color: w },
              children: [v, " %"],
            }));
          break;
        case "co2":
          S < 100
            ? (w = "#2d67e3")
            : S < 850
            ? (w = "#32eb21")
            : S < 1450
            ? (w = "#eb7221")
            : (w = "#eb2121"),
            (I = X.jsxs("div", {
              className: "end",
              style: { color: w },
              children: [v, " ppm"],
            }));
          break;
        case "presence":
          v === !1
            ? ((w = "#eb2121"),
              (I = X.jsx("div", {
                className: "end",
                style: { color: w },
                children: "Non",
              })))
            : ((w = "#32eb21"),
              (I = X.jsx("div", {
                className: "end",
                style: { color: w },
                children: "Oui",
              })));
          break;
      }
      return I;
    };
    return X.jsx(X.Fragment, {
      children: X.jsxs("div", {
        className: `room-status room-status--${h}`,
        children: [
          X.jsxs("h3", {
            className: "room-status__title",
            children: [
              X.jsx("span", { children: o }),
              X.jsx("div", { className: `room-status__title--${h}` }),
            ],
          }),
          X.jsxs("p", {
            className: "room-status__info update",
            children: [
              "Mise à jour : ",
              i || X.jsx("div", { className: "end", children: "-" }),
            ],
          }),
          X.jsxs("p", {
            className: "room-status__info",
            children: [
              "Température :",
              " ",
              a
                ? g("temperature", a)
                : X.jsx("div", { className: "end", children: "-" }),
            ],
          }),
          X.jsxs("p", {
            className: "room-status__info",
            children: [
              "Humidité :",
              " ",
              c
                ? g("humidity", c)
                : X.jsx("div", { className: "end", children: "-" }),
            ],
          }),
          X.jsxs("p", {
            className: "room-status__info",
            children: [
              "CO2 : ",
              u
                ? g("co2", u)
                : X.jsx("div", { className: "end", children: "-" }),
            ],
          }),
          X.jsxs("p", {
            className: "room-status__info",
            children: ["Présence d'usager : ", g("presence", d)],
          }),
          h === "operational"
            ? X.jsx("button", {
                className: "room-status__button",
                children: "Signaler anomalie",
              })
            : X.jsx("button", {
                className: "room-status__button",
                children: "En savoir plus",
              }),
        ],
      }),
    });
  },
  Of = ({ title: o, rooms: i }) =>
    X.jsx(X.Fragment, {
      children: X.jsxs("div", {
        className: "roomList",
        children: [
          X.jsxs("h2", {
            className: "roomList__title",
            children: [
              o,
              " ",
              X.jsxs("span", {
                className: "nb_salles",
                children: ["/ ", i.length, " salle(s)"],
              }),
            ],
          }),
          X.jsx("div", {
            className: "roomList__container",
            children: i.map((a) => X.jsx(am, { ...a }, a.id)),
          }),
        ],
      }),
    });
var sm = Symbol.for("preact-signals");
function sa() {
  if (lr > 1) lr--;
  else {
    for (var o, i = !1; ei !== void 0; ) {
      var a = ei;
      for (ei = void 0, Ju++; a !== void 0; ) {
        var c = a.o;
        if (((a.o = void 0), (a.f &= -3), !(8 & a.f) && ud(a)))
          try {
            a.c();
          } catch (u) {
            i || ((o = u), (i = !0));
          }
        a = c;
      }
    }
    if (((Ju = 0), lr--, i)) throw o;
  }
}
var Oe = void 0,
  ei = void 0,
  lr = 0,
  Ju = 0,
  Io = 0;
function ld(o) {
  if (Oe !== void 0) {
    var i = o.n;
    if (i === void 0 || i.t !== Oe)
      return (
        (i = {
          i: 0,
          S: o,
          p: Oe.s,
          n: void 0,
          t: Oe,
          e: void 0,
          x: void 0,
          r: i,
        }),
        Oe.s !== void 0 && (Oe.s.n = i),
        (Oe.s = i),
        (o.n = i),
        32 & Oe.f && o.S(i),
        i
      );
    if (i.i === -1)
      return (
        (i.i = 0),
        i.n !== void 0 &&
          ((i.n.p = i.p),
          i.p !== void 0 && (i.p.n = i.n),
          (i.p = Oe.s),
          (i.n = void 0),
          (Oe.s.n = i),
          (Oe.s = i)),
        i
      );
  }
}
function nt(o) {
  (this.v = o), (this.i = 0), (this.n = void 0), (this.t = void 0);
}
nt.prototype.brand = sm;
nt.prototype.h = function () {
  return !0;
};
nt.prototype.S = function (o) {
  this.t !== o &&
    o.e === void 0 &&
    ((o.x = this.t), this.t !== void 0 && (this.t.e = o), (this.t = o));
};
nt.prototype.U = function (o) {
  if (this.t !== void 0) {
    var i = o.e,
      a = o.x;
    i !== void 0 && ((i.x = a), (o.e = void 0)),
      a !== void 0 && ((a.e = i), (o.x = void 0)),
      o === this.t && (this.t = a);
  }
};
nt.prototype.subscribe = function (o) {
  var i = this;
  return fd(function () {
    var a = i.value,
      c = Oe;
    Oe = void 0;
    try {
      o(a);
    } finally {
      Oe = c;
    }
  });
};
nt.prototype.valueOf = function () {
  return this.value;
};
nt.prototype.toString = function () {
  return this.value + "";
};
nt.prototype.toJSON = function () {
  return this.value;
};
nt.prototype.peek = function () {
  var o = Oe;
  Oe = void 0;
  try {
    return this.value;
  } finally {
    Oe = o;
  }
};
Object.defineProperty(nt.prototype, "value", {
  get: function () {
    var o = ld(this);
    return o !== void 0 && (o.i = this.i), this.v;
  },
  set: function (o) {
    if (o !== this.v) {
      if (Ju > 100) throw new Error("Cycle detected");
      (this.v = o), this.i++, Io++, lr++;
      try {
        for (var i = this.t; i !== void 0; i = i.x) i.t.N();
      } finally {
        sa();
      }
    }
  },
});
function cm(o) {
  return new nt(o);
}
function ud(o) {
  for (var i = o.s; i !== void 0; i = i.n)
    if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !0;
  return !1;
}
function ad(o) {
  for (var i = o.s; i !== void 0; i = i.n) {
    var a = i.S.n;
    if ((a !== void 0 && (i.r = a), (i.S.n = i), (i.i = -1), i.n === void 0)) {
      o.s = i;
      break;
    }
  }
}
function sd(o) {
  for (var i = o.s, a = void 0; i !== void 0; ) {
    var c = i.p;
    i.i === -1
      ? (i.S.U(i), c !== void 0 && (c.n = i.n), i.n !== void 0 && (i.n.p = c))
      : (a = i),
      (i.S.n = i.r),
      i.r !== void 0 && (i.r = void 0),
      (i = c);
  }
  o.s = a;
}
function ii(o) {
  nt.call(this, void 0),
    (this.x = o),
    (this.s = void 0),
    (this.g = Io - 1),
    (this.f = 4);
}
(ii.prototype = new nt()).h = function () {
  if (((this.f &= -3), 1 & this.f)) return !1;
  if ((36 & this.f) == 32 || ((this.f &= -5), this.g === Io)) return !0;
  if (((this.g = Io), (this.f |= 1), this.i > 0 && !ud(this)))
    return (this.f &= -2), !0;
  var o = Oe;
  try {
    ad(this), (Oe = this);
    var i = this.x();
    (16 & this.f || this.v !== i || this.i === 0) &&
      ((this.v = i), (this.f &= -17), this.i++);
  } catch (a) {
    (this.v = a), (this.f |= 16), this.i++;
  }
  return (Oe = o), sd(this), (this.f &= -2), !0;
};
ii.prototype.S = function (o) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var i = this.s; i !== void 0; i = i.n) i.S.S(i);
  }
  nt.prototype.S.call(this, o);
};
ii.prototype.U = function (o) {
  if (this.t !== void 0 && (nt.prototype.U.call(this, o), this.t === void 0)) {
    this.f &= -33;
    for (var i = this.s; i !== void 0; i = i.n) i.S.U(i);
  }
};
ii.prototype.N = function () {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var o = this.t; o !== void 0; o = o.x) o.t.N();
  }
};
Object.defineProperty(ii.prototype, "value", {
  get: function () {
    if (1 & this.f) throw new Error("Cycle detected");
    var o = ld(this);
    if ((this.h(), o !== void 0 && (o.i = this.i), 16 & this.f)) throw this.v;
    return this.v;
  },
});
function cd(o) {
  var i = o.u;
  if (((o.u = void 0), typeof i == "function")) {
    lr++;
    var a = Oe;
    Oe = void 0;
    try {
      i();
    } catch (c) {
      throw ((o.f &= -2), (o.f |= 8), ca(o), c);
    } finally {
      (Oe = a), sa();
    }
  }
}
function ca(o) {
  for (var i = o.s; i !== void 0; i = i.n) i.S.U(i);
  (o.x = void 0), (o.s = void 0), cd(o);
}
function fm(o) {
  if (Oe !== this) throw new Error("Out-of-order effect");
  sd(this), (Oe = o), (this.f &= -2), 8 & this.f && ca(this), sa();
}
function oi(o) {
  (this.x = o),
    (this.u = void 0),
    (this.s = void 0),
    (this.o = void 0),
    (this.f = 32);
}
oi.prototype.c = function () {
  var o = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    o();
  }
};
oi.prototype.S = function () {
  if (1 & this.f) throw new Error("Cycle detected");
  (this.f |= 1), (this.f &= -9), cd(this), ad(this), lr++;
  var o = Oe;
  return (Oe = this), fm.bind(this, o);
};
oi.prototype.N = function () {
  2 & this.f || ((this.f |= 2), (this.o = ei), (ei = this));
};
oi.prototype.d = function () {
  (this.f |= 8), 1 & this.f || ca(this);
};
function fd(o) {
  var i = new oi(o);
  try {
    i.c();
  } catch (a) {
    throw (i.d(), a);
  }
  return i.d.bind(i);
}
var Au = { exports: {} },
  $u = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pf;
function dm() {
  if (Pf) return $u;
  Pf = 1;
  var o = bo();
  function i(w, I) {
    return (w === I && (w !== 0 || 1 / w === 1 / I)) || (w !== w && I !== I);
  }
  var a = typeof Object.is == "function" ? Object.is : i,
    c = o.useState,
    u = o.useEffect,
    d = o.useLayoutEffect,
    h = o.useDebugValue;
  function g(w, I) {
    var M = I(),
      L = c({ inst: { value: M, getSnapshot: I } }),
      _ = L[0].inst,
      O = L[1];
    return (
      d(
        function () {
          (_.value = M), (_.getSnapshot = I), p(_) && O({ inst: _ });
        },
        [w, M, I]
      ),
      u(
        function () {
          return (
            p(_) && O({ inst: _ }),
            w(function () {
              p(_) && O({ inst: _ });
            })
          );
        },
        [w]
      ),
      h(M),
      M
    );
  }
  function p(w) {
    var I = w.getSnapshot;
    w = w.value;
    try {
      var M = I();
      return !a(w, M);
    } catch {
      return !0;
    }
  }
  function v(w, I) {
    return I();
  }
  var S =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? v
      : g;
  return (
    ($u.useSyncExternalStore =
      o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : S),
    $u
  );
}
var _f;
function pm() {
  return _f || ((_f = 1), (Au.exports = dm())), Au.exports;
}
var hm = pm(),
  mm = b.version.split(".").map(Number),
  vm = Symbol.for(mm[0] >= 19 ? "react.transitional.element" : "react.element"),
  Rn,
  gm = Symbol.dispose || Symbol.for("Symbol.dispose");
function Uu(o, i) {
  var a = i.effect.S();
  return (Rn = i), ym.bind(i, o, a);
}
function ym(o, i) {
  i(), (Rn = o);
}
var ea,
  Sm = Promise.prototype.then.bind(Promise.resolve());
function wm() {
  ea || (ea = Sm(Cm));
}
function Cm() {
  var o;
  (ea = void 0), (o = Rn) == null || o.f();
}
function dd(o) {
  wm();
  var i = b.useRef();
  i.current == null &&
    (i.current = (function (c) {
      var u,
        d,
        h,
        g,
        p = 0,
        v = fd(function () {
          d = this;
        });
      return (
        (d.c = function () {
          (p = (p + 1) | 0), g && g();
        }),
        ((u = {
          o: c,
          effect: d,
          subscribe: function (S) {
            return (
              (g = S),
              function () {
                (p = (p + 1) | 0), (g = void 0), v();
              }
            );
          },
          getSnapshot: function () {
            return p;
          },
          S: function () {
            if (Rn != null) {
              var S = Rn.o,
                w = this.o;
              (S == 0 && w == 0) || (S == 0 && w == 1)
                ? (Rn.f(), (h = Uu(void 0, this)))
                : (S == 1 && w == 0) ||
                  (S == 2 && w == 0) ||
                  (h = Uu(Rn, this));
            } else h = Uu(void 0, this);
          },
          f: function () {
            var S = h;
            (h = void 0), S == null || S();
          },
        })[gm] = function () {
          this.f();
        }),
        u
      );
    })(o));
  var a = i.current;
  return (
    hm.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot), a.S(), a
  );
}
Object.defineProperties(nt.prototype, {
  $$typeof: { configurable: !0, value: vm },
  type: {
    configurable: !0,
    value: function (o) {
      var i = o.data,
        a = dd(1);
      try {
        return i.value;
      } finally {
        a.f();
      }
    },
  },
  props: {
    configurable: !0,
    get: function () {
      return { data: this };
    },
  },
  ref: { configurable: !0, value: null },
});
function xm(o) {
  return dd(o);
}
const km = {
    search: "",
    building: [{ value: "Tous", label: "Tous les bâtiments" }],
    floor: [{ value: "Tous", label: "Tous les étages" }],
    presence: "Tous",
  },
  Ke = cm(km),
  yo = (o) => {
    Ke.value = { ...Ke.value, ...o };
  };
function Tn(o) {
  "@babel/helpers - typeof";
  return (
    (Tn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (i) {
            return typeof i;
          }
        : function (i) {
            return i &&
              typeof Symbol == "function" &&
              i.constructor === Symbol &&
              i !== Symbol.prototype
              ? "symbol"
              : typeof i;
          }),
    Tn(o)
  );
}
function Em(o, i) {
  if (Tn(o) != "object" || !o) return o;
  var a = o[Symbol.toPrimitive];
  if (a !== void 0) {
    var c = a.call(o, i || "default");
    if (Tn(c) != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(o);
}
function pd(o) {
  var i = Em(o, "string");
  return Tn(i) == "symbol" ? i : i + "";
}
function Jr(o, i, a) {
  return (
    (i = pd(i)) in o
      ? Object.defineProperty(o, i, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (o[i] = a),
    o
  );
}
function If(o, i) {
  var a = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(o);
    i &&
      (c = c.filter(function (u) {
        return Object.getOwnPropertyDescriptor(o, u).enumerable;
      })),
      a.push.apply(a, c);
  }
  return a;
}
function ie(o) {
  for (var i = 1; i < arguments.length; i++) {
    var a = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? If(Object(a), !0).forEach(function (c) {
          Jr(o, c, a[c]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
      : If(Object(a)).forEach(function (c) {
          Object.defineProperty(o, c, Object.getOwnPropertyDescriptor(a, c));
        });
  }
  return o;
}
function Om(o) {
  if (Array.isArray(o)) return o;
}
function Pm(o, i) {
  var a =
    o == null
      ? null
      : (typeof Symbol < "u" && o[Symbol.iterator]) || o["@@iterator"];
  if (a != null) {
    var c,
      u,
      d,
      h,
      g = [],
      p = !0,
      v = !1;
    try {
      if (((d = (a = a.call(o)).next), i === 0)) {
        if (Object(a) !== a) return;
        p = !1;
      } else
        for (
          ;
          !(p = (c = d.call(a)).done) && (g.push(c.value), g.length !== i);
          p = !0
        );
    } catch (S) {
      (v = !0), (u = S);
    } finally {
      try {
        if (!p && a.return != null && ((h = a.return()), Object(h) !== h))
          return;
      } finally {
        if (v) throw u;
      }
    }
    return g;
  }
}
function ta(o, i) {
  (i == null || i > o.length) && (i = o.length);
  for (var a = 0, c = Array(i); a < i; a++) c[a] = o[a];
  return c;
}
function hd(o, i) {
  if (o) {
    if (typeof o == "string") return ta(o, i);
    var a = {}.toString.call(o).slice(8, -1);
    return (
      a === "Object" && o.constructor && (a = o.constructor.name),
      a === "Map" || a === "Set"
        ? Array.from(o)
        : a === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
        ? ta(o, i)
        : void 0
    );
  }
}
function _m() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kt(o, i) {
  return Om(o) || Pm(o, i) || hd(o, i) || _m();
}
function Im(o, i) {
  if (o == null) return {};
  var a = {};
  for (var c in o)
    if ({}.hasOwnProperty.call(o, c)) {
      if (i.includes(c)) continue;
      a[c] = o[c];
    }
  return a;
}
function Gt(o, i) {
  if (o == null) return {};
  var a,
    c,
    u = Im(o, i);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(o);
    for (c = 0; c < d.length; c++)
      (a = d[c]),
        i.includes(a) || ({}.propertyIsEnumerable.call(o, a) && (u[a] = o[a]));
  }
  return u;
}
var Mm = [
  "defaultInputValue",
  "defaultMenuIsOpen",
  "defaultValue",
  "inputValue",
  "menuIsOpen",
  "onChange",
  "onInputChange",
  "onMenuClose",
  "onMenuOpen",
  "value",
];
function Rm(o) {
  var i = o.defaultInputValue,
    a = i === void 0 ? "" : i,
    c = o.defaultMenuIsOpen,
    u = c === void 0 ? !1 : c,
    d = o.defaultValue,
    h = d === void 0 ? null : d,
    g = o.inputValue,
    p = o.menuIsOpen,
    v = o.onChange,
    S = o.onInputChange,
    w = o.onMenuClose,
    I = o.onMenuOpen,
    M = o.value,
    L = Gt(o, Mm),
    _ = b.useState(g !== void 0 ? g : a),
    O = Kt(_, 2),
    N = O[0],
    U = O[1],
    j = b.useState(p !== void 0 ? p : u),
    W = Kt(j, 2),
    R = W[0],
    B = W[1],
    $ = b.useState(M !== void 0 ? M : h),
    J = Kt($, 2),
    ge = J[0],
    Pe = J[1],
    De = b.useCallback(
      function (A, Z) {
        typeof v == "function" && v(A, Z), Pe(A);
      },
      [v]
    ),
    Ee = b.useCallback(
      function (A, Z) {
        var H;
        typeof S == "function" && (H = S(A, Z)), U(H !== void 0 ? H : A);
      },
      [S]
    ),
    Te = b.useCallback(
      function () {
        typeof I == "function" && I(), B(!0);
      },
      [I]
    ),
    be = b.useCallback(
      function () {
        typeof w == "function" && w(), B(!1);
      },
      [w]
    ),
    Ce = g !== void 0 ? g : N,
    pe = p !== void 0 ? p : R,
    he = M !== void 0 ? M : ge;
  return ie(
    ie({}, L),
    {},
    {
      inputValue: Ce,
      menuIsOpen: pe,
      onChange: De,
      onInputChange: Ee,
      onMenuClose: be,
      onMenuOpen: Te,
      value: he,
    }
  );
}
function oe() {
  return (
    (oe = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var i = 1; i < arguments.length; i++) {
            var a = arguments[i];
            for (var c in a) ({}).hasOwnProperty.call(a, c) && (o[c] = a[c]);
          }
          return o;
        }),
    oe.apply(null, arguments)
  );
}
function Tm(o, i) {
  if (!(o instanceof i))
    throw new TypeError("Cannot call a class as a function");
}
function Mf(o, i) {
  for (var a = 0; a < i.length; a++) {
    var c = i[a];
    (c.enumerable = c.enumerable || !1),
      (c.configurable = !0),
      "value" in c && (c.writable = !0),
      Object.defineProperty(o, pd(c.key), c);
  }
}
function Lm(o, i, a) {
  return (
    Mf(o.prototype, i),
    Mf(o, a),
    Object.defineProperty(o, "prototype", { writable: !1 }),
    o
  );
}
function na(o, i) {
  return (
    (na = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (a, c) {
          return (a.__proto__ = c), a;
        }),
    na(o, i)
  );
}
function Nm(o, i) {
  if (typeof i != "function" && i !== null)
    throw new TypeError("Super expression must either be null or a function");
  (o.prototype = Object.create(i && i.prototype, {
    constructor: { value: o, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(o, "prototype", { writable: !1 }),
    i && na(o, i);
}
function Mo(o) {
  return (
    (Mo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (i) {
          return i.__proto__ || Object.getPrototypeOf(i);
        }),
    Mo(o)
  );
}
function md() {
  try {
    var o = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (md = function () {
    return !!o;
  })();
}
function Dm(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return o;
}
function Fm(o, i) {
  if (i && (Tn(i) == "object" || typeof i == "function")) return i;
  if (i !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Dm(o);
}
function Vm(o) {
  var i = md();
  return function () {
    var a,
      c = Mo(o);
    if (i) {
      var u = Mo(this).constructor;
      a = Reflect.construct(c, arguments, u);
    } else a = c.apply(this, arguments);
    return Fm(this, a);
  };
}
function bm(o) {
  if (Array.isArray(o)) return ta(o);
}
function zm(o) {
  if (
    (typeof Symbol < "u" && o[Symbol.iterator] != null) ||
    o["@@iterator"] != null
  )
    return Array.from(o);
}
function jm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fa(o) {
  return bm(o) || zm(o) || hd(o) || jm();
}
function Am(o) {
  if (o.sheet) return o.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === o) return document.styleSheets[i];
}
function $m(o) {
  var i = document.createElement("style");
  return (
    i.setAttribute("data-emotion", o.key),
    o.nonce !== void 0 && i.setAttribute("nonce", o.nonce),
    i.appendChild(document.createTextNode("")),
    i.setAttribute("data-s", ""),
    i
  );
}
var Um = (function () {
    function o(a) {
      var c = this;
      (this._insertTag = function (u) {
        var d;
        c.tags.length === 0
          ? c.insertionPoint
            ? (d = c.insertionPoint.nextSibling)
            : c.prepend
            ? (d = c.container.firstChild)
            : (d = c.before)
          : (d = c.tags[c.tags.length - 1].nextSibling),
          c.container.insertBefore(u, d),
          c.tags.push(u);
      }),
        (this.isSpeedy = a.speedy === void 0 ? !0 : a.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = a.nonce),
        (this.key = a.key),
        (this.container = a.container),
        (this.prepend = a.prepend),
        (this.insertionPoint = a.insertionPoint),
        (this.before = null);
    }
    var i = o.prototype;
    return (
      (i.hydrate = function (c) {
        c.forEach(this._insertTag);
      }),
      (i.insert = function (c) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag($m(this));
        var u = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var d = Am(u);
          try {
            d.insertRule(c, d.cssRules.length);
          } catch {}
        } else u.appendChild(document.createTextNode(c));
        this.ctr++;
      }),
      (i.flush = function () {
        this.tags.forEach(function (c) {
          var u;
          return (u = c.parentNode) == null ? void 0 : u.removeChild(c);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      o
    );
  })(),
  tt = "-ms-",
  Ro = "-moz-",
  ye = "-webkit-",
  vd = "comm",
  da = "rule",
  pa = "decl",
  Hm = "@import",
  gd = "@keyframes",
  Bm = "@layer",
  Wm = Math.abs,
  zo = String.fromCharCode,
  Qm = Object.assign;
function Km(o, i) {
  return Xe(o, 0) ^ 45
    ? (((((((i << 2) ^ Xe(o, 0)) << 2) ^ Xe(o, 1)) << 2) ^ Xe(o, 2)) << 2) ^
        Xe(o, 3)
    : 0;
}
function yd(o) {
  return o.trim();
}
function Ym(o, i) {
  return (o = i.exec(o)) ? o[0] : o;
}
function Se(o, i, a) {
  return o.replace(i, a);
}
function ra(o, i) {
  return o.indexOf(i);
}
function Xe(o, i) {
  return o.charCodeAt(i) | 0;
}
function ti(o, i, a) {
  return o.slice(i, a);
}
function Vt(o) {
  return o.length;
}
function ha(o) {
  return o.length;
}
function So(o, i) {
  return i.push(o), o;
}
function Gm(o, i) {
  return o.map(i).join("");
}
var jo = 1,
  ar = 1,
  Sd = 0,
  dt = 0,
  $e = 0,
  sr = "";
function Ao(o, i, a, c, u, d, h) {
  return {
    value: o,
    root: i,
    parent: a,
    type: c,
    props: u,
    children: d,
    line: jo,
    column: ar,
    length: h,
    return: "",
  };
}
function qr(o, i) {
  return Qm(Ao("", null, null, "", null, null, 0), o, { length: -o.length }, i);
}
function Xm() {
  return $e;
}
function qm() {
  return (
    ($e = dt > 0 ? Xe(sr, --dt) : 0), ar--, $e === 10 && ((ar = 1), jo--), $e
  );
}
function gt() {
  return (
    ($e = dt < Sd ? Xe(sr, dt++) : 0), ar++, $e === 10 && ((ar = 1), jo++), $e
  );
}
function zt() {
  return Xe(sr, dt);
}
function Eo() {
  return dt;
}
function li(o, i) {
  return ti(sr, o, i);
}
function ni(o) {
  switch (o) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function wd(o) {
  return (jo = ar = 1), (Sd = Vt((sr = o))), (dt = 0), [];
}
function Cd(o) {
  return (sr = ""), o;
}
function Oo(o) {
  return yd(li(dt - 1, ia(o === 91 ? o + 2 : o === 40 ? o + 1 : o)));
}
function Zm(o) {
  for (; ($e = zt()) && $e < 33; ) gt();
  return ni(o) > 2 || ni($e) > 3 ? "" : " ";
}
function Jm(o, i) {
  for (
    ;
    --i &&
    gt() &&
    !($e < 48 || $e > 102 || ($e > 57 && $e < 65) || ($e > 70 && $e < 97));

  );
  return li(o, Eo() + (i < 6 && zt() == 32 && gt() == 32));
}
function ia(o) {
  for (; gt(); )
    switch ($e) {
      case o:
        return dt;
      case 34:
      case 39:
        o !== 34 && o !== 39 && ia($e);
        break;
      case 40:
        o === 41 && ia(o);
        break;
      case 92:
        gt();
        break;
    }
  return dt;
}
function ev(o, i) {
  for (; gt() && o + $e !== 57; ) if (o + $e === 84 && zt() === 47) break;
  return "/*" + li(i, dt - 1) + "*" + zo(o === 47 ? o : gt());
}
function tv(o) {
  for (; !ni(zt()); ) gt();
  return li(o, dt);
}
function nv(o) {
  return Cd(Po("", null, null, null, [""], (o = wd(o)), 0, [0], o));
}
function Po(o, i, a, c, u, d, h, g, p) {
  for (
    var v = 0,
      S = 0,
      w = h,
      I = 0,
      M = 0,
      L = 0,
      _ = 1,
      O = 1,
      N = 1,
      U = 0,
      j = "",
      W = u,
      R = d,
      B = c,
      $ = j;
    O;

  )
    switch (((L = U), (U = gt()))) {
      case 40:
        if (L != 108 && Xe($, w - 1) == 58) {
          ra(($ += Se(Oo(U), "&", "&\f")), "&\f") != -1 && (N = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += Oo(U);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += Zm(L);
        break;
      case 92:
        $ += Jm(Eo() - 1, 7);
        continue;
      case 47:
        switch (zt()) {
          case 42:
          case 47:
            So(rv(ev(gt(), Eo()), i, a), p);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * _:
        g[v++] = Vt($) * N;
      case 125 * _:
      case 59:
      case 0:
        switch (U) {
          case 0:
          case 125:
            O = 0;
          case 59 + S:
            N == -1 && ($ = Se($, /\f/g, "")),
              M > 0 &&
                Vt($) - w &&
                So(
                  M > 32
                    ? Tf($ + ";", c, a, w - 1)
                    : Tf(Se($, " ", "") + ";", c, a, w - 2),
                  p
                );
            break;
          case 59:
            $ += ";";
          default:
            if (
              (So((B = Rf($, i, a, v, S, u, g, j, (W = []), (R = []), w)), d),
              U === 123)
            )
              if (S === 0) Po($, i, B, B, W, d, w, g, R);
              else
                switch (I === 99 && Xe($, 3) === 110 ? 100 : I) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Po(
                      o,
                      B,
                      B,
                      c && So(Rf(o, B, B, 0, 0, u, g, j, u, (W = []), w), R),
                      u,
                      R,
                      w,
                      g,
                      c ? W : R
                    );
                    break;
                  default:
                    Po($, B, B, B, [""], R, 0, g, R);
                }
        }
        (v = S = M = 0), (_ = N = 1), (j = $ = ""), (w = h);
        break;
      case 58:
        (w = 1 + Vt($)), (M = L);
      default:
        if (_ < 1) {
          if (U == 123) --_;
          else if (U == 125 && _++ == 0 && qm() == 125) continue;
        }
        switch ((($ += zo(U)), U * _)) {
          case 38:
            N = S > 0 ? 1 : (($ += "\f"), -1);
            break;
          case 44:
            (g[v++] = (Vt($) - 1) * N), (N = 1);
            break;
          case 64:
            zt() === 45 && ($ += Oo(gt())),
              (I = zt()),
              (S = w = Vt((j = $ += tv(Eo())))),
              U++;
            break;
          case 45:
            L === 45 && Vt($) == 2 && (_ = 0);
        }
    }
  return d;
}
function Rf(o, i, a, c, u, d, h, g, p, v, S) {
  for (
    var w = u - 1, I = u === 0 ? d : [""], M = ha(I), L = 0, _ = 0, O = 0;
    L < c;
    ++L
  )
    for (var N = 0, U = ti(o, w + 1, (w = Wm((_ = h[L])))), j = o; N < M; ++N)
      (j = yd(_ > 0 ? I[N] + " " + U : Se(U, /&\f/g, I[N]))) && (p[O++] = j);
  return Ao(o, i, a, u === 0 ? da : g, p, v, S);
}
function rv(o, i, a) {
  return Ao(o, i, a, vd, zo(Xm()), ti(o, 2, -2), 0);
}
function Tf(o, i, a, c) {
  return Ao(o, i, a, pa, ti(o, 0, c), ti(o, c + 1, -1), c);
}
function ur(o, i) {
  for (var a = "", c = ha(o), u = 0; u < c; u++) a += i(o[u], u, o, i) || "";
  return a;
}
function iv(o, i, a, c) {
  switch (o.type) {
    case Bm:
      if (o.children.length) break;
    case Hm:
    case pa:
      return (o.return = o.return || o.value);
    case vd:
      return "";
    case gd:
      return (o.return = o.value + "{" + ur(o.children, c) + "}");
    case da:
      o.value = o.props.join(",");
  }
  return Vt((a = ur(o.children, c)))
    ? (o.return = o.value + "{" + a + "}")
    : "";
}
function ov(o) {
  var i = ha(o);
  return function (a, c, u, d) {
    for (var h = "", g = 0; g < i; g++) h += o[g](a, c, u, d) || "";
    return h;
  };
}
function lv(o) {
  return function (i) {
    i.root || ((i = i.return) && o(i));
  };
}
function uv(o) {
  var i = Object.create(null);
  return function (a) {
    return i[a] === void 0 && (i[a] = o(a)), i[a];
  };
}
var av = function (i, a, c) {
    for (
      var u = 0, d = 0;
      (u = d), (d = zt()), u === 38 && d === 12 && (a[c] = 1), !ni(d);

    )
      gt();
    return li(i, dt);
  },
  sv = function (i, a) {
    var c = -1,
      u = 44;
    do
      switch (ni(u)) {
        case 0:
          u === 38 && zt() === 12 && (a[c] = 1), (i[c] += av(dt - 1, a, c));
          break;
        case 2:
          i[c] += Oo(u);
          break;
        case 4:
          if (u === 44) {
            (i[++c] = zt() === 58 ? "&\f" : ""), (a[c] = i[c].length);
            break;
          }
        default:
          i[c] += zo(u);
      }
    while ((u = gt()));
    return i;
  },
  cv = function (i, a) {
    return Cd(sv(wd(i), a));
  },
  Lf = new WeakMap(),
  fv = function (i) {
    if (!(i.type !== "rule" || !i.parent || i.length < 1)) {
      for (
        var a = i.value,
          c = i.parent,
          u = i.column === c.column && i.line === c.line;
        c.type !== "rule";

      )
        if (((c = c.parent), !c)) return;
      if (
        !(i.props.length === 1 && a.charCodeAt(0) !== 58 && !Lf.get(c)) &&
        !u
      ) {
        Lf.set(i, !0);
        for (
          var d = [], h = cv(a, d), g = c.props, p = 0, v = 0;
          p < h.length;
          p++
        )
          for (var S = 0; S < g.length; S++, v++)
            i.props[v] = d[p] ? h[p].replace(/&\f/g, g[S]) : g[S] + " " + h[p];
      }
    }
  },
  dv = function (i) {
    if (i.type === "decl") {
      var a = i.value;
      a.charCodeAt(0) === 108 &&
        a.charCodeAt(2) === 98 &&
        ((i.return = ""), (i.value = ""));
    }
  };
function xd(o, i) {
  switch (Km(o, i)) {
    case 5103:
      return ye + "print-" + o + o;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ye + o + o;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ye + o + Ro + o + tt + o + o;
    case 6828:
    case 4268:
      return ye + o + tt + o + o;
    case 6165:
      return ye + o + tt + "flex-" + o + o;
    case 5187:
      return (
        ye + o + Se(o, /(\w+).+(:[^]+)/, ye + "box-$1$2" + tt + "flex-$1$2") + o
      );
    case 5443:
      return ye + o + tt + "flex-item-" + Se(o, /flex-|-self/, "") + o;
    case 4675:
      return (
        ye +
        o +
        tt +
        "flex-line-pack" +
        Se(o, /align-content|flex-|-self/, "") +
        o
      );
    case 5548:
      return ye + o + tt + Se(o, "shrink", "negative") + o;
    case 5292:
      return ye + o + tt + Se(o, "basis", "preferred-size") + o;
    case 6060:
      return (
        ye +
        "box-" +
        Se(o, "-grow", "") +
        ye +
        o +
        tt +
        Se(o, "grow", "positive") +
        o
      );
    case 4554:
      return ye + Se(o, /([^-])(transform)/g, "$1" + ye + "$2") + o;
    case 6187:
      return (
        Se(
          Se(Se(o, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"),
          o,
          ""
        ) + o
      );
    case 5495:
    case 3959:
      return Se(o, /(image-set\([^]*)/, ye + "$1$`$1");
    case 4968:
      return (
        Se(
          Se(o, /(.+:)(flex-)?(.*)/, ye + "box-pack:$3" + tt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ye +
        o +
        o
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Se(o, /(.+)-inline(.+)/, ye + "$1$2") + o;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Vt(o) - 1 - i > 6)
        switch (Xe(o, i + 1)) {
          case 109:
            if (Xe(o, i + 4) !== 45) break;
          case 102:
            return (
              Se(
                o,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ye +
                  "$2-$3$1" +
                  Ro +
                  (Xe(o, i + 3) == 108 ? "$3" : "$2-$3")
              ) + o
            );
          case 115:
            return ~ra(o, "stretch")
              ? xd(Se(o, "stretch", "fill-available"), i) + o
              : o;
        }
      break;
    case 4949:
      if (Xe(o, i + 1) !== 115) break;
    case 6444:
      switch (Xe(o, Vt(o) - 3 - (~ra(o, "!important") && 10))) {
        case 107:
          return Se(o, ":", ":" + ye) + o;
        case 101:
          return (
            Se(
              o,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ye +
                (Xe(o, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ye +
                "$2$3$1" +
                tt +
                "$2box$3"
            ) + o
          );
      }
      break;
    case 5936:
      switch (Xe(o, i + 11)) {
        case 114:
          return ye + o + tt + Se(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case 108:
          return ye + o + tt + Se(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case 45:
          return ye + o + tt + Se(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
      return ye + o + tt + o + o;
  }
  return o;
}
var pv = function (i, a, c, u) {
    if (i.length > -1 && !i.return)
      switch (i.type) {
        case pa:
          i.return = xd(i.value, i.length);
          break;
        case gd:
          return ur([qr(i, { value: Se(i.value, "@", "@" + ye) })], u);
        case da:
          if (i.length)
            return Gm(i.props, function (d) {
              switch (Ym(d, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ur(
                    [qr(i, { props: [Se(d, /:(read-\w+)/, ":" + Ro + "$1")] })],
                    u
                  );
                case "::placeholder":
                  return ur(
                    [
                      qr(i, {
                        props: [Se(d, /:(plac\w+)/, ":" + ye + "input-$1")],
                      }),
                      qr(i, { props: [Se(d, /:(plac\w+)/, ":" + Ro + "$1")] }),
                      qr(i, { props: [Se(d, /:(plac\w+)/, tt + "input-$1")] }),
                    ],
                    u
                  );
              }
              return "";
            });
      }
  },
  hv = [pv],
  mv = function (i) {
    var a = i.key;
    if (a === "css") {
      var c = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(c, function (_) {
        var O = _.getAttribute("data-emotion");
        O.indexOf(" ") !== -1 &&
          (document.head.appendChild(_), _.setAttribute("data-s", ""));
      });
    }
    var u = i.stylisPlugins || hv,
      d = {},
      h,
      g = [];
    (h = i.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + a + ' "]'),
        function (_) {
          for (
            var O = _.getAttribute("data-emotion").split(" "), N = 1;
            N < O.length;
            N++
          )
            d[O[N]] = !0;
          g.push(_);
        }
      );
    var p,
      v = [fv, dv];
    {
      var S,
        w = [
          iv,
          lv(function (_) {
            S.insert(_);
          }),
        ],
        I = ov(v.concat(u, w)),
        M = function (O) {
          return ur(nv(O), I);
        };
      p = function (O, N, U, j) {
        (S = U),
          M(O ? O + "{" + N.styles + "}" : N.styles),
          j && (L.inserted[N.name] = !0);
      };
    }
    var L = {
      key: a,
      sheet: new Um({
        key: a,
        container: h,
        nonce: i.nonce,
        speedy: i.speedy,
        prepend: i.prepend,
        insertionPoint: i.insertionPoint,
      }),
      nonce: i.nonce,
      inserted: d,
      registered: {},
      insert: p,
    };
    return L.sheet.hydrate(g), L;
  },
  Hu = { exports: {} },
  we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nf;
function vv() {
  if (Nf) return we;
  Nf = 1;
  var o = typeof Symbol == "function" && Symbol.for,
    i = o ? Symbol.for("react.element") : 60103,
    a = o ? Symbol.for("react.portal") : 60106,
    c = o ? Symbol.for("react.fragment") : 60107,
    u = o ? Symbol.for("react.strict_mode") : 60108,
    d = o ? Symbol.for("react.profiler") : 60114,
    h = o ? Symbol.for("react.provider") : 60109,
    g = o ? Symbol.for("react.context") : 60110,
    p = o ? Symbol.for("react.async_mode") : 60111,
    v = o ? Symbol.for("react.concurrent_mode") : 60111,
    S = o ? Symbol.for("react.forward_ref") : 60112,
    w = o ? Symbol.for("react.suspense") : 60113,
    I = o ? Symbol.for("react.suspense_list") : 60120,
    M = o ? Symbol.for("react.memo") : 60115,
    L = o ? Symbol.for("react.lazy") : 60116,
    _ = o ? Symbol.for("react.block") : 60121,
    O = o ? Symbol.for("react.fundamental") : 60117,
    N = o ? Symbol.for("react.responder") : 60118,
    U = o ? Symbol.for("react.scope") : 60119;
  function j(R) {
    if (typeof R == "object" && R !== null) {
      var B = R.$$typeof;
      switch (B) {
        case i:
          switch (((R = R.type), R)) {
            case p:
            case v:
            case c:
            case d:
            case u:
            case w:
              return R;
            default:
              switch (((R = R && R.$$typeof), R)) {
                case g:
                case S:
                case L:
                case M:
                case h:
                  return R;
                default:
                  return B;
              }
          }
        case a:
          return B;
      }
    }
  }
  function W(R) {
    return j(R) === v;
  }
  return (
    (we.AsyncMode = p),
    (we.ConcurrentMode = v),
    (we.ContextConsumer = g),
    (we.ContextProvider = h),
    (we.Element = i),
    (we.ForwardRef = S),
    (we.Fragment = c),
    (we.Lazy = L),
    (we.Memo = M),
    (we.Portal = a),
    (we.Profiler = d),
    (we.StrictMode = u),
    (we.Suspense = w),
    (we.isAsyncMode = function (R) {
      return W(R) || j(R) === p;
    }),
    (we.isConcurrentMode = W),
    (we.isContextConsumer = function (R) {
      return j(R) === g;
    }),
    (we.isContextProvider = function (R) {
      return j(R) === h;
    }),
    (we.isElement = function (R) {
      return typeof R == "object" && R !== null && R.$$typeof === i;
    }),
    (we.isForwardRef = function (R) {
      return j(R) === S;
    }),
    (we.isFragment = function (R) {
      return j(R) === c;
    }),
    (we.isLazy = function (R) {
      return j(R) === L;
    }),
    (we.isMemo = function (R) {
      return j(R) === M;
    }),
    (we.isPortal = function (R) {
      return j(R) === a;
    }),
    (we.isProfiler = function (R) {
      return j(R) === d;
    }),
    (we.isStrictMode = function (R) {
      return j(R) === u;
    }),
    (we.isSuspense = function (R) {
      return j(R) === w;
    }),
    (we.isValidElementType = function (R) {
      return (
        typeof R == "string" ||
        typeof R == "function" ||
        R === c ||
        R === v ||
        R === d ||
        R === u ||
        R === w ||
        R === I ||
        (typeof R == "object" &&
          R !== null &&
          (R.$$typeof === L ||
            R.$$typeof === M ||
            R.$$typeof === h ||
            R.$$typeof === g ||
            R.$$typeof === S ||
            R.$$typeof === O ||
            R.$$typeof === N ||
            R.$$typeof === U ||
            R.$$typeof === _))
      );
    }),
    (we.typeOf = j),
    we
  );
}
var Df;
function gv() {
  return Df || ((Df = 1), (Hu.exports = vv())), Hu.exports;
}
var Bu, Ff;
function yv() {
  if (Ff) return Bu;
  Ff = 1;
  var o = gv(),
    i = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    a = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    c = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    u = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    d = {};
  (d[o.ForwardRef] = c), (d[o.Memo] = u);
  function h(L) {
    return o.isMemo(L) ? u : d[L.$$typeof] || i;
  }
  var g = Object.defineProperty,
    p = Object.getOwnPropertyNames,
    v = Object.getOwnPropertySymbols,
    S = Object.getOwnPropertyDescriptor,
    w = Object.getPrototypeOf,
    I = Object.prototype;
  function M(L, _, O) {
    if (typeof _ != "string") {
      if (I) {
        var N = w(_);
        N && N !== I && M(L, N, O);
      }
      var U = p(_);
      v && (U = U.concat(v(_)));
      for (var j = h(L), W = h(_), R = 0; R < U.length; ++R) {
        var B = U[R];
        if (!a[B] && !(O && O[B]) && !(W && W[B]) && !(j && j[B])) {
          var $ = S(_, B);
          try {
            g(L, B, $);
          } catch {}
        }
      }
    }
    return L;
  }
  return (Bu = M), Bu;
}
yv();
var Sv = !0;
function wv(o, i, a) {
  var c = "";
  return (
    a.split(" ").forEach(function (u) {
      o[u] !== void 0 ? i.push(o[u] + ";") : u && (c += u + " ");
    }),
    c
  );
}
var kd = function (i, a, c) {
    var u = i.key + "-" + a.name;
    (c === !1 || Sv === !1) &&
      i.registered[u] === void 0 &&
      (i.registered[u] = a.styles);
  },
  Cv = function (i, a, c) {
    kd(i, a, c);
    var u = i.key + "-" + a.name;
    if (i.inserted[a.name] === void 0) {
      var d = a;
      do i.insert(a === d ? "." + u : "", d, i.sheet, !0), (d = d.next);
      while (d !== void 0);
    }
  };
function xv(o) {
  for (var i = 0, a, c = 0, u = o.length; u >= 4; ++c, u -= 4)
    (a =
      (o.charCodeAt(c) & 255) |
      ((o.charCodeAt(++c) & 255) << 8) |
      ((o.charCodeAt(++c) & 255) << 16) |
      ((o.charCodeAt(++c) & 255) << 24)),
      (a = (a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)),
      (a ^= a >>> 24),
      (i =
        ((a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)) ^
        ((i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)));
  switch (u) {
    case 3:
      i ^= (o.charCodeAt(c + 2) & 255) << 16;
    case 2:
      i ^= (o.charCodeAt(c + 1) & 255) << 8;
    case 1:
      (i ^= o.charCodeAt(c) & 255),
        (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16));
  }
  return (
    (i ^= i >>> 13),
    (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)),
    ((i ^ (i >>> 15)) >>> 0).toString(36)
  );
}
var kv = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Ev = /[A-Z]|^ms/g,
  Ov = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ed = function (i) {
    return i.charCodeAt(1) === 45;
  },
  Vf = function (i) {
    return i != null && typeof i != "boolean";
  },
  Wu = uv(function (o) {
    return Ed(o) ? o : o.replace(Ev, "-$&").toLowerCase();
  }),
  bf = function (i, a) {
    switch (i) {
      case "animation":
      case "animationName":
        if (typeof a == "string")
          return a.replace(Ov, function (c, u, d) {
            return (bt = { name: u, styles: d, next: bt }), u;
          });
    }
    return kv[i] !== 1 && !Ed(i) && typeof a == "number" && a !== 0
      ? a + "px"
      : a;
  };
function ri(o, i, a) {
  if (a == null) return "";
  var c = a;
  if (c.__emotion_styles !== void 0) return c;
  switch (typeof a) {
    case "boolean":
      return "";
    case "object": {
      var u = a;
      if (u.anim === 1)
        return (bt = { name: u.name, styles: u.styles, next: bt }), u.name;
      var d = a;
      if (d.styles !== void 0) {
        var h = d.next;
        if (h !== void 0)
          for (; h !== void 0; )
            (bt = { name: h.name, styles: h.styles, next: bt }), (h = h.next);
        var g = d.styles + ";";
        return g;
      }
      return Pv(o, i, a);
    }
    case "function": {
      if (o !== void 0) {
        var p = bt,
          v = a(o);
        return (bt = p), ri(o, i, v);
      }
      break;
    }
  }
  var S = a;
  return S;
}
function Pv(o, i, a) {
  var c = "";
  if (Array.isArray(a))
    for (var u = 0; u < a.length; u++) c += ri(o, i, a[u]) + ";";
  else
    for (var d in a) {
      var h = a[d];
      if (typeof h != "object") {
        var g = h;
        Vf(g) && (c += Wu(d) + ":" + bf(d, g) + ";");
      } else if (Array.isArray(h) && typeof h[0] == "string" && i == null)
        for (var p = 0; p < h.length; p++)
          Vf(h[p]) && (c += Wu(d) + ":" + bf(d, h[p]) + ";");
      else {
        var v = ri(o, i, h);
        switch (d) {
          case "animation":
          case "animationName": {
            c += Wu(d) + ":" + v + ";";
            break;
          }
          default:
            c += d + "{" + v + "}";
        }
      }
    }
  return c;
}
var zf = /label:\s*([^\s;{]+)\s*(;|$)/g,
  bt;
function Od(o, i, a) {
  if (
    o.length === 1 &&
    typeof o[0] == "object" &&
    o[0] !== null &&
    o[0].styles !== void 0
  )
    return o[0];
  var c = !0,
    u = "";
  bt = void 0;
  var d = o[0];
  if (d == null || d.raw === void 0) (c = !1), (u += ri(a, i, d));
  else {
    var h = d;
    u += h[0];
  }
  for (var g = 1; g < o.length; g++)
    if (((u += ri(a, i, o[g])), c)) {
      var p = d;
      u += p[g];
    }
  zf.lastIndex = 0;
  for (var v = "", S; (S = zf.exec(u)) !== null; ) v += "-" + S[1];
  var w = xv(u) + v;
  return { name: w, styles: u, next: bt };
}
var _v = function (i) {
    return i();
  },
  Iv = Sf.useInsertionEffect ? Sf.useInsertionEffect : !1,
  Mv = Iv || _v,
  Pd = b.createContext(typeof HTMLElement < "u" ? mv({ key: "css" }) : null);
Pd.Provider;
var Rv = function (i) {
    return b.forwardRef(function (a, c) {
      var u = b.useContext(Pd);
      return i(a, u, c);
    });
  },
  Tv = b.createContext({}),
  ma = {}.hasOwnProperty,
  oa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Lv = function (i, a) {
    var c = {};
    for (var u in a) ma.call(a, u) && (c[u] = a[u]);
    return (c[oa] = i), c;
  },
  Nv = function (i) {
    var a = i.cache,
      c = i.serialized,
      u = i.isStringTag;
    return (
      kd(a, c, u),
      Mv(function () {
        return Cv(a, c, u);
      }),
      null
    );
  },
  Dv = Rv(function (o, i, a) {
    var c = o.css;
    typeof c == "string" && i.registered[c] !== void 0 && (c = i.registered[c]);
    var u = o[oa],
      d = [c],
      h = "";
    typeof o.className == "string"
      ? (h = wv(i.registered, d, o.className))
      : o.className != null && (h = o.className + " ");
    var g = Od(d, void 0, b.useContext(Tv));
    h += i.key + "-" + g.name;
    var p = {};
    for (var v in o) ma.call(o, v) && v !== "css" && v !== oa && (p[v] = o[v]);
    return (
      (p.className = h),
      a && (p.ref = a),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(Nv, {
          cache: i,
          serialized: g,
          isStringTag: typeof u == "string",
        }),
        b.createElement(u, p)
      )
    );
  }),
  Fv = Dv,
  ee = function (i, a) {
    var c = arguments;
    if (a == null || !ma.call(a, "css"))
      return b.createElement.apply(void 0, c);
    var u = c.length,
      d = new Array(u);
    (d[0] = Fv), (d[1] = Lv(i, a));
    for (var h = 2; h < u; h++) d[h] = c[h];
    return b.createElement.apply(null, d);
  };
(function (o) {
  var i;
  i || (i = o.JSX || (o.JSX = {}));
})(ee);
function va() {
  for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
    i[a] = arguments[a];
  return Od(i);
}
function Vv() {
  var o = va.apply(void 0, arguments),
    i = "animation-" + o.name;
  return {
    name: i,
    styles: "@keyframes " + i + "{" + o.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
function bv(o, i) {
  return (
    i || (i = o.slice(0)),
    Object.freeze(
      Object.defineProperties(o, { raw: { value: Object.freeze(i) } })
    )
  );
}
var zv = od();
const jv = Math.min,
  Av = Math.max,
  To = Math.round,
  wo = Math.floor,
  Lo = (o) => ({ x: o, y: o });
function $v(o) {
  const { x: i, y: a, width: c, height: u } = o;
  return {
    width: c,
    height: u,
    top: a,
    left: i,
    right: i + c,
    bottom: a + u,
    x: i,
    y: a,
  };
}
function $o() {
  return typeof window < "u";
}
function _d(o) {
  return Md(o) ? (o.nodeName || "").toLowerCase() : "#document";
}
function Yt(o) {
  var i;
  return (
    (o == null || (i = o.ownerDocument) == null ? void 0 : i.defaultView) ||
    window
  );
}
function Id(o) {
  var i;
  return (i = (Md(o) ? o.ownerDocument : o.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function Md(o) {
  return $o() ? o instanceof Node || o instanceof Yt(o).Node : !1;
}
function Uv(o) {
  return $o() ? o instanceof Element || o instanceof Yt(o).Element : !1;
}
function ga(o) {
  return $o() ? o instanceof HTMLElement || o instanceof Yt(o).HTMLElement : !1;
}
function jf(o) {
  return !$o() || typeof ShadowRoot > "u"
    ? !1
    : o instanceof ShadowRoot || o instanceof Yt(o).ShadowRoot;
}
function Rd(o) {
  const { overflow: i, overflowX: a, overflowY: c, display: u } = ya(o);
  return (
    /auto|scroll|overlay|hidden|clip/.test(i + c + a) &&
    !["inline", "contents"].includes(u)
  );
}
function Hv() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Bv(o) {
  return ["html", "body", "#document"].includes(_d(o));
}
function ya(o) {
  return Yt(o).getComputedStyle(o);
}
function Wv(o) {
  if (_d(o) === "html") return o;
  const i = o.assignedSlot || o.parentNode || (jf(o) && o.host) || Id(o);
  return jf(i) ? i.host : i;
}
function Td(o) {
  const i = Wv(o);
  return Bv(i)
    ? o.ownerDocument
      ? o.ownerDocument.body
      : o.body
    : ga(i) && Rd(i)
    ? i
    : Td(i);
}
function No(o, i, a) {
  var c;
  i === void 0 && (i = []), a === void 0 && (a = !0);
  const u = Td(o),
    d = u === ((c = o.ownerDocument) == null ? void 0 : c.body),
    h = Yt(u);
  if (d) {
    const g = la(h);
    return i.concat(
      h,
      h.visualViewport || [],
      Rd(u) ? u : [],
      g && a ? No(g) : []
    );
  }
  return i.concat(u, No(u, [], a));
}
function la(o) {
  return o.parent && Object.getPrototypeOf(o.parent) ? o.frameElement : null;
}
function Qv(o) {
  const i = ya(o);
  let a = parseFloat(i.width) || 0,
    c = parseFloat(i.height) || 0;
  const u = ga(o),
    d = u ? o.offsetWidth : a,
    h = u ? o.offsetHeight : c,
    g = To(a) !== d || To(c) !== h;
  return g && ((a = d), (c = h)), { width: a, height: c, $: g };
}
function Sa(o) {
  return Uv(o) ? o : o.contextElement;
}
function Af(o) {
  const i = Sa(o);
  if (!ga(i)) return Lo(1);
  const a = i.getBoundingClientRect(),
    { width: c, height: u, $: d } = Qv(i);
  let h = (d ? To(a.width) : a.width) / c,
    g = (d ? To(a.height) : a.height) / u;
  return (
    (!h || !Number.isFinite(h)) && (h = 1),
    (!g || !Number.isFinite(g)) && (g = 1),
    { x: h, y: g }
  );
}
const Kv = Lo(0);
function Yv(o) {
  const i = Yt(o);
  return !Hv() || !i.visualViewport
    ? Kv
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function Gv(o, i, a) {
  return !1;
}
function $f(o, i, a, c) {
  i === void 0 && (i = !1);
  const u = o.getBoundingClientRect(),
    d = Sa(o);
  let h = Lo(1);
  i && (h = Af(o));
  const g = Gv() ? Yv(d) : Lo(0);
  let p = (u.left + g.x) / h.x,
    v = (u.top + g.y) / h.y,
    S = u.width / h.x,
    w = u.height / h.y;
  if (d) {
    const I = Yt(d),
      M = c;
    let L = I,
      _ = la(L);
    for (; _ && c && M !== L; ) {
      const O = Af(_),
        N = _.getBoundingClientRect(),
        U = ya(_),
        j = N.left + (_.clientLeft + parseFloat(U.paddingLeft)) * O.x,
        W = N.top + (_.clientTop + parseFloat(U.paddingTop)) * O.y;
      (p *= O.x),
        (v *= O.y),
        (S *= O.x),
        (w *= O.y),
        (p += j),
        (v += W),
        (L = Yt(_)),
        (_ = la(L));
    }
  }
  return $v({ width: S, height: w, x: p, y: v });
}
function Ld(o, i) {
  return (
    o.x === i.x && o.y === i.y && o.width === i.width && o.height === i.height
  );
}
function Xv(o, i) {
  let a = null,
    c;
  const u = Id(o);
  function d() {
    var g;
    clearTimeout(c), (g = a) == null || g.disconnect(), (a = null);
  }
  function h(g, p) {
    g === void 0 && (g = !1), p === void 0 && (p = 1), d();
    const v = o.getBoundingClientRect(),
      { left: S, top: w, width: I, height: M } = v;
    if ((g || i(), !I || !M)) return;
    const L = wo(w),
      _ = wo(u.clientWidth - (S + I)),
      O = wo(u.clientHeight - (w + M)),
      N = wo(S),
      j = {
        rootMargin: -L + "px " + -_ + "px " + -O + "px " + -N + "px",
        threshold: Av(0, jv(1, p)) || 1,
      };
    let W = !0;
    function R(B) {
      const $ = B[0].intersectionRatio;
      if ($ !== p) {
        if (!W) return h();
        $
          ? h(!1, $)
          : (c = setTimeout(() => {
              h(!1, 1e-7);
            }, 1e3));
      }
      $ === 1 && !Ld(v, o.getBoundingClientRect()) && h(), (W = !1);
    }
    try {
      a = new IntersectionObserver(R, { ...j, root: u.ownerDocument });
    } catch {
      a = new IntersectionObserver(R, j);
    }
    a.observe(o);
  }
  return h(!0), d;
}
function qv(o, i, a, c) {
  c === void 0 && (c = {});
  const {
      ancestorScroll: u = !0,
      ancestorResize: d = !0,
      elementResize: h = typeof ResizeObserver == "function",
      layoutShift: g = typeof IntersectionObserver == "function",
      animationFrame: p = !1,
    } = c,
    v = Sa(o),
    S = u || d ? [...(v ? No(v) : []), ...No(i)] : [];
  S.forEach((N) => {
    u && N.addEventListener("scroll", a, { passive: !0 }),
      d && N.addEventListener("resize", a);
  });
  const w = v && g ? Xv(v, a) : null;
  let I = -1,
    M = null;
  h &&
    ((M = new ResizeObserver((N) => {
      let [U] = N;
      U &&
        U.target === v &&
        M &&
        (M.unobserve(i),
        cancelAnimationFrame(I),
        (I = requestAnimationFrame(() => {
          var j;
          (j = M) == null || j.observe(i);
        }))),
        a();
    })),
    v && !p && M.observe(v),
    M.observe(i));
  let L,
    _ = p ? $f(o) : null;
  p && O();
  function O() {
    const N = $f(o);
    _ && !Ld(_, N) && a(), (_ = N), (L = requestAnimationFrame(O));
  }
  return (
    a(),
    () => {
      var N;
      S.forEach((U) => {
        u && U.removeEventListener("scroll", a),
          d && U.removeEventListener("resize", a);
      }),
        w == null || w(),
        (N = M) == null || N.disconnect(),
        (M = null),
        p && cancelAnimationFrame(L);
    }
  );
}
var ua = b.useLayoutEffect,
  Zv = [
    "className",
    "clearValue",
    "cx",
    "getStyles",
    "getClassNames",
    "getValue",
    "hasValue",
    "isMulti",
    "isRtl",
    "options",
    "selectOption",
    "selectProps",
    "setValue",
    "theme",
  ],
  Do = function () {};
function Jv(o, i) {
  return i ? (i[0] === "-" ? o + i : o + "__" + i) : o;
}
function eg(o, i) {
  for (
    var a = arguments.length, c = new Array(a > 2 ? a - 2 : 0), u = 2;
    u < a;
    u++
  )
    c[u - 2] = arguments[u];
  var d = [].concat(c);
  if (i && o)
    for (var h in i) i.hasOwnProperty(h) && i[h] && d.push("".concat(Jv(o, h)));
  return d
    .filter(function (g) {
      return g;
    })
    .map(function (g) {
      return String(g).trim();
    })
    .join(" ");
}
var Uf = function (i) {
    return sg(i)
      ? i.filter(Boolean)
      : Tn(i) === "object" && i !== null
      ? [i]
      : [];
  },
  Nd = function (i) {
    i.className,
      i.clearValue,
      i.cx,
      i.getStyles,
      i.getClassNames,
      i.getValue,
      i.hasValue,
      i.isMulti,
      i.isRtl,
      i.options,
      i.selectOption,
      i.selectProps,
      i.setValue,
      i.theme;
    var a = Gt(i, Zv);
    return ie({}, a);
  },
  Ve = function (i, a, c) {
    var u = i.cx,
      d = i.getStyles,
      h = i.getClassNames,
      g = i.className;
    return { css: d(a, i), className: u(c ?? {}, h(a, i), g) };
  };
function Uo(o) {
  return [document.documentElement, document.body, window].indexOf(o) > -1;
}
function tg(o) {
  return Uo(o) ? window.innerHeight : o.clientHeight;
}
function Dd(o) {
  return Uo(o) ? window.pageYOffset : o.scrollTop;
}
function Fo(o, i) {
  if (Uo(o)) {
    window.scrollTo(0, i);
    return;
  }
  o.scrollTop = i;
}
function ng(o) {
  var i = getComputedStyle(o),
    a = i.position === "absolute",
    c = /(auto|scroll)/;
  if (i.position === "fixed") return document.documentElement;
  for (var u = o; (u = u.parentElement); )
    if (
      ((i = getComputedStyle(u)),
      !(a && i.position === "static") &&
        c.test(i.overflow + i.overflowY + i.overflowX))
    )
      return u;
  return document.documentElement;
}
function rg(o, i, a, c) {
  return a * ((o = o / c - 1) * o * o + 1) + i;
}
function Co(o, i) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Do,
    u = Dd(o),
    d = i - u,
    h = 10,
    g = 0;
  function p() {
    g += h;
    var v = rg(g, u, d, a);
    Fo(o, v), g < a ? window.requestAnimationFrame(p) : c(o);
  }
  p();
}
function Hf(o, i) {
  var a = o.getBoundingClientRect(),
    c = i.getBoundingClientRect(),
    u = i.offsetHeight / 3;
  c.bottom + u > a.bottom
    ? Fo(
        o,
        Math.min(
          i.offsetTop + i.clientHeight - o.offsetHeight + u,
          o.scrollHeight
        )
      )
    : c.top - u < a.top && Fo(o, Math.max(i.offsetTop - u, 0));
}
function ig(o) {
  var i = o.getBoundingClientRect();
  return {
    bottom: i.bottom,
    height: i.height,
    left: i.left,
    right: i.right,
    top: i.top,
    width: i.width,
  };
}
function Bf() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function og() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  } catch {
    return !1;
  }
}
var Fd = !1,
  lg = {
    get passive() {
      return (Fd = !0);
    },
  },
  xo = typeof window < "u" ? window : {};
xo.addEventListener &&
  xo.removeEventListener &&
  (xo.addEventListener("p", Do, lg), xo.removeEventListener("p", Do, !1));
var ug = Fd;
function ag(o) {
  return o != null;
}
function sg(o) {
  return Array.isArray(o);
}
function ko(o, i, a) {
  return o ? i : a;
}
var cg = function (i) {
    for (
      var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), u = 1;
      u < a;
      u++
    )
      c[u - 1] = arguments[u];
    var d = Object.entries(i).filter(function (h) {
      var g = Kt(h, 1),
        p = g[0];
      return !c.includes(p);
    });
    return d.reduce(function (h, g) {
      var p = Kt(g, 2),
        v = p[0],
        S = p[1];
      return (h[v] = S), h;
    }, {});
  },
  fg = ["children", "innerProps"],
  dg = ["children", "innerProps"];
function pg(o) {
  var i = o.maxHeight,
    a = o.menuEl,
    c = o.minHeight,
    u = o.placement,
    d = o.shouldScroll,
    h = o.isFixedPosition,
    g = o.controlHeight,
    p = ng(a),
    v = { placement: "bottom", maxHeight: i };
  if (!a || !a.offsetParent) return v;
  var S = p.getBoundingClientRect(),
    w = S.height,
    I = a.getBoundingClientRect(),
    M = I.bottom,
    L = I.height,
    _ = I.top,
    O = a.offsetParent.getBoundingClientRect(),
    N = O.top,
    U = h ? window.innerHeight : tg(p),
    j = Dd(p),
    W = parseInt(getComputedStyle(a).marginBottom, 10),
    R = parseInt(getComputedStyle(a).marginTop, 10),
    B = N - R,
    $ = U - _,
    J = B + j,
    ge = w - j - _,
    Pe = M - U + j + W,
    De = j + _ - R,
    Ee = 160;
  switch (u) {
    case "auto":
    case "bottom":
      if ($ >= L) return { placement: "bottom", maxHeight: i };
      if (ge >= L && !h)
        return d && Co(p, Pe, Ee), { placement: "bottom", maxHeight: i };
      if ((!h && ge >= c) || (h && $ >= c)) {
        d && Co(p, Pe, Ee);
        var Te = h ? $ - W : ge - W;
        return { placement: "bottom", maxHeight: Te };
      }
      if (u === "auto" || h) {
        var be = i,
          Ce = h ? B : J;
        return (
          Ce >= c && (be = Math.min(Ce - W - g, i)),
          { placement: "top", maxHeight: be }
        );
      }
      if (u === "bottom")
        return d && Fo(p, Pe), { placement: "bottom", maxHeight: i };
      break;
    case "top":
      if (B >= L) return { placement: "top", maxHeight: i };
      if (J >= L && !h)
        return d && Co(p, De, Ee), { placement: "top", maxHeight: i };
      if ((!h && J >= c) || (h && B >= c)) {
        var pe = i;
        return (
          ((!h && J >= c) || (h && B >= c)) && (pe = h ? B - R : J - R),
          d && Co(p, De, Ee),
          { placement: "top", maxHeight: pe }
        );
      }
      return { placement: "bottom", maxHeight: i };
    default:
      throw new Error('Invalid placement provided "'.concat(u, '".'));
  }
  return v;
}
function hg(o) {
  var i = { bottom: "top", top: "bottom" };
  return o ? i[o] : "bottom";
}
var Vd = function (i) {
    return i === "auto" ? "bottom" : i;
  },
  mg = function (i, a) {
    var c,
      u = i.placement,
      d = i.theme,
      h = d.borderRadius,
      g = d.spacing,
      p = d.colors;
    return ie(
      ((c = { label: "menu" }),
      Jr(c, hg(u), "100%"),
      Jr(c, "position", "absolute"),
      Jr(c, "width", "100%"),
      Jr(c, "zIndex", 1),
      c),
      a
        ? {}
        : {
            backgroundColor: p.neutral0,
            borderRadius: h,
            boxShadow:
              "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
            marginBottom: g.menuGutter,
            marginTop: g.menuGutter,
          }
    );
  },
  bd = b.createContext(null),
  vg = function (i) {
    var a = i.children,
      c = i.minMenuHeight,
      u = i.maxMenuHeight,
      d = i.menuPlacement,
      h = i.menuPosition,
      g = i.menuShouldScrollIntoView,
      p = i.theme,
      v = b.useContext(bd) || {},
      S = v.setPortalPlacement,
      w = b.useRef(null),
      I = b.useState(u),
      M = Kt(I, 2),
      L = M[0],
      _ = M[1],
      O = b.useState(null),
      N = Kt(O, 2),
      U = N[0],
      j = N[1],
      W = p.spacing.controlHeight;
    return (
      ua(
        function () {
          var R = w.current;
          if (R) {
            var B = h === "fixed",
              $ = g && !B,
              J = pg({
                maxHeight: u,
                menuEl: R,
                minHeight: c,
                placement: d,
                shouldScroll: $,
                isFixedPosition: B,
                controlHeight: W,
              });
            _(J.maxHeight), j(J.placement), S == null || S(J.placement);
          }
        },
        [u, d, h, g, c, S, W]
      ),
      a({
        ref: w,
        placerProps: ie(ie({}, i), {}, { placement: U || Vd(d), maxHeight: L }),
      })
    );
  },
  gg = function (i) {
    var a = i.children,
      c = i.innerRef,
      u = i.innerProps;
    return ee("div", oe({}, Ve(i, "menu", { menu: !0 }), { ref: c }, u), a);
  },
  yg = gg,
  Sg = function (i, a) {
    var c = i.maxHeight,
      u = i.theme.spacing.baseUnit;
    return ie(
      {
        maxHeight: c,
        overflowY: "auto",
        position: "relative",
        WebkitOverflowScrolling: "touch",
      },
      a ? {} : { paddingBottom: u, paddingTop: u }
    );
  },
  wg = function (i) {
    var a = i.children,
      c = i.innerProps,
      u = i.innerRef,
      d = i.isMulti;
    return ee(
      "div",
      oe(
        {},
        Ve(i, "menuList", { "menu-list": !0, "menu-list--is-multi": d }),
        { ref: u },
        c
      ),
      a
    );
  },
  zd = function (i, a) {
    var c = i.theme,
      u = c.spacing.baseUnit,
      d = c.colors;
    return ie(
      { textAlign: "center" },
      a
        ? {}
        : {
            color: d.neutral40,
            padding: "".concat(u * 2, "px ").concat(u * 3, "px"),
          }
    );
  },
  Cg = zd,
  xg = zd,
  kg = function (i) {
    var a = i.children,
      c = a === void 0 ? "No options" : a,
      u = i.innerProps,
      d = Gt(i, fg);
    return ee(
      "div",
      oe(
        {},
        Ve(
          ie(ie({}, d), {}, { children: c, innerProps: u }),
          "noOptionsMessage",
          { "menu-notice": !0, "menu-notice--no-options": !0 }
        ),
        u
      ),
      c
    );
  },
  Eg = function (i) {
    var a = i.children,
      c = a === void 0 ? "Loading..." : a,
      u = i.innerProps,
      d = Gt(i, dg);
    return ee(
      "div",
      oe(
        {},
        Ve(
          ie(ie({}, d), {}, { children: c, innerProps: u }),
          "loadingMessage",
          { "menu-notice": !0, "menu-notice--loading": !0 }
        ),
        u
      ),
      c
    );
  },
  Og = function (i) {
    var a = i.rect,
      c = i.offset,
      u = i.position;
    return { left: a.left, position: u, top: c, width: a.width, zIndex: 1 };
  },
  Pg = function (i) {
    var a = i.appendTo,
      c = i.children,
      u = i.controlElement,
      d = i.innerProps,
      h = i.menuPlacement,
      g = i.menuPosition,
      p = b.useRef(null),
      v = b.useRef(null),
      S = b.useState(Vd(h)),
      w = Kt(S, 2),
      I = w[0],
      M = w[1],
      L = b.useMemo(function () {
        return { setPortalPlacement: M };
      }, []),
      _ = b.useState(null),
      O = Kt(_, 2),
      N = O[0],
      U = O[1],
      j = b.useCallback(
        function () {
          if (u) {
            var $ = ig(u),
              J = g === "fixed" ? 0 : window.pageYOffset,
              ge = $[I] + J;
            (ge !== (N == null ? void 0 : N.offset) ||
              $.left !== (N == null ? void 0 : N.rect.left) ||
              $.width !== (N == null ? void 0 : N.rect.width)) &&
              U({ offset: ge, rect: $ });
          }
        },
        [
          u,
          g,
          I,
          N == null ? void 0 : N.offset,
          N == null ? void 0 : N.rect.left,
          N == null ? void 0 : N.rect.width,
        ]
      );
    ua(
      function () {
        j();
      },
      [j]
    );
    var W = b.useCallback(
      function () {
        typeof v.current == "function" && (v.current(), (v.current = null)),
          u &&
            p.current &&
            (v.current = qv(u, p.current, j, {
              elementResize: "ResizeObserver" in window,
            }));
      },
      [u, j]
    );
    ua(
      function () {
        W();
      },
      [W]
    );
    var R = b.useCallback(
      function ($) {
        (p.current = $), W();
      },
      [W]
    );
    if ((!a && g !== "fixed") || !N) return null;
    var B = ee(
      "div",
      oe(
        { ref: R },
        Ve(
          ie(ie({}, i), {}, { offset: N.offset, position: g, rect: N.rect }),
          "menuPortal",
          { "menu-portal": !0 }
        ),
        d
      ),
      c
    );
    return ee(bd.Provider, { value: L }, a ? zv.createPortal(B, a) : B);
  },
  _g = function (i) {
    var a = i.isDisabled,
      c = i.isRtl;
    return {
      label: "container",
      direction: c ? "rtl" : void 0,
      pointerEvents: a ? "none" : void 0,
      position: "relative",
    };
  },
  Ig = function (i) {
    var a = i.children,
      c = i.innerProps,
      u = i.isDisabled,
      d = i.isRtl;
    return ee(
      "div",
      oe({}, Ve(i, "container", { "--is-disabled": u, "--is-rtl": d }), c),
      a
    );
  },
  Mg = function (i, a) {
    var c = i.theme.spacing,
      u = i.isMulti,
      d = i.hasValue,
      h = i.selectProps.controlShouldRenderValue;
    return ie(
      {
        alignItems: "center",
        display: u && d && h ? "flex" : "grid",
        flex: 1,
        flexWrap: "wrap",
        WebkitOverflowScrolling: "touch",
        position: "relative",
        overflow: "hidden",
      },
      a
        ? {}
        : {
            padding: ""
              .concat(c.baseUnit / 2, "px ")
              .concat(c.baseUnit * 2, "px"),
          }
    );
  },
  Rg = function (i) {
    var a = i.children,
      c = i.innerProps,
      u = i.isMulti,
      d = i.hasValue;
    return ee(
      "div",
      oe(
        {},
        Ve(i, "valueContainer", {
          "value-container": !0,
          "value-container--is-multi": u,
          "value-container--has-value": d,
        }),
        c
      ),
      a
    );
  },
  Tg = function () {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0,
    };
  },
  Lg = function (i) {
    var a = i.children,
      c = i.innerProps;
    return ee(
      "div",
      oe({}, Ve(i, "indicatorsContainer", { indicators: !0 }), c),
      a
    );
  },
  Wf,
  Ng = ["size"],
  Dg = ["innerProps", "isRtl", "size"],
  Fg = {
    name: "8mmkcg",
    styles:
      "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
  },
  jd = function (i) {
    var a = i.size,
      c = Gt(i, Ng);
    return ee(
      "svg",
      oe(
        {
          height: a,
          width: a,
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          focusable: "false",
          css: Fg,
        },
        c
      )
    );
  },
  wa = function (i) {
    return ee(
      jd,
      oe({ size: 20 }, i),
      ee("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      })
    );
  },
  Ad = function (i) {
    return ee(
      jd,
      oe({ size: 20 }, i),
      ee("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      })
    );
  },
  $d = function (i, a) {
    var c = i.isFocused,
      u = i.theme,
      d = u.spacing.baseUnit,
      h = u.colors;
    return ie(
      {
        label: "indicatorContainer",
        display: "flex",
        transition: "color 150ms",
      },
      a
        ? {}
        : {
            color: c ? h.neutral60 : h.neutral20,
            padding: d * 2,
            ":hover": { color: c ? h.neutral80 : h.neutral40 },
          }
    );
  },
  Vg = $d,
  bg = function (i) {
    var a = i.children,
      c = i.innerProps;
    return ee(
      "div",
      oe(
        {},
        Ve(i, "dropdownIndicator", { indicator: !0, "dropdown-indicator": !0 }),
        c
      ),
      a || ee(Ad, null)
    );
  },
  zg = $d,
  jg = function (i) {
    var a = i.children,
      c = i.innerProps;
    return ee(
      "div",
      oe(
        {},
        Ve(i, "clearIndicator", { indicator: !0, "clear-indicator": !0 }),
        c
      ),
      a || ee(wa, null)
    );
  },
  Ag = function (i, a) {
    var c = i.isDisabled,
      u = i.theme,
      d = u.spacing.baseUnit,
      h = u.colors;
    return ie(
      { label: "indicatorSeparator", alignSelf: "stretch", width: 1 },
      a
        ? {}
        : {
            backgroundColor: c ? h.neutral10 : h.neutral20,
            marginBottom: d * 2,
            marginTop: d * 2,
          }
    );
  },
  $g = function (i) {
    var a = i.innerProps;
    return ee(
      "span",
      oe({}, a, Ve(i, "indicatorSeparator", { "indicator-separator": !0 }))
    );
  },
  Ug = Vv(
    Wf ||
      (Wf = bv([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ]))
  ),
  Hg = function (i, a) {
    var c = i.isFocused,
      u = i.size,
      d = i.theme,
      h = d.colors,
      g = d.spacing.baseUnit;
    return ie(
      {
        label: "loadingIndicator",
        display: "flex",
        transition: "color 150ms",
        alignSelf: "center",
        fontSize: u,
        lineHeight: 1,
        marginRight: u,
        textAlign: "center",
        verticalAlign: "middle",
      },
      a ? {} : { color: c ? h.neutral60 : h.neutral20, padding: g * 2 }
    );
  },
  Qu = function (i) {
    var a = i.delay,
      c = i.offset;
    return ee("span", {
      css: va(
        {
          animation: ""
            .concat(Ug, " 1s ease-in-out ")
            .concat(a, "ms infinite;"),
          backgroundColor: "currentColor",
          borderRadius: "1em",
          display: "inline-block",
          marginLeft: c ? "1em" : void 0,
          height: "1em",
          verticalAlign: "top",
          width: "1em",
        },
        "",
        ""
      ),
    });
  },
  Bg = function (i) {
    var a = i.innerProps,
      c = i.isRtl,
      u = i.size,
      d = u === void 0 ? 4 : u,
      h = Gt(i, Dg);
    return ee(
      "div",
      oe(
        {},
        Ve(
          ie(ie({}, h), {}, { innerProps: a, isRtl: c, size: d }),
          "loadingIndicator",
          { indicator: !0, "loading-indicator": !0 }
        ),
        a
      ),
      ee(Qu, { delay: 0, offset: c }),
      ee(Qu, { delay: 160, offset: !0 }),
      ee(Qu, { delay: 320, offset: !c })
    );
  },
  Wg = function (i, a) {
    var c = i.isDisabled,
      u = i.isFocused,
      d = i.theme,
      h = d.colors,
      g = d.borderRadius,
      p = d.spacing;
    return ie(
      {
        label: "control",
        alignItems: "center",
        cursor: "default",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        minHeight: p.controlHeight,
        outline: "0 !important",
        position: "relative",
        transition: "all 100ms",
      },
      a
        ? {}
        : {
            backgroundColor: c ? h.neutral5 : h.neutral0,
            borderColor: c ? h.neutral10 : u ? h.primary : h.neutral20,
            borderRadius: g,
            borderStyle: "solid",
            borderWidth: 1,
            boxShadow: u ? "0 0 0 1px ".concat(h.primary) : void 0,
            "&:hover": { borderColor: u ? h.primary : h.neutral30 },
          }
    );
  },
  Qg = function (i) {
    var a = i.children,
      c = i.isDisabled,
      u = i.isFocused,
      d = i.innerRef,
      h = i.innerProps,
      g = i.menuIsOpen;
    return ee(
      "div",
      oe(
        { ref: d },
        Ve(i, "control", {
          control: !0,
          "control--is-disabled": c,
          "control--is-focused": u,
          "control--menu-is-open": g,
        }),
        h,
        { "aria-disabled": c || void 0 }
      ),
      a
    );
  },
  Kg = Qg,
  Yg = ["data"],
  Gg = function (i, a) {
    var c = i.theme.spacing;
    return a
      ? {}
      : { paddingBottom: c.baseUnit * 2, paddingTop: c.baseUnit * 2 };
  },
  Xg = function (i) {
    var a = i.children,
      c = i.cx,
      u = i.getStyles,
      d = i.getClassNames,
      h = i.Heading,
      g = i.headingProps,
      p = i.innerProps,
      v = i.label,
      S = i.theme,
      w = i.selectProps;
    return ee(
      "div",
      oe({}, Ve(i, "group", { group: !0 }), p),
      ee(
        h,
        oe({}, g, {
          selectProps: w,
          theme: S,
          getStyles: u,
          getClassNames: d,
          cx: c,
        }),
        v
      ),
      ee("div", null, a)
    );
  },
  qg = function (i, a) {
    var c = i.theme,
      u = c.colors,
      d = c.spacing;
    return ie(
      { label: "group", cursor: "default", display: "block" },
      a
        ? {}
        : {
            color: u.neutral40,
            fontSize: "75%",
            fontWeight: 500,
            marginBottom: "0.25em",
            paddingLeft: d.baseUnit * 3,
            paddingRight: d.baseUnit * 3,
            textTransform: "uppercase",
          }
    );
  },
  Zg = function (i) {
    var a = Nd(i);
    a.data;
    var c = Gt(a, Yg);
    return ee("div", oe({}, Ve(i, "groupHeading", { "group-heading": !0 }), c));
  },
  Jg = Xg,
  ey = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
  ty = function (i, a) {
    var c = i.isDisabled,
      u = i.value,
      d = i.theme,
      h = d.spacing,
      g = d.colors;
    return ie(
      ie(
        {
          visibility: c ? "hidden" : "visible",
          transform: u ? "translateZ(0)" : "",
        },
        ny
      ),
      a
        ? {}
        : {
            margin: h.baseUnit / 2,
            paddingBottom: h.baseUnit / 2,
            paddingTop: h.baseUnit / 2,
            color: g.neutral80,
          }
    );
  },
  Ud = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  ny = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": ie(
      {
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre",
      },
      Ud
    ),
  },
  ry = function (i) {
    return ie(
      {
        label: "input",
        color: "inherit",
        background: 0,
        opacity: i ? 0 : 1,
        width: "100%",
      },
      Ud
    );
  },
  iy = function (i) {
    var a = i.cx,
      c = i.value,
      u = Nd(i),
      d = u.innerRef,
      h = u.isDisabled,
      g = u.isHidden,
      p = u.inputClassName,
      v = Gt(u, ey);
    return ee(
      "div",
      oe({}, Ve(i, "input", { "input-container": !0 }), {
        "data-value": c || "",
      }),
      ee(
        "input",
        oe(
          { className: a({ input: !0 }, p), ref: d, style: ry(g), disabled: h },
          v
        )
      )
    );
  },
  oy = iy,
  ly = function (i, a) {
    var c = i.theme,
      u = c.spacing,
      d = c.borderRadius,
      h = c.colors;
    return ie(
      { label: "multiValue", display: "flex", minWidth: 0 },
      a
        ? {}
        : {
            backgroundColor: h.neutral10,
            borderRadius: d / 2,
            margin: u.baseUnit / 2,
          }
    );
  },
  uy = function (i, a) {
    var c = i.theme,
      u = c.borderRadius,
      d = c.colors,
      h = i.cropWithEllipsis;
    return ie(
      {
        overflow: "hidden",
        textOverflow: h || h === void 0 ? "ellipsis" : void 0,
        whiteSpace: "nowrap",
      },
      a
        ? {}
        : {
            borderRadius: u / 2,
            color: d.neutral80,
            fontSize: "85%",
            padding: 3,
            paddingLeft: 6,
          }
    );
  },
  ay = function (i, a) {
    var c = i.theme,
      u = c.spacing,
      d = c.borderRadius,
      h = c.colors,
      g = i.isFocused;
    return ie(
      { alignItems: "center", display: "flex" },
      a
        ? {}
        : {
            borderRadius: d / 2,
            backgroundColor: g ? h.dangerLight : void 0,
            paddingLeft: u.baseUnit,
            paddingRight: u.baseUnit,
            ":hover": { backgroundColor: h.dangerLight, color: h.danger },
          }
    );
  },
  Hd = function (i) {
    var a = i.children,
      c = i.innerProps;
    return ee("div", c, a);
  },
  sy = Hd,
  cy = Hd;
function fy(o) {
  var i = o.children,
    a = o.innerProps;
  return ee("div", oe({ role: "button" }, a), i || ee(wa, { size: 14 }));
}
var dy = function (i) {
    var a = i.children,
      c = i.components,
      u = i.data,
      d = i.innerProps,
      h = i.isDisabled,
      g = i.removeProps,
      p = i.selectProps,
      v = c.Container,
      S = c.Label,
      w = c.Remove;
    return ee(
      v,
      {
        data: u,
        innerProps: ie(
          ie(
            {},
            Ve(i, "multiValue", {
              "multi-value": !0,
              "multi-value--is-disabled": h,
            })
          ),
          d
        ),
        selectProps: p,
      },
      ee(
        S,
        {
          data: u,
          innerProps: ie(
            {},
            Ve(i, "multiValueLabel", { "multi-value__label": !0 })
          ),
          selectProps: p,
        },
        a
      ),
      ee(w, {
        data: u,
        innerProps: ie(
          ie({}, Ve(i, "multiValueRemove", { "multi-value__remove": !0 })),
          {},
          { "aria-label": "Remove ".concat(a || "option") },
          g
        ),
        selectProps: p,
      })
    );
  },
  py = dy,
  hy = function (i, a) {
    var c = i.isDisabled,
      u = i.isFocused,
      d = i.isSelected,
      h = i.theme,
      g = h.spacing,
      p = h.colors;
    return ie(
      {
        label: "option",
        cursor: "default",
        display: "block",
        fontSize: "inherit",
        width: "100%",
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      },
      a
        ? {}
        : {
            backgroundColor: d ? p.primary : u ? p.primary25 : "transparent",
            color: c ? p.neutral20 : d ? p.neutral0 : "inherit",
            padding: ""
              .concat(g.baseUnit * 2, "px ")
              .concat(g.baseUnit * 3, "px"),
            ":active": {
              backgroundColor: c ? void 0 : d ? p.primary : p.primary50,
            },
          }
    );
  },
  my = function (i) {
    var a = i.children,
      c = i.isDisabled,
      u = i.isFocused,
      d = i.isSelected,
      h = i.innerRef,
      g = i.innerProps;
    return ee(
      "div",
      oe(
        {},
        Ve(i, "option", {
          option: !0,
          "option--is-disabled": c,
          "option--is-focused": u,
          "option--is-selected": d,
        }),
        { ref: h, "aria-disabled": c },
        g
      ),
      a
    );
  },
  vy = my,
  gy = function (i, a) {
    var c = i.theme,
      u = c.spacing,
      d = c.colors;
    return ie(
      { label: "placeholder", gridArea: "1 / 1 / 2 / 3" },
      a
        ? {}
        : {
            color: d.neutral50,
            marginLeft: u.baseUnit / 2,
            marginRight: u.baseUnit / 2,
          }
    );
  },
  yy = function (i) {
    var a = i.children,
      c = i.innerProps;
    return ee("div", oe({}, Ve(i, "placeholder", { placeholder: !0 }), c), a);
  },
  Sy = yy,
  wy = function (i, a) {
    var c = i.isDisabled,
      u = i.theme,
      d = u.spacing,
      h = u.colors;
    return ie(
      {
        label: "singleValue",
        gridArea: "1 / 1 / 2 / 3",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      a
        ? {}
        : {
            color: c ? h.neutral40 : h.neutral80,
            marginLeft: d.baseUnit / 2,
            marginRight: d.baseUnit / 2,
          }
    );
  },
  Cy = function (i) {
    var a = i.children,
      c = i.isDisabled,
      u = i.innerProps;
    return ee(
      "div",
      oe(
        {},
        Ve(i, "singleValue", {
          "single-value": !0,
          "single-value--is-disabled": c,
        }),
        u
      ),
      a
    );
  },
  xy = Cy,
  ky = {
    ClearIndicator: jg,
    Control: Kg,
    DropdownIndicator: bg,
    DownChevron: Ad,
    CrossIcon: wa,
    Group: Jg,
    GroupHeading: Zg,
    IndicatorsContainer: Lg,
    IndicatorSeparator: $g,
    Input: oy,
    LoadingIndicator: Bg,
    Menu: yg,
    MenuList: wg,
    MenuPortal: Pg,
    LoadingMessage: Eg,
    NoOptionsMessage: kg,
    MultiValue: py,
    MultiValueContainer: sy,
    MultiValueLabel: cy,
    MultiValueRemove: fy,
    Option: vy,
    Placeholder: Sy,
    SelectContainer: Ig,
    SingleValue: xy,
    ValueContainer: Rg,
  },
  Ey = function (i) {
    return ie(ie({}, ky), i.components);
  },
  Qf =
    Number.isNaN ||
    function (i) {
      return typeof i == "number" && i !== i;
    };
function Oy(o, i) {
  return !!(o === i || (Qf(o) && Qf(i)));
}
function Py(o, i) {
  if (o.length !== i.length) return !1;
  for (var a = 0; a < o.length; a++) if (!Oy(o[a], i[a])) return !1;
  return !0;
}
function _y(o, i) {
  i === void 0 && (i = Py);
  var a = null;
  function c() {
    for (var u = [], d = 0; d < arguments.length; d++) u[d] = arguments[d];
    if (a && a.lastThis === this && i(u, a.lastArgs)) return a.lastResult;
    var h = o.apply(this, u);
    return (a = { lastResult: h, lastArgs: u, lastThis: this }), h;
  }
  return (
    (c.clear = function () {
      a = null;
    }),
    c
  );
}
var Iy = {
    name: "7pg0cj-a11yText",
    styles:
      "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
  },
  My = function (i) {
    return ee("span", oe({ css: Iy }, i));
  },
  Kf = My,
  Ry = {
    guidance: function (i) {
      var a = i.isSearchable,
        c = i.isMulti,
        u = i.tabSelectsValue,
        d = i.context,
        h = i.isInitialFocus;
      switch (d) {
        case "menu":
          return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(
            u ? ", press Tab to select the option and exit the menu" : "",
            "."
          );
        case "input":
          return h
            ? ""
                .concat(i["aria-label"] || "Select", " is focused ")
                .concat(
                  a ? ",type to refine list" : "",
                  ", press Down to open the menu, "
                )
                .concat(c ? " press left to focus selected values" : "")
            : "";
        case "value":
          return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
        default:
          return "";
      }
    },
    onChange: function (i) {
      var a = i.action,
        c = i.label,
        u = c === void 0 ? "" : c,
        d = i.labels,
        h = i.isDisabled;
      switch (a) {
        case "deselect-option":
        case "pop-value":
        case "remove-value":
          return "option ".concat(u, ", deselected.");
        case "clear":
          return "All selected options have been cleared.";
        case "initial-input-focus":
          return "option"
            .concat(d.length > 1 ? "s" : "", " ")
            .concat(d.join(","), ", selected.");
        case "select-option":
          return h
            ? "option ".concat(u, " is disabled. Select another option.")
            : "option ".concat(u, ", selected.");
        default:
          return "";
      }
    },
    onFocus: function (i) {
      var a = i.context,
        c = i.focused,
        u = i.options,
        d = i.label,
        h = d === void 0 ? "" : d,
        g = i.selectValue,
        p = i.isDisabled,
        v = i.isSelected,
        S = i.isAppleDevice,
        w = function (_, O) {
          return _ && _.length
            ? "".concat(_.indexOf(O) + 1, " of ").concat(_.length)
            : "";
        };
      if (a === "value" && g)
        return "value ".concat(h, " focused, ").concat(w(g, c), ".");
      if (a === "menu" && S) {
        var I = p ? " disabled" : "",
          M = "".concat(v ? " selected" : "").concat(I);
        return "".concat(h).concat(M, ", ").concat(w(u, c), ".");
      }
      return "";
    },
    onFilter: function (i) {
      var a = i.inputValue,
        c = i.resultsMessage;
      return "".concat(c).concat(a ? " for search term " + a : "", ".");
    },
  },
  Ty = function (i) {
    var a = i.ariaSelection,
      c = i.focusedOption,
      u = i.focusedValue,
      d = i.focusableOptions,
      h = i.isFocused,
      g = i.selectValue,
      p = i.selectProps,
      v = i.id,
      S = i.isAppleDevice,
      w = p.ariaLiveMessages,
      I = p.getOptionLabel,
      M = p.inputValue,
      L = p.isMulti,
      _ = p.isOptionDisabled,
      O = p.isSearchable,
      N = p.menuIsOpen,
      U = p.options,
      j = p.screenReaderStatus,
      W = p.tabSelectsValue,
      R = p.isLoading,
      B = p["aria-label"],
      $ = p["aria-live"],
      J = b.useMemo(
        function () {
          return ie(ie({}, Ry), w || {});
        },
        [w]
      ),
      ge = b.useMemo(
        function () {
          var Ce = "";
          if (a && J.onChange) {
            var pe = a.option,
              he = a.options,
              A = a.removedValue,
              Z = a.removedValues,
              H = a.value,
              x = function (ce) {
                return Array.isArray(ce) ? null : ce;
              },
              T = A || pe || x(H),
              te = T ? I(T) : "",
              le = he || Z || void 0,
              se = le ? le.map(I) : [],
              ae = ie({ isDisabled: T && _(T, g), label: te, labels: se }, a);
            Ce = J.onChange(ae);
          }
          return Ce;
        },
        [a, J, _, g, I]
      ),
      Pe = b.useMemo(
        function () {
          var Ce = "",
            pe = c || u,
            he = !!(c && g && g.includes(c));
          if (pe && J.onFocus) {
            var A = {
              focused: pe,
              label: I(pe),
              isDisabled: _(pe, g),
              isSelected: he,
              options: d,
              context: pe === c ? "menu" : "value",
              selectValue: g,
              isAppleDevice: S,
            };
            Ce = J.onFocus(A);
          }
          return Ce;
        },
        [c, u, I, _, J, d, g, S]
      ),
      De = b.useMemo(
        function () {
          var Ce = "";
          if (N && U.length && !R && J.onFilter) {
            var pe = j({ count: d.length });
            Ce = J.onFilter({ inputValue: M, resultsMessage: pe });
          }
          return Ce;
        },
        [d, M, N, J, U, j, R]
      ),
      Ee = (a == null ? void 0 : a.action) === "initial-input-focus",
      Te = b.useMemo(
        function () {
          var Ce = "";
          if (J.guidance) {
            var pe = u ? "value" : N ? "menu" : "input";
            Ce = J.guidance({
              "aria-label": B,
              context: pe,
              isDisabled: c && _(c, g),
              isMulti: L,
              isSearchable: O,
              tabSelectsValue: W,
              isInitialFocus: Ee,
            });
          }
          return Ce;
        },
        [B, c, u, L, _, O, N, J, g, W, Ee]
      ),
      be = ee(
        b.Fragment,
        null,
        ee("span", { id: "aria-selection" }, ge),
        ee("span", { id: "aria-focused" }, Pe),
        ee("span", { id: "aria-results" }, De),
        ee("span", { id: "aria-guidance" }, Te)
      );
    return ee(
      b.Fragment,
      null,
      ee(Kf, { id: v }, Ee && be),
      ee(
        Kf,
        {
          "aria-live": $,
          "aria-atomic": "false",
          "aria-relevant": "additions text",
          role: "log",
        },
        h && !Ee && be
      )
    );
  },
  Ly = Ty,
  aa = [
    { base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" },
    { base: "AA", letters: "Ꜳ" },
    { base: "AE", letters: "ÆǼǢ" },
    { base: "AO", letters: "Ꜵ" },
    { base: "AU", letters: "Ꜷ" },
    { base: "AV", letters: "ꜸꜺ" },
    { base: "AY", letters: "Ꜽ" },
    { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" },
    { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" },
    { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" },
    { base: "DZ", letters: "ǱǄ" },
    { base: "Dz", letters: "ǲǅ" },
    { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" },
    { base: "F", letters: "FⒻＦḞƑꝻ" },
    { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" },
    { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" },
    { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" },
    { base: "J", letters: "JⒿＪĴɈ" },
    { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" },
    { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" },
    { base: "LJ", letters: "Ǉ" },
    { base: "Lj", letters: "ǈ" },
    { base: "M", letters: "MⓂＭḾṀṂⱮƜ" },
    { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" },
    { base: "NJ", letters: "Ǌ" },
    { base: "Nj", letters: "ǋ" },
    { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" },
    { base: "OI", letters: "Ƣ" },
    { base: "OO", letters: "Ꝏ" },
    { base: "OU", letters: "Ȣ" },
    { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" },
    { base: "Q", letters: "QⓆＱꝖꝘɊ" },
    { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" },
    { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" },
    { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" },
    { base: "TZ", letters: "Ꜩ" },
    { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" },
    { base: "V", letters: "VⓋＶṼṾƲꝞɅ" },
    { base: "VY", letters: "Ꝡ" },
    { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" },
    { base: "X", letters: "XⓍＸẊẌ" },
    { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" },
    { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" },
    { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" },
    { base: "aa", letters: "ꜳ" },
    { base: "ae", letters: "æǽǣ" },
    { base: "ao", letters: "ꜵ" },
    { base: "au", letters: "ꜷ" },
    { base: "av", letters: "ꜹꜻ" },
    { base: "ay", letters: "ꜽ" },
    { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" },
    { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" },
    { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" },
    { base: "dz", letters: "ǳǆ" },
    { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" },
    { base: "f", letters: "fⓕｆḟƒꝼ" },
    { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" },
    { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" },
    { base: "hv", letters: "ƕ" },
    { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" },
    { base: "j", letters: "jⓙｊĵǰɉ" },
    { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" },
    { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" },
    { base: "lj", letters: "ǉ" },
    { base: "m", letters: "mⓜｍḿṁṃɱɯ" },
    { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" },
    { base: "nj", letters: "ǌ" },
    { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" },
    { base: "oi", letters: "ƣ" },
    { base: "ou", letters: "ȣ" },
    { base: "oo", letters: "ꝏ" },
    { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" },
    { base: "q", letters: "qⓠｑɋꝗꝙ" },
    { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" },
    { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" },
    { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" },
    { base: "tz", letters: "ꜩ" },
    { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" },
    { base: "v", letters: "vⓥｖṽṿʋꝟʌ" },
    { base: "vy", letters: "ꝡ" },
    { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" },
    { base: "x", letters: "xⓧｘẋẍ" },
    { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" },
    { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" },
  ],
  Ny = new RegExp(
    "[" +
      aa
        .map(function (o) {
          return o.letters;
        })
        .join("") +
      "]",
    "g"
  ),
  Bd = {};
for (var Ku = 0; Ku < aa.length; Ku++)
  for (var Yu = aa[Ku], Gu = 0; Gu < Yu.letters.length; Gu++)
    Bd[Yu.letters[Gu]] = Yu.base;
var Wd = function (i) {
    return i.replace(Ny, function (a) {
      return Bd[a];
    });
  },
  Dy = _y(Wd),
  Yf = function (i) {
    return i.replace(/^\s+|\s+$/g, "");
  },
  Fy = function (i) {
    return "".concat(i.label, " ").concat(i.value);
  },
  Vy = function (i) {
    return function (a, c) {
      if (a.data.__isNew__) return !0;
      var u = ie(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: Fy,
            trim: !0,
            matchFrom: "any",
          },
          i
        ),
        d = u.ignoreCase,
        h = u.ignoreAccents,
        g = u.stringify,
        p = u.trim,
        v = u.matchFrom,
        S = p ? Yf(c) : c,
        w = p ? Yf(g(a)) : g(a);
      return (
        d && ((S = S.toLowerCase()), (w = w.toLowerCase())),
        h && ((S = Dy(S)), (w = Wd(w))),
        v === "start" ? w.substr(0, S.length) === S : w.indexOf(S) > -1
      );
    };
  },
  by = ["innerRef"];
function zy(o) {
  var i = o.innerRef,
    a = Gt(o, by),
    c = cg(a, "onExited", "in", "enter", "exit", "appear");
  return ee(
    "input",
    oe({ ref: i }, c, {
      css: va(
        {
          label: "dummyInput",
          background: 0,
          border: 0,
          caretColor: "transparent",
          fontSize: "inherit",
          gridArea: "1 / 1 / 2 / 3",
          outline: 0,
          padding: 0,
          width: 1,
          color: "transparent",
          left: -100,
          opacity: 0,
          position: "relative",
          transform: "scale(.01)",
        },
        "",
        ""
      ),
    })
  );
}
var jy = function (i) {
  i.cancelable && i.preventDefault(), i.stopPropagation();
};
function Ay(o) {
  var i = o.isEnabled,
    a = o.onBottomArrive,
    c = o.onBottomLeave,
    u = o.onTopArrive,
    d = o.onTopLeave,
    h = b.useRef(!1),
    g = b.useRef(!1),
    p = b.useRef(0),
    v = b.useRef(null),
    S = b.useCallback(
      function (O, N) {
        if (v.current !== null) {
          var U = v.current,
            j = U.scrollTop,
            W = U.scrollHeight,
            R = U.clientHeight,
            B = v.current,
            $ = N > 0,
            J = W - R - j,
            ge = !1;
          J > N && h.current && (c && c(O), (h.current = !1)),
            $ && g.current && (d && d(O), (g.current = !1)),
            $ && N > J
              ? (a && !h.current && a(O),
                (B.scrollTop = W),
                (ge = !0),
                (h.current = !0))
              : !$ &&
                -N > j &&
                (u && !g.current && u(O),
                (B.scrollTop = 0),
                (ge = !0),
                (g.current = !0)),
            ge && jy(O);
        }
      },
      [a, c, u, d]
    ),
    w = b.useCallback(
      function (O) {
        S(O, O.deltaY);
      },
      [S]
    ),
    I = b.useCallback(function (O) {
      p.current = O.changedTouches[0].clientY;
    }, []),
    M = b.useCallback(
      function (O) {
        var N = p.current - O.changedTouches[0].clientY;
        S(O, N);
      },
      [S]
    ),
    L = b.useCallback(
      function (O) {
        if (O) {
          var N = ug ? { passive: !1 } : !1;
          O.addEventListener("wheel", w, N),
            O.addEventListener("touchstart", I, N),
            O.addEventListener("touchmove", M, N);
        }
      },
      [M, I, w]
    ),
    _ = b.useCallback(
      function (O) {
        O &&
          (O.removeEventListener("wheel", w, !1),
          O.removeEventListener("touchstart", I, !1),
          O.removeEventListener("touchmove", M, !1));
      },
      [M, I, w]
    );
  return (
    b.useEffect(
      function () {
        if (i) {
          var O = v.current;
          return (
            L(O),
            function () {
              _(O);
            }
          );
        }
      },
      [i, L, _]
    ),
    function (O) {
      v.current = O;
    }
  );
}
var Gf = ["boxSizing", "height", "overflow", "paddingRight", "position"],
  Xf = {
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    height: "100%",
  };
function qf(o) {
  o.cancelable && o.preventDefault();
}
function Zf(o) {
  o.stopPropagation();
}
function Jf() {
  var o = this.scrollTop,
    i = this.scrollHeight,
    a = o + this.offsetHeight;
  o === 0 ? (this.scrollTop = 1) : a === i && (this.scrollTop = o - 1);
}
function ed() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var td = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Zr = 0,
  or = { capture: !1, passive: !1 };
function $y(o) {
  var i = o.isEnabled,
    a = o.accountForScrollbars,
    c = a === void 0 ? !0 : a,
    u = b.useRef({}),
    d = b.useRef(null),
    h = b.useCallback(
      function (p) {
        if (td) {
          var v = document.body,
            S = v && v.style;
          if (
            (c &&
              Gf.forEach(function (L) {
                var _ = S && S[L];
                u.current[L] = _;
              }),
            c && Zr < 1)
          ) {
            var w = parseInt(u.current.paddingRight, 10) || 0,
              I = document.body ? document.body.clientWidth : 0,
              M = window.innerWidth - I + w || 0;
            Object.keys(Xf).forEach(function (L) {
              var _ = Xf[L];
              S && (S[L] = _);
            }),
              S && (S.paddingRight = "".concat(M, "px"));
          }
          v &&
            ed() &&
            (v.addEventListener("touchmove", qf, or),
            p &&
              (p.addEventListener("touchstart", Jf, or),
              p.addEventListener("touchmove", Zf, or))),
            (Zr += 1);
        }
      },
      [c]
    ),
    g = b.useCallback(
      function (p) {
        if (td) {
          var v = document.body,
            S = v && v.style;
          (Zr = Math.max(Zr - 1, 0)),
            c &&
              Zr < 1 &&
              Gf.forEach(function (w) {
                var I = u.current[w];
                S && (S[w] = I);
              }),
            v &&
              ed() &&
              (v.removeEventListener("touchmove", qf, or),
              p &&
                (p.removeEventListener("touchstart", Jf, or),
                p.removeEventListener("touchmove", Zf, or)));
        }
      },
      [c]
    );
  return (
    b.useEffect(
      function () {
        if (i) {
          var p = d.current;
          return (
            h(p),
            function () {
              g(p);
            }
          );
        }
      },
      [i, h, g]
    ),
    function (p) {
      d.current = p;
    }
  );
}
var Uy = function (i) {
    var a = i.target;
    return (
      a.ownerDocument.activeElement && a.ownerDocument.activeElement.blur()
    );
  },
  Hy = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0",
  };
function By(o) {
  var i = o.children,
    a = o.lockEnabled,
    c = o.captureEnabled,
    u = c === void 0 ? !0 : c,
    d = o.onBottomArrive,
    h = o.onBottomLeave,
    g = o.onTopArrive,
    p = o.onTopLeave,
    v = Ay({
      isEnabled: u,
      onBottomArrive: d,
      onBottomLeave: h,
      onTopArrive: g,
      onTopLeave: p,
    }),
    S = $y({ isEnabled: a }),
    w = function (M) {
      v(M), S(M);
    };
  return ee(b.Fragment, null, a && ee("div", { onClick: Uy, css: Hy }), i(w));
}
var Wy = {
    name: "1a0ro4n-requiredInput",
    styles:
      "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%",
  },
  Qy = function (i) {
    var a = i.name,
      c = i.onFocus;
    return ee("input", {
      required: !0,
      name: a,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: c,
      css: Wy,
      value: "",
      onChange: function () {},
    });
  },
  Ky = Qy;
function Ca(o) {
  var i;
  return typeof window < "u" && window.navigator != null
    ? o.test(
        ((i = window.navigator.userAgentData) === null || i === void 0
          ? void 0
          : i.platform) || window.navigator.platform
      )
    : !1;
}
function Yy() {
  return Ca(/^iPhone/i);
}
function Qd() {
  return Ca(/^Mac/i);
}
function Gy() {
  return Ca(/^iPad/i) || (Qd() && navigator.maxTouchPoints > 1);
}
function Xy() {
  return Yy() || Gy();
}
function qy() {
  return Qd() || Xy();
}
var Zy = function (i) {
    return i.label;
  },
  Jy = function (i) {
    return i.label;
  },
  e0 = function (i) {
    return i.value;
  },
  t0 = function (i) {
    return !!i.isDisabled;
  },
  n0 = {
    clearIndicator: zg,
    container: _g,
    control: Wg,
    dropdownIndicator: Vg,
    group: Gg,
    groupHeading: qg,
    indicatorsContainer: Tg,
    indicatorSeparator: Ag,
    input: ty,
    loadingIndicator: Hg,
    loadingMessage: xg,
    menu: mg,
    menuList: Sg,
    menuPortal: Og,
    multiValue: ly,
    multiValueLabel: uy,
    multiValueRemove: ay,
    noOptionsMessage: Cg,
    option: hy,
    placeholder: gy,
    singleValue: wy,
    valueContainer: Mg,
  },
  r0 = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)",
  },
  i0 = 4,
  Kd = 4,
  o0 = 38,
  l0 = Kd * 2,
  u0 = { baseUnit: Kd, controlHeight: o0, menuGutter: l0 },
  Xu = { borderRadius: i0, colors: r0, spacing: u0 },
  a0 = {
    "aria-live": "polite",
    backspaceRemovesValue: !0,
    blurInputOnSelect: Bf(),
    captureMenuScroll: !Bf(),
    classNames: {},
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: Vy(),
    formatGroupLabel: Zy,
    getOptionLabel: Jy,
    getOptionValue: e0,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: t0,
    loadingMessage: function () {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !og(),
    noOptionsMessage: function () {
      return "No options";
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function (i) {
      var a = i.count;
      return "".concat(a, " result").concat(a !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
    unstyled: !1,
  };
function nd(o, i, a, c) {
  var u = Xd(o, i, a),
    d = qd(o, i, a),
    h = Gd(o, i),
    g = Vo(o, i);
  return {
    type: "option",
    data: i,
    isDisabled: u,
    isSelected: d,
    label: h,
    value: g,
    index: c,
  };
}
function _o(o, i) {
  return o.options
    .map(function (a, c) {
      if ("options" in a) {
        var u = a.options
          .map(function (h, g) {
            return nd(o, h, i, g);
          })
          .filter(function (h) {
            return id(o, h);
          });
        return u.length > 0
          ? { type: "group", data: a, options: u, index: c }
          : void 0;
      }
      var d = nd(o, a, i, c);
      return id(o, d) ? d : void 0;
    })
    .filter(ag);
}
function Yd(o) {
  return o.reduce(function (i, a) {
    return (
      a.type === "group"
        ? i.push.apply(
            i,
            fa(
              a.options.map(function (c) {
                return c.data;
              })
            )
          )
        : i.push(a.data),
      i
    );
  }, []);
}
function rd(o, i) {
  return o.reduce(function (a, c) {
    return (
      c.type === "group"
        ? a.push.apply(
            a,
            fa(
              c.options.map(function (u) {
                return {
                  data: u.data,
                  id: "".concat(i, "-").concat(c.index, "-").concat(u.index),
                };
              })
            )
          )
        : a.push({ data: c.data, id: "".concat(i, "-").concat(c.index) }),
      a
    );
  }, []);
}
function s0(o, i) {
  return Yd(_o(o, i));
}
function id(o, i) {
  var a = o.inputValue,
    c = a === void 0 ? "" : a,
    u = i.data,
    d = i.isSelected,
    h = i.label,
    g = i.value;
  return (!Jd(o) || !d) && Zd(o, { label: h, value: g, data: u }, c);
}
function c0(o, i) {
  var a = o.focusedValue,
    c = o.selectValue,
    u = c.indexOf(a);
  if (u > -1) {
    var d = i.indexOf(a);
    if (d > -1) return a;
    if (u < i.length) return i[u];
  }
  return null;
}
function f0(o, i) {
  var a = o.focusedOption;
  return a && i.indexOf(a) > -1 ? a : i[0];
}
var qu = function (i, a) {
    var c,
      u =
        (c = i.find(function (d) {
          return d.data === a;
        })) === null || c === void 0
          ? void 0
          : c.id;
    return u || null;
  },
  Gd = function (i, a) {
    return i.getOptionLabel(a);
  },
  Vo = function (i, a) {
    return i.getOptionValue(a);
  };
function Xd(o, i, a) {
  return typeof o.isOptionDisabled == "function"
    ? o.isOptionDisabled(i, a)
    : !1;
}
function qd(o, i, a) {
  if (a.indexOf(i) > -1) return !0;
  if (typeof o.isOptionSelected == "function") return o.isOptionSelected(i, a);
  var c = Vo(o, i);
  return a.some(function (u) {
    return Vo(o, u) === c;
  });
}
function Zd(o, i, a) {
  return o.filterOption ? o.filterOption(i, a) : !0;
}
var Jd = function (i) {
    var a = i.hideSelectedOptions,
      c = i.isMulti;
    return a === void 0 ? c : a;
  },
  d0 = 1,
  ep = (function (o) {
    Nm(a, o);
    var i = Vm(a);
    function a(c) {
      var u;
      if (
        (Tm(this, a),
        (u = i.call(this, c)),
        (u.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedOptionId: null,
          focusableOptionsWithIds: [],
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
          instancePrefix: "",
        }),
        (u.blockOptionHover = !1),
        (u.isComposing = !1),
        (u.commonProps = void 0),
        (u.initialTouchX = 0),
        (u.initialTouchY = 0),
        (u.openAfterFocus = !1),
        (u.scrollToFocusedOptionOnUpdate = !1),
        (u.userIsDragging = void 0),
        (u.isAppleDevice = qy()),
        (u.controlRef = null),
        (u.getControlRef = function (p) {
          u.controlRef = p;
        }),
        (u.focusedOptionRef = null),
        (u.getFocusedOptionRef = function (p) {
          u.focusedOptionRef = p;
        }),
        (u.menuListRef = null),
        (u.getMenuListRef = function (p) {
          u.menuListRef = p;
        }),
        (u.inputRef = null),
        (u.getInputRef = function (p) {
          u.inputRef = p;
        }),
        (u.focus = u.focusInput),
        (u.blur = u.blurInput),
        (u.onChange = function (p, v) {
          var S = u.props,
            w = S.onChange,
            I = S.name;
          (v.name = I), u.ariaOnChange(p, v), w(p, v);
        }),
        (u.setValue = function (p, v, S) {
          var w = u.props,
            I = w.closeMenuOnSelect,
            M = w.isMulti,
            L = w.inputValue;
          u.onInputChange("", { action: "set-value", prevInputValue: L }),
            I &&
              (u.setState({ inputIsHiddenAfterUpdate: !M }), u.onMenuClose()),
            u.setState({ clearFocusValueOnUpdate: !0 }),
            u.onChange(p, { action: v, option: S });
        }),
        (u.selectOption = function (p) {
          var v = u.props,
            S = v.blurInputOnSelect,
            w = v.isMulti,
            I = v.name,
            M = u.state.selectValue,
            L = w && u.isOptionSelected(p, M),
            _ = u.isOptionDisabled(p, M);
          if (L) {
            var O = u.getOptionValue(p);
            u.setValue(
              M.filter(function (N) {
                return u.getOptionValue(N) !== O;
              }),
              "deselect-option",
              p
            );
          } else if (!_)
            w
              ? u.setValue([].concat(fa(M), [p]), "select-option", p)
              : u.setValue(p, "select-option");
          else {
            u.ariaOnChange(p, { action: "select-option", option: p, name: I });
            return;
          }
          S && u.blurInput();
        }),
        (u.removeValue = function (p) {
          var v = u.props.isMulti,
            S = u.state.selectValue,
            w = u.getOptionValue(p),
            I = S.filter(function (L) {
              return u.getOptionValue(L) !== w;
            }),
            M = ko(v, I, I[0] || null);
          u.onChange(M, { action: "remove-value", removedValue: p }),
            u.focusInput();
        }),
        (u.clearValue = function () {
          var p = u.state.selectValue;
          u.onChange(ko(u.props.isMulti, [], null), {
            action: "clear",
            removedValues: p,
          });
        }),
        (u.popValue = function () {
          var p = u.props.isMulti,
            v = u.state.selectValue,
            S = v[v.length - 1],
            w = v.slice(0, v.length - 1),
            I = ko(p, w, w[0] || null);
          S && u.onChange(I, { action: "pop-value", removedValue: S });
        }),
        (u.getFocusedOptionId = function (p) {
          return qu(u.state.focusableOptionsWithIds, p);
        }),
        (u.getFocusableOptionsWithIds = function () {
          return rd(_o(u.props, u.state.selectValue), u.getElementId("option"));
        }),
        (u.getValue = function () {
          return u.state.selectValue;
        }),
        (u.cx = function () {
          for (var p = arguments.length, v = new Array(p), S = 0; S < p; S++)
            v[S] = arguments[S];
          return eg.apply(void 0, [u.props.classNamePrefix].concat(v));
        }),
        (u.getOptionLabel = function (p) {
          return Gd(u.props, p);
        }),
        (u.getOptionValue = function (p) {
          return Vo(u.props, p);
        }),
        (u.getStyles = function (p, v) {
          var S = u.props.unstyled,
            w = n0[p](v, S);
          w.boxSizing = "border-box";
          var I = u.props.styles[p];
          return I ? I(w, v) : w;
        }),
        (u.getClassNames = function (p, v) {
          var S, w;
          return (S = (w = u.props.classNames)[p]) === null || S === void 0
            ? void 0
            : S.call(w, v);
        }),
        (u.getElementId = function (p) {
          return "".concat(u.state.instancePrefix, "-").concat(p);
        }),
        (u.getComponents = function () {
          return Ey(u.props);
        }),
        (u.buildCategorizedOptions = function () {
          return _o(u.props, u.state.selectValue);
        }),
        (u.getCategorizedOptions = function () {
          return u.props.menuIsOpen ? u.buildCategorizedOptions() : [];
        }),
        (u.buildFocusableOptions = function () {
          return Yd(u.buildCategorizedOptions());
        }),
        (u.getFocusableOptions = function () {
          return u.props.menuIsOpen ? u.buildFocusableOptions() : [];
        }),
        (u.ariaOnChange = function (p, v) {
          u.setState({ ariaSelection: ie({ value: p }, v) });
        }),
        (u.onMenuMouseDown = function (p) {
          p.button === 0 &&
            (p.stopPropagation(), p.preventDefault(), u.focusInput());
        }),
        (u.onMenuMouseMove = function (p) {
          u.blockOptionHover = !1;
        }),
        (u.onControlMouseDown = function (p) {
          if (!p.defaultPrevented) {
            var v = u.props.openMenuOnClick;
            u.state.isFocused
              ? u.props.menuIsOpen
                ? p.target.tagName !== "INPUT" &&
                  p.target.tagName !== "TEXTAREA" &&
                  u.onMenuClose()
                : v && u.openMenu("first")
              : (v && (u.openAfterFocus = !0), u.focusInput()),
              p.target.tagName !== "INPUT" &&
                p.target.tagName !== "TEXTAREA" &&
                p.preventDefault();
          }
        }),
        (u.onDropdownIndicatorMouseDown = function (p) {
          if (
            !(p && p.type === "mousedown" && p.button !== 0) &&
            !u.props.isDisabled
          ) {
            var v = u.props,
              S = v.isMulti,
              w = v.menuIsOpen;
            u.focusInput(),
              w
                ? (u.setState({ inputIsHiddenAfterUpdate: !S }),
                  u.onMenuClose())
                : u.openMenu("first"),
              p.preventDefault();
          }
        }),
        (u.onClearIndicatorMouseDown = function (p) {
          (p && p.type === "mousedown" && p.button !== 0) ||
            (u.clearValue(),
            p.preventDefault(),
            (u.openAfterFocus = !1),
            p.type === "touchend"
              ? u.focusInput()
              : setTimeout(function () {
                  return u.focusInput();
                }));
        }),
        (u.onScroll = function (p) {
          typeof u.props.closeMenuOnScroll == "boolean"
            ? p.target instanceof HTMLElement &&
              Uo(p.target) &&
              u.props.onMenuClose()
            : typeof u.props.closeMenuOnScroll == "function" &&
              u.props.closeMenuOnScroll(p) &&
              u.props.onMenuClose();
        }),
        (u.onCompositionStart = function () {
          u.isComposing = !0;
        }),
        (u.onCompositionEnd = function () {
          u.isComposing = !1;
        }),
        (u.onTouchStart = function (p) {
          var v = p.touches,
            S = v && v.item(0);
          S &&
            ((u.initialTouchX = S.clientX),
            (u.initialTouchY = S.clientY),
            (u.userIsDragging = !1));
        }),
        (u.onTouchMove = function (p) {
          var v = p.touches,
            S = v && v.item(0);
          if (S) {
            var w = Math.abs(S.clientX - u.initialTouchX),
              I = Math.abs(S.clientY - u.initialTouchY),
              M = 5;
            u.userIsDragging = w > M || I > M;
          }
        }),
        (u.onTouchEnd = function (p) {
          u.userIsDragging ||
            (u.controlRef &&
              !u.controlRef.contains(p.target) &&
              u.menuListRef &&
              !u.menuListRef.contains(p.target) &&
              u.blurInput(),
            (u.initialTouchX = 0),
            (u.initialTouchY = 0));
        }),
        (u.onControlTouchEnd = function (p) {
          u.userIsDragging || u.onControlMouseDown(p);
        }),
        (u.onClearIndicatorTouchEnd = function (p) {
          u.userIsDragging || u.onClearIndicatorMouseDown(p);
        }),
        (u.onDropdownIndicatorTouchEnd = function (p) {
          u.userIsDragging || u.onDropdownIndicatorMouseDown(p);
        }),
        (u.handleInputChange = function (p) {
          var v = u.props.inputValue,
            S = p.currentTarget.value;
          u.setState({ inputIsHiddenAfterUpdate: !1 }),
            u.onInputChange(S, { action: "input-change", prevInputValue: v }),
            u.props.menuIsOpen || u.onMenuOpen();
        }),
        (u.onInputFocus = function (p) {
          u.props.onFocus && u.props.onFocus(p),
            u.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (u.openAfterFocus || u.props.openMenuOnFocus) &&
              u.openMenu("first"),
            (u.openAfterFocus = !1);
        }),
        (u.onInputBlur = function (p) {
          var v = u.props.inputValue;
          if (u.menuListRef && u.menuListRef.contains(document.activeElement)) {
            u.inputRef.focus();
            return;
          }
          u.props.onBlur && u.props.onBlur(p),
            u.onInputChange("", { action: "input-blur", prevInputValue: v }),
            u.onMenuClose(),
            u.setState({ focusedValue: null, isFocused: !1 });
        }),
        (u.onOptionHover = function (p) {
          if (!(u.blockOptionHover || u.state.focusedOption === p)) {
            var v = u.getFocusableOptions(),
              S = v.indexOf(p);
            u.setState({
              focusedOption: p,
              focusedOptionId: S > -1 ? u.getFocusedOptionId(p) : null,
            });
          }
        }),
        (u.shouldHideSelectedOptions = function () {
          return Jd(u.props);
        }),
        (u.onValueInputFocus = function (p) {
          p.preventDefault(), p.stopPropagation(), u.focus();
        }),
        (u.onKeyDown = function (p) {
          var v = u.props,
            S = v.isMulti,
            w = v.backspaceRemovesValue,
            I = v.escapeClearsValue,
            M = v.inputValue,
            L = v.isClearable,
            _ = v.isDisabled,
            O = v.menuIsOpen,
            N = v.onKeyDown,
            U = v.tabSelectsValue,
            j = v.openMenuOnFocus,
            W = u.state,
            R = W.focusedOption,
            B = W.focusedValue,
            $ = W.selectValue;
          if (!_ && !(typeof N == "function" && (N(p), p.defaultPrevented))) {
            switch (((u.blockOptionHover = !0), p.key)) {
              case "ArrowLeft":
                if (!S || M) return;
                u.focusValue("previous");
                break;
              case "ArrowRight":
                if (!S || M) return;
                u.focusValue("next");
                break;
              case "Delete":
              case "Backspace":
                if (M) return;
                if (B) u.removeValue(B);
                else {
                  if (!w) return;
                  S ? u.popValue() : L && u.clearValue();
                }
                break;
              case "Tab":
                if (
                  u.isComposing ||
                  p.shiftKey ||
                  !O ||
                  !U ||
                  !R ||
                  (j && u.isOptionSelected(R, $))
                )
                  return;
                u.selectOption(R);
                break;
              case "Enter":
                if (p.keyCode === 229) break;
                if (O) {
                  if (!R || u.isComposing) return;
                  u.selectOption(R);
                  break;
                }
                return;
              case "Escape":
                O
                  ? (u.setState({ inputIsHiddenAfterUpdate: !1 }),
                    u.onInputChange("", {
                      action: "menu-close",
                      prevInputValue: M,
                    }),
                    u.onMenuClose())
                  : L && I && u.clearValue();
                break;
              case " ":
                if (M) return;
                if (!O) {
                  u.openMenu("first");
                  break;
                }
                if (!R) return;
                u.selectOption(R);
                break;
              case "ArrowUp":
                O ? u.focusOption("up") : u.openMenu("last");
                break;
              case "ArrowDown":
                O ? u.focusOption("down") : u.openMenu("first");
                break;
              case "PageUp":
                if (!O) return;
                u.focusOption("pageup");
                break;
              case "PageDown":
                if (!O) return;
                u.focusOption("pagedown");
                break;
              case "Home":
                if (!O) return;
                u.focusOption("first");
                break;
              case "End":
                if (!O) return;
                u.focusOption("last");
                break;
              default:
                return;
            }
            p.preventDefault();
          }
        }),
        (u.state.instancePrefix =
          "react-select-" + (u.props.instanceId || ++d0)),
        (u.state.selectValue = Uf(c.value)),
        c.menuIsOpen && u.state.selectValue.length)
      ) {
        var d = u.getFocusableOptionsWithIds(),
          h = u.buildFocusableOptions(),
          g = h.indexOf(u.state.selectValue[0]);
        (u.state.focusableOptionsWithIds = d),
          (u.state.focusedOption = h[g]),
          (u.state.focusedOptionId = qu(d, h[g]));
      }
      return u;
    }
    return (
      Lm(
        a,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener("scroll", this.onScroll, !0),
                this.props.autoFocus && this.focusInput(),
                this.props.menuIsOpen &&
                  this.state.focusedOption &&
                  this.menuListRef &&
                  this.focusedOptionRef &&
                  Hf(this.menuListRef, this.focusedOptionRef);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (u) {
              var d = this.props,
                h = d.isDisabled,
                g = d.menuIsOpen,
                p = this.state.isFocused;
              ((p && !h && u.isDisabled) || (p && g && !u.menuIsOpen)) &&
                this.focusInput(),
                p && h && !u.isDisabled
                  ? this.setState({ isFocused: !1 }, this.onMenuClose)
                  : !p &&
                    !h &&
                    u.isDisabled &&
                    this.inputRef === document.activeElement &&
                    this.setState({ isFocused: !0 }),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (Hf(this.menuListRef, this.focusedOptionRef),
                  (this.scrollToFocusedOptionOnUpdate = !1));
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "onMenuOpen",
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: "onMenuClose",
            value: function () {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue,
              }),
                this.props.onMenuClose();
            },
          },
          {
            key: "onInputChange",
            value: function (u, d) {
              this.props.onInputChange(u, d);
            },
          },
          {
            key: "focusInput",
            value: function () {
              this.inputRef && this.inputRef.focus();
            },
          },
          {
            key: "blurInput",
            value: function () {
              this.inputRef && this.inputRef.blur();
            },
          },
          {
            key: "openMenu",
            value: function (u) {
              var d = this,
                h = this.state,
                g = h.selectValue,
                p = h.isFocused,
                v = this.buildFocusableOptions(),
                S = u === "first" ? 0 : v.length - 1;
              if (!this.props.isMulti) {
                var w = v.indexOf(g[0]);
                w > -1 && (S = w);
              }
              (this.scrollToFocusedOptionOnUpdate = !(p && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: v[S],
                    focusedOptionId: this.getFocusedOptionId(v[S]),
                  },
                  function () {
                    return d.onMenuOpen();
                  }
                );
            },
          },
          {
            key: "focusValue",
            value: function (u) {
              var d = this.state,
                h = d.selectValue,
                g = d.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var p = h.indexOf(g);
                g || (p = -1);
                var v = h.length - 1,
                  S = -1;
                if (h.length) {
                  switch (u) {
                    case "previous":
                      p === 0 ? (S = 0) : p === -1 ? (S = v) : (S = p - 1);
                      break;
                    case "next":
                      p > -1 && p < v && (S = p + 1);
                      break;
                  }
                  this.setState({
                    inputIsHidden: S !== -1,
                    focusedValue: h[S],
                  });
                }
              }
            },
          },
          {
            key: "focusOption",
            value: function () {
              var u =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "first",
                d = this.props.pageSize,
                h = this.state.focusedOption,
                g = this.getFocusableOptions();
              if (g.length) {
                var p = 0,
                  v = g.indexOf(h);
                h || (v = -1),
                  u === "up"
                    ? (p = v > 0 ? v - 1 : g.length - 1)
                    : u === "down"
                    ? (p = (v + 1) % g.length)
                    : u === "pageup"
                    ? ((p = v - d), p < 0 && (p = 0))
                    : u === "pagedown"
                    ? ((p = v + d), p > g.length - 1 && (p = g.length - 1))
                    : u === "last" && (p = g.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({
                    focusedOption: g[p],
                    focusedValue: null,
                    focusedOptionId: this.getFocusedOptionId(g[p]),
                  });
              }
            },
          },
          {
            key: "getTheme",
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == "function"
                  ? this.props.theme(Xu)
                  : ie(ie({}, Xu), this.props.theme)
                : Xu;
            },
          },
          {
            key: "getCommonProps",
            value: function () {
              var u = this.clearValue,
                d = this.cx,
                h = this.getStyles,
                g = this.getClassNames,
                p = this.getValue,
                v = this.selectOption,
                S = this.setValue,
                w = this.props,
                I = w.isMulti,
                M = w.isRtl,
                L = w.options,
                _ = this.hasValue();
              return {
                clearValue: u,
                cx: d,
                getStyles: h,
                getClassNames: g,
                getValue: p,
                hasValue: _,
                isMulti: I,
                isRtl: M,
                options: L,
                selectOption: v,
                selectProps: w,
                setValue: S,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: "hasValue",
            value: function () {
              var u = this.state.selectValue;
              return u.length > 0;
            },
          },
          {
            key: "hasOptions",
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: "isClearable",
            value: function () {
              var u = this.props,
                d = u.isClearable,
                h = u.isMulti;
              return d === void 0 ? h : d;
            },
          },
          {
            key: "isOptionDisabled",
            value: function (u, d) {
              return Xd(this.props, u, d);
            },
          },
          {
            key: "isOptionSelected",
            value: function (u, d) {
              return qd(this.props, u, d);
            },
          },
          {
            key: "filterOption",
            value: function (u, d) {
              return Zd(this.props, u, d);
            },
          },
          {
            key: "formatOptionLabel",
            value: function (u, d) {
              if (typeof this.props.formatOptionLabel == "function") {
                var h = this.props.inputValue,
                  g = this.state.selectValue;
                return this.props.formatOptionLabel(u, {
                  context: d,
                  inputValue: h,
                  selectValue: g,
                });
              } else return this.getOptionLabel(u);
            },
          },
          {
            key: "formatGroupLabel",
            value: function (u) {
              return this.props.formatGroupLabel(u);
            },
          },
          {
            key: "startListeningComposition",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                  !1
                ),
                document.addEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                  !1
                ));
            },
          },
          {
            key: "stopListeningComposition",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener(
                  "compositionstart",
                  this.onCompositionStart
                ),
                document.removeEventListener(
                  "compositionend",
                  this.onCompositionEnd
                ));
            },
          },
          {
            key: "startListeningToTouch",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener("touchstart", this.onTouchStart, !1),
                document.addEventListener("touchmove", this.onTouchMove, !1),
                document.addEventListener("touchend", this.onTouchEnd, !1));
            },
          },
          {
            key: "stopListeningToTouch",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener("touchstart", this.onTouchStart),
                document.removeEventListener("touchmove", this.onTouchMove),
                document.removeEventListener("touchend", this.onTouchEnd));
            },
          },
          {
            key: "renderInput",
            value: function () {
              var u = this.props,
                d = u.isDisabled,
                h = u.isSearchable,
                g = u.inputId,
                p = u.inputValue,
                v = u.tabIndex,
                S = u.form,
                w = u.menuIsOpen,
                I = u.required,
                M = this.getComponents(),
                L = M.Input,
                _ = this.state,
                O = _.inputIsHidden,
                N = _.ariaSelection,
                U = this.commonProps,
                j = g || this.getElementId("input"),
                W = ie(
                  ie(
                    ie(
                      {
                        "aria-autocomplete": "list",
                        "aria-expanded": w,
                        "aria-haspopup": !0,
                        "aria-errormessage": this.props["aria-errormessage"],
                        "aria-invalid": this.props["aria-invalid"],
                        "aria-label": this.props["aria-label"],
                        "aria-labelledby": this.props["aria-labelledby"],
                        "aria-required": I,
                        role: "combobox",
                        "aria-activedescendant": this.isAppleDevice
                          ? void 0
                          : this.state.focusedOptionId || "",
                      },
                      w && { "aria-controls": this.getElementId("listbox") }
                    ),
                    !h && { "aria-readonly": !0 }
                  ),
                  this.hasValue()
                    ? (N == null ? void 0 : N.action) ===
                        "initial-input-focus" && {
                        "aria-describedby": this.getElementId("live-region"),
                      }
                    : { "aria-describedby": this.getElementId("placeholder") }
                );
              return h
                ? b.createElement(
                    L,
                    oe(
                      {},
                      U,
                      {
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        id: j,
                        innerRef: this.getInputRef,
                        isDisabled: d,
                        isHidden: O,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: "false",
                        tabIndex: v,
                        form: S,
                        type: "text",
                        value: p,
                      },
                      W
                    )
                  )
                : b.createElement(
                    zy,
                    oe(
                      {
                        id: j,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: Do,
                        onFocus: this.onInputFocus,
                        disabled: d,
                        tabIndex: v,
                        inputMode: "none",
                        form: S,
                        value: "",
                      },
                      W
                    )
                  );
            },
          },
          {
            key: "renderPlaceholderOrValue",
            value: function () {
              var u = this,
                d = this.getComponents(),
                h = d.MultiValue,
                g = d.MultiValueContainer,
                p = d.MultiValueLabel,
                v = d.MultiValueRemove,
                S = d.SingleValue,
                w = d.Placeholder,
                I = this.commonProps,
                M = this.props,
                L = M.controlShouldRenderValue,
                _ = M.isDisabled,
                O = M.isMulti,
                N = M.inputValue,
                U = M.placeholder,
                j = this.state,
                W = j.selectValue,
                R = j.focusedValue,
                B = j.isFocused;
              if (!this.hasValue() || !L)
                return N
                  ? null
                  : b.createElement(
                      w,
                      oe({}, I, {
                        key: "placeholder",
                        isDisabled: _,
                        isFocused: B,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      U
                    );
              if (O)
                return W.map(function (J, ge) {
                  var Pe = J === R,
                    De = ""
                      .concat(u.getOptionLabel(J), "-")
                      .concat(u.getOptionValue(J));
                  return b.createElement(
                    h,
                    oe({}, I, {
                      components: { Container: g, Label: p, Remove: v },
                      isFocused: Pe,
                      isDisabled: _,
                      key: De,
                      index: ge,
                      removeProps: {
                        onClick: function () {
                          return u.removeValue(J);
                        },
                        onTouchEnd: function () {
                          return u.removeValue(J);
                        },
                        onMouseDown: function (Te) {
                          Te.preventDefault();
                        },
                      },
                      data: J,
                    }),
                    u.formatOptionLabel(J, "value")
                  );
                });
              if (N) return null;
              var $ = W[0];
              return b.createElement(
                S,
                oe({}, I, { data: $, isDisabled: _ }),
                this.formatOptionLabel($, "value")
              );
            },
          },
          {
            key: "renderClearIndicator",
            value: function () {
              var u = this.getComponents(),
                d = u.ClearIndicator,
                h = this.commonProps,
                g = this.props,
                p = g.isDisabled,
                v = g.isLoading,
                S = this.state.isFocused;
              if (!this.isClearable() || !d || p || !this.hasValue() || v)
                return null;
              var w = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true",
              };
              return b.createElement(
                d,
                oe({}, h, { innerProps: w, isFocused: S })
              );
            },
          },
          {
            key: "renderLoadingIndicator",
            value: function () {
              var u = this.getComponents(),
                d = u.LoadingIndicator,
                h = this.commonProps,
                g = this.props,
                p = g.isDisabled,
                v = g.isLoading,
                S = this.state.isFocused;
              if (!d || !v) return null;
              var w = { "aria-hidden": "true" };
              return b.createElement(
                d,
                oe({}, h, { innerProps: w, isDisabled: p, isFocused: S })
              );
            },
          },
          {
            key: "renderIndicatorSeparator",
            value: function () {
              var u = this.getComponents(),
                d = u.DropdownIndicator,
                h = u.IndicatorSeparator;
              if (!d || !h) return null;
              var g = this.commonProps,
                p = this.props.isDisabled,
                v = this.state.isFocused;
              return b.createElement(
                h,
                oe({}, g, { isDisabled: p, isFocused: v })
              );
            },
          },
          {
            key: "renderDropdownIndicator",
            value: function () {
              var u = this.getComponents(),
                d = u.DropdownIndicator;
              if (!d) return null;
              var h = this.commonProps,
                g = this.props.isDisabled,
                p = this.state.isFocused,
                v = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true",
                };
              return b.createElement(
                d,
                oe({}, h, { innerProps: v, isDisabled: g, isFocused: p })
              );
            },
          },
          {
            key: "renderMenu",
            value: function () {
              var u = this,
                d = this.getComponents(),
                h = d.Group,
                g = d.GroupHeading,
                p = d.Menu,
                v = d.MenuList,
                S = d.MenuPortal,
                w = d.LoadingMessage,
                I = d.NoOptionsMessage,
                M = d.Option,
                L = this.commonProps,
                _ = this.state.focusedOption,
                O = this.props,
                N = O.captureMenuScroll,
                U = O.inputValue,
                j = O.isLoading,
                W = O.loadingMessage,
                R = O.minMenuHeight,
                B = O.maxMenuHeight,
                $ = O.menuIsOpen,
                J = O.menuPlacement,
                ge = O.menuPosition,
                Pe = O.menuPortalTarget,
                De = O.menuShouldBlockScroll,
                Ee = O.menuShouldScrollIntoView,
                Te = O.noOptionsMessage,
                be = O.onMenuScrollToTop,
                Ce = O.onMenuScrollToBottom;
              if (!$) return null;
              var pe = function (te, le) {
                  var se = te.type,
                    ae = te.data,
                    de = te.isDisabled,
                    ce = te.isSelected,
                    xe = te.label,
                    rt = te.value,
                    vn = _ === ae,
                    cr = de
                      ? void 0
                      : function () {
                          return u.onOptionHover(ae);
                        },
                    Ln = de
                      ? void 0
                      : function () {
                          return u.selectOption(ae);
                        },
                    Nn = "".concat(u.getElementId("option"), "-").concat(le),
                    ui = {
                      id: Nn,
                      onClick: Ln,
                      onMouseMove: cr,
                      onMouseOver: cr,
                      tabIndex: -1,
                      role: "option",
                      "aria-selected": u.isAppleDevice ? void 0 : ce,
                    };
                  return b.createElement(
                    M,
                    oe({}, L, {
                      innerProps: ui,
                      data: ae,
                      isDisabled: de,
                      isSelected: ce,
                      key: Nn,
                      label: xe,
                      type: se,
                      value: rt,
                      isFocused: vn,
                      innerRef: vn ? u.getFocusedOptionRef : void 0,
                    }),
                    u.formatOptionLabel(te.data, "menu")
                  );
                },
                he;
              if (this.hasOptions())
                he = this.getCategorizedOptions().map(function (T) {
                  if (T.type === "group") {
                    var te = T.data,
                      le = T.options,
                      se = T.index,
                      ae = "".concat(u.getElementId("group"), "-").concat(se),
                      de = "".concat(ae, "-heading");
                    return b.createElement(
                      h,
                      oe({}, L, {
                        key: ae,
                        data: te,
                        options: le,
                        Heading: g,
                        headingProps: { id: de, data: T.data },
                        label: u.formatGroupLabel(T.data),
                      }),
                      T.options.map(function (ce) {
                        return pe(ce, "".concat(se, "-").concat(ce.index));
                      })
                    );
                  } else if (T.type === "option")
                    return pe(T, "".concat(T.index));
                });
              else if (j) {
                var A = W({ inputValue: U });
                if (A === null) return null;
                he = b.createElement(w, L, A);
              } else {
                var Z = Te({ inputValue: U });
                if (Z === null) return null;
                he = b.createElement(I, L, Z);
              }
              var H = {
                  minMenuHeight: R,
                  maxMenuHeight: B,
                  menuPlacement: J,
                  menuPosition: ge,
                  menuShouldScrollIntoView: Ee,
                },
                x = b.createElement(vg, oe({}, L, H), function (T) {
                  var te = T.ref,
                    le = T.placerProps,
                    se = le.placement,
                    ae = le.maxHeight;
                  return b.createElement(
                    p,
                    oe({}, L, H, {
                      innerRef: te,
                      innerProps: {
                        onMouseDown: u.onMenuMouseDown,
                        onMouseMove: u.onMenuMouseMove,
                      },
                      isLoading: j,
                      placement: se,
                    }),
                    b.createElement(
                      By,
                      {
                        captureEnabled: N,
                        onTopArrive: be,
                        onBottomArrive: Ce,
                        lockEnabled: De,
                      },
                      function (de) {
                        return b.createElement(
                          v,
                          oe({}, L, {
                            innerRef: function (xe) {
                              u.getMenuListRef(xe), de(xe);
                            },
                            innerProps: {
                              role: "listbox",
                              "aria-multiselectable": L.isMulti,
                              id: u.getElementId("listbox"),
                            },
                            isLoading: j,
                            maxHeight: ae,
                            focusedOption: _,
                          }),
                          he
                        );
                      }
                    )
                  );
                });
              return Pe || ge === "fixed"
                ? b.createElement(
                    S,
                    oe({}, L, {
                      appendTo: Pe,
                      controlElement: this.controlRef,
                      menuPlacement: J,
                      menuPosition: ge,
                    }),
                    x
                  )
                : x;
            },
          },
          {
            key: "renderFormField",
            value: function () {
              var u = this,
                d = this.props,
                h = d.delimiter,
                g = d.isDisabled,
                p = d.isMulti,
                v = d.name,
                S = d.required,
                w = this.state.selectValue;
              if (S && !this.hasValue() && !g)
                return b.createElement(Ky, {
                  name: v,
                  onFocus: this.onValueInputFocus,
                });
              if (!(!v || g))
                if (p)
                  if (h) {
                    var I = w
                      .map(function (_) {
                        return u.getOptionValue(_);
                      })
                      .join(h);
                    return b.createElement("input", {
                      name: v,
                      type: "hidden",
                      value: I,
                    });
                  } else {
                    var M =
                      w.length > 0
                        ? w.map(function (_, O) {
                            return b.createElement("input", {
                              key: "i-".concat(O),
                              name: v,
                              type: "hidden",
                              value: u.getOptionValue(_),
                            });
                          })
                        : b.createElement("input", {
                            name: v,
                            type: "hidden",
                            value: "",
                          });
                    return b.createElement("div", null, M);
                  }
                else {
                  var L = w[0] ? this.getOptionValue(w[0]) : "";
                  return b.createElement("input", {
                    name: v,
                    type: "hidden",
                    value: L,
                  });
                }
            },
          },
          {
            key: "renderLiveRegion",
            value: function () {
              var u = this.commonProps,
                d = this.state,
                h = d.ariaSelection,
                g = d.focusedOption,
                p = d.focusedValue,
                v = d.isFocused,
                S = d.selectValue,
                w = this.getFocusableOptions();
              return b.createElement(
                Ly,
                oe({}, u, {
                  id: this.getElementId("live-region"),
                  ariaSelection: h,
                  focusedOption: g,
                  focusedValue: p,
                  isFocused: v,
                  selectValue: S,
                  focusableOptions: w,
                  isAppleDevice: this.isAppleDevice,
                })
              );
            },
          },
          {
            key: "render",
            value: function () {
              var u = this.getComponents(),
                d = u.Control,
                h = u.IndicatorsContainer,
                g = u.SelectContainer,
                p = u.ValueContainer,
                v = this.props,
                S = v.className,
                w = v.id,
                I = v.isDisabled,
                M = v.menuIsOpen,
                L = this.state.isFocused,
                _ = (this.commonProps = this.getCommonProps());
              return b.createElement(
                g,
                oe({}, _, {
                  className: S,
                  innerProps: { id: w, onKeyDown: this.onKeyDown },
                  isDisabled: I,
                  isFocused: L,
                }),
                this.renderLiveRegion(),
                b.createElement(
                  d,
                  oe({}, _, {
                    innerRef: this.getControlRef,
                    innerProps: {
                      onMouseDown: this.onControlMouseDown,
                      onTouchEnd: this.onControlTouchEnd,
                    },
                    isDisabled: I,
                    isFocused: L,
                    menuIsOpen: M,
                  }),
                  b.createElement(
                    p,
                    oe({}, _, { isDisabled: I }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput()
                  ),
                  b.createElement(
                    h,
                    oe({}, _, { isDisabled: I }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator()
                  )
                ),
                this.renderMenu(),
                this.renderFormField()
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (u, d) {
              var h = d.prevProps,
                g = d.clearFocusValueOnUpdate,
                p = d.inputIsHiddenAfterUpdate,
                v = d.ariaSelection,
                S = d.isFocused,
                w = d.prevWasFocused,
                I = d.instancePrefix,
                M = u.options,
                L = u.value,
                _ = u.menuIsOpen,
                O = u.inputValue,
                N = u.isMulti,
                U = Uf(L),
                j = {};
              if (
                h &&
                (L !== h.value ||
                  M !== h.options ||
                  _ !== h.menuIsOpen ||
                  O !== h.inputValue)
              ) {
                var W = _ ? s0(u, U) : [],
                  R = _ ? rd(_o(u, U), "".concat(I, "-option")) : [],
                  B = g ? c0(d, U) : null,
                  $ = f0(d, W),
                  J = qu(R, $);
                j = {
                  selectValue: U,
                  focusedOption: $,
                  focusedOptionId: J,
                  focusableOptionsWithIds: R,
                  focusedValue: B,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var ge =
                  p != null && u !== h
                    ? { inputIsHidden: p, inputIsHiddenAfterUpdate: void 0 }
                    : {},
                Pe = v,
                De = S && w;
              return (
                S &&
                  !De &&
                  ((Pe = {
                    value: ko(N, U, U[0] || null),
                    options: U,
                    action: "initial-input-focus",
                  }),
                  (De = !w)),
                (v == null ? void 0 : v.action) === "initial-input-focus" &&
                  (Pe = null),
                ie(
                  ie(ie({}, j), ge),
                  {},
                  { prevProps: u, ariaSelection: Pe, prevWasFocused: De }
                )
              );
            },
          },
        ]
      ),
      a
    );
  })(b.Component);
ep.defaultProps = a0;
var p0 = b.forwardRef(function (o, i) {
    var a = Rm(o);
    return b.createElement(ep, oe({ ref: i }, a));
  }),
  Zu = p0;
const h0 = (o) => {
    const i = new Set(),
      a = new Set();
    return (
      o.forEach((c) => {
        const u = c.name.match(/Salle\s([A-Za-z])/),
          d = u ? u[1] : "Tous";
        i.add(d);
        const h = c.id.charAt(0);
        a.add(h);
      }),
      {
        buildings: Array.from(i).map((c) => ({
          value: c,
          label: `Batiment ${c}`,
        })),
        floors: Array.from(a).map((c) => ({ value: c, label: `Étage ${c}` })),
      }
    );
  },
  m0 = ({ operationalRooms: o, downRooms: i }) => {
    var a = xm(1);
    try {
      const { buildings: c, floors: u } = h0([...o, ...i]),
        d = (M) => {
          yo({ search: M.target.value });
        },
        h = (M, L) => {
          M === "building"
            ? yo({ building: L })
            : M === "floor"
            ? yo({ floor: L })
            : M === "presence" &&
              yo({ presence: (L == null ? void 0 : L.value) || "Tous" });
        },
        g = (M, L, _, O, N) =>
          M.filter((U) => {
            const j = U.name.toLowerCase().includes(L.toLowerCase()),
              W =
                _.length === 0 ||
                _.some(($) => $ === "Tous" || U.name.includes($)),
              R =
                O.length === 0 ||
                O.some(($) => $ === "Tous" || U.id.startsWith($)),
              B =
                N === "Tous" ||
                (N === "True" && U.presence) ||
                (N === "False" && !U.presence);
            return j && W && R && B;
          }),
        p =
          Ke.value.building.length === 0
            ? [{ value: "Tous", label: "Tous les bâtiments" }]
            : Ke.value.building,
        v =
          Ke.value.floor.length === 0
            ? [{ value: "Tous", label: "Tous les étages" }]
            : Ke.value.floor,
        S =
          Ke.value.presence === "Tous"
            ? { value: "Tous", label: "Tous" }
            : {
                value: Ke.value.presence,
                label:
                  Ke.value.presence === "True"
                    ? "Présence d'usager"
                    : "Absence d'usager",
              },
        w = g(
          o,
          Ke.value.search,
          Ke.value.building.map((M) => M.value),
          Ke.value.floor.map((M) => M.value),
          Ke.value.presence
        ),
        I = g(
          i,
          Ke.value.search,
          Ke.value.building.map((M) => M.value),
          Ke.value.floor.map((M) => M.value),
          Ke.value.presence
        );
      return X.jsx(X.Fragment, {
        children: X.jsxs("div", {
          className: "plansSalles",
          children: [
            X.jsx("div", {
              className: "plansSalles__title",
              children: "Plan des salles",
            }),
            X.jsxs("div", {
              className: "plansSalles__header",
              children: [
                X.jsx("input", {
                  type: "text",
                  placeholder: "Rechercher une salle...",
                  className: "plansSalles__search",
                  onChange: d,
                  value: Ke.value.search,
                }),
                X.jsx(Zu, {
                  options: [
                    { value: "Tous", label: "Tous les bâtiments" },
                    ...c,
                  ],
                  value: p,
                  className: "plansSalles__selectWrapper",
                  placeholder: "Filtrer par bâtiment",
                  isMulti: !0,
                  onChange: (M) => h("building", M),
                }),
                X.jsx(Zu, {
                  options: [{ value: "Tous", label: "Tous les étages" }, ...u],
                  value: v,
                  className: "plansSalles__selectWrapper",
                  placeholder: "Filtrer par étage",
                  isMulti: !0,
                  onChange: (M) => h("floor", M),
                }),
                X.jsx(Zu, {
                  options: [
                    { value: "Tous", label: "Tous" },
                    { value: "True", label: "Présence d'usager" },
                    { value: "False", label: "Absence d'usager" },
                  ],
                  value: S,
                  className: "plansSalles__selectWrapper",
                  placeholder: "Filtrer par présence",
                  onChange: (M) => h("presence", M),
                }),
              ],
            }),
            X.jsxs("div", {
              className: "plansSalles__roomLists",
              children: [
                X.jsx(Of, {
                  title: "Salles en état opérationnelles",
                  rooms: w,
                }),
                X.jsx(Of, { title: "Salles en état de panne", rooms: I }),
              ],
            }),
          ],
        }),
      });
    } finally {
      a.f();
    }
  },
  v0 = ({ message: o, type: i }) =>
    X.jsx("div", {
      className: `notification notification--${i}`,
      children: X.jsx("p", { className: "notification__message", children: o }),
    }),
  g0 = [
    {
      id: "101",
      name: "Salle 101",
      update: "09/01 à 03h26",
      temperature: "22",
      humidity: "45",
      co2: "400",
      presence: !0,
      status: "operational",
    },
    {
      id: "102",
      name: "Salle A102",
      update: "09/01 à 03h26",
      temperature: "2",
      humidity: "90",
      co2: "120",
      presence: !1,
      status: "operational",
    },
    {
      id: "103",
      name: "Salle B103",
      update: "09/01 à 03h26",
      temperature: "23",
      humidity: "40",
      co2: "420",
      presence: !1,
      status: "operational",
    },
    {
      id: "104",
      name: "Salle 104",
      update: "09/01 à 03h26",
      temperature: "50",
      humidity: "50",
      co2: "896",
      presence: !1,
      status: "operational",
    },
    {
      id: "105",
      name: "Salle D105",
      update: "09/01 à 03h26",
      temperature: "23",
      humidity: "5",
      co2: "1300",
      presence: !1,
      status: "operational",
    },
    {
      id: "106",
      name: "Salle D106",
      update: "09/01 à 03h26",
      temperature: "156",
      humidity: "20",
      co2: "420",
      presence: !0,
      status: "operational",
    },
    {
      id: "107",
      name: "Salle A107",
      update: "09/01 à 03h26",
      temperature: "23",
      humidity: "50",
      co2: "1250",
      presence: !0,
      status: "operational",
    },
    {
      id: "108",
      name: "Salle 108",
      update: "09/01 à 03h26",
      temperature: "2",
      humidity: "10",
      co2: "420",
      presence: !1,
      status: "operational",
    },
    {
      id: "109",
      name: "Salle 109",
      update: "09/01 à 03h26",
      temperature: "23",
      humidity: "50",
      co2: "1500",
      presence: !1,
      status: "operational",
    },
    {
      id: "110",
      name: "Salle 110",
      update: "09/01 à 03h26",
      temperature: "20",
      humidity: "50",
      co2: "5",
      presence: !0,
      status: "operational",
    },
    {
      id: "111",
      name: "Salle X111",
      update: "09/01 à 03h26",
      temperature: "20",
      humidity: "50",
      co2: "5",
      presence: !0,
      status: "operational",
    },
  ],
  y0 = [
    {
      id: "201",
      name: "Salle B201",
      update: "09/01 à 03h26",
      presence: !1,
      status: "down",
    },
    {
      id: "202",
      name: "Salle 202",
      update: "09/01 à 03h26",
      presence: !1,
      status: "down",
    },
    {
      id: "203",
      name: "Salle D203",
      update: "09/01 à 03h26",
      presence: !0,
      status: "down",
    },
    {
      id: "204",
      name: "Salle 204",
      update: "09/01 à 03h26",
      presence: !1,
      status: "down",
    },
    {
      id: "405",
      name: "Salle 405",
      update: "09/01 à 03h26",
      presence: !1,
      status: "down",
    },
    {
      id: "406",
      name: "Salle A406",
      update: "09/01 à 03h26",
      presence: !0,
      status: "down",
    },
  ],
  S0 = () =>
    X.jsx(X.Fragment, {
      children: X.jsxs("div", {
        className: "main",
        children: [
          X.jsx(um, {}),
          X.jsx(m0, { operationalRooms: g0, downRooms: y0 }),
          X.jsx(v0, {
            message: "Une salle est hors service !",
            type: "warning",
          }),
        ],
      }),
    });
lm.createRoot(document.getElementById("root")).render(
  X.jsx(b.StrictMode, { children: X.jsx(S0, {}) })
);
