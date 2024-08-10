var mp = Object.defineProperty;
var vp = (e, t, n) =>
  t in e
    ? mp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var jl = (e, t, n) => vp(e, typeof t != 'symbol' ? t + '' : t, n);
function ef(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
function tf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var nf = { exports: {} },
  Xi = {},
  rf = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var El = Symbol.for('react.element'),
  yp = Symbol.for('react.portal'),
  gp = Symbol.for('react.fragment'),
  wp = Symbol.for('react.strict_mode'),
  Sp = Symbol.for('react.profiler'),
  Ep = Symbol.for('react.provider'),
  xp = Symbol.for('react.context'),
  kp = Symbol.for('react.forward_ref'),
  _p = Symbol.for('react.suspense'),
  Cp = Symbol.for('react.memo'),
  Pp = Symbol.for('react.lazy'),
  Ss = Symbol.iterator;
function Rp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ss && e[Ss]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var lf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  of = Object.assign,
  af = {};
function Sr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = af),
    (this.updater = n || lf);
}
Sr.prototype.isReactComponent = {};
Sr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function uf() {}
uf.prototype = Sr.prototype;
function Ja(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = af),
    (this.updater = n || lf);
}
var Ga = (Ja.prototype = new uf());
Ga.constructor = Ja;
of(Ga, Sr.prototype);
Ga.isPureReactComponent = !0;
var Es = Array.isArray,
  sf = Object.prototype.hasOwnProperty,
  Za = { current: null },
  cf = { key: !0, ref: !0, __self: !0, __source: !0 };
function ff(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      sf.call(t, r) && !cf.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: El,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Za.current,
  };
}
function Lp(e, t) {
  return {
    $$typeof: El,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function qa(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === El;
}
function Tp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xs = /\/+/g;
function go(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Tp('' + e.key)
    : t.toString(36);
}
function li(e, t, n, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case El:
          case yp:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + go(o, 0) : r),
      Es(l)
        ? ((n = ''),
          e != null && (n = e.replace(xs, '$&/') + '/'),
          li(l, t, n, '', function (s) {
            return s;
          }))
        : l != null &&
          (qa(l) &&
            (l = Lp(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(xs, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Es(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + go(i, a);
      o += li(i, t, n, u, l);
    }
  else if (((u = Rp(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + go(i, a++)), (o += li(i, t, n, u, l));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function Il(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    li(e, r, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Np(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  ii = { transition: null },
  Dp = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: ii,
    ReactCurrentOwner: Za,
  };
function df() {
  throw Error('act(...) is not supported in production builds of React.');
}
Y.Children = {
  map: Il,
  forEach: function (e, t, n) {
    Il(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Il(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Il(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!qa(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
Y.Component = Sr;
Y.Fragment = gp;
Y.Profiler = Sp;
Y.PureComponent = Ja;
Y.StrictMode = wp;
Y.Suspense = _p;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dp;
Y.act = df;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = of({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Za.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      sf.call(t, u) &&
        !cf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: El, type: e.type, key: l, ref: i, props: r, _owner: o };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: xp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ep, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = ff;
Y.createFactory = function (e) {
  var t = ff.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: kp, render: e };
};
Y.isValidElement = qa;
Y.lazy = function (e) {
  return { $$typeof: Pp, _payload: { _status: -1, _result: e }, _init: Np };
};
Y.memo = function (e, t) {
  return { $$typeof: Cp, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = ii.transition;
  ii.transition = {};
  try {
    e();
  } finally {
    ii.transition = t;
  }
};
Y.unstable_act = df;
Y.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return He.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
Y.useId = function () {
  return He.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return He.current.useRef(e);
};
Y.useState = function (e) {
  return He.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return He.current.useTransition();
};
Y.version = '18.3.1';
rf.exports = Y;
var y = rf.exports;
const Op = tf(y),
  Mp = ef({ __proto__: null, default: Op }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zp = y,
  Fp = Symbol.for('react.element'),
  jp = Symbol.for('react.fragment'),
  Ip = Object.prototype.hasOwnProperty,
  Up = zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ap = { key: !0, ref: !0, __self: !0, __source: !0 };
function hf(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Ip.call(t, r) && !Ap.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Fp,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Up.current,
  };
}
Xi.Fragment = jp;
Xi.jsx = hf;
Xi.jsxs = hf;
nf.exports = Xi;
var t1 = nf.exports,
  pf = { exports: {} },
  tt = {},
  mf = { exports: {} },
  vf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, B) {
    var H = z.length;
    z.push(B);
    e: for (; 0 < H; ) {
      var G = (H - 1) >>> 1,
        ie = z[G];
      if (0 < l(ie, B)) (z[G] = B), (z[H] = ie), (H = G);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var B = z[0],
      H = z.pop();
    if (H !== B) {
      z[0] = H;
      e: for (var G = 0, ie = z.length, xt = ie >>> 1; G < xt; ) {
        var Le = 2 * (G + 1) - 1,
          dt = z[Le],
          Ie = Le + 1,
          An = z[Ie];
        if (0 > l(dt, H))
          Ie < ie && 0 > l(An, dt)
            ? ((z[G] = An), (z[Ie] = H), (G = Ie))
            : ((z[G] = dt), (z[Le] = H), (G = Le));
        else if (Ie < ie && 0 > l(An, H)) (z[G] = An), (z[Ie] = H), (G = Ie);
        else break e;
      }
    }
    return B;
  }
  function l(z, B) {
    var H = z.sortIndex - B.sortIndex;
    return H !== 0 ? H : z.id - B.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    s = [],
    f = 1,
    c = null,
    h = 3,
    x = !1,
    w = !1,
    S = !1,
    P = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(z) {
    for (var B = n(s); B !== null; ) {
      if (B.callback === null) r(s);
      else if (B.startTime <= z)
        r(s), (B.sortIndex = B.expirationTime), t(u, B);
      else break;
      B = n(s);
    }
  }
  function k(z) {
    if (((S = !1), m(z), !w))
      if (n(u) !== null) (w = !0), rt(L);
      else {
        var B = n(s);
        B !== null && ue(k, B.startTime - z);
      }
  }
  function L(z, B) {
    (w = !1), S && ((S = !1), p(R), (R = -1)), (x = !0);
    var H = h;
    try {
      for (
        m(B), c = n(u);
        c !== null && (!(c.expirationTime > B) || (z && !V()));

      ) {
        var G = c.callback;
        if (typeof G == 'function') {
          (c.callback = null), (h = c.priorityLevel);
          var ie = G(c.expirationTime <= B);
          (B = e.unstable_now()),
            typeof ie == 'function' ? (c.callback = ie) : c === n(u) && r(u),
            m(B);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var xt = !0;
      else {
        var Le = n(s);
        Le !== null && ue(k, Le.startTime - B), (xt = !1);
      }
      return xt;
    } finally {
      (c = null), (h = H), (x = !1);
    }
  }
  var v = !1,
    T = null,
    R = -1,
    O = 5,
    M = -1;
  function V() {
    return !(e.unstable_now() - M < O);
  }
  function X() {
    if (T !== null) {
      var z = e.unstable_now();
      M = z;
      var B = !0;
      try {
        B = T(!0, z);
      } finally {
        B ? ge() : ((v = !1), (T = null));
      }
    } else v = !1;
  }
  var ge;
  if (typeof d == 'function')
    ge = function () {
      d(X);
    };
  else if (typeof MessageChannel < 'u') {
    var ee = new MessageChannel(),
      ke = ee.port2;
    (ee.port1.onmessage = X),
      (ge = function () {
        ke.postMessage(null);
      });
  } else
    ge = function () {
      P(X, 0);
    };
  function rt(z) {
    (T = z), v || ((v = !0), ge());
  }
  function ue(z, B) {
    R = P(function () {
      z(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), rt(L));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (O = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (z) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = h;
      }
      var H = h;
      h = B;
      try {
        return z();
      } finally {
        h = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, B) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var H = h;
      h = z;
      try {
        return B();
      } finally {
        h = H;
      }
    }),
    (e.unstable_scheduleCallback = function (z, B, H) {
      var G = e.unstable_now();
      switch (
        (typeof H == 'object' && H !== null
          ? ((H = H.delay), (H = typeof H == 'number' && 0 < H ? G + H : G))
          : (H = G),
        z)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = H + ie),
        (z = {
          id: f++,
          callback: B,
          priorityLevel: z,
          startTime: H,
          expirationTime: ie,
          sortIndex: -1,
        }),
        H > G
          ? ((z.sortIndex = H),
            t(s, z),
            n(u) === null &&
              z === n(s) &&
              (S ? (p(R), (R = -1)) : (S = !0), ue(k, H - G)))
          : ((z.sortIndex = ie), t(u, z), w || x || ((w = !0), rt(L))),
        z
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (z) {
      var B = h;
      return function () {
        var H = h;
        h = B;
        try {
          return z.apply(this, arguments);
        } finally {
          h = H;
        }
      };
    });
})(vf);
mf.exports = vf;
var $p = mf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bp = y,
  et = $p;
function N(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var yf = new Set(),
  tl = {};
function In(e, t) {
  fr(e, t), fr(e + 'Capture', t);
}
function fr(e, t) {
  for (tl[e] = t, e = 0; e < t.length; e++) yf.add(t[e]);
}
var At = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Zo = Object.prototype.hasOwnProperty,
  Hp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ks = {},
  _s = {};
function Vp(e) {
  return Zo.call(_s, e)
    ? !0
    : Zo.call(ks, e)
      ? !1
      : Hp.test(e)
        ? (_s[e] = !0)
        : ((ks[e] = !0), !1);
}
function Wp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Kp(e, t, n, r) {
  if (t === null || typeof t > 'u' || Wp(e, t, n, r)) return !0;
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
function Ve(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Oe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Oe[e] = new Ve(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Oe[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Oe[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Oe[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Oe[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Oe[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Oe[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Oe[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ba = /[\-:]([a-z])/g;
function eu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ba, eu);
    Oe[t] = new Ve(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ba, eu);
    Oe[t] = new Ve(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ba, eu);
  Oe[t] = new Ve(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Oe[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Ve(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Oe[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function tu(e, t, n, r) {
  var l = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Kp(t, n, l, r) && (n = null),
    r || l === null
      ? Vp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ul = Symbol.for('react.element'),
  Qn = Symbol.for('react.portal'),
  Yn = Symbol.for('react.fragment'),
  nu = Symbol.for('react.strict_mode'),
  qo = Symbol.for('react.profiler'),
  gf = Symbol.for('react.provider'),
  wf = Symbol.for('react.context'),
  ru = Symbol.for('react.forward_ref'),
  bo = Symbol.for('react.suspense'),
  ea = Symbol.for('react.suspense_list'),
  lu = Symbol.for('react.memo'),
  Zt = Symbol.for('react.lazy'),
  Sf = Symbol.for('react.offscreen'),
  Cs = Symbol.iterator;
function Tr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Cs && e[Cs]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var pe = Object.assign,
  wo;
function Br(e) {
  if (wo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wo = (t && t[1]) || '';
    }
  return (
    `
` +
    wo +
    e
  );
}
var So = !1;
function Eo(e, t) {
  if (!e || So) return '';
  So = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var u =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (So = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Br(e) : '';
}
function Qp(e) {
  switch (e.tag) {
    case 5:
      return Br(e.type);
    case 16:
      return Br('Lazy');
    case 13:
      return Br('Suspense');
    case 19:
      return Br('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Eo(e.type, !1)), e;
    case 11:
      return (e = Eo(e.type.render, !1)), e;
    case 1:
      return (e = Eo(e.type, !0)), e;
    default:
      return '';
  }
}
function ta(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Yn:
      return 'Fragment';
    case Qn:
      return 'Portal';
    case qo:
      return 'Profiler';
    case nu:
      return 'StrictMode';
    case bo:
      return 'Suspense';
    case ea:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case wf:
        return (e.displayName || 'Context') + '.Consumer';
      case gf:
        return (e._context.displayName || 'Context') + '.Provider';
      case ru:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case lu:
        return (
          (t = e.displayName || null), t !== null ? t : ta(e.type) || 'Memo'
        );
      case Zt:
        (t = e._payload), (e = e._init);
        try {
          return ta(e(t));
        } catch {}
    }
  return null;
}
function Yp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return ta(t);
    case 8:
      return t === nu ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Ef(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Xp(e) {
  var t = Ef(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Al(e) {
  e._valueTracker || (e._valueTracker = Xp(e));
}
function xf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Ef(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function wi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function na(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ps(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function kf(e, t) {
  (t = t.checked), t != null && tu(e, 'checked', t, !1);
}
function ra(e, t) {
  kf(e, t);
  var n = dn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? la(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && la(e, t.type, dn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Rs(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function la(e, t, n) {
  (t !== 'number' || wi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Hr = Array.isArray;
function ir(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + dn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ia(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ls(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Hr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: dn(n) };
}
function _f(e, t) {
  var n = dn(t.value),
    r = dn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ts(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Cf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function oa(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Cf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var $l,
  Pf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        $l = $l || document.createElement('div'),
          $l.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = $l.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function nl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Qr = {
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
  Jp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Qr).forEach(function (e) {
  Jp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qr[t] = Qr[e]);
  });
});
function Rf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Qr.hasOwnProperty(e) && Qr[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Lf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Rf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Gp = pe(
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
function aa(e, t) {
  if (t) {
    if (Gp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62));
  }
}
function ua(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var sa = null;
function iu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ca = null,
  or = null,
  ar = null;
function Ns(e) {
  if ((e = _l(e))) {
    if (typeof ca != 'function') throw Error(N(280));
    var t = e.stateNode;
    t && ((t = bi(t)), ca(e.stateNode, e.type, t));
  }
}
function Tf(e) {
  or ? (ar ? ar.push(e) : (ar = [e])) : (or = e);
}
function Nf() {
  if (or) {
    var e = or,
      t = ar;
    if (((ar = or = null), Ns(e), t)) for (e = 0; e < t.length; e++) Ns(t[e]);
  }
}
function Df(e, t) {
  return e(t);
}
function Of() {}
var xo = !1;
function Mf(e, t, n) {
  if (xo) return e(t, n);
  xo = !0;
  try {
    return Df(e, t, n);
  } finally {
    (xo = !1), (or !== null || ar !== null) && (Of(), Nf());
  }
}
function rl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = bi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n));
  return n;
}
var fa = !1;
if (At)
  try {
    var Nr = {};
    Object.defineProperty(Nr, 'passive', {
      get: function () {
        fa = !0;
      },
    }),
      window.addEventListener('test', Nr, Nr),
      window.removeEventListener('test', Nr, Nr);
  } catch {
    fa = !1;
  }
function Zp(e, t, n, r, l, i, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Yr = !1,
  Si = null,
  Ei = !1,
  da = null,
  qp = {
    onError: function (e) {
      (Yr = !0), (Si = e);
    },
  };
function bp(e, t, n, r, l, i, o, a, u) {
  (Yr = !1), (Si = null), Zp.apply(qp, arguments);
}
function em(e, t, n, r, l, i, o, a, u) {
  if ((bp.apply(this, arguments), Yr)) {
    if (Yr) {
      var s = Si;
      (Yr = !1), (Si = null);
    } else throw Error(N(198));
    Ei || ((Ei = !0), (da = s));
  }
}
function Un(e) {
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
function zf(e) {
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
function Ds(e) {
  if (Un(e) !== e) throw Error(N(188));
}
function tm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Un(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Ds(l), e;
        if (i === r) return Ds(l), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Ff(e) {
  return (e = tm(e)), e !== null ? jf(e) : null;
}
function jf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = jf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var If = et.unstable_scheduleCallback,
  Os = et.unstable_cancelCallback,
  nm = et.unstable_shouldYield,
  rm = et.unstable_requestPaint,
  ye = et.unstable_now,
  lm = et.unstable_getCurrentPriorityLevel,
  ou = et.unstable_ImmediatePriority,
  Uf = et.unstable_UserBlockingPriority,
  xi = et.unstable_NormalPriority,
  im = et.unstable_LowPriority,
  Af = et.unstable_IdlePriority,
  Ji = null,
  Rt = null;
function om(e) {
  if (Rt && typeof Rt.onCommitFiberRoot == 'function')
    try {
      Rt.onCommitFiberRoot(Ji, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var gt = Math.clz32 ? Math.clz32 : sm,
  am = Math.log,
  um = Math.LN2;
function sm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((am(e) / um) | 0)) | 0;
}
var Bl = 64,
  Hl = 4194304;
function Vr(e) {
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
function ki(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Vr(a)) : ((i &= o), i !== 0 && (r = Vr(i)));
  } else (o = n & ~l), o !== 0 ? (r = Vr(o)) : i !== 0 && (r = Vr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - gt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function cm(e, t) {
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
function fm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - gt(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = cm(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function ha(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function $f() {
  var e = Bl;
  return (Bl <<= 1), !(Bl & 4194240) && (Bl = 64), e;
}
function ko(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - gt(t)),
    (e[t] = n);
}
function dm(e, t) {
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
    var l = 31 - gt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function au(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - gt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var b = 0;
function Bf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hf,
  uu,
  Vf,
  Wf,
  Kf,
  pa = !1,
  Vl = [],
  rn = null,
  ln = null,
  on = null,
  ll = new Map(),
  il = new Map(),
  bt = [],
  hm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Ms(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      rn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ln = null;
      break;
    case 'mouseover':
    case 'mouseout':
      on = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ll.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      il.delete(t.pointerId);
  }
}
function Dr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = _l(t)), t !== null && uu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function pm(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (rn = Dr(rn, e, t, n, r, l)), !0;
    case 'dragenter':
      return (ln = Dr(ln, e, t, n, r, l)), !0;
    case 'mouseover':
      return (on = Dr(on, e, t, n, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return ll.set(i, Dr(ll.get(i) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), il.set(i, Dr(il.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Qf(e) {
  var t = xn(e.target);
  if (t !== null) {
    var n = Un(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zf(n)), t !== null)) {
          (e.blockedOn = t),
            Kf(e.priority, function () {
              Vf(n);
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
function oi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ma(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (sa = r), n.target.dispatchEvent(r), (sa = null);
    } else return (t = _l(n)), t !== null && uu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function zs(e, t, n) {
  oi(e) && n.delete(t);
}
function mm() {
  (pa = !1),
    rn !== null && oi(rn) && (rn = null),
    ln !== null && oi(ln) && (ln = null),
    on !== null && oi(on) && (on = null),
    ll.forEach(zs),
    il.forEach(zs);
}
function Or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pa ||
      ((pa = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, mm)));
}
function ol(e) {
  function t(l) {
    return Or(l, e);
  }
  if (0 < Vl.length) {
    Or(Vl[0], e);
    for (var n = 1; n < Vl.length; n++) {
      var r = Vl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rn !== null && Or(rn, e),
      ln !== null && Or(ln, e),
      on !== null && Or(on, e),
      ll.forEach(t),
      il.forEach(t),
      n = 0;
    n < bt.length;
    n++
  )
    (r = bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bt.length && ((n = bt[0]), n.blockedOn === null); )
    Qf(n), n.blockedOn === null && bt.shift();
}
var ur = Vt.ReactCurrentBatchConfig,
  _i = !0;
function vm(e, t, n, r) {
  var l = b,
    i = ur.transition;
  ur.transition = null;
  try {
    (b = 1), su(e, t, n, r);
  } finally {
    (b = l), (ur.transition = i);
  }
}
function ym(e, t, n, r) {
  var l = b,
    i = ur.transition;
  ur.transition = null;
  try {
    (b = 4), su(e, t, n, r);
  } finally {
    (b = l), (ur.transition = i);
  }
}
function su(e, t, n, r) {
  if (_i) {
    var l = ma(e, t, n, r);
    if (l === null) Mo(e, t, r, Ci, n), Ms(e, r);
    else if (pm(l, e, t, n, r)) r.stopPropagation();
    else if ((Ms(e, r), t & 4 && -1 < hm.indexOf(e))) {
      for (; l !== null; ) {
        var i = _l(l);
        if (
          (i !== null && Hf(i),
          (i = ma(e, t, n, r)),
          i === null && Mo(e, t, r, Ci, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Mo(e, t, r, null, n);
  }
}
var Ci = null;
function ma(e, t, n, r) {
  if (((Ci = null), (e = iu(r)), (e = xn(e)), e !== null))
    if (((t = Un(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ci = e), null;
}
function Yf(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (lm()) {
        case ou:
          return 1;
        case Uf:
          return 4;
        case xi:
        case im:
          return 16;
        case Af:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  cu = null,
  ai = null;
function Xf() {
  if (ai) return ai;
  var e,
    t = cu,
    n = t.length,
    r,
    l = 'value' in tn ? tn.value : tn.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (ai = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ui(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Wl() {
  return !0;
}
function Fs() {
  return !1;
}
function nt(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Wl
        : Fs),
      (this.isPropagationStopped = Fs),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Wl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Wl));
      },
      persist: function () {},
      isPersistent: Wl,
    }),
    t
  );
}
var Er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fu = nt(Er),
  kl = pe({}, Er, { view: 0, detail: 0 }),
  gm = nt(kl),
  _o,
  Co,
  Mr,
  Gi = pe({}, kl, {
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
    getModifierState: du,
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
      return 'movementX' in e
        ? e.movementX
        : (e !== Mr &&
            (Mr && e.type === 'mousemove'
              ? ((_o = e.screenX - Mr.screenX), (Co = e.screenY - Mr.screenY))
              : (Co = _o = 0),
            (Mr = e)),
          _o);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Co;
    },
  }),
  js = nt(Gi),
  wm = pe({}, Gi, { dataTransfer: 0 }),
  Sm = nt(wm),
  Em = pe({}, kl, { relatedTarget: 0 }),
  Po = nt(Em),
  xm = pe({}, Er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  km = nt(xm),
  _m = pe({}, Er, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Cm = nt(_m),
  Pm = pe({}, Er, { data: 0 }),
  Is = nt(Pm),
  Rm = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Lm = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Tm = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Nm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tm[e]) ? !!t[e] : !1;
}
function du() {
  return Nm;
}
var Dm = pe({}, kl, {
    key: function (e) {
      if (e.key) {
        var t = Rm[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ui(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Lm[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: du,
    charCode: function (e) {
      return e.type === 'keypress' ? ui(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ui(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Om = nt(Dm),
  Mm = pe({}, Gi, {
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
  Us = nt(Mm),
  zm = pe({}, kl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: du,
  }),
  Fm = nt(zm),
  jm = pe({}, Er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Im = nt(jm),
  Um = pe({}, Gi, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Am = nt(Um),
  $m = [9, 13, 27, 32],
  hu = At && 'CompositionEvent' in window,
  Xr = null;
At && 'documentMode' in document && (Xr = document.documentMode);
var Bm = At && 'TextEvent' in window && !Xr,
  Jf = At && (!hu || (Xr && 8 < Xr && 11 >= Xr)),
  As = ' ',
  $s = !1;
function Gf(e, t) {
  switch (e) {
    case 'keyup':
      return $m.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Zf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Xn = !1;
function Hm(e, t) {
  switch (e) {
    case 'compositionend':
      return Zf(t);
    case 'keypress':
      return t.which !== 32 ? null : (($s = !0), As);
    case 'textInput':
      return (e = t.data), e === As && $s ? null : e;
    default:
      return null;
  }
}
function Vm(e, t) {
  if (Xn)
    return e === 'compositionend' || (!hu && Gf(e, t))
      ? ((e = Xf()), (ai = cu = tn = null), (Xn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Jf && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Wm = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function Bs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Wm[e.type] : t === 'textarea';
}
function qf(e, t, n, r) {
  Tf(r),
    (t = Pi(t, 'onChange')),
    0 < t.length &&
      ((n = new fu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Jr = null,
  al = null;
function Km(e) {
  sd(e, 0);
}
function Zi(e) {
  var t = Zn(e);
  if (xf(t)) return e;
}
function Qm(e, t) {
  if (e === 'change') return t;
}
var bf = !1;
if (At) {
  var Ro;
  if (At) {
    var Lo = 'oninput' in document;
    if (!Lo) {
      var Hs = document.createElement('div');
      Hs.setAttribute('oninput', 'return;'),
        (Lo = typeof Hs.oninput == 'function');
    }
    Ro = Lo;
  } else Ro = !1;
  bf = Ro && (!document.documentMode || 9 < document.documentMode);
}
function Vs() {
  Jr && (Jr.detachEvent('onpropertychange', ed), (al = Jr = null));
}
function ed(e) {
  if (e.propertyName === 'value' && Zi(al)) {
    var t = [];
    qf(t, al, e, iu(e)), Mf(Km, t);
  }
}
function Ym(e, t, n) {
  e === 'focusin'
    ? (Vs(), (Jr = t), (al = n), Jr.attachEvent('onpropertychange', ed))
    : e === 'focusout' && Vs();
}
function Xm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Zi(al);
}
function Jm(e, t) {
  if (e === 'click') return Zi(t);
}
function Gm(e, t) {
  if (e === 'input' || e === 'change') return Zi(t);
}
function Zm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var St = typeof Object.is == 'function' ? Object.is : Zm;
function ul(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zo.call(t, l) || !St(e[l], t[l])) return !1;
  }
  return !0;
}
function Ws(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ks(e, t) {
  var n = Ws(e);
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
    n = Ws(n);
  }
}
function td(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? td(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function nd() {
  for (var e = window, t = wi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = wi(e.document);
  }
  return t;
}
function pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function qm(e) {
  var t = nd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    td(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && pu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Ks(n, i));
        var o = Ks(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var bm = At && 'documentMode' in document && 11 >= document.documentMode,
  Jn = null,
  va = null,
  Gr = null,
  ya = !1;
function Qs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ya ||
    Jn == null ||
    Jn !== wi(r) ||
    ((r = Jn),
    'selectionStart' in r && pu(r)
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
    (Gr && ul(Gr, r)) ||
      ((Gr = r),
      (r = Pi(va, 'onSelect')),
      0 < r.length &&
        ((t = new fu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jn))));
}
function Kl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Gn = {
    animationend: Kl('Animation', 'AnimationEnd'),
    animationiteration: Kl('Animation', 'AnimationIteration'),
    animationstart: Kl('Animation', 'AnimationStart'),
    transitionend: Kl('Transition', 'TransitionEnd'),
  },
  To = {},
  rd = {};
At &&
  ((rd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Gn.animationend.animation,
    delete Gn.animationiteration.animation,
    delete Gn.animationstart.animation),
  'TransitionEvent' in window || delete Gn.transitionend.transition);
function qi(e) {
  if (To[e]) return To[e];
  if (!Gn[e]) return e;
  var t = Gn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in rd) return (To[e] = t[n]);
  return e;
}
var ld = qi('animationend'),
  id = qi('animationiteration'),
  od = qi('animationstart'),
  ad = qi('transitionend'),
  ud = new Map(),
  Ys =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function mn(e, t) {
  ud.set(e, t), In(t, [e]);
}
for (var No = 0; No < Ys.length; No++) {
  var Do = Ys[No],
    ev = Do.toLowerCase(),
    tv = Do[0].toUpperCase() + Do.slice(1);
  mn(ev, 'on' + tv);
}
mn(ld, 'onAnimationEnd');
mn(id, 'onAnimationIteration');
mn(od, 'onAnimationStart');
mn('dblclick', 'onDoubleClick');
mn('focusin', 'onFocus');
mn('focusout', 'onBlur');
mn(ad, 'onTransitionEnd');
fr('onMouseEnter', ['mouseout', 'mouseover']);
fr('onMouseLeave', ['mouseout', 'mouseover']);
fr('onPointerEnter', ['pointerout', 'pointerover']);
fr('onPointerLeave', ['pointerout', 'pointerover']);
In(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
In(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
In('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
In(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
In(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
In(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Wr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  nv = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Wr));
function Xs(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), em(r, t, void 0, e), (e.currentTarget = null);
}
function sd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          Xs(l, a, s), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          Xs(l, a, s), (i = u);
        }
    }
  }
  if (Ei) throw ((e = da), (Ei = !1), (da = null), e);
}
function oe(e, t) {
  var n = t[xa];
  n === void 0 && (n = t[xa] = new Set());
  var r = e + '__bubble';
  n.has(r) || (cd(t, e, 2, !1), n.add(r));
}
function Oo(e, t, n) {
  var r = 0;
  t && (r |= 4), cd(n, e, r, t);
}
var Ql = '_reactListening' + Math.random().toString(36).slice(2);
function sl(e) {
  if (!e[Ql]) {
    (e[Ql] = !0),
      yf.forEach(function (n) {
        n !== 'selectionchange' && (nv.has(n) || Oo(n, !1, e), Oo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ql] || ((t[Ql] = !0), Oo('selectionchange', !1, t));
  }
}
function cd(e, t, n, r) {
  switch (Yf(t)) {
    case 1:
      var l = vm;
      break;
    case 4:
      l = ym;
      break;
    default:
      l = su;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !fa ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Mo(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = xn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Mf(function () {
    var s = i,
      f = iu(n),
      c = [];
    e: {
      var h = ud.get(e);
      if (h !== void 0) {
        var x = fu,
          w = e;
        switch (e) {
          case 'keypress':
            if (ui(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            x = Om;
            break;
          case 'focusin':
            (w = 'focus'), (x = Po);
            break;
          case 'focusout':
            (w = 'blur'), (x = Po);
            break;
          case 'beforeblur':
          case 'afterblur':
            x = Po;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            x = js;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = Sm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = Fm;
            break;
          case ld:
          case id:
          case od:
            x = km;
            break;
          case ad:
            x = Im;
            break;
          case 'scroll':
            x = gm;
            break;
          case 'wheel':
            x = Am;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            x = Cm;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = Us;
        }
        var S = (t & 4) !== 0,
          P = !S && e === 'scroll',
          p = S ? (h !== null ? h + 'Capture' : null) : h;
        S = [];
        for (var d = s, m; d !== null; ) {
          m = d;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              p !== null && ((k = rl(d, p)), k != null && S.push(cl(d, k, m)))),
            P)
          )
            break;
          d = d.return;
        }
        0 < S.length &&
          ((h = new x(h, w, null, n, f)), c.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (x = e === 'mouseout' || e === 'pointerout'),
          h &&
            n !== sa &&
            (w = n.relatedTarget || n.fromElement) &&
            (xn(w) || w[$t]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = s),
              (w = w ? xn(w) : null),
              w !== null &&
                ((P = Un(w)), w !== P || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = s)),
          x !== w)
        ) {
          if (
            ((S = js),
            (k = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = Us),
              (k = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (d = 'pointer')),
            (P = x == null ? h : Zn(x)),
            (m = w == null ? h : Zn(w)),
            (h = new S(k, d + 'leave', x, n, f)),
            (h.target = P),
            (h.relatedTarget = m),
            (k = null),
            xn(f) === s &&
              ((S = new S(p, d + 'enter', w, n, f)),
              (S.target = m),
              (S.relatedTarget = P),
              (k = S)),
            (P = k),
            x && w)
          )
            t: {
              for (S = x, p = w, d = 0, m = S; m; m = Wn(m)) d++;
              for (m = 0, k = p; k; k = Wn(k)) m++;
              for (; 0 < d - m; ) (S = Wn(S)), d--;
              for (; 0 < m - d; ) (p = Wn(p)), m--;
              for (; d--; ) {
                if (S === p || (p !== null && S === p.alternate)) break t;
                (S = Wn(S)), (p = Wn(p));
              }
              S = null;
            }
          else S = null;
          x !== null && Js(c, h, x, S, !1),
            w !== null && P !== null && Js(c, P, w, S, !0);
        }
      }
      e: {
        if (
          ((h = s ? Zn(s) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === 'select' || (x === 'input' && h.type === 'file'))
        )
          var L = Qm;
        else if (Bs(h))
          if (bf) L = Gm;
          else {
            L = Xm;
            var v = Ym;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (L = Jm);
        if (L && (L = L(e, s))) {
          qf(c, L, n, f);
          break e;
        }
        v && v(e, h, s),
          e === 'focusout' &&
            (v = h._wrapperState) &&
            v.controlled &&
            h.type === 'number' &&
            la(h, 'number', h.value);
      }
      switch (((v = s ? Zn(s) : window), e)) {
        case 'focusin':
          (Bs(v) || v.contentEditable === 'true') &&
            ((Jn = v), (va = s), (Gr = null));
          break;
        case 'focusout':
          Gr = va = Jn = null;
          break;
        case 'mousedown':
          ya = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ya = !1), Qs(c, n, f);
          break;
        case 'selectionchange':
          if (bm) break;
        case 'keydown':
        case 'keyup':
          Qs(c, n, f);
      }
      var T;
      if (hu)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart';
              break e;
            case 'compositionend':
              R = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              R = 'onCompositionUpdate';
              break e;
          }
          R = void 0;
        }
      else
        Xn
          ? Gf(e, n) && (R = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart');
      R &&
        (Jf &&
          n.locale !== 'ko' &&
          (Xn || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && Xn && (T = Xf())
            : ((tn = f),
              (cu = 'value' in tn ? tn.value : tn.textContent),
              (Xn = !0))),
        (v = Pi(s, R)),
        0 < v.length &&
          ((R = new Is(R, e, null, n, f)),
          c.push({ event: R, listeners: v }),
          T ? (R.data = T) : ((T = Zf(n)), T !== null && (R.data = T)))),
        (T = Bm ? Hm(e, n) : Vm(e, n)) &&
          ((s = Pi(s, 'onBeforeInput')),
          0 < s.length &&
            ((f = new Is('onBeforeInput', 'beforeinput', null, n, f)),
            c.push({ event: f, listeners: s }),
            (f.data = T)));
    }
    sd(c, t);
  });
}
function cl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Pi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = rl(e, n)),
      i != null && r.unshift(cl(e, i, l)),
      (i = rl(e, t)),
      i != null && r.push(cl(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Js(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = rl(n, i)), u != null && o.unshift(cl(n, u, a)))
        : l || ((u = rl(n, i)), u != null && o.push(cl(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var rv = /\r\n?/g,
  lv = /\u0000|\uFFFD/g;
function Gs(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      rv,
      `
`
    )
    .replace(lv, '');
}
function Yl(e, t, n) {
  if (((t = Gs(t)), Gs(e) !== t && n)) throw Error(N(425));
}
function Ri() {}
var ga = null,
  wa = null;
function Sa(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ea = typeof setTimeout == 'function' ? setTimeout : void 0,
  iv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Zs = typeof Promise == 'function' ? Promise : void 0,
  ov =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Zs < 'u'
        ? function (e) {
            return Zs.resolve(null).then(e).catch(av);
          }
        : Ea;
function av(e) {
  setTimeout(function () {
    throw e;
  });
}
function zo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), ol(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  ol(t);
}
function an(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function qs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var xr = Math.random().toString(36).slice(2),
  Pt = '__reactFiber$' + xr,
  fl = '__reactProps$' + xr,
  $t = '__reactContainer$' + xr,
  xa = '__reactEvents$' + xr,
  uv = '__reactListeners$' + xr,
  sv = '__reactHandles$' + xr;
function xn(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[$t] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qs(e); e !== null; ) {
          if ((n = e[Pt])) return n;
          e = qs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _l(e) {
  return (
    (e = e[Pt] || e[$t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function bi(e) {
  return e[fl] || null;
}
var ka = [],
  qn = -1;
function vn(e) {
  return { current: e };
}
function ae(e) {
  0 > qn || ((e.current = ka[qn]), (ka[qn] = null), qn--);
}
function le(e, t) {
  qn++, (ka[qn] = e.current), (e.current = t);
}
var hn = {},
  je = vn(hn),
  Qe = vn(!1),
  Nn = hn;
function dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function Li() {
  ae(Qe), ae(je);
}
function bs(e, t, n) {
  if (je.current !== hn) throw Error(N(168));
  le(je, t), le(Qe, n);
}
function fd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, Yp(e) || 'Unknown', l));
  return pe({}, n, r);
}
function Ti(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hn),
    (Nn = je.current),
    le(je, e),
    le(Qe, Qe.current),
    !0
  );
}
function ec(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = fd(e, t, Nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Qe),
      ae(je),
      le(je, e))
    : ae(Qe),
    le(Qe, n);
}
var zt = null,
  eo = !1,
  Fo = !1;
function dd(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function cv(e) {
  (eo = !0), dd(e);
}
function yn() {
  if (!Fo && zt !== null) {
    Fo = !0;
    var e = 0,
      t = b;
    try {
      var n = zt;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (zt = null), (eo = !1);
    } catch (l) {
      throw (zt !== null && (zt = zt.slice(e + 1)), If(ou, yn), l);
    } finally {
      (b = t), (Fo = !1);
    }
  }
  return null;
}
var bn = [],
  er = 0,
  Ni = null,
  Di = 0,
  ot = [],
  at = 0,
  Dn = null,
  jt = 1,
  It = '';
function Sn(e, t) {
  (bn[er++] = Di), (bn[er++] = Ni), (Ni = e), (Di = t);
}
function hd(e, t, n) {
  (ot[at++] = jt), (ot[at++] = It), (ot[at++] = Dn), (Dn = e);
  var r = jt;
  e = It;
  var l = 32 - gt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - gt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (jt = (1 << (32 - gt(t) + l)) | (n << l) | r),
      (It = i + e);
  } else (jt = (1 << i) | (n << l) | r), (It = e);
}
function mu(e) {
  e.return !== null && (Sn(e, 1), hd(e, 1, 0));
}
function vu(e) {
  for (; e === Ni; )
    (Ni = bn[--er]), (bn[er] = null), (Di = bn[--er]), (bn[er] = null);
  for (; e === Dn; )
    (Dn = ot[--at]),
      (ot[at] = null),
      (It = ot[--at]),
      (ot[at] = null),
      (jt = ot[--at]),
      (ot[at] = null);
}
var be = null,
  qe = null,
  fe = !1,
  yt = null;
function pd(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function tc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (be = e), (qe = an(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (be = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dn !== null ? { id: jt, overflow: It } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (be = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _a(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ca(e) {
  if (fe) {
    var t = qe;
    if (t) {
      var n = t;
      if (!tc(e, t)) {
        if (_a(e)) throw Error(N(418));
        t = an(n.nextSibling);
        var r = be;
        t && tc(e, t)
          ? pd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (be = e));
      }
    } else {
      if (_a(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (fe = !1), (be = e);
    }
  }
}
function nc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  be = e;
}
function Xl(e) {
  if (e !== be) return !1;
  if (!fe) return nc(e), (fe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Sa(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (_a(e)) throw (md(), Error(N(418)));
    for (; t; ) pd(e, t), (t = an(t.nextSibling));
  }
  if ((nc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              qe = an(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = be ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function md() {
  for (var e = qe; e; ) e = an(e.nextSibling);
}
function hr() {
  (qe = be = null), (fe = !1);
}
function yu(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var fv = Vt.ReactCurrentBatchConfig;
function zr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Jl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function rc(e) {
  var t = e._init;
  return t(e._payload);
}
function vd(e) {
  function t(p, d) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [d]), (p.flags |= 16)) : m.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function l(p, d) {
    return (p = fn(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, d, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((p.flags |= 2), d) : m)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, d, m, k) {
    return d === null || d.tag !== 6
      ? ((d = Ho(m, p.mode, k)), (d.return = p), d)
      : ((d = l(d, m)), (d.return = p), d);
  }
  function u(p, d, m, k) {
    var L = m.type;
    return L === Yn
      ? f(p, d, m.props.children, k, m.key)
      : d !== null &&
          (d.elementType === L ||
            (typeof L == 'object' &&
              L !== null &&
              L.$$typeof === Zt &&
              rc(L) === d.type))
        ? ((k = l(d, m.props)), (k.ref = zr(p, d, m)), (k.return = p), k)
        : ((k = mi(m.type, m.key, m.props, null, p.mode, k)),
          (k.ref = zr(p, d, m)),
          (k.return = p),
          k);
  }
  function s(p, d, m, k) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = Vo(m, p.mode, k)), (d.return = p), d)
      : ((d = l(d, m.children || [])), (d.return = p), d);
  }
  function f(p, d, m, k, L) {
    return d === null || d.tag !== 7
      ? ((d = Tn(m, p.mode, k, L)), (d.return = p), d)
      : ((d = l(d, m)), (d.return = p), d);
  }
  function c(p, d, m) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = Ho('' + d, p.mode, m)), (d.return = p), d;
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case Ul:
          return (
            (m = mi(d.type, d.key, d.props, null, p.mode, m)),
            (m.ref = zr(p, null, d)),
            (m.return = p),
            m
          );
        case Qn:
          return (d = Vo(d, p.mode, m)), (d.return = p), d;
        case Zt:
          var k = d._init;
          return c(p, k(d._payload), m);
      }
      if (Hr(d) || Tr(d))
        return (d = Tn(d, p.mode, m, null)), (d.return = p), d;
      Jl(p, d);
    }
    return null;
  }
  function h(p, d, m, k) {
    var L = d !== null ? d.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return L !== null ? null : a(p, d, '' + m, k);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Ul:
          return m.key === L ? u(p, d, m, k) : null;
        case Qn:
          return m.key === L ? s(p, d, m, k) : null;
        case Zt:
          return (L = m._init), h(p, d, L(m._payload), k);
      }
      if (Hr(m) || Tr(m)) return L !== null ? null : f(p, d, m, k, null);
      Jl(p, m);
    }
    return null;
  }
  function x(p, d, m, k, L) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return (p = p.get(m) || null), a(d, p, '' + k, L);
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case Ul:
          return (p = p.get(k.key === null ? m : k.key) || null), u(d, p, k, L);
        case Qn:
          return (p = p.get(k.key === null ? m : k.key) || null), s(d, p, k, L);
        case Zt:
          var v = k._init;
          return x(p, d, m, v(k._payload), L);
      }
      if (Hr(k) || Tr(k)) return (p = p.get(m) || null), f(d, p, k, L, null);
      Jl(d, k);
    }
    return null;
  }
  function w(p, d, m, k) {
    for (
      var L = null, v = null, T = d, R = (d = 0), O = null;
      T !== null && R < m.length;
      R++
    ) {
      T.index > R ? ((O = T), (T = null)) : (O = T.sibling);
      var M = h(p, T, m[R], k);
      if (M === null) {
        T === null && (T = O);
        break;
      }
      e && T && M.alternate === null && t(p, T),
        (d = i(M, d, R)),
        v === null ? (L = M) : (v.sibling = M),
        (v = M),
        (T = O);
    }
    if (R === m.length) return n(p, T), fe && Sn(p, R), L;
    if (T === null) {
      for (; R < m.length; R++)
        (T = c(p, m[R], k)),
          T !== null &&
            ((d = i(T, d, R)), v === null ? (L = T) : (v.sibling = T), (v = T));
      return fe && Sn(p, R), L;
    }
    for (T = r(p, T); R < m.length; R++)
      (O = x(T, p, R, m[R], k)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? R : O.key),
          (d = i(O, d, R)),
          v === null ? (L = O) : (v.sibling = O),
          (v = O));
    return (
      e &&
        T.forEach(function (V) {
          return t(p, V);
        }),
      fe && Sn(p, R),
      L
    );
  }
  function S(p, d, m, k) {
    var L = Tr(m);
    if (typeof L != 'function') throw Error(N(150));
    if (((m = L.call(m)), m == null)) throw Error(N(151));
    for (
      var v = (L = null), T = d, R = (d = 0), O = null, M = m.next();
      T !== null && !M.done;
      R++, M = m.next()
    ) {
      T.index > R ? ((O = T), (T = null)) : (O = T.sibling);
      var V = h(p, T, M.value, k);
      if (V === null) {
        T === null && (T = O);
        break;
      }
      e && T && V.alternate === null && t(p, T),
        (d = i(V, d, R)),
        v === null ? (L = V) : (v.sibling = V),
        (v = V),
        (T = O);
    }
    if (M.done) return n(p, T), fe && Sn(p, R), L;
    if (T === null) {
      for (; !M.done; R++, M = m.next())
        (M = c(p, M.value, k)),
          M !== null &&
            ((d = i(M, d, R)), v === null ? (L = M) : (v.sibling = M), (v = M));
      return fe && Sn(p, R), L;
    }
    for (T = r(p, T); !M.done; R++, M = m.next())
      (M = x(T, p, R, M.value, k)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? R : M.key),
          (d = i(M, d, R)),
          v === null ? (L = M) : (v.sibling = M),
          (v = M));
    return (
      e &&
        T.forEach(function (X) {
          return t(p, X);
        }),
      fe && Sn(p, R),
      L
    );
  }
  function P(p, d, m, k) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Yn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ul:
          e: {
            for (var L = m.key, v = d; v !== null; ) {
              if (v.key === L) {
                if (((L = m.type), L === Yn)) {
                  if (v.tag === 7) {
                    n(p, v.sibling),
                      (d = l(v, m.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  v.elementType === L ||
                  (typeof L == 'object' &&
                    L !== null &&
                    L.$$typeof === Zt &&
                    rc(L) === v.type)
                ) {
                  n(p, v.sibling),
                    (d = l(v, m.props)),
                    (d.ref = zr(p, v, m)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, v);
                break;
              } else t(p, v);
              v = v.sibling;
            }
            m.type === Yn
              ? ((d = Tn(m.props.children, p.mode, k, m.key)),
                (d.return = p),
                (p = d))
              : ((k = mi(m.type, m.key, m.props, null, p.mode, k)),
                (k.ref = zr(p, d, m)),
                (k.return = p),
                (p = k));
          }
          return o(p);
        case Qn:
          e: {
            for (v = m.key; d !== null; ) {
              if (d.key === v)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(p, d.sibling),
                    (d = l(d, m.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = Vo(m, p.mode, k)), (d.return = p), (p = d);
          }
          return o(p);
        case Zt:
          return (v = m._init), P(p, d, v(m._payload), k);
      }
      if (Hr(m)) return w(p, d, m, k);
      if (Tr(m)) return S(p, d, m, k);
      Jl(p, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = l(d, m)), (d.return = p), (p = d))
          : (n(p, d), (d = Ho(m, p.mode, k)), (d.return = p), (p = d)),
        o(p))
      : n(p, d);
  }
  return P;
}
var pr = vd(!0),
  yd = vd(!1),
  Oi = vn(null),
  Mi = null,
  tr = null,
  gu = null;
function wu() {
  gu = tr = Mi = null;
}
function Su(e) {
  var t = Oi.current;
  ae(Oi), (e._currentValue = t);
}
function Pa(e, t, n) {
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
function sr(e, t) {
  (Mi = e),
    (gu = tr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (gu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), tr === null)) {
      if (Mi === null) throw Error(N(308));
      (tr = e), (Mi.dependencies = { lanes: 0, firstContext: e });
    } else tr = tr.next = e;
  return t;
}
var kn = null;
function Eu(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function gd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Eu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Bt(e, r)
  );
}
function Bt(e, t) {
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
var qt = !1;
function xu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wd(e, t) {
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
function Ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Bt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Eu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  );
}
function si(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), au(e, n);
  }
}
function lc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
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
function zi(e, t, n, r) {
  var l = e.updateQueue;
  qt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== o &&
        (a === null ? (f.firstBaseUpdate = s) : (a.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var c = l.baseState;
    (o = 0), (f = s = u = null), (a = i);
    do {
      var h = a.lane,
        x = a.eventTime;
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            S = a;
          switch (((h = t), (x = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == 'function')) {
                c = w.call(x, c, h);
                break e;
              }
              c = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (h = typeof w == 'function' ? w.call(x, c, h) : w),
                h == null)
              )
                break e;
              c = pe({}, c, h);
              break e;
            case 2:
              qt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [a]) : h.push(a));
      } else
        (x = {
          eventTime: x,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((s = f = x), (u = c)) : (f = f.next = x),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = c),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Mn |= o), (e.lanes = o), (e.memoizedState = c);
  }
}
function ic(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var Cl = {},
  Lt = vn(Cl),
  dl = vn(Cl),
  hl = vn(Cl);
function _n(e) {
  if (e === Cl) throw Error(N(174));
  return e;
}
function ku(e, t) {
  switch ((le(hl, t), le(dl, e), le(Lt, Cl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : oa(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = oa(t, e));
  }
  ae(Lt), le(Lt, t);
}
function mr() {
  ae(Lt), ae(dl), ae(hl);
}
function Sd(e) {
  _n(hl.current);
  var t = _n(Lt.current),
    n = oa(t, e.type);
  t !== n && (le(dl, e), le(Lt, n));
}
function _u(e) {
  dl.current === e && (ae(Lt), ae(dl));
}
var de = vn(0);
function Fi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
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
var jo = [];
function Cu() {
  for (var e = 0; e < jo.length; e++)
    jo[e]._workInProgressVersionPrimary = null;
  jo.length = 0;
}
var ci = Vt.ReactCurrentDispatcher,
  Io = Vt.ReactCurrentBatchConfig,
  On = 0,
  he = null,
  _e = null,
  Pe = null,
  ji = !1,
  Zr = !1,
  pl = 0,
  dv = 0;
function Me() {
  throw Error(N(321));
}
function Pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!St(e[n], t[n])) return !1;
  return !0;
}
function Ru(e, t, n, r, l, i) {
  if (
    ((On = i),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ci.current = e === null || e.memoizedState === null ? vv : yv),
    (e = n(r, l)),
    Zr)
  ) {
    i = 0;
    do {
      if (((Zr = !1), (pl = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (Pe = _e = null),
        (t.updateQueue = null),
        (ci.current = gv),
        (e = n(r, l));
    } while (Zr);
  }
  if (
    ((ci.current = Ii),
    (t = _e !== null && _e.next !== null),
    (On = 0),
    (Pe = _e = he = null),
    (ji = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Lu() {
  var e = pl !== 0;
  return (pl = 0), e;
}
function Ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Pe === null ? (he.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function ft() {
  if (_e === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = Pe === null ? he.memoizedState : Pe.next;
  if (t !== null) (Pe = t), (_e = e);
  else {
    if (e === null) throw Error(N(310));
    (_e = e),
      (e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      Pe === null ? (he.memoizedState = Pe = e) : (Pe = Pe.next = e);
  }
  return Pe;
}
function ml(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Uo(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = _e,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      s = i;
    do {
      var f = s.lane;
      if ((On & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var c = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = c), (o = r)) : (u = u.next = c),
          (he.lanes |= f),
          (Mn |= f);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (o = r) : (u.next = a),
      St(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (he.lanes |= i), (Mn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ao(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    St(i, t.memoizedState) || (Ke = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ed() {}
function xd(e, t) {
  var n = he,
    r = ft(),
    l = t(),
    i = !St(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Ke = !0)),
    (r = r.queue),
    Tu(Cd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vl(9, _d.bind(null, n, r, l, t), void 0, null),
      Re === null)
    )
      throw Error(N(349));
    On & 30 || kd(n, t, l);
  }
  return l;
}
function kd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _d(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Pd(t) && Rd(e);
}
function Cd(e, t, n) {
  return n(function () {
    Pd(t) && Rd(e);
  });
}
function Pd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function Rd(e) {
  var t = Bt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function oc(e) {
  var t = Ct();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ml,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = mv.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function vl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ld() {
  return ft().memoizedState;
}
function fi(e, t, n, r) {
  var l = Ct();
  (he.flags |= e),
    (l.memoizedState = vl(1 | t, n, void 0, r === void 0 ? null : r));
}
function to(e, t, n, r) {
  var l = ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (_e !== null) {
    var o = _e.memoizedState;
    if (((i = o.destroy), r !== null && Pu(r, o.deps))) {
      l.memoizedState = vl(t, n, i, r);
      return;
    }
  }
  (he.flags |= e), (l.memoizedState = vl(1 | t, n, i, r));
}
function ac(e, t) {
  return fi(8390656, 8, e, t);
}
function Tu(e, t) {
  return to(2048, 8, e, t);
}
function Td(e, t) {
  return to(4, 2, e, t);
}
function Nd(e, t) {
  return to(4, 4, e, t);
}
function Dd(e, t) {
  if (typeof t == 'function')
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
function Od(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), to(4, 4, Dd.bind(null, t, e), n)
  );
}
function Nu() {}
function Md(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function zd(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Fd(e, t, n) {
  return On & 21
    ? (St(n, t) || ((n = $f()), (he.lanes |= n), (Mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function hv(e, t) {
  var n = b;
  (b = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Io.transition;
  Io.transition = {};
  try {
    e(!1), t();
  } finally {
    (b = n), (Io.transition = r);
  }
}
function jd() {
  return ft().memoizedState;
}
function pv(e, t, n) {
  var r = cn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Id(e))
  )
    Ud(t, n);
  else if (((n = gd(e, t, n, r)), n !== null)) {
    var l = Be();
    wt(n, e, r, l), Ad(n, t, r);
  }
}
function mv(e, t, n) {
  var r = cn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Id(e)) Ud(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), St(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Eu(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = gd(e, t, l, r)),
      n !== null && ((l = Be()), wt(n, e, r, l), Ad(n, t, r));
  }
}
function Id(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function Ud(e, t) {
  Zr = ji = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ad(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), au(e, n);
  }
}
var Ii = {
    readContext: ct,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  vv = {
    readContext: ct,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: ac,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fi(4194308, 4, Dd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ct();
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
        (e = e.dispatch = pv.bind(null, he, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: oc,
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      return (Ct().memoizedState = e);
    },
    useTransition: function () {
      var e = oc(!1),
        t = e[0];
      return (e = hv.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        l = Ct();
      if (fe) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Re === null)) throw Error(N(349));
        On & 30 || kd(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ac(Cd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        vl(9, _d.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ct(),
        t = Re.identifierPrefix;
      if (fe) {
        var n = It,
          r = jt;
        (n = (r & ~(1 << (32 - gt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = pl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = dv++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  yv = {
    readContext: ct,
    useCallback: Md,
    useContext: ct,
    useEffect: Tu,
    useImperativeHandle: Od,
    useInsertionEffect: Td,
    useLayoutEffect: Nd,
    useMemo: zd,
    useReducer: Uo,
    useRef: Ld,
    useState: function () {
      return Uo(ml);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = ft();
      return Fd(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = Uo(ml)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Ed,
    useSyncExternalStore: xd,
    useId: jd,
    unstable_isNewReconciler: !1,
  },
  gv = {
    readContext: ct,
    useCallback: Md,
    useContext: ct,
    useEffect: Tu,
    useImperativeHandle: Od,
    useInsertionEffect: Td,
    useLayoutEffect: Nd,
    useMemo: zd,
    useReducer: Ao,
    useRef: Ld,
    useState: function () {
      return Ao(ml);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = ft();
      return _e === null ? (t.memoizedState = e) : Fd(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = Ao(ml)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Ed,
    useSyncExternalStore: xd,
    useId: jd,
    unstable_isNewReconciler: !1,
  };
function pt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ra(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var no = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Un(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = cn(e),
      i = Ut(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, l)),
      t !== null && (wt(t, e, l, r), si(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = cn(e),
      i = Ut(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, l)),
      t !== null && (wt(t, e, l, r), si(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = cn(e),
      l = Ut(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = un(e, l, r)),
      t !== null && (wt(t, e, r, n), si(t, e, r));
  },
};
function uc(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ul(n, r) || !ul(l, i)
        : !0
  );
}
function $d(e, t, n) {
  var r = !1,
    l = hn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = ct(i))
      : ((l = Ye(t) ? Nn : je.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? dr(e, l) : hn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = no),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function sc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && no.enqueueReplaceState(t, t.state, null);
}
function La(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), xu(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = ct(i))
    : ((i = Ye(t) ? Nn : je.current), (l.context = dr(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Ra(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && no.enqueueReplaceState(l, l.state, null),
      zi(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function vr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Qp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function $o(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ta(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wv = typeof WeakMap == 'function' ? WeakMap : Map;
function Bd(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ai || ((Ai = !0), (Aa = r)), Ta(e, t);
    }),
    n
  );
}
function Hd(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ta(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ta(e, t),
          typeof r != 'function' &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function cc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Mv.bind(null, e, t, n)), t.then(e, e));
}
function fc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dc(e, t, n, r, l) {
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
              : ((t = Ut(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Sv = Vt.ReactCurrentOwner,
  Ke = !1;
function $e(e, t, n, r) {
  t.child = e === null ? yd(t, null, n, r) : pr(t, e.child, n, r);
}
function hc(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    sr(t, l),
    (r = Ru(e, t, n, r, i, l)),
    (n = Lu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ht(e, t, l))
      : (fe && n && mu(t), (t.flags |= 1), $e(e, t, r, l), t.child)
  );
}
function pc(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Uu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Vd(e, t, i, r, l))
      : ((e = mi(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ul), n(o, r) && e.ref === t.ref)
    )
      return Ht(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = fn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ul(i, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return (t.lanes = e.lanes), Ht(e, t, l);
  }
  return Na(e, t, n, r, l);
}
function Wd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(rr, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(rr, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        le(rr, Ge),
        (Ge |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(rr, Ge),
      (Ge |= r);
  return $e(e, t, l, n), t.child;
}
function Kd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Na(e, t, n, r, l) {
  var i = Ye(n) ? Nn : je.current;
  return (
    (i = dr(t, i)),
    sr(t, l),
    (n = Ru(e, t, n, r, i, l)),
    (r = Lu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ht(e, t, l))
      : (fe && r && mu(t), (t.flags |= 1), $e(e, t, n, l), t.child)
  );
}
function mc(e, t, n, r, l) {
  if (Ye(n)) {
    var i = !0;
    Ti(t);
  } else i = !1;
  if ((sr(t, l), t.stateNode === null))
    di(e, t), $d(t, n, r), La(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = ct(s))
      : ((s = Ye(n) ? Nn : je.current), (s = dr(t, s)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== s) && sc(t, o, r, s)),
      (qt = !1);
    var h = t.memoizedState;
    (o.state = h),
      zi(t, r, o, l),
      (u = t.memoizedState),
      a !== r || h !== u || Qe.current || qt
        ? (typeof f == 'function' && (Ra(t, n, f, r), (u = t.memoizedState)),
          (a = qt || uc(t, n, a, r, h, u, s))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      wd(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : pt(t.type, a)),
      (o.props = s),
      (c = t.pendingProps),
      (h = o.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = ct(u))
        : ((u = Ye(n) ? Nn : je.current), (u = dr(t, u)));
    var x = n.getDerivedStateFromProps;
    (f =
      typeof x == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== c || h !== u) && sc(t, o, r, u)),
      (qt = !1),
      (h = t.memoizedState),
      (o.state = h),
      zi(t, r, o, l);
    var w = t.memoizedState;
    a !== c || h !== w || Qe.current || qt
      ? (typeof x == 'function' && (Ra(t, n, x, r), (w = t.memoizedState)),
        (s = qt || uc(t, n, s, r, h, w, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Da(e, t, n, r, i, l);
}
function Da(e, t, n, r, l, i) {
  Kd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ec(t, n, !1), Ht(e, t, i);
  (r = t.stateNode), (Sv.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = pr(t, e.child, null, i)), (t.child = pr(t, null, a, i)))
      : $e(e, t, a, i),
    (t.memoizedState = r.state),
    l && ec(t, n, !0),
    t.child
  );
}
function Qd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bs(e, t.context, !1),
    ku(e, t.containerInfo);
}
function vc(e, t, n, r, l) {
  return hr(), yu(l), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var Oa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ma(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yd(e, t, n) {
  var r = t.pendingProps,
    l = de.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    le(de, l & 1),
    e === null)
  )
    return (
      Ca(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = io(o, r, 0, null)),
              (e = Tn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ma(n)),
              (t.memoizedState = Oa),
              e)
            : Du(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Ev(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = fn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = fn(a, i)) : ((i = Tn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ma(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Oa),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = fn(i, { mode: 'visible', children: r.children })),
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
function Du(e, t) {
  return (
    (t = io({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gl(e, t, n, r) {
  return (
    r !== null && yu(r),
    pr(t, e.child, null, n),
    (e = Du(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ev(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = $o(Error(N(422)))), Gl(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = io({ mode: 'visible', children: r.children }, l, 0, null)),
          (i = Tn(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && pr(t, e.child, null, o),
          (t.child.memoizedState = Ma(o)),
          (t.memoizedState = Oa),
          i);
  if (!(t.mode & 1)) return Gl(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(N(419))), (r = $o(i, r, void 0)), Gl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ke || a)) {
    if (((r = Re), r !== null)) {
      switch (o & -o) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Bt(e, l), wt(r, e, l, -1));
    }
    return Iu(), (r = $o(Error(N(421)))), Gl(e, t, o, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = zv.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (qe = an(l.nextSibling)),
      (be = t),
      (fe = !0),
      (yt = null),
      e !== null &&
        ((ot[at++] = jt),
        (ot[at++] = It),
        (ot[at++] = Dn),
        (jt = e.id),
        (It = e.overflow),
        (Dn = t)),
      (t = Du(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pa(e.return, t, n);
}
function Bo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Xd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if (($e(e, t, r.children, n), (r = de.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yc(e, n, t);
        else if (e.tag === 19) yc(e, n, t);
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
  if ((le(de, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Fi(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Bo(t, !1, l, n, i);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Fi(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Bo(t, !0, n, null, i);
        break;
      case 'together':
        Bo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function di(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function xv(e, t, n) {
  switch (t.tag) {
    case 3:
      Qd(t), hr();
      break;
    case 5:
      Sd(t);
      break;
    case 1:
      Ye(t.type) && Ti(t);
      break;
    case 4:
      ku(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      le(Oi, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(de, de.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Yd(e, t, n)
            : (le(de, de.current & 1),
              (e = Ht(e, t, n)),
              e !== null ? e.sibling : null);
      le(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        le(de, de.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Wd(e, t, n);
  }
  return Ht(e, t, n);
}
var Jd, za, Gd, Zd;
Jd = function (e, t) {
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
};
za = function () {};
Gd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), _n(Lt.current);
    var i = null;
    switch (n) {
      case 'input':
        (l = na(e, l)), (r = na(e, r)), (i = []);
        break;
      case 'select':
        (l = pe({}, l, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = ia(e, l)), (r = ia(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ri);
    }
    aa(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === 'style') {
          var a = l[s];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (tl.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (i = i || []).push(s, '' + u)
              : s !== 'suppressContentEditableWarning' &&
                s !== 'suppressHydrationWarning' &&
                (tl.hasOwnProperty(s)
                  ? (u != null && s === 'onScroll' && oe('scroll', e),
                    i || a === u || (i = []))
                  : (i = i || []).push(s, u));
    }
    n && (i = i || []).push('style', n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Zd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fr(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
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
function ze(e) {
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
function kv(e, t, n) {
  var r = t.pendingProps;
  switch ((vu(t), t.tag)) {
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
      return ze(t), null;
    case 1:
      return Ye(t.type) && Li(), ze(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mr(),
        ae(Qe),
        ae(je),
        Cu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (Ha(yt), (yt = null)))),
        za(e, t),
        ze(t),
        null
      );
    case 5:
      _u(t);
      var l = _n(hl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Gd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return ze(t), null;
        }
        if (((e = _n(Lt.current)), Xl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Pt] = t), (r[fl] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              oe('cancel', r), oe('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              oe('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Wr.length; l++) oe(Wr[l], r);
              break;
            case 'source':
              oe('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              oe('error', r), oe('load', r);
              break;
            case 'details':
              oe('toggle', r);
              break;
            case 'input':
              Ps(r, i), oe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                oe('invalid', r);
              break;
            case 'textarea':
              Ls(r, i), oe('invalid', r);
          }
          aa(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Yl(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Yl(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : tl.hasOwnProperty(o) &&
                  a != null &&
                  o === 'onScroll' &&
                  oe('scroll', r);
            }
          switch (n) {
            case 'input':
              Al(r), Rs(r, i, !0);
              break;
            case 'textarea':
              Al(r), Ts(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Ri);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Cf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Pt] = t),
            (e[fl] = r),
            Jd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ua(n, r)), n)) {
              case 'dialog':
                oe('cancel', e), oe('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                oe('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Wr.length; l++) oe(Wr[l], e);
                l = r;
                break;
              case 'source':
                oe('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                oe('error', e), oe('load', e), (l = r);
                break;
              case 'details':
                oe('toggle', e), (l = r);
                break;
              case 'input':
                Ps(e, r), (l = na(e, r)), oe('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = pe({}, r, { value: void 0 })),
                  oe('invalid', e);
                break;
              case 'textarea':
                Ls(e, r), (l = ia(e, r)), oe('invalid', e);
                break;
              default:
                l = r;
            }
            aa(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === 'style'
                  ? Lf(e, u)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Pf(e, u))
                    : i === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && nl(e, u)
                        : typeof u == 'number' && nl(e, '' + u)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (tl.hasOwnProperty(i)
                          ? u != null && i === 'onScroll' && oe('scroll', e)
                          : u != null && tu(e, i, u, o));
              }
            switch (n) {
              case 'input':
                Al(e), Rs(e, r, !1);
                break;
              case 'textarea':
                Al(e), Ts(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + dn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ir(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ir(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Ri);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
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
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) Zd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
        if (((n = _n(hl.current)), _n(Lt.current), Xl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (i = r.nodeValue !== n) && ((e = be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Yl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Yl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r);
      }
      return ze(t), null;
    case 13:
      if (
        (ae(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && qe !== null && t.mode & 1 && !(t.flags & 128))
          md(), hr(), (t.flags |= 98560), (i = !1);
        else if (((i = Xl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[Pt] = t;
          } else
            hr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ze(t), (i = !1);
        } else yt !== null && (Ha(yt), (yt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || de.current & 1 ? Ce === 0 && (Ce = 3) : Iu())),
          t.updateQueue !== null && (t.flags |= 4),
          ze(t),
          null);
    case 4:
      return (
        mr(), za(e, t), e === null && sl(t.stateNode.containerInfo), ze(t), null
      );
    case 10:
      return Su(t.type._context), ze(t), null;
    case 17:
      return Ye(t.type) && Li(), ze(t), null;
    case 19:
      if ((ae(de), (i = t.memoizedState), i === null)) return ze(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Fr(i, !1);
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Fi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Fr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(de, (de.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ye() > yr &&
            ((t.flags |= 128), (r = !0), Fr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !fe)
            )
              return ze(t), null;
          } else
            2 * ye() - i.renderingStartTime > yr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ye()),
          (t.sibling = null),
          (n = de.current),
          le(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (ze(t), null);
    case 22:
    case 23:
      return (
        ju(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function _v(e, t) {
  switch ((vu(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && Li(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mr(),
        ae(Qe),
        ae(je),
        Cu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return _u(t), null;
    case 13:
      if (
        (ae(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        hr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(de), null;
    case 4:
      return mr(), null;
    case 10:
      return Su(t.type._context), null;
    case 22:
    case 23:
      return ju(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zl = !1,
  Fe = !1,
  Cv = typeof WeakSet == 'function' ? WeakSet : Set,
  j = null;
function nr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function Fa(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var gc = !1;
function Pv(e, t) {
  if (((ga = _i), (e = nd()), pu(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            s = 0,
            f = 0,
            c = e,
            h = null;
          t: for (;;) {
            for (
              var x;
              c !== n || (l !== 0 && c.nodeType !== 3) || (a = o + l),
                c !== i || (r !== 0 && c.nodeType !== 3) || (u = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (x = c.firstChild) !== null;

            )
              (h = c), (c = x);
            for (;;) {
              if (c === e) break t;
              if (
                (h === n && ++s === l && (a = o),
                h === i && ++f === r && (u = o),
                (x = c.nextSibling) !== null)
              )
                break;
              (c = h), (h = c.parentNode);
            }
            c = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wa = { focusedElem: e, selectionRange: n }, _i = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    P = w.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : pt(t.type, S),
                      P
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (k) {
          ve(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (w = gc), (gc = !1), w;
}
function qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Fa(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ro(e, t) {
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
function ja(e) {
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
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function qd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), qd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[fl], delete t[xa], delete t[uv], delete t[sv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bd(e.return)) return null;
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
function Ia(e, t, n) {
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
    for (Ia(e, t, n), e = e.sibling; e !== null; ) Ia(e, t, n), (e = e.sibling);
}
function Ua(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ua(e, t, n), e = e.sibling; e !== null; ) Ua(e, t, n), (e = e.sibling);
}
var Ne = null,
  mt = !1;
function Jt(e, t, n) {
  for (n = n.child; n !== null; ) eh(e, t, n), (n = n.sibling);
}
function eh(e, t, n) {
  if (Rt && typeof Rt.onCommitFiberUnmount == 'function')
    try {
      Rt.onCommitFiberUnmount(Ji, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || nr(n, t);
    case 6:
      var r = Ne,
        l = mt;
      (Ne = null),
        Jt(e, t, n),
        (Ne = r),
        (mt = l),
        Ne !== null &&
          (mt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (mt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? zo(e.parentNode, n)
              : e.nodeType === 1 && zo(e, n),
            ol(e))
          : zo(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (l = mt),
        (Ne = n.stateNode.containerInfo),
        (mt = !0),
        Jt(e, t, n),
        (Ne = r),
        (mt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Fa(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Jt(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (nr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ve(n, t, a);
        }
      Jt(e, t, n);
      break;
    case 21:
      Jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), Jt(e, t, n), (Fe = r))
        : Jt(e, t, n);
      break;
    default:
      Jt(e, t, n);
  }
}
function Sc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cv()),
      t.forEach(function (r) {
        var l = Fv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ne = a.stateNode), (mt = !1);
              break e;
            case 3:
              (Ne = a.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (Ne = a.stateNode.containerInfo), (mt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(N(160));
        eh(i, o, l), (Ne = null), (mt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ve(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) th(t, e), (t = t.sibling);
}
function th(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), _t(e), r & 4)) {
        try {
          qr(3, e, e.return), ro(3, e);
        } catch (S) {
          ve(e, e.return, S);
        }
        try {
          qr(5, e, e.return);
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      break;
    case 1:
      ht(t, e), _t(e), r & 512 && n !== null && nr(n, n.return);
      break;
    case 5:
      if (
        (ht(t, e),
        _t(e),
        r & 512 && n !== null && nr(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          nl(l, '');
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && kf(l, i),
              ua(a, o);
            var s = ua(a, i);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                c = u[o + 1];
              f === 'style'
                ? Lf(l, c)
                : f === 'dangerouslySetInnerHTML'
                  ? Pf(l, c)
                  : f === 'children'
                    ? nl(l, c)
                    : tu(l, f, c, s);
            }
            switch (a) {
              case 'input':
                ra(l, i);
                break;
              case 'textarea':
                _f(l, i);
                break;
              case 'select':
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? ir(l, !!i.multiple, x, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ir(l, !!i.multiple, i.defaultValue, !0)
                      : ir(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[fl] = i;
          } catch (S) {
            ve(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ht(t, e), _t(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ht(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ol(t.containerInfo);
        } catch (S) {
          ve(e, e.return, S);
        }
      break;
    case 4:
      ht(t, e), _t(e);
      break;
    case 13:
      ht(t, e),
        _t(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (zu = ye())),
        r & 4 && Sc(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (s = Fe) || f), ht(t, e), (Fe = s)) : ht(t, e),
        _t(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (j = e, f = e.child; f !== null; ) {
            for (c = j = f; j !== null; ) {
              switch (((h = j), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qr(4, h, h.return);
                  break;
                case 1:
                  nr(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      ve(r, n, S);
                    }
                  }
                  break;
                case 5:
                  nr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    xc(c);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (j = x)) : xc(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (l = c.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = c.stateNode),
                      (u = c.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (a.style.display = Rf('display', o)));
              } catch (S) {
                ve(e, e.return, S);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = s ? '' : c.memoizedProps;
              } catch (S) {
                ve(e, e.return, S);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      ht(t, e), _t(e), r & 4 && Sc(e);
      break;
    case 21:
      break;
    default:
      ht(t, e), _t(e);
  }
}
function _t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (nl(l, ''), (r.flags &= -33));
          var i = wc(e);
          Ua(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = wc(e);
          Ia(e, a, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      ve(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Rv(e, t, n) {
  (j = e), nh(e);
}
function nh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Zl;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Fe;
        a = Zl;
        var s = Fe;
        if (((Zl = o), (Fe = u) && !s))
          for (j = l; j !== null; )
            (o = j),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? kc(l)
                : u !== null
                  ? ((u.return = o), (j = u))
                  : kc(l);
        for (; i !== null; ) (j = i), nh(i), (i = i.sibling);
        (j = l), (Zl = a), (Fe = s);
      }
      Ec(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (j = i)) : Ec(e);
  }
}
function Ec(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || ro(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ic(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ic(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
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
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && ol(c);
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
              throw Error(N(163));
          }
        Fe || (t.flags & 512 && ja(t));
      } catch (h) {
        ve(t, t.return, h);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function xc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function kc(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ro(4, t);
          } catch (u) {
            ve(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ve(t, l, u);
            }
          }
          var i = t.return;
          try {
            ja(t);
          } catch (u) {
            ve(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ja(t);
          } catch (u) {
            ve(t, o, u);
          }
      }
    } catch (u) {
      ve(t, t.return, u);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var Lv = Math.ceil,
  Ui = Vt.ReactCurrentDispatcher,
  Ou = Vt.ReactCurrentOwner,
  st = Vt.ReactCurrentBatchConfig,
  J = 0,
  Re = null,
  Ee = null,
  De = 0,
  Ge = 0,
  rr = vn(0),
  Ce = 0,
  yl = null,
  Mn = 0,
  lo = 0,
  Mu = 0,
  br = null,
  We = null,
  zu = 0,
  yr = 1 / 0,
  Mt = null,
  Ai = !1,
  Aa = null,
  sn = null,
  ql = !1,
  nn = null,
  $i = 0,
  el = 0,
  $a = null,
  hi = -1,
  pi = 0;
function Be() {
  return J & 6 ? ye() : hi !== -1 ? hi : (hi = ye());
}
function cn(e) {
  return e.mode & 1
    ? J & 2 && De !== 0
      ? De & -De
      : fv.transition !== null
        ? (pi === 0 && (pi = $f()), pi)
        : ((e = b),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yf(e.type))),
          e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < el) throw ((el = 0), ($a = null), Error(N(185)));
  xl(e, n, r),
    (!(J & 2) || e !== Re) &&
      (e === Re && (!(J & 2) && (lo |= n), Ce === 4 && en(e, De)),
      Xe(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((yr = ye() + 500), eo && yn()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  fm(e, t);
  var r = ki(e, e === Re ? De : 0);
  if (r === 0)
    n !== null && Os(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Os(n), t === 1))
      e.tag === 0 ? cv(_c.bind(null, e)) : dd(_c.bind(null, e)),
        ov(function () {
          !(J & 6) && yn();
        }),
        (n = null);
    else {
      switch (Bf(r)) {
        case 1:
          n = ou;
          break;
        case 4:
          n = Uf;
          break;
        case 16:
          n = xi;
          break;
        case 536870912:
          n = Af;
          break;
        default:
          n = xi;
      }
      n = ch(n, rh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function rh(e, t) {
  if (((hi = -1), (pi = 0), J & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (cr() && e.callbackNode !== n) return null;
  var r = ki(e, e === Re ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bi(e, r);
  else {
    t = r;
    var l = J;
    J |= 2;
    var i = ih();
    (Re !== e || De !== t) && ((Mt = null), (yr = ye() + 500), Ln(e, t));
    do
      try {
        Dv();
        break;
      } catch (a) {
        lh(e, a);
      }
    while (!0);
    wu(),
      (Ui.current = i),
      (J = l),
      Ee !== null ? (t = 0) : ((Re = null), (De = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ha(e)), l !== 0 && ((r = l), (t = Ba(e, l)))), t === 1)
    )
      throw ((n = yl), Ln(e, 0), en(e, r), Xe(e, ye()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Tv(l) &&
          ((t = Bi(e, r)),
          t === 2 && ((i = ha(e)), i !== 0 && ((r = i), (t = Ba(e, i)))),
          t === 1))
      )
        throw ((n = yl), Ln(e, 0), en(e, r), Xe(e, ye()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          En(e, We, Mt);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((t = zu + 500 - ye()), 10 < t))
          ) {
            if (ki(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ea(En.bind(null, e, We, Mt), t);
            break;
          }
          En(e, We, Mt);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - gt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = ye() - r),
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
                          : 1960 * Lv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ea(En.bind(null, e, We, Mt), r);
            break;
          }
          En(e, We, Mt);
          break;
        case 5:
          En(e, We, Mt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Xe(e, ye()), e.callbackNode === n ? rh.bind(null, e) : null;
}
function Ba(e, t) {
  var n = br;
  return (
    e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
    (e = Bi(e, t)),
    e !== 2 && ((t = We), (We = n), t !== null && Ha(t)),
    e
  );
}
function Ha(e) {
  We === null ? (We = e) : We.push.apply(We, e);
}
function Tv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!St(i(), l)) return !1;
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
function en(e, t) {
  for (
    t &= ~Mu,
      t &= ~lo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - gt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function _c(e) {
  if (J & 6) throw Error(N(327));
  cr();
  var t = ki(e, 0);
  if (!(t & 1)) return Xe(e, ye()), null;
  var n = Bi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ha(e);
    r !== 0 && ((t = r), (n = Ba(e, r)));
  }
  if (n === 1) throw ((n = yl), Ln(e, 0), en(e, t), Xe(e, ye()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    En(e, We, Mt),
    Xe(e, ye()),
    null
  );
}
function Fu(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((yr = ye() + 500), eo && yn());
  }
}
function zn(e) {
  nn !== null && nn.tag === 0 && !(J & 6) && cr();
  var t = J;
  J |= 1;
  var n = st.transition,
    r = b;
  try {
    if (((st.transition = null), (b = 1), e)) return e();
  } finally {
    (b = r), (st.transition = n), (J = t), !(J & 6) && yn();
  }
}
function ju() {
  (Ge = rr.current), ae(rr);
}
function Ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), iv(n)), Ee !== null))
    for (n = Ee.return; n !== null; ) {
      var r = n;
      switch ((vu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Li();
          break;
        case 3:
          mr(), ae(Qe), ae(je), Cu();
          break;
        case 5:
          _u(r);
          break;
        case 4:
          mr();
          break;
        case 13:
          ae(de);
          break;
        case 19:
          ae(de);
          break;
        case 10:
          Su(r.type._context);
          break;
        case 22:
        case 23:
          ju();
      }
      n = n.return;
    }
  if (
    ((Re = e),
    (Ee = e = fn(e.current, null)),
    (De = Ge = t),
    (Ce = 0),
    (yl = null),
    (Mu = lo = Mn = 0),
    (We = br = null),
    kn !== null)
  ) {
    for (t = 0; t < kn.length; t++)
      if (((n = kn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    kn = null;
  }
  return e;
}
function lh(e, t) {
  do {
    var n = Ee;
    try {
      if ((wu(), (ci.current = Ii), ji)) {
        for (var r = he.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ji = !1;
      }
      if (
        ((On = 0),
        (Pe = _e = he = null),
        (Zr = !1),
        (pl = 0),
        (Ou.current = null),
        n === null || n.return === null)
      ) {
        (Ce = 1), (yl = t), (Ee = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = De),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var s = u,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = fc(o);
          if (x !== null) {
            (x.flags &= -257),
              dc(x, o, a, i, t),
              x.mode & 1 && cc(i, s, t),
              (t = x),
              (u = s);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              cc(i, s, t), Iu();
              break e;
            }
            u = Error(N(426));
          }
        } else if (fe && a.mode & 1) {
          var P = fc(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              dc(P, o, a, i, t),
              yu(vr(u, a));
            break e;
          }
        }
        (i = u = vr(u, a)),
          Ce !== 4 && (Ce = 2),
          br === null ? (br = [i]) : br.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = Bd(i, u, t);
              lc(i, p);
              break e;
            case 1:
              a = u;
              var d = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (sn === null || !sn.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = Hd(i, a, t);
                lc(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ah(n);
    } catch (L) {
      (t = L), Ee === n && n !== null && (Ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ih() {
  var e = Ui.current;
  return (Ui.current = Ii), e === null ? Ii : e;
}
function Iu() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Re === null || (!(Mn & 268435455) && !(lo & 268435455)) || en(Re, De);
}
function Bi(e, t) {
  var n = J;
  J |= 2;
  var r = ih();
  (Re !== e || De !== t) && ((Mt = null), Ln(e, t));
  do
    try {
      Nv();
      break;
    } catch (l) {
      lh(e, l);
    }
  while (!0);
  if ((wu(), (J = n), (Ui.current = r), Ee !== null)) throw Error(N(261));
  return (Re = null), (De = 0), Ce;
}
function Nv() {
  for (; Ee !== null; ) oh(Ee);
}
function Dv() {
  for (; Ee !== null && !nm(); ) oh(Ee);
}
function oh(e) {
  var t = sh(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? ah(e) : (Ee = t),
    (Ou.current = null);
}
function ah(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = _v(n, t)), n !== null)) {
        (n.flags &= 32767), (Ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (Ee = null);
        return;
      }
    } else if (((n = kv(n, t, Ge)), n !== null)) {
      Ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function En(e, t, n) {
  var r = b,
    l = st.transition;
  try {
    (st.transition = null), (b = 1), Ov(e, t, n, r);
  } finally {
    (st.transition = l), (b = r);
  }
  return null;
}
function Ov(e, t, n, r) {
  do cr();
  while (nn !== null);
  if (J & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (dm(e, i),
    e === Re && ((Ee = Re = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ql ||
      ((ql = !0),
      ch(xi, function () {
        return cr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = st.transition), (st.transition = null);
    var o = b;
    b = 1;
    var a = J;
    (J |= 4),
      (Ou.current = null),
      Pv(e, n),
      th(n, e),
      qm(wa),
      (_i = !!ga),
      (wa = ga = null),
      (e.current = n),
      Rv(n),
      rm(),
      (J = a),
      (b = o),
      (st.transition = i);
  } else e.current = n;
  if (
    (ql && ((ql = !1), (nn = e), ($i = l)),
    (i = e.pendingLanes),
    i === 0 && (sn = null),
    om(n.stateNode),
    Xe(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ai) throw ((Ai = !1), (e = Aa), (Aa = null), e);
  return (
    $i & 1 && e.tag !== 0 && cr(),
    (i = e.pendingLanes),
    i & 1 ? (e === $a ? el++ : ((el = 0), ($a = e))) : (el = 0),
    yn(),
    null
  );
}
function cr() {
  if (nn !== null) {
    var e = Bf($i),
      t = st.transition,
      n = b;
    try {
      if (((st.transition = null), (b = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), ($i = 0), J & 6)) throw Error(N(331));
        var l = J;
        for (J |= 4, j = e.current; j !== null; ) {
          var i = j,
            o = i.child;
          if (j.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (j = s; j !== null; ) {
                  var f = j;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qr(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (j = c);
                  else
                    for (; j !== null; ) {
                      f = j;
                      var h = f.sibling,
                        x = f.return;
                      if ((qd(f), f === s)) {
                        j = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = x), (j = h);
                        break;
                      }
                      j = x;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var P = S.sibling;
                    (S.sibling = null), (S = P);
                  } while (S !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (j = o);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qr(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (j = p);
                break e;
              }
              j = i.return;
            }
        }
        var d = e.current;
        for (j = d; j !== null; ) {
          o = j;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (j = m);
          else
            e: for (o = d; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ro(9, a);
                  }
                } catch (L) {
                  ve(a, a.return, L);
                }
              if (a === o) {
                j = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (j = k);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((J = l), yn(), Rt && typeof Rt.onPostCommitFiberRoot == 'function')
        )
          try {
            Rt.onPostCommitFiberRoot(Ji, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (b = n), (st.transition = t);
    }
  }
  return !1;
}
function Cc(e, t, n) {
  (t = vr(n, t)),
    (t = Bd(e, t, 1)),
    (e = un(e, t, 1)),
    (t = Be()),
    e !== null && (xl(e, 1, t), Xe(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) Cc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Cc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (sn === null || !sn.has(r)))
        ) {
          (e = vr(n, e)),
            (e = Hd(t, e, 1)),
            (t = un(t, e, 1)),
            (e = Be()),
            t !== null && (xl(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Mv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Re === e &&
      (De & n) === n &&
      (Ce === 4 || (Ce === 3 && (De & 130023424) === De && 500 > ye() - zu)
        ? Ln(e, 0)
        : (Mu |= n)),
    Xe(e, t);
}
function uh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Hl), (Hl <<= 1), !(Hl & 130023424) && (Hl = 4194304))
      : (t = 1));
  var n = Be();
  (e = Bt(e, t)), e !== null && (xl(e, t, n), Xe(e, n));
}
function zv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), uh(e, n);
}
function Fv(e, t) {
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
      throw Error(N(314));
  }
  r !== null && r.delete(t), uh(e, n);
}
var sh;
sh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ke = !1), xv(e, t, n);
      Ke = !!(e.flags & 131072);
    }
  else (Ke = !1), fe && t.flags & 1048576 && hd(t, Di, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      di(e, t), (e = t.pendingProps);
      var l = dr(t, je.current);
      sr(t, n), (l = Ru(null, t, r, e, l, n));
      var i = Lu();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((i = !0), Ti(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            xu(t),
            (l.updater = no),
            (t.stateNode = l),
            (l._reactInternals = t),
            La(t, r, e, n),
            (t = Da(null, t, r, !0, i, n)))
          : ((t.tag = 0), fe && i && mu(t), $e(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (di(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Iv(r)),
          (e = pt(r, e)),
          l)
        ) {
          case 0:
            t = Na(null, t, r, e, n);
            break e;
          case 1:
            t = mc(null, t, r, e, n);
            break e;
          case 11:
            t = hc(null, t, r, e, n);
            break e;
          case 14:
            t = pc(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        Na(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        mc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Qd(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          wd(e, t),
          zi(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = vr(Error(N(423)), t)), (t = vc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = vr(Error(N(424)), t)), (t = vc(e, t, r, n, l));
            break e;
          } else
            for (
              qe = an(t.stateNode.containerInfo.firstChild),
                be = t,
                fe = !0,
                yt = null,
                n = yd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hr(), r === l)) {
            t = Ht(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sd(t),
        e === null && Ca(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Sa(r, l) ? (o = null) : i !== null && Sa(r, i) && (t.flags |= 32),
        Kd(e, t),
        $e(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ca(t), null;
    case 13:
      return Yd(e, t, n);
    case 4:
      return (
        ku(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pr(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        hc(e, t, r, l, n)
      );
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          le(Oi, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (St(i.value, o)) {
            if (i.children === l.children && !Qe.current) {
              t = Ht(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Ut(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Pa(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(N(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Pa(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        $e(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        sr(t, n),
        (l = ct(l)),
        (r = r(l)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = pt(r, t.pendingProps)),
        (l = pt(r.type, l)),
        pc(e, t, r, l, n)
      );
    case 15:
      return Vd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : pt(r, l)),
        di(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), Ti(t)) : (e = !1),
        sr(t, n),
        $d(t, r, l),
        La(t, r, l, n),
        Da(null, t, r, !0, e, n)
      );
    case 19:
      return Xd(e, t, n);
    case 22:
      return Wd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function ch(e, t) {
  return If(e, t);
}
function jv(e, t, n, r) {
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
function ut(e, t, n, r) {
  return new jv(e, t, n, r);
}
function Uu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Iv(e) {
  if (typeof e == 'function') return Uu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ru)) return 11;
    if (e === lu) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
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
function mi(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Uu(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Yn:
        return Tn(n.children, l, i, t);
      case nu:
        (o = 8), (l |= 8);
        break;
      case qo:
        return (
          (e = ut(12, n, t, l | 2)), (e.elementType = qo), (e.lanes = i), e
        );
      case bo:
        return (e = ut(13, n, t, l)), (e.elementType = bo), (e.lanes = i), e;
      case ea:
        return (e = ut(19, n, t, l)), (e.elementType = ea), (e.lanes = i), e;
      case Sf:
        return io(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case gf:
              o = 10;
              break e;
            case wf:
              o = 9;
              break e;
            case ru:
              o = 11;
              break e;
            case lu:
              o = 14;
              break e;
            case Zt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = ut(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Tn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function io(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = Sf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ho(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function Vo(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Uv(e, t, n, r, l) {
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
    (this.eventTimes = ko(0)),
    (this.expirationTimes = ko(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ko(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Au(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new Uv(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ut(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xu(i),
    e
  );
}
function Av(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function fh(e) {
  if (!e) return hn;
  e = e._reactInternals;
  e: {
    if (Un(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return fd(e, n, t);
  }
  return t;
}
function dh(e, t, n, r, l, i, o, a, u) {
  return (
    (e = Au(n, r, !0, e, l, i, o, a, u)),
    (e.context = fh(null)),
    (n = e.current),
    (r = Be()),
    (l = cn(n)),
    (i = Ut(r, l)),
    (i.callback = t ?? null),
    un(n, i, l),
    (e.current.lanes = l),
    xl(e, l, r),
    Xe(e, r),
    e
  );
}
function oo(e, t, n, r) {
  var l = t.current,
    i = Be(),
    o = cn(l);
  return (
    (n = fh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ut(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(l, t, o)),
    e !== null && (wt(e, l, o, i), si(e, l, o)),
    o
  );
}
function Hi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $u(e, t) {
  Pc(e, t), (e = e.alternate) && Pc(e, t);
}
function $v() {
  return null;
}
var hh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Bu(e) {
  this._internalRoot = e;
}
ao.prototype.render = Bu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  oo(e, t, null, null);
};
ao.prototype.unmount = Bu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zn(function () {
      oo(null, e, null, null);
    }),
      (t[$t] = null);
  }
};
function ao(e) {
  this._internalRoot = e;
}
ao.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Wf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++);
    bt.splice(n, 0, e), n === 0 && Qf(e);
  }
};
function Hu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function uo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Rc() {}
function Bv(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var s = Hi(o);
        i.call(s);
      };
    }
    var o = dh(t, r, e, 0, null, !1, !1, '', Rc);
    return (
      (e._reactRootContainer = o),
      (e[$t] = o.current),
      sl(e.nodeType === 8 ? e.parentNode : e),
      zn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var s = Hi(u);
      a.call(s);
    };
  }
  var u = Au(e, 0, !1, null, null, !1, !1, '', Rc);
  return (
    (e._reactRootContainer = u),
    (e[$t] = u.current),
    sl(e.nodeType === 8 ? e.parentNode : e),
    zn(function () {
      oo(t, u, n, r);
    }),
    u
  );
}
function so(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var u = Hi(o);
        a.call(u);
      };
    }
    oo(t, o, e, l);
  } else o = Bv(n, t, e, l, r);
  return Hi(o);
}
Hf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vr(t.pendingLanes);
        n !== 0 &&
          (au(t, n | 1), Xe(t, ye()), !(J & 6) && ((yr = ye() + 500), yn()));
      }
      break;
    case 13:
      zn(function () {
        var r = Bt(e, 1);
        if (r !== null) {
          var l = Be();
          wt(r, e, 1, l);
        }
      }),
        $u(e, 1);
  }
};
uu = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = Be();
      wt(t, e, 134217728, n);
    }
    $u(e, 134217728);
  }
};
Vf = function (e) {
  if (e.tag === 13) {
    var t = cn(e),
      n = Bt(e, t);
    if (n !== null) {
      var r = Be();
      wt(n, e, t, r);
    }
    $u(e, t);
  }
};
Wf = function () {
  return b;
};
Kf = function (e, t) {
  var n = b;
  try {
    return (b = e), t();
  } finally {
    b = n;
  }
};
ca = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ra(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = bi(r);
            if (!l) throw Error(N(90));
            xf(r), ra(r, l);
          }
        }
      }
      break;
    case 'textarea':
      _f(e, n);
      break;
    case 'select':
      (t = n.value), t != null && ir(e, !!n.multiple, t, !1);
  }
};
Df = Fu;
Of = zn;
var Hv = { usingClientEntryPoint: !1, Events: [_l, Zn, bi, Tf, Nf, Fu] },
  jr = {
    findFiberByHostInstance: xn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Vv = {
    bundleType: jr.bundleType,
    version: jr.version,
    rendererPackageName: jr.rendererPackageName,
    rendererConfig: jr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ff(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: jr.findFiberByHostInstance || $v,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bl.isDisabled && bl.supportsFiber)
    try {
      (Ji = bl.inject(Vv)), (Rt = bl);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hv;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hu(t)) throw Error(N(200));
  return Av(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!Hu(e)) throw Error(N(299));
  var n = !1,
    r = '',
    l = hh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Au(e, 1, !1, null, null, n, !1, r, l)),
    (e[$t] = t.current),
    sl(e.nodeType === 8 ? e.parentNode : e),
    new Bu(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(N(188))
      : ((e = Object.keys(e).join(',')), Error(N(268, e)));
  return (e = Ff(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return zn(e);
};
tt.hydrate = function (e, t, n) {
  if (!uo(t)) throw Error(N(200));
  return so(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!Hu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = hh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = dh(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[$t] = t.current),
    sl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ao(t);
};
tt.render = function (e, t, n) {
  if (!uo(t)) throw Error(N(200));
  return so(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!uo(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (zn(function () {
        so(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[$t] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Fu;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!uo(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return so(e, t, n, !1, r);
};
tt.version = '18.3.1-next-f1338f8080-20240426';
function ph() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ph);
    } catch (e) {
      console.error(e);
    }
}
ph(), (pf.exports = tt);
var mh = pf.exports;
const Wv = tf(mh),
  Kv = ef({ __proto__: null, default: Wv }, [mh]);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ce.apply(this, arguments)
  );
}
var Se;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Se || (Se = {}));
const Lc = 'popstate';
function n1(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return gl(
      '',
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : pn(l);
  }
  return Yv(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function gr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Qv() {
  return Math.random().toString(36).substr(2, 8);
}
function Tc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function gl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ce(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Wt(t) : t,
      { state: n, key: (t && t.key) || r || Qv() }
    )
  );
}
function pn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Wt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Yv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = Se.Pop,
    u = null,
    s = f();
  s == null && ((s = 0), o.replaceState(ce({}, o.state, { idx: s }), ''));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function c() {
    a = Se.Pop;
    let P = f(),
      p = P == null ? null : P - s;
    (s = P), u && u({ action: a, location: S.location, delta: p });
  }
  function h(P, p) {
    a = Se.Push;
    let d = gl(S.location, P, p);
    s = f() + 1;
    let m = Tc(d, s),
      k = S.createHref(d);
    try {
      o.pushState(m, '', k);
    } catch (L) {
      if (L instanceof DOMException && L.name === 'DataCloneError') throw L;
      l.location.assign(k);
    }
    i && u && u({ action: a, location: S.location, delta: 1 });
  }
  function x(P, p) {
    a = Se.Replace;
    let d = gl(S.location, P, p);
    s = f();
    let m = Tc(d, s),
      k = S.createHref(d);
    o.replaceState(m, '', k),
      i && u && u({ action: a, location: S.location, delta: 0 });
  }
  function w(P) {
    let p = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      d = typeof P == 'string' ? P : pn(P);
    return (
      (d = d.replace(/ $/, '%20')),
      W(
        p,
        'No window.location.(origin|href) available to create URL for href: ' +
          d
      ),
      new URL(d, p)
    );
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(P) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Lc, c),
        (u = P),
        () => {
          l.removeEventListener(Lc, c), (u = null);
        }
      );
    },
    createHref(P) {
      return t(l, P);
    },
    createURL: w,
    encodeLocation(P) {
      let p = w(P);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: x,
    go(P) {
      return o.go(P);
    },
  };
  return S;
}
var ne;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(ne || (ne = {}));
const Xv = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function Jv(e) {
  return e.index === !0;
}
function wl(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, String(i)],
        a = typeof l.id == 'string' ? l.id : o.join('-');
      if (
        (W(
          l.index !== !0 || !l.children,
          'Cannot specify children on an index route'
        ),
        W(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Jv(l))
      ) {
        let u = ce({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ce({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = wl(l.children, t, o, r)), u
        );
      }
    })
  );
}
function Ft(e, t, n) {
  return n === void 0 && (n = '/'), vi(e, t, n, !1);
}
function vi(e, t, n, r) {
  let l = typeof t == 'string' ? Wt(t) : t,
    i = Et(l.pathname || '/', n);
  if (i == null) return null;
  let o = vh(e);
  Zv(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let s = uy(i);
    a = oy(o[u], s, r);
  }
  return a;
}
function Gv(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function vh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (i, o, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || '' : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith('/') &&
      (W(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Tt([r, u.relativePath]),
      f = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (W(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".')
      ),
      vh(i.children, t, f, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: ly(s, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) l(i, o);
      else for (let u of yh(i.path)) l(i, o, u);
    }),
    t
  );
}
function yh(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [i, ''] : [i];
  let o = yh(r.join('/')),
    a = [];
  return (
    a.push(...o.map((u) => (u === '' ? i : [i, u].join('/')))),
    l && a.push(...o),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function Zv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : iy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const qv = /^:[\w-]+$/,
  bv = 3,
  ey = 2,
  ty = 1,
  ny = 10,
  ry = -2,
  Nc = (e) => e === '*';
function ly(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Nc) && (r += ry),
    t && (r += ey),
    n
      .filter((l) => !Nc(l))
      .reduce((l, i) => l + (qv.test(i) ? bv : i === '' ? ty : ny), r)
  );
}
function iy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function oy(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    i = '/',
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      s = a === r.length - 1,
      f = i === '/' ? t : t.slice(i.length) || '/',
      c = Vi(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        f
      ),
      h = u.route;
    if (
      (!c &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (c = Vi(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          f
        )),
      !c)
    )
      return null;
    Object.assign(l, c.params),
      o.push({
        params: l,
        pathname: Tt([i, c.pathname]),
        pathnameBase: fy(Tt([i, c.pathnameBase])),
        route: h,
      }),
      c.pathnameBase !== '/' && (i = Tt([i, c.pathnameBase]));
  }
  return o;
}
function Vi(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ay(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, '$1'),
    a = l.slice(1);
  return {
    params: r.reduce((s, f, c) => {
      let { paramName: h, isOptional: x } = f;
      if (h === '*') {
        let S = a[c] || '';
        o = i.slice(0, i.length - S.length).replace(/(.)\/+$/, '$1');
      }
      const w = a[c];
      return (
        x && !w ? (s[h] = void 0) : (s[h] = (w || '').replace(/%2F/g, '/')), s
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function ay(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    gr(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (l += '\\/*$')
        : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function uy(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      gr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Et(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function sy(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? Wt(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : cy(n, t)) : t,
    search: dy(r),
    hash: hy(l),
  };
}
function cy(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Wo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function gh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Vu(e, t) {
  let n = gh(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Wu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = Wt(e))
    : ((l = ce({}, e)),
      W(
        !l.pathname || !l.pathname.includes('?'),
        Wo('?', 'pathname', 'search', l)
      ),
      W(
        !l.pathname || !l.pathname.includes('#'),
        Wo('#', 'pathname', 'hash', l)
      ),
      W(!l.search || !l.search.includes('#'), Wo('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    o = i ? '/' : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && o.startsWith('..')) {
      let h = o.split('/');
      for (; h[0] === '..'; ) h.shift(), (c -= 1);
      l.pathname = h.join('/');
    }
    a = c >= 0 ? t[c] : '/';
  }
  let u = sy(l, a),
    s = o && o !== '/' && o.endsWith('/'),
    f = (i || o === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (s || f) && (u.pathname += '/'), u;
}
const Tt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  fy = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  dy = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  hy = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class py {
  constructor(t, n) {
    (this.type = 'DataWithResponseInit'),
      (this.data = t),
      (this.init = n || null);
  }
}
function my(e, t) {
  return new py(e, typeof t == 'number' ? { status: t } : t);
}
class Wi extends Error {}
class vy {
  constructor(t, n) {
    (this.pendingKeysSet = new Set()),
      (this.subscribers = new Set()),
      (this.deferredKeys = []),
      W(
        t && typeof t == 'object' && !Array.isArray(t),
        'defer() only accepts plain objects'
      );
    let r;
    (this.abortPromise = new Promise((i, o) => (r = o))),
      (this.controller = new AbortController());
    let l = () => r(new Wi('Deferred data aborted'));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener('abort', l)),
      this.controller.signal.addEventListener('abort', l),
      (this.data = Object.entries(t).reduce((i, o) => {
        let [a, u] = o;
        return Object.assign(i, { [a]: this.trackPromise(a, u) });
      }, {})),
      this.done && this.unlistenAbortSignal(),
      (this.init = n);
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (l) => this.onSettle(r, t, void 0, l),
      (l) => this.onSettle(r, t, l)
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, '_tracked', { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, l) {
    if (this.controller.signal.aborted && r instanceof Wi)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', { get: () => r }),
        Promise.reject(r)
      );
    if (
      (this.pendingKeysSet.delete(n),
      this.done && this.unlistenAbortSignal(),
      r === void 0 && l === void 0)
    ) {
      let i = new Error(
        'Deferred data for key "' +
          n +
          '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.'
      );
      return (
        Object.defineProperty(t, '_error', { get: () => i }),
        this.emit(!1, n),
        Promise.reject(i)
      );
    }
    return l === void 0
      ? (Object.defineProperty(t, '_error', { get: () => r }),
        this.emit(!1, n),
        Promise.reject(r))
      : (Object.defineProperty(t, '_data', { get: () => l }),
        this.emit(!1, n),
        l);
  }
  emit(t, n) {
    this.subscribers.forEach((r) => r(t, n));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeysSet.forEach((t, n) => this.pendingKeysSet.delete(n)),
      this.emit(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener('abort', r),
        (n = await new Promise((l) => {
          this.subscribe((i) => {
            t.removeEventListener('abort', r), (i || this.done) && l(i);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return (
      W(
        this.data !== null && this.done,
        'Can only unwrap data on initialized and settled deferreds'
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, l] = n;
        return Object.assign(t, { [r]: gy(l) });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function yy(e) {
  return e instanceof Promise && e._tracked === !0;
}
function gy(e) {
  if (!yy(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
const wh = function (t, n) {
  n === void 0 && (n = 302);
  let r = n;
  typeof r == 'number'
    ? (r = { status: r })
    : typeof r.status > 'u' && (r.status = 302);
  let l = new Headers(r.headers);
  return l.set('Location', t), new Response(null, ce({}, r, { headers: l }));
};
class Fn {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function kr(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Sh = ['post', 'put', 'patch', 'delete'],
  wy = new Set(Sh),
  Sy = ['get', ...Sh],
  Ey = new Set(Sy),
  xy = new Set([301, 302, 303, 307, 308]),
  ky = new Set([307, 308]),
  Ko = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  _y = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ir = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Ku = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cy = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Eh = 'remix-router-transitions';
function r1(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  W(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    l = (E) => ({ hasErrorBoundary: g(E) });
  } else l = Cy;
  let i = {},
    o = wl(e.routes, l, void 0, i),
    a,
    u = e.basename || '/',
    s = e.unstable_dataStrategy || Ny,
    f = e.unstable_patchRoutesOnMiss,
    c = ce(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    h = null,
    x = new Set(),
    w = null,
    S = null,
    P = null,
    p = e.hydrationData != null,
    d = Ft(o, e.history.location, u),
    m = null;
  if (d == null && !f) {
    let g = Ae(404, { pathname: e.history.location.pathname }),
      { matches: E, route: _ } = $c(o);
    (d = E), (m = { [_.id]: g });
  }
  d &&
    !e.hydrationData &&
    Dl(d, o, e.history.location.pathname).active &&
    (d = null);
  let k;
  if (d)
    if (d.some((g) => g.route.lazy)) k = !1;
    else if (!d.some((g) => g.route.loader)) k = !0;
    else if (c.v7_partialHydration) {
      let g = e.hydrationData ? e.hydrationData.loaderData : null,
        E = e.hydrationData ? e.hydrationData.errors : null,
        _ = (C) =>
          C.route.loader
            ? typeof C.route.loader == 'function' &&
              C.route.loader.hydrate === !0
              ? !1
              : (g && g[C.route.id] !== void 0) ||
                (E && E[C.route.id] !== void 0)
            : !0;
      if (E) {
        let C = d.findIndex((F) => E[F.route.id] !== void 0);
        k = d.slice(0, C + 1).every(_);
      } else k = d.every(_);
    } else k = e.hydrationData != null;
  else if (((k = !1), (d = []), c.v7_partialHydration)) {
    let g = Dl(null, o, e.history.location.pathname);
    g.active && g.matches && (d = g.matches);
  }
  let L,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: d,
      initialized: k,
      navigation: Ko,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    T = Se.Pop,
    R = !1,
    O,
    M = !1,
    V = new Map(),
    X = null,
    ge = !1,
    ee = !1,
    ke = [],
    rt = new Set(),
    ue = new Map(),
    z = 0,
    B = -1,
    H = new Map(),
    G = new Set(),
    ie = new Map(),
    xt = new Map(),
    Le = new Set(),
    dt = new Map(),
    Ie = new Map(),
    An = new Map(),
    po = !1;
  function qh() {
    if (
      ((h = e.history.listen((g) => {
        let { action: E, location: _, delta: C } = g;
        if (po) {
          po = !1;
          return;
        }
        gr(
          Ie.size === 0 || C != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let F = vs({
          currentLocation: v.location,
          nextLocation: _,
          historyAction: E,
        });
        if (F && C != null) {
          (po = !0),
            e.history.go(C * -1),
            Tl(F, {
              state: 'blocked',
              location: _,
              proceed() {
                Tl(F, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  e.history.go(C);
              },
              reset() {
                let I = new Map(v.blockers);
                I.set(F, Ir), Ue({ blockers: I });
              },
            });
          return;
        }
        return wn(E, _);
      })),
      n)
    ) {
      Vy(t, V);
      let g = () => Wy(t, V);
      t.addEventListener('pagehide', g),
        (X = () => t.removeEventListener('pagehide', g));
    }
    return v.initialized || wn(Se.Pop, v.location, { initialHydration: !0 }), L;
  }
  function bh() {
    h && h(),
      X && X(),
      x.clear(),
      O && O.abort(),
      v.fetchers.forEach((g, E) => Ll(E)),
      v.blockers.forEach((g, E) => ms(E));
  }
  function ep(g) {
    return x.add(g), () => x.delete(g);
  }
  function Ue(g, E) {
    E === void 0 && (E = {}), (v = ce({}, v, g));
    let _ = [],
      C = [];
    c.v7_fetcherPersist &&
      v.fetchers.forEach((F, I) => {
        F.state === 'idle' && (Le.has(I) ? C.push(I) : _.push(I));
      }),
      [...x].forEach((F) =>
        F(v, {
          deletedFetchers: C,
          unstable_viewTransitionOpts: E.viewTransitionOpts,
          unstable_flushSync: E.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist &&
        (_.forEach((F) => v.fetchers.delete(F)), C.forEach((F) => Ll(F)));
  }
  function $n(g, E, _) {
    var C, F;
    let { flushSync: I } = _ === void 0 ? {} : _,
      $ =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        vt(v.navigation.formMethod) &&
        v.navigation.state === 'loading' &&
        ((C = g.state) == null ? void 0 : C._isRedirect) !== !0,
      D;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (D = E.actionData)
        : (D = null)
      : $
        ? (D = v.actionData)
        : (D = null);
    let K = E.loaderData
        ? Uc(v.loaderData, E.loaderData, E.matches || [], E.errors)
        : v.loaderData,
      U = v.blockers;
    U.size > 0 && ((U = new Map(U)), U.forEach((q, re) => U.set(re, Ir)));
    let A =
      R === !0 ||
      (v.navigation.formMethod != null &&
        vt(v.navigation.formMethod) &&
        ((F = g.state) == null ? void 0 : F._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      ge ||
        T === Se.Pop ||
        (T === Se.Push
          ? e.history.push(g, g.state)
          : T === Se.Replace && e.history.replace(g, g.state));
    let te;
    if (T === Se.Pop) {
      let q = V.get(v.location.pathname);
      q && q.has(g.pathname)
        ? (te = { currentLocation: v.location, nextLocation: g })
        : V.has(g.pathname) &&
          (te = { currentLocation: g, nextLocation: v.location });
    } else if (M) {
      let q = V.get(v.location.pathname);
      q
        ? q.add(g.pathname)
        : ((q = new Set([g.pathname])), V.set(v.location.pathname, q)),
        (te = { currentLocation: v.location, nextLocation: g });
    }
    Ue(
      ce({}, E, {
        actionData: D,
        loaderData: K,
        historyAction: T,
        location: g,
        initialized: !0,
        navigation: Ko,
        revalidation: 'idle',
        restoreScrollPosition: gs(g, E.matches || v.matches),
        preventScrollReset: A,
        blockers: U,
      }),
      { viewTransitionOpts: te, flushSync: I === !0 }
    ),
      (T = Se.Pop),
      (R = !1),
      (M = !1),
      (ge = !1),
      (ee = !1),
      (ke = []);
  }
  async function us(g, E) {
    if (typeof g == 'number') {
      e.history.go(g);
      return;
    }
    let _ = Va(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        g,
        c.v7_relativeSplatPath,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative
      ),
      {
        path: C,
        submission: F,
        error: I,
      } = Dc(c.v7_normalizeFormMethod, !1, _, E),
      $ = v.location,
      D = gl(v.location, C, E && E.state);
    D = ce({}, D, e.history.encodeLocation(D));
    let K = E && E.replace != null ? E.replace : void 0,
      U = Se.Push;
    K === !0
      ? (U = Se.Replace)
      : K === !1 ||
        (F != null &&
          vt(F.formMethod) &&
          F.formAction === v.location.pathname + v.location.search &&
          (U = Se.Replace));
    let A =
        E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
      te = (E && E.unstable_flushSync) === !0,
      q = vs({ currentLocation: $, nextLocation: D, historyAction: U });
    if (q) {
      Tl(q, {
        state: 'blocked',
        location: D,
        proceed() {
          Tl(q, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: D,
          }),
            us(g, E);
        },
        reset() {
          let re = new Map(v.blockers);
          re.set(q, Ir), Ue({ blockers: re });
        },
      });
      return;
    }
    return await wn(U, D, {
      submission: F,
      pendingError: I,
      preventScrollReset: A,
      replace: E && E.replace,
      enableViewTransition: E && E.unstable_viewTransition,
      flushSync: te,
    });
  }
  function tp() {
    if (
      (mo(),
      Ue({ revalidation: 'loading' }),
      v.navigation.state !== 'submitting')
    ) {
      if (v.navigation.state === 'idle') {
        wn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      wn(T || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function wn(g, E, _) {
    O && O.abort(),
      (O = null),
      (T = g),
      (ge = (_ && _.startUninterruptedRevalidation) === !0),
      fp(v.location, v.matches),
      (R = (_ && _.preventScrollReset) === !0),
      (M = (_ && _.enableViewTransition) === !0);
    let C = a || o,
      F = _ && _.overrideNavigation,
      I = Ft(C, E, u),
      $ = (_ && _.flushSync) === !0,
      D = Dl(I, C, E.pathname);
    if ((D.active && D.matches && (I = D.matches), !I)) {
      let { error: Z, notFoundMatches: Te, route: we } = vo(E.pathname);
      $n(
        E,
        { matches: Te, loaderData: {}, errors: { [we.id]: Z } },
        { flushSync: $ }
      );
      return;
    }
    if (
      v.initialized &&
      !ee &&
      jy(v.location, E) &&
      !(_ && _.submission && vt(_.submission.formMethod))
    ) {
      $n(E, { matches: I }, { flushSync: $ });
      return;
    }
    O = new AbortController();
    let K = Kn(e.history, E, O.signal, _ && _.submission),
      U;
    if (_ && _.pendingError)
      U = [lr(I).route.id, { type: ne.error, error: _.pendingError }];
    else if (_ && _.submission && vt(_.submission.formMethod)) {
      let Z = await np(K, E, _.submission, I, D.active, {
        replace: _.replace,
        flushSync: $,
      });
      if (Z.shortCircuited) return;
      if (Z.pendingActionResult) {
        let [Te, we] = Z.pendingActionResult;
        if (Ze(we) && kr(we.error) && we.error.status === 404) {
          (O = null),
            $n(E, {
              matches: Z.matches,
              loaderData: {},
              errors: { [Te]: we.error },
            });
          return;
        }
      }
      (I = Z.matches || I),
        (U = Z.pendingActionResult),
        (F = Qo(E, _.submission)),
        ($ = !1),
        (D.active = !1),
        (K = Kn(e.history, K.url, K.signal));
    }
    let {
      shortCircuited: A,
      matches: te,
      loaderData: q,
      errors: re,
    } = await rp(
      K,
      E,
      I,
      D.active,
      F,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      $,
      U
    );
    A ||
      ((O = null),
      $n(E, ce({ matches: te || I }, Ac(U), { loaderData: q, errors: re })));
  }
  async function np(g, E, _, C, F, I) {
    I === void 0 && (I = {}), mo();
    let $ = By(E, _);
    if ((Ue({ navigation: $ }, { flushSync: I.flushSync === !0 }), F)) {
      let U = await Ol(C, E.pathname, g.signal);
      if (U.type === 'aborted') return { shortCircuited: !0 };
      if (U.type === 'error') {
        let { boundaryId: A, error: te } = Nl(E.pathname, U);
        return {
          matches: U.partialMatches,
          pendingActionResult: [A, { type: ne.error, error: te }],
        };
      } else if (U.matches) C = U.matches;
      else {
        let { notFoundMatches: A, error: te, route: q } = vo(E.pathname);
        return {
          matches: A,
          pendingActionResult: [q.id, { type: ne.error, error: te }],
        };
      }
    }
    let D,
      K = Kr(C, E);
    if (!K.route.action && !K.route.lazy)
      D = {
        type: ne.error,
        error: Ae(405, {
          method: g.method,
          pathname: E.pathname,
          routeId: K.route.id,
        }),
      };
    else if (((D = (await Rr('action', g, [K], C))[0]), g.signal.aborted))
      return { shortCircuited: !0 };
    if (Pn(D)) {
      let U;
      return (
        I && I.replace != null
          ? (U = I.replace)
          : (U =
              Fc(D.response.headers.get('Location'), new URL(g.url), u) ===
              v.location.pathname + v.location.search),
        await Pr(g, D, { submission: _, replace: U }),
        { shortCircuited: !0 }
      );
    }
    if (Cn(D)) throw Ae(400, { type: 'defer-action' });
    if (Ze(D)) {
      let U = lr(C, K.route.id);
      return (
        (I && I.replace) !== !0 && (T = Se.Push),
        { matches: C, pendingActionResult: [U.route.id, D] }
      );
    }
    return { matches: C, pendingActionResult: [K.route.id, D] };
  }
  async function rp(g, E, _, C, F, I, $, D, K, U, A) {
    let te = F || Qo(E, I),
      q = I || $ || Wc(te),
      re = !ge && (!c.v7_partialHydration || !K);
    if (C) {
      if (re) {
        let me = ss(A);
        Ue(ce({ navigation: te }, me !== void 0 ? { actionData: me } : {}), {
          flushSync: U,
        });
      }
      let Q = await Ol(_, E.pathname, g.signal);
      if (Q.type === 'aborted') return { shortCircuited: !0 };
      if (Q.type === 'error') {
        let { boundaryId: me, error: Je } = Nl(E.pathname, Q);
        return {
          matches: Q.partialMatches,
          loaderData: {},
          errors: { [me]: Je },
        };
      } else if (Q.matches) _ = Q.matches;
      else {
        let { error: me, notFoundMatches: Je, route: se } = vo(E.pathname);
        return { matches: Je, loaderData: {}, errors: { [se.id]: me } };
      }
    }
    let Z = a || o,
      [Te, we] = Oc(
        e.history,
        v,
        _,
        q,
        E,
        c.v7_partialHydration && K === !0,
        c.v7_skipActionErrorRevalidation,
        ee,
        ke,
        rt,
        Le,
        ie,
        G,
        Z,
        u,
        A
      );
    if (
      (yo(
        (Q) =>
          !(_ && _.some((me) => me.route.id === Q)) ||
          (Te && Te.some((me) => me.route.id === Q))
      ),
      (B = ++z),
      Te.length === 0 && we.length === 0)
    ) {
      let Q = hs();
      return (
        $n(
          E,
          ce(
            {
              matches: _,
              loaderData: {},
              errors: A && Ze(A[1]) ? { [A[0]]: A[1].error } : null,
            },
            Ac(A),
            Q ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: U }
        ),
        { shortCircuited: !0 }
      );
    }
    if (re) {
      let Q = {};
      if (!C) {
        Q.navigation = te;
        let me = ss(A);
        me !== void 0 && (Q.actionData = me);
      }
      we.length > 0 && (Q.fetchers = lp(we)), Ue(Q, { flushSync: U });
    }
    we.forEach((Q) => {
      ue.has(Q.key) && Yt(Q.key), Q.controller && ue.set(Q.key, Q.controller);
    });
    let Lr = () => we.forEach((Q) => Yt(Q.key));
    O && O.signal.addEventListener('abort', Lr);
    let { loaderResults: Xt, fetcherResults: Bn } = await cs(
      v.matches,
      _,
      Te,
      we,
      g
    );
    if (g.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener('abort', Lr),
      we.forEach((Q) => ue.delete(Q.key));
    let Hn = Bc([...Xt, ...Bn]);
    if (Hn) {
      if (Hn.idx >= Te.length) {
        let Q = we[Hn.idx - Te.length].key;
        G.add(Q);
      }
      return await Pr(g, Hn.result, { replace: D }), { shortCircuited: !0 };
    }
    let { loaderData: Vn, errors: kt } = Ic(v, _, Te, Xt, A, we, Bn, dt);
    dt.forEach((Q, me) => {
      Q.subscribe((Je) => {
        (Je || Q.done) && dt.delete(me);
      });
    }),
      c.v7_partialHydration &&
        K &&
        v.errors &&
        Object.entries(v.errors)
          .filter((Q) => {
            let [me] = Q;
            return !Te.some((Je) => Je.route.id === me);
          })
          .forEach((Q) => {
            let [me, Je] = Q;
            kt = Object.assign(kt || {}, { [me]: Je });
          });
    let Ml = hs(),
      zl = ps(B),
      Fl = Ml || zl || we.length > 0;
    return ce(
      { matches: _, loaderData: Vn, errors: kt },
      Fl ? { fetchers: new Map(v.fetchers) } : {}
    );
  }
  function ss(g) {
    if (g && !Ze(g[1])) return { [g[0]]: g[1].data };
    if (v.actionData)
      return Object.keys(v.actionData).length === 0 ? null : v.actionData;
  }
  function lp(g) {
    return (
      g.forEach((E) => {
        let _ = v.fetchers.get(E.key),
          C = Ur(void 0, _ ? _.data : void 0);
        v.fetchers.set(E.key, C);
      }),
      new Map(v.fetchers)
    );
  }
  function ip(g, E, _, C) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ue.has(g) && Yt(g);
    let F = (C && C.unstable_flushSync) === !0,
      I = a || o,
      $ = Va(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        _,
        c.v7_relativeSplatPath,
        E,
        C == null ? void 0 : C.relative
      ),
      D = Ft(I, $, u),
      K = Dl(D, I, $);
    if ((K.active && K.matches && (D = K.matches), !D)) {
      Dt(g, E, Ae(404, { pathname: $ }), { flushSync: F });
      return;
    }
    let {
      path: U,
      submission: A,
      error: te,
    } = Dc(c.v7_normalizeFormMethod, !0, $, C);
    if (te) {
      Dt(g, E, te, { flushSync: F });
      return;
    }
    let q = Kr(D, U);
    if (((R = (C && C.preventScrollReset) === !0), A && vt(A.formMethod))) {
      op(g, E, U, q, D, K.active, F, A);
      return;
    }
    ie.set(g, { routeId: E, path: U }), ap(g, E, U, q, D, K.active, F, A);
  }
  async function op(g, E, _, C, F, I, $, D) {
    mo(), ie.delete(g);
    function K(se) {
      if (!se.route.action && !se.route.lazy) {
        let Ot = Ae(405, { method: D.formMethod, pathname: _, routeId: E });
        return Dt(g, E, Ot, { flushSync: $ }), !0;
      }
      return !1;
    }
    if (!I && K(C)) return;
    let U = v.fetchers.get(g);
    Qt(g, Hy(D, U), { flushSync: $ });
    let A = new AbortController(),
      te = Kn(e.history, _, A.signal, D);
    if (I) {
      let se = await Ol(F, _, te.signal);
      if (se.type === 'aborted') return;
      if (se.type === 'error') {
        let { error: Ot } = Nl(_, se);
        Dt(g, E, Ot, { flushSync: $ });
        return;
      } else if (se.matches) {
        if (((F = se.matches), (C = Kr(F, _)), K(C))) return;
      } else {
        Dt(g, E, Ae(404, { pathname: _ }), { flushSync: $ });
        return;
      }
    }
    ue.set(g, A);
    let q = z,
      Z = (await Rr('action', te, [C], F))[0];
    if (te.signal.aborted) {
      ue.get(g) === A && ue.delete(g);
      return;
    }
    if (c.v7_fetcherPersist && Le.has(g)) {
      if (Pn(Z) || Ze(Z)) {
        Qt(g, Gt(void 0));
        return;
      }
    } else {
      if (Pn(Z))
        if ((ue.delete(g), B > q)) {
          Qt(g, Gt(void 0));
          return;
        } else
          return G.add(g), Qt(g, Ur(D)), Pr(te, Z, { fetcherSubmission: D });
      if (Ze(Z)) {
        Dt(g, E, Z.error);
        return;
      }
    }
    if (Cn(Z)) throw Ae(400, { type: 'defer-action' });
    let Te = v.navigation.location || v.location,
      we = Kn(e.history, Te, A.signal),
      Lr = a || o,
      Xt =
        v.navigation.state !== 'idle'
          ? Ft(Lr, v.navigation.location, u)
          : v.matches;
    W(Xt, "Didn't find any matches after fetcher action");
    let Bn = ++z;
    H.set(g, Bn);
    let Hn = Ur(D, Z.data);
    v.fetchers.set(g, Hn);
    let [Vn, kt] = Oc(
      e.history,
      v,
      Xt,
      D,
      Te,
      !1,
      c.v7_skipActionErrorRevalidation,
      ee,
      ke,
      rt,
      Le,
      ie,
      G,
      Lr,
      u,
      [C.route.id, Z]
    );
    kt
      .filter((se) => se.key !== g)
      .forEach((se) => {
        let Ot = se.key,
          ws = v.fetchers.get(Ot),
          pp = Ur(void 0, ws ? ws.data : void 0);
        v.fetchers.set(Ot, pp),
          ue.has(Ot) && Yt(Ot),
          se.controller && ue.set(Ot, se.controller);
      }),
      Ue({ fetchers: new Map(v.fetchers) });
    let Ml = () => kt.forEach((se) => Yt(se.key));
    A.signal.addEventListener('abort', Ml);
    let { loaderResults: zl, fetcherResults: Fl } = await cs(
      v.matches,
      Xt,
      Vn,
      kt,
      we
    );
    if (A.signal.aborted) return;
    A.signal.removeEventListener('abort', Ml),
      H.delete(g),
      ue.delete(g),
      kt.forEach((se) => ue.delete(se.key));
    let Q = Bc([...zl, ...Fl]);
    if (Q) {
      if (Q.idx >= Vn.length) {
        let se = kt[Q.idx - Vn.length].key;
        G.add(se);
      }
      return Pr(we, Q.result);
    }
    let { loaderData: me, errors: Je } = Ic(
      v,
      v.matches,
      Vn,
      zl,
      void 0,
      kt,
      Fl,
      dt
    );
    if (v.fetchers.has(g)) {
      let se = Gt(Z.data);
      v.fetchers.set(g, se);
    }
    ps(Bn),
      v.navigation.state === 'loading' && Bn > B
        ? (W(T, 'Expected pending action'),
          O && O.abort(),
          $n(v.navigation.location, {
            matches: Xt,
            loaderData: me,
            errors: Je,
            fetchers: new Map(v.fetchers),
          }))
        : (Ue({
            errors: Je,
            loaderData: Uc(v.loaderData, me, Xt, Je),
            fetchers: new Map(v.fetchers),
          }),
          (ee = !1));
  }
  async function ap(g, E, _, C, F, I, $, D) {
    let K = v.fetchers.get(g);
    Qt(g, Ur(D, K ? K.data : void 0), { flushSync: $ });
    let U = new AbortController(),
      A = Kn(e.history, _, U.signal);
    if (I) {
      let Z = await Ol(F, _, A.signal);
      if (Z.type === 'aborted') return;
      if (Z.type === 'error') {
        let { error: Te } = Nl(_, Z);
        Dt(g, E, Te, { flushSync: $ });
        return;
      } else if (Z.matches) (F = Z.matches), (C = Kr(F, _));
      else {
        Dt(g, E, Ae(404, { pathname: _ }), { flushSync: $ });
        return;
      }
    }
    ue.set(g, U);
    let te = z,
      re = (await Rr('loader', A, [C], F))[0];
    if (
      (Cn(re) && (re = (await Ph(re, A.signal, !0)) || re),
      ue.get(g) === U && ue.delete(g),
      !A.signal.aborted)
    ) {
      if (Le.has(g)) {
        Qt(g, Gt(void 0));
        return;
      }
      if (Pn(re))
        if (B > te) {
          Qt(g, Gt(void 0));
          return;
        } else {
          G.add(g), await Pr(A, re);
          return;
        }
      if (Ze(re)) {
        Dt(g, E, re.error);
        return;
      }
      W(!Cn(re), 'Unhandled fetcher deferred data'), Qt(g, Gt(re.data));
    }
  }
  async function Pr(g, E, _) {
    let {
      submission: C,
      fetcherSubmission: F,
      replace: I,
    } = _ === void 0 ? {} : _;
    E.response.headers.has('X-Remix-Revalidate') && (ee = !0);
    let $ = E.response.headers.get('Location');
    W($, 'Expected a Location header on the redirect Response'),
      ($ = Fc($, new URL(g.url), u));
    let D = gl(v.location, $, { _isRedirect: !0 });
    if (n) {
      let re = !1;
      if (E.response.headers.has('X-Remix-Reload-Document')) re = !0;
      else if (Ku.test($)) {
        const Z = e.history.createURL($);
        re = Z.origin !== t.location.origin || Et(Z.pathname, u) == null;
      }
      if (re) {
        I ? t.location.replace($) : t.location.assign($);
        return;
      }
    }
    O = null;
    let K =
        I === !0 || E.response.headers.has('X-Remix-Replace')
          ? Se.Replace
          : Se.Push,
      { formMethod: U, formAction: A, formEncType: te } = v.navigation;
    !C && !F && U && A && te && (C = Wc(v.navigation));
    let q = C || F;
    if (ky.has(E.response.status) && q && vt(q.formMethod))
      await wn(K, D, {
        submission: ce({}, q, { formAction: $ }),
        preventScrollReset: R,
      });
    else {
      let re = Qo(D, C);
      await wn(K, D, {
        overrideNavigation: re,
        fetcherSubmission: F,
        preventScrollReset: R,
      });
    }
  }
  async function Rr(g, E, _, C) {
    try {
      let F = await Dy(s, g, E, _, C, i, l);
      return await Promise.all(
        F.map((I, $) => {
          if (Uy(I)) {
            let D = I.result;
            return {
              type: ne.redirect,
              response: zy(D, E, _[$].route.id, C, u, c.v7_relativeSplatPath),
            };
          }
          return My(I);
        })
      );
    } catch (F) {
      return _.map(() => ({ type: ne.error, error: F }));
    }
  }
  async function cs(g, E, _, C, F) {
    let [I, ...$] = await Promise.all([
      _.length ? Rr('loader', F, _, E) : [],
      ...C.map((D) => {
        if (D.matches && D.match && D.controller) {
          let K = Kn(e.history, D.path, D.controller.signal);
          return Rr('loader', K, [D.match], D.matches).then((U) => U[0]);
        } else
          return Promise.resolve({
            type: ne.error,
            error: Ae(404, { pathname: D.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Vc(
          g,
          _,
          I,
          I.map(() => F.signal),
          !1,
          v.loaderData
        ),
        Vc(
          g,
          C.map((D) => D.match),
          $,
          C.map((D) => (D.controller ? D.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: I, fetcherResults: $ }
    );
  }
  function mo() {
    (ee = !0),
      ke.push(...yo()),
      ie.forEach((g, E) => {
        ue.has(E) && (rt.add(E), Yt(E));
      });
  }
  function Qt(g, E, _) {
    _ === void 0 && (_ = {}),
      v.fetchers.set(g, E),
      Ue(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 }
      );
  }
  function Dt(g, E, _, C) {
    C === void 0 && (C = {});
    let F = lr(v.matches, E);
    Ll(g),
      Ue(
        { errors: { [F.route.id]: _ }, fetchers: new Map(v.fetchers) },
        { flushSync: (C && C.flushSync) === !0 }
      );
  }
  function fs(g) {
    return (
      c.v7_fetcherPersist &&
        (xt.set(g, (xt.get(g) || 0) + 1), Le.has(g) && Le.delete(g)),
      v.fetchers.get(g) || _y
    );
  }
  function Ll(g) {
    let E = v.fetchers.get(g);
    ue.has(g) && !(E && E.state === 'loading' && H.has(g)) && Yt(g),
      ie.delete(g),
      H.delete(g),
      G.delete(g),
      Le.delete(g),
      rt.delete(g),
      v.fetchers.delete(g);
  }
  function up(g) {
    if (c.v7_fetcherPersist) {
      let E = (xt.get(g) || 0) - 1;
      E <= 0 ? (xt.delete(g), Le.add(g)) : xt.set(g, E);
    } else Ll(g);
    Ue({ fetchers: new Map(v.fetchers) });
  }
  function Yt(g) {
    let E = ue.get(g);
    W(E, 'Expected fetch controller: ' + g), E.abort(), ue.delete(g);
  }
  function ds(g) {
    for (let E of g) {
      let _ = fs(E),
        C = Gt(_.data);
      v.fetchers.set(E, C);
    }
  }
  function hs() {
    let g = [],
      E = !1;
    for (let _ of G) {
      let C = v.fetchers.get(_);
      W(C, 'Expected fetcher: ' + _),
        C.state === 'loading' && (G.delete(_), g.push(_), (E = !0));
    }
    return ds(g), E;
  }
  function ps(g) {
    let E = [];
    for (let [_, C] of H)
      if (C < g) {
        let F = v.fetchers.get(_);
        W(F, 'Expected fetcher: ' + _),
          F.state === 'loading' && (Yt(_), H.delete(_), E.push(_));
      }
    return ds(E), E.length > 0;
  }
  function sp(g, E) {
    let _ = v.blockers.get(g) || Ir;
    return Ie.get(g) !== E && Ie.set(g, E), _;
  }
  function ms(g) {
    v.blockers.delete(g), Ie.delete(g);
  }
  function Tl(g, E) {
    let _ = v.blockers.get(g) || Ir;
    W(
      (_.state === 'unblocked' && E.state === 'blocked') ||
        (_.state === 'blocked' && E.state === 'blocked') ||
        (_.state === 'blocked' && E.state === 'proceeding') ||
        (_.state === 'blocked' && E.state === 'unblocked') ||
        (_.state === 'proceeding' && E.state === 'unblocked'),
      'Invalid blocker state transition: ' + _.state + ' -> ' + E.state
    );
    let C = new Map(v.blockers);
    C.set(g, E), Ue({ blockers: C });
  }
  function vs(g) {
    let { currentLocation: E, nextLocation: _, historyAction: C } = g;
    if (Ie.size === 0) return;
    Ie.size > 1 && gr(!1, 'A router only supports one blocker at a time');
    let F = Array.from(Ie.entries()),
      [I, $] = F[F.length - 1],
      D = v.blockers.get(I);
    if (
      !(D && D.state === 'proceeding') &&
      $({ currentLocation: E, nextLocation: _, historyAction: C })
    )
      return I;
  }
  function vo(g) {
    let E = Ae(404, { pathname: g }),
      _ = a || o,
      { matches: C, route: F } = $c(_);
    return yo(), { notFoundMatches: C, route: F, error: E };
  }
  function Nl(g, E) {
    return {
      boundaryId: lr(E.partialMatches).route.id,
      error: Ae(400, {
        type: 'route-discovery',
        pathname: g,
        message:
          E.error != null && 'message' in E.error ? E.error : String(E.error),
      }),
    };
  }
  function yo(g) {
    let E = [];
    return (
      dt.forEach((_, C) => {
        (!g || g(C)) && (_.cancel(), E.push(C), dt.delete(C));
      }),
      E
    );
  }
  function cp(g, E, _) {
    if (((w = g), (P = E), (S = _ || null), !p && v.navigation === Ko)) {
      p = !0;
      let C = gs(v.location, v.matches);
      C != null && Ue({ restoreScrollPosition: C });
    }
    return () => {
      (w = null), (P = null), (S = null);
    };
  }
  function ys(g, E) {
    return (
      (S &&
        S(
          g,
          E.map((C) => Gv(C, v.loaderData))
        )) ||
      g.key
    );
  }
  function fp(g, E) {
    if (w && P) {
      let _ = ys(g, E);
      w[_] = P();
    }
  }
  function gs(g, E) {
    if (w) {
      let _ = ys(g, E),
        C = w[_];
      if (typeof C == 'number') return C;
    }
    return null;
  }
  function Dl(g, E, _) {
    if (f)
      if (g) {
        let C = g[g.length - 1].route;
        if (C.path && (C.path === '*' || C.path.endsWith('/*')))
          return { active: !0, matches: vi(E, _, u, !0) };
      } else return { active: !0, matches: vi(E, _, u, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Ol(g, E, _) {
    let C = g,
      F = C.length > 0 ? C[C.length - 1].route : null;
    for (;;) {
      let I = a == null,
        $ = a || o;
      try {
        await Ty(f, E, C, $, i, l, An, _);
      } catch (A) {
        return { type: 'error', error: A, partialMatches: C };
      } finally {
        I && (o = [...o]);
      }
      if (_.aborted) return { type: 'aborted' };
      let D = Ft($, E, u),
        K = !1;
      if (D) {
        let A = D[D.length - 1].route;
        if (A.index) return { type: 'success', matches: D };
        if (A.path && A.path.length > 0)
          if (A.path === '*') K = !0;
          else return { type: 'success', matches: D };
      }
      let U = vi($, E, u, !0);
      if (
        !U ||
        C.map((A) => A.route.id).join('-') ===
          U.map((A) => A.route.id).join('-')
      )
        return { type: 'success', matches: K ? D : null };
      if (((C = U), (F = C[C.length - 1].route), F.path === '*'))
        return { type: 'success', matches: C };
    }
  }
  function dp(g) {
    (i = {}), (a = wl(g, l, void 0, i));
  }
  function hp(g, E) {
    let _ = a == null;
    kh(g, E, a || o, i, l), _ && ((o = [...o]), Ue({}));
  }
  return (
    (L = {
      get basename() {
        return u;
      },
      get future() {
        return c;
      },
      get state() {
        return v;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: qh,
      subscribe: ep,
      enableScrollRestoration: cp,
      navigate: us,
      fetch: ip,
      revalidate: tp,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: fs,
      deleteFetcher: up,
      dispose: bh,
      getBlocker: sp,
      deleteBlocker: ms,
      patchRoutes: hp,
      _internalFetchControllers: ue,
      _internalActiveDeferreds: dt,
      _internalSetRoutes: dp,
    }),
    L
  );
}
function Py(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Va(e, t, n, r, l, i, o, a) {
  let u, s;
  if (o) {
    u = [];
    for (let c of t)
      if ((u.push(c), c.route.id === o)) {
        s = c;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let f = Wu(l || '.', Vu(u, i), Et(e.pathname, n) || e.pathname, a === 'path');
  return (
    l == null && ((f.search = e.search), (f.hash = e.hash)),
    (l == null || l === '' || l === '.') &&
      s &&
      s.route.index &&
      !Qu(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (f.pathname = f.pathname === '/' ? n : Tt([n, f.pathname])),
    pn(f)
  );
}
function Dc(e, t, n, r) {
  if (!r || !Py(r)) return { path: n };
  if (r.formMethod && !$y(r.formMethod))
    return { path: n, error: Ae(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Ae(400, { type: 'invalid-body' }) }),
    i = r.formMethod || 'get',
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = _h(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!vt(o)) return l();
      let h =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((x, w) => {
                let [S, P] = w;
                return (
                  '' +
                  x +
                  S +
                  '=' +
                  P +
                  `
`
                );
              }, '')
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!vt(o)) return l();
      try {
        let h = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  W(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let u, s;
  if (r.formData) (u = Wa(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = Wa(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = jc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = jc(u));
    } catch {
      return l();
    }
  let f = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (vt(f.formMethod)) return { path: n, submission: f };
  let c = Wt(n);
  return (
    t && c.search && Qu(c.search) && u.append('index', ''),
    (c.search = '?' + u),
    { path: pn(c), submission: f }
  );
}
function Ry(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Oc(e, t, n, r, l, i, o, a, u, s, f, c, h, x, w, S) {
  let P = S ? (Ze(S[1]) ? S[1].error : S[1].data) : void 0,
    p = e.createURL(t.location),
    d = e.createURL(l),
    m = S && Ze(S[1]) ? S[0] : void 0,
    k = m ? Ry(n, m) : n,
    L = S ? S[1].statusCode : void 0,
    v = o && L && L >= 400,
    T = k.filter((O, M) => {
      let { route: V } = O;
      if (V.lazy) return !0;
      if (V.loader == null) return !1;
      if (i)
        return typeof V.loader != 'function' || V.loader.hydrate
          ? !0
          : t.loaderData[V.id] === void 0 &&
              (!t.errors || t.errors[V.id] === void 0);
      if (
        Ly(t.loaderData, t.matches[M], O) ||
        u.some((ee) => ee === O.route.id)
      )
        return !0;
      let X = t.matches[M],
        ge = O;
      return Mc(
        O,
        ce(
          {
            currentUrl: p,
            currentParams: X.params,
            nextUrl: d,
            nextParams: ge.params,
          },
          r,
          {
            actionResult: P,
            actionStatus: L,
            defaultShouldRevalidate: v
              ? !1
              : a ||
                p.pathname + p.search === d.pathname + d.search ||
                p.search !== d.search ||
                xh(X, ge),
          }
        )
      );
    }),
    R = [];
  return (
    c.forEach((O, M) => {
      if (i || !n.some((ke) => ke.route.id === O.routeId) || f.has(M)) return;
      let V = Ft(x, O.path, w);
      if (!V) {
        R.push({
          key: M,
          routeId: O.routeId,
          path: O.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let X = t.fetchers.get(M),
        ge = Kr(V, O.path),
        ee = !1;
      h.has(M)
        ? (ee = !1)
        : s.has(M)
          ? (s.delete(M), (ee = !0))
          : X && X.state !== 'idle' && X.data === void 0
            ? (ee = a)
            : (ee = Mc(
                ge,
                ce(
                  {
                    currentUrl: p,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: d,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: P,
                    actionStatus: L,
                    defaultShouldRevalidate: v ? !1 : a,
                  }
                )
              )),
        ee &&
          R.push({
            key: M,
            routeId: O.routeId,
            path: O.path,
            matches: V,
            match: ge,
            controller: new AbortController(),
          });
    }),
    [T, R]
  );
}
function Ly(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function xh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Mc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function Ty(e, t, n, r, l, i, o, a) {
  let u = [t, ...n.map((s) => s.route.id)].join('-');
  try {
    let s = o.get(u);
    s ||
      ((s = e({
        path: t,
        matches: n,
        patch: (f, c) => {
          a.aborted || kh(f, c, r, l, i);
        },
      })),
      o.set(u, s)),
      s && Iy(s) && (await s);
  } finally {
    o.delete(u);
  }
}
function kh(e, t, n, r, l) {
  if (e) {
    var i;
    let o = r[e];
    W(o, 'No route found to patch children into: routeId = ' + e);
    let a = wl(
      t,
      l,
      [
        e,
        'patch',
        String(((i = o.children) == null ? void 0 : i.length) || '0'),
      ],
      r
    );
    o.children ? o.children.push(...a) : (o.children = a);
  } else {
    let o = wl(t, l, ['patch', String(n.length || '0')], r);
    n.push(...o);
  }
}
async function zc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  W(l, 'No route found in manifest');
  let i = {};
  for (let o in r) {
    let u = l[o] !== void 0 && o !== 'hasErrorBoundary';
    gr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !u && !Xv.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, ce({}, t(l), { lazy: void 0 }));
}
function Ny(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function Dy(e, t, n, r, l, i, o, a) {
  let u = r.reduce((c, h) => c.add(h.route.id), new Set()),
    s = new Set(),
    f = await e({
      matches: l.map((c) => {
        let h = u.has(c.route.id);
        return ce({}, c, {
          shouldLoad: h,
          resolve: (w) => (
            s.add(c.route.id),
            h
              ? Oy(t, n, c, i, o, w, a)
              : Promise.resolve({ type: ne.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: a,
    });
  return (
    l.forEach((c) =>
      W(
        s.has(c.route.id),
        '`match.resolve()` was not called for route id "' +
          c.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    f.filter((c, h) => u.has(l[h].route.id))
  );
}
async function Oy(e, t, n, r, l, i, o) {
  let a,
    u,
    s = (f) => {
      let c,
        h = new Promise((S, P) => (c = P));
      (u = () => c()), t.signal.addEventListener('abort', u);
      let x = (S) =>
          typeof f != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + n.route.id + ']')
                )
              )
            : f(
                { request: t, params: n.params, context: o },
                ...(S !== void 0 ? [S] : [])
              ),
        w;
      return (
        i
          ? (w = i((S) => x(S)))
          : (w = (async () => {
              try {
                return { type: 'data', result: await x() };
              } catch (S) {
                return { type: 'error', result: S };
              }
            })()),
        Promise.race([w, h])
      );
    };
  try {
    let f = n.route[e];
    if (n.route.lazy)
      if (f) {
        let c,
          [h] = await Promise.all([
            s(f).catch((x) => {
              c = x;
            }),
            zc(n.route, l, r),
          ]);
        if (c !== void 0) throw c;
        a = h;
      } else if ((await zc(n.route, l, r), (f = n.route[e]), f)) a = await s(f);
      else if (e === 'action') {
        let c = new URL(t.url),
          h = c.pathname + c.search;
        throw Ae(405, { method: t.method, pathname: h, routeId: n.route.id });
      } else return { type: ne.data, result: void 0 };
    else if (f) a = await s(f);
    else {
      let c = new URL(t.url),
        h = c.pathname + c.search;
      throw Ae(404, { pathname: h });
    }
    W(
      a.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (f) {
    return { type: ne.error, result: f };
  } finally {
    u && t.signal.removeEventListener('abort', u);
  }
  return a;
}
async function My(e) {
  let { result: t, type: n } = e;
  if (Ch(t)) {
    let s;
    try {
      let f = t.headers.get('Content-Type');
      f && /\bapplication\/json\b/.test(f)
        ? t.body == null
          ? (s = null)
          : (s = await t.json())
        : (s = await t.text());
    } catch (f) {
      return { type: ne.error, error: f };
    }
    return n === ne.error
      ? {
          type: ne.error,
          error: new Fn(t.status, t.statusText, s),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: ne.data, data: s, statusCode: t.status, headers: t.headers };
  }
  if (n === ne.error) {
    if (Hc(t)) {
      var r;
      if (t.data instanceof Error) {
        var l;
        return {
          type: ne.error,
          error: t.data,
          statusCode: (l = t.init) == null ? void 0 : l.status,
        };
      }
      t = new Fn(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data
      );
    }
    return { type: ne.error, error: t, statusCode: kr(t) ? t.status : void 0 };
  }
  if (Ay(t)) {
    var i, o;
    return {
      type: ne.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Hc(t)) {
    var a, u;
    return {
      type: ne.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: ne.data, data: t };
}
function zy(e, t, n, r, l, i) {
  let o = e.headers.get('Location');
  if (
    (W(
      o,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !Ku.test(o))
  ) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (o = Va(new URL(t.url), a, l, !0, o, i)), e.headers.set('Location', o);
  }
  return e;
}
function Fc(e, t, n) {
  if (Ku.test(e)) {
    let r = e,
      l = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
      i = Et(l.pathname, n) != null;
    if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
  }
  return e;
}
function Kn(e, t, n, r) {
  let l = e.createURL(_h(t)).toString(),
    i = { signal: n };
  if (r && vt(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === 'application/json'
        ? ((i.headers = new Headers({ 'Content-Type': a })),
          (i.body = JSON.stringify(r.json)))
        : a === 'text/plain'
          ? (i.body = r.text)
          : a === 'application/x-www-form-urlencoded' && r.formData
            ? (i.body = Wa(r.formData))
            : (i.body = r.formData);
  }
  return new Request(l, i);
}
function Wa(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function jc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Fy(e, t, n, r, l, i) {
  let o = {},
    a = null,
    u,
    s = !1,
    f = {},
    c = r && Ze(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((h, x) => {
      let w = t[x].route.id;
      if (
        (W(!Pn(h), 'Cannot handle redirect results in processLoaderData'),
        Ze(h))
      ) {
        let S = h.error;
        c !== void 0 && ((S = c), (c = void 0)), (a = a || {});
        {
          let P = lr(e, w);
          a[P.route.id] == null && (a[P.route.id] = S);
        }
        (o[w] = void 0),
          s || ((s = !0), (u = kr(h.error) ? h.error.status : 500)),
          h.headers && (f[w] = h.headers);
      } else
        Cn(h)
          ? (l.set(w, h.deferredData),
            (o[w] = h.deferredData.data),
            h.statusCode != null &&
              h.statusCode !== 200 &&
              !s &&
              (u = h.statusCode),
            h.headers && (f[w] = h.headers))
          : ((o[w] = h.data),
            h.statusCode && h.statusCode !== 200 && !s && (u = h.statusCode),
            h.headers && (f[w] = h.headers));
    }),
    c !== void 0 && r && ((a = { [r[0]]: c }), (o[r[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: u || 200, loaderHeaders: f }
  );
}
function Ic(e, t, n, r, l, i, o, a) {
  let { loaderData: u, errors: s } = Fy(t, n, r, l, a);
  for (let f = 0; f < i.length; f++) {
    let { key: c, match: h, controller: x } = i[f];
    W(
      o !== void 0 && o[f] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let w = o[f];
    if (!(x && x.signal.aborted))
      if (Ze(w)) {
        let S = lr(e.matches, h == null ? void 0 : h.route.id);
        (s && s[S.route.id]) || (s = ce({}, s, { [S.route.id]: w.error })),
          e.fetchers.delete(c);
      } else if (Pn(w)) W(!1, 'Unhandled fetcher revalidation redirect');
      else if (Cn(w)) W(!1, 'Unhandled fetcher deferred data');
      else {
        let S = Gt(w.data);
        e.fetchers.set(c, S);
      }
  }
  return { loaderData: u, errors: s };
}
function Uc(e, t, n, r) {
  let l = ce({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function Ac(e) {
  return e
    ? Ze(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function lr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function $c(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function Ae(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: l,
      type: i,
      message: o,
    } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((a = 'Bad Request'),
        i === 'route-discovery'
          ? (u =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnMiss()` ' +
              (`function threw the following error:
` +
                o))
          : l && n && r
            ? (u =
                'You made a ' +
                l +
                ' request to "' +
                n +
                '" but ' +
                ('did not provide a `loader` for route "' + r + '", ') +
                'so there is no way to handle the request.')
            : i === 'defer-action'
              ? (u = 'defer() is not supported in actions')
              : i === 'invalid-body' &&
                (u = 'Unable to encode submission body'))
      : e === 403
        ? ((a = 'Forbidden'),
          (u = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = 'Method Not Allowed'),
            l && n && r
              ? (u =
                  'You made a ' +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  'so there is no way to handle the request.')
              : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Fn(e || 500, a, new Error(u), !0)
  );
}
function Bc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Pn(n)) return { result: n, idx: t };
  }
}
function _h(e) {
  let t = typeof e == 'string' ? Wt(e) : e;
  return pn(ce({}, t, { hash: '' }));
}
function jy(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function Iy(e) {
  return typeof e == 'object' && e != null && 'then' in e;
}
function Uy(e) {
  return Ch(e.result) && xy.has(e.result.status);
}
function Cn(e) {
  return e.type === ne.deferred;
}
function Ze(e) {
  return e.type === ne.error;
}
function Pn(e) {
  return (e && e.type) === ne.redirect;
}
function Hc(e) {
  return (
    typeof e == 'object' &&
    e != null &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    e.type === 'DataWithResponseInit'
  );
}
function Ay(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function Ch(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function $y(e) {
  return Ey.has(e.toLowerCase());
}
function vt(e) {
  return wy.has(e.toLowerCase());
}
async function Vc(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      u = t[o];
    if (!u) continue;
    let s = e.find((c) => c.route.id === u.route.id),
      f = s != null && !xh(s, u) && (i && i[u.route.id]) !== void 0;
    if (Cn(a) && (l || f)) {
      let c = r[o];
      W(c, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Ph(a, c, l).then((h) => {
          h && (n[o] = h || n[o]);
        });
    }
  }
}
async function Ph(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ne.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: ne.error, error: l };
      }
    return { type: ne.data, data: e.deferredData.data };
  }
}
function Qu(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Kr(e, t) {
  let n = typeof t == 'string' ? Wt(t).search : t.search;
  if (e[e.length - 1].route.index && Qu(n || '')) return e[e.length - 1];
  let r = gh(e);
  return r[r.length - 1];
}
function Wc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Qo(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function By(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ur(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Hy(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Gt(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Vy(e, t) {
  try {
    let n = e.sessionStorage.getItem(Eh);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function Wy(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Eh, JSON.stringify(n));
    } catch (r) {
      gr(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      );
    }
  }
}
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ki() {
  return (
    (Ki = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ki.apply(this, arguments)
  );
}
const _r = y.createContext(null),
  co = y.createContext(null),
  Qi = y.createContext(null),
  Nt = y.createContext(null),
  Yu = y.createContext(null),
  Kt = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Rh = y.createContext(null);
function Xu(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Pl() || W(!1);
  let { basename: r, navigator: l } = y.useContext(Nt),
    { hash: i, pathname: o, search: a } = Rl(e, { relative: n }),
    u = o;
  return (
    r !== '/' && (u = o === '/' ? r : Tt([r, o])),
    l.createHref({ pathname: u, search: a, hash: i })
  );
}
function Pl() {
  return y.useContext(Yu) != null;
}
function gn() {
  return Pl() || W(!1), y.useContext(Yu).location;
}
function Lh(e) {
  y.useContext(Nt).static || y.useLayoutEffect(e);
}
function Ky() {
  let { isDataRoute: e } = y.useContext(Kt);
  return e ? ag() : Qy();
}
function Qy() {
  Pl() || W(!1);
  let e = y.useContext(_r),
    { basename: t, future: n, navigator: r } = y.useContext(Nt),
    { matches: l } = y.useContext(Kt),
    { pathname: i } = gn(),
    o = JSON.stringify(Vu(l, n.v7_relativeSplatPath)),
    a = y.useRef(!1);
  return (
    Lh(() => {
      a.current = !0;
    }),
    y.useCallback(
      function (s, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof s == 'number') {
          r.go(s);
          return;
        }
        let c = Wu(s, JSON.parse(o), i, f.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Tt([t, c.pathname])),
          (f.replace ? r.replace : r.push)(c, f.state, f);
      },
      [t, r, o, i, e]
    )
  );
}
const Yy = y.createContext(null);
function Xy(e) {
  let t = y.useContext(Kt).outlet;
  return t && y.createElement(Yy.Provider, { value: e }, t);
}
function Rl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(Nt),
    { matches: l } = y.useContext(Kt),
    { pathname: i } = gn(),
    o = JSON.stringify(Vu(l, r.v7_relativeSplatPath));
  return y.useMemo(() => Wu(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function Jy(e, t, n, r) {
  Pl() || W(!1);
  let { navigator: l } = y.useContext(Nt),
    { matches: i } = y.useContext(Kt),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : '/';
  o && o.route;
  let s = gn(),
    f;
  f = s;
  let c = f.pathname || '/',
    h = c;
  if (u !== '/') {
    let S = u.replace(/^\//, '').split('/');
    h = '/' + c.replace(/^\//, '').split('/').slice(S.length).join('/');
  }
  let x = Ft(e, { pathname: h });
  return eg(
    x &&
      x.map((S) =>
        Object.assign({}, S, {
          params: Object.assign({}, a, S.params),
          pathname: Tt([
            u,
            l.encodeLocation
              ? l.encodeLocation(S.pathname).pathname
              : S.pathname,
          ]),
          pathnameBase:
            S.pathnameBase === '/'
              ? u
              : Tt([
                  u,
                  l.encodeLocation
                    ? l.encodeLocation(S.pathnameBase).pathname
                    : S.pathnameBase,
                ]),
        })
      ),
    i,
    n,
    r
  );
}
function Gy() {
  let e = Nh(),
    t = kr(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement('h2', null, 'Unexpected Application Error!'),
    y.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? y.createElement('pre', { style: l }, n) : null,
    null
  );
}
const Zy = y.createElement(Gy, null);
class qy extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          Kt.Provider,
          { value: this.props.routeContext },
          y.createElement(Rh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function by(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = y.useContext(_r);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Kt.Provider, { value: t }, r)
  );
}
function eg(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let f = o.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0
    );
    f >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, f + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < o.length; f++) {
      let c = o[f];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (s = f),
        c.route.id)
      ) {
        let { loaderData: h, errors: x } = n,
          w =
            c.route.loader &&
            h[c.route.id] === void 0 &&
            (!x || x[c.route.id] === void 0);
        if (c.route.lazy || w) {
          (u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((f, c, h) => {
    let x,
      w = !1,
      S = null,
      P = null;
    n &&
      ((x = a && c.route.id ? a[c.route.id] : void 0),
      (S = c.route.errorElement || Zy),
      u &&
        (s < 0 && h === 0
          ? ((w = !0), (P = null))
          : s === h &&
            ((w = !0), (P = c.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, h + 1)),
      d = () => {
        let m;
        return (
          x
            ? (m = S)
            : w
              ? (m = P)
              : c.route.Component
                ? (m = y.createElement(c.route.Component, null))
                : c.route.element
                  ? (m = c.route.element)
                  : (m = f),
          y.createElement(by, {
            match: c,
            routeContext: { outlet: f, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || h === 0)
      ? y.createElement(qy, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: x,
          children: d(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Th = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Th || {}),
  Sl = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Sl || {});
function tg(e) {
  let t = y.useContext(_r);
  return t || W(!1), t;
}
function ng(e) {
  let t = y.useContext(co);
  return t || W(!1), t;
}
function rg(e) {
  let t = y.useContext(Kt);
  return t || W(!1), t;
}
function Ju(e) {
  let t = rg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function lg() {
  return Ju(Sl.UseRouteId);
}
function Nh() {
  var e;
  let t = y.useContext(Rh),
    n = ng(Sl.UseRouteError),
    r = Ju(Sl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ig() {
  let e = y.useContext(Qi);
  return e == null ? void 0 : e._data;
}
function og() {
  let e = y.useContext(Qi);
  return e == null ? void 0 : e._error;
}
function ag() {
  let { router: e } = tg(Th.UseNavigateStable),
    t = Ju(Sl.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Lh(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, Ki({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function l1(e) {
  return Xy(e.context);
}
function ug(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = Se.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  Pl() && W(!1);
  let u = t.replace(/^\/*/, '/'),
    s = y.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: Ki({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, o]
    );
  typeof r == 'string' && (r = Wt(r));
  let {
      pathname: f = '/',
      search: c = '',
      hash: h = '',
      state: x = null,
      key: w = 'default',
    } = r,
    S = y.useMemo(() => {
      let P = Et(f, u);
      return P == null
        ? null
        : {
            location: { pathname: P, search: c, hash: h, state: x, key: w },
            navigationType: l,
          };
    }, [u, f, c, h, x, w, l]);
  return S == null
    ? null
    : y.createElement(
        Nt.Provider,
        { value: s },
        y.createElement(Yu.Provider, { children: n, value: S })
      );
}
function sg(e) {
  let { children: t, errorElement: n, resolve: r } = e;
  return y.createElement(
    fg,
    { resolve: r, errorElement: n },
    y.createElement(dg, null, t)
  );
}
var lt = (function (e) {
  return (
    (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error'),
    e
  );
})(lt || {});
const cg = new Promise(() => {});
class fg extends y.Component {
  constructor(t) {
    super(t), (this.state = { error: null });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {
    console.error('<Await> caught the following error during render', t, n);
  }
  render() {
    let { children: t, errorElement: n, resolve: r } = this.props,
      l = null,
      i = lt.pending;
    if (!(r instanceof Promise))
      (i = lt.success),
        (l = Promise.resolve()),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_data', { get: () => r });
    else if (this.state.error) {
      i = lt.error;
      let o = this.state.error;
      (l = Promise.reject().catch(() => {})),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_error', { get: () => o });
    } else
      r._tracked
        ? ((l = r),
          (i =
            '_error' in l ? lt.error : '_data' in l ? lt.success : lt.pending))
        : ((i = lt.pending),
          Object.defineProperty(r, '_tracked', { get: () => !0 }),
          (l = r.then(
            (o) => Object.defineProperty(r, '_data', { get: () => o }),
            (o) => Object.defineProperty(r, '_error', { get: () => o })
          )));
    if (i === lt.error && l._error instanceof Wi) throw cg;
    if (i === lt.error && !n) throw l._error;
    if (i === lt.error)
      return y.createElement(Qi.Provider, { value: l, children: n });
    if (i === lt.success)
      return y.createElement(Qi.Provider, { value: l, children: t });
    throw l;
  }
}
function dg(e) {
  let { children: t } = e,
    n = ig(),
    r = typeof t == 'function' ? t(n) : t;
  return y.createElement(y.Fragment, null, r);
}
function i1(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: y.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: y.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: y.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wr() {
  return (
    (wr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wr.apply(this, arguments)
  );
}
function Gu(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const yi = 'get',
  Yo = 'application/x-www-form-urlencoded';
function fo(e) {
  return e != null && typeof e.tagName == 'string';
}
function hg(e) {
  return fo(e) && e.tagName.toLowerCase() === 'button';
}
function pg(e) {
  return fo(e) && e.tagName.toLowerCase() === 'form';
}
function mg(e) {
  return fo(e) && e.tagName.toLowerCase() === 'input';
}
function vg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function yg(e, t) {
  return e.button === 0 && (!t || t === '_self') && !vg(e);
}
let ei = null;
function gg() {
  if (ei === null)
    try {
      new FormData(document.createElement('form'), 0), (ei = !1);
    } catch {
      ei = !0;
    }
  return ei;
}
const wg = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Xo(e) {
  return e != null && !wg.has(e) ? null : e;
}
function Sg(e, t) {
  let n, r, l, i, o;
  if (pg(e)) {
    let a = e.getAttribute('action');
    (r = a ? Et(a, t) : null),
      (n = e.getAttribute('method') || yi),
      (l = Xo(e.getAttribute('enctype')) || Yo),
      (i = new FormData(e));
  } else if (hg(e) || (mg(e) && (e.type === 'submit' || e.type === 'image'))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let u = e.getAttribute('formaction') || a.getAttribute('action');
    if (
      ((r = u ? Et(u, t) : null),
      (n = e.getAttribute('formmethod') || a.getAttribute('method') || yi),
      (l =
        Xo(e.getAttribute('formenctype')) ||
        Xo(a.getAttribute('enctype')) ||
        Yo),
      (i = new FormData(a, e)),
      !gg())
    ) {
      let { name: s, type: f, value: c } = e;
      if (f === 'image') {
        let h = s ? s + '.' : '';
        i.append(h + 'x', '0'), i.append(h + 'y', '0');
      } else s && i.append(s, c);
    }
  } else {
    if (fo(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = yi), (r = null), (l = Yo), (o = e);
  }
  return (
    i && l === 'text/plain' && ((o = i), (i = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: i, body: o }
  );
}
const Eg = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  xg = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ],
  kg = [
    'fetcherKey',
    'navigate',
    'reloadDocument',
    'replace',
    'state',
    'method',
    'action',
    'onSubmit',
    'relative',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  _g = '6';
try {
  window.__reactRouterVersion = _g;
} catch {}
const Dh = y.createContext({ isTransitioning: !1 }),
  Cg = y.createContext(new Map()),
  Pg = 'startTransition',
  Kc = Mp[Pg],
  Rg = 'flushSync',
  Qc = Kv[Rg];
function Lg(e) {
  Kc ? Kc(e) : e();
}
function Ar(e) {
  Qc ? Qc(e) : e();
}
let Tg = class {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
};
function a1(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = y.useState(n.state),
    [o, a] = y.useState(),
    [u, s] = y.useState({ isTransitioning: !1 }),
    [f, c] = y.useState(),
    [h, x] = y.useState(),
    [w, S] = y.useState(),
    P = y.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    d = y.useCallback(
      (R) => {
        p ? Lg(R) : R();
      },
      [p]
    ),
    m = y.useCallback(
      (R, O) => {
        let {
          deletedFetchers: M,
          unstable_flushSync: V,
          unstable_viewTransitionOpts: X,
        } = O;
        M.forEach((ee) => P.current.delete(ee)),
          R.fetchers.forEach((ee, ke) => {
            ee.data !== void 0 && P.current.set(ke, ee.data);
          });
        let ge =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!X || ge) {
          V ? Ar(() => i(R)) : d(() => i(R));
          return;
        }
        if (V) {
          Ar(() => {
            h && (f && f.resolve(), h.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: X.currentLocation,
                nextLocation: X.nextLocation,
              });
          });
          let ee = n.window.document.startViewTransition(() => {
            Ar(() => i(R));
          });
          ee.finished.finally(() => {
            Ar(() => {
              c(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            Ar(() => x(ee));
          return;
        }
        h
          ? (f && f.resolve(),
            h.skipTransition(),
            S({
              state: R,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }))
          : (a(R),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }));
      },
      [n.window, h, f, P, d]
    );
  y.useLayoutEffect(() => n.subscribe(m), [n, m]),
    y.useEffect(() => {
      u.isTransitioning && !u.flushSync && c(new Tg());
    }, [u]),
    y.useEffect(() => {
      if (f && o && n.window) {
        let R = o,
          O = f.promise,
          M = n.window.document.startViewTransition(async () => {
            d(() => i(R)), await O;
          });
        M.finished.finally(() => {
          c(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          x(M);
      }
    }, [d, o, f, n.window]),
    y.useEffect(() => {
      f && o && l.location.key === o.location.key && f.resolve();
    }, [f, h, l.location, o]),
    y.useEffect(() => {
      !u.isTransitioning &&
        w &&
        (a(w.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        S(void 0));
    }, [u.isTransitioning, w]),
    y.useEffect(() => {}, []);
  let k = y.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (R) => n.navigate(R),
        push: (R, O, M) =>
          n.navigate(R, {
            state: O,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
        replace: (R, O, M) =>
          n.navigate(R, {
            replace: !0,
            state: O,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
      }),
      [n]
    ),
    L = n.basename || '/',
    v = y.useMemo(
      () => ({ router: n, navigator: k, static: !1, basename: L }),
      [n, k, L]
    ),
    T = y.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return y.createElement(
    y.Fragment,
    null,
    y.createElement(
      _r.Provider,
      { value: v },
      y.createElement(
        co.Provider,
        { value: l },
        y.createElement(
          Cg.Provider,
          { value: P.current },
          y.createElement(
            Dh.Provider,
            { value: u },
            y.createElement(
              ug,
              {
                basename: L,
                location: l.location,
                navigationType: l.historyAction,
                navigator: k,
                future: T,
              },
              l.initialized || n.future.v7_partialHydration
                ? y.createElement(Ng, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const Ng = y.memo(Dg);
function Dg(e) {
  let { routes: t, future: n, state: r } = e;
  return Jy(t, void 0, r, n);
}
const Og =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Mg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Oh = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: u,
        to: s,
        preventScrollReset: f,
        unstable_viewTransition: c,
      } = t,
      h = Gu(t, Eg),
      { basename: x } = y.useContext(Nt),
      w,
      S = !1;
    if (typeof s == 'string' && Mg.test(s) && ((w = s), Og))
      try {
        let m = new URL(window.location.href),
          k = s.startsWith('//') ? new URL(m.protocol + s) : new URL(s),
          L = Et(k.pathname, x);
        k.origin === m.origin && L != null
          ? (s = L + k.search + k.hash)
          : (S = !0);
      } catch {}
    let P = Xu(s, { relative: l }),
      p = jg(s, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: f,
        relative: l,
        unstable_viewTransition: c,
      });
    function d(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return y.createElement(
      'a',
      wr({}, h, { href: w || P, onClick: S || i ? r : d, ref: n, target: u })
    );
  }),
  zg = y.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: i = '',
        end: o = !1,
        style: a,
        to: u,
        unstable_viewTransition: s,
        children: f,
      } = t,
      c = Gu(t, xg),
      h = Rl(u, { relative: c.relative }),
      x = gn(),
      w = y.useContext(co),
      { navigator: S, basename: P } = y.useContext(Nt),
      p = w != null && Hg(h) && s === !0,
      d = S.encodeLocation ? S.encodeLocation(h).pathname : h.pathname,
      m = x.pathname,
      k =
        w && w.navigation && w.navigation.location
          ? w.navigation.location.pathname
          : null;
    l ||
      ((m = m.toLowerCase()),
      (k = k ? k.toLowerCase() : null),
      (d = d.toLowerCase())),
      k && P && (k = Et(k, P) || k);
    const L = d !== '/' && d.endsWith('/') ? d.length - 1 : d.length;
    let v = m === d || (!o && m.startsWith(d) && m.charAt(L) === '/'),
      T =
        k != null &&
        (k === d || (!o && k.startsWith(d) && k.charAt(d.length) === '/')),
      R = { isActive: v, isPending: T, isTransitioning: p },
      O = v ? r : void 0,
      M;
    typeof i == 'function'
      ? (M = i(R))
      : (M = [
          i,
          v ? 'active' : null,
          T ? 'pending' : null,
          p ? 'transitioning' : null,
        ]
          .filter(Boolean)
          .join(' '));
    let V = typeof a == 'function' ? a(R) : a;
    return y.createElement(
      Oh,
      wr({}, c, {
        'aria-current': O,
        className: M,
        ref: n,
        style: V,
        to: u,
        unstable_viewTransition: s,
      }),
      typeof f == 'function' ? f(R) : f
    );
  }),
  Fg = y.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: l,
        replace: i,
        state: o,
        method: a = yi,
        action: u,
        onSubmit: s,
        relative: f,
        preventScrollReset: c,
        unstable_viewTransition: h,
      } = e,
      x = Gu(e, kg),
      w = $g(),
      S = Bg(u, { relative: f }),
      P = a.toLowerCase() === 'get' ? 'get' : 'post',
      p = (d) => {
        if ((s && s(d), d.defaultPrevented)) return;
        d.preventDefault();
        let m = d.nativeEvent.submitter,
          k = (m == null ? void 0 : m.getAttribute('formmethod')) || a;
        w(m || d.currentTarget, {
          fetcherKey: n,
          method: k,
          navigate: r,
          replace: i,
          state: o,
          relative: f,
          preventScrollReset: c,
          unstable_viewTransition: h,
        });
      };
    return y.createElement(
      'form',
      wr({ ref: t, method: P, action: S, onSubmit: l ? s : p }, x)
    );
  });
var Yi;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Yi || (Yi = {}));
var Yc;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Yc || (Yc = {}));
function Mh(e) {
  let t = y.useContext(_r);
  return t || W(!1), t;
}
function jg(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = Ky(),
    s = gn(),
    f = Rl(e, { relative: o });
  return y.useCallback(
    (c) => {
      if (yg(c, n)) {
        c.preventDefault();
        let h = r !== void 0 ? r : pn(s) === pn(f);
        u(e, {
          replace: h,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, f, r, l, n, e, i, o, a]
  );
}
function Ig() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
    );
}
let Ug = 0,
  Ag = () => '__' + String(++Ug) + '__';
function $g() {
  let { router: e } = Mh(Yi.UseSubmit),
    { basename: t } = y.useContext(Nt),
    n = lg();
  return y.useCallback(
    function (r, l) {
      l === void 0 && (l = {}), Ig();
      let { action: i, method: o, encType: a, formData: u, body: s } = Sg(r, t);
      if (l.navigate === !1) {
        let f = l.fetcherKey || Ag();
        e.fetch(f, n, l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || o,
          formEncType: l.encType || a,
          unstable_flushSync: l.unstable_flushSync,
        });
      } else
        e.navigate(l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || o,
          formEncType: l.encType || a,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          unstable_flushSync: l.unstable_flushSync,
          unstable_viewTransition: l.unstable_viewTransition,
        });
    },
    [e, t, n]
  );
}
function Bg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = y.useContext(Nt),
    l = y.useContext(Kt);
  l || W(!1);
  let [i] = l.matches.slice(-1),
    o = wr({}, Rl(e || '.', { relative: n })),
    a = gn();
  if (e == null) {
    o.search = a.search;
    let u = new URLSearchParams(o.search);
    u.has('index') &&
      u.get('index') === '' &&
      (u.delete('index'), (o.search = u.toString() ? '?' + u.toString() : ''));
  }
  return (
    (!e || e === '.') &&
      i.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (o.pathname = o.pathname === '/' ? r : Tt([r, o.pathname])),
    pn(o)
  );
}
function Hg(e, t) {
  t === void 0 && (t = {});
  let n = y.useContext(Dh);
  n == null && W(!1);
  let { basename: r } = Mh(Yi.useViewTransitionState),
    l = Rl(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = Et(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Et(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Vi(l.pathname, o) != null || Vi(l.pathname, i) != null;
}
var Vg = -1,
  Wg = -2,
  Kg = -3,
  Qg = -4,
  Yg = -5,
  Xg = -6,
  Jg = -7,
  Gg = 'B',
  Zg = 'D',
  zh = 'E',
  qg = 'M',
  bg = 'N',
  Fh = 'P',
  e0 = 'R',
  t0 = 'S',
  n0 = 'Y',
  r0 = 'U',
  l0 = 'Z',
  jh = class {
    constructor() {
      jl(this, 'promise');
      jl(this, 'resolve');
      jl(this, 'reject');
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  };
function i0() {
  const e = new TextDecoder();
  let t = '';
  return new TransformStream({
    transform(n, r) {
      const l = e.decode(n, { stream: !0 }),
        i = (t + l).split(`
`);
      t = i.pop() || '';
      for (const o of i) r.enqueue(o);
    },
    flush(n) {
      t && n.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Jo =
  typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : void 0;
function Ka(e) {
  const { hydrated: t, values: n } = this;
  if (typeof e == 'number') return it.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const r = n.length;
  return n.push(...e), (t.length = n.length), it.call(this, r);
}
function it(e) {
  const { hydrated: t, values: n, deferred: r, plugins: l } = this;
  switch (e) {
    case Jg:
      return;
    case Yg:
      return null;
    case Wg:
      return NaN;
    case Xg:
      return 1 / 0;
    case Kg:
      return -1 / 0;
    case Qg:
      return -0;
  }
  if (t[e]) return t[e];
  const i = n[e];
  if (!i || typeof i != 'object') return (t[e] = i);
  if (Array.isArray(i))
    if (typeof i[0] == 'string') {
      const [o, a, u] = i;
      switch (o) {
        case Zg:
          return (t[e] = new Date(a));
        case r0:
          return (t[e] = new URL(a));
        case Gg:
          return (t[e] = BigInt(a));
        case e0:
          return (t[e] = new RegExp(a, u));
        case n0:
          return (t[e] = Symbol.for(a));
        case t0:
          const s = new Set();
          t[e] = s;
          for (let S = 1; S < i.length; S++) s.add(it.call(this, i[S]));
          return s;
        case qg:
          const f = new Map();
          t[e] = f;
          for (let S = 1; S < i.length; S += 2)
            f.set(it.call(this, i[S]), it.call(this, i[S + 1]));
          return f;
        case bg:
          const c = Object.create(null);
          t[e] = c;
          for (const S in a) c[it.call(this, Number(S))] = it.call(this, a[S]);
          return c;
        case Fh:
          if (t[a]) return (t[e] = t[a]);
          {
            const S = new jh();
            return (r[a] = S), (t[e] = S.promise);
          }
        case zh:
          const [, h, x] = i;
          let w = x && Jo && Jo[x] ? new Jo[x](h) : new Error(h);
          return (t[e] = w), w;
        case l0:
          return it.call(this, a);
        default:
          if (Array.isArray(l)) {
            const S = i.slice(1).map((P) => it.call(this, P));
            for (const P of l) {
              const p = P(i[0], ...S);
              if (p) return (t[e] = p.value);
            }
          }
          throw new SyntaxError();
      }
    } else {
      const o = [];
      t[e] = o;
      for (let a = 0; a < i.length; a++) {
        const u = i[a];
        u !== Vg && (o[a] = it.call(this, u));
      }
      return o;
    }
  else {
    const o = {};
    t[e] = o;
    for (const a in i) o[it.call(this, Number(a))] = it.call(this, i[a]);
    return o;
  }
}
async function o0(e, t) {
  const { plugins: n } = t ?? {},
    r = new jh(),
    l = e.pipeThrough(i0()).getReader(),
    i = { values: [], hydrated: [], deferred: {}, plugins: n },
    o = await a0.call(i, l);
  let a = r.promise;
  return (
    o.done
      ? r.resolve()
      : (a = u0
          .call(i, l)
          .then(r.resolve)
          .catch((u) => {
            for (const s of Object.values(i.deferred)) s.reject(u);
            r.reject(u);
          })),
    { done: a.then(() => l.closed), value: o.value }
  );
}
async function a0(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let n;
  try {
    n = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: Ka.call(this, n) };
}
async function u0(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const n = t.value;
    switch (n[0]) {
      case Fh: {
        const r = n.indexOf(':'),
          l = Number(n.slice(1, r)),
          i = this.deferred[l];
        if (!i) throw new Error(`Deferred ID ${l} not found in stream`);
        const o = n.slice(r + 1);
        let a;
        try {
          a = JSON.parse(o);
        } catch {
          throw new SyntaxError();
        }
        const u = Ka.call(this, a);
        i.resolve(u);
        break;
      }
      case zh: {
        const r = n.indexOf(':'),
          l = Number(n.slice(1, r)),
          i = this.deferred[l];
        if (!i) throw new Error(`Deferred ID ${l} not found in stream`);
        const o = n.slice(r + 1);
        let a;
        try {
          a = JSON.parse(o);
        } catch {
          throw new SyntaxError();
        }
        const u = Ka.call(this, a);
        i.reject(u);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
/**
 * @remix-run/server-runtime v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Ih = Symbol('SingleFetchRedirect');
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xe() {
  return (
    (xe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xe.apply(this, arguments)
  );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jn(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ async function Uh(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__remixContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function s0(e, t, n) {
  let r = e
      .map((i) => {
        var o;
        let a = t[i.route.id],
          u = n.routes[i.route.id];
        return [
          u.css ? u.css.map((s) => ({ rel: 'stylesheet', href: s })) : [],
          (a == null || (o = a.links) === null || o === void 0
            ? void 0
            : o.call(a)) || [],
        ];
      })
      .flat(2),
    l = m0(e, n);
  return $h(r, l);
}
async function Ah(e, t) {
  var n, r;
  if ((!e.css && !t.links) || !y0()) return;
  let l = [
    ((n = e.css) === null || n === void 0
      ? void 0
      : n.map((a) => ({ rel: 'stylesheet', href: a }))) ?? [],
    ((r = t.links) === null || r === void 0 ? void 0 : r.call(t)) ?? [],
  ].flat(1);
  if (l.length === 0) return;
  let i = [];
  for (let a of l)
    !Zu(a) &&
      a.rel === 'stylesheet' &&
      i.push({ ...a, rel: 'preload', as: 'style' });
  let o = i.filter(
    (a) =>
      (!a.media || window.matchMedia(a.media).matches) &&
      !document.querySelector(`link[rel="stylesheet"][href="${a.href}"]`)
  );
  await Promise.all(o.map(c0));
}
async function c0(e) {
  return new Promise((t) => {
    let n = document.createElement('link');
    Object.assign(n, e);
    function r() {
      document.head.contains(n) && document.head.removeChild(n);
    }
    (n.onload = () => {
      r(), t();
    }),
      (n.onerror = () => {
        r(), t();
      }),
      document.head.appendChild(n);
  });
}
function Zu(e) {
  return e != null && typeof e.page == 'string';
}
function f0(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function d0(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let i = await Uh(t.routes[l.route.id], n);
      return i.links ? i.links() : [];
    })
  );
  return $h(
    r
      .flat(1)
      .filter(f0)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet'
          ? { ...l, rel: 'prefetch', as: 'style' }
          : { ...l, rel: 'prefetch' }
      )
  );
}
function Xc(e, t, n, r, l, i) {
  let o = Bh(e),
    a = (f, c) => (n[c] ? f.route.id !== n[c].route.id : !0),
    u = (f, c) => {
      var h;
      return (
        n[c].pathname !== f.pathname ||
        (((h = n[c].route.path) === null || h === void 0
          ? void 0
          : h.endsWith('*')) &&
          n[c].params['*'] !== f.params['*'])
      );
    };
  return i === 'data' && l.search !== o.search
    ? t.filter((f, c) => {
        if (!r.routes[f.route.id].hasLoader) return !1;
        if (a(f, c) || u(f, c)) return !0;
        if (f.route.shouldRevalidate) {
          var x;
          let w = f.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams:
              ((x = n[0]) === null || x === void 0 ? void 0 : x.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: f.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof w == 'boolean') return w;
        }
        return !0;
      })
    : t.filter((f, c) => {
        let h = r.routes[f.route.id];
        return (i === 'assets' || h.hasLoader) && (a(f, c) || u(f, c));
      });
}
function h0(e, t, n) {
  let r = Bh(e);
  return qu(
    t
      .filter(
        (l) =>
          n.routes[l.route.id].hasLoader &&
          !n.routes[l.route.id].hasClientLoader
      )
      .map((l) => {
        let { pathname: i, search: o } = r,
          a = new URLSearchParams(o);
        return a.set('_data', l.route.id), `${i}?${a}`;
      })
  );
}
function p0(e, t) {
  return qu(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1)
  );
}
function m0(e, t) {
  return qu(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1)
  );
}
function qu(e) {
  return [...new Set(e)];
}
function v0(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function $h(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((l, i) => {
    if (t && !Zu(i) && i.as === 'script' && i.href && r.has(i.href)) return l;
    let a = JSON.stringify(v0(i));
    return n.has(a) || (n.add(a), l.push({ key: a, link: i })), l;
  }, []);
}
function Bh(e) {
  let t = Wt(e);
  return t.search === void 0 && (t.search = ''), t;
}
let ti;
function y0() {
  if (ti !== void 0) return ti;
  let e = document.createElement('link');
  return (ti = e.relList.supports('preload')), (e = null), ti;
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const g0 = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
  },
  w0 = /[&><\u2028\u2029]/g;
function ni(e) {
  return e.replace(w0, (t) => g0[t]);
}
function Jc(e) {
  return { __html: e };
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function S0(e) {
  return e.headers.get('X-Remix-Catch') != null;
}
function E0(e) {
  return e.headers.get('X-Remix-Error') != null;
}
function x0(e) {
  return (
    bu(e) &&
    e.status >= 400 &&
    e.headers.get('X-Remix-Error') == null &&
    e.headers.get('X-Remix-Catch') == null &&
    e.headers.get('X-Remix-Response') == null
  );
}
function k0(e) {
  return e.headers.get('X-Remix-Redirect') != null;
}
function _0(e) {
  var t;
  return !!(
    (t = e.headers.get('Content-Type')) !== null &&
    t !== void 0 &&
    t.match(/text\/remix-deferred/)
  );
}
function bu(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function C0(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
async function Hh(e, t, n = 0) {
  let r = new URL(e.url);
  r.searchParams.set('_data', t),
    n > 0 && (await new Promise((a) => setTimeout(a, 5 ** n * 10)));
  let l = await es(e),
    i = window.__remixRevalidation,
    o = await fetch(r.href, l).catch((a) => {
      if (
        typeof i == 'number' &&
        i === window.__remixRevalidation &&
        (a == null ? void 0 : a.name) === 'TypeError' &&
        n < 3
      )
        return Hh(e, t, n + 1);
      throw a;
    });
  if (E0(o)) {
    let a = await o.json(),
      u = new Error(a.message);
    return (u.stack = a.stack), u;
  }
  if (x0(o)) {
    let a = await o.text(),
      u = new Error(a);
    return (u.stack = void 0), u;
  }
  return o;
}
async function es(e) {
  let t = { signal: e.signal };
  if (e.method !== 'GET') {
    t.method = e.method;
    let n = e.headers.get('Content-Type');
    n && /\bapplication\/json\b/.test(n)
      ? ((t.headers = { 'Content-Type': n }),
        (t.body = JSON.stringify(await e.json())))
      : n && /\btext\/plain\b/.test(n)
        ? ((t.headers = { 'Content-Type': n }), (t.body = await e.text()))
        : n && /\bapplication\/x-www-form-urlencoded\b/.test(n)
          ? (t.body = new URLSearchParams(await e.text()))
          : (t.body = await e.formData());
  }
  return t;
}
const P0 = '__deferred_promise:';
async function R0(e) {
  if (!e)
    throw new Error('parseDeferredReadableStream requires stream argument');
  let t,
    n = {};
  try {
    let r = L0(e),
      i = (await r.next()).value;
    if (!i) throw new Error('no critical data');
    let o = JSON.parse(i);
    if (typeof o == 'object' && o !== null)
      for (let [a, u] of Object.entries(o))
        typeof u != 'string' ||
          !u.startsWith(P0) ||
          ((t = t || {}),
          (t[a] = new Promise((s, f) => {
            n[a] = {
              resolve: (c) => {
                s(c), delete n[a];
              },
              reject: (c) => {
                f(c), delete n[a];
              },
            };
          })));
    return (
      (async () => {
        try {
          for await (let a of r) {
            let [u, ...s] = a.split(':'),
              f = s.join(':'),
              c = JSON.parse(f);
            if (u === 'data')
              for (let [h, x] of Object.entries(c)) n[h] && n[h].resolve(x);
            else if (u === 'error')
              for (let [h, x] of Object.entries(c)) {
                let w = new Error(x.message);
                (w.stack = x.stack), n[h] && n[h].reject(w);
              }
          }
          for (let [a, u] of Object.entries(n))
            u.reject(new Wi(`Deferred ${a} will never be resolved`));
        } catch (a) {
          for (let u of Object.values(n)) u.reject(a);
        }
      })(),
      new vy({ ...o, ...t })
    );
  } catch (r) {
    for (let l of Object.values(n)) l.reject(r);
    throw r;
  }
}
async function* L0(e) {
  let t = e.getReader(),
    n = [],
    r = [],
    l = !1,
    i = new TextEncoder(),
    o = new TextDecoder(),
    a = async () => {
      if (r.length > 0) return r.shift();
      for (; !l && r.length === 0; ) {
        let s = await t.read();
        if (s.done) {
          l = !0;
          break;
        }
        n.push(s.value);
        try {
          let c = o.decode(Gc(...n)).split(`

`);
          if (
            (c.length >= 2 &&
              (r.push(...c.slice(0, -1)),
              (n = [
                i.encode(
                  c.slice(-1).join(`

`)
                ),
              ])),
            r.length > 0)
          )
            break;
        } catch {
          continue;
        }
      }
      return (
        r.length > 0 ||
          (n.length > 0 &&
            ((r = o
              .decode(Gc(...n))
              .split(
                `

`
              )
              .filter((f) => f)),
            (n = []))),
        r.shift()
      );
    },
    u = await a();
  for (; u; ) yield u, (u = await a());
}
function Gc(...e) {
  let t = new Uint8Array(e.reduce((r, l) => r + l.length, 0)),
    n = 0;
  for (let r of e) t.set(r, n), (n += r.length);
  return t;
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function u1(e, t) {
  return async ({ request: n, matches: r }) =>
    n.method !== 'GET' ? T0(n, r) : N0(e, t, n, r);
}
function T0(e, t) {
  return Promise.all(
    t.map(async (n) => {
      let r,
        l = await n.resolve(async (i) => ({
          type: 'data',
          result: await i(async () => {
            let a = ts(e.url),
              u = await es(e),
              { data: s, status: f } = await Qa(a, u);
            return (r = f), Ya(s, n.route.id);
          }),
        }));
      return bu(l.result) || kr(l.result)
        ? l
        : { type: l.type, result: my(l.result, r) };
    })
  );
}
function N0(e, t, n, r) {
  let l;
  return Promise.all(
    r.map(async (i) =>
      i.resolve(async (o) => {
        let a,
          u = D0(ts(n.url)),
          s = await es(n);
        return (
          e.routes[i.route.id].hasClientLoader
            ? (a = await o(async () => {
                u.searchParams.set('_routes', i.route.id);
                let { data: f } = await Qa(u, s);
                return Zc(f, i.route.id);
              }))
            : (a = await o(async () => {
                l ||
                  ((u = Vh(
                    e,
                    t,
                    r.map((c) => c.route),
                    r.filter((c) => c.shouldLoad).map((c) => c.route),
                    u
                  )),
                  (l = Qa(u, s).then(({ data: c }) => c)));
                let f = await l;
                return Zc(f, i.route.id);
              })),
          { type: 'data', result: a }
        );
      })
    )
  );
}
function D0(e) {
  let t = e.searchParams.getAll('index');
  e.searchParams.delete('index');
  let n = [];
  for (let r of t) r && n.push(r);
  for (let r of n) e.searchParams.append('index', r);
  return e;
}
function Vh(e, t, n, r, l) {
  let i = (s) => s.filter((f) => e.routes[f].hasLoader).join(',');
  if (
    !n.some((s) => {
      var f, c;
      return (
        ((f = t[s.id]) === null || f === void 0
          ? void 0
          : f.shouldRevalidate) ||
        ((c = e.routes[s.id]) === null || c === void 0
          ? void 0
          : c.hasClientLoader)
      );
    })
  )
    return l;
  let a = i(n.map((s) => s.id)),
    u = i(
      r
        .filter((s) => {
          var f;
          return !(
            (f = e.routes[s.id]) !== null &&
            f !== void 0 &&
            f.hasClientLoader
          );
        })
        .map((s) => s.id)
    );
  return a !== u && l.searchParams.set('_routes', u), l;
}
function ts(e) {
  let t = typeof e == 'string' ? new URL(e, window.location.origin) : e;
  return (
    t.pathname === '/'
      ? (t.pathname = '_root.data')
      : (t.pathname = `${t.pathname.replace(/\/$/, '')}.data`),
    t
  );
}
async function Qa(e, t) {
  let n = await fetch(e, t);
  jn(n.body, 'No response body to decode');
  try {
    let r = await O0(n.body, window);
    return { status: n.status, data: r.value };
  } catch (r) {
    throw (
      (console.error(r),
      new Error(
        `Unable to decode turbo-stream response from URL: ${e.toString()}`
      ))
    );
  }
}
function O0(e, t) {
  return o0(e, {
    plugins: [
      (n, ...r) => {
        if (n === 'SanitizedError') {
          let [l, i, o] = r,
            a = Error;
          l && l in t && typeof t[l] == 'function' && (a = t[l]);
          let u = new a(i);
          return (u.stack = o), { value: u };
        }
        if (n === 'ErrorResponse') {
          let [l, i, o] = r;
          return { value: new Fn(i, o, l) };
        }
        if (n === 'SingleFetchRedirect') return { value: { [Ih]: r[0] } };
      },
    ],
  });
}
function Zc(e, t) {
  let n = e[Ih];
  return n ? Ya(n, t) : e[t] !== void 0 ? Ya(e[t], t) : null;
}
function Ya(e, t) {
  if ('error' in e) throw e.error;
  if ('redirect' in e) {
    let n = {};
    return (
      e.revalidate && (n['X-Remix-Revalidate'] = 'yes'),
      e.reload && (n['X-Remix-Reload-Document'] = 'yes'),
      e.replace && (n['X-Remix-Replace'] = 'yes'),
      wh(e.redirect, { status: e.status, headers: n })
    );
  } else {
    if ('data' in e) return e.data;
    throw new Error(`No response found for routeId "${t}"`);
  }
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ class s1 extends y.Component {
  constructor(t) {
    super(t), (this.state = { error: t.error || null, location: t.location });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error || null, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  render() {
    return this.state.error
      ? y.createElement(Wh, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
}
function Wh({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let n = y.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `,
    },
  });
  if (kr(e))
    return y.createElement(
      Xa,
      { title: 'Unhandled Thrown Response!' },
      y.createElement(
        'h1',
        { style: { fontSize: '24px' } },
        e.status,
        ' ',
        e.statusText
      ),
      n
    );
  let r;
  if (e instanceof Error) r = e;
  else {
    let l =
      e == null
        ? 'Unknown Error'
        : typeof e == 'object' && 'toString' in e
          ? e.toString()
          : JSON.stringify(e);
    r = new Error(l);
  }
  return y.createElement(
    Xa,
    { title: 'Application Error!', isOutsideRemixApp: t },
    y.createElement('h1', { style: { fontSize: '24px' } }, 'Application Error'),
    y.createElement(
      'pre',
      {
        style: {
          padding: '2rem',
          background: 'hsla(10, 50%, 50%, 0.1)',
          color: 'red',
          overflow: 'auto',
        },
      },
      r.stack
    ),
    n
  );
}
function Xa({ title: e, renderScripts: t, isOutsideRemixApp: n, children: r }) {
  var l;
  let { routeModules: i } = Cr();
  return (l = i.root) !== null && l !== void 0 && l.Layout && !n
    ? r
    : y.createElement(
        'html',
        { lang: 'en' },
        y.createElement(
          'head',
          null,
          y.createElement('meta', { charSet: 'utf-8' }),
          y.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,viewport-fit=cover',
          }),
          y.createElement('title', null, e)
        ),
        y.createElement(
          'body',
          null,
          y.createElement(
            'main',
            { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
            r,
            t ? y.createElement(Z0, null) : null
          )
        )
      );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function M0() {
  return y.createElement(
    Xa,
    { title: 'Loading...', renderScripts: !0 },
    y.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is running \`clientLoader\` functions on hydration. " +
                "Check out https://remix.run/route/hydrate-fallback for more information."
              );
            `,
      },
    })
  );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Kh(e) {
  let t = {};
  return (
    Object.values(e).forEach((n) => {
      let r = n.parentId || '';
      t[r] || (t[r] = []), t[r].push(n);
    }),
    t
  );
}
function z0(e, t, n) {
  let r = Qh(t),
    l =
      t.HydrateFallback && (!n || e.id === 'root')
        ? t.HydrateFallback
        : e.id === 'root'
          ? M0
          : void 0,
    i = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === 'root'
        ? () => y.createElement(Wh, { error: Nh() })
        : void 0;
  return e.id === 'root' && t.Layout
    ? {
        ...(r
          ? {
              element: y.createElement(
                t.Layout,
                null,
                y.createElement(r, null)
              ),
            }
          : { Component: r }),
        ...(i
          ? {
              errorElement: y.createElement(
                t.Layout,
                null,
                y.createElement(i, null)
              ),
            }
          : { ErrorBoundary: i }),
        ...(l
          ? {
              hydrateFallbackElement: y.createElement(
                t.Layout,
                null,
                y.createElement(l, null)
              ),
            }
          : { HydrateFallback: l }),
      }
    : { Component: r, ErrorBoundary: i, HydrateFallback: l };
}
function c1(e, t, n, r, l, i) {
  return ns(t, n, r, l, i, '', Kh(t), e);
}
function ri(e, t, n) {
  if (n) {
    let o = `You cannot call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} in SPA Mode (routeId: "${t.id}")`;
    throw (console.error(o), new Fn(400, 'Bad Request', new Error(o), !0));
  }
  let l = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`;
  if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction))
    throw (console.error(l), new Fn(400, 'Bad Request', new Error(l), !0));
}
function Go(e, t) {
  let n = e === 'clientAction' ? 'a' : 'an',
    r = `Route "${t}" does not have ${n} ${e}, but you are trying to submit to it. To fix this, please add ${n} \`${e}\` function to the route`;
  throw (console.error(r), new Fn(405, 'Method Not Allowed', new Error(r), !0));
}
function ns(e, t, n, r, l, i = '', o = Kh(e), a) {
  return (o[i] || []).map((u) => {
    let s = t[u.id];
    async function f(m, k, L) {
      if (typeof L == 'function') return await L();
      let v = await j0(m, u);
      return k ? I0(v) : v;
    }
    function c(m, k, L) {
      return u.hasLoader ? f(m, k, L) : Promise.resolve(null);
    }
    function h(m, k, L) {
      if (!u.hasAction) throw Go('action', u.id);
      return f(m, k, L);
    }
    async function x(m) {
      let k = t[u.id],
        L = k ? Ah(u, k) : Promise.resolve();
      try {
        return m();
      } finally {
        await L;
      }
    }
    let w = { id: u.id, index: u.index, path: u.path };
    if (s) {
      var S, P, p;
      Object.assign(w, {
        ...w,
        ...z0(u, s, l),
        handle: s.handle,
        shouldRevalidate: a
          ? qc(u.id, s.shouldRevalidate, a)
          : s.shouldRevalidate,
      });
      let m =
          n == null || (S = n.loaderData) === null || S === void 0
            ? void 0
            : S[u.id],
        k =
          n == null || (P = n.errors) === null || P === void 0
            ? void 0
            : P[u.id],
        L =
          a == null &&
          (((p = s.clientLoader) === null || p === void 0
            ? void 0
            : p.hydrate) === !0 ||
            !u.hasLoader);
      (w.loader = async ({ request: v, params: T }, R) => {
        try {
          return await x(
            async () => (
              jn(s, 'No `routeModule` available for critical-route loader'),
              s.clientLoader
                ? s.clientLoader({
                    request: v,
                    params: T,
                    async serverLoader() {
                      if ((ri('loader', u, l), L)) {
                        if (k !== void 0) throw k;
                        return m;
                      }
                      return c(v, !0, R);
                    },
                  })
                : l
                  ? null
                  : c(v, !1, R)
            )
          );
        } finally {
          L = !1;
        }
      }),
        (w.loader.hydrate = A0(u, s, l)),
        (w.action = ({ request: v, params: T }, R) =>
          x(async () => {
            if (
              (jn(s, 'No `routeModule` available for critical-route action'),
              !s.clientAction)
            ) {
              if (l) throw Go('clientAction', u.id);
              return h(v, !1, R);
            }
            return s.clientAction({
              request: v,
              params: T,
              async serverAction() {
                return ri('action', u, l), h(v, !0, R);
              },
            });
          }));
    } else
      u.hasClientLoader ||
        (w.loader = ({ request: m }, k) =>
          x(() => (l ? Promise.resolve(null) : c(m, !1, k)))),
        u.hasClientAction ||
          (w.action = ({ request: m }, k) =>
            x(() => {
              if (l) throw Go('clientAction', u.id);
              return h(m, !1, k);
            })),
        (w.lazy = async () => {
          let m = await F0(u, t),
            k = { ...m };
          if (m.clientLoader) {
            let L = m.clientLoader;
            k.loader = (v, T) =>
              L({
                ...v,
                async serverLoader() {
                  return ri('loader', u, l), c(v.request, !0, T);
                },
              });
          }
          if (m.clientAction) {
            let L = m.clientAction;
            k.action = (v, T) =>
              L({
                ...v,
                async serverAction() {
                  return ri('action', u, l), h(v.request, !0, T);
                },
              });
          }
          return (
            a && (k.shouldRevalidate = qc(u.id, m.shouldRevalidate, a)),
            {
              ...(k.loader ? { loader: k.loader } : {}),
              ...(k.action ? { action: k.action } : {}),
              hasErrorBoundary: k.hasErrorBoundary,
              shouldRevalidate: k.shouldRevalidate,
              handle: k.handle,
              Component: k.Component,
              ErrorBoundary: k.ErrorBoundary,
            }
          );
        });
    let d = ns(e, t, n, r, l, u.id, o, a);
    return d.length > 0 && (w.children = d), w;
  });
}
function qc(e, t, n) {
  let r = !1;
  return (l) =>
    r ? (t ? t(l) : l.defaultShouldRevalidate) : ((r = !0), n.has(e));
}
async function F0(e, t) {
  let n = await Uh(e, t);
  return (
    await Ah(e, n),
    {
      Component: Qh(n),
      ErrorBoundary: n.ErrorBoundary,
      clientAction: n.clientAction,
      clientLoader: n.clientLoader,
      handle: n.handle,
      links: n.links,
      meta: n.meta,
      shouldRevalidate: n.shouldRevalidate,
    }
  );
}
async function j0(e, t) {
  let n = await Hh(e, t.id);
  if (n instanceof Error) throw n;
  if (k0(n)) throw U0(n);
  if (S0(n)) throw n;
  return _0(n) && n.body ? await R0(n.body) : n;
}
function I0(e) {
  if (C0(e)) return e.data;
  if (bu(e)) {
    let t = e.headers.get('Content-Type');
    return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text();
  }
  return e;
}
function U0(e) {
  let t = parseInt(e.headers.get('X-Remix-Status'), 10) || 302,
    n = e.headers.get('X-Remix-Redirect'),
    r = {},
    l = e.headers.get('X-Remix-Revalidate');
  l && (r['X-Remix-Revalidate'] = l);
  let i = e.headers.get('X-Remix-Reload-Document');
  i && (r['X-Remix-Reload-Document'] = i);
  let o = e.headers.get('X-Remix-Replace');
  return o && (r['X-Remix-Replace'] = o), wh(n, { status: t, headers: r });
}
function Qh(e) {
  if (e.default == null) return;
  if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0))
    return e.default;
}
function A0(e, t, n) {
  return (
    (n && e.id !== 'root') ||
    (t.clientLoader != null &&
      (t.clientLoader.hydrate === !0 || e.hasLoader !== !0))
  );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const $0 = 7680;
let Rn = null;
function rs(e, t) {
  return e.unstable_lazyRouteDiscovery === !0 && !t;
}
function B0(e, t) {
  let n = new Set(t.state.matches.map((o) => o.route.id)),
    r = t.state.location.pathname.split('/').filter(Boolean),
    l = ['/'];
  for (r.pop(); r.length > 0; ) l.push(`/${r.join('/')}`), r.pop();
  l.forEach((o) => {
    let a = Ft(t.routes, o, t.basename);
    a && a.forEach((u) => n.add(u.route.id));
  });
  let i = [...n].reduce((o, a) => Object.assign(o, { [a]: e.routes[a] }), {});
  return { ...e, routes: i };
}
function f1(e, t, n, r, l) {
  return rs(n, r)
    ? ((Rn = {
        nextPaths: new Set(),
        knownGoodPaths: new Set(),
        known404Paths: new Set(),
      }),
      {
        enabled: !0,
        patchRoutesOnMiss: async ({ path: i, patch: o }) => {
          Rn.known404Paths.has(i) ||
            Rn.knownGoodPaths.has(i) ||
            (await Yh([i], Rn, e, t, n, r, l, o));
        },
      })
    : { enabled: !1 };
}
function d1(e, t, n, r, l) {
  y.useEffect(() => {
    var i;
    if (
      !rs(r, l) ||
      ((i = navigator.connection) === null || i === void 0
        ? void 0
        : i.saveData) === !0
    )
      return;
    function o(c) {
      let h =
        c.tagName === 'FORM'
          ? c.getAttribute('action')
          : c.getAttribute('href');
      if (!h) return;
      let x = new URL(h, window.location.origin),
        { knownGoodPaths: w, known404Paths: S, nextPaths: P } = Rn;
      w.has(x.pathname) || S.has(x.pathname) || P.add(x.pathname);
    }
    async function a() {
      let c = H0(Rn);
      if (c.length !== 0)
        try {
          await Yh(c, Rn, t, n, r, l, e.basename, e.patchRoutes);
        } catch (h) {
          console.error('Failed to fetch manifest patches', h);
        }
    }
    document.body
      .querySelectorAll('a[data-discover], form[data-discover]')
      .forEach((c) => o(c)),
      a();
    let u = V0(a, 100);
    function s(c) {
      return c.nodeType === Node.ELEMENT_NODE;
    }
    let f = new MutationObserver((c) => {
      let h = new Set();
      c.forEach((x) => {
        [x.target, ...x.addedNodes].forEach((w) => {
          s(w) &&
            (((w.tagName === 'A' && w.getAttribute('data-discover')) ||
              (w.tagName === 'FORM' && w.getAttribute('data-discover'))) &&
              h.add(w),
            w.tagName !== 'A' &&
              w
                .querySelectorAll('a[data-discover], form[data-discover]')
                .forEach((S) => h.add(S)));
        });
      }),
        h.forEach((x) => o(x)),
        u();
    });
    return (
      f.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ['data-discover', 'href', 'action'],
      }),
      () => f.disconnect()
    );
  }, [r, l, t, n, e]);
}
function H0(e, t) {
  let { knownGoodPaths: n, known404Paths: r, nextPaths: l } = e;
  return Array.from(l.keys()).filter((i) =>
    n.has(i) || r.has(i) ? (l.delete(i), !1) : !0
  );
}
async function Yh(e, t, n, r, l, i, o, a) {
  let { nextPaths: u, knownGoodPaths: s, known404Paths: f } = t,
    c = `${o ?? '/'}/__manifest`.replace(/\/+/g, '/'),
    h = new URL(c, window.location.origin);
  if (
    (h.searchParams.set('version', n.version),
    e.forEach((d) => h.searchParams.append('p', d)),
    h.toString().length > $0)
  ) {
    u.clear();
    return;
  }
  let x = await fetch(h);
  if (x.ok) {
    if (x.status >= 400) throw new Error(await x.text());
  } else throw new Error(`${x.status} ${x.statusText}`);
  let w = await x.json(),
    S = new Set(Object.keys(n.routes)),
    P = Object.values(w.patches).reduce(
      (d, m) => (S.has(m.id) ? d : Object.assign(d, { [m.id]: m })),
      {}
    );
  Object.assign(n.routes, P),
    w.notFoundPaths.forEach((d) => f.add(d)),
    e.forEach((d) => s.add(d));
  let p = new Set();
  Object.values(P).forEach((d) => {
    (!d.parentId || !P[d.parentId]) && p.add(d.parentId);
  }),
    p.forEach((d) => a(d || null, ns(P, r, null, l, i, d)));
}
function V0(e, t) {
  let n;
  return (...r) => {
    window.clearTimeout(n), (n = window.setTimeout(() => e(...r), t));
  };
}
function Xh() {
  let e = y.useContext(_r);
  return (
    jn(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    e
  );
}
function ho() {
  let e = y.useContext(co);
  return (
    jn(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    e
  );
}
const Jh = y.createContext(void 0);
Jh.displayName = 'Remix';
function Cr() {
  let e = y.useContext(Jh);
  return jn(e, 'You must render this element inside a <Remix> element'), e;
}
function Gh(e, t) {
  let [n, r] = y.useState(!1),
    [l, i] = y.useState(!1),
    {
      onFocus: o,
      onBlur: a,
      onMouseEnter: u,
      onMouseLeave: s,
      onTouchStart: f,
    } = t,
    c = y.useRef(null);
  y.useEffect(() => {
    if ((e === 'render' && i(!0), e === 'viewport')) {
      let w = (P) => {
          P.forEach((p) => {
            i(p.isIntersecting);
          });
        },
        S = new IntersectionObserver(w, { threshold: 0.5 });
      return (
        c.current && S.observe(c.current),
        () => {
          S.disconnect();
        }
      );
    }
  }, [e]);
  let h = () => {
      e === 'intent' && r(!0);
    },
    x = () => {
      e === 'intent' && (r(!1), i(!1));
    };
  return (
    y.useEffect(() => {
      if (n) {
        let w = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [n]),
    [
      l,
      c,
      {
        onFocus: $r(o, h),
        onBlur: $r(a, x),
        onMouseEnter: $r(u, h),
        onMouseLeave: $r(s, x),
        onTouchStart: $r(f, h),
      },
    ]
  );
}
const ls = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function is(e, t, n) {
  return e === 'render' && !t && !n ? 'true' : void 0;
}
let W0 = y.forwardRef(
  ({ to: e, prefetch: t = 'none', discover: n = 'render', ...r }, l) => {
    let i = typeof e == 'string' && ls.test(e),
      o = Xu(e),
      [a, u, s] = Gh(t, r);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(
        zg,
        xe({}, r, s, {
          ref: Zh(l, u),
          to: e,
          'data-discover': is(n, i, r.reloadDocument),
        })
      ),
      a && !i ? y.createElement(as, { page: o }) : null
    );
  }
);
W0.displayName = 'NavLink';
let K0 = y.forwardRef(
  ({ to: e, prefetch: t = 'none', discover: n = 'render', ...r }, l) => {
    let i = typeof e == 'string' && ls.test(e),
      o = Xu(e),
      [a, u, s] = Gh(t, r);
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(
        Oh,
        xe({}, r, s, {
          ref: Zh(l, u),
          to: e,
          'data-discover': is(n, i, r.reloadDocument),
        })
      ),
      a && !i ? y.createElement(as, { page: o }) : null
    );
  }
);
K0.displayName = 'Link';
let Q0 = y.forwardRef(({ discover: e = 'render', ...t }, n) => {
  let r = typeof t.action == 'string' && ls.test(t.action);
  return y.createElement(
    Fg,
    xe({}, t, { ref: n, 'data-discover': is(e, r, t.reloadDocument) })
  );
});
Q0.displayName = 'Form';
function $r(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function os(e, t, n) {
  if (n && !gi) return [e[0]];
  if (t) {
    let r = e.findIndex((l) => t[l.route.id] !== void 0);
    return e.slice(0, r + 1);
  }
  return e;
}
function h1() {
  let { isSpaMode: e, manifest: t, routeModules: n, criticalCss: r } = Cr(),
    { errors: l, matches: i } = ho(),
    o = os(i, l, e),
    a = y.useMemo(() => s0(o, n, t), [o, n, t]);
  return y.createElement(
    y.Fragment,
    null,
    r
      ? y.createElement('style', { dangerouslySetInnerHTML: { __html: r } })
      : null,
    a.map(({ key: u, link: s }) =>
      Zu(s)
        ? y.createElement(as, xe({ key: u }, s))
        : y.createElement('link', xe({ key: u }, s))
    )
  );
}
function as({ page: e, ...t }) {
  let { router: n } = Xh(),
    r = y.useMemo(() => Ft(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r
    ? y.createElement(X0, xe({ page: e, matches: r }, t))
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function Y0(e) {
  let { manifest: t, routeModules: n } = Cr(),
    [r, l] = y.useState([]);
  return (
    y.useEffect(() => {
      let i = !1;
      return (
        d0(e, t, n).then((o) => {
          i || l(o);
        }),
        () => {
          i = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function X0({ page: e, matches: t, ...n }) {
  let r = gn(),
    { future: l, manifest: i, routeModules: o } = Cr(),
    { matches: a } = ho(),
    u = y.useMemo(() => Xc(e, t, a, i, r, 'data'), [e, t, a, i, r]),
    s = y.useMemo(() => Xc(e, t, a, i, r, 'assets'), [e, t, a, i, r]),
    f = y.useMemo(() => h0(e, u, i), [u, e, i]),
    c = y.useMemo(() => p0(s, i), [s, i]),
    h = Y0(s),
    x = null;
  if (!l.unstable_singleFetch)
    x = f.map((w) =>
      y.createElement(
        'link',
        xe({ key: w, rel: 'prefetch', as: 'fetch', href: w }, n)
      )
    );
  else if (u.length > 0) {
    let w = Vh(
      i,
      o,
      t.map((S) => S.route),
      u.map((S) => S.route),
      ts(e)
    );
    w.searchParams.get('_routes') !== '' &&
      (x = y.createElement(
        'link',
        xe(
          {
            key: w.pathname + w.search,
            rel: 'prefetch',
            as: 'fetch',
            href: w.pathname + w.search,
          },
          n
        )
      ));
  }
  return y.createElement(
    y.Fragment,
    null,
    x,
    c.map((w) =>
      y.createElement('link', xe({ key: w, rel: 'modulepreload', href: w }, n))
    ),
    h.map(({ key: w, link: S }) => y.createElement('link', xe({ key: w }, S)))
  );
}
function p1() {
  let { isSpaMode: e, routeModules: t } = Cr(),
    { errors: n, matches: r, loaderData: l } = ho(),
    i = gn(),
    o = os(r, n, e),
    a = null;
  n && (a = n[o[o.length - 1].route.id]);
  let u = [],
    s = null,
    f = [];
  for (let c = 0; c < o.length; c++) {
    let h = o[c],
      x = h.route.id,
      w = l[x],
      S = h.params,
      P = t[x],
      p = [],
      d = {
        id: x,
        data: w,
        meta: [],
        params: h.params,
        pathname: h.pathname,
        handle: h.route.handle,
        error: a,
      };
    if (
      ((f[c] = d),
      P != null && P.meta
        ? (p =
            typeof P.meta == 'function'
              ? P.meta({
                  data: w,
                  params: S,
                  location: i,
                  matches: f,
                  error: a,
                })
              : Array.isArray(P.meta)
                ? [...P.meta]
                : P.meta)
        : s && (p = [...s]),
      (p = p || []),
      !Array.isArray(p))
    )
      throw new Error(
        'The route at ' +
          h.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`
      );
    (d.meta = p), (f[c] = d), (u = [...p]), (s = u);
  }
  return y.createElement(
    y.Fragment,
    null,
    u.flat().map((c) => {
      if (!c) return null;
      if ('tagName' in c) {
        let { tagName: h, ...x } = c;
        if (!J0(h))
          return (
            console.warn(
              `A meta object uses an invalid tagName: ${h}. Expected either 'link' or 'meta'`
            ),
            null
          );
        let w = h;
        return y.createElement(w, xe({ key: JSON.stringify(x) }, x));
      }
      if ('title' in c)
        return y.createElement('title', { key: 'title' }, String(c.title));
      if (
        ('charset' in c &&
          (c.charSet ?? (c.charSet = c.charset), delete c.charset),
        'charSet' in c && c.charSet != null)
      )
        return typeof c.charSet == 'string'
          ? y.createElement('meta', { key: 'charSet', charSet: c.charSet })
          : null;
      if ('script:ld+json' in c)
        try {
          let h = JSON.stringify(c['script:ld+json']);
          return y.createElement('script', {
            key: `script:ld+json:${h}`,
            type: 'application/ld+json',
            dangerouslySetInnerHTML: { __html: h },
          });
        } catch {
          return null;
        }
      return y.createElement('meta', xe({ key: JSON.stringify(c) }, c));
    })
  );
}
function J0(e) {
  return typeof e == 'string' && /^(meta|link)$/.test(e);
}
function G0(e) {
  return y.createElement(sg, e);
}
let gi = !1;
function Z0(e) {
  let {
      manifest: t,
      serverHandoffString: n,
      abortDelay: r,
      serializeError: l,
      isSpaMode: i,
      future: o,
      renderMeta: a,
    } = Cr(),
    { router: u, static: s, staticContext: f } = Xh(),
    { matches: c } = ho(),
    h = rs(o, i);
  a && (a.didRenderScripts = !0);
  let x = os(c, null, i);
  y.useEffect(() => {
    gi = !0;
  }, []);
  let w = (v, T) => {
      let R;
      return (
        l && T instanceof Error ? (R = l(T)) : (R = T),
        `${JSON.stringify(v)}:__remixContext.p(!1, ${ni(JSON.stringify(R))})`
      );
    },
    S = (v, T, R) => {
      let O;
      try {
        O = JSON.stringify(R);
      } catch (M) {
        return w(T, M);
      }
      return `${JSON.stringify(T)}:__remixContext.p(${ni(O)})`;
    },
    P = (v, T, R) => {
      let O;
      return (
        l && R instanceof Error ? (O = l(R)) : (O = R),
        `__remixContext.r(${JSON.stringify(v)}, ${JSON.stringify(T)}, !1, ${ni(JSON.stringify(O))})`
      );
    },
    p = (v, T, R) => {
      let O;
      try {
        O = JSON.stringify(R);
      } catch (M) {
        return P(v, T, M);
      }
      return `__remixContext.r(${JSON.stringify(v)}, ${JSON.stringify(T)}, ${ni(O)})`;
    },
    d = [],
    m = y.useMemo(() => {
      var v;
      let T = o.unstable_singleFetch
          ? 'window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());'
          : '',
        R = f ? `window.__remixContext = ${n};${T}` : ' ',
        O = o.unstable_singleFetch || f == null ? void 0 : f.activeDeferreds;
      R += O
        ? [
            '__remixContext.p = function(v,e,p,x) {',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p=Promise.reject(x);',
            '  } else {',
            '    p=Promise.resolve(v);',
            '  }',
            '  return p;',
            '};',
            '__remixContext.n = function(i,k) {',
            '  __remixContext.t = __remixContext.t || {};',
            '  __remixContext.t[i] = __remixContext.t[i] || {};',
            '  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});',
            typeof r == 'number'
              ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${r});`
              : '',
            '  return p;',
            '};',
            '__remixContext.r = function(i,k,v,e,p,x) {',
            '  p = __remixContext.t[i][k];',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p.e(x);',
            '  } else {',
            '    p.r(v);',
            '  }',
            '};',
          ].join(`
`) +
          Object.entries(O).map(([V, X]) => {
            let ge = new Set(X.pendingKeys),
              ee = X.deferredKeys.map((ke) => {
                if (ge.has(ke))
                  return (
                    d.push(
                      y.createElement(bc, {
                        key: `${V} | ${ke}`,
                        deferredData: X,
                        routeId: V,
                        dataKey: ke,
                        scriptProps: e,
                        serializeData: p,
                        serializeError: P,
                      })
                    ),
                    `${JSON.stringify(ke)}:__remixContext.n(${JSON.stringify(V)}, ${JSON.stringify(ke)})`
                  );
                {
                  let rt = X.data[ke];
                  return typeof rt._error < 'u'
                    ? w(ke, rt._error)
                    : S(V, ke, rt._data);
                }
              }).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(V)}], {${ee}});`;
          }).join(`
`) +
          (d.length > 0 ? `__remixContext.a=${d.length};` : '')
        : '';
      let M = s
        ? `${(v = t.hmr) !== null && v !== void 0 && v.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}${h ? '' : `import ${JSON.stringify(t.url)}`};
${x.map(
  (V, X) =>
    `import * as route${X} from ${JSON.stringify(t.routes[V.route.id].module)};`
).join(`
`)}
${h ? `window.__remixManifest = ${JSON.stringify(B0(t, u), null, 2)};` : ''}
window.__remixRouteModules = {${x.map((V, X) => `${JSON.stringify(V.route.id)}:route${X}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
        : ' ';
      return y.createElement(
        y.Fragment,
        null,
        y.createElement(
          'script',
          xe({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Jc(R),
            type: void 0,
          })
        ),
        y.createElement(
          'script',
          xe({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Jc(M),
            type: 'module',
            async: !0,
          })
        )
      );
    }, []);
  if (!s && typeof __remixContext == 'object' && __remixContext.a)
    for (let v = 0; v < __remixContext.a; v++)
      d.push(
        y.createElement(bc, {
          key: v,
          scriptProps: e,
          serializeData: p,
          serializeError: P,
        })
      );
  let k = x
      .map((v) => {
        let T = t.routes[v.route.id];
        return (T.imports || []).concat([T.module]);
      })
      .flat(1),
    L = gi ? [] : t.entry.imports.concat(k);
  return gi
    ? null
    : y.createElement(
        y.Fragment,
        null,
        h
          ? null
          : y.createElement('link', {
              rel: 'modulepreload',
              href: t.url,
              crossOrigin: e.crossOrigin,
            }),
        y.createElement('link', {
          rel: 'modulepreload',
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
        }),
        b0(L).map((v) =>
          y.createElement('link', {
            key: v,
            rel: 'modulepreload',
            href: v,
            crossOrigin: e.crossOrigin,
          })
        ),
        m,
        d
      );
}
function bc({
  dataKey: e,
  deferredData: t,
  routeId: n,
  scriptProps: r,
  serializeData: l,
  serializeError: i,
}) {
  return (
    typeof document > 'u' &&
      t &&
      e &&
      n &&
      jn(
        t.pendingKeys.includes(e),
        `Deferred data for route ${n} with key ${e} was not pending but tried to render a script for it.`
      ),
    y.createElement(
      y.Suspense,
      {
        fallback:
          typeof document > 'u' && t && e && n
            ? null
            : y.createElement(
                'script',
                xe({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: ' ' },
                })
              ),
      },
      typeof document > 'u' && t && e && n
        ? y.createElement(G0, {
            resolve: t.data[e],
            errorElement: y.createElement(q0, {
              dataKey: e,
              routeId: n,
              scriptProps: r,
              serializeError: i,
            }),
            children: (o) =>
              y.createElement(
                'script',
                xe({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: l(n, e, o) },
                })
              ),
          })
        : y.createElement(
            'script',
            xe({}, r, {
              async: !0,
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: { __html: ' ' },
            })
          )
    )
  );
}
function q0({ dataKey: e, routeId: t, scriptProps: n, serializeError: r }) {
  let l = og();
  return y.createElement(
    'script',
    xe({}, n, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: r(t, e, l) },
    })
  );
}
function b0(e) {
  return [...new Set(e)];
}
function Zh(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
export {
  Fn as E,
  h1 as L,
  p1 as M,
  l1 as O,
  Jh as R,
  Z0 as S,
  ns as a,
  f1 as b,
  c1 as c,
  O0 as d,
  r1 as e,
  n1 as f,
  i1 as g,
  u1 as h,
  jn as i,
  s1 as j,
  a1 as k,
  mh as l,
  Ft as m,
  t1 as n,
  y as r,
  A0 as s,
  d1 as u,
};
