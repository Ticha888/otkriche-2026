var z_ = Object.defineProperty;
var L_ = (t, e, n) => e in t ? z_(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var I = (t, e, n) => L_(t, typeof e != "symbol" ? e + "" : e, n);
(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const l of s.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
})();

function D_(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Gp = {
    exports: {}
},
    su = {},
    Kp = {
        exports: {}
    },
    te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo = Symbol.for("react.element"),
    A_ = Symbol.for("react.portal"),
    j_ = Symbol.for("react.fragment"),
    I_ = Symbol.for("react.strict_mode"),
    F_ = Symbol.for("react.profiler"),
    B_ = Symbol.for("react.provider"),
    U_ = Symbol.for("react.context"),
    V_ = Symbol.for("react.forward_ref"),
    H_ = Symbol.for("react.suspense"),
    W_ = Symbol.for("react.memo"),
    $_ = Symbol.for("react.lazy"),
    Zd = Symbol.iterator;

function Y_(t) {
    return t === null || typeof t != "object" ? null : (t = Zd && t[Zd] || t["@@iterator"], typeof t == "function" ? t : null)
}
var qp = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
},
    Zp = Object.assign,
    Jp = {};

function Qs(t, e, n) {
    this.props = t, this.context = e, this.refs = Jp, this.updater = n || qp
}
Qs.prototype.isReactComponent = {};
Qs.prototype.setState = function (t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
};
Qs.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
};

function em() { }
em.prototype = Qs.prototype;

function Mf(t, e, n) {
    this.props = t, this.context = e, this.refs = Jp, this.updater = n || qp
}
var zf = Mf.prototype = new em;
zf.constructor = Mf;
Zp(zf, Qs.prototype);
zf.isPureReactComponent = !0;
var Jd = Array.isArray,
    tm = Object.prototype.hasOwnProperty,
    Lf = {
        current: null
    },
    nm = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function rm(t, e, n) {
    var r, i = {},
        s = null,
        l = null;
    if (e != null)
        for (r in e.ref !== void 0 && (l = e.ref), e.key !== void 0 && (s = "" + e.key), e) tm.call(e, r) && !nm.hasOwnProperty(r) && (i[r] = e[r]);
    var o = arguments.length - 2;
    if (o === 1) i.children = n;
    else if (1 < o) {
        for (var a = Array(o), u = 0; u < o; u++) a[u] = arguments[u + 2];
        i.children = a
    }
    if (t && t.defaultProps)
        for (r in o = t.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
    return {
        $$typeof: vo,
        type: t,
        key: s,
        ref: l,
        props: i,
        _owner: Lf.current
    }
}

function X_(t, e) {
    return {
        $$typeof: vo,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}

function Df(t) {
    return typeof t == "object" && t !== null && t.$$typeof === vo
}

function b_(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function (n) {
        return e[n]
    })
}
var eh = /\/+/g;

function Cu(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? b_("" + t.key) : e.toString(36)
}

function ra(t, e, n, r, i) {
    var s = typeof t;
    (s === "undefined" || s === "boolean") && (t = null);
    var l = !1;
    if (t === null) l = !0;
    else switch (s) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (t.$$typeof) {
                case vo:
                case A_:
                    l = !0
            }
    }
    if (l) return l = t, i = i(l), t = r === "" ? "." + Cu(l, 0) : r, Jd(i) ? (n = "", t != null && (n = t.replace(eh, "$&/") + "/"), ra(i, e, n, "", function (u) {
        return u
    })) : i != null && (Df(i) && (i = X_(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(eh, "$&/") + "/") + t)), e.push(i)), 1;
    if (l = 0, r = r === "" ? "." : r + ":", Jd(t))
        for (var o = 0; o < t.length; o++) {
            s = t[o];
            var a = r + Cu(s, o);
            l += ra(s, e, n, a, i)
        } else if (a = Y_(t), typeof a == "function")
        for (t = a.call(t), o = 0; !(s = t.next()).done;) s = s.value, a = r + Cu(s, o++), l += ra(s, e, n, a, i);
    else if (s === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return l
}

function Po(t, e, n) {
    if (t == null) return t;
    var r = [],
        i = 0;
    return ra(t, r, "", "", function (s) {
        return e.call(n, s, i++)
    }), r
}

function Q_(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(), e.then(function (n) {
            (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n)
        }, function (n) {
            (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n)
        }), t._status === -1 && (t._status = 0, t._result = e)
    }
    if (t._status === 1) return t._result.default;
    throw t._result
}
var Ft = {
    current: null
},
    ia = {
        transition: null
    },
    G_ = {
        ReactCurrentDispatcher: Ft,
        ReactCurrentBatchConfig: ia,
        ReactCurrentOwner: Lf
    };

function im() {
    throw Error("act(...) is not supported in production builds of React.")
}
te.Children = {
    map: Po,
    forEach: function (t, e, n) {
        Po(t, function () {
            e.apply(this, arguments)
        }, n)
    },
    count: function (t) {
        var e = 0;
        return Po(t, function () {
            e++
        }), e
    },
    toArray: function (t) {
        return Po(t, function (e) {
            return e
        }) || []
    },
    only: function (t) {
        if (!Df(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
te.Component = Qs;
te.Fragment = j_;
te.Profiler = F_;
te.PureComponent = Mf;
te.StrictMode = I_;
te.Suspense = H_;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G_;
te.act = im;
te.cloneElement = function (t, e, n) {
    if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = Zp({}, t.props),
        i = t.key,
        s = t.ref,
        l = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (s = e.ref, l = Lf.current), e.key !== void 0 && (i = "" + e.key), t.type && t.type.defaultProps) var o = t.type.defaultProps;
        for (a in e) tm.call(e, a) && !nm.hasOwnProperty(a) && (r[a] = e[a] === void 0 && o !== void 0 ? o[a] : e[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        o = Array(a);
        for (var u = 0; u < a; u++) o[u] = arguments[u + 2];
        r.children = o
    }
    return {
        $$typeof: vo,
        type: t.type,
        key: i,
        ref: s,
        props: r,
        _owner: l
    }
};
te.createContext = function (t) {
    return t = {
        $$typeof: U_,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, t.Provider = {
        $$typeof: B_,
        _context: t
    }, t.Consumer = t
};
te.createElement = rm;
te.createFactory = function (t) {
    var e = rm.bind(null, t);
    return e.type = t, e
};
te.createRef = function () {
    return {
        current: null
    }
};
te.forwardRef = function (t) {
    return {
        $$typeof: V_,
        render: t
    }
};
te.isValidElement = Df;
te.lazy = function (t) {
    return {
        $$typeof: $_,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: Q_
    }
};
te.memo = function (t, e) {
    return {
        $$typeof: W_,
        type: t,
        compare: e === void 0 ? null : e
    }
};
te.startTransition = function (t) {
    var e = ia.transition;
    ia.transition = {};
    try {
        t()
    } finally {
        ia.transition = e
    }
};
te.unstable_act = im;
te.useCallback = function (t, e) {
    return Ft.current.useCallback(t, e)
};
te.useContext = function (t) {
    return Ft.current.useContext(t)
};
te.useDebugValue = function () { };
te.useDeferredValue = function (t) {
    return Ft.current.useDeferredValue(t)
};
te.useEffect = function (t, e) {
    return Ft.current.useEffect(t, e)
};
te.useId = function () {
    return Ft.current.useId()
};
te.useImperativeHandle = function (t, e, n) {
    return Ft.current.useImperativeHandle(t, e, n)
};
te.useInsertionEffect = function (t, e) {
    return Ft.current.useInsertionEffect(t, e)
};
te.useLayoutEffect = function (t, e) {
    return Ft.current.useLayoutEffect(t, e)
};
te.useMemo = function (t, e) {
    return Ft.current.useMemo(t, e)
};
te.useReducer = function (t, e, n) {
    return Ft.current.useReducer(t, e, n)
};
te.useRef = function (t) {
    return Ft.current.useRef(t)
};
te.useState = function (t) {
    return Ft.current.useState(t)
};
te.useSyncExternalStore = function (t, e, n) {
    return Ft.current.useSyncExternalStore(t, e, n)
};
te.useTransition = function () {
    return Ft.current.useTransition()
};
te.version = "18.3.1";
Kp.exports = te;
var H = Kp.exports;
const K_ = D_(H);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q_ = H,
    Z_ = Symbol.for("react.element"),
    J_ = Symbol.for("react.fragment"),
    ev = Object.prototype.hasOwnProperty,
    tv = q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    nv = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function sm(t, e, n) {
    var r, i = {},
        s = null,
        l = null;
    n !== void 0 && (s = "" + n), e.key !== void 0 && (s = "" + e.key), e.ref !== void 0 && (l = e.ref);
    for (r in e) ev.call(e, r) && !nv.hasOwnProperty(r) && (i[r] = e[r]);
    if (t && t.defaultProps)
        for (r in e = t.defaultProps, e) i[r] === void 0 && (i[r] = e[r]);
    return {
        $$typeof: Z_,
        type: t,
        key: s,
        ref: l,
        props: i,
        _owner: tv.current
    }
}
su.Fragment = J_;
su.jsx = sm;
su.jsxs = sm;
Gp.exports = su;
var w = Gp.exports,
    hc = {},
    lm = {
        exports: {}
    },
    _n = {},
    om = {
        exports: {}
    },
    am = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (t) {
    function e(R, D) {
        var S = R.length;
        R.push(D);
        e: for (; 0 < S;) {
            var W = S - 1 >>> 1,
                se = R[W];
            if (0 < i(se, D)) R[W] = D, R[S] = se, S = W;
            else break e
        }
    }

    function n(R) {
        return R.length === 0 ? null : R[0]
    }

    function r(R) {
        if (R.length === 0) return null;
        var D = R[0],
            S = R.pop();
        if (S !== D) {
            R[0] = S;
            e: for (var W = 0, se = R.length, dt = se >>> 1; W < dt;) {
                var ue = 2 * (W + 1) - 1,
                    je = R[ue],
                    we = ue + 1,
                    _e = R[we];
                if (0 > i(je, S)) we < se && 0 > i(_e, je) ? (R[W] = _e, R[we] = S, W = we) : (R[W] = je, R[ue] = S, W = ue);
                else if (we < se && 0 > i(_e, S)) R[W] = _e, R[we] = S, W = we;
                else break e
            }
        }
        return D
    }

    function i(R, D) {
        var S = R.sortIndex - D.sortIndex;
        return S !== 0 ? S : R.id - D.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        t.unstable_now = function () {
            return s.now()
        }
    } else {
        var l = Date,
            o = l.now();
        t.unstable_now = function () {
            return l.now() - o
        }
    }
    var a = [],
        u = [],
        c = 1,
        h = null,
        f = 3,
        d = !1,
        g = !1,
        p = !1,
        x = typeof setTimeout == "function" ? setTimeout : null,
        _ = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(R) {
        for (var D = n(u); D !== null;) {
            if (D.callback === null) r(u);
            else if (D.startTime <= R) r(u), D.sortIndex = D.expirationTime, e(a, D);
            else break;
            D = n(u)
        }
    }

    function y(R) {
        if (p = !1, v(R), !g)
            if (n(a) !== null) g = !0, K(k);
            else {
                var D = n(u);
                D !== null && U(y, D.startTime - R)
            }
    }

    function k(R, D) {
        g = !1, p && (p = !1, _(C), C = -1), d = !0;
        var S = f;
        try {
            for (v(D), h = n(a); h !== null && (!(h.expirationTime > D) || R && !F());) {
                var W = h.callback;
                if (typeof W == "function") {
                    h.callback = null, f = h.priorityLevel;
                    var se = W(h.expirationTime <= D);
                    D = t.unstable_now(), typeof se == "function" ? h.callback = se : h === n(a) && r(a), v(D)
                } else r(a);
                h = n(a)
            }
            if (h !== null) var dt = !0;
            else {
                var ue = n(u);
                ue !== null && U(y, ue.startTime - D), dt = !1
            }
            return dt
        } finally {
            h = null, f = S, d = !1
        }
    }
    var E = !1,
        T = null,
        C = -1,
        O = 5,
        N = -1;

    function F() {
        return !(t.unstable_now() - N < O)
    }

    function z() {
        if (T !== null) {
            var R = t.unstable_now();
            N = R;
            var D = !0;
            try {
                D = T(!0, R)
            } finally {
                D ? X() : (E = !1, T = null)
            }
        } else E = !1
    }
    var X;
    if (typeof m == "function") X = function () {
        m(z)
    };
    else if (typeof MessageChannel < "u") {
        var G = new MessageChannel,
            ne = G.port2;
        G.port1.onmessage = z, X = function () {
            ne.postMessage(null)
        }
    } else X = function () {
        x(z, 0)
    };

    function K(R) {
        T = R, E || (E = !0, X())
    }

    function U(R, D) {
        C = x(function () {
            R(t.unstable_now())
        }, D)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (R) {
        R.callback = null
    }, t.unstable_continueExecution = function () {
        g || d || (g = !0, K(k))
    }, t.unstable_forceFrameRate = function (R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < R ? Math.floor(1e3 / R) : 5
    }, t.unstable_getCurrentPriorityLevel = function () {
        return f
    }, t.unstable_getFirstCallbackNode = function () {
        return n(a)
    }, t.unstable_next = function (R) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var D = 3;
                break;
            default:
                D = f
        }
        var S = f;
        f = D;
        try {
            return R()
        } finally {
            f = S
        }
    }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (R, D) {
        switch (R) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                R = 3
        }
        var S = f;
        f = R;
        try {
            return D()
        } finally {
            f = S
        }
    }, t.unstable_scheduleCallback = function (R, D, S) {
        var W = t.unstable_now();
        switch (typeof S == "object" && S !== null ? (S = S.delay, S = typeof S == "number" && 0 < S ? W + S : W) : S = W, R) {
            case 1:
                var se = -1;
                break;
            case 2:
                se = 250;
                break;
            case 5:
                se = 1073741823;
                break;
            case 4:
                se = 1e4;
                break;
            default:
                se = 5e3
        }
        return se = S + se, R = {
            id: c++,
            callback: D,
            priorityLevel: R,
            startTime: S,
            expirationTime: se,
            sortIndex: -1
        }, S > W ? (R.sortIndex = S, e(u, R), n(a) === null && R === n(u) && (p ? (_(C), C = -1) : p = !0, U(y, S - W))) : (R.sortIndex = se, e(a, R), g || d || (g = !0, K(k))), R
    }, t.unstable_shouldYield = F, t.unstable_wrapCallback = function (R) {
        var D = f;
        return function () {
            var S = f;
            f = D;
            try {
                return R.apply(this, arguments)
            } finally {
                f = S
            }
        }
    }
})(am);
om.exports = am;
var rv = om.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iv = H,
    pn = rv;

function M(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var um = new Set,
    Yl = {};

function Gi(t, e) {
    Ds(t, e), Ds(t + "Capture", e)
}

function Ds(t, e) {
    for (Yl[t] = e, t = 0; t < e.length; t++) um.add(e[t])
}
var xr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    pc = Object.prototype.hasOwnProperty,
    sv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    th = {},
    nh = {};

function lv(t) {
    return pc.call(nh, t) ? !0 : pc.call(th, t) ? !1 : sv.test(t) ? nh[t] = !0 : (th[t] = !0, !1)
}

function ov(t, e, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
        default:
            return !1
    }
}

function av(t, e, n, r) {
    if (e === null || typeof e > "u" || ov(t, e, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
    }
    return !1
}

function Bt(t, e, n, r, i, s, l) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = s, this.removeEmptyString = l
}
var ft = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (t) {
    ft[t] = new Bt(t, 0, !1, t, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function (t) {
    var e = t[0];
    ft[e] = new Bt(e, 1, !1, t[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
    ft[t] = new Bt(t, 2, !1, t.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (t) {
    ft[t] = new Bt(t, 2, !1, t, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (t) {
    ft[t] = new Bt(t, 3, !1, t.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (t) {
    ft[t] = new Bt(t, 3, !0, t, null, !1, !1)
});
["capture", "download"].forEach(function (t) {
    ft[t] = new Bt(t, 4, !1, t, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (t) {
    ft[t] = new Bt(t, 6, !1, t, null, !1, !1)
});
["rowSpan", "start"].forEach(function (t) {
    ft[t] = new Bt(t, 5, !1, t.toLowerCase(), null, !1, !1)
});
var Af = /[\-:]([a-z])/g;

function jf(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (t) {
    var e = t.replace(Af, jf);
    ft[e] = new Bt(e, 1, !1, t, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (t) {
    var e = t.replace(Af, jf);
    ft[e] = new Bt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
    var e = t.replace(Af, jf);
    ft[e] = new Bt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (t) {
    ft[t] = new Bt(t, 1, !1, t.toLowerCase(), null, !1, !1)
});
ft.xlinkHref = new Bt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (t) {
    ft[t] = new Bt(t, 1, !1, t.toLowerCase(), null, !0, !0)
});

function If(t, e, n, r) {
    var i = ft.hasOwnProperty(e) ? ft[e] : null;
    (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (av(e, n, i, r) && (n = null), r || i === null ? lv(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName, r = i.attributeNamespace, n === null ? t.removeAttribute(e) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var Pr = iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    No = Symbol.for("react.element"),
    os = Symbol.for("react.portal"),
    as = Symbol.for("react.fragment"),
    Ff = Symbol.for("react.strict_mode"),
    mc = Symbol.for("react.profiler"),
    cm = Symbol.for("react.provider"),
    fm = Symbol.for("react.context"),
    Bf = Symbol.for("react.forward_ref"),
    gc = Symbol.for("react.suspense"),
    _c = Symbol.for("react.suspense_list"),
    Uf = Symbol.for("react.memo"),
    Ir = Symbol.for("react.lazy"),
    dm = Symbol.for("react.offscreen"),
    rh = Symbol.iterator;

function tl(t) {
    return t === null || typeof t != "object" ? null : (t = rh && t[rh] || t["@@iterator"], typeof t == "function" ? t : null)
}
var Me = Object.assign,
    Pu;

function dl(t) {
    if (Pu === void 0) try {
        throw Error()
    } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Pu = e && e[1] || ""
    }
    return `
` + Pu + t
}
var Nu = !1;

function Ou(t, e) {
    if (!t || Nu) return "";
    Nu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function () {
                throw Error()
            }, Object.defineProperty(e.prototype, "props", {
                set: function () {
                    throw Error()
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    r = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            t()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), l = i.length - 1, o = s.length - 1; 1 <= l && 0 <= o && i[l] !== s[o];) o--;
            for (; 1 <= l && 0 <= o; l--, o--)
                if (i[l] !== s[o]) {
                    if (l !== 1 || o !== 1)
                        do
                            if (l--, o--, 0 > o || i[l] !== s[o]) {
                                var a = `
` + i[l].replace(" at new ", " at ");
                                return t.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", t.displayName)), a
                            } while (1 <= l && 0 <= o);
                    break
                }
        }
    } finally {
        Nu = !1, Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? dl(t) : ""
}

function uv(t) {
    switch (t.tag) {
        case 5:
            return dl(t.type);
        case 16:
            return dl("Lazy");
        case 13:
            return dl("Suspense");
        case 19:
            return dl("SuspenseList");
        case 0:
        case 2:
        case 15:
            return t = Ou(t.type, !1), t;
        case 11:
            return t = Ou(t.type.render, !1), t;
        case 1:
            return t = Ou(t.type, !0), t;
        default:
            return ""
    }
}

function vc(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
        case as:
            return "Fragment";
        case os:
            return "Portal";
        case mc:
            return "Profiler";
        case Ff:
            return "StrictMode";
        case gc:
            return "Suspense";
        case _c:
            return "SuspenseList"
    }
    if (typeof t == "object") switch (t.$$typeof) {
        case fm:
            return (t.displayName || "Context") + ".Consumer";
        case cm:
            return (t._context.displayName || "Context") + ".Provider";
        case Bf:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Uf:
            return e = t.displayName || null, e !== null ? e : vc(t.type) || "Memo";
        case Ir:
            e = t._payload, t = t._init;
            try {
                return vc(t(e))
            } catch { }
    }
    return null
}

function cv(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (e.displayName || "Context") + ".Consumer";
        case 10:
            return (e._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return e;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return vc(e);
        case 8:
            return e === Ff ? "StrictMode" : "Mode";
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
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e
    }
    return null
}

function si(t) {
    switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
    }
}

function hm(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}

function fv(t) {
    var e = hm(t) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            s = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function () {
                return i.call(this)
            },
            set: function (l) {
                r = "" + l, s.call(this, l)
            }
        }), Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }), {
            getValue: function () {
                return r
            },
            setValue: function (l) {
                r = "" + l
            },
            stopTracking: function () {
                t._valueTracker = null, delete t[e]
            }
        }
    }
}

function Oo(t) {
    t._valueTracker || (t._valueTracker = fv(t))
}

function pm(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
        r = "";
    return t && (r = hm(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1
}

function Ta(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}

function yc(t, e) {
    var n = e.checked;
    return Me({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}

function ih(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue,
        r = e.checked != null ? e.checked : e.defaultChecked;
    n = si(e.value != null ? e.value : n), t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}

function mm(t, e) {
    e = e.checked, e != null && If(t, "checked", e, !1)
}

function wc(t, e) {
    mm(t, e);
    var n = si(e.value),
        r = e.type;
    if (n != null) r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? xc(t, e.type, n) : e.hasOwnProperty("defaultValue") && xc(t, e.type, si(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}

function sh(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null)) return;
        e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
    }
    n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n)
}

function xc(t, e, n) {
    (e !== "number" || Ta(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var hl = Array.isArray;

function Ss(t, e, n, r) {
    if (t = t.options, e) {
        e = {};
        for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
        for (n = 0; n < t.length; n++) i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + si(n), e = null, i = 0; i < t.length; i++) {
            if (t[i].value === n) {
                t[i].selected = !0, r && (t[i].defaultSelected = !0);
                return
            }
            e !== null || t[i].disabled || (e = t[i])
        }
        e !== null && (e.selected = !0)
    }
}

function Sc(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(M(91));
    return Me({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}

function lh(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children, e = e.defaultValue, n != null) {
            if (e != null) throw Error(M(92));
            if (hl(n)) {
                if (1 < n.length) throw Error(M(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""), n = e
    }
    t._wrapperState = {
        initialValue: si(n)
    }
}

function gm(t, e) {
    var n = si(e.value),
        r = si(e.defaultValue);
    n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r)
}

function oh(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}

function _m(t) {
    switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function kc(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? _m(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var Ro, vm = function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (e, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i)
        })
    } : t
}(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
    else {
        for (Ro = Ro || document.createElement("div"), Ro.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Ro.firstChild; t.firstChild;) t.removeChild(t.firstChild);
        for (; e.firstChild;) t.appendChild(e.firstChild)
    }
});

function Xl(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var kl = {
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
    strokeWidth: !0
},
    dv = ["Webkit", "ms", "Moz", "O"];
Object.keys(kl).forEach(function (t) {
    dv.forEach(function (e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1), kl[e] = kl[t]
    })
});

function ym(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || kl.hasOwnProperty(t) && kl[t] ? ("" + e).trim() : e + "px"
}

function wm(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = ym(n, e[n], r);
            n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i
        }
}
var hv = Me({
    menuitem: !0
}, {
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
    wbr: !0
});

function Tc(t, e) {
    if (e) {
        if (hv[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(M(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(M(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(M(61))
        }
        if (e.style != null && typeof e.style != "object") throw Error(M(62))
    }
}

function Ec(t, e) {
    if (t.indexOf("-") === -1) return typeof e.is == "string";
    switch (t) {
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
            return !0
    }
}
var Cc = null;

function Vf(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
}
var Pc = null,
    ks = null,
    Ts = null;

function ah(t) {
    if (t = xo(t)) {
        if (typeof Pc != "function") throw Error(M(280));
        var e = t.stateNode;
        e && (e = cu(e), Pc(t.stateNode, t.type, e))
    }
}

function xm(t) {
    ks ? Ts ? Ts.push(t) : Ts = [t] : ks = t
}

function Sm() {
    if (ks) {
        var t = ks,
            e = Ts;
        if (Ts = ks = null, ah(t), e)
            for (t = 0; t < e.length; t++) ah(e[t])
    }
}

function km(t, e) {
    return t(e)
}

function Tm() { }
var Ru = !1;

function Em(t, e, n) {
    if (Ru) return t(e, n);
    Ru = !0;
    try {
        return km(t, e, n)
    } finally {
        Ru = !1, (ks !== null || Ts !== null) && (Tm(), Sm())
    }
}

function bl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var r = cu(n);
    if (r === null) return null;
    n = r[e];
    e: switch (e) {
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
            (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
            break e;
        default:
            t = !1
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(M(231, e, typeof n));
    return n
}
var Nc = !1;
if (xr) try {
    var nl = {};
    Object.defineProperty(nl, "passive", {
        get: function () {
            Nc = !0
        }
    }), window.addEventListener("test", nl, nl), window.removeEventListener("test", nl, nl)
} catch {
    Nc = !1
}

function pv(t, e, n, r, i, s, l, o, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Tl = !1,
    Ea = null,
    Ca = !1,
    Oc = null,
    mv = {
        onError: function (t) {
            Tl = !0, Ea = t
        }
    };

function gv(t, e, n, r, i, s, l, o, a) {
    Tl = !1, Ea = null, pv.apply(mv, arguments)
}

function _v(t, e, n, r, i, s, l, o, a) {
    if (gv.apply(this, arguments), Tl) {
        if (Tl) {
            var u = Ea;
            Tl = !1, Ea = null
        } else throw Error(M(198));
        Ca || (Ca = !0, Oc = u)
    }
}

function Ki(t) {
    var e = t,
        n = t;
    if (t.alternate)
        for (; e.return;) e = e.return;
    else {
        t = e;
        do e = t, e.flags & 4098 && (n = e.return), t = e.return; while (t)
    }
    return e.tag === 3 ? n : null
}

function Cm(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
    }
    return null
}

function uh(t) {
    if (Ki(t) !== t) throw Error(M(188))
}

function vv(t) {
    var e = t.alternate;
    if (!e) {
        if (e = Ki(t), e === null) throw Error(M(188));
        return e !== t ? null : t
    }
    for (var n = t, r = e; ;) {
        var i = n.return;
        if (i === null) break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s;) {
                if (s === n) return uh(i), t;
                if (s === r) return uh(i), e;
                s = s.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== r.return) n = i, r = s;
        else {
            for (var l = !1, o = i.child; o;) {
                if (o === n) {
                    l = !0, n = i, r = s;
                    break
                }
                if (o === r) {
                    l = !0, r = i, n = s;
                    break
                }
                o = o.sibling
            }
            if (!l) {
                for (o = s.child; o;) {
                    if (o === n) {
                        l = !0, n = s, r = i;
                        break
                    }
                    if (o === r) {
                        l = !0, r = s, n = i;
                        break
                    }
                    o = o.sibling
                }
                if (!l) throw Error(M(189))
            }
        }
        if (n.alternate !== r) throw Error(M(190))
    }
    if (n.tag !== 3) throw Error(M(188));
    return n.stateNode.current === n ? t : e
}

function Pm(t) {
    return t = vv(t), t !== null ? Nm(t) : null
}

function Nm(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null;) {
        var e = Nm(t);
        if (e !== null) return e;
        t = t.sibling
    }
    return null
}
var Om = pn.unstable_scheduleCallback,
    ch = pn.unstable_cancelCallback,
    yv = pn.unstable_shouldYield,
    wv = pn.unstable_requestPaint,
    Ve = pn.unstable_now,
    xv = pn.unstable_getCurrentPriorityLevel,
    Hf = pn.unstable_ImmediatePriority,
    Rm = pn.unstable_UserBlockingPriority,
    Pa = pn.unstable_NormalPriority,
    Sv = pn.unstable_LowPriority,
    Mm = pn.unstable_IdlePriority,
    lu = null,
    nr = null;

function kv(t) {
    if (nr && typeof nr.onCommitFiberRoot == "function") try {
        nr.onCommitFiberRoot(lu, t, void 0, (t.current.flags & 128) === 128)
    } catch { }
}
var Hn = Math.clz32 ? Math.clz32 : Cv,
    Tv = Math.log,
    Ev = Math.LN2;

function Cv(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Tv(t) / Ev | 0) | 0
}
var Mo = 64,
    zo = 4194304;

function pl(t) {
    switch (t & -t) {
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
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t
    }
}

function Na(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = t.suspendedLanes,
        s = t.pingedLanes,
        l = n & 268435455;
    if (l !== 0) {
        var o = l & ~i;
        o !== 0 ? r = pl(o) : (s &= l, s !== 0 && (r = pl(s)))
    } else l = n & ~i, l !== 0 ? r = pl(l) : s !== 0 && (r = pl(s));
    if (r === 0) return 0;
    if (e !== 0 && e !== r && !(e & i) && (i = r & -r, s = e & -e, i >= s || i === 16 && (s & 4194240) !== 0)) return e;
    if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0)
        for (t = t.entanglements, e &= r; 0 < e;) n = 31 - Hn(e), i = 1 << n, r |= t[n], e &= ~i;
    return r
}

function Pv(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
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
            return e + 5e3;
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
            return -1
    }
}

function Nv(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, s = t.pendingLanes; 0 < s;) {
        var l = 31 - Hn(s),
            o = 1 << l,
            a = i[l];
        a === -1 ? (!(o & n) || o & r) && (i[l] = Pv(o, e)) : a <= e && (t.expiredLanes |= o), s &= ~o
    }
}

function Rc(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}

function zm() {
    var t = Mo;
    return Mo <<= 1, !(Mo & 4194240) && (Mo = 64), t
}

function Mu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e
}

function yo(t, e, n) {
    t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - Hn(e), t[e] = n
}

function Ov(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n;) {
        var i = 31 - Hn(n),
            s = 1 << i;
        e[i] = 0, r[i] = -1, t[i] = -1, n &= ~s
    }
}

function Wf(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n;) {
        var r = 31 - Hn(n),
            i = 1 << r;
        i & e | t[r] & e && (t[r] |= e), n &= ~i
    }
}
var fe = 0;

function Lm(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Dm, $f, Am, jm, Im, Mc = !1,
    Lo = [],
    Qr = null,
    Gr = null,
    Kr = null,
    Ql = new Map,
    Gl = new Map,
    Br = [],
    Rv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function fh(t, e) {
    switch (t) {
        case "focusin":
        case "focusout":
            Qr = null;
            break;
        case "dragenter":
        case "dragleave":
            Gr = null;
            break;
        case "mouseover":
        case "mouseout":
            Kr = null;
            break;
        case "pointerover":
        case "pointerout":
            Ql.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Gl.delete(e.pointerId)
    }
}

function rl(t, e, n, r, i, s) {
    return t === null || t.nativeEvent !== s ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    }, e !== null && (e = xo(e), e !== null && $f(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t)
}

function Mv(t, e, n, r, i) {
    switch (e) {
        case "focusin":
            return Qr = rl(Qr, t, e, n, r, i), !0;
        case "dragenter":
            return Gr = rl(Gr, t, e, n, r, i), !0;
        case "mouseover":
            return Kr = rl(Kr, t, e, n, r, i), !0;
        case "pointerover":
            var s = i.pointerId;
            return Ql.set(s, rl(Ql.get(s) || null, t, e, n, r, i)), !0;
        case "gotpointercapture":
            return s = i.pointerId, Gl.set(s, rl(Gl.get(s) || null, t, e, n, r, i)), !0
    }
    return !1
}

function Fm(t) {
    var e = Pi(t.target);
    if (e !== null) {
        var n = Ki(e);
        if (n !== null) {
            if (e = n.tag, e === 13) {
                if (e = Cm(n), e !== null) {
                    t.blockedOn = e, Im(t.priority, function () {
                        Am(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}

function sa(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
        var n = zc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type, n);
            Cc = r, n.target.dispatchEvent(r), Cc = null
        } else return e = xo(n), e !== null && $f(e), t.blockedOn = n, !1;
        e.shift()
    }
    return !0
}

function dh(t, e, n) {
    sa(t) && n.delete(e)
}

function zv() {
    Mc = !1, Qr !== null && sa(Qr) && (Qr = null), Gr !== null && sa(Gr) && (Gr = null), Kr !== null && sa(Kr) && (Kr = null), Ql.forEach(dh), Gl.forEach(dh)
}

function il(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Mc || (Mc = !0, pn.unstable_scheduleCallback(pn.unstable_NormalPriority, zv)))
}

function Kl(t) {
    function e(i) {
        return il(i, t)
    }
    if (0 < Lo.length) {
        il(Lo[0], t);
        for (var n = 1; n < Lo.length; n++) {
            var r = Lo[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (Qr !== null && il(Qr, t), Gr !== null && il(Gr, t), Kr !== null && il(Kr, t), Ql.forEach(e), Gl.forEach(e), n = 0; n < Br.length; n++) r = Br[n], r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < Br.length && (n = Br[0], n.blockedOn === null);) Fm(n), n.blockedOn === null && Br.shift()
}
var Es = Pr.ReactCurrentBatchConfig,
    Oa = !0;

function Lv(t, e, n, r) {
    var i = fe,
        s = Es.transition;
    Es.transition = null;
    try {
        fe = 1, Yf(t, e, n, r)
    } finally {
        fe = i, Es.transition = s
    }
}

function Dv(t, e, n, r) {
    var i = fe,
        s = Es.transition;
    Es.transition = null;
    try {
        fe = 4, Yf(t, e, n, r)
    } finally {
        fe = i, Es.transition = s
    }
}

function Yf(t, e, n, r) {
    if (Oa) {
        var i = zc(t, e, n, r);
        if (i === null) Vu(t, e, r, Ra, n), fh(t, r);
        else if (Mv(i, t, e, n, r)) r.stopPropagation();
        else if (fh(t, r), e & 4 && -1 < Rv.indexOf(t)) {
            for (; i !== null;) {
                var s = xo(i);
                if (s !== null && Dm(s), s = zc(t, e, n, r), s === null && Vu(t, e, r, Ra, n), s === i) break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else Vu(t, e, r, null, n)
    }
}
var Ra = null;

function zc(t, e, n, r) {
    if (Ra = null, t = Vf(r), t = Pi(t), t !== null)
        if (e = Ki(t), e === null) t = null;
        else if (n = e.tag, n === 13) {
            if (t = Cm(e), t !== null) return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else e !== t && (t = null);
    return Ra = t, null
}

function Bm(t) {
    switch (t) {
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
            switch (xv()) {
                case Hf:
                    return 1;
                case Rm:
                    return 4;
                case Pa:
                case Sv:
                    return 16;
                case Mm:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Vr = null,
    Xf = null,
    la = null;

function Um() {
    if (la) return la;
    var t, e = Xf,
        n = e.length,
        r, i = "value" in Vr ? Vr.value : Vr.textContent,
        s = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++);
    var l = n - t;
    for (r = 1; r <= l && e[n - r] === i[s - r]; r++);
    return la = i.slice(t, 1 < r ? 1 - r : void 0)
}

function oa(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
}

function Do() {
    return !0
}

function hh() {
    return !1
}

function vn(t) {
    function e(n, r, i, s, l) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = l, this.currentTarget = null;
        for (var o in t) t.hasOwnProperty(o) && (n = t[o], this[o] = n ? n(s) : s[o]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Do : hh, this.isPropagationStopped = hh, this
    }
    return Me(e.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Do)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Do)
        },
        persist: function () { },
        isPersistent: Do
    }), e
}
var Gs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
},
    bf = vn(Gs),
    wo = Me({}, Gs, {
        view: 0,
        detail: 0
    }),
    Av = vn(wo),
    zu, Lu, sl, ou = Me({}, wo, {
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
        getModifierState: Qf,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function (t) {
            return "movementX" in t ? t.movementX : (t !== sl && (sl && t.type === "mousemove" ? (zu = t.screenX - sl.screenX, Lu = t.screenY - sl.screenY) : Lu = zu = 0, sl = t), zu)
        },
        movementY: function (t) {
            return "movementY" in t ? t.movementY : Lu
        }
    }),
    ph = vn(ou),
    jv = Me({}, ou, {
        dataTransfer: 0
    }),
    Iv = vn(jv),
    Fv = Me({}, wo, {
        relatedTarget: 0
    }),
    Du = vn(Fv),
    Bv = Me({}, Gs, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Uv = vn(Bv),
    Vv = Me({}, Gs, {
        clipboardData: function (t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData
        }
    }),
    Hv = vn(Vv),
    Wv = Me({}, Gs, {
        data: 0
    }),
    mh = vn(Wv),
    $v = {
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
        MozPrintableKey: "Unidentified"
    },
    Yv = {
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
        224: "Meta"
    },
    Xv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function bv(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Xv[t]) ? !!e[t] : !1
}

function Qf() {
    return bv
}
var Qv = Me({}, wo, {
    key: function (t) {
        if (t.key) {
            var e = $v[t.key] || t.key;
            if (e !== "Unidentified") return e
        }
        return t.type === "keypress" ? (t = oa(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Yv[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qf,
    charCode: function (t) {
        return t.type === "keypress" ? oa(t) : 0
    },
    keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function (t) {
        return t.type === "keypress" ? oa(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
}),
    Gv = vn(Qv),
    Kv = Me({}, ou, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    gh = vn(Kv),
    qv = Me({}, wo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Qf
    }),
    Zv = vn(qv),
    Jv = Me({}, Gs, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    ey = vn(Jv),
    ty = Me({}, ou, {
        deltaX: function (t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
        },
        deltaY: function (t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    ny = vn(ty),
    ry = [9, 13, 27, 32],
    Gf = xr && "CompositionEvent" in window,
    El = null;
xr && "documentMode" in document && (El = document.documentMode);
var iy = xr && "TextEvent" in window && !El,
    Vm = xr && (!Gf || El && 8 < El && 11 >= El),
    _h = " ",
    vh = !1;

function Hm(t, e) {
    switch (t) {
        case "keyup":
            return ry.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Wm(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
}
var us = !1;

function sy(t, e) {
    switch (t) {
        case "compositionend":
            return Wm(e);
        case "keypress":
            return e.which !== 32 ? null : (vh = !0, _h);
        case "textInput":
            return t = e.data, t === _h && vh ? null : t;
        default:
            return null
    }
}

function ly(t, e) {
    if (us) return t === "compositionend" || !Gf && Hm(t, e) ? (t = Um(), la = Xf = Vr = null, us = !1, t) : null;
    switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return Vm && e.locale !== "ko" ? null : e.data;
        default:
            return null
    }
}
var oy = {
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
    week: !0
};

function yh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!oy[t.type] : e === "textarea"
}

function $m(t, e, n, r) {
    xm(r), e = Ma(e, "onChange"), 0 < e.length && (n = new bf("onChange", "change", null, n, r), t.push({
        event: n,
        listeners: e
    }))
}
var Cl = null,
    ql = null;

function ay(t) {
    t0(t, 0)
}

function au(t) {
    var e = ds(t);
    if (pm(e)) return t
}

function uy(t, e) {
    if (t === "change") return e
}
var Ym = !1;
if (xr) {
    var Au;
    if (xr) {
        var ju = "oninput" in document;
        if (!ju) {
            var wh = document.createElement("div");
            wh.setAttribute("oninput", "return;"), ju = typeof wh.oninput == "function"
        }
        Au = ju
    } else Au = !1;
    Ym = Au && (!document.documentMode || 9 < document.documentMode)
}

function xh() {
    Cl && (Cl.detachEvent("onpropertychange", Xm), ql = Cl = null)
}

function Xm(t) {
    if (t.propertyName === "value" && au(ql)) {
        var e = [];
        $m(e, ql, t, Vf(t)), Em(ay, e)
    }
}

function cy(t, e, n) {
    t === "focusin" ? (xh(), Cl = e, ql = n, Cl.attachEvent("onpropertychange", Xm)) : t === "focusout" && xh()
}

function fy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return au(ql)
}

function dy(t, e) {
    if (t === "click") return au(e)
}

function hy(t, e) {
    if (t === "input" || t === "change") return au(e)
}

function py(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var $n = typeof Object.is == "function" ? Object.is : py;

function Zl(t, e) {
    if ($n(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
        r = Object.keys(e);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!pc.call(e, i) || !$n(t[i], e[i])) return !1
    }
    return !0
}

function Sh(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t
}

function kh(t, e) {
    var n = Sh(t);
    t = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = t + n.textContent.length, t <= e && r >= e) return {
                node: n,
                offset: e - t
            };
            t = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Sh(n)
    }
}

function bm(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? bm(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}

function Qm() {
    for (var t = window, e = Ta(); e instanceof t.HTMLIFrameElement;) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) t = e.contentWindow;
        else break;
        e = Ta(t.document)
    }
    return e
}

function Kf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}

function my(t) {
    var e = Qm(),
        n = t.focusedElem,
        r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && bm(n.ownerDocument.documentElement, n)) {
        if (r !== null && Kf(n)) {
            if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
                t = t.getSelection();
                var i = n.textContent.length,
                    s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i), !t.extend && s > r && (i = r, r = s, s = i), i = kh(n, s);
                var l = kh(n, r);
                i && l && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== l.node || t.focusOffset !== l.offset) && (e = e.createRange(), e.setStart(i.node, i.offset), t.removeAllRanges(), s > r ? (t.addRange(e), t.extend(l.node, l.offset)) : (e.setEnd(l.node, l.offset), t.addRange(e)))
            }
        }
        for (e = [], t = n; t = t.parentNode;) t.nodeType === 1 && e.push({
            element: t,
            left: t.scrollLeft,
            top: t.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++) t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
    }
}
var gy = xr && "documentMode" in document && 11 >= document.documentMode,
    cs = null,
    Lc = null,
    Pl = null,
    Dc = !1;

function Th(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Dc || cs == null || cs !== Ta(r) || (r = cs, "selectionStart" in r && Kf(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Pl && Zl(Pl, r) || (Pl = r, r = Ma(Lc, "onSelect"), 0 < r.length && (e = new bf("onSelect", "select", null, e, n), t.push({
        event: e,
        listeners: r
    }), e.target = cs)))
}

function Ao(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
}
var fs = {
    animationend: Ao("Animation", "AnimationEnd"),
    animationiteration: Ao("Animation", "AnimationIteration"),
    animationstart: Ao("Animation", "AnimationStart"),
    transitionend: Ao("Transition", "TransitionEnd")
},
    Iu = {},
    Gm = {};
xr && (Gm = document.createElement("div").style, "AnimationEvent" in window || (delete fs.animationend.animation, delete fs.animationiteration.animation, delete fs.animationstart.animation), "TransitionEvent" in window || delete fs.transitionend.transition);

function uu(t) {
    if (Iu[t]) return Iu[t];
    if (!fs[t]) return t;
    var e = fs[t],
        n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in Gm) return Iu[t] = e[n];
    return t
}
var Km = uu("animationend"),
    qm = uu("animationiteration"),
    Zm = uu("animationstart"),
    Jm = uu("transitionend"),
    e0 = new Map,
    Eh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function fi(t, e) {
    e0.set(t, e), Gi(e, [t])
}
for (var Fu = 0; Fu < Eh.length; Fu++) {
    var Bu = Eh[Fu],
        _y = Bu.toLowerCase(),
        vy = Bu[0].toUpperCase() + Bu.slice(1);
    fi(_y, "on" + vy)
}
fi(Km, "onAnimationEnd");
fi(qm, "onAnimationIteration");
fi(Zm, "onAnimationStart");
fi("dblclick", "onDoubleClick");
fi("focusin", "onFocus");
fi("focusout", "onBlur");
fi(Jm, "onTransitionEnd");
Ds("onMouseEnter", ["mouseout", "mouseover"]);
Ds("onMouseLeave", ["mouseout", "mouseover"]);
Ds("onPointerEnter", ["pointerout", "pointerover"]);
Ds("onPointerLeave", ["pointerout", "pointerover"]);
Gi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Gi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Gi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Gi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Gi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ml = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    yy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ml));

function Ch(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n, _v(r, e, void 0, t), t.currentTarget = null
}

function t0(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n],
            i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (e)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var o = r[l],
                        a = o.instance,
                        u = o.currentTarget;
                    if (o = o.listener, a !== s && i.isPropagationStopped()) break e;
                    Ch(i, o, u), s = a
                } else
                for (l = 0; l < r.length; l++) {
                    if (o = r[l], a = o.instance, u = o.currentTarget, o = o.listener, a !== s && i.isPropagationStopped()) break e;
                    Ch(i, o, u), s = a
                }
        }
    }
    if (Ca) throw t = Oc, Ca = !1, Oc = null, t
}

function ve(t, e) {
    var n = e[Bc];
    n === void 0 && (n = e[Bc] = new Set);
    var r = t + "__bubble";
    n.has(r) || (n0(e, t, 2, !1), n.add(r))
}

function Uu(t, e, n) {
    var r = 0;
    e && (r |= 4), n0(n, t, r, e)
}
var jo = "_reactListening" + Math.random().toString(36).slice(2);

function Jl(t) {
    if (!t[jo]) {
        t[jo] = !0, um.forEach(function (n) {
            n !== "selectionchange" && (yy.has(n) || Uu(n, !1, t), Uu(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[jo] || (e[jo] = !0, Uu("selectionchange", !1, e))
    }
}

function n0(t, e, n, r) {
    switch (Bm(e)) {
        case 1:
            var i = Lv;
            break;
        case 4:
            i = Dv;
            break;
        default:
            i = Yf
    }
    n = i.bind(null, e, n, t), i = void 0, !Nc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), r ? i !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
        passive: i
    }) : t.addEventListener(e, n, !1)
}

function Vu(t, e, n, r, i) {
    var s = r;
    if (!(e & 1) && !(e & 2) && r !== null) e: for (; ;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
            var o = r.stateNode.containerInfo;
            if (o === i || o.nodeType === 8 && o.parentNode === i) break;
            if (l === 4)
                for (l = r.return; l !== null;) {
                    var a = l.tag;
                    if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
                    l = l.return
                }
            for (; o !== null;) {
                if (l = Pi(o), l === null) return;
                if (a = l.tag, a === 5 || a === 6) {
                    r = s = l;
                    continue e
                }
                o = o.parentNode
            }
        }
        r = r.return
    }
    Em(function () {
        var u = s,
            c = Vf(n),
            h = [];
        e: {
            var f = e0.get(t);
            if (f !== void 0) {
                var d = bf,
                    g = t;
                switch (t) {
                    case "keypress":
                        if (oa(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        d = Gv;
                        break;
                    case "focusin":
                        g = "focus", d = Du;
                        break;
                    case "focusout":
                        g = "blur", d = Du;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        d = Du;
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
                        d = ph;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        d = Iv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        d = Zv;
                        break;
                    case Km:
                    case qm:
                    case Zm:
                        d = Uv;
                        break;
                    case Jm:
                        d = ey;
                        break;
                    case "scroll":
                        d = Av;
                        break;
                    case "wheel":
                        d = ny;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        d = Hv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        d = gh
                }
                var p = (e & 4) !== 0,
                    x = !p && t === "scroll",
                    _ = p ? f !== null ? f + "Capture" : null : f;
                p = [];
                for (var m = u, v; m !== null;) {
                    v = m;
                    var y = v.stateNode;
                    if (v.tag === 5 && y !== null && (v = y, _ !== null && (y = bl(m, _), y != null && p.push(eo(m, y, v)))), x) break;
                    m = m.return
                }
                0 < p.length && (f = new d(f, g, null, n, c), h.push({
                    event: f,
                    listeners: p
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (f = t === "mouseover" || t === "pointerover", d = t === "mouseout" || t === "pointerout", f && n !== Cc && (g = n.relatedTarget || n.fromElement) && (Pi(g) || g[Sr])) break e;
                if ((d || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, d ? (g = n.relatedTarget || n.toElement, d = u, g = g ? Pi(g) : null, g !== null && (x = Ki(g), g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (d = null, g = u), d !== g)) {
                    if (p = ph, y = "onMouseLeave", _ = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (p = gh, y = "onPointerLeave", _ = "onPointerEnter", m = "pointer"), x = d == null ? f : ds(d), v = g == null ? f : ds(g), f = new p(y, m + "leave", d, n, c), f.target = x, f.relatedTarget = v, y = null, Pi(c) === u && (p = new p(_, m + "enter", g, n, c), p.target = v, p.relatedTarget = x, y = p), x = y, d && g) t: {
                        for (p = d, _ = g, m = 0, v = p; v; v = ts(v)) m++;
                        for (v = 0, y = _; y; y = ts(y)) v++;
                        for (; 0 < m - v;) p = ts(p),
                            m--;
                        for (; 0 < v - m;) _ = ts(_),
                            v--;
                        for (; m--;) {
                            if (p === _ || _ !== null && p === _.alternate) break t;
                            p = ts(p), _ = ts(_)
                        }
                        p = null
                    }
                    else p = null;
                    d !== null && Ph(h, f, d, p, !1), g !== null && x !== null && Ph(h, x, g, p, !0)
                }
            }
            e: {
                if (f = u ? ds(u) : window, d = f.nodeName && f.nodeName.toLowerCase(), d === "select" || d === "input" && f.type === "file") var k = uy;
                else if (yh(f))
                    if (Ym) k = hy;
                    else {
                        k = fy;
                        var E = cy
                    }
                else (d = f.nodeName) && d.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = dy);
                if (k && (k = k(t, u))) {
                    $m(h, k, n, c);
                    break e
                }
                E && E(t, f, u),
                    t === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && xc(f, "number", f.value)
            }
            switch (E = u ? ds(u) : window, t) {
                case "focusin":
                    (yh(E) || E.contentEditable === "true") && (cs = E, Lc = u, Pl = null);
                    break;
                case "focusout":
                    Pl = Lc = cs = null;
                    break;
                case "mousedown":
                    Dc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Dc = !1, Th(h, n, c);
                    break;
                case "selectionchange":
                    if (gy) break;
                case "keydown":
                case "keyup":
                    Th(h, n, c)
            }
            var T;
            if (Gf) e: {
                switch (t) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                }
                C = void 0
            }
            else us ? Hm(t, n) && (C = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (C = "onCompositionStart"); C && (Vm && n.locale !== "ko" && (us || C !== "onCompositionStart" ? C === "onCompositionEnd" && us && (T = Um()) : (Vr = c, Xf = "value" in Vr ? Vr.value : Vr.textContent, us = !0)), E = Ma(u, C), 0 < E.length && (C = new mh(C, t, null, n, c), h.push({
                event: C,
                listeners: E
            }), T ? C.data = T : (T = Wm(n), T !== null && (C.data = T)))),
                (T = iy ? sy(t, n) : ly(t, n)) && (u = Ma(u, "onBeforeInput"), 0 < u.length && (c = new mh("onBeforeInput", "beforeinput", null, n, c), h.push({
                    event: c,
                    listeners: u
                }), c.data = T))
        }
        t0(h, e)
    })
}

function eo(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}

function Ma(t, e) {
    for (var n = e + "Capture", r = []; t !== null;) {
        var i = t,
            s = i.stateNode;
        i.tag === 5 && s !== null && (i = s, s = bl(t, n), s != null && r.unshift(eo(t, s, i)), s = bl(t, e), s != null && r.push(eo(t, s, i))), t = t.return
    }
    return r
}

function ts(t) {
    if (t === null) return null;
    do t = t.return; while (t && t.tag !== 5);
    return t || null
}

function Ph(t, e, n, r, i) {
    for (var s = e._reactName, l = []; n !== null && n !== r;) {
        var o = n,
            a = o.alternate,
            u = o.stateNode;
        if (a !== null && a === r) break;
        o.tag === 5 && u !== null && (o = u, i ? (a = bl(n, s), a != null && l.unshift(eo(n, a, o))) : i || (a = bl(n, s), a != null && l.push(eo(n, a, o)))), n = n.return
    }
    l.length !== 0 && t.push({
        event: e,
        listeners: l
    })
}
var wy = /\r\n?/g,
    xy = /\u0000|\uFFFD/g;

function Nh(t) {
    return (typeof t == "string" ? t : "" + t).replace(wy, `
`).replace(xy, "")
}

function Io(t, e, n) {
    if (e = Nh(e), Nh(t) !== e && n) throw Error(M(425))
}

function za() { }
var Ac = null,
    jc = null;

function Ic(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var Fc = typeof setTimeout == "function" ? setTimeout : void 0,
    Sy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Oh = typeof Promise == "function" ? Promise : void 0,
    ky = typeof queueMicrotask == "function" ? queueMicrotask : typeof Oh < "u" ? function (t) {
        return Oh.resolve(null).then(t).catch(Ty)
    } : Fc;

function Ty(t) {
    setTimeout(function () {
        throw t
    })
}

function Hu(t, e) {
    var n = e,
        r = 0;
    do {
        var i = n.nextSibling;
        if (t.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    t.removeChild(i), Kl(e);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Kl(e)
}

function qr(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (e = t.data, e === "$" || e === "$!" || e === "$?") break;
            if (e === "/$") return null
        }
    }
    return t
}

function Rh(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0) return t;
                e--
            } else n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Ks = Math.random().toString(36).slice(2),
    Zn = "__reactFiber$" + Ks,
    to = "__reactProps$" + Ks,
    Sr = "__reactContainer$" + Ks,
    Bc = "__reactEvents$" + Ks,
    Ey = "__reactListeners$" + Ks,
    Cy = "__reactHandles$" + Ks;

function Pi(t) {
    var e = t[Zn];
    if (e) return e;
    for (var n = t.parentNode; n;) {
        if (e = n[Sr] || n[Zn]) {
            if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
                for (t = Rh(t); t !== null;) {
                    if (n = t[Zn]) return n;
                    t = Rh(t)
                }
            return e
        }
        t = n, n = t.parentNode
    }
    return null
}

function xo(t) {
    return t = t[Zn] || t[Sr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}

function ds(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(M(33))
}

function cu(t) {
    return t[to] || null
}
var Uc = [],
    hs = -1;

function di(t) {
    return {
        current: t
    }
}

function ye(t) {
    0 > hs || (t.current = Uc[hs], Uc[hs] = null, hs--)
}

function ge(t, e) {
    hs++, Uc[hs] = t.current, t.current = e
}
var li = {},
    Et = di(li),
    $t = di(!1),
    Vi = li;

function As(t, e) {
    var n = t.type.contextTypes;
    if (!n) return li;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        s;
    for (s in n) i[s] = e[s];
    return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = i), i
}

function Yt(t) {
    return t = t.childContextTypes, t != null
}

function La() {
    ye($t), ye(Et)
}

function Mh(t, e, n) {
    if (Et.current !== li) throw Error(M(168));
    ge(Et, e), ge($t, n)
}

function r0(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in e)) throw Error(M(108, cv(t) || "Unknown", i));
    return Me({}, n, r)
}

function Da(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || li, Vi = Et.current, ge(Et, t), ge($t, $t.current), !0
}

function zh(t, e, n) {
    var r = t.stateNode;
    if (!r) throw Error(M(169));
    n ? (t = r0(t, e, Vi), r.__reactInternalMemoizedMergedChildContext = t, ye($t), ye(Et), ge(Et, t)) : ye($t), ge($t, n)
}
var hr = null,
    fu = !1,
    Wu = !1;

function i0(t) {
    hr === null ? hr = [t] : hr.push(t)
}

function Py(t) {
    fu = !0, i0(t)
}

function hi() {
    if (!Wu && hr !== null) {
        Wu = !0;
        var t = 0,
            e = fe;
        try {
            var n = hr;
            for (fe = 1; t < n.length; t++) {
                var r = n[t];
                do r = r(!0); while (r !== null)
            }
            hr = null, fu = !1
        } catch (i) {
            throw hr !== null && (hr = hr.slice(t + 1)), Om(Hf, hi), i
        } finally {
            fe = e, Wu = !1
        }
    }
    return null
}
var ps = [],
    ms = 0,
    Aa = null,
    ja = 0,
    xn = [],
    Sn = 0,
    Hi = null,
    gr = 1,
    _r = "";

function Si(t, e) {
    ps[ms++] = ja, ps[ms++] = Aa, Aa = t, ja = e
}

function s0(t, e, n) {
    xn[Sn++] = gr, xn[Sn++] = _r, xn[Sn++] = Hi, Hi = t;
    var r = gr;
    t = _r;
    var i = 32 - Hn(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - Hn(e) + i;
    if (30 < s) {
        var l = i - i % 5;
        s = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, gr = 1 << 32 - Hn(e) + i | n << i | r, _r = s + t
    } else gr = 1 << s | n << i | r, _r = t
}

function qf(t) {
    t.return !== null && (Si(t, 1), s0(t, 1, 0))
}

function Zf(t) {
    for (; t === Aa;) Aa = ps[--ms], ps[ms] = null, ja = ps[--ms], ps[ms] = null;
    for (; t === Hi;) Hi = xn[--Sn], xn[Sn] = null, _r = xn[--Sn], xn[Sn] = null, gr = xn[--Sn], xn[Sn] = null
}
var dn = null,
    un = null,
    Se = !1,
    Vn = null;

function l0(t, e) {
    var n = En(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n)
}

function Lh(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, dn = t, un = qr(e.firstChild), !0) : !1;
        case 6:
            return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, dn = t, un = null, !0) : !1;
        case 13:
            return e = e.nodeType !== 8 ? null : e, e !== null ? (n = Hi !== null ? {
                id: gr,
                overflow: _r
            } : null, t.memoizedState = {
                dehydrated: e,
                treeContext: n,
                retryLane: 1073741824
            }, n = En(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, dn = t, un = null, !0) : !1;
        default:
            return !1
    }
}

function Vc(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}

function Hc(t) {
    if (Se) {
        var e = un;
        if (e) {
            var n = e;
            if (!Lh(t, e)) {
                if (Vc(t)) throw Error(M(418));
                e = qr(n.nextSibling);
                var r = dn;
                e && Lh(t, e) ? l0(r, n) : (t.flags = t.flags & -4097 | 2, Se = !1, dn = t)
            }
        } else {
            if (Vc(t)) throw Error(M(418));
            t.flags = t.flags & -4097 | 2, Se = !1, dn = t
        }
    }
}

function Dh(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) t = t.return;
    dn = t
}

function Fo(t) {
    if (t !== dn) return !1;
    if (!Se) return Dh(t), Se = !0, !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !Ic(t.type, t.memoizedProps)), e && (e = un)) {
        if (Vc(t)) throw o0(), Error(M(418));
        for (; e;) l0(t, e), e = qr(e.nextSibling)
    }
    if (Dh(t), t.tag === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(317));
        e: {
            for (t = t.nextSibling, e = 0; t;) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            un = qr(t.nextSibling);
                            break e
                        }
                        e--
                    } else n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            un = null
        }
    } else un = dn ? qr(t.stateNode.nextSibling) : null;
    return !0
}

function o0() {
    for (var t = un; t;) t = qr(t.nextSibling)
}

function js() {
    un = dn = null, Se = !1
}

function Jf(t) {
    Vn === null ? Vn = [t] : Vn.push(t)
}
var Ny = Pr.ReactCurrentBatchConfig;

function ll(t, e, n) {
    if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(M(309));
                var r = n.stateNode
            }
            if (!r) throw Error(M(147, t));
            var i = r,
                s = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s ? e.ref : (e = function (l) {
                var o = i.refs;
                l === null ? delete o[s] : o[s] = l
            }, e._stringRef = s, e)
        }
        if (typeof t != "string") throw Error(M(284));
        if (!n._owner) throw Error(M(290, t))
    }
    return t
}

function Bo(t, e) {
    throw t = Object.prototype.toString.call(e), Error(M(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}

function Ah(t) {
    var e = t._init;
    return e(t._payload)
}

function a0(t) {
    function e(_, m) {
        if (t) {
            var v = _.deletions;
            v === null ? (_.deletions = [m], _.flags |= 16) : v.push(m)
        }
    }

    function n(_, m) {
        if (!t) return null;
        for (; m !== null;) e(_, m), m = m.sibling;
        return null
    }

    function r(_, m) {
        for (_ = new Map; m !== null;) m.key !== null ? _.set(m.key, m) : _.set(m.index, m), m = m.sibling;
        return _
    }

    function i(_, m) {
        return _ = ti(_, m), _.index = 0, _.sibling = null, _
    }

    function s(_, m, v) {
        return _.index = v, t ? (v = _.alternate, v !== null ? (v = v.index, v < m ? (_.flags |= 2, m) : v) : (_.flags |= 2, m)) : (_.flags |= 1048576, m)
    }

    function l(_) {
        return t && _.alternate === null && (_.flags |= 2), _
    }

    function o(_, m, v, y) {
        return m === null || m.tag !== 6 ? (m = Ku(v, _.mode, y), m.return = _, m) : (m = i(m, v), m.return = _, m)
    }

    function a(_, m, v, y) {
        var k = v.type;
        return k === as ? c(_, m, v.props.children, y, v.key) : m !== null && (m.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ir && Ah(k) === m.type) ? (y = i(m, v.props), y.ref = ll(_, m, v), y.return = _, y) : (y = pa(v.type, v.key, v.props, null, _.mode, y), y.ref = ll(_, m, v), y.return = _, y)
    }

    function u(_, m, v, y) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = qu(v, _.mode, y), m.return = _, m) : (m = i(m, v.children || []), m.return = _, m)
    }

    function c(_, m, v, y, k) {
        return m === null || m.tag !== 7 ? (m = Li(v, _.mode, y, k), m.return = _, m) : (m = i(m, v), m.return = _, m)
    }

    function h(_, m, v) {
        if (typeof m == "string" && m !== "" || typeof m == "number") return m = Ku("" + m, _.mode, v), m.return = _, m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case No:
                    return v = pa(m.type, m.key, m.props, null, _.mode, v), v.ref = ll(_, null, m), v.return = _, v;
                case os:
                    return m = qu(m, _.mode, v), m.return = _, m;
                case Ir:
                    var y = m._init;
                    return h(_, y(m._payload), v)
            }
            if (hl(m) || tl(m)) return m = Li(m, _.mode, v, null), m.return = _, m;
            Bo(_, m)
        }
        return null
    }

    function f(_, m, v, y) {
        var k = m !== null ? m.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number") return k !== null ? null : o(_, m, "" + v, y);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case No:
                    return v.key === k ? a(_, m, v, y) : null;
                case os:
                    return v.key === k ? u(_, m, v, y) : null;
                case Ir:
                    return k = v._init, f(_, m, k(v._payload), y)
            }
            if (hl(v) || tl(v)) return k !== null ? null : c(_, m, v, y, null);
            Bo(_, v)
        }
        return null
    }

    function d(_, m, v, y, k) {
        if (typeof y == "string" && y !== "" || typeof y == "number") return _ = _.get(v) || null, o(m, _, "" + y, k);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case No:
                    return _ = _.get(y.key === null ? v : y.key) || null, a(m, _, y, k);
                case os:
                    return _ = _.get(y.key === null ? v : y.key) || null, u(m, _, y, k);
                case Ir:
                    var E = y._init;
                    return d(_, m, v, E(y._payload), k)
            }
            if (hl(y) || tl(y)) return _ = _.get(v) || null, c(m, _, y, k, null);
            Bo(m, y)
        }
        return null
    }

    function g(_, m, v, y) {
        for (var k = null, E = null, T = m, C = m = 0, O = null; T !== null && C < v.length; C++) {
            T.index > C ? (O = T, T = null) : O = T.sibling;
            var N = f(_, T, v[C], y);
            if (N === null) {
                T === null && (T = O);
                break
            }
            t && T && N.alternate === null && e(_, T), m = s(N, m, C), E === null ? k = N : E.sibling = N, E = N, T = O
        }
        if (C === v.length) return n(_, T), Se && Si(_, C), k;
        if (T === null) {
            for (; C < v.length; C++) T = h(_, v[C], y), T !== null && (m = s(T, m, C), E === null ? k = T : E.sibling = T, E = T);
            return Se && Si(_, C), k
        }
        for (T = r(_, T); C < v.length; C++) O = d(T, _, C, v[C], y), O !== null && (t && O.alternate !== null && T.delete(O.key === null ? C : O.key), m = s(O, m, C), E === null ? k = O : E.sibling = O, E = O);
        return t && T.forEach(function (F) {
            return e(_, F)
        }), Se && Si(_, C), k
    }

    function p(_, m, v, y) {
        var k = tl(v);
        if (typeof k != "function") throw Error(M(150));
        if (v = k.call(v), v == null) throw Error(M(151));
        for (var E = k = null, T = m, C = m = 0, O = null, N = v.next(); T !== null && !N.done; C++, N = v.next()) {
            T.index > C ? (O = T, T = null) : O = T.sibling;
            var F = f(_, T, N.value, y);
            if (F === null) {
                T === null && (T = O);
                break
            }
            t && T && F.alternate === null && e(_, T), m = s(F, m, C), E === null ? k = F : E.sibling = F, E = F, T = O
        }
        if (N.done) return n(_, T), Se && Si(_, C), k;
        if (T === null) {
            for (; !N.done; C++, N = v.next()) N = h(_, N.value, y), N !== null && (m = s(N, m, C), E === null ? k = N : E.sibling = N, E = N);
            return Se && Si(_, C), k
        }
        for (T = r(_, T); !N.done; C++, N = v.next()) N = d(T, _, C, N.value, y), N !== null && (t && N.alternate !== null && T.delete(N.key === null ? C : N.key), m = s(N, m, C), E === null ? k = N : E.sibling = N, E = N);
        return t && T.forEach(function (z) {
            return e(_, z)
        }), Se && Si(_, C), k
    }

    function x(_, m, v, y) {
        if (typeof v == "object" && v !== null && v.type === as && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case No:
                    e: {
                        for (var k = v.key, E = m; E !== null;) {
                            if (E.key === k) {
                                if (k = v.type, k === as) {
                                    if (E.tag === 7) {
                                        n(_, E.sibling), m = i(E, v.props.children), m.return = _, _ = m;
                                        break e
                                    }
                                } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ir && Ah(k) === E.type) {
                                    n(_, E.sibling), m = i(E, v.props), m.ref = ll(_, E, v), m.return = _, _ = m;
                                    break e
                                }
                                n(_, E);
                                break
                            } else e(_, E);
                            E = E.sibling
                        }
                        v.type === as ? (m = Li(v.props.children, _.mode, y, v.key), m.return = _, _ = m) : (y = pa(v.type, v.key, v.props, null, _.mode, y), y.ref = ll(_, m, v), y.return = _, _ = y)
                    }
                    return l(_);
                case os:
                    e: {
                        for (E = v.key; m !== null;) {
                            if (m.key === E)
                                if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                                    n(_, m.sibling), m = i(m, v.children || []), m.return = _, _ = m;
                                    break e
                                } else {
                                    n(_, m);
                                    break
                                }
                            else e(_, m);
                            m = m.sibling
                        }
                        m = qu(v, _.mode, y),
                            m.return = _,
                            _ = m
                    }
                    return l(_);
                case Ir:
                    return E = v._init, x(_, m, E(v._payload), y)
            }
            if (hl(v)) return g(_, m, v, y);
            if (tl(v)) return p(_, m, v, y);
            Bo(_, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, m !== null && m.tag === 6 ? (n(_, m.sibling), m = i(m, v), m.return = _, _ = m) : (n(_, m), m = Ku(v, _.mode, y), m.return = _, _ = m), l(_)) : n(_, m)
    }
    return x
}
var Is = a0(!0),
    u0 = a0(!1),
    Ia = di(null),
    Fa = null,
    gs = null,
    ed = null;

function td() {
    ed = gs = Fa = null
}

function nd(t) {
    var e = Ia.current;
    ye(Ia), t._currentValue = e
}

function Wc(t, e, n) {
    for (; t !== null;) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n) break;
        t = t.return
    }
}

function Cs(t, e) {
    Fa = t, ed = gs = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (Wt = !0), t.firstContext = null)
}

function Rn(t) {
    var e = t._currentValue;
    if (ed !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        }, gs === null) {
            if (Fa === null) throw Error(M(308));
            gs = t, Fa.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else gs = gs.next = t;
    return e
}
var Ni = null;

function rd(t) {
    Ni === null ? Ni = [t] : Ni.push(t)
}

function c0(t, e, n, r) {
    var i = e.interleaved;
    return i === null ? (n.next = n, rd(e)) : (n.next = i.next, i.next = n), e.interleaved = n, kr(t, r)
}

function kr(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null;) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var Fr = !1;

function id(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function f0(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}

function yr(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Zr(t, e, n) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (r = r.shared, oe & 2) {
        var i = r.pending;
        return i === null ? e.next = e : (e.next = i.next, i.next = e), r.pending = e, kr(t, n)
    }
    return i = r.interleaved, i === null ? (e.next = e, rd(r)) : (e.next = i.next, i.next = e), r.interleaved = e, kr(t, n)
}

function aa(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
        var r = e.lanes;
        r &= t.pendingLanes, n |= r, e.lanes = n, Wf(t, n)
    }
}

function jh(t, e) {
    var n = t.updateQueue,
        r = t.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = l : s = s.next = l, n = n.next
            } while (n !== null);
            s === null ? i = s = e : s = s.next = e
        } else i = s = e;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
}

function Ba(t, e, n, r) {
    var i = t.updateQueue;
    Fr = !1;
    var s = i.firstBaseUpdate,
        l = i.lastBaseUpdate,
        o = i.shared.pending;
    if (o !== null) {
        i.shared.pending = null;
        var a = o,
            u = a.next;
        a.next = null, l === null ? s = u : l.next = u, l = a;
        var c = t.alternate;
        c !== null && (c = c.updateQueue, o = c.lastBaseUpdate, o !== l && (o === null ? c.firstBaseUpdate = u : o.next = u, c.lastBaseUpdate = a))
    }
    if (s !== null) {
        var h = i.baseState;
        l = 0, c = u = a = null, o = s;
        do {
            var f = o.lane,
                d = o.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: d,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                });
                e: {
                    var g = t,
                        p = o;
                    switch (f = e, d = n, p.tag) {
                        case 1:
                            if (g = p.payload, typeof g == "function") {
                                h = g.call(d, h, f);
                                break e
                            }
                            h = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = p.payload, f = typeof g == "function" ? g.call(d, h, f) : g, f == null) break e;
                            h = Me({}, h, f);
                            break e;
                        case 2:
                            Fr = !0
                    }
                }
                o.callback !== null && o.lane !== 0 && (t.flags |= 64, f = i.effects, f === null ? i.effects = [o] : f.push(o))
            } else d = {
                eventTime: d,
                lane: f,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null
            }, c === null ? (u = c = d, a = h) : c = c.next = d, l |= f;
            if (o = o.next, o === null) {
                if (o = i.shared.pending, o === null) break;
                f = o, o = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = h), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, e = i.shared.interleaved, e !== null) {
            i = e;
            do l |= i.lane, i = i.next; while (i !== e)
        } else s === null && (i.shared.lanes = 0);
        $i |= l, t.lanes = l, t.memoizedState = h
    }
}

function Ih(t, e, n) {
    if (t = e.effects, e.effects = null, t !== null)
        for (e = 0; e < t.length; e++) {
            var r = t[e],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(M(191, i));
                i.call(r)
            }
        }
}
var So = {},
    rr = di(So),
    no = di(So),
    ro = di(So);

function Oi(t) {
    if (t === So) throw Error(M(174));
    return t
}

function sd(t, e) {
    switch (ge(ro, e), ge(no, t), ge(rr, So), t = e.nodeType, t) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : kc(null, "");
            break;
        default:
            t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = kc(e, t)
    }
    ye(rr), ge(rr, e)
}

function Fs() {
    ye(rr), ye(no), ye(ro)
}

function d0(t) {
    Oi(ro.current);
    var e = Oi(rr.current),
        n = kc(e, t.type);
    e !== n && (ge(no, t), ge(rr, n))
}

function ld(t) {
    no.current === t && (ye(rr), ye(no))
}
var Pe = di(0);

function Ua(t) {
    for (var e = t; e !== null;) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e
        } else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue
        }
        if (e === t) break;
        for (; e.sibling === null;) {
            if (e.return === null || e.return === t) return null;
            e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
    }
    return null
}
var $u = [];

function od() {
    for (var t = 0; t < $u.length; t++) $u[t]._workInProgressVersionPrimary = null;
    $u.length = 0
}
var ua = Pr.ReactCurrentDispatcher,
    Yu = Pr.ReactCurrentBatchConfig,
    Wi = 0,
    Re = null,
    Ge = null,
    nt = null,
    Va = !1,
    Nl = !1,
    io = 0,
    Oy = 0;

function _t() {
    throw Error(M(321))
}

function ad(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!$n(t[n], e[n])) return !1;
    return !0
}

function ud(t, e, n, r, i, s) {
    if (Wi = s, Re = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, ua.current = t === null || t.memoizedState === null ? Ly : Dy, t = n(r, i), Nl) {
        s = 0;
        do {
            if (Nl = !1, io = 0, 25 <= s) throw Error(M(301));
            s += 1, nt = Ge = null, e.updateQueue = null, ua.current = Ay, t = n(r, i)
        } while (Nl)
    }
    if (ua.current = Ha, e = Ge !== null && Ge.next !== null, Wi = 0, nt = Ge = Re = null, Va = !1, e) throw Error(M(300));
    return t
}

function cd() {
    var t = io !== 0;
    return io = 0, t
}

function Gn() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return nt === null ? Re.memoizedState = nt = t : nt = nt.next = t, nt
}

function Mn() {
    if (Ge === null) {
        var t = Re.alternate;
        t = t !== null ? t.memoizedState : null
    } else t = Ge.next;
    var e = nt === null ? Re.memoizedState : nt.next;
    if (e !== null) nt = e, Ge = t;
    else {
        if (t === null) throw Error(M(310));
        Ge = t, t = {
            memoizedState: Ge.memoizedState,
            baseState: Ge.baseState,
            baseQueue: Ge.baseQueue,
            queue: Ge.queue,
            next: null
        }, nt === null ? Re.memoizedState = nt = t : nt = nt.next = t
    }
    return nt
}

function so(t, e) {
    return typeof e == "function" ? e(t) : e
}

function Xu(t) {
    var e = Mn(),
        n = e.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = t;
    var r = Ge,
        i = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = s.next, s.next = l
        }
        r.baseQueue = i = s, n.pending = null
    }
    if (i !== null) {
        s = i.next, r = r.baseState;
        var o = l = null,
            a = null,
            u = s;
        do {
            var c = u.lane;
            if ((Wi & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : t(r, u.action);
            else {
                var h = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (o = a = h, l = r) : a = a.next = h, Re.lanes |= c, $i |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        a === null ? l = r : a.next = o, $n(r, e.memoizedState) || (Wt = !0), e.memoizedState = r, e.baseState = l, e.baseQueue = a, n.lastRenderedState = r
    }
    if (t = n.interleaved, t !== null) {
        i = t;
        do s = i.lane, Re.lanes |= s, $i |= s, i = i.next; while (i !== t)
    } else i === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}

function bu(t) {
    var e = Mn(),
        n = e.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch,
        i = n.pending,
        s = e.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do s = t(s, l.action), l = l.next; while (l !== i);
        $n(s, e.memoizedState) || (Wt = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function h0() { }

function p0(t, e) {
    var n = Re,
        r = Mn(),
        i = e(),
        s = !$n(r.memoizedState, i);
    if (s && (r.memoizedState = i, Wt = !0), r = r.queue, fd(_0.bind(null, n, r, t), [t]), r.getSnapshot !== e || s || nt !== null && nt.memoizedState.tag & 1) {
        if (n.flags |= 2048, lo(9, g0.bind(null, n, r, i, e), void 0, null), rt === null) throw Error(M(349));
        Wi & 30 || m0(n, e, i)
    }
    return i
}

function m0(t, e, n) {
    t.flags |= 16384, t = {
        getSnapshot: e,
        value: n
    }, e = Re.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, Re.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t))
}

function g0(t, e, n, r) {
    e.value = n, e.getSnapshot = r, v0(e) && y0(t)
}

function _0(t, e, n) {
    return n(function () {
        v0(e) && y0(t)
    })
}

function v0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !$n(t, n)
    } catch {
        return !0
    }
}

function y0(t) {
    var e = kr(t, 1);
    e !== null && Wn(e, t, 1, -1)
}

function Fh(t) {
    var e = Gn();
    return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: so,
        lastRenderedState: t
    }, e.queue = t, t = t.dispatch = zy.bind(null, Re, t), [e.memoizedState, t]
}

function lo(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    }, e = Re.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, Re.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t
}

function w0() {
    return Mn().memoizedState
}

function ca(t, e, n, r) {
    var i = Gn();
    Re.flags |= t, i.memoizedState = lo(1 | e, n, void 0, r === void 0 ? null : r)
}

function du(t, e, n, r) {
    var i = Mn();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ge !== null) {
        var l = Ge.memoizedState;
        if (s = l.destroy, r !== null && ad(r, l.deps)) {
            i.memoizedState = lo(e, n, s, r);
            return
        }
    }
    Re.flags |= t, i.memoizedState = lo(1 | e, n, s, r)
}

function Bh(t, e) {
    return ca(8390656, 8, t, e)
}

function fd(t, e) {
    return du(2048, 8, t, e)
}

function x0(t, e) {
    return du(4, 2, t, e)
}

function S0(t, e) {
    return du(4, 4, t, e)
}

function k0(t, e) {
    if (typeof e == "function") return t = t(), e(t),
        function () {
            e(null)
        };
    if (e != null) return t = t(), e.current = t,
        function () {
            e.current = null
        }
}

function T0(t, e, n) {
    return n = n != null ? n.concat([t]) : null, du(4, 4, k0.bind(null, e, t), n)
}

function dd() { }

function E0(t, e) {
    var n = Mn();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && ad(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t)
}

function C0(t, e) {
    var n = Mn();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && ad(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t)
}

function P0(t, e, n) {
    return Wi & 21 ? ($n(n, e) || (n = zm(), Re.lanes |= n, $i |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, Wt = !0), t.memoizedState = n)
}

function Ry(t, e) {
    var n = fe;
    fe = n !== 0 && 4 > n ? n : 4, t(!0);
    var r = Yu.transition;
    Yu.transition = {};
    try {
        t(!1), e()
    } finally {
        fe = n, Yu.transition = r
    }
}

function N0() {
    return Mn().memoizedState
}

function My(t, e, n) {
    var r = ei(t);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, O0(t)) R0(e, n);
    else if (n = c0(t, e, n, r), n !== null) {
        var i = It();
        Wn(n, t, r, i), M0(n, e, r)
    }
}

function zy(t, e, n) {
    var r = ei(t),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (O0(t)) R0(e, i);
    else {
        var s = t.alternate;
        if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try {
            var l = e.lastRenderedState,
                o = s(l, n);
            if (i.hasEagerState = !0, i.eagerState = o, $n(o, l)) {
                var a = e.interleaved;
                a === null ? (i.next = i, rd(e)) : (i.next = a.next, a.next = i), e.interleaved = i;
                return
            }
        } catch { } finally { }
        n = c0(t, e, i, r), n !== null && (i = It(), Wn(n, t, r, i), M0(n, e, r))
    }
}

function O0(t) {
    var e = t.alternate;
    return t === Re || e !== null && e === Re
}

function R0(t, e) {
    Nl = Va = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
}

function M0(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes, n |= r, e.lanes = n, Wf(t, n)
    }
}
var Ha = {
    readContext: Rn,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useInsertionEffect: _t,
    useLayoutEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useMutableSource: _t,
    useSyncExternalStore: _t,
    useId: _t,
    unstable_isNewReconciler: !1
},
    Ly = {
        readContext: Rn,
        useCallback: function (t, e) {
            return Gn().memoizedState = [t, e === void 0 ? null : e], t
        },
        useContext: Rn,
        useEffect: Bh,
        useImperativeHandle: function (t, e, n) {
            return n = n != null ? n.concat([t]) : null, ca(4194308, 4, k0.bind(null, e, t), n)
        },
        useLayoutEffect: function (t, e) {
            return ca(4194308, 4, t, e)
        },
        useInsertionEffect: function (t, e) {
            return ca(4, 2, t, e)
        },
        useMemo: function (t, e) {
            var n = Gn();
            return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t
        },
        useReducer: function (t, e, n) {
            var r = Gn();
            return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: e
            }, r.queue = t, t = t.dispatch = My.bind(null, Re, t), [r.memoizedState, t]
        },
        useRef: function (t) {
            var e = Gn();
            return t = {
                current: t
            }, e.memoizedState = t
        },
        useState: Fh,
        useDebugValue: dd,
        useDeferredValue: function (t) {
            return Gn().memoizedState = t
        },
        useTransition: function () {
            var t = Fh(!1),
                e = t[0];
            return t = Ry.bind(null, t[1]), Gn().memoizedState = t, [e, t]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (t, e, n) {
            var r = Re,
                i = Gn();
            if (Se) {
                if (n === void 0) throw Error(M(407));
                n = n()
            } else {
                if (n = e(), rt === null) throw Error(M(349));
                Wi & 30 || m0(r, e, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: e
            };
            return i.queue = s, Bh(_0.bind(null, r, s, t), [t]), r.flags |= 2048, lo(9, g0.bind(null, r, s, n, e), void 0, null), n
        },
        useId: function () {
            var t = Gn(),
                e = rt.identifierPrefix;
            if (Se) {
                var n = _r,
                    r = gr;
                n = (r & ~(1 << 32 - Hn(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = io++, 0 < n && (e += "H" + n.toString(32)), e += ":"
            } else n = Oy++, e = ":" + e + "r" + n.toString(32) + ":";
            return t.memoizedState = e
        },
        unstable_isNewReconciler: !1
    },
    Dy = {
        readContext: Rn,
        useCallback: E0,
        useContext: Rn,
        useEffect: fd,
        useImperativeHandle: T0,
        useInsertionEffect: x0,
        useLayoutEffect: S0,
        useMemo: C0,
        useReducer: Xu,
        useRef: w0,
        useState: function () {
            return Xu(so)
        },
        useDebugValue: dd,
        useDeferredValue: function (t) {
            var e = Mn();
            return P0(e, Ge.memoizedState, t)
        },
        useTransition: function () {
            var t = Xu(so)[0],
                e = Mn().memoizedState;
            return [t, e]
        },
        useMutableSource: h0,
        useSyncExternalStore: p0,
        useId: N0,
        unstable_isNewReconciler: !1
    },
    Ay = {
        readContext: Rn,
        useCallback: E0,
        useContext: Rn,
        useEffect: fd,
        useImperativeHandle: T0,
        useInsertionEffect: x0,
        useLayoutEffect: S0,
        useMemo: C0,
        useReducer: bu,
        useRef: w0,
        useState: function () {
            return bu(so)
        },
        useDebugValue: dd,
        useDeferredValue: function (t) {
            var e = Mn();
            return Ge === null ? e.memoizedState = t : P0(e, Ge.memoizedState, t)
        },
        useTransition: function () {
            var t = bu(so)[0],
                e = Mn().memoizedState;
            return [t, e]
        },
        useMutableSource: h0,
        useSyncExternalStore: p0,
        useId: N0,
        unstable_isNewReconciler: !1
    };

function Bn(t, e) {
    if (t && t.defaultProps) {
        e = Me({}, e), t = t.defaultProps;
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}

function $c(t, e, n, r) {
    e = t.memoizedState, n = n(r, e), n = n == null ? e : Me({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n)
}
var hu = {
    isMounted: function (t) {
        return (t = t._reactInternals) ? Ki(t) === t : !1
    },
    enqueueSetState: function (t, e, n) {
        t = t._reactInternals;
        var r = It(),
            i = ei(t),
            s = yr(r, i);
        s.payload = e, n != null && (s.callback = n), e = Zr(t, s, i), e !== null && (Wn(e, t, i, r), aa(e, t, i))
    },
    enqueueReplaceState: function (t, e, n) {
        t = t._reactInternals;
        var r = It(),
            i = ei(t),
            s = yr(r, i);
        s.tag = 1, s.payload = e, n != null && (s.callback = n), e = Zr(t, s, i), e !== null && (Wn(e, t, i, r), aa(e, t, i))
    },
    enqueueForceUpdate: function (t, e) {
        t = t._reactInternals;
        var n = It(),
            r = ei(t),
            i = yr(n, r);
        i.tag = 2, e != null && (i.callback = e), e = Zr(t, i, r), e !== null && (Wn(e, t, r, n), aa(e, t, r))
    }
};

function Uh(t, e, n, r, i, s, l) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, s, l) : e.prototype && e.prototype.isPureReactComponent ? !Zl(n, r) || !Zl(i, s) : !0
}

function z0(t, e, n) {
    var r = !1,
        i = li,
        s = e.contextType;
    return typeof s == "object" && s !== null ? s = Rn(s) : (i = Yt(e) ? Vi : Et.current, r = e.contextTypes, s = (r = r != null) ? As(t, i) : li), e = new e(n, s), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = hu, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = s), e
}

function Vh(t, e, n, r) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && hu.enqueueReplaceState(e, e.state, null)
}

function Yc(t, e, n, r) {
    var i = t.stateNode;
    i.props = n, i.state = t.memoizedState, i.refs = {}, id(t);
    var s = e.contextType;
    typeof s == "object" && s !== null ? i.context = Rn(s) : (s = Yt(e) ? Vi : Et.current, i.context = As(t, s)), i.state = t.memoizedState, s = e.getDerivedStateFromProps, typeof s == "function" && ($c(t, e, s, n), i.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && hu.enqueueReplaceState(i, i.state, null), Ba(t, n, i, r), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308)
}

function Bs(t, e) {
    try {
        var n = "",
            r = e;
        do n += uv(r), r = r.return; while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: t,
        source: e,
        stack: i,
        digest: null
    }
}

function Qu(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}

function Xc(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var jy = typeof WeakMap == "function" ? WeakMap : Map;

function L0(t, e, n) {
    n = yr(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = e.value;
    return n.callback = function () {
        $a || ($a = !0, nf = r), Xc(t, e)
    }, n
}

function D0(t, e, n) {
    n = yr(-1, n), n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = e.value;
        n.payload = function () {
            return r(i)
        }, n.callback = function () {
            Xc(t, e)
        }
    }
    var s = t.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function () {
        Xc(t, e), typeof r != "function" && (Jr === null ? Jr = new Set([this]) : Jr.add(this));
        var l = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: l !== null ? l : ""
        })
    }), n
}

function Hh(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new jy;
        var i = new Set;
        r.set(e, i)
    } else i = r.get(e), i === void 0 && (i = new Set, r.set(e, i));
    i.has(n) || (i.add(n), t = Ky.bind(null, t, e, n), e.then(t, t))
}

function Wh(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
        t = t.return
    } while (t !== null);
    return null
}

function $h(t, e, n, r, i) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = i, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = yr(-1, 1), e.tag = 2, Zr(n, e, 1))), n.lanes |= 1), t)
}
var Iy = Pr.ReactCurrentOwner,
    Wt = !1;

function zt(t, e, n, r) {
    e.child = t === null ? u0(e, null, n, r) : Is(e, t.child, n, r)
}

function Yh(t, e, n, r, i) {
    n = n.render;
    var s = e.ref;
    return Cs(e, i), r = ud(t, e, n, r, s, i), n = cd(), t !== null && !Wt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Tr(t, e, i)) : (Se && n && qf(e), e.flags |= 1, zt(t, e, r, i), e.child)
}

function Xh(t, e, n, r, i) {
    if (t === null) {
        var s = n.type;
        return typeof s == "function" && !wd(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = s, A0(t, e, s, r, i)) : (t = pa(n.type, null, r, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t)
    }
    if (s = t.child, !(t.lanes & i)) {
        var l = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Zl, n(l, r) && t.ref === e.ref) return Tr(t, e, i)
    }
    return e.flags |= 1, t = ti(s, r), t.ref = e.ref, t.return = e, e.child = t
}

function A0(t, e, n, r, i) {
    if (t !== null) {
        var s = t.memoizedProps;
        if (Zl(s, r) && t.ref === e.ref)
            if (Wt = !1, e.pendingProps = r = s, (t.lanes & i) !== 0) t.flags & 131072 && (Wt = !0);
            else return e.lanes = t.lanes, Tr(t, e, i)
    }
    return bc(t, e, n, r, i)
}

function j0(t, e, n) {
    var r = e.pendingProps,
        i = r.children,
        s = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1)) e.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ge(vs, nn), nn |= n;
        else {
            if (!(n & 1073741824)) return t = s !== null ? s.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
                baseLanes: t,
                cachePool: null,
                transitions: null
            }, e.updateQueue = null, ge(vs, nn), nn |= t, null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, ge(vs, nn), nn |= r
        }
    else s !== null ? (r = s.baseLanes | n, e.memoizedState = null) : r = n, ge(vs, nn), nn |= r;
    return zt(t, e, i, n), e.child
}

function I0(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152)
}

function bc(t, e, n, r, i) {
    var s = Yt(n) ? Vi : Et.current;
    return s = As(e, s), Cs(e, i), n = ud(t, e, n, r, s, i), r = cd(), t !== null && !Wt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Tr(t, e, i)) : (Se && r && qf(e), e.flags |= 1, zt(t, e, n, i), e.child)
}

function bh(t, e, n, r, i) {
    if (Yt(n)) {
        var s = !0;
        Da(e)
    } else s = !1;
    if (Cs(e, i), e.stateNode === null) fa(t, e), z0(e, n, r), Yc(e, n, r, i), r = !0;
    else if (t === null) {
        var l = e.stateNode,
            o = e.memoizedProps;
        l.props = o;
        var a = l.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Rn(u) : (u = Yt(n) ? Vi : Et.current, u = As(e, u));
        var c = n.getDerivedStateFromProps,
            h = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        h || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== r || a !== u) && Vh(e, l, r, u), Fr = !1;
        var f = e.memoizedState;
        l.state = f, Ba(e, r, l, i), a = e.memoizedState, o !== r || f !== a || $t.current || Fr ? (typeof c == "function" && ($c(e, n, c, r), a = e.memoizedState), (o = Fr || Uh(e, n, o, r, f, a, u)) ? (h || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = a), l.props = r, l.state = a, l.context = u, r = o) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), r = !1)
    } else {
        l = e.stateNode, f0(t, e), o = e.memoizedProps, u = e.type === e.elementType ? o : Bn(e.type, o), l.props = u, h = e.pendingProps, f = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Rn(a) : (a = Yt(n) ? Vi : Et.current, a = As(e, a));
        var d = n.getDerivedStateFromProps;
        (c = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== h || f !== a) && Vh(e, l, r, a), Fr = !1, f = e.memoizedState, l.state = f, Ba(e, r, l, i);
        var g = e.memoizedState;
        o !== h || f !== g || $t.current || Fr ? (typeof d == "function" && ($c(e, n, d, r), g = e.memoizedState), (u = Fr || Uh(e, n, u, r, f, g, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, a)), typeof l.componentDidUpdate == "function" && (e.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || o === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = g), l.props = r, l.state = g, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || o === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024), r = !1)
    }
    return Qc(t, e, n, r, s, i)
}

function Qc(t, e, n, r, i, s) {
    I0(t, e);
    var l = (e.flags & 128) !== 0;
    if (!r && !l) return i && zh(e, n, !1), Tr(t, e, s);
    r = e.stateNode, Iy.current = e;
    var o = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1, t !== null && l ? (e.child = Is(e, t.child, null, s), e.child = Is(e, null, o, s)) : zt(t, e, o, s), e.memoizedState = r.state, i && zh(e, n, !0), e.child
}

function F0(t) {
    var e = t.stateNode;
    e.pendingContext ? Mh(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Mh(t, e.context, !1), sd(t, e.containerInfo)
}

function Qh(t, e, n, r, i) {
    return js(), Jf(i), e.flags |= 256, zt(t, e, n, r), e.child
}
var Gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Kc(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}

function B0(t, e, n) {
    var r = e.pendingProps,
        i = Pe.current,
        s = !1,
        l = (e.flags & 128) !== 0,
        o;
    if ((o = l) || (o = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0), o ? (s = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1), ge(Pe, i & 1), t === null) return Hc(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (l = r.children, t = r.fallback, s ? (r = e.mode, s = e.child, l = {
        mode: "hidden",
        children: l
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = l) : s = gu(l, r, 0, null), t = Li(t, r, n, null), s.return = e, t.return = e, s.sibling = t, e.child = s, e.child.memoizedState = Kc(n), e.memoizedState = Gc, t) : hd(e, l));
    if (i = t.memoizedState, i !== null && (o = i.dehydrated, o !== null)) return Fy(t, e, l, r, o, i, n);
    if (s) {
        s = r.fallback, l = e.mode, i = t.child, o = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && e.child !== i ? (r = e.child, r.childLanes = 0, r.pendingProps = a, e.deletions = null) : (r = ti(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), o !== null ? s = ti(o, s) : (s = Li(s, l, n, null), s.flags |= 2), s.return = e, r.return = e, r.sibling = s, e.child = r, r = s, s = e.child, l = t.child.memoizedState, l = l === null ? Kc(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        }, s.memoizedState = l, s.childLanes = t.childLanes & ~n, e.memoizedState = Gc, r
    }
    return s = t.child, t = s.sibling, r = ti(s, {
        mode: "visible",
        children: r.children
    }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r
}

function hd(t, e) {
    return e = gu({
        mode: "visible",
        children: e
    }, t.mode, 0, null), e.return = t, t.child = e
}

function Uo(t, e, n, r) {
    return r !== null && Jf(r), Is(e, t.child, null, n), t = hd(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
}

function Fy(t, e, n, r, i, s, l) {
    if (n) return e.flags & 256 ? (e.flags &= -257, r = Qu(Error(M(422))), Uo(t, e, l, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (s = r.fallback, i = e.mode, r = gu({
        mode: "visible",
        children: r.children
    }, i, 0, null), s = Li(s, i, l, null), s.flags |= 2, r.return = e, s.return = e, r.sibling = s, e.child = r, e.mode & 1 && Is(e, t.child, null, l), e.child.memoizedState = Kc(l), e.memoizedState = Gc, s);
    if (!(e.mode & 1)) return Uo(t, e, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var o = r.dgst;
        return r = o, s = Error(M(419)), r = Qu(s, r, void 0), Uo(t, e, l, r)
    }
    if (o = (l & t.childLanes) !== 0, Wt || o) {
        if (r = rt, r !== null) {
            switch (l & -l) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
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
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, kr(t, i), Wn(r, t, i, -1))
        }
        return yd(), r = Qu(Error(M(421))), Uo(t, e, l, r)
    }
    return i.data === "$?" ? (e.flags |= 128, e.child = t.child, e = qy.bind(null, t), i._reactRetry = e, null) : (t = s.treeContext, un = qr(i.nextSibling), dn = e, Se = !0, Vn = null, t !== null && (xn[Sn++] = gr, xn[Sn++] = _r, xn[Sn++] = Hi, gr = t.id, _r = t.overflow, Hi = e), e = hd(e, r.children), e.flags |= 4096, e)
}

function Gh(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), Wc(t.return, e, n)
}

function Gu(t, e, n, r, i) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
}

function U0(t, e, n) {
    var r = e.pendingProps,
        i = r.revealOrder,
        s = r.tail;
    if (zt(t, e, r.children, n), r = Pe.current, r & 2) r = r & 1 | 2, e.flags |= 128;
    else {
        if (t !== null && t.flags & 128) e: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && Gh(t, n, e);
            else if (t.tag === 19) Gh(t, n, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break e;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        r &= 1
    }
    if (ge(Pe, r), !(e.mode & 1)) e.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = e.child, i = null; n !== null;) t = n.alternate, t !== null && Ua(t) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), Gu(e, !1, i, n, s);
            break;
        case "backwards":
            for (n = null, i = e.child, e.child = null; i !== null;) {
                if (t = i.alternate, t !== null && Ua(t) === null) {
                    e.child = i;
                    break
                }
                t = i.sibling, i.sibling = n, n = i, i = t
            }
            Gu(e, !0, n, null, s);
            break;
        case "together":
            Gu(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
    }
    return e.child
}

function fa(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2)
}

function Tr(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), $i |= e.lanes, !(n & e.childLanes)) return null;
    if (t !== null && e.child !== t.child) throw Error(M(153));
    if (e.child !== null) {
        for (t = e.child, n = ti(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;) t = t.sibling, n = n.sibling = ti(t, t.pendingProps), n.return = e;
        n.sibling = null
    }
    return e.child
}

function By(t, e, n) {
    switch (e.tag) {
        case 3:
            F0(e), js();
            break;
        case 5:
            d0(e);
            break;
        case 1:
            Yt(e.type) && Da(e);
            break;
        case 4:
            sd(e, e.stateNode.containerInfo);
            break;
        case 10:
            var r = e.type._context,
                i = e.memoizedProps.value;
            ge(Ia, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = e.memoizedState, r !== null) return r.dehydrated !== null ? (ge(Pe, Pe.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? B0(t, e, n) : (ge(Pe, Pe.current & 1), t = Tr(t, e, n), t !== null ? t.sibling : null);
            ge(Pe, Pe.current & 1);
            break;
        case 19:
            if (r = (n & e.childLanes) !== 0, t.flags & 128) {
                if (r) return U0(t, e, n);
                e.flags |= 128
            }
            if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ge(Pe, Pe.current), r) break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0, j0(t, e, n)
    }
    return Tr(t, e, n)
}
var V0, qc, H0, W0;
V0 = function (t, e) {
    for (var n = e.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
qc = function () { };
H0 = function (t, e, n, r) {
    var i = t.memoizedProps;
    if (i !== r) {
        t = e.stateNode, Oi(rr.current);
        var s = null;
        switch (n) {
            case "input":
                i = yc(t, i), r = yc(t, r), s = [];
                break;
            case "select":
                i = Me({}, i, {
                    value: void 0
                }), r = Me({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                i = Sc(t, i), r = Sc(t, r), s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = za)
        }
        Tc(n, r);
        var l;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var o = i[u];
                    for (l in o) o.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Yl.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (o = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== o && (a != null || o != null))
                if (u === "style")
                    if (o) {
                        for (l in o) !o.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                        for (l in a) a.hasOwnProperty(l) && o[l] !== a[l] && (n || (n = {}), n[l] = a[l])
                    } else n || (s || (s = []), s.push(u, n)), n = a;
                else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, o = o ? o.__html : void 0, a != null && o !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Yl.hasOwnProperty(u) ? (a != null && u === "onScroll" && ve("scroll", t), s || o === a || (s = [])) : (s = s || []).push(u, a))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (e.updateQueue = u) && (e.flags |= 4)
    }
};
W0 = function (t, e, n, r) {
    n !== r && (e.flags |= 4)
};

function ol(t, e) {
    if (!Se) switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null;) e.alternate !== null && (n = e), e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
    }
}

function vt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        r = 0;
    if (e)
        for (var i = t.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = t, i = i.sibling;
    else
        for (i = t.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = t, i = i.sibling;
    return t.subtreeFlags |= r, t.childLanes = n, e
}

function Uy(t, e, n) {
    var r = e.pendingProps;
    switch (Zf(e), e.tag) {
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
            return vt(e), null;
        case 1:
            return Yt(e.type) && La(), vt(e), null;
        case 3:
            return r = e.stateNode, Fs(), ye($t), ye(Et), od(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (Fo(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Vn !== null && (lf(Vn), Vn = null))), qc(t, e), vt(e), null;
        case 5:
            ld(e);
            var i = Oi(ro.current);
            if (n = e.type, t !== null && e.stateNode != null) H0(t, e, n, r, i), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
            else {
                if (!r) {
                    if (e.stateNode === null) throw Error(M(166));
                    return vt(e), null
                }
                if (t = Oi(rr.current), Fo(e)) {
                    r = e.stateNode, n = e.type;
                    var s = e.memoizedProps;
                    switch (r[Zn] = e, r[to] = s, t = (e.mode & 1) !== 0, n) {
                        case "dialog":
                            ve("cancel", r), ve("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ve("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < ml.length; i++) ve(ml[i], r);
                            break;
                        case "source":
                            ve("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ve("error", r), ve("load", r);
                            break;
                        case "details":
                            ve("toggle", r);
                            break;
                        case "input":
                            ih(r, s), ve("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, ve("invalid", r);
                            break;
                        case "textarea":
                            lh(r, s), ve("invalid", r)
                    }
                    Tc(n, s), i = null;
                    for (var l in s)
                        if (s.hasOwnProperty(l)) {
                            var o = s[l];
                            l === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && Io(r.textContent, o, t), i = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && Io(r.textContent, o, t), i = ["children", "" + o]) : Yl.hasOwnProperty(l) && o != null && l === "onScroll" && ve("scroll", r)
                        } switch (n) {
                            case "input":
                                Oo(r), sh(r, s, !0);
                                break;
                            case "textarea":
                                Oo(r), oh(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof s.onClick == "function" && (r.onclick = za)
                        }
                    r = i, e.updateQueue = r, r !== null && (e.flags |= 4)
                } else {
                    l = i.nodeType === 9 ? i : i.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = _m(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = l.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = l.createElement(n, {
                        is: r.is
                    }) : (t = l.createElement(n), n === "select" && (l = t, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : t = l.createElementNS(t, n), t[Zn] = e, t[to] = r, V0(t, e, !1, !1), e.stateNode = t;
                    e: {
                        switch (l = Ec(n, r), n) {
                            case "dialog":
                                ve("cancel", t), ve("close", t), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ve("load", t), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < ml.length; i++) ve(ml[i], t);
                                i = r;
                                break;
                            case "source":
                                ve("error", t), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ve("error", t), ve("load", t), i = r;
                                break;
                            case "details":
                                ve("toggle", t), i = r;
                                break;
                            case "input":
                                ih(t, r), i = yc(t, r), ve("invalid", t);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                t._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = Me({}, r, {
                                    value: void 0
                                }), ve("invalid", t);
                                break;
                            case "textarea":
                                lh(t, r), i = Sc(t, r), ve("invalid", t);
                                break;
                            default:
                                i = r
                        }
                        Tc(n, i),
                            o = i;
                        for (s in o)
                            if (o.hasOwnProperty(s)) {
                                var a = o[s];
                                s === "style" ? wm(t, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && vm(t, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Xl(t, a) : typeof a == "number" && Xl(t, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Yl.hasOwnProperty(s) ? a != null && s === "onScroll" && ve("scroll", t) : a != null && If(t, s, a, l))
                            } switch (n) {
                                case "input":
                                    Oo(t), sh(t, r, !1);
                                    break;
                                case "textarea":
                                    Oo(t), oh(t);
                                    break;
                                case "option":
                                    r.value != null && t.setAttribute("value", "" + si(r.value));
                                    break;
                                case "select":
                                    t.multiple = !!r.multiple, s = r.value, s != null ? Ss(t, !!r.multiple, s, !1) : r.defaultValue != null && Ss(t, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof i.onClick == "function" && (t.onclick = za)
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
                                r = !1
                        }
                    }
                    r && (e.flags |= 4)
                }
                e.ref !== null && (e.flags |= 512, e.flags |= 2097152)
            }
            return vt(e), null;
        case 6:
            if (t && e.stateNode != null) W0(t, e, t.memoizedProps, r);
            else {
                if (typeof r != "string" && e.stateNode === null) throw Error(M(166));
                if (n = Oi(ro.current), Oi(rr.current), Fo(e)) {
                    if (r = e.stateNode, n = e.memoizedProps, r[Zn] = e, (s = r.nodeValue !== n) && (t = dn, t !== null)) switch (t.tag) {
                        case 3:
                            Io(r.nodeValue, n, (t.mode & 1) !== 0);
                            break;
                        case 5:
                            t.memoizedProps.suppressHydrationWarning !== !0 && Io(r.nodeValue, n, (t.mode & 1) !== 0)
                    }
                    s && (e.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Zn] = e, e.stateNode = r
            }
            return vt(e), null;
        case 13:
            if (ye(Pe), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (Se && un !== null && e.mode & 1 && !(e.flags & 128)) o0(), js(), e.flags |= 98560, s = !1;
                else if (s = Fo(e), r !== null && r.dehydrated !== null) {
                    if (t === null) {
                        if (!s) throw Error(M(318));
                        if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(M(317));
                        s[Zn] = e
                    } else js(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
                    vt(e), s = !1
                } else Vn !== null && (lf(Vn), Vn = null), s = !0;
                if (!s) return e.flags & 65536 ? e : null
            }
            return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || Pe.current & 1 ? qe === 0 && (qe = 3) : yd())), e.updateQueue !== null && (e.flags |= 4), vt(e), null);
        case 4:
            return Fs(), qc(t, e), t === null && Jl(e.stateNode.containerInfo), vt(e), null;
        case 10:
            return nd(e.type._context), vt(e), null;
        case 17:
            return Yt(e.type) && La(), vt(e), null;
        case 19:
            if (ye(Pe), s = e.memoizedState, s === null) return vt(e), null;
            if (r = (e.flags & 128) !== 0, l = s.rendering, l === null)
                if (r) ol(s, !1);
                else {
                    if (qe !== 0 || t !== null && t.flags & 128)
                        for (t = e.child; t !== null;) {
                            if (l = Ua(t), l !== null) {
                                for (e.flags |= 128, ol(s, !1), r = l.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null;) s = n, t = r, s.flags &= 14680066, l = s.alternate, l === null ? (s.childLanes = 0, s.lanes = t, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = l.childLanes, s.lanes = l.lanes, s.child = l.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = l.memoizedProps, s.memoizedState = l.memoizedState, s.updateQueue = l.updateQueue, s.type = l.type, t = l.dependencies, s.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }), n = n.sibling;
                                return ge(Pe, Pe.current & 1 | 2), e.child
                            }
                            t = t.sibling
                        }
                    s.tail !== null && Ve() > Us && (e.flags |= 128, r = !0, ol(s, !1), e.lanes = 4194304)
                }
            else {
                if (!r)
                    if (t = Ua(l), t !== null) {
                        if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), ol(s, !0), s.tail === null && s.tailMode === "hidden" && !l.alternate && !Se) return vt(e), null
                    } else 2 * Ve() - s.renderingStartTime > Us && n !== 1073741824 && (e.flags |= 128, r = !0, ol(s, !1), e.lanes = 4194304);
                s.isBackwards ? (l.sibling = e.child, e.child = l) : (n = s.last, n !== null ? n.sibling = l : e.child = l, s.last = l)
            }
            return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = Ve(), e.sibling = null, n = Pe.current, ge(Pe, r ? n & 1 | 2 : n & 1), e) : (vt(e), null);
        case 22:
        case 23:
            return vd(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? nn & 1073741824 && (vt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : vt(e), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(M(156, e.tag))
}

function Vy(t, e) {
    switch (Zf(e), e.tag) {
        case 1:
            return Yt(e.type) && La(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
            return Fs(), ye($t), ye(Et), od(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
        case 5:
            return ld(e), null;
        case 13:
            if (ye(Pe), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                if (e.alternate === null) throw Error(M(340));
                js()
            }
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
            return ye(Pe), null;
        case 4:
            return Fs(), null;
        case 10:
            return nd(e.type._context), null;
        case 22:
        case 23:
            return vd(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Vo = !1,
    xt = !1,
    Hy = typeof WeakSet == "function" ? WeakSet : Set,
    A = null;

function _s(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            De(t, e, r)
        } else n.current = null
}

function Zc(t, e, n) {
    try {
        n()
    } catch (r) {
        De(t, e, r)
    }
}
var Kh = !1;

function Wy(t, e) {
    if (Ac = Oa, t = Qm(), Kf(t)) {
        if ("selectionStart" in t) var n = {
            start: t.selectionStart,
            end: t.selectionEnd
        };
        else e: {
            n = (n = t.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var l = 0,
                    o = -1,
                    a = -1,
                    u = 0,
                    c = 0,
                    h = t,
                    f = null;
                t: for (; ;) {
                    for (var d; h !== n || i !== 0 && h.nodeType !== 3 || (o = l + i), h !== s || r !== 0 && h.nodeType !== 3 || (a = l + r), h.nodeType === 3 && (l += h.nodeValue.length), (d = h.firstChild) !== null;) f = h, h = d;
                    for (; ;) {
                        if (h === t) break t;
                        if (f === n && ++u === i && (o = l), f === s && ++c === r && (a = l), (d = h.nextSibling) !== null) break;
                        h = f, f = h.parentNode
                    }
                    h = d
                }
                n = o === -1 || a === -1 ? null : {
                    start: o,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (jc = {
        focusedElem: t,
        selectionRange: n
    }, Oa = !1, A = e; A !== null;)
        if (e = A, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, A = t;
        else
            for (; A !== null;) {
                e = A;
                try {
                    var g = e.alternate;
                    if (e.flags & 1024) switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var p = g.memoizedProps,
                                    x = g.memoizedState,
                                    _ = e.stateNode,
                                    m = _.getSnapshotBeforeUpdate(e.elementType === e.type ? p : Bn(e.type, p), x);
                                _.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var v = e.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(M(163))
                    }
                } catch (y) {
                    De(e, e.return, y)
                }
                if (t = e.sibling, t !== null) {
                    t.return = e.return, A = t;
                    break
                }
                A = e.return
            }
    return g = Kh, Kh = !1, g
}

function Ol(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & t) === t) {
                var s = i.destroy;
                i.destroy = void 0, s !== void 0 && Zc(e, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}

function pu(t, e) {
    if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}

function Jc(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}

function $0(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, $0(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[Zn], delete e[to], delete e[Bc], delete e[Ey], delete e[Cy])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
}

function Y0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}

function qh(t) {
    e: for (; ;) {
        for (; t.sibling === null;) {
            if (t.return === null || Y0(t.return)) return null;
            t = t.return
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            t.child.return = t, t = t.child
        }
        if (!(t.flags & 2)) return t.stateNode
    }
}

function ef(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = za));
    else if (r !== 4 && (t = t.child, t !== null))
        for (ef(t, e, n), t = t.sibling; t !== null;) ef(t, e, n), t = t.sibling
}

function tf(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child, t !== null))
        for (tf(t, e, n), t = t.sibling; t !== null;) tf(t, e, n), t = t.sibling
}
var ot = null,
    Un = !1;

function Dr(t, e, n) {
    for (n = n.child; n !== null;) X0(t, e, n), n = n.sibling
}

function X0(t, e, n) {
    if (nr && typeof nr.onCommitFiberUnmount == "function") try {
        nr.onCommitFiberUnmount(lu, n)
    } catch { }
    switch (n.tag) {
        case 5:
            xt || _s(n, e);
        case 6:
            var r = ot,
                i = Un;
            ot = null, Dr(t, e, n), ot = r, Un = i, ot !== null && (Un ? (t = ot, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : ot.removeChild(n.stateNode));
            break;
        case 18:
            ot !== null && (Un ? (t = ot, n = n.stateNode, t.nodeType === 8 ? Hu(t.parentNode, n) : t.nodeType === 1 && Hu(t, n), Kl(t)) : Hu(ot, n.stateNode));
            break;
        case 4:
            r = ot, i = Un, ot = n.stateNode.containerInfo, Un = !0, Dr(t, e, n), ot = r, Un = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!xt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var s = i,
                        l = s.destroy;
                    s = s.tag, l !== void 0 && (s & 2 || s & 4) && Zc(n, e, l), i = i.next
                } while (i !== r)
            }
            Dr(t, e, n);
            break;
        case 1:
            if (!xt && (_s(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (o) {
                De(n, e, o)
            }
            Dr(t, e, n);
            break;
        case 21:
            Dr(t, e, n);
            break;
        case 22:
            n.mode & 1 ? (xt = (r = xt) || n.memoizedState !== null, Dr(t, e, n), xt = r) : Dr(t, e, n);
            break;
        default:
            Dr(t, e, n)
    }
}

function Zh(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new Hy), e.forEach(function (r) {
            var i = Zy.bind(null, t, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function In(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = t,
                    l = e,
                    o = l;
                e: for (; o !== null;) {
                    switch (o.tag) {
                        case 5:
                            ot = o.stateNode, Un = !1;
                            break e;
                        case 3:
                            ot = o.stateNode.containerInfo, Un = !0;
                            break e;
                        case 4:
                            ot = o.stateNode.containerInfo, Un = !0;
                            break e
                    }
                    o = o.return
                }
                if (ot === null) throw Error(M(160));
                X0(s, l, i), ot = null, Un = !1;
                var a = i.alternate;
                a !== null && (a.return = null), i.return = null
            } catch (u) {
                De(i, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null;) b0(e, t), e = e.sibling
}

function b0(t, e) {
    var n = t.alternate,
        r = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (In(e, t), Qn(t), r & 4) {
                try {
                    Ol(3, t, t.return), pu(3, t)
                } catch (p) {
                    De(t, t.return, p)
                }
                try {
                    Ol(5, t, t.return)
                } catch (p) {
                    De(t, t.return, p)
                }
            }
            break;
        case 1:
            In(e, t), Qn(t), r & 512 && n !== null && _s(n, n.return);
            break;
        case 5:
            if (In(e, t), Qn(t), r & 512 && n !== null && _s(n, n.return), t.flags & 32) {
                var i = t.stateNode;
                try {
                    Xl(i, "")
                } catch (p) {
                    De(t, t.return, p)
                }
            }
            if (r & 4 && (i = t.stateNode, i != null)) {
                var s = t.memoizedProps,
                    l = n !== null ? n.memoizedProps : s,
                    o = t.type,
                    a = t.updateQueue;
                if (t.updateQueue = null, a !== null) try {
                    o === "input" && s.type === "radio" && s.name != null && mm(i, s), Ec(o, l);
                    var u = Ec(o, s);
                    for (l = 0; l < a.length; l += 2) {
                        var c = a[l],
                            h = a[l + 1];
                        c === "style" ? wm(i, h) : c === "dangerouslySetInnerHTML" ? vm(i, h) : c === "children" ? Xl(i, h) : If(i, c, h, u)
                    }
                    switch (o) {
                        case "input":
                            wc(i, s);
                            break;
                        case "textarea":
                            gm(i, s);
                            break;
                        case "select":
                            var f = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!s.multiple;
                            var d = s.value;
                            d != null ? Ss(i, !!s.multiple, d, !1) : f !== !!s.multiple && (s.defaultValue != null ? Ss(i, !!s.multiple, s.defaultValue, !0) : Ss(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[to] = s
                } catch (p) {
                    De(t, t.return, p)
                }
            }
            break;
        case 6:
            if (In(e, t), Qn(t), r & 4) {
                if (t.stateNode === null) throw Error(M(162));
                i = t.stateNode, s = t.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (p) {
                    De(t, t.return, p)
                }
            }
            break;
        case 3:
            if (In(e, t), Qn(t), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Kl(e.containerInfo)
            } catch (p) {
                De(t, t.return, p)
            }
            break;
        case 4:
            In(e, t), Qn(t);
            break;
        case 13:
            In(e, t), Qn(t), i = t.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (gd = Ve())), r & 4 && Zh(t);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, t.mode & 1 ? (xt = (u = xt) || c, In(e, t), xt = u) : In(e, t), Qn(t), r & 8192) {
                if (u = t.memoizedState !== null, (t.stateNode.isHidden = u) && !c && t.mode & 1)
                    for (A = t, c = t.child; c !== null;) {
                        for (h = A = c; A !== null;) {
                            switch (f = A, d = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ol(4, f, f.return);
                                    break;
                                case 1:
                                    _s(f, f.return);
                                    var g = f.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            e = r, g.props = e.memoizedProps, g.state = e.memoizedState, g.componentWillUnmount()
                                        } catch (p) {
                                            De(r, n, p)
                                        }
                                    }
                                    break;
                                case 5:
                                    _s(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        ep(h);
                                        continue
                                    }
                            }
                            d !== null ? (d.return = f, A = d) : ep(h)
                        }
                        c = c.sibling
                    }
                e: for (c = null, h = t; ;) {
                    if (h.tag === 5) {
                        if (c === null) {
                            c = h;
                            try {
                                i = h.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = h.stateNode, a = h.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, o.style.display = ym("display", l))
                            } catch (p) {
                                De(t, t.return, p)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (c === null) try {
                            h.stateNode.nodeValue = u ? "" : h.memoizedProps
                        } catch (p) {
                            De(t, t.return, p)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === t) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === t) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === t) break e;
                        c === h && (c = null), h = h.return
                    }
                    c === h && (c = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            In(e, t), Qn(t), r & 4 && Zh(t);
            break;
        case 21:
            break;
        default:
            In(e, t), Qn(t)
    }
}

function Qn(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null;) {
                    if (Y0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Xl(i, ""), r.flags &= -33);
                    var s = qh(t);
                    tf(t, s, i);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        o = qh(t);
                    ef(t, o, l);
                    break;
                default:
                    throw Error(M(161))
            }
        }
        catch (a) {
            De(t, t.return, a)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}

function $y(t, e, n) {
    A = t, Q0(t)
}

function Q0(t, e, n) {
    for (var r = (t.mode & 1) !== 0; A !== null;) {
        var i = A,
            s = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || Vo;
            if (!l) {
                var o = i.alternate,
                    a = o !== null && o.memoizedState !== null || xt;
                o = Vo;
                var u = xt;
                if (Vo = l, (xt = a) && !u)
                    for (A = i; A !== null;) l = A, a = l.child, l.tag === 22 && l.memoizedState !== null ? tp(i) : a !== null ? (a.return = l, A = a) : tp(i);
                for (; s !== null;) A = s, Q0(s), s = s.sibling;
                A = i, Vo = o, xt = u
            }
            Jh(t)
        } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, A = s) : Jh(t)
    }
}

function Jh(t) {
    for (; A !== null;) {
        var e = A;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772) switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        xt || pu(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !xt)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = e.elementType === e.type ? n.memoizedProps : Bn(e.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var s = e.updateQueue;
                        s !== null && Ih(e, s, r);
                        break;
                    case 3:
                        var l = e.updateQueue;
                        if (l !== null) {
                            if (n = null, e.child !== null) switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                            }
                            Ih(e, l, n)
                        }
                        break;
                    case 5:
                        var o = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = o;
                            var a = e.memoizedProps;
                            switch (e.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
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
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var h = c.dehydrated;
                                    h !== null && Kl(h)
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
                        throw Error(M(163))
                }
                xt || e.flags & 512 && Jc(e)
            } catch (f) {
                De(e, e.return, f)
            }
        }
        if (e === t) {
            A = null;
            break
        }
        if (n = e.sibling, n !== null) {
            n.return = e.return, A = n;
            break
        }
        A = e.return
    }
}

function ep(t) {
    for (; A !== null;) {
        var e = A;
        if (e === t) {
            A = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return, A = n;
            break
        }
        A = e.return
    }
}

function tp(t) {
    for (; A !== null;) {
        var e = A;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        pu(4, e)
                    } catch (a) {
                        De(e, n, a)
                    }
                    break;
                case 1:
                    var r = e.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = e.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            De(e, i, a)
                        }
                    }
                    var s = e.return;
                    try {
                        Jc(e)
                    } catch (a) {
                        De(e, s, a)
                    }
                    break;
                case 5:
                    var l = e.return;
                    try {
                        Jc(e)
                    } catch (a) {
                        De(e, l, a)
                    }
            }
        } catch (a) {
            De(e, e.return, a)
        }
        if (e === t) {
            A = null;
            break
        }
        var o = e.sibling;
        if (o !== null) {
            o.return = e.return, A = o;
            break
        }
        A = e.return
    }
}
var Yy = Math.ceil,
    Wa = Pr.ReactCurrentDispatcher,
    pd = Pr.ReactCurrentOwner,
    Nn = Pr.ReactCurrentBatchConfig,
    oe = 0,
    rt = null,
    Xe = null,
    ut = 0,
    nn = 0,
    vs = di(0),
    qe = 0,
    oo = null,
    $i = 0,
    mu = 0,
    md = 0,
    Rl = null,
    Ht = null,
    gd = 0,
    Us = 1 / 0,
    fr = null,
    $a = !1,
    nf = null,
    Jr = null,
    Ho = !1,
    Hr = null,
    Ya = 0,
    Ml = 0,
    rf = null,
    da = -1,
    ha = 0;

function It() {
    return oe & 6 ? Ve() : da !== -1 ? da : da = Ve()
}

function ei(t) {
    return t.mode & 1 ? oe & 2 && ut !== 0 ? ut & -ut : Ny.transition !== null ? (ha === 0 && (ha = zm()), ha) : (t = fe, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Bm(t.type)), t) : 1
}

function Wn(t, e, n, r) {
    if (50 < Ml) throw Ml = 0, rf = null, Error(M(185));
    yo(t, n, r), (!(oe & 2) || t !== rt) && (t === rt && (!(oe & 2) && (mu |= n), qe === 4 && Ur(t, ut)), Xt(t, r), n === 1 && oe === 0 && !(e.mode & 1) && (Us = Ve() + 500, fu && hi()))
}

function Xt(t, e) {
    var n = t.callbackNode;
    Nv(t, e);
    var r = Na(t, t === rt ? ut : 0);
    if (r === 0) n !== null && ch(n), t.callbackNode = null, t.callbackPriority = 0;
    else if (e = r & -r, t.callbackPriority !== e) {
        if (n != null && ch(n), e === 1) t.tag === 0 ? Py(np.bind(null, t)) : i0(np.bind(null, t)), ky(function () {
            !(oe & 6) && hi()
        }), n = null;
        else {
            switch (Lm(r)) {
                case 1:
                    n = Hf;
                    break;
                case 4:
                    n = Rm;
                    break;
                case 16:
                    n = Pa;
                    break;
                case 536870912:
                    n = Mm;
                    break;
                default:
                    n = Pa
            }
            n = ng(n, G0.bind(null, t))
        }
        t.callbackPriority = e, t.callbackNode = n
    }
}

function G0(t, e) {
    if (da = -1, ha = 0, oe & 6) throw Error(M(327));
    var n = t.callbackNode;
    if (Ps() && t.callbackNode !== n) return null;
    var r = Na(t, t === rt ? ut : 0);
    if (r === 0) return null;
    if (r & 30 || r & t.expiredLanes || e) e = Xa(t, r);
    else {
        e = r;
        var i = oe;
        oe |= 2;
        var s = q0();
        (rt !== t || ut !== e) && (fr = null, Us = Ve() + 500, zi(t, e));
        do try {
            Qy();
            break
        } catch (o) {
            K0(t, o)
        }
        while (!0);
        td(), Wa.current = s, oe = i, Xe !== null ? e = 0 : (rt = null, ut = 0, e = qe)
    }
    if (e !== 0) {
        if (e === 2 && (i = Rc(t), i !== 0 && (r = i, e = sf(t, i))), e === 1) throw n = oo, zi(t, 0), Ur(t, r), Xt(t, Ve()), n;
        if (e === 6) Ur(t, r);
        else {
            if (i = t.current.alternate, !(r & 30) && !Xy(i) && (e = Xa(t, r), e === 2 && (s = Rc(t), s !== 0 && (r = s, e = sf(t, s))), e === 1)) throw n = oo, zi(t, 0), Ur(t, r), Xt(t, Ve()), n;
            switch (t.finishedWork = i, t.finishedLanes = r, e) {
                case 0:
                case 1:
                    throw Error(M(345));
                case 2:
                    ki(t, Ht, fr);
                    break;
                case 3:
                    if (Ur(t, r), (r & 130023424) === r && (e = gd + 500 - Ve(), 10 < e)) {
                        if (Na(t, 0) !== 0) break;
                        if (i = t.suspendedLanes, (i & r) !== r) {
                            It(), t.pingedLanes |= t.suspendedLanes & i;
                            break
                        }
                        t.timeoutHandle = Fc(ki.bind(null, t, Ht, fr), e);
                        break
                    }
                    ki(t, Ht, fr);
                    break;
                case 4:
                    if (Ur(t, r), (r & 4194240) === r) break;
                    for (e = t.eventTimes, i = -1; 0 < r;) {
                        var l = 31 - Hn(r);
                        s = 1 << l, l = e[l], l > i && (i = l), r &= ~s
                    }
                    if (r = i, r = Ve() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Yy(r / 1960)) - r, 10 < r) {
                        t.timeoutHandle = Fc(ki.bind(null, t, Ht, fr), r);
                        break
                    }
                    ki(t, Ht, fr);
                    break;
                case 5:
                    ki(t, Ht, fr);
                    break;
                default:
                    throw Error(M(329))
            }
        }
    }
    return Xt(t, Ve()), t.callbackNode === n ? G0.bind(null, t) : null
}

function sf(t, e) {
    var n = Rl;
    return t.current.memoizedState.isDehydrated && (zi(t, e).flags |= 256), t = Xa(t, e), t !== 2 && (e = Ht, Ht = n, e !== null && lf(e)), t
}

function lf(t) {
    Ht === null ? Ht = t : Ht.push.apply(Ht, t)
}

function Xy(t) {
    for (var e = t; ;) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!$n(s(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
        else {
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return !0;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
    }
    return !0
}

function Ur(t, e) {
    for (e &= ~md, e &= ~mu, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) {
        var n = 31 - Hn(e),
            r = 1 << n;
        t[n] = -1, e &= ~r
    }
}

function np(t) {
    if (oe & 6) throw Error(M(327));
    Ps();
    var e = Na(t, 0);
    if (!(e & 1)) return Xt(t, Ve()), null;
    var n = Xa(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = Rc(t);
        r !== 0 && (e = r, n = sf(t, r))
    }
    if (n === 1) throw n = oo, zi(t, 0), Ur(t, e), Xt(t, Ve()), n;
    if (n === 6) throw Error(M(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = e, ki(t, Ht, fr), Xt(t, Ve()), null
}

function _d(t, e) {
    var n = oe;
    oe |= 1;
    try {
        return t(e)
    } finally {
        oe = n, oe === 0 && (Us = Ve() + 500, fu && hi())
    }
}

function Yi(t) {
    Hr !== null && Hr.tag === 0 && !(oe & 6) && Ps();
    var e = oe;
    oe |= 1;
    var n = Nn.transition,
        r = fe;
    try {
        if (Nn.transition = null, fe = 1, t) return t()
    } finally {
        fe = r, Nn.transition = n, oe = e, !(oe & 6) && hi()
    }
}

function vd() {
    nn = vs.current, ye(vs)
}

function zi(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1, Sy(n)), Xe !== null)
        for (n = Xe.return; n !== null;) {
            var r = n;
            switch (Zf(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && La();
                    break;
                case 3:
                    Fs(), ye($t), ye(Et), od();
                    break;
                case 5:
                    ld(r);
                    break;
                case 4:
                    Fs();
                    break;
                case 13:
                    ye(Pe);
                    break;
                case 19:
                    ye(Pe);
                    break;
                case 10:
                    nd(r.type._context);
                    break;
                case 22:
                case 23:
                    vd()
            }
            n = n.return
        }
    if (rt = t, Xe = t = ti(t.current, null), ut = nn = e, qe = 0, oo = null, md = mu = $i = 0, Ht = Rl = null, Ni !== null) {
        for (e = 0; e < Ni.length; e++)
            if (n = Ni[e], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    s = n.pending;
                if (s !== null) {
                    var l = s.next;
                    s.next = i, r.next = l
                }
                n.pending = r
            } Ni = null
    }
    return t
}

function K0(t, e) {
    do {
        var n = Xe;
        try {
            if (td(), ua.current = Ha, Va) {
                for (var r = Re.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Va = !1
            }
            if (Wi = 0, nt = Ge = Re = null, Nl = !1, io = 0, pd.current = null, n === null || n.return === null) {
                qe = 1, oo = e, Xe = null;
                break
            }
            e: {
                var s = t,
                    l = n.return,
                    o = n,
                    a = e;
                if (e = ut, o.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        c = o,
                        h = c.tag;
                    if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var d = Wh(l);
                    if (d !== null) {
                        d.flags &= -257, $h(d, l, o, s, e), d.mode & 1 && Hh(s, u, e), e = d, a = u;
                        var g = e.updateQueue;
                        if (g === null) {
                            var p = new Set;
                            p.add(a), e.updateQueue = p
                        } else g.add(a);
                        break e
                    } else {
                        if (!(e & 1)) {
                            Hh(s, u, e), yd();
                            break e
                        }
                        a = Error(M(426))
                    }
                } else if (Se && o.mode & 1) {
                    var x = Wh(l);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256), $h(x, l, o, s, e), Jf(Bs(a, o));
                        break e
                    }
                }
                s = a = Bs(a, o),
                    qe !== 4 && (qe = 2),
                    Rl === null ? Rl = [s] : Rl.push(s),
                    s = l; do {
                        switch (s.tag) {
                            case 3:
                                s.flags |= 65536, e &= -e, s.lanes |= e;
                                var _ = L0(s, a, e);
                                jh(s, _);
                                break e;
                            case 1:
                                o = a;
                                var m = s.type,
                                    v = s.stateNode;
                                if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Jr === null || !Jr.has(v)))) {
                                    s.flags |= 65536, e &= -e, s.lanes |= e;
                                    var y = D0(s, o, e);
                                    jh(s, y);
                                    break e
                                }
                        }
                        s = s.return
                    } while (s !== null)
            }
            J0(n)
        } catch (k) {
            e = k, Xe === n && n !== null && (Xe = n = n.return);
            continue
        }
        break
    } while (!0)
}

function q0() {
    var t = Wa.current;
    return Wa.current = Ha, t === null ? Ha : t
}

function yd() {
    (qe === 0 || qe === 3 || qe === 2) && (qe = 4), rt === null || !($i & 268435455) && !(mu & 268435455) || Ur(rt, ut)
}

function Xa(t, e) {
    var n = oe;
    oe |= 2;
    var r = q0();
    (rt !== t || ut !== e) && (fr = null, zi(t, e));
    do try {
        by();
        break
    } catch (i) {
        K0(t, i)
    }
    while (!0);
    if (td(), oe = n, Wa.current = r, Xe !== null) throw Error(M(261));
    return rt = null, ut = 0, qe
}

function by() {
    for (; Xe !== null;) Z0(Xe)
}

function Qy() {
    for (; Xe !== null && !yv();) Z0(Xe)
}

function Z0(t) {
    var e = tg(t.alternate, t, nn);
    t.memoizedProps = t.pendingProps, e === null ? J0(t) : Xe = e, pd.current = null
}

function J0(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return, e.flags & 32768) {
            if (n = Vy(n, e), n !== null) {
                n.flags &= 32767, Xe = n;
                return
            }
            if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
            else {
                qe = 6, Xe = null;
                return
            }
        } else if (n = Uy(n, e, nn), n !== null) {
            Xe = n;
            return
        }
        if (e = e.sibling, e !== null) {
            Xe = e;
            return
        }
        Xe = e = t
    } while (e !== null);
    qe === 0 && (qe = 5)
}

function ki(t, e, n) {
    var r = fe,
        i = Nn.transition;
    try {
        Nn.transition = null, fe = 1, Gy(t, e, n, r)
    } finally {
        Nn.transition = i, fe = r
    }
    return null
}

function Gy(t, e, n, r) {
    do Ps(); while (Hr !== null);
    if (oe & 6) throw Error(M(327));
    n = t.finishedWork;
    var i = t.finishedLanes;
    if (n === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(M(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Ov(t, s), t === rt && (Xe = rt = null, ut = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ho || (Ho = !0, ng(Pa, function () {
        return Ps(), null
    })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = Nn.transition, Nn.transition = null;
        var l = fe;
        fe = 1;
        var o = oe;
        oe |= 4, pd.current = null, Wy(t, n), b0(n, t), my(jc), Oa = !!Ac, jc = Ac = null, t.current = n, $y(n), wv(), oe = o, fe = l, Nn.transition = s
    } else t.current = n;
    if (Ho && (Ho = !1, Hr = t, Ya = i), s = t.pendingLanes, s === 0 && (Jr = null), kv(n.stateNode), Xt(t, Ve()), e !== null)
        for (r = t.onRecoverableError, n = 0; n < e.length; n++) i = e[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if ($a) throw $a = !1, t = nf, nf = null, t;
    return Ya & 1 && t.tag !== 0 && Ps(), s = t.pendingLanes, s & 1 ? t === rf ? Ml++ : (Ml = 0, rf = t) : Ml = 0, hi(), null
}

function Ps() {
    if (Hr !== null) {
        var t = Lm(Ya),
            e = Nn.transition,
            n = fe;
        try {
            if (Nn.transition = null, fe = 16 > t ? 16 : t, Hr === null) var r = !1;
            else {
                if (t = Hr, Hr = null, Ya = 0, oe & 6) throw Error(M(331));
                var i = oe;
                for (oe |= 4, A = t.current; A !== null;) {
                    var s = A,
                        l = s.child;
                    if (A.flags & 16) {
                        var o = s.deletions;
                        if (o !== null) {
                            for (var a = 0; a < o.length; a++) {
                                var u = o[a];
                                for (A = u; A !== null;) {
                                    var c = A;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ol(8, c, s)
                                    }
                                    var h = c.child;
                                    if (h !== null) h.return = c, A = h;
                                    else
                                        for (; A !== null;) {
                                            c = A;
                                            var f = c.sibling,
                                                d = c.return;
                                            if ($0(c), c === u) {
                                                A = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = d, A = f;
                                                break
                                            }
                                            A = d
                                        }
                                }
                            }
                            var g = s.alternate;
                            if (g !== null) {
                                var p = g.child;
                                if (p !== null) {
                                    g.child = null;
                                    do {
                                        var x = p.sibling;
                                        p.sibling = null, p = x
                                    } while (p !== null)
                                }
                            }
                            A = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && l !== null) l.return = s, A = l;
                    else e: for (; A !== null;) {
                        if (s = A, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ol(9, s, s.return)
                        }
                        var _ = s.sibling;
                        if (_ !== null) {
                            _.return = s.return, A = _;
                            break e
                        }
                        A = s.return
                    }
                }
                var m = t.current;
                for (A = m; A !== null;) {
                    l = A;
                    var v = l.child;
                    if (l.subtreeFlags & 2064 && v !== null) v.return = l, A = v;
                    else e: for (l = m; A !== null;) {
                        if (o = A, o.flags & 2048) try {
                            switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    pu(9, o)
                            }
                        } catch (k) {
                            De(o, o.return, k)
                        }
                        if (o === l) {
                            A = null;
                            break e
                        }
                        var y = o.sibling;
                        if (y !== null) {
                            y.return = o.return, A = y;
                            break e
                        }
                        A = o.return
                    }
                }
                if (oe = i, hi(), nr && typeof nr.onPostCommitFiberRoot == "function") try {
                    nr.onPostCommitFiberRoot(lu, t)
                } catch { }
                r = !0
            }
            return r
        } finally {
            fe = n, Nn.transition = e
        }
    }
    return !1
}

function rp(t, e, n) {
    e = Bs(n, e), e = L0(t, e, 1), t = Zr(t, e, 1), e = It(), t !== null && (yo(t, 1, e), Xt(t, e))
}

function De(t, e, n) {
    if (t.tag === 3) rp(t, t, n);
    else
        for (; e !== null;) {
            if (e.tag === 3) {
                rp(e, t, n);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Jr === null || !Jr.has(r))) {
                    t = Bs(n, t), t = D0(e, t, 1), e = Zr(e, t, 1), t = It(), e !== null && (yo(e, 1, t), Xt(e, t));
                    break
                }
            }
            e = e.return
        }
}

function Ky(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e), e = It(), t.pingedLanes |= t.suspendedLanes & n, rt === t && (ut & n) === n && (qe === 4 || qe === 3 && (ut & 130023424) === ut && 500 > Ve() - gd ? zi(t, 0) : md |= n), Xt(t, e)
}

function eg(t, e) {
    e === 0 && (t.mode & 1 ? (e = zo, zo <<= 1, !(zo & 130023424) && (zo = 4194304)) : e = 1);
    var n = It();
    t = kr(t, e), t !== null && (yo(t, e, n), Xt(t, n))
}

function qy(t) {
    var e = t.memoizedState,
        n = 0;
    e !== null && (n = e.retryLane), eg(t, n)
}

function Zy(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var r = t.stateNode,
                i = t.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = t.stateNode;
            break;
        default:
            throw Error(M(314))
    }
    r !== null && r.delete(e), eg(t, n)
}
var tg;
tg = function (t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || $t.current) Wt = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128)) return Wt = !1, By(t, e, n);
            Wt = !!(t.flags & 131072)
        }
    else Wt = !1, Se && e.flags & 1048576 && s0(e, ja, e.index);
    switch (e.lanes = 0, e.tag) {
        case 2:
            var r = e.type;
            fa(t, e), t = e.pendingProps;
            var i = As(e, Et.current);
            Cs(e, n), i = ud(null, e, r, t, i, n);
            var s = cd();
            return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, Yt(r) ? (s = !0, Da(e)) : s = !1, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, id(e), i.updater = hu, e.stateNode = i, i._reactInternals = e, Yc(e, r, t, n), e = Qc(null, e, r, !0, s, n)) : (e.tag = 0, Se && s && qf(e), zt(null, e, i, n), e = e.child), e;
        case 16:
            r = e.elementType;
            e: {
                switch (fa(t, e), t = e.pendingProps, i = r._init, r = i(r._payload), e.type = r, i = e.tag = e1(r), t = Bn(r, t), i) {
                    case 0:
                        e = bc(null, e, r, t, n);
                        break e;
                    case 1:
                        e = bh(null, e, r, t, n);
                        break e;
                    case 11:
                        e = Yh(null, e, r, t, n);
                        break e;
                    case 14:
                        e = Xh(null, e, r, Bn(r.type, t), n);
                        break e
                }
                throw Error(M(306, r, ""))
            }
            return e;
        case 0:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Bn(r, i), bc(t, e, r, i, n);
        case 1:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Bn(r, i), bh(t, e, r, i, n);
        case 3:
            e: {
                if (F0(e), t === null) throw Error(M(387)); r = e.pendingProps,
                    s = e.memoizedState,
                    i = s.element,
                    f0(t, e),
                    Ba(e, r, null, n);
                var l = e.memoizedState;
                if (r = l.element, s.isDehydrated)
                    if (s = {
                        element: r,
                        isDehydrated: !1,
                        cache: l.cache,
                        pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                        transitions: l.transitions
                    }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
                        i = Bs(Error(M(423)), e), e = Qh(t, e, r, n, i);
                        break e
                    } else if (r !== i) {
                        i = Bs(Error(M(424)), e), e = Qh(t, e, r, n, i);
                        break e
                    } else
                        for (un = qr(e.stateNode.containerInfo.firstChild), dn = e, Se = !0, Vn = null, n = u0(e, null, r, n), e.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (js(), r === i) {
                        e = Tr(t, e, n);
                        break e
                    }
                    zt(t, e, r, n)
                }
                e = e.child
            }
            return e;
        case 5:
            return d0(e), t === null && Hc(e), r = e.type, i = e.pendingProps, s = t !== null ? t.memoizedProps : null, l = i.children, Ic(r, i) ? l = null : s !== null && Ic(r, s) && (e.flags |= 32), I0(t, e), zt(t, e, l, n), e.child;
        case 6:
            return t === null && Hc(e), null;
        case 13:
            return B0(t, e, n);
        case 4:
            return sd(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = Is(e, null, r, n) : zt(t, e, r, n), e.child;
        case 11:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Bn(r, i), Yh(t, e, r, i, n);
        case 7:
            return zt(t, e, e.pendingProps, n), e.child;
        case 8:
            return zt(t, e, e.pendingProps.children, n), e.child;
        case 12:
            return zt(t, e, e.pendingProps.children, n), e.child;
        case 10:
            e: {
                if (r = e.type._context, i = e.pendingProps, s = e.memoizedProps, l = i.value, ge(Ia, r._currentValue), r._currentValue = l, s !== null)
                    if ($n(s.value, l)) {
                        if (s.children === i.children && !$t.current) {
                            e = Tr(t, e, n);
                            break e
                        }
                    } else
                        for (s = e.child, s !== null && (s.return = e); s !== null;) {
                            var o = s.dependencies;
                            if (o !== null) {
                                l = s.child;
                                for (var a = o.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (s.tag === 1) {
                                            a = yr(-1, n & -n), a.tag = 2;
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                            }
                                        }
                                        s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Wc(s.return, n, e), o.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (s.tag === 10) l = s.type === e.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (l = s.return, l === null) throw Error(M(341));
                                l.lanes |= n, o = l.alternate, o !== null && (o.lanes |= n), Wc(l, n, e), l = s.sibling
                            } else l = s.child;
                            if (l !== null) l.return = s;
                            else
                                for (l = s; l !== null;) {
                                    if (l === e) {
                                        l = null;
                                        break
                                    }
                                    if (s = l.sibling, s !== null) {
                                        s.return = l.return, l = s;
                                        break
                                    }
                                    l = l.return
                                }
                            s = l
                        }
                zt(t, e, i.children, n),
                    e = e.child
            }
            return e;
        case 9:
            return i = e.type, r = e.pendingProps.children, Cs(e, n), i = Rn(i), r = r(i), e.flags |= 1, zt(t, e, r, n), e.child;
        case 14:
            return r = e.type, i = Bn(r, e.pendingProps), i = Bn(r.type, i), Xh(t, e, r, i, n);
        case 15:
            return A0(t, e, e.type, e.pendingProps, n);
        case 17:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Bn(r, i), fa(t, e), e.tag = 1, Yt(r) ? (t = !0, Da(e)) : t = !1, Cs(e, n), z0(e, r, i), Yc(e, r, i, n), Qc(null, e, r, !0, t, n);
        case 19:
            return U0(t, e, n);
        case 22:
            return j0(t, e, n)
    }
    throw Error(M(156, e.tag))
};

function ng(t, e) {
    return Om(t, e)
}

function Jy(t, e, n, r) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function En(t, e, n, r) {
    return new Jy(t, e, n, r)
}

function wd(t) {
    return t = t.prototype, !(!t || !t.isReactComponent)
}

function e1(t) {
    if (typeof t == "function") return wd(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof, t === Bf) return 11;
        if (t === Uf) return 14
    }
    return 2
}

function ti(t, e) {
    var n = t.alternate;
    return n === null ? (n = En(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
}

function pa(t, e, n, r, i, s) {
    var l = 2;
    if (r = t, typeof t == "function") wd(t) && (l = 1);
    else if (typeof t == "string") l = 5;
    else e: switch (t) {
        case as:
            return Li(n.children, i, s, e);
        case Ff:
            l = 8, i |= 8;
            break;
        case mc:
            return t = En(12, n, e, i | 2), t.elementType = mc, t.lanes = s, t;
        case gc:
            return t = En(13, n, e, i), t.elementType = gc, t.lanes = s, t;
        case _c:
            return t = En(19, n, e, i), t.elementType = _c, t.lanes = s, t;
        case dm:
            return gu(n, i, s, e);
        default:
            if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                case cm:
                    l = 10;
                    break e;
                case fm:
                    l = 9;
                    break e;
                case Bf:
                    l = 11;
                    break e;
                case Uf:
                    l = 14;
                    break e;
                case Ir:
                    l = 16, r = null;
                    break e
            }
            throw Error(M(130, t == null ? t : typeof t, ""))
    }
    return e = En(l, n, e, i), e.elementType = t, e.type = r, e.lanes = s, e
}

function Li(t, e, n, r) {
    return t = En(7, t, r, e), t.lanes = n, t
}

function gu(t, e, n, r) {
    return t = En(22, t, r, e), t.elementType = dm, t.lanes = n, t.stateNode = {
        isHidden: !1
    }, t
}

function Ku(t, e, n) {
    return t = En(6, t, null, e), t.lanes = n, t
}

function qu(t, e, n) {
    return e = En(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    }, e
}

function t1(t, e, n, r, i) {
    this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Mu(0), this.expirationTimes = Mu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mu(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function xd(t, e, n, r, i, s, l, o, a) {
    return t = new t1(t, e, n, o, a), e === 1 ? (e = 1, s === !0 && (e |= 8)) : e = 0, s = En(3, null, null, e), t.current = s, s.stateNode = t, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, id(s), t
}

function n1(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: os,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}

function rg(t) {
    if (!t) return li;
    t = t._reactInternals;
    e: {
        if (Ki(t) !== t || t.tag !== 1) throw Error(M(170));
        var e = t; do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (Yt(e.type)) {
                        e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            e = e.return
        } while (e !== null);
        throw Error(M(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Yt(n)) return r0(t, n, e)
    }
    return e
}

function ig(t, e, n, r, i, s, l, o, a) {
    return t = xd(n, r, !0, t, i, s, l, o, a), t.context = rg(null), n = t.current, r = It(), i = ei(n), s = yr(r, i), s.callback = e ?? null, Zr(n, s, i), t.current.lanes = i, yo(t, i, r), Xt(t, r), t
}

function _u(t, e, n, r) {
    var i = e.current,
        s = It(),
        l = ei(i);
    return n = rg(n), e.context === null ? e.context = n : e.pendingContext = n, e = yr(s, l), e.payload = {
        element: t
    }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = Zr(i, e, l), t !== null && (Wn(t, i, l, s), aa(t, i, l)), l
}

function ba(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode
    }
}

function ip(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}

function Sd(t, e) {
    ip(t, e), (t = t.alternate) && ip(t, e)
}

function r1() {
    return null
}
var sg = typeof reportError == "function" ? reportError : function (t) {
    console.error(t)
};

function kd(t) {
    this._internalRoot = t
}
vu.prototype.render = kd.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null) throw Error(M(409));
    _u(t, e, null, null)
};
vu.prototype.unmount = kd.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Yi(function () {
            _u(null, t, null, null)
        }), e[Sr] = null
    }
};

function vu(t) {
    this._internalRoot = t
}
vu.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
        var e = jm();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < Br.length && e !== 0 && e < Br[n].priority; n++);
        Br.splice(n, 0, t), n === 0 && Fm(t)
    }
};

function Td(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}

function yu(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}

function sp() { }

function i1(t, e, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function () {
                var u = ba(l);
                s.call(u)
            }
        }
        var l = ig(e, r, t, 0, null, !1, !1, "", sp);
        return t._reactRootContainer = l, t[Sr] = l.current, Jl(t.nodeType === 8 ? t.parentNode : t), Yi(), l
    }
    for (; i = t.lastChild;) t.removeChild(i);
    if (typeof r == "function") {
        var o = r;
        r = function () {
            var u = ba(a);
            o.call(u)
        }
    }
    var a = xd(t, 0, !1, null, null, !1, !1, "", sp);
    return t._reactRootContainer = a, t[Sr] = a.current, Jl(t.nodeType === 8 ? t.parentNode : t), Yi(function () {
        _u(e, a, n, r)
    }), a
}

function wu(t, e, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var l = s;
        if (typeof i == "function") {
            var o = i;
            i = function () {
                var a = ba(l);
                o.call(a)
            }
        }
        _u(e, l, t, i)
    } else l = i1(n, e, t, i, r);
    return ba(l)
}
Dm = function (t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = pl(e.pendingLanes);
                n !== 0 && (Wf(e, n | 1), Xt(e, Ve()), !(oe & 6) && (Us = Ve() + 500, hi()))
            }
            break;
        case 13:
            Yi(function () {
                var r = kr(t, 1);
                if (r !== null) {
                    var i = It();
                    Wn(r, t, 1, i)
                }
            }), Sd(t, 1)
    }
};
$f = function (t) {
    if (t.tag === 13) {
        var e = kr(t, 134217728);
        if (e !== null) {
            var n = It();
            Wn(e, t, 134217728, n)
        }
        Sd(t, 134217728)
    }
};
Am = function (t) {
    if (t.tag === 13) {
        var e = ei(t),
            n = kr(t, e);
        if (n !== null) {
            var r = It();
            Wn(n, t, e, r)
        }
        Sd(t, e)
    }
};
jm = function () {
    return fe
};
Im = function (t, e) {
    var n = fe;
    try {
        return fe = t, e()
    } finally {
        fe = n
    }
};
Pc = function (t, e, n) {
    switch (e) {
        case "input":
            if (wc(t, n), e = n.name, n.type === "radio" && e != null) {
                for (n = t; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                    var r = n[e];
                    if (r !== t && r.form === t.form) {
                        var i = cu(r);
                        if (!i) throw Error(M(90));
                        pm(r), wc(r, i)
                    }
                }
            }
            break;
        case "textarea":
            gm(t, n);
            break;
        case "select":
            e = n.value, e != null && Ss(t, !!n.multiple, e, !1)
    }
};
km = _d;
Tm = Yi;
var s1 = {
    usingClientEntryPoint: !1,
    Events: [xo, ds, cu, xm, Sm, _d]
},
    al = {
        findFiberByHostInstance: Pi,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    l1 = {
        bundleType: al.bundleType,
        version: al.version,
        rendererPackageName: al.rendererPackageName,
        rendererConfig: al.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Pr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (t) {
            return t = Pm(t), t === null ? null : t.stateNode
        },
        findFiberByHostInstance: al.findFiberByHostInstance || r1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wo.isDisabled && Wo.supportsFiber) try {
        lu = Wo.inject(l1), nr = Wo
    } catch { }
}
_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s1;
_n.createPortal = function (t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Td(e)) throw Error(M(200));
    return n1(t, e, null, n)
};
_n.createRoot = function (t, e) {
    if (!Td(t)) throw Error(M(299));
    var n = !1,
        r = "",
        i = sg;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = xd(t, 1, !1, null, null, n, !1, r, i), t[Sr] = e.current, Jl(t.nodeType === 8 ? t.parentNode : t), new kd(e)
};
_n.findDOMNode = function (t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(M(188)) : (t = Object.keys(t).join(","), Error(M(268, t)));
    return t = Pm(e), t = t === null ? null : t.stateNode, t
};
_n.flushSync = function (t) {
    return Yi(t)
};
_n.hydrate = function (t, e, n) {
    if (!yu(e)) throw Error(M(200));
    return wu(null, t, e, !0, n)
};
_n.hydrateRoot = function (t, e, n) {
    if (!Td(t)) throw Error(M(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        s = "",
        l = sg;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), e = ig(e, null, t, 1, n ?? null, i, !1, s, l), t[Sr] = e.current, Jl(t), r)
        for (t = 0; t < r.length; t++) n = r[t], i = n._getVersion, i = i(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(n, i);
    return new vu(e)
};
_n.render = function (t, e, n) {
    if (!yu(e)) throw Error(M(200));
    return wu(null, t, e, !1, n)
};
_n.unmountComponentAtNode = function (t) {
    if (!yu(t)) throw Error(M(40));
    return t._reactRootContainer ? (Yi(function () {
        wu(null, null, t, !1, function () {
            t._reactRootContainer = null, t[Sr] = null
        })
    }), !0) : !1
};
_n.unstable_batchedUpdates = _d;
_n.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
    if (!yu(n)) throw Error(M(200));
    if (t == null || t._reactInternals === void 0) throw Error(M(38));
    return wu(t, e, n, !1, r)
};
_n.version = "18.3.1-next-f1338f8080-20240426";

function lg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lg)
    } catch (t) {
        console.error(t)
    }
}
lg(), lm.exports = _n;
var o1 = lm.exports,
    lp = o1;
hc.createRoot = lp.createRoot, hc.hydrateRoot = lp.hydrateRoot;
var op = "1.3.21";

function og(t, e, n) {
    return Math.max(t, Math.min(e, n))
}

function a1(t, e, n) {
    return (1 - n) * t + n * e
}

function u1(t, e, n, r) {
    return a1(t, e, 1 - Math.exp(-n * r))
}

function c1(t, e) {
    return (t % e + e) % e
}
var f1 = class {
    constructor() {
        I(this, "isRunning", !1);
        I(this, "value", 0);
        I(this, "from", 0);
        I(this, "to", 0);
        I(this, "currentTime", 0);
        I(this, "lerp");
        I(this, "duration");
        I(this, "easing");
        I(this, "onUpdate")
    }
    advance(t) {
        var n;
        if (!this.isRunning) return;
        let e = !1;
        if (this.duration && this.easing) {
            this.currentTime += t;
            const r = og(0, this.currentTime / this.duration, 1);
            e = r >= 1;
            const i = e ? 1 : this.easing(r);
            this.value = this.from + (this.to - this.from) * i
        } else this.lerp ? (this.value = u1(this.value, this.to, this.lerp * 60, t), Math.round(this.value) === this.to && (this.value = this.to, e = !0)) : (this.value = this.to, e = !0);
        e && this.stop(), (n = this.onUpdate) == null || n.call(this, this.value, e)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(t, e, {
        lerp: n,
        duration: r,
        easing: i,
        onStart: s,
        onUpdate: l
    }) {
        this.from = this.value = t, this.to = e, this.lerp = n, this.duration = r, this.easing = i, this.currentTime = 0, this.isRunning = !0, s == null || s(), this.onUpdate = l
    }
};

function d1(t, e) {
    let n;
    return function (...r) {
        clearTimeout(n), n = setTimeout(() => {
            n = void 0, t.apply(this, r)
        }, e)
    }
}
var h1 = class {
    constructor(t, e, {
        autoResize: n = !0,
        debounce: r = 250
    } = {}) {
        I(this, "width", 0);
        I(this, "height", 0);
        I(this, "scrollHeight", 0);
        I(this, "scrollWidth", 0);
        I(this, "debouncedResize");
        I(this, "wrapperResizeObserver");
        I(this, "contentResizeObserver");
        I(this, "resize", () => {
            this.onWrapperResize(), this.onContentResize()
        });
        I(this, "onWrapperResize", () => {
            this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
        });
        I(this, "onContentResize", () => {
            this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
        });
        this.wrapper = t, this.content = e, n && (this.debouncedResize = d1(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
    }
    destroy() {
        var t, e;
        (t = this.wrapperResizeObserver) == null || t.disconnect(), (e = this.contentResizeObserver) == null || e.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
},
    ag = class {
        constructor() {
            I(this, "events", {})
        }
        emit(t, ...e) {
            var r;
            const n = this.events[t] || [];
            for (let i = 0, s = n.length; i < s; i++)(r = n[i]) == null || r.call(n, ...e)
        }
        on(t, e) {
            return this.events[t] ? this.events[t].push(e) : this.events[t] = [e], () => {
                var n;
                this.events[t] = (n = this.events[t]) == null ? void 0 : n.filter(r => e !== r)
            }
        }
        off(t, e) {
            var n;
            this.events[t] = (n = this.events[t]) == null ? void 0 : n.filter(r => e !== r)
        }
        destroy() {
            this.events = {}
        }
    };
const p1 = 100 / 6,
    Ar = {
        passive: !1
    };

function ap(t, e) {
    return t === 1 ? p1 : t === 2 ? e : 1
}
var m1 = class {
    constructor(t, e = {
        wheelMultiplier: 1,
        touchMultiplier: 1
    }) {
        I(this, "touchStart", {
            x: 0,
            y: 0
        });
        I(this, "lastDelta", {
            x: 0,
            y: 0
        });
        I(this, "window", {
            width: 0,
            height: 0
        });
        I(this, "emitter", new ag);
        I(this, "onTouchStart", t => {
            const {
                clientX: e,
                clientY: n
            } = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStart.x = e, this.touchStart.y = n, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: t
            })
        });
        I(this, "onTouchMove", t => {
            const {
                clientX: e,
                clientY: n
            } = t.targetTouches ? t.targetTouches[0] : t, r = -(e - this.touchStart.x) * this.options.touchMultiplier, i = -(n - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = e, this.touchStart.y = n, this.lastDelta = {
                x: r,
                y: i
            }, this.emitter.emit("scroll", {
                deltaX: r,
                deltaY: i,
                event: t
            })
        });
        I(this, "onTouchEnd", t => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t
            })
        });
        I(this, "onWheel", t => {
            let {
                deltaX: e,
                deltaY: n,
                deltaMode: r
            } = t;
            const i = ap(r, this.window.width),
                s = ap(r, this.window.height);
            e *= i, n *= s, e *= this.options.wheelMultiplier, n *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: e,
                deltaY: n,
                event: t
            })
        });
        I(this, "onWindowResize", () => {
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        });
        this.element = t, this.options = e, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, Ar), this.element.addEventListener("touchstart", this.onTouchStart, Ar), this.element.addEventListener("touchmove", this.onTouchMove, Ar), this.element.addEventListener("touchend", this.onTouchEnd, Ar)
    }
    on(t, e) {
        return this.emitter.on(t, e)
    }
    destroy() {
        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, Ar), this.element.removeEventListener("touchstart", this.onTouchStart, Ar), this.element.removeEventListener("touchmove", this.onTouchMove, Ar), this.element.removeEventListener("touchend", this.onTouchEnd, Ar)
    }
};
const up = t => Math.min(1, 1.001 - 2 ** (-10 * t));
var g1 = class {
    constructor({
        wrapper: t = window,
        content: e = document.documentElement,
        eventsTarget: n = t,
        smoothWheel: r = !0,
        syncTouch: i = !1,
        syncTouchLerp: s = .075,
        touchInertiaExponent: l = 1.7,
        duration: o,
        easing: a,
        lerp: u = .1,
        infinite: c = !1,
        orientation: h = "vertical",
        gestureOrientation: f = h === "horizontal" ? "both" : "vertical",
        touchMultiplier: d = 1,
        wheelMultiplier: g = 1,
        autoResize: p = !0,
        prevent: x,
        virtualScroll: _,
        overscroll: m = !0,
        autoRaf: v = !1,
        anchors: y = !1,
        autoToggle: k = !1,
        allowNestedScroll: E = !1,
        __experimental__naiveDimensions: T = !1,
        naiveDimensions: C = T,
        stopInertiaOnNavigate: O = !1
    } = {}) {
        I(this, "_isScrolling", !1);
        I(this, "_isStopped", !1);
        I(this, "_isLocked", !1);
        I(this, "_preventNextNativeScrollEvent", !1);
        I(this, "_resetVelocityTimeout", null);
        I(this, "_rafId", null);
        I(this, "isTouching");
        I(this, "time", 0);
        I(this, "userData", {});
        I(this, "lastVelocity", 0);
        I(this, "velocity", 0);
        I(this, "direction", 0);
        I(this, "options");
        I(this, "targetScroll");
        I(this, "animatedScroll");
        I(this, "animate", new f1);
        I(this, "emitter", new ag);
        I(this, "dimensions");
        I(this, "virtualScroll");
        I(this, "onScrollEnd", t => {
            t instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && t.stopPropagation()
        });
        I(this, "dispatchScrollendEvent", () => {
            this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                bubbles: this.options.wrapper === window,
                detail: {
                    lenisScrollEnd: !0
                }
            }))
        });
        I(this, "onTransitionEnd", t => {
            var e;
            (e = t.propertyName) != null && e.includes("overflow") && t.target === this.rootElement && this.checkOverflow()
        });
        I(this, "onClick", t => {
            const e = t.composedPath().filter(r => r instanceof HTMLAnchorElement && r.href).map(r => new URL(r.href)),
                n = new URL(window.location.href);
            if (this.options.anchors) {
                const r = e.find(i => n.host === i.host && n.pathname === i.pathname && i.hash);
                if (r) {
                    const i = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0,
                        s = `#${r.hash.split("#")[1]}`;
                    this.scrollTo(s, i);
                    return
                }
            }
            if (this.options.stopInertiaOnNavigate && e.some(r => n.host === r.host && n.pathname !== r.pathname)) {
                this.reset();
                return
            }
        });
        I(this, "onPointerDown", t => {
            t.button === 1 && this.reset()
        });
        I(this, "onVirtualScroll", t => {
            if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(t) === !1) return;
            const {
                deltaX: e,
                deltaY: n,
                event: r
            } = t;
            if (this.emitter.emit("virtual-scroll", {
                deltaX: e,
                deltaY: n,
                event: r
            }), r.ctrlKey || r.lenisStopPropagation) return;
            const i = r.type.includes("touch"),
                s = r.type.includes("wheel");
            this.isTouching = r.type === "touchstart" || r.type === "touchmove";
            const l = e === 0 && n === 0;
            if (this.options.syncTouch && i && r.type === "touchstart" && l && !this.isStopped && !this.isLocked) {
                this.reset();
                return
            }
            const o = this.options.gestureOrientation === "vertical" && n === 0 || this.options.gestureOrientation === "horizontal" && e === 0;
            if (l || o) return;
            let a = r.composedPath();
            a = a.slice(0, a.indexOf(this.rootElement));
            const u = this.options.prevent,
                c = Math.abs(e) >= Math.abs(n) ? "horizontal" : "vertical";
            if (a.find(g => {
                var p, x, _, m, v;
                return g instanceof HTMLElement && (typeof u == "function" && (u == null ? void 0 : u(g)) || ((p = g.hasAttribute) == null ? void 0 : p.call(g, "data-lenis-prevent")) || c === "vertical" && ((x = g.hasAttribute) == null ? void 0 : x.call(g, "data-lenis-prevent-vertical")) || c === "horizontal" && ((_ = g.hasAttribute) == null ? void 0 : _.call(g, "data-lenis-prevent-horizontal")) || i && ((m = g.hasAttribute) == null ? void 0 : m.call(g, "data-lenis-prevent-touch")) || s && ((v = g.hasAttribute) == null ? void 0 : v.call(g, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.hasNestedScroll(g, {
                    deltaX: e,
                    deltaY: n
                }))
            })) return;
            if (this.isStopped || this.isLocked) {
                r.cancelable && r.preventDefault();
                return
            }
            if (!(this.options.syncTouch && i || this.options.smoothWheel && s)) {
                this.isScrolling = "native", this.animate.stop(), r.lenisStopPropagation = !0;
                return
            }
            let h = n;
            this.options.gestureOrientation === "both" ? h = Math.abs(n) > Math.abs(e) ? n : e : this.options.gestureOrientation === "horizontal" && (h = e), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && n > 0 || this.animatedScroll === this.limit && n < 0)) && (r.lenisStopPropagation = !0), r.cancelable && r.preventDefault();
            const f = i && this.options.syncTouch,
                d = i && r.type === "touchend";
            d && (h = Math.sign(this.velocity) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + h, {
                programmatic: !1,
                ...f ? {
                    lerp: d ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }
            })
        });
        I(this, "onNativeScroll", () => {
            if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                this._preventNextNativeScrollEvent = !1;
                return
            }
            if (this.isScrolling === !1 || this.isScrolling === "native") {
                const t = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
                    this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                }, 400))
            }
        });
        I(this, "raf", t => {
            const e = t - (this.time || t);
            this.time = t, this.animate.advance(e * .001), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
        });
        window.lenisVersion = op, window.lenis || (window.lenis = {}), window.lenis.version = op, h === "horizontal" && (window.lenis.horizontal = !0), i === !0 && (window.lenis.touch = !0), (!t || t === document.documentElement) && (t = window), typeof o == "number" && typeof a != "function" ? a = up : typeof a == "function" && typeof o != "number" && (o = 1), this.options = {
            wrapper: t,
            content: e,
            eventsTarget: n,
            smoothWheel: r,
            syncTouch: i,
            syncTouchLerp: s,
            touchInertiaExponent: l,
            duration: o,
            easing: a,
            lerp: u,
            infinite: c,
            gestureOrientation: f,
            orientation: h,
            touchMultiplier: d,
            wheelMultiplier: g,
            autoResize: p,
            prevent: x,
            virtualScroll: _,
            overscroll: m,
            autoRaf: v,
            anchors: y,
            autoToggle: k,
            allowNestedScroll: E,
            naiveDimensions: C,
            stopInertiaOnNavigate: O
        }, this.dimensions = new h1(t, e, {
            autoResize: p
        }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0
        }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new m1(n, {
            touchMultiplier: d,
            wheelMultiplier: g
        }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
    }
    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
            capture: !0
        }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId)
    }
    on(t, e) {
        return this.emitter.on(t, e)
    }
    off(t, e) {
        return this.emitter.off(t, e)
    }
    get overflow() {
        const t = this.isHorizontal ? "overflow-x" : "overflow-y";
        return getComputedStyle(this.rootElement)[t]
    }
    checkOverflow() {
        ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart()
    }
    setScroll(t) {
        this.isHorizontal ? this.options.wrapper.scrollTo({
            left: t,
            behavior: "instant"
        }) : this.options.wrapper.scrollTo({
            top: t,
            behavior: "instant"
        })
    }
    resize() {
        this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
    }
    start() {
        if (this.isStopped) {
            if (this.options.autoToggle) {
                this.rootElement.style.removeProperty("overflow");
                return
            }
            this.internalStart()
        }
    }
    internalStart() {
        this.isStopped && (this.reset(), this.isStopped = !1, this.emit())
    }
    stop() {
        if (!this.isStopped) {
            if (this.options.autoToggle) {
                this.rootElement.style.setProperty("overflow", "clip");
                return
            }
            this.internalStop()
        }
    }
    internalStop() {
        this.isStopped || (this.reset(), this.isStopped = !0, this.emit())
    }
    scrollTo(t, {
        offset: e = 0,
        immediate: n = !1,
        lock: r = !1,
        programmatic: i = !0,
        lerp: s = i ? this.options.lerp : void 0,
        duration: l = i ? this.options.duration : void 0,
        easing: o = i ? this.options.easing : void 0,
        onStart: a,
        onComplete: u,
        force: c = !1,
        userData: h
    } = {}) {
        if ((this.isStopped || this.isLocked) && !c) return;
        let f = t,
            d = e;
        if (typeof f == "string" && ["top", "left", "start", "#"].includes(f)) f = 0;
        else if (typeof f == "string" && ["bottom", "right", "end"].includes(f)) f = this.limit;
        else {
            let g = null;
            if (typeof f == "string" ? (g = document.querySelector(f), g || (f === "#top" ? f = 0 : console.warn("Lenis: Target not found", f))) : f instanceof HTMLElement && (f != null && f.nodeType) && (g = f), g) {
                if (this.options.wrapper !== window) {
                    const y = this.rootElement.getBoundingClientRect();
                    d -= this.isHorizontal ? y.left : y.top
                }
                const p = g.getBoundingClientRect(),
                    x = getComputedStyle(g),
                    _ = this.isHorizontal ? Number.parseFloat(x.scrollMarginLeft) : Number.parseFloat(x.scrollMarginTop),
                    m = getComputedStyle(this.rootElement),
                    v = this.isHorizontal ? Number.parseFloat(m.scrollPaddingLeft) : Number.parseFloat(m.scrollPaddingTop);
                f = (this.isHorizontal ? p.left : p.top) + this.animatedScroll - (Number.isNaN(_) ? 0 : _) - (Number.isNaN(v) ? 0 : v)
            }
        }
        if (typeof f == "number") {
            if (f += d, f = Math.round(f), this.options.infinite) {
                if (i) {
                    this.targetScroll = this.animatedScroll = this.scroll;
                    const g = f - this.animatedScroll;
                    g > this.limit / 2 ? f -= this.limit : g < -this.limit / 2 && (f += this.limit)
                }
            } else f = og(0, f, this.limit);
            if (f === this.targetScroll) {
                a == null || a(this), u == null || u(this);
                return
            }
            if (this.userData = h ?? {}, n) {
                this.animatedScroll = this.targetScroll = f, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
                    this.dispatchScrollendEvent()
                });
                return
            }
            i || (this.targetScroll = f), typeof l == "number" && typeof o != "function" ? o = up : typeof o == "function" && typeof l != "number" && (l = 1), this.animate.fromTo(this.animatedScroll, f, {
                duration: l,
                easing: o,
                lerp: s,
                onStart: () => {
                    r && (this.isLocked = !0), this.isScrolling = "smooth", a == null || a(this)
                },
                onUpdate: (g, p) => {
                    this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = g - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = g, this.setScroll(this.scroll), i && (this.targetScroll = g), p || this.emit(), p && (this.reset(), this.emit(), u == null || u(this), this.userData = {}, requestAnimationFrame(() => {
                        this.dispatchScrollendEvent()
                    }), this.preventNextNativeScrollEvent())
                }
            })
        }
    }
    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1
        })
    }
    hasNestedScroll(t, {
        deltaX: e,
        deltaY: n
    }) {
        const r = Date.now();
        t._lenis || (t._lenis = {});
        const i = t._lenis;
        let s, l, o, a, u, c, h, f, d, g;
        if (r - (i.time ?? 0) > 2e3) {
            i.time = Date.now();
            const E = window.getComputedStyle(t);
            if (i.computedStyle = E, s = ["auto", "overlay", "scroll"].includes(E.overflowX), l = ["auto", "overlay", "scroll"].includes(E.overflowY), u = ["auto"].includes(E.overscrollBehaviorX), c = ["auto"].includes(E.overscrollBehaviorY), i.hasOverflowX = s, i.hasOverflowY = l, !(s || l)) return !1;
            h = t.scrollWidth, f = t.scrollHeight, d = t.clientWidth, g = t.clientHeight, o = h > d, a = f > g, i.isScrollableX = o, i.isScrollableY = a, i.scrollWidth = h, i.scrollHeight = f, i.clientWidth = d, i.clientHeight = g, i.hasOverscrollBehaviorX = u, i.hasOverscrollBehaviorY = c
        } else o = i.isScrollableX, a = i.isScrollableY, s = i.hasOverflowX, l = i.hasOverflowY, h = i.scrollWidth, f = i.scrollHeight, d = i.clientWidth, g = i.clientHeight, u = i.hasOverscrollBehaviorX, c = i.hasOverscrollBehaviorY;
        if (!(s && o || l && a)) return !1;
        const p = Math.abs(e) >= Math.abs(n) ? "horizontal" : "vertical";
        let x, _, m, v, y, k;
        if (p === "horizontal") x = Math.round(t.scrollLeft), _ = h - d, m = e, v = s, y = o, k = u;
        else if (p === "vertical") x = Math.round(t.scrollTop), _ = f - g, m = n, v = l, y = a, k = c;
        else return !1;
        return !k && (x >= _ || x <= 0) ? !0 : (m > 0 ? x < _ : x > 0) && v && y
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        const t = this.options.wrapper;
        return this.isHorizontal ? t.scrollX ?? t.scrollLeft : t.scrollY ?? t.scrollTop
    }
    get scroll() {
        return this.options.infinite ? c1(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
        return this._isScrolling
    }
    set isScrolling(t) {
        this._isScrolling !== t && (this._isScrolling = t, this.updateClassName())
    }
    get isStopped() {
        return this._isStopped
    }
    set isStopped(t) {
        this._isStopped !== t && (this._isStopped = t, this.updateClassName())
    }
    get isLocked() {
        return this._isLocked
    }
    set isLocked(t) {
        this._isLocked !== t && (this._isLocked = t, this.updateClassName())
    }
    get isSmooth() {
        return this.isScrolling === "smooth"
    }
    get className() {
        let t = "lenis";
        return this.options.autoToggle && (t += " lenis-autoToggle"), this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isScrolling === "smooth" && (t += " lenis-smooth"), t
    }
    updateClassName() {
        this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
    }
};

function dr(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function ug(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var hn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
},
    Vs = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Ed, ct, ke, Cn = 1e8,
    pe = 1 / Cn,
    of = Math.PI * 2,
    _1 = of / 4, v1 = 0, cg = Math.sqrt, y1 = Math.cos, w1 = Math.sin, it = function (e) { return typeof e == "string" }, Ae = function (e) { return typeof e == "function" }, Er = function (e) { return typeof e == "number" }, Cd = function (e) { return typeof e > "u" }, sr = function (e) { return typeof e == "object" }, bt = function (e) { return e !== !1 }, Pd = function () { return typeof window < "u" }, $o = function (e) { return Ae(e) || it(e) }, fg = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () { }, Tt = Array.isArray, x1 = /random\([^)]+\)/g, S1 = /,\s*/g, cp = /(?:-?\.?\d|\.)+/gi, dg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ys = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Zu = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, hg = /[+-]=-?[.\d]+/, k1 = /[^,'"\[\]\s]+/gi, T1 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ne, Kn, af, Nd, mn = {}, Qa = {}, pg, mg = function (e) {
        return (Qa = Hs(e, mn)) && qt
    }, Od = function (e, n) {
        return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
    }, ao = function (e, n) {
        return !n && console.warn(e)
    }, gg = function (e, n) {
        return e && (mn[e] = n) && Qa && (Qa[e] = n) || mn
    }, uo = function () {
        return 0
    }, E1 = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, ma = {
        suppressEvents: !0,
        kill: !1
    }, C1 = {
        suppressEvents: !0
    }, Rd = {}, ni = [], uf = {}, _g, sn = {}, Ju = {}, fp = 30, ga = [], Md = "", zd = function (e) {
        var n = e[0],
            r, i;
        if (sr(n) || Ae(n) || (e = [e]), !(r = (n._gsap || {}).harness)) {
            for (i = ga.length; i-- && !ga[i].targetTest(n););
            r = ga[i]
        }
        for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new Vg(e[i], r))) || e.splice(i, 1);
        return e
    }, Di = function (e) {
        return e._gsap || zd(Pn(e))[0]._gsap
    }, vg = function (e, n, r) {
        return (r = e[n]) && Ae(r) ? e[n]() : Cd(r) && e.getAttribute && e.getAttribute(n) || r
    }, Qt = function (e, n) {
        return (e = e.split(",")).forEach(n) || e
    }, Ue = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, Ce = function (e) {
        return Math.round(e * 1e7) / 1e7 || 0
    }, Ns = function (e, n) {
        var r = n.charAt(0),
            i = parseFloat(n.substr(2));
        return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    }, P1 = function (e, n) {
        for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r;);
        return i < r
    }, Ga = function () {
        var e = ni.length,
            n = ni.slice(0),
            r, i;
        for (uf = {}, ni.length = 0, r = 0; r < e; r++) i = n[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    }, Ld = function (e) {
        return !!(e._initted || e._startAt || e.add)
    }, yg = function (e, n, r, i) {
        ni.length && !ct && Ga(), e.render(n, r, !!(ct && n < 0 && Ld(e))), ni.length && !ct && Ga()
    }, wg = function (e) {
        var n = parseFloat(e);
        return (n || n === 0) && (e + "").match(k1).length < 2 ? n : it(e) ? e.trim() : e
    }, xg = function (e) {
        return e
    }, gn = function (e, n) {
        for (var r in n) r in e || (e[r] = n[r]);
        return e
    }, N1 = function (e) {
        return function (n, r) {
            for (var i in r) i in n || i === "duration" && e || i === "ease" || (n[i] = r[i])
        }
    }, Hs = function (e, n) {
        for (var r in n) e[r] = n[r];
        return e
    }, dp = function t(e, n) {
        for (var r in n) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = sr(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
        return e
    }, Ka = function (e, n) {
        var r = {},
            i;
        for (i in e) i in n || (r[i] = e[i]);
        return r
    }, zl = function (e) {
        var n = e.parent || Ne,
            r = e.keyframes ? N1(Tt(e.keyframes)) : gn;
        if (bt(e.inherit))
            for (; n;) r(e, n.vars.defaults), n = n.parent || n._dp;
        return e
    }, O1 = function (e, n) {
        for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r];);
        return r < 0
    }, Sg = function (e, n, r, i, s) {
        var l = e[i],
            o;
        if (s)
            for (o = n[s]; l && l[s] > o;) l = l._prev;
        return l ? (n._next = l._next, l._next = n) : (n._next = e[r], e[r] = n), n._next ? n._next._prev = n : e[i] = n, n._prev = l, n.parent = n._dp = e, n
    }, xu = function (e, n, r, i) {
        r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
        var s = n._prev,
            l = n._next;
        s ? s._next = l : e[r] === n && (e[r] = l), l ? l._prev = s : e[i] === n && (e[i] = s), n._next = n._prev = n.parent = null
    }, oi = function (e, n) {
        e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
    }, Ai = function (e, n) {
        if (e && (!n || n._end > e._dur || n._start < 0))
            for (var r = e; r;) r._dirty = 1, r = r.parent;
        return e
    }, R1 = function (e) {
        for (var n = e.parent; n && n.parent;) n._dirty = 1, n.totalDuration(), n = n.parent;
        return e
    }, cf = function (e, n, r, i) {
        return e._startAt && (ct ? e._startAt.revert(ma) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i))
    }, M1 = function t(e) {
        return !e || e._ts && t(e.parent)
    }, hp = function (e) {
        return e._repeat ? Ws(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }, Ws = function (e, n) {
        var r = Math.floor(e = Ce(e / n));
        return e && r === e ? r - 1 : r
    }, qa = function (e, n) {
        return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    }, Su = function (e) {
        return e._end = Ce(e._start + (e._tDur / Math.abs(e._ts || e._rts || pe) || 0))
    }, ku = function (e, n) {
        var r = e._dp;
        return r && r.smoothChildTiming && e._ts && (e._start = Ce(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)), Su(e), r._dirty || Ai(r, e)), e
    }, kg = function (e, n) {
        var r;
        if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = qa(e.rawTime(), n), (!n._dur || ko(0, n.totalDuration(), r) - n._tTime > pe) && n.render(r, !0)), Ai(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            e._zTime = -pe
        }
    }, Jn = function (e, n, r, i) {
        return n.parent && oi(n), n._start = Ce((Er(r) ? r : r || e !== Ne ? wn(e, r, n) : e._time) + n._delay), n._end = Ce(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), Sg(e, n, "_first", "_last", e._sort ? "_start" : 0), ff(n) || (e._recent = n), i || kg(e, n), e._ts < 0 && ku(e, e._tTime), e
    }, Tg = function (e, n) {
        return (mn.ScrollTrigger || Od("scrollTrigger", n)) && mn.ScrollTrigger.create(n, e)
    }, Eg = function (e, n, r, i, s) {
        if (Ad(e, n, s), !e._initted) return 1;
        if (!r && e._pt && !ct && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && _g !== on.frame) return ni.push(e), e._lazy = [s, i], 1
    }, z1 = function t(e) {
        var n = e.parent;
        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
    }, ff = function (e) {
        var n = e.data;
        return n === "isFromStart" || n === "isStart"
    }, L1 = function (e, n, r, i) {
        var s = e.ratio,
            l = n < 0 || !n && (!e._start && z1(e) && !(!e._initted && ff(e)) || (e._ts < 0 || e._dp._ts < 0) && !ff(e)) ? 0 : 1,
            o = e._rDelay,
            a = 0,
            u, c, h;
        if (o && e._repeat && (a = ko(0, e._tDur, n), c = Ws(a, o), e._yoyo && c & 1 && (l = 1 - l), c !== Ws(e._tTime, o) && (s = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== s || ct || i || e._zTime === pe || !n && e._zTime) {
            if (!e._initted && Eg(e, n, i, r, a)) return;
            for (h = e._zTime, e._zTime = n || (r ? pe : 0), r || (r = n && !h), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = a, u = e._pt; u;) u.r(l, u.d), u = u._next;
            n < 0 && cf(e, n, r, !0), e._onUpdate && !r && cn(e, "onUpdate"), a && e._repeat && !r && e.parent && cn(e, "onRepeat"), (n >= e._tDur || n < 0) && e.ratio === l && (l && oi(e, 1), !r && !ct && (cn(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = n)
    }, D1 = function (e, n, r) {
        var i;
        if (r > n)
            for (i = e._first; i && i._start <= r;) {
                if (i.data === "isPause" && i._start > n) return i;
                i = i._next
            } else
            for (i = e._last; i && i._start >= r;) {
                if (i.data === "isPause" && i._start < n) return i;
                i = i._prev
            }
    }, $s = function (e, n, r, i) {
        var s = e._repeat,
            l = Ce(n) || 0,
            o = e._tTime / e._tDur;
        return o && !i && (e._time *= l / e._dur), e._dur = l, e._tDur = s ? s < 0 ? 1e10 : Ce(l * (s + 1) + e._rDelay * s) : l, o > 0 && !i && ku(e, e._tTime = e._tDur * o), e.parent && Su(e), r || Ai(e.parent, e), e
    }, pp = function (e) {
        return e instanceof At ? Ai(e) : $s(e, e._dur)
    }, A1 = {
        _start: 0,
        endTime: uo,
        totalDuration: uo
    }, wn = function t(e, n, r) {
        var i = e.labels,
            s = e._recent || A1,
            l = e.duration() >= Cn ? s.endTime(!1) : e._dur,
            o, a, u;
        return it(n) && (isNaN(n) || n in i) ? (a = n.charAt(0), u = n.substr(-1) === "%", o = n.indexOf("="), a === "<" || a === ">" ? (o >= 0 && (n = n.replace(/=/, "")), (a === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (o < 0 ? s : r).totalDuration() / 100 : 1)) : o < 0 ? (n in i || (i[n] = l), i[n]) : (a = parseFloat(n.charAt(o - 1) + n.substr(o + 1)), u && r && (a = a / 100 * (Tt(r) ? r[0] : r).totalDuration()), o > 1 ? t(e, n.substr(0, o - 1), r) + a : l + a)) : n == null ? l : +n
    }, Ll = function (e, n, r) {
        var i = Er(n[1]),
            s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            l = n[s],
            o, a;
        if (i && (l.duration = n[1]), l.parent = r, e) {
            for (o = l, a = r; a && !("immediateRender" in o);) o = a.vars.defaults || {}, a = bt(a.vars.inherit) && a.parent;
            l.immediateRender = bt(o.immediateRender), e < 2 ? l.runBackwards = 1 : l.startAt = n[s - 1]
        }
        return new Ye(n[0], l, n[s + 1])
    }, pi = function (e, n) {
        return e || e === 0 ? n(e) : n
    }, ko = function (e, n, r) {
        return r < e ? e : r > n ? n : r
    }, St = function (e, n) {
        return !it(e) || !(n = T1.exec(e)) ? "" : n[1]
    }, j1 = function (e, n, r) {
        return pi(r, function (i) {
            return ko(e, n, i)
        })
    }, df = [].slice, Cg = function (e, n) {
        return e && sr(e) && "length" in e && (!n && !e.length || e.length - 1 in e && sr(e[0])) && !e.nodeType && e !== Kn
    }, I1 = function (e, n, r) {
        return r === void 0 && (r = []), e.forEach(function (i) {
            var s;
            return it(i) && !n || Cg(i, 1) ? (s = r).push.apply(s, Pn(i)) : r.push(i)
        }) || r
    }, Pn = function (e, n, r) {
        return ke && !n && ke.selector ? ke.selector(e) : it(e) && !r && (af || !Ys()) ? df.call((n || Nd).querySelectorAll(e), 0) : Tt(e) ? I1(e, r) : Cg(e) ? df.call(e, 0) : e ? [e] : []
    }, hf = function (e) {
        return e = Pn(e)[0] || ao("Invalid scope") || {},
            function (n) {
                var r = e.current || e.nativeElement || e;
                return Pn(n, r.querySelectorAll ? r : r === e ? ao("Invalid scope") || Nd.createElement("div") : e)
            }
    }, Pg = function (e) {
        return e.sort(function () {
            return .5 - Math.random()
        })
    }, Ng = function (e) {
        if (Ae(e)) return e;
        var n = sr(e) ? e : {
            each: e
        },
            r = ji(n.ease),
            i = n.from || 0,
            s = parseFloat(n.base) || 0,
            l = {},
            o = i > 0 && i < 1,
            a = isNaN(i) || o,
            u = n.axis,
            c = i,
            h = i;
        return it(i) ? c = h = {
            center: .5,
            edges: .5,
            end: 1
        }[i] || 0 : !o && a && (c = i[0], h = i[1]),
            function (f, d, g) {
                var p = (g || n).length,
                    x = l[p],
                    _, m, v, y, k, E, T, C, O;
                if (!x) {
                    if (O = n.grid === "auto" ? 0 : (n.grid || [1, Cn])[1], !O) {
                        for (T = -Cn; T < (T = g[O++].getBoundingClientRect().left) && O < p;);
                        O < p && O--
                    }
                    for (x = l[p] = [], _ = a ? Math.min(O, p) * c - .5 : i % O, m = O === Cn ? 0 : a ? p * h / O - .5 : i / O | 0, T = 0, C = Cn, E = 0; E < p; E++) v = E % O - _, y = m - (E / O | 0), x[E] = k = u ? Math.abs(u === "y" ? y : v) : cg(v * v + y * y), k > T && (T = k), k < C && (C = k);
                    i === "random" && Pg(x), x.max = T - C, x.min = C, x.v = p = (parseFloat(n.amount) || parseFloat(n.each) * (O > p ? p - 1 : u ? u === "y" ? p / O : O : Math.max(O, p / O)) || 0) * (i === "edges" ? -1 : 1), x.b = p < 0 ? s - p : s, x.u = St(n.amount || n.each) || 0, r = r && p < 0 ? Fg(r) : r
                }
                return p = (x[f] - x.min) / x.max || 0, Ce(x.b + (r ? r(p) : p) * x.v) + x.u
            }
    }, pf = function (e) {
        var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (r) {
            var i = Ce(Math.round(parseFloat(r) / e) * e * n);
            return (i - i % 1) / n + (Er(r) ? 0 : St(r))
        }
    }, Og = function (e, n) {
        var r = Tt(e),
            i, s;
        return !r && sr(e) && (i = r = e.radius || Cn, e.values ? (e = Pn(e.values), (s = !Er(e[0])) && (i *= i)) : e = pf(e.increment)), pi(n, r ? Ae(e) ? function (l) {
            return s = e(l), Math.abs(s - l) <= i ? s : l
        } : function (l) {
            for (var o = parseFloat(s ? l.x : l), a = parseFloat(s ? l.y : 0), u = Cn, c = 0, h = e.length, f, d; h--;) s ? (f = e[h].x - o, d = e[h].y - a, f = f * f + d * d) : f = Math.abs(e[h] - o), f < u && (u = f, c = h);
            return c = !i || u <= i ? e[c] : l, s || c === l || Er(l) ? c : c + St(l)
        } : pf(e))
    }, Rg = function (e, n, r, i) {
        return pi(Tt(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
            return Tt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * i) / i
        })
    }, F1 = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        return function (i) {
            return n.reduce(function (s, l) {
                return l(s)
            }, i)
        }
    }, B1 = function (e, n) {
        return function (r) {
            return e(parseFloat(r)) + (n || St(r))
        }
    }, U1 = function (e, n, r) {
        return zg(e, n, 0, 1, r)
    }, Mg = function (e, n, r) {
        return pi(r, function (i) {
            return e[~~n(i)]
        })
    }, V1 = function t(e, n, r) {
        var i = n - e;
        return Tt(e) ? Mg(e, t(0, e.length), n) : pi(r, function (s) {
            return (i + (s - e) % i) % i + e
        })
    }, H1 = function t(e, n, r) {
        var i = n - e,
            s = i * 2;
        return Tt(e) ? Mg(e, t(0, e.length - 1), n) : pi(r, function (l) {
            return l = (s + (l - e) % s) % s || 0, e + (l > i ? s - l : l)
        })
    }, co = function (e) {
        return e.replace(x1, function (n) {
            var r = n.indexOf("[") + 1,
                i = n.substring(r || 7, r ? n.indexOf("]") : n.length - 1).split(S1);
            return Rg(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)
        })
    }, zg = function (e, n, r, i, s) {
        var l = n - e,
            o = i - r;
        return pi(s, function (a) {
            return r + ((a - e) / l * o || 0)
        })
    }, W1 = function t(e, n, r, i) {
        var s = isNaN(e + n) ? 0 : function (d) {
            return (1 - d) * e + d * n
        };
        if (!s) {
            var l = it(e),
                o = {},
                a, u, c, h, f;
            if (r === !0 && (i = 1) && (r = null), l) e = {
                p: e
            }, n = {
                p: n
            };
            else if (Tt(e) && !Tt(n)) {
                for (c = [], h = e.length, f = h - 2, u = 1; u < h; u++) c.push(t(e[u - 1], e[u]));
                h--, s = function (g) {
                    g *= h;
                    var p = Math.min(f, ~~g);
                    return c[p](g - p)
                }, r = n
            } else i || (e = Hs(Tt(e) ? [] : {}, e));
            if (!c) {
                for (a in n) Dd.call(o, e, a, "get", n[a]);
                s = function (g) {
                    return Fd(g, o) || (l ? e.p : e)
                }
            }
        }
        return pi(r, s)
    }, mp = function (e, n, r) {
        var i = e.labels,
            s = Cn,
            l, o, a;
        for (l in i) o = i[l] - n, o < 0 == !!r && o && s > (o = Math.abs(o)) && (a = l, s = o);
        return a
    }, cn = function (e, n, r) {
        var i = e.vars,
            s = i[n],
            l = ke,
            o = e._ctx,
            a, u, c;
        if (s) return a = i[n + "Params"], u = i.callbackScope || e, r && ni.length && Ga(), o && (ke = o), c = a ? s.apply(u, a) : s.call(u), ke = l, c
    }, gl = function (e) {
        return oi(e), e.scrollTrigger && e.scrollTrigger.kill(!!ct), e.progress() < 1 && cn(e, "onInterrupt"), e
    }, ws, Lg = [], Dg = function (e) {
        if (e)
            if (e = !e.name && e.default || e, Pd() || e.headless) {
                var n = e.name,
                    r = Ae(e),
                    i = n && !r && e.init ? function () {
                        this._props = []
                    } : e,
                    s = {
                        init: uo,
                        render: Fd,
                        add: Dd,
                        kill: sw,
                        modifier: iw,
                        rawVars: 0
                    },
                    l = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Id,
                        aliases: {},
                        register: 0
                    };
                if (Ys(), e !== i) {
                    if (sn[n]) return;
                    gn(i, gn(Ka(e, s), l)), Hs(i.prototype, Hs(s, Ka(e, l))), sn[i.prop = n] = i, e.targetTest && (ga.push(i), Rd[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
                }
                gg(n, i), e.register && e.register(qt, i, Gt)
            } else Lg.push(e)
    }, he = 255, _l = {
        aqua: [0, he, he],
        lime: [0, he, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, he],
        navy: [0, 0, 128],
        white: [he, he, he],
        olive: [128, 128, 0],
        yellow: [he, he, 0],
        orange: [he, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [he, 0, 0],
        pink: [he, 192, 203],
        cyan: [0, he, he],
        transparent: [he, he, he, 0]
    }, ec = function (e, n, r) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * he + .5 | 0
    }, Ag = function (e, n, r) {
        var i = e ? Er(e) ? [e >> 16, e >> 8 & he, e & he] : 0 : _l.black,
            s, l, o, a, u, c, h, f, d, g;
        if (!i) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), _l[e]) i = _l[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (s = e.charAt(1), l = e.charAt(2), o = e.charAt(3), e = "#" + s + s + l + l + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & he, i & he, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & he, e & he]
            } else if (e.substr(0, 3) === "hsl") {
                if (i = g = e.match(cp), !n) a = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, l = c <= .5 ? c * (u + 1) : c + u - c * u, s = c * 2 - l, i.length > 3 && (i[3] *= 1), i[0] = ec(a + 1 / 3, s, l), i[1] = ec(a, s, l), i[2] = ec(a - 1 / 3, s, l);
                else if (~e.indexOf("=")) return i = e.match(dg), r && i.length < 4 && (i[3] = 1), i
            } else i = e.match(cp) || _l.transparent;
            i = i.map(Number)
        }
        return n && !g && (s = i[0] / he, l = i[1] / he, o = i[2] / he, h = Math.max(s, l, o), f = Math.min(s, l, o), c = (h + f) / 2, h === f ? a = u = 0 : (d = h - f, u = c > .5 ? d / (2 - h - f) : d / (h + f), a = h === s ? (l - o) / d + (l < o ? 6 : 0) : h === l ? (o - s) / d + 2 : (s - l) / d + 4, a *= 60), i[0] = ~~(a + .5), i[1] = ~~(u * 100 + .5), i[2] = ~~(c * 100 + .5)), r && i.length < 4 && (i[3] = 1), i
    }, jg = function (e) {
        var n = [],
            r = [],
            i = -1;
        return e.split(ri).forEach(function (s) {
            var l = s.match(ys) || [];
            n.push.apply(n, l), r.push(i += l.length + 1)
        }), n.c = r, n
    }, gp = function (e, n, r) {
        var i = "",
            s = (e + i).match(ri),
            l = n ? "hsla(" : "rgba(",
            o = 0,
            a, u, c, h;
        if (!s) return e;
        if (s = s.map(function (f) {
            return (f = Ag(f, n, 1)) && l + (n ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")"
        }), r && (c = jg(e), a = r.c, a.join(i) !== c.c.join(i)))
            for (u = e.replace(ri, "1").split(ys), h = u.length - 1; o < h; o++) i += u[o] + (~a.indexOf(o) ? s.shift() || l + "0,0,0,0)" : (c.length ? c : s.length ? s : r).shift());
        if (!u)
            for (u = e.split(ri), h = u.length - 1; o < h; o++) i += u[o] + s[o];
        return i + u[h]
    }, ri = function () {
        var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in _l) t += "|" + e + "\\b";
        return new RegExp(t + ")", "gi")
    }(), $1 = /hsl[a]?\(/, Ig = function (e) {
        var n = e.join(" "),
            r;
        if (ri.lastIndex = 0, ri.test(n)) return r = $1.test(n), e[1] = gp(e[1], r), e[0] = gp(e[0], r, jg(e[1])), !0
    }, fo, on = function () {
        var t = Date.now,
            e = 500,
            n = 33,
            r = t(),
            i = r,
            s = 1e3 / 240,
            l = s,
            o = [],
            a, u, c, h, f, d, g = function p(x) {
                var _ = t() - i,
                    m = x === !0,
                    v, y, k, E;
                if ((_ > e || _ < 0) && (r += _ - n), i += _, k = i - r, v = k - l, (v > 0 || m) && (E = ++h.frame, f = k - h.time * 1e3, h.time = k = k / 1e3, l += v + (v >= s ? 4 : s - v), y = 1), m || (a = u(p)), y)
                    for (d = 0; d < o.length; d++) o[d](k, f, E, x)
            };
        return h = {
            time: 0,
            frame: 0,
            tick: function () {
                g(!0)
            },
            deltaRatio: function (x) {
                return f / (1e3 / (x || 60))
            },
            wake: function () {
                pg && (!af && Pd() && (Kn = af = window, Nd = Kn.document || {}, mn.gsap = qt, (Kn.gsapVersions || (Kn.gsapVersions = [])).push(qt.version), mg(Qa || Kn.GreenSockGlobals || !Kn.gsap && Kn || {}), Lg.forEach(Dg)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, a && h.sleep(), u = c || function (x) {
                    return setTimeout(x, l - h.time * 1e3 + 1 | 0)
                }, fo = 1, g(2))
            },
            sleep: function () {
                (c ? cancelAnimationFrame : clearTimeout)(a), fo = 0, u = uo
            },
            lagSmoothing: function (x, _) {
                e = x || 1 / 0, n = Math.min(_ || 33, e)
            },
            fps: function (x) {
                s = 1e3 / (x || 240), l = h.time * 1e3 + s
            },
            add: function (x, _, m) {
                var v = _ ? function (y, k, E, T) {
                    x(y, k, E, T), h.remove(v)
                } : x;
                return h.remove(x), o[m ? "unshift" : "push"](v), Ys(), v
            },
            remove: function (x, _) {
                ~(_ = o.indexOf(x)) && o.splice(_, 1) && d >= _ && d--
            },
            _listeners: o
        }, h
    }(), Ys = function () {
        return !fo && on.wake()
    }, ie = {}, Y1 = /^[\d.\-M][\d.\-,\s]/, X1 = /["']/g, b1 = function (e) {
        for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], s = 1, l = r.length, o, a, u; s < l; s++) a = r[s], o = s !== l - 1 ? a.lastIndexOf(",") : a.length, u = a.substr(0, o), n[i] = isNaN(u) ? u.replace(X1, "").trim() : +u, i = a.substr(o + 1).trim();
        return n
    }, Q1 = function (e) {
        var n = e.indexOf("(") + 1,
            r = e.indexOf(")"),
            i = e.indexOf("(", n);
        return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)
    }, G1 = function (e) {
        var n = (e + "").split("("),
            r = ie[n[0]];
        return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [b1(n[1])] : Q1(e).split(",").map(wg)) : ie._CE && Y1.test(e) ? ie._CE("", e) : r
    }, Fg = function (e) {
        return function (n) {
            return 1 - e(1 - n)
        }
    }, Bg = function t(e, n) {
        for (var r = e._first, i; r;) r instanceof At ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next
    }, ji = function (e, n) {
        return e && (Ae(e) ? e : ie[e] || G1(e)) || n
    }, qi = function (e, n, r, i) {
        r === void 0 && (r = function (a) {
            return 1 - n(1 - a)
        }), i === void 0 && (i = function (a) {
            return a < .5 ? n(a * 2) / 2 : 1 - n((1 - a) * 2) / 2
        });
        var s = {
            easeIn: n,
            easeOut: r,
            easeInOut: i
        },
            l;
        return Qt(e, function (o) {
            ie[o] = mn[o] = s, ie[l = o.toLowerCase()] = r;
            for (var a in s) ie[l + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = ie[o + "." + a] = s[a]
        }), s
    }, Ug = function (e) {
        return function (n) {
            return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
        }
    }, tc = function t(e, n, r) {
        var i = n >= 1 ? n : 1,
            s = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
            l = s / of * (Math.asin(1 / i) || 0),
            o = function (c) {
                return c === 1 ? 1 : i * Math.pow(2, -10 * c) * w1((c - l) * s) + 1
            },
            a = e === "out" ? o : e === "in" ? function (u) {
                return 1 - o(1 - u)
            } : Ug(o);
        return s = of / s, a.config = function (u, c) { return t(e, u, c) }, a
    }, nc = function t(e, n) { n === void 0 && (n = 1.70158); var r = function (l) { return l ? --l * l * ((n + 1) * l + n) + 1 : 0 }, i = e === "out" ? r : e === "in" ? function (s) { return 1 - r(1 - s) } : Ug(r); return i.config = function (s) { return t(e, s) }, i }; Qt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var n = e < 5 ? e + 1 : e; qi(t + ",Power" + (n - 1), e ? function (r) { return Math.pow(r, n) } : function (r) { return r }, function (r) { return 1 - Math.pow(1 - r, n) }, function (r) {
            return r < .5 ? Math.pow(r * 2, n) /
                2 : 1 - Math.pow((1 - r) * 2, n) / 2
        })
    });
ie.Linear.easeNone = ie.none = ie.Linear.easeIn;
qi("Elastic", tc("in"), tc("out"), tc());
(function (t, e) {
    var n = 1 / e,
        r = 2 * n,
        i = 2.5 * n,
        s = function (o) {
            return o < n ? t * o * o : o < r ? t * Math.pow(o - 1.5 / e, 2) + .75 : o < i ? t * (o -= 2.25 / e) * o + .9375 : t * Math.pow(o - 2.625 / e, 2) + .984375
        };
    qi("Bounce", function (l) {
        return 1 - s(1 - l)
    }, s)
})(7.5625, 2.75);
qi("Expo", function (t) {
    return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
});
qi("Circ", function (t) {
    return -(cg(1 - t * t) - 1)
});
qi("Sine", function (t) {
    return t === 1 ? 1 : -y1(t * _1) + 1
});
qi("Back", nc("in"), nc("out"), nc());
ie.SteppedEase = ie.steps = mn.SteppedEase = {
    config: function (e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e,
            i = e + (n ? 0 : 1),
            s = n ? 1 : 0,
            l = 1 - pe;
        return function (o) {
            return ((i * ko(0, l, o) | 0) + s) * r
        }
    }
};
Vs.ease = ie["quad.out"];
Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return Md += t + "," + t + "Params,"
});
var Vg = function (e, n) {
    this.id = v1++, e._gsap = this, this.target = e, this.harness = n, this.get = n ? n.get : vg, this.set = n ? n.getSetter : Id
},
    ho = function () {
        function t(n) {
            this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, $s(this, +n.duration, 1, 1), this.data = n.data, ke && (this._ctx = ke, ke.data.push(this)), fo || on.wake()
        }
        var e = t.prototype;
        return e.delay = function (r) {
            return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
        }, e.duration = function (r) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
        }, e.totalDuration = function (r) {
            return arguments.length ? (this._dirty = 0, $s(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function (r, i) {
            if (Ys(), !arguments.length) return this._tTime;
            var s = this._dp;
            if (s && s.smoothChildTiming && this._ts) {
                for (ku(this, r), !s._dp || s.parent || kg(s, this); s && s.parent;) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Jn(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === pe || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), yg(this, r, i)), this
        }, e.time = function (r, i) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + hp(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
        }, e.totalProgress = function (r, i) {
            return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
        }, e.progress = function (r, i) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + hp(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
        }, e.iteration = function (r, i) {
            var s = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? Ws(this._tTime, s) + 1 : 1
        }, e.timeScale = function (r, i) {
            if (!arguments.length) return this._rts === -pe ? 0 : this._rts;
            if (this._rts === r) return this;
            var s = this.parent && this._ts ? qa(this.parent._time, this) : this._tTime;
            return this._rts = +r || 0, this._ts = this._ps || r === -pe ? 0 : this._rts, this.totalTime(ko(-Math.abs(this._delay), this.totalDuration(), s), i !== !1), Su(this), R1(this)
        }, e.paused = function (r) {
            return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ys(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== pe && (this._tTime -= pe)))), this) : this._ps
        }, e.startTime = function (r) {
            if (arguments.length) {
                this._start = Ce(r);
                var i = this.parent || this._dp;
                return i && (i._sort || !this.parent) && Jn(i, this, this._start - this._delay), this
            }
            return this._start
        }, e.endTime = function (r) {
            return this._start + (bt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function (r) {
            var i = this.parent || this._dp;
            return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? qa(i.rawTime(r), this) : this._tTime : this._tTime
        }, e.revert = function (r) {
            r === void 0 && (r = C1);
            var i = ct;
            return ct = r, Ld(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), ct = i, this
        }, e.globalTime = function (r) {
            for (var i = this, s = arguments.length ? r : i.rawTime(); i;) s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
            return !this.parent && this._sat ? this._sat.globalTime(r) : s
        }, e.repeat = function (r) {
            return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, pp(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function (r) {
            if (arguments.length) {
                var i = this._time;
                return this._rDelay = r, pp(this), i ? this.time(i) : this
            }
            return this._rDelay
        }, e.yoyo = function (r) {
            return arguments.length ? (this._yoyo = r, this) : this._yoyo
        }, e.seek = function (r, i) {
            return this.totalTime(wn(this, r), bt(i))
        }, e.restart = function (r, i) {
            return this.play().totalTime(r ? -this._delay : 0, bt(i)), this._dur || (this._zTime = -pe), this
        }, e.play = function (r, i) {
            return r != null && this.seek(r, i), this.reversed(!1).paused(!1)
        }, e.reverse = function (r, i) {
            return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1)
        }, e.pause = function (r, i) {
            return r != null && this.seek(r, i), this.paused(!0)
        }, e.resume = function () {
            return this.paused(!1)
        }, e.reversed = function (r) {
            return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -pe : 0)), this) : this._rts < 0
        }, e.invalidate = function () {
            return this._initted = this._act = 0, this._zTime = -pe, this
        }, e.isActive = function () {
            var r = this.parent || this._dp,
                i = this._start,
                s;
            return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - pe)
        }, e.eventCallback = function (r, i, s) {
            var l = this.vars;
            return arguments.length > 1 ? (i ? (l[r] = i, s && (l[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = i)) : delete l[r], this) : l[r]
        }, e.then = function (r) {
            var i = this,
                s = i._prom;
            return new Promise(function (l) {
                var o = Ae(r) ? r : xg,
                    a = function () {
                        var c = i.then;
                        i.then = null, s && s(), Ae(o) && (o = o(i)) && (o.then || o === i) && (i.then = c), l(o), i.then = c
                    };
                i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
            })
        }, e.kill = function () {
            gl(this)
        }, t
    }();
gn(ho.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -pe,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var At = function (t) {
    ug(e, t);

    function e(r, i) {
        var s;
        return r === void 0 && (r = {}), s = t.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = bt(r.sortChildren), Ne && Jn(r.parent || Ne, dr(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && Tg(dr(s), r.scrollTrigger), s
    }
    var n = e.prototype;
    return n.to = function (i, s, l) {
        return Ll(0, arguments, this), this
    }, n.from = function (i, s, l) {
        return Ll(1, arguments, this), this
    }, n.fromTo = function (i, s, l, o) {
        return Ll(2, arguments, this), this
    }, n.set = function (i, s, l) {
        return s.duration = 0, s.parent = this, zl(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new Ye(i, s, wn(this, l), 1), this
    }, n.call = function (i, s, l) {
        return Jn(this, Ye.delayedCall(0, i, s), l)
    }, n.staggerTo = function (i, s, l, o, a, u, c) {
        return l.duration = s, l.stagger = l.stagger || o, l.onComplete = u, l.onCompleteParams = c, l.parent = this, new Ye(i, l, wn(this, a)), this
    }, n.staggerFrom = function (i, s, l, o, a, u, c) {
        return l.runBackwards = 1, zl(l).immediateRender = bt(l.immediateRender), this.staggerTo(i, s, l, o, a, u, c)
    }, n.staggerFromTo = function (i, s, l, o, a, u, c, h) {
        return o.startAt = l, zl(o).immediateRender = bt(o.immediateRender), this.staggerTo(i, s, o, a, u, c, h)
    }, n.render = function (i, s, l) {
        var o = this._time,
            a = this._dirty ? this.totalDuration() : this._tDur,
            u = this._dur,
            c = i <= 0 ? 0 : Ce(i),
            h = this._zTime < 0 != i < 0 && (this._initted || !u),
            f, d, g, p, x, _, m, v, y, k, E, T;
        if (this !== Ne && c > a && i >= 0 && (c = a), c !== this._tTime || l || h) {
            if (o !== this._time && u && (c += this._time - o, i += this._time - o), f = c, y = this._start, v = this._ts, _ = !v, h && (u || (o = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
                if (E = this._yoyo, x = u + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(x * 100 + i, s, l);
                if (f = Ce(c % x), c === a ? (p = this._repeat, f = u) : (k = Ce(c / x), p = ~~k, p && p === k && (f = u, p--), f > u && (f = u)), k = Ws(this._tTime, x), !o && this._tTime && k !== p && this._tTime - k * x - this._dur <= 0 && (k = p), E && p & 1 && (f = u - f, T = 1), p !== k && !this._lock) {
                    var C = E && k & 1,
                        O = C === (E && p & 1);
                    if (p < k && (C = !C), o = C ? 0 : c % u ? u : c, this._lock = 1, this.render(o || (T ? 0 : Ce(p * x)), s, !u)._lock = 0, this._tTime = c, !s && this.parent && cn(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1, k = p), o && o !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (u = this._dur, a = this._tDur, O && (this._lock = 2, o = C ? u : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !_) return this;
                    Bg(this, T)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (m = D1(this, Ce(o), Ce(f)), m && (c -= f - (f = m._start))), this._tTime = c, this._time = f, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && c && u && !s && !k && (cn(this, "onStart"), this._tTime !== c)) return this;
            if (f >= o && i >= 0)
                for (d = this._first; d;) {
                    if (g = d._next, (d._act || f >= d._start) && d._ts && m !== d) {
                        if (d.parent !== this) return this.render(i, s, l);
                        if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, s, l), f !== this._time || !this._ts && !_) {
                            m = 0, g && (c += this._zTime = -pe);
                            break
                        }
                    }
                    d = g
                } else {
                d = this._last;
                for (var N = i < 0 ? i : f; d;) {
                    if (g = d._prev, (d._act || N <= d._end) && d._ts && m !== d) {
                        if (d.parent !== this) return this.render(i, s, l);
                        if (d.render(d._ts > 0 ? (N - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (N - d._start) * d._ts, s, l || ct && Ld(d)), f !== this._time || !this._ts && !_) {
                            m = 0, g && (c += this._zTime = N ? -pe : pe);
                            break
                        }
                    }
                    d = g
                }
            }
            if (m && !s && (this.pause(), m.render(f >= o ? 0 : -pe)._zTime = f >= o ? 1 : -1, this._ts)) return this._start = y, Su(this), this.render(i, s, l);
            this._onUpdate && !s && cn(this, "onUpdate", !0), (c === a && this._tTime >= this.totalDuration() || !c && o) && (y === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === a && this._ts > 0 || !c && this._ts < 0) && oi(this, 1), !s && !(i < 0 && !o) && (c || o || !a) && (cn(this, c === a && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < a && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, n.add = function (i, s) {
        var l = this;
        if (Er(s) || (s = wn(this, s, i)), !(i instanceof ho)) {
            if (Tt(i)) return i.forEach(function (o) {
                return l.add(o, s)
            }), this;
            if (it(i)) return this.addLabel(i, s);
            if (Ae(i)) i = Ye.delayedCall(0, i);
            else return this
        }
        return this !== i ? Jn(this, i, s) : this
    }, n.getChildren = function (i, s, l, o) {
        i === void 0 && (i = !0), s === void 0 && (s = !0), l === void 0 && (l = !0), o === void 0 && (o = -Cn);
        for (var a = [], u = this._first; u;) u._start >= o && (u instanceof Ye ? s && a.push(u) : (l && a.push(u), i && a.push.apply(a, u.getChildren(!0, s, l)))), u = u._next;
        return a
    }, n.getById = function (i) {
        for (var s = this.getChildren(1, 1, 1), l = s.length; l--;)
            if (s[l].vars.id === i) return s[l]
    }, n.remove = function (i) {
        return it(i) ? this.removeLabel(i) : Ae(i) ? this.killTweensOf(i) : (i.parent === this && xu(this, i), i === this._recent && (this._recent = this._last), Ai(this))
    }, n.totalTime = function (i, s) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Ce(on.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), t.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime
    }, n.addLabel = function (i, s) {
        return this.labels[i] = wn(this, s), this
    }, n.removeLabel = function (i) {
        return delete this.labels[i], this
    }, n.addPause = function (i, s, l) {
        var o = Ye.delayedCall(0, s || uo, l);
        return o.data = "isPause", this._hasPause = 1, Jn(this, o, wn(this, i))
    }, n.removePause = function (i) {
        var s = this._first;
        for (i = wn(this, i); s;) s._start === i && s.data === "isPause" && oi(s), s = s._next
    }, n.killTweensOf = function (i, s, l) {
        for (var o = this.getTweensOf(i, l), a = o.length; a--;) Wr !== o[a] && o[a].kill(i, s);
        return this
    }, n.getTweensOf = function (i, s) {
        for (var l = [], o = Pn(i), a = this._first, u = Er(s), c; a;) a instanceof Ye ? P1(a._targets, o) && (u ? (!Wr || a._initted && a._ts) && a.globalTime(0) <= s && a.globalTime(a.totalDuration()) > s : !s || a.isActive()) && l.push(a) : (c = a.getTweensOf(o, s)).length && l.push.apply(l, c), a = a._next;
        return l
    }, n.tweenTo = function (i, s) {
        s = s || {};
        var l = this,
            o = wn(l, i),
            a = s,
            u = a.startAt,
            c = a.onStart,
            h = a.onStartParams,
            f = a.immediateRender,
            d, g = Ye.to(l, gn({
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: s.duration || Math.abs((o - (u && "time" in u ? u.time : l._time)) / l.timeScale()) || pe,
                onStart: function () {
                    if (l.pause(), !d) {
                        var x = s.duration || Math.abs((o - (u && "time" in u ? u.time : l._time)) / l.timeScale());
                        g._dur !== x && $s(g, x, 0, 1).render(g._time, !0, !0), d = 1
                    }
                    c && c.apply(g, h || [])
                }
            }, s));
        return f ? g.render(0) : g
    }, n.tweenFromTo = function (i, s, l) {
        return this.tweenTo(s, gn({
            startAt: {
                time: wn(this, i)
            }
        }, l))
    }, n.recent = function () {
        return this._recent
    }, n.nextLabel = function (i) {
        return i === void 0 && (i = this._time), mp(this, wn(this, i))
    }, n.previousLabel = function (i) {
        return i === void 0 && (i = this._time), mp(this, wn(this, i), 1)
    }, n.currentLabel = function (i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + pe)
    }, n.shiftChildren = function (i, s, l) {
        l === void 0 && (l = 0);
        var o = this._first,
            a = this.labels,
            u;
        for (i = Ce(i); o;) o._start >= l && (o._start += i, o._end += i), o = o._next;
        if (s)
            for (u in a) a[u] >= l && (a[u] += i);
        return Ai(this)
    }, n.invalidate = function (i) {
        var s = this._first;
        for (this._lock = 0; s;) s.invalidate(i), s = s._next;
        return t.prototype.invalidate.call(this, i)
    }, n.clear = function (i) {
        i === void 0 && (i = !0);
        for (var s = this._first, l; s;) l = s._next, this.remove(s), s = l;
        return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Ai(this)
    }, n.totalDuration = function (i) {
        var s = 0,
            l = this,
            o = l._last,
            a = Cn,
            u, c, h;
        if (arguments.length) return l.timeScale((l._repeat < 0 ? l.duration() : l.totalDuration()) / (l.reversed() ? -i : i));
        if (l._dirty) {
            for (h = l.parent; o;) u = o._prev, o._dirty && o.totalDuration(), c = o._start, c > a && l._sort && o._ts && !l._lock ? (l._lock = 1, Jn(l, o, c - o._delay, 1)._lock = 0) : a = c, c < 0 && o._ts && (s -= c, (!h && !l._dp || h && h.smoothChildTiming) && (l._start += Ce(c / l._ts), l._time -= c, l._tTime -= c), l.shiftChildren(-c, !1, -1 / 0), a = 0), o._end > s && o._ts && (s = o._end), o = u;
            $s(l, l === Ne && l._time > s ? l._time : s, 1, 1), l._dirty = 0
        }
        return l._tDur
    }, e.updateRoot = function (i) {
        if (Ne._ts && (yg(Ne, qa(i, Ne)), _g = on.frame), on.frame >= fp) {
            fp += hn.autoSleep || 120;
            var s = Ne._first;
            if ((!s || !s._ts) && hn.autoSleep && on._listeners.length < 2) {
                for (; s && !s._ts;) s = s._next;
                s || on.sleep()
            }
        }
    }, e
}(ho);
gn(At.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var K1 = function (e, n, r, i, s, l, o) {
    var a = new Gt(this._pt, e, n, 0, 1, bg, null, s),
        u = 0,
        c = 0,
        h, f, d, g, p, x, _, m;
    for (a.b = r, a.e = i, r += "", i += "", (_ = ~i.indexOf("random(")) && (i = co(i)), l && (m = [r, i], l(m, e, n), r = m[0], i = m[1]), f = r.match(Zu) || []; h = Zu.exec(i);) g = h[0], p = i.substring(u, h.index), d ? d = (d + 1) % 5 : p.substr(-5) === "rgba(" && (d = 1), g !== f[c++] && (x = parseFloat(f[c - 1]) || 0, a._pt = {
        _next: a._pt,
        p: p || c === 1 ? p : ",",
        s: x,
        c: g.charAt(1) === "=" ? Ns(x, g) - x : parseFloat(g) - x,
        m: d && d < 4 ? Math.round : 0
    }, u = Zu.lastIndex);
    return a.c = u < i.length ? i.substring(u, i.length) : "", a.fp = o, (hg.test(i) || _) && (a.e = 0), this._pt = a, a
},
    Dd = function (e, n, r, i, s, l, o, a, u, c) {
        Ae(i) && (i = i(s || 0, e, l));
        var h = e[n],
            f = r !== "get" ? r : Ae(h) ? u ? e[n.indexOf("set") || !Ae(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : h,
            d = Ae(h) ? u ? tw : Yg : jd,
            g;
        if (it(i) && (~i.indexOf("random(") && (i = co(i)), i.charAt(1) === "=" && (g = Ns(f, i) + (St(f) || 0), (g || g === 0) && (i = g))), !c || f !== i || mf) return !isNaN(f * i) && i !== "" ? (g = new Gt(this._pt, e, n, +f || 0, i - (f || 0), typeof h == "boolean" ? rw : Xg, 0, d), u && (g.fp = u), o && g.modifier(o, this, e), this._pt = g) : (!h && !(n in e) && Od(n, i), K1.call(this, e, n, f, i, d, a || hn.stringFilter, u))
    },
    q1 = function (e, n, r, i, s) {
        if (Ae(e) && (e = Dl(e, s, n, r, i)), !sr(e) || e.style && e.nodeType || Tt(e) || fg(e)) return it(e) ? Dl(e, s, n, r, i) : e;
        var l = {},
            o;
        for (o in e) l[o] = Dl(e[o], s, n, r, i);
        return l
    },
    Hg = function (e, n, r, i, s, l) {
        var o, a, u, c;
        if (sn[e] && (o = new sn[e]).init(s, o.rawVars ? n[e] : q1(n[e], i, s, l, r), r, i, l) !== !1 && (r._pt = a = new Gt(r._pt, s, e, 0, 1, o.render, o, 0, o.priority), r !== ws))
            for (u = r._ptLookup[r._targets.indexOf(s)], c = o._props.length; c--;) u[o._props[c]] = a;
        return o
    },
    Wr, mf, Ad = function t(e, n, r) {
        var i = e.vars,
            s = i.ease,
            l = i.startAt,
            o = i.immediateRender,
            a = i.lazy,
            u = i.onUpdate,
            c = i.runBackwards,
            h = i.yoyoEase,
            f = i.keyframes,
            d = i.autoRevert,
            g = e._dur,
            p = e._startAt,
            x = e._targets,
            _ = e.parent,
            m = _ && _.data === "nested" ? _.vars.targets : x,
            v = e._overwrite === "auto" && !Ed,
            y = e.timeline,
            k, E, T, C, O, N, F, z, X, G, ne, K, U;
        if (y && (!f || !s) && (s = "none"), e._ease = ji(s, Vs.ease), e._yEase = h ? Fg(ji(h === !0 ? s : h, Vs.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !y && !!i.runBackwards, !y || f && !i.stagger) {
            if (z = x[0] ? Di(x[0]).harness : 0, K = z && i[z.prop], k = Ka(i, Rd), p && (p._zTime < 0 && p.progress(1), n < 0 && c && o && !d ? p.render(-1, !0) : p.revert(c && g ? ma : E1), p._lazy = 0), l) {
                if (oi(e._startAt = Ye.set(x, gn({
                    data: "isStart",
                    overwrite: !1,
                    parent: _,
                    immediateRender: !0,
                    lazy: !p && bt(a),
                    startAt: null,
                    delay: 0,
                    onUpdate: u && function () {
                        return cn(e, "onUpdate")
                    },
                    stagger: 0
                }, l))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (ct || !o && !d) && e._startAt.revert(ma), o && g && n <= 0 && r <= 0) {
                    n && (e._zTime = n);
                    return
                }
            } else if (c && g && !p) {
                if (n && (o = !1), T = gn({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: o && !p && bt(a),
                    immediateRender: o,
                    stagger: 0,
                    parent: _
                }, k), K && (T[z.prop] = K), oi(e._startAt = Ye.set(x, T)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (ct ? e._startAt.revert(ma) : e._startAt.render(-1, !0)), e._zTime = n, !o) t(e._startAt, pe, pe);
                else if (!n) return
            }
            for (e._pt = e._ptCache = 0, a = g && bt(a) || a && !g, E = 0; E < x.length; E++) {
                if (O = x[E], F = O._gsap || zd(x)[E]._gsap, e._ptLookup[E] = G = {}, uf[F.id] && ni.length && Ga(), ne = m === x ? E : m.indexOf(O), z && (X = new z).init(O, K || k, e, ne, m) !== !1 && (e._pt = C = new Gt(e._pt, O, X.name, 0, 1, X.render, X, 0, X.priority), X._props.forEach(function (R) {
                    G[R] = C
                }), X.priority && (N = 1)), !z || K)
                    for (T in k) sn[T] && (X = Hg(T, k, e, ne, O, m)) ? X.priority && (N = 1) : G[T] = C = Dd.call(e, O, T, "get", k[T], ne, m, 0, i.stringFilter);
                e._op && e._op[E] && e.kill(O, e._op[E]), v && e._pt && (Wr = e, Ne.killTweensOf(O, G, e.globalTime(n)), U = !e.parent, Wr = 0), e._pt && a && (uf[F.id] = 1)
            }
            N && Qg(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = u, e._initted = (!e._op || e._pt) && !U, f && n <= 0 && y.render(Cn, !0, !0)
    },
    Z1 = function (e, n, r, i, s, l, o, a) {
        var u = (e._pt && e._ptCache || (e._ptCache = {}))[n],
            c, h, f, d;
        if (!u)
            for (u = e._ptCache[n] = [], f = e._ptLookup, d = e._targets.length; d--;) {
                if (c = f[d][n], c && c.d && c.d._pt)
                    for (c = c.d._pt; c && c.p !== n && c.fp !== n;) c = c._next;
                if (!c) return mf = 1, e.vars[n] = "+=0", Ad(e, o), mf = 0, a ? ao(n + " not eligible for reset") : 1;
                u.push(c)
            }
        for (d = u.length; d--;) h = u[d], c = h._pt || h, c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + l * c.c, c.c = r - c.s, h.e && (h.e = Ue(r) + St(h.e)), h.b && (h.b = c.s + St(h.b))
    },
    J1 = function (e, n) {
        var r = e[0] ? Di(e[0]).harness : 0,
            i = r && r.aliases,
            s, l, o, a;
        if (!i) return n;
        s = Hs({}, n);
        for (l in i)
            if (l in s)
                for (a = i[l].split(","), o = a.length; o--;) s[a[o]] = s[l];
        return s
    },
    ew = function (e, n, r, i) {
        var s = n.ease || i || "power1.inOut",
            l, o;
        if (Tt(n)) o = r[e] || (r[e] = []), n.forEach(function (a, u) {
            return o.push({
                t: u / (n.length - 1) * 100,
                v: a,
                e: s
            })
        });
        else
            for (l in n) o = r[l] || (r[l] = []), l === "ease" || o.push({
                t: parseFloat(e),
                v: n[l],
                e: s
            })
    },
    Dl = function (e, n, r, i, s) {
        return Ae(e) ? e.call(n, r, i, s) : it(e) && ~e.indexOf("random(") ? co(e) : e
    },
    Wg = Md + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    $g = {};
Qt(Wg + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return $g[t] = 1
});
var Ye = function (t) {
    ug(e, t);

    function e(r, i, s, l) {
        var o;
        typeof i == "number" && (s.duration = i, i = s, s = null), o = t.call(this, l ? i : zl(i)) || this;
        var a = o.vars,
            u = a.duration,
            c = a.delay,
            h = a.immediateRender,
            f = a.stagger,
            d = a.overwrite,
            g = a.keyframes,
            p = a.defaults,
            x = a.scrollTrigger,
            _ = a.yoyoEase,
            m = i.parent || Ne,
            v = (Tt(r) || fg(r) ? Er(r[0]) : "length" in i) ? [r] : Pn(r),
            y, k, E, T, C, O, N, F;
        if (o._targets = v.length ? zd(v) : ao("GSAP target " + r + " not found. https://gsap.com", !hn.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, g || f || $o(u) || $o(c)) {
            if (i = o.vars, y = o.timeline = new At({
                data: "nested",
                defaults: p || {},
                targets: m && m.data === "nested" ? m.vars.targets : v
            }), y.kill(), y.parent = y._dp = dr(o), y._start = 0, f || $o(u) || $o(c)) {
                if (T = v.length, N = f && Ng(f), sr(f))
                    for (C in f) ~Wg.indexOf(C) && (F || (F = {}), F[C] = f[C]);
                for (k = 0; k < T; k++) E = Ka(i, $g), E.stagger = 0, _ && (E.yoyoEase = _), F && Hs(E, F), O = v[k], E.duration = +Dl(u, dr(o), k, O, v), E.delay = (+Dl(c, dr(o), k, O, v) || 0) - o._delay, !f && T === 1 && E.delay && (o._delay = c = E.delay, o._start += c, E.delay = 0), y.to(O, E, N ? N(k, O, v) : 0), y._ease = ie.none;
                y.duration() ? u = c = 0 : o.timeline = 0
            } else if (g) {
                zl(gn(y.vars.defaults, {
                    ease: "none"
                })), y._ease = ji(g.ease || i.ease || "none");
                var z = 0,
                    X, G, ne;
                if (Tt(g)) g.forEach(function (K) {
                    return y.to(v, K, ">")
                }), y.duration();
                else {
                    E = {};
                    for (C in g) C === "ease" || C === "easeEach" || ew(C, g[C], E, g.easeEach);
                    for (C in E)
                        for (X = E[C].sort(function (K, U) {
                            return K.t - U.t
                        }), z = 0, k = 0; k < X.length; k++) G = X[k], ne = {
                            ease: G.e,
                            duration: (G.t - (k ? X[k - 1].t : 0)) / 100 * u
                        }, ne[C] = G.v, y.to(v, ne, z), z += ne.duration;
                    y.duration() < u && y.to({}, {
                        duration: u - y.duration()
                    })
                }
            }
            u || o.duration(u = y.duration())
        } else o.timeline = 0;
        return d === !0 && !Ed && (Wr = dr(o), Ne.killTweensOf(v), Wr = 0), Jn(m, dr(o), s), i.reversed && o.reverse(), i.paused && o.paused(!0), (h || !u && !g && o._start === Ce(m._time) && bt(h) && M1(dr(o)) && m.data !== "nested") && (o._tTime = -pe, o.render(Math.max(0, -c) || 0)), x && Tg(dr(o), x), o
    }
    var n = e.prototype;
    return n.render = function (i, s, l) {
        var o = this._time,
            a = this._tDur,
            u = this._dur,
            c = i < 0,
            h = i > a - pe && !c ? a : i < pe ? 0 : i,
            f, d, g, p, x, _, m, v, y;
        if (!u) L1(this, i, s, l);
        else if (h !== this._tTime || !i || l || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
            if (f = h, v = this.timeline, this._repeat) {
                if (p = u + this._rDelay, this._repeat < -1 && c) return this.totalTime(p * 100 + i, s, l);
                if (f = Ce(h % p), h === a ? (g = this._repeat, f = u) : (x = Ce(h / p), g = ~~x, g && g === x ? (f = u, g--) : f > u && (f = u)), _ = this._yoyo && g & 1, _ && (y = this._yEase, f = u - f), x = Ws(this._tTime, p), f === o && !l && this._initted && g === x) return this._tTime = h, this;
                g !== x && (v && this._yEase && Bg(v, _), this.vars.repeatRefresh && !_ && !this._lock && f !== p && this._initted && (this._lock = l = 1, this.render(Ce(p * g), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Eg(this, c ? i : f, l, s, h)) return this._tTime = 0, this;
                if (o !== this._time && !(l && this.vars.repeatRefresh && g !== x)) return this;
                if (u !== this._dur) return this.render(i, s, l)
            }
            if (this._tTime = h, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = m = (y || this._ease)(f / u), this._from && (this.ratio = m = 1 - m), !o && h && !s && !x && (cn(this, "onStart"), this._tTime !== h)) return this;
            for (d = this._pt; d;) d.r(m, d.d), d = d._next;
            v && v.render(i < 0 ? i : v._dur * v._ease(f / this._dur), s, l) || this._startAt && (this._zTime = i), this._onUpdate && !s && (c && cf(this, i, s, l), cn(this, "onUpdate")), this._repeat && g !== x && this.vars.onRepeat && !s && this.parent && cn(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (c && !this._onUpdate && cf(this, i, !0, !0), (i || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && oi(this, 1), !s && !(c && !o) && (h || o || _) && (cn(this, h === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < a && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, n.targets = function () {
        return this._targets
    }, n.invalidate = function (i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), t.prototype.invalidate.call(this, i)
    }, n.resetTo = function (i, s, l, o, a) {
        fo || on.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            c;
        return this._initted || Ad(this, u), c = this._ease(u / this._dur), Z1(this, i, s, l, o, c, u, a) ? this.resetTo(i, s, l, o, 1) : (ku(this, 0), this.parent || Sg(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, n.kill = function (i, s) {
        if (s === void 0 && (s = "all"), !i && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? gl(this) : this.scrollTrigger && this.scrollTrigger.kill(!!ct), this;
        if (this.timeline) {
            var l = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, s, Wr && Wr.vars.overwrite !== !0)._first || gl(this), this.parent && l !== this.timeline.totalDuration() && $s(this, this._dur * this.timeline._tDur / l, 0, 1), this
        }
        var o = this._targets,
            a = i ? Pn(i) : o,
            u = this._ptLookup,
            c = this._pt,
            h, f, d, g, p, x, _;
        if ((!s || s === "all") && O1(o, a)) return s === "all" && (this._pt = 0), gl(this);
        for (h = this._op = this._op || [], s !== "all" && (it(s) && (p = {}, Qt(s, function (m) {
            return p[m] = 1
        }), s = p), s = J1(o, s)), _ = o.length; _--;)
            if (~a.indexOf(o[_])) {
                f = u[_], s === "all" ? (h[_] = s, g = f, d = {}) : (d = h[_] = h[_] || {}, g = s);
                for (p in g) x = f && f[p], x && ((!("kill" in x.d) || x.d.kill(p) === !0) && xu(this, x, "_pt"), delete f[p]), d !== "all" && (d[p] = 1)
            } return this._initted && !this._pt && c && gl(this), this
    }, e.to = function (i, s) {
        return new e(i, s, arguments[2])
    }, e.from = function (i, s) {
        return Ll(1, arguments)
    }, e.delayedCall = function (i, s, l, o) {
        return new e(s, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: s,
            onReverseComplete: s,
            onCompleteParams: l,
            onReverseCompleteParams: l,
            callbackScope: o
        })
    }, e.fromTo = function (i, s, l) {
        return Ll(2, arguments)
    }, e.set = function (i, s) {
        return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s)
    }, e.killTweensOf = function (i, s, l) {
        return Ne.killTweensOf(i, s, l)
    }, e
}(ho);
gn(Ye.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Qt("staggerTo,staggerFrom,staggerFromTo", function (t) {
    Ye[t] = function () {
        var e = new At,
            n = df.call(arguments, 0);
        return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n)
    }
});
var jd = function (e, n, r) {
    return e[n] = r
},
    Yg = function (e, n, r) {
        return e[n](r)
    },
    tw = function (e, n, r, i) {
        return e[n](i.fp, r)
    },
    nw = function (e, n, r) {
        return e.setAttribute(n, r)
    },
    Id = function (e, n) {
        return Ae(e[n]) ? Yg : Cd(e[n]) && e.setAttribute ? nw : jd
    },
    Xg = function (e, n) {
        return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
    },
    rw = function (e, n) {
        return n.set(n.t, n.p, !!(n.s + n.c * e), n)
    },
    bg = function (e, n) {
        var r = n._pt,
            i = "";
        if (!e && n.b) i = n.b;
        else if (e === 1 && n.e) i = n.e;
        else {
            for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i, r = r._next;
            i += n.c
        }
        n.set(n.t, n.p, i, n)
    },
    Fd = function (e, n) {
        for (var r = n._pt; r;) r.r(e, r.d), r = r._next
    },
    iw = function (e, n, r, i) {
        for (var s = this._pt, l; s;) l = s._next, s.p === i && s.modifier(e, n, r), s = l
    },
    sw = function (e) {
        for (var n = this._pt, r, i; n;) i = n._next, n.p === e && !n.op || n.op === e ? xu(this, n, "_pt") : n.dep || (r = 1), n = i;
        return !r
    },
    lw = function (e, n, r, i) {
        i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
    },
    Qg = function (e) {
        for (var n = e._pt, r, i, s, l; n;) {
            for (r = n._next, i = s; i && i.pr > n.pr;) i = i._next;
            (n._prev = i ? i._prev : l) ? n._prev._next = n : s = n, (n._next = i) ? i._prev = n : l = n, n = r
        }
        e._pt = s
    },
    Gt = function () {
        function t(n, r, i, s, l, o, a, u, c) {
            this.t = r, this.s = s, this.c = l, this.p = i, this.r = o || Xg, this.d = a || this, this.set = u || jd, this.pr = c || 0, this._next = n, n && (n._prev = this)
        }
        var e = t.prototype;
        return e.modifier = function (r, i, s) {
            this.mSet = this.mSet || this.set, this.set = lw, this.m = r, this.mt = s, this.tween = i
        }, t
    }();
Qt(Md + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return Rd[t] = 1
});
mn.TweenMax = mn.TweenLite = Ye;
mn.TimelineLite = mn.TimelineMax = At;
Ne = new At({
    sortChildren: !1,
    defaults: Vs,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
hn.stringFilter = Ig;
var Ii = [],
    _a = {},
    ow = [],
    _p = 0,
    aw = 0,
    rc = function (e) {
        return (_a[e] || ow).map(function (n) {
            return n()
        })
    },
    gf = function () {
        var e = Date.now(),
            n = [];
        e - _p > 2 && (rc("matchMediaInit"), Ii.forEach(function (r) {
            var i = r.queries,
                s = r.conditions,
                l, o, a, u;
            for (o in i) l = Kn.matchMedia(i[o]).matches, l && (a = 1), l !== s[o] && (s[o] = l, u = 1);
            u && (r.revert(), a && n.push(r))
        }), rc("matchMediaRevert"), n.forEach(function (r) {
            return r.onMatch(r, function (i) {
                return r.add(null, i)
            })
        }), _p = e, rc("matchMedia"))
    },
    Gg = function () {
        function t(n, r) {
            this.selector = r && hf(r), this.data = [], this._r = [], this.isReverted = !1, this.id = aw++, n && this.add(n)
        }
        var e = t.prototype;
        return e.add = function (r, i, s) {
            Ae(r) && (s = i, i = r, r = Ae);
            var l = this,
                o = function () {
                    var u = ke,
                        c = l.selector,
                        h;
                    return u && u !== l && u.data.push(l), s && (l.selector = hf(s)), ke = l, h = i.apply(l, arguments), Ae(h) && l._r.push(h), ke = u, l.selector = c, l.isReverted = !1, h
                };
            return l.last = o, r === Ae ? o(l, function (a) {
                return l.add(null, a)
            }) : r ? l[r] = o : o
        }, e.ignore = function (r) {
            var i = ke;
            ke = null, r(this), ke = i
        }, e.getTweens = function () {
            var r = [];
            return this.data.forEach(function (i) {
                return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof Ye && !(i.parent && i.parent.data === "nested") && r.push(i)
            }), r
        }, e.clear = function () {
            this._r.length = this.data.length = 0
        }, e.kill = function (r, i) {
            var s = this;
            if (r ? function () {
                for (var o = s.getTweens(), a = s.data.length, u; a--;) u = s.data[a], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function (c) {
                    return o.splice(o.indexOf(c), 1)
                }));
                for (o.map(function (c) {
                    return {
                        g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                        t: c
                    }
                }).sort(function (c, h) {
                    return h.g - c.g || -1 / 0
                }).forEach(function (c) {
                    return c.t.revert(r)
                }), a = s.data.length; a--;) u = s.data[a], u instanceof At ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof Ye) && u.revert && u.revert(r);
                s._r.forEach(function (c) {
                    return c(r, s)
                }), s.isReverted = !0
            }() : this.data.forEach(function (o) {
                return o.kill && o.kill()
            }), this.clear(), i)
                for (var l = Ii.length; l--;) Ii[l].id === this.id && Ii.splice(l, 1)
        }, e.revert = function (r) {
            this.kill(r || {})
        }, t
    }(),
    uw = function () {
        function t(n) {
            this.contexts = [], this.scope = n, ke && ke.data.push(this)
        }
        var e = t.prototype;
        return e.add = function (r, i, s) {
            sr(r) || (r = {
                matches: r
            });
            var l = new Gg(0, s || this.scope),
                o = l.conditions = {},
                a, u, c;
            ke && !l.selector && (l.selector = ke.selector), this.contexts.push(l), i = l.add("onMatch", i), l.queries = r;
            for (u in r) u === "all" ? c = 1 : (a = Kn.matchMedia(r[u]), a && (Ii.indexOf(l) < 0 && Ii.push(l), (o[u] = a.matches) && (c = 1), a.addListener ? a.addListener(gf) : a.addEventListener("change", gf)));
            return c && i(l, function (h) {
                return l.add(null, h)
            }), this
        }, e.revert = function (r) {
            this.kill(r || {})
        }, e.kill = function (r) {
            this.contexts.forEach(function (i) {
                return i.kill(r, !0)
            })
        }, t
    }(),
    Za = {
        registerPlugin: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            n.forEach(function (i) {
                return Dg(i)
            })
        },
        timeline: function (e) {
            return new At(e)
        },
        getTweensOf: function (e, n) {
            return Ne.getTweensOf(e, n)
        },
        getProperty: function (e, n, r, i) {
            it(e) && (e = Pn(e)[0]);
            var s = Di(e || {}).get,
                l = r ? xg : wg;
            return r === "native" && (r = ""), e && (n ? l((sn[n] && sn[n].get || s)(e, n, r, i)) : function (o, a, u) {
                return l((sn[o] && sn[o].get || s)(e, o, a, u))
            })
        },
        quickSetter: function (e, n, r) {
            if (e = Pn(e), e.length > 1) {
                var i = e.map(function (c) {
                    return qt.quickSetter(c, n, r)
                }),
                    s = i.length;
                return function (c) {
                    for (var h = s; h--;) i[h](c)
                }
            }
            e = e[0] || {};
            var l = sn[n],
                o = Di(e),
                a = o.harness && (o.harness.aliases || {})[n] || n,
                u = l ? function (c) {
                    var h = new l;
                    ws._pt = 0, h.init(e, r ? c + r : c, ws, 0, [e]), h.render(1, h), ws._pt && Fd(1, ws)
                } : o.set(e, a);
            return l ? u : function (c) {
                return u(e, a, r ? c + r : c, o, 1)
            }
        },
        quickTo: function (e, n, r) {
            var i, s = qt.to(e, gn((i = {}, i[n] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})),
                l = function (a, u, c) {
                    return s.resetTo(n, a, u, c)
                };
            return l.tween = s, l
        },
        isTweening: function (e) {
            return Ne.getTweensOf(e, !0).length > 0
        },
        defaults: function (e) {
            return e && e.ease && (e.ease = ji(e.ease, Vs.ease)), dp(Vs, e || {})
        },
        config: function (e) {
            return dp(hn, e || {})
        },
        registerEffect: function (e) {
            var n = e.name,
                r = e.effect,
                i = e.plugins,
                s = e.defaults,
                l = e.extendTimeline;
            (i || "").split(",").forEach(function (o) {
                return o && !sn[o] && !mn[o] && ao(n + " effect requires " + o + " plugin.")
            }), Ju[n] = function (o, a, u) {
                return r(Pn(o), gn(a || {}, s), u)
            }, l && (At.prototype[n] = function (o, a, u) {
                return this.add(Ju[n](o, sr(a) ? a : (u = a) && {}, this), u)
            })
        },
        registerEase: function (e, n) {
            ie[e] = ji(n)
        },
        parseEase: function (e, n) {
            return arguments.length ? ji(e, n) : ie
        },
        getById: function (e) {
            return Ne.getById(e)
        },
        exportRoot: function (e, n) {
            e === void 0 && (e = {});
            var r = new At(e),
                i, s;
            for (r.smoothChildTiming = bt(e.smoothChildTiming), Ne.remove(r), r._dp = 0, r._time = r._tTime = Ne._time, i = Ne._first; i;) s = i._next, (n || !(!i._dur && i instanceof Ye && i.vars.onComplete === i._targets[0])) && Jn(r, i, i._start - i._delay), i = s;
            return Jn(Ne, r, 0), r
        },
        context: function (e, n) {
            return e ? new Gg(e, n) : ke
        },
        matchMedia: function (e) {
            return new uw(e)
        },
        matchMediaRefresh: function () {
            return Ii.forEach(function (e) {
                var n = e.conditions,
                    r, i;
                for (i in n) n[i] && (n[i] = !1, r = 1);
                r && e.revert()
            }) || gf()
        },
        addEventListener: function (e, n) {
            var r = _a[e] || (_a[e] = []);
            ~r.indexOf(n) || r.push(n)
        },
        removeEventListener: function (e, n) {
            var r = _a[e],
                i = r && r.indexOf(n);
            i >= 0 && r.splice(i, 1)
        },
        utils: {
            wrap: V1,
            wrapYoyo: H1,
            distribute: Ng,
            random: Rg,
            snap: Og,
            normalize: U1,
            getUnit: St,
            clamp: j1,
            splitColor: Ag,
            toArray: Pn,
            selector: hf,
            mapRange: zg,
            pipe: F1,
            unitize: B1,
            interpolate: W1,
            shuffle: Pg
        },
        install: mg,
        effects: Ju,
        ticker: on,
        updateRoot: At.updateRoot,
        plugins: sn,
        globalTimeline: Ne,
        core: {
            PropTween: Gt,
            globals: gg,
            Tween: Ye,
            Timeline: At,
            Animation: ho,
            getCache: Di,
            _removeLinkedListItem: xu,
            reverting: function () {
                return ct
            },
            context: function (e) {
                return e && ke && (ke.data.push(e), e._ctx = ke), ke
            },
            suppressOverwrites: function (e) {
                return Ed = e
            }
        }
    };
Qt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return Za[t] = Ye[t]
});
on.add(At.updateRoot);
ws = Za.to({}, {
    duration: 0
});
var cw = function (e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n;) r = r._next;
    return r
},
    fw = function (e, n) {
        var r = e._targets,
            i, s, l;
        for (i in n)
            for (s = r.length; s--;) l = e._ptLookup[s][i], l && (l = l.d) && (l._pt && (l = cw(l, i)), l && l.modifier && l.modifier(n[i], e, r[s], i))
    },
    ic = function (e, n) {
        return {
            name: e,
            headless: 1,
            rawVars: 1,
            init: function (i, s, l) {
                l._onInit = function (o) {
                    var a, u;
                    if (it(s) && (a = {}, Qt(s, function (c) {
                        return a[c] = 1
                    }), s = a), n) {
                        a = {};
                        for (u in s) a[u] = n(s[u]);
                        s = a
                    }
                    fw(o, s)
                }
            }
        }
    },
    qt = Za.registerPlugin({
        name: "attr",
        init: function (e, n, r, i, s) {
            var l, o, a;
            this.tween = r;
            for (l in n) a = e.getAttribute(l) || "", o = this.add(e, "setAttribute", (a || 0) + "", n[l], i, s, 0, 0, l), o.op = l, o.b = a, this._props.push(l)
        },
        render: function (e, n) {
            for (var r = n._pt; r;) ct ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
        }
    }, {
        name: "endArray",
        headless: 1,
        init: function (e, n) {
            for (var r = n.length; r--;) this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
        }
    }, ic("roundProps", pf), ic("modifiers"), ic("snap", Og)) || Za;
Ye.version = At.version = qt.version = "3.14.2";
pg = 1;
Pd() && Ys();
ie.Power0;
ie.Power1;
ie.Power2;
ie.Power3;
ie.Power4;
ie.Linear;
ie.Quad;
ie.Cubic;
ie.Quart;
ie.Quint;
ie.Strong;
ie.Elastic;
ie.Back;
ie.SteppedEase;
ie.Bounce;
ie.Sine;
ie.Expo;
ie.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var vp, $r, Os, Bd, Ri, yp, Ud, dw = function () {
    return typeof window < "u"
},
    Cr = {},
    Ti = 180 / Math.PI,
    Rs = Math.PI / 180,
    ns = Math.atan2,
    wp = 1e8,
    Vd = /([A-Z])/g,
    hw = /(left|right|width|margin|padding|x)/i,
    pw = /[\s,\(]\S/,
    er = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    _f = function (e, n) {
        return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
    },
    mw = function (e, n) {
        return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
    },
    gw = function (e, n) {
        return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
    },
    _w = function (e, n) {
        return n.set(n.t, n.p, e === 1 ? n.e : e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
    },
    vw = function (e, n) {
        var r = n.s + n.c * e;
        n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
    },
    Kg = function (e, n) {
        return n.set(n.t, n.p, e ? n.e : n.b, n)
    },
    qg = function (e, n) {
        return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
    },
    yw = function (e, n, r) {
        return e.style[n] = r
    },
    ww = function (e, n, r) {
        return e.style.setProperty(n, r)
    },
    xw = function (e, n, r) {
        return e._gsap[n] = r
    },
    Sw = function (e, n, r) {
        return e._gsap.scaleX = e._gsap.scaleY = r
    },
    kw = function (e, n, r, i, s) {
        var l = e._gsap;
        l.scaleX = l.scaleY = r, l.renderTransform(s, l)
    },
    Tw = function (e, n, r, i, s) {
        var l = e._gsap;
        l[n] = r, l.renderTransform(s, l)
    },
    Oe = "transform",
    Kt = Oe + "Origin",
    Ew = function t(e, n) {
        var r = this,
            i = this.target,
            s = i.style,
            l = i._gsap;
        if (e in Cr && s) {
            if (this.tfm = this.tfm || {}, e !== "transform") e = er[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function (o) {
                return r.tfm[o] = pr(i, o)
            }) : this.tfm[e] = l.x ? l[e] : pr(i, e), e === Kt && (this.tfm.zOrigin = l.zOrigin);
            else return er.transform.split(",").forEach(function (o) {
                return t.call(r, o, n)
            });
            if (this.props.indexOf(Oe) >= 0) return;
            l.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Kt, n, "")), e = Oe
        } (s || n) && this.props.push(e, n, s[e])
    },
    Zg = function (e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    Cw = function () {
        var e = this.props,
            n = this.target,
            r = n.style,
            i = n._gsap,
            s, l;
        for (s = 0; s < e.length; s += 3) e[s + 1] ? e[s + 1] === 2 ? n[e[s]](e[s + 2]) : n[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Vd, "-$1").toLowerCase());
        if (this.tfm) {
            for (l in this.tfm) i[l] = this.tfm[l];
            i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), s = Ud(), (!s || !s.isStart) && !r[Oe] && (Zg(r), i.zOrigin && r[Kt] && (r[Kt] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
        }
    },
    Jg = function (e, n) {
        var r = {
            target: e,
            props: [],
            revert: Cw,
            save: Ew
        };
        return e._gsap || qt.core.getCache(e), n && e.style && e.nodeType && n.split(",").forEach(function (i) {
            return r.save(i)
        }), r
    },
    e_, vf = function (e, n) {
        var r = $r.createElementNS ? $r.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : $r.createElement(e);
        return r && r.style ? r : $r.createElement(e)
    },
    fn = function t(e, n, r) {
        var i = getComputedStyle(e);
        return i[n] || i.getPropertyValue(n.replace(Vd, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Xs(n) || n, 1) || ""
    },
    xp = "O,Moz,ms,Ms,Webkit".split(","),
    Xs = function (e, n, r) {
        var i = n || Ri,
            s = i.style,
            l = 5;
        if (e in s && !r) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); l-- && !(xp[l] + e in s););
        return l < 0 ? null : (l === 3 ? "ms" : l >= 0 ? xp[l] : "") + e
    },
    yf = function () {
        dw() && window.document && (vp = window, $r = vp.document, Os = $r.documentElement, Ri = vf("div") || {
            style: {}
        }, vf("div"), Oe = Xs(Oe), Kt = Oe + "Origin", Ri.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", e_ = !!Xs("perspective"), Ud = qt.core.reverting, Bd = 1)
    },
    Sp = function (e) {
        var n = e.ownerSVGElement,
            r = vf("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = e.cloneNode(!0),
            s;
        i.style.display = "block", r.appendChild(i), Os.appendChild(r);
        try {
            s = i.getBBox()
        } catch { }
        return r.removeChild(i), Os.removeChild(r), s
    },
    kp = function (e, n) {
        for (var r = n.length; r--;)
            if (e.hasAttribute(n[r])) return e.getAttribute(n[r])
    },
    t_ = function (e) {
        var n, r;
        try {
            n = e.getBBox()
        } catch {
            n = Sp(e), r = 1
        }
        return n && (n.width || n.height) || r || (n = Sp(e)), n && !n.width && !n.x && !n.y ? {
            x: +kp(e, ["x", "cx", "x1"]) || 0,
            y: +kp(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : n
    },
    n_ = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && t_(e))
    },
    ai = function (e, n) {
        if (n) {
            var r = e.style,
                i;
            n in Cr && n !== Kt && (n = Oe), r.removeProperty ? (i = n.substr(0, 2), (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), r.removeProperty(i === "--" ? n : n.replace(Vd, "-$1").toLowerCase())) : r.removeAttribute(n)
        }
    },
    Yr = function (e, n, r, i, s, l) {
        var o = new Gt(e._pt, n, r, 0, 1, l ? qg : Kg);
        return e._pt = o, o.b = i, o.e = s, e._props.push(r), o
    },
    Tp = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    Pw = {
        grid: 1,
        flex: 1
    },
    ui = function t(e, n, r, i) {
        var s = parseFloat(r) || 0,
            l = (r + "").trim().substr((s + "").length) || "px",
            o = Ri.style,
            a = hw.test(n),
            u = e.tagName.toLowerCase() === "svg",
            c = (u ? "client" : "offset") + (a ? "Width" : "Height"),
            h = 100,
            f = i === "px",
            d = i === "%",
            g, p, x, _;
        if (i === l || !s || Tp[i] || Tp[l]) return s;
        if (l !== "px" && !f && (s = t(e, n, r, "px")), _ = e.getCTM && n_(e), (d || l === "%") && (Cr[n] || ~n.indexOf("adius"))) return g = _ ? e.getBBox()[a ? "width" : "height"] : e[c], Ue(d ? s / g * h : s / 100 * g);
        if (o[a ? "width" : "height"] = h + (f ? l : i), p = i !== "rem" && ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, _ && (p = (e.ownerSVGElement || {}).parentNode), (!p || p === $r || !p.appendChild) && (p = $r.body), x = p._gsap, x && d && x.width && a && x.time === on.time && !x.uncache) return Ue(s / x.width * h);
        if (d && (n === "height" || n === "width")) {
            var m = e.style[n];
            e.style[n] = h + i, g = e[c], m ? e.style[n] = m : ai(e, n)
        } else (d || l === "%") && !Pw[fn(p, "display")] && (o.position = fn(e, "position")), p === e && (o.position = "static"), p.appendChild(Ri), g = Ri[c], p.removeChild(Ri), o.position = "absolute";
        return a && d && (x = Di(p), x.time = on.time, x.width = p[c]), Ue(f ? g * s / h : g && s ? h / g * s : 0)
    },
    pr = function (e, n, r, i) {
        var s;
        return Bd || yf(), n in er && n !== "transform" && (n = er[n], ~n.indexOf(",") && (n = n.split(",")[0])), Cr[n] && n !== "transform" ? (s = mo(e, i), s = n !== "transformOrigin" ? s[n] : s.svg ? s.origin : eu(fn(e, Kt)) + " " + s.zOrigin + "px") : (s = e.style[n], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = Ja[n] && Ja[n](e, n, r) || fn(e, n) || vg(e, n) || (n === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? ui(e, n, s, r) + r : s
    },
    Nw = function (e, n, r, i) {
        if (!r || r === "none") {
            var s = Xs(n, e, 1),
                l = s && fn(e, s, 1);
            l && l !== r ? (n = s, r = l) : n === "borderColor" && (r = fn(e, "borderTopColor"))
        }
        var o = new Gt(this._pt, e.style, n, 0, 1, bg),
            a = 0,
            u = 0,
            c, h, f, d, g, p, x, _, m, v, y, k;
        if (o.b = r, o.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = fn(e, i.substring(4, i.indexOf(")")))), i === "auto" && (p = e.style[n], e.style[n] = i, i = fn(e, n) || i, p ? e.style[n] = p : ai(e, n)), c = [r, i], Ig(c), r = c[0], i = c[1], f = r.match(ys) || [], k = i.match(ys) || [], k.length) {
            for (; h = ys.exec(i);) x = h[0], m = i.substring(a, h.index), g ? g = (g + 1) % 5 : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") && (g = 1), x !== (p = f[u++] || "") && (d = parseFloat(p) || 0, y = p.substr((d + "").length), x.charAt(1) === "=" && (x = Ns(d, x) + y), _ = parseFloat(x), v = x.substr((_ + "").length), a = ys.lastIndex - v.length, v || (v = v || hn.units[n] || y, a === i.length && (i += v, o.e += v)), y !== v && (d = ui(e, n, p, v) || 0), o._pt = {
                _next: o._pt,
                p: m || u === 1 ? m : ",",
                s: d,
                c: _ - d,
                m: g && g < 4 || n === "zIndex" ? Math.round : 0
            });
            o.c = a < i.length ? i.substring(a, i.length) : ""
        } else o.r = n === "display" && i === "none" ? qg : Kg;
        return hg.test(i) && (o.e = 0), this._pt = o, o
    },
    Ep = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Ow = function (e) {
        var n = e.split(" "),
            r = n[0],
            i = n[1] || "50%";
        return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), n[0] = Ep[r] || r, n[1] = Ep[i] || i, n.join(" ")
    },
    Rw = function (e, n) {
        if (n.tween && n.tween._time === n.tween._dur) {
            var r = n.t,
                i = r.style,
                s = n.u,
                l = r._gsap,
                o, a, u;
            if (s === "all" || s === !0) i.cssText = "", a = 1;
            else
                for (s = s.split(","), u = s.length; --u > -1;) o = s[u], Cr[o] && (a = 1, o = o === "transformOrigin" ? Kt : Oe), ai(r, o);
            a && (ai(r, Oe), l && (l.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", mo(r, 1), l.uncache = 1, Zg(i)))
        }
    },
    Ja = {
        clearProps: function (e, n, r, i, s) {
            if (s.data !== "isFromStart") {
                var l = e._pt = new Gt(e._pt, n, r, 0, 0, Rw);
                return l.u = i, l.pr = -10, l.tween = s, e._props.push(r), 1
            }
        }
    },
    po = [1, 0, 0, 1, 0, 0],
    r_ = {},
    i_ = function (e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    Cp = function (e) {
        var n = fn(e, Oe);
        return i_(n) ? po : n.substr(7).match(dg).map(Ue)
    },
    Hd = function (e, n) {
        var r = e._gsap || Di(e),
            i = e.style,
            s = Cp(e),
            l, o, a, u;
        return r.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, s = [a.a, a.b, a.c, a.d, a.e, a.f], s.join(",") === "1,0,0,1,0,0" ? po : s) : (s === po && !e.offsetParent && e !== Os && !r.svg && (a = i.display, i.display = "block", l = e.parentNode, (!l || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, o = e.nextElementSibling, Os.appendChild(e)), s = Cp(e), a ? i.display = a : ai(e, "display"), u && (o ? l.insertBefore(e, o) : l ? l.appendChild(e) : Os.removeChild(e))), n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
    },
    wf = function (e, n, r, i, s, l) {
        var o = e._gsap,
            a = s || Hd(e, !0),
            u = o.xOrigin || 0,
            c = o.yOrigin || 0,
            h = o.xOffset || 0,
            f = o.yOffset || 0,
            d = a[0],
            g = a[1],
            p = a[2],
            x = a[3],
            _ = a[4],
            m = a[5],
            v = n.split(" "),
            y = parseFloat(v[0]) || 0,
            k = parseFloat(v[1]) || 0,
            E, T, C, O;
        r ? a !== po && (T = d * x - g * p) && (C = y * (x / T) + k * (-p / T) + (p * m - x * _) / T, O = y * (-g / T) + k * (d / T) - (d * m - g * _) / T, y = C, k = O) : (E = t_(e), y = E.x + (~v[0].indexOf("%") ? y / 100 * E.width : y), k = E.y + (~(v[1] || v[0]).indexOf("%") ? k / 100 * E.height : k)), i || i !== !1 && o.smooth ? (_ = y - u, m = k - c, o.xOffset = h + (_ * d + m * p) - _, o.yOffset = f + (_ * g + m * x) - m) : o.xOffset = o.yOffset = 0, o.xOrigin = y, o.yOrigin = k, o.smooth = !!i, o.origin = n, o.originIsAbsolute = !!r, e.style[Kt] = "0px 0px", l && (Yr(l, o, "xOrigin", u, y), Yr(l, o, "yOrigin", c, k), Yr(l, o, "xOffset", h, o.xOffset), Yr(l, o, "yOffset", f, o.yOffset)), e.setAttribute("data-svg-origin", y + " " + k)
    },
    mo = function (e, n) {
        var r = e._gsap || new Vg(e);
        if ("x" in r && !n && !r.uncache) return r;
        var i = e.style,
            s = r.scaleX < 0,
            l = "px",
            o = "deg",
            a = getComputedStyle(e),
            u = fn(e, Kt) || "0",
            c, h, f, d, g, p, x, _, m, v, y, k, E, T, C, O, N, F, z, X, G, ne, K, U, R, D, S, W, se, dt, ue, je;
        return c = h = f = p = x = _ = m = v = y = 0, d = g = 1, r.svg = !!(e.getCTM && n_(e)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[Oe] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[Oe] !== "none" ? a[Oe] : "")), i.scale = i.rotate = i.translate = "none"), T = Hd(e, r.svg), r.svg && (r.uncache ? (R = e.getBBox(), u = r.xOrigin - R.x + "px " + (r.yOrigin - R.y) + "px", U = "") : U = !n && e.getAttribute("data-svg-origin"), wf(e, U || u, !!U || r.originIsAbsolute, r.smooth !== !1, T)), k = r.xOrigin || 0, E = r.yOrigin || 0, T !== po && (F = T[0], z = T[1], X = T[2], G = T[3], c = ne = T[4], h = K = T[5], T.length === 6 ? (d = Math.sqrt(F * F + z * z), g = Math.sqrt(G * G + X * X), p = F || z ? ns(z, F) * Ti : 0, m = X || G ? ns(X, G) * Ti + p : 0, m && (g *= Math.abs(Math.cos(m * Rs))), r.svg && (c -= k - (k * F + E * X), h -= E - (k * z + E * G))) : (je = T[6], dt = T[7], S = T[8], W = T[9], se = T[10], ue = T[11], c = T[12], h = T[13], f = T[14], C = ns(je, se), x = C * Ti, C && (O = Math.cos(-C), N = Math.sin(-C), U = ne * O + S * N, R = K * O + W * N, D = je * O + se * N, S = ne * -N + S * O, W = K * -N + W * O, se = je * -N + se * O, ue = dt * -N + ue * O, ne = U, K = R, je = D), C = ns(-X, se), _ = C * Ti, C && (O = Math.cos(-C), N = Math.sin(-C), U = F * O - S * N, R = z * O - W * N, D = X * O - se * N, ue = G * N + ue * O, F = U, z = R, X = D), C = ns(z, F), p = C * Ti, C && (O = Math.cos(C), N = Math.sin(C), U = F * O + z * N, R = ne * O + K * N, z = z * O - F * N, K = K * O - ne * N, F = U, ne = R), x && Math.abs(x) + Math.abs(p) > 359.9 && (x = p = 0, _ = 180 - _), d = Ue(Math.sqrt(F * F + z * z + X * X)), g = Ue(Math.sqrt(K * K + je * je)), C = ns(ne, K), m = Math.abs(C) > 2e-4 ? C * Ti : 0, y = ue ? 1 / (ue < 0 ? -ue : ue) : 0), r.svg && (U = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !i_(fn(e, Oe)), U && e.setAttribute("transform", U))), Math.abs(m) > 90 && Math.abs(m) < 270 && (s ? (d *= -1, m += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (g *= -1, m += m <= 0 ? 180 : -180)), n = n || r.uncache, r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + l, r.y = h - ((r.yPercent = h && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + l, r.z = f + l, r.scaleX = Ue(d), r.scaleY = Ue(g), r.rotation = Ue(p) + o, r.rotationX = Ue(x) + o, r.rotationY = Ue(_) + o, r.skewX = m + o, r.skewY = v + o, r.transformPerspective = y + l, (r.zOrigin = parseFloat(u.split(" ")[2]) || !n && r.zOrigin || 0) && (i[Kt] = eu(u)), r.xOffset = r.yOffset = 0, r.force3D = hn.force3D, r.renderTransform = r.svg ? zw : e_ ? s_ : Mw, r.uncache = 0, r
    },
    eu = function (e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    sc = function (e, n, r) {
        var i = St(n);
        return Ue(parseFloat(n) + parseFloat(ui(e, "x", r + "px", i))) + i
    },
    Mw = function (e, n) {
        n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, s_(e, n)
    },
    wi = "0deg",
    ul = "0px",
    xi = ") ",
    s_ = function (e, n) {
        var r = n || this,
            i = r.xPercent,
            s = r.yPercent,
            l = r.x,
            o = r.y,
            a = r.z,
            u = r.rotation,
            c = r.rotationY,
            h = r.rotationX,
            f = r.skewX,
            d = r.skewY,
            g = r.scaleX,
            p = r.scaleY,
            x = r.transformPerspective,
            _ = r.force3D,
            m = r.target,
            v = r.zOrigin,
            y = "",
            k = _ === "auto" && e && e !== 1 || _ === !0;
        if (v && (h !== wi || c !== wi)) {
            var E = parseFloat(c) * Rs,
                T = Math.sin(E),
                C = Math.cos(E),
                O;
            E = parseFloat(h) * Rs, O = Math.cos(E), l = sc(m, l, T * O * -v), o = sc(m, o, -Math.sin(E) * -v), a = sc(m, a, C * O * -v + v)
        }
        x !== ul && (y += "perspective(" + x + xi), (i || s) && (y += "translate(" + i + "%, " + s + "%) "), (k || l !== ul || o !== ul || a !== ul) && (y += a !== ul || k ? "translate3d(" + l + ", " + o + ", " + a + ") " : "translate(" + l + ", " + o + xi), u !== wi && (y += "rotate(" + u + xi), c !== wi && (y += "rotateY(" + c + xi), h !== wi && (y += "rotateX(" + h + xi), (f !== wi || d !== wi) && (y += "skew(" + f + ", " + d + xi), (g !== 1 || p !== 1) && (y += "scale(" + g + ", " + p + xi), m.style[Oe] = y || "translate(0, 0)"
    },
    zw = function (e, n) {
        var r = n || this,
            i = r.xPercent,
            s = r.yPercent,
            l = r.x,
            o = r.y,
            a = r.rotation,
            u = r.skewX,
            c = r.skewY,
            h = r.scaleX,
            f = r.scaleY,
            d = r.target,
            g = r.xOrigin,
            p = r.yOrigin,
            x = r.xOffset,
            _ = r.yOffset,
            m = r.forceCSS,
            v = parseFloat(l),
            y = parseFloat(o),
            k, E, T, C, O;
        a = parseFloat(a), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, a += c), a || u ? (a *= Rs, u *= Rs, k = Math.cos(a) * h, E = Math.sin(a) * h, T = Math.sin(a - u) * -f, C = Math.cos(a - u) * f, u && (c *= Rs, O = Math.tan(u - c), O = Math.sqrt(1 + O * O), T *= O, C *= O, c && (O = Math.tan(c), O = Math.sqrt(1 + O * O), k *= O, E *= O)), k = Ue(k), E = Ue(E), T = Ue(T), C = Ue(C)) : (k = h, C = f, E = T = 0), (v && !~(l + "").indexOf("px") || y && !~(o + "").indexOf("px")) && (v = ui(d, "x", l, "px"), y = ui(d, "y", o, "px")), (g || p || x || _) && (v = Ue(v + g - (g * k + p * T) + x), y = Ue(y + p - (g * E + p * C) + _)), (i || s) && (O = d.getBBox(), v = Ue(v + i / 100 * O.width), y = Ue(y + s / 100 * O.height)), O = "matrix(" + k + "," + E + "," + T + "," + C + "," + v + "," + y + ")", d.setAttribute("transform", O), m && (d.style[Oe] = O)
    },
    Lw = function (e, n, r, i, s) {
        var l = 360,
            o = it(s),
            a = parseFloat(s) * (o && ~s.indexOf("rad") ? Ti : 1),
            u = a - i,
            c = i + u + "deg",
            h, f;
        return o && (h = s.split("_")[1], h === "short" && (u %= l, u !== u % (l / 2) && (u += u < 0 ? l : -l)), h === "cw" && u < 0 ? u = (u + l * wp) % l - ~~(u / l) * l : h === "ccw" && u > 0 && (u = (u - l * wp) % l - ~~(u / l) * l)), e._pt = f = new Gt(e._pt, n, r, i, u, mw), f.e = c, f.u = "deg", e._props.push(r), f
    },
    Pp = function (e, n) {
        for (var r in n) e[r] = n[r];
        return e
    },
    Dw = function (e, n, r) {
        var i = Pp({}, r._gsap),
            s = "perspective,force3D,transformOrigin,svgOrigin",
            l = r.style,
            o, a, u, c, h, f, d, g;
        i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), l[Oe] = n, o = mo(r, 1), ai(r, Oe), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[Oe], l[Oe] = n, o = mo(r, 1), l[Oe] = u);
        for (a in Cr) u = i[a], c = o[a], u !== c && s.indexOf(a) < 0 && (d = St(u), g = St(c), h = d !== g ? ui(r, a, u, g) : parseFloat(u), f = parseFloat(c), e._pt = new Gt(e._pt, o, a, h, f - h, _f), e._pt.u = g || 0, e._props.push(a));
        Pp(o, i)
    };
Qt("padding,margin,Width,Radius", function (t, e) {
    var n = "Top",
        r = "Right",
        i = "Bottom",
        s = "Left",
        l = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (o) {
            return e < 2 ? t + o : "border" + o + t
        });
    Ja[e > 1 ? "border" + t : t] = function (o, a, u, c, h) {
        var f, d;
        if (arguments.length < 4) return f = l.map(function (g) {
            return pr(o, g, u)
        }), d = f.join(" "), d.split(f[0]).length === 5 ? f[0] : d;
        f = (c + "").split(" "), d = {}, l.forEach(function (g, p) {
            return d[g] = f[p] = f[p] || f[(p - 1) / 2 | 0]
        }), o.init(a, d, h)
    }
});
var l_ = {
    name: "css",
    register: yf,
    targetTest: function (e) {
        return e.style && e.nodeType
    },
    init: function (e, n, r, i, s) {
        var l = this._props,
            o = e.style,
            a = r.vars.startAt,
            u, c, h, f, d, g, p, x, _, m, v, y, k, E, T, C, O;
        Bd || yf(), this.styles = this.styles || Jg(e), C = this.styles.props, this.tween = r;
        for (p in n)
            if (p !== "autoRound" && (c = n[p], !(sn[p] && Hg(p, n, r, i, e, s)))) {
                if (d = typeof c, g = Ja[p], d === "function" && (c = c.call(r, i, e, s), d = typeof c), d === "string" && ~c.indexOf("random(") && (c = co(c)), g) g(this, e, p, c, r) && (T = 1);
                else if (p.substr(0, 2) === "--") u = (getComputedStyle(e).getPropertyValue(p) + "").trim(), c += "", ri.lastIndex = 0, ri.test(u) || (x = St(u), _ = St(c), _ ? x !== _ && (u = ui(e, p, u, _) + _) : x && (c += x)), this.add(o, "setProperty", u, c, i, s, 0, 0, p), l.push(p), C.push(p, 0, o[p]);
                else if (d !== "undefined") {
                    if (a && p in a ? (u = typeof a[p] == "function" ? a[p].call(r, i, e, s) : a[p], it(u) && ~u.indexOf("random(") && (u = co(u)), St(u + "") || u === "auto" || (u += hn.units[p] || St(pr(e, p)) || ""), (u + "").charAt(1) === "=" && (u = pr(e, p))) : u = pr(e, p), f = parseFloat(u), m = d === "string" && c.charAt(1) === "=" && c.substr(0, 2), m && (c = c.substr(2)), h = parseFloat(c), p in er && (p === "autoAlpha" && (f === 1 && pr(e, "visibility") === "hidden" && h && (f = 0), C.push("visibility", 0, o.visibility), Yr(this, o, "visibility", f ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), p !== "scale" && p !== "transform" && (p = er[p], ~p.indexOf(",") && (p = p.split(",")[0]))), v = p in Cr, v) {
                        if (this.styles.save(p), O = c, d === "string" && c.substring(0, 6) === "var(--") {
                            if (c = fn(e, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                                var N = e.style.perspective;
                                e.style.perspective = c, c = fn(e, "perspective"), N ? e.style.perspective = N : ai(e, "perspective")
                            }
                            h = parseFloat(c)
                        }
                        if (y || (k = e._gsap, k.renderTransform && !n.parseTransform || mo(e, n.parseTransform), E = n.smoothOrigin !== !1 && k.smooth, y = this._pt = new Gt(this._pt, o, Oe, 0, 1, k.renderTransform, k, 0, -1), y.dep = 1), p === "scale") this._pt = new Gt(this._pt, k, "scaleY", k.scaleY, (m ? Ns(k.scaleY, m + h) : h) - k.scaleY || 0, _f), this._pt.u = 0, l.push("scaleY", p), p += "X";
                        else if (p === "transformOrigin") {
                            C.push(Kt, 0, o[Kt]), c = Ow(c), k.svg ? wf(e, c, 0, E, 0, this) : (_ = parseFloat(c.split(" ")[2]) || 0, _ !== k.zOrigin && Yr(this, k, "zOrigin", k.zOrigin, _), Yr(this, o, p, eu(u), eu(c)));
                            continue
                        } else if (p === "svgOrigin") {
                            wf(e, c, 1, E, 0, this);
                            continue
                        } else if (p in r_) {
                            Lw(this, k, p, f, m ? Ns(f, m + c) : c);
                            continue
                        } else if (p === "smoothOrigin") {
                            Yr(this, k, "smooth", k.smooth, c);
                            continue
                        } else if (p === "force3D") {
                            k[p] = c;
                            continue
                        } else if (p === "transform") {
                            Dw(this, c, e);
                            continue
                        }
                    } else p in o || (p = Xs(p) || p);
                    if (v || (h || h === 0) && (f || f === 0) && !pw.test(c) && p in o) x = (u + "").substr((f + "").length), h || (h = 0), _ = St(c) || (p in hn.units ? hn.units[p] : x), x !== _ && (f = ui(e, p, u, _)), this._pt = new Gt(this._pt, v ? k : o, p, f, (m ? Ns(f, m + h) : h) - f, !v && (_ === "px" || p === "zIndex") && n.autoRound !== !1 ? vw : _f), this._pt.u = _ || 0, v && O !== c ? (this._pt.b = u, this._pt.e = O, this._pt.r = _w) : x !== _ && _ !== "%" && (this._pt.b = u, this._pt.r = gw);
                    else if (p in o) Nw.call(this, e, p, u, m ? m + c : c);
                    else if (p in e) this.add(e, p, u || e[p], m ? m + c : c, i, s);
                    else if (p !== "parseTransform") {
                        Od(p, c);
                        continue
                    }
                    v || (p in o ? C.push(p, 0, o[p]) : typeof e[p] == "function" ? C.push(p, 2, e[p]()) : C.push(p, 1, u || e[p])), l.push(p)
                }
            } T && Qg(this)
    },
    render: function (e, n) {
        if (n.tween._time || !Ud())
            for (var r = n._pt; r;) r.r(e, r.d), r = r._next;
        else n.styles.revert()
    },
    get: pr,
    aliases: er,
    getSetter: function (e, n, r) {
        var i = er[n];
        return i && i.indexOf(",") < 0 && (n = i), n in Cr && n !== Kt && (e._gsap.x || pr(e, "x")) ? r && yp === r ? n === "scale" ? Sw : xw : (yp = r || {}) && (n === "scale" ? kw : Tw) : e.style && !Cd(e.style[n]) ? yw : ~n.indexOf("-") ? ww : Id(e, n)
    },
    core: {
        _removeProperty: ai,
        _getMatrix: Hd
    }
};
qt.utils.checkPrefix = Xs;
qt.core.getStyleSaver = Jg;
(function (t, e, n, r) {
    var i = Qt(t + "," + e + "," + n, function (s) {
        Cr[s] = 1
    });
    Qt(e, function (s) {
        hn.units[s] = "deg", r_[s] = 1
    }), er[i[13]] = t + "," + e, Qt(r, function (s) {
        var l = s.split(":");
        er[l[1]] = i[l[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    hn.units[t] = "px"
});
qt.registerPlugin(l_);
var Ee = qt.registerPlugin(l_) || qt;
Ee.core.Tween;

function Aw(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
}

function jw(t, e, n) {
    return e && Aw(t.prototype, e), t
}
/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var at, va, an, Xr, br, Ms, o_, Ei, Al, a_, vr, Fn, u_, c_ = function () {
    return at || typeof window < "u" && (at = window.gsap) && at.registerPlugin && at
},
    f_ = 1,
    xs = [],
    J = [],
    ir = [],
    jl = Date.now,
    xf = function (e, n) {
        return n
    },
    Iw = function () {
        var e = Al.core,
            n = e.bridge || {},
            r = e._scrollers,
            i = e._proxies;
        r.push.apply(r, J), i.push.apply(i, ir), J = r, ir = i, xf = function (l, o) {
            return n[l](o)
        }
    },
    ii = function (e, n) {
        return ~ir.indexOf(e) && ir[ir.indexOf(e) + 1][n]
    },
    Il = function (e) {
        return !!~a_.indexOf(e)
    },
    Rt = function (e, n, r, i, s) {
        return e.addEventListener(n, r, {
            passive: i !== !1,
            capture: !!s
        })
    },
    Ot = function (e, n, r, i) {
        return e.removeEventListener(n, r, !!i)
    },
    Yo = "scrollLeft",
    Xo = "scrollTop",
    Sf = function () {
        return vr && vr.isPressed || J.cache++
    },
    tu = function (e, n) {
        var r = function i(s) {
            if (s || s === 0) {
                f_ && (an.history.scrollRestoration = "manual");
                var l = vr && vr.isPressed;
                s = i.v = Math.round(s) || (vr && vr.iOS ? 1 : 0), e(s), i.cacheID = J.cache, l && xf("ss", s)
            } else (n || J.cache !== i.cacheID || xf("ref")) && (i.cacheID = J.cache, i.v = e());
            return i.v + i.offset
        };
        return r.offset = 0, e && r
    },
    jt = {
        s: Yo,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: tu(function (t) {
            return arguments.length ? an.scrollTo(t, Ke.sc()) : an.pageXOffset || Xr[Yo] || br[Yo] || Ms[Yo] || 0
        })
    },
    Ke = {
        s: Xo,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: jt,
        sc: tu(function (t) {
            return arguments.length ? an.scrollTo(jt.sc(), t) : an.pageYOffset || Xr[Xo] || br[Xo] || Ms[Xo] || 0
        })
    },
    Vt = function (e, n) {
        return (n && n._ctx && n._ctx.selector || at.utils.toArray)(e)[0] || (typeof e == "string" && at.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    },
    Fw = function (e, n) {
        for (var r = n.length; r--;)
            if (n[r] === e || n[r].contains(e)) return !0;
        return !1
    },
    ci = function (e, n) {
        var r = n.s,
            i = n.sc;
        Il(e) && (e = Xr.scrollingElement || br);
        var s = J.indexOf(e),
            l = i === Ke.sc ? 1 : 2;
        !~s && (s = J.push(e) - 1), J[s + l] || Rt(e, "scroll", Sf);
        var o = J[s + l],
            a = o || (J[s + l] = tu(ii(e, r), !0) || (Il(e) ? i : tu(function (u) {
                return arguments.length ? e[r] = u : e[r]
            })));
        return a.target = e, o || (a.smooth = at.getProperty(e, "scrollBehavior") === "smooth"), a
    },
    kf = function (e, n, r) {
        var i = e,
            s = e,
            l = jl(),
            o = l,
            a = n || 50,
            u = Math.max(500, a * 3),
            c = function (g, p) {
                var x = jl();
                p || x - l > a ? (s = i, i = g, o = l, l = x) : r ? i += g : i = s + (g - s) / (x - o) * (l - o)
            },
            h = function () {
                s = i = r ? 0 : i, o = l = 0
            },
            f = function (g) {
                var p = o,
                    x = s,
                    _ = jl();
                return (g || g === 0) && g !== i && c(g), l === o || _ - o > u ? 0 : (i + (r ? x : -x)) / ((r ? _ : l) - p) * 1e3
            };
        return {
            update: c,
            reset: h,
            getVelocity: f
        }
    },
    cl = function (e, n) {
        return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    },
    Np = function (e) {
        var n = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(n) >= Math.abs(r) ? n : r
    },
    d_ = function () {
        Al = at.core.globals().ScrollTrigger, Al && Al.core && Iw()
    },
    h_ = function (e) {
        return at = e || c_(), !va && at && typeof document < "u" && document.body && (an = window, Xr = document, br = Xr.documentElement, Ms = Xr.body, a_ = [an, Xr, br, Ms], at.utils.clamp, u_ = at.core.context || function () { }, Ei = "onpointerenter" in Ms ? "pointer" : "mouse", o_ = He.isTouch = an.matchMedia && an.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in an || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Fn = He.eventTypes = ("ontouchstart" in br ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in br ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
            return f_ = 0
        }, 500), d_(), va = 1), va
    };
jt.op = Ke;
J.cache = 0;
var He = function () {
    function t(n) {
        this.init(n)
    }
    var e = t.prototype;
    return e.init = function (r) {
        va || h_(at) || console.warn("Please gsap.registerPlugin(Observer)"), Al || d_();
        var i = r.tolerance,
            s = r.dragMinimum,
            l = r.type,
            o = r.target,
            a = r.lineHeight,
            u = r.debounce,
            c = r.preventDefault,
            h = r.onStop,
            f = r.onStopDelay,
            d = r.ignore,
            g = r.wheelSpeed,
            p = r.event,
            x = r.onDragStart,
            _ = r.onDragEnd,
            m = r.onDrag,
            v = r.onPress,
            y = r.onRelease,
            k = r.onRight,
            E = r.onLeft,
            T = r.onUp,
            C = r.onDown,
            O = r.onChangeX,
            N = r.onChangeY,
            F = r.onChange,
            z = r.onToggleX,
            X = r.onToggleY,
            G = r.onHover,
            ne = r.onHoverEnd,
            K = r.onMove,
            U = r.ignoreCheck,
            R = r.isNormalizer,
            D = r.onGestureStart,
            S = r.onGestureEnd,
            W = r.onWheel,
            se = r.onEnable,
            dt = r.onDisable,
            ue = r.onClick,
            je = r.scrollSpeed,
            we = r.capture,
            _e = r.allowClicks,
            Ct = r.lockAxis,
            ht = r.onLockAxis;
        this.target = o = Vt(o) || br, this.vars = r, d && (d = at.utils.toArray(d)), i = i || 1e-9, s = s || 0, g = g || 1, je = je || 1, l = l || "wheel,touch,pointer", u = u !== !1, a || (a = parseFloat(an.getComputedStyle(Ms).lineHeight) || 22);
        var Nr, Pt, Nt, le, Ie, Ut, Zt, P = this,
            Jt = 0,
            lr = 0,
            Or = r.passive || !c && r.passive !== !1,
            ze = ci(o, jt),
            or = ci(o, Ke),
            Rr = ze(),
            mi = or(),
            Ze = ~l.indexOf("touch") && !~l.indexOf("pointer") && Fn[0] === "pointerdown",
            Mr = Il(o),
            Fe = o.ownerDocument || Xr,
            zn = [0, 0, 0],
            yn = [0, 0, 0],
            ar = 0,
            qs = function () {
                return ar = jl()
            },
            We = function (V, ae) {
                return (P.event = V) && d && Fw(V.target, d) || ae && Ze && V.pointerType !== "touch" || U && U(V, ae)
            },
            To = function () {
                P._vx.reset(), P._vy.reset(), Pt.pause(), h && h(P)
            },
            ur = function () {
                var V = P.deltaX = Np(zn),
                    ae = P.deltaY = Np(yn),
                    L = Math.abs(V) >= i,
                    $ = Math.abs(ae) >= i;
                F && (L || $) && F(P, V, ae, zn, yn), L && (k && P.deltaX > 0 && k(P), E && P.deltaX < 0 && E(P), O && O(P), z && P.deltaX < 0 != Jt < 0 && z(P), Jt = P.deltaX, zn[0] = zn[1] = zn[2] = 0), $ && (C && P.deltaY > 0 && C(P), T && P.deltaY < 0 && T(P), N && N(P), X && P.deltaY < 0 != lr < 0 && X(P), lr = P.deltaY, yn[0] = yn[1] = yn[2] = 0), (le || Nt) && (K && K(P), Nt && (x && Nt === 1 && x(P), m && m(P), Nt = 0), le = !1), Ut && !(Ut = !1) && ht && ht(P), Ie && (W(P), Ie = !1), Nr = 0
            },
            Zi = function (V, ae, L) {
                zn[L] += V, yn[L] += ae, P._vx.update(V), P._vy.update(ae), u ? Nr || (Nr = requestAnimationFrame(ur)) : ur()
            },
            Ji = function (V, ae) {
                Ct && !Zt && (P.axis = Zt = Math.abs(V) > Math.abs(ae) ? "x" : "y", Ut = !0), Zt !== "y" && (zn[2] += V, P._vx.update(V, !0)), Zt !== "x" && (yn[2] += ae, P._vy.update(ae, !0)), u ? Nr || (Nr = requestAnimationFrame(ur)) : ur()
            },
            zr = function (V) {
                if (!We(V, 1)) {
                    V = cl(V, c);
                    var ae = V.clientX,
                        L = V.clientY,
                        $ = ae - P.x,
                        B = L - P.y,
                        Y = P.isDragging;
                    P.x = ae, P.y = L, (Y || ($ || B) && (Math.abs(P.startX - ae) >= s || Math.abs(P.startY - L) >= s)) && (Nt || (Nt = Y ? 2 : 1), Y || (P.isDragging = !0), Ji($, B))
                }
            },
            gi = P.onPress = function (b) {
                We(b, 1) || b && b.button || (P.axis = Zt = null, Pt.pause(), P.isPressed = !0, b = cl(b), Jt = lr = 0, P.startX = P.x = b.clientX, P.startY = P.y = b.clientY, P._vx.reset(), P._vy.reset(), Rt(R ? o : Fe, Fn[1], zr, Or, !0), P.deltaX = P.deltaY = 0, v && v(P))
            },
            ee = P.onRelease = function (b) {
                if (!We(b, 1)) {
                    Ot(R ? o : Fe, Fn[1], zr, !0);
                    var V = !isNaN(P.y - P.startY),
                        ae = P.isDragging,
                        L = ae && (Math.abs(P.x - P.startX) > 3 || Math.abs(P.y - P.startY) > 3),
                        $ = cl(b);
                    !L && V && (P._vx.reset(), P._vy.reset(), c && _e && at.delayedCall(.08, function () {
                        if (jl() - ar > 300 && !b.defaultPrevented) {
                            if (b.target.click) b.target.click();
                            else if (Fe.createEvent) {
                                var B = Fe.createEvent("MouseEvents");
                                B.initMouseEvent("click", !0, !0, an, 1, $.screenX, $.screenY, $.clientX, $.clientY, !1, !1, !1, !1, 0, null), b.target.dispatchEvent(B)
                            }
                        }
                    })), P.isDragging = P.isGesturing = P.isPressed = !1, h && ae && !R && Pt.restart(!0), Nt && ur(), _ && ae && _(P), y && y(P, L)
                }
            },
            _i = function (V) {
                return V.touches && V.touches.length > 1 && (P.isGesturing = !0) && D(V, P.isDragging)
            },
            Ln = function () {
                return (P.isGesturing = !1) || S(P)
            },
            Dn = function (V) {
                if (!We(V)) {
                    var ae = ze(),
                        L = or();
                    Zi((ae - Rr) * je, (L - mi) * je, 1), Rr = ae, mi = L, h && Pt.restart(!0)
                }
            },
            An = function (V) {
                if (!We(V)) {
                    V = cl(V, c), W && (Ie = !0);
                    var ae = (V.deltaMode === 1 ? a : V.deltaMode === 2 ? an.innerHeight : 1) * g;
                    Zi(V.deltaX * ae, V.deltaY * ae, 0), h && !R && Pt.restart(!0)
                }
            },
            vi = function (V) {
                if (!We(V)) {
                    var ae = V.clientX,
                        L = V.clientY,
                        $ = ae - P.x,
                        B = L - P.y;
                    P.x = ae, P.y = L, le = !0, h && Pt.restart(!0), ($ || B) && Ji($, B)
                }
            },
            es = function (V) {
                P.event = V, G(P)
            },
            cr = function (V) {
                P.event = V, ne(P)
            },
            Zs = function (V) {
                return We(V) || cl(V, c) && ue(P)
            };
        Pt = P._dc = at.delayedCall(f || .25, To).pause(), P.deltaX = P.deltaY = 0, P._vx = kf(0, 50, !0), P._vy = kf(0, 50, !0), P.scrollX = ze, P.scrollY = or, P.isDragging = P.isGesturing = P.isPressed = !1, u_(this), P.enable = function (b) {
            return P.isEnabled || (Rt(Mr ? Fe : o, "scroll", Sf), l.indexOf("scroll") >= 0 && Rt(Mr ? Fe : o, "scroll", Dn, Or, we), l.indexOf("wheel") >= 0 && Rt(o, "wheel", An, Or, we), (l.indexOf("touch") >= 0 && o_ || l.indexOf("pointer") >= 0) && (Rt(o, Fn[0], gi, Or, we), Rt(Fe, Fn[2], ee), Rt(Fe, Fn[3], ee), _e && Rt(o, "click", qs, !0, !0), ue && Rt(o, "click", Zs), D && Rt(Fe, "gesturestart", _i), S && Rt(Fe, "gestureend", Ln), G && Rt(o, Ei + "enter", es), ne && Rt(o, Ei + "leave", cr), K && Rt(o, Ei + "move", vi)), P.isEnabled = !0, P.isDragging = P.isGesturing = P.isPressed = le = Nt = !1, P._vx.reset(), P._vy.reset(), Rr = ze(), mi = or(), b && b.type && gi(b), se && se(P)), P
        }, P.disable = function () {
            P.isEnabled && (xs.filter(function (b) {
                return b !== P && Il(b.target)
            }).length || Ot(Mr ? Fe : o, "scroll", Sf), P.isPressed && (P._vx.reset(), P._vy.reset(), Ot(R ? o : Fe, Fn[1], zr, !0)), Ot(Mr ? Fe : o, "scroll", Dn, we), Ot(o, "wheel", An, we), Ot(o, Fn[0], gi, we), Ot(Fe, Fn[2], ee), Ot(Fe, Fn[3], ee), Ot(o, "click", qs, !0), Ot(o, "click", Zs), Ot(Fe, "gesturestart", _i), Ot(Fe, "gestureend", Ln), Ot(o, Ei + "enter", es), Ot(o, Ei + "leave", cr), Ot(o, Ei + "move", vi), P.isEnabled = P.isPressed = P.isDragging = !1, dt && dt(P))
        }, P.kill = P.revert = function () {
            P.disable();
            var b = xs.indexOf(P);
            b >= 0 && xs.splice(b, 1), vr === P && (vr = 0)
        }, xs.push(P), R && Il(o) && (vr = P), P.enable(p)
    }, jw(t, [{
        key: "velocityX",
        get: function () {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function () {
            return this._vy.getVelocity()
        }
    }]), t
}();
He.version = "3.14.2";
He.create = function (t) {
    return new He(t)
};
He.register = h_;
He.getAll = function () {
    return xs.slice()
};
He.getById = function (t) {
    return xs.filter(function (e) {
        return e.vars.id === t
    })[0]
};
c_() && at.registerPlugin(He);
/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var j, ss, Z, me, ln, ce, Wd, nu, go, Fl, vl, bo, yt, Tu, Tf, Lt, Op, Rp, ls, p_, lc, m_, Mt, Ef, g_, __, jr, Cf, $d, zs, Yd, Bl, Pf, oc, Qo = 1,
    wt = Date.now,
    ac = wt(),
    On = 0,
    yl = 0,
    Mp = function (e, n, r) {
        var i = rn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
        return r["_" + n + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e
    },
    zp = function (e, n) {
        return n && (!rn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
    },
    Bw = function t() {
        return yl && requestAnimationFrame(t)
    },
    Lp = function () {
        return Tu = 1
    },
    Dp = function () {
        return Tu = 0
    },
    qn = function (e) {
        return e
    },
    wl = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    v_ = function () {
        return typeof window < "u"
    },
    y_ = function () {
        return j || v_() && (j = window.gsap) && j.registerPlugin && j
    },
    Xi = function (e) {
        return !!~Wd.indexOf(e)
    },
    w_ = function (e) {
        return (e === "Height" ? Yd : Z["inner" + e]) || ln["client" + e] || ce["client" + e]
    },
    x_ = function (e) {
        return ii(e, "getBoundingClientRect") || (Xi(e) ? function () {
            return ka.width = Z.innerWidth, ka.height = Yd, ka
        } : function () {
            return mr(e)
        })
    },
    Uw = function (e, n, r) {
        var i = r.d,
            s = r.d2,
            l = r.a;
        return (l = ii(e, "getBoundingClientRect")) ? function () {
            return l()[i]
        } : function () {
            return (n ? w_(s) : e["client" + s]) || 0
        }
    },
    Vw = function (e, n) {
        return !n || ~ir.indexOf(e) ? x_(e) : function () {
            return ka
        }
    },
    tr = function (e, n) {
        var r = n.s,
            i = n.d2,
            s = n.d,
            l = n.a;
        return Math.max(0, (r = "scroll" + i) && (l = ii(e, r)) ? l() - x_(e)()[s] : Xi(e) ? (ln[r] || ce[r]) - w_(i) : e[r] - e["offset" + i])
    },
    Go = function (e, n) {
        for (var r = 0; r < ls.length; r += 3)(!n || ~n.indexOf(ls[r + 1])) && e(ls[r], ls[r + 1], ls[r + 2])
    },
    rn = function (e) {
        return typeof e == "string"
    },
    kt = function (e) {
        return typeof e == "function"
    },
    xl = function (e) {
        return typeof e == "number"
    },
    Ci = function (e) {
        return typeof e == "object"
    },
    fl = function (e, n, r) {
        return e && e.progress(n ? 0 : 1) && r && e.pause()
    },
    uc = function (e, n) {
        if (e.enabled) {
            var r = e._ctx ? e._ctx.add(function () {
                return n(e)
            }) : n(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    },
    rs = Math.abs,
    S_ = "left",
    k_ = "top",
    Xd = "right",
    bd = "bottom",
    Fi = "width",
    Bi = "height",
    Ul = "Right",
    Vl = "Left",
    Hl = "Top",
    Wl = "Bottom",
    $e = "padding",
    kn = "margin",
    bs = "Width",
    Qd = "Height",
    Qe = "px",
    Tn = function (e) {
        return Z.getComputedStyle(e)
    },
    Hw = function (e) {
        var n = Tn(e).position;
        e.style.position = n === "absolute" || n === "fixed" ? n : "relative"
    },
    Ap = function (e, n) {
        for (var r in n) r in e || (e[r] = n[r]);
        return e
    },
    mr = function (e, n) {
        var r = n && Tn(e)[Tf] !== "matrix(1, 0, 0, 1, 0, 0)" && j.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1),
            i = e.getBoundingClientRect();
        return r && r.progress(0).kill(), i
    },
    ru = function (e, n) {
        var r = n.d2;
        return e["offset" + r] || e["client" + r] || 0
    },
    T_ = function (e) {
        var n = [],
            r = e.labels,
            i = e.duration(),
            s;
        for (s in r) n.push(r[s] / i);
        return n
    },
    Ww = function (e) {
        return function (n) {
            return j.utils.snap(T_(e), n)
        }
    },
    Gd = function (e) {
        var n = j.utils.snap(e),
            r = Array.isArray(e) && e.slice(0).sort(function (i, s) {
                return i - s
            });
        return r ? function (i, s, l) {
            l === void 0 && (l = .001);
            var o;
            if (!s) return n(i);
            if (s > 0) {
                for (i -= l, o = 0; o < r.length; o++)
                    if (r[o] >= i) return r[o];
                return r[o - 1]
            } else
                for (o = r.length, i += l; o--;)
                    if (r[o] <= i) return r[o];
            return r[0]
        } : function (i, s, l) {
            l === void 0 && (l = .001);
            var o = n(i);
            return !s || Math.abs(o - i) < l || o - i < 0 == s < 0 ? o : n(s < 0 ? i - e : i + e)
        }
    },
    $w = function (e) {
        return function (n, r) {
            return Gd(T_(e))(n, r.direction)
        }
    },
    Ko = function (e, n, r, i) {
        return r.split(",").forEach(function (s) {
            return e(n, s, i)
        })
    },
    tt = function (e, n, r, i, s) {
        return e.addEventListener(n, r, {
            passive: !i,
            capture: !!s
        })
    },
    et = function (e, n, r, i) {
        return e.removeEventListener(n, r, !!i)
    },
    qo = function (e, n, r) {
        r = r && r.wheelHandler, r && (e(n, "wheel", r), e(n, "touchmove", r))
    },
    jp = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    Zo = {
        toggleActions: "play",
        anticipatePin: 0
    },
    iu = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    ya = function (e, n) {
        if (rn(e)) {
            var r = e.indexOf("="),
                i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (i *= n / 100), e = e.substr(0, r - 1)), e = i + (e in iu ? iu[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0)
        }
        return e
    },
    Jo = function (e, n, r, i, s, l, o, a) {
        var u = s.startColor,
            c = s.endColor,
            h = s.fontSize,
            f = s.indent,
            d = s.fontWeight,
            g = me.createElement("div"),
            p = Xi(r) || ii(r, "pinType") === "fixed",
            x = e.indexOf("scroller") !== -1,
            _ = p ? ce : r,
            m = e.indexOf("start") !== -1,
            v = m ? u : c,
            y = "border-color:" + v + ";font-size:" + h + ";color:" + v + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((x || a) && p ? "fixed;" : "absolute;"), (x || a || !p) && (y += (i === Ke ? Xd : bd) + ":" + (l + parseFloat(f)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), g._isStart = m, g.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), g.style.cssText = y, g.innerText = n || n === 0 ? e + "-" + n : e, _.children[0] ? _.insertBefore(g, _.children[0]) : _.appendChild(g), g._offset = g["offset" + i.op.d2], wa(g, 0, i, m), g
    },
    wa = function (e, n, r, i) {
        var s = {
            display: "block"
        },
            l = r[i ? "os2" : "p2"],
            o = r[i ? "p2" : "os2"];
        e._isFlipped = i, s[r.a + "Percent"] = i ? -100 : 0, s[r.a] = i ? "1px" : 0, s["border" + l + bs] = 1, s["border" + o + bs] = 0, s[r.p] = n + "px", j.set(e, s)
    },
    q = [],
    Nf = {},
    _o, Ip = function () {
        return wt() - On > 34 && (_o || (_o = requestAnimationFrame(wr)))
    },
    is = function () {
        (!Mt || !Mt.isPressed || Mt.startX > ce.clientWidth) && (J.cache++, Mt ? _o || (_o = requestAnimationFrame(wr)) : wr(), On || Qi("scrollStart"), On = wt())
    },
    cc = function () {
        __ = Z.innerWidth, g_ = Z.innerHeight
    },
    Sl = function (e) {
        J.cache++, (e === !0 || !yt && !m_ && !me.fullscreenElement && !me.webkitFullscreenElement && (!Ef || __ !== Z.innerWidth || Math.abs(Z.innerHeight - g_) > Z.innerHeight * .25)) && nu.restart(!0)
    },
    bi = {},
    Yw = [],
    E_ = function t() {
        return et(Q, "scrollEnd", t) || Mi(!0)
    },
    Qi = function (e) {
        return bi[e] && bi[e].map(function (n) {
            return n()
        }) || Yw
    },
    tn = [],
    C_ = function (e) {
        for (var n = 0; n < tn.length; n += 5)(!e || tn[n + 4] && tn[n + 4].query === e) && (tn[n].style.cssText = tn[n + 1], tn[n].getBBox && tn[n].setAttribute("transform", tn[n + 2] || ""), tn[n + 3].uncache = 1)
    },
    P_ = function () {
        return J.forEach(function (e) {
            return kt(e) && ++e.cacheID && (e.rec = e())
        })
    },
    Kd = function (e, n) {
        var r;
        for (Lt = 0; Lt < q.length; Lt++) r = q[Lt], r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
        Bl = !0, n && C_(n), n || Qi("revert")
    },
    N_ = function (e, n) {
        J.cache++, (n || !Dt) && J.forEach(function (r) {
            return kt(r) && r.cacheID++ && (r.rec = 0)
        }), rn(e) && (Z.history.scrollRestoration = $d = e)
    },
    Dt, Ui = 0,
    Fp, Xw = function () {
        if (Fp !== Ui) {
            var e = Fp = Ui;
            requestAnimationFrame(function () {
                return e === Ui && Mi(!0)
            })
        }
    },
    O_ = function () {
        ce.appendChild(zs), Yd = !Mt && zs.offsetHeight || Z.innerHeight, ce.removeChild(zs)
    },
    Bp = function (e) {
        return go(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (n) {
            return n.style.display = e ? "none" : "block"
        })
    },
    Mi = function (e, n) {
        if (ln = me.documentElement, ce = me.body, Wd = [Z, me, ln, ce], On && !e && !Bl) {
            tt(Q, "scrollEnd", E_);
            return
        }
        O_(), Dt = Q.isRefreshing = !0, Bl || P_();
        var r = Qi("refreshInit");
        p_ && Q.sort(), n || Kd(), J.forEach(function (i) {
            kt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
        }), q.slice(0).forEach(function (i) {
            return i.refresh()
        }), Bl = !1, q.forEach(function (i) {
            if (i._subPinOffset && i.pin) {
                var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    l = i.pin[s];
                i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - l), i.refresh()
            }
        }), Pf = 1, Bp(!0), q.forEach(function (i) {
            var s = tr(i.scroller, i._dir),
                l = i.vars.end === "max" || i._endClamp && i.end > s,
                o = i._startClamp && i.start >= s;
            (l || o) && i.setPositions(o ? s - 1 : i.start, l ? Math.max(o ? s : i.start + 1, s) : i.end, !0)
        }), Bp(!1), Pf = 0, r.forEach(function (i) {
            return i && i.render && i.render(-1)
        }), J.forEach(function (i) {
            kt(i) && (i.smooth && requestAnimationFrame(function () {
                return i.target.style.scrollBehavior = "smooth"
            }), i.rec && i(i.rec))
        }), N_($d, 1), nu.pause(), Ui++, Dt = 2, wr(2), q.forEach(function (i) {
            return kt(i.vars.onRefresh) && i.vars.onRefresh(i)
        }), Dt = Q.isRefreshing = !1, Qi("refresh")
    },
    Of = 0,
    xa = 1,
    $l, wr = function (e) {
        if (e === 2 || !Dt && !Bl) {
            Q.isUpdating = !0, $l && $l.update(0);
            var n = q.length,
                r = wt(),
                i = r - ac >= 50,
                s = n && q[0].scroll();
            if (xa = Of > s ? -1 : 1, Dt || (Of = s), i && (On && !Tu && r - On > 200 && (On = 0, Qi("scrollEnd")), vl = ac, ac = r), xa < 0) {
                for (Lt = n; Lt-- > 0;) q[Lt] && q[Lt].update(0, i);
                xa = 1
            } else
                for (Lt = 0; Lt < n; Lt++) q[Lt] && q[Lt].update(0, i);
            Q.isUpdating = !1
        }
        _o = 0
    },
    Rf = [S_, k_, bd, Xd, kn + Wl, kn + Ul, kn + Hl, kn + Vl, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Sa = Rf.concat([Fi, Bi, "boxSizing", "max" + bs, "max" + Qd, "position", kn, $e, $e + Hl, $e + Ul, $e + Wl, $e + Vl]),
    bw = function (e, n, r) {
        Ls(r);
        var i = e._gsap;
        if (i.spacerIsNative) Ls(i.spacerState);
        else if (e._gsap.swappedIn) {
            var s = n.parentNode;
            s && (s.insertBefore(e, n), s.removeChild(n))
        }
        e._gsap.swappedIn = !1
    },
    fc = function (e, n, r, i) {
        if (!e._gsap.swappedIn) {
            for (var s = Rf.length, l = n.style, o = e.style, a; s--;) a = Rf[s], l[a] = r[a];
            l.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (l.display = "inline-block"), o[bd] = o[Xd] = "auto", l.flexBasis = r.flexBasis || "auto", l.overflow = "visible", l.boxSizing = "border-box", l[Fi] = ru(e, jt) + Qe, l[Bi] = ru(e, Ke) + Qe, l[$e] = o[kn] = o[k_] = o[S_] = "0", Ls(i), o[Fi] = o["max" + bs] = r[Fi], o[Bi] = o["max" + Qd] = r[Bi], o[$e] = r[$e], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0
        }
    },
    Qw = /([A-Z])/g,
    Ls = function (e) {
        if (e) {
            var n = e.t.style,
                r = e.length,
                i = 0,
                s, l;
            for ((e.t._gsap || j.core.getCache(e.t)).uncache = 1; i < r; i += 2) l = e[i + 1], s = e[i], l ? n[s] = l : n[s] && n.removeProperty(s.replace(Qw, "-$1").toLowerCase())
        }
    },
    ea = function (e) {
        for (var n = Sa.length, r = e.style, i = [], s = 0; s < n; s++) i.push(Sa[s], r[Sa[s]]);
        return i.t = e, i
    },
    Gw = function (e, n, r) {
        for (var i = [], s = e.length, l = r ? 8 : 0, o; l < s; l += 2) o = e[l], i.push(o, o in n ? n[o] : e[l + 1]);
        return i.t = e.t, i
    },
    ka = {
        left: 0,
        top: 0
    },
    Up = function (e, n, r, i, s, l, o, a, u, c, h, f, d, g) {
        kt(e) && (e = e(a)), rn(e) && e.substr(0, 3) === "max" && (e = f + (e.charAt(4) === "=" ? ya("0" + e.substr(3), r) : 0));
        var p = d ? d.time() : 0,
            x, _, m;
        if (d && d.seek(0), isNaN(e) || (e = +e), xl(e)) d && (e = j.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), o && wa(o, r, i, !0);
        else {
            kt(n) && (n = n(a));
            var v = (e || "0").split(" "),
                y, k, E, T;
            m = Vt(n, a) || ce, y = mr(m) || {}, (!y || !y.left && !y.top) && Tn(m).display === "none" && (T = m.style.display, m.style.display = "block", y = mr(m), T ? m.style.display = T : m.style.removeProperty("display")), k = ya(v[0], y[i.d]), E = ya(v[1] || "0", r), e = y[i.p] - u[i.p] - c + k + s - E, o && wa(o, E, i, r - E < 20 || o._isStart && E > 20), r -= r - E
        }
        if (g && (a[g] = e || -.001, e < 0 && (e = 0)), l) {
            var C = e + r,
                O = l._isStart;
            x = "scroll" + i.d2, wa(l, C, i, O && C > 20 || !O && (h ? Math.max(ce[x], ln[x]) : l.parentNode[x]) <= C + 1), h && (u = mr(o), h && (l.style[i.op.p] = u[i.op.p] - i.op.m - l._offset + Qe))
        }
        return d && m && (x = mr(m), d.seek(f), _ = mr(m), d._caScrollDist = x[i.p] - _[i.p], e = e / d._caScrollDist * f), d && d.seek(p), d ? e : Math.round(e)
    },
    Kw = /(webkit|moz|length|cssText|inset)/i,
    Vp = function (e, n, r, i) {
        if (e.parentNode !== n) {
            var s = e.style,
                l, o;
            if (n === ce) {
                e._stOrig = s.cssText, o = Tn(e);
                for (l in o) !+l && !Kw.test(l) && o[l] && typeof s[l] == "string" && l !== "0" && (s[l] = o[l]);
                s.top = r, s.left = i
            } else s.cssText = e._stOrig;
            j.core.getCache(e).uncache = 1, n.appendChild(e)
        }
    },
    R_ = function (e, n, r) {
        var i = n,
            s = i;
        return function (l) {
            var o = Math.round(e());
            return o !== i && o !== s && Math.abs(o - i) > 3 && Math.abs(o - s) > 3 && (l = o, r && r()), s = i, i = Math.round(l), i
        }
    },
    ta = function (e, n, r) {
        var i = {};
        i[n.p] = "+=" + r, j.set(e, i)
    },
    Hp = function (e, n) {
        var r = ci(e, n),
            i = "_scroll" + n.p2,
            s = function l(o, a, u, c, h) {
                var f = l.tween,
                    d = a.onComplete,
                    g = {};
                u = u || r();
                var p = R_(r, u, function () {
                    f.kill(), l.tween = 0
                });
                return h = c && h || 0, c = c || o - u, f && f.kill(), a[i] = o, a.inherit = !1, a.modifiers = g, g[i] = function () {
                    return p(u + c * f.ratio + h * f.ratio * f.ratio)
                }, a.onUpdate = function () {
                    J.cache++, l.tween && wr()
                }, a.onComplete = function () {
                    l.tween = 0, d && d.call(f)
                }, f = l.tween = j.to(e, a), f
            };
        return e[i] = r, r.wheelHandler = function () {
            return s.tween && s.tween.kill() && (s.tween = 0)
        }, tt(e, "wheel", r.wheelHandler), Q.isTouch && tt(e, "touchmove", r.wheelHandler), s
    },
    Q = function () {
        function t(n, r) {
            ss || t.register(j) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Cf(this), this.init(n, r)
        }
        var e = t.prototype;
        return e.init = function (r, i) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !yl) {
                this.update = this.refresh = this.kill = qn;
                return
            }
            r = Ap(rn(r) || xl(r) || r.nodeType ? {
                trigger: r
            } : r, Zo);
            var s = r,
                l = s.onUpdate,
                o = s.toggleClass,
                a = s.id,
                u = s.onToggle,
                c = s.onRefresh,
                h = s.scrub,
                f = s.trigger,
                d = s.pin,
                g = s.pinSpacing,
                p = s.invalidateOnRefresh,
                x = s.anticipatePin,
                _ = s.onScrubComplete,
                m = s.onSnapComplete,
                v = s.once,
                y = s.snap,
                k = s.pinReparent,
                E = s.pinSpacer,
                T = s.containerAnimation,
                C = s.fastScrollEnd,
                O = s.preventOverlaps,
                N = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? jt : Ke,
                F = !h && h !== 0,
                z = Vt(r.scroller || Z),
                X = j.core.getCache(z),
                G = Xi(z),
                ne = ("pinType" in r ? r.pinType : ii(z, "pinType") || G && "fixed") === "fixed",
                K = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
                U = F && r.toggleActions.split(" "),
                R = "markers" in r ? r.markers : Zo.markers,
                D = G ? 0 : parseFloat(Tn(z)["border" + N.p2 + bs]) || 0,
                S = this,
                W = r.onRefreshInit && function () {
                    return r.onRefreshInit(S)
                },
                se = Uw(z, G, N),
                dt = Vw(z, G),
                ue = 0,
                je = 0,
                we = 0,
                _e = ci(z, N),
                Ct, ht, Nr, Pt, Nt, le, Ie, Ut, Zt, P, Jt, lr, Or, ze, or, Rr, mi, Ze, Mr, Fe, zn, yn, ar, qs, We, To, ur, Zi, Ji, zr, gi, ee, _i, Ln, Dn, An, vi, es, cr;
            if (S._startClamp = S._endClamp = !1, S._dir = N, x *= 45, S.scroller = z, S.scroll = T ? T.time.bind(T) : _e, Pt = _e(), S.vars = r, i = i || r.animation, "refreshPriority" in r && (p_ = 1, r.refreshPriority === -9999 && ($l = S)), X.tweenScroll = X.tweenScroll || {
                top: Hp(z, Ke),
                left: Hp(z, jt)
            }, S.tweenTo = Ct = X.tweenScroll[N.p], S.scrubDuration = function (L) {
                _i = xl(L) && L, _i ? ee ? ee.duration(L) : ee = j.to(i, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: _i,
                    paused: !0,
                    onComplete: function () {
                        return _ && _(S)
                    }
                }) : (ee && ee.progress(1).kill(), ee = 0)
            }, i && (i.vars.lazy = !1, i._initted && !S.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), S.animation = i.pause(), i.scrollTrigger = S, S.scrubDuration(h), zr = 0, a || (a = i.vars.id)), y && ((!Ci(y) || y.push) && (y = {
                snapTo: y
            }), "scrollBehavior" in ce.style && j.set(G ? [ce, ln] : z, {
                scrollBehavior: "auto"
            }), J.forEach(function (L) {
                return kt(L) && L.target === (G ? me.scrollingElement || ln : z) && (L.smooth = !1)
            }), Nr = kt(y.snapTo) ? y.snapTo : y.snapTo === "labels" ? Ww(i) : y.snapTo === "labelsDirectional" ? $w(i) : y.directional !== !1 ? function (L, $) {
                return Gd(y.snapTo)(L, wt() - je < 500 ? 0 : $.direction)
            } : j.utils.snap(y.snapTo), Ln = y.duration || {
                min: .1,
                max: 2
            }, Ln = Ci(Ln) ? Fl(Ln.min, Ln.max) : Fl(Ln, Ln), Dn = j.delayedCall(y.delay || _i / 2 || .1, function () {
                var L = _e(),
                    $ = wt() - je < 500,
                    B = Ct.tween;
                if (($ || Math.abs(S.getVelocity()) < 10) && !B && !Tu && ue !== L) {
                    var Y = (L - le) / ze,
                        Je = i && !F ? i.totalProgress() : Y,
                        re = $ ? 0 : (Je - gi) / (wt() - vl) * 1e3 || 0,
                        Be = j.utils.clamp(-Y, 1 - Y, rs(re / 2) * re / .185),
                        pt = Y + (y.inertia === !1 ? 0 : Be),
                        Le, xe, de = y,
                        jn = de.onStart,
                        Te = de.onInterrupt,
                        en = de.onComplete;
                    if (Le = Nr(pt, S), xl(Le) || (Le = pt), xe = Math.max(0, Math.round(le + Le * ze)), L <= Ie && L >= le && xe !== L) {
                        if (B && !B._initted && B.data <= rs(xe - L)) return;
                        y.inertia === !1 && (Be = Le - Y), Ct(xe, {
                            duration: Ln(rs(Math.max(rs(pt - Je), rs(Le - Je)) * .185 / re / .05 || 0)),
                            ease: y.ease || "power3",
                            data: rs(xe - L),
                            onInterrupt: function () {
                                return Dn.restart(!0) && Te && Te(S)
                            },
                            onComplete: function () {
                                S.update(), ue = _e(), i && !F && (ee ? ee.resetTo("totalProgress", Le, i._tTime / i._tDur) : i.progress(Le)), zr = gi = i && !F ? i.totalProgress() : S.progress, m && m(S), en && en(S)
                            }
                        }, L, Be * ze, xe - L - Be * ze), jn && jn(S, Ct.tween)
                    }
                } else S.isActive && ue !== L && Dn.restart(!0)
            }).pause()), a && (Nf[a] = S), f = S.trigger = Vt(f || d !== !0 && d), cr = f && f._gsap && f._gsap.stRevert, cr && (cr = cr(S)), d = d === !0 ? f : Vt(d), rn(o) && (o = {
                targets: f,
                className: o
            }), d && (g === !1 || g === kn || (g = !g && d.parentNode && d.parentNode.style && Tn(d.parentNode).display === "flex" ? !1 : $e), S.pin = d, ht = j.core.getCache(d), ht.spacer ? or = ht.pinState : (E && (E = Vt(E), E && !E.nodeType && (E = E.current || E.nativeElement), ht.spacerIsNative = !!E, E && (ht.spacerState = ea(E))), ht.spacer = Ze = E || me.createElement("div"), Ze.classList.add("pin-spacer"), a && Ze.classList.add("pin-spacer-" + a), ht.pinState = or = ea(d)), r.force3D !== !1 && j.set(d, {
                force3D: !0
            }), S.spacer = Ze = ht.spacer, Ji = Tn(d), qs = Ji[g + N.os2], Fe = j.getProperty(d), zn = j.quickSetter(d, N.a, Qe), fc(d, Ze, Ji), mi = ea(d)), R) {
                lr = Ci(R) ? Ap(R, jp) : jp, P = Jo("scroller-start", a, z, N, lr, 0), Jt = Jo("scroller-end", a, z, N, lr, 0, P), Mr = P["offset" + N.op.d2];
                var Zs = Vt(ii(z, "content") || z);
                Ut = this.markerStart = Jo("start", a, Zs, N, lr, Mr, 0, T), Zt = this.markerEnd = Jo("end", a, Zs, N, lr, Mr, 0, T), T && (es = j.quickSetter([Ut, Zt], N.a, Qe)), !ne && !(ir.length && ii(z, "fixedMarkers") === !0) && (Hw(G ? ce : z), j.set([P, Jt], {
                    force3D: !0
                }), To = j.quickSetter(P, N.a, Qe), Zi = j.quickSetter(Jt, N.a, Qe))
            }
            if (T) {
                var b = T.vars.onUpdate,
                    V = T.vars.onUpdateParams;
                T.eventCallback("onUpdate", function () {
                    S.update(0, 0, 1), b && b.apply(T, V || [])
                })
            }
            if (S.previous = function () {
                return q[q.indexOf(S) - 1]
            }, S.next = function () {
                return q[q.indexOf(S) + 1]
            }, S.revert = function (L, $) {
                if (!$) return S.kill(!0);
                var B = L !== !1 || !S.enabled,
                    Y = yt;
                B !== S.isReverted && (B && (An = Math.max(_e(), S.scroll.rec || 0), we = S.progress, vi = i && i.progress()), Ut && [Ut, Zt, P, Jt].forEach(function (Je) {
                    return Je.style.display = B ? "none" : "block"
                }), B && (yt = S, S.update(B)), d && (!k || !S.isActive) && (B ? bw(d, Ze, or) : fc(d, Ze, Tn(d), We)), B || S.update(B), yt = Y, S.isReverted = B)
            }, S.refresh = function (L, $, B, Y) {
                if (!((yt || !S.enabled) && !$)) {
                    if (d && L && On) {
                        tt(t, "scrollEnd", E_);
                        return
                    } !Dt && W && W(S), yt = S, Ct.tween && !B && (Ct.tween.kill(), Ct.tween = 0), ee && ee.pause(), p && i && (i.revert({
                        kill: !1
                    }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function (Lr) {
                        return Lr.vars.immediateRender && Lr.render(0, !0, !0)
                    }) : i.vars.immediateRender && i.render(0, !0, !0)), S.isReverted || S.revert(!0, !0), S._subPinOffset = !1;
                    var Je = se(),
                        re = dt(),
                        Be = T ? T.duration() : tr(z, N),
                        pt = ze <= .01 || !ze,
                        Le = 0,
                        xe = Y || 0,
                        de = Ci(B) ? B.end : r.end,
                        jn = r.endTrigger || f,
                        Te = Ci(B) ? B.start : r.start || (r.start === 0 || !f ? 0 : d ? "0 0" : "0 100%"),
                        en = S.pinnedContainer = r.pinnedContainer && Vt(r.pinnedContainer, S),
                        Yn = f && Math.max(0, q.indexOf(S)) || 0,
                        st = Yn,
                        lt, mt, yi, Eo, gt, be, Xn, Eu, qd, Js, bn, el, Co;
                    for (R && Ci(B) && (el = j.getProperty(P, N.p), Co = j.getProperty(Jt, N.p)); st-- > 0;) be = q[st], be.end || be.refresh(0, 1) || (yt = S), Xn = be.pin, Xn && (Xn === f || Xn === d || Xn === en) && !be.isReverted && (Js || (Js = []), Js.unshift(be), be.revert(!0, !0)), be !== q[st] && (Yn--, st--);
                    for (kt(Te) && (Te = Te(S)), Te = Mp(Te, "start", S), le = Up(Te, f, Je, N, _e(), Ut, P, S, re, D, ne, Be, T, S._startClamp && "_startClamp") || (d ? -.001 : 0), kt(de) && (de = de(S)), rn(de) && !de.indexOf("+=") && (~de.indexOf(" ") ? de = (rn(Te) ? Te.split(" ")[0] : "") + de : (Le = ya(de.substr(2), Je), de = rn(Te) ? Te : (T ? j.utils.mapRange(0, T.duration(), T.scrollTrigger.start, T.scrollTrigger.end, le) : le) + Le, jn = f)), de = Mp(de, "end", S), Ie = Math.max(le, Up(de || (jn ? "100% 0" : Be), jn, Je, N, _e() + Le, Zt, Jt, S, re, D, ne, Be, T, S._endClamp && "_endClamp")) || -.001, Le = 0, st = Yn; st--;) be = q[st] || {}, Xn = be.pin, Xn && be.start - be._pinPush <= le && !T && be.end > 0 && (lt = be.end - (S._startClamp ? Math.max(0, be.start) : be.start), (Xn === f && be.start - be._pinPush < le || Xn === en) && isNaN(Te) && (Le += lt * (1 - be.progress)), Xn === d && (xe += lt));
                    if (le += Le, Ie += Le, S._startClamp && (S._startClamp += Le), S._endClamp && !Dt && (S._endClamp = Ie || -.001, Ie = Math.min(Ie, tr(z, N))), ze = Ie - le || (le -= .01) && .001, pt && (we = j.utils.clamp(0, 1, j.utils.normalize(le, Ie, An))), S._pinPush = xe, Ut && Le && (lt = {}, lt[N.a] = "+=" + Le, en && (lt[N.p] = "-=" + _e()), j.set([Ut, Zt], lt)), d && !(Pf && S.end >= tr(z, N))) lt = Tn(d), Eo = N === Ke, yi = _e(), yn = parseFloat(Fe(N.a)) + xe, !Be && Ie > 1 && (bn = (G ? me.scrollingElement || ln : z).style, bn = {
                        style: bn,
                        value: bn["overflow" + N.a.toUpperCase()]
                    }, G && Tn(ce)["overflow" + N.a.toUpperCase()] !== "scroll" && (bn.style["overflow" + N.a.toUpperCase()] = "scroll")), fc(d, Ze, lt), mi = ea(d), mt = mr(d, !0), Eu = ne && ci(z, Eo ? jt : Ke)(), g ? (We = [g + N.os2, ze + xe + Qe], We.t = Ze, st = g === $e ? ru(d, N) + ze + xe : 0, st && (We.push(N.d, st + Qe), Ze.style.flexBasis !== "auto" && (Ze.style.flexBasis = st + Qe)), Ls(We), en && q.forEach(function (Lr) {
                        Lr.pin === en && Lr.vars.pinSpacing !== !1 && (Lr._subPinOffset = !0)
                    }), ne && _e(An)) : (st = ru(d, N), st && Ze.style.flexBasis !== "auto" && (Ze.style.flexBasis = st + Qe)), ne && (gt = {
                        top: mt.top + (Eo ? yi - le : Eu) + Qe,
                        left: mt.left + (Eo ? Eu : yi - le) + Qe,
                        boxSizing: "border-box",
                        position: "fixed"
                    }, gt[Fi] = gt["max" + bs] = Math.ceil(mt.width) + Qe, gt[Bi] = gt["max" + Qd] = Math.ceil(mt.height) + Qe, gt[kn] = gt[kn + Hl] = gt[kn + Ul] = gt[kn + Wl] = gt[kn + Vl] = "0", gt[$e] = lt[$e], gt[$e + Hl] = lt[$e + Hl], gt[$e + Ul] = lt[$e + Ul], gt[$e + Wl] = lt[$e + Wl], gt[$e + Vl] = lt[$e + Vl], Rr = Gw(or, gt, k), Dt && _e(0)), i ? (qd = i._initted, lc(1), i.render(i.duration(), !0, !0), ar = Fe(N.a) - yn + ze + xe, ur = Math.abs(ze - ar) > 1, ne && ur && Rr.splice(Rr.length - 2, 2), i.render(0, !0, !0), qd || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), lc(0)) : ar = ze, bn && (bn.value ? bn.style["overflow" + N.a.toUpperCase()] = bn.value : bn.style.removeProperty("overflow-" + N.a));
                    else if (f && _e() && !T)
                        for (mt = f.parentNode; mt && mt !== ce;) mt._pinOffset && (le -= mt._pinOffset, Ie -= mt._pinOffset), mt = mt.parentNode;
                    Js && Js.forEach(function (Lr) {
                        return Lr.revert(!1, !0)
                    }), S.start = le, S.end = Ie, Pt = Nt = Dt ? An : _e(), !T && !Dt && (Pt < An && _e(An), S.scroll.rec = 0), S.revert(!1, !0), je = wt(), Dn && (ue = -1, Dn.restart(!0)), yt = 0, i && F && (i._initted || vi) && i.progress() !== vi && i.progress(vi || 0, !0).render(i.time(), !0, !0), (pt || we !== S.progress || T || p || i && !i._initted) && (i && !F && (i._initted || we || i.vars.immediateRender !== !1) && i.totalProgress(T && le < -.001 && !we ? j.utils.normalize(le, Ie, 0) : we, !0), S.progress = pt || (Pt - le) / ze === we ? 0 : we), d && g && (Ze._pinOffset = Math.round(S.progress * ar)), ee && ee.invalidate(), isNaN(el) || (el -= j.getProperty(P, N.p), Co -= j.getProperty(Jt, N.p), ta(P, N, el), ta(Ut, N, el - (Y || 0)), ta(Jt, N, Co), ta(Zt, N, Co - (Y || 0))), pt && !Dt && S.update(), c && !Dt && !Or && (Or = !0, c(S), Or = !1)
                }
            }, S.getVelocity = function () {
                return (_e() - Nt) / (wt() - vl) * 1e3 || 0
            }, S.endAnimation = function () {
                fl(S.callbackAnimation), i && (ee ? ee.progress(1) : i.paused() ? F || fl(i, S.direction < 0, 1) : fl(i, i.reversed()))
            }, S.labelToScroll = function (L) {
                return i && i.labels && (le || S.refresh() || le) + i.labels[L] / i.duration() * ze || 0
            }, S.getTrailing = function (L) {
                var $ = q.indexOf(S),
                    B = S.direction > 0 ? q.slice(0, $).reverse() : q.slice($ + 1);
                return (rn(L) ? B.filter(function (Y) {
                    return Y.vars.preventOverlaps === L
                }) : B).filter(function (Y) {
                    return S.direction > 0 ? Y.end <= le : Y.start >= Ie
                })
            }, S.update = function (L, $, B) {
                if (!(T && !B && !L)) {
                    var Y = Dt === !0 ? An : S.scroll(),
                        Je = L ? 0 : (Y - le) / ze,
                        re = Je < 0 ? 0 : Je > 1 ? 1 : Je || 0,
                        Be = S.progress,
                        pt, Le, xe, de, jn, Te, en, Yn;
                    if ($ && (Nt = Pt, Pt = T ? _e() : Y, y && (gi = zr, zr = i && !F ? i.totalProgress() : re)), x && d && !yt && !Qo && On && (!re && le < Y + (Y - Nt) / (wt() - vl) * x ? re = 1e-4 : re === 1 && Ie > Y + (Y - Nt) / (wt() - vl) * x && (re = .9999)), re !== Be && S.enabled) {
                        if (pt = S.isActive = !!re && re < 1, Le = !!Be && Be < 1, Te = pt !== Le, jn = Te || !!re != !!Be, S.direction = re > Be ? 1 : -1, S.progress = re, jn && !yt && (xe = re && !Be ? 0 : re === 1 ? 1 : Be === 1 ? 2 : 3, F && (de = !Te && U[xe + 1] !== "none" && U[xe + 1] || U[xe], Yn = i && (de === "complete" || de === "reset" || de in i))), O && (Te || Yn) && (Yn || h || !i) && (kt(O) ? O(S) : S.getTrailing(O).forEach(function (yi) {
                            return yi.endAnimation()
                        })), F || (ee && !yt && !Qo ? (ee._dp._time - ee._start !== ee._time && ee.render(ee._dp._time - ee._start), ee.resetTo ? ee.resetTo("totalProgress", re, i._tTime / i._tDur) : (ee.vars.totalProgress = re, ee.invalidate().restart())) : i && i.totalProgress(re, !!(yt && (je || L)))), d) {
                            if (L && g && (Ze.style[g + N.os2] = qs), !ne) zn(wl(yn + ar * re));
                            else if (jn) {
                                if (en = !L && re > Be && Ie + 1 > Y && Y + 1 >= tr(z, N), k)
                                    if (!L && (pt || en)) {
                                        var st = mr(d, !0),
                                            lt = Y - le;
                                        Vp(d, ce, st.top + (N === Ke ? lt : 0) + Qe, st.left + (N === Ke ? 0 : lt) + Qe)
                                    } else Vp(d, Ze);
                                Ls(pt || en ? Rr : mi), ur && re < 1 && pt || zn(yn + (re === 1 && !en ? ar : 0))
                            }
                        }
                        y && !Ct.tween && !yt && !Qo && Dn.restart(!0), o && (Te || v && re && (re < 1 || !oc)) && go(o.targets).forEach(function (yi) {
                            return yi.classList[pt || v ? "add" : "remove"](o.className)
                        }), l && !F && !L && l(S), jn && !yt ? (F && (Yn && (de === "complete" ? i.pause().totalProgress(1) : de === "reset" ? i.restart(!0).pause() : de === "restart" ? i.restart(!0) : i[de]()), l && l(S)), (Te || !oc) && (u && Te && uc(S, u), K[xe] && uc(S, K[xe]), v && (re === 1 ? S.kill(!1, 1) : K[xe] = 0), Te || (xe = re === 1 ? 1 : 3, K[xe] && uc(S, K[xe]))), C && !pt && Math.abs(S.getVelocity()) > (xl(C) ? C : 2500) && (fl(S.callbackAnimation), ee ? ee.progress(1) : fl(i, de === "reverse" ? 1 : !re, 1))) : F && l && !yt && l(S)
                    }
                    if (Zi) {
                        var mt = T ? Y / T.duration() * (T._caScrollDist || 0) : Y;
                        To(mt + (P._isFlipped ? 1 : 0)), Zi(mt)
                    }
                    es && es(-Y / T.duration() * (T._caScrollDist || 0))
                }
            }, S.enable = function (L, $) {
                S.enabled || (S.enabled = !0, tt(z, "resize", Sl), G || tt(z, "scroll", is), W && tt(t, "refreshInit", W), L !== !1 && (S.progress = we = 0, Pt = Nt = ue = _e()), $ !== !1 && S.refresh())
            }, S.getTween = function (L) {
                return L && Ct ? Ct.tween : ee
            }, S.setPositions = function (L, $, B, Y) {
                if (T) {
                    var Je = T.scrollTrigger,
                        re = T.duration(),
                        Be = Je.end - Je.start;
                    L = Je.start + Be * L / re, $ = Je.start + Be * $ / re
                }
                S.refresh(!1, !1, {
                    start: zp(L, B && !!S._startClamp),
                    end: zp($, B && !!S._endClamp)
                }, Y), S.update()
            }, S.adjustPinSpacing = function (L) {
                if (We && L) {
                    var $ = We.indexOf(N.d) + 1;
                    We[$] = parseFloat(We[$]) + L + Qe, We[1] = parseFloat(We[1]) + L + Qe, Ls(We)
                }
            }, S.disable = function (L, $) {
                if (L !== !1 && S.revert(!0, !0), S.enabled && (S.enabled = S.isActive = !1, $ || ee && ee.pause(), An = 0, ht && (ht.uncache = 1), W && et(t, "refreshInit", W), Dn && (Dn.pause(), Ct.tween && Ct.tween.kill() && (Ct.tween = 0)), !G)) {
                    for (var B = q.length; B--;)
                        if (q[B].scroller === z && q[B] !== S) return;
                    et(z, "resize", Sl), G || et(z, "scroll", is)
                }
            }, S.kill = function (L, $) {
                S.disable(L, $), ee && !$ && ee.kill(), a && delete Nf[a];
                var B = q.indexOf(S);
                B >= 0 && q.splice(B, 1), B === Lt && xa > 0 && Lt--, B = 0, q.forEach(function (Y) {
                    return Y.scroller === S.scroller && (B = 1)
                }), B || Dt || (S.scroll.rec = 0), i && (i.scrollTrigger = null, L && i.revert({
                    kill: !1
                }), $ || i.kill()), Ut && [Ut, Zt, P, Jt].forEach(function (Y) {
                    return Y.parentNode && Y.parentNode.removeChild(Y)
                }), $l === S && ($l = 0), d && (ht && (ht.uncache = 1), B = 0, q.forEach(function (Y) {
                    return Y.pin === d && B++
                }), B || (ht.spacer = 0)), r.onKill && r.onKill(S)
            }, q.push(S), S.enable(!1, !1), cr && cr(S), i && i.add && !ze) {
                var ae = S.update;
                S.update = function () {
                    S.update = ae, J.cache++, le || Ie || S.refresh()
                }, j.delayedCall(.01, S.update), ze = .01, le = Ie = 0
            } else S.refresh();
            d && Xw()
        }, t.register = function (r) {
            return ss || (j = r || y_(), v_() && window.document && t.enable(), ss = yl), ss
        }, t.defaults = function (r) {
            if (r)
                for (var i in r) Zo[i] = r[i];
            return Zo
        }, t.disable = function (r, i) {
            yl = 0, q.forEach(function (l) {
                return l[i ? "kill" : "disable"](r)
            }), et(Z, "wheel", is), et(me, "scroll", is), clearInterval(bo), et(me, "touchcancel", qn), et(ce, "touchstart", qn), Ko(et, me, "pointerdown,touchstart,mousedown", Lp), Ko(et, me, "pointerup,touchend,mouseup", Dp), nu.kill(), Go(et);
            for (var s = 0; s < J.length; s += 3) qo(et, J[s], J[s + 1]), qo(et, J[s], J[s + 2])
        }, t.enable = function () {
            if (Z = window, me = document, ln = me.documentElement, ce = me.body, j && (go = j.utils.toArray, Fl = j.utils.clamp, Cf = j.core.context || qn, lc = j.core.suppressOverwrites || qn, $d = Z.history.scrollRestoration || "auto", Of = Z.pageYOffset || 0, j.core.globals("ScrollTrigger", t), ce)) {
                yl = 1, zs = document.createElement("div"), zs.style.height = "100vh", zs.style.position = "absolute", O_(), Bw(), He.register(j), t.isTouch = He.isTouch, jr = He.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ef = He.isTouch === 1, tt(Z, "wheel", is), Wd = [Z, me, ln, ce], j.matchMedia ? (t.matchMedia = function (u) {
                    var c = j.matchMedia(),
                        h;
                    for (h in u) c.add(h, u[h]);
                    return c
                }, j.addEventListener("matchMediaInit", function () {
                    P_(), Kd()
                }), j.addEventListener("matchMediaRevert", function () {
                    return C_()
                }), j.addEventListener("matchMedia", function () {
                    Mi(0, 1), Qi("matchMedia")
                }), j.matchMedia().add("(orientation: portrait)", function () {
                    return cc(), cc
                })) : console.warn("Requires GSAP 3.11.0 or later"), cc(), tt(me, "scroll", is);
                var r = ce.hasAttribute("style"),
                    i = ce.style,
                    s = i.borderTopStyle,
                    l = j.core.Animation.prototype,
                    o, a;
                for (l.revert || Object.defineProperty(l, "revert", {
                    value: function () {
                        return this.time(-.01, !0)
                    }
                }), i.borderTopStyle = "solid", o = mr(ce), Ke.m = Math.round(o.top + Ke.sc()) || 0, jt.m = Math.round(o.left + jt.sc()) || 0, s ? i.borderTopStyle = s : i.removeProperty("border-top-style"), r || (ce.setAttribute("style", ""), ce.removeAttribute("style")), bo = setInterval(Ip, 250), j.delayedCall(.5, function () {
                    return Qo = 0
                }), tt(me, "touchcancel", qn), tt(ce, "touchstart", qn), Ko(tt, me, "pointerdown,touchstart,mousedown", Lp), Ko(tt, me, "pointerup,touchend,mouseup", Dp), Tf = j.utils.checkPrefix("transform"), Sa.push(Tf), ss = wt(), nu = j.delayedCall(.2, Mi).pause(), ls = [me, "visibilitychange", function () {
                    var u = Z.innerWidth,
                        c = Z.innerHeight;
                    me.hidden ? (Op = u, Rp = c) : (Op !== u || Rp !== c) && Sl()
                }, me, "DOMContentLoaded", Mi, Z, "load", Mi, Z, "resize", Sl], Go(tt), q.forEach(function (u) {
                    return u.enable(0, 1)
                }), a = 0; a < J.length; a += 3) qo(et, J[a], J[a + 1]), qo(et, J[a], J[a + 2])
            }
        }, t.config = function (r) {
            "limitCallbacks" in r && (oc = !!r.limitCallbacks);
            var i = r.syncInterval;
            i && clearInterval(bo) || (bo = i) && setInterval(Ip, i), "ignoreMobileResize" in r && (Ef = t.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (Go(et) || Go(tt, r.autoRefreshEvents || "none"), m_ = (r.autoRefreshEvents + "").indexOf("resize") === -1)
        }, t.scrollerProxy = function (r, i) {
            var s = Vt(r),
                l = J.indexOf(s),
                o = Xi(s);
            ~l && J.splice(l, o ? 6 : 2), i && (o ? ir.unshift(Z, i, ce, i, ln, i) : ir.unshift(s, i))
        }, t.clearMatchMedia = function (r) {
            q.forEach(function (i) {
                return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
            })
        }, t.isInViewport = function (r, i, s) {
            var l = (rn(r) ? Vt(r) : r).getBoundingClientRect(),
                o = l[s ? Fi : Bi] * i || 0;
            return s ? l.right - o > 0 && l.left + o < Z.innerWidth : l.bottom - o > 0 && l.top + o < Z.innerHeight
        }, t.positionInViewport = function (r, i, s) {
            rn(r) && (r = Vt(r));
            var l = r.getBoundingClientRect(),
                o = l[s ? Fi : Bi],
                a = i == null ? o / 2 : i in iu ? iu[i] * o : ~i.indexOf("%") ? parseFloat(i) * o / 100 : parseFloat(i) || 0;
            return s ? (l.left + a) / Z.innerWidth : (l.top + a) / Z.innerHeight
        }, t.killAll = function (r) {
            if (q.slice(0).forEach(function (s) {
                return s.vars.id !== "ScrollSmoother" && s.kill()
            }), r !== !0) {
                var i = bi.killAll || [];
                bi = {}, i.forEach(function (s) {
                    return s()
                })
            }
        }, t
    }();
Q.version = "3.14.2";
Q.saveStyles = function (t) {
    return t ? go(t).forEach(function (e) {
        if (e && e.style) {
            var n = tn.indexOf(e);
            n >= 0 && tn.splice(n, 5), tn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), j.core.getCache(e), Cf())
        }
    }) : tn
};
Q.revert = function (t, e) {
    return Kd(!t, e)
};
Q.create = function (t, e) {
    return new Q(t, e)
};
Q.refresh = function (t) {
    return t ? Sl(!0) : (ss || Q.register()) && Mi(!0)
};
Q.update = function (t) {
    return ++J.cache && wr(t === !0 ? 2 : 0)
};
Q.clearScrollMemory = N_;
Q.maxScroll = function (t, e) {
    return tr(t, e ? jt : Ke)
};
Q.getScrollFunc = function (t, e) {
    return ci(Vt(t), e ? jt : Ke)
};
Q.getById = function (t) {
    return Nf[t]
};
Q.getAll = function () {
    return q.filter(function (t) {
        return t.vars.id !== "ScrollSmoother"
    })
};
Q.isScrolling = function () {
    return !!On
};
Q.snapDirectional = Gd;
Q.addEventListener = function (t, e) {
    var n = bi[t] || (bi[t] = []);
    ~n.indexOf(e) || n.push(e)
};
Q.removeEventListener = function (t, e) {
    var n = bi[t],
        r = n && n.indexOf(e);
    r >= 0 && n.splice(r, 1)
};
Q.batch = function (t, e) {
    var n = [],
        r = {},
        i = e.interval || .016,
        s = e.batchMax || 1e9,
        l = function (u, c) {
            var h = [],
                f = [],
                d = j.delayedCall(i, function () {
                    c(h, f), h = [], f = []
                }).pause();
            return function (g) {
                h.length || d.restart(!0), h.push(g.trigger), f.push(g), s <= h.length && d.progress(1)
            }
        },
        o;
    for (o in e) r[o] = o.substr(0, 2) === "on" && kt(e[o]) && o !== "onRefreshInit" ? l(o, e[o]) : e[o];
    return kt(s) && (s = s(), tt(Q, "refresh", function () {
        return s = e.batchMax()
    })), go(t).forEach(function (a) {
        var u = {};
        for (o in r) u[o] = r[o];
        u.trigger = a, n.push(Q.create(u))
    }), n
};
var Wp = function (e, n, r, i) {
    return n > i ? e(i) : n < 0 && e(0), r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
},
    dc = function t(e, n) {
        n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (He.isTouch ? " pinch-zoom" : "") : "none", e === ln && t(ce, n)
    },
    na = {
        auto: 1,
        scroll: 1
    },
    qw = function (e) {
        var n = e.event,
            r = e.target,
            i = e.axis,
            s = (n.changedTouches ? n.changedTouches[0] : n).target,
            l = s._gsap || j.core.getCache(s),
            o = wt(),
            a;
        if (!l._isScrollT || o - l._isScrollT > 2e3) {
            for (; s && s !== ce && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(na[(a = Tn(s)).overflowY] || na[a.overflowX]));) s = s.parentNode;
            l._isScroll = s && s !== r && !Xi(s) && (na[(a = Tn(s)).overflowY] || na[a.overflowX]), l._isScrollT = o
        } (l._isScroll || i === "x") && (n.stopPropagation(), n._gsapAllow = !0)
    },
    M_ = function (e, n, r, i) {
        return He.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: n,
            onWheel: i = i && qw,
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function () {
                return r && tt(me, He.eventTypes[0], Yp, !1, !0)
            },
            onDisable: function () {
                return et(me, He.eventTypes[0], Yp, !0)
            }
        })
    },
    Zw = /(input|label|select|textarea)/i,
    $p, Yp = function (e) {
        var n = Zw.test(e.target.tagName);
        (n || $p) && (e._gsapAllow = !0, $p = n)
    },
    Jw = function (e) {
        Ci(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var n = e,
            r = n.normalizeScrollX,
            i = n.momentum,
            s = n.allowNestedScroll,
            l = n.onRelease,
            o, a, u = Vt(e.target) || ln,
            c = j.core.globals().ScrollSmoother,
            h = c && c.get(),
            f = jr && (e.content && Vt(e.content) || h && e.content !== !1 && !h.smooth() && h.content()),
            d = ci(u, Ke),
            g = ci(u, jt),
            p = 1,
            x = (He.isTouch && Z.visualViewport ? Z.visualViewport.scale * Z.visualViewport.width : Z.outerWidth) / Z.innerWidth,
            _ = 0,
            m = kt(i) ? function () {
                return i(o)
            } : function () {
                return i || 2.8
            },
            v, y, k = M_(u, e.type, !0, s),
            E = function () {
                return y = !1
            },
            T = qn,
            C = qn,
            O = function () {
                a = tr(u, Ke), C = Fl(jr ? 1 : 0, a), r && (T = Fl(0, tr(u, jt))), v = Ui
            },
            N = function () {
                f._gsap.y = wl(parseFloat(f._gsap.y) + d.offset) + "px", f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)", d.offset = d.cacheID = 0
            },
            F = function () {
                if (y) {
                    requestAnimationFrame(E);
                    var R = wl(o.deltaY / 2),
                        D = C(d.v - R);
                    if (f && D !== d.v + d.offset) {
                        d.offset = D - d.v;
                        var S = wl((parseFloat(f && f._gsap.y) || 0) - d.offset);
                        f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + S + ", 0, 1)", f._gsap.y = S + "px", d.cacheID = J.cache, wr()
                    }
                    return !0
                }
                d.offset && N(), y = !0
            },
            z, X, G, ne, K = function () {
                O(), z.isActive() && z.vars.scrollY > a && (d() > a ? z.progress(1) && d(a) : z.resetTo("scrollY", a))
            };
        return f && j.set(f, {
            y: "+=0"
        }), e.ignoreCheck = function (U) {
            return jr && U.type === "touchmove" && F() || p > 1.05 && U.type !== "touchstart" || o.isGesturing || U.touches && U.touches.length > 1
        }, e.onPress = function () {
            y = !1;
            var U = p;
            p = wl((Z.visualViewport && Z.visualViewport.scale || 1) / x), z.pause(), U !== p && dc(u, p > 1.01 ? !0 : r ? !1 : "x"), X = g(), G = d(), O(), v = Ui
        }, e.onRelease = e.onGestureStart = function (U, R) {
            if (d.offset && N(), !R) ne.restart(!0);
            else {
                J.cache++;
                var D = m(),
                    S, W;
                r && (S = g(), W = S + D * .05 * -U.velocityX / .227, D *= Wp(g, S, W, tr(u, jt)), z.vars.scrollX = T(W)), S = d(), W = S + D * .05 * -U.velocityY / .227, D *= Wp(d, S, W, tr(u, Ke)), z.vars.scrollY = C(W), z.invalidate().duration(D).play(.01), (jr && z.vars.scrollY >= a || S >= a - 1) && j.to({}, {
                    onUpdate: K,
                    duration: D
                })
            }
            l && l(U)
        }, e.onWheel = function () {
            z._ts && z.pause(), wt() - _ > 1e3 && (v = 0, _ = wt())
        }, e.onChange = function (U, R, D, S, W) {
            if (Ui !== v && O(), R && r && g(T(S[2] === R ? X + (U.startX - U.x) : g() + R - S[1])), D) {
                d.offset && N();
                var se = W[2] === D,
                    dt = se ? G + U.startY - U.y : d() + D - W[1],
                    ue = C(dt);
                se && dt !== ue && (G += ue - dt), d(ue)
            } (D || R) && wr()
        }, e.onEnable = function () {
            dc(u, r ? !1 : "x"), Q.addEventListener("refresh", K), tt(Z, "resize", K), d.smooth && (d.target.style.scrollBehavior = "auto", d.smooth = g.smooth = !1), k.enable()
        }, e.onDisable = function () {
            dc(u, !0), et(Z, "resize", K), Q.removeEventListener("refresh", K), k.kill()
        }, e.lockAxis = e.lockAxis !== !1, o = new He(e), o.iOS = jr, jr && !d() && d(1), jr && j.ticker.add(qn), ne = o._dc, z = j.to(o, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: r ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: R_(d, d(), function () {
                    return z.pause()
                })
            },
            onUpdate: wr,
            onComplete: ne.vars.onComplete
        }), o
    };
Q.sort = function (t) {
    if (kt(t)) return q.sort(t);
    var e = Z.pageYOffset || 0;
    return Q.getAll().forEach(function (n) {
        return n._sortY = n.trigger ? e + n.trigger.getBoundingClientRect().top : n.start + Z.innerHeight
    }), q.sort(t || function (n, r) {
        return (n.vars.refreshPriority || 0) * -1e6 + (n.vars.containerAnimation ? 1e6 : n._sortY) - ((r.vars.containerAnimation ? 1e6 : r._sortY) + (r.vars.refreshPriority || 0) * -1e6)
    })
};
Q.observe = function (t) {
    return new He(t)
};
Q.normalizeScroll = function (t) {
    if (typeof t > "u") return Mt;
    if (t === !0 && Mt) return Mt.enable();
    if (t === !1) {
        Mt && Mt.kill(), Mt = t;
        return
    }
    var e = t instanceof He ? t : Jw(t);
    return Mt && Mt.target === e.target && Mt.kill(), Xi(e.target) && (Mt = e), e
};
Q.core = {
    _getVelocityProp: kf,
    _inputObserver: M_,
    _scrollers: J,
    _proxies: ir,
    bridge: {
        ss: function () {
            On || Qi("scrollStart"), On = wt()
        },
        ref: function () {
            return yt
        }
    }
};
y_() && j.registerPlugin(Q);

function ex({
    isOpen: t,
    onToggle: e
}) {
    const n = H.useRef(null),
        r = H.useRef(null),
        i = H.useRef(null),
        s = H.useRef(null),
        l = H.useRef([]),
        o = H.useRef(null),
        [a, u] = H.useState(!1),
        [c, h] = H.useState(!1),
        [f, d] = H.useState(!1);
    H.useEffect(() => {
        const p = () => {
            const x = document.getElementById("home"),
                _ = x ? x.getBoundingClientRect().bottom + window.scrollY : window.innerHeight;
            u(window.scrollY >= _)
        };
        return window.addEventListener("scroll", p, {
            passive: !0
        }), p(), () => window.removeEventListener("scroll", p)
    }, []), H.useEffect(() => {
        const p = Ee.context(() => {
            t ? (h(!0), d(!0), Ee.timeline({
                onComplete: () => h(!1)
            }).to(i.current, {
                opacity: 0,
                scale: .8,
                duration: .3,
                ease: "power2.in"
            }).to(n.current, {
                width: 60,
                height: 60,
                borderRadius: "50%",
                duration: .4,
                ease: "power2.inOut"
            }, "-=0.1").to(r.current, {
                opacity: 1,
                scale: 1,
                rotation: 360,
                duration: .6,
                ease: "back.out(1.7)"
            }, "-=0.2").to(s.current, {
                opacity: 1,
                y: 0,
                duration: .5,
                ease: "power3.out"
            }, "-=0.3").to(l.current, {
                opacity: 1,
                y: 0,
                stagger: .08,
                duration: .4,
                ease: "back.out(1.7)"
            }, "-=0.3")) : f && (h(!0), Ee.timeline({
                onComplete: () => {
                    h(!1), d(!1)
                }
            }).to(l.current, {
                opacity: 0,
                y: -20,
                stagger: {
                    each: .05,
                    from: "end"
                },
                duration: .3,
                ease: "power2.in"
            }).to(s.current, {
                opacity: 0,
                y: -20,
                duration: .4,
                ease: "power3.in"
            }, "-=0.2").to(r.current, {
                opacity: 0,
                scale: .5,
                rotation: 0,
                duration: .4,
                ease: "back.in(1.7)"
            }, "-=0.2").to(n.current, {
                width: "auto",
                height: "auto",
                borderRadius: "2px",
                duration: .4,
                ease: "power2.inOut"
            }, "-=0.1").to(i.current, {
                opacity: 1,
                scale: 1,
                duration: .3,
                ease: "power2.out"
            }, "-=0.1"))
        });
        return () => p.revert()
    }, [t, f]);
    const g = [{
        label: "Stages",
        id: "stages"
    }, {
        label: "About",
        id: "about"
    }, {
        label: "Location",
        id: "location"
    }, {
        label: "Tickets",
        id: "tickets"
    }, {
        label: "Experience",
        id: "experience"
    }, {
        label: "Ways to join",
        id: "ways-to-join"
    }, {
        label: "Gallery",
        id: "gallery"
    }, {
        label: "FAQ",
        id: "faq"
    }];
    return w.jsxs("nav", {
        ref: o,
        className: `navigation-top${a ? " nav-visible" : " nav-hidden"}`,
        children: [w.jsxs("div", {
            className: "nav-top-buttons-wrapper",
            children: [w.jsx("a", {
                href: "#tickets",
                onClick: _ => {
                    _.preventDefault();
                    const m = document.getElementById("tickets");
                    m && (window._lenis ? window._lenis.scrollTo(m, {
                        offset: -80
                    }) : m.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    }))
                },
                className: "nav-ticket-btn",
                children: "GET TICKET"
            }), w.jsxs("button", {
                ref: n,
                className: "menu-toggle",
                onClick: e,
                "aria-label": t ? "Close menu" : "Open menu",
                children: [w.jsx("span", {
                    ref: i,
                    className: "menu-text",
                    children: "Menu"
                }), w.jsx("img", {
                    ref: r,
                    src: "/assets/nav-logo.svg",
                    alt: "Otkrice",
                    className: "menu-logo"
                })]
            })]
        }), w.jsxs("div", {
            ref: s,
            className: `menu-items ${t || c ? "active" : ""} ${t ? "open" : "closed"}`,
            onClick: _ => {
                _.target === s.current && e()
            },
            children: [w.jsxs("ul", {
                className: "menu-list",
                children: [
                    w.jsx("li", {
                        className: "close-btn-li",
                        children: w.jsx("button", {
                            className: "menu-close-btn",
                            onClick: e,
                            children: "×"
                        })
                    }),
                    ...g.map((p, x) => w.jsx("li", {
                        ref: _ => l.current[x] = _,
                        children: w.jsx("a", {
                            href: `#${p.id}`,
                            onClick: _ => {
                                _.preventDefault();
                                const m = document.getElementById(p.id);
                                m && (window._lenis ? window._lenis.scrollTo(m, {
                                    offset: -80
                                }) : m.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                })), e()
                            },
                            children: p.label
                        })
                    }, p.id))
                ]
            })]
        })]
    })
}

function tx({
    onComplete: t
}) {
    const e = H.useRef(null),
        n = H.useRef(null);
    return H.useEffect(() => {
        const i = Ee.timeline({
            onComplete: () => {
                t && t()
            }
        });
        Ee.set(n.current, {
            opacity: 0,
            scale: .8
        }), i.to(n.current, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out"
        }).to(n.current, {
            scale: 1.05,
            opacity: .8,
            duration: 1.2,
            repeat: 2,
            yoyo: !0,
            ease: "sine.inOut"
        }).to(n.current, {
            scale: 1,
            opacity: 1,
            duration: .8,
            ease: "power2.inOut"
        }).to(e.current, {
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut"
        }).set(e.current, {
            display: "none"
        })
    }, []), w.jsx("div", {
        ref: e,
        className: "loading-wrapper",
        children: w.jsx("img", {
            ref: n,
            src: "/assets/logo-otkrice.svg",
            className: "loading-logo",
            alt: "Otkriće Logo"
        })
    })
}
Ee.registerPlugin(Q);
const nx = "/assets/logo-otkrice.svg",
    Xp = [{
        src: "/assets/images/image25.webp",
        size: "small",
        track: "middle",
        delay: 0,
        speed: 1.4
    }, {
        src: "/assets/images/image2.webp",
        size: "small",
        track: "top",
        delay: .1,
        speed: 1.4
    }, {
        src: "/assets/images/image35.webp",
        size: "small",
        track: "bottom",
        delay: .2,
        speed: 1.5
    }, {
        src: "/assets/images/image4.webp",
        size: "small",
        track: "middle",
        delay: .3,
        speed: 1.3
    }, {
        src: "/assets/images/image1.webp",
        size: "small",
        track: "top",
        delay: .4,
        speed: 1
    }],
    rx = {
        top: {
            y: 5,
            align: "top"
        },
        middle: {
            y: 50,
            align: "center"
        },
        bottom: {
            y: 95,
            align: "bottom"
        }
    };

function ix() {
    const t = H.useRef(null),
        e = H.useRef([]),
        n = H.useRef(null);
    H.useEffect(() => {
        const i = Ee.context(() => {
            Ee.fromTo(".hero-corner-block", {
                opacity: 0,
                y: 18
            }, {
                opacity: 1,
                y: 0,
                stagger: .12,
                duration: 1.3,
                ease: "power3.out",
                delay: .5
            }), Ee.fromTo(".hero-center", {
                opacity: 0,
                scale: .9,
                filter: "blur(12px)"
            }, {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 1.8,
                ease: "expo.out",
                delay: .6
            });
            if (window.innerWidth > 768) {
                const s = window.innerHeight * 5;
                Q.create({
                    trigger: t.current,
                    start: "top top",
                    end: `+=${s}`,
                    pin: !0,
                    scrub: 1,
                    onUpdate: l => {
                        const o = l.progress;
                        if (e.current.forEach((a, u) => {
                            if (!a) return;
                            const c = Xp[u],
                                h = Math.max(0, (o - c.delay) / (1 - c.delay)),
                                f = Math.min(1, h * c.speed),
                                d = 120,
                                g = -30;
                            let p;
                            u === 0 ? p = 90 + (g - 90) * f : p = d + (g - d) * f;
                            const x = rx[c.track],
                                _ = x.y;
                            a.style.left = `${p}%`, a.style.top = `${_}%`, x.align === "top" ? a.style.transform = "translateY(0)" : x.align === "center" ? a.style.transform = "translateY(-50%)" : x.align === "bottom" && (a.style.transform = "translateY(-100%)");
                            let m = 1;
                            p > 100 ? m = Math.max(0, (120 - p) / 20) : p < 0 && (m = Math.max(0, (p + 30) / 30)), a.style.opacity = m
                        }), n.current) {
                            const a = Math.max(0, 1 - o * 2),
                                u = 1 - o * .3;
                            n.current.style.opacity = a, n.current.style.transform = `translate(-50%, -50%) scale(${u})`
                        }
                    }
                })
            }
        }, t);
        return () => i.revert()
    }, []);
    const r = i => {
        const s = document.getElementById(i);
        s && (window._lenis ? window._lenis.scrollTo(s, {
            offset: -80
        }) : s.scrollIntoView({
            behavior: "smooth"
        }))
    };
    return w.jsx("section", {
        ref: t,
        id: "home",
        className: "hero-p5",
        children: w.jsxs("div", {
            className: "hero-frame",
            children: [w.jsx("img", {
                className: "hero-video-bg",
                src: "/assets/background-animation-opt.gif",
                alt: "Background animation"
            }), w.jsx("div", {
                className: "hero-carousel",
                children: Xp.map((i, s) => w.jsx("div", {
                    ref: l => e.current[s] = l,
                    className: `hero-carousel-item hero-carousel-item--${i.size}`,
                    children: w.jsx("img", {
                        src: i.src,
                        alt: `Festival moment ${s + 1}`
                    })
                }, s))
            }), w.jsxs("div", {
                className: "hero-corner-block hero-top-left",
                children: [w.jsx("p", {
                    className: "hero-site-sub",
                    children: "Immersive music and visual art festival"
                })]
            }), w.jsxs("div", {
                className: "hero-corner-block hero-top-right",
                children: [w.jsx("p", {
                    className: "hero-corner-val",
                    children: "14–16 August"
                })]
            }), w.jsx("div", {
                className: "hero-corner-block hero-left-mid",
                children: w.jsx("ul", {
                    className: "hero-nav-list",
                    children: [
                        ["Stages", "stages"],
                        ["About", "about"],
                        ["Location", "location"],
                        ["Tickets", "tickets"],
                        ["Experience", "experience"],
                        ["Ways to Join", "ways-to-join"],
                        ["Gallery", "gallery"],
                        ["FAQ", "faq"]
                    ].map(([i, s]) => w.jsx("li", {
                        children: w.jsx("a", {
                            href: `#${s}`,
                            onClick: l => {
                                l.preventDefault(), r(s)
                            },
                            children: i
                        })
                    }, s))
                })
            }), w.jsxs("div", {
                ref: n,
                className: "hero-center",
                children: [w.jsx("img", {
                    src: nx,
                    alt: "Otkriće Festival",
                    className: "hero-wordmark"
                }), w.jsx("p", {
                    className: "hero-mobile-date",
                    children: "14–16 August 2026"
                }), w.jsx("a", {
                    href: "#tickets",
                    onClick: l => {
                        l.preventDefault(), r("tickets")
                    },
                    className: "hero-center-cta",
                    children: "GET YOUR TICKET"
                })]
            }), w.jsx("div", {
                className: "hero-corner-block hero-bottom-left",
                children: w.jsx("a", {
                    href: "https://es.ra.co/events/2224720",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hero-ticket-link",
                    children: "Tickets on RA ↗"
                })
            }), w.jsx("div", {
                className: "hero-corner-block hero-bottom-right",
                children: w.jsx("a", {
                    href: "https://www.instagram.com/otkriche.festival/",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hero-instagram-link",
                    children: w.jsxs("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [w.jsx("rect", {
                            x: "2",
                            y: "2",
                            width: "20",
                            height: "20",
                            rx: "5",
                            ry: "5"
                        }), w.jsx("path", {
                            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                        }), w.jsx("line", {
                            x1: "17.5",
                            y1: "6.5",
                            x2: "17.51",
                            y2: "6.5"
                        })]
                    })
                })
            })]
        })
    })
}
Ee.registerPlugin(Q);
const bp = {
    crowd: "/html_backup/images/tild3765-3761-4061-b166-353862383633__group_1ww.jpg",
    night: "/html_backup/images/tild3737-3632-4961-b635-363230353639__img_5908.jpg"
},
    sx = [{
        name: "A'jitam Da'a",
        url: "https://soundcloud.com/ajitamdaa",
        time: "",
        date: "LINEUP"
    }, {
        name: "Bøngvr",
        url: "https://soundcloud.com/bongvr",
        time: "",
        date: "LINEUP"
    }, {
        name: "Hohe",
        url: "https://soundcloud.com/hohe-audio",
        time: "",
        date: "LINEUP"
    }, {
        name: "Ticha",
        url: "https://soundcloud.com/ticha_smp",
        time: "",
        date: "LINEUP"
    }, {
        name: "BU_MF",
        url: "",
        time: "",
        date: "LINEUP"
    }, {
        name: "G Depot",
        url: "",
        time: "",
        date: "LINEUP"
    }, {
        name: "Ata'ru",
        url: "",
        time: "",
        date: "LINEUP"
    }, {
        name: "J.Cause",
        url: "",
        time: "",
        date: "LINEUP"
    }, {
        name: "Low Services",
        url: "",
        time: "",
        date: "LINEUP"
    }, {
        name: "Ph0neme",
        url: "",
        time: "",
        date: "LINEUP"
    }, {
        name: "ASLK",
        url: "",
        time: "",
        date: "LINEUP"
    }, {
        name: "OA",
        url: "",
        time: "",
        date: "LINEUP"
    }, {
        name: "Scepial Needs",
        url: "",
        time: "",
        date: "LINEUP"
    }, {
        name: "TBA",
        url: "",
        time: "",
        date: "LINEUP"
    }],
    lx = [{
        name: "HOHE (Berlin)",
        url: "https://soundcloud.com/hohe-audio",
        time: "TBA",
        date: "TBA"
    }, {
        name: "MILO RAAD (Serbia)",
        url: "https://soundcloud.com/user-780606550",
        time: "TBA",
        date: "TBA"
    }],
    ox = [{
        name: "TICHA",
        url: "https://soundcloud.com/ticha_smp",
        time: "TBA",
        date: "TBA"
    }, {
        name: "NTRNIAL",
        url: "https://soundcloud.com/ntrnial",
        time: "TBA",
        date: "TBA"
    }],
    Qp = [
        [{
            src: "/assets/images/image1.webp"
        }, {
            src: "/assets/images/image2.webp"
        }, {
            src: "/assets/images/image4.webp"
        }, {
            src: "/assets/images/image5.webp"
        }, {
            src: "/assets/images/image7.webp"
        }, {
            src: "/assets/images/image9.webp"
        }, {
            src: "/assets/images/image16.webp"
        }, {
            src: "/assets/images/image19.webp"
        }],
        [{
            src: "/assets/images/image21.webp"
        }, {
            src: "/assets/images/image24.webp"
        }, {
            src: "/assets/images/image25.webp"
        }, {
            src: "/assets/images/image26.webp"
        }, {
            src: "/assets/images/image27.webp"
        }, {
            src: "/assets/images/image28.webp"
        }, {
            src: "/assets/images/image35.webp"
        }]
    ],
    ax = [{
        question: "Can I leave the festival and re-enter it?",
        answer: "While the bracelet is active, there's a always an option of getting in and out of the festival area",
        isHtml: !1
    }, {
        question: "How do I get to the venue?",
        answer: "Taxi rides is the easiest way of getting to the festival, also shuttle buses to and from the festival during certain hours will be organised",
        isHtml: !1
    }, {
        question: "Will there be bar and food spots at the festival?",
        answer: "Besides permanent Land Light restaurant area, several other bars and foodcourt spots will be arranged within the festival area",
        isHtml: !1
    }, {
        question: "Should I bring warm and waterproof clothes?",
        answer: "It's essential to bring warm and waterproof clothes.<br>The temperature drops at night and there is always a possibility of rain. Hoodies, light autumn with the pants would be enough.",
        isHtml: !0
    }, {
        question: "What are the payment methods at the festival?",
        answer: "Otkriće tokens is an official currency at the festival and can be acquired at the gates area.",
        isHtml: !1
    }, {
        question: "Can I buy the ticket at the entrance?",
        answer: "Yes, but at a higher, door entry cost",
        isHtml: !1
    }, {
        question: "How's the internet connection in the Light Land?",
        answer: "Internet connection is good and stable in the restaurant area, but can be weak in the other parts of Light Land.",
        isHtml: !1
    }, {
        question: "Is it possible to charge devices at the festival?",
        answer: "The charging station for everyone will be arranged",
        isHtml: !1
    }, {
        question: "What about the accommodation at the festival?",
        answer: "A camping hotel area with sleeping bags, tents, toilet and showers area will be organised",
        isHtml: !1
    }, {
        question: "Is there a way to take part in the festival?",
        answer: 'We still welcome shapers, volunteers, photographers, videographers, visual, digital artists and masters of practices. The <a href="#ways-to-join" style="color: var(--color-accent-teal); text-decoration: underline;">open call</a> for these positions is active until the end of July.',
        isHtml: !0
    }];

function ux({
    question: t,
    answer: e,
    isOpen: n,
    onToggle: r,
    isHtml: i
}) {
    const [s, l] = H.useState(!1), [o, a] = H.useState(n);
    return H.useEffect(() => {
        if (n) a(!0), l(!1);
        else if (o) {
            l(!0);
            const u = setTimeout(() => {
                a(!1), l(!1)
            }, 300);
            return () => clearTimeout(u)
        }
    }, [n, o]), w.jsxs("div", {
        className: `mp-faq-item ${n ? "active" : ""}`,
        children: [w.jsxs("button", {
            className: "mp-faq-question",
            onClick: r,
            children: [w.jsx("span", {
                children: t
            }), w.jsx("span", {
                className: "mp-faq-icon",
                children: "+"
            })]
        }), o && w.jsx("div", {
            className: `mp-faq-answer ${s ? "closing" : ""}`,
            children: i ? w.jsx("p", {
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }) : w.jsx("p", {
                children: e
            })
        })]
    })
}
const cx = [{
    id: "01",
    name: "Spirala",
    desc: "The main stage of the festival is immersed in hypnotic rhythm and deep dub techno sounds. The sound that can reveal what's new in your feelings and mind.",
    lineup: sx,
    defaultExpanded: !0
}, {
    id: "02",
    name: "Cave",
    desc: "Curated frequencies emerging from the shadows. A sonic exploration of deep techno and ambient textures across our primary sanctuaries.",
    lineup: "TBA",
    defaultExpanded: !1
}, {
    id: "03",
    name: "Wax",
    desc: "Dedicated to the warm, organic sounds of vinyl. A journey through deep grooves and sonic craftsmanship.",
    lineup: "TBA",
    defaultExpanded: !1
}, {
    id: "04",
    name: "Tijelo",
    desc: "A dedicated space for physical expression and somatic resonance. Where rhythm translates into movement.",
    lineup: "TBA",
    defaultExpanded: !1
}];
function fx({
    stage: t,
    index: e
}) {
    const [n, r] = H.useState(t.defaultExpanded || !1), [i, s] = H.useState(!1), [l, o] = H.useState(t.defaultExpanded || !1);
    H.useEffect(() => {
        if (n) o(!0), s(!1);
        else if (l) {
            s(!0);
            const u = setTimeout(() => {
                o(!1), s(!1)
            }, 500);
            return () => clearTimeout(u)
        }
    }, [n, l]);
    const a = Array.isArray(t.lineup) ? t.lineup.reduce((u, c) => (u[c.date] || (u[c.date] = []), u[c.date].push(c), u), {}) : {};
    return w.jsxs("div", {
        className: "stage-section",
        children: [w.jsx("div", {
            className: "stage-header",
            onClick: () => r(!n),
            children: w.jsxs("div", {
                className: "stage-header-content",
                children: [w.jsxs("div", {
                    className: "stage-title-row",
                    children: [w.jsx("h3", {
                        className: "stage-name",
                        children: t.name
                    })]
                }), w.jsx("p", {
                    className: "stage-desc",
                    children: t.desc
                })]
            })
        }), l && w.jsx("div", {
            className: `stage-lineup-expanded ${i ? "closing" : ""}`,
            children: t.lineup === "TBA" || !Array.isArray(t.lineup) || t.lineup.length === 0 ? w.jsx("div", {
                style: { padding: "1.5rem 0", color: "var(--color-text-muted)", fontSize: "1.1rem", fontFamily: "var(--font-main)", letterSpacing: "0.05em", textAlign: "left" },
                children: "TBA"
            }) : w.jsx("div", {
                className: "stage-lineup-columns",
                children: Object.entries(a).map(([u, c]) => w.jsxs("div", {
                    className: "stage-lineup-column",
                    children: [w.jsx("div", {
                        className: "stage-column-date-header",
                        children: w.jsx("span", {
                            className: "lineup-column-date",
                            children: u
                        })
                    }), w.jsx("div", {
                        className: "stage-column-artists",
                        children: c.map((h, f) => w.jsxs("div", {
                            className: `stage-artist-item ${h.url ? "" : "no-hover"}`,
                            children: [h.time && w.jsx("span", {
                                className: "artist-time",
                                children: h.time
                            }), h.url ? w.jsx("a", {
                                href: h.url,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "artist-name",
                                children: h.name
                            }) : w.jsx("span", {
                                className: "artist-name",
                                style: { cursor: "default", pointerEvents: "none", color: h.name === "TBA" ? "var(--color-text-muted)" : undefined },
                                children: h.name
                            })]
                        }, f))
                    })]
                }, u))
            })
        })]
    })
}

function dx() {
    H.useRef(null), H.useRef(null);
    const t = H.useRef([]),
        e = H.useRef(null),
        n = H.useRef(null),
        [r, i] = H.useState(null),
        s = H.useRef(null),
        [l, o] = H.useState(0),
        [a, u] = H.useState(null),
        [c, h] = H.useState(!1),
        f = () => {
            h(!0), setTimeout(() => {
                u(null), h(!1)
            }, 300)
        };
    return H.useEffect(() => {
        const d = Ee.context(() => {
            Ee.utils.toArray(".ambient-blob").forEach((g, p) => {
                Ee.to(g, {
                    borderRadius: ["40% 60% 70% 30% / 60% 40% 30% 70%", "70% 30% 40% 60% / 30% 60% 70% 40%"][p % 2],
                    x: p % 2 === 0 ? "+=30" : "-=30",
                    y: p % 2 === 0 ? "+=20" : "-=25",
                    duration: 12 + p * 3.5,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: !0
                })
            }), t.current.forEach((g, p) => {
                g && Ee.fromTo(g, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: .6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: g,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    },
                    delay: p % 8 * .05
                })
            }), Ee.utils.toArray(".lineup-item").forEach((g, p) => {
                Ee.fromTo(g, {
                    x: p % 2 === 0 ? -80 : 80,
                    opacity: 0,
                    filter: "blur(10px)"
                }, {
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: g,
                        start: "top 88%",
                        end: "top 50%",
                        scrub: 1.2
                    }
                })
            }), Ee.utils.toArray("[data-reveal]").forEach(g => {
                window.innerWidth > 768 && Ee.fromTo(g, {
                    yPercent: 105
                }, {
                    yPercent: 0,
                    ease: "expo.out",
                    duration: 1.3,
                    scrollTrigger: {
                        trigger: g,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                })
            }), Ee.set(n.current, {
                y: 60,
                opacity: 0,
                filter: "blur(15px)",
                scale: .9
            }), Ee.to(n.current, {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: e.current,
                    start: "top 75%",
                    end: "center 50%",
                    scrub: 1.5
                }
            })
        });
        return () => d.revert()
    }, []), w.jsxs("div", {
        className: "mp",
        children: [w.jsx("div", {
            className: "ambient-blob blob-a"
        }), w.jsx("div", {
            className: "ambient-blob blob-b"
        }), w.jsx("div", {
            className: "ambient-blob blob-c"
        }), w.jsx("div", {
            className: "ambient-blob blob-d"
        }), w.jsxs("section", {
            id: "stages",
            className: "mp-section mp-stages",
            children: [w.jsx("div", {
                className: "mp-stages-header",
                children: w.jsx("div", {
                    style: {
                        overflow: "hidden"
                    },
                    children: w.jsx("h2", {
                        "data-reveal": !0,
                        className: "mp-stages-title",
                        children: "Stages"
                    })
                })
            }), w.jsx("div", {
                className: "mp-stages-list",
                children: cx.map((d, g) => w.jsx(fx, {
                    stage: d,
                    index: g
                }, d.id))
            })]
        }), w.jsxs("section", {
            id: "about",
            className: "mp-section mp-about",
            children: [w.jsx("video", {
                className: "mp-about-video-bg",
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                children: w.jsx("source", {
                    src: "/videos/about-bg.webm",
                    type: "video/webm"
                })
            }), w.jsxs("div", {
                className: "mp-about-header",
                children: [w.jsx("h2", {
                    className: "mp-about-title",
                    children: "Otkriche is transcening the ordinary"
                }), w.jsx("p", {
                    className: "mp-about-subtitle",
                    children: "Set within the heart of ancient woodlands, our gathering invites you to shed the synthetic world and rediscover the resonance of natural rhythm and sonic exploration."
                })]
            }), w.jsxs("div", {
                className: "mp-about-cards",
                children: [w.jsxs("div", {
                    className: "mp-about-card",
                    ref: d => t.current[0] = d,
                    children: [w.jsx("div", {
                        className: "mp-about-card-bg t-bgimg",
                        style: {
                            backgroundImage: `url(${bp.night})`
                        }
                    }), w.jsxs("div", {
                        className: "mp-about-card-content",
                        children: [w.jsx("h3", {
                            children: "Night"
                        }), w.jsx("p", {
                            children: "When the sun yields, the shadows dance. High-fidelity soundscapes that pulse with the rhythm of the hidden forest."
                        })]
                    })]
                }), w.jsxs("div", {
                    className: "mp-about-card",
                    ref: d => t.current[1] = d,
                    children: [w.jsx("div", {
                        className: "mp-about-card-bg t-bgimg",
                        style: {
                            backgroundImage: `url(${bp.crowd})`
                        }
                    }), w.jsxs("div", {
                        className: "mp-about-card-content",
                        children: [w.jsx("h3", {
                            children: "Day"
                        }), w.jsxs("p", {
                            children: ["Soft and spacious, full of workshops, practices and warm music vibes.", w.jsx("br", {}), "Easy listening that flows with sounds gently through the space."]
                        })]
                    })]
                })]
            })]
        }), w.jsxs("section", {
            id: "location",
            className: "mp-section mp-location",
            children: [w.jsxs("div", {
                className: "mp-location-inner",
                children: [w.jsx("div", {
                    style: {
                        overflow: "hidden"
                    },
                    children: w.jsx("p", {
                        "data-reveal": !0,
                        className: "mp-label",
                        children: "LOCATION"
                    })
                }), w.jsx("div", {
                    style: {
                        overflow: "hidden"
                    },
                    children: w.jsxs("h2", {
                        "data-reveal": !0,
                        className: "mp-location-name",
                        children: ["Lightland", w.jsx("br", {}), "Park"]
                    })
                }), w.jsx("div", {
                    className: "mp-location-rows",
                    children: [
                        ["Country", "Montenegro"],
                        ["Park", "Lightland Park"],
                        ["Dates", "August 14–16, 2026"],
                        ["Coordinates", "42.2163°N 18.9966°E"]
                    ].map(([d, g]) => w.jsxs("div", {
                        className: "mp-location-row",
                        children: [w.jsx("span", {
                            className: "mp-location-key",
                            children: d
                        }), w.jsx("span", {
                            className: "mp-location-val",
                            children: g
                        })]
                    }, d))
                })]
            }), w.jsx("div", {
                className: "mp-location-map",
                children: w.jsx("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47265.0!2d18.99445911!3d42.2163307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd74ef6b16927%3A0x56e4a7d023e84480!2sLightland!5e0!3m2!1sen!2sme!4v1712933735000!5m2!1sen!2sme",
                    width: "100%",
                    height: "100%",
                    style: {
                        border: 0,
                        filter: "grayscale(100%) invert(92%) contrast(83%)"
                    },
                    allowFullScreen: "",
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade",
                    title: "Lightland Park Location"
                })
            })]
        }), w.jsx("section", {
            id: "tickets",
            className: "mp-section mp-tickets",
            children: w.jsxs("div", {
                className: "mp-tickets-inner",
                children: [w.jsx("h2", {
                    className: "mp-tickets-heading",
                    children: "Otkriće Tickets"
                }), w.jsx("div", {
                    className: "mp-tickets-date",
                    children: "14–16 August 2026"
                }), w.jsx("p", {
                    children: "Limited invitations are available"
                }), w.jsx("a", {
                    title: "Online ticketing software",
                    href: "https://widget.weezevent.com/ticket/E2036561/?code=38698&locale=en-GB&width_auto=1&color_primary=4E4E4E",
                    className: "weezevent-widget-integration",
                    "data-src": "https://widget.weezevent.com/ticket/E2036561/?code=38698&locale=en-GB&width_auto=1&color_primary=4E4E4E",
                    "data-width": "650",
                    "data-height": "600",
                    "data-id": "2036561",
                    "data-resize": "1",
                    "data-width_auto": "1",
                    "data-noscroll": "0",
                    "data-use-container": "yes",
                    "data-type": "neo",
                    target: "_blank",
                    children: "Billetterie Weezevent"
                })]
            })
        }), w.jsxs("section", {
            id: "experience",
            className: "mp-section mp-experience",
            children: [w.jsx("div", {
                style: {
                    overflow: "hidden"
                },
                children: w.jsx("p", {
                    "data-reveal": !0,
                    className: "mp-label",
                    children: "EXPERIENCE"
                })
            }), w.jsxs("div", {
                className: "mp-experience-grid",
                children: [w.jsxs("div", {
                    className: "mp-experience-card mp-exp-large",
                    children: [w.jsx("div", {
                        className: "mp-exp-bg",
                        style: {
                            backgroundImage: "url(/assets/images/image17.webp)"
                        }
                    }), w.jsxs("div", {
                        className: "mp-exp-content",
                        children: [w.jsx("h3", {
                            children: "Tijelo"
                        }), w.jsx("p", {
                            children: "Connect yourself to the hypnotic journey. This new-age stage offers yoga, breathwork, meditation, and gong journeys in the different parts of Otkriće. Wherever it lands, presence begins."
                        })]
                    })]
                }), w.jsxs("div", {
                    className: "mp-experience-card mp-exp-medium",
                    children: [w.jsx("div", {
                        className: "mp-exp-bg",
                        style: {
                            backgroundImage: "url(/assets/images/image9.webp)"
                        }
                    }), w.jsxs("div", {
                        className: "mp-exp-content",
                        children: [w.jsx("h3", {
                            children: "Exhibition"
                        }), w.jsx("p", {
                            children: "A curated collection of visual art and immersive installations that blur the line between nature and technology."
                        })]
                    })]
                }), w.jsxs("div", {
                    className: "mp-experience-card mp-exp-medium",
                    children: [w.jsx("div", {
                        className: "mp-exp-bg",
                        style: {
                            backgroundImage: "url(/assets/images/image4.webp)"
                        }
                    }), w.jsxs("div", {
                        className: "mp-exp-content",
                        children: [w.jsx("h3", {
                            children: "Market · Food · Workshops"
                        }), w.jsx("p", {
                            children: "Where hands, flavors, and stories meet. Handmade treasures, nourishing meals, and workshops to spark the curious in you."
                        })]
                    })]
                }), w.jsxs("div", {
                    className: "mp-experience-card mp-exp-large",
                    children: [w.jsx("div", {
                        className: "mp-exp-bg",
                        style: {
                            backgroundImage: "url(/assets/images/image22.webp)"
                        }
                    }), w.jsxs("div", {
                        className: "mp-exp-content",
                        children: [w.jsx("h3", {
                            children: "Camping"
                        }), w.jsx("p", {
                            children: "Once you arrive, settle into the land:"
                        }), w.jsxs("p", {
                            children: ["• Bring your own tent or rent one on-site", w.jsx("br", {}), "• Prefer comfort? We offer nearby guesthouse rooms too."]
                        })]
                    })]
                })]
            })]
        }), w.jsxs("section", {
            id: "ways-to-join",
            className: "mp-section mp-ways",
            children: [w.jsx("div", {
                style: {
                    overflow: "hidden"
                },
                children: w.jsx("p", {
                    "data-reveal": !0,
                    className: "mp-label",
                    children: "Ways to Join"
                })
            }), w.jsx("div", {
                className: "mp-ways-grid",
                children: [{
                    title: "Buy a ticket",
                    desc: "Secure your access to Lightland Park. Available on Resident Advisor or on this site",
                    links: [{
                        cta: "Buy on RA",
                        href: "https://es.ra.co/events/2224720"
                    }, {
                        cta: "Buy on site",
                        href: "#tickets"
                    }]
                }, {
                    title: "Apply for the open call",
                    desc: "Support the vision. Help co-create this festival from the inside. Volunteer, vendor space, or media pass — shape the experience from within.",
                    links: [{
                        cta: "Open Call",
                        href: "https://linktr.ee/otkriche.festival"
                    }]
                }].map(d => w.jsxs("div", {
                    className: "mp-way-card",
                    children: [w.jsx("h3", {
                        children: d.title
                    }), w.jsx("p", {
                        children: d.desc
                    }), d.links.map(l => w.jsxs("a", {
                        href: l.href,
                        target: l.href.startsWith("#") ? undefined : "_blank",
                        rel: l.href.startsWith("#") ? undefined : "noreferrer",
                        className: "mp-link",
                        children: [l.cta, " →"]
                    }, l.cta))]
                }, d.title))
            })]
        }), w.jsxs("section", {
            ref: s,
            id: "gallery",
            className: "mp-gallery",
            children: [w.jsx("div", {
                className: "mp-gallery-header",
                children: w.jsx("h2", {
                    className: "mp-gallery-title",
                    children: "GALLERY"
                })
            }), w.jsx("div", {
                className: "mp-gallery-grid-container",
                children: Qp.map((d, g) => w.jsx("div", {
                    className: `mp-gallery-grid ${l === g ? "active" : ""}`,
                    style: {
                        display: l === g ? "grid" : "none"
                    },
                    children: d.map((p, x) => w.jsx("div", {
                        className: "mp-gallery-item",
                        ref: _ => l === g && (t.current[x] = _),
                        onClick: () => u(p.src),
                        children: w.jsx("img", {
                            src: p.src,
                            alt: "Festival moment"
                        })
                    }, x))
                }, g))
            }), w.jsx("div", {
                className: "mp-gallery-dots",
                children: Qp.map((d, g) => w.jsx("button", {
                    className: `mp-gallery-dot ${l === g ? "active" : ""}`,
                    onClick: () => o(g),
                    "aria-label": `Go to page ${g + 1}`
                }, g))
            })]
        }), a && w.jsx("div", {
            className: `mp-lightbox ${c ? "closing" : ""}`,
            onClick: f,
            children: w.jsxs("div", {
                className: "mp-lightbox-content",
                onClick: d => d.stopPropagation(),
                children: [w.jsx("button", {
                    className: "mp-lightbox-close",
                    onClick: f,
                    "aria-label": "Close lightbox",
                    children: "×"
                }), w.jsx("img", {
                    src: a,
                    alt: "Gallery image fullscreen"
                })]
            })
        }), w.jsxs("section", {
            id: "faq",
            className: "mp-faq",
            children: [w.jsx("div", {
                className: "mp-faq-header",
                children: w.jsx("h2", {
                    className: "mp-faq-title",
                    children: "FAQ"
                })
            }), w.jsx("div", {
                className: "mp-faq-list",
                children: ax.map((d, g) => w.jsx(ux, {
                    question: d.question,
                    answer: d.answer,
                    isHtml: d.isHtml,
                    isOpen: r === g,
                    onToggle: () => i(r === g ? null : g)
                }, g))
            })]
        }), w.jsx("footer", {
            ref: e,
            className: "mp-footer",
            children: w.jsxs("div", {
                className: "mp-footer-content",
                children: [w.jsx("img", {
                    src: "/assets/footer-logo.svg",
                    alt: "Otkriće 2026",
                    className: "mp-footer-logo"
                }), w.jsxs("nav", {
                    className: "mp-footer-nav",
                    children: [w.jsx("a", {
                        href: "#stages",
                        children: "LINE-UP"
                    }), w.jsx("a", {
                        href: "#about",
                        children: "ABOUT"
                    }), w.jsx("a", {
                        href: "#location",
                        children: "LOCATION"
                    }), w.jsx("a", {
                        href: "#tickets",
                        children: "BUY TICKET"
                    }), w.jsx("a", {
                        href: "#experience",
                        children: "EXPERIENCE"
                    }), w.jsx("a", {
                        href: "#ways-to-join",
                        children: "WAYS TO JOIN"
                    }), w.jsx("a", {
                        href: "#gallery",
                        children: "GALLERY"
                    }), w.jsx("a", {
                        href: "#faq",
                        children: "FAQ"
                    })]
                }), w.jsxs("div", {
                    className: "mp-footer-socials",
                    children: [w.jsx("a", {
                        href: "https://www.instagram.com/otkriche.festival/",
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": "Instagram",
                        children: w.jsx("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: w.jsx("path", {
                                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                            })
                        })
                    }), w.jsx("a", {
                        href: "https://soundcloud.com/otkrichefest",
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": "SoundCloud",
                        children: w.jsx("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: w.jsx("path", {
                                d: "M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.233-2.168-3.772-4.121-2.815zm-16.879-.027c-.302-.024-.526-.03-1 .122v5.689c.446.143.636.138 1 .138v-5.949z"
                            })
                        })
                    })]
                }), w.jsx("a", {
                    href: "mailto:otkrichefestival@gmail.com",
                    className: "mp-footer-email",
                    children: "otkrichefestival@gmail.com"
                }), w.jsx("p", {
                    className: "mp-footer-copyright",
                    children: "© 2026 OTKRIĆE FESTIVAL, MONTENEGRO"
                })]
            })
        })]
    })
}
Ee.registerPlugin(Q);

function hx() {
    const [t, e] = H.useState(!1), [n, r] = H.useState(!1), i = H.useRef(null);
    H.useEffect(() => {
        const l = new g1({
            duration: 1.4,
            easing: o => Math.min(1, 1.001 - Math.pow(2, -10 * o))
        });
        return l.on("scroll", () => {
            if (Q.update(), i.current) {
                const o = window.pageYOffset || document.documentElement.scrollTop,
                    a = document.documentElement.scrollHeight - document.documentElement.clientHeight,
                    u = o / a * 100;
                i.current.style.width = `${u}%`
            }
        }), Ee.ticker.add(o => {
            l.raf(o * 1e3)
        }), Ee.ticker.lagSmoothing(0), window._lenis = l, () => {
            l.destroy()
        }
    }, []);
    const s = H.useCallback(() => {
        window.scrollTo(0, 0), r(!0), setTimeout(() => Q.refresh(), 200)
    }, []);
    return w.jsxs(w.Fragment, {
        children: [!n && w.jsx(tx, {
            onComplete: s
        }), w.jsx("div", {
            className: "scroll-progress-bar",
            children: w.jsx("div", {
                ref: i,
                className: "scroll-progress-fill"
            })
        }), w.jsx(ex, {
            isOpen: t,
            onToggle: () => e(!t)
        }), w.jsx(ix, {}), w.jsx(dx, {})]
    })
}
hc.createRoot(document.getElementById("root")).render(w.jsx(K_.StrictMode, {
    children: w.jsx(hx, {})
}));