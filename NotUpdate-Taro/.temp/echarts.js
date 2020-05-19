!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {});
}(this, function (t) {
  "use strict";
  function e(t, e) {
    "createCanvas" === t && (Nf = null), Pf[t] = e;
  }function n(t) {
    if (null == t || "object" != typeof t) return t;var e = t,
        i = If.call(t);if ("[object Array]" === i) {
      if (!E(t)) {
        e = [];for (var r = 0, a = t.length; r < a; r++) e[r] = n(t[r]);
      }
    } else if (Mf[i]) {
      if (!E(t)) {
        var o = t.constructor;if (t.constructor.from) e = o.from(t);else {
          e = new o(t.length);for (var r = 0, a = t.length; r < a; r++) e[r] = n(t[r]);
        }
      }
    } else if (!Sf[i] && !E(t) && !I(t)) {
      e = {};for (var s in t) t.hasOwnProperty(s) && (e[s] = n(t[s]));
    }return e;
  }function i(t, e, r) {
    if (!b(e) || !b(t)) return r ? n(e) : t;for (var a in e) if (e.hasOwnProperty(a)) {
      var o = t[a],
          s = e[a];!b(s) || !b(o) || _(s) || _(o) || I(s) || I(o) || S(s) || S(o) || E(s) || E(o) ? !r && a in t || (t[a] = n(e[a], true)) : i(o, s, r);
    }return t;
  }function r(t, e) {
    for (var n = t[0], r = 1, a = t.length; r < a; r++) n = i(n, t[r], e);return n;
  }function a(t, e) {
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);return t;
  }function o(t, e, n) {
    for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);return t;
  }function s() {
    return Nf || (Nf = Of().getContext("2d")), Nf;
  }function l(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
    }return -1;
  }function u(t, e) {
    function n() {}var i = t.prototype;n.prototype = e.prototype, t.prototype = new n();for (var r in i) i.hasOwnProperty(r) && (t.prototype[r] = i[r]);t.prototype.constructor = t, t.superClass = e;
  }function h(t, e, n) {
    t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, o(t, e, n);
  }function c(t) {
    if (t) return "string" != typeof t && "number" == typeof t.length;
  }function d(t, e, n) {
    if (t && e) if (t.forEach && t.forEach === Df) t.forEach(e, n);else if (t.length === +t.length) for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t);else for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t);
  }function f(t, e, n) {
    if (t && e) {
      if (t.map && t.map === kf) return t.map(e, n);for (var i = [], r = 0, a = t.length; r < a; r++) i.push(e.call(n, t[r], r, t));return i;
    }
  }function p(t, e, n, i) {
    if (t && e) {
      if (t.reduce && t.reduce === Lf) return t.reduce(e, n, i);for (var r = 0, a = t.length; r < a; r++) n = e.call(i, n, t[r], r, t);return n;
    }
  }function g(t, e, n) {
    if (t && e) {
      if (t.filter && t.filter === Tf) return t.filter(e, n);for (var i = [], r = 0, a = t.length; r < a; r++) e.call(n, t[r], r, t) && i.push(t[r]);return i;
    }
  }function m(t, e, n) {
    if (t && e) for (var i = 0, r = t.length; i < r; i++) if (e.call(n, t[i], i, t)) return t[i];
  }function v(t, e) {
    var n = Cf.call(arguments, 2);return function () {
      return t.apply(e, n.concat(Cf.call(arguments)));
    };
  }function y(t) {
    var e = Cf.call(arguments, 1);return function () {
      return t.apply(this, e.concat(Cf.call(arguments)));
    };
  }function _(t) {
    return "[object Array]" === If.call(t);
  }function x(t) {
    return "function" == typeof t;
  }function w(t) {
    return "[object String]" === If.call(t);
  }function b(t) {
    var e = typeof t;return "function" === e || !!t && "object" === e;
  }function S(t) {
    return !!Sf[If.call(t)];
  }function M(t) {
    return !!Mf[If.call(t)];
  }function I(t) {
    return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument;
  }function A(t) {
    return t !== t;
  }function D(t) {
    for (var e = 0, n = arguments.length; e < n; e++) if (null != arguments[e]) return arguments[e];
  }function T(t, e) {
    return null != t ? t : e;
  }function C(t, e, n) {
    return null != t ? t : null != e ? e : n;
  }function k() {
    return Function.call.apply(Cf, arguments);
  }function L(t) {
    if ("number" == typeof t) return [t, t, t, t];var e = t.length;return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
  }function P(t, e) {
    if (!t) throw new Error(e);
  }function O(t) {
    return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }function N(t) {
    t[Ef] = true;
  }function E(t) {
    return t[Ef];
  }function z(t) {
    function e(t, e) {
      n ? i.set(t, e) : i.set(e, t);
    }var n = _(t);this.data = {};var i = this;t instanceof z ? t.each(e) : t && d(t, e);
  }function R(t) {
    return new z(t);
  }function B(t, e) {
    for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];var r = t.length;for (i = 0; i < e.length; i++) n[i + r] = e[i];return n;
  }function F() {}function V(t, e) {
    var n = new Rf(2);return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n;
  }function G(t, e) {
    return t[0] = e[0], t[1] = e[1], t;
  }function W(t) {
    var e = new Rf(2);return e[0] = t[0], e[1] = t[1], e;
  }function H(t, e, n) {
    return t[0] = e, t[1] = n, t;
  }function Z(t, e, n) {
    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
  }function X(t, e, n, i) {
    return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t;
  }function j(t, e, n) {
    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
  }function U(t) {
    return Math.sqrt(Y(t));
  }function Y(t) {
    return t[0] * t[0] + t[1] * t[1];
  }function q(t, e, n) {
    return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t;
  }function $(t, e, n) {
    return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t;
  }function K(t, e) {
    return t[0] * e[0] + t[1] * e[1];
  }function Q(t, e, n) {
    return t[0] = e[0] * n, t[1] = e[1] * n, t;
  }function J(t, e) {
    var n = U(e);return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;
  }function tt(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
  }function et(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
  }function nt(t, e) {
    return t[0] = -e[0], t[1] = -e[1], t;
  }function it(t, e, n, i) {
    return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t;
  }function rt(t, e, n) {
    var i = e[0],
        r = e[1];return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;
  }function at(t, e, n) {
    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
  }function ot(t, e, n) {
    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
  }function st() {
    this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this);
  }function lt(t, e) {
    return { target: t, topTarget: e && e.topTarget };
  }function ut(t, e) {
    var n = t._$eventProcessor;return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e;
  }function ht(t, e, n, i, r, a) {
    var o = t._$handlers;if ("function" == typeof n && (r = i, i = n, n = null), !i || !e) return t;n = ut(t, n), o[e] || (o[e] = []);for (var s = 0; s < o[e].length; s++) if (o[e][s].h === i) return t;var l = { h: i, one: a, query: n, ctx: r || t, callAtLast: i.zrEventfulCallAtLast },
        u = o[e].length - 1,
        h = o[e][u];return h && h.callAtLast ? o[e].splice(u, 0, l) : o[e].push(l), t;
  }function ct(t, e, n, i, r, a) {
    var o = i + "-" + r,
        s = t.length;if (a.hasOwnProperty(o)) return a[o];if (1 === e) {
      var l = Math.round(Math.log((1 << s) - 1 & ~r) / Xf);return t[n][l];
    }for (var u = i | 1 << n, h = n + 1; i & 1 << h;) h++;for (var c = 0, d = 0, f = 0; d < s; d++) {
      var p = 1 << d;p & r || (c += (f % 2 ? -1 : 1) * t[n][d] * ct(t, e - 1, h, u, r | p, a), f++);
    }return a[o] = c, c;
  }function dt(t, e) {
    var n = [[t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]], [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]], [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]], [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]], [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]], [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]], [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]], [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]],
        i = {},
        r = ct(n, 8, 0, 0, 0, i);if (0 !== r) {
      for (var a = [], o = 0; o < 8; o++) for (var s = 0; s < 8; s++) null == a[s] && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * ct(n, 7, 0 === o ? 1 : 0, 1 << o, 1 << s, i) / r * e[o];return function (t, e, n) {
        var i = e * a[6] + n * a[7] + 1;t[0] = (e * a[0] + n * a[1] + a[2]) / i, t[1] = (e * a[3] + n * a[4] + a[5]) / i;
      };
    }
  }function ft(t, e, n, i, r) {
    if (e.getBoundingClientRect && bf.domSupported && !mt(e)) {
      var a = e[jf] || (e[jf] = {}),
          o = pt(e, a),
          s = gt(o, a, r);if (s) return s(t, n, i), true;
    }return false;
  }function pt(t, e) {
    var n = e.markers;if (n) return n;n = e.markers = [];for (var i = ["left", "right"], r = ["top", "bottom"], a = 0; a < 4; a++) {
      var o = document.createElement("div"),
          s = o.style,
          l = a % 2,
          u = (a >> 1) % 2;s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", i[l] + ":0", r[u] + ":0", i[1 - l] + ":auto", r[1 - u] + ":auto", ""].join("!important;"), t.appendChild(o), n.push(o);
    }return n;
  }function gt(t, e, n) {
    for (var i = n ? "invTrans" : "trans", r = e[i], a = e.srcCoords, o = true, s = [], l = [], u = 0; u < 4; u++) {
      var h = t[u].getBoundingClientRect(),
          c = 2 * u,
          d = h.left,
          f = h.top;s.push(d, f), o = o && a && d === a[c] && f === a[c + 1], l.push(t[u].offsetLeft, t[u].offsetTop);
    }return o && r ? r : (e.srcCoords = s, e[i] = n ? dt(l, s) : dt(s, l));
  }function mt(t) {
    return "CANVAS" === t.nodeName.toUpperCase();
  }function vt(t, e, n, i) {
    return n = n || {}, i || !bf.canvasSupported ? yt(t, e, n) : bf.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : yt(t, e, n), n;
  }function yt(t, e, n) {
    if (bf.domSupported && t.getBoundingClientRect) {
      var i = e.clientX,
          r = e.clientY;if (mt(t)) {
        var a = t.getBoundingClientRect();return n.zrX = i - a.left, undefined;
      }if (ft(qf, t, i, r)) return n.zrX = qf[0], undefined;
    }n.zrX = n.zrY = 0;
  }function _t(t) {
    return t || window.event;
  }function xt(t, e, n) {
    if (e = _t(e), null != e.zrX) return e;var i = e.type;if (i && i.indexOf("touch") >= 0) {
      var r = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];r && vt(t, r, e, n);
    } else vt(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;var a = e.button;return null == e.which && undefined !== a && Yf.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e;
  }function wt(t, e, n, i) {
    Uf ? t.addEventListener(e, n, i) : t.attachEvent("on" + e, n);
  }function bt(t, e, n, i) {
    Uf ? t.removeEventListener(e, n, i) : t.detachEvent("on" + e, n);
  }function St(t) {
    return 2 === t.which || 3 === t.which;
  }function Mt(t) {
    var e = t[1][0] - t[0][0],
        n = t[1][1] - t[0][1];return Math.sqrt(e * e + n * n);
  }function It(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
  }function At(t, e, n) {
    return { type: t, event: n, target: e.target, topTarget: e.topTarget, cancelBubble: false, offsetX: n.zrX, offsetY: n.zrY, gestureEvent: n.gestureEvent, pinchX: n.pinchX, pinchY: n.pinchY, pinchScale: n.pinchScale, wheelDelta: n.zrDelta, zrByTouch: n.zrByTouch, which: n.which, stop: Dt };
  }function Dt() {
    $f(this.event);
  }function Tt() {}function Ct(t, e, n) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
      for (var i, r = t; r;) {
        if (r.clipPath && !r.clipPath.contain(e, n)) return false;r.silent && (i = true), r = r.parent;
      }return !i || Jf;
    }return false;
  }function kt(t, e, n) {
    var i = t.painter;return e < 0 || e > i.getWidth() || n < 0 || n > i.getHeight();
  }function Lt() {
    var t = new np(6);return Pt(t), t;
  }function Pt(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
  }function Ot(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
  }function Nt(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
        r = e[1] * n[0] + e[3] * n[1],
        a = e[0] * n[2] + e[2] * n[3],
        o = e[1] * n[2] + e[3] * n[3],
        s = e[0] * n[4] + e[2] * n[5] + e[4],
        l = e[1] * n[4] + e[3] * n[5] + e[5];return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;
  }function Et(t, e, n) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t;
  }function zt(t, e, n) {
    var i = e[0],
        r = e[2],
        a = e[4],
        o = e[1],
        s = e[3],
        l = e[5],
        u = Math.sin(n),
        h = Math.cos(n);return t[0] = i * h + o * u, t[1] = -i * u + o * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * a + u * l, t[5] = h * l - u * a, t;
  }function Rt(t, e, n) {
    var i = n[0],
        r = n[1];return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t;
  }function Bt(t, e) {
    var n = e[0],
        i = e[2],
        r = e[4],
        a = e[1],
        o = e[3],
        s = e[5],
        l = n * o - a * i;return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null;
  }function Ft(t) {
    var e = Lt();return Ot(e, t), e;
  }function Vt(t) {
    return t > ap || t < -ap;
  }function Gt(t) {
    this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = false, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = false;
  }function Wt(t) {
    return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t;
  }function Ht(t) {
    return t = Math.round(t), t < 0 ? 0 : t > 360 ? 360 : t;
  }function Zt(t) {
    return t < 0 ? 0 : t > 1 ? 1 : t;
  }function Xt(t) {
    return Wt(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
  }function jt(t) {
    return Zt(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
  }function Ut(t, e, n) {
    return n < 0 ? n += 1 : n > 1 && (n -= 1), 6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (0.6666666666666666 - n) * 6 : t;
  }function Yt(t, e, n) {
    return t + (e - t) * n;
  }function qt(t, e, n, i, r) {
    return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t;
  }function $t(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
  }function Kt(t, e) {
    _p && $t(_p, e), _p = yp.put(t, _p || e.slice());
  }function Qt(t, e) {
    if (t) {
      e = e || [];var n = yp.get(t);if (n) return $t(e, n);t += "";var i = t.replace(/ /g, "").toLowerCase();if (i in vp) return $t(e, vp[i]), Kt(t, e), e;if ("#" !== i.charAt(0)) {
        var r = i.indexOf("("),
            a = i.indexOf(")");if (-1 !== r && a + 1 === i.length) {
          var o = i.substr(0, r),
              s = i.substr(r + 1, a - (r + 1)).split(","),
              l = 1;switch (o) {case "rgba":
              if (4 !== s.length) return undefined;l = jt(s.pop());case "rgb":
              return 3 !== s.length ? undefined : (qt(e, Xt(s[0]), Xt(s[1]), Xt(s[2]), l), Kt(t, e), e);case "hsla":
              return 4 !== s.length ? undefined : (s[3] = jt(s[3]), Jt(s, e), Kt(t, e), e);case "hsl":
              return 3 !== s.length ? undefined : (Jt(s, e), Kt(t, e), e);default:
              return;}
        }qt(e, 0, 0, 0, 1);
      } else {
        if (4 === i.length) {
          var u = parseInt(i.substr(1), 16);return u >= 0 && u <= 4095 ? (qt(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), Kt(t, e), e) : undefined;
        }if (7 === i.length) {
          var u = parseInt(i.substr(1), 16);return u >= 0 && u <= 16777215 ? (qt(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Kt(t, e), e) : undefined;
        }
      }
    }
  }function Jt(t, e) {
    var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
        i = jt(t[1]),
        r = jt(t[2]),
        a = r <= .5 ? r * (i + 1) : r + i - r * i,
        o = 2 * r - a;return e = e || [], qt(e, Wt(255 * Ut(o, a, n + 0.3333333333333333)), Wt(255 * Ut(o, a, n)), Wt(255 * Ut(o, a, n - 0.3333333333333333)), 1), 4 === t.length && (e[3] = t[3]), e;
  }function te(t) {
    if (t) {
      var e,
          n,
          i = t[0] / 255,
          r = t[1] / 255,
          a = t[2] / 255,
          o = Math.min(i, r, a),
          s = Math.max(i, r, a),
          l = s - o,
          u = (s + o) / 2;if (0 === l) e = 0, n = 0;else {
        n = u < .5 ? l / (s + o) : l / (2 - s - o);var h = ((s - i) / 6 + l / 2) / l,
            c = ((s - r) / 6 + l / 2) / l,
            d = ((s - a) / 6 + l / 2) / l;i === s ? e = d - c : r === s ? e = 0.3333333333333333 + h - d : a === s && (e = 0.6666666666666666 + c - h), e < 0 && (e += 1), e > 1 && (e -= 1);
      }var f = [360 * e, n, u];return null != t[3] && f.push(t[3]), f;
    }
  }function ee(t, e) {
    var n = Qt(t);if (n) {
      for (var i = 0; i < 3; i++) n[i] = e < 0 ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);return se(n, 4 === n.length ? "rgba" : "rgb");
    }
  }function ne(t) {
    var e = Qt(t);if (e) return (16777216 + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1);
  }function ie(t, e, n) {
    if (e && e.length && t >= 0 && t <= 1) {
      n = n || [];var i = t * (e.length - 1),
          r = Math.floor(i),
          a = Math.ceil(i),
          o = e[r],
          s = e[a],
          l = i - r;return n[0] = Wt(Yt(o[0], s[0], l)), n[1] = Wt(Yt(o[1], s[1], l)), n[2] = Wt(Yt(o[2], s[2], l)), n[3] = Zt(Yt(o[3], s[3], l)), n;
    }
  }function re(t, e, n) {
    if (e && e.length && t >= 0 && t <= 1) {
      var i = t * (e.length - 1),
          r = Math.floor(i),
          a = Math.ceil(i),
          o = Qt(e[r]),
          s = Qt(e[a]),
          l = i - r,
          u = se([Wt(Yt(o[0], s[0], l)), Wt(Yt(o[1], s[1], l)), Wt(Yt(o[2], s[2], l)), Zt(Yt(o[3], s[3], l))], "rgba");return n ? { color: u, leftIndex: r, rightIndex: a, value: i } : u;
    }
  }function ae(t, e, n, i) {
    if (t = Qt(t)) return t = te(t), null != e && (t[0] = Ht(e)), null != n && (t[1] = jt(n)), null != i && (t[2] = jt(i)), se(Jt(t), "rgba");
  }function oe(t, e) {
    if ((t = Qt(t)) && null != e) return t[3] = Zt(e), se(t, "rgba");
  }function se(t, e) {
    if (t && t.length) {
      var n = t[0] + "," + t[1] + "," + t[2];return "rgba" !== e && "hsva" !== e && "hsla" !== e || (n += "," + t[3]), e + "(" + n + ")";
    }
  }function le(t, e) {
    return t[e];
  }function ue(t, e, n) {
    t[e] = n;
  }function he(t, e, n) {
    return (e - t) * n + t;
  }function ce(t, e, n) {
    return n > .5 ? e : t;
  }function de(t, e, n, i, r) {
    var a = t.length;if (1 === r) for (var o = 0; o < a; o++) i[o] = he(t[o], e[o], n);else for (var s = a && t[0].length, o = 0; o < a; o++) for (var l = 0; l < s; l++) i[o][l] = he(t[o][l], e[o][l], n);
  }function fe(t, e, n) {
    var i = t.length,
        r = e.length;if (i !== r) {
      if (i > r) t.length = r;else for (var a = i; a < r; a++) t.push(1 === n ? e[a] : Sp.call(e[a]));
    }for (var o = t[0] && t[0].length, a = 0; a < t.length; a++) if (1 === n) isNaN(t[a]) && (t[a] = e[a]);else for (var s = 0; s < o; s++) isNaN(t[a][s]) && (t[a][s] = e[a][s]);
  }function pe(t, e, n) {
    if (t === e) return true;var i = t.length;if (i !== e.length) return false;if (1 === n) {
      for (var r = 0; r < i; r++) if (t[r] !== e[r]) return false;
    } else for (var a = t[0].length, r = 0; r < i; r++) for (var o = 0; o < a; o++) if (t[r][o] !== e[r][o]) return false;return true;
  }function ge(t, e, n, i, r, a, o, s, l) {
    var u = t.length;if (1 === l) for (var h = 0; h < u; h++) s[h] = me(t[h], e[h], n[h], i[h], r, a, o);else for (var c = t[0].length, h = 0; h < u; h++) for (var d = 0; d < c; d++) s[h][d] = me(t[h][d], e[h][d], n[h][d], i[h][d], r, a, o);
  }function me(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
        l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
  }function ve(t) {
    if (c(t)) {
      var e = t.length;if (c(t[0])) {
        for (var n = [], i = 0; i < e; i++) n.push(Sp.call(t[i]));return n;
      }return Sp.call(t);
    }return t;
  }function ye(t) {
    return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")";
  }function _e(t) {
    var e = t[t.length - 1].value;return c(e && e[0]) ? 2 : 1;
  }function xe(t, e, n, i, r, a) {
    var o = t._getter,
        s = t._setter,
        l = "spline" === e,
        u = i.length;if (u) {
      var h,
          d = i[0].value,
          f = c(d),
          p = false,
          g = false,
          m = f ? _e(i) : 0;i.sort(function (t, e) {
        return t.time - e.time;
      }), h = i[u - 1].time;for (var v = [], y = [], _ = i[0].value, x = true, w = 0; w < u; w++) {
        v.push(i[w].time / h);var b = i[w].value;if (f && pe(b, _, m) || !f && b === _ || (x = false), _ = b, "string" == typeof b) {
          var S = Qt(b);S ? (b = S, p = true) : g = true;
        }y.push(b);
      }if (a || !x) {
        for (var M = y[u - 1], w = 0; w < u - 1; w++) f ? fe(y[w], M, m) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);f && fe(o(t._target, r), M, m);var I,
            A,
            D,
            T,
            C,
            k,
            L = 0,
            P = 0;if (p) var O = [0, 0, 0, 0];var N = function (t, e) {
          var n;if (e < 0) n = 0;else if (e < P) {
            for (I = Math.min(L + 1, u - 1), n = I; n >= 0 && !(v[n] <= e); n--);n = Math.min(n, u - 2);
          } else {
            for (n = L; n < u && !(v[n] > e); n++);n = Math.min(n - 1, u - 2);
          }L = n, P = e;var i = v[n + 1] - v[n];if (0 !== i) if (A = (e - v[n]) / i, l) {
            if (T = y[n], D = y[0 === n ? n : n - 1], C = y[n > u - 2 ? u - 1 : n + 1], k = y[n > u - 3 ? u - 1 : n + 2], f) ge(D, T, C, k, A, A * A, A * A * A, o(t, r), m);else {
              var a;if (p) a = ge(D, T, C, k, A, A * A, A * A * A, O, 1), a = ye(O);else {
                if (g) return ce(T, C, A);a = me(D, T, C, k, A, A * A, A * A * A);
              }s(t, r, a);
            }
          } else if (f) de(y[n], y[n + 1], A, o(t, r), m);else {
            var a;if (p) de(y[n], y[n + 1], A, O, 1), a = ye(O);else {
              if (g) return ce(y[n], y[n + 1], A);a = he(y[n], y[n + 1], A);
            }s(t, r, a);
          }
        },
            E = new Gt({ target: t._target, life: h, loop: t._loop, delay: t._delay, onframe: N, ondestroy: n });return e && "spline" !== e && (E.easing = e), E;
      }
    }
  }function we(t, e, n, i, r, a, o, s) {
    function l() {
      --h || a && a();
    }w(i) ? (a = r, r = i, i = 0) : x(r) ? (a = r, r = "linear", i = 0) : x(i) ? (a = i, i = 0) : x(n) ? (a = n, n = 500) : n || (n = 500), t.stopAnimation(), be(t, "", t, e, n, i, s);var u = t.animators.slice(),
        h = u.length;h || a && a();for (var c = 0; c < u.length; c++) u[c].done(l).start(r, o);
  }function be(t, e, n, i, r, a, o) {
    var s = {},
        l = 0;for (var u in i) i.hasOwnProperty(u) && (null != n[u] ? b(i[u]) && !c(i[u]) ? be(t, e ? e + "." + u : u, n[u], i[u], r, a, o) : (o ? (s[u] = n[u], Se(t, e, u, i[u])) : s[u] = i[u], l++) : null == i[u] || o || Se(t, e, u, i[u]));l > 0 && t.animate(e, false).when(null == r ? 500 : r, s).delay(a || 0);
  }function Se(t, e, n, i) {
    if (e) {
      var r = {};r[e] = {}, r[e][n] = i, t.attr(r);
    } else t.attr(n, i);
  }function Me(t, e, n, i) {
    n < 0 && (t += n, n = -n), i < 0 && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;
  }function Ie(t) {
    for (var e = 0; t >= Ep;) e |= 1 & t, t >>= 1;return t + e;
  }function Ae(t, e, n, i) {
    var r = e + 1;if (r === n) return 1;if (i(t[r++], t[e]) < 0) {
      for (; r < n && i(t[r], t[r - 1]) < 0;) r++;De(t, e, r);
    } else for (; r < n && i(t[r], t[r - 1]) >= 0;) r++;return r - e;
  }function De(t, e, n) {
    for (n--; e < n;) {
      var i = t[e];t[e++] = t[n], t[n--] = i;
    }
  }function Te(t, e, n, i, r) {
    for (i === e && i++; i < n; i++) {
      for (var a, o = t[i], s = e, l = i; s < l;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;var u = i - s;switch (u) {case 3:
          t[s + 3] = t[s + 2];case 2:
          t[s + 2] = t[s + 1];case 1:
          t[s + 1] = t[s];break;default:
          for (; u > 0;) t[s + u] = t[s + u - 1], u--;}t[s] = o;
    }
  }function Ce(t, e, n, i, r, a) {
    var o = 0,
        s = 0,
        l = 1;if (a(t, e[n + r]) > 0) {
      for (s = i - r; l < s && a(t, e[n + r + l]) > 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);l > s && (l = s), o += r, l += r;
    } else {
      for (s = r + 1; l < s && a(t, e[n + r - l]) <= 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);l > s && (l = s);var u = o;o = r - l, l = r - u;
    }for (o++; o < l;) {
      var h = o + (l - o >>> 1);a(t, e[n + h]) > 0 ? o = h + 1 : l = h;
    }return l;
  }function ke(t, e, n, i, r, a) {
    var o = 0,
        s = 0,
        l = 1;if (a(t, e[n + r]) < 0) {
      for (s = r + 1; l < s && a(t, e[n + r - l]) < 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);l > s && (l = s);var u = o;o = r - l, l = r - u;
    } else {
      for (s = i - r; l < s && a(t, e[n + r + l]) >= 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);l > s && (l = s), o += r, l += r;
    }for (o++; o < l;) {
      var h = o + (l - o >>> 1);a(t, e[n + h]) < 0 ? l = h : o = h + 1;
    }return l;
  }function Le(t, e) {
    function n(t, e) {
      l[c] = t, u[c] = e, c += 1;
    }function i() {
      for (; c > 1;) {
        var t = c - 2;if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--;else if (u[t] > u[t + 1]) break;a(t);
      }
    }function r() {
      for (; c > 1;) {
        var t = c - 2;t > 0 && u[t - 1] < u[t + 1] && t--, a(t);
      }
    }function a(n) {
      var i = l[n],
          r = u[n],
          a = l[n + 1],
          h = u[n + 1];u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;var d = ke(t[a], t, i, r, 0, e);i += d, 0 !== (r -= d) && 0 !== (h = Ce(t[i + r - 1], t, a, h, h - 1, e)) && (r <= h ? o(i, r, a, h) : s(i, r, a, h));
    }function o(n, i, r, a) {
      var o = 0;for (o = 0; o < i; o++) d[o] = t[n + o];var s = 0,
          l = r,
          u = n;if (t[u++] = t[l++], 0 != --a) {
        if (1 === i) {
          for (o = 0; o < a; o++) t[u + o] = t[l + o];return undefined;
        }for (var c, f, p, g = h;;) {
          c = 0, f = 0, p = false;do {
            if (e(t[l], d[s]) < 0) {
              if (t[u++] = t[l++], f++, c = 0, 0 == --a) {
                p = true;break;
              }
            } else if (t[u++] = d[s++], c++, f = 0, 1 == --i) {
              p = true;break;
            }
          } while ((c | f) < g);if (p) break;do {
            if (0 !== (c = ke(t[l], d, s, i, 0, e))) {
              for (o = 0; o < c; o++) t[u + o] = d[s + o];if (u += c, s += c, (i -= c) <= 1) {
                p = true;break;
              }
            }if (t[u++] = t[l++], 0 == --a) {
              p = true;break;
            }if (0 !== (f = Ce(d[s], t, l, a, 0, e))) {
              for (o = 0; o < f; o++) t[u + o] = t[l + o];if (u += f, l += f, 0 === (a -= f)) {
                p = true;break;
              }
            }if (t[u++] = d[s++], 1 == --i) {
              p = true;break;
            }g--;
          } while (c >= zp || f >= zp);if (p) break;g < 0 && (g = 0), g += 2;
        }if (h = g, h < 1 && (h = 1), 1 === i) {
          for (o = 0; o < a; o++) t[u + o] = t[l + o];t[u + a] = d[s];
        } else {
          if (0 === i) throw new Error();for (o = 0; o < i; o++) t[u + o] = d[s + o];
        }
      } else for (o = 0; o < i; o++) t[u + o] = d[s + o];
    }function s(n, i, r, a) {
      var o = 0;for (o = 0; o < a; o++) d[o] = t[r + o];var s = n + i - 1,
          l = a - 1,
          u = r + a - 1,
          c = 0,
          f = 0;if (t[u--] = t[s--], 0 != --i) {
        if (1 === a) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];return undefined;
        }for (var p = h;;) {
          var g = 0,
              m = 0,
              v = false;do {
            if (e(d[l], t[s]) < 0) {
              if (t[u--] = t[s--], g++, m = 0, 0 == --i) {
                v = true;break;
              }
            } else if (t[u--] = d[l--], m++, g = 0, 1 == --a) {
              v = true;break;
            }
          } while ((g | m) < p);if (v) break;do {
            if (0 !== (g = i - ke(d[l], t, n, i, i - 1, e))) {
              for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, o = g - 1; o >= 0; o--) t[f + o] = t[c + o];if (0 === i) {
                v = true;break;
              }
            }if (t[u--] = d[l--], 1 == --a) {
              v = true;break;
            }if (0 !== (m = a - Ce(t[s], d, 0, a, a - 1, e))) {
              for (u -= m, l -= m, a -= m, f = u + 1, c = l + 1, o = 0; o < m; o++) t[f + o] = d[c + o];if (a <= 1) {
                v = true;break;
              }
            }if (t[u--] = t[s--], 0 == --i) {
              v = true;break;
            }p--;
          } while (g >= zp || m >= zp);if (v) break;p < 0 && (p = 0), p += 2;
        }if (h = p, h < 1 && (h = 1), 1 === a) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];t[u] = d[l];
        } else {
          if (0 === a) throw new Error();for (c = u - (a - 1), o = 0; o < a; o++) t[c + o] = d[o];
        }
      } else for (c = u - (a - 1), o = 0; o < a; o++) t[c + o] = d[o];
    }var l,
        u,
        h = zp,
        c = 0,
        d = [];l = [], u = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n;
  }function Pe(t, e, n, i) {
    n || (n = 0), i || (i = t.length);var r = i - n;if (!(r < 2)) {
      var a = 0;if (r < Ep) return a = Ae(t, n, i, e), undefined;var o = new Le(t, e),
          s = Ie(r);do {
        if ((a = Ae(t, n, i, e)) < s) {
          var l = r;l > s && (l = s), Te(t, n, n + l, n + a, e), a = l;
        }o.pushRun(n, a), o.mergeRuns(), r -= a, n += a;
      } while (0 !== r);o.forceMergeRuns();
    }
  }function Oe(t, e) {
    return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
  }function Ne(t, e, n) {
    var i = null == e.x ? 0 : e.x,
        r = null == e.x2 ? 1 : e.x2,
        a = null == e.y ? 0 : e.y,
        o = null == e.y2 ? 0 : e.y2;return e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o, t.createLinearGradient(i, a, r, o);
  }function Ee(t, e, n) {
    var i = n.width,
        r = n.height,
        a = Math.min(i, r),
        o = null == e.x ? .5 : e.x,
        s = null == e.y ? .5 : e.y,
        l = null == e.r ? .5 : e.r;return e.global || (o = o * i + n.x, s = s * r + n.y, l *= a), t.createRadialGradient(o, s, 0, o, s, l);
  }function ze() {
    return false;
  }function Re(t, e, n) {
    var i = Of(),
        r = e.getWidth(),
        a = e.getHeight(),
        o = i.style;return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i;
  }function Be(t) {
    if ("string" == typeof t) {
      var e = $p.get(t);return e && e.image;
    }return t;
  }function Fe(t, e, n, i, r) {
    if (t) {
      if ("string" == typeof t) {
        if (e && e.__zrImageSrc === t || !n) return e;var a = $p.get(t),
            o = { hostEl: n, cb: i, cbPayload: r };return a ? (e = a.image, !Ge(e) && a.pending.push(o)) : (e = new Image(), e.onload = e.onerror = Ve, $p.put(t, e.__cachedImgObj = { image: e, pending: [o] }), e.src = e.__zrImageSrc = t), e;
      }return t;
    }return e;
  }function Ve() {
    var t = this.__cachedImgObj;this.onload = this.onerror = this.__cachedImgObj = null;for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
          i = n.cb;i && i(this, n.cbPayload), n.hostEl.dirty();
    }t.pending.length = 0;
  }function Ge(t) {
    return t && t.width && t.height;
  }function We(t, e) {
    e = e || eg;var n = t + ":" + e;if (Kp[n]) return Kp[n];for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; a < o; a++) r = Math.max(tn(i[a], e).width, r);return Qp > Jp && (Qp = 0, Kp = {}), Qp++, Kp[n] = r, r;
  }function He(t, e, n, i, r, a, o, s) {
    return o ? Xe(t, e, n, i, r, a, o, s) : Ze(t, e, n, i, r, a, s);
  }function Ze(t, e, n, i, r, a, o) {
    var s = en(t, e, r, a, o),
        l = We(t, e);r && (l += r[1] + r[3]);var u = s.outerHeight,
        h = je(0, l, n),
        c = Ue(0, u, i),
        d = new Me(h, c, l, u);return d.lineHeight = s.lineHeight, d;
  }function Xe(t, e, n, i, r, a, o, s) {
    var l = nn(t, { rich: o, truncate: s, font: e, textAlign: n, textPadding: r, textLineHeight: a }),
        u = l.outerWidth,
        h = l.outerHeight;return new Me(je(0, u, n), Ue(0, h, i), u, h);
  }function je(t, e, n) {
    return "right" === n ? t -= e : "center" === n && (t -= e / 2), t;
  }function Ue(t, e, n) {
    return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t;
  }function Ye(t, e, n) {
    var i = e.textPosition,
        r = e.textDistance,
        a = n.x,
        o = n.y;r = r || 0;var s = n.height,
        l = n.width,
        u = s / 2,
        h = "left",
        c = "top";switch (i) {case "left":
        a -= r, o += u, h = "right", c = "middle";break;case "right":
        a += r + l, o += u, c = "middle";break;case "top":
        a += l / 2, o -= r, h = "center", c = "bottom";break;case "bottom":
        a += l / 2, o += s + r, h = "center";break;case "inside":
        a += l / 2, o += u, h = "center", c = "middle";break;case "insideLeft":
        a += r, o += u, c = "middle";break;case "insideRight":
        a += l - r, o += u, h = "right", c = "middle";break;case "insideTop":
        a += l / 2, o += r, h = "center";break;case "insideBottom":
        a += l / 2, o += s - r, h = "center", c = "bottom";break;case "insideTopLeft":
        a += r, o += r;break;case "insideTopRight":
        a += l - r, o += r, h = "right";break;case "insideBottomLeft":
        a += r, o += s - r, c = "bottom";break;case "insideBottomRight":
        a += l - r, o += s - r, h = "right", c = "bottom";}return t = t || {}, t.x = a, t.y = o, t.textAlign = h, t.textVerticalAlign = c, t;
  }function qe(t, e, n, i, r) {
    if (!e) return "";var a = (t + "").split("\n");r = $e(e, n, i, r);for (var o = 0, s = a.length; o < s; o++) a[o] = Ke(a[o], r);return a.join("\n");
  }function $e(t, e, n, i) {
    i = a({}, i), i.font = e;var n = T(n, "...");i.maxIterations = T(i.maxIterations, 2);var r = i.minChar = T(i.minChar, 0);i.cnCharWidth = We("国", e);var o = i.ascCharWidth = We("a", e);i.placeholder = T(i.placeholder, "");for (var s = t = Math.max(0, t - 1), l = 0; l < r && s >= o; l++) s -= o;var u = We(n, e);return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = t, i;
  }function Ke(t, e) {
    var n = e.containerWidth,
        i = e.font,
        r = e.contentWidth;if (!n) return "";var a = We(t, i);if (a <= n) return t;for (var o = 0;; o++) {
      if (a <= r || o >= e.maxIterations) {
        t += e.ellipsis;break;
      }var s = 0 === o ? Qe(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;t = t.substr(0, s), a = We(t, i);
    }return "" === t && (t = e.placeholder), t;
  }function Qe(t, e, n, i) {
    for (var r = 0, a = 0, o = t.length; a < o && r < e; a++) {
      var s = t.charCodeAt(a);r += 0 <= s && s <= 127 ? n : i;
    }return a;
  }function Je(t) {
    return We("国", t);
  }function tn(t, e) {
    return ng.measureText(t, e);
  }function en(t, e, n, i, r) {
    null != t && (t += "");var a = T(i, Je(e)),
        o = t ? t.split("\n") : [],
        s = o.length * a,
        l = s,
        u = true;if (n && (l += n[0] + n[2]), t && r) {
      u = false;var h = r.outerHeight,
          c = r.outerWidth;if (null != h && l > h) t = "", o = [];else if (null != c) for (var d = $e(c - (n ? n[1] + n[3] : 0), e, r.ellipsis, { minChar: r.minChar, placeholder: r.placeholder }), f = 0, p = o.length; f < p; f++) o[f] = Ke(o[f], d);
    }return { lines: o, height: s, outerHeight: l, lineHeight: a, canCacheByTextString: u };
  }function nn(t, e) {
    var n = { lines: [], width: 0, height: 0 };if (null != t && (t += ""), !t) return n;for (var i, r = tg.lastIndex = 0; null != (i = tg.exec(t));) {
      var a = i.index;a > r && rn(n, t.substring(r, a)), rn(n, i[2], i[1]), r = tg.lastIndex;
    }r < t.length && rn(n, t.substring(r, t.length));var o = n.lines,
        s = 0,
        l = 0,
        u = [],
        h = e.textPadding,
        c = e.truncate,
        d = c && c.outerWidth,
        f = c && c.outerHeight;h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));for (var p = 0; p < o.length; p++) {
      for (var g = o[p], m = 0, v = 0, y = 0; y < g.tokens.length; y++) {
        var _ = g.tokens[y],
            x = _.styleName && e.rich[_.styleName] || {},
            w = _.textPadding = x.textPadding,
            b = _.font = x.font || e.font,
            S = _.textHeight = T(x.textHeight, Je(b));if (w && (S += w[0] + w[2]), _.height = S, _.lineHeight = C(x.textLineHeight, e.textLineHeight, S), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != f && s + _.lineHeight > f) return { lines: [], width: 0, height: 0 };_.textWidth = We(_.text, b);var M = x.textWidth,
            I = null == M || "auto" === M;if ("string" == typeof M && "%" === M.charAt(M.length - 1)) _.percentWidth = M, u.push(_), M = 0;else {
          if (I) {
            M = _.textWidth;var A = x.textBackgroundColor,
                D = A && A.image;D && (D = Be(D), Ge(D) && (M = Math.max(M, D.width * S / D.height)));
          }var k = w ? w[1] + w[3] : 0;M += k;var L = null != d ? d - v : null;null != L && L < M && (!I || L < k ? (_.text = "", _.textWidth = M = 0) : (_.text = qe(_.text, L - k, b, c.ellipsis, { minChar: c.minChar }), _.textWidth = We(_.text, b), M = _.textWidth + k));
        }v += _.width = M, x && (m = Math.max(m, _.lineHeight));
      }g.width = v, g.lineHeight = m, s += m, l = Math.max(l, v);
    }n.outerWidth = n.width = T(e.textWidth, l), n.outerHeight = n.height = T(e.textHeight, s), h && (n.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);for (var p = 0; p < u.length; p++) {
      var _ = u[p],
          P = _.percentWidth;_.width = parseInt(P, 10) / 100 * l;
    }return n;
  }function rn(t, e, n) {
    for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
      var s = r[o],
          l = { styleName: n, text: s, isLineHolder: !s && !i };if (o) a.push({ tokens: [l] });else {
        var u = (a[a.length - 1] || (a[0] = { tokens: [] })).tokens,
            h = u.length;1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l);
      }
    }
  }function an(t) {
    var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");return e && O(e) || t.textFont || t.font;
  }function on(t, e) {
    var n,
        i,
        r,
        a,
        o = e.x,
        s = e.y,
        l = e.width,
        u = e.height,
        h = e.r;l < 0 && (o += l, l = -l), u < 0 && (s += u, u = -u), "number" == typeof h ? n = i = r = a = h : h instanceof Array ? 1 === h.length ? n = i = r = a = h[0] : 2 === h.length ? (n = r = h[0], i = a = h[1]) : 3 === h.length ? (n = h[0], i = a = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], a = h[3]) : n = i = r = a = 0;var c;n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + a > u && (c = n + a, n *= u / c, a *= u / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + u - r), 0 !== r && t.arc(o + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + u), 0 !== a && t.arc(o + a, s + u - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI);
  }function sn(t) {
    return ln(t), d(t.rich, ln), t;
  }function ln(t) {
    if (t) {
      t.font = an(t);var e = t.textAlign;"middle" === e && (e = "center"), t.textAlign = null == e || rg[e] ? e : "left";var n = t.textVerticalAlign || t.textBaseline;"center" === n && (n = "middle"), t.textVerticalAlign = null == n || ag[n] ? n : "top";t.textPadding && (t.textPadding = L(t.textPadding));
    }
  }function un(t, e, n, i, r, a) {
    i.rich ? cn(t, e, n, i, r, a) : hn(t, e, n, i, r, a);
  }function hn(t, e, n, i, r, a) {
    var o,
        s = gn(i),
        l = false,
        u = e.__attrCachedBy === Vp.PLAIN_TEXT;a !== Gp ? (a && (o = a.style, l = !s && u && o), e.__attrCachedBy = s ? Vp.NONE : Vp.PLAIN_TEXT) : u && (e.__attrCachedBy = Vp.NONE);var h = i.font || ig;l && h === (o.font || ig) || (e.font = h);var c = t.__computedFont;t.__styleFont !== h && (t.__styleFont = h, c = t.__computedFont = e.font);var d = i.textPadding,
        f = i.textLineHeight,
        p = t.__textCotentBlock;p && !t.__dirtyText || (p = t.__textCotentBlock = en(n, c, d, f, i.truncate));var g = p.outerHeight,
        m = p.lines,
        v = p.lineHeight,
        y = yn(lg, t, i, r),
        _ = y.baseX,
        x = y.baseY,
        w = y.textAlign || "left",
        b = y.textVerticalAlign;fn(e, i, r, _, x);var S = Ue(x, g, b),
        M = _,
        I = S;if (s || d) {
      var A = We(n, c),
          D = A;d && (D += d[1] + d[3]);var T = je(_, D, w);s && mn(t, e, i, T, S, D, g), d && (M = Sn(_, w, d), I += d[0]);
    }e.textAlign = w, e.textBaseline = "middle", e.globalAlpha = i.opacity || 1;for (var C = 0; C < og.length; C++) {
      var k = og[C],
          L = k[0],
          P = k[1],
          O = i[L];l && O === o[L] || (e[P] = Fp(e, P, O || k[2]));
    }I += v / 2;var N = i.textStrokeWidth,
        E = l ? o.textStrokeWidth : null,
        z = !l || N !== E,
        R = !l || z || i.textStroke !== o.textStroke,
        B = xn(i.textStroke, N),
        F = wn(i.textFill);if (B && (z && (e.lineWidth = N), R && (e.strokeStyle = B)), F && (l && i.textFill === o.textFill || (e.fillStyle = F)), 1 === m.length) B && e.strokeText(m[0], M, I), F && e.fillText(m[0], M, I);else for (var C = 0; C < m.length; C++) B && e.strokeText(m[C], M, I), F && e.fillText(m[C], M, I), I += v;
  }function cn(t, e, n, i, r, a) {
    a !== Gp && (e.__attrCachedBy = Vp.NONE);var o = t.__textCotentBlock;o && !t.__dirtyText || (o = t.__textCotentBlock = nn(n, i)), dn(t, e, o, i, r);
  }function dn(t, e, n, i, r) {
    var a = n.width,
        o = n.outerWidth,
        s = n.outerHeight,
        l = i.textPadding,
        u = yn(lg, t, i, r),
        h = u.baseX,
        c = u.baseY,
        d = u.textAlign,
        f = u.textVerticalAlign;fn(e, i, r, h, c);var p = je(h, o, d),
        g = Ue(c, s, f),
        m = p,
        v = g;l && (m += l[3], v += l[0]);var y = m + a;gn(i) && mn(t, e, i, p, g, o, s);for (var _ = 0; _ < n.lines.length; _++) {
      for (var x, w = n.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, A = 0, D = m, T = y, C = S - 1; A < S && (x = b[A], !x.textAlign || "left" === x.textAlign);) pn(t, e, x, i, M, v, D, "left"), I -= x.width, D += x.width, A++;for (; C >= 0 && (x = b[C], "right" === x.textAlign);) pn(t, e, x, i, M, v, T, "right"), I -= x.width, T -= x.width, C--;for (D += (a - (D - m) - (y - T) - I) / 2; A <= C;) x = b[A], pn(t, e, x, i, M, v, D + x.width / 2, "center"), D += x.width, A++;v += M;
    }
  }function fn(t, e, n, i, r) {
    if (n && e.textRotation) {
      var a = e.textOrigin;"center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r);
    }
  }function pn(t, e, n, i, r, a, o, s) {
    var l = i.rich[n.styleName] || {};l.text = n.text;var u = n.textVerticalAlign,
        h = a + r / 2;"top" === u ? h = a + n.height / 2 : "bottom" === u && (h = a + r - n.height / 2), !n.isLineHolder && gn(l) && mn(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, h - n.height / 2, n.width, n.height);var c = n.textPadding;c && (o = Sn(o, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2), _n(e, "shadowBlur", C(l.textShadowBlur, i.textShadowBlur, 0)), _n(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), _n(e, "shadowOffsetX", C(l.textShadowOffsetX, i.textShadowOffsetX, 0)), _n(e, "shadowOffsetY", C(l.textShadowOffsetY, i.textShadowOffsetY, 0)), _n(e, "textAlign", s), _n(e, "textBaseline", "middle"), _n(e, "font", n.font || ig);var d = xn(l.textStroke || i.textStroke, p),
        f = wn(l.textFill || i.textFill),
        p = T(l.textStrokeWidth, i.textStrokeWidth);d && (_n(e, "lineWidth", p), _n(e, "strokeStyle", d), e.strokeText(n.text, o, h)), f && (_n(e, "fillStyle", f), e.fillText(n.text, o, h));
  }function gn(t) {
    return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor);
  }function mn(t, e, n, i, r, a, o) {
    var s = n.textBackgroundColor,
        l = n.textBorderWidth,
        u = n.textBorderColor,
        h = w(s);if (_n(e, "shadowBlur", n.textBoxShadowBlur || 0), _n(e, "shadowColor", n.textBoxShadowColor || "transparent"), _n(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), _n(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {
      e.beginPath();var c = n.textBorderRadius;c ? on(e, { x: i, y: r, width: a, height: o, r: c }) : e.rect(i, r, a, o), e.closePath();
    }if (h) {
      if (_n(e, "fillStyle", s), null != n.fillOpacity) {
        var d = e.globalAlpha;e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = d;
      } else e.fill();
    } else if (b(s)) {
      var f = s.image;f = Fe(f, null, t, vn, s), f && Ge(f) && e.drawImage(f, i, r, a, o);
    }if (l && u) if (_n(e, "lineWidth", l), _n(e, "strokeStyle", u), null != n.strokeOpacity) {
      var d = e.globalAlpha;e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = d;
    } else e.stroke();
  }function vn(t, e) {
    e.image = t;
  }function yn(t, e, n, i) {
    var r = n.x || 0,
        a = n.y || 0,
        o = n.textAlign,
        s = n.textVerticalAlign;if (i) {
      var l = n.textPosition;if (l instanceof Array) r = i.x + bn(l[0], i.width), a = i.y + bn(l[1], i.height);else {
        var u = e && e.calculateTextPosition ? e.calculateTextPosition(sg, n, i) : Ye(sg, n, i);r = u.x, a = u.y, o = o || u.textAlign, s = s || u.textVerticalAlign;
      }var h = n.textOffset;h && (r += h[0], a += h[1]);
    }return t = t || {}, t.baseX = r, t.baseY = a, t.textAlign = o, t.textVerticalAlign = s, t;
  }function _n(t, e, n) {
    return t[e] = Fp(t, e, n), t[e];
  }function xn(t, e) {
    return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }function wn(t) {
    return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }function bn(t, e) {
    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
  }function Sn(t, e, n) {
    return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
  }function Mn(t, e) {
    return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
  }function In(t) {
    t = t || {}, kp.call(this, t);for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);this.style = new Hp(t.style, this), this._rect = null, this.__clipPaths = null;
  }function An(t) {
    In.call(this, t);
  }function Dn(t) {
    return parseInt(t, 10);
  }function Tn(t) {
    return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh);
  }function Cn(t, e, n) {
    return cg.copy(t.getBoundingRect()), t.transform && cg.applyTransform(t.transform), dg.width = e, dg.height = n, !cg.intersect(dg);
  }function kn(t, e) {
    if (t === e) return false;if (!t || !e || t.length !== e.length) return true;for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return true;return false;
  }function Ln(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e);
    }
  }function Pn(t, e) {
    var n = document.createElement("div");return n.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n;
  }function On(t) {
    return "mousewheel" === t && bf.browser.firefox ? "DOMMouseScroll" : t;
  }function Nn(t) {
    var e = t.pointerType;return "pen" === e || "touch" === e;
  }function En(t) {
    t.touching = true, null != t.touchTimer && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function () {
      t.touching = false, t.touchTimer = null;
    }, 700);
  }function zn(t) {
    t && (t.zrByTouch = true);
  }function Rn(t, e) {
    return xt(t.dom, new Fn(t, e), true);
  }function Bn(t, e) {
    for (var n = e, i = false; n && 9 !== n.nodeType && !(i = n.domBelongToZr || n !== e && n === t.painterRoot);) n = n.parentNode;return i;
  }function Fn(t, e) {
    this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }function Vn(t, e) {
    var n = e.domHandlers;bf.pointerEventsSupported ? d(mg.pointer, function (i) {
      Wn(e, i, function (e) {
        n[i].call(t, e);
      });
    }) : (bf.touchEventsSupported && d(mg.touch, function (i) {
      Wn(e, i, function (r) {
        n[i].call(t, r), En(e);
      });
    }), d(mg.mouse, function (i) {
      Wn(e, i, function (r) {
        r = _t(r), e.touching || n[i].call(t, r);
      });
    }));
  }function Gn(t, e) {
    function n(n) {
      function i(i) {
        i = _t(i), Bn(t, i.target) || (i = Rn(t, i), e.domHandlers[n].call(t, i));
      }Wn(e, n, i, { capture: true });
    }bf.pointerEventsSupported ? d(vg.pointer, n) : bf.touchEventsSupported || d(vg.mouse, n);
  }function Wn(t, e, n, i) {
    t.mounted[e] = n, t.listenerOpts[e] = i, wt(t.domTarget, On(e), n, i);
  }function Hn(t) {
    var e = t.mounted;for (var n in e) e.hasOwnProperty(n) && bt(t.domTarget, On(n), e[n], t.listenerOpts[n]);t.mounted = {};
  }function Zn(t, e) {
    if (t._mayPointerCapture = null, gg && t._pointerCapturing ^ e) {
      t._pointerCapturing = e;var n = t._globalHandlerScope;e ? Gn(t, n) : Hn(n);
    }
  }function Xn(t, e) {
    this.domTarget = t, this.domHandlers = e, this.mounted = {}, this.listenerOpts = {}, this.touchTimer = null, this.touching = false;
  }function jn(t, e) {
    Zf.call(this), this.dom = t, this.painterRoot = e, this._localHandlerScope = new Xn(t, _g), gg && (this._globalHandlerScope = new Xn(document, xg)), this._pointerCapturing = false, this._mayPointerCapture = null, Vn(this, this._localHandlerScope);
  }function Un(t, e) {
    var n = new Ig(xf(), t, e);return Mg[n.id] = n, n;
  }function Yn(t) {
    if (t) t.dispose();else {
      for (var e in Mg) Mg.hasOwnProperty(e) && Mg[e].dispose();Mg = {};
    }return this;
  }function qn(t) {
    return Mg[t];
  }function $n(t, e) {
    Sg[t] = e;
  }function Kn(t) {
    delete Mg[t];
  }function Qn(t) {
    return t instanceof Array ? t : null == t ? [] : [t];
  }function Jn(t, e, n) {
    if (t) {
      t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};for (var i = 0, r = n.length; i < r; i++) {
        var a = n[i];!t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
      }
    }
  }function ti(t) {
    return !Tg(t) || Cg(t) || t instanceof Date ? t : t.value;
  }function ei(t) {
    return Tg(t) && !(t instanceof Array);
  }function ni(t, e) {
    e = (e || []).slice();var n = f(t || [], function (t, e) {
      return { exist: t };
    });return Dg(e, function (t, i) {
      if (Tg(t)) {
        for (var r = 0; r < n.length; r++) if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, undefined;for (var r = 0; r < n.length; r++) {
          var a = n[r].exist;if (!(n[r].option || null != a.id && null != t.id || null == t.name || ai(t) || ai(a) || a.name !== t.name + "")) return n[r].option = t, undefined;
        }
      }
    }), Dg(e, function (t, e) {
      if (Tg(t)) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i].exist;if (!n[i].option && !ai(r) && null == t.id) {
            n[i].option = t;break;
          }
        }i >= n.length && n.push({ option: t });
      }
    }), n;
  }function ii(t) {
    var e = R();Dg(t, function (t, n) {
      var i = t.exist;i && e.set(i.id, t);
    }), Dg(t, function (t, n) {
      var i = t.option;P(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {});
    }), Dg(t, function (t, n) {
      var i = t.exist,
          r = t.option,
          a = t.keyInfo;if (Tg(r)) {
        if (a.name = null != r.name ? r.name + "" : i ? i.name : kg + n, i) a.id = i.id;else if (null != r.id) a.id = r.id + "";else {
          var o = 0;do {
            a.id = "\0" + a.name + "\0" + o++;
          } while (e.get(a.id));
        }e.set(a.id, t);
      }
    });
  }function ri(t) {
    var e = t.name;return !(!e || !e.indexOf(kg));
  }function ai(t) {
    return Tg(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0");
  }function oi(t, e) {
    return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _(e.dataIndex) ? f(e.dataIndex, function (e) {
      return t.indexOfRawIndex(e);
    }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _(e.name) ? f(e.name, function (e) {
      return t.indexOfName(e);
    }) : t.indexOfName(e.name) : undefined;
  }function si() {
    var t = "__\0ec_inner_" + Pg++ + "_" + Math.random().toFixed(5);return function (e) {
      return e[t] || (e[t] = {});
    };
  }function li(t, e, n) {
    if (w(e)) {
      var i = {};i[e + "Index"] = 0, e = i;
    }var r = n && n.defaultMainType;!r || ui(e, r + "Index") || ui(e, r + "Id") || ui(e, r + "Name") || (e[r + "Index"] = 0);var a = {};return Dg(e, function (i, r) {
      var i = e[r];if ("dataIndex" === r || "dataIndexInside" === r) return undefined;var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
          s = o[1],
          u = (o[2] || "").toLowerCase();if (!(!s || !u || null == i || "index" === u && "none" === i || n && n.includeMainTypes && l(n.includeMainTypes, s) < 0)) {
        var h = { mainType: s };"index" === u && "all" === i || (h[u] = i);var c = t.queryComponents(h);a[s + "Models"] = c, a[s + "Model"] = c[0];
      }
    }), a;
  }function ui(t, e) {
    return t && t.hasOwnProperty(e);
  }function hi(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : t[e] = n;
  }function ci(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e];
  }function di(t) {
    return "auto" === t ? bf.domSupported ? "html" : "richText" : t || "html";
  }function fi(t) {
    var e = { main: "", sub: "" };return t && (t = t.split(Og), e.main = t[0] || "", e.sub = t[1] || ""), e;
  }function pi(t) {
    P(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
  }function gi(t, e) {
    t.$constructor = t, t.extend = function (t) {
      var e = this,
          n = function () {
        t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
      };return a(n.prototype, t), n.extend = this.extend, n.superCall = vi, n.superApply = yi, u(n, this), n.superClass = e, n;
    };
  }function mi(t) {
    var e = ["__\0is_clz", Eg++, Math.random().toFixed(3)].join("_");t.prototype[e] = true, t.isInstance = function (t) {
      return !(!t || !t[e]);
    };
  }function vi(t, e) {
    var n = k(arguments, 2);return this.superClass.prototype[e].apply(t, n);
  }function yi(t, e, n) {
    return this.superClass.prototype[e].apply(t, n);
  }function _i(t, e) {
    function n(t) {
      var e = i[t.main];return e && e[Ng] || (e = i[t.main] = {}, e[Ng] = true), e;
    }e = e || {};var i = {};if (t.registerClass = function (t, e) {
      if (e) if (pi(e), e = fi(e), e.sub) {
        if (e.sub !== Ng) {
          var r = n(e);r[e.sub] = t;
        }
      } else i[e.main] = t;return t;
    }, t.getClass = function (t, e, n) {
      var r = i[t];if (r && r[Ng] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");return r;
    }, t.getClassesByMainType = function (t) {
      t = fi(t);var e = [],
          n = i[t.main];return n && n[Ng] ? d(n, function (t, n) {
        n !== Ng && e.push(t);
      }) : e.push(n), e;
    }, t.hasClass = function (t) {
      return t = fi(t), !!i[t.main];
    }, t.getAllClassMainTypes = function () {
      var t = [];return d(i, function (e, n) {
        t.push(n);
      }), t;
    }, t.hasSubTypes = function (t) {
      t = fi(t);var e = i[t.main];return e && e[Ng];
    }, t.parseClassType = fi, e.registerWhenExtend) {
      var r = t.extend;r && (t.extend = function (e) {
        var n = r.call(this, e);return t.registerClass(n, e.type);
      });
    }return t;
  }function xi(t) {
    return t > -Hg && t < Hg;
  }function wi(t) {
    return t > Hg || t < -Hg;
  }function bi(t, e, n, i, r) {
    var a = 1 - r;return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n);
  }function Si(t, e, n, i, r) {
    var a = 1 - r;return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r);
  }function Mi(t, e, n, i, r, a) {
    var o = i + 3 * (e - n) - t,
        s = 3 * (n - 2 * e + t),
        l = 3 * (e - t),
        u = t - r,
        h = s * s - 3 * o * l,
        c = s * l - 9 * o * u,
        d = l * l - 3 * s * u,
        f = 0;if (xi(h) && xi(c)) {
      if (xi(s)) a[0] = 0;else {
        var p = -l / s;p >= 0 && p <= 1 && (a[f++] = p);
      }
    } else {
      var g = c * c - 4 * h * d;if (xi(g)) {
        var m = c / h,
            p = -s / o + m,
            v = -m / 2;p >= 0 && p <= 1 && (a[f++] = p), v >= 0 && v <= 1 && (a[f++] = v);
      } else if (g > 0) {
        var y = Wg(g),
            _ = h * s + 1.5 * o * (-c + y),
            x = h * s + 1.5 * o * (-c - y);_ = _ < 0 ? -Gg(-_, jg) : Gg(_, jg), x = x < 0 ? -Gg(-x, jg) : Gg(x, jg);var p = (-s - (_ + x)) / (3 * o);p >= 0 && p <= 1 && (a[f++] = p);
      } else {
        var w = (2 * h * s - 3 * o * c) / (2 * Wg(h * h * h)),
            b = Math.acos(w) / 3,
            S = Wg(h),
            M = Math.cos(b),
            p = (-s - 2 * S * M) / (3 * o),
            v = (-s + S * (M + Xg * Math.sin(b))) / (3 * o),
            I = (-s + S * (M - Xg * Math.sin(b))) / (3 * o);p >= 0 && p <= 1 && (a[f++] = p), v >= 0 && v <= 1 && (a[f++] = v), I >= 0 && I <= 1 && (a[f++] = I);
      }
    }return f;
  }function Ii(t, e, n, i, r) {
    var a = 6 * n - 12 * e + 6 * t,
        o = 9 * e + 3 * i - 3 * t - 9 * n,
        s = 3 * e - 3 * t,
        l = 0;if (xi(o)) {
      if (wi(a)) {
        var u = -s / a;u >= 0 && u <= 1 && (r[l++] = u);
      }
    } else {
      var h = a * a - 4 * o * s;if (xi(h)) r[0] = -a / (2 * o);else if (h > 0) {
        var c = Wg(h),
            u = (-a + c) / (2 * o),
            d = (-a - c) / (2 * o);u >= 0 && u <= 1 && (r[l++] = u), d >= 0 && d <= 1 && (r[l++] = d);
      }
    }return l;
  }function Ai(t, e, n, i, r, a) {
    var o = (e - t) * r + t,
        s = (n - e) * r + e,
        l = (i - n) * r + n,
        u = (s - o) * r + o,
        h = (l - s) * r + s,
        c = (h - u) * r + u;a[0] = t, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = h, a[6] = l, a[7] = i;
  }function Di(t, e, n, i, r, a, o, s, l, u, h) {
    var c,
        d,
        f,
        p,
        g,
        m = .005,
        v = Infinity;Ug[0] = l, Ug[1] = u;for (var y = 0; y < 1; y += .05) Yg[0] = bi(t, n, r, o, y), Yg[1] = bi(e, i, a, s, y), (p = Gf(Ug, Yg)) < v && (c = y, v = p);v = Infinity;for (var _ = 0; _ < 32 && !(m < Zg); _++) d = c - m, f = c + m, Yg[0] = bi(t, n, r, o, d), Yg[1] = bi(e, i, a, s, d), p = Gf(Yg, Ug), d >= 0 && p < v ? (c = d, v = p) : (qg[0] = bi(t, n, r, o, f), qg[1] = bi(e, i, a, s, f), g = Gf(qg, Ug), f <= 1 && g < v ? (c = f, v = g) : m *= .5);return h && (h[0] = bi(t, n, r, o, c), h[1] = bi(e, i, a, s, c)), Wg(v);
  }function Ti(t, e, n, i) {
    var r = 1 - i;return r * (r * t + 2 * i * e) + i * i * n;
  }function Ci(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e));
  }function ki(t, e, n, i, r) {
    var a = t - 2 * e + n,
        o = 2 * (e - t),
        s = t - i,
        l = 0;if (xi(a)) {
      if (wi(o)) {
        var u = -s / o;u >= 0 && u <= 1 && (r[l++] = u);
      }
    } else {
      var h = o * o - 4 * a * s;if (xi(h)) {
        var u = -o / (2 * a);u >= 0 && u <= 1 && (r[l++] = u);
      } else if (h > 0) {
        var c = Wg(h),
            u = (-o + c) / (2 * a),
            d = (-o - c) / (2 * a);u >= 0 && u <= 1 && (r[l++] = u), d >= 0 && d <= 1 && (r[l++] = d);
      }
    }return l;
  }function Li(t, e, n) {
    var i = t + n - 2 * e;return 0 === i ? .5 : (t - e) / i;
  }function Pi(t, e, n, i, r) {
    var a = (e - t) * i + t,
        o = (n - e) * i + e,
        s = (o - a) * i + a;r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n;
  }function Oi(t, e, n, i, r, a, o, s, l) {
    var u,
        h = .005,
        c = Infinity;Ug[0] = o, Ug[1] = s;for (var d = 0; d < 1; d += .05) {
      Yg[0] = Ti(t, n, r, d), Yg[1] = Ti(e, i, a, d);var f = Gf(Ug, Yg);f < c && (u = d, c = f);
    }c = Infinity;for (var p = 0; p < 32 && !(h < Zg); p++) {
      var g = u - h,
          m = u + h;Yg[0] = Ti(t, n, r, g), Yg[1] = Ti(e, i, a, g);var f = Gf(Yg, Ug);if (g >= 0 && f < c) u = g, c = f;else {
        qg[0] = Ti(t, n, r, m), qg[1] = Ti(e, i, a, m);var v = Gf(qg, Ug);m <= 1 && v < c ? (u = m, c = v) : h *= .5;
      }
    }return l && (l[0] = Ti(t, n, r, u), l[1] = Ti(e, i, a, u)), Wg(c);
  }function Ni(t, e, n) {
    if (0 !== t.length) {
      var i,
          r = t[0],
          a = r[0],
          o = r[0],
          s = r[1],
          l = r[1];for (i = 1; i < t.length; i++) r = t[i], a = $g(a, r[0]), o = Kg(o, r[0]), s = $g(s, r[1]), l = Kg(l, r[1]);e[0] = a, e[1] = s, n[0] = o, n[1] = l;
    }
  }function Ei(t, e, n, i, r, a) {
    r[0] = $g(t, n), r[1] = $g(e, i), a[0] = Kg(t, n), a[1] = Kg(e, i);
  }function zi(t, e, n, i, r, a, o, s, l, u) {
    var h,
        c = Ii,
        d = bi,
        f = c(t, n, r, o, rm);for (l[0] = Infinity, l[1] = Infinity, u[0] = -Infinity, u[1] = -Infinity, h = 0; h < f; h++) {
      var p = d(t, n, r, o, rm[h]);l[0] = $g(p, l[0]), u[0] = Kg(p, u[0]);
    }for (f = c(e, i, a, s, am), h = 0; h < f; h++) {
      var g = d(e, i, a, s, am[h]);l[1] = $g(g, l[1]), u[1] = Kg(g, u[1]);
    }l[0] = $g(t, l[0]), u[0] = Kg(t, u[0]), l[0] = $g(o, l[0]), u[0] = Kg(o, u[0]), l[1] = $g(e, l[1]), u[1] = Kg(e, u[1]), l[1] = $g(s, l[1]), u[1] = Kg(s, u[1]);
  }function Ri(t, e, n, i, r, a, o, s) {
    var l = Li,
        u = Ti,
        h = Kg($g(l(t, n, r), 1), 0),
        c = Kg($g(l(e, i, a), 1), 0),
        d = u(t, n, r, h),
        f = u(e, i, a, c);o[0] = $g(t, r, d), o[1] = $g(e, a, f), s[0] = Kg(t, r, d), s[1] = Kg(e, a, f);
  }function Bi(t, e, n, i, r, a, o, s, l) {
    var u = at,
        h = ot,
        c = Math.abs(r - a);if (c % tm < 1e-4 && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, undefined;if (em[0] = Jg(r) * n + t, em[1] = Qg(r) * i + e, nm[0] = Jg(a) * n + t, nm[1] = Qg(a) * i + e, u(s, em, nm), h(l, em, nm), r %= tm, r < 0 && (r += tm), a %= tm, a < 0 && (a += tm), r > a && !o ? a += tm : r < a && o && (r += tm), o) {
      var d = a;a = r, r = d;
    }for (var f = 0; f < a; f += Math.PI / 2) f > r && (im[0] = Jg(f) * n + t, im[1] = Qg(f) * i + e, u(s, im, s), h(l, im, l));
  }function Fi(t, e, n, i, r, a, o) {
    if (0 === r) return false;var s = r,
        l = 0,
        u = t;if (o > e + s && o > i + s || o < e - s && o < i - s || a > t + s && a > n + s || a < t - s && a < n - s) return false;if (t === n) return Math.abs(a - t) <= s / 2;l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);var h = l * a - o + u;return h * h / (l * l + 1) <= s / 2 * s / 2;
  }function Vi(t, e, n, i, r, a, o, s, l, u, h) {
    if (0 === l) return false;var c = l;return !(h > e + c && h > i + c && h > a + c && h > s + c || h < e - c && h < i - c && h < a - c && h < s - c || u > t + c && u > n + c && u > r + c && u > o + c || u < t - c && u < n - c && u < r - c && u < o - c) && Di(t, e, n, i, r, a, o, s, u, h, null) <= c / 2;
  }function Gi(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return false;var u = o;return !(l > e + u && l > i + u && l > a + u || l < e - u && l < i - u && l < a - u || s > t + u && s > n + u && s > r + u || s < t - u && s < n - u && s < r - u) && Oi(t, e, n, i, r, a, s, l, null) <= u / 2;
  }function Wi(t) {
    return t %= _m, t < 0 && (t += _m), t;
  }function Hi(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return false;var u = o;s -= t, l -= e;var h = Math.sqrt(s * s + l * l);if (h - u > n || h + u < n) return false;if (Math.abs(i - r) % xm < 1e-4) return true;if (a) {
      var c = i;i = Wi(r), r = Wi(c);
    } else i = Wi(i), r = Wi(r);i > r && (r += xm);var d = Math.atan2(l, s);return d < 0 && (d += xm), d >= i && d <= r || d + xm >= i && d + xm <= r;
  }function Zi(t, e, n, i, r, a) {
    if (a > e && a > i || a < e && a < i) return 0;if (i === e) return 0;var o = i < e ? 1 : -1,
        s = (a - e) / (i - e);1 !== s && 0 !== s || (o = i < e ? .5 : -0.5);var l = s * (n - t) + t;return l === r ? Infinity : l > r ? o : 0;
  }function Xi(t, e) {
    return Math.abs(t - e) < Sm;
  }function ji() {
    var t = Im[0];Im[0] = Im[1], Im[1] = t;
  }function Ui(t, e, n, i, r, a, o, s, l, u) {
    if (u > e && u > i && u > a && u > s || u < e && u < i && u < a && u < s) return 0;var h = Mi(e, i, a, s, u, Mm);if (0 === h) return 0;for (var c, d, f = 0, p = -1, g = 0; g < h; g++) {
      var m = Mm[g],
          v = 0 === m || 1 === m ? .5 : 1;bi(t, n, r, o, m) < l || (p < 0 && (p = Ii(e, i, a, s, Im), Im[1] < Im[0] && p > 1 && ji(), c = bi(e, i, a, s, Im[0]), p > 1 && (d = bi(e, i, a, s, Im[1]))), 2 === p ? m < Im[0] ? f += c < e ? v : -v : m < Im[1] ? f += d < c ? v : -v : f += s < d ? v : -v : m < Im[0] ? f += c < e ? v : -v : f += s < c ? v : -v);
    }return f;
  }function Yi(t, e, n, i, r, a, o, s) {
    if (s > e && s > i && s > a || s < e && s < i && s < a) return 0;var l = ki(e, i, a, s, Mm);if (0 === l) return 0;var u = Li(e, i, a);if (u >= 0 && u <= 1) {
      for (var h = 0, c = Ti(e, i, a, u), d = 0; d < l; d++) {
        var f = 0 === Mm[d] || 1 === Mm[d] ? .5 : 1,
            p = Ti(t, n, r, Mm[d]);p < o || (Mm[d] < u ? h += c < e ? f : -f : h += a < c ? f : -f);
      }return h;
    }var f = 0 === Mm[0] || 1 === Mm[0] ? .5 : 1,
        p = Ti(t, n, r, Mm[0]);return p < o ? 0 : a < e ? f : -f;
  }function qi(t, e, n, i, r, a, o, s) {
    if ((s -= e) > n || s < -n) return 0;var l = Math.sqrt(n * n - s * s);Mm[0] = -l, Mm[1] = l;var u = Math.abs(i - r);if (u < 1e-4) return 0;if (u % bm < 1e-4) {
      i = 0, r = bm;var h = a ? 1 : -1;return o >= Mm[0] + t && o <= Mm[1] + t ? h : 0;
    }if (a) {
      var l = i;i = Wi(r), r = Wi(l);
    } else i = Wi(i), r = Wi(r);i > r && (r += bm);for (var c = 0, d = 0; d < 2; d++) {
      var f = Mm[d];if (f + t > o) {
        var p = Math.atan2(s, f),
            h = a ? 1 : -1;p < 0 && (p = bm + p), (p >= i && p <= r || p + bm >= i && p + bm <= r) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h);
      }
    }return c;
  }function $i(t, e, n, i, r) {
    for (var a = 0, o = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {
      var c = t[h++];switch (c === wm.M && h > 1 && (n || (a += Zi(o, s, l, u, i, r))), 1 === h && (o = t[h], s = t[h + 1], l = o, u = s), c) {case wm.M:
          l = t[h++], u = t[h++], o = l, s = u;break;case wm.L:
          if (n) {
            if (Fi(o, s, t[h], t[h + 1], e, i, r)) return true;
          } else a += Zi(o, s, t[h], t[h + 1], i, r) || 0;o = t[h++], s = t[h++];break;case wm.C:
          if (n) {
            if (Vi(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, r)) return true;
          } else a += Ui(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, r) || 0;o = t[h++], s = t[h++];break;case wm.Q:
          if (n) {
            if (Gi(o, s, t[h++], t[h++], t[h], t[h + 1], e, i, r)) return true;
          } else a += Yi(o, s, t[h++], t[h++], t[h], t[h + 1], i, r) || 0;o = t[h++], s = t[h++];break;case wm.A:
          var d = t[h++],
              f = t[h++],
              p = t[h++],
              g = t[h++],
              m = t[h++],
              v = t[h++];h += 1;var y = 1 - t[h++],
              _ = Math.cos(m) * p + d,
              x = Math.sin(m) * g + f;h > 1 ? a += Zi(o, s, _, x, i, r) : (l = _, u = x);var w = (i - d) * g / p + d;if (n) {
            if (Hi(d, f, g, m, m + v, y, e, w, r)) return true;
          } else a += qi(d, f, g, m, m + v, y, w, r);o = Math.cos(m + v) * p + d, s = Math.sin(m + v) * g + f;break;case wm.R:
          l = o = t[h++], u = s = t[h++];var b = t[h++],
              S = t[h++],
              _ = l + b,
              x = u + S;if (n) {
            if (Fi(l, u, _, u, e, i, r) || Fi(_, u, _, x, e, i, r) || Fi(_, x, l, x, e, i, r) || Fi(l, x, l, u, e, i, r)) return true;
          } else a += Zi(_, u, _, x, i, r), a += Zi(l, x, l, u, i, r);break;case wm.Z:
          if (n) {
            if (Fi(o, s, l, u, e, i, r)) return true;
          } else a += Zi(o, s, l, u, i, r);o = l, s = u;}
    }return n || Xi(s, u) || (a += Zi(o, s, l, u, i, r) || 0), 0 !== a;
  }function Ki(t, e, n) {
    return $i(t, 0, false, e, n);
  }function Qi(t, e, n, i) {
    return $i(t, e, true, n, i);
  }function Ji(t) {
    In.call(this, t), this.path = null;
  }function tr(t, e, n, i, r, a, o, s, l, u, h) {
    var c = l * (Rm / 180),
        d = zm(c) * (t - n) / 2 + Em(c) * (e - i) / 2,
        f = -1 * Em(c) * (t - n) / 2 + zm(c) * (e - i) / 2,
        p = d * d / (o * o) + f * f / (s * s);p > 1 && (o *= Nm(p), s *= Nm(p));var g = (r === a ? -1 : 1) * Nm((o * o * (s * s) - o * o * (f * f) - s * s * (d * d)) / (o * o * (f * f) + s * s * (d * d))) || 0,
        m = g * o * f / s,
        v = g * -s * d / o,
        y = (t + n) / 2 + zm(c) * m - Em(c) * v,
        _ = (e + i) / 2 + Em(c) * m + zm(c) * v,
        x = Vm([1, 0], [(d - m) / o, (f - v) / s]),
        w = [(d - m) / o, (f - v) / s],
        b = [(-1 * d - m) / o, (-1 * f - v) / s],
        S = Vm(w, b);Fm(w, b) <= -1 && (S = Rm), Fm(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * Rm), 1 === a && S < 0 && (S += 2 * Rm), h.addData(u, y, _, o, s, x, S, c, a);
  }function er(t) {
    if (!t) return new ym();for (var e, n = 0, i = 0, r = n, a = i, o = new ym(), s = ym.CMD, l = t.match(Gm), u = 0; u < l.length; u++) {
      for (var h, c = l[u], d = c.charAt(0), f = c.match(Wm) || [], p = f.length, g = 0; g < p; g++) f[g] = parseFloat(f[g]);for (var m = 0; m < p;) {
        var v,
            y,
            _,
            x,
            w,
            b,
            S,
            M = n,
            I = i;switch (d) {case "l":
            n += f[m++], i += f[m++], h = s.L, o.addData(h, n, i);break;case "L":
            n = f[m++], i = f[m++], h = s.L, o.addData(h, n, i);break;case "m":
            n += f[m++], i += f[m++], h = s.M, o.addData(h, n, i), r = n, a = i, d = "l";break;case "M":
            n = f[m++], i = f[m++], h = s.M, o.addData(h, n, i), r = n, a = i, d = "L";break;case "h":
            n += f[m++], h = s.L, o.addData(h, n, i);break;case "H":
            n = f[m++], h = s.L, o.addData(h, n, i);break;case "v":
            i += f[m++], h = s.L, o.addData(h, n, i);break;case "V":
            i = f[m++], h = s.L, o.addData(h, n, i);break;case "C":
            h = s.C, o.addData(h, f[m++], f[m++], f[m++], f[m++], f[m++], f[m++]), n = f[m - 2], i = f[m - 1];break;case "c":
            h = s.C, o.addData(h, f[m++] + n, f[m++] + i, f[m++] + n, f[m++] + i, f[m++] + n, f[m++] + i), n += f[m - 2], i += f[m - 1];break;case "S":
            v = n, y = i;var A = o.len(),
                D = o.data;e === s.C && (v += n - D[A - 4], y += i - D[A - 3]), h = s.C, M = f[m++], I = f[m++], n = f[m++], i = f[m++], o.addData(h, v, y, M, I, n, i);break;case "s":
            v = n, y = i;var A = o.len(),
                D = o.data;e === s.C && (v += n - D[A - 4], y += i - D[A - 3]), h = s.C, M = n + f[m++], I = i + f[m++], n += f[m++], i += f[m++], o.addData(h, v, y, M, I, n, i);break;case "Q":
            M = f[m++], I = f[m++], n = f[m++], i = f[m++], h = s.Q, o.addData(h, M, I, n, i);break;case "q":
            M = f[m++] + n, I = f[m++] + i, n += f[m++], i += f[m++], h = s.Q, o.addData(h, M, I, n, i);break;case "T":
            v = n, y = i;var A = o.len(),
                D = o.data;e === s.Q && (v += n - D[A - 4], y += i - D[A - 3]), n = f[m++], i = f[m++], h = s.Q, o.addData(h, v, y, n, i);break;case "t":
            v = n, y = i;var A = o.len(),
                D = o.data;e === s.Q && (v += n - D[A - 4], y += i - D[A - 3]), n += f[m++], i += f[m++], h = s.Q, o.addData(h, v, y, n, i);break;case "A":
            _ = f[m++], x = f[m++], w = f[m++], b = f[m++], S = f[m++], M = n, I = i, n = f[m++], i = f[m++], h = s.A, tr(M, I, n, i, b, S, _, x, w, h, o);break;case "a":
            _ = f[m++], x = f[m++], w = f[m++], b = f[m++], S = f[m++], M = n, I = i, n += f[m++], i += f[m++], h = s.A, tr(M, I, n, i, b, S, _, x, w, h, o);}
      }"z" !== d && "Z" !== d || (h = s.Z, o.addData(h), n = r, i = a), e = h;
    }return o.toStatic(), o;
  }function nr(t, e) {
    var n = er(t);return e = e || {}, e.buildPath = function (t) {
      if (t.setData) {
        t.setData(n.data);var e = t.getContext();e && t.rebuildPath(e);
      } else {
        var e = t;n.rebuildPath(e);
      }
    }, e.applyTransform = function (t) {
      Om(n, t), this.dirty(true);
    }, e;
  }function ir(t, e) {
    return new Ji(nr(t, e));
  }function rr(t, e) {
    return Ji.extend(nr(t, e));
  }function ar(t, e) {
    for (var n = [], i = t.length, r = 0; r < i; r++) {
      var a = t[r];a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, true), n.push(a.path);
    }var o = new Ji(e);return o.createPathProxy(), o.buildPath = function (t) {
      t.appendPath(n);var e = t.getContext();e && t.rebuildPath(e);
    }, o;
  }function or(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
        l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
  }function sr(t, e, n) {
    var i = e.points,
        r = e.smooth;if (i && i.length >= 2) {
      if (r && "spline" !== r) {
        var a = $m(i, r, n, e.smoothConstraint);t.moveTo(i[0][0], i[0][1]);for (var o = i.length, s = 0; s < (n ? o : o - 1); s++) {
          var l = a[2 * s],
              u = a[2 * s + 1],
              h = i[(s + 1) % o];t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1]);
        }
      } else {
        "spline" === r && (i = qm(i, n)), t.moveTo(i[0][0], i[0][1]);for (var s = 1, c = i.length; s < c; s++) t.lineTo(i[s][0], i[s][1]);
      }n && t.closePath();
    }
  }function lr(t, e, n) {
    if (e) {
      var i = e.x1,
          r = e.x2,
          a = e.y1,
          o = e.y2;t.x1 = i, t.x2 = r, t.y1 = a, t.y2 = o;var s = n && n.lineWidth;s && (Jm(2 * i) === Jm(2 * r) && (t.x1 = t.x2 = hr(i, s, true)), Jm(2 * a) === Jm(2 * o) && (t.y1 = t.y2 = hr(a, s, true)));
    }
  }function ur(t, e, n) {
    if (e) {
      var i = e.x,
          r = e.y,
          a = e.width,
          o = e.height;t.x = i, t.y = r, t.width = a, t.height = o;var s = n && n.lineWidth;s && (t.x = hr(i, s, true), t.y = hr(r, s, true), t.width = Math.max(hr(i + a, s, false) - t.x, 0 === a ? 0 : 1), t.height = Math.max(hr(r + o, s, false) - t.y, 0 === o ? 0 : 1));
    }
  }function hr(t, e, n) {
    if (!e) return t;var i = Jm(2 * t);return (i + Jm(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;
  }function cr(t, e, n) {
    var i = t.cpx2,
        r = t.cpy2;return null === i || null === r ? [(n ? Si : bi)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Si : bi)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? Ci : Ti)(t.x1, t.cpx1, t.x2, e), (n ? Ci : Ti)(t.y1, t.cpy1, t.y2, e)];
  }function dr(t) {
    In.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = true;
  }function fr(t) {
    return Ji.extend(t);
  }function pr(t, e) {
    return rr(t, e);
  }function gr(t, e) {
    wv[t] = e;
  }function mr(t) {
    if (wv.hasOwnProperty(t)) return wv[t];
  }function vr(t, e, n, i) {
    var r = ir(t, e);return n && ("center" === i && (n = _r(n, r.getBoundingRect())), xr(r, n)), r;
  }function yr(t, e, n) {
    var i = new An({ style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height }, onload: function (t) {
        if ("center" === n) {
          var r = { width: t.width, height: t.height };i.setStyle(_r(e, r));
        }
      } });return i;
  }function _r(t, e) {
    var n,
        i = e.width / e.height,
        r = t.height * i;return r <= t.width ? n = t.height : (r = t.width, n = r / i), { x: t.x + t.width / 2 - r / 2, y: t.y + t.height / 2 - n / 2, width: r, height: n };
  }function xr(t, e) {
    if (t.applyTransform) {
      var n = t.getBoundingRect(),
          i = n.calculateTransform(e);t.applyTransform(i);
    }
  }function wr(t) {
    return lr(t.shape, t.shape, t.style), t;
  }function br(t) {
    return ur(t.shape, t.shape, t.style), t;
  }function Sr(t) {
    return null != t && "none" !== t;
  }function Mr(t) {
    if ("string" != typeof t) return t;var e = Mv.get(t);return e || (e = ee(t, -0.1), Iv < 1e4 && (Mv.set(t, e), Iv++)), e;
  }function Ir(t) {
    if (t.__hoverStlDirty) {
      t.__hoverStlDirty = false;var e = t.__hoverStl;if (!e) return undefined;var n = t.__cachedNormalStl = {};t.__cachedNormalZ2 = t.z2;var i = t.style;for (var r in e) null != e[r] && (n[r] = i[r]);n.fill = i.fill, n.stroke = i.stroke;
    }
  }function Ar(t) {
    var e = t.__hoverStl;if (e && !t.__highlighted) {
      var n = t.__zr,
          i = t.useHoverLayer && n && "canvas" === n.painter.type;if (t.__highlighted = i ? "layer" : "plain", !(t.isGroup || !n && t.useHoverLayer)) {
        var r = t,
            a = t.style;i && (r = n.addHover(t), a = r.style), qr(a), i || Ir(r), a.extendFrom(e), Dr(a, e, "fill"), Dr(a, e, "stroke"), Yr(a), i || (t.dirty(false), t.z2 += gv);
      }
    }
  }function Dr(t, e, n) {
    !Sr(e[n]) && Sr(t[n]) && (t[n] = Mr(t[n]));
  }function Tr(t) {
    var e = t.__highlighted;if (e && (t.__highlighted = false, !t.isGroup)) if ("layer" === e) t.__zr && t.__zr.removeHover(t);else {
      var n = t.style,
          i = t.__cachedNormalStl;i && (qr(n), t.setStyle(i), Yr(n));var r = t.__cachedNormalZ2;null != r && t.z2 - r === gv && (t.z2 = r);
    }
  }function Cr(t, e, n) {
    var i,
        r = yv,
        a = yv;t.__highlighted && (r = vv, i = true), e(t, n), t.__highlighted && (a = vv, i = true), t.isGroup && t.traverse(function (t) {
      !t.isGroup && e(t, n);
    }), i && t.__highDownOnUpdate && t.__highDownOnUpdate(r, a);
  }function kr(t, e) {
    e = t.__hoverStl = false !== e && (t.hoverStyle || e || {}), t.__hoverStlDirty = true, t.__highlighted && (t.__cachedNormalStl = null, Tr(t), Ar(t));
  }function Lr(t) {
    !Er(this, t) && !this.__highByOuter && Cr(this, Ar);
  }function Pr(t) {
    !Er(this, t) && !this.__highByOuter && Cr(this, Tr);
  }function Or(t) {
    this.__highByOuter |= 1 << (t || 0), Cr(this, Ar);
  }function Nr(t) {
    !(this.__highByOuter &= ~(1 << (t || 0))) && Cr(this, Tr);
  }function Er(t, e) {
    return t.__highDownSilentOnTouch && e.zrByTouch;
  }function zr(t, e) {
    Rr(t, true), Cr(t, kr, e);
  }function Rr(t, e) {
    var n = false === e;if (t.__highDownSilentOnTouch = t.highDownSilentOnTouch, t.__highDownOnUpdate = t.highDownOnUpdate, !n || t.__highDownDispatcher) {
      var i = n ? "off" : "on";t[i]("mouseover", Lr)[i]("mouseout", Pr), t[i]("emphasis", Or)[i]("normal", Nr), t.__highByOuter = t.__highByOuter || 0, t.__highDownDispatcher = !n;
    }
  }function Br(t) {
    return !(!t || !t.__highDownDispatcher);
  }function Fr(t) {
    var e = xv[t];return null == e && _v <= 32 && (e = xv[t] = _v++), e;
  }function Vr(t, e, n, i, r, a, o) {
    r = r || pv;var s,
        l = r.labelFetcher,
        u = r.labelDataIndex,
        h = r.labelDimIndex,
        c = n.getShallow("show"),
        d = i.getShallow("show");(c || d) && (l && (s = l.getFormattedLabel(u, "normal", null, h)), null == s && (s = x(r.defaultText) ? r.defaultText(u, r) : r.defaultText));var f = c ? s : null,
        p = d ? T(l ? l.getFormattedLabel(u, "emphasis", null, h) : null, s) : null;null == f && null == p || (Wr(t, n, a, r), Wr(e, i, o, r, true)), t.text = f, e.text = p;
  }function Gr(t, e, n) {
    var i = t.style;e && (qr(i), t.setStyle(e), Yr(i)), i = t.__hoverStl, n && i && (qr(i), a(i, n), Yr(i));
  }function Wr(t, e, n, i, r) {
    return Zr(t, e, i, r), n && a(t, n), t;
  }function Hr(t, e, n) {
    var i,
        r = { isRectText: true };false === n ? i = true : r.autoColor = n, Zr(t, e, r, i);
  }function Zr(t, e, n, i) {
    if (n = n || pv, n.isRectText) {
      var r;n.getTextPosition ? r = n.getTextPosition(e, i) : "outside" === (r = e.getShallow("position") || (i ? null : "inside")) && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");var a = e.getShallow("rotate");null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = T(e.getShallow("distance"), i ? null : 5);
    }var o,
        s = e.ecModel,
        l = s && s.option.textStyle,
        u = Xr(e);if (u) {
      o = {};for (var h in u) if (u.hasOwnProperty(h)) {
        var c = e.getModel(["rich", h]);jr(o[h] = {}, c, l, n, i);
      }
    }return t.rich = o, jr(t, e, l, n, i, true), n.forceRich && !n.textStyle && (n.textStyle = {}), t;
  }function Xr(t) {
    for (var e; t && t !== t.ecModel;) {
      var n = (t.option || pv).rich;if (n) {
        e = e || {};for (var i in n) n.hasOwnProperty(i) && (e[i] = 1);
      }t = t.parentModel;
    }return e;
  }function jr(t, e, n, i, r, a) {
    n = !r && n || pv, t.textFill = Ur(e.getShallow("color"), i) || n.color, t.textStroke = Ur(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = T(e.getShallow("textBorderWidth"), n.textBorderWidth), r || (a && (t.insideRollbackOpt = i, Yr(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = Ur(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = Ur(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY;
  }function Ur(t, e) {
    return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
  }function Yr(t) {
    var e,
        n = t.textPosition,
        i = t.insideRollbackOpt;if (i && null == t.textFill) {
      var r = i.autoColor,
          a = i.isRectText,
          o = i.useInsideStyle,
          s = false !== o && (true === o || a && n && "string" == typeof n && n.indexOf("inside") >= 0),
          l = !s && null != r;(s || l) && (e = { textFill: t.textFill, textStroke: t.textStroke, textStrokeWidth: t.textStrokeWidth }), s && (t.textFill = "#fff", null == t.textStroke && (t.textStroke = r, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), l && (t.textFill = r);
    }t.insideRollback = e;
  }function qr(t) {
    var e = t.insideRollback;e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null);
  }function $r(t, e) {
    var n = e && e.getModel("textStyle");return O([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "));
  }function Kr(t, e, n, i, r, a) {
    if ("function" == typeof r && (a = r, r = null), i && i.isAnimationEnabled()) {
      var o = t ? "Update" : "",
          s = i.getShallow("animationDuration" + o),
          l = i.getShallow("animationEasing" + o),
          u = i.getShallow("animationDelay" + o);"function" == typeof u && (u = u(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof s && (s = s(r)), s > 0 ? e.animateTo(n, s, u || 0, l, a, !!a) : (e.stopAnimation(), e.attr(n), a && a());
    } else e.stopAnimation(), e.attr(n), a && a();
  }function Qr(t, e, n, i, r) {
    Kr(true, t, e, n, i, r);
  }function Jr(t, e, n, i, r) {
    Kr(false, t, e, n, i, r);
  }function ta(t, e) {
    for (var n = Pt([]); t && t !== e;) Nt(n, t.getLocalTransform(), n), t = t.parent;return n;
  }function ea(t, e, n) {
    return e && !c(e) && (e = op.getLocalTransform(e)), n && (e = Bt([], e)), rt([], t, e);
  }function na(t, e, n) {
    var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
        r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
        a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];return a = ea(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
  }function ia(t, e, n, i) {
    function r(t) {
      var e = { position: W(t.position), rotation: t.rotation };return t.shape && (e.shape = a({}, t.shape)), e;
    }if (t && e) {
      var o = function (t) {
        var e = {};return t.traverse(function (t) {
          !t.isGroup && t.anid && (e[t.anid] = t);
        }), e;
      }(t);e.traverse(function (t) {
        if (!t.isGroup && t.anid) {
          var e = o[t.anid];if (e) {
            var i = r(t);t.attr(r(e)), Qr(t, i, n, t.dataIndex);
          }
        }
      });
    }
  }function ra(t, e) {
    return f(t, function (t) {
      var n = t[0];n = dv(n, e.x), n = fv(n, e.x + e.width);var i = t[1];return i = dv(i, e.y), i = fv(i, e.y + e.height), [n, i];
    });
  }function aa(t, e) {
    var n = dv(t.x, e.x),
        i = fv(t.x + t.width, e.x + e.width),
        r = dv(t.y, e.y),
        a = fv(t.y + t.height, e.y + e.height);if (i >= n && a >= r) return { x: n, y: r, width: i - n, height: a - r };
  }function oa(t, e, n) {
    e = a({ rectHover: true }, e);var i = e.style = { strokeNoScale: true };if (n = n || { x: -1, y: -1, width: 2, height: 2 }, t) return 0 === t.indexOf("image://") ? (i.image = t.slice(8), o(i, n), new An(e)) : vr(t.replace("path://", ""), e, n, "center");
  }function sa(t, e, n, i, r) {
    for (var a = 0, o = r[r.length - 1]; a < r.length; a++) {
      var s = r[a];if (la(t, e, n, i, s[0], s[1], o[0], o[1])) return true;o = s;
    }
  }function la(t, e, n, i, r, a, o, s) {
    var l = n - t,
        u = i - e,
        h = o - r,
        c = s - a,
        d = ua(h, c, l, u);if (ha(d)) return false;var f = t - r,
        p = e - a,
        g = ua(f, p, l, u) / d;if (g < 0 || g > 1) return false;var m = ua(f, p, h, c) / d;return !(m < 0 || m > 1);
  }function ua(t, e, n, i) {
    return t * i - n * e;
  }function ha(t) {
    return t <= 1e-6 && t >= -0.000001;
  }function ca(t, e, n) {
    this.parentModel = e, this.ecModel = n, this.option = t;
  }function da(t, e, n) {
    for (var i = 0; i < e.length && (!e[i] || null != (t = t && "object" == typeof t ? t[e[i]] : null)); i++);return null == t && n && (t = n.get(e)), t;
  }function fa(t, e) {
    var n = Pv(t).getParent;return n ? n.call(t, e) : t.parentModel;
  }function pa(t) {
    return [t || "", Ov++, Math.random().toFixed(5)].join("_");
  }function ga(t) {
    return t.replace(/^\s+|\s+$/g, "");
  }function ma(t, e, n, i) {
    var r = e[1] - e[0],
        a = n[1] - n[0];if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;if (i) {
      if (r > 0) {
        if (t <= e[0]) return n[0];if (t >= e[1]) return n[1];
      } else {
        if (t >= e[0]) return n[0];if (t <= e[1]) return n[1];
      }
    } else {
      if (t === e[0]) return n[0];if (t === e[1]) return n[1];
    }return (t - e[0]) / r * a + n[0];
  }function va(t, e) {
    switch (t) {case "center":case "middle":
        t = "50%";break;case "left":case "top":
        t = "0%";break;case "right":case "bottom":
        t = "100%";}return "string" == typeof t ? ga(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t;
  }function ya(t, e, n) {
    return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t;
  }function _a(t) {
    return t.sort(function (t, e) {
      return t - e;
    }), t;
  }function xa(t) {
    if (t = +t, isNaN(t)) return 0;for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;return n;
  }function wa(t) {
    var e = t.toString(),
        n = e.indexOf("e");if (n > 0) {
      var i = +e.slice(n + 1);return i < 0 ? -i : 0;
    }var r = e.indexOf(".");return r < 0 ? 0 : e.length - 1 - r;
  }function ba(t, e) {
    var n = Math.log,
        i = Math.LN10,
        r = Math.floor(n(t[1] - t[0]) / i),
        a = Math.round(n(Math.abs(e[1] - e[0])) / i),
        o = Math.min(Math.max(-r + a, 0), 20);return isFinite(o) ? o : 20;
  }function Sa(t, e, n) {
    if (!t[e]) return 0;var i = p(t, function (t, e) {
      return t + (isNaN(e) ? 0 : e);
    }, 0);if (0 === i) return 0;for (var r = Math.pow(10, n), a = f(t, function (t) {
      return (isNaN(t) ? 0 : t) / i * r * 100;
    }), o = 100 * r, s = f(a, function (t) {
      return Math.floor(t);
    }), l = p(s, function (t, e) {
      return t + e;
    }, 0), u = f(a, function (t, e) {
      return t - s[e];
    }); l < o;) {
      for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, g = u.length; d < g; ++d) u[d] > h && (h = u[d], c = d);++s[c], u[c] = 0, ++l;
    }return s[e] / r;
  }function Ma(t) {
    var e = 2 * Math.PI;return (t % e + e) % e;
  }function Ia(t) {
    return t > -Nv && t < Nv;
  }function Aa(t) {
    if (t instanceof Date) return t;if ("string" == typeof t) {
      var e = Ev.exec(t);if (!e) return new Date(NaN);if (e[8]) {
        var n = +e[4] || 0;return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
      }return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
    }return null == t ? new Date(NaN) : new Date(Math.round(t));
  }function Da(t) {
    return Math.pow(10, Ta(t));
  }function Ta(t) {
    if (0 === t) return 0;var e = Math.floor(Math.log(t) / Math.LN10);return t / Math.pow(10, e) >= 10 && e++, e;
  }function Ca(t, e) {
    var n,
        i = Ta(t),
        r = Math.pow(10, i),
        a = t / r;return n = e ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(i < 0 ? -i : 0) : t;
  }function ka(t, e) {
    var n = (t.length - 1) * e + 1,
        i = Math.floor(n),
        r = +t[i - 1],
        a = n - i;return a ? r + a * (t[i] - r) : r;
  }function La(t) {
    function e(t, n, i) {
      return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] == (i ? -1 : 1) || !i && e(t, n, 1));
    }t.sort(function (t, n) {
      return e(t, n, 0) ? -1 : 1;
    });for (var n = -Infinity, i = 1, r = 0; r < t.length;) {
      for (var a = t[r].interval, o = t[r].close, s = 0; s < 2; s++) a[s] <= n && (a[s] = n, o[s] = s ? 1 : 1 - i), n = a[s], i = o[s];a[0] === a[1] && o[0] * o[1] != 1 ? t.splice(r, 1) : r++;
    }return t;
  }function Pa(t) {
    return t - parseFloat(t) >= 0;
  }function Oa(t) {
    return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""));
  }function Na(t, e) {
    return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
      return e.toUpperCase();
    }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
  }function Ea(t) {
    return null == t ? "" : (t + "").replace(Bv, function (t, e) {
      return Fv[e];
    });
  }function za(t, e, n) {
    _(e) || (e = [e]);var i = e.length;if (!i) return "";for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
      var o = Vv[a];t = t.replace(Gv(o), Gv(o, 0));
    }for (var s = 0; s < i; s++) for (var l = 0; l < r.length; l++) {
      var u = e[s][r[l]];t = t.replace(Gv(Vv[l], s), n ? Ea(u) : u);
    }return t;
  }function Ra(t, e, n) {
    return d(e, function (e, i) {
      t = t.replace("{" + i + "}", n ? Ea(e) : e);
    }), t;
  }function Ba(t, e) {
    t = w(t) ? { color: t, extraCssText: e } : t || {};var n = t.color,
        i = t.type,
        e = t.extraCssText,
        r = t.renderMode || "html",
        a = t.markerId || "X";return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Ea(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + Ea(n) + ";" + (e || "") + '"></span>' : { renderMode: r, content: "{marker" + a + "|}  ", style: { color: n } } : "";
  }function Fa(t, e) {
    return t += "", "0000".substr(0, e - t.length) + t;
  }function Va(t, e, n) {
    "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");var i = Aa(e),
        r = n ? "UTC" : "",
        a = i["get" + r + "FullYear"](),
        o = i["get" + r + "Month"]() + 1,
        s = i["get" + r + "Date"](),
        l = i["get" + r + "Hours"](),
        u = i["get" + r + "Minutes"](),
        h = i["get" + r + "Seconds"](),
        c = i["get" + r + "Milliseconds"]();return t = t.replace("MM", Fa(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", Fa(s, 2)).replace("d", s).replace("hh", Fa(l, 2)).replace("h", l).replace("mm", Fa(u, 2)).replace("m", u).replace("ss", Fa(h, 2)).replace("s", h).replace("SSS", Fa(c, 3));
  }function Ga(t) {
    return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
  }function Wa(t) {
    return He(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate);
  }function Ha(t, e, n, i, r, a, o, s) {
    return He(t, e, n, i, r, s, a, o);
  }function Za(t, e, n, i, r) {
    var a = 0,
        o = 0;null == i && (i = Infinity), null == r && (r = Infinity);var s = 0;e.eachChild(function (l, u) {
      var h,
          c,
          d = l.position,
          f = l.getBoundingRect(),
          p = e.childAt(u + 1),
          g = p && p.getBoundingRect();if ("horizontal" === t) {
        var m = f.width + (g ? -g.x + f.x : 0);h = a + m, h > i || l.newline ? (a = 0, h = m, o += s + n, s = f.height) : s = Math.max(s, f.height);
      } else {
        var v = f.height + (g ? -g.y + f.y : 0);c = o + v, c > r || l.newline ? (a += s + n, o = 0, c = v, s = f.width) : s = Math.max(s, f.width);
      }l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = h + n : o = c + n);
    });
  }function Xa(t, e, n) {
    n = Rv(n || 0);var i = e.width,
        r = e.height,
        a = va(t.left, i),
        o = va(t.top, r),
        s = va(t.right, i),
        l = va(t.bottom, r),
        u = va(t.width, i),
        h = va(t.height, r),
        c = n[2] + n[0],
        d = n[1] + n[3],
        f = t.aspect;switch (isNaN(u) && (u = i - s - d - a), isNaN(h) && (h = r - l - c - o), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(a) && (a = i - s - u - d), isNaN(o) && (o = r - l - h - c), t.left || t.right) {case "center":
        a = i / 2 - u / 2 - n[3];break;case "right":
        a = i - u - d;}switch (t.top || t.bottom) {case "middle":case "center":
        o = r / 2 - h / 2 - n[0];break;case "bottom":
        o = r - h - c;}a = a || 0, o = o || 0, isNaN(u) && (u = i - d - a - (s || 0)), isNaN(h) && (h = r - c - o - (l || 0));var p = new Me(a + n[3], o + n[0], u, h);return p.margin = n, p;
  }function ja(t, e, n) {
    function i(n, i) {
      var o = {},
          l = 0,
          u = {},
          h = 0;if (Zv(n, function (e) {
        u[e] = t[e];
      }), Zv(n, function (t) {
        r(e, t) && (o[t] = u[t] = e[t]), a(o, t) && l++, a(u, t) && h++;
      }), s[i]) return a(e, n[1]) ? u[n[2]] = null : a(e, n[2]) && (u[n[1]] = null), u;if (2 !== h && l) {
        if (l >= 2) return o;for (var c = 0; c < n.length; c++) {
          var d = n[c];if (!r(o, d) && r(t, d)) {
            o[d] = t[d];break;
          }
        }return o;
      }return u;
    }function r(t, e) {
      return t.hasOwnProperty(e);
    }function a(t, e) {
      return null != t[e] && "auto" !== t[e];
    }function o(t, e, n) {
      Zv(t, function (t) {
        e[t] = n[t];
      });
    }!b(n) && (n = {});var s = n.ignoreSize;!_(s) && (s = [s, s]);var l = i(jv[0], 0),
        u = i(jv[1], 1);o(jv[0], t, l), o(jv[1], t, u);
  }function Ua(t) {
    return Ya({}, t);
  }function Ya(t, e) {
    return e && t && Zv(Xv, function (n) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }), t;
  }function qa(t) {
    var e = [];return d($v.getClassesByMainType(t), function (t) {
      e = e.concat(t.prototype.dependencies || []);
    }), e = f(e, function (t) {
      return fi(t).main;
    }), "dataset" !== t && l(e, "dataset") <= 0 && e.unshift("dataset"), e;
  }function $a(t, e) {
    for (var n = t.length, i = 0; i < n; i++) if (t[i].length > e) return t[i];return t[n - 1];
  }function Ka(t) {
    this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === ry ? {} : []), this.sourceFormat = t.sourceFormat || ay, this.seriesLayoutBy = t.seriesLayoutBy || sy, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && R(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;
  }function Qa(t) {
    var e = t.option.source,
        n = ay;if (M(e)) n = oy;else if (_(e)) {
      0 === e.length && (n = ny);for (var i = 0, r = e.length; i < r; i++) {
        var a = e[i];if (null != a) {
          if (_(a)) {
            n = ny;break;
          }if (b(a)) {
            n = iy;break;
          }
        }
      }
    } else if (b(e)) {
      for (var o in e) if (e.hasOwnProperty(o) && c(e[o])) {
        n = ry;break;
      }
    } else if (null != e) throw new Error("Invalid data");hy(t).sourceFormat = n;
  }function Ja(t) {
    return hy(t).source;
  }function to(t) {
    hy(t).datasetMap = R();
  }function eo(t) {
    var e = t.option,
        n = e.data,
        i = M(n) ? oy : ey,
        r = false,
        a = e.seriesLayoutBy,
        o = e.sourceHeader,
        s = e.dimensions,
        l = lo(t);if (l) {
      var u = l.option;n = u.source, i = hy(l).sourceFormat, r = true, a = a || u.seriesLayoutBy, null == o && (o = u.sourceHeader), s = s || u.dimensions;
    }var h = no(n, i, a, o, s);hy(t).source = new Ka({ data: n, fromDataset: r, seriesLayoutBy: a, sourceFormat: i, dimensionsDefine: h.dimensionsDefine, startIndex: h.startIndex, dimensionsDetectCount: h.dimensionsDetectCount, encodeDefine: e.encode });
  }function no(t, e, n, i, r) {
    if (!t) return { dimensionsDefine: io(r) };var a, o;if (e === ny) "auto" === i || null == i ? ro(function (t) {
      null != t && "-" !== t && (w(t) ? null == o && (o = 1) : o = 0);
    }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], ro(function (t, e) {
      r[e] = null != t ? t : "";
    }, n, t)), a = r ? r.length : n === ly ? t.length : t[0] ? t[0].length : null;else if (e === iy) r || (r = ao(t));else if (e === ry) r || (r = [], d(t, function (t, e) {
      r.push(e);
    }));else if (e === ey) {
      var s = ti(t[0]);a = _(s) && s.length || 1;
    }return { startIndex: o, dimensionsDefine: io(r), dimensionsDetectCount: a };
  }function io(t) {
    if (t) {
      var e = R();return f(t, function (t, n) {
        if (t = a({}, b(t) ? t : { name: t }), null == t.name) return t;t.name += "", null == t.displayName && (t.displayName = t.name);var i = e.get(t.name);return i ? t.name += "-" + i.count++ : e.set(t.name, { count: 1 }), t;
      });
    }
  }function ro(t, e, n, i) {
    if (null == i && (i = Infinity), e === ly) for (var r = 0; r < n.length && r < i; r++) t(n[r] ? n[r][0] : null, r);else for (var a = n[0] || [], r = 0; r < a.length && r < i; r++) t(a[r], r);
  }function ao(t) {
    for (var e, n = 0; n < t.length && !(e = t[n++]););if (e) {
      var i = [];return d(e, function (t, e) {
        i.push(e);
      }), i;
    }
  }function oo(t, e, n) {
    function i(t, e, n) {
      for (var i = 0; i < n; i++) t.push(e + i);
    }function r(t) {
      var e = t.dimsDef;return e ? e.length : 1;
    }var a = {},
        o = lo(e);if (!o || !t) return a;var s,
        l,
        u = [],
        h = [],
        c = e.ecModel,
        f = hy(c).datasetMap,
        p = o.uid + "_" + n.seriesLayoutBy;t = t.slice(), d(t, function (e, n) {
      !b(e) && (t[n] = { name: e }), "ordinal" === e.type && null == s && (s = n, l = r(t[n])), a[e.name] = [];
    });var g = f.get(p) || f.set(p, { categoryWayDim: l, valueWayDim: 0 });return d(t, function (t, e) {
      var n = t.name,
          o = r(t);if (null == s) {
        var l = g.valueWayDim;i(a[n], l, o), i(h, l, o), g.valueWayDim += o;
      } else if (s === e) i(a[n], 0, o), i(u, 0, o);else {
        var l = g.categoryWayDim;i(a[n], l, o), i(h, l, o), g.categoryWayDim += o;
      }
    }), u.length && (a.itemName = u), h.length && (a.seriesName = h), a;
  }function so(t, e, n) {
    var i = {};if (!lo(t)) return i;var r,
        a = e.sourceFormat,
        o = e.dimensionsDefine;a !== iy && a !== ry || d(o, function (t, e) {
      "name" === (b(t) ? t.name : t) && (r = e);
    });var s = function () {
      function t(t) {
        return null != t.v && null != t.n;
      }for (var i = {}, s = {}, l = [], u = 0, h = Math.min(5, n); u < h; u++) {
        var c = ho(e.data, a, e.seriesLayoutBy, o, e.startIndex, u);l.push(c);var d = c === uy.Not;if (d && null == i.v && u !== r && (i.v = u), (null == i.n || i.n === i.v || !d && l[i.n] === uy.Not) && (i.n = u), t(i) && l[i.n] !== uy.Not) return i;d || (c === uy.Might && null == s.v && u !== r && (s.v = u), null != s.n && s.n !== s.v || (s.n = u));
      }return t(i) ? i : t(s) ? s : null;
    }();if (s) {
      i.value = s.v;var l = null != r ? r : s.n;i.itemName = [l], i.seriesName = [l];
    }return i;
  }function lo(t) {
    var e = t.option;if (!e.data) return t.ecModel.getComponent("dataset", e.datasetIndex || 0);
  }function uo(t, e) {
    return ho(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
  }function ho(t, e, n, i, r, a) {
    function o(t) {
      var e = w(t);return null != t && isFinite(t) && "" !== t ? e ? uy.Might : uy.Not : e && "-" !== t ? uy.Must : undefined;
    }var s;if (M(t)) return uy.Not;var l, u;if (i) {
      var h = i[a];b(h) ? (l = h.name, u = h.type) : w(h) && (l = h);
    }if (null != u) return "ordinal" === u ? uy.Must : uy.Not;if (e === ny) {
      if (n === ly) {
        for (var c = t[a], d = 0; d < (c || []).length && d < 5; d++) if (null != (s = o(c[r + d]))) return s;
      } else for (var d = 0; d < t.length && d < 5; d++) {
        var f = t[r + d];if (f && null != (s = o(f[a]))) return s;
      }
    } else if (e === iy) {
      if (!l) return uy.Not;for (var d = 0; d < t.length && d < 5; d++) {
        var p = t[d];if (p && null != (s = o(p[l]))) return s;
      }
    } else if (e === ry) {
      if (!l) return uy.Not;var c = t[l];if (!c || M(c)) return uy.Not;for (var d = 0; d < c.length && d < 5; d++) if (null != (s = o(c[d]))) return s;
    } else if (e === ey) for (var d = 0; d < t.length && d < 5; d++) {
      var p = t[d],
          g = ti(p);if (!_(g)) return uy.Not;if (null != (s = o(g[a]))) return s;
    }return uy.Not;
  }function co(t, e) {
    if (e) {
      var n = e.seiresIndex,
          i = e.seriesId,
          r = e.seriesName;return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r;
    }
  }function fo(t, e) {
    var r = t.color && !t.colorLayer;d(e, function (e, a) {
      "colorLayer" === a && r || $v.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? i(t[a], e, false) : n(e) : null == t[a] && (t[a] = e));
    });
  }function po(t) {
    t = t, this.option = {}, this.option[cy] = 1, this._componentsMap = R({ series: [] }), this._seriesIndices, this._seriesIndicesMap, fo(t, this._theme.option), i(t, Qv, false), this.mergeOption(t);
  }function go(t, e) {
    _(e) || (e = e ? [e] : []);var n = {};return d(e, function (e) {
      n[e] = (t.get(e) || []).slice();
    }), n;
  }function mo(t, e, n) {
    return e.type ? e.type : n ? n.subType : $v.determineSubType(t, e);
  }function vo(t, e) {
    t._seriesIndicesMap = R(t._seriesIndices = f(e, function (t) {
      return t.componentIndex;
    }) || []);
  }function yo(t, e) {
    return e.hasOwnProperty("subType") ? g(t, function (t) {
      return t.subType === e.subType;
    }) : t;
  }function _o(t) {
    d(fy, function (e) {
      this[e] = v(t[e], t);
    }, this);
  }function xo() {
    this._coordinateSystems = [];
  }function wo(t) {
    this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
  }function bo(t, e, n) {
    var i,
        r,
        a = [],
        o = [],
        s = t.timeline;if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
      r = r || {};var l = t.media;gy(l, function (t) {
        t && t.option && (t.query ? o.push(t) : i || (i = t));
      });
    }return r || (r = t), r.timeline || (r.timeline = s), gy([r].concat(a).concat(f(o, function (t) {
      return t.option;
    })), function (t) {
      gy(e, function (e) {
        e(t, n);
      });
    }), { baseOption: r, timelineOptions: a, mediaDefault: i, mediaList: o };
  }function So(t, e, n) {
    var i = { width: e, height: n, aspectratio: e / n },
        r = true;return d(t, function (t, e) {
      var n = e.match(_y);if (n && n[1] && n[2]) {
        var a = n[1],
            o = n[2].toLowerCase();Mo(i[o], t, a) || (r = false);
      }
    }), r;
  }function Mo(t, e, n) {
    return "min" === n ? t >= e : "max" === n ? t <= e : t === e;
  }function Io(t, e) {
    return t.join(",") === e.join(",");
  }function Ao(t, e) {
    e = e || {}, gy(e, function (e, n) {
      if (null != e) {
        var i = t[n];if ($v.hasClass(n)) {
          e = Qn(e), i = Qn(i);var r = ni(i, e);t[n] = vy(r, function (t) {
            return t.option && t.exist ? yy(t.exist, t.option, true) : t.exist || t.option;
          });
        } else t[n] = yy(i, e, true);
      }
    });
  }function Do(t) {
    var e = t && t.itemStyle;if (e) for (var n = 0, r = by.length; n < r; n++) {
      var a = by[n],
          o = e.normal,
          s = e.emphasis;o && o[a] && (t[a] = t[a] || {}, t[a].normal ? i(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? i(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null);
    }
  }function To(t, e, n) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var i = t[e].normal,
          r = t[e].emphasis;i && (n ? (t[e].normal = t[e].emphasis = null, o(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r);
    }
  }function Co(t) {
    To(t, "itemStyle"), To(t, "lineStyle"), To(t, "areaStyle"), To(t, "label"), To(t, "labelLine"), To(t, "upperLabel"), To(t, "edgeLabel");
  }function ko(t, e) {
    var n = wy(t) && t[e],
        i = wy(n) && n.textStyle;if (i) for (var r = 0, a = Lg.length; r < a; r++) {
      var e = Lg[r];i.hasOwnProperty(e) && (n[e] = i[e]);
    }
  }function Lo(t) {
    t && (Co(t), ko(t, "label"), t.emphasis && ko(t.emphasis, "label"));
  }function Po(t) {
    if (wy(t)) {
      Do(t), Co(t), ko(t, "label"), ko(t, "upperLabel"), ko(t, "edgeLabel"), t.emphasis && (ko(t.emphasis, "label"), ko(t.emphasis, "upperLabel"), ko(t.emphasis, "edgeLabel"));var e = t.markPoint;e && (Do(e), Lo(e));var n = t.markLine;n && (Do(n), Lo(n));var i = t.markArea;i && Lo(i);var r = t.data;if ("graph" === t.type) {
        r = r || t.nodes;var a = t.links || t.edges;if (a && !M(a)) for (var o = 0; o < a.length; o++) Lo(a[o]);d(t.categories, function (t) {
          Co(t);
        });
      }if (r && !M(r)) for (var o = 0; o < r.length; o++) Lo(r[o]);var e = t.markPoint;if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) Lo(s[o]);var n = t.markLine;if (n && n.data) for (var l = n.data, o = 0; o < l.length; o++) _(l[o]) ? (Lo(l[o][0]), Lo(l[o][1])) : Lo(l[o]);"gauge" === t.type ? (ko(t, "axisLabel"), ko(t, "title"), ko(t, "detail")) : "treemap" === t.type ? (To(t.breadcrumb, "itemStyle"), d(t.levels, function (t) {
        Co(t);
      })) : "tree" === t.type && Co(t.leaves);
    }
  }function Oo(t) {
    return _(t) ? t : t ? [t] : [];
  }function No(t) {
    return (_(t) ? t[0] : t) || {};
  }function Eo(t, e) {
    e = e.split(",");for (var n = t, i = 0; i < e.length && null != (n = n && n[e[i]]); i++);return n;
  }function zo(t, e, n, i) {
    e = e.split(",");for (var r, a = t, o = 0; o < e.length - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];(i || null == a[e[o]]) && (a[e[o]] = n);
  }function Ro(t) {
    d(My, function (e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
    });
  }function Bo(t) {
    d(t, function (e, n) {
      var i = [],
          r = [NaN, NaN],
          a = [e.stackResultDimension, e.stackedOverDimension],
          o = e.data,
          s = e.isStackedByIndex,
          l = o.map(a, function (a, l, u) {
        var h = o.get(e.stackedDimension, u);if (isNaN(h)) return r;var c, d;s ? d = o.getRawIndex(u) : c = o.get(e.stackedByDimension, u);for (var f = NaN, p = n - 1; p >= 0; p--) {
          var g = t[p];if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
            var m = g.data.getByRawIndex(g.stackResultDimension, d);if (h >= 0 && m > 0 || h <= 0 && m < 0) {
              h += m, f = m;break;
            }
          }
        }return i[0] = h, i[1] = f, i;
      });o.hostModel.setData(l), e.data = l;
    });
  }function Fo(t, e) {
    Ka.isInstance(t) || (t = Ka.seriesDataToSource(t)), this._source = t;var n = this._data = t.data,
        i = t.sourceFormat;i === oy && (this._offset = 0, this._dimSize = e, this._data = n), a(this, Cy[i === ny ? i + "_" + t.seriesLayoutBy : i]);
  }function Vo() {
    return this._data.length;
  }function Go(t) {
    return this._data[t];
  }function Wo(t) {
    for (var e = 0; e < t.length; e++) this._data.push(t[e]);
  }function Ho(t, e, n, i) {
    return null != n ? t[n] : t;
  }function Zo(t, e, n, i) {
    return Xo(t[i], this._dimensionInfos[e]);
  }function Xo(t, e) {
    var n = e && e.type;if ("ordinal" === n) {
      var i = e && e.ordinalMeta;return i ? i.parseAndCollect(t) : t;
    }return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +Aa(t)), null == t || "" === t ? NaN : +t;
  }function jo(t, e, n) {
    if (t) {
      var i = t.getRawDataItem(e);if (null != i) {
        var r,
            a,
            o = t.getProvider().getSource().sourceFormat,
            s = t.getDimensionInfo(n);return s && (r = s.name, a = s.index), ky[o](i, e, a, r);
      }
    }
  }function Uo(t, e, n) {
    if (t) {
      var i = t.getProvider().getSource().sourceFormat;if (i === ey || i === iy) {
        var r = t.getRawDataItem(e);return i !== ey || b(r) || (r = null), r ? r[n] : undefined;
      }
    }
  }function Yo(t) {
    return new qo(t);
  }function qo(t) {
    t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = true, this.context;
  }function $o(t, e, n, i, r, a) {
    Ey.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({ start: n, end: i, count: i - n, next: Ey.next }, t.context);
  }function Ko(t, e) {
    t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;var n, i;!e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), _(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;var r = t._downstream;return r && r.dirty(), i;
  }function Qo(t) {
    var e = t.name;ri(t) || (t.name = Jo(t) || e);
  }function Jo(t) {
    var e = t.getRawData(),
        n = e.mapDimension("seriesName", true),
        i = [];return d(n, function (t) {
      var n = e.getDimensionInfo(t);n.displayName && i.push(n.displayName);
    }), i.join(" ");
  }function ts(t) {
    return t.model.getRawData().count();
  }function es(t) {
    var e = t.model;return e.setData(e.getRawData().cloneShallow()), ns;
  }function ns(t, e) {
    t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
  }function is(t, e) {
    d(t.CHANGABLE_METHODS, function (n) {
      t.wrapMethod(n, y(rs, e));
    });
  }function rs(t) {
    var e = as(t);e && e.setOutputEnd(this.count());
  }function as(t) {
    var e = (t.ecModel || {}).scheduler,
        n = e && e.getPipeline(t.uid);if (n) {
      var i = n.currentTask;if (i) {
        var r = i.agentStubMap;r && (i = r.get(t.uid));
      }return i;
    }
  }function os() {
    this.group = new Np(), this.uid = pa("viewChart"), this.renderTask = Yo({ plan: us, reset: hs }), this.renderTask.context = { view: this };
  }function ss(t, e, n) {
    if (t && (t.trigger(e, n), t.isGroup && !Br(t))) for (var i = 0, r = t.childCount(); i < r; i++) ss(t.childAt(i), e, n);
  }function ls(t, e, n) {
    var i = oi(t, e),
        r = e && null != e.highlightKey ? Fr(e.highlightKey) : null;null != i ? d(Qn(i), function (e) {
      ss(t.getItemGraphicEl(e), n, r);
    }) : t.eachItemGraphicEl(function (t) {
      ss(t, n, r);
    });
  }function us(t) {
    return Wy(t.model);
  }function hs(t) {
    var e = t.model,
        n = t.ecModel,
        i = t.api,
        r = t.payload,
        a = e.pipelineContext.progressiveRender,
        o = t.view,
        s = r && Gy(r).updateMethod,
        l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";return "render" !== l && o[l](e, n, i, r), Zy[l];
  }function cs(t, e, n) {
    function i() {
      h = new Date().getTime(), c = null, t.apply(o, s || []);
    }var r,
        a,
        o,
        s,
        l,
        u = 0,
        h = 0,
        c = null;e = e || 0;var d = function () {
      r = new Date().getTime(), o = this, s = arguments;var t = l || e,
          d = l || n;l = null, a = r - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), u = r;
    };return d.clear = function () {
      c && (clearTimeout(c), c = null);
    }, d.debounceNextCall = function (t) {
      l = t;
    }, d;
  }function ds(t, e, n, i) {
    var r = t[e];if (r) {
      var a = r[Xy] || r,
          o = r[Uy];if (r[jy] !== n || o !== i) {
        if (null == n || !i) return t[e] = a;r = t[e] = cs(a, n, "debounce" === i), r[Xy] = a, r[Uy] = i, r[jy] = n;
      }return r;
    }
  }function fs(t, e) {
    var n = t[e];n && n[Xy] && (t[e] = n[Xy]);
  }function ps(t, e, n, i) {
    this.ecInstance = t, this.api = e, this.unfinished;var n = this._dataProcessorHandlers = n.slice(),
        i = this._visualHandlers = i.slice();this._allHandlers = n.concat(i), this._stageTaskMap = R();
  }function gs(t, e, n, i, r) {
    function a(t, e) {
      return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
    }r = r || {};var o;d(e, function (e, s) {
      if (!r.visualType || r.visualType === e.visualType) {
        var l = t._stageTaskMap.get(e.uid),
            u = l.seriesTaskMap,
            h = l.overallTask;if (h) {
          var c,
              d = h.agentStubMap;d.each(function (t) {
            a(r, t) && (t.dirty(), c = true);
          }), c && h.dirty(), t_(h, i);var f = t.getPerformArgs(h, r.block);d.each(function (t) {
            t.perform(f);
          }), o |= h.perform(f);
        } else u && u.each(function (s, l) {
          a(r, s) && s.dirty();var u = t.getPerformArgs(s, r.block);u.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), t_(s, i), o |= s.perform(u);
        });
      }
    }), t.unfinished |= o;
  }function ms(t, e, n, i, r) {
    function a(n) {
      var a = n.uid,
          s = o.get(a) || o.set(a, Yo({ plan: bs, reset: Ss, count: Is }));s.context = { model: n, ecModel: i, api: r, useClearVisual: e.isVisual && !e.isLayout, plan: e.plan, reset: e.reset, scheduler: t }, As(t, n, s);
    }var o = n.seriesTaskMap || (n.seriesTaskMap = R()),
        s = e.seriesType,
        l = e.getTargetSeries;e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);var u = t._pipelineMap;o.each(function (t, e) {
      u.get(e) || (t.dispose(), o.removeKey(e));
    });
  }function vs(t, e, n, i, r) {
    function a(e) {
      var n = e.uid,
          i = s.get(n);i || (i = s.set(n, Yo({ reset: _s, onDirty: ws })), o.dirty()), i.context = { model: e, overallProgress: h, modifyOutputEnd: c }, i.agent = o, i.__block = h, As(t, e, i);
    }var o = n.overallTask = n.overallTask || Yo({ reset: ys });o.context = { ecModel: i, api: r, overallReset: e.overallReset, scheduler: t };var s = o.agentStubMap = o.agentStubMap || R(),
        l = e.seriesType,
        u = e.getTargetSeries,
        h = true,
        c = e.modifyOutputEnd;l ? i.eachRawSeriesByType(l, a) : u ? u(i, r).each(a) : (h = false, d(i.getSeries(), a));var f = t._pipelineMap;s.each(function (t, e) {
      f.get(e) || (t.dispose(), o.dirty(), s.removeKey(e));
    });
  }function ys(t) {
    t.overallReset(t.ecModel, t.api, t.payload);
  }function _s(t, e) {
    return t.overallProgress && xs;
  }function xs() {
    this.agent.dirty(), this.getDownstream().dirty();
  }function ws() {
    this.agent && this.agent.dirty();
  }function bs(t) {
    return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
  }function Ss(t) {
    t.useClearVisual && t.data.clearAllVisual();var e = t.resetDefines = Qn(t.reset(t.model, t.ecModel, t.api, t.payload));return e.length > 1 ? f(e, function (t, e) {
      return Ms(e);
    }) : e_;
  }function Ms(t) {
    return function (e, n) {
      var i = n.data,
          r = n.resetDefines[t];if (r && r.dataEach) for (var a = e.start; a < e.end; a++) r.dataEach(i, a);else r && r.progress && r.progress(e, i);
    };
  }function Is(t) {
    return t.data.count();
  }function As(t, e, n) {
    var i = e.uid,
        r = t._pipelineMap.get(i);!r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r;
  }function Ds(t) {
    n_ = null;try {
      t(i_, r_);
    } catch (t) {}return n_;
  }function Ts(t, e) {
    for (var n in e.prototype) t[n] = F;
  }function Cs(t) {
    if (w(t)) {
      t = new DOMParser().parseFromString(t, "text/xml");
    }for (9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;return t;
  }function ks() {
    this._defs = {}, this._root = null, this._isDefine = false, this._isText = false;
  }function Ls(t, e) {
    for (var n = t.firstChild; n;) {
      if (1 === n.nodeType) {
        var i = n.getAttribute("offset");i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;var r = n.getAttribute("stop-color") || "#000000";e.addColorStop(i, r);
      }n = n.nextSibling;
    }
  }function Ps(t, e) {
    t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), o(e.__inheritedStyle, t.__inheritedStyle));
  }function Os(t) {
    for (var e = O(t).split(c_), n = [], i = 0; i < e.length; i += 2) {
      var r = parseFloat(e[i]),
          a = parseFloat(e[i + 1]);n.push([r, a]);
    }return n;
  }function Ns(t, e, n, i) {
    var r = e.__inheritedStyle || {},
        o = "text" === e.type;if (1 === t.nodeType && (zs(t, e), a(r, Rs(t)), !i)) for (var s in p_) if (p_.hasOwnProperty(s)) {
      var l = t.getAttribute(s);null != l && (r[p_[s]] = l);
    }var u = o ? "textFill" : "fill",
        h = o ? "textStroke" : "stroke";e.style = e.style || new Hp();var c = e.style;null != r.fill && c.set(u, Es(r.fill, n)), null != r.stroke && c.set(h, Es(r.stroke, n)), d(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
      var e = "lineWidth" === t && o ? "textStrokeWidth" : t;null != r[t] && c.set(e, parseFloat(r[t]));
    }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), d(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
      null != r[t] && c.set(t, r[t]);
    }), r.lineDash && (e.style.lineDash = O(r.lineDash).split(c_)), c[h] && "none" !== c[h] && (e[h] = true), e.__inheritedStyle = r;
  }function Es(t, e) {
    var n = e && t && t.match(g_);if (n) {
      return e[O(n[1])];
    }return t;
  }function zs(t, e) {
    var n = t.getAttribute("transform");if (n) {
      n = n.replace(/,/g, " ");var i = null,
          r = [];n.replace(m_, function (t, e, n) {
        r.push(e, n);
      });for (var a = r.length - 1; a > 0; a -= 2) {
        var o = r[a],
            s = r[a - 1];switch (i = i || Lt(), s) {case "translate":
            o = O(o).split(c_), Et(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);break;case "scale":
            o = O(o).split(c_), Rt(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);break;case "rotate":
            o = O(o).split(c_), zt(i, i, parseFloat(o[0]));break;case "skew":
            o = O(o).split(c_), console.warn("Skew transform is not supported yet");break;case "matrix":
            var o = O(o).split(c_);i[0] = parseFloat(o[0]), i[1] = parseFloat(o[1]), i[2] = parseFloat(o[2]), i[3] = parseFloat(o[3]), i[4] = parseFloat(o[4]), i[5] = parseFloat(o[5]);}
      }e.setLocalTransform(i);
    }
  }function Rs(t) {
    var e = t.getAttribute("style"),
        n = {};if (!e) return n;var i = {};v_.lastIndex = 0;for (var r; null != (r = v_.exec(e));) i[r[1]] = r[2];for (var a in p_) p_.hasOwnProperty(a) && null != i[a] && (n[p_[a]] = i[a]);return n;
  }function Bs(t, e, n) {
    var i = e / t.width,
        r = n / t.height,
        a = Math.min(i, r);return { scale: [a, a], position: [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2] };
  }function Fs(t, e) {
    return function (n, i, r) {
      !e && this._disposed || (n = n && n.toLowerCase(), Zf.prototype[t].call(this, n, i, r));
    };
  }function Vs() {
    Zf.call(this);
  }function Gs(t, e, i) {
    function r(t, e) {
      return t.__prio - e.__prio;
    }i = i || {}, "string" == typeof e && (e = H_[e]), this.id, this.group, this._dom = t;var a = this._zr = Un(t, { renderer: i.renderer || "canvas", devicePixelRatio: i.devicePixelRatio, width: i.width, height: i.height });this._throttledZrFlush = cs(v(a.flush, a), 17);var e = n(e);e && Ay(e, true), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new xo();var o = this._api = al(this);Pe(W_, r), Pe(F_, r), this._scheduler = new ps(this, o, F_, W_), Zf.call(this, this._ecEventProcessor = new ol()), this._messageCenter = new Vs(), this._initEvents(), this.resize = v(this.resize, this), this._pendingActions = [], a.animation.on("frame", this._onframe, this), qs(a, this), N(this);
  }function Ws(t, e, n) {
    if (!this._disposed) {
      var i,
          r = this._model,
          a = this._coordSysMgr.getCoordinateSystems();e = li(r, e);for (var o = 0; o < a.length; o++) {
        var s = a[o];if (s[t] && null != (i = s[t](r, e, n))) return i;
      }
    }
  }function Hs(t) {
    var e = t._model,
        n = t._scheduler;n.restorePipelines(e), n.prepareStageTasks(), $s(t, "component", e, n), $s(t, "chart", e, n), n.plan();
  }function Zs(t, e, n, i, r) {
    function a(i) {
      i && i.__alive && i[e] && i[e](i.__model, o, t._api, n);
    }var o = t._model;if (!i) return undefined;var s = {};s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];var l = { mainType: i, query: s };r && (l.subType = r);var u = n.excludeSeriesId;null != u && (u = R(Qn(u))), o && o.eachComponent(l, function (e) {
      u && null != u.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]);
    }, t);
  }function Xs(t, e) {
    var n = t._chartsMap,
        i = t._scheduler;e.eachSeries(function (t) {
      i.updateStreamModes(t, n[t.__viewId]);
    });
  }function js(t, e) {
    var n = t.type,
        i = t.escapeConnect,
        r = R_[n],
        s = r.actionInfo,
        l = (s.update || "update").split(":"),
        u = l.pop();l = null != l[0] && I_(l[0]), this[L_] = true;var h = [t],
        c = false;t.batch && (c = true, h = f(t.batch, function (e) {
      return e = o(a({}, e), t), e.batch = null, e;
    }));var d,
        p = [],
        g = "highlight" === n || "downplay" === n;b_(h, function (t) {
      d = r.action(t, this._model, this._api), d = d || a({}, t), d.type = s.event || d.type, p.push(d), g ? Zs(this, u, t, "series") : l && Zs(this, u, t, l.main, l.sub);
    }, this), "none" === u || g || l || (this[P_] ? (Hs(this), E_.update.call(this, t), this[P_] = false) : E_[u].call(this, t)), d = c ? { type: s.event || n, escapeConnect: i, batch: p } : p[0], this[L_] = false, !e && this._messageCenter.trigger(d.type, d);
  }function Us(t) {
    for (var e = this._pendingActions; e.length;) {
      var n = e.shift();js.call(this, n, t);
    }
  }function Ys(t) {
    !t && this.trigger("updated");
  }function qs(t, e) {
    t.on("rendered", function () {
      e.trigger("rendered"), !t.animation.isFinished() || e[P_] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
    });
  }function $s(t, e, n, i) {
    function r(t) {
      var e = "_ec_" + t.id + "_" + t.type,
          r = s[e];if (!r) {
        var h = I_(t.type);r = new (a ? By.getClass(h.main, h.sub) : os.getClass(h.sub))(), r.init(n, u), s[e] = r, o.push(r), l.add(r.group);
      }t.__viewId = r.__id = e, r.__alive = true, r.__model = t, r.group.__ecComponentInfo = { mainType: t.mainType, index: t.componentIndex }, !a && i.prepareView(r, t, n, u);
    }for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, u = t._api, h = 0; h < o.length; h++) o[h].__alive = false;a ? n.eachComponent(function (t, e) {
      "series" !== t && r(e);
    }) : n.eachSeries(r);for (var h = 0; h < o.length;) {
      var c = o[h];c.__alive ? h++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), o.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);
    }
  }function Ks(t) {
    t.clearColorPalette(), t.eachSeries(function (t) {
      t.clearColorPalette();
    });
  }function Qs(t, e, n, i) {
    Js(t, e, n, i), b_(t._chartsViews, function (t) {
      t.__alive = false;
    }), tl(t, e, n, i), b_(t._chartsViews, function (t) {
      t.__alive || t.remove(e, n);
    });
  }function Js(t, e, n, i, r) {
    b_(r || t._componentsViews, function (t) {
      var r = t.__model;t.render(r, e, n, i), rl(r, t);
    });
  }function tl(t, e, n, i, r) {
    var a,
        o = t._scheduler;e.eachSeries(function (e) {
      var n = t._chartsMap[e.__viewId];n.__alive = true;var s = n.renderTask;o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), rl(e, n), il(e, n);
    }), o.unfinished |= a, nl(t, e), $y(t._zr.dom, e);
  }function el(t, e) {
    b_(G_, function (n) {
      n(t, e);
    });
  }function nl(t, e) {
    var n = t._zr,
        i = n.storage,
        r = 0;i.traverse(function (t) {
      r++;
    }), r > e.get("hoverLayerThreshold") && !bf.node && e.eachSeries(function (e) {
      if (!e.preventUsingHoverLayer) {
        var n = t._chartsMap[e.__viewId];n.__alive && n.group.traverse(function (t) {
          t.useHoverLayer = true;
        });
      }
    });
  }function il(t, e) {
    var n = t.get("blendMode") || null;e.group.traverse(function (t) {
      t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
        t.setStyle("blend", n);
      });
    });
  }function rl(t, e) {
    var n = t.get("z"),
        i = t.get("zlevel");e.group.traverse(function (t) {
      "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i));
    });
  }function al(t) {
    var e = t._coordSysMgr;return a(new _o(t), { getCoordinateSystems: v(e.getCoordinateSystems, e), getComponentByElement: function (e) {
        for (; e;) {
          var n = e.__ecComponentInfo;if (null != n) return t._model.getComponent(n.mainType, n.index);e = e.parent;
        }
      } });
  }function ol() {
    this.eventInfo;
  }function sl(t) {
    function e(t, e) {
      for (var i = 0; i < t.length; i++) {
        t[i][n] = e;
      }
    }var n = "__connectUpdateStatus";b_(B_, function (i, r) {
      t._messageCenter.on(r, function (i) {
        if (j_[t.group] && 0 !== t[n]) {
          if (i && i.escapeConnect) return;var r = t.makeActionFromEvent(i),
              a = [];b_(X_, function (e) {
            e !== t && e.group === t.group && a.push(e);
          }), e(a, 0), b_(a, function (t) {
            1 !== t[n] && t.dispatchAction(r);
          }), e(a, 2);
        }
      });
    });
  }function ll(t, e, n) {
    var i = dl(t);if (i) return i;var r = new Gs(t, e, n);return r.id = "ec_" + U_++, X_[r.id] = r, hi(t, q_, r.id), sl(r), r;
  }function ul(t) {
    if (_(t)) {
      var e = t;t = null, b_(e, function (e) {
        null != e.group && (t = e.group);
      }), t = t || "g_" + Y_++, b_(e, function (e) {
        e.group = t;
      });
    }return j_[t] = true, t;
  }function hl(t) {
    j_[t] = false;
  }function cl(t) {
    "string" == typeof t ? t = X_[t] : t instanceof Gs || (t = dl(t)), t instanceof Gs && !t.isDisposed() && t.dispose();
  }function dl(t) {
    return X_[ci(t, q_)];
  }function fl(t) {
    return X_[t];
  }function pl(t, e) {
    H_[t] = e;
  }function gl(t) {
    V_.push(t);
  }function ml(t, e) {
    Sl(F_, t, e, D_);
  }function vl(t) {
    G_.push(t);
  }function yl(t, e, n) {
    "function" == typeof e && (n = e, e = "");var i = M_(t) ? t.type : [t, t = { event: e }][0];t.event = (t.event || i).toLowerCase(), e = t.event, w_(O_.test(i) && O_.test(e)), R_[i] || (R_[i] = { action: n, actionInfo: t }), B_[e] = i;
  }function _l(t, e) {
    xo.register(t, e);
  }function xl(t) {
    var e = xo.get(t);if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice();
  }function wl(t, e) {
    Sl(W_, t, e, T_, "layout");
  }function bl(t, e) {
    Sl(W_, t, e, C_, "visual");
  }function Sl(t, e, n, i, r) {
    (S_(e) || M_(e)) && (n = e, e = i);var a = ps.wrapStageHandler(n, r);return a.__prio = e, a.__raw = n, t.push(a), a;
  }function Ml(t, e) {
    Z_[t] = e;
  }function Il(t) {
    return $v.extend(t);
  }function Al(t) {
    return By.extend(t);
  }function Dl(t) {
    return Ry.extend(t);
  }function Tl(t) {
    return os.extend(t);
  }function Cl(t) {
    e("createCanvas", t);
  }function kl(t, e, n) {
    __.registerMap(t, e, n);
  }function Ll(t) {
    var e = __.retrieveMap(t);return e && e[0] && { geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas };
  }function Pl(t) {
    return t;
  }function Ol(t, e, n, i, r) {
    this._old = t, this._new = e, this._oldKeyGetter = n || Pl, this._newKeyGetter = i || Pl, this.context = r;
  }function Nl(t, e, n, i, r) {
    for (var a = 0; a < t.length; a++) {
      var o = "_ec_" + r[i](t[a], a),
          s = e[o];null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a));
    }
  }function El(t) {
    var e = {},
        n = e.encode = {},
        i = R(),
        r = [],
        a = [],
        o = e.userOutput = { dimensionNames: t.dimensions.slice(), encode: {} };d(t.dimensions, function (e) {
      var s = t.getDimensionInfo(e),
          l = s.coordDim;if (l) {
        var u = s.coordDimIndex;zl(n, l)[u] = e, s.isExtraCoord || (i.set(l, 1), Bl(s.type) && (r[0] = e), zl(o.encode, l)[u] = s.index), s.defaultTooltip && a.push(e);
      }Q_.each(function (t, e) {
        var i = zl(n, e),
            r = s.otherDims[e];null != r && false !== r && (i[r] = s.name);
      });
    });var s = [],
        l = {};i.each(function (t, e) {
      var i = n[e];l[e] = i[0], s = s.concat(i);
    }), e.dataDimsOnCoord = s, e.encodeFirstDimNotExtra = l;var u = n.label;u && u.length && (r = u.slice());var h = n.tooltip;return h && h.length ? a = h.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e;
  }function zl(t, e) {
    return t.hasOwnProperty(e) || (t[e] = []), t[e];
  }function Rl(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
  }function Bl(t) {
    return !("ordinal" === t || "time" === t);
  }function Fl(t) {
    null != t && a(this, t), this.otherDims = {};
  }function Vl(t) {
    return t._rawCount > 65535 ? ix : ax;
  }function Gl(t) {
    var e = t.constructor;return e === Array ? t.slice() : new e(t);
  }function Wl(t, e) {
    d(ox.concat(e.__wrappedMethods || []), function (n) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }), t.__wrappedMethods = e.__wrappedMethods, d(sx, function (i) {
      t[i] = n(e[i]);
    }), t._calculationInfo = a(e._calculationInfo);
  }function Hl(t, e, n, i, r) {
    var a = nx[e.type],
        o = i - 1,
        s = e.name,
        l = t[s][o];if (l && l.length < n) {
      for (var u = new a(Math.min(r - o * n, n)), h = 0; h < l.length; h++) u[h] = l[h];t[s][o] = u;
    }for (var c = i * n; c < r; c += n) t[s].push(new a(Math.min(r - c, n)));
  }function Zl(t) {
    var e = t._invertedIndicesMap;d(e, function (n, i) {
      var r = t._dimensionInfos[i],
          a = r.ordinalMeta;if (a) {
        n = e[i] = new rx(a.categories.length);for (var o = 0; o < n.length; o++) n[o] = tx;for (var o = 0; o < t._count; o++) n[t.get(i, o)] = o;
      }
    });
  }function Xl(t, e, n) {
    var i;if (null != e) {
      var r = t._chunkSize,
          a = Math.floor(n / r),
          o = n % r,
          s = t.dimensions[e],
          l = t._storage[s][a];if (l) {
        i = l[o];var u = t._dimensionInfos[s].ordinalMeta;u && u.categories.length && (i = u.categories[i]);
      }
    }return i;
  }function jl(t) {
    return t;
  }function Ul(t) {
    return t < this._count && t >= 0 ? this._indices[t] : -1;
  }function Yl(t, e) {
    var n = t._idList[e];return null == n && (n = Xl(t, t._idDimIdx, e)), null == n && (n = ex + e), n;
  }function ql(t) {
    return _(t) || (t = [t]), t;
  }function $l(t, e) {
    var n = t.dimensions,
        i = new lx(f(n, t.getDimensionInfo, t), t.hostModel);Wl(i, t);for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
      var s = n[o];a[s] && (l(e, s) >= 0 ? (r[s] = Kl(a[s]), i._rawExtent[s] = Ql(), i._extent[s] = null) : r[s] = a[s]);
    }return i;
  }function Kl(t) {
    for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = Gl(t[n]);return e;
  }function Ql() {
    return [Infinity, -Infinity];
  }function Jl(t, e, i) {
    function r(t, e, n) {
      null != Q_.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, u.set(e, true));
    }Ka.isInstance(e) || (e = Ka.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();for (var s = (i.dimsDef || []).slice(), l = R(), u = R(), h = [], c = tu(e, t, s, i.dimCount), f = 0; f < c; f++) {
      var p = s[f] = a({}, b(s[f]) ? s[f] : { name: s[f] }),
          g = p.name,
          m = h[f] = new Fl();null != g && null == l.get(g) && (m.name = m.displayName = g, l.set(g, f)), null != p.type && (m.type = p.type), null != p.displayName && (m.displayName = p.displayName);
    }var v = i.encodeDef;!v && i.encodeDefaulter && (v = i.encodeDefaulter(e, c)), v = R(v), v.each(function (t, e) {
      if (t = Qn(t).slice(), 1 === t.length && !w(t[0]) && t[0] < 0) return undefined;var n = v.set(e, []);d(t, function (t, i) {
        w(t) && (t = l.get(t)), null != t && t < c && (n[i] = t, r(h[t], e, i));
      });
    });var y = 0;d(t, function (t, e) {
      var i, t, a, s;if (w(t)) i = t, t = {};else {
        i = t.name;var l = t.ordinalMeta;t.ordinalMeta = null, t = n(t), t.ordinalMeta = l, a = t.dimsDef, s = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;
      }var u = v.get(i);if (false !== u) {
        var u = Qn(u);if (!u.length) for (var c = 0; c < (a && a.length || 1); c++) {
          for (; y < h.length && null != h[y].coordDim;) y++;y < h.length && u.push(y++);
        }d(u, function (e, n) {
          var l = h[e];if (r(o(l, t), i, n), null == l.name && a) {
            var u = a[n];!b(u) && (u = { name: u }), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip;
          }s && o(l.otherDims, s);
        });
      }
    });var _ = i.generateCoord,
        x = i.generateCoordCount,
        S = null != x;x = _ ? x || 1 : 0;for (var M = _ || "value", I = 0; I < c; I++) {
      var m = h[I] = h[I] || new Fl();null == m.coordDim && (m.coordDim = eu(M, u, S), m.coordDimIndex = 0, (!_ || x <= 0) && (m.isExtraCoord = true), x--), null == m.name && (m.name = eu(m.coordDim, l)), null != m.type || uo(e, I, m.name) !== uy.Must && (!m.isExtraCoord || null == m.otherDims.itemName && null == m.otherDims.seriesName) || (m.type = "ordinal");
    }return h;
  }function tu(t, e, n, i) {
    var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);return d(e, function (t) {
      var e = t.dimsDef;e && (r = Math.max(r, e.length));
    }), r;
  }function eu(t, e, n) {
    if (n || null != e.get(t)) {
      for (var i = 0; null != e.get(t + i);) i++;t += i;
    }return e.set(t, true), t;
  }function nu(t) {
    this.coordSysName = t, this.coordSysDims = [], this.axisMap = R(), this.categoryAxisMap = R(), this.firstCategoryDimIndex = null;
  }function iu(t) {
    var e = t.get("coordinateSystem"),
        n = new nu(e),
        i = dx[e];if (i) return i(t, n, n.axisMap, n.categoryAxisMap), n;
  }function ru(t) {
    return "category" === t.get("type");
  }function au(t, e, n) {
    n = n || {};var i,
        r,
        a,
        o,
        s = n.byIndex,
        l = n.stackedCoordDimension,
        u = !(!t || !t.get("stack"));if (d(e, function (t, n) {
      w(t) && (e[n] = t = { name: t }), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
    }), !r || s || i || (s = true), r) {
      a = "__\0ecstackresult", o = "__\0ecstackedover", i && (i.createInvertedIndices = true);var h = r.coordDim,
          c = r.type,
          f = 0;d(e, function (t) {
        t.coordDim === h && f++;
      }), e.push({ name: a, coordDim: h, coordDimIndex: f, type: c, isExtraCoord: true, isCalculationCoord: true }), f++, e.push({ name: o, coordDim: o, coordDimIndex: f, type: c, isExtraCoord: true, isCalculationCoord: true });
    }return { stackedDimension: r && r.name, stackedByDimension: i && i.name, isStackedByIndex: s, stackedOverDimension: o, stackResultDimension: a };
  }function ou(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension");
  }function su(t, e) {
    return ou(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
  }function lu(t, e, n) {
    n = n || {}, Ka.isInstance(t) || (t = Ka.seriesDataToSource(t));var i,
        r = e.get("coordinateSystem"),
        a = xo.get(r),
        o = iu(e);o && (i = f(o.coordSysDims, function (t) {
      var e = { name: t },
          n = o.axisMap.get(t);if (n) {
        var i = n.get("type");e.type = Rl(i);
      }return e;
    })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);var s,
        l,
        u = cx(t, { coordDimensions: i, generateCoord: n.generateCoord, encodeDefaulter: n.useEncodeDefaulter ? y(oo, i, e) : null });o && d(u, function (t, e) {
      var n = t.coordDim,
          i = o.categoryAxisMap.get(n);i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = true);
    }), l || null == s || (u[s].otherDims.itemName = 0);var h = au(e, u),
        c = new lx(u, e);c.setCalculationInfo(h);var p = null != s && uu(t) ? function (t, e, n, i) {
      return i === s ? n : this.defaultDimValueGetter(t, e, n, i);
    } : null;return c.hasItemOption = false, c.initData(t, null, p), c;
  }function uu(t) {
    if (t.sourceFormat === ey) {
      var e = hu(t.data || []);return null != e && !_(ti(e));
    }
  }function hu(t) {
    for (var e = 0; e < t.length && null == t[e];) e++;return t[e];
  }function cu(t) {
    this._setting = t || {}, this._extent = [Infinity, -Infinity], this._interval = 0, this.init && this.init.apply(this, arguments);
  }function du(t) {
    this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map;
  }function fu(t) {
    return t._map || (t._map = R(t.categories));
  }function pu(t) {
    return b(t) && null != t.value ? t.value : t + "";
  }function gu(t, e, n, i) {
    var r = {},
        a = t[1] - t[0],
        o = r.interval = Ca(a / e, true);null != n && o < n && (o = r.interval = n), null != i && o > i && (o = r.interval = i);var s = r.intervalPrecision = mu(o);return yu(r.niceTickExtent = [mx(Math.ceil(t[0] / o) * o, s), mx(Math.floor(t[1] / o) * o, s)], t), r;
  }function mu(t) {
    return wa(t) + 2;
  }function vu(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
  }function yu(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), vu(t, 0, e), vu(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
  }function _u(t) {
    return t.get("stack") || _x + t.seriesIndex;
  }function xu(t) {
    return t.dim + t.index;
  }function wu(t, e) {
    var n = [];return e.eachSeriesByType(t, function (t) {
      Au(t) && !Du(t) && n.push(t);
    }), n;
  }function bu(t) {
    var e = {};d(t, function (t) {
      var n = t.coordinateSystem,
          i = n.getBaseAxis();if ("time" === i.type || "value" === i.type) for (var r = t.getData(), a = i.dim + "_" + i.index, o = r.mapDimension(i.dim), s = 0, l = r.count(); s < l; ++s) {
        var u = r.get(o, s);e[a] ? e[a].push(u) : e[a] = [u];
      }
    });var n = [];for (var i in e) if (e.hasOwnProperty(i)) {
      var r = e[i];if (r) {
        r.sort(function (t, e) {
          return t - e;
        });for (var a = null, o = 1; o < r.length; ++o) {
          var s = r[o] - r[o - 1];s > 0 && (a = null === a ? s : Math.min(a, s));
        }n[i] = a;
      }
    }return n;
  }function Su(t) {
    var e = bu(t),
        n = [];return d(t, function (t) {
      var i,
          r = t.coordinateSystem,
          a = r.getBaseAxis(),
          o = a.getExtent();if ("category" === a.type) i = a.getBandWidth();else if ("value" === a.type || "time" === a.type) {
        var s = a.dim + "_" + a.index,
            l = e[s],
            u = Math.abs(o[1] - o[0]),
            h = a.scale.getExtent(),
            c = Math.abs(h[1] - h[0]);i = l ? u / c * l : u;
      } else {
        var d = t.getData();i = Math.abs(o[1] - o[0]) / d.count();
      }var f = va(t.get("barWidth"), i),
          p = va(t.get("barMaxWidth"), i),
          g = va(t.get("barMinWidth") || 1, i),
          m = t.get("barGap"),
          v = t.get("barCategoryGap");n.push({ bandWidth: i, barWidth: f, barMaxWidth: p, barMinWidth: g, barGap: m, barCategoryGap: v, axisKey: xu(a), stackId: _u(t) });
    }), Mu(n);
  }function Mu(t) {
    var e = {};d(t, function (t, n) {
      var i = t.axisKey,
          r = t.bandWidth,
          a = e[i] || { bandWidth: r, remainedWidth: r, autoWidthCount: 0, categoryGap: "20%", gap: "30%", stacks: {} },
          o = a.stacks;e[i] = a;var s = t.stackId;o[s] || a.autoWidthCount++, o[s] = o[s] || { width: 0, maxWidth: 0 };var l = t.barWidth;l && !o[s].width && (o[s].width = l, l = Math.min(a.remainedWidth, l), a.remainedWidth -= l);var u = t.barMaxWidth;u && (o[s].maxWidth = u);var h = t.barMinWidth;h && (o[s].minWidth = h);var c = t.barGap;null != c && (a.gap = c);var d = t.barCategoryGap;null != d && (a.categoryGap = d);
    });var n = {};return d(e, function (t, e) {
      n[e] = {};var i = t.stacks,
          r = t.bandWidth,
          a = va(t.categoryGap, r),
          o = va(t.gap, 1),
          s = t.remainedWidth,
          l = t.autoWidthCount,
          u = (s - a) / (l + (l - 1) * o);u = Math.max(u, 0), d(i, function (t) {
        var e = t.maxWidth,
            n = t.minWidth;if (t.width) {
          var i = t.width;e && (i = Math.min(i, e)), n && (i = Math.max(i, n)), t.width = i, s -= i + o * i, l--;
        } else {
          var i = u;e && e < i && (i = Math.min(e, s)), n && n > i && (i = n), i !== u && (t.width = i, s -= i + o * i, l--);
        }
      }), u = (s - a) / (l + (l - 1) * o), u = Math.max(u, 0);var h,
          c = 0;d(i, function (t, e) {
        t.width || (t.width = u), h = t, c += t.width * (1 + o);
      }), h && (c -= h.width * o);var f = -c / 2;d(i, function (t, i) {
        n[e][i] = n[e][i] || { bandWidth: r, offset: f, width: t.width }, f += t.width * (1 + o);
      });
    }), n;
  }function Iu(t, e, n) {
    if (t && e) {
      var i = t[xu(e)];return null != i && null != n && (i = i[_u(n)]), i;
    }
  }function Au(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
  }function Du(t) {
    return t.pipelineContext && t.pipelineContext.large;
  }function Tu(t, e, n) {
    return e.toGlobalCoord(e.dataToCoord("log" === e.type ? 1 : 0));
  }function Cu(t, e) {
    return Lx(t, kx(e));
  }function ku(t, e) {
    var n,
        i,
        r,
        a = t.type,
        o = e.getMin(),
        s = e.getMax(),
        l = null != o,
        u = null != s,
        h = t.getExtent();"ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), _(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = va(i[0], 1), i[1] = va(i[1], 1), r = h[1] - h[0] || Math.abs(h[0])), null == o && (o = "ordinal" === a ? n ? 0 : NaN : h[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : NaN : h[1] + i[1] * r), "dataMin" === o ? o = h[0] : "function" == typeof o && (o = o({ min: h[0], max: h[1] })), "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({ min: h[0], max: h[1] })), (null == o || !isFinite(o)) && (o = NaN), (null == s || !isFinite(s)) && (s = NaN), t.setBlank(A(o) || A(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), o < 0 && s < 0 && !u && (s = 0));var c = e.ecModel;if (c && "time" === a) {
      var f,
          p = wu("bar", c);if (d(p, function (t) {
        f |= t.getBaseAxis() === e.axis;
      }), f) {
        var g = Su(p),
            m = Lu(o, s, e, g);o = m.min, s = m.max;
      }
    }return [o, s];
  }function Lu(t, e, n, i) {
    var r = n.axis.getExtent(),
        a = r[1] - r[0],
        o = Iu(i, n.axis);if (undefined === o) return { min: t, max: e };var s = Infinity;d(o, function (t) {
      s = Math.min(t.offset, s);
    });var l = -Infinity;d(o, function (t) {
      l = Math.max(t.offset + t.width, l);
    }), s = Math.abs(s), l = Math.abs(l);var u = s + l,
        h = e - t,
        c = 1 - (s + l) / a,
        f = h / c - h;return e += f * (l / u), t -= f * (s / u), { min: t, max: e };
  }function Pu(t, e) {
    var n = ku(t, e),
        i = null != e.getMin(),
        r = null != e.getMax(),
        a = e.get("splitNumber");"log" === t.type && (t.base = e.get("logBase"));var o = t.type;t.setExtent(n[0], n[1]), t.niceExtent({ splitNumber: a, fixMin: i, fixMax: r, minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null, maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null });var s = e.get("interval");null != s && t.setInterval && t.setInterval(s);
  }function Ou(t, e) {
    if (e = e || t.get("type")) switch (e) {case "category":
        return new gx(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [Infinity, -Infinity]);case "value":
        return new yx();default:
        return (cu.getClass(e) || yx).create(t);}
  }function Nu(t) {
    var e = t.scale.getExtent(),
        n = e[0],
        i = e[1];return !(n > 0 && i > 0 || n < 0 && i < 0);
  }function Eu(t) {
    var e = t.getLabelModel().get("formatter"),
        n = "category" === t.type ? t.scale.getExtent()[0] : null;return "string" == typeof e ? e = function (e) {
      return function (n) {
        return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "");
      };
    }(e) : "function" == typeof e ? function (i, r) {
      return null != n && (r = i - n), e(zu(t, i), r);
    } : function (e) {
      return t.scale.getLabel(e);
    };
  }function zu(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e;
  }function Ru(t) {
    var e = t.model,
        n = t.scale;if (e.get("axisLabel.show") && !n.isBlank()) {
      var i,
          r,
          a = "category" === t.type,
          o = n.getExtent();a ? r = n.count() : (i = n.getTicks(), r = i.length);var s,
          l = t.getLabelModel(),
          u = Eu(t),
          h = 1;r > 40 && (h = Math.ceil(r / 40));for (var c = 0; c < r; c += h) {
        var d = i ? i[c] : o[0] + c,
            f = u(d),
            p = l.getTextRect(f),
            g = Bu(p, l.get("rotate") || 0);s ? s.union(g) : s = g;
      }return s;
    }
  }function Bu(t, e) {
    var n = e * Math.PI / 180,
        i = t.plain(),
        r = i.width,
        a = i.height,
        o = r * Math.cos(n) + a * Math.sin(n),
        s = r * Math.sin(n) + a * Math.cos(n);return new Me(i.x, i.y, o, s);
  }function Fu(t) {
    var e = t.get("interval");return null == e ? "auto" : e;
  }function Vu(t) {
    return "category" === t.type && 0 === Fu(t.getLabelModel());
  }function Gu(t, e) {
    if ("image" !== this.type) {
      var n = this.style,
          i = this.shape;i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(false);
    }
  }function Wu(t, e, n, i, r, a, o) {
    var s = 0 === t.indexOf("empty");s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));var l;return l = 0 === t.indexOf("image://") ? yr(t.slice(8), new Me(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? vr(t.slice(7), {}, new Me(e, n, i, r), o ? "center" : "cover") : new Xx({ shape: { symbolType: t, x: e, y: n, width: i, height: r } }), l.__isEmptyBrush = s, l.setColor = Gu, l.setColor(a), l;
  }function Hu(t) {
    return lu(t.getSource(), t);
  }function Zu(t, e) {
    var n = e;ca.isInstance(e) || (n = new ca(e), h(n, Rx));var i = Ou(n);return i.setExtent(t[0], t[1]), Pu(i, n), i;
  }function Xu(t) {
    h(t, Rx);
  }function ju(t, e) {
    return Math.abs(t - e) < Yx;
  }function Uu(t, e, n) {
    var i = 0,
        r = t[0];if (!r) return false;for (var a = 1; a < t.length; a++) {
      var o = t[a];i += Zi(r[0], r[1], o[0], o[1], e, n), r = o;
    }var s = t[0];return ju(r[0], s[0]) && ju(r[1], s[1]) || (i += Zi(r[0], r[1], s[0], s[1], e, n)), 0 !== i;
  }function Yu(t, e, n) {
    if (this.name = t, this.geometries = e, n) n = [n[0], n[1]];else {
      var i = this.getBoundingRect();n = [i.x + i.width / 2, i.y + i.height / 2];
    }this.center = n;
  }function qu(t) {
    if (!t.UTF8Encoding) return t;var e = t.UTF8Scale;null == e && (e = 1024);for (var n = t.features, i = 0; i < n.length; i++) for (var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
      var u = o[l];if ("Polygon" === a.type) o[l] = $u(u, s[l], e);else if ("MultiPolygon" === a.type) for (var h = 0; h < u.length; h++) {
        var c = u[h];u[h] = $u(c, s[l][h], e);
      }
    }return t.UTF8Encoding = false, t;
  }function $u(t, e, n) {
    for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
      var s = t.charCodeAt(o) - 64,
          l = t.charCodeAt(o + 1) - 64;s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, i.push([s / n, l / n]);
    }return i;
  }function Ku(t) {
    return "category" === t.type ? Ju(t) : nh(t);
  }function Qu(t, e) {
    return "category" === t.type ? eh(t, e) : { ticks: t.scale.getTicks() };
  }function Ju(t) {
    var e = t.getLabelModel(),
        n = th(t, e);return !e.get("show") || t.scale.isBlank() ? { labels: [], labelCategoryInterval: n.labelCategoryInterval } : n;
  }function th(t, e) {
    var n = ih(t, "labels"),
        i = Fu(e),
        r = rh(n, i);if (r) return r;var a, o;return x(i) ? a = hh(t, i) : (o = "auto" === i ? oh(t) : i, a = uh(t, o)), ah(n, i, { labels: a, labelCategoryInterval: o });
  }function eh(t, e) {
    var n = ih(t, "ticks"),
        i = Fu(e),
        r = rh(n, i);if (r) return r;var a, o;if (e.get("show") && !t.scale.isBlank() || (a = []), x(i)) a = hh(t, i, true);else if ("auto" === i) {
      var s = th(t, t.getLabelModel());o = s.labelCategoryInterval, a = f(s.labels, function (t) {
        return t.tickValue;
      });
    } else o = i, a = uh(t, o, true);return ah(n, i, { ticks: a, tickCategoryInterval: o });
  }function nh(t) {
    var e = t.scale.getTicks(),
        n = Eu(t);return { labels: f(e, function (e, i) {
        return { formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e };
      }) };
  }function ih(t, e) {
    return $x(t)[e] || ($x(t)[e] = []);
  }function rh(t, e) {
    for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value;
  }function ah(t, e, n) {
    return t.push({ key: e, value: n }), n;
  }function oh(t) {
    var e = $x(t).autoInterval;return null != e ? e : $x(t).autoInterval = t.calculateCategoryInterval();
  }function sh(t) {
    var e = lh(t),
        n = Eu(t),
        i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
        r = t.scale,
        a = r.getExtent(),
        o = r.count();if (a[1] - a[0] < 1) return 0;var s = 1;o > 40 && (s = Math.max(1, Math.floor(o / 40)));for (var l = a[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
      var p = 0,
          g = 0,
          m = He(n(l), e.font, "center", "top");p = 1.3 * m.width, g = 1.3 * m.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7);
    }var v = d / h,
        y = f / c;isNaN(v) && (v = Infinity), isNaN(y) && (y = Infinity);var _ = Math.max(0, Math.floor(Math.min(v, y))),
        x = $x(t.model),
        w = t.getExtent(),
        b = x.lastAutoInterval,
        S = x.lastTickCount;return null != b && null != S && Math.abs(b - _) <= 1 && Math.abs(S - o) <= 1 && b > _ && x.axisExtend0 === w[0] && x.axisExtend1 === w[1] ? _ = b : (x.lastTickCount = o, x.lastAutoInterval = _, x.axisExtend0 = w[0], x.axisExtend1 = w[1]), _;
  }function lh(t) {
    var e = t.getLabelModel();return { axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0, labelRotate: e.get("rotate") || 0, font: e.getFont() };
  }function uh(t, e, n) {
    function i(t) {
      l.push(n ? t : { formattedLabel: r(t), rawLabel: a.getLabel(t), tickValue: t });
    }var r = Eu(t),
        a = t.scale,
        o = a.getExtent(),
        s = t.getLabelModel(),
        l = [],
        u = Math.max((e || 0) + 1, 1),
        h = o[0],
        c = a.count();0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));var d = Vu(t),
        f = s.get("showMinLabel") || d,
        p = s.get("showMaxLabel") || d;f && h !== o[0] && i(o[0]);for (var g = h; g <= o[1]; g += u) i(g);return p && g - u !== o[1] && i(o[1]), l;
  }function hh(t, e, n) {
    var i = t.scale,
        r = Eu(t),
        a = [];return d(i.getTicks(), function (t) {
      var o = i.getLabel(t);e(t, o) && a.push(n ? t : { formattedLabel: r(t), rawLabel: o, tickValue: t });
    }), a;
  }function ch(t, e) {
    var n = t[1] - t[0],
        i = e,
        r = n / i / 2;t[0] += r, t[1] -= r;
  }function dh(t, e, n, i) {
    function r(t, e) {
      return t = ya(t), e = ya(e), c ? t > e : t < e;
    }var a = e.length;if (t.onBand && !n && a) {
      var o,
          s,
          l = t.getExtent();if (1 === a) e[0].coord = l[0], o = e[1] = { coord: l[0] };else {
        var u = e[a - 1].tickValue - e[0].tickValue,
            h = (e[a - 1].coord - e[0].coord) / u;d(e, function (t) {
          t.coord -= h / 2;
        });s = 1 + t.scale.getExtent()[1] - e[a - 1].tickValue, o = { coord: e[a - 1].coord + h * s }, e.push(o);
      }var c = l[0] > l[1];r(e[0].coord, l[0]) && (i ? e[0].coord = l[0] : e.shift()), i && r(l[0], e[0].coord) && e.unshift({ coord: l[0] }), r(l[1], o.coord) && (i ? o.coord = l[1] : e.pop()), i && r(o.coord, l[1]) && e.push({ coord: l[1] });
    }
  }function fh(t, e) {
    var n = t.mapDimension("defaultedLabel", true),
        i = n.length;if (1 === i) return jo(t, e, n[0]);if (i) {
      for (var r = [], a = 0; a < n.length; a++) {
        var o = jo(t, e, n[a]);r.push(o);
      }return r.join(" ");
    }
  }function ph(t, e, n) {
    Np.call(this), this.updateData(t, e, n);
  }function gh(t) {
    return [t[0] / 2, t[1] / 2];
  }function mh(t, e) {
    this.parent.drift(t, e);
  }function vh(t, e) {
    if (!this.incremental && !this.useHoverLayer) if ("emphasis" === e) {
      var n = this.__symbolOriginalScale,
          i = n[1] / n[0],
          r = { scale: [Math.max(1.1 * n[0], n[0] + 3), Math.max(1.1 * n[1], n[1] + 3 * i)] };this.animateTo(r, 400, "elasticOut");
    } else "normal" === e && this.animateTo({ scale: this.__symbolOriginalScale }, 400, "elasticOut");
  }function yh(t) {
    this.group = new Np(), this._symbolCtor = t || ph;
  }function _h(t, e, n, i) {
    return e && !isNaN(e[0]) && !isNaN(e[1]) && !(i.isIgnore && i.isIgnore(n)) && !(i.clipShape && !i.clipShape.contain(e[0], e[1])) && "none" !== t.getItemVisual(n, "symbol");
  }function xh(t) {
    return null == t || b(t) || (t = { isIgnore: t }), t || {};
  }function wh(t) {
    var e = t.hostModel;return { itemStyle: e.getModel("itemStyle").getItemStyle(["color"]), hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(), symbolRotate: e.get("symbolRotate"), symbolOffset: e.get("symbolOffset"), hoverAnimation: e.get("hoverAnimation"), labelModel: e.getModel("label"), hoverLabelModel: e.getModel("emphasis.label"), cursorStyle: e.get("cursor") };
  }function bh(t, e, n) {
    var i,
        r = t.getBaseAxis(),
        a = t.getOtherAxis(r),
        o = Sh(a, n),
        s = r.dim,
        l = a.dim,
        u = e.mapDimension(l),
        h = e.mapDimension(s),
        c = "x" === l || "radius" === l ? 1 : 0,
        d = f(t.dimensions, function (t) {
      return e.mapDimension(t);
    }),
        p = e.getCalculationInfo("stackResultDimension");return (i |= ou(e, d[0])) && (d[0] = p), (i |= ou(e, d[1])) && (d[1] = p), { dataDimsForPoint: d, valueStart: o, valueAxisDim: l, baseAxisDim: s, stacked: !!i, valueDim: u, baseDim: h, baseDataOffset: c, stackedOverDimension: e.getCalculationInfo("stackedOverDimension") };
  }function Sh(t, e) {
    var n = 0,
        i = t.scale.getExtent();return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n;
  }function Mh(t, e, n, i) {
    var r = NaN;t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);var a = t.baseDataOffset,
        o = [];return o[a] = n.get(t.baseDim, i), o[1 - a] = r, e.dataToPoint(o);
  }function Ih(t, e) {
    var n = [];return e.diff(t).add(function (t) {
      n.push({ cmd: "+", idx: t });
    }).update(function (t, e) {
      n.push({ cmd: "=", idx: e, idx1: t });
    }).remove(function (t) {
      n.push({ cmd: "-", idx: t });
    }).execute(), n;
  }function Ah(t) {
    return isNaN(t[0]) || isNaN(t[1]);
  }function Dh(t, e, n, i, r, a, o, s, l, u, h) {
    return "none" !== u && u ? Th.apply(this, arguments) : Ch.apply(this, arguments);
  }function Th(t, e, n, i, r, a, o, s, l, u, h) {
    for (var c = 0, d = n, f = 0; f < i; f++) {
      var p = e[d];if (d >= r || d < 0) break;if (Ah(p)) {
        if (h) {
          d += a;continue;
        }break;
      }if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);else if (l > 0) {
        var g = e[c],
            m = "y" === u ? 1 : 0,
            v = (p[m] - g[m]) * l;fw(gw, g), gw[m] = g[m] + v, fw(mw, p), mw[m] = p[m] - v, t.bezierCurveTo(gw[0], gw[1], mw[0], mw[1], p[0], p[1]);
      } else t.lineTo(p[0], p[1]);c = d, d += a;
    }return f;
  }function Ch(t, e, n, i, r, a, o, s, l, u, h) {
    for (var c = 0, d = n, f = 0; f < i; f++) {
      var p = e[d];if (d >= r || d < 0) break;if (Ah(p)) {
        if (h) {
          d += a;continue;
        }break;
      }if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), fw(gw, p);else if (l > 0) {
        var g = d + a,
            m = e[g];if (h) for (; m && Ah(e[g]);) g += a, m = e[g];var v = .5,
            y = e[c],
            m = e[g];if (!m || Ah(m)) fw(mw, p);else {
          Ah(m) && !h && (m = p), j(pw, m, y);var _, x;if ("x" === u || "y" === u) {
            var w = "x" === u ? 0 : 1;_ = Math.abs(p[w] - y[w]), x = Math.abs(p[w] - m[w]);
          } else _ = Vf(p, y), x = Vf(p, m);v = x / (x + _), dw(mw, p, pw, -l * (1 - v));
        }hw(gw, gw, s), cw(gw, gw, o), hw(mw, mw, s), cw(mw, mw, o), t.bezierCurveTo(gw[0], gw[1], mw[0], mw[1], p[0], p[1]), dw(gw, p, pw, l * v);
      } else t.lineTo(p[0], p[1]);c = d, d += a;
    }return f;
  }function kh(t, e) {
    var n = [Infinity, Infinity],
        i = [-Infinity, -Infinity];if (e) for (var r = 0; r < t.length; r++) {
      var a = t[r];a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), a[1] > i[1] && (i[1] = a[1]);
    }return { min: e ? n : i, max: e ? i : n };
  }function Lh(t, e, n) {
    var i = t.getArea(),
        r = t.getBaseAxis().isHorizontal(),
        a = i.x,
        o = i.y,
        s = i.width,
        l = i.height,
        u = n.get("lineStyle.width") || 2;a -= u / 2, o -= u / 2, s += u, l += u;var h = new ev({ shape: { x: a, y: o, width: s, height: l } });return e && (h.shape[r ? "width" : "height"] = 0, Jr(h, { shape: { width: s, height: l } }, n)), h;
  }function Ph(t, e, n) {
    var i = t.getArea(),
        r = new Um({ shape: { cx: ya(t.cx, 1), cy: ya(t.cy, 1), r0: ya(i.r0, 1), r: ya(i.r, 1), startAngle: i.startAngle, endAngle: i.endAngle, clockwise: i.clockwise } });return e && (r.shape.endAngle = i.startAngle, Jr(r, { shape: { endAngle: i.endAngle } }, n)), r;
  }function Oh(t, e) {
    if (t.length === e.length) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
            r = e[n];if (i[0] !== r[0] || i[1] !== r[1]) return;
      }return true;
    }
  }function Nh(t) {
    return "number" == typeof t ? t : t ? .5 : 0;
  }function Eh(t, e, n) {
    if (!n.valueDim) return [];for (var i = [], r = 0, a = e.count(); r < a; r++) i.push(Mh(n, t, e, r));return i;
  }function zh(t, e, n) {
    for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
      var s = t[o + 1],
          l = t[o];a.push(l);var u = [];switch (n) {case "end":
          u[r] = s[r], u[1 - r] = l[1 - r], a.push(u);break;case "middle":
          var h = (l[r] + s[r]) / 2,
              c = [];u[r] = c[r] = h, u[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(u), a.push(c);break;default:
          u[r] = l[r], u[1 - r] = s[1 - r], a.push(u);}
    }return t[o] && a.push(t[o]), a;
  }function Rh(t, e) {
    var n = t.getVisual("visualMeta");if (n && n.length && t.count() && "cartesian2d" === e.type) {
      for (var i, r, a = n.length - 1; a >= 0; a--) {
        var o = n[a].dimension,
            s = t.dimensions[o],
            l = t.getDimensionInfo(s);if ("x" === (i = l && l.coordDim) || "y" === i) {
          r = n[a];break;
        }
      }if (r) {
        var u = e.getAxis(i),
            h = f(r.stops, function (t) {
          return { coord: u.toGlobalCoord(u.dataToCoord(t.value)), color: t.color };
        }),
            c = h.length,
            p = r.outerColors.slice();c && h[0].coord > h[c - 1].coord && (h.reverse(), p.reverse());var g = h[0].coord - 10,
            m = h[c - 1].coord + 10,
            v = m - g;if (v < .001) return "transparent";d(h, function (t) {
          t.offset = (t.coord - g) / v;
        }), h.push({ offset: c ? h[c - 1].offset : .5, color: p[1] || "transparent" }), h.unshift({ offset: c ? h[0].offset : .5, color: p[0] || "transparent" });var y = new uv(0, 0, 0, 0, h, true);return y[i] = g, y[i + "2"] = m, y;
      }
    }
  }function Bh(t, e, n) {
    var i = t.get("showAllSymbol"),
        r = "auto" === i;if (!i || r) {
      var a = n.getAxesByScale("ordinal")[0];if (a && (!r || !Fh(a, e))) {
        var o = e.mapDimension(a.dim),
            s = {};return d(a.getViewLabels(), function (t) {
          s[t.tickValue] = 1;
        }), function (t) {
          return !s.hasOwnProperty(e.get(o, t));
        };
      }
    }
  }function Fh(t, e) {
    var n = t.getExtent(),
        i = Math.abs(n[1] - n[0]) / t.scale.count();isNaN(i) && (i = 0);for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; o < r; o += a) if (1.5 * ph.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return false;return true;
  }function Vh(t, e, n) {
    if ("cartesian2d" === t.type) {
      var i = t.getBaseAxis().isHorizontal(),
          r = Lh(t, e, n);if (!n.get("clip", true)) {
        var a = r.shape,
            o = Math.max(a.width, a.height);i ? (a.y -= o, a.height += 2 * o) : (a.x -= o, a.width += 2 * o);
      }return r;
    }return Ph(t, e, n);
  }function Gh(t) {
    return this._axes[t];
  }function Wh(t) {
    bw.call(this, t);
  }function Hh(t, e) {
    return e.type || (e.data ? "category" : "value");
  }function Zh(t, e, n) {
    return t.getCoordSysModel() === e;
  }function Xh(t, e, n) {
    this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t;
  }function jh(t, e, n, i) {
    function r(t) {
      return t.dim + "_" + t.index;
    }n.getAxesOnZeroOf = function () {
      return a ? [a] : [];
    };var a,
        o = t[e],
        s = n.model,
        l = s.get("axisLine.onZero"),
        u = s.get("axisLine.onZeroAxisIndex");if (l) {
      if (null != u) Uh(o[u]) && (a = o[u]);else for (var h in o) if (o.hasOwnProperty(h) && Uh(o[h]) && !i[r(o[h])]) {
        a = o[h];break;
      }a && (i[r(a)] = true);
    }
  }function Uh(t) {
    return t && "category" !== t.type && "time" !== t.type && Nu(t);
  }function Yh(t, e) {
    var n = t.getExtent(),
        i = n[0] + n[1];t.toGlobalCoord = "x" === t.dim ? function (t) {
      return t + e;
    } : function (t) {
      return i - t + e;
    }, t.toLocalCoord = "x" === t.dim ? function (t) {
      return t - e;
    } : function (t) {
      return i - t + e;
    };
  }function qh(t, e) {
    return f(Lw, function (e) {
      return t.getReferringComponents(e)[0];
    });
  }function $h(t) {
    return "cartesian2d" === t.get("coordinateSystem");
  }function Kh(t, e, n, i) {
    var r,
        a,
        o = Ma(n - t.rotation),
        s = i[0] > i[1],
        l = "start" === e && !s || "start" !== e && s;return Ia(o - Pw / 2) ? (a = l ? "bottom" : "top", r = "center") : Ia(o - 1.5 * Pw) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = o < 1.5 * Pw && o > Pw / 2 ? l ? "left" : "right" : l ? "right" : "left"), { rotation: o, textAlign: r, textVerticalAlign: a };
  }function Qh(t, e, n) {
    if (!Vu(t.axis)) {
      var i = t.get("axisLabel.showMinLabel"),
          r = t.get("axisLabel.showMaxLabel");e = e || [], n = n || [];var a = e[0],
          o = e[1],
          s = e[e.length - 1],
          l = e[e.length - 2],
          u = n[0],
          h = n[1],
          c = n[n.length - 1],
          d = n[n.length - 2];false === i ? (Jh(a), Jh(u)) : tc(a, o) && (i ? (Jh(o), Jh(h)) : (Jh(a), Jh(u))), false === r ? (Jh(s), Jh(c)) : tc(l, s) && (r ? (Jh(l), Jh(d)) : (Jh(s), Jh(c)));
    }
  }function Jh(t) {
    t && (t.ignore = true);
  }function tc(t, e, n) {
    var i = t && t.getBoundingRect().clone(),
        r = e && e.getBoundingRect().clone();if (i && r) {
      var a = Pt([]);return zt(a, a, -t.rotation), i.applyTransform(Nt([], a, t.getLocalTransform())), r.applyTransform(Nt([], a, e.getLocalTransform())), i.intersect(r);
    }
  }function ec(t) {
    return "middle" === t || "center" === t;
  }function nc(t, e, n, i, r) {
    for (var a = [], o = [], s = [], l = 0; l < t.length; l++) {
      var u = t[l].coord;o[0] = u, o[1] = 0, s[0] = u, s[1] = n, e && (rt(o, o, e), rt(s, s, e));var h = new iv({ anid: r + "_" + t[l].tickValue, subPixelOptimize: true, shape: { x1: o[0], y1: o[1], x2: s[0], y2: s[1] }, style: i, z2: 2, silent: true });a.push(h);
    }return a;
  }function ic(t, e, n) {
    var i = e.axis,
        r = e.getModel("axisTick");if (r.get("show") && !i.scale.isBlank()) {
      for (var a = r.getModel("lineStyle"), s = n.tickDirection * r.get("length"), l = i.getTicksCoords(), u = nc(l, t._transform, s, o(a.getLineStyle(), { stroke: e.get("axisLine.lineStyle.color") }), "ticks"), h = 0; h < u.length; h++) t.group.add(u[h]);return u;
    }
  }function rc(t, e, n) {
    var i = e.axis,
        r = e.getModel("minorTick");if (r.get("show") && !i.scale.isBlank()) {
      var a = i.getMinorTicksCoords();if (a.length) for (var s = r.getModel("lineStyle"), l = n.tickDirection * r.get("length"), u = o(s.getLineStyle(), o(e.getModel("axisTick").getLineStyle(), { stroke: e.get("axisLine.lineStyle.color") })), h = 0; h < a.length; h++) for (var c = nc(a[h], t._transform, l, u, "minorticks_" + h), d = 0; d < c.length; d++) t.group.add(c[d]);
    }
  }function ac(t, e, n) {
    var i = e.axis;if (D(n.axisLabelShow, e.get("axisLabel.show")) && !i.scale.isBlank()) {
      var r = e.getModel("axisLabel"),
          a = r.get("margin"),
          o = i.getViewLabels(),
          s = (D(n.labelRotate, r.get("rotate")) || 0) * Pw / 180,
          l = zw(n.rotation, s, n.labelDirection),
          u = e.getCategories && e.getCategories(true),
          h = [],
          c = Rw(e),
          f = e.get("triggerEvent");return d(o, function (o, s) {
        var d = o.tickValue,
            p = o.formattedLabel,
            g = o.rawLabel,
            m = r;u && u[d] && u[d].textStyle && (m = new ca(u[d].textStyle, r, e.ecModel));var v = m.getTextColor() || e.get("axisLine.lineStyle.color"),
            y = i.dataToCoord(d),
            _ = [y, n.labelOffset + n.labelDirection * a],
            x = new Hm({ anid: "label_" + d, position: _, rotation: l.rotation, silent: c, z2: 10 });Wr(x.style, m, { text: p, textAlign: m.getShallow("align", true) || l.textAlign, textVerticalAlign: m.getShallow("verticalAlign", true) || m.getShallow("baseline", true) || l.textVerticalAlign, textFill: "function" == typeof v ? v("category" === i.type ? g : "value" === i.type ? d + "" : d, s) : v }), f && (x.eventData = Ew(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), h.push(x), t.group.add(x), x.decomposeTransform();
      }), h;
    }
  }function oc(t) {
    var e = sc(t);if (e) {
      var n = e.axisPointerModel,
          i = e.axis.scale,
          r = n.option,
          a = n.get("status"),
          o = n.get("value");null != o && (o = i.parse(o));var s = uc(n);null == a && (r.status = s ? "show" : "hide");var l = i.getExtent().slice();l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
    }
  }function sc(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;return e && e.axesInfo[hc(t)];
  }function lc(t) {
    var e = sc(t);return e && e.axisPointerModel;
  }function uc(t) {
    return !!t.get("handle.show");
  }function hc(t) {
    return t.type + "||" + t.id;
  }function cc(t, e, n, i, r, a) {
    var o = Bw.getAxisPointerClass(t.axisPointerClass);if (o) {
      var s = lc(e);s ? (t._axisPointer || (t._axisPointer = new o())).render(e, s, i, a) : dc(t, i);
    }
  }function dc(t, e, n) {
    var i = t._axisPointer;i && i.dispose(e, n), t._axisPointer = null;
  }function fc(t, e, n) {
    n = n || {};var i = t.coordinateSystem,
        r = e.axis,
        a = {},
        o = r.getAxesOnZeroOf()[0],
        s = r.position,
        l = o ? "onZero" : s,
        u = r.dim,
        h = i.getRect(),
        c = [h.x, h.x + h.width, h.y, h.y + h.height],
        d = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
        f = e.get("offset") || 0,
        p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];if (o) {
      var g = o.toGlobalCoord(o.dataToCoord(0));p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);
    }a.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);var m = { top: -1, bottom: 1, left: -1, right: 1 };a.labelDirection = a.tickDirection = a.nameDirection = m[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), D(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);var v = e.get("axisLabel.rotate");return a.labelRotate = "top" === l ? -v : v, a.z2 = 1, a;
  }function pc(t, e, n, i) {
    var r = n.axis;if (!r.scale.isBlank()) {
      var a = n.getModel("splitArea"),
          s = a.getModel("areaStyle"),
          l = s.get("color"),
          u = i.coordinateSystem.getRect(),
          h = r.getTicksCoords({ tickModel: a, clamp: true });if (h.length) {
        var c = l.length,
            d = t.__splitAreaColors,
            f = R(),
            p = 0;if (d) for (var g = 0; g < h.length; g++) {
          var m = d.get(h[g].tickValue);if (null != m) {
            p = (m + (c - 1) * g) % c;break;
          }
        }var v = r.toGlobalCoord(h[0].coord),
            y = s.getAreaStyle();l = _(l) ? l : [l];for (var g = 1; g < h.length; g++) {
          var x,
              w,
              b,
              S,
              M = r.toGlobalCoord(h[g].coord);r.isHorizontal() ? (x = v, w = u.y, b = M - x, S = u.height, v = x + b) : (x = u.x, w = v, b = u.width, S = M - w, v = w + S);var I = h[g - 1].tickValue;null != I && f.set(I, p), e.add(new ev({ anid: null != I ? "area_" + I : null, shape: { x: x, y: w, width: b, height: S }, style: o({ fill: l[p] }, y), silent: true })), p = (p + 1) % c;
        }t.__splitAreaColors = f;
      }
    }
  }function gc(t) {
    t.__splitAreaColors = null;
  }function mc(t, e) {
    this.getAllNames = function () {
      var t = e();return t.mapArray(t.getName);
    }, this.containName = function (t) {
      return e().indexOfName(t) >= 0;
    }, this.indexOfName = function (e) {
      return t().indexOfName(e);
    }, this.getItemVisual = function (e, n) {
      return t().getItemVisual(e, n);
    };
  }function vc(t, e, n, i) {
    var r = e.getData(),
        a = this.dataIndex,
        o = r.getName(a),
        s = e.get("selectedOffset");i.dispatchAction({ type: "pieToggleSelect", from: t, name: o, seriesId: e.id }), r.each(function (t) {
      yc(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n);
    });
  }function yc(t, e, n, i, r) {
    var a = (e.startAngle + e.endAngle) / 2,
        o = Math.cos(a),
        s = Math.sin(a),
        l = n ? i : 0,
        u = [o * l, s * l];r ? t.animate().when(200, { position: u }).start("bounceOut") : t.attr("position", u);
  }function _c(t, e) {
    Np.call(this);var n = new Um({ z2: 2 }),
        i = new Qm(),
        r = new Hm();this.add(n), this.add(i), this.add(r), this.updateData(t, e, true);
  }function xc(t, e, n, i, r, a, o, s, l, u) {
    function h(e, n) {
      for (var i = e; i >= 0 && !(t[i].y - n < l) && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--);
    }function c(t, e, n, i, r, a) {
      for (var o = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++) if ("none" === t[s].labelAlignTo) {
        var u = Math.abs(t[s].y - i),
            h = t[s].len,
            c = t[s].len2,
            d = u < r + h ? Math.sqrt((r + h + c) * (r + h + c) - u * u) : Math.abs(t[s].x - n);e && d >= o && (d = o - 10), !e && d <= o && (d = o + 10), t[s].x = n + d * a, o = d;
      }
    }t.sort(function (t, e) {
      return t.y - e.y;
    });for (var d, f = 0, p = t.length, g = [], m = [], v = 0; v < p; v++) {
      if ("outer" === t[v].position && "labelLine" === t[v].labelAlignTo) {
        var y = t[v].x - u;t[v].linePoints[1][0] += y, t[v].x = u;
      }d = t[v].y - f, d < 0 && function (e, n, i, r) {
        for (var a = e; a < n && !(t[a].y + i > l + o); a++) if (t[a].y += i, a > e && a + 1 < n && t[a + 1].y > t[a].y + t[a].height) return undefined;h(n - 1, i / 2);
      }(v, p, -d), f = t[v].y + t[v].height;
    }o - f < 0 && h(p - 1, f - o);for (var v = 0; v < p; v++) t[v].y >= n ? m.push(t[v]) : g.push(t[v]);c(g, false, e, n, i, r), c(m, true, e, n, i, r);
  }function wc(t, e, n, i, r, a, o, s) {
    for (var l = [], u = [], h = Number.MAX_VALUE, c = -Number.MAX_VALUE, d = 0; d < t.length; d++) bc(t[d]) || (t[d].x < e ? (h = Math.min(h, t[d].x), l.push(t[d])) : (c = Math.max(c, t[d].x), u.push(t[d])));xc(u, e, n, i, 1, r, a, o, s, c), xc(l, e, n, i, -1, r, a, o, s, h);for (var d = 0; d < t.length; d++) {
      var f = t[d];if (!bc(f)) {
        var p = f.linePoints;if (p) {
          var g,
              m = "edge" === f.labelAlignTo,
              v = f.textRect.width;g = m ? f.x < e ? p[2][0] - f.labelDistance - o - f.labelMargin : o + r - f.labelMargin - p[2][0] - f.labelDistance : f.x < e ? f.x - o - f.bleedMargin : o + r - f.x - f.bleedMargin, g < f.textRect.width && (f.text = qe(f.text, g, f.font), "edge" === f.labelAlignTo && (v = We(f.text, f.font)));var y = p[1][0] - p[2][0];m ? f.x < e ? p[2][0] = o + f.labelMargin + v + f.labelDistance : p[2][0] = o + r - f.labelMargin - v - f.labelDistance : (f.x < e ? p[2][0] = f.x + f.labelDistance : p[2][0] = f.x - f.labelDistance, p[1][0] = p[2][0] + y), p[1][1] = p[2][1] = f.y;
        }
      }
    }
  }function bc(t) {
    return "center" === t.position;
  }function Sc(t, e) {
    return Xa(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
  }function Mc(t) {
    return "_EC_" + t;
  }function Ic(t, e) {
    this.id = null == t ? "" : t, this.inEdges = [], this.outEdges = [], this.edges = [], this.hostGraph, this.dataIndex = null == e ? -1 : e;
  }function Ac(t, e, n) {
    this.node1 = t, this.node2 = e, this.dataIndex = null == n ? -1 : n;
  }function Dc(t) {
    var e = t.mainData,
        n = t.datas;n || (n = { main: e }, t.datasAttr = { main: "data" }), t.datas = t.mainData = null, Oc(e, n, t), eb(n, function (n) {
      eb(e.TRANSFERABLE_METHODS, function (e) {
        n.wrapMethod(e, y(Tc, t));
      });
    }), e.wrapMethod("cloneShallow", y(kc, t)), eb(e.CHANGABLE_METHODS, function (n) {
      e.wrapMethod(n, y(Cc, t));
    }), P(n[e.dataType] === e);
  }function Tc(t, e) {
    if (Pc(this)) {
      var n = a({}, this[nb]);n[this.dataType] = e, Oc(e, n, t);
    } else Nc(e, this.dataType, this[ib], t);return e;
  }function Cc(t, e) {
    return t.struct && t.struct.update(this), e;
  }function kc(t, e) {
    return eb(e[nb], function (n, i) {
      n !== e && Nc(n.cloneShallow(), i, e, t);
    }), e;
  }function Lc(t) {
    var e = this[ib];return null == t || null == e ? e : e[nb][t];
  }function Pc(t) {
    return t[ib] === t;
  }function Oc(t, e, n) {
    t[nb] = {}, eb(e, function (e, i) {
      Nc(e, i, t, n);
    });
  }function Nc(t, e, n, i) {
    n[nb][e] = t, t[ib] = n, t.dataType = e, i.struct && (t[i.structAttr] = i.struct, i.struct[i.datasAttr[e]] = t), t.getLinkedData = Lc;
  }function Ec(t) {
    return isNaN(+t.cpx1) || isNaN(+t.cpy1);
  }function zc(t) {
    return "_" + t + "Type";
  }function Rc(t, e, n) {
    var i = e.getItemVisual(n, "color"),
        r = e.getItemVisual(n, t),
        a = e.getItemVisual(n, t + "Size");if (r && "none" !== r) {
      _(a) || (a = [a, a]);var o = Wu(r, -a[0] / 2, -a[1] / 2, a[0], a[1], i);return o.name = t, o;
    }
  }function Bc(t) {
    var e = new lb({ name: "line", subPixelOptimize: true });return Fc(e.shape, t), e;
  }function Fc(t, e) {
    t.x1 = e[0][0], t.y1 = e[0][1], t.x2 = e[1][0], t.y2 = e[1][1], t.percent = 1;var n = e[2];n ? (t.cpx1 = n[0], t.cpy1 = n[1]) : (t.cpx1 = NaN, t.cpy1 = NaN);
  }function Vc() {
    var t = this,
        e = t.childOfName("fromSymbol"),
        n = t.childOfName("toSymbol"),
        i = t.childOfName("label");if (e || n || !i.ignore) {
      for (var r = 1, a = this.parent; a;) a.scale && (r /= a.scale[0]), a = a.parent;var o = t.childOfName("line");if (this.__dirty || o.__dirty) {
        var s = o.shape.percent,
            l = o.pointAt(0),
            u = o.pointAt(s),
            h = j([], u, l);if (J(h, h), e) {
          e.attr("position", l);var c = o.tangentAt(0);e.attr("rotation", Math.PI / 2 - Math.atan2(c[1], c[0])), e.attr("scale", [r * s, r * s]);
        }if (n) {
          n.attr("position", u);var c = o.tangentAt(1);n.attr("rotation", -Math.PI / 2 - Math.atan2(c[1], c[0])), n.attr("scale", [r * s, r * s]);
        }if (!i.ignore) {
          i.attr("position", u);var d,
              f,
              p,
              g,
              m = i.__labelDistance,
              v = m[0] * r,
              y = m[1] * r,
              _ = s / 2,
              c = o.tangentAt(_),
              x = [c[1], -c[0]],
              w = o.pointAt(_);x[1] > 0 && (x[0] = -x[0], x[1] = -x[1]);var b = c[0] < 0 ? -1 : 1;if ("start" !== i.__position && "end" !== i.__position) {
            var S = -Math.atan2(c[1], c[0]);u[0] < l[0] && (S = Math.PI + S), i.attr("rotation", S);
          }var M;switch (i.__position) {case "insideStartTop":case "insideMiddleTop":case "insideEndTop":case "middle":
              M = -y, p = "bottom";break;case "insideStartBottom":case "insideMiddleBottom":case "insideEndBottom":
              M = y, p = "top";break;default:
              M = 0, p = "middle";}switch (i.__position) {case "end":
              d = [h[0] * v + u[0], h[1] * y + u[1]], f = h[0] > .8 ? "left" : h[0] < -0.8 ? "right" : "center", p = h[1] > .8 ? "top" : h[1] < -0.8 ? "bottom" : "middle";break;case "start":
              d = [-h[0] * v + l[0], -h[1] * y + l[1]], f = h[0] > .8 ? "right" : h[0] < -0.8 ? "left" : "center", p = h[1] > .8 ? "bottom" : h[1] < -0.8 ? "top" : "middle";break;case "insideStartTop":case "insideStart":case "insideStartBottom":
              d = [v * b + l[0], l[1] + M], f = c[0] < 0 ? "right" : "left", g = [-v * b, -M];break;case "insideMiddleTop":case "insideMiddle":case "insideMiddleBottom":case "middle":
              d = [w[0], w[1] + M], f = "center", g = [0, -M];break;case "insideEndTop":case "insideEnd":case "insideEndBottom":
              d = [-v * b + u[0], u[1] + M], f = c[0] >= 0 ? "right" : "left", g = [v * b, -M];}i.attr({ style: { textVerticalAlign: i.__verticalAlign || p, textAlign: i.__textAlign || f }, position: d, scale: [r, r], origin: g });
        }
      }
    }
  }function Gc(t, e, n) {
    Np.call(this), this._createLine(t, e, n);
  }function Wc(t) {
    this._ctor = t || Gc, this.group = new Np();
  }function Hc(t, e, n, i) {
    if (Uc(e.getItemLayout(n))) {
      var r = new t._ctor(e, n, i);e.setItemGraphicEl(n, r), t.group.add(r);
    }
  }function Zc(t, e, n, i, r, a) {
    var o = e.getItemGraphicEl(i);if (!Uc(n.getItemLayout(r))) return undefined;o ? o.updateData(n, r, a) : o = new t._ctor(n, r, a), n.setItemGraphicEl(r, o), t.group.add(o);
  }function Xc(t) {
    var e = t.hostModel;return { lineStyle: e.getModel("lineStyle").getLineStyle(), hoverLineStyle: e.getModel("emphasis.lineStyle").getLineStyle(), labelModel: e.getModel("label"), hoverLabelModel: e.getModel("emphasis.label") };
  }function jc(t) {
    return isNaN(t[0]) || isNaN(t[1]);
  }function Uc(t) {
    return !jc(t[0]) && !jc(t[1]);
  }function Yc(t, e) {
    return !!qc(t)[e];
  }function qc(t) {
    return t[db] || (t[db] = {});
  }function $c(t) {
    this.pointerChecker, this._zr = t, this._opt = {};var e = v,
        i = e(Kc, this),
        r = e(Qc, this),
        a = e(Jc, this),
        s = e(td, this),
        l = e(ed, this);Zf.call(this), this.setPointerChecker = function (t) {
      this.pointerChecker = t;
    }, this.enable = function (e, u) {
      this.disable(), this._opt = o(n(u) || {}, { zoomOnMouseWheel: true, moveOnMouseMove: true, moveOnMouseWheel: false, preventDefaultMouseMove: true }), null == e && (e = true), true !== e && "move" !== e && "pan" !== e || (t.on("mousedown", i), t.on("mousemove", r), t.on("mouseup", a)), true !== e && "scale" !== e && "zoom" !== e || (t.on("mousewheel", s), t.on("pinch", l));
    }, this.disable = function () {
      t.off("mousedown", i), t.off("mousemove", r), t.off("mouseup", a), t.off("mousewheel", s), t.off("pinch", l);
    }, this.dispose = this.disable, this.isDragging = function () {
      return this._dragging;
    }, this.isPinching = function () {
      return this._pinching;
    };
  }function Kc(t) {
    if (!(St(t) || t.target && t.target.draggable)) {
      var e = t.offsetX,
          n = t.offsetY;this.pointerChecker && this.pointerChecker(t, e, n) && (this._x = e, this._y = n, this._dragging = true);
    }
  }function Qc(t) {
    if (this._dragging && rd("moveOnMouseMove", t, this._opt) && "pinch" !== t.gestureEvent && !Yc(this._zr, "globalPan")) {
      var e = t.offsetX,
          n = t.offsetY,
          i = this._x,
          r = this._y,
          a = e - i,
          o = n - r;this._x = e, this._y = n, this._opt.preventDefaultMouseMove && $f(t.event), id(this, "pan", "moveOnMouseMove", t, { dx: a, dy: o, oldX: i, oldY: r, newX: e, newY: n });
    }
  }function Jc(t) {
    St(t) || (this._dragging = false);
  }function td(t) {
    var e = rd("zoomOnMouseWheel", t, this._opt),
        n = rd("moveOnMouseWheel", t, this._opt),
        i = t.wheelDelta,
        r = Math.abs(i),
        a = t.offsetX,
        o = t.offsetY;if (0 !== i && (e || n)) {
      if (e) {
        var s = r > 3 ? 1.4 : r > 1 ? 1.2 : 1.1;nd(this, "zoom", "zoomOnMouseWheel", t, { scale: i > 0 ? s : 1 / s, originX: a, originY: o });
      }if (n) {
        var l = Math.abs(i);nd(this, "scrollMove", "moveOnMouseWheel", t, { scrollDelta: (i > 0 ? 1 : -1) * (l > 3 ? .4 : l > 1 ? .15 : .05), originX: a, originY: o });
      }
    }
  }function ed(t) {
    if (!Yc(this._zr, "globalPan")) {
      nd(this, "zoom", null, t, { scale: t.pinchScale > 1 ? 1.1 : 0.9090909090909091, originX: t.pinchX, originY: t.pinchY });
    }
  }function nd(t, e, n, i, r) {
    t.pointerChecker && t.pointerChecker(i, r.originX, r.originY) && ($f(i.event), id(t, e, n, i, r));
  }function id(t, e, n, i, r) {
    r.isAvailableBehavior = v(rd, null, n, i), t.trigger(e, r);
  }function rd(t, e, n) {
    var i = n[t];return !t || i && (!w(i) || e.event[i + "Key"]);
  }function ad(t, e, n) {
    var i = t.target,
        r = i.position;r[0] += e, r[1] += n, i.dirty();
  }function od(t, e, n, i) {
    var r = t.target,
        a = t.zoomLimit,
        o = r.position,
        s = r.scale,
        l = t.zoom = t.zoom || 1;if (l *= e, a) {
      var u = a.min || 0,
          h = a.max || Infinity;l = Math.max(Math.min(h, l), u);
    }var c = l / t.zoom;t.zoom = l, o[0] -= (n - o[0]) * (c - 1), o[1] -= (i - o[1]) * (c - 1), s[0] *= c, s[1] *= c, r.dirty();
  }function sd(t, e, n) {
    var i = e.getComponentByElement(t.topTarget),
        r = i && i.coordinateSystem;return i && i !== n && !fb[i.mainType] && r && r.model !== n;
  }function ld(t) {
    var e = t.coordinateSystem;if ("view" !== e.type) return 1;var n = t.option.nodeScaleRatio,
        i = e.scale,
        r = i && i[0] || 1;return ((e.getZoom() - 1) * n + 1) / r;
  }function ud(t) {
    var e = t.getVisual("symbolSize");return e instanceof Array && (e = (e[0] + e[1]) / 2), +e;
  }function hd(t, e, n) {
    for (var i, r = t[0], a = t[1], o = t[2], s = Infinity, l = n * n, u = .1, h = .1; h <= .9; h += .1) {
      pb[0] = vb(r[0], a[0], o[0], h), pb[1] = vb(r[1], a[1], o[1], h);var c = _b(yb(pb, e) - l);c < s && (s = c, i = h);
    }for (var d = 0; d < 32; d++) {
      var f = i + u;gb[0] = vb(r[0], a[0], o[0], i), gb[1] = vb(r[1], a[1], o[1], i), mb[0] = vb(r[0], a[0], o[0], f), mb[1] = vb(r[1], a[1], o[1], f);var c = yb(gb, e) - l;if (_b(c) < .01) break;var p = yb(mb, e) - l;u /= 2, c < 0 ? p >= 0 ? i += u : i -= u : p >= 0 ? i -= u : i += u;
    }return i;
  }function cd(t, e) {
    var n = t.getVisual("opacity");return null != n ? n : t.getModel().get(e);
  }function dd(t, e, n) {
    var i = t.getGraphicEl(),
        r = cd(t, e);null != n && (null == r && (r = 1), r *= n), i.downplay && i.downplay(), i.traverse(function (t) {
      if (!t.isGroup) {
        var e = t.lineLabelOriginalOpacity;null != e && null == n || (e = r), t.setStyle("opacity", e);
      }
    });
  }function fd(t, e) {
    var n = cd(t, e),
        i = t.getGraphicEl();i.traverse(function (t) {
      !t.isGroup && t.setStyle("opacity", n);
    }), i.highlight && i.highlight();
  }function pd(t, e, n) {
    var i = t.getZoom(),
        r = t.getCenter(),
        a = e.zoom,
        o = t.dataToPoint(r);if (null != e.dx && null != e.dy) {
      o[0] -= e.dx, o[1] -= e.dy;var r = t.pointToData(o);t.setCenter(r);
    }if (null != a) {
      if (n) {
        var s = n.min || 0,
            l = n.max || Infinity;a = Math.max(Math.min(i * a, l), s) / i;
      }t.scale[0] *= a, t.scale[1] *= a;var u = t.position,
          h = (e.originX - u[0]) * (a - 1),
          c = (e.originY - u[1]) * (a - 1);u[0] -= h, u[1] -= c, t.updateTransform();var r = t.pointToData(o);t.setCenter(r), t.setZoom(a * i);
    }return { center: t.getCenter(), zoom: t.getZoom() };
  }function gd(t) {
    return t instanceof Array || (t = [t, t]), t;
  }function md(t) {
    var e = t.coordinateSystem;if (!e || "view" === e.type) {
      var n = t.getGraph();n.eachNode(function (t) {
        var e = t.getModel();t.setLayout([+e.get("x"), +e.get("y")]);
      }), vd(n);
    }
  }function vd(t) {
    t.eachEdge(function (t) {
      var e = t.getModel().get("lineStyle.curveness") || 0,
          n = W(t.node1.getLayout()),
          i = W(t.node2.getLayout()),
          r = [n, i];+e && r.push([(n[0] + i[0]) / 2 - (n[1] - i[1]) * e, (n[1] + i[1]) / 2 - (i[0] - n[0]) * e]), t.setLayout(r);
    });
  }function yd(t, e) {
    var n = t.coordinateSystem;if (!n || "view" === n.type) {
      var i = n.getBoundingRect(),
          r = t.getData(),
          a = r.graph,
          o = i.width / 2 + i.x,
          s = i.height / 2 + i.y,
          l = Math.min(i.width, i.height) / 2,
          u = r.count();r.setLayout({ cx: o, cy: s }), u && (kb[e](t, n, a, r, l, o, s, u), a.eachEdge(function (t) {
        var e,
            n = t.getModel().get("lineStyle.curveness") || 0,
            i = W(t.node1.getLayout()),
            r = W(t.node2.getLayout()),
            a = (i[0] + r[0]) / 2,
            l = (i[1] + r[1]) / 2;+n && (n *= 3, e = [o * n + a * (1 - n), s * n + l * (1 - n)]), t.setLayout([i, r, e]);
      }));
    }
  }function _d(t, e, n) {
    for (var i = n.rect, r = i.width, a = i.height, o = [i.x + r / 2, i.y + a / 2], s = null == n.gravity ? .1 : n.gravity, l = 0; l < t.length; l++) {
      var u = t[l];u.p || (u.p = V(r * (Math.random() - .5) + o[0], a * (Math.random() - .5) + o[1])), u.pp = W(u.p), u.edges = null;
    }var h = null == n.friction ? .6 : n.friction,
        c = h;return { warmUp: function () {
        c = .8 * h;
      }, setFixed: function (e) {
        t[e].fixed = true;
      }, setUnfixed: function (e) {
        t[e].fixed = false;
      }, step: function (n) {
        for (var i = [], r = t.length, a = 0; a < e.length; a++) {
          var l = e[a];if (!l.ignoreForceLayout) {
            var u = l.n1,
                h = l.n2;j(i, h.p, u.p);var d = U(i) - l.d,
                f = h.w / (u.w + h.w);isNaN(f) && (f = 0), J(i, i), !u.fixed && Pb(u.p, u.p, i, f * d * c), !h.fixed && Pb(h.p, h.p, i, -(1 - f) * d * c);
          }
        }for (var a = 0; a < r; a++) {
          var p = t[a];p.fixed || (j(i, o, p.p), Pb(p.p, p.p, i, s * c));
        }for (var a = 0; a < r; a++) for (var u = t[a], g = a + 1; g < r; g++) {
          var h = t[g];j(i, h.p, u.p);var d = U(i);0 === d && (H(i, Math.random() - .5, Math.random() - .5), d = 1);var m = (u.rep + h.rep) / d / d;!u.fixed && Pb(u.pp, u.pp, i, m), !h.fixed && Pb(h.pp, h.pp, i, -m);
        }for (var v = [], a = 0; a < r; a++) {
          var p = t[a];p.fixed || (j(v, p.p, p.pp), Pb(p.p, p.p, v, c), G(p.pp, p.p));
        }c *= .992, n && n(t, e, c < .01);
      } };
  }function xd() {
    op.call(this);
  }function wd(t) {
    this.name = t, this.zoomLimit, op.call(this), this._roamTransformable = new xd(), this._rawTransformable = new xd(), this._center, this._zoom;
  }function bd(t, e, n, i) {
    var r = n.seriesModel,
        a = r ? r.coordinateSystem : null;return a === this ? a[t](i) : null;
  }function Sd(t, e, n) {
    var i = t.getBoxLayoutParams();return i.aspect = n, Xa(i, { width: e.getWidth(), height: e.getHeight() });
  }function Md(t, e, n) {
    var i,
        r = {},
        a = "toggleSelected" === t;return n.eachComponent("legend", function (n) {
      a && null != i ? n[i ? "select" : "unSelect"](e.name) : "allSelect" === t || "inverseSelect" === t ? n[t]() : (n[t](e.name), i = n.isSelected(e.name)), d(n.getData(), function (t) {
        var e = t.get("name");if ("\n" !== e && "" !== e) {
          var i = n.isSelected(e);r.hasOwnProperty(e) ? r[e] = r[e] && i : r[e] = i;
        }
      });
    }), "allSelect" === t || "inverseSelect" === t ? { selected: r } : { name: e.name, selected: r };
  }function Id(t, e) {
    var n = Rv(e.get("padding")),
        i = e.getItemStyle(["color", "opacity"]);i.fill = e.get("backgroundColor");var t = new ev({ shape: { x: t.x - n[3], y: t.y - n[0], width: t.width + n[1] + n[3], height: t.height + n[0] + n[2], r: e.get("borderRadius") }, style: i, silent: true, z2: -1 });return t;
  }function Ad(t, e, n, i, r, a) {
    var o;return "line" !== e && e.indexOf("empty") < 0 ? (o = n.getItemStyle(), t.style.stroke = i, a || (o.stroke = r)) : o = n.getItemStyle(["borderWidth", "borderColor"]), t.setStyle(o);
  }function Dd(t, e, n, i) {
    Cd(t, e, n, i), n.dispatchAction({ type: "legendToggleSelect", name: null != t ? t : e }), Td(t, e, n, i);
  }function Td(t, e, n, i) {
    var r = n.getZr().storage.getDisplayList()[0];r && r.useHoverLayer || n.dispatchAction({ type: "highlight", seriesName: t, name: e, excludeSeriesId: i });
  }function Cd(t, e, n, i) {
    var r = n.getZr().storage.getDisplayList()[0];r && r.useHoverLayer || n.dispatchAction({ type: "downplay", seriesName: t, name: e, excludeSeriesId: i });
  }function kd(t, e, n) {
    var i = t.getOrient(),
        r = [1, 1];r[i.index] = 0, ja(e, n, { type: "box", ignoreSize: r });
  }function Ld(t) {
    Jn(t, "label", ["show"]);
  }function Pd(t) {
    return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)));
  }function Od(t) {
    return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y));
  }function Nd(t, e, n, i, r, a) {
    var o = [],
        s = ou(e, i),
        l = s ? e.getCalculationInfo("stackResultDimension") : i,
        u = Vd(e, l, t),
        h = e.indicesOfNearest(l, u)[0];o[r] = e.get(n, h), o[a] = e.get(l, h);var c = e.get(i, h),
        d = xa(e.get(i, h));return d = Math.min(d, 20), d >= 0 && (o[a] = +o[a].toFixed(d)), [o, c];
  }function Ed(t, e) {
    var i = t.getData(),
        r = t.coordinateSystem;if (e && !Od(e) && !_(e.coord) && r) {
      var a = r.dimensions,
          o = zd(e, i, r, t);if (e = n(e), e.type && tS[e.type] && o.baseAxis && o.valueAxis) {
        var s = Qb(a, o.baseAxis.dim),
            l = Qb(a, o.valueAxis.dim),
            u = tS[e.type](i, o.baseDataDim, o.valueDataDim, s, l);e.coord = u[0], e.value = u[1];
      } else {
        for (var h = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis], c = 0; c < 2; c++) tS[h[c]] && (h[c] = Vd(i, i.mapDimension(a[c]), h[c]));e.coord = h;
      }
    }return e;
  }function zd(t, e, n, i) {
    var r = {};return null != t.valueIndex || null != t.valueDim ? (r.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, r.valueAxis = n.getAxis(Rd(i, r.valueDataDim)), r.baseAxis = n.getOtherAxis(r.valueAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim)) : (r.baseAxis = i.getBaseAxis(), r.valueAxis = n.getOtherAxis(r.baseAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim), r.valueDataDim = e.mapDimension(r.valueAxis.dim)), r;
  }function Rd(t, e) {
    var n = t.getData(),
        i = n.dimensions;e = n.getDimension(e);for (var r = 0; r < i.length; r++) {
      var a = n.getDimensionInfo(i[r]);if (a.name === e) return a.coordDim;
    }
  }function Bd(t, e) {
    return !(t && t.containData && e.coord && !Pd(e)) || t.containData(e.coord);
  }function Fd(t, e, n, i) {
    return i < 2 ? t.coord && t.coord[i] : t.value;
  }function Vd(t, e, n) {
    if ("average" === n) {
      var i = 0,
          r = 0;return t.each(e, function (t, e) {
        isNaN(t) || (i += t, r++);
      }), i / r;
    }return "median" === n ? t.getMedian(e) : t.getDataExtent(e, true)["max" === n ? 1 : 0];
  }function Gd(t) {
    return !isNaN(t) && !isFinite(t);
  }function Wd(t, e, n, i) {
    var r = 1 - t,
        a = i.dimensions[t];return Gd(e[r]) && Gd(n[r]) && e[t] === n[t] && i.getAxis(a).containData(e[t]);
  }function Hd(t, e) {
    if ("cartesian2d" === t.type) {
      var n = e[0].coord,
          i = e[1].coord;if (n && i && (Wd(1, n, i, t) || Wd(0, n, i, t))) return true;
    }return Bd(t, e[0]) && Bd(t, e[1]);
  }function Zd(t, e, n, i, r) {
    var a,
        o = i.coordinateSystem,
        s = t.getItemModel(e),
        l = va(s.get("x"), r.getWidth()),
        u = va(s.get("y"), r.getHeight());if (isNaN(l) || isNaN(u)) {
      if (i.getMarkerPosition) a = i.getMarkerPosition(t.getValues(t.dimensions, e));else {
        var h = o.dimensions,
            c = t.get(h[0], e),
            d = t.get(h[1], e);a = o.dataToPoint([c, d]);
      }if ("cartesian2d" === o.type) {
        var f = o.getAxis("x"),
            p = o.getAxis("y"),
            h = o.dimensions;Gd(t.get(h[0], e)) ? a[0] = f.toGlobalCoord(f.getExtent()[n ? 0 : 1]) : Gd(t.get(h[1], e)) && (a[1] = p.toGlobalCoord(p.getExtent()[n ? 0 : 1]));
      }isNaN(l) || (a[0] = l), isNaN(u) || (a[1] = u);
    } else a = [l, u];t.setItemLayout(e, a);
  }function Xd(t, e, n) {
    var i;i = t ? f(t && t.dimensions, function (t) {
      return o({ name: t }, e.getData().getDimensionInfo(e.getData().mapDimension(t)) || {});
    }) : [{ name: "value", type: "float" }];var r = new lx(i, n),
        a = new lx(i, n),
        s = new lx([], n),
        l = f(n.get("data"), y(nS, e, t, n));t && (l = g(l, y(Hd, t)));var u = t ? Fd : function (t) {
      return t.value;
    };return r.initData(f(l, function (t) {
      return t[0];
    }), null, u), a.initData(f(l, function (t) {
      return t[1];
    }), null, u), s.initData(f(l, function (t) {
      return t[2];
    })), s.hasItemOption = true, { from: r, to: a, line: s };
  }function jd(t) {
    return !isNaN(t) && !isFinite(t);
  }function Ud(t, e, n, i) {
    var r = 1 - t;return jd(e[r]) && jd(n[r]);
  }function Yd(t, e) {
    var n = e.coord[0],
        i = e.coord[1];return !("cartesian2d" !== t.type || !n || !i || !Ud(1, n, i, t) && !Ud(0, n, i, t)) || Bd(t, { coord: n, x: e.x0, y: e.y0 }) || Bd(t, { coord: i, x: e.x1, y: e.y1 });
  }function qd(t, e, n, i, r) {
    var a,
        o = i.coordinateSystem,
        s = t.getItemModel(e),
        l = va(s.get(n[0]), r.getWidth()),
        u = va(s.get(n[1]), r.getHeight());if (isNaN(l) || isNaN(u)) {
      if (i.getMarkerPosition) a = i.getMarkerPosition(t.getValues(n, e));else {
        var h = t.get(n[0], e),
            c = t.get(n[1], e),
            d = [h, c];o.clampData && o.clampData(d, d), a = o.dataToPoint(d, true);
      }if ("cartesian2d" === o.type) {
        var f = o.getAxis("x"),
            p = o.getAxis("y"),
            h = t.get(n[0], e),
            c = t.get(n[1], e);jd(h) ? a[0] = f.toGlobalCoord(f.getExtent()["x0" === n[0] ? 0 : 1]) : jd(c) && (a[1] = p.toGlobalCoord(p.getExtent()["y0" === n[1] ? 0 : 1]));
      }isNaN(l) || (a[0] = l), isNaN(u) || (a[1] = u);
    } else a = [l, u];return a;
  }function $d(t, e, n) {
    var i,
        r,
        a = ["x0", "y0", "x1", "y1"];t ? (i = f(t && t.dimensions, function (t) {
      var n = e.getData();return o({ name: t }, n.getDimensionInfo(n.mapDimension(t)) || {});
    }), r = new lx(f(a, function (t, e) {
      return { name: t, type: i[e % 2].type };
    }), n)) : (i = [{ name: "value", type: "float" }], r = new lx(i, n));var s = f(n.get("data"), y(iS, e, t, n));t && (s = g(s, y(Yd, t)));var l = t ? function (t, e, n, i) {
      return t.coord[Math.floor(i / 2)][i % 2];
    } : function (t) {
      return t.value;
    };return r.initData(s, null, l), r.hasItemOption = true, r;
  }function Kd(t) {
    return l(oS, t) >= 0;
  }function Qd(t, e, n) {
    function i(t, e) {
      return l(e.nodes, t) >= 0;
    }function r(t, i) {
      var r = false;return e(function (e) {
        d(n(t, e) || [], function (t) {
          i.records[e.name][t] && (r = true);
        });
      }), r;
    }function a(t, i) {
      i.nodes.push(t), e(function (e) {
        d(n(t, e) || [], function (t) {
          i.records[e.name][t] = true;
        });
      });
    }return function (n) {
      function o(t) {
        !i(t, s) && r(t, s) && (a(t, s), l = true);
      }var s = { nodes: [], records: {} };if (e(function (t) {
        s.records[t.name] = {};
      }), !n) return s;a(n, s);var l;do {
        l = false, t(o);
      } while (l);return s;
    };
  }function Jd(t, e) {
    var n = t[e] - t[1 - e];return { span: Math.abs(n), sign: n > 0 ? -1 : n < 0 ? 1 : e ? -1 : 1 };
  }function tf(t, e) {
    return Math.min(null != e[1] ? e[1] : Infinity, Math.max(null != e[0] ? e[0] : -Infinity, t));
  }function ef(t, e, n) {
    var i = [Infinity, -Infinity];return uS(n, function (t) {
      var n = t.getData();n && uS(n.mapDimension(e, true), function (t) {
        var e = n.getApproximateExtent(t);e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1]);
      });
    }), i[1] < i[0] && (i = [NaN, NaN]), nf(t, i), i;
  }function nf(t, e) {
    var n = t.getAxisModel(),
        i = n.getMin(true),
        r = "category" === n.get("type"),
        a = r && n.getCategories().length;null != i && "dataMin" !== i && "function" != typeof i ? e[0] = i : r && (e[0] = a > 0 ? 0 : NaN);var o = n.getMax(true);return null != o && "dataMax" !== o && "function" != typeof o ? e[1] = o : r && (e[1] = a > 0 ? a - 1 : NaN), n.get("scale", true) || (e[0] > 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0)), e;
  }function rf(t, e) {
    var n = t.getAxisModel(),
        i = t._percentWindow,
        r = t._valueWindow;if (i) {
      var a = ba(r, [0, 500]);a = Math.min(a, 20);var o = e || 0 === i[0] && 100 === i[1];n.setRange(o ? null : +r[0].toFixed(a), o ? null : +r[1].toFixed(a));
    }
  }function af(t) {
    var e = t._minMaxSpan = {},
        n = t._dataZoomModel,
        i = t._dataExtent;uS(["min", "max"], function (r) {
      var a = n.get(r + "Span"),
          o = n.get(r + "ValueSpan");null != o && (o = t.getAxisModel().axis.scale.parse(o)), null != o ? a = ma(i[0] + o, i, [0, 100], true) : null != a && (o = ma(a, [0, 100], i, true) - i[0]), e[r + "Span"] = a, e[r + "ValueSpan"] = o;
    });
  }function of(t) {
    var e = {};return dS(["start", "end", "startValue", "endValue", "throttle"], function (n) {
      t.hasOwnProperty(n) && (e[n] = t[n]);
    }), e;
  }function sf(t, e) {
    var n = t._rangePropMode,
        i = t.get("rangeMode");dS([["start", "startValue"], ["end", "endValue"]], function (t, r) {
      var a = null != e[t[0]],
          o = null != e[t[1]];a && !o ? n[r] = "percent" : !a && o ? n[r] = "value" : i ? n[r] = i[r] : a && (n[r] = "percent");
    });
  }function lf(t) {
    return { x: "y", y: "x", radius: "angle", angle: "radius" }[t];
  }function uf(t) {
    return "vertical" === t ? "ns-resize" : "ew-resize";
  }function hf(t, e) {
    var n = ff(t),
        i = e.dataZoomId,
        r = e.coordId;d(n, function (t, n) {
      var a = t.dataZoomInfos;a[i] && l(e.allCoordIds, r) < 0 && (delete a[i], t.count--);
    }), gf(n);var a = n[r];a || (a = n[r] = { coordId: r, dataZoomInfos: {}, count: 0 }, a.controller = pf(t, a), a.dispatchAction = y(mf, t)), !a.dataZoomInfos[i] && a.count++, a.dataZoomInfos[i] = e;var o = vf(a.dataZoomInfos);a.controller.enable(o.controlType, o.opt), a.controller.setPointerChecker(e.containsPoint), ds(a, "dispatchAction", e.dataZoomModel.get("throttle", true), "fixRate");
  }function cf(t, e) {
    var n = ff(t);d(n, function (t) {
      t.controller.dispose();var n = t.dataZoomInfos;n[e] && (delete n[e], t.count--);
    }), gf(n);
  }function df(t) {
    return t.type + "\0_" + t.id;
  }function ff(t) {
    var e = t.getZr();return e[IS] || (e[IS] = {});
  }function pf(t, e) {
    var n = new $c(t.getZr());return d(["pan", "zoom", "scrollMove"], function (t) {
      n.on(t, function (n) {
        var i = [];d(e.dataZoomInfos, function (r) {
          if (n.isAvailableBehavior(r.dataZoomModel.option)) {
            var a = (r.getRange || {})[t],
                o = a && a(e.controller, n);!r.dataZoomModel.get("disabled", true) && o && i.push({ dataZoomId: r.dataZoomId, start: o[0], end: o[1] });
          }
        }), i.length && e.dispatchAction(i);
      });
    }), n;
  }function gf(t) {
    d(t, function (e, n) {
      e.count || (e.controller.dispose(), delete t[n]);
    });
  }function mf(t, e) {
    t.dispatchAction({ type: "dataZoom", batch: e });
  }function vf(t) {
    var e,
        n = { type_true: 2, type_move: 1, type_false: 0, type_undefined: -1 },
        i = true;return d(t, function (t) {
      var r = t.dataZoomModel,
          a = !r.get("disabled", true) && (!r.get("zoomLock", true) || "move");n["type_" + a] > n["type_" + e] && (e = a), i &= r.get("preventDefaultMouseMove", true);
    }), { controlType: e, opt: { zoomOnMouseWheel: true, moveOnMouseMove: true, moveOnMouseWheel: true, preventDefaultMouseMove: !!i } };
  }function yf(t) {
    return function (e, n, i, r) {
      var a = this._range,
          o = a.slice(),
          s = e.axisModels[0];if (s) {
        var l = t(o, s, e, n, i, r);return lS(l, o, [0, 100], "all"), this._range = o, a[0] !== o[0] || a[1] !== o[1] ? o : undefined;
      }
    };
  }var _f = 2311,
      xf = function () {
    return _f++;
  },
      wf = {};wf = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? { browser: {}, os: {}, node: false, wxa: true, canvasSupported: true, svgSupported: false, touchEventsSupported: true, domSupported: false } : "undefined" == typeof document && "undefined" != typeof self ? { browser: {}, os: {}, node: false, worker: true, canvasSupported: true, domSupported: false } : "undefined" == typeof navigator ? { browser: {}, os: {}, node: true, worker: false, canvasSupported: true, svgSupported: true, domSupported: false } : function (t) {
    var e = {},
        n = {},
        i = t.match(/Firefox\/([\d.]+)/),
        r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
        a = t.match(/Edge\/([\d.]+)/),
        o = /micromessenger/i.test(t);return i && (n.firefox = true, n.version = i[1]), r && (n.ie = true, n.version = r[1]), a && (n.edge = true, n.version = a[1]), o && (n.weChat = true), { browser: n, os: e, node: false, canvasSupported: !!document.createElement("canvas").getContext, svgSupported: "undefined" != typeof SVGRect, touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge, pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11), domSupported: "undefined" != typeof document };
  }(navigator.userAgent);var bf = wf,
      Sf = { "[object Function]": 1, "[object RegExp]": 1, "[object Date]": 1, "[object Error]": 1, "[object CanvasGradient]": 1, "[object CanvasPattern]": 1, "[object Image]": 1, "[object Canvas]": 1 },
      Mf = { "[object Int8Array]": 1, "[object Uint8Array]": 1, "[object Uint8ClampedArray]": 1, "[object Int16Array]": 1, "[object Uint16Array]": 1, "[object Int32Array]": 1, "[object Uint32Array]": 1, "[object Float32Array]": 1, "[object Float64Array]": 1 },
      If = Object.prototype.toString,
      Af = Array.prototype,
      Df = Af.forEach,
      Tf = Af.filter,
      Cf = Af.slice,
      kf = Af.map,
      Lf = Af.reduce,
      Pf = {},
      Of = function () {
    return Pf.createCanvas();
  };Pf.createCanvas = function () {
    return document.createElement("canvas");
  };var Nf,
      Ef = "__ec_primitive__";z.prototype = { constructor: z, get: function (t) {
      return this.data.hasOwnProperty(t) ? this.data[t] : null;
    }, set: function (t, e) {
      return this.data[t] = e;
    }, each: function (t, e) {
      undefined !== e && (t = v(t, e));for (var n in this.data) this.data.hasOwnProperty(n) && t(this.data[n], n);
    }, removeKey: function (t) {
      delete this.data[t];
    } };var zf = (Object.freeze || Object)({ $override: e, clone: n, merge: i, mergeAll: r, extend: a, defaults: o, createCanvas: Of, getContext: s, indexOf: l, inherits: u, mixin: h, isArrayLike: c, each: d, map: f, reduce: p, filter: g, find: m, bind: v, curry: y, isArray: _, isFunction: x, isString: w, isObject: b, isBuiltInObject: S, isTypedArray: M, isDom: I, eqNaN: A, retrieve: D, retrieve2: T, retrieve3: C, slice: k, normalizeCssArray: L, assert: P, trim: O, setAsPrimitive: N, isPrimitive: E, createHashMap: R, concatArray: B, noop: F }),
      Rf = "undefined" == typeof Float32Array ? Array : Float32Array,
      Bf = U,
      Ff = Y,
      Vf = tt,
      Gf = et,
      Wf = (Object.freeze || Object)({ create: V, copy: G, clone: W, set: H, add: Z, scaleAndAdd: X, sub: j, len: U, length: Bf, lenSquare: Y, lengthSquare: Ff, mul: q, div: $, dot: K, scale: Q, normalize: J, distance: tt, dist: Vf, distanceSquare: et, distSquare: Gf, negate: nt, lerp: it, applyTransform: rt, min: at, max: ot });st.prototype = { constructor: st, _dragStart: function (t) {
      for (var e = t.target; e && !e.draggable;) e = e.parent;e && (this._draggingTarget = e, e.dragging = true, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(lt(e, t), "dragstart", t.event));
    }, _drag: function (t) {
      var e = this._draggingTarget;if (e) {
        var n = t.offsetX,
            i = t.offsetY,
            r = n - this._x,
            a = i - this._y;this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(lt(e, t), "drag", t.event);var o = this.findHover(n, i, e).target,
            s = this._dropTarget;this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(lt(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(lt(o, t), "dragenter", t.event));
      }
    }, _dragEnd: function (t) {
      var e = this._draggingTarget;e && (e.dragging = false), this.dispatchToElement(lt(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(lt(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
    } };var Hf = Array.prototype.slice,
      Zf = function (t) {
    this._$handlers = {}, this._$eventProcessor = t;
  };Zf.prototype = { constructor: Zf, one: function (t, e, n, i) {
      return ht(this, t, e, n, i, true);
    }, on: function (t, e, n, i) {
      return ht(this, t, e, n, i, false);
    }, isSilent: function (t) {
      var e = this._$handlers;return !e[t] || !e[t].length;
    }, off: function (t, e) {
      var n = this._$handlers;if (!t) return this._$handlers = {}, this;if (e) {
        if (n[t]) {
          for (var i = [], r = 0, a = n[t].length; r < a; r++) n[t][r].h !== e && i.push(n[t][r]);n[t] = i;
        }n[t] && 0 === n[t].length && delete n[t];
      } else delete n[t];return this;
    }, trigger: function (t) {
      var e = this._$handlers[t],
          n = this._$eventProcessor;if (e) {
        var i = arguments,
            r = i.length;r > 3 && (i = Hf.call(i, 1));for (var a = e.length, o = 0; o < a;) {
          var s = e[o];if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++;else {
            switch (r) {case 1:
                s.h.call(s.ctx);break;case 2:
                s.h.call(s.ctx, i[1]);break;case 3:
                s.h.call(s.ctx, i[1], i[2]);break;default:
                s.h.apply(s.ctx, i);}s.one ? (e.splice(o, 1), a--) : o++;
          }
        }
      }return n && n.afterTrigger && n.afterTrigger(t), this;
    }, triggerWithContext: function (t) {
      var e = this._$handlers[t],
          n = this._$eventProcessor;if (e) {
        var i = arguments,
            r = i.length;r > 4 && (i = Hf.call(i, 1, i.length - 1));for (var a = i[i.length - 1], o = e.length, s = 0; s < o;) {
          var l = e[s];if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;else {
            switch (r) {case 1:
                l.h.call(a);break;case 2:
                l.h.call(a, i[1]);break;case 3:
                l.h.call(a, i[1], i[2]);break;default:
                l.h.apply(a, i);}l.one ? (e.splice(s, 1), o--) : s++;
          }
        }
      }return n && n.afterTrigger && n.afterTrigger(t), this;
    } };var Xf = Math.log(2),
      jf = "___zrEVENTSAVED",
      Uf = "undefined" != typeof window && !!window.addEventListener,
      Yf = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      qf = [],
      $f = Uf ? function (t) {
    t.preventDefault(), t.stopPropagation(), t.cancelBubble = true;
  } : function (t) {
    t.returnValue = false, t.cancelBubble = true;
  },
      Kf = function () {
    this._track = [];
  };Kf.prototype = { constructor: Kf, recognize: function (t, e, n) {
      return this._doTrack(t, e, n), this._recognize(t);
    }, clear: function () {
      return this._track.length = 0, this;
    }, _doTrack: function (t, e, n) {
      var i = t.touches;if (i) {
        for (var r = { points: [], touches: [], target: e, event: t }, a = 0, o = i.length; a < o; a++) {
          var s = i[a],
              l = vt(n, s, {});r.points.push([l.zrX, l.zrY]), r.touches.push(s);
        }this._track.push(r);
      }
    }, _recognize: function (t) {
      for (var e in Qf) if (Qf.hasOwnProperty(e)) {
        var n = Qf[e](this._track, t);if (n) return n;
      }
    } };var Qf = { pinch: function (t, e) {
      var n = t.length;if (n) {
        var i = (t[n - 1] || {}).points,
            r = (t[n - 2] || {}).points || i;if (r && r.length > 1 && i && i.length > 1) {
          var a = Mt(i) / Mt(r);!isFinite(a) && (a = 1), e.pinchScale = a;var o = It(i);return e.pinchX = o[0], e.pinchY = o[1], { type: "pinch", target: t[0].target, event: e };
        }
      }
    } },
      Jf = "silent";Tt.prototype.dispose = function () {};var tp = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
      ep = function (t, e, n, i) {
    Zf.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new Tt(), this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, this._gestureMgr, st.call(this), this.setHandlerProxy(n);
  };ep.prototype = { constructor: ep, setHandlerProxy: function (t) {
      this.proxy && this.proxy.dispose(), t && (d(tp, function (e) {
        t.on && t.on(e, this[e], this);
      }, this), t.handler = this), this.proxy = t;
    }, mousemove: function (t) {
      var e = t.zrX,
          n = t.zrY,
          i = kt(this, e, n),
          r = this._hovered,
          a = r.target;a && !a.__zr && (r = this.findHover(r.x, r.y), a = r.target);var o = this._hovered = i ? { x: e, y: n } : this.findHover(e, n),
          s = o.target,
          l = this.proxy;l.setCursor && l.setCursor(s ? s.cursor : "default"), a && s !== a && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(o, "mousemove", t), s && s !== a && this.dispatchToElement(o, "mouseover", t);
    }, mouseout: function (t) {
      var e = t.zrEventControl,
          n = t.zrIsToLocalDOM;"only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), "no_globalout" !== e && !n && this.trigger("globalout", { type: "globalout", event: t });
    }, resize: function (t) {
      this._hovered = {};
    }, dispatch: function (t, e) {
      var n = this[t];n && n.call(this, e);
    }, dispose: function () {
      this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
    }, setCursorStyle: function (t) {
      var e = this.proxy;e.setCursor && e.setCursor(t);
    }, dispatchToElement: function (t, e, n) {
      t = t || {};var i = t.target;if (!i || !i.silent) {
        for (var r = "on" + e, a = At(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble););a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
          "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);
        }));
      }
    }, findHover: function (t, e, n) {
      for (var i = this.storage.getDisplayList(), r = { x: t, y: e }, a = i.length - 1; a >= 0; a--) {
        var o;if (i[a] !== n && !i[a].ignore && (o = Ct(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== Jf)) {
          r.target = i[a];break;
        }
      }return r;
    }, processGesture: function (t, e) {
      this._gestureMgr || (this._gestureMgr = new Kf());var n = this._gestureMgr;"start" === e && n.clear();var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);if ("end" === e && n.clear(), i) {
        var r = i.type;t.gestureEvent = r, this.dispatchToElement({ target: i.target }, r, i.event);
      }
    } }, d(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    ep.prototype[t] = function (e) {
      var n,
          i,
          r = e.zrX,
          a = e.zrY,
          o = kt(this, r, a);if ("mouseup" === t && o || (n = this.findHover(r, a), i = n.target), "mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;else if ("mouseup" === t) this._upEl = i;else if ("click" === t) {
        if (this._downEl !== this._upEl || !this._downPoint || Vf(this._downPoint, [e.zrX, e.zrY]) > 4) return;this._downPoint = null;
      }
      this.dispatchToElement(n, t, e);
    };
  }), h(ep, Zf), h(ep, st);var np = "undefined" == typeof Float32Array ? Array : Float32Array,
      ip = (Object.freeze || Object)({ create: Lt, identity: Pt, copy: Ot, mul: Nt, translate: Et, rotate: zt, scale: Rt, invert: Bt, clone: Ft }),
      rp = Pt,
      ap = 5e-5,
      op = function (t) {
    t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null;
  },
      sp = op.prototype;sp.transform = null, sp.needLocalTransform = function () {
    return Vt(this.rotation) || Vt(this.position[0]) || Vt(this.position[1]) || Vt(this.scale[0] - 1) || Vt(this.scale[1] - 1);
  };var lp = [];sp.updateTransform = function () {
    var t = this.parent,
        e = t && t.transform,
        n = this.needLocalTransform(),
        i = this.transform;if (!n && !e) return undefined;i = i || Lt(), n ? this.getLocalTransform(i) : rp(i), e && (n ? Nt(i, t.transform, i) : Ot(i, t.transform)), this.transform = i;var r = this.globalScaleRatio;if (null != r && 1 !== r) {
      this.getGlobalScale(lp);var a = lp[0] < 0 ? -1 : 1,
          o = lp[1] < 0 ? -1 : 1,
          s = ((lp[0] - a) * r + a) / lp[0] || 0,
          l = ((lp[1] - o) * r + o) / lp[1] || 0;i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l;
    }this.invTransform = this.invTransform || Lt(), Bt(this.invTransform, i);
  }, sp.getLocalTransform = function (t) {
    return op.getLocalTransform(this, t);
  }, sp.setTransform = function (t) {
    var e = this.transform,
        n = t.dpr || 1;e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0);
  }, sp.restoreTransform = function (t) {
    var e = t.dpr || 1;t.setTransform(e, 0, 0, e, 0, 0);
  };var up = [],
      hp = Lt();sp.setLocalTransform = function (t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1],
          n = t[2] * t[2] + t[3] * t[3],
          i = this.position,
          r = this.scale;Vt(e - 1) && (e = Math.sqrt(e)), Vt(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e);
    }
  }, sp.decomposeTransform = function () {
    if (this.transform) {
      var t = this.parent,
          e = this.transform;t && t.transform && (Nt(up, t.invTransform, e), e = up);var n = this.origin;n && (n[0] || n[1]) && (hp[4] = n[0], hp[5] = n[1], Nt(up, e, hp), up[4] -= n[0], up[5] -= n[1], e = up), this.setLocalTransform(e);
    }
  }, sp.getGlobalScale = function (t) {
    var e = this.transform;return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, sp.transformCoordToLocal = function (t, e) {
    var n = [t, e],
        i = this.invTransform;return i && rt(n, n, i), n;
  }, sp.transformCoordToGlobal = function (t, e) {
    var n = [t, e],
        i = this.transform;return i && rt(n, n, i), n;
  }, op.getLocalTransform = function (t, e) {
    e = e || [], rp(e);var n = t.origin,
        i = t.scale || [1, 1],
        r = t.rotation || 0,
        a = t.position || [0, 0];return n && (e[4] -= n[0], e[5] -= n[1]), Rt(e, e, i), r && zt(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e;
  };var cp = { linear: function (t) {
      return t;
    }, quadraticIn: function (t) {
      return t * t;
    }, quadraticOut: function (t) {
      return t * (2 - t);
    }, quadraticInOut: function (t) {
      return (t *= 2) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1);
    }, cubicIn: function (t) {
      return t * t * t;
    }, cubicOut: function (t) {
      return --t * t * t + 1;
    }, cubicInOut: function (t) {
      return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    }, quarticIn: function (t) {
      return t * t * t * t;
    }, quarticOut: function (t) {
      return 1 - --t * t * t * t;
    }, quarticInOut: function (t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
    }, quinticIn: function (t) {
      return t * t * t * t * t;
    }, quinticOut: function (t) {
      return --t * t * t * t * t + 1;
    }, quinticInOut: function (t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    }, sinusoidalIn: function (t) {
      return 1 - Math.cos(t * Math.PI / 2);
    }, sinusoidalOut: function (t) {
      return Math.sin(t * Math.PI / 2);
    }, sinusoidalInOut: function (t) {
      return .5 * (1 - Math.cos(Math.PI * t));
    }, exponentialIn: function (t) {
      return 0 === t ? 0 : Math.pow(1024, t - 1);
    }, exponentialOut: function (t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    }, exponentialInOut: function (t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
    }, circularIn: function (t) {
      return 1 - Math.sqrt(1 - t * t);
    }, circularOut: function (t) {
      return Math.sqrt(1 - --t * t);
    }, circularInOut: function (t) {
      return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }, elasticIn: function (t) {
      var e,
          n = .1;return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4));
    }, elasticOut: function (t) {
      var e,
          n = .1;return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1);
    }, elasticInOut: function (t) {
      var e,
          n = .1;return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -0.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1);
    }, backIn: function (t) {
      var e = 1.70158;return t * t * (2.70158 * t - e);
    }, backOut: function (t) {
      var e = 1.70158;return --t * t * (2.70158 * t + e) + 1;
    }, backInOut: function (t) {
      var e = 2.5949095;return (t *= 2) < 1 ? t * t * (3.5949095 * t - e) * .5 : .5 * ((t -= 2) * t * (3.5949095 * t + e) + 2);
    }, bounceIn: function (t) {
      return 1 - cp.bounceOut(1 - t);
    }, bounceOut: function (t) {
      return t < 0.36363636363636365 ? 7.5625 * t * t : t < 0.7272727272727273 ? 7.5625 * (t -= 0.5454545454545454) * t + .75 : t < 0.9090909090909091 ? 7.5625 * (t -= 0.8181818181818182) * t + .9375 : 7.5625 * (t -= 0.9545454545454546) * t + .984375;
    }, bounceInOut: function (t) {
      return t < .5 ? .5 * cp.bounceIn(2 * t) : .5 * cp.bounceOut(2 * t - 1) + .5;
    } };Gt.prototype = { constructor: Gt, step: function (t, e) {
      if (this._initialized || (this._startTime = t + this._delay, this._initialized = true), this._paused) return undefined;var n = (t - this._startTime - this._pausedTime) / this._life;if (!(n < 0)) {
        n = Math.min(n, 1);var i = this.easing,
            r = "string" == typeof i ? cp[i] : i,
            a = "function" == typeof r ? r(n) : n;return this.fire("frame", a), 1 === n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = true, "destroy") : null;
      }
    }, restart: function (t) {
      var e = (t - this._startTime - this._pausedTime) % this._life;this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = false;
    }, fire: function (t, e) {
      t = "on" + t, this[t] && this[t](this._target, e);
    }, pause: function () {
      this._paused = true;
    }, resume: function () {
      this._paused = false;
    } };var dp = function () {
    this.head = null, this.tail = null, this._len = 0;
  },
      fp = dp.prototype;fp.insert = function (t) {
    var e = new pp(t);return this.insertEntry(e), e;
  }, fp.insertEntry = function (t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, fp.remove = function (t) {
    var e = t.prev,
        n = t.next;e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, fp.len = function () {
    return this._len;
  }, fp.clear = function () {
    this.head = this.tail = null, this._len = 0;
  };var pp = function (t) {
    this.value = t, this.next, this.prev;
  },
      gp = function (t) {
    this._list = new dp(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
  },
      mp = gp.prototype;mp.put = function (t, e) {
    var n = this._list,
        i = this._map,
        r = null;if (null == i[t]) {
      var a = n.len(),
          o = this._lastRemovedEntry;if (a >= this._maxSize && a > 0) {
        var s = n.head;n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s;
      }o ? o.value = e : o = new pp(e), o.key = t, n.insertEntry(o), i[t] = o;
    }return r;
  }, mp.get = function (t) {
    var e = this._map[t],
        n = this._list;if (null != e) return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value;
  }, mp.clear = function () {
    this._list.clear(), this._map = {};
  };var vp = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1] },
      yp = new gp(20),
      _p = null,
      xp = ie,
      wp = re,
      bp = (Object.freeze || Object)({ parse: Qt, lift: ee, toHex: ne, fastLerp: ie, fastMapToColor: xp, lerp: re, mapToColor: wp, modifyHSL: ae, modifyAlpha: oe, stringify: se }),
      Sp = Array.prototype.slice,
      Mp = function (t, e, n, i) {
    this._tracks = {}, this._target = t, this._loop = e || false, this._getter = n || le, this._setter = i || ue, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [];
  };Mp.prototype = { when: function (t, e) {
      var n = this._tracks;for (var i in e) if (e.hasOwnProperty(i)) {
        if (!n[i]) {
          n[i] = [];var r = this._getter(this._target, i);if (null == r) continue;0 !== t && n[i].push({ time: 0, value: ve(r) });
        }n[i].push({ time: t, value: e[i] });
      }return this;
    }, during: function (t) {
      return this._onframeList.push(t), this;
    }, pause: function () {
      for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();this._paused = true;
    }, resume: function () {
      for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();this._paused = false;
    }, isPaused: function () {
      return !!this._paused;
    }, _doneCallback: function () {
      this._tracks = {}, this._clipList.length = 0;for (var t = this._doneList, e = t.length, n = 0; n < e; n++) t[n].call(this);
    }, start: function (t, e) {
      var n,
          i = this,
          r = 0,
          a = function () {
        --r || i._doneCallback();
      };for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
        var s = xe(this, t, a, this._tracks[o], o, e);s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s);
      }if (n) {
        var l = n.onframe;n.onframe = function (t, e) {
          l(t, e);for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e);
        };
      }return r || this._doneCallback(), this;
    }, stop: function (t) {
      for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
        var r = e[i];t && r.onframe(this._target, 1), n && n.removeClip(r);
      }e.length = 0;
    }, delay: function (t) {
      return this._delay = t, this;
    }, done: function (t) {
      return t && this._doneList.push(t), this;
    }, getClips: function () {
      return this._clipList;
    } };var Ip = 1;"undefined" != typeof window && (Ip = Math.max(window.devicePixelRatio || 1, 1));var Ap = Ip,
      Dp = function () {},
      Tp = Dp,
      Cp = function () {
    this.animators = [];
  };Cp.prototype = { constructor: Cp, animate: function (t, e) {
      var n,
          i = false,
          r = this,
          a = this.__zr;if (t) {
        var o = t.split("."),
            s = r;i = "shape" === o[0];for (var u = 0, h = o.length; u < h; u++) s && (s = s[o[u]]);s && (n = s);
      } else n = r;if (!n) return undefined;var c = r.animators,
          d = new Mp(n, e);return d.during(function (t) {
        r.dirty(i);
      }).done(function () {
        c.splice(l(c, d), 1);
      }), c.push(d), a && a.animation.addAnimator(d), d;
    }, stopAnimation: function (t) {
      for (var e = this.animators, n = e.length, i = 0; i < n; i++) e[i].stop(t);return e.length = 0, this;
    }, animateTo: function (t, e, n, i, r, a) {
      we(this, t, e, n, i, r, a);
    }, animateFrom: function (t, e, n, i, r, a) {
      we(this, t, e, n, i, r, a, true);
    } };var kp = function (t) {
    op.call(this, t), Zf.call(this, t), Cp.call(this, t), this.id = t.id || xf();
  };kp.prototype = { type: "element", name: "", __zr: null, ignore: false, clipPath: null, isGroup: false, drift: function (t, e) {
      switch (this.draggable) {case "horizontal":
          e = 0;break;case "vertical":
          t = 0;}var n = this.transform;n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(false);
    }, beforeUpdate: function () {}, afterUpdate: function () {}, update: function () {
      this.updateTransform();
    }, traverse: function (t, e) {}, attrKV: function (t, e) {
      if ("position" === t || "scale" === t || "origin" === t) {
        if (e) {
          var n = this[t];n || (n = this[t] = []), n[0] = e[0], n[1] = e[1];
        }
      } else this[t] = e;
    }, hide: function () {
      this.ignore = true, this.__zr && this.__zr.refresh();
    }, show: function () {
      this.ignore = false, this.__zr && this.__zr.refresh();
    }, attr: function (t, e) {
      if ("string" == typeof t) this.attrKV(t, e);else if (b(t)) for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);return this.dirty(false), this;
    }, setClipPath: function (t) {
      var e = this.__zr;e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(false);
    }, removeClipPath: function () {
      var t = this.clipPath;t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(false));
    }, addSelfToZr: function (t) {
      this.__zr = t;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);this.clipPath && this.clipPath.addSelfToZr(t);
    }, removeSelfFromZr: function (t) {
      this.__zr = null;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);this.clipPath && this.clipPath.removeSelfFromZr(t);
    } }, h(kp, Cp), h(kp, op), h(kp, Zf);var Lp = rt,
      Pp = Math.min,
      Op = Math.max;Me.prototype = { constructor: Me, union: function (t) {
      var e = Pp(t.x, this.x),
          n = Pp(t.y, this.y);this.width = Op(t.x + t.width, this.x + this.width) - e, this.height = Op(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n;
    }, applyTransform: function () {
      var t = [],
          e = [],
          n = [],
          i = [];return function (r) {
        if (r) {
          t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, Lp(t, t, r), Lp(e, e, r), Lp(n, n, r), Lp(i, i, r), this.x = Pp(t[0], e[0], n[0], i[0]), this.y = Pp(t[1], e[1], n[1], i[1]);var a = Op(t[0], e[0], n[0], i[0]),
              o = Op(t[1], e[1], n[1], i[1]);this.width = a - this.x, this.height = o - this.y;
        }
      };
    }(), calculateTransform: function (t) {
      var e = this,
          n = t.width / e.width,
          i = t.height / e.height,
          r = Lt();return Et(r, r, [-e.x, -e.y]), Rt(r, r, [n, i]), Et(r, r, [t.x, t.y]), r;
    }, intersect: function (t) {
      if (!t) return false;t instanceof Me || (t = Me.create(t));var e = this,
          n = e.x,
          i = e.x + e.width,
          r = e.y,
          a = e.y + e.height,
          o = t.x,
          s = t.x + t.width,
          l = t.y,
          u = t.y + t.height;return !(i < o || s < n || a < l || u < r);
    }, contain: function (t, e) {
      var n = this;return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
    }, clone: function () {
      return new Me(this.x, this.y, this.width, this.height);
    }, copy: function (t) {
      this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
    }, plain: function () {
      return { x: this.x, y: this.y, width: this.width, height: this.height };
    } }, Me.create = function (t) {
    return new Me(t.x, t.y, t.width, t.height);
  };var Np = function (t) {
    t = t || {}, kp.call(this, t);for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);this._children = [], this.__storage = null, this.__dirty = true;
  };Np.prototype = { constructor: Np, isGroup: true, type: "group", silent: false, children: function () {
      return this._children.slice();
    }, childAt: function (t) {
      return this._children[t];
    }, childOfName: function (t) {
      for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n];
    }, childCount: function () {
      return this._children.length;
    }, add: function (t) {
      return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
    }, addBefore: function (t, e) {
      if (t && t !== this && t.parent !== this && e && e.parent === this) {
        var n = this._children,
            i = n.indexOf(e);i >= 0 && (n.splice(i, 0, t), this._doAdd(t));
      }return this;
    }, _doAdd: function (t) {
      t.parent && t.parent.remove(t), t.parent = this;var e = this.__storage,
          n = this.__zr;e && e !== t.__storage && (e.addToStorage(t), t instanceof Np && t.addChildrenToStorage(e)), n && n.refresh();
    }, remove: function (t) {
      var e = this.__zr,
          n = this.__storage,
          i = this._children,
          r = l(i, t);return r < 0 ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof Np && t.delChildrenFromStorage(n)), e && e.refresh(), this);
    }, removeAll: function () {
      var t,
          e,
          n = this._children,
          i = this.__storage;for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof Np && t.delChildrenFromStorage(i)), t.parent = null;return n.length = 0, this;
    }, eachChild: function (t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i];t.call(e, r, i);
      }return this;
    }, traverse: function (t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];t.call(e, i), "group" === i.type && i.traverse(t, e);
      }return this;
    }, addChildrenToStorage: function (t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];t.addToStorage(n), n instanceof Np && n.addChildrenToStorage(t);
      }
    }, delChildrenFromStorage: function (t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];t.delFromStorage(n), n instanceof Np && n.delChildrenFromStorage(t);
      }
    }, dirty: function () {
      return this.__dirty = true, this.__zr && this.__zr.refresh(), this;
    }, getBoundingRect: function (t) {
      for (var e = null, n = new Me(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
        var o = i[a];if (!o.ignore && !o.invisible) {
          var s = o.getBoundingRect(),
              l = o.getLocalTransform(r);l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s));
        }
      }return e || n;
    } }, u(Np, kp);var Ep = 32,
      zp = 7,
      Rp = function () {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  };Rp.prototype = { constructor: Rp, traverse: function (t, e) {
      for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e);
    }, getDisplayList: function (t, e) {
      return e = e || false, t && this.updateDisplayList(e), this._displayList;
    }, updateDisplayList: function (t) {
      this._displayListLen = 0;for (var e = this._roots, n = this._displayList, i = 0, r = e.length; i < r; i++) this._updateAndAddDisplayable(e[i], null, t);n.length = this._displayListLen, bf.canvasSupported && Pe(n, Oe);
    }, _updateAndAddDisplayable: function (t, e, n) {
      if (!t.ignore || n) {
        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();var i = t.clipPath;if (i) {
          e = e ? e.slice() : [];for (var r = i, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath;
        }if (t.isGroup) {
          for (var o = t._children, s = 0; s < o.length; s++) {
            var l = o[s];t.__dirty && (l.__dirty = true), this._updateAndAddDisplayable(l, e, n);
          }t.__dirty = false;
        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
      }
    }, addRoot: function (t) {
      t.__storage !== this && (t instanceof Np && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));
    }, delRoot: function (t) {
      if (null == t) {
        for (var e = 0; e < this._roots.length; e++) {
          var n = this._roots[e];n instanceof Np && n.delChildrenFromStorage(this);
        }return this._roots = [], this._displayList = [], undefined;
      }if (t instanceof Array) for (var e = 0, i = t.length; e < i; e++) this.delRoot(t[e]);else {
        var r = l(this._roots, t);r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Np && t.delChildrenFromStorage(this));
      }
    }, addToStorage: function (t) {
      return t && (t.__storage = this, t.dirty(false)), this;
    }, delFromStorage: function (t) {
      return t && (t.__storage = null), this;
    }, dispose: function () {
      this._renderList = this._roots = null;
    }, displayableSortFunc: Oe };var Bp = { shadowBlur: 1, shadowOffsetX: 1, shadowOffsetY: 1, textShadowBlur: 1, textShadowOffsetX: 1, textShadowOffsetY: 1, textBoxShadowBlur: 1, textBoxShadowOffsetX: 1, textBoxShadowOffsetY: 1 },
      Fp = function (t, e, n) {
    return Bp.hasOwnProperty(e) ? n *= t.dpr : n;
  },
      Vp = { NONE: 0, STYLE_BIND: 1, PLAIN_TEXT: 2 },
      Gp = 9,
      Wp = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
      Hp = function (t) {
    this.extendFrom(t, false);
  };Hp.prototype = { constructor: Hp, fill: "#000", stroke: null, opacity: 1, fillOpacity: null, strokeOpacity: null, lineDash: null, lineDashOffset: 0, shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, lineWidth: 1, strokeNoScale: false, text: null, font: null, textFont: null, fontStyle: null, fontWeight: null, fontSize: null, fontFamily: null, textTag: null, textFill: "#000", textStroke: null, textWidth: null, textHeight: null, textStrokeWidth: 0, textLineHeight: null, textPosition: "inside", textRect: null, textOffset: null, textAlign: null, textVerticalAlign: null, textDistance: 5, textShadowColor: "transparent", textShadowBlur: 0, textShadowOffsetX: 0, textShadowOffsetY: 0, textBoxShadowColor: "transparent", textBoxShadowBlur: 0, textBoxShadowOffsetX: 0, textBoxShadowOffsetY: 0, transformText: false, textRotation: 0, textOrigin: null, textBackgroundColor: null, textBorderColor: null, textBorderWidth: 0, textBorderRadius: 0, textPadding: null, rich: null, truncate: null, blend: null, bind: function (t, e, n) {
      var i = this,
          r = n && n.style,
          a = !r || t.__attrCachedBy !== Vp.STYLE_BIND;t.__attrCachedBy = Vp.STYLE_BIND;for (var o = 0; o < Wp.length; o++) {
        var s = Wp[o],
            l = s[0];(a || i[l] !== r[l]) && (t[l] = Fp(t, l, i[l] || s[1]));
      }if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
        var u = i.lineWidth;t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
      }
    }, hasFill: function () {
      var t = this.fill;return null != t && "none" !== t;
    }, hasStroke: function () {
      var t = this.stroke;return null != t && "none" !== t && this.lineWidth > 0;
    }, extendFrom: function (t, e) {
      if (t) for (var n in t) !t.hasOwnProperty(n) || true !== e && (false === e ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n]);
    }, set: function (t, e) {
      "string" == typeof t ? this[t] = e : this.extendFrom(t, true);
    }, clone: function () {
      var t = new this.constructor();return t.extendFrom(this, true), t;
    }, getGradient: function (t, e, n) {
      for (var i = "radial" === e.type ? Ee : Ne, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) r.addColorStop(a[o].offset, a[o].color);return r;
    } };for (var Zp = Hp.prototype, Xp = 0; Xp < Wp.length; Xp++) {
    var jp = Wp[Xp];jp[0] in Zp || (Zp[jp[0]] = jp[1]);
  }Hp.getGradient = Zp.getGradient;var Up = function (t, e) {
    this.image = t, this.repeat = e, this.type = "pattern";
  };Up.prototype.getCanvasPattern = function (t) {
    return t.createPattern(this.image, this.repeat || "repeat");
  };var Yp = function (t, e, n) {
    var i;n = n || Ap, "string" == typeof t ? i = Re(t, e, n) : b(t) && (i = t, t = i.id), this.id = t, this.dom = i;var r = i.style;r && (i.onselectstart = ze, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = false, this.lastFrameAlpha = .7, this.dpr = n;
  };Yp.prototype = { constructor: Yp, __dirty: true, __used: false, __drawIndex: 0, __startIndex: 0, __endIndex: 0, incremental: false, getElementCount: function () {
      return this.__endIndex - this.__startIndex;
    }, initContext: function () {
      this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
    }, createBackBuffer: function () {
      var t = this.dpr;this.domBack = Re("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t);
    }, resize: function (t, e) {
      var n = this.dpr,
          i = this.dom,
          r = i.style,
          a = this.domBack;r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 !== n && this.ctxBack.scale(n, n));
    }, clear: function (t, e) {
      var n = this.dom,
          i = this.ctx,
          r = n.width,
          a = n.height,
          e = e || this.clearColor,
          o = this.motionBlur && !t,
          s = this.lastFrameAlpha,
          l = this.dpr;if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
        var u;e.colorStops ? (u = e.__canvasGradient || Hp.getGradient(i, e, { x: 0, y: 0, width: r, height: a }), e.__canvasGradient = u) : e.image && (u = Up.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = u || e, i.fillRect(0, 0, r, a), i.restore();
      }if (o) {
        var h = this.domBack;i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, r, a), i.restore();
      }
    } };var qp = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
    setTimeout(t, 16);
  },
      $p = new gp(50),
      Kp = {},
      Qp = 0,
      Jp = 5e3,
      tg = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
      eg = "12px sans-serif",
      ng = {};ng.measureText = function (t, e) {
    var n = s();return n.font = e || eg, n.measureText(t);
  };var ig = eg,
      rg = { left: 1, right: 1, center: 1 },
      ag = { top: 1, bottom: 1, middle: 1 },
      og = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],
      sg = {},
      lg = {},
      ug = new Me(),
      hg = function () {};hg.prototype = { constructor: hg, drawRectText: function (t, e) {
      var n = this.style;e = n.textRect || e, this.__dirty && sn(n);var i = n.text;if (null != i && (i += ""), Mn(i, n)) {
        t.save();var r = this.transform;n.transformText ? this.setTransform(t) : r && (ug.copy(e), ug.applyTransform(r), e = ug), un(this, t, i, n, e, Gp), t.restore();
      }
    } }, In.prototype = { constructor: In, type: "displayable", __dirty: true, invisible: false, z: 0, z2: 0, zlevel: 0, draggable: false, dragging: false, silent: false, culling: false, cursor: "pointer", rectHover: false, progressive: false, incremental: false, globalScaleRatio: 1, beforeBrush: function (t) {}, afterBrush: function (t) {}, brush: function (t, e) {}, getBoundingRect: function () {}, contain: function (t, e) {
      return this.rectContain(t, e);
    }, traverse: function (t, e) {
      t.call(e, this);
    }, rectContain: function (t, e) {
      var n = this.transformCoordToLocal(t, e);return this.getBoundingRect().contain(n[0], n[1]);
    }, dirty: function () {
      this.__dirty = this.__dirtyText = true, this._rect = null, this.__zr && this.__zr.refresh();
    }, animateStyle: function (t) {
      return this.animate("style", t);
    }, attrKV: function (t, e) {
      "style" !== t ? kp.prototype.attrKV.call(this, t, e) : this.style.set(e);
    }, setStyle: function (t, e) {
      return this.style.set(t, e), this.dirty(false), this;
    }, useStyle: function (t) {
      return this.style = new Hp(t, this), this.dirty(false), this;
    }, calculateTextPosition: null }, u(In, kp), h(In, hg), An.prototype = { constructor: An, type: "image", brush: function (t, e) {
      var n = this.style,
          i = n.image;n.bind(t, this, e);var r = this._image = Fe(i, this._image, this, this.onload);if (r && Ge(r)) {
        var a = n.x || 0,
            o = n.y || 0,
            s = n.width,
            l = n.height,
            u = r.width / r.height;if (null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
          var h = n.sx || 0,
              c = n.sy || 0;t.drawImage(r, h, c, n.sWidth, n.sHeight, a, o, s, l);
        } else if (n.sx && n.sy) {
          var h = n.sx,
              c = n.sy,
              d = s - h,
              f = l - c;t.drawImage(r, h, c, d, f, a, o, s, l);
        } else t.drawImage(r, a, o, s, l);null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
      }
    }, getBoundingRect: function () {
      var t = this.style;return this._rect || (this._rect = new Me(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;
    } }, u(An, In);var cg = new Me(0, 0, 0, 0),
      dg = new Me(0, 0, 0, 0),
      fg = function (t, e, n) {
    this.type = "canvas";var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();this._opts = n = a({}, n || {}), this.dpr = n.devicePixelRatio || Ap, this._singleCanvas = i, this.root = t;var r = t.style;r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;var o = this._zlevelList = [],
        s = this._layers = {};if (this._layerConfig = {}, this._needsManuallyCompositing = false, i) {
      var l = t.width,
          u = t.height;null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this._height = u;var h = new Yp(t, this, this.dpr);h.__builtin__ = true, h.initContext(), s[314159] = h, h.zlevel = 314159, o.push(314159), this._domRoot = t;
    } else {
      this._width = this._getSize(0), this._height = this._getSize(1);var c = this._domRoot = Pn(this._width, this._height);t.appendChild(c);
    }this._hoverlayer = null, this._hoverElements = [];
  };fg.prototype = { constructor: fg, getType: function () {
      return "canvas";
    }, isSingleCanvas: function () {
      return this._singleCanvas;
    }, getViewportRoot: function () {
      return this._domRoot;
    }, getViewportRootOffset: function () {
      var t = this.getViewportRoot();if (t) return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 };
    }, refresh: function (t) {
      var e = this.storage.getDisplayList(true),
          n = this._zlevelList;this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);for (var i = 0; i < n.length; i++) {
        var r = n[i],
            a = this._layers[r];if (!a.__builtin__ && a.refresh) {
          var o = 0 === i ? this._backgroundColor : null;a.refresh(o);
        }
      }return this.refreshHover(), this;
    }, addHover: function (t, e) {
      if (!t.__hoverMir) {
        var n = new t.constructor({ style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent });return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n;
      }
    }, removeHover: function (t) {
      var e = t.__hoverMir,
          n = this._hoverElements,
          i = l(n, e);i >= 0 && n.splice(i, 1), t.__hoverMir = null;
    }, clearHover: function (t) {
      for (var e = this._hoverElements, n = 0; n < e.length; n++) {
        var i = e[n].__from;i && (i.__hoverMir = null);
      }e.length = 0;
    }, refreshHover: function () {
      var t = this._hoverElements,
          e = t.length,
          n = this._hoverlayer;if (n && n.clear(), e) {
        Pe(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(1e5));var i = {};n.ctx.save();for (var r = 0; r < e;) {
          var a = t[r],
              o = a.__from;o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, true, i))) : (t.splice(r, 1), o.__hoverMir = null, e--);
        }n.ctx.restore();
      }
    }, getHoverLayer: function () {
      return this.getLayer(1e5);
    }, _paintList: function (t, e, n) {
      if (this._redrawId === n) {
        e = e || false, this._updateLayerStatus(t);var i = this._doPaintList(t, e);if (this._needsManuallyCompositing && this._compositeManually(), !i) {
          var r = this;qp(function () {
            r._paintList(t, e, n);
          });
        }
      }
    }, _compositeManually: function () {
      var t = this.getLayer(314159).ctx,
          e = this._domRoot.width,
          n = this._domRoot.height;t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
        i.virtual && t.drawImage(i.dom, 0, 0, e, n);
      });
    }, _doPaintList: function (t, e) {
      for (var n = [], i = 0; i < this._zlevelList.length; i++) {
        var r = this._zlevelList[i],
            a = this._layers[r];a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a);
      }for (var o = true, s = 0; s < n.length; s++) {
        var a = n[s],
            l = a.ctx,
            u = {};l.save();var h = e ? a.__startIndex : a.__drawIndex,
            c = !e && a.incremental && Date.now,
            f = c && Date.now(),
            p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;if (a.__startIndex === a.__endIndex) a.clear(false, p);else if (h === a.__startIndex) {
          var g = t[h];g.incremental && g.notClear && !e || a.clear(false, p);
        }-1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = a.__startIndex);for (var m = h; m < a.__endIndex; m++) {
          var v = t[m];if (this._doPaintEl(v, a, e, u), v.__dirty = v.__dirtyText = false, c) {
            if (Date.now() - f > 15) break;
          }
        }a.__drawIndex = m, a.__drawIndex < a.__endIndex && (o = false), u.prevElClipPaths && l.restore(), l.restore();
      }return bf.wxa && d(this._layers, function (t) {
        t && t.ctx && t.ctx.draw && t.ctx.draw();
      }), o;
    }, _doPaintEl: function (t, e, n, i) {
      var r = e.ctx,
          a = t.transform;if ((e.__dirty || n) && !t.invisible && 0 !== t.style.opacity && (!a || a[0] || a[3]) && (!t.culling || !Cn(t, this._width, this._height))) {
        var o = t.__clipPaths,
            s = i.prevElClipPaths;s && !kn(o, s) || (s && (r.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), Ln(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r);
      }
    }, getLayer: function (t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = 314159);var n = this._layers[t];return n || (n = new Yp("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = true, this._layerConfig[t] && i(n, this._layerConfig[t], true), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
    }, insertLayer: function (t, e) {
      var n = this._layers,
          i = this._zlevelList,
          r = i.length,
          a = null,
          o = -1,
          s = this._domRoot;if (n[t]) return undefined;if (!Tn(e)) return undefined;if (r > 0 && t > i[0]) {
        for (o = 0; o < r - 1 && !(i[o] < t && i[o + 1] > t); o++);a = n[i[o]];
      }if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual) if (a) {
        var l = a.dom;l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);
      } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
    }, eachLayer: function (t, e) {
      var n,
          i,
          r = this._zlevelList;for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n);
    }, eachBuiltinLayer: function (t, e) {
      var n,
          i,
          r,
          a = this._zlevelList;for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i);
    }, eachOtherLayer: function (t, e) {
      var n,
          i,
          r,
          a = this._zlevelList;for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i);
    }, getLayers: function () {
      return this._layers;
    }, _updateLayerStatus: function (t) {
      function e(t) {
        r && (r.__endIndex !== t && (r.__dirty = true), r.__endIndex = t);
      }if (this.eachBuiltinLayer(function (t, e) {
        t.__dirty = t.__used = false;
      }), this._singleCanvas) for (var n = 1; n < t.length; n++) {
        var i = t[n];if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
          this._needsManuallyCompositing = true;break;
        }
      }for (var r = null, a = 0, n = 0; n < t.length; n++) {
        var o,
            i = t[n],
            s = i.zlevel;i.incremental ? (o = this.getLayer(s + .001, this._needsManuallyCompositing), o.incremental = true, a = 1) : o = this.getLayer(s + (a > 0 ? .01 : 0), this._needsManuallyCompositing), o.__builtin__ || Tp("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = true, o.__startIndex !== n && (o.__dirty = true), o.__startIndex = n, o.incremental ? o.__drawIndex = -1 : o.__drawIndex = n, e(n), r = o), i.__dirty && (o.__dirty = true, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n));
      }e(n), this.eachBuiltinLayer(function (t, e) {
        !t.__used && t.getElementCount() > 0 && (t.__dirty = true, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
      });
    }, clear: function () {
      return this.eachBuiltinLayer(this._clearLayer), this;
    }, _clearLayer: function (t) {
      t.clear();
    }, setBackgroundColor: function (t) {
      this._backgroundColor = t;
    }, configLayer: function (t, e) {
      if (e) {
        var n = this._layerConfig;n[t] ? i(n[t], e, true) : n[t] = e;for (var r = 0; r < this._zlevelList.length; r++) {
          var a = this._zlevelList[r];if (a === t || a === t + .01) {
            i(this._layers[a], n[t], true);
          }
        }
      }
    }, delLayer: function (t) {
      var e = this._layers,
          n = this._zlevelList,
          i = e[t];i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(l(n, t), 1));
    }, resize: function (t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot;n.style.display = "none";var i = this._opts;if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width !== t || e !== this._height) {
          n.style.width = t + "px", n.style.height = e + "px";for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);d(this._progressiveLayers, function (n) {
            n.resize(t, e);
          }), this.refresh(true);
        }this._width = t, this._height = e;
      } else {
        if (null == t || null == e) return;this._width = t, this._height = e, this.getLayer(314159).resize(t, e);
      }return this;
    }, clearLayer: function (t) {
      var e = this._layers[t];e && e.clear();
    }, dispose: function () {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
    }, getRenderedCanvas: function (t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[314159].dom;var e = new Yp("image", this, t.pixelRatio || this.dpr);if (e.initContext(), e.clear(false, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
        this.refresh();var n = e.dom.width,
            i = e.dom.height,
            r = e.ctx;this.eachLayer(function (t) {
          t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());
        });
      } else for (var a = {}, o = this.storage.getDisplayList(true), s = 0; s < o.length; s++) {
        var l = o[s];this._doPaintEl(l, e, true, a);
      }return e.dom;
    }, getWidth: function () {
      return this._width;
    }, getHeight: function () {
      return this._height;
    }, _getSize: function (t) {
      var e = this._opts,
          n = ["width", "height"][t],
          i = ["clientWidth", "clientHeight"][t],
          r = ["paddingLeft", "paddingTop"][t],
          a = ["paddingRight", "paddingBottom"][t];if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);var o = this.root,
          s = document.defaultView.getComputedStyle(o);return (o[i] || Dn(s[n]) || Dn(o.style[n])) - (Dn(s[r]) || 0) - (Dn(s[a]) || 0) | 0;
    }, pathToImage: function (t, e) {
      e = e || this.dpr;var n = document.createElement("canvas"),
          i = n.getContext("2d"),
          r = t.getBoundingRect(),
          a = t.style,
          o = a.shadowBlur * e,
          s = a.shadowOffsetX * e,
          l = a.shadowOffsetY * e,
          u = a.hasStroke() ? a.lineWidth : 0,
          h = Math.max(u / 2, -s + o),
          c = Math.max(u / 2, s + o),
          d = Math.max(u / 2, -l + o),
          f = Math.max(u / 2, l + o),
          p = r.width + h + c,
          g = r.height + d + f;n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;var m = { position: t.position, rotation: t.rotation, scale: t.scale };t.position = [h - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);var v = An,
          y = new v({ style: { x: 0, y: 0, image: n } });return null != m.position && (y.position = t.position = m.position), null != m.rotation && (y.rotation = t.rotation = m.rotation), null != m.scale && (y.scale = t.scale = m.scale), y;
    } };var pg = function (t) {
    t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = false, this._time, this._pausedTime, this._pauseStart, this._paused = false, Zf.call(this);
  };pg.prototype = { constructor: pg, addClip: function (t) {
      this._clips.push(t);
    }, addAnimator: function (t) {
      t.animation = this;for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n]);
    }, removeClip: function (t) {
      var e = l(this._clips, t);e >= 0 && this._clips.splice(e, 1);
    }, removeAnimator: function (t) {
      for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);t.animation = null;
    }, _update: function () {
      for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; o < i; o++) {
        var s = n[o],
            l = s.step(t, e);l && (r.push(l), a.push(s));
      }for (var o = 0; o < i;) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;i = r.length;for (var o = 0; o < i; o++) a[o].fire(r[o]);this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
    }, _startLoop: function () {
      function t() {
        e._running && (qp(t), !e._paused && e._update());
      }var e = this;this._running = true, qp(t);
    }, start: function () {
      this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
    }, stop: function () {
      this._running = false;
    }, pause: function () {
      this._paused || (this._pauseStart = new Date().getTime(), this._paused = true);
    }, resume: function () {
      this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = false);
    }, clear: function () {
      this._clips = [];
    }, isFinished: function () {
      return !this._clips.length;
    }, animate: function (t, e) {
      e = e || {};var n = new Mp(t, e.loop, e.getter, e.setter);return this.addAnimator(n), n;
    } }, h(pg, Zf);var gg = bf.domSupported,
      mg = function () {
    var t = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        e = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 };return { mouse: t, touch: ["touchstart", "touchend", "touchmove"], pointer: f(t, function (t) {
        var n = t.replace("mouse", "pointer");return e.hasOwnProperty(n) ? n : t;
      }) };
  }(),
      vg = { mouse: ["mousemove", "mouseup"], pointer: ["pointermove", "pointerup"] },
      yg = Fn.prototype;yg.stopPropagation = yg.stopImmediatePropagation = yg.preventDefault = F;var _g = { mousedown: function (t) {
      t = xt(this.dom, t), this._mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t);
    }, mousemove: function (t) {
      t = xt(this.dom, t);var e = this._mayPointerCapture;!e || t.zrX === e[0] && t.zrY === e[1] || Zn(this, true), this.trigger("mousemove", t);
    }, mouseup: function (t) {
      t = xt(this.dom, t), Zn(this, false), this.trigger("mouseup", t);
    }, mouseout: function (t) {
      t = xt(this.dom, t), this._pointerCapturing && (t.zrEventControl = "no_globalout");var e = t.toElement || t.relatedTarget;t.zrIsToLocalDOM = Bn(this, e), this.trigger("mouseout", t);
    }, touchstart: function (t) {
      t = xt(this.dom, t), zn(t), this._lastTouchMoment = new Date(), this.handler.processGesture(t, "start"), _g.mousemove.call(this, t), _g.mousedown.call(this, t);
    }, touchmove: function (t) {
      t = xt(this.dom, t), zn(t), this.handler.processGesture(t, "change"), _g.mousemove.call(this, t);
    }, touchend: function (t) {
      t = xt(this.dom, t), zn(t), this.handler.processGesture(t, "end"), _g.mouseup.call(this, t), +new Date() - this._lastTouchMoment < 300 && _g.click.call(this, t);
    }, pointerdown: function (t) {
      _g.mousedown.call(this, t);
    }, pointermove: function (t) {
      Nn(t) || _g.mousemove.call(this, t);
    }, pointerup: function (t) {
      _g.mouseup.call(this, t);
    }, pointerout: function (t) {
      Nn(t) || _g.mouseout.call(this, t);
    } };d(["click", "mousewheel", "dblclick", "contextmenu"], function (t) {
    _g[t] = function (e) {
      e = xt(this.dom, e), this.trigger(t, e);
    };
  });var xg = { pointermove: function (t) {
      Nn(t) || xg.mousemove.call(this, t);
    }, pointerup: function (t) {
      xg.mouseup.call(this, t);
    }, mousemove: function (t) {
      this.trigger("mousemove", t);
    }, mouseup: function (t) {
      var e = this._pointerCapturing;Zn(this, false), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t));
    } },
      wg = jn.prototype;wg.dispose = function () {
    Hn(this._localHandlerScope), gg && Hn(this._globalHandlerScope);
  }, wg.setCursor = function (t) {
    this.dom.style && (this.dom.style.cursor = t || "default");
  }, h(jn, Zf);var bg = !bf.canvasSupported,
      Sg = { canvas: fg },
      Mg = {},
      Ig = function (t, e, n) {
    n = n || {}, this.dom = e, this.id = t;var i = this,
        r = new Rp(),
        a = n.renderer;if (bg) {
      if (!Sg.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");a = "vml";
    } else a && Sg[a] || (a = "canvas");var o = new Sg[a](e, r, n, t);this.storage = r, this.painter = o;var s = bf.node || bf.worker ? null : new jn(o.getViewportRoot(), o.root);this.handler = new ep(r, o, s, o.root), this.animation = new pg({ stage: { update: v(this.flush, this) } }), this.animation.start(), this._needsRefresh;var l = r.delFromStorage,
        u = r.addToStorage;r.delFromStorage = function (t) {
      l.call(r, t), t && t.removeSelfFromZr(i);
    }, r.addToStorage = function (t) {
      u.call(r, t), t.addSelfToZr(i);
    };
  };Ig.prototype = { constructor: Ig, getId: function () {
      return this.id;
    }, add: function (t) {
      this.storage.addRoot(t), this._needsRefresh = true;
    }, remove: function (t) {
      this.storage.delRoot(t), this._needsRefresh = true;
    }, configLayer: function (t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = true;
    }, setBackgroundColor: function (t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = true;
    }, refreshImmediately: function () {
      this._needsRefresh = this._needsRefreshHover = false, this.painter.refresh(), this._needsRefresh = this._needsRefreshHover = false;
    }, refresh: function () {
      this._needsRefresh = true;
    }, flush: function () {
      var t;this._needsRefresh && (t = true, this.refreshImmediately()), this._needsRefreshHover && (t = true, this.refreshHoverImmediately()), t && this.trigger("rendered");
    }, addHover: function (t, e) {
      if (this.painter.addHover) {
        var n = this.painter.addHover(t, e);return this.refreshHover(), n;
      }
    }, removeHover: function (t) {
      this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
    }, clearHover: function () {
      this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
    }, refreshHover: function () {
      this._needsRefreshHover = true;
    }, refreshHoverImmediately: function () {
      this._needsRefreshHover = false, this.painter.refreshHover && this.painter.refreshHover();
    }, resize: function (t) {
      t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
    }, clearAnimation: function () {
      this.animation.clear();
    }, getWidth: function () {
      return this.painter.getWidth();
    }, getHeight: function () {
      return this.painter.getHeight();
    }, pathToImage: function (t, e) {
      return this.painter.pathToImage(t, e);
    }, setCursorStyle: function (t) {
      this.handler.setCursorStyle(t);
    }, findHover: function (t, e) {
      return this.handler.findHover(t, e);
    }, on: function (t, e, n) {
      this.handler.on(t, e, n);
    }, off: function (t, e) {
      this.handler.off(t, e);
    }, trigger: function (t, e) {
      this.handler.trigger(t, e);
    }, clear: function () {
      this.storage.delRoot(), this.painter.clear();
    }, dispose: function () {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Kn(this.id);
    } };var Ag = (Object.freeze || Object)({ version: "4.3.0", init: Un, dispose: Yn, getInstance: qn, registerPainter: $n }),
      Dg = d,
      Tg = b,
      Cg = _,
      kg = "series\0",
      Lg = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
      Pg = 0,
      Og = ".",
      Ng = "___EC__COMPONENT__CONTAINER___",
      Eg = 0,
      zg = function (t) {
    for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);return function (e, n, i) {
      for (var r = {}, a = 0; a < t.length; a++) {
        var o = t[a][1];if (!(n && l(n, o) >= 0 || i && l(i, o) < 0)) {
          var s = e.getShallow(o);null != s && (r[t[a][0]] = s);
        }
      }return r;
    };
  },
      Rg = zg([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
      Bg = { getLineStyle: function (t) {
      var e = Rg(this, t);return e.lineDash = this.getLineDash(e.lineWidth), e;
    }, getLineDash: function (t) {
      null == t && (t = 1);var e = this.get("type"),
          n = Math.max(t, 2),
          i = 4 * t;return "solid" !== e && null != e && ("dashed" === e ? [i, i] : [n, n]);
    } },
      Fg = zg([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
      Vg = { getAreaStyle: function (t, e) {
      return Fg(this, t, e);
    } },
      Gg = Math.pow,
      Wg = Math.sqrt,
      Hg = 1e-8,
      Zg = 1e-4,
      Xg = Wg(3),
      jg = 0.3333333333333333,
      Ug = V(),
      Yg = V(),
      qg = V(),
      $g = Math.min,
      Kg = Math.max,
      Qg = Math.sin,
      Jg = Math.cos,
      tm = 2 * Math.PI,
      em = V(),
      nm = V(),
      im = V(),
      rm = [],
      am = [],
      om = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
      sm = [],
      lm = [],
      um = [],
      hm = [],
      cm = Math.min,
      dm = Math.max,
      fm = Math.cos,
      pm = Math.sin,
      gm = Math.sqrt,
      mm = Math.abs,
      vm = "undefined" != typeof Float32Array,
      ym = function (t) {
    this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
  };ym.prototype = { constructor: ym, _xi: 0, _yi: 0, _x0: 0, _y0: 0, _ux: 0, _uy: 0, _len: 0, _lineDash: null, _dashOffset: 0, _dashIdx: 0, _dashSum: 0, setScale: function (t, e, n) {
      n = n || 0, this._ux = mm(n / Ap / t) || 0, this._uy = mm(n / Ap / e) || 0;
    }, getContext: function () {
      return this._ctx;
    }, beginPath: function (t) {
      return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
    }, moveTo: function (t, e) {
      return this.addData(om.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
    }, lineTo: function (t, e) {
      var n = mm(t - this._xi) > this._ux || mm(e - this._yi) > this._uy || this._len < 5;return this.addData(om.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this;
    }, bezierCurveTo: function (t, e, n, i, r, a) {
      return this.addData(om.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this;
    }, quadraticCurveTo: function (t, e, n, i) {
      return this.addData(om.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this;
    }, arc: function (t, e, n, i, r, a) {
      return this.addData(om.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = fm(r) * n + t, this._yi = pm(r) * n + e, this;
    }, arcTo: function (t, e, n, i, r) {
      return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
    }, rect: function (t, e, n, i) {
      return this._ctx && this._ctx.rect(t, e, n, i), this.addData(om.R, t, e, n, i), this;
    }, closePath: function () {
      this.addData(om.Z);var t = this._ctx,
          e = this._x0,
          n = this._y0;return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this;
    }, fill: function (t) {
      t && t.fill(), this.toStatic();
    }, stroke: function (t) {
      t && t.stroke(), this.toStatic();
    }, setLineDash: function (t) {
      if (t instanceof Array) {
        this._lineDash = t, this._dashIdx = 0;for (var e = 0, n = 0; n < t.length; n++) e += t[n];this._dashSum = e;
      }return this;
    }, setLineDashOffset: function (t) {
      return this._dashOffset = t, this;
    }, len: function () {
      return this._len;
    }, setData: function (t) {
      var e = t.length;this.data && this.data.length === e || !vm || (this.data = new Float32Array(e));for (var n = 0; n < e; n++) this.data[n] = t[n];this._len = e;
    }, appendPath: function (t) {
      t instanceof Array || (t = [t]);for (var e = t.length, n = 0, i = this._len, r = 0; r < e; r++) n += t[r].len();vm && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));for (var r = 0; r < e; r++) for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];this._len = i;
    }, addData: function (t) {
      if (this._saveData) {
        var e = this.data;this._len + arguments.length > e.length && (this._expandData(), e = this.data);for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];this._prevCmd = t;
      }
    }, _expandData: function () {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];this.data = t;
      }
    }, _needsDash: function () {
      return this._lineDash;
    }, _dashedLineTo: function (t, e) {
      var n,
          i,
          r = this._dashSum,
          a = this._dashOffset,
          o = this._lineDash,
          s = this._ctx,
          l = this._xi,
          u = this._yi,
          h = t - l,
          c = e - u,
          d = gm(h * h + c * c),
          f = l,
          p = u,
          g = o.length;for (h /= d, c /= d, a < 0 && (a = r + a), a %= r, f -= a * h, p -= a * c; h > 0 && f <= t || h < 0 && f >= t || 0 === h && (c > 0 && p <= e || c < 0 && p >= e);) i = this._dashIdx, n = o[i], f += h * n, p += c * n, this._dashIdx = (i + 1) % g, h > 0 && f < l || h < 0 && f > l || c > 0 && p < u || c < 0 && p > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? cm(f, t) : dm(f, t), c >= 0 ? cm(p, e) : dm(p, e));h = f - t, c = p - e, this._dashOffset = -gm(h * h + c * c);
    }, _dashedBezierTo: function (t, e, n, i, r, a) {
      var o,
          s,
          l,
          u,
          h,
          c = this._dashSum,
          d = this._dashOffset,
          f = this._lineDash,
          p = this._ctx,
          g = this._xi,
          m = this._yi,
          v = bi,
          y = 0,
          _ = this._dashIdx,
          x = f.length,
          w = 0;for (d < 0 && (d = c + d), d %= c, o = 0; o < 1; o += .1) s = v(g, t, n, r, o + .1) - v(g, t, n, r, o), l = v(m, e, i, a, o + .1) - v(m, e, i, a, o), y += gm(s * s + l * l);for (; _ < x && !((w += f[_]) > d); _++);for (o = (w - d) / y; o <= 1;) u = v(g, t, n, r, o), h = v(m, e, i, a, o), _ % 2 ? p.moveTo(u, h) : p.lineTo(u, h), o += f[_] / y, _ = (_ + 1) % x;_ % 2 != 0 && p.lineTo(r, a), s = r - u, l = a - h, this._dashOffset = -gm(s * s + l * l);
    }, _dashedQuadraticTo: function (t, e, n, i) {
      var r = n,
          a = i;n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a);
    }, toStatic: function () {
      var t = this.data;t instanceof Array && (t.length = this._len, vm && (this.data = new Float32Array(t)));
    }, getBoundingRect: function () {
      sm[0] = sm[1] = um[0] = um[1] = Number.MAX_VALUE, lm[0] = lm[1] = hm[0] = hm[1] = -Number.MAX_VALUE;for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
        var o = t[a++];switch (1 === a && (e = t[a], n = t[a + 1], i = e, r = n), o) {case om.M:
            i = t[a++], r = t[a++], e = i, n = r, um[0] = i, um[1] = r, hm[0] = i, hm[1] = r;break;case om.L:
            Ei(e, n, t[a], t[a + 1], um, hm), e = t[a++], n = t[a++];break;case om.C:
            zi(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], um, hm), e = t[a++], n = t[a++];break;case om.Q:
            Ri(e, n, t[a++], t[a++], t[a], t[a + 1], um, hm), e = t[a++], n = t[a++];break;case om.A:
            var s = t[a++],
                l = t[a++],
                u = t[a++],
                h = t[a++],
                c = t[a++],
                d = t[a++] + c;a += 1;var f = 1 - t[a++];1 === a && (i = fm(c) * u + s, r = pm(c) * h + l), Bi(s, l, u, h, c, d, f, um, hm), e = fm(d) * u + s, n = pm(d) * h + l;break;case om.R:
            i = e = t[a++], r = n = t[a++];Ei(i, r, i + t[a++], r + t[a++], um, hm);break;case om.Z:
            e = i, n = r;}at(sm, sm, um), ot(lm, lm, hm);
      }return 0 === a && (sm[0] = sm[1] = lm[0] = lm[1] = 0), new Me(sm[0], sm[1], lm[0] - sm[0], lm[1] - sm[1]);
    }, rebuildPath: function (t) {
      for (var e, n, i, r, a, o, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; c < h;) {
        var d = s[c++];switch (1 === c && (i = s[c], r = s[c + 1], e = i, n = r), d) {case om.M:
            e = i = s[c++], n = r = s[c++], t.moveTo(i, r);break;case om.L:
            a = s[c++], o = s[c++], (mm(a - i) > l || mm(o - r) > u || c === h - 1) && (t.lineTo(a, o), i = a, r = o);break;case om.C:
            t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case om.Q:
            t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case om.A:
            var f = s[c++],
                p = s[c++],
                g = s[c++],
                m = s[c++],
                v = s[c++],
                y = s[c++],
                _ = s[c++],
                x = s[c++],
                w = g > m ? g : m,
                b = g > m ? 1 : g / m,
                S = g > m ? m / g : 1,
                M = Math.abs(g - m) > .001,
                I = v + y;M ? (t.translate(f, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, v, I, 1 - x), t.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, v, I, 1 - x), 1 === c && (e = fm(v) * g + f, n = pm(v) * m + p), i = fm(I) * g + f, r = pm(I) * m + p;break;case om.R:
            e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);break;case om.Z:
            t.closePath(), i = e, r = n;}
      }
    } }, ym.CMD = om;var _m = 2 * Math.PI,
      xm = 2 * Math.PI,
      wm = ym.CMD,
      bm = 2 * Math.PI,
      Sm = 1e-4,
      Mm = [-1, -1, -1],
      Im = [-1, -1],
      Am = Up.prototype.getCanvasPattern,
      Dm = Math.abs,
      Tm = new ym(true);Ji.prototype = { constructor: Ji, type: "path", __dirtyPath: true, strokeContainThreshold: 5, segmentIgnoreThreshold: 0, subPixelOptimize: false, brush: function (t, e) {
      var n = this.style,
          i = this.path || Tm,
          r = n.hasStroke(),
          a = n.hasFill(),
          o = n.fill,
          s = n.stroke,
          l = a && !!o.colorStops,
          u = r && !!s.colorStops,
          h = a && !!o.image,
          c = r && !!s.image;if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
        var d;l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)), u && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d));
      }l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = Am.call(o, t)), u ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Am.call(s, t));var f = n.lineDash,
          p = n.lineDashOffset,
          g = !!t.setLineDash,
          m = this.getGlobalScale();if (i.setScale(m[0], m[1], this.segmentIgnoreThreshold), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, false), this.path && (this.__dirtyPath = false)) : (t.beginPath(), this.path.rebuildPath(t)), a) if (null != n.fillOpacity) {
        var v = t.globalAlpha;t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = v;
      } else i.fill(t);if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != n.strokeOpacity) {
        var v = t.globalAlpha;t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = v;
      } else i.stroke(t);f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
    }, buildPath: function (t, e, n) {}, createPathProxy: function () {
      this.path = new ym();
    }, getBoundingRect: function () {
      var t = this._rect,
          e = this.style,
          n = !t;if (n) {
        var i = this.path;i || (i = this.path = new ym()), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, false)), t = i.getBoundingRect();
      }if (this._rect = t, e.hasStroke()) {
        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());if (this.__dirty || n) {
          r.copy(t);var a = e.lineWidth,
              o = e.strokeNoScale ? this.getLineScale() : 1;e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2);
        }return r;
      }return t;
    }, contain: function (t, e) {
      var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect(),
          r = this.style;if (t = n[0], e = n[1], i.contain(t, e)) {
        var a = this.path.data;if (r.hasStroke()) {
          var o = r.lineWidth,
              s = r.strokeNoScale ? this.getLineScale() : 1;if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Qi(a, o / s, t, e))) return true;
        }if (r.hasFill()) return Ki(a, t, e);
      }return false;
    }, dirty: function (t) {
      null == t && (t = true), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = true, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
    }, animateShape: function (t) {
      return this.animate("shape", t);
    }, attrKV: function (t, e) {
      "shape" === t ? (this.setShape(e), this.__dirtyPath = true, this._rect = null) : In.prototype.attrKV.call(this, t, e);
    }, setShape: function (t, e) {
      var n = this.shape;if (n) {
        if (b(t)) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);else n[t] = e;this.dirty(true);
      }return this;
    }, getLineScale: function () {
      var t = this.transform;return t && Dm(t[0] - 1) > 1e-10 && Dm(t[3] - 1) > 1e-10 ? Math.sqrt(Dm(t[0] * t[3] - t[2] * t[1])) : 1;
    } }, Ji.extend = function (t) {
    var e = function (e) {
      Ji.call(this, e), t.style && this.style.extendFrom(t.style, false);var n = t.shape;if (n) {
        this.shape = this.shape || {};var i = this.shape;for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r]);
      }t.init && t.init.call(this, e);
    };u(e, Ji);for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);return e;
  }, u(Ji, In);var Cm = ym.CMD,
      km = [[], [], []],
      Lm = Math.sqrt,
      Pm = Math.atan2,
      Om = function (t, e) {
    var n,
        i,
        r,
        a,
        o,
        s,
        l = t.data,
        u = Cm.M,
        h = Cm.C,
        c = Cm.L,
        d = Cm.R,
        f = Cm.A,
        p = Cm.Q;for (r = 0, a = 0; r < l.length;) {
      switch (n = l[r++], a = r, i = 0, n) {case u:case c:
          i = 1;break;case h:
          i = 3;break;case p:
          i = 2;break;case f:
          var g = e[4],
              m = e[5],
              v = Lm(e[0] * e[0] + e[1] * e[1]),
              y = Lm(e[2] * e[2] + e[3] * e[3]),
              _ = Pm(-e[1] / y, e[0] / v);l[r] *= v, l[r++] += g, l[r] *= y, l[r++] += m, l[r++] *= v, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, a = r;break;case d:
          s[0] = l[r++], s[1] = l[r++], rt(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], rt(s, s, e), l[a++] = s[0], l[a++] = s[1];}for (o = 0; o < i; o++) {
        var s = km[o];s[0] = l[r++], s[1] = l[r++], rt(s, s, e), l[a++] = s[0], l[a++] = s[1];
      }
    }
  },
      Nm = Math.sqrt,
      Em = Math.sin,
      zm = Math.cos,
      Rm = Math.PI,
      Bm = function (t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  },
      Fm = function (t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (Bm(t) * Bm(e));
  },
      Vm = function (t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Fm(t, e));
  },
      Gm = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
      Wm = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
      Hm = function (t) {
    In.call(this, t);
  };Hm.prototype = { constructor: Hm, type: "text", brush: function (t, e) {
      var n = this.style;this.__dirty && sn(n), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;var i = n.text;if (null != i && (i += ""), !Mn(i, n)) return undefined;this.setTransform(t), un(this, t, i, n, null, e), this.restoreTransform(t);
    }, getBoundingRect: function () {
      var t = this.style;if (this.__dirty && sn(t), !this._rect) {
        var e = t.text;null != e ? e += "" : e = "";var n = He(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);if (n.x += t.x || 0, n.y += t.y || 0, xn(t.textStroke, t.textStrokeWidth)) {
          var i = t.textStrokeWidth;n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i;
        }this._rect = n;
      }return this._rect;
    } }, u(Hm, In);var Zm = Ji.extend({ type: "circle", shape: { cx: 0, cy: 0, r: 0 }, buildPath: function (t, e, n) {
      n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, true);
    } }),
      Xm = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
      jm = function (t) {
    return bf.browser.ie && bf.browser.version >= 11 ? function () {
      var e,
          n = this.__clipPaths,
          i = this.style;if (n) for (var r = 0; r < n.length; r++) {
        var a = n[r],
            o = a && a.shape,
            s = a && a.type;if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
          for (var l = 0; l < Xm.length; l++) Xm[l][2] = i[Xm[l][0]], i[Xm[l][0]] = Xm[l][1];e = true;break;
        }
      }if (t.apply(this, arguments), e) for (var l = 0; l < Xm.length; l++) i[Xm[l][0]] = Xm[l][2];
    } : t;
  },
      Um = Ji.extend({ type: "sector", shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: true }, brush: jm(Ji.prototype.brush), buildPath: function (t, e) {
      var n = e.cx,
          i = e.cy,
          r = Math.max(e.r0 || 0, 0),
          a = Math.max(e.r, 0),
          o = e.startAngle,
          s = e.endAngle,
          l = e.clockwise,
          u = Math.cos(o),
          h = Math.sin(o);t.moveTo(u * r + n, h * r + i), t.lineTo(u * a + n, h * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath();
    } }),
      Ym = Ji.extend({ type: "ring", shape: { cx: 0, cy: 0, r: 0, r0: 0 }, buildPath: function (t, e) {
      var n = e.cx,
          i = e.cy,
          r = 2 * Math.PI;t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, false), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, true);
    } }),
      qm = function (t, e) {
    for (var n = t.length, i = [], r = 0, a = 1; a < n; a++) r += tt(t[a - 1], t[a]);var o = r / 2;o = o < n ? n : o;for (var a = 0; a < o; a++) {
      var s,
          l,
          u,
          h = a / (o - 1) * (e ? n : n - 1),
          c = Math.floor(h),
          d = h - c,
          f = t[c % n];e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);var p = d * d,
          g = d * p;i.push([or(s[0], f[0], l[0], u[0], d, p, g), or(s[1], f[1], l[1], u[1], d, p, g)]);
    }return i;
  },
      $m = function (t, e, n, i) {
    var r,
        a,
        o,
        s,
        l = [],
        u = [],
        h = [],
        c = [];if (i) {
      o = [Infinity, Infinity], s = [-Infinity, -Infinity];for (var d = 0, f = t.length; d < f; d++) at(o, o, t[d]), ot(s, s, t[d]);at(o, o, i[0]), ot(s, s, i[1]);
    }for (var d = 0, f = t.length; d < f; d++) {
      var p = t[d];if (n) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f];else {
        if (0 === d || d === f - 1) {
          l.push(W(t[d]));continue;
        }r = t[d - 1], a = t[d + 1];
      }j(u, a, r), Q(u, u, e);var g = tt(p, r),
          m = tt(p, a),
          v = g + m;0 !== v && (g /= v, m /= v), Q(h, u, -g), Q(c, u, m);var y = Z([], p, h),
          _ = Z([], p, c);i && (ot(y, y, o), at(y, y, s), ot(_, _, o), at(_, _, s)), l.push(y), l.push(_);
    }return n && l.push(l.shift()), l;
  },
      Km = Ji.extend({ type: "polygon", shape: { points: null, smooth: false, smoothConstraint: null }, buildPath: function (t, e) {
      sr(t, e, true);
    } }),
      Qm = Ji.extend({ type: "polyline", shape: { points: null, smooth: false, smoothConstraint: null }, style: { stroke: "#000", fill: null }, buildPath: function (t, e) {
      sr(t, e, false);
    } }),
      Jm = Math.round,
      tv = {},
      ev = Ji.extend({ type: "rect", shape: { r: 0, x: 0, y: 0, width: 0, height: 0 }, buildPath: function (t, e) {
      var n, i, r, a;this.subPixelOptimize ? (ur(tv, e, this.style), n = tv.x, i = tv.y, r = tv.width, a = tv.height, tv.r = e.r, e = tv) : (n = e.x, i = e.y, r = e.width, a = e.height), e.r ? on(t, e) : t.rect(n, i, r, a), t.closePath();
    } }),
      nv = {},
      iv = Ji.extend({ type: "line", shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function (t, e) {
      var n, i, r, a;this.subPixelOptimize ? (lr(nv, e, this.style), n = nv.x1, i = nv.y1, r = nv.x2, a = nv.y2) : (n = e.x1, i = e.y1, r = e.x2, a = e.y2);var o = e.percent;0 !== o && (t.moveTo(n, i), o < 1 && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a));
    }, pointAt: function (t) {
      var e = this.shape;return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
    } }),
      rv = [],
      av = Ji.extend({ type: "bezier-curve", shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function (t, e) {
      var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.cpx1,
          s = e.cpy1,
          l = e.cpx2,
          u = e.cpy2,
          h = e.percent;0 !== h && (t.moveTo(n, i), null == l || null == u ? (h < 1 && (Pi(n, o, r, h, rv), o = rv[1], r = rv[2], Pi(i, s, a, h, rv), s = rv[1], a = rv[2]), t.quadraticCurveTo(o, s, r, a)) : (h < 1 && (Ai(n, o, l, r, h, rv), o = rv[1], l = rv[2], r = rv[3], Ai(i, s, u, a, h, rv), s = rv[1], u = rv[2], a = rv[3]), t.bezierCurveTo(o, s, l, u, r, a)));
    }, pointAt: function (t) {
      return cr(this.shape, t, false);
    }, tangentAt: function (t) {
      var e = cr(this.shape, t, true);return J(e, e);
    } }),
      ov = Ji.extend({ type: "arc", shape: { cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: true }, style: { stroke: "#000", fill: null }, buildPath: function (t, e) {
      var n = e.cx,
          i = e.cy,
          r = Math.max(e.r, 0),
          a = e.startAngle,
          o = e.endAngle,
          s = e.clockwise,
          l = Math.cos(a),
          u = Math.sin(a);t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, a, o, !s);
    } }),
      sv = Ji.extend({ type: "compound", shape: { paths: null }, _updatePathDirty: function () {
      for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;this.__dirtyPath = t, this.__dirty = this.__dirty || t;
    }, beforeBrush: function () {
      this._updatePathDirty();for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold);
    }, buildPath: function (t, e) {
      for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, true);
    }, afterBrush: function () {
      for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = false;
    }, getBoundingRect: function () {
      return this._updatePathDirty(), Ji.prototype.getBoundingRect.call(this);
    } }),
      lv = function (t) {
    this.colorStops = t || [];
  };lv.prototype = { constructor: lv, addColorStop: function (t, e) {
      this.colorStops.push({ offset: t, color: e });
    } };var uv = function (t, e, n, i, r, a) {
    this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || false, lv.call(this, r);
  };uv.prototype = { constructor: uv }, u(uv, lv);var hv = function (t, e, n, i, r) {
    this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || false, lv.call(this, i);
  };hv.prototype = { constructor: hv }, u(hv, lv), dr.prototype.incremental = true, dr.prototype.clearDisplaybles = function () {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = false;
  }, dr.prototype.addDisplayable = function (t, e) {
    e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
  }, dr.prototype.addDisplayables = function (t, e) {
    e = e || false;for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e);
  }, dr.prototype.eachPendingDisplayable = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e]);
  }, dr.prototype.update = function () {
    this.updateTransform();for (var t = this._cursor; t < this._displayables.length; t++) {
      var e = this._displayables[t];e.parent = this, e.update(), e.parent = null;
    }for (var t = 0; t < this._temporaryDisplayables.length; t++) {
      var e = this._temporaryDisplayables[t];e.parent = this, e.update(), e.parent = null;
    }
  }, dr.prototype.brush = function (t, e) {
    for (var n = this._cursor; n < this._displayables.length; n++) {
      var i = this._displayables[n];i.beforeBrush && i.beforeBrush(t), i.brush(t, n === this._cursor ? null : this._displayables[n - 1]), i.afterBrush && i.afterBrush(t);
    }this._cursor = n;for (var n = 0; n < this._temporaryDisplayables.length; n++) {
      var i = this._temporaryDisplayables[n];i.beforeBrush && i.beforeBrush(t), i.brush(t, 0 === n ? null : this._temporaryDisplayables[n - 1]), i.afterBrush && i.afterBrush(t);
    }this._temporaryDisplayables = [], this.notClear = true;
  };var cv = [];dr.prototype.getBoundingRect = function () {
    if (!this._rect) {
      for (var t = new Me(Infinity, Infinity, -Infinity, -Infinity), e = 0; e < this._displayables.length; e++) {
        var n = this._displayables[e],
            i = n.getBoundingRect().clone();n.needLocalTransform() && i.applyTransform(n.getLocalTransform(cv)), t.union(i);
      }this._rect = t;
    }return this._rect;
  }, dr.prototype.contain = function (t, e) {
    var n = this.transformCoordToLocal(t, e);if (this.getBoundingRect().contain(n[0], n[1])) for (var i = 0; i < this._displayables.length; i++) {
      var r = this._displayables[i];if (r.contain(t, e)) return true;
    }return false;
  }, u(dr, In);var dv = Math.max,
      fv = Math.min,
      pv = {},
      gv = 1,
      mv = { color: "textFill", textBorderColor: "textStroke", textBorderWidth: "textStrokeWidth" },
      vv = "emphasis",
      yv = "normal",
      _v = 1,
      xv = {},
      wv = {},
      bv = ar,
      Sv = hr,
      Mv = R(),
      Iv = 0;gr("circle", Zm), gr("sector", Um), gr("ring", Ym), gr("polygon", Km), gr("polyline", Qm), gr("rect", ev), gr("line", iv), gr("bezierCurve", av), gr("arc", ov);var Av = (Object.freeze || Object)({ Z2_EMPHASIS_LIFT: gv, CACHED_LABEL_STYLE_PROPERTIES: mv, extendShape: fr, extendPath: pr, registerShape: gr, getShapeClass: mr, makePath: vr, makeImage: yr, mergePath: bv, resizePath: xr, subPixelOptimizeLine: wr,
    subPixelOptimizeRect: br, subPixelOptimize: Sv, setElementHoverStyle: kr, setHoverStyle: zr, setAsHighDownDispatcher: Rr, isHighDownDispatcher: Br, getHighlightDigit: Fr, setLabelStyle: Vr, modifyLabelStyle: Gr, setTextStyle: Wr, setText: Hr, getFont: $r, updateProps: Qr, initProps: Jr, getTransform: ta, applyTransform: ea, transformDirection: na, groupTransition: ia, clipPointsByRect: ra, clipRectByRect: aa, createIcon: oa, linePolygonIntersect: sa, lineLineIntersect: la, Group: Np, Image: An, Text: Hm, Circle: Zm, Sector: Um, Ring: Ym, Polygon: Km, Polyline: Qm, Rect: ev, Line: iv, BezierCurve: av, Arc: ov, IncrementalDisplayable: dr, CompoundPath: sv, LinearGradient: uv, RadialGradient: hv, BoundingRect: Me }),
      Dv = ["textStyle", "color"],
      Tv = { getTextColor: function (t) {
      var e = this.ecModel;return this.getShallow("color") || (!t && e ? e.get(Dv) : null);
    }, getFont: function () {
      return $r({ fontStyle: this.getShallow("fontStyle"), fontWeight: this.getShallow("fontWeight"), fontSize: this.getShallow("fontSize"), fontFamily: this.getShallow("fontFamily") }, this.ecModel);
    }, getTextRect: function (t) {
      return He(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"));
    } },
      Cv = zg([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
      kv = { getItemStyle: function (t, e) {
      var n = Cv(this, t, e),
          i = this.getBorderLineDash();return i && (n.lineDash = i), n;
    }, getBorderLineDash: function () {
      var t = this.get("borderType");return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];
    } },
      Lv = h,
      Pv = si();ca.prototype = { constructor: ca, init: null, mergeOption: function (t) {
      i(this.option, t, true);
    }, get: function (t, e) {
      return null == t ? this.option : da(this.option, this.parsePath(t), !e && fa(this, t));
    }, getShallow: function (t, e) {
      var n = this.option,
          i = null == n ? n : n[t],
          r = !e && fa(this, t);return null == i && r && (i = r.getShallow(t)), i;
    }, getModel: function (t, e) {
      var n,
          i = null == t ? this.option : da(this.option, t = this.parsePath(t));return e = e || (n = fa(this, t)) && n.getModel(t), new ca(i, e, this.ecModel);
    }, isEmpty: function () {
      return null == this.option;
    }, restoreData: function () {}, clone: function () {
      return new (0, this.constructor)(n(this.option));
    }, setReadOnly: function (t) {}, parsePath: function (t) {
      return "string" == typeof t && (t = t.split(".")), t;
    }, customizeGetParent: function (t) {
      Pv(this).getParent = t;
    }, isAnimationEnabled: function () {
      if (!bf.node) {
        if (null != this.option.animation) return !!this.option.animation;if (this.parentModel) return this.parentModel.isAnimationEnabled();
      }
    } }, gi(ca), mi(ca), Lv(ca, Bg), Lv(ca, Vg), Lv(ca, Tv), Lv(ca, kv);var Ov = 0,
      Nv = 1e-4,
      Ev = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
      zv = (Object.freeze || Object)({ linearMap: ma, parsePercent: va, round: ya, asc: _a, getPrecision: xa, getPrecisionSafe: wa, getPixelPrecision: ba, getPercentWithPrecision: Sa, MAX_SAFE_INTEGER: 9007199254740991, remRadian: Ma, isRadianAroundZero: Ia, parseDate: Aa, quantity: Da, quantityExponent: Ta, nice: Ca, quantile: ka, reformIntervals: La, isNumeric: Pa }),
      Rv = L,
      Bv = /([&<>"'])/g,
      Fv = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
      Vv = ["a", "b", "c", "d", "e", "f", "g"],
      Gv = function (t, e) {
    return "{" + t + (null == e ? "" : e) + "}";
  },
      Wv = qe,
      Hv = (Object.freeze || Object)({ addCommas: Oa, toCamelCase: Na, normalizeCssArray: Rv, encodeHTML: Ea, formatTpl: za, formatTplSimple: Ra, getTooltipMarker: Ba, formatTime: Va, capitalFirst: Ga, truncateText: Wv, getTextBoundingRect: Wa, getTextRect: Ha }),
      Zv = d,
      Xv = ["left", "right", "top", "bottom", "width", "height"],
      jv = [["width", "left", "right"], ["height", "top", "bottom"]],
      Uv = Za,
      Yv = (y(Za, "vertical"), y(Za, "horizontal"), { getBoxLayoutParams: function () {
      return { left: this.get("left"), top: this.get("top"), right: this.get("right"), bottom: this.get("bottom"), width: this.get("width"), height: this.get("height") };
    } }),
      qv = si(),
      $v = ca.extend({ type: "component", id: "", name: "", mainType: "", subType: "", componentIndex: 0, defaultOption: null, ecModel: null, dependentModels: [], uid: null, layoutMode: null, $constructor: function (t, e, n, i) {
      ca.call(this, t, e, n, i), this.uid = pa("ec_cpt_model");
    }, init: function (t, e, n, i) {
      this.mergeDefaultAndTheme(t, n);
    }, mergeDefaultAndTheme: function (t, e) {
      var n = this.layoutMode,
          r = n ? Ua(t) : {};i(t, e.getTheme().get(this.mainType)), i(t, this.getDefaultOption()), n && ja(t, r, n);
    }, mergeOption: function (t, e) {
      i(this.option, t, true);var n = this.layoutMode;n && ja(this.option, t, n);
    }, optionUpdated: function (t, e) {}, getDefaultOption: function () {
      var t = qv(this);if (!t.defaultOption) {
        for (var e = [], n = this.constructor; n;) {
          var r = n.prototype.defaultOption;r && e.push(r), n = n.superClass;
        }for (var a = {}, o = e.length - 1; o >= 0; o--) a = i(a, e[o], true);t.defaultOption = a;
      }return t.defaultOption;
    }, getReferringComponents: function (t) {
      return this.ecModel.queryComponents({ mainType: t, index: this.get(t + "Index", true), id: this.get(t + "Id", true) });
    } });_i($v, { registerWhenExtend: true }), function (t) {
    var e = {};t.registerSubTypeDefaulter = function (t, n) {
      t = fi(t), e[t.main] = n;
    }, t.determineSubType = function (n, i) {
      var r = i.type;if (!r) {
        var a = fi(n).main;t.hasSubTypes(n) && e[a] && (r = e[a](i));
      }return r;
    };
  }($v), function (t, e) {
    function n(t) {
      var n = {},
          a = [];return d(t, function (o) {
        var s = i(n, o),
            u = s.originalDeps = e(o),
            h = r(u, t);s.entryCount = h.length, 0 === s.entryCount && a.push(o), d(h, function (t) {
          l(s.predecessor, t) < 0 && s.predecessor.push(t);var e = i(n, t);l(e.successor, t) < 0 && e.successor.push(o);
        });
      }), { graph: n, noEntryList: a };
    }function i(t, e) {
      return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
    }function r(t, e) {
      var n = [];return d(t, function (t) {
        l(e, t) >= 0 && n.push(t);
      }), n;
    }t.topologicalTravel = function (t, e, i, r) {
      function a(t) {
        0 == --l[t].entryCount && u.push(t);
      }function o(t) {
        h[t] = true, a(t);
      }if (t.length) {
        var s = n(e),
            l = s.graph,
            u = s.noEntryList,
            h = {};for (d(t, function (t) {
          h[t] = true;
        }); u.length;) {
          var c = u.pop(),
              f = l[c],
              p = !!h[c];p && (i.call(r, c, f.originalDeps.slice()), delete h[c]), d(f.successor, p ? o : a);
        }d(h, function () {
          throw new Error("Circle dependency may exists");
        });
      }
    };
  }($v, qa), h($v, Yv);var Kv = "";"undefined" != typeof navigator && (Kv = navigator.platform || "");var Qv = { color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"], gradientColor: ["#f6efa6", "#d88273", "#bf444c"], textStyle: { fontFamily: Kv.match(/^Win/) ? "Microsoft YaHei" : "sans-serif", fontSize: 12, fontStyle: "normal", fontWeight: "normal" }, blendMode: null, animation: "auto", animationDuration: 1e3, animationDurationUpdate: 300, animationEasing: "exponentialOut", animationEasingUpdate: "cubicOut", animationThreshold: 2e3, progressiveThreshold: 3e3, progressive: 400, hoverLayerThreshold: 3e3, useUTC: false },
      Jv = si(),
      ty = { clearColorPalette: function () {
      Jv(this).colorIdx = 0, Jv(this).colorNameMap = {};
    }, getColorFromPalette: function (t, e, n) {
      e = e || this;var i = Jv(e),
          r = i.colorIdx || 0,
          a = i.colorNameMap = i.colorNameMap || {};if (a.hasOwnProperty(t)) return a[t];var o = Qn(this.get("color", true)),
          s = this.get("colorLayer", true),
          l = null != n && s ? $a(s, n) : o;if ((l = l || o) && l.length) {
        var u = l[r];return t && (a[t] = u), i.colorIdx = (r + 1) % l.length, u;
      }
    } },
      ey = "original",
      ny = "arrayRows",
      iy = "objectRows",
      ry = "keyedColumns",
      ay = "unknown",
      oy = "typedArray",
      sy = "column",
      ly = "row";Ka.seriesDataToSource = function (t) {
    return new Ka({ data: t, sourceFormat: M(t) ? oy : ey, fromDataset: false });
  }, mi(Ka);var uy = { Must: 1, Might: 2, Not: 3 },
      hy = si(),
      cy = "\0_ec_inner",
      dy = ca.extend({ init: function (t, e, n, i) {
      n = n || {}, this.option = null, this._theme = new ca(n), this._optionManager = i;
    }, setOption: function (t, e) {
      P(!(cy in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null);
    }, resetOption: function (t) {
      var e = false,
          n = this._optionManager;if (!t || "recreate" === t) {
        var i = n.mountOption("recreate" === t);this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : po.call(this, i), e = true;
      }if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
        var r = n.getTimelineOption(this);r && (this.mergeOption(r), e = true);
      }if (!t || "recreate" === t || "media" === t) {
        var a = n.getMediaOption(this, this._api);a.length && d(a, function (t) {
          this.mergeOption(t, e = true);
        }, this);
      }return e;
    }, mergeOption: function (t) {
      function e(e, n) {
        var i = Qn(t[e]),
            s = ni(o.get(e), i);ii(s), d(s, function (t, n) {
          var i = t.option;b(i) && (t.keyInfo.mainType = e, t.keyInfo.subType = mo(e, i, t.exist));
        });var l = go(o, n);r[e] = [], o.set(e, []), d(s, function (t, n) {
          var i = t.exist,
              s = t.option;if (P(b(s) || i, "Empty component definition"), s) {
            var u = $v.getClass(e, t.keyInfo.subType, true);if (i && i.constructor === u) i.name = t.keyInfo.name, i.mergeOption(s, this), i.optionUpdated(s, false);else {
              var h = a({ dependentModels: l, componentIndex: n }, t.keyInfo);i = new u(s, this, this, h), a(i, h), i.init(s, this, this, h), i.optionUpdated(null, true);
            }
          } else i.mergeOption({}, this), i.optionUpdated({}, false);o.get(e)[n] = i, r[e][n] = i.option;
        }, this), "series" === e && vo(this, o.get("series"));
      }var r = this.option,
          o = this._componentsMap,
          s = [];to(this), d(t, function (t, e) {
        null != t && ($v.hasClass(e) ? e && s.push(e) : r[e] = null == r[e] ? n(t) : i(r[e], t, true));
      }), $v.topologicalTravel(s, $v.getAllClassMainTypes(), e, this), this._seriesIndicesMap = R(this._seriesIndices = this._seriesIndices || []);
    }, getOption: function () {
      var t = n(this.option);return d(t, function (e, n) {
        if ($v.hasClass(n)) {
          for (var e = Qn(e), i = e.length - 1; i >= 0; i--) ai(e[i]) && e.splice(i, 1);t[n] = e;
        }
      }), delete t[cy], t;
    }, getTheme: function () {
      return this._theme;
    }, getComponent: function (t, e) {
      var n = this._componentsMap.get(t);if (n) return n[e || 0];
    }, queryComponents: function (t) {
      var e = t.mainType;if (!e) return [];var n = t.index,
          i = t.id,
          r = t.name,
          a = this._componentsMap.get(e);if (!a || !a.length) return [];var o;if (null != n) _(n) || (n = [n]), o = g(f(n, function (t) {
        return a[t];
      }), function (t) {
        return !!t;
      });else if (null != i) {
        var s = _(i);o = g(a, function (t) {
          return s && l(i, t.id) >= 0 || !s && t.id === i;
        });
      } else if (null != r) {
        var u = _(r);o = g(a, function (t) {
          return u && l(r, t.name) >= 0 || !u && t.name === r;
        });
      } else o = a.slice();return yo(o, t);
    }, findComponents: function (t) {
      var e = t.query,
          n = t.mainType,
          i = function (t) {
        var e = n + "Index",
            i = n + "Id",
            r = n + "Name";return !t || null == t[e] && null == t[i] && null == t[r] ? null : { mainType: n, index: t[e], id: t[i], name: t[r] };
      }(e),
          r = i ? this.queryComponents(i) : this._componentsMap.get(n);return function (e) {
        return t.filter ? g(e, t.filter) : e;
      }(yo(r, t));
    }, eachComponent: function (t, e, n) {
      var i = this._componentsMap;if ("function" == typeof t) n = e, e = t, i.each(function (t, i) {
        d(t, function (t, r) {
          e.call(n, i, t, r);
        });
      });else if (w(t)) d(i.get(t), e, n);else if (b(t)) {
        var r = this.findComponents(t);d(r, e, n);
      }
    }, getSeriesByName: function (t) {
      return g(this._componentsMap.get("series"), function (e) {
        return e.name === t;
      });
    }, getSeriesByIndex: function (t) {
      return this._componentsMap.get("series")[t];
    }, getSeriesByType: function (t) {
      return g(this._componentsMap.get("series"), function (e) {
        return e.subType === t;
      });
    }, getSeries: function () {
      return this._componentsMap.get("series").slice();
    }, getSeriesCount: function () {
      return this._componentsMap.get("series").length;
    }, eachSeries: function (t, e) {
      d(this._seriesIndices, function (n) {
        var i = this._componentsMap.get("series")[n];t.call(e, i, n);
      }, this);
    }, eachRawSeries: function (t, e) {
      d(this._componentsMap.get("series"), t, e);
    }, eachSeriesByType: function (t, e, n) {
      d(this._seriesIndices, function (i) {
        var r = this._componentsMap.get("series")[i];r.subType === t && e.call(n, r, i);
      }, this);
    }, eachRawSeriesByType: function (t, e, n) {
      return d(this.getSeriesByType(t), e, n);
    }, isSeriesFiltered: function (t) {
      return null == this._seriesIndicesMap.get(t.componentIndex);
    }, getCurrentSeriesIndices: function () {
      return (this._seriesIndices || []).slice();
    }, filterSeries: function (t, e) {
      vo(this, g(this._componentsMap.get("series"), t, e));
    }, restoreData: function (t) {
      var e = this._componentsMap;vo(this, e.get("series"));var n = [];e.each(function (t, e) {
        n.push(e);
      }), $v.topologicalTravel(n, $v.getAllClassMainTypes(), function (n, i) {
        d(e.get(n), function (e) {
          ("series" !== n || !co(e, t)) && e.restoreData();
        });
      });
    } });h(dy, ty);var fy = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
      py = {};xo.prototype = { constructor: xo, create: function (t, e) {
      var n = [];d(py, function (i, r) {
        var a = i.create(t, e);n = n.concat(a || []);
      }), this._coordinateSystems = n;
    }, update: function (t, e) {
      d(this._coordinateSystems, function (n) {
        n.update && n.update(t, e);
      });
    }, getCoordinateSystems: function () {
      return this._coordinateSystems.slice();
    } }, xo.register = function (t, e) {
    py[t] = e;
  }, xo.get = function (t) {
    return py[t];
  };var gy = d,
      my = n,
      vy = f,
      yy = i,
      _y = /^(min|max)?(.+)$/;wo.prototype = { constructor: wo, setOption: function (t, e) {
      t && d(Qn(t.series), function (t) {
        t && t.data && M(t.data) && N(t.data);
      }), t = my(t);var n = this._optionBackup,
          i = bo.call(this, t, e, !n);this._newBaseOption = i.baseOption, n ? (Ao(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i;
    }, mountOption: function (t) {
      var e = this._optionBackup;return this._timelineOptions = vy(e.timelineOptions, my), this._mediaList = vy(e.mediaList, my), this._mediaDefault = my(e.mediaDefault), this._currentMediaIndices = [], my(t ? e.baseOption : this._newBaseOption);
    }, getTimelineOption: function (t) {
      var e,
          n = this._timelineOptions;if (n.length) {
        var i = t.getComponent("timeline");i && (e = my(n[i.getCurrentIndex()], true));
      }return e;
    }, getMediaOption: function (t) {
      var e = this._api.getWidth(),
          n = this._api.getHeight(),
          i = this._mediaList,
          r = this._mediaDefault,
          a = [],
          o = [];if (!i.length && !r) return o;for (var s = 0, l = i.length; s < l; s++) So(i[s].query, e, n) && a.push(s);return !a.length && r && (a = [-1]), a.length && !Io(a, this._currentMediaIndices) && (o = vy(a, function (t) {
        return my(-1 === t ? r.option : i[t].option);
      })), this._currentMediaIndices = a, o;
    } };var xy = d,
      wy = b,
      by = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
      Sy = function (t, e) {
    xy(Oo(t.series), function (t) {
      wy(t) && Po(t);
    });var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), xy(n, function (e) {
      xy(Oo(t[e]), function (t) {
        t && (ko(t, "axisLabel"), ko(t.axisPointer, "label"));
      });
    }), xy(Oo(t.parallel), function (t) {
      var e = t && t.parallelAxisDefault;ko(e, "axisLabel"), ko(e && e.axisPointer, "label");
    }), xy(Oo(t.calendar), function (t) {
      To(t, "itemStyle"), ko(t, "dayLabel"), ko(t, "monthLabel"), ko(t, "yearLabel");
    }), xy(Oo(t.radar), function (t) {
      ko(t, "name");
    }), xy(Oo(t.geo), function (t) {
      wy(t) && (Lo(t), xy(Oo(t.regions), function (t) {
        Lo(t);
      }));
    }), xy(Oo(t.timeline), function (t) {
      Lo(t), To(t, "label"), To(t, "itemStyle"), To(t, "controlStyle", true);var e = t.data;_(e) && d(e, function (t) {
        b(t) && (To(t, "label"), To(t, "itemStyle"));
      });
    }), xy(Oo(t.toolbox), function (t) {
      To(t, "iconStyle"), xy(t.feature, function (t) {
        To(t, "iconStyle");
      });
    }), ko(No(t.axisPointer), "label"), ko(No(t.tooltip).axisPointer, "label");
  },
      My = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
      Iy = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
      Ay = function (t, e) {
    Sy(t, e), t.series = Qn(t.series), d(t.series, function (t) {
      if (b(t)) {
        var e = t.type;if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow);else if ("pie" === e || "gauge" === e) null != t.clockWise && (t.clockwise = t.clockWise);else if ("gauge" === e) {
          var n = Eo(t, "pointer.color");null != n && zo(t, "itemStyle.color", n);
        }Ro(t);
      }
    }), t.dataRange && (t.visualMap = t.dataRange), d(Iy, function (e) {
      var n = t[e];n && (_(n) || (n = [n]), d(n, function (t) {
        Ro(t);
      }));
    });
  },
      Dy = function (t) {
    var e = R();t.eachSeries(function (t) {
      var n = t.get("stack");if (n) {
        var i = e.get(n) || e.set(n, []),
            r = t.getData(),
            a = { stackResultDimension: r.getCalculationInfo("stackResultDimension"), stackedOverDimension: r.getCalculationInfo("stackedOverDimension"), stackedDimension: r.getCalculationInfo("stackedDimension"), stackedByDimension: r.getCalculationInfo("stackedByDimension"), isStackedByIndex: r.getCalculationInfo("isStackedByIndex"), data: r, seriesModel: t };if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a);
      }
    }), e.each(Bo);
  },
      Ty = Fo.prototype;Ty.pure = false, Ty.persistent = true, Ty.getSource = function () {
    return this._source;
  };var Cy = { arrayRows_column: { pure: true, count: function () {
        return Math.max(0, this._data.length - this._source.startIndex);
      }, getItem: function (t) {
        return this._data[t + this._source.startIndex];
      }, appendData: Wo }, arrayRows_row: { pure: true, count: function () {
        var t = this._data[0];return t ? Math.max(0, t.length - this._source.startIndex) : 0;
      }, getItem: function (t) {
        t += this._source.startIndex;for (var e = [], n = this._data, i = 0; i < n.length; i++) {
          var r = n[i];e.push(r ? r[t] : null);
        }return e;
      }, appendData: function () {
        throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
      } }, objectRows: { pure: true, count: Vo, getItem: Go, appendData: Wo }, keyedColumns: { pure: true, count: function () {
        var t = this._source.dimensionsDefine[0].name,
            e = this._data[t];return e ? e.length : 0;
      }, getItem: function (t) {
        for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
          var r = this._data[n[i].name];e.push(r ? r[t] : null);
        }return e;
      }, appendData: function (t) {
        var e = this._data;d(t, function (t, n) {
          for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r]);
        });
      } }, original: { count: Vo, getItem: Go, appendData: Wo }, typedArray: { persistent: false, pure: true, count: function () {
        return this._data ? this._data.length / this._dimSize : 0;
      }, getItem: function (t, e) {
        t -= this._offset, e = e || [];for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];return e;
      }, appendData: function (t) {
        this._data = t;
      }, clean: function () {
        this._offset += this.count(), this._data = null;
      } } },
      ky = { arrayRows: Ho, objectRows: function (t, e, n, i) {
      return null != n ? t[i] : t;
    }, keyedColumns: Ho, original: function (t, e, n, i) {
      var r = ti(t);return null != n && r instanceof Array ? r[n] : r;
    }, typedArray: Ho },
      Ly = { arrayRows: Zo, objectRows: function (t, e, n, i) {
      return Xo(t[e], this._dimensionInfos[e]);
    }, keyedColumns: Zo, original: function (t, e, n, i) {
      var r = t && (null == t.value ? t : t.value);return !this._rawData.pure && ei(t) && (this.hasItemOption = true), Xo(r instanceof Array ? r[i] : r, this._dimensionInfos[e]);
    }, typedArray: function (t, e, n, i) {
      return t[i];
    } },
      Py = /\{@(.+?)\}/g,
      Oy = { getDataParams: function (t, e) {
      var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          a = n.getName(t),
          o = n.getRawDataItem(t),
          s = n.getItemVisual(t, "color"),
          l = n.getItemVisual(t, "borderColor"),
          u = this.ecModel.getComponent("tooltip"),
          h = u && u.get("renderMode"),
          c = di(h),
          d = this.mainType,
          f = "series" === d,
          p = n.userOutput;return { componentType: d, componentSubType: this.subType, componentIndex: this.componentIndex, seriesType: f ? this.subType : null, seriesIndex: this.seriesIndex, seriesId: f ? this.id : null, seriesName: f ? this.name : null, name: a, dataIndex: r, data: o, dataType: e, value: i, color: s, borderColor: l, dimensionNames: p ? p.dimensionNames : null, encode: p ? p.encode : null, marker: Ba({ color: s, renderMode: c }), $vars: ["seriesName", "name", "value"] };
    }, getFormattedLabel: function (t, e, n, i, r) {
      e = e || "normal";var a = this.getData(n),
          o = a.getItemModel(t),
          s = this.getDataParams(t, n);null != i && s.value instanceof Array && (s.value = s.value[i]);var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);if ("function" == typeof l) return s.status = e, s.dimensionIndex = i, l(s);if ("string" == typeof l) {
        return za(l, s).replace(Py, function (e, n) {
          var i = n.length;return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), jo(a, t, n);
        });
      }
    }, getRawValue: function (t, e) {
      return jo(this.getData(e), t);
    }, formatTooltip: function () {} },
      Ny = qo.prototype;Ny.perform = function (t) {
    function e(t) {
      return !(t >= 1) && (t = 1), t;
    }var n = this._upstream,
        i = t && t.skip;if (this._dirty && n) {
      var r = this.context;r.data = r.outputData = n.context.outputData;
    }this.__pipeline && (this.__pipeline.currentTask = this);var a;this._plan && !i && (a = this._plan(this.context));var o = e(this._modBy),
        s = this._modDataCount || 0,
        l = e(t && t.modBy),
        u = t && t.modDataCount || 0;o === l && s === u || (a = "reset");var h;(this._dirty || "reset" === a) && (this._dirty = false, h = Ko(this, i)), this._modBy = l, this._modDataCount = u;var c = t && t.step;if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : Infinity, this._progress) {
      var d = this._dueIndex,
          f = Math.min(null != c ? this._dueIndex + c : Infinity, this._dueEnd);if (!i && (h || d < f)) {
        var p = this._progress;if (_(p)) for (var g = 0; g < p.length; g++) $o(this, p[g], d, f, l, u);else $o(this, p, d, f, l, u);
      }this._dueIndex = f;var m = null != this._settedOutputEnd ? this._settedOutputEnd : f;this._outputDueEnd = m;
    } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;return this.unfinished();
  };var Ey = function () {
    function t() {
      return i < n ? i++ : null;
    }function e() {
      var t = i % o * r + Math.ceil(i / o),
          e = i >= n ? null : t < a ? t : i;return i++, e;
    }var n,
        i,
        r,
        a,
        o,
        s = { reset: function (l, u, h, c) {
        i = l, n = u, r = h, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t;
      } };return s;
  }();Ny.dirty = function () {
    this._dirty = true, this._onDirty && this._onDirty(this.context);
  }, Ny.unfinished = function () {
    return this._progress && this._dueIndex < this._dueEnd;
  }, Ny.pipe = function (t) {
    (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
  }, Ny.dispose = function () {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = false, this._disposed = true);
  }, Ny.getUpstream = function () {
    return this._upstream;
  }, Ny.getDownstream = function () {
    return this._downstream;
  }, Ny.setOutputEnd = function (t) {
    this._outputDueEnd = this._settedOutputEnd = t;
  };var zy = si(),
      Ry = $v.extend({ type: "series.__base__", seriesIndex: 0, coordinateSystem: null, defaultOption: null, legendVisualProvider: null, visualColorAccessPath: "itemStyle.color", visualBorderColorAccessPath: "itemStyle.borderColor", layoutMode: null, init: function (t, e, n, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = Yo({ count: ts, reset: es }), this.dataTask.context = { model: this }, this.mergeDefaultAndTheme(t, n), eo(this);var r = this.getInitialData(t, n);is(r, this), this.dataTask.context.data = r, zy(this).dataBeforeProcessed = r, Qo(this);
    }, mergeDefaultAndTheme: function (t, e) {
      var n = this.layoutMode,
          r = n ? Ua(t) : {},
          a = this.subType;$v.hasClass(a) && (a += "Series"), i(t, e.getTheme().get(this.subType)), i(t, this.getDefaultOption()), Jn(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && ja(t, r, n);
    }, mergeOption: function (t, e) {
      t = i(this.option, t, true), this.fillDataTextStyle(t.data);var n = this.layoutMode;n && ja(this.option, t, n), eo(this);var r = this.getInitialData(t, e);is(r, this), this.dataTask.dirty(), this.dataTask.context.data = r, zy(this).dataBeforeProcessed = r, Qo(this);
    }, fillDataTextStyle: function (t) {
      if (t && !M(t)) for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && Jn(t[n], "label", e);
    }, getInitialData: function () {}, appendData: function (t) {
      this.getRawData().appendData(t.data);
    }, getData: function (t) {
      var e = as(this);if (e) {
        var n = e.context.data;return null == t ? n : n.getLinkedData(t);
      }return zy(this).data;
    }, setData: function (t) {
      var e = as(this);if (e) {
        var n = e.context;n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t);
      }zy(this).data = t;
    }, getSource: function () {
      return Ja(this);
    }, getRawData: function () {
      return zy(this).dataBeforeProcessed;
    }, getBaseAxis: function () {
      var t = this.coordinateSystem;return t && t.getBaseAxis && t.getBaseAxis();
    }, formatTooltip: function (t, e, n, i) {
      function r(t) {
        return { renderMode: i, content: Ea(Oa(t)), style: l };
      }var a = this;i = i || "html";var o = "html" === i ? "<br/>" : "\n",
          s = "richText" === i,
          l = {},
          u = 0,
          h = this.getData(),
          c = h.mapDimension("defaultedTooltip", true),
          f = c.length,
          g = this.getRawValue(t),
          m = _(g),
          v = h.getItemVisual(t, "color");b(v) && v.colorStops && (v = (v.colorStops[0] || {}).color), v = v || "transparent";var y = f > 1 || m && !f ? function (n) {
        function r(t, n) {
          var r = h.getDimensionInfo(n);if (r && false !== r.otherDims.tooltip) {
            var c = r.type,
                d = "sub" + a.seriesIndex + "at" + u,
                p = Ba({ color: v, type: "subItem", renderMode: i, markerId: d }),
                g = "string" == typeof p ? p : p.content,
                m = (o ? g + Ea(r.displayName || "-") + ": " : "") + Ea("ordinal" === c ? t + "" : "time" === c ? e ? "" : Va("yyyy/MM/dd hh:mm:ss", t) : Oa(t));m && f.push(m), s && (l[d] = v, ++u);
          }
        }var o = p(n, function (t, e, n) {
          var i = h.getDimensionInfo(n);return t |= i && false !== i.tooltip && null != i.displayName;
        }, 0),
            f = [];c.length ? d(c, function (e) {
          r(jo(h, t, e), e);
        }) : d(n, r);var g = o ? s ? "\n" : "<br/>" : "",
            m = g + f.join(g || ", ");return { renderMode: i, content: m, style: l };
      }(g) : r(f ? jo(h, t, c[0]) : m ? g[0] : g),
          x = y.content,
          w = a.seriesIndex + "at" + u,
          S = Ba({ color: v, type: "item", renderMode: i, markerId: w });l[w] = v, ++u;var M = h.getName(t),
          I = this.name;ri(this) || (I = ""), I = I ? Ea(I) + (e ? ": " : o) : "";var A = "string" == typeof S ? S : S.content;return { html: e ? A + I + x : I + A + (M ? Ea(M) + ": " + x : x), markers: l };
    }, isAnimationEnabled: function () {
      if (bf.node) return false;var t = this.getShallow("animation");return t && this.getData().count() > this.getShallow("animationThreshold") && (t = false), t;
    }, restoreData: function () {
      this.dataTask.dirty();
    }, getColorFromPalette: function (t, e, n) {
      var i = this.ecModel,
          r = ty.getColorFromPalette.call(this, t, e, n);return r || (r = i.getColorFromPalette(t, e, n)), r;
    }, coordDimToDataDim: function (t) {
      return this.getRawData().mapDimension(t, true);
    }, getProgressive: function () {
      return this.get("progressive");
    }, getProgressiveThreshold: function () {
      return this.get("progressiveThreshold");
    }, getAxisTooltipData: null, getTooltipPosition: null, pipeTask: null, preventIncremental: null, pipelineContext: null });h(Ry, Oy), h(Ry, ty);var By = function () {
    this.group = new Np(), this.uid = pa("viewComponent");
  };By.prototype = { constructor: By, init: function (t, e) {}, render: function (t, e, n, i) {}, dispose: function () {}, filterForExposedEvent: null };var Fy = By.prototype;Fy.updateView = Fy.updateLayout = Fy.updateVisual = function (t, e, n, i) {}, gi(By), _i(By, { registerWhenExtend: true });var Vy = function () {
    var t = si();return function (e) {
      var n = t(e),
          i = e.pipelineContext,
          r = n.large,
          a = n.progressiveRender,
          o = n.large = i && i.large,
          s = n.progressiveRender = i && i.progressiveRender;return !!(r ^ o || a ^ s) && "reset";
    };
  },
      Gy = si(),
      Wy = Vy();os.prototype = { type: "chart", init: function (t, e) {}, render: function (t, e, n, i) {}, highlight: function (t, e, n, i) {
      ls(t.getData(), i, "emphasis");
    }, downplay: function (t, e, n, i) {
      ls(t.getData(), i, "normal");
    }, remove: function (t, e) {
      this.group.removeAll();
    }, dispose: function () {}, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null };var Hy = os.prototype;Hy.updateView = Hy.updateLayout = Hy.updateVisual = function (t, e, n, i) {
    this.render(t, e, n, i);
  }, gi(os, ["dispose"]), _i(os, { registerWhenExtend: true }), os.markUpdateMethod = function (t, e) {
    Gy(t).updateMethod = e;
  };var Zy = { incrementalPrepareRender: { progress: function (t, e) {
        e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
      } }, render: { forceFirstProgress: true, progress: function (t, e) {
        e.view.render(e.model, e.ecModel, e.api, e.payload);
      } } },
      Xy = "\0__throttleOriginMethod",
      jy = "\0__throttleRate",
      Uy = "\0__throttleType",
      Yy = { createOnAllSeries: true, performRawSeries: true, reset: function (t, e) {
      var n = t.getData(),
          i = (t.visualColorAccessPath || "itemStyle.color").split("."),
          r = t.get(i),
          a = !x(r) || r instanceof lv ? null : r;r && !a || (r = t.getColorFromPalette(t.name, null, e.getSeriesCount())), n.setVisual("color", r);var o = (t.visualBorderColorAccessPath || "itemStyle.borderColor").split("."),
          s = t.get(o);if (n.setVisual("borderColor", s), !e.isSeriesFiltered(t)) {
        a && n.each(function (e) {
          n.setItemVisual(e, "color", a(t.getDataParams(e)));
        });var l = function (t, e) {
          var n = t.getItemModel(e),
              r = n.get(i, true),
              a = n.get(o, true);null != r && t.setItemVisual(e, "color", r), null != a && t.setItemVisual(e, "borderColor", a);
        };return { dataEach: n.hasItemOption ? l : null };
      }
    } },
      qy = { legend: { selector: { all: "全选", inverse: "反选" } }, toolbox: { brush: { title: { rect: "矩形选择", polygon: "圈选", lineX: "横向选择", lineY: "纵向选择", keep: "保持选择", clear: "清除选择" } }, dataView: { title: "数据视图", lang: ["数据视图", "关闭", "刷新"] }, dataZoom: { title: { zoom: "区域缩放", back: "区域缩放还原" } }, magicType: { title: { line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺" } }, restore: { title: "还原" }, saveAsImage: { title: "保存为图片", lang: ["右键另存为图片"] } }, series: { typeNames: { pie: "饼图", bar: "柱状图", line: "折线图", scatter: "散点图", effectScatter: "涟漪散点图", radar: "雷达图", tree: "树图", treemap: "矩形树图", boxplot: "箱型图", candlestick: "K线图", k: "K线图", heatmap: "热力图", map: "地图", parallel: "平行坐标图", lines: "线图", graph: "关系图", sankey: "桑基图", funnel: "漏斗图", gauge: "仪表盘图", pictorialBar: "象形柱图", themeRiver: "主题河流图", sunburst: "旭日图" } }, aria: { general: { withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，" }, series: { single: { prefix: "", withName: "图表类型是{seriesType}，表示{seriesName}。", withoutName: "图表类型是{seriesType}。" }, multiple: { prefix: "它由{seriesCount}个图表系列组成。", withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，", withoutName: "第{seriesId}个系列是一个{seriesType}，", separator: { middle: "；", end: "。" } } }, data: { allData: "其数据是——", partialData: "其中，前{displayCnt}项是——", withName: "{name}的数据是{value}", withoutName: "{value}", separator: { middle: "，", end: "" } } } },
      $y = function (t, e) {
    function n(t, e) {
      if ("string" != typeof t) return t;var n = t;return d(e, function (t, e) {
        n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
      }), n;
    }function i(t) {
      var e = a.get(t);if (null == e) {
        for (var n = t.split("."), i = qy.aria, r = 0; r < n.length; ++r) i = i[n[r]];return i;
      }return e;
    }function r(t) {
      return qy.series.typeNames[t] || "自定义图";
    }var a = e.getModel("aria");if (a.get("show")) {
      if (a.get("description")) return undefined;var o = 0;e.eachSeries(function (t, e) {
        ++o;
      }, this);var s,
          l = a.get("data.maxCount") || 10,
          u = a.get("series.maxCount") || 10,
          h = Math.min(o, u);if (!(o < 1)) {
        var c = function () {
          var t = e.getModel("title").option;return t && t.length && (t = t[0]), t && t.text;
        }();s = c ? n(i("general.withTitle"), { title: c }) : i("general.withoutTitle");var f = [];s += n(i(o > 1 ? "series.multiple.prefix" : "series.single.prefix"), { seriesCount: o }), e.eachSeries(function (t, e) {
          if (e < h) {
            var a,
                s = t.get("name"),
                u = "series." + (o > 1 ? "multiple" : "single") + ".";a = i(s ? u + "withName" : u + "withoutName"), a = n(a, { seriesId: t.seriesIndex, seriesName: t.get("name"), seriesType: r(t.subType) });var c = t.getData();window.data = c, c.count() > l ? a += n(i("data.partialData"), { displayCnt: l }) : a += i("data.allData");for (var d = [], p = 0; p < c.count(); p++) if (p < l) {
              var g = c.getName(p),
                  m = jo(c, p);d.push(n(i(g ? "data.withName" : "data.withoutName"), { name: g, value: m }));
            }a += d.join(i("data.separator.middle")) + i("data.separator.end"), f.push(a);
          }
        }), s += f.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", s);
      }
    }
  },
      Ky = Math.PI,
      Qy = function (t, e) {
    e = e || {}, o(e, { text: "loading", color: "#c23531", textColor: "#000", maskColor: "rgba(255, 255, 255, 0.8)", zlevel: 0 });var n = new ev({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 }),
        i = new ov({ shape: { startAngle: -Ky / 2, endAngle: -Ky / 2 + .1, r: 10 }, style: { stroke: e.color, lineCap: "round", lineWidth: 5 }, zlevel: e.zlevel, z: 10001 }),
        r = new ev({ style: { fill: "none", text: e.text, textPosition: "right", textDistance: 10, textFill: e.textColor }, zlevel: e.zlevel, z: 10001 });i.animateShape(true).when(1e3, { endAngle: 3 * Ky / 2 }).start("circularInOut"), i.animateShape(true).when(1e3, { startAngle: 3 * Ky / 2 }).delay(300).start("circularInOut");var a = new Np();return a.add(i), a.add(r), a.add(n), a.resize = function () {
      var e = t.getWidth() / 2,
          a = t.getHeight() / 2;i.setShape({ cx: e, cy: a });var o = i.shape.r;r.setShape({ x: e - o, y: a - o, width: 2 * o, height: 2 * o }), n.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() });
    }, a.resize(), a;
  },
      Jy = ps.prototype;Jy.restoreData = function (t, e) {
    t.restoreData(e), this._stageTaskMap.each(function (t) {
      var e = t.overallTask;e && e.dirty();
    });
  }, Jy.getPerformArgs = function (t, e) {
    if (t.__pipeline) {
      var n = this._pipelineMap.get(t.__pipeline.id),
          i = n.context,
          r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
          a = r ? n.step : null,
          o = i && i.modDataCount;return { step: a, modBy: null != o ? Math.ceil(o / a) : null, modDataCount: o };
    }
  }, Jy.getPipeline = function (t) {
    return this._pipelineMap.get(t);
  }, Jy.updateStreamModes = function (t, e) {
    var n = this._pipelineMap.get(t.uid),
        i = t.getData(),
        r = i.count(),
        a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
        o = t.get("large") && r >= t.get("largeThreshold"),
        s = "mod" === t.get("progressiveChunkMode") ? r : null;t.pipelineContext = n.context = { progressiveRender: a, modDataCount: s, large: o };
  }, Jy.restorePipelines = function (t) {
    var e = this,
        n = e._pipelineMap = R();t.eachSeries(function (t) {
      var i = t.getProgressive(),
          r = t.uid;n.set(r, { id: r, head: null, tail: null, threshold: t.getProgressiveThreshold(), progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()), blockIndex: -1, step: Math.round(i || 700), count: 0 }), As(e, t, t.dataTask);
    });
  }, Jy.prepareStageTasks = function () {
    var t = this._stageTaskMap,
        e = this.ecInstance.getModel(),
        n = this.api;d(this._allHandlers, function (i) {
      var r = t.get(i.uid) || t.set(i.uid, []);i.reset && ms(this, i, r, e, n), i.overallReset && vs(this, i, r, e, n);
    }, this);
  }, Jy.prepareView = function (t, e, n, i) {
    var r = t.renderTask,
        a = r.context;a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, As(this, e, r);
  }, Jy.performDataProcessorTasks = function (t, e) {
    gs(this, this._dataProcessorHandlers, t, e, { block: true });
  }, Jy.performVisualTasks = function (t, e, n) {
    gs(this, this._visualHandlers, t, e, n);
  }, Jy.performSeriesTasks = function (t) {
    var e;t.eachSeries(function (t) {
      e |= t.dataTask.perform();
    }), this.unfinished |= e;
  }, Jy.plan = function () {
    this._pipelineMap.each(function (t) {
      var e = t.tail;do {
        if (e.__block) {
          t.blockIndex = e.__idxInPipeline;break;
        }e = e.getUpstream();
      } while (e);
    });
  };var t_ = Jy.updatePayload = function (t, e) {
    "remain" !== e && (t.context.payload = e);
  },
      e_ = Ms(0);ps.wrapStageHandler = function (t, e) {
    return x(t) && (t = { overallReset: t, seriesType: Ds(t) }), t.uid = pa("stageHandler"), e && (t.visualType = e), t;
  };var n_,
      i_ = {},
      r_ = {};Ts(i_, dy), Ts(r_, _o), i_.eachSeriesByType = i_.eachRawSeriesByType = function (t) {
    n_ = t;
  }, i_.eachComponent = function (t) {
    "series" === t.mainType && t.subType && (n_ = t.subType);
  };var a_ = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
      o_ = { color: a_, colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], a_] },
      s_ = function () {
    return { axisLine: { lineStyle: { color: "#eee" } }, axisTick: { lineStyle: { color: "#eee" } }, axisLabel: { textStyle: { color: "#eee" } }, splitLine: { lineStyle: { type: "dashed", color: "#aaa" } }, splitArea: { areaStyle: { color: "#eee" } } };
  },
      l_ = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
      u_ = { color: l_, backgroundColor: "#333", tooltip: { axisPointer: { lineStyle: { color: "#eee" }, crossStyle: { color: "#eee" }, label: { color: "#000" } } }, legend: { textStyle: { color: "#eee" } }, textStyle: { color: "#eee" }, title: { textStyle: { color: "#eee" } }, toolbox: { iconStyle: { normal: { borderColor: "#eee" } } }, dataZoom: { textStyle: { color: "#eee" } }, visualMap: { textStyle: { color: "#eee" } }, timeline: { lineStyle: { color: "#eee" }, itemStyle: { normal: { color: l_[1] } }, label: { normal: { textStyle: { color: "#eee" } } }, controlStyle: { normal: { color: "#eee", borderColor: "#eee" } } }, timeAxis: s_(), logAxis: s_(), valueAxis: s_(), categoryAxis: s_(), line: { symbol: "circle" }, graph: { color: l_ }, gauge: { title: { textStyle: { color: "#eee" } } }, candlestick: { itemStyle: { normal: { color: "#FD1050", color0: "#0CF49B", borderColor: "#FD1050", borderColor0: "#0CF49B" } } } };u_.categoryAxis.splitLine.show = false, $v.extend({ type: "dataset", defaultOption: { seriesLayoutBy: sy, sourceHeader: null, dimensions: null, source: null }, optionUpdated: function () {
      Qa(this);
    } }), By.extend({ type: "dataset" });var h_ = Ji.extend({ type: "ellipse", shape: { cx: 0, cy: 0, rx: 0, ry: 0 }, buildPath: function (t, e) {
      var n = .5522848,
          i = e.cx,
          r = e.cy,
          a = e.rx,
          o = e.ry,
          s = a * n,
          l = o * n;t.moveTo(i - a, r), t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o), t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r), t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o), t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r), t.closePath();
    } }),
      c_ = /[\s,]+/;ks.prototype.parse = function (t, e) {
    e = e || {};var n = Cs(t);if (!n) throw new Error("Illegal svg");var i = new Np();this._root = i;var r = n.getAttribute("viewBox") || "",
        a = parseFloat(n.getAttribute("width") || e.width),
        o = parseFloat(n.getAttribute("height") || e.height);isNaN(a) && (a = null), isNaN(o) && (o = null), Ns(n, i, null, true);for (var s = n.firstChild; s;) this._parseNode(s, i), s = s.nextSibling;var l, u;if (r) {
      var h = O(r).split(c_);h.length >= 4 && (l = { x: parseFloat(h[0] || 0), y: parseFloat(h[1] || 0), width: parseFloat(h[2]), height: parseFloat(h[3]) });
    }if (l && null != a && null != o && (u = Bs(l, a, o), !e.ignoreViewBox)) {
      var c = i;i = new Np(), i.add(c), c.scale = u.scale.slice(), c.position = u.position.slice();
    }return e.ignoreRootClip || null == a || null == o || i.setClipPath(new ev({ shape: { x: 0, y: 0, width: a, height: o } })), { root: i, width: a, height: o, viewBoxRect: l, viewBoxTransform: u };
  }, ks.prototype._parseNode = function (t, e) {
    var n = t.nodeName.toLowerCase();"defs" === n ? this._isDefine = true : "text" === n && (this._isText = true);var i;if (this._isDefine) {
      var r = f_[n];if (r) {
        var a = r.call(this, t),
            o = t.getAttribute("id");o && (this._defs[o] = a);
      }
    } else {
      var r = d_[n];r && (i = r.call(this, t, e), e.add(i));
    }for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;"defs" === n ? this._isDefine = false : "text" === n && (this._isText = false);
  }, ks.prototype._parseText = function (t, e) {
    if (1 === t.nodeType) {
      var n = t.getAttribute("dx") || 0,
          i = t.getAttribute("dy") || 0;this._textX += parseFloat(n), this._textY += parseFloat(i);
    }var r = new Hm({ style: { text: t.textContent, transformText: true }, position: [this._textX || 0, this._textY || 0] });Ps(e, r), Ns(t, r, this._defs);var a = r.style.fontSize;a && a < 9 && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);var o = r.getBoundingRect();return this._textX += o.width, e.add(r), r;
  };var d_ = { g: function (t, e) {
      var n = new Np();return Ps(e, n), Ns(t, n, this._defs), n;
    }, rect: function (t, e) {
      var n = new ev();return Ps(e, n), Ns(t, n, this._defs), n.setShape({ x: parseFloat(t.getAttribute("x") || 0), y: parseFloat(t.getAttribute("y") || 0), width: parseFloat(t.getAttribute("width") || 0), height: parseFloat(t.getAttribute("height") || 0) }), n;
    }, circle: function (t, e) {
      var n = new Zm();return Ps(e, n), Ns(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), r: parseFloat(t.getAttribute("r") || 0) }), n;
    }, line: function (t, e) {
      var n = new iv();return Ps(e, n), Ns(t, n, this._defs), n.setShape({ x1: parseFloat(t.getAttribute("x1") || 0), y1: parseFloat(t.getAttribute("y1") || 0), x2: parseFloat(t.getAttribute("x2") || 0), y2: parseFloat(t.getAttribute("y2") || 0) }), n;
    }, ellipse: function (t, e) {
      var n = new h_();return Ps(e, n), Ns(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), rx: parseFloat(t.getAttribute("rx") || 0), ry: parseFloat(t.getAttribute("ry") || 0) }), n;
    }, polygon: function (t, e) {
      var n = t.getAttribute("points");n && (n = Os(n));var i = new Km({ shape: { points: n || [] } });return Ps(e, i), Ns(t, i, this._defs), i;
    }, polyline: function (t, e) {
      var n = new Ji();Ps(e, n), Ns(t, n, this._defs);var i = t.getAttribute("points");return i && (i = Os(i)), new Qm({ shape: { points: i || [] } });
    }, image: function (t, e) {
      var n = new An();return Ps(e, n), Ns(t, n, this._defs), n.setStyle({ image: t.getAttribute("xlink:href"), x: t.getAttribute("x"), y: t.getAttribute("y"), width: t.getAttribute("width"), height: t.getAttribute("height") }), n;
    }, text: function (t, e) {
      var n = t.getAttribute("x") || 0,
          i = t.getAttribute("y") || 0,
          r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0;this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(a);var o = new Np();return Ps(e, o), Ns(t, o, this._defs), o;
    }, tspan: function (t, e) {
      var n = t.getAttribute("x"),
          i = t.getAttribute("y");null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));var r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0,
          o = new Np();return Ps(e, o), Ns(t, o, this._defs), this._textX += r, this._textY += a, o;
    }, path: function (t, e) {
      var n = t.getAttribute("d") || "",
          i = ir(n);return Ps(e, i), Ns(t, i, this._defs), i;
    } },
      f_ = { lineargradient: function (t) {
      var e = parseInt(t.getAttribute("x1") || 0, 10),
          n = parseInt(t.getAttribute("y1") || 0, 10),
          i = parseInt(t.getAttribute("x2") || 10, 10),
          r = parseInt(t.getAttribute("y2") || 0, 10),
          a = new uv(e, n, i, r);return Ls(t, a), a;
    }, radialgradient: function (t) {} },
      p_ = { fill: "fill", stroke: "stroke", "stroke-width": "lineWidth", opacity: "opacity", "fill-opacity": "fillOpacity", "stroke-opacity": "strokeOpacity", "stroke-dasharray": "lineDash", "stroke-dashoffset": "lineDashOffset", "stroke-linecap": "lineCap", "stroke-linejoin": "lineJoin", "stroke-miterlimit": "miterLimit", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "text-align": "textAlign", "alignment-baseline": "textBaseline" },
      g_ = /url\(\s*#(.*?)\)/,
      m_ = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
      v_ = /([^\s:;]+)\s*:\s*([^:;]+)/g,
      y_ = R(),
      __ = { registerMap: function (t, e, n) {
      var i;return _(e) ? i = e : e.svg ? i = [{ type: "svg", source: e.svg, specialAreas: e.specialAreas }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{ type: "geoJSON", source: e, specialAreas: n }]), d(i, function (t) {
        var e = t.type;"geoJson" === e && (e = t.type = "geoJSON"), (0, x_[e])(t);
      }), y_.set(t, i);
    }, retrieveMap: function (t) {
      return y_.get(t);
    } },
      x_ = { geoJSON: function (t) {
      var e = t.source;t.geoJSON = w(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e;
    }, svg: function (t) {
      t.svgXML = Cs(t.source);
    } },
      w_ = P,
      b_ = d,
      S_ = x,
      M_ = b,
      I_ = $v.parseClassType,
      A_ = { zrender: "4.3.0" },
      D_ = 1e3,
      T_ = 1e3,
      C_ = 3e3,
      k_ = { PROCESSOR: { FILTER: D_, SERIES_FILTER: 800, STATISTIC: 5e3 }, VISUAL: { LAYOUT: T_, PROGRESSIVE_LAYOUT: 1100, GLOBAL: 2e3, CHART: C_, POST_CHART_LAYOUT: 3500, COMPONENT: 4e3, BRUSH: 5e3 } },
      L_ = "__flagInMainProcess",
      P_ = "__optionUpdated",
      O_ = /^[a-zA-Z0-9_]+$/;Vs.prototype.on = Fs("on", true), Vs.prototype.off = Fs("off", true), Vs.prototype.one = Fs("one", true), h(Vs, Zf);var N_ = Gs.prototype;N_._onframe = function () {
    if (!this._disposed) {
      var t = this._scheduler;if (this[P_]) {
        var e = this[P_].silent;this[L_] = true, Hs(this), E_.update.call(this), this[L_] = false, this[P_] = false, Us.call(this, e), Ys.call(this, e);
      } else if (t.unfinished) {
        var n = 1,
            i = this._model,
            r = this._api;t.unfinished = false;do {
          var a = +new Date();t.performSeriesTasks(i), t.performDataProcessorTasks(i), Xs(this, i), t.performVisualTasks(i), tl(this, this._model, r, "remain"), n -= +new Date() - a;
        } while (n > 0 && t.unfinished);t.unfinished || this._zr.flush();
      }
    }
  }, N_.getDom = function () {
    return this._dom;
  }, N_.getZr = function () {
    return this._zr;
  }, N_.setOption = function (t, e, n) {
    if (!this._disposed) {
      var i;if (M_(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[L_] = true, !this._model || e) {
        var r = new wo(this._api),
            a = this._theme,
            o = this._model = new dy();o.scheduler = this._scheduler, o.init(null, null, a, r);
      }this._model.setOption(t, V_), n ? (this[P_] = { silent: i }, this[L_] = false) : (Hs(this), E_.update.call(this), this._zr.flush(), this[P_] = false, this[L_] = false, Us.call(this, i), Ys.call(this, i));
    }
  }, N_.setTheme = function () {
    console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
  }, N_.getModel = function () {
    return this._model;
  }, N_.getOption = function () {
    return this._model && this._model.getOption();
  }, N_.getWidth = function () {
    return this._zr.getWidth();
  }, N_.getHeight = function () {
    return this._zr.getHeight();
  }, N_.getDevicePixelRatio = function () {
    return this._zr.painter.dpr || window.devicePixelRatio || 1;
  }, N_.getRenderedCanvas = function (t) {
    if (bf.canvasSupported) {
      t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");return this._zr.painter.getRenderedCanvas(t);
    }
  }, N_.getSvgDataUrl = function () {
    if (bf.svgSupported) {
      var t = this._zr;return d(t.storage.getDisplayList(), function (t) {
        t.stopAnimation(true);
      }), t.painter.pathToDataUrl();
    }
  }, N_.getDataURL = function (t) {
    if (!this._disposed) {
      t = t || {};var e = t.excludeComponents,
          n = this._model,
          i = [],
          r = this;b_(e, function (t) {
        n.eachComponent({ mainType: t }, function (t) {
          var e = r._componentsMap[t.__viewId];e.group.ignore || (i.push(e), e.group.ignore = true);
        });
      });var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));return b_(i, function (t) {
        t.group.ignore = false;
      }), a;
    }
  }, N_.getConnectedDataURL = function (t) {
    if (!this._disposed && bf.canvasSupported) {
      var e = this.group,
          i = Math.min,
          r = Math.max;if (j_[e]) {
        var a = Infinity,
            o = Infinity,
            s = -Infinity,
            l = -Infinity,
            u = [],
            h = t && t.pixelRatio || 1;d(X_, function (h, c) {
          if (h.group === e) {
            var d = h.getRenderedCanvas(n(t)),
                f = h.getDom().getBoundingClientRect();a = i(f.left, a), o = i(f.top, o), s = r(f.right, s), l = r(f.bottom, l), u.push({ dom: d, left: f.left, top: f.top });
          }
        }), a *= h, o *= h, s *= h, l *= h;var c = s - a,
            f = l - o,
            p = Of();p.width = c, p.height = f;var g = Un(p);return t.connectedBackgroundColor && g.add(new ev({ shape: { x: 0, y: 0, width: c, height: f }, style: { fill: t.connectedBackgroundColor } })), b_(u, function (t) {
          var e = new An({ style: { x: t.left * h - a, y: t.top * h - o, image: t.dom } });g.add(e);
        }), g.refreshImmediately(), p.toDataURL("image/" + (t && t.type || "png"));
      }return this.getDataURL(t);
    }
  }, N_.convertToPixel = y(Ws, "convertToPixel"), N_.convertFromPixel = y(Ws, "convertFromPixel"), N_.containPixel = function (t, e) {
    if (!this._disposed) {
      var n,
          i = this._model;return t = li(i, t), d(t, function (t, i) {
        i.indexOf("Models") >= 0 && d(t, function (t) {
          var r = t.coordinateSystem;if (r && r.containPoint) n |= !!r.containPoint(e);else if ("seriesModels" === i) {
            var a = this._chartsMap[t.__viewId];a && a.containPoint && (n |= a.containPoint(e, t));
          }
        }, this);
      }, this), !!n;
    }
  }, N_.getVisual = function (t, e) {
    t = li(this._model, t, { defaultMainType: "series" });var n = t.seriesModel,
        i = n.getData(),
        r = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? i.indexOfRawIndex(t.dataIndex) : null;return null != r ? i.getItemVisual(r, e) : i.getVisual(e);
  }, N_.getViewOfComponentModel = function (t) {
    return this._componentsMap[t.__viewId];
  }, N_.getViewOfSeriesModel = function (t) {
    return this._chartsMap[t.__viewId];
  };var E_ = { prepareAndUpdate: function (t) {
      Hs(this), E_.update.call(this, t);
    }, update: function (t) {
      var e = this._model,
          n = this._api,
          i = this._zr,
          r = this._coordSysMgr,
          a = this._scheduler;if (e) {
        a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), Xs(this, e), r.update(e, n), Ks(e), a.performVisualTasks(e, t), Qs(this, e, n, t);var o = e.get("backgroundColor") || "transparent";if (bf.canvasSupported) i.setBackgroundColor(o);else {
          var s = Qt(o);o = se(s, "rgb"), 0 === s[3] && (o = "transparent");
        }el(e, n);
      }
    }, updateTransform: function (t) {
      var e = this._model,
          n = this,
          i = this._api;if (e) {
        var r = [];e.eachComponent(function (a, o) {
          var s = n.getViewOfComponentModel(o);if (s && s.__alive) if (s.updateTransform) {
            var l = s.updateTransform(o, e, i, t);l && l.update && r.push(s);
          } else r.push(s);
        });var a = R();e.eachSeries(function (r) {
          var o = n._chartsMap[r.__viewId];if (o.updateTransform) {
            var s = o.updateTransform(r, e, i, t);s && s.update && a.set(r.uid, 1);
          } else a.set(r.uid, 1);
        }), Ks(e), this._scheduler.performVisualTasks(e, t, { setDirty: true, dirtyMap: a }), tl(n, e, i, t, a), el(e, this._api);
      }
    }, updateView: function (t) {
      var e = this._model;e && (os.markUpdateMethod(t, "updateView"), Ks(e), this._scheduler.performVisualTasks(e, t, { setDirty: true }), Qs(this, this._model, this._api, t), el(e, this._api));
    }, updateVisual: function (t) {
      E_.update.call(this, t);
    }, updateLayout: function (t) {
      E_.update.call(this, t);
    } };N_.resize = function (t) {
    if (!this._disposed) {
      this._zr.resize(t);var e = this._model;if (this._loadingFX && this._loadingFX.resize(), e) {
        var n = e.resetOption("media"),
            i = t && t.silent;this[L_] = true, n && Hs(this), E_.update.call(this), this[L_] = false, Us.call(this, i), Ys.call(this, i);
      }
    }
  }, N_.showLoading = function (t, e) {
    if (!this._disposed && (M_(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), Z_[t])) {
      var n = Z_[t](this._api, e),
          i = this._zr;this._loadingFX = n, i.add(n);
    }
  }, N_.hideLoading = function () {
    this._disposed || (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null);
  }, N_.makeActionFromEvent = function (t) {
    var e = a({}, t);return e.type = B_[t.type], e;
  }, N_.dispatchAction = function (t, e) {
    if (!this._disposed && (M_(e) || (e = { silent: !!e }), R_[t.type] && this._model)) {
      if (this[L_]) return undefined;js.call(this, t, e.silent), e.flush ? this._zr.flush(true) : false !== e.flush && bf.browser.weChat && this._throttledZrFlush(), Us.call(this, e.silent), Ys.call(this, e.silent);
    }
  }, N_.appendData = function (t) {
    if (!this._disposed) {
      var e = t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t), this._scheduler.unfinished = true;
    }
  }, N_.on = Fs("on", false), N_.off = Fs("off", false), N_.one = Fs("one", false);var z_ = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];N_._initEvents = function () {
    b_(z_, function (t) {
      var e = function (e) {
        var n,
            i = this.getModel(),
            r = e.target;if ("globalout" === t) n = {};else if (r && null != r.dataIndex) {
          var o = r.dataModel || i.getSeriesByIndex(r.seriesIndex);n = o && o.getDataParams(r.dataIndex, r.dataType, r) || {};
        } else r && r.eventData && (n = a({}, r.eventData));if (n) {
          var s = n.componentType,
              l = n.componentIndex;"markLine" !== s && "markPoint" !== s && "markArea" !== s || (s = "series", l = n.seriesIndex);var u = s && null != l && i.getComponent(s, l),
              h = u && this["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];n.event = e, n.type = t, this._ecEventProcessor.eventInfo = { targetEl: r, packedEvent: n, model: u, view: h }, this.trigger(t, n);
        }
      };e.zrEventfulCallAtLast = true, this._zr.on(t, e, this);
    }, this), b_(B_, function (t, e) {
      this._messageCenter.on(e, function (t) {
        this.trigger(e, t);
      }, this);
    }, this);
  }, N_.isDisposed = function () {
    return this._disposed;
  }, N_.clear = function () {
    this._disposed || this.setOption({ series: [] }, true);
  }, N_.dispose = function () {
    if (!this._disposed) {
      this._disposed = true, hi(this.getDom(), q_, "");var t = this._api,
          e = this._model;b_(this._componentsViews, function (n) {
        n.dispose(e, t);
      }), b_(this._chartsViews, function (n) {
        n.dispose(e, t);
      }), this._zr.dispose(), delete X_[this.id];
    }
  }, h(Gs, Zf), ol.prototype = { constructor: ol, normalizeQuery: function (t) {
      var e = {},
          n = {},
          i = {};if (w(t)) {
        var r = I_(t);e.mainType = r.main || null, e.subType = r.sub || null;
      } else {
        var a = ["Index", "Name", "Id"],
            o = { name: 1, dataIndex: 1, dataType: 1 };d(t, function (t, r) {
          for (var s = false, l = 0; l < a.length; l++) {
            var u = a[l],
                h = r.lastIndexOf(u);if (h > 0 && h === r.length - u.length) {
              var c = r.slice(0, h);"data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = true);
            }
          }o.hasOwnProperty(r) && (n[r] = t, s = true), s || (i[r] = t);
        });
      }return { cptQuery: e, dataQuery: n, otherQuery: i };
    }, filter: function (t, e, n) {
      function i(t, e, n, i) {
        return null == t[n] || e[i || n] === t[n];
      }var r = this.eventInfo;if (!r) return true;var a = r.targetEl,
          o = r.packedEvent,
          s = r.model,
          l = r.view;if (!s || !l) return true;var u = e.cptQuery,
          h = e.dataQuery;return i(u, s, "mainType") && i(u, s, "subType") && i(u, s, "index", "componentIndex") && i(u, s, "name") && i(u, s, "id") && i(h, o, "name") && i(h, o, "dataIndex") && i(h, o, "dataType") && (!l.filterForExposedEvent || l.filterForExposedEvent(t, e.otherQuery, a, o));
    }, afterTrigger: function () {
      this.eventInfo = null;
    } };var R_ = {},
      B_ = {},
      F_ = [],
      V_ = [],
      G_ = [],
      W_ = [],
      H_ = {},
      Z_ = {},
      X_ = {},
      j_ = {},
      U_ = new Date() - 0,
      Y_ = new Date() - 0,
      q_ = "_echarts_instance_",
      $_ = hl;bl(2e3, Yy), gl(Ay), ml(900, Dy), Ml("default", Qy), yl({ type: "highlight", event: "highlight", update: "highlight" }, F), yl({ type: "downplay", event: "downplay", update: "downplay" }, F), pl("light", o_), pl("dark", u_);var K_ = {};Ol.prototype = { constructor: Ol, add: function (t) {
      return this._add = t, this;
    }, update: function (t) {
      return this._update = t, this;
    }, remove: function (t) {
      return this._remove = t, this;
    }, execute: function () {
      var t,
          e = this._old,
          n = this._new,
          i = {},
          r = {},
          a = [],
          o = [];for (Nl(e, i, a, "_oldKeyGetter", this), Nl(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
        var s = a[t],
            l = r[s];if (null != l) {
          var u = l.length;u ? (1 === u && (r[s] = null), l = l.shift()) : r[s] = null, this._update && this._update(l, t);
        } else this._remove && this._remove(t);
      }for (var t = 0; t < o.length; t++) {
        var s = o[t];if (r.hasOwnProperty(s)) {
          var l = r[s];if (null == l) continue;if (l.length) for (var h = 0, u = l.length; h < u; h++) this._add && this._add(l[h]);else this._add && this._add(l);
        }
      }
    } };var Q_ = R(["tooltip", "label", "itemName", "itemId", "seriesName"]),
      J_ = b,
      tx = -1,
      ex = "e\0\0",
      nx = { float: "undefined" == typeof Float64Array ? Array : Float64Array, int: "undefined" == typeof Int32Array ? Array : Int32Array, ordinal: Array, number: Array, time: Array },
      ix = "undefined" == typeof Uint32Array ? Array : Uint32Array,
      rx = "undefined" == typeof Int32Array ? Array : Int32Array,
      ax = "undefined" == typeof Uint16Array ? Array : Uint16Array,
      ox = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
      sx = ["_extent", "_approximateExtent", "_rawExtent"],
      lx = function (t, e) {
    t = t || ["x", "y"];for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
      var o = t[a];w(o) ? o = new Fl({ name: o }) : o instanceof Fl || (o = new Fl(o));var s = o.name;o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = []);
    }this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = El(this), this._invertedIndicesMap = r, this._calculationInfo = {}, this.userOutput = this._dimensionsSummary.userOutput;
  },
      ux = lx.prototype;ux.type = "list", ux.hasItemOption = true, ux.getDimension = function (t) {
    return "number" != typeof t && (isNaN(t) || this._dimensionInfos.hasOwnProperty(t)) || (t = this.dimensions[t]), t;
  }, ux.getDimensionInfo = function (t) {
    return this._dimensionInfos[this.getDimension(t)];
  }, ux.getDimensionsOnCoord = function () {
    return this._dimensionsSummary.dataDimsOnCoord.slice();
  }, ux.mapDimension = function (t, e) {
    var n = this._dimensionsSummary;if (null == e) return n.encodeFirstDimNotExtra[t];var i = n.encode[t];return true === e ? (i || []).slice() : i && i[e];
  }, ux.initData = function (t, e, n) {
    (Ka.isInstance(t) || c(t)) && (t = new Fo(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = false), this.defaultDimValueGetter = Ly[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._dimValueGetterArrayRows = Ly.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = false);
  }, ux.getProvider = function () {
    return this._rawData;
  }, ux.appendData = function (t) {
    var e = this._rawData,
        n = this.count();e.appendData(t);var i = e.count();e.persistent || (i += n), this._initDataFromProvider(n, i);
  }, ux.appendValues = function (t, e) {
    for (var n = this._chunkSize, i = this._storage, r = this.dimensions, a = r.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), u = this._chunkCount, h = 0; h < a; h++) {
      var c = r[h];o[c] || (o[c] = Ql()), i[c] || (i[c] = []), Hl(i, this._dimensionInfos[c], n, u, l), this._chunkCount = i[c].length;
    }for (var d = new Array(a), f = s; f < l; f++) {
      for (var p = f - s, g = Math.floor(f / n), m = f % n, v = 0; v < a; v++) {
        var c = r[v],
            y = this._dimValueGetterArrayRows(t[p] || d, c, p, v);i[c][g][m] = y;var _ = o[c];y < _[0] && (_[0] = y), y > _[1] && (_[1] = y);
      }e && (this._nameList[f] = e[p]);
    }this._rawCount = this._count = l, this._extent = {}, Zl(this);
  }, ux._initDataFromProvider = function (t, e) {
    if (!(t >= e)) {
      for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = 0; p < s; p++) {
        var g = o[p];c[g] || (c[g] = Ql());var m = l[g];0 === m.otherDims.itemName && (n = this._nameDimIdx = p), 0 === m.otherDims.itemId && (this._idDimIdx = p), a[g] || (a[g] = []), Hl(a, m, i, f, e), this._chunkCount = a[g].length;
      }for (var v = new Array(s), y = t; y < e; y++) {
        v = r.getItem(y, v);for (var _ = Math.floor(y / i), x = y % i, w = 0; w < s; w++) {
          var g = o[w],
              b = a[g][_],
              S = this._dimValueGetter(v, g, y, w);b[x] = S;var M = c[g];S < M[0] && (M[0] = S), S > M[1] && (M[1] = S);
        }if (!r.pure) {
          var I = u[y];if (v && null == I) if (null != v.name) u[y] = I = v.name;else if (null != n) {
            var A = o[n],
                D = a[A][_];if (D) {
              I = D[x];var T = l[A].ordinalMeta;T && T.categories.length && (I = T.categories[I]);
            }
          }var C = null == v ? null : v.id;null == C && null != I && (d[I] = d[I] || 0, C = I, d[I] > 0 && (C += "__ec__" + d[I]), d[I]++), null != C && (h[y] = C);
        }
      }!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, Zl(this);
    }
  }, ux.count = function () {
    return this._count;
  }, ux.getIndices = function () {
    var t,
        e = this._indices;if (e) {
      var n = e.constructor,
          i = this._count;if (n === Array) {
        t = new n(i);for (var r = 0; r < i; r++) t[r] = e[r];
      } else t = new n(e.buffer, 0, i);
    } else for (var n = Vl(this), t = new n(this.count()), r = 0; r < t.length; r++) t[r] = r;return t;
  }, ux.get = function (t, e) {
    if (!(e >= 0 && e < this._count)) return NaN;var n = this._storage;if (!n[t]) return NaN;e = this.getRawIndex(e);var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize;return n[t][i][r];
  }, ux.getByRawIndex = function (t, e) {
    if (!(e >= 0 && e < this._rawCount)) return NaN;var n = this._storage[t];if (!n) return NaN;var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize;return n[i][r];
  }, ux._getFast = function (t, e) {
    var n = Math.floor(e / this._chunkSize),
        i = e % this._chunkSize;return this._storage[t][n][i];
  }, ux.getValues = function (t, e) {
    var n = [];_(t) || (e = t, t = this.dimensions);for (var i = 0, r = t.length; i < r; i++) n.push(this.get(t[i], e));return n;
  }, ux.hasValue = function (t) {
    for (var e = this._dimensionsSummary.dataDimsOnCoord, n = 0, i = e.length; n < i; n++) if (isNaN(this.get(e[n], t))) return false;return true;
  }, ux.getDataExtent = function (t) {
    t = this.getDimension(t);var e = this._storage[t],
        n = Ql();if (!e) return n;var i,
        r = this.count(),
        a = !this._indices;if (a) return this._rawExtent[t].slice();if (i = this._extent[t]) return i.slice();i = n;for (var o = i[0], s = i[1], l = 0; l < r; l++) {
      var u = this._getFast(t, this.getRawIndex(l));u < o && (o = u), u > s && (s = u);
    }return i = [o, s], this._extent[t] = i, i;
  }, ux.getApproximateExtent = function (t) {
    return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
  }, ux.setApproximateExtent = function (t, e) {
    e = this.getDimension(e), this._approximateExtent[e] = t.slice();
  }, ux.getCalculationInfo = function (t) {
    return this._calculationInfo[t];
  }, ux.setCalculationInfo = function (t, e) {
    J_(t) ? a(this._calculationInfo, t) : this._calculationInfo[t] = e;
  }, ux.getSum = function (t) {
    var e = this._storage[t],
        n = 0;if (e) for (var i = 0, r = this.count(); i < r; i++) {
      var a = this.get(t, i);isNaN(a) || (n += a);
    }return n;
  }, ux.getMedian = function (t) {
    var e = [];this.each(t, function (t, n) {
      isNaN(t) || e.push(t);
    });var n = [].concat(e).sort(function (t, e) {
      return t - e;
    }),
        i = this.count();return 0 === i ? 0 : i % 2 == 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
  }, ux.rawIndexOf = function (t, e) {
    var n = t && this._invertedIndicesMap[t],
        i = n[e];return null == i || isNaN(i) ? tx : i;
  }, ux.indexOfName = function (t) {
    for (var e = 0, n = this.count(); e < n; e++) if (this.getName(e) === t) return e;return -1;
  }, ux.indexOfRawIndex = function (t) {
    if (t >= this._rawCount || t < 0) return -1;if (!this._indices) return t;var e = this._indices,
        n = e[t];if (null != n && n < this._count && n === t) return t;for (var i = 0, r = this._count - 1; i <= r;) {
      var a = (i + r) / 2 | 0;if (e[a] < t) i = a + 1;else {
        if (!(e[a] > t)) return a;r = a - 1;
      }
    }return -1;
  }, ux.indicesOfNearest = function (t, e, n) {
    var i = this._storage,
        r = i[t],
        a = [];if (!r) return a;null == n && (n = Infinity);for (var o = Infinity, s = -1, l = 0, u = 0, h = this.count(); u < h; u++) {
      var c = e - this.get(t, u),
          d = Math.abs(c);d <= n && ((d < o || d === o && c >= 0 && s < 0) && (o = d, s = c, l = 0), c === s && (a[l++] = u));
    }return a.length = l, a;
  }, ux.getRawIndex = jl, ux.getRawDataItem = function (t) {
    if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));for (var e = [], n = 0; n < this.dimensions.length; n++) {
      var i = this.dimensions[n];e.push(this.get(i, t));
    }return e;
  }, ux.getName = function (t) {
    var e = this.getRawIndex(t);return this._nameList[e] || Xl(this, this._nameDimIdx, e) || "";
  }, ux.getId = function (t) {
    return Yl(this, this.getRawIndex(t));
  }, ux.each = function (t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = f(ql(t), this.getDimension, this);for (var r = t.length, a = 0; a < this.count(); a++) switch (r) {case 0:
          e.call(n, a);break;case 1:
          e.call(n, this.get(t[0], a), a);break;case 2:
          e.call(n, this.get(t[0], a), this.get(t[1], a), a);break;default:
          for (var o = 0, s = []; o < r; o++) s[o] = this.get(t[o], a);s[o] = a, e.apply(n, s);}
    }
  }, ux.filterSelf = function (t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = f(ql(t), this.getDimension, this);for (var r = this.count(), a = Vl(this), o = new a(r), s = [], l = t.length, u = 0, h = t[0], c = 0; c < r; c++) {
        var d,
            p = this.getRawIndex(c);if (0 === l) d = e.call(n, c);else if (1 === l) {
          var g = this._getFast(h, p);d = e.call(n, g, c);
        } else {
          for (var m = 0; m < l; m++) s[m] = this._getFast(h, p);s[m] = c, d = e.apply(n, s);
        }d && (o[u++] = p);
      }return u < r && (this._indices = o), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? Ul : jl, this;
    }
  }, ux.selectRange = function (t) {
    if (this._count) {
      var e = [];for (var n in t) t.hasOwnProperty(n) && e.push(n);var i = e.length;if (i) {
        var r = this.count(),
            a = Vl(this),
            o = new a(r),
            s = 0,
            l = e[0],
            u = t[l][0],
            h = t[l][1],
            c = false;if (!this._indices) {
          var d = 0;if (1 === i) {
            for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) for (var g = f[p], m = Math.min(this._count - p * this._chunkSize, this._chunkSize), v = 0; v < m; v++) {
              var y = g[v];(y >= u && y <= h || isNaN(y)) && (o[s++] = d), d++;
            }c = true;
          } else if (2 === i) {
            for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) for (var g = f[p], b = _[p], m = Math.min(this._count - p * this._chunkSize, this._chunkSize), v = 0; v < m; v++) {
              var y = g[v],
                  S = b[v];(y >= u && y <= h || isNaN(y)) && (S >= x && S <= w || isNaN(S)) && (o[s++] = d), d++;
            }c = true;
          }
        }if (!c) if (1 === i) for (var v = 0; v < r; v++) {
          var M = this.getRawIndex(v),
              y = this._getFast(l, M);(y >= u && y <= h || isNaN(y)) && (o[s++] = M);
        } else for (var v = 0; v < r; v++) {
          for (var I = true, M = this.getRawIndex(v), p = 0; p < i; p++) {
            var A = e[p],
                y = this._getFast(n, M);(y < t[A][0] || y > t[A][1]) && (I = false);
          }I && (o[s++] = this.getRawIndex(v));
        }return s < r && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? Ul : jl, this;
      }
    }
  }, ux.mapArray = function (t, e, n, i) {
    "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;var r = [];return this.each(t, function () {
      r.push(e && e.apply(this, arguments));
    }, n), r;
  }, ux.map = function (t, e, n, i) {
    n = n || i || this, t = f(ql(t), this.getDimension, this);var r = $l(this, t);r._indices = this._indices, r.getRawIndex = r._indices ? Ul : jl;for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r._rawExtent, d = 0; d < u; d++) {
      for (var p = 0; p < l; p++) h[p] = this.get(t[p], d);h[l] = d;var g = e && e.apply(n, h);if (null != g) {
        "object" != typeof g && (o[0] = g, g = o);for (var m = this.getRawIndex(d), v = Math.floor(m / s), y = m % s, _ = 0; _ < g.length; _++) {
          var x = t[_],
              w = g[_],
              b = c[x],
              S = a[x];S && (S[v][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w);
        }
      }
    }return r;
  }, ux.downSample = function (t, e, n, i) {
    for (var r = $l(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], d = new (Vl(this))(u), f = 0, p = 0; p < u; p += s) {
      s > u - p && (s = u - p, o.length = s);for (var g = 0; g < s; g++) {
        var m = this.getRawIndex(p + g),
            v = Math.floor(m / h),
            y = m % h;o[g] = l[v][y];
      }var _ = n(o),
          x = this.getRawIndex(Math.min(p + i(o, _) || 0, u - 1)),
          w = Math.floor(x / h),
          b = x % h;l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x;
    }return r._count = f, r._indices = d, r.getRawIndex = Ul, r;
  }, ux.getItemModel = function (t) {
    var e = this.hostModel;return new ca(this.getRawDataItem(t), e, e && e.ecModel);
  }, ux.diff = function (t) {
    var e = this;return new Ol(t ? t.getIndices() : [], this.getIndices(), function (e) {
      return Yl(t, e);
    }, function (t) {
      return Yl(e, t);
    });
  }, ux.getVisual = function (t) {
    var e = this._visual;return e && e[t];
  }, ux.setVisual = function (t, e) {
    if (J_(t)) for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);else this._visual = this._visual || {}, this._visual[t] = e;
  }, ux.setLayout = function (t, e) {
    if (J_(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);else this._layout[t] = e;
  }, ux.getLayout = function (t) {
    return this._layout[t];
  }, ux.getItemLayout = function (t) {
    return this._itemLayouts[t];
  }, ux.setItemLayout = function (t, e, n) {
    this._itemLayouts[t] = n ? a(this._itemLayouts[t] || {}, e) : e;
  }, ux.clearItemLayouts = function () {
    this._itemLayouts.length = 0;
  }, ux.getItemVisual = function (t, e, n) {
    var i = this._itemVisuals[t],
        r = i && i[e];return null != r || n ? r : this.getVisual(e);
  }, ux.setItemVisual = function (t, e, n) {
    var i = this._itemVisuals[t] || {},
        r = this.hasItemVisual;if (this._itemVisuals[t] = i, J_(e)) for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a], r[a] = true);else i[e] = n, r[e] = true;
  }, ux.clearAllVisual = function () {
    this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};
  };var hx = function (t) {
    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;
  };ux.setItemGraphicEl = function (t, e) {
    var n = this.hostModel;e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(hx, e)), this._graphicEls[t] = e;
  }, ux.getItemGraphicEl = function (t) {
    return this._graphicEls[t];
  }, ux.eachItemGraphicEl = function (t, e) {
    d(this._graphicEls, function (n, i) {
      n && t && t.call(e, n, i);
    });
  }, ux.cloneShallow = function (t) {
    if (!t) {
      var e = f(this.dimensions, this.getDimensionInfo, this);t = new lx(e, this.hostModel);
    }if (t._storage = this._storage, Wl(t, this), this._indices) {
      var n = this._indices.constructor;t._indices = new n(this._indices);
    } else t._indices = null;return t.getRawIndex = t._indices ? Ul : jl, t;
  }, ux.wrapMethod = function (t, e) {
    var n = this[t];"function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
      var t = n.apply(this, arguments);return e.apply(this, [t].concat(k(arguments)));
    });
  }, ux.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], ux.CHANGABLE_METHODS = ["filterSelf", "selectRange"];var cx = function (t, e) {
    return e = e || {}, Jl(e.coordDimensions || [], t, { dimsDef: e.dimensionsDefine || t.dimensionsDefine, encodeDef: e.encodeDefine || t.encodeDefine, dimCount: e.dimensionsCount, encodeDefaulter: e.encodeDefaulter, generateCoord: e.generateCoord, generateCoordCount: e.generateCoordCount });
  },
      dx = { cartesian2d: function (t, e, n, i) {
      var r = t.getReferringComponents("xAxis")[0],
          a = t.getReferringComponents("yAxis")[0];e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), ru(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), ru(a) && (i.set("y", a), e.firstCategoryDimIndex, e.firstCategoryDimIndex = 1);
    }, singleAxis: function (t, e, n, i) {
      var r = t.getReferringComponents("singleAxis")[0];e.coordSysDims = ["single"], n.set("single", r), ru(r) && (i.set("single", r), e.firstCategoryDimIndex = 0);
    }, polar: function (t, e, n, i) {
      var r = t.getReferringComponents("polar")[0],
          a = r.findAxisModel("radiusAxis"),
          o = r.findAxisModel("angleAxis");e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), ru(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), ru(o) && (i.set("angle", o), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1));
    }, geo: function (t, e, n, i) {
      e.coordSysDims = ["lng", "lat"];
    }, parallel: function (t, e, n, i) {
      var r = t.ecModel,
          a = r.getComponent("parallel", t.get("parallelIndex")),
          o = e.coordSysDims = a.dimensions.slice();d(a.parallelAxisIndex, function (t, a) {
        var s = r.getComponent("parallelAxis", t),
            l = o[a];n.set(l, s), ru(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a);
      });
    } };cu.prototype.parse = function (t) {
    return t;
  }, cu.prototype.getSetting = function (t) {
    return this._setting[t];
  }, cu.prototype.contain = function (t) {
    var e = this._extent;return t >= e[0] && t <= e[1];
  }, cu.prototype.normalize = function (t) {
    var e = this._extent;return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
  }, cu.prototype.scale = function (t) {
    var e = this._extent;return t * (e[1] - e[0]) + e[0];
  }, cu.prototype.unionExtent = function (t) {
    var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
  }, cu.prototype.unionExtentFromData = function (t, e) {
    this.unionExtent(t.getApproximateExtent(e));
  }, cu.prototype.getExtent = function () {
    return this._extent.slice();
  }, cu.prototype.setExtent = function (t, e) {
    var n = this._extent;isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
  }, cu.prototype.isBlank = function () {
    return this._isBlank;
  }, cu.prototype.setBlank = function (t) {
    this._isBlank = t;
  }, cu.prototype.getLabel = null, gi(cu), _i(cu, { registerWhenExtend: true }), du.createByAxisModel = function (t) {
    var e = t.option,
        n = e.data,
        i = n && f(n, pu);return new du({ categories: i, needCollect: !i, deduplication: false !== e.dedplication });
  };var fx = du.prototype;fx.getOrdinal = function (t) {
    return fu(this).get(t);
  }, fx.parseAndCollect = function (t) {
    var e,
        n = this._needCollect;if ("string" != typeof t && !n) return t;if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;var i = fu(this);return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = NaN), e;
  };var px = cu.prototype,
      gx = cu.extend({ type: "ordinal", init: function (t, e) {
      t && !_(t) || (t = new du({ categories: t })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1];
    }, parse: function (t) {
      return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
    }, contain: function (t) {
      return t = this.parse(t), px.contain.call(this, t) && null != this._ordinalMeta.categories[t];
    }, normalize: function (t) {
      return px.normalize.call(this, this.parse(t));
    }, scale: function (t) {
      return Math.round(px.scale.call(this, t));
    }, getTicks: function () {
      for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;return t;
    }, getLabel: function (t) {
      if (!this.isBlank()) return this._ordinalMeta.categories[t];
    }, count: function () {
      return this._extent[1] - this._extent[0] + 1;
    }, unionExtentFromData: function (t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }, getOrdinalMeta: function () {
      return this._ordinalMeta;
    }, niceTicks: F, niceExtent: F });gx.create = function () {
    return new gx();
  };var mx = ya,
      vx = ya,
      yx = cu.extend({ type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function (t, e) {
      var n = this._extent;isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
    }, unionExtent: function (t) {
      var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), yx.prototype.setExtent.call(this, e[0], e[1]);
    }, getInterval: function () {
      return this._interval;
    }, setInterval: function (t) {
      this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = mu(t);
    }, getTicks: function (t) {
      var e = this._interval,
          n = this._extent,
          i = this._niceExtent,
          r = this._intervalPrecision,
          a = [];if (!e) return a;n[0] < i[0] && (t ? a.push(vx(i[0] - e, r)) : a.push(n[0]));for (var o = i[0]; o <= i[1] && (a.push(o), (o = vx(o + e, r)) !== a[a.length - 1]);) if (a.length > 1e4) return [];var s = a.length ? a[a.length - 1] : i[1];return n[1] > s && (t ? a.push(vx(s + e, r)) : a.push(n[1])), a;
    }, getMinorTicks: function (t) {
      for (var e = this.getTicks(true), n = [], i = this.getExtent(), r = 1; r < e.length; r++) {
        for (var a = e[r], o = e[r - 1], s = 0, l = [], u = a - o, h = u / t; s < t - 1;) {
          var c = ya(o + (s + 1) * h);c > i[0] && c < i[1] && l.push(c), s++;
        }n.push(l);
      }return n;
    }, getLabel: function (t, e) {
      if (null == t) return "";var n = e && e.precision;return null == n ? n = wa(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = vx(t, n, true), Oa(t);
    }, niceTicks: function (t, e, n) {
      t = t || 5;var i = this._extent,
          r = i[1] - i[0];if (isFinite(r)) {
        r < 0 && (r = -r, i.reverse());var a = gu(i, t, e, n);this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;
      }
    }, niceExtent: function (t) {
      var e = this._extent;if (e[0] === e[1]) if (0 !== e[0]) {
        var n = e[0];t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2);
      } else e[1] = 1;var i = e[1] - e[0];isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var r = this._interval;t.fixMin || (e[0] = vx(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = vx(Math.ceil(e[1] / r) * r));
    } });yx.create = function () {
    return new yx();
  };var _x = "__ec_stack_",
      xx = "undefined" != typeof Float32Array ? Float32Array : Array,
      bx = (Vy(), yx.prototype),
      Sx = Math.ceil,
      Mx = Math.floor,
      Ix = function (t, e, n, i) {
    for (; n < i;) {
      var r = n + i >>> 1;t[r][1] < e ? n = r + 1 : i = r;
    }return n;
  },
      Ax = yx.extend({ type: "time", getLabel: function (t) {
      var e = this._stepLvl,
          n = new Date(t);return Va(e[0], n, this.getSetting("useUTC"));
    }, niceExtent: function (t) {
      var e = this._extent;if (e[0] === e[1] && (e[0] -= 864e5, e[1] += 864e5), e[1] === -Infinity && e[0] === Infinity) {
        var n = new Date();e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - 864e5;
      }this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var i = this._interval;t.fixMin || (e[0] = ya(Mx(e[0] / i) * i)), t.fixMax || (e[1] = ya(Sx(e[1] / i) * i));
    }, niceTicks: function (t, e, n) {
      t = t || 10;var i = this._extent,
          r = i[1] - i[0],
          a = r / t;null != e && a < e && (a = e), null != n && a > n && (a = n);var o = Dx.length,
          s = Ix(Dx, a, 0, o),
          l = Dx[Math.min(s, o - 1)],
          u = l[1];if ("year" === l[0]) {
        u *= Ca(r / u / t, true);
      }var h = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
          c = [Math.round(Sx((i[0] - h) / u) * u + h), Math.round(Mx((i[1] - h) / u) * u + h)];yu(c, i), this._stepLvl = l, this._interval = u, this._niceExtent = c;
    }, parse: function (t) {
      return +Aa(t);
    } });d(["contain", "normalize"], function (t) {
    Ax.prototype[t] = function (e) {
      return bx[t].call(this, this.parse(e));
    };
  });var Dx = [["hh:mm:ss", 1e3], ["hh:mm:ss", 5e3], ["hh:mm:ss", 1e4], ["hh:mm:ss", 15e3], ["hh:mm:ss", 3e4], ["hh:mm\nMM-dd", 6e4], ["hh:mm\nMM-dd", 3e5], ["hh:mm\nMM-dd", 6e5], ["hh:mm\nMM-dd", 9e5], ["hh:mm\nMM-dd", 18e5], ["hh:mm\nMM-dd", 36e5], ["hh:mm\nMM-dd", 72e5], ["hh:mm\nMM-dd", 216e5], ["hh:mm\nMM-dd", 432e5], ["MM-dd\nyyyy", 864e5], ["MM-dd\nyyyy", 1728e5], ["MM-dd\nyyyy", 2592e5], ["MM-dd\nyyyy", 3456e5], ["MM-dd\nyyyy", 432e6], ["MM-dd\nyyyy", 5184e5], ["week", 6048e5], ["MM-dd\nyyyy", 864e6], ["week", 12096e5], ["week", 18144e5], ["month", 26784e5], ["week", 36288e5], ["month", 53568e5], ["week", 6048e6], ["quarter", 8208e6], ["month", 107136e5], ["month", 13392e6], ["half-year", 16416e6], ["month", 214272e5], ["month", 26784e6], ["year", 32832e6]];Ax.create = function (t) {
    return new Ax({ useUTC: t.ecModel.get("useUTC") });
  };var Tx = cu.prototype,
      Cx = yx.prototype,
      kx = wa,
      Lx = ya,
      Px = Math.floor,
      Ox = Math.ceil,
      Nx = Math.pow,
      Ex = Math.log,
      zx = cu.extend({ type: "log", base: 10, $constructor: function () {
      cu.apply(this, arguments), this._originalScale = new yx();
    }, getTicks: function (t) {
      var e = this._originalScale,
          n = this._extent,
          i = e.getExtent();return f(Cx.getTicks.call(this, t), function (t) {
        var r = ya(Nx(this.base, t));return r = t === n[0] && e.__fixMin ? Cu(r, i[0]) : r, r = t === n[1] && e.__fixMax ? Cu(r, i[1]) : r;
      }, this);
    }, getMinorTicks: Cx.getMinorTicks, getLabel: Cx.getLabel, scale: function (t) {
      return t = Tx.scale.call(this, t), Nx(this.base, t);
    }, setExtent: function (t, e) {
      var n = this.base;t = Ex(t) / Ex(n), e = Ex(e) / Ex(n), Cx.setExtent.call(this, t, e);
    }, getExtent: function () {
      var t = this.base,
          e = Tx.getExtent.call(this);e[0] = Nx(t, e[0]), e[1] = Nx(t, e[1]);var n = this._originalScale,
          i = n.getExtent();return n.__fixMin && (e[0] = Cu(e[0], i[0])), n.__fixMax && (e[1] = Cu(e[1], i[1])), e;
    }, unionExtent: function (t) {
      this._originalScale.unionExtent(t);var e = this.base;t[0] = Ex(t[0]) / Ex(e), t[1] = Ex(t[1]) / Ex(e), Tx.unionExtent.call(this, t);
    }, unionExtentFromData: function (t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }, niceTicks: function (t) {
      t = t || 10;var e = this._extent,
          n = e[1] - e[0];if (!(n === Infinity || n <= 0)) {
        var i = Da(n),
            r = t / n * i;for (r <= .5 && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;var a = [ya(Ox(e[0] / i) * i), ya(Px(e[1] / i) * i)];this._interval = i, this._niceExtent = a;
      }
    }, niceExtent: function (t) {
      Cx.niceExtent.call(this, t);var e = this._originalScale;e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;
    } });d(["contain", "normalize"], function (t) {
    zx.prototype[t] = function (e) {
      return e = Ex(e) / Ex(this.base), Tx[t].call(this, e);
    };
  }), zx.create = function () {
    return new zx();
  };var Rx = { getMin: function (t) {
      var e = this.option,
          n = t || null == e.rangeStart ? e.min : e.rangeStart;return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !A(n) && (n = this.axis.scale.parse(n)), n;
    }, getMax: function (t) {
      var e = this.option,
          n = t || null == e.rangeEnd ? e.max : e.rangeEnd;return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !A(n) && (n = this.axis.scale.parse(n)), n;
    }, getNeedCrossZero: function () {
      var t = this.option;return null == t.rangeStart && null == t.rangeEnd && !t.scale;
    }, getCoordSysModel: F, setRange: function (t, e) {
      this.option.rangeStart = t, this.option.rangeEnd = e;
    }, resetRange: function () {
      this.option.rangeStart = this.option.rangeEnd = null;
    } },
      Bx = fr({ type: "triangle", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function (t, e) {
      var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath();
    } }),
      Fx = fr({ type: "diamond", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function (t, e) {
      var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath();
    } }),
      Vx = fr({ type: "pin", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function (t, e) {
      var n = e.x,
          i = e.y,
          r = e.width / 5 * 3,
          a = Math.max(r, e.height),
          o = r / 2,
          s = o * o / (a - o),
          l = i - a + o + s,
          u = Math.asin(s / o),
          h = Math.cos(u) * o,
          c = Math.sin(u),
          d = Math.cos(u),
          f = .6 * o,
          p = .7 * o;t.moveTo(n - h, l + s), t.arc(n, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * f, l + s + d * f, n - h, l + s), t.closePath();
    } }),
      Gx = fr({ type: "arrow", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function (t, e) {
      var n = e.height,
          i = e.width,
          r = e.x,
          a = e.y,
          o = i / 3 * 2;t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath();
    } }),
      Wx = { line: iv, rect: ev, roundRect: ev, square: ev, circle: Zm, diamond: Fx, pin: Vx, arrow: Gx, triangle: Bx },
      Hx = { line: function (t, e, n, i, r) {
      r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2;
    }, rect: function (t, e, n, i, r) {
      r.x = t, r.y = e, r.width = n, r.height = i;
    }, roundRect: function (t, e, n, i, r) {
      r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4;
    }, square: function (t, e, n, i, r) {
      var a = Math.min(n, i);r.x = t, r.y = e, r.width = a, r.height = a;
    }, circle: function (t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2;
    }, diamond: function (t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
    }, pin: function (t, e, n, i, r) {
      r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
    }, arrow: function (t, e, n, i, r) {
      r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
    }, triangle: function (t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
    } },
      Zx = {};d(Wx, function (t, e) {
    Zx[e] = new t();
  });var Xx = fr({ type: "symbol", shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 }, calculateTextPosition: function (t, e, n) {
      var i = Ye(t, e, n),
          r = this.shape;return r && "pin" === r.symbolType && "inside" === e.textPosition && (i.y = n.y + .4 * n.height), i;
    }, buildPath: function (t, e, n) {
      var i = e.symbolType;if ("none" !== i) {
        var r = Zx[i];r || (i = "rect", r = Zx[i]), Hx[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n);
      }
    } }),
      jx = { isDimensionStacked: ou, enableDataStack: au, getStackedDimension: su },
      Ux = (Object.freeze || Object)({ createList: Hu, getLayoutRect: Xa, dataStack: jx, createScale: Zu, mixinAxisModelCommonMethods: Xu, completeDimensions: Jl, createDimensions: cx, createSymbol: Wu }),
      Yx = 1e-8;Yu.prototype = { constructor: Yu, properties: null, getBoundingRect: function () {
      var t = this._rect;if (t) return t;for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++) if ("polygon" === o[s].type) {
        var l = o[s].exterior;Ni(l, r, a), at(n, n, r), ot(i, i, a);
      }return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new Me(n[0], n[1], i[0] - n[0], i[1] - n[1]);
    }, contain: function (t) {
      var e = this.getBoundingRect(),
          n = this.geometries;if (!e.contain(t[0], t[1])) return false;t: for (var i = 0, r = n.length; i < r; i++) if ("polygon" === n[i].type) {
        var a = n[i].exterior,
            o = n[i].interiors;if (Uu(a, t[0], t[1])) {
          for (var s = 0; s < (o ? o.length : 0); s++) if (Uu(o[s])) continue t;return true;
        }
      }return false;
    }, transformTo: function (t, e, n, i) {
      var r = this.getBoundingRect(),
          a = r.width / r.height;n ? i || (i = n / a) : n = a * i;for (var o = new Me(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, u = 0; u < l.length; u++) if ("polygon" === l[u].type) {
        for (var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) rt(h[d], h[d], s);for (var f = 0; f < (c ? c.length : 0); f++) for (var d = 0; d < c[f].length; d++) rt(c[f][d], c[f][d], s);
      }r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2];
    }, cloneShallow: function (t) {
      null == t && (t = this.name);var e = new Yu(t, this.geometries, this.center);return e._rect = this._rect, e.transformTo = null, e;
    } };var qx = function (t) {
    return qu(t), f(g(t.features, function (t) {
      return t.geometry && t.properties && t.geometry.coordinates.length > 0;
    }), function (t) {
      var e = t.properties,
          n = t.geometry,
          i = n.coordinates,
          r = [];"Polygon" === n.type && r.push({ type: "polygon", exterior: i[0], interiors: i.slice(1) }), "MultiPolygon" === n.type && d(i, function (t) {
        t[0] && r.push({ type: "polygon", exterior: t[0], interiors: t.slice(1) });
      });var a = new Yu(e.name, r, e.cp);return a.properties = e, a;
    });
  },
      $x = si(),
      Kx = [0, 1],
      Qx = function (t, e, n) {
    this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = false, this.onBand = false;
  };Qx.prototype = { constructor: Qx, contain: function (t) {
      var e = this._extent,
          n = Math.min(e[0], e[1]),
          i = Math.max(e[0], e[1]);return t >= n && t <= i;
    }, containData: function (t) {
      return this.scale.contain(t);
    }, getExtent: function () {
      return this._extent.slice();
    }, getPixelPrecision: function (t) {
      return ba(t || this.scale.getExtent(), this._extent);
    }, setExtent: function (t, e) {
      var n = this._extent;n[0] = t, n[1] = e;
    }, dataToCoord: function (t, e) {
      var n = this._extent,
          i = this.scale;return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), ch(n, i.count())), ma(t, Kx, n, e);
    }, coordToData: function (t, e) {
      var n = this._extent,
          i = this.scale;this.onBand && "ordinal" === i.type && (n = n.slice(), ch(n, i.count()));var r = ma(t, n, Kx, e);return this.scale.scale(r);
    }, pointToData: function (t, e) {}, getTicksCoords: function (t) {
      t = t || {};var e = t.tickModel || this.getTickModel(),
          n = Qu(this, e),
          i = n.ticks,
          r = f(i, function (t) {
        return { coord: this.dataToCoord(t), tickValue: t };
      }, this);return dh(this, r, e.get("alignWithLabel"), t.clamp), r;
    }, getMinorTicksCoords: function () {
      if ("ordinal" === this.scale.type) return [];var t = this.model.getModel("minorTick"),
          e = t.get("splitNumber");return e > 0 && e < 100 || (e = 5), f(this.scale.getMinorTicks(e), function (t) {
        return f(t, function (t) {
          return { coord: this.dataToCoord(t), tickValue: t };
        }, this);
      }, this);
    }, getViewLabels: function () {
      return Ku(this).labels;
    }, getLabelModel: function () {
      return this.model.getModel("axisLabel");
    }, getTickModel: function () {
      return this.model.getModel("axisTick");
    }, getBandWidth: function () {
      var t = this._extent,
          e = this.scale.getExtent(),
          n = e[1] - e[0] + (this.onBand ? 1 : 0);0 === n && (n = 1);var i = Math.abs(t[1] - t[0]);return Math.abs(i) / n;
    }, isHorizontal: null, getRotate: null, calculateCategoryInterval: function () {
      return sh(this);
    } };var Jx = qx,
      tw = {};d(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
    tw[t] = zf[t];
  });var ew = {};d(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "registerShape", "getShapeClass", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function (t) {
    ew[t] = Av[t];
  }), Ry.extend({ type: "series.line", dependencies: ["grid", "polar"], getInitialData: function (t, e) {
      return lu(this.getSource(), this, { useEncodeDefaulter: true });
    }, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "cartesian2d", legendHoverLink: true, hoverAnimation: true, clip: true, label: { position: "top" }, lineStyle: { width: 2, type: "solid" }, step: false, smooth: false, smoothMonotone: null, symbol: "emptyCircle", symbolSize: 4, symbolRotate: null, showSymbol: true, showAllSymbol: "auto", connectNulls: false, sampling: "none", animationEasing: "linear", progressive: 0, hoverLayerThreshold: Infinity } });var nw = ph.prototype,
      iw = ph.getSymbolSize = function (t, e) {
    var n = t.getItemVisual(e, "symbolSize");return n instanceof Array ? n.slice() : [+n, +n];
  };nw._createSymbol = function (t, e, n, i, r) {
    this.removeAll();var a = e.getItemVisual(n, "color"),
        o = Wu(t, -1, -1, 2, 2, a, r);o.attr({ z2: 100, culling: true, scale: gh(i) }), o.drift = mh, this._symbolType = t, this.add(o);
  }, nw.stopSymbolAnimation = function (t) {
    this.childAt(0).stopAnimation(t);
  }, nw.getSymbolPath = function () {
    return this.childAt(0);
  }, nw.getScale = function () {
    return this.childAt(0).scale;
  }, nw.highlight = function () {
    this.childAt(0).trigger("emphasis");
  }, nw.downplay = function () {
    this.childAt(0).trigger("normal");
  }, nw.setZ = function (t, e) {
    var n = this.childAt(0);n.zlevel = t, n.z = e;
  }, nw.setDraggable = function (t) {
    var e = this.childAt(0);e.draggable = t, e.cursor = t ? "move" : e.cursor;
  }, nw.updateData = function (t, e, n) {
    this.silent = false;var i = t.getItemVisual(e, "symbol") || "circle",
        r = t.hostModel,
        a = iw(t, e),
        o = i !== this._symbolType;if (o) {
      var s = t.getItemVisual(e, "symbolKeepAspect");this._createSymbol(i, t, e, a, s);
    } else {
      var l = this.childAt(0);l.silent = false, Qr(l, { scale: gh(a) }, r, e);
    }if (this._updateCommon(t, e, a, n), o) {
      var l = this.childAt(0),
          u = n && n.fadeIn,
          h = { scale: l.scale.slice() };u && (h.style = { opacity: l.style.opacity }), l.scale = [0, 0], u && (l.style.opacity = 0), Jr(l, h, r, e);
    }this._seriesModel = r;
  };var rw = ["itemStyle"],
      aw = ["emphasis", "itemStyle"],
      ow = ["label"],
      sw = ["emphasis", "label"];nw._updateCommon = function (t, e, n, i) {
    function r(e, n) {
      return b ? t.getName(e) : fh(t, e);
    }var o = this.childAt(0),
        s = t.hostModel,
        l = t.getItemVisual(e, "color");"image" !== o.type ? o.useStyle({ strokeNoScale: true }) : o.setStyle({ opacity: null, shadowBlur: null, shadowOffsetX: null, shadowOffsetY: null, shadowColor: null });var u = i && i.itemStyle,
        h = i && i.hoverItemStyle,
        c = i && i.symbolRotate,
        d = i && i.symbolOffset,
        f = i && i.labelModel,
        p = i && i.hoverLabelModel,
        g = i && i.hoverAnimation,
        m = i && i.cursorStyle;if (!i || t.hasItemOption) {
      var v = i && i.itemModel ? i.itemModel : t.getItemModel(e);u = v.getModel(rw).getItemStyle(["color"]), h = v.getModel(aw).getItemStyle(), c = v.getShallow("symbolRotate"), d = v.getShallow("symbolOffset"), f = v.getModel(ow), p = v.getModel(sw), g = v.getShallow("hoverAnimation"), m = v.getShallow("cursor");
    } else h = a({}, h);var y = o.style;o.attr("rotation", (c || 0) * Math.PI / 180 || 0), d && o.attr("position", [va(d[0], n[0]), va(d[1], n[1])]), m && o.attr("cursor", m), o.setColor(l, i && i.symbolInnerColor), o.setStyle(u);var _ = t.getItemVisual(e, "opacity");null != _ && (y.opacity = _);var x = t.getItemVisual(e, "liftZ"),
        w = o.__z2Origin;null != x ? null == w && (o.__z2Origin = o.z2, o.z2 += x) : null != w && (o.z2 = w, o.__z2Origin = null);var b = i && i.useNameLabel;Vr(y, h, f, p, { labelFetcher: s, labelDataIndex: e, defaultText: r, isRectText: true, autoColor: l }), o.__symbolOriginalScale = gh(n), o.hoverStyle = h, o.highDownOnUpdate = g && s.isAnimationEnabled() ? vh : null, zr(o);
  }, nw.fadeOut = function (t, e) {
    var n = this.childAt(0);this.silent = n.silent = true, !(e && e.keepLabel) && (n.style.text = null), Qr(n, { style: { opacity: 0 }, scale: [0, 0] }, this._seriesModel, this.dataIndex, t);
  }, u(ph, Np);var lw = yh.prototype;lw.updateData = function (t, e) {
    e = xh(e);var n = this.group,
        i = t.hostModel,
        r = this._data,
        a = this._symbolCtor,
        o = wh(t);r || n.removeAll(), t.diff(r).add(function (i) {
      var r = t.getItemLayout(i);if (_h(t, r, i, e)) {
        var s = new a(t, i, o);s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s);
      }
    }).update(function (s, l) {
      var u = r.getItemGraphicEl(l),
          h = t.getItemLayout(s);if (!_h(t, h, s, e)) return undefined;u ? (u.updateData(t, s, o), Qr(u, { position: h }, i)) : (u = new a(t, s), u.attr("position", h)), n.add(u), t.setItemGraphicEl(s, u);
    }).remove(function (t) {
      var e = r.getItemGraphicEl(t);e && e.fadeOut(function () {
        n.remove(e);
      });
    }).execute(), this._data = t;
  }, lw.isPersistent = function () {
    return true;
  }, lw.updateLayout = function () {
    var t = this._data;t && t.eachItemGraphicEl(function (e, n) {
      var i = t.getItemLayout(n);e.attr("position", i);
    });
  }, lw.incrementalPrepareUpdate = function (t) {
    this._seriesScope = wh(t), this._data = null, this.group.removeAll();
  }, lw.incrementalUpdate = function (t, e, n) {
    function i(t) {
      t.isGroup || (t.incremental = t.useHoverLayer = true);
    }n = xh(n);for (var r = t.start; r < t.end; r++) {
      var a = e.getItemLayout(r);if (_h(e, a, r, n)) {
        var o = new this._symbolCtor(e, r, this._seriesScope);o.traverse(i), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o);
      }
    }
  }, lw.remove = function (t) {
    var e = this.group,
        n = this._data;n && t ? n.eachItemGraphicEl(function (t) {
      t.fadeOut(function () {
        e.remove(t);
      });
    }) : e.removeAll();
  };var uw = function (t, e, n, i, r, a, o, s) {
    for (var l = Ih(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], m = bh(r, e, o), v = bh(a, t, s), y = 0; y < l.length; y++) {
      var _ = l[y],
          x = true;switch (_.cmd) {case "=":
          var w = t.getItemLayout(_.idx),
              b = e.getItemLayout(_.idx1);(isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), u.push(w), h.push(b), c.push(n[_.idx]), d.push(i[_.idx1]), g.push(e.getRawIndex(_.idx1));break;case "+":
          var S = _.idx;u.push(r.dataToPoint([e.get(m.dataDimsForPoint[0], S), e.get(m.dataDimsForPoint[1], S)])), h.push(e.getItemLayout(S).slice()), c.push(Mh(m, r, e, S)), d.push(i[S]), g.push(e.getRawIndex(S));break;case "-":
          var S = _.idx,
              M = t.getRawIndex(S);M !== S ? (u.push(t.getItemLayout(S)), h.push(a.dataToPoint([t.get(v.dataDimsForPoint[0], S), t.get(v.dataDimsForPoint[1], S)])), c.push(n[S]), d.push(Mh(v, a, t, S)), g.push(M)) : x = false;}x && (f.push(_), p.push(p.length));
    }p.sort(function (t, e) {
      return g[t] - g[e];
    });for (var I = [], A = [], D = [], T = [], C = [], y = 0; y < p.length; y++) {
      var S = p[y];I[y] = u[S], A[y] = h[S], D[y] = c[S], T[y] = d[S], C[y] = f[S];
    }return { current: I, next: A, stackedOnCurrent: D, stackedOnNext: T, status: C };
  },
      hw = at,
      cw = ot,
      dw = X,
      fw = G,
      pw = [],
      gw = [],
      mw = [],
      vw = Ji.extend({ type: "ec-polyline", shape: { points: [], smooth: 0, smoothConstraint: true, smoothMonotone: null, connectNulls: false }, style: { fill: null, stroke: "#000" }, brush: jm(Ji.prototype.brush), buildPath: function (t, e) {
      var n = e.points,
          i = 0,
          r = n.length,
          a = kh(n, e.smoothConstraint);if (e.connectNulls) {
        for (; r > 0 && Ah(n[r - 1]); r--);for (; i < r && Ah(n[i]); i++);
      }for (; i < r;) i += Dh(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
    } }),
      yw = Ji.extend({ type: "ec-polygon", shape: { points: [], stackedOnPoints: [], smooth: 0, stackedOnSmooth: 0, smoothConstraint: true, smoothMonotone: null, connectNulls: false }, brush: jm(Ji.prototype.brush), buildPath: function (t, e) {
      var n = e.points,
          i = e.stackedOnPoints,
          r = 0,
          a = n.length,
          o = e.smoothMonotone,
          s = kh(n, e.smoothConstraint),
          l = kh(i, e.smoothConstraint);if (e.connectNulls) {
        for (; a > 0 && Ah(n[a - 1]); a--);for (; r < a && Ah(n[r]); r++);
      }for (; r < a;) {
        var u = Dh(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);Dh(t, i, r + u - 1, u, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += u + 1, t.closePath();
      }
    } });os.extend({ type: "line", init: function () {
      var t = new Np(),
          e = new yh();this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t;
    }, render: function (t, e, n) {
      var i = t.coordinateSystem,
          r = this.group,
          a = t.getData(),
          s = t.getModel("lineStyle"),
          l = t.getModel("areaStyle"),
          u = a.mapArray(a.getItemLayout),
          h = "polar" === i.type,
          c = this._coordSys,
          d = this._symbolDraw,
          f = this._polyline,
          p = this._polygon,
          g = this._lineGroup,
          m = t.get("animation"),
          v = !l.isEmpty(),
          y = l.get("origin"),
          _ = bh(i, a, y),
          x = Eh(i, a, _),
          w = t.get("showSymbol"),
          b = w && !h && Bh(t, a, i),
          S = this._data;S && S.eachItemGraphicEl(function (t, e) {
        t.__temp && (r.remove(t), S.setItemGraphicEl(e, null));
      }), w || d.remove(), r.add(g);var M,
          I = !h && t.get("step");i && i.getArea && t.get("clip", true) && (M = i.getArea(), null != M.width ? (M.x -= .1, M.y -= .1, M.width += .2, M.height += .2) : M.r0 && (M.r0 -= .5, M.r1 += .5)), this._clipShapeForSymbol = M, f && c.type === i.type && I === this._step ? (v && !p ? p = this._newPolygon(u, x, i, m) : p && !v && (g.remove(p), p = this._polygon = null), g.setClipPath(Vh(i, false, t)), w && d.updateData(a, { isIgnore: b, clipShape: M }), a.eachItemGraphicEl(function (t) {
        t.stopAnimation(true);
      }), Oh(this._stackedOnPoints, x) && Oh(this._points, u) || (m ? this._updateAnimation(a, x, i, n, I, y) : (I && (u = zh(u, i, I), x = zh(x, i, I)), f.setShape({ points: u }), p && p.setShape({ points: u, stackedOnPoints: x })))) : (w && d.updateData(a, { isIgnore: b, clipShape: M }), I && (u = zh(u, i, I), x = zh(x, i, I)), f = this._newPolyline(u, i, m), v && (p = this._newPolygon(u, x, i, m)), g.setClipPath(Vh(i, true, t)));var A = Rh(a, i) || a.getVisual("color");f.useStyle(o(s.getLineStyle(), { fill: "none", stroke: A, lineJoin: "bevel" }));var D = t.get("smooth");if (D = Nh(t.get("smooth")), f.setShape({ smooth: D, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") }), p) {
        var T = a.getCalculationInfo("stackedOnSeries"),
            C = 0;p.useStyle(o(l.getAreaStyle(), { fill: A, opacity: .7, lineJoin: "bevel" })), T && (C = Nh(T.get("smooth"))), p.setShape({ smooth: D, stackedOnSmooth: C, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") });
      }this._data = a, this._coordSys = i, this._stackedOnPoints = x, this._points = u, this._step = I, this._valueOrigin = y;
    }, dispose: function () {}, highlight: function (t, e, n, i) {
      var r = t.getData(),
          a = oi(r, i);if (!(a instanceof Array) && null != a && a >= 0) {
        var o = r.getItemGraphicEl(a);if (!o) {
          var s = r.getItemLayout(a);if (!s) return;if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(s[0], s[1])) return;o = new ph(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = true, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(true), this.group.add(o);
        }o.highlight();
      } else os.prototype.highlight.call(this, t, e, n, i);
    }, downplay: function (t, e, n, i) {
      var r = t.getData(),
          a = oi(r, i);if (null != a && a >= 0) {
        var o = r.getItemGraphicEl(a);o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());
      } else os.prototype.downplay.call(this, t, e, n, i);
    }, _newPolyline: function (t) {
      var e = this._polyline;return e && this._lineGroup.remove(e), e = new vw({ shape: { points: t }, silent: true, z2: 10 }), this._lineGroup.add(e), this._polyline = e, e;
    }, _newPolygon: function (t, e) {
      var n = this._polygon;return n && this._lineGroup.remove(n), n = new yw({ shape: { points: t, stackedOnPoints: e }, silent: true }), this._lineGroup.add(n), this._polygon = n, n;
    }, _updateAnimation: function (t, e, n, i, r, a) {
      var o = this._polyline,
          s = this._polygon,
          l = t.hostModel,
          u = uw(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),
          h = u.current,
          c = u.stackedOnCurrent,
          d = u.next,
          f = u.stackedOnNext;r && (h = zh(u.current, n, r), c = zh(u.stackedOnCurrent, n, r), d = zh(u.next, n, r), f = zh(u.stackedOnNext, n, r)), o.shape.__points = u.current, o.shape.points = h, Qr(o, { shape: { points: d } }, l), s && (s.setShape({ points: h, stackedOnPoints: c }), Qr(s, { shape: { points: d, stackedOnPoints: f } }, l));for (var p = [], g = u.status, m = 0; m < g.length; m++) {
        if ("=" === g[m].cmd) {
          var v = t.getItemGraphicEl(g[m].idx1);v && p.push({ el: v, ptIdx: m });
        }
      }o.animators && o.animators.length && o.animators[0].during(function () {
        for (var t = 0; t < p.length; t++) {
          p[t].el.attr("position", o.shape.__points[p[t].ptIdx]);
        }
      });
    }, remove: function (t) {
      var e = this.group,
          n = this._data;this._lineGroup.removeAll(), this._symbolDraw.remove(true), n && n.eachItemGraphicEl(function (t, i) {
        t.__temp && (e.remove(t), n.setItemGraphicEl(i, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null;
    } });var _w = function (t, e, n) {
    return { seriesType: t, performRawSeries: true, reset: function (t, i, r) {
        function a(e, n) {
          if (d) {
            var i = t.getRawValue(n),
                r = t.getDataParams(n);h && e.setItemVisual(n, "symbol", s(i, r)), c && e.setItemVisual(n, "symbolSize", l(i, r));
          }if (e.hasItemOption) {
            var a = e.getItemModel(n),
                o = a.getShallow("symbol", true),
                u = a.getShallow("symbolSize", true),
                f = a.getShallow("symbolKeepAspect", true);null != o && e.setItemVisual(n, "symbol", o), null != u && e.setItemVisual(n, "symbolSize", u), null != f && e.setItemVisual(n, "symbolKeepAspect", f);
          }
        }var o = t.getData(),
            s = t.get("symbol"),
            l = t.get("symbolSize"),
            u = t.get("symbolKeepAspect"),
            h = x(s),
            c = x(l),
            d = h || c,
            f = !h && s ? s : e,
            p = c ? null : l;if (o.setVisual({ legendSymbol: n || f, symbol: f, symbolSize: p, symbolKeepAspect: u }), !i.isSeriesFiltered(t)) return { dataEach: o.hasItemOption || d ? a : null };
      } };
  },
      xw = { average: function (t) {
      for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);return 0 === n ? NaN : e / n;
    }, sum: function (t) {
      for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;return e;
    }, max: function (t) {
      for (var e = -Infinity, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);return isFinite(e) ? e : NaN;
    }, min: function (t) {
      for (var e = Infinity, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);return isFinite(e) ? e : NaN;
    }, nearest: function (t) {
      return t[0];
    } },
      ww = function (t, e) {
    return Math.round(t.length / 2);
  },
      bw = function (t) {
    this._axes = {}, this._dimList = [], this.name = t || "";
  };bw.prototype = { constructor: bw, type: "cartesian", getAxis: function (t) {
      return this._axes[t];
    }, getAxes: function () {
      return f(this._dimList, Gh, this);
    }, getAxesByScale: function (t) {
      return t = t.toLowerCase(), g(this.getAxes(), function (e) {
        return e.scale.type === t;
      });
    }, addAxis: function (t) {
      var e = t.dim;this._axes[e] = t, this._dimList.push(e);
    }, dataToCoord: function (t) {
      return this._dataCoordConvert(t, "dataToCoord");
    }, coordToData: function (t) {
      return this._dataCoordConvert(t, "coordToData");
    }, _dataCoordConvert: function (t, e) {
      for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
        var a = n[r],
            o = this._axes[a];i[a] = o[e](t[a]);
      }return i;
    } }, Wh.prototype = { constructor: Wh, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, containPoint: function (t) {
      var e = this.getAxis("x"),
          n = this.getAxis("y");return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
    }, containData: function (t) {
      return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
    }, dataToPoint: function (t, e, n) {
      var i = this.getAxis("x"),
          r = this.getAxis("y");return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n;
    }, clampData: function (t, e) {
      var n = this.getAxis("x").scale,
          i = this.getAxis("y").scale,
          r = n.getExtent(),
          a = i.getExtent(),
          o = n.parse(t[0]),
          s = i.parse(t[1]);return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e;
    }, pointToData: function (t, e) {
      var n = this.getAxis("x"),
          i = this.getAxis("y");return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e;
    }, getOtherAxis: function (t) {
      return this.getAxis("x" === t.dim ? "y" : "x");
    }, getArea: function () {
      var t = this.getAxis("x").getGlobalExtent(),
          e = this.getAxis("y").getGlobalExtent(),
          n = Math.min(t[0], t[1]),
          i = Math.min(e[0], e[1]);return new Me(n, i, Math.max(t[0], t[1]) - n, Math.max(e[0], e[1]) - i);
    } }, u(Wh, bw);var Sw = function (t, e, n, i, r) {
    Qx.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom";
  };Sw.prototype = { constructor: Sw, index: 0, getAxesOnZeroOf: null, model: null, isHorizontal: function () {
      var t = this.position;return "top" === t || "bottom" === t;
    }, getGlobalExtent: function (t) {
      var e = this.getExtent();return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e;
    }, getOtherAxis: function () {
      this.grid.getOtherAxis();
    }, pointToData: function (t, e) {
      return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
    }, toLocalCoord: null, toGlobalCoord: null }, u(Sw, Qx);var Mw = { show: true, zlevel: 0, z: 0, inverse: false, name: "", nameLocation: "end", nameRotate: null, nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." }, nameTextStyle: {}, nameGap: 15, silent: false, triggerEvent: false, tooltip: { show: false }, axisPointer: {}, axisLine: { show: true, onZero: true, onZeroAxisIndex: null, lineStyle: { color: "#333", width: 1, type: "solid" }, symbol: ["none", "none"], symbolSize: [10, 15] }, axisTick: { show: true, inside: false, length: 5, lineStyle: { width: 1 } }, axisLabel: { show: true, inside: false, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12 }, splitLine: { show: true, lineStyle: { color: ["#ccc"], width: 1, type: "solid" } }, splitArea: { show: false, areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] } } },
      Iw = {};Iw.categoryAxis = i({ boundaryGap: true, deduplication: null, splitLine: { show: false }, axisTick: { alignWithLabel: false, interval: "auto" }, axisLabel: { interval: "auto" } }, Mw), Iw.valueAxis = i({ boundaryGap: [0, 0], splitNumber: 5, minorTick: { show: false, splitNumber: 5, length: 3, lineStyle: {} }, minorSplitLine: { show: false, lineStyle: { color: "#eee", width: 1 } } }, Mw), Iw.timeAxis = o({ scale: true, min: "dataMin", max: "dataMax" }, Iw.valueAxis), Iw.logAxis = o({ scale: true, logBase: 10 }, Iw.valueAxis);var Aw = ["value", "category", "time", "log"],
      Dw = function (t, e, n, a) {
    d(Aw, function (o) {
      e.extend({ type: t + "Axis." + o, mergeDefaultAndTheme: function (e, r) {
          var a = this.layoutMode,
              s = a ? Ua(e) : {};i(e, r.getTheme().get(o + "Axis")), i(e, this.getDefaultOption()), e.type = n(t, e), a && ja(e, s, a);
        }, optionUpdated: function () {
          "category" === this.option.type && (this.__ordinalMeta = du.createByAxisModel(this));
        }, getCategories: function (t) {
          var e = this.option;if ("category" === e.type) return t ? e.data : this.__ordinalMeta.categories;
        }, getOrdinalMeta: function () {
          return this.__ordinalMeta;
        }, defaultOption: r([{}, Iw[o + "Axis"], a], true) });
    }), $v.registerSubTypeDefaulter(t + "Axis", y(n, t));
  },
      Tw = $v.extend({ type: "cartesian2dAxis", axis: null, init: function () {
      Tw.superApply(this, "init", arguments), this.resetRange();
    }, mergeOption: function () {
      Tw.superApply(this, "mergeOption", arguments), this.resetRange();
    }, restoreData: function () {
      Tw.superApply(this, "restoreData", arguments), this.resetRange();
    }, getCoordSysModel: function () {
      return this.ecModel.queryComponents({ mainType: "grid", index: this.option.gridIndex, id: this.option.gridId })[0];
    } });i(Tw.prototype, Rx);var Cw = { offset: 0 };Dw("x", Tw, Hh, Cw), Dw("y", Tw, Hh, Cw), $v.extend({ type: "grid", dependencies: ["xAxis", "yAxis"], layoutMode: "box", coordinateSystem: null, defaultOption: { show: false, zlevel: 0, z: 0, left: "10%", top: 60, right: "10%", bottom: 60, containLabel: false, backgroundColor: "rgba(0,0,0,0)", borderWidth: 1, borderColor: "#ccc" } });var kw = Xh.prototype;kw.type = "grid", kw.axisPointerEnabled = true, kw.getRect = function () {
    return this._rect;
  }, kw.update = function (t, e) {
    var n = this._axesMap;this._updateScale(t, this.model), d(n.x, function (t) {
      Pu(t.scale, t.model);
    }), d(n.y, function (t) {
      Pu(t.scale, t.model);
    });var i = {};d(n.x, function (t) {
      jh(n, "y", t, i);
    }), d(n.y, function (t) {
      jh(n, "x", t, i);
    }), this.resize(this.model, e);
  }, kw.resize = function (t, e, n) {
    function i() {
      d(a, function (t) {
        var e = t.isHorizontal(),
            n = e ? [0, r.width] : [0, r.height],
            i = t.inverse ? 1 : 0;t.setExtent(n[i], n[1 - i]), Yh(t, e ? r.x : r.y);
      });
    }var r = Xa(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });this._rect = r;var a = this._axesList;i(), !n && t.get("containLabel") && (d(a, function (t) {
      if (!t.model.get("axisLabel.inside")) {
        var e = Ru(t);if (e) {
          var n = t.isHorizontal() ? "height" : "width",
              i = t.model.get("axisLabel.margin");r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i);
        }
      }
    }), i());
  }, kw.getAxis = function (t, e) {
    var n = this._axesMap[t];if (null != n) {
      if (null == e) for (var i in n) if (n.hasOwnProperty(i)) return n[i];return n[e];
    }
  }, kw.getAxes = function () {
    return this._axesList.slice();
  }, kw.getCartesian = function (t, e) {
    if (null != t && null != e) {
      var n = "x" + t + "y" + e;return this._coordsMap[n];
    }b(t) && (e = t.yAxisIndex, t = t.xAxisIndex);for (var i = 0, r = this._coordsList; i < r.length; i++) if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i];
  }, kw.getCartesians = function () {
    return this._coordsList.slice();
  }, kw.convertToPixel = function (t, e, n) {
    var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
  }, kw.convertFromPixel = function (t, e, n) {
    var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
  }, kw._findConvertTarget = function (t, e) {
    var n,
        i,
        r = e.seriesModel,
        a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
        o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
        s = e.gridModel,
        u = this._coordsList;if (r) n = r.coordinateSystem, l(u, n) < 0 && (n = null);else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);else if (a) i = this.getAxis("x", a.componentIndex);else if (o) i = this.getAxis("y", o.componentIndex);else if (s) {
      var h = s.coordinateSystem;h === this && (n = this._coordsList[0]);
    }return { cartesian: n, axis: i };
  }, kw.containPoint = function (t) {
    var e = this._coordsList[0];if (e) return e.containPoint(t);
  }, kw._initCartesian = function (t, e, n) {
    function i(n) {
      return function (i, s) {
        if (Zh(i, t, e)) {
          var l = i.get("position");"x" === n ? "top" !== l && "bottom" !== l && (l = r.bottom ? "top" : "bottom") : "left" !== l && "right" !== l && (l = r.left ? "right" : "left"), r[l] = true;var u = new Sw(n, Ou(i), [0, 0], i.get("type"), l),
              h = "category" === u.type;u.onBand = h && i.get("boundaryGap"), u.inverse = i.get("inverse"), i.axis = u, u.model = i, u.grid = this, u.index = s, this._axesList.push(u), a[n][s] = u, o[n]++;
        }
      };
    }var r = { left: false, right: false, top: false, bottom: false },
        a = { x: {}, y: {} },
        o = { x: 0, y: 0 };if (e.eachComponent("xAxis", i("x"), this), e.eachComponent("yAxis", i("y"), this), !o.x || !o.y) return this._axesMap = {}, undefined;this._axesMap = a, d(a.x, function (e, n) {
      d(a.y, function (i, r) {
        var a = "x" + n + "y" + r,
            o = new Wh(a);o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(i);
      }, this);
    }, this);
  }, kw._updateScale = function (t, e) {
    function n(t, e, n) {
      d(t.mapDimension(e.dim, true), function (n) {
        e.scale.unionExtentFromData(t, su(t, n));
      });
    }d(this._axesList, function (t) {
      t.scale.setExtent(Infinity, -Infinity);
    }), t.eachSeries(function (i) {
      if ($h(i)) {
        var r = qh(i, t),
            a = r[0],
            o = r[1];if (!Zh(a, e, t) || !Zh(o, e, t)) return;var s = this.getCartesian(a.componentIndex, o.componentIndex),
            l = i.getData(),
            u = s.getAxis("x"),
            h = s.getAxis("y");"list" === l.type && (n(l, u, i), n(l, h, i));
      }
    }, this);
  }, kw.getTooltipAxes = function (t) {
    var e = [],
        n = [];return d(this.getCartesians(), function (i) {
      var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
          a = i.getOtherAxis(r);l(e, r) < 0 && e.push(r), l(n, a) < 0 && n.push(a);
    }), { baseAxes: e, otherAxes: n };
  };var Lw = ["xAxis", "yAxis"];Xh.create = function (t, e) {
    var n = [];return t.eachComponent("grid", function (i, r) {
      var a = new Xh(i, t, e);a.name = "grid_" + r, a.resize(i, e, true), i.coordinateSystem = a, n.push(a);
    }), t.eachSeries(function (e) {
      if ($h(e)) {
        var n = qh(e, t),
            i = n[0],
            r = n[1],
            a = i.getCoordSysModel(),
            o = a.coordinateSystem;e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex);
      }
    }), n;
  }, Xh.dimensions = Xh.prototype.dimensions = Wh.prototype.dimensions, xo.register("cartesian2d", Xh);var Pw = Math.PI,
      Ow = function (t, e) {
    this.opt = e, this.axisModel = t, o(e, { labelOffset: 0, nameDirection: 1, tickDirection: 1, labelDirection: 1, silent: true }), this.group = new Np();var n = new Np({ position: e.position.slice(), rotation: e.rotation });n.updateTransform(), this._transform = n.transform, this._dumbGroup = n;
  };Ow.prototype = { constructor: Ow, hasBuilder: function (t) {
      return !!Nw[t];
    }, add: function (t) {
      Nw[t].call(this);
    }, getGroup: function () {
      return this.group;
    } };var Nw = { axisLine: function () {
      var t = this.opt,
          e = this.axisModel;if (e.get("axisLine.show")) {
        var n = this.axisModel.axis.getExtent(),
            i = this._transform,
            r = [n[0], 0],
            o = [n[1], 0];i && (rt(r, r, i), rt(o, o, i));var s = a({ lineCap: "round" }, e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new iv({ anid: "line", subPixelOptimize: true, shape: { x1: r[0], y1: r[1], x2: o[0], y2: o[1] }, style: s, strokeContainThreshold: t.strokeContainThreshold || 5, silent: true, z2: 1 }));var l = e.get("axisLine.symbol"),
            u = e.get("axisLine.symbolSize"),
            h = e.get("axisLine.symbolOffset") || 0;if ("number" == typeof h && (h = [h, h]), null != l) {
          "string" == typeof l && (l = [l, l]), "string" != typeof u && "number" != typeof u || (u = [u, u]);var c = u[0],
              f = u[1];d([{ rotate: t.rotation + Math.PI / 2, offset: h[0], r: 0 }, { rotate: t.rotation - Math.PI / 2, offset: h[1], r: Math.sqrt((r[0] - o[0]) * (r[0] - o[0]) + (r[1] - o[1]) * (r[1] - o[1])) }], function (e, n) {
            if ("none" !== l[n] && null != l[n]) {
              var i = Wu(l[n], -c / 2, -f / 2, c, f, s.stroke, true),
                  a = e.r + e.offset,
                  o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];i.attr({ rotation: e.rotate, position: o, silent: true, z2: 11 }), this.group.add(i);
            }
          }, this);
        }
      }
    }, axisTickLabel: function () {
      var t = this.axisModel,
          e = this.opt,
          n = ic(this, t, e);Qh(t, ac(this, t, e), n), rc(this, t, e);
    }, axisName: function () {
      var t = this.opt,
          e = this.axisModel,
          n = D(t.axisName, e.get("name"));if (n) {
        var i,
            r = e.get("nameLocation"),
            o = t.nameDirection,
            s = e.getModel("nameTextStyle"),
            l = e.get("nameGap") || 0,
            u = this.axisModel.axis.getExtent(),
            h = u[0] > u[1] ? -1 : 1,
            c = ["start" === r ? u[0] - h * l : "end" === r ? u[1] + h * l : (u[0] + u[1]) / 2, ec(r) ? t.labelOffset + o * l : 0],
            d = e.get("nameRotate");null != d && (d = d * Pw / 180);var f;ec(r) ? i = zw(t.rotation, null != d ? d : t.rotation, o) : (i = Kh(t, r, d || 0, u), null != (f = t.axisNameAvailableWidth) && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));var p = s.getFont(),
            g = e.get("nameTruncate", true) || {},
            m = g.ellipsis,
            v = D(t.nameTruncateMaxWidth, g.maxWidth, f),
            y = null != m && null != v ? Wv(n, v, p, m, { minChar: 2, placeholder: g.placeholder }) : n,
            _ = e.get("tooltip", true),
            x = e.mainType,
            w = { componentType: x, name: n, $vars: ["name"] };w[x + "Index"] = e.componentIndex;var b = new Hm({ anid: "name", __fullText: n, __truncatedText: y, position: c, rotation: i.rotation, silent: Rw(e), z2: 1, tooltip: _ && _.show ? a({ content: n, formatter: function () {
              return n;
            }, formatterParams: w }, _) : null });Wr(b.style, s, { text: y, textFont: p, textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"), textAlign: s.get("align") || i.textAlign, textVerticalAlign: s.get("verticalAlign") || i.textVerticalAlign }), e.get("triggerEvent") && (b.eventData = Ew(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform();
      }
    } },
      Ew = Ow.makeAxisEventDataBase = function (t) {
    var e = { componentType: t.mainType, componentIndex: t.componentIndex };return e[t.mainType + "Index"] = t.componentIndex, e;
  },
      zw = Ow.innerTextLayout = function (t, e, n) {
    var i,
        r,
        a = Ma(e - t);return Ia(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : Ia(a - Pw) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && a < Pw ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), { rotation: a, textAlign: i, textVerticalAlign: r };
  },
      Rw = Ow.isLabelSilent = function (t) {
    var e = t.get("tooltip");return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
  },
      Bw = Al({ type: "axis", _axisPointer: null, axisPointerClass: null, render: function (t, e, n, i) {
      this.axisPointerClass && oc(t), Bw.superApply(this, "render", arguments), cc(this, t, e, n, i, true);
    }, updateAxisPointer: function (t, e, n, i, r) {
      cc(this, t, e, n, i, false);
    }, remove: function (t, e) {
      var n = this._axisPointer;n && n.remove(e), Bw.superApply(this, "remove", arguments);
    }, dispose: function (t, e) {
      dc(this, e), Bw.superApply(this, "dispose", arguments);
    } }),
      Fw = [];Bw.registerAxisPointerClass = function (t, e) {
    Fw[t] = e;
  }, Bw.getAxisPointerClass = function (t) {
    return t && Fw[t];
  };var Vw = ["axisLine", "axisTickLabel", "axisName"],
      Gw = ["splitArea", "splitLine", "minorSplitLine"],
      Ww = Bw.extend({ type: "cartesianAxis", axisPointerClass: "CartesianAxisPointer", render: function (t, e, n, i) {
      this.group.removeAll();var r = this._axisGroup;if (this._axisGroup = new Np(), this.group.add(this._axisGroup), t.get("show")) {
        var a = t.getCoordSysModel(),
            o = fc(a, t),
            s = new Ow(t, o);d(Vw, s.add, s), this._axisGroup.add(s.getGroup()), d(Gw, function (e) {
          t.get(e + ".show") && this["_" + e](t, a);
        }, this), ia(r, this._axisGroup, t), Ww.superCall(this, "render", t, e, n, i);
      }
    }, remove: function () {
      gc(this);
    }, _splitLine: function (t, e) {
      var n = t.axis;if (!n.scale.isBlank()) {
        var i = t.getModel("splitLine"),
            r = i.getModel("lineStyle"),
            a = r.get("color");a = _(a) ? a : [a];for (var s = e.coordinateSystem.getRect(), l = n.isHorizontal(), u = 0, h = n.getTicksCoords({ tickModel: i }), c = [], d = [], f = r.getLineStyle(), p = 0; p < h.length; p++) {
          var g = n.toGlobalCoord(h[p].coord);l ? (c[0] = g, c[1] = s.y, d[0] = g, d[1] = s.y + s.height) : (c[0] = s.x, c[1] = g, d[0] = s.x + s.width, d[1] = g);var m = u++ % a.length,
              v = h[p].tickValue;this._axisGroup.add(new iv({ anid: null != v ? "line_" + h[p].tickValue : null, subPixelOptimize: true, shape: { x1: c[0], y1: c[1], x2: d[0], y2: d[1] }, style: o({ stroke: a[m] }, f), silent: true }));
        }
      }
    }, _minorSplitLine: function (t, e) {
      var n = t.axis,
          i = t.getModel("minorSplitLine"),
          r = i.getModel("lineStyle"),
          a = e.coordinateSystem.getRect(),
          o = n.isHorizontal(),
          s = n.getMinorTicksCoords();if (s.length) for (var l = [], u = [], h = r.getLineStyle(), c = 0; c < s.length; c++) for (var d = 0; d < s[c].length; d++) {
        var f = n.toGlobalCoord(s[c][d].coord);o ? (l[0] = f, l[1] = a.y, u[0] = f, u[1] = a.y + a.height) : (l[0] = a.x, l[1] = f, u[0] = a.x + a.width, u[1] = f), this._axisGroup.add(new iv({ anid: "minor_line_" + s[c][d].tickValue, subPixelOptimize: true, shape: { x1: l[0], y1: l[1], x2: u[0], y2: u[1] }, style: h, silent: true }));
      }
    }, _splitArea: function (t, e) {
      pc(this, this._axisGroup, t, e);
    } });Ww.extend({ type: "xAxis" }), Ww.extend({ type: "yAxis" }), Al({ type: "grid", render: function (t, e) {
      this.group.removeAll(), t.get("show") && this.group.add(new ev({ shape: t.coordinateSystem.getRect(), style: o({ fill: t.get("backgroundColor") }, t.getItemStyle()), silent: true, z2: -1 }));
    } }), gl(function (t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  }), bl(_w("line", "circle", "line")), wl(function (t) {
    return { seriesType: t, plan: Vy(), reset: function (t) {
        function e(t, e) {
          for (var n = t.end - t.start, r = a && new Float32Array(n * s), l = t.start, u = 0, h = [], c = []; l < t.end; l++) {
            var d;if (1 === s) {
              var f = e.get(o[0], l);d = !isNaN(f) && i.dataToPoint(f, null, c);
            } else {
              var f = h[0] = e.get(o[0], l),
                  p = h[1] = e.get(o[1], l);d = !isNaN(f) && !isNaN(p) && i.dataToPoint(h, null, c);
            }a ? (r[u++] = d ? d[0] : NaN, r[u++] = d ? d[1] : NaN) : e.setItemLayout(l, d && d.slice() || [NaN, NaN]);
          }a && e.setLayout("symbolPoints", r);
        }var n = t.getData(),
            i = t.coordinateSystem,
            r = t.pipelineContext,
            a = r.large;if (i) {
          var o = f(i.dimensions, function (t) {
            return n.mapDimension(t);
          }).slice(0, 2),
              s = o.length,
              l = n.getCalculationInfo("stackResultDimension");return ou(n, o[0]) && (o[0] = l), ou(n, o[1]) && (o[1] = l), s && { progress: e };
        }
      } };
  }("line")), ml(k_.PROCESSOR.STATISTIC, function (t) {
    return { seriesType: t, modifyOutputEnd: true, reset: function (t, e, n) {
        var i = t.getData(),
            r = t.get("sampling"),
            a = t.coordinateSystem;if ("cartesian2d" === a.type && r) {
          var o = a.getBaseAxis(),
              s = a.getOtherAxis(o),
              l = o.getExtent(),
              u = l[1] - l[0],
              h = Math.round(i.count() / u);if (h > 1) {
            var c;"string" == typeof r ? c = xw[r] : "function" == typeof r && (c = r), c && t.setData(i.downSample(i.mapDimension(s.dim), 1 / h, c, ww));
          }
        }
      } };
  }("line"));var Hw = function (t, e, n) {
    e = _(e) && { coordDimensions: e } || a({}, e);var i = t.getSource(),
        r = cx(i, e),
        o = new lx(r, t);return o.initData(i, n), o;
  },
      Zw = { updateSelectedMap: function (t) {
      this._targetList = _(t) ? t.slice() : [], this._selectTargetMap = p(t || [], function (t, e) {
        return t.set(e.name, e), t;
      }, R());
    }, select: function (t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);"single" === this.get("selectedMode") && this._selectTargetMap.each(function (t) {
        t.selected = false;
      }), n && (n.selected = true);
    }, unSelect: function (t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);n && (n.selected = false);
    }, toggleSelected: function (t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);if (null != n) return this[n.selected ? "unSelect" : "select"](t, e), n.selected;
    }, isSelected: function (t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);return n && n.selected;
    } },
      Xw = Dl({ type: "series.pie", init: function (t) {
      Xw.superApply(this, "init", arguments), this.legendVisualProvider = new mc(v(this.getData, this), v(this.getRawData, this)), this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t);
    }, mergeOption: function (t) {
      Xw.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList());
    }, getInitialData: function (t, e) {
      return Hw(this, { coordDimensions: ["value"], encodeDefaulter: y(so, this) });
    }, _createSelectableList: function () {
      for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); i < r; i++) n.push({ name: t.getName(i), value: t.get(e, i), selected: Uo(t, i, "selected") });return n;
    }, getDataParams: function (t) {
      var e = this.getData(),
          n = Xw.superCall(this, "getDataParams", t),
          i = [];return e.each(e.mapDimension("value"), function (t) {
        i.push(t);
      }), n.percent = Sa(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n;
    }, _defaultLabelLine: function (t) {
      Jn(t, "labelLine", ["show"]);var e = t.labelLine,
          n = t.emphasis.labelLine;e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show;
    }, defaultOption: { zlevel: 0, z: 2, legendHoverLink: true, hoverAnimation: true, center: ["50%", "50%"], radius: [0, "75%"], clockwise: true, startAngle: 90, minAngle: 0, minShowLabelAngle: 0, selectedOffset: 10, hoverOffset: 10, avoidLabelOverlap: true, percentPrecision: 2, stillShowZeroSum: true, left: 0, top: 0, right: 0, bottom: 0, width: null, height: null, label: { rotate: false, show: true, position: "outer", alignTo: "none", margin: "25%", bleedMargin: 10, distanceToLabelLine: 5 }, labelLine: { show: true, length: 15, length2: 15, smooth: false, lineStyle: { width: 1, type: "solid" } }, itemStyle: { borderWidth: 1 }, animationType: "expansion", animationTypeUpdate: "transition", animationEasing: "cubicOut" } });h(Xw, Zw);var jw = _c.prototype;jw.updateData = function (t, e, n) {
    var i = this.childAt(0),
        r = this.childAt(1),
        s = this.childAt(2),
        l = t.hostModel,
        u = t.getItemModel(e),
        h = t.getItemLayout(e),
        c = a({}, h);c.label = null;var d = l.getShallow("animationTypeUpdate");if (n) {
      i.setShape(c);"scale" === l.getShallow("animationType") ? (i.shape.r = h.r0, Jr(i, { shape: { r: h.r } }, l, e)) : (i.shape.endAngle = h.startAngle, Qr(i, { shape: { endAngle: h.endAngle } }, l, e));
    } else "expansion" === d ? i.setShape(c) : Qr(i, { shape: c }, l, e);var f = t.getItemVisual(e, "color");i.useStyle(o({ lineJoin: "bevel", fill: f }, u.getModel("itemStyle").getItemStyle())), i.hoverStyle = u.getModel("emphasis.itemStyle").getItemStyle();var p = u.getShallow("cursor");p && i.attr("cursor", p), yc(this, t.getItemLayout(e), l.isSelected(t.getName(e)), l.get("selectedOffset"), l.get("animation"));var g = !n && "transition" === d;this._updateLabel(t, e, g), this.highDownOnUpdate = u.get("hoverAnimation") && l.isAnimationEnabled() ? function (t, e) {
      "emphasis" === e ? (r.ignore = r.hoverIgnore, s.ignore = s.hoverIgnore, i.stopAnimation(true), i.animateTo({ shape: { r: h.r + l.get("hoverOffset") } }, 300, "elasticOut")) : (r.ignore = r.normalIgnore, s.ignore = s.normalIgnore, i.stopAnimation(true), i.animateTo({ shape: { r: h.r } }, 300, "elasticOut"));
    } : null, zr(this);
  }, jw._updateLabel = function (t, e, n) {
    var i = this.childAt(1),
        r = this.childAt(2),
        a = t.hostModel,
        o = t.getItemModel(e),
        s = t.getItemLayout(e),
        l = s.label,
        u = t.getItemVisual(e, "color");if (!l || isNaN(l.x) || isNaN(l.y)) return undefined;var h = { points: l.linePoints || [[l.x, l.y], [l.x, l.y], [l.x, l.y]] },
        c = { x: l.x, y: l.y };n ? (Qr(i, { shape: h }, a, e), Qr(r, { style: c }, a, e)) : (i.attr({ shape: h }), r.attr({ style: c })), r.attr({ rotation: l.rotation, origin: [l.x, l.y], z2: 10 });var d = o.getModel("label"),
        f = o.getModel("emphasis.label"),
        p = o.getModel("labelLine"),
        g = o.getModel("emphasis.labelLine"),
        u = t.getItemVisual(e, "color");Vr(r.style, r.hoverStyle = {}, d, f, { labelFetcher: t.hostModel, labelDataIndex: e, defaultText: l.text, autoColor: u, useInsideStyle: !!l.inside }, { textAlign: l.textAlign, textVerticalAlign: l.verticalAlign, opacity: t.getItemVisual(e, "opacity") }), r.ignore = r.normalIgnore = !d.get("show"), r.hoverIgnore = !f.get("show"), i.ignore = i.normalIgnore = !p.get("show"), i.hoverIgnore = !g.get("show"), i.setStyle({ stroke: u, opacity: t.getItemVisual(e, "opacity") }), i.setStyle(p.getModel("lineStyle").getLineStyle()), i.hoverStyle = g.getModel("lineStyle").getLineStyle();var m = p.get("smooth");m && true === m && (m = .4), i.setShape({ smooth: m });
  }, u(_c, Np);var Uw = (os.extend({ type: "pie", init: function () {
      var t = new Np();this._sectorGroup = t;
    }, render: function (t, e, n, i) {
      if (!i || i.from !== this.uid) {
        var r = t.getData(),
            a = this._data,
            o = this.group,
            s = e.get("animation"),
            l = !a,
            u = t.get("animationType"),
            h = t.get("animationTypeUpdate"),
            c = y(vc, this.uid, t, s, n),
            d = t.get("selectedMode");if (r.diff(a).add(function (t) {
          var e = new _c(r, t);l && "scale" !== u && e.eachChild(function (t) {
            t.stopAnimation(true);
          }), d && e.on("click", c), r.setItemGraphicEl(t, e), o.add(e);
        }).update(function (t, e) {
          var n = a.getItemGraphicEl(e);l || "transition" === h || n.eachChild(function (t) {
            t.stopAnimation(true);
          }), n.updateData(r, t), n.off("click"), d && n.on("click", c), o.add(n), r.setItemGraphicEl(t, n);
        }).remove(function (t) {
          var e = a.getItemGraphicEl(t);o.remove(e);
        }).execute(), s && r.count() > 0 && (l ? "scale" !== u : "transition" !== h)) {
          for (var f = r.getItemLayout(0), p = 1; isNaN(f.startAngle) && p < r.count(); ++p) f = r.getItemLayout(p);var g = Math.max(n.getWidth(), n.getHeight()) / 2,
              m = v(o.removeClipPath, o);o.setClipPath(this._createClipPath(f.cx, f.cy, g, f.startAngle, f.clockwise, m, t, l));
        } else o.removeClipPath();this._data = r;
      }
    }, dispose: function () {}, _createClipPath: function (t, e, n, i, r, a, o, s) {
      var l = new Um({ shape: { cx: t, cy: e, r0: 0, r: n, startAngle: i, endAngle: i, clockwise: r } });return (s ? Jr : Qr)(l, { shape: { endAngle: i + (r ? 1 : -1) * Math.PI * 2 } }, o, a), l;
    }, containPoint: function (t, e) {
      var n = e.getData(),
          i = n.getItemLayout(0);if (i) {
        var r = t[0] - i.cx,
            a = t[1] - i.cy,
            o = Math.sqrt(r * r + a * a);return o <= i.r && o >= i.r0;
      }
    } }), Math.PI / 180),
      Yw = function (t, e, n, i, r, a) {
    var o,
        s,
        l = t.getData(),
        u = [],
        h = false,
        c = (t.get("minShowLabelAngle") || 0) * Uw;l.each(function (i) {
      var a = l.getItemLayout(i),
          d = l.getItemModel(i),
          f = d.getModel("label"),
          p = f.get("position") || d.get("emphasis.label.position"),
          g = f.get("distanceToLabelLine"),
          m = f.get("alignTo"),
          v = va(f.get("margin"), n),
          y = f.get("bleedMargin"),
          _ = f.getFont(),
          x = d.getModel("labelLine"),
          w = x.get("length");w = va(w, n);var b = x.get("length2");if (b = va(b, n), !(a.angle < c)) {
        var S,
            M,
            I,
            A,
            D = (a.startAngle + a.endAngle) / 2,
            T = Math.cos(D),
            C = Math.sin(D);o = a.cx, s = a.cy;var k = t.getFormattedLabel(i, "normal") || l.getName(i),
            L = He(k, _, A, "top"),
            P = "inside" === p || "inner" === p;if ("center" === p) S = a.cx, M = a.cy, A = "center";else {
          var O = (P ? (a.r + a.r0) / 2 * T : a.r * T) + o,
              N = (P ? (a.r + a.r0) / 2 * C : a.r * C) + s;if (S = O + 3 * T, M = N + 3 * C, !P) {
            var E = O + T * (w + e - a.r),
                z = N + C * (w + e - a.r),
                R = E + (T < 0 ? -1 : 1) * b,
                B = z;S = "edge" === m ? T < 0 ? r + v : r + n - v : R + (T < 0 ? -g : g), M = B, I = [[O, N], [E, z], [R, B]];
          }A = P ? "center" : "edge" === m ? T > 0 ? "right" : "left" : T > 0 ? "left" : "right";
        }var F,
            V = f.get("rotate");F = "number" == typeof V ? V * (Math.PI / 180) : V ? T < 0 ? -D + Math.PI : -D : 0, h = !!F, a.label = { x: S, y: M, position: p, height: L.height, len: w, len2: b, linePoints: I, textAlign: A, verticalAlign: "middle", rotation: F, inside: P, labelDistance: g, labelAlignTo: m, labelMargin: v, bleedMargin: y, textRect: L, text: k, font: _ }, P || u.push(a.label);
      }
    }), !h && t.get("avoidLabelOverlap") && wc(u, o, s, e, n, i, r, a);
  },
      qw = 2 * Math.PI,
      $w = Math.PI / 180,
      Kw = function (t, e, n, i) {
    e.eachSeriesByType(t, function (t) {
      var e = t.getData(),
          i = e.mapDimension("value"),
          r = Sc(t, n),
          a = t.get("center"),
          o = t.get("radius");_(o) || (o = [0, o]), _(a) || (a = [a, a]);var s = va(r.width, n.getWidth()),
          l = va(r.height, n.getHeight()),
          u = Math.min(s, l),
          h = va(a[0], s) + r.x,
          c = va(a[1], l) + r.y,
          d = va(o[0], u / 2),
          f = va(o[1], u / 2),
          p = -t.get("startAngle") * $w,
          g = t.get("minAngle") * $w,
          m = 0;e.each(i, function (t) {
        !isNaN(t) && m++;
      });var v = e.getSum(i),
          y = Math.PI / (v || m) * 2,
          x = t.get("clockwise"),
          w = t.get("roseType"),
          b = t.get("stillShowZeroSum"),
          S = e.getDataExtent(i);S[0] = 0;var M = qw,
          I = 0,
          A = p,
          D = x ? 1 : -1;if (e.each(i, function (t, n) {
        var i;if (isNaN(t)) return undefined;i = "area" !== w ? 0 === v && b ? y : t * y : qw / m, i < g ? (i = g, M -= g) : I += t;var a = A + D * i;e.setItemLayout(n, { angle: i, startAngle: A, endAngle: a, clockwise: x, cx: h, cy: c, r0: d, r: w ? ma(t, S, [d, f]) : f, viewRect: r }), A = a;
      }), M < qw && m) if (M <= .001) {
        var T = qw / m;e.each(i, function (t, n) {
          if (!isNaN(t)) {
            var i = e.getItemLayout(n);i.angle = T, i.startAngle = p + D * n * T, i.endAngle = p + D * (n + 1) * T;
          }
        });
      } else y = M / I, A = p, e.each(i, function (t, n) {
        if (!isNaN(t)) {
          var i = e.getItemLayout(n),
              r = i.angle === g ? g : t * y;i.startAngle = A, i.endAngle = A + D * r, A += D * r;
        }
      });Yw(t, f, r.width, r.height, r.x, r.y);
    });
  };!function (t, e) {
    d(e, function (e) {
      e.update = "updateView", yl(e, function (n, i) {
        var r = {};return i.eachComponent({ mainType: "series", subType: t, query: n }, function (t) {
          t[e.method] && t[e.method](n.name, n.dataIndex);var i = t.getData();i.each(function (e) {
            var n = i.getName(e);r[n] = t.isSelected(n) || false;
          });
        }), { name: n.name, selected: r, seriesId: n.seriesId };
      });
    });
  }("pie", [{ type: "pieToggleSelect", event: "pieselectchanged", method: "toggleSelected" }, { type: "pieSelect", event: "pieselected", method: "select" }, { type: "pieUnSelect", event: "pieunselected", method: "unSelect" }]), bl(function (t) {
    return { getTargetSeries: function (e) {
        var n = {},
            i = R();return e.eachSeriesByType(t, function (t) {
          t.__paletteScope = n, i.set(t.uid, t);
        }), i;
      }, reset: function (t, e) {
        var n = t.getRawData(),
            i = {},
            r = t.getData();r.each(function (t) {
          var e = r.getRawIndex(t);i[e] = t;
        }), n.each(function (e) {
          var a,
              o = i[e],
              s = null != o && r.getItemVisual(o, "color", true),
              l = null != o && r.getItemVisual(o, "borderColor", true);if (s && l || (a = n.getItemModel(e)), !s) {
            var u = a.get("itemStyle.color") || t.getColorFromPalette(n.getName(e) || e + "", t.__paletteScope, n.count());null != o && r.setItemVisual(o, "color", u);
          }if (!l) {
            var h = a.get("itemStyle.borderColor");null != o && r.setItemVisual(o, "borderColor", h);
          }
        });
      } };
  }("pie")), wl(y(Kw, "pie")), ml(function (t) {
    return { seriesType: t, reset: function (t, e) {
        var n = e.findComponents({ mainType: "legend" });if (n && n.length) {
          var i = t.getData();i.filterSelf(function (t) {
            for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return false;return true;
          });
        }
      } };
  }("pie"));var Qw = function (t) {
    this._directed = t || false, this.nodes = [], this.edges = [], this._nodesMap = {}, this._edgesMap = {}, this.data, this.edgeData;
  },
      Jw = Qw.prototype;Jw.type = "graph", Jw.isDirected = function () {
    return this._directed;
  }, Jw.addNode = function (t, e) {
    t = null == t ? "" + e : "" + t;var n = this._nodesMap;if (!n[Mc(t)]) {
      var i = new Ic(t, e);return i.hostGraph = this, this.nodes.push(i), n[Mc(t)] = i, i;
    }
  }, Jw.getNodeByIndex = function (t) {
    var e = this.data.getRawIndex(t);return this.nodes[e];
  }, Jw.getNodeById = function (t) {
    return this._nodesMap[Mc(t)];
  }, Jw.addEdge = function (t, e, n) {
    var i = this._nodesMap,
        r = this._edgesMap;if ("number" == typeof t && (t = this.nodes[t]), "number" == typeof e && (e = this.nodes[e]), Ic.isInstance(t) || (t = i[Mc(t)]), Ic.isInstance(e) || (e = i[Mc(e)]), t && e) {
      var a = t.id + "-" + e.id;if (!r[a]) {
        var o = new Ac(t, e, n);return o.hostGraph = this, this._directed && (t.outEdges.push(o), e.inEdges.push(o)), t.edges.push(o), t !== e && e.edges.push(o), this.edges.push(o), r[a] = o, o;
      }
    }
  }, Jw.getEdgeByIndex = function (t) {
    var e = this.edgeData.getRawIndex(t);return this.edges[e];
  }, Jw.getEdge = function (t, e) {
    Ic.isInstance(t) && (t = t.id), Ic.isInstance(e) && (e = e.id);var n = this._edgesMap;return this._directed ? n[t + "-" + e] : n[t + "-" + e] || n[e + "-" + t];
  }, Jw.eachNode = function (t, e) {
    for (var n = this.nodes, i = n.length, r = 0; r < i; r++) n[r].dataIndex >= 0 && t.call(e, n[r], r);
  }, Jw.eachEdge = function (t, e) {
    for (var n = this.edges, i = n.length, r = 0; r < i; r++) n[r].dataIndex >= 0 && n[r].node1.dataIndex >= 0 && n[r].node2.dataIndex >= 0 && t.call(e, n[r], r);
  }, Jw.breadthFirstTraverse = function (t, e, n, i) {
    if (Ic.isInstance(e) || (e = this._nodesMap[Mc(e)]), e) {
      for (var r = "out" === n ? "outEdges" : "in" === n ? "inEdges" : "edges", a = 0; a < this.nodes.length; a++) this.nodes[a].__visited = false;if (!t.call(i, e, null)) for (var o = [e]; o.length;) for (var s = o.shift(), l = s[r], a = 0; a < l.length; a++) {
        var u = l[a],
            h = u.node1 === s ? u.node2 : u.node1;if (!h.__visited) {
          if (t.call(i, h, s)) return;o.push(h), h.__visited = true;
        }
      }
    }
  }, Jw.update = function () {
    for (var t = this.data, e = this.edgeData, n = this.nodes, i = this.edges, r = 0, a = n.length; r < a; r++) n[r].dataIndex = -1;for (var r = 0, a = t.count(); r < a; r++) n[t.getRawIndex(r)].dataIndex = r;e.filterSelf(function (t) {
      var n = i[e.getRawIndex(t)];return n.node1.dataIndex >= 0 && n.node2.dataIndex >= 0;
    });for (var r = 0, a = i.length; r < a; r++) i[r].dataIndex = -1;for (var r = 0, a = e.count(); r < a; r++) i[e.getRawIndex(r)].dataIndex = r;
  }, Jw.clone = function () {
    for (var t = new Qw(this._directed), e = this.nodes, n = this.edges, i = 0; i < e.length; i++) t.addNode(e[i].id, e[i].dataIndex);for (var i = 0; i < n.length; i++) {
      var r = n[i];t.addEdge(r.node1.id, r.node2.id, r.dataIndex);
    }return t;
  }, Ic.prototype = { constructor: Ic, degree: function () {
      return this.edges.length;
    }, inDegree: function () {
      return this.inEdges.length;
    }, outDegree: function () {
      return this.outEdges.length;
    }, getModel: function (t) {
      if (!(this.dataIndex < 0)) {
        return this.hostGraph.data.getItemModel(this.dataIndex).getModel(t);
      }
    } }, Ac.prototype.getModel = function (t) {
    if (!(this.dataIndex < 0)) {
      return this.hostGraph.edgeData.getItemModel(this.dataIndex).getModel(t);
    }
  };var tb = function (t, e) {
    return { getValue: function (n) {
        var i = this[t][e];return i.get(i.getDimension(n || "value"), this.dataIndex);
      }, setVisual: function (n, i) {
        this.dataIndex >= 0 && this[t][e].setItemVisual(this.dataIndex, n, i);
      }, getVisual: function (n, i) {
        return this[t][e].getItemVisual(this.dataIndex, n, i);
      }, setLayout: function (n, i) {
        this.dataIndex >= 0 && this[t][e].setItemLayout(this.dataIndex, n, i);
      }, getLayout: function () {
        return this[t][e].getItemLayout(this.dataIndex);
      }, getGraphicEl: function () {
        return this[t][e].getItemGraphicEl(this.dataIndex);
      }, getRawIndex: function () {
        return this[t][e].getRawIndex(this.dataIndex);
      } };
  };h(Ic, tb("hostGraph", "data")), h(Ac, tb("hostGraph", "edgeData")), Qw.Node = Ic, Qw.Edge = Ac, mi(Ic), mi(Ac);var eb = d,
      nb = "\0__link_datas",
      ib = "\0__link_mainData",
      rb = function (t, e, n, i, r) {
    for (var a = new Qw(i), o = 0; o < t.length; o++) a.addNode(D(t[o].id, t[o].name, o), o);for (var s = [], u = [], h = 0, o = 0; o < e.length; o++) {
      var c = e[o],
          d = c.source,
          f = c.target;a.addEdge(d, f, h) && (u.push(c), s.push(D(c.id, d + " > " + f)), h++);
    }var p,
        g = n.get("coordinateSystem");if ("cartesian2d" === g || "polar" === g) p = lu(t, n);else {
      var m = xo.get(g),
          v = m && "view" !== m.type ? m.dimensions || [] : [];l(v, "value") < 0 && v.concat(["value"]);var y = cx(t, { coordDimensions: v });p = new lx(y, n), p.initData(t);
    }var _ = new lx(["value"], n);return _.initData(u, s), r && r(p, _), Dc({ mainData: p, struct: a, structAttr: "graph", datas: { node: p, edge: _ }, datasAttr: { node: "data", edge: "edgeData" } }), a.update(), a;
  },
      ab = Dl({ type: "series.graph", init: function (t) {
      function e() {
        return n._categoriesData;
      }ab.superApply(this, "init", arguments);var n = this;this.legendVisualProvider = new mc(e, e), this.fillDataTextStyle(t.edges || t.links), this._updateCategoriesData();
    }, mergeOption: function (t) {
      ab.superApply(this, "mergeOption", arguments), this.fillDataTextStyle(t.edges || t.links), this._updateCategoriesData();
    }, mergeDefaultAndTheme: function (t) {
      ab.superApply(this, "mergeDefaultAndTheme", arguments), Jn(t, ["edgeLabel"], ["show"]);
    }, getInitialData: function (t, e) {
      function n(t, n) {
        function i(t) {
          return t = this.parsePath(t), t && "label" === t[0] ? o : t && "emphasis" === t[0] && "label" === t[1] ? l : this.parentModel;
        }t.wrapMethod("getItemModel", function (t) {
          var e = a._categoriesModels,
              n = t.getShallow("category"),
              i = e[n];return i && (i.parentModel = t.parentModel, t.parentModel = i), t;
        });var r = a.getModel("edgeLabel"),
            o = new ca({ label: r.option }, r.parentModel, e),
            s = a.getModel("emphasis.edgeLabel"),
            l = new ca({ emphasis: { label: s.option } }, s.parentModel, e);n.wrapMethod("getItemModel", function (t) {
          return t.customizeGetParent(i), t;
        });
      }var i = t.edges || t.links || [],
          r = t.data || t.nodes || [],
          a = this;if (r && i) return rb(r, i, this, true, n).data;
    }, getGraph: function () {
      return this.getData().graph;
    }, getEdgeData: function () {
      return this.getGraph().edgeData;
    }, getCategoriesData: function () {
      return this._categoriesData;
    }, formatTooltip: function (t, e, n) {
      if ("edge" === n) {
        var i = this.getData(),
            r = this.getDataParams(t, n),
            a = i.graph.getEdgeByIndex(t),
            o = i.getName(a.node1.dataIndex),
            s = i.getName(a.node2.dataIndex),
            l = [];return null != o && l.push(o), null != s && l.push(s), l = Ea(l.join(" > ")), r.value && (l += " : " + Ea(r.value)), l;
      }return ab.superApply(this, "formatTooltip", arguments);
    }, _updateCategoriesData: function () {
      var t = f(this.option.categories || [], function (t) {
        return null != t.value ? t : a({ value: 0 }, t);
      }),
          e = new lx(["value"], this);e.initData(t), this._categoriesData = e, this._categoriesModels = e.mapArray(function (t) {
        return e.getItemModel(t, true);
      });
    }, setZoom: function (t) {
      this.option.zoom = t;
    }, setCenter: function (t) {
      this.option.center = t;
    }, isAnimationEnabled: function () {
      return ab.superCall(this, "isAnimationEnabled") && !("force" === this.get("layout") && this.get("force.layoutAnimation"));
    }, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "view", legendHoverLink: true, hoverAnimation: true, layout: null, focusNodeAdjacency: false, circular: { rotateLabel: false }, force: { initLayout: null, repulsion: [0, 50], gravity: .1, friction: .6, edgeLength: 30, layoutAnimation: true }, left: "center", top: "center", symbol: "circle", symbolSize: 10, edgeSymbol: ["none", "none"], edgeSymbolSize: 10, edgeLabel: { position: "middle", distance: 5 }, draggable: false, roam: false, center: null, zoom: 1, nodeScaleRatio: .6, label: { show: false, formatter: "{b}" }, itemStyle: {}, lineStyle: { color: "#aaa", width: 1, curveness: 0, opacity: .5 }, emphasis: { label: { show: true } } } }),
      ob = iv.prototype,
      sb = av.prototype,
      lb = fr({ type: "ec-line", style: { stroke: "#000", fill: null }, shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1, cpx1: null, cpy1: null }, buildPath: function (t, e) {
      this[Ec(e) ? "_buildPathLine" : "_buildPathCurve"](t, e);
    }, _buildPathLine: ob.buildPath, _buildPathCurve: sb.buildPath, pointAt: function (t) {
      return this[Ec(this.shape) ? "_pointAtLine" : "_pointAtCurve"](t);
    }, _pointAtLine: ob.pointAt, _pointAtCurve: sb.pointAt, tangentAt: function (t) {
      var e = this.shape,
          n = Ec(e) ? [e.x2 - e.x1, e.y2 - e.y1] : this._tangentAtCurve(t);return J(n, n);
    }, _tangentAtCurve: sb.tangentAt }),
      ub = ["fromSymbol", "toSymbol"],
      hb = Gc.prototype;hb.beforeUpdate = Vc, hb._createLine = function (t, e, n) {
    var i = t.hostModel,
        r = t.getItemLayout(e),
        a = Bc(r);a.shape.percent = 0, Jr(a, { shape: { percent: 1 } }, i, e), this.add(a);var o = new Hm({ name: "label", lineLabelOriginalOpacity: 1 });this.add(o), d(ub, function (n) {
      var i = Rc(n, t, e);this.add(i), this[zc(n)] = t.getItemVisual(e, n);
    }, this), this._updateCommonStl(t, e, n);
  }, hb.updateData = function (t, e, n) {
    var i = t.hostModel,
        r = this.childOfName("line"),
        a = t.getItemLayout(e),
        o = { shape: {} };Fc(o.shape, a), Qr(r, o, i, e), d(ub, function (n) {
      var i = t.getItemVisual(e, n),
          r = zc(n);if (this[r] !== i) {
        this.remove(this.childOfName(n));var a = Rc(n, t, e);this.add(a);
      }this[r] = i;
    }, this), this._updateCommonStl(t, e, n);
  }, hb._updateCommonStl = function (t, e, n) {
    var i = t.hostModel,
        r = this.childOfName("line"),
        a = n && n.lineStyle,
        s = n && n.hoverLineStyle,
        l = n && n.labelModel,
        u = n && n.hoverLabelModel;if (!n || t.hasItemOption) {
      var h = t.getItemModel(e);a = h.getModel("lineStyle").getLineStyle(), s = h.getModel("emphasis.lineStyle").getLineStyle(), l = h.getModel("label"), u = h.getModel("emphasis.label");
    }var c = t.getItemVisual(e, "color"),
        f = C(t.getItemVisual(e, "opacity"), a.opacity, 1);r.useStyle(o({ strokeNoScale: true, fill: "none", stroke: c, opacity: f }, a)), r.hoverStyle = s, d(ub, function (t) {
      var e = this.childOfName(t);e && (e.setColor(c), e.setStyle({ opacity: f }));
    }, this);var p,
        g,
        m = l.getShallow("show"),
        v = u.getShallow("show"),
        y = this.childOfName("label");if ((m || v) && (p = c || "#000", null == (g = i.getFormattedLabel(e, "normal", t.dataType)))) {
      var x = i.getRawValue(e);g = null == x ? t.getName(e) : isFinite(x) ? ya(x) : x;
    }var w = m ? g : null,
        b = v ? T(i.getFormattedLabel(e, "emphasis", t.dataType), g) : null,
        S = y.style;if (null != w || null != b) {
      Wr(y.style, l, { text: w }, { autoColor: p }), y.__textAlign = S.textAlign, y.__verticalAlign = S.textVerticalAlign, y.__position = l.get("position") || "middle";var M = l.get("distance");_(M) || (M = [M, M]), y.__labelDistance = M;
    }y.hoverStyle = null != b ? { text: b, textFill: u.getTextColor(true), fontStyle: u.getShallow("fontStyle"), fontWeight: u.getShallow("fontWeight"), fontSize: u.getShallow("fontSize"), fontFamily: u.getShallow("fontFamily") } : { text: null }, y.ignore = !m && !v, zr(this);
  }, hb.highlight = function () {
    this.trigger("emphasis");
  }, hb.downplay = function () {
    this.trigger("normal");
  }, hb.updateLayout = function (t, e) {
    this.setLinePoints(t.getItemLayout(e));
  }, hb.setLinePoints = function (t) {
    var e = this.childOfName("line");Fc(e.shape, t), e.dirty();
  }, u(Gc, Np);var cb = Wc.prototype;cb.isPersistent = function () {
    return true;
  }, cb.updateData = function (t) {
    var e = this,
        n = e.group,
        i = e._lineData;e._lineData = t, i || n.removeAll();var r = Xc(t);t.diff(i).add(function (n) {
      Hc(e, t, n, r);
    }).update(function (n, a) {
      Zc(e, i, t, a, n, r);
    }).remove(function (t) {
      n.remove(i.getItemGraphicEl(t));
    }).execute();
  }, cb.updateLayout = function () {
    var t = this._lineData;t && t.eachItemGraphicEl(function (e, n) {
      e.updateLayout(t, n);
    }, this);
  }, cb.incrementalPrepareUpdate = function (t) {
    this._seriesScope = Xc(t), this._lineData = null, this.group.removeAll();
  }, cb.incrementalUpdate = function (t, e) {
    function n(t) {
      t.isGroup || (t.incremental = t.useHoverLayer = true);
    }for (var i = t.start; i < t.end; i++) {
      if (Uc(e.getItemLayout(i))) {
        var r = new this._ctor(e, i, this._seriesScope);r.traverse(n), this.group.add(r), e.setItemGraphicEl(i, r);
      }
    }
  }, cb.remove = function () {
    this._clearIncremental(), this._incremental = null, this.group.removeAll();
  }, cb._clearIncremental = function () {
    var t = this._incremental;t && t.clearDisplaybles();
  };var db = "\0_ec_interaction_mutex";yl({ type: "takeGlobalCursor", event: "globalCursorTaken", update: "update" }, function () {}), h($c, Zf);var fb = { axisPointer: 1, tooltip: 1, brush: 1 },
      pb = [],
      gb = [],
      mb = [],
      vb = Ti,
      yb = Gf,
      _b = Math.abs,
      xb = function (t, e) {
    var n = [],
        i = Pi,
        r = [[], [], []],
        a = [[], []],
        o = [];e /= 2, t.eachEdge(function (t, s) {
      var l = t.getLayout(),
          u = t.getVisual("fromSymbol"),
          h = t.getVisual("toSymbol");l.__original || (l.__original = [W(l[0]), W(l[1])], l[2] && l.__original.push(W(l[2])));var c = l.__original;if (null != l[2]) {
        if (G(r[0], c[0]), G(r[1], c[2]), G(r[2], c[1]), u && "none" !== u) {
          var d = ud(t.node1),
              f = hd(r, c[0], d * e);i(r[0][0], r[1][0], r[2][0], f, n), r[0][0] = n[3], r[1][0] = n[4], i(r[0][1], r[1][1], r[2][1], f, n), r[0][1] = n[3], r[1][1] = n[4];
        }if (h && "none" !== h) {
          var d = ud(t.node2),
              f = hd(r, c[1], d * e);i(r[0][0], r[1][0], r[2][0], f, n), r[1][0] = n[1], r[2][0] = n[2], i(r[0][1], r[1][1], r[2][1], f, n), r[1][1] = n[1], r[2][1] = n[2];
        }G(l[0], r[0]), G(l[1], r[2]), G(l[2], r[1]);
      } else {
        if (G(a[0], c[0]), G(a[1], c[1]), j(o, a[1], a[0]), J(o, o), u && "none" !== u) {
          var d = ud(t.node1);X(a[0], a[0], o, d * e);
        }if (h && "none" !== h) {
          var d = ud(t.node2);X(a[1], a[1], o, -d * e);
        }G(l[0], a[0]), G(l[1], a[1]);
      }
    });
  },
      wb = "__focusNodeAdjacency",
      bb = ["itemStyle", "opacity"],
      Sb = ["lineStyle", "opacity"];Tl({ type: "graph", init: function (t, e) {
      var n = new yh(),
          i = new Wc(),
          r = this.group;this._controller = new $c(e.getZr()), this._controllerHost = { target: r }, r.add(n.group), r.add(i.group), this._symbolDraw = n, this._lineDraw = i, this._firstRender = true;
    }, render: function (t, e, n) {
      var i = this,
          r = t.coordinateSystem;this._model = t;var a = this._symbolDraw,
          o = this._lineDraw,
          s = this.group;if ("view" === r.type) {
        var l = { position: r.position, scale: r.scale };this._firstRender ? s.attr(l) : Qr(s, l, t);
      }xb(t.getGraph(), ld(t));var u = t.getData();a.updateData(u);var h = t.getEdgeData();o.updateData(h), this._updateNodeAndLinkScale(), this._updateController(t, e, n), clearTimeout(this._layoutTimeout);var c = t.forceLayout,
          d = t.get("force.layoutAnimation");c && this._startForceLayoutIteration(c, d), u.eachItemGraphicEl(function (e, r) {
        var a = u.getItemModel(r);e.off("drag").off("dragend");var o = a.get("draggable");o && e.on("drag", function () {
          c && (c.warmUp(), !this._layouting && this._startForceLayoutIteration(c, d), c.setFixed(r), u.setItemLayout(r, e.position));
        }, this).on("dragend", function () {
          c && c.setUnfixed(r);
        }, this), e.setDraggable(o && c), e[wb] && e.off("mouseover", e[wb]), e.__unfocusNodeAdjacency && e.off("mouseout", e.__unfocusNodeAdjacency), a.get("focusNodeAdjacency") && (e.on("mouseover", e[wb] = function () {
          i._clearTimer(), n.dispatchAction({ type: "focusNodeAdjacency", seriesId: t.id, dataIndex: e.dataIndex });
        }), e.on("mouseout", e.__unfocusNodeAdjacency = function () {
          i._dispatchUnfocus(n);
        }));
      }, this), u.graph.eachEdge(function (e) {
        var r = e.getGraphicEl();r[wb] && r.off("mouseover", r[wb]), r.__unfocusNodeAdjacency && r.off("mouseout", r.__unfocusNodeAdjacency), e.getModel().get("focusNodeAdjacency") && (r.on("mouseover", r[wb] = function () {
          i._clearTimer(), n.dispatchAction({ type: "focusNodeAdjacency", seriesId: t.id, edgeDataIndex: e.dataIndex });
        }), r.on("mouseout", r.__unfocusNodeAdjacency = function () {
          i._dispatchUnfocus(n);
        }));
      });var f = "circular" === t.get("layout") && t.get("circular.rotateLabel"),
          p = u.getLayout("cx"),
          g = u.getLayout("cy");u.eachItemGraphicEl(function (t, e) {
        var n = u.getItemModel(e),
            i = n.get("label.rotate") || 0,
            r = t.getSymbolPath();if (f) {
          var a = u.getItemLayout(e),
              o = Math.atan2(a[1] - g, a[0] - p);o < 0 && (o = 2 * Math.PI + o);var s = a[0] < p;s && (o -= Math.PI);var l = s ? "left" : "right";Gr(r, { textRotation: -o, textPosition: l, textOrigin: "center" }, { textPosition: l });
        } else Gr(r, { textRotation: i *= Math.PI / 180 });
      }), this._firstRender = false;
    }, dispose: function () {
      this._controller && this._controller.dispose(), this._controllerHost = {}, this._clearTimer();
    }, _dispatchUnfocus: function (t, e) {
      var n = this;this._clearTimer(), this._unfocusDelayTimer = setTimeout(function () {
        n._unfocusDelayTimer = null, t.dispatchAction({ type: "unfocusNodeAdjacency", seriesId: n._model.id });
      }, 500);
    }, _clearTimer: function () {
      this._unfocusDelayTimer && (clearTimeout(this._unfocusDelayTimer), this._unfocusDelayTimer = null);
    }, focusNodeAdjacency: function (t, e, n, i) {
      var r = t.getData(),
          a = r.graph,
          o = i.dataIndex,
          s = i.edgeDataIndex,
          l = a.getNodeByIndex(o),
          u = a.getEdgeByIndex(s);(l || u) && (a.eachNode(function (t) {
        dd(t, bb, .1);
      }), a.eachEdge(function (t) {
        dd(t, Sb, .1);
      }), l && (fd(l, bb), d(l.edges, function (t) {
        t.dataIndex < 0 || (fd(t, Sb), fd(t.node1, bb), fd(t.node2, bb));
      })), u && (fd(u, Sb), fd(u.node1, bb), fd(u.node2, bb)));
    }, unfocusNodeAdjacency: function (t, e, n, i) {
      var r = t.getData().graph;r.eachNode(function (t) {
        dd(t, bb);
      }), r.eachEdge(function (t) {
        dd(t, Sb);
      });
    }, _startForceLayoutIteration: function (t, e) {
      var n = this;!function i() {
        t.step(function (t) {
          n.updateLayout(n._model), (n._layouting = !t) && (e ? n._layoutTimeout = setTimeout(i, 16) : i());
        });
      }();
    }, _updateController: function (t, e, n) {
      var i = this._controller,
          r = this._controllerHost,
          a = this.group;if (i.setPointerChecker(function (e, i, r) {
        var o = a.getBoundingRect();return o.applyTransform(a.transform), o.contain(i, r) && !sd(e, n, t);
      }), "view" !== t.coordinateSystem.type) return undefined;i.enable(t.get("roam")), r.zoomLimit = t.get("scaleLimit"), r.zoom = t.coordinateSystem.getZoom(), i.off("pan").off("zoom").on("pan", function (e) {
        ad(r, e.dx, e.dy), n.dispatchAction({ seriesId: t.id, type: "graphRoam", dx: e.dx, dy: e.dy });
      }).on("zoom", function (e) {
        od(r, e.scale, e.originX, e.originY), n.dispatchAction({ seriesId: t.id, type: "graphRoam", zoom: e.scale, originX: e.originX, originY: e.originY }), this._updateNodeAndLinkScale(), xb(t.getGraph(), ld(t)), this._lineDraw.updateLayout();
      }, this);
    }, _updateNodeAndLinkScale: function () {
      var t = this._model,
          e = t.getData(),
          n = ld(t),
          i = [n, n];e.eachItemGraphicEl(function (t, e) {
        t.attr("scale", i);
      });
    }, updateLayout: function (t) {
      xb(t.getGraph(), ld(t)), this._symbolDraw.updateLayout(), this._lineDraw.updateLayout();
    }, remove: function (t, e) {
      this._symbolDraw && this._symbolDraw.remove(), this._lineDraw && this._lineDraw.remove();
    } }), yl({ type: "focusNodeAdjacency", event: "focusNodeAdjacency", update: "series:focusNodeAdjacency" }, function () {}), yl({ type: "unfocusNodeAdjacency", event: "unfocusNodeAdjacency", update: "series:unfocusNodeAdjacency" }, function () {}), yl({ type: "graphRoam", event: "graphRoam", update: "none" }, function (t, e) {
    e.eachComponent({ mainType: "series", query: t }, function (e) {
      var n = e.coordinateSystem,
          i = pd(n, t);e.setCenter && e.setCenter(i.center), e.setZoom && e.setZoom(i.zoom);
    });
  });var Mb = function (t) {
    var e = t.findComponents({ mainType: "legend" });e && e.length && t.eachSeriesByType("graph", function (t) {
      var n = t.getCategoriesData(),
          i = t.getGraph(),
          r = i.data,
          a = n.mapArray(n.getName);r.filterSelf(function (t) {
        var n = r.getItemModel(t),
            i = n.getShallow("category");if (null != i) {
          "number" == typeof i && (i = a[i]);for (var o = 0; o < e.length; o++) if (!e[o].isSelected(i)) return false;
        }return true;
      });
    }, this);
  },
      Ib = function (t) {
    var e = {};t.eachSeriesByType("graph", function (t) {
      var n = t.getCategoriesData(),
          i = t.getData(),
          r = {};n.each(function (i) {
        var a = n.getName(i);r["ec-" + a] = i;var o = n.getItemModel(i),
            s = o.get("itemStyle.color") || t.getColorFromPalette(a, e);n.setItemVisual(i, "color", s);for (var l = ["opacity", "symbol", "symbolSize", "symbolKeepAspect"], u = 0; u < l.length; u++) {
          var h = o.getShallow(l[u], true);null != h && n.setItemVisual(i, l[u], h);
        }
      }), n.count() && i.each(function (t) {
        var e = i.getItemModel(t),
            a = e.getShallow("category");if (null != a) {
          "string" == typeof a && (a = r["ec-" + a]);for (var o = ["color", "opacity", "symbol", "symbolSize", "symbolKeepAspect"], s = 0; s < o.length; s++) null == i.getItemVisual(t, o[s], true) && i.setItemVisual(t, o[s], n.getItemVisual(a, o[s]));
        }
      });
    });
  },
      Ab = function (t) {
    t.eachSeriesByType("graph", function (t) {
      var e = t.getGraph(),
          n = t.getEdgeData(),
          i = gd(t.get("edgeSymbol")),
          r = gd(t.get("edgeSymbolSize")),
          a = "lineStyle.color".split("."),
          o = "lineStyle.opacity".split(".");n.setVisual("fromSymbol", i && i[0]), n.setVisual("toSymbol", i && i[1]), n.setVisual("fromSymbolSize", r && r[0]), n.setVisual("toSymbolSize", r && r[1]), n.setVisual("color", t.get(a)), n.setVisual("opacity", t.get(o)), n.each(function (t) {
        var i = n.getItemModel(t),
            r = e.getEdgeByIndex(t),
            s = gd(i.getShallow("symbol", true)),
            l = gd(i.getShallow("symbolSize", true)),
            u = i.get(a),
            h = i.get(o);switch (u) {case "source":
            u = r.node1.getVisual("color");break;case "target":
            u = r.node2.getVisual("color");}s[0] && r.setVisual("fromSymbol", s[0]), s[1] && r.setVisual("toSymbol", s[1]), l[0] && r.setVisual("fromSymbolSize", l[0]), l[1] && r.setVisual("toSymbolSize", l[1]), r.setVisual("color", u), r.setVisual("opacity", h);
      });
    });
  },
      Db = function (t, e) {
    t.eachSeriesByType("graph", function (t) {
      var e = t.get("layout"),
          n = t.coordinateSystem;if (n && "view" !== n.type) {
        var i = t.getData(),
            r = [];d(n.dimensions, function (t) {
          r = r.concat(i.mapDimension(t, true));
        });for (var a = 0; a < i.count(); a++) {
          for (var o = [], s = false, l = 0; l < r.length; l++) {
            var u = i.get(r[l], a);isNaN(u) || (s = true), o.push(u);
          }s ? i.setItemLayout(a, n.dataToPoint(o)) : i.setItemLayout(a, [NaN, NaN]);
        }vd(i.graph);
      } else e && "none" !== e || md(t);
    });
  },
      Tb = Math.PI,
      Cb = [],
      kb = { value: function (t, e, n, i, r, a, o, s) {
      var l = 0,
          u = i.getSum("value"),
          h = 2 * Math.PI / (u || s);n.eachNode(function (t) {
        var e = t.getValue("value"),
            n = h * (u ? e : 1) / 2;l += n, t.setLayout([r * Math.cos(l) + a, r * Math.sin(l) + o]), l += n;
      });
    }, symbolSize: function (t, e, n, i, r, a, o, s) {
      var l = 0;Cb.length = s;var u = ld(t);n.eachNode(function (t) {
        var e = ud(t);isNaN(e) && (e = 2), e < 0 && (e = 0), e *= u;var n = Math.asin(e / 2 / r);isNaN(n) && (n = Tb / 2), Cb[t.dataIndex] = n, l += 2 * n;
      });var h = (2 * Tb - l) / s / 2,
          c = 0;n.eachNode(function (t) {
        var e = h + Cb[t.dataIndex];c += e, t.setLayout([r * Math.cos(c) + a, r * Math.sin(c) + o]), c += e;
      });
    } },
      Lb = function (t) {
    t.eachSeriesByType("graph", function (t) {
      "circular" === t.get("layout") && yd(t, "symbolSize");
    });
  },
      Pb = X,
      Ob = function (t) {
    t.eachSeriesByType("graph", function (t) {
      var e = t.coordinateSystem;if (!e || "view" === e.type) if ("force" === t.get("layout")) {
        var n = t.preservedPoints || {},
            i = t.getGraph(),
            r = i.data,
            a = i.edgeData,
            o = t.getModel("force"),
            s = o.get("initLayout");t.preservedPoints ? r.each(function (t) {
          var e = r.getId(t);r.setItemLayout(t, n[e] || [NaN, NaN]);
        }) : s && "none" !== s ? "circular" === s && yd(t, "value") : md(t);var l = r.getDataExtent("value"),
            u = a.getDataExtent("value"),
            h = o.get("repulsion"),
            c = o.get("edgeLength");_(h) || (h = [h, h]), _(c) || (c = [c, c]), c = [c[1], c[0]];var d = r.mapArray("value", function (t, e) {
          var n = r.getItemLayout(e),
              i = ma(t, l, h);return isNaN(i) && (i = (h[0] + h[1]) / 2), { w: i, rep: i, fixed: r.getItemModel(e).get("fixed"), p: !n || isNaN(n[0]) || isNaN(n[1]) ? null : n };
        }),
            f = a.mapArray("value", function (t, e) {
          var n = i.getEdgeByIndex(e),
              r = ma(t, u, c);isNaN(r) && (r = (c[0] + c[1]) / 2);var a = n.getModel();return { n1: d[n.node1.dataIndex], n2: d[n.node2.dataIndex], d: r, curveness: a.get("lineStyle.curveness") || 0, ignoreForceLayout: a.get("ignoreForceLayout") };
        }),
            e = t.coordinateSystem,
            p = e.getBoundingRect(),
            g = _d(d, f, { rect: p, gravity: o.get("gravity"), friction: o.get("friction") }),
            m = g.step;g.step = function (t) {
          for (var e = 0, a = d.length; e < a; e++) d[e].fixed && G(d[e].p, i.getNodeByIndex(e).getLayout());m(function (e, a, o) {
            for (var s = 0, l = e.length; s < l; s++) e[s].fixed || i.getNodeByIndex(s).setLayout(e[s].p), n[r.getId(s)] = e[s].p;for (var s = 0, l = a.length; s < l; s++) {
              var u = a[s],
                  h = i.getEdgeByIndex(s),
                  c = u.n1.p,
                  d = u.n2.p,
                  f = h.getLayout();f = f ? f.slice() : [], f[0] = f[0] || [], f[1] = f[1] || [], G(f[0], c), G(f[1], d), +u.curveness && (f[2] = [(c[0] + d[0]) / 2 - (c[1] - d[1]) * u.curveness, (c[1] + d[1]) / 2 - (d[0] - c[0]) * u.curveness]), h.setLayout(f);
            }t && t(o);
          });
        }, t.forceLayout = g, t.preservedPoints = n, g.step();
      } else t.forceLayout = null;
    });
  },
      Nb = rt;h(xd, op), wd.prototype = { constructor: wd, type: "view", dimensions: ["x", "y"], setBoundingRect: function (t, e, n, i) {
      return this._rect = new Me(t, e, n, i), this._rect;
    }, getBoundingRect: function () {
      return this._rect;
    }, setViewRect: function (t, e, n, i) {
      this.transformTo(t, e, n, i), this._viewRect = new Me(t, e, n, i);
    }, transformTo: function (t, e, n, i) {
      var r = this.getBoundingRect(),
          a = this._rawTransformable;a.transform = r.calculateTransform(new Me(t, e, n, i)), a.decomposeTransform(), this._updateTransform();
    }, setCenter: function (t) {
      t && (this._center = t, this._updateCenterAndZoom());
    }, setZoom: function (t) {
      t = t || 1;var e = this.zoomLimit;e && (null != e.max && (t = Math.min(e.max, t)), null != e.min && (t = Math.max(e.min, t))), this._zoom = t, this._updateCenterAndZoom();
    }, getDefaultCenter: function () {
      var t = this.getBoundingRect();return [t.x + t.width / 2, t.y + t.height / 2];
    }, getCenter: function () {
      return this._center || this.getDefaultCenter();
    }, getZoom: function () {
      return this._zoom || 1;
    }, getRoamTransform: function () {
      return this._roamTransformable.getLocalTransform();
    }, _updateCenterAndZoom: function () {
      var t = this._rawTransformable.getLocalTransform(),
          e = this._roamTransformable,
          n = this.getDefaultCenter(),
          i = this.getCenter(),
          r = this.getZoom();i = rt([], i, t), n = rt([], n, t), e.origin = i, e.position = [n[0] - i[0], n[1] - i[1]], e.scale = [r, r], this._updateTransform();
    }, _updateTransform: function () {
      var t = this._roamTransformable,
          e = this._rawTransformable;e.parent = t, t.updateTransform(), e.updateTransform(), Ot(this.transform || (this.transform = []), e.transform || Lt()), this._rawTransform = e.getLocalTransform(), this.invTransform = this.invTransform || [], Bt(this.invTransform, this.transform), this.decomposeTransform();
    }, getTransformInfo: function () {
      var t = this._roamTransformable.transform,
          e = this._rawTransformable;return { roamTransform: t ? k(t) : Lt(), rawScale: k(e.scale), rawPosition: k(e.position) };
    }, getViewRect: function () {
      return this._viewRect;
    }, getViewRectAfterRoam: function () {
      var t = this.getBoundingRect().clone();return t.applyTransform(this.transform), t;
    }, dataToPoint: function (t, e, n) {
      var i = e ? this._rawTransform : this.transform;return n = n || [], i ? Nb(n, t, i) : G(n, t);
    }, pointToData: function (t) {
      var e = this.invTransform;return e ? Nb([], t, e) : [t[0], t[1]];
    }, convertToPixel: y(bd, "dataToPoint"), convertFromPixel: y(bd, "pointToData"), containPoint: function (t) {
      return this.getViewRectAfterRoam().contain(t[0], t[1]);
    } }, h(wd, op);var Eb = function (t, e) {
    var n = [];return t.eachSeriesByType("graph", function (t) {
      var i = t.get("coordinateSystem");if (!i || "view" === i) {
        var r = t.getData(),
            a = r.mapArray(function (t) {
          var e = r.getItemModel(t);return [+e.get("x"), +e.get("y")];
        }),
            o = [],
            s = [];Ni(a, o, s), s[0] - o[0] == 0 && (s[0] += 1, o[0] -= 1), s[1] - o[1] == 0 && (s[1] += 1, o[1] -= 1);var l = (s[0] - o[0]) / (s[1] - o[1]),
            u = Sd(t, e, l);isNaN(l) && (o = [u.x, u.y], s = [u.x + u.width, u.y + u.height]);var h = s[0] - o[0],
            c = s[1] - o[1],
            d = u.width,
            f = u.height,
            p = t.coordinateSystem = new wd();p.zoomLimit = t.get("scaleLimit"), p.setBoundingRect(o[0], o[1], h, c), p.setViewRect(u.x, u.y, d, f), p.setCenter(t.get("center")), p.setZoom(t.get("zoom")), n.push(p);
      }
    }), n;
  };ml(Mb), bl(_w("graph", "circle", null)), bl(Ib), bl(Ab), wl(Db), wl(k_.VISUAL.POST_CHART_LAYOUT, Lb), wl(Ob), _l("graphView", { create: Eb });var zb = qy.legend.selector,
      Rb = { all: { type: "all", title: n(zb.all) }, inverse: { type: "inverse", title: n(zb.inverse) } },
      Bb = Il({ type: "legend.plain", dependencies: ["series"], layoutMode: { type: "box", ignoreSize: true }, init: function (t, e, n) {
      this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}, this._updateSelector(t);
    }, mergeOption: function (t) {
      Bb.superCall(this, "mergeOption", t), this._updateSelector(t);
    }, _updateSelector: function (t) {
      var e = t.selector;true === e && (e = t.selector = ["all", "inverse"]), _(e) && d(e, function (t, n) {
        w(t) && (t = { type: t }), e[n] = i(t, Rb[t.type]);
      });
    }, optionUpdated: function () {
      this._updateData(this.ecModel);var t = this._data;if (t[0] && "single" === this.get("selectedMode")) {
        for (var e = false, n = 0; n < t.length; n++) {
          var i = t[n].get("name");if (this.isSelected(i)) {
            this.select(i), e = true;break;
          }
        }!e && this.select(t[0].get("name"));
      }
    }, _updateData: function (t) {
      var e = [],
          n = [];t.eachRawSeries(function (i) {
        var r = i.name;n.push(r);var a;if (i.legendVisualProvider) {
          var o = i.legendVisualProvider,
              s = o.getAllNames();t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : a = true;
        } else a = true;a && ri(i) && e.push(i.name);
      }), this._availableNames = n;var i = this.get("data") || e,
          r = f(i, function (t) {
        return "string" != typeof t && "number" != typeof t || (t = { name: t }), new ca(t, this, this.ecModel);
      }, this);this._data = r;
    }, getData: function () {
      return this._data;
    }, select: function (t) {
      var e = this.option.selected;"single" === this.get("selectedMode") && d(this._data, function (t) {
        e[t.get("name")] = false;
      });e[t] = true;
    }, unSelect: function (t) {
      "single" !== this.get("selectedMode") && (this.option.selected[t] = false);
    }, toggleSelected: function (t) {
      var e = this.option.selected;e.hasOwnProperty(t) || (e[t] = true), this[e[t] ? "unSelect" : "select"](t);
    }, allSelect: function () {
      var t = this._data,
          e = this.option.selected;d(t, function (t) {
        e[t.get("name", true)] = true;
      });
    }, inverseSelect: function () {
      var t = this._data,
          e = this.option.selected;d(t, function (t) {
        var n = t.get("name", true);e.hasOwnProperty(n) || (e[n] = true), e[n] = !e[n];
      });
    }, isSelected: function (t) {
      var e = this.option.selected;return !(e.hasOwnProperty(t) && !e[t]) && l(this._availableNames, t) >= 0;
    }, getOrient: function () {
      return "vertical" === this.get("orient") ? { index: 1, name: "vertical" } : { index: 0, name: "horizontal" };
    }, defaultOption: { zlevel: 0, z: 4, show: true, orient: "horizontal", left: "center", top: 0, align: "auto", backgroundColor: "rgba(0,0,0,0)", borderColor: "#ccc", borderRadius: 0, borderWidth: 0, padding: 5, itemGap: 10, itemWidth: 25, itemHeight: 14, inactiveColor: "#ccc", inactiveBorderColor: "#ccc", itemStyle: { borderWidth: 0 }, textStyle: { color: "#333" }, selectedMode: true, selector: false, selectorLabel: { show: true, borderRadius: 10, padding: [3, 5, 3, 5], fontSize: 12, fontFamily: " sans-serif", color: "#666", borderWidth: 1, borderColor: "#666" }, emphasis: { selectorLabel: { show: true, color: "#eee", backgroundColor: "#666" } }, selectorPosition: "auto", selectorItemGap: 7, selectorButtonGap: 10, tooltip: { show: false } } });yl("legendToggleSelect", "legendselectchanged", y(Md, "toggleSelected")), yl("legendAllSelect", "legendselectall", y(Md, "allSelect")), yl("legendInverseSelect", "legendinverseselect", y(Md, "inverseSelect")), yl("legendSelect", "legendselected", y(Md, "select")), yl("legendUnSelect", "legendunselected", y(Md, "unSelect"));var Fb = y,
      Vb = d,
      Gb = Np,
      Wb = Al({ type: "legend.plain", newlineDisabled: false, init: function () {
      this.group.add(this._contentGroup = new Gb()), this._backgroundEl, this.group.add(this._selectorGroup = new Gb()), this._isFirstRender = true;
    }, getContentGroup: function () {
      return this._contentGroup;
    }, getSelectorGroup: function () {
      return this._selectorGroup;
    }, render: function (t, e, n) {
      var i = this._isFirstRender;if (this._isFirstRender = false, this.resetInner(), t.get("show", true)) {
        var r = t.get("align"),
            a = t.get("orient");r && "auto" !== r || (r = "right" === t.get("left") && "vertical" === a ? "right" : "left");var s = t.get("selector", true),
            l = t.get("selectorPosition", true);!s || l && "auto" !== l || (l = "horizontal" === a ? "end" : "start"), this.renderInner(r, t, e, n, s, a, l);var u = t.getBoxLayoutParams(),
            h = { width: n.getWidth(), height: n.getHeight() },
            c = t.get("padding"),
            d = Xa(u, h, c),
            f = this.layoutInner(t, r, d, i, s, l),
            p = Xa(o({ width: f.width, height: f.height }, u), h, c);this.group.attr("position", [p.x - f.x, p.y - f.y]), this.group.add(this._backgroundEl = Id(f, t));
      }
    }, resetInner: function () {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, renderInner: function (t, e, n, i, r, a, o) {
      var s = this.getContentGroup(),
          l = R(),
          u = e.get("selectedMode"),
          h = [];n.eachRawSeries(function (t) {
        !t.get("legendHoverLink") && h.push(t.id);
      }), Vb(e.getData(), function (r, a) {
        var o = r.get("name");if (!this.newlineDisabled && ("" === o || "\n" === o)) return undefined;var c = n.getSeriesByName(o)[0];if (!l.get(o)) if (c) {
          var d = c.getData(),
              f = d.getVisual("color"),
              p = d.getVisual("borderColor");"function" == typeof f && (f = f(c.getDataParams(0))), "function" == typeof p && (p = p(c.getDataParams(0)));var g = d.getVisual("legendSymbol") || "roundRect",
              m = d.getVisual("symbol"),
              v = this._createItem(o, a, r, e, g, m, t, f, p, u);v.on("click", Fb(Dd, o, null, i, h)).on("mouseover", Fb(Td, c.name, null, i, h)).on("mouseout", Fb(Cd, c.name, null, i, h)), l.set(o, true);
        } else n.eachRawSeries(function (n) {
          if (!l.get(o) && n.legendVisualProvider) {
            var s = n.legendVisualProvider;if (!s.containName(o)) return;var c = s.indexOfName(o),
                d = s.getItemVisual(c, "color"),
                f = s.getItemVisual(c, "borderColor");this._createItem(o, a, r, e, "roundRect", null, t, d, f, u).on("click", Fb(Dd, null, o, i, h)).on("mouseover", Fb(Td, null, o, i, h)).on("mouseout", Fb(Cd, null, o, i, h)), l.set(o, true);
          }
        }, this);
      }, this), r && this._createSelector(r, e, i, a, o);
    }, _createSelector: function (t, e, n, i, r) {
      function a(t) {
        var i = t.type,
            r = new Hm({ style: { x: 0, y: 0, align: "center", verticalAlign: "middle" }, onclick: function () {
            n.dispatchAction({ type: "all" === i ? "legendAllSelect" : "legendInverseSelect" });
          } });o.add(r);var a = e.getModel("selectorLabel"),
            s = e.getModel("emphasis.selectorLabel");Vr(r.style, r.hoverStyle = {}, a, s, { defaultText: t.title, isRectText: false }), zr(r);
      }var o = this.getSelectorGroup();Vb(t, function (t) {
        a(t);
      });
    }, _createItem: function (t, e, n, i, r, o, s, l, u, h) {
      var c = i.get("itemWidth"),
          d = i.get("itemHeight"),
          f = i.get("inactiveColor"),
          p = i.get("inactiveBorderColor"),
          g = i.get("symbolKeepAspect"),
          m = i.getModel("itemStyle"),
          v = i.isSelected(t),
          y = new Gb(),
          _ = n.getModel("textStyle"),
          x = n.get("icon"),
          w = n.getModel("tooltip"),
          b = w.parentModel;r = x || r;var S = Wu(r, 0, 0, c, d, v ? l : f, null == g || g);if (y.add(Ad(S, r, m, u, p, v)), !x && o && (o !== r || "none" === o)) {
        var M = .8 * d;"none" === o && (o = "circle");var I = Wu(o, (c - M) / 2, (d - M) / 2, M, M, v ? l : f, null == g || g);y.add(Ad(I, o, m, u, p, v));
      }var A = "left" === s ? c + 5 : -5,
          D = s,
          T = i.get("formatter"),
          C = t;"string" == typeof T && T ? C = T.replace("{name}", null != t ? t : "") : "function" == typeof T && (C = T(t)), y.add(new Hm({ style: Wr({}, _, { text: C, x: A, y: d / 2, textFill: v ? _.getTextColor() : f, textAlign: D, textVerticalAlign: "middle" }) }));var k = new ev({ shape: y.getBoundingRect(), invisible: true, tooltip: w.get("show") ? a({ content: t, formatter: b.get("formatter", true) || function () {
            return t;
          }, formatterParams: { componentType: "legend", legendIndex: i.componentIndex, name: t, $vars: ["name"] } }, w.option) : null });return y.add(k), y.eachChild(function (t) {
        t.silent = true;
      }), k.silent = !h, this.getContentGroup().add(y), zr(y), y.__legendDataIndex = e, y;
    }, layoutInner: function (t, e, n, i, r, a) {
      var o = this.getContentGroup(),
          s = this.getSelectorGroup();Uv(t.get("orient"), o, t.get("itemGap"), n.width, n.height);var l = o.getBoundingRect(),
          u = [-l.x, -l.y];if (r) {
        Uv("horizontal", s, t.get("selectorItemGap", true));var h = s.getBoundingRect(),
            c = [-h.x, -h.y],
            d = t.get("selectorButtonGap", true),
            f = t.getOrient().index,
            p = 0 === f ? "width" : "height",
            g = 0 === f ? "height" : "width",
            m = 0 === f ? "y" : "x";"end" === a ? c[f] += l[p] + d : u[f] += h[p] + d, c[1 - f] += l[g] / 2 - h[g] / 2, s.attr("position", c), o.attr("position", u);var v = { x: 0, y: 0 };return v[p] = l[p] + d + h[p], v[g] = Math.max(l[g], h[g]), v[m] = Math.min(0, h[m] + c[1 - f]), v;
      }return o.attr("position", u), this.group.getBoundingRect();
    }, remove: function () {
      this.getContentGroup().removeAll(), this._isFirstRender = true;
    } }),
      Hb = function (t) {
    var e = t.findComponents({ mainType: "legend" });e && e.length && t.filterSeries(function (t) {
      for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return false;return true;
    });
  };ml(k_.PROCESSOR.SERIES_FILTER, Hb), $v.registerSubTypeDefaulter("legend", function () {
    return "plain";
  });var Zb = Bb.extend({ type: "legend.scroll", setScrollDataIndex: function (t) {
      this.option.scrollDataIndex = t;
    }, defaultOption: { scrollDataIndex: 0, pageButtonItemGap: 5, pageButtonGap: null, pageButtonPosition: "end", pageFormatter: "{current}/{total}", pageIcons: { horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"], vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"] }, pageIconColor: "#2f4554", pageIconInactiveColor: "#aaa", pageIconSize: 15, pageTextStyle: { color: "#333" }, animationDurationUpdate: 800 }, init: function (t, e, n, i) {
      var r = Ua(t);Zb.superCall(this, "init", t, e, n, i), kd(this, t, r);
    }, mergeOption: function (t, e) {
      Zb.superCall(this, "mergeOption", t, e), kd(this, this.option, t);
    } }),
      Xb = Np,
      jb = ["width", "height"],
      Ub = ["x", "y"],
      Yb = Wb.extend({ type: "legend.scroll", newlineDisabled: true, init: function () {
      Yb.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new Xb()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new Xb()), this._showController;
    }, resetInner: function () {
      Yb.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, renderInner: function (t, e, n, i, r, a, o) {
      function s(t, n) {
        var r = t + "DataIndex",
            a = oa(e.get("pageIcons", true)[e.getOrient().name][n], { onclick: v(l._pageGo, l, r, e, i) }, { x: -h[0] / 2, y: -h[1] / 2, width: h[0], height: h[1] });a.name = t, u.add(a);
      }var l = this;Yb.superCall(this, "renderInner", t, e, n, i, r, a, o);var u = this._controllerGroup,
          h = e.get("pageIconSize", true);_(h) || (h = [h, h]), s("pagePrev", 0);var c = e.getModel("pageTextStyle");u.add(new Hm({ name: "pageText", style: { textFill: c.getTextColor(), font: c.getFont(), textVerticalAlign: "middle", textAlign: "center" }, silent: true })), s("pageNext", 1);
    }, layoutInner: function (t, e, i, r, a, o) {
      var s = this.getSelectorGroup(),
          l = t.getOrient().index,
          u = jb[l],
          h = Ub[l],
          c = jb[1 - l],
          d = Ub[1 - l];a && Uv("horizontal", s, t.get("selectorItemGap", true));var f = t.get("selectorButtonGap", true),
          p = s.getBoundingRect(),
          g = [-p.x, -p.y],
          m = n(i);a && (m[u] = i[u] - p[u] - f);var v = this._layoutContentAndController(t, r, m, l, u, c, d);if (a) {
        if ("end" === o) g[l] += v[u] + f;else {
          var y = p[u] + f;g[l] -= y, v[h] -= y;
        }v[u] += p[u] + f, g[1 - l] += v[d] + v[c] / 2 - p[c] / 2, v[c] = Math.max(v[c], p[c]), v[d] = Math.min(v[d], p[d] + g[1 - l]), s.attr("position", g);
      }return v;
    }, _layoutContentAndController: function (t, e, n, i, r, a, o) {
      var s = this.getContentGroup(),
          l = this._containerGroup,
          u = this._controllerGroup;Uv(t.get("orient"), s, t.get("itemGap"), i ? n.width : null, i ? null : n.height), Uv("horizontal", u, t.get("pageButtonItemGap", true));var h = s.getBoundingRect(),
          c = u.getBoundingRect(),
          d = this._showController = h[r] > n[r],
          f = [-h.x, -h.y];e || (f[i] = s.position[i]);var p = [0, 0],
          g = [-c.x, -c.y],
          m = T(t.get("pageButtonGap", true), t.get("itemGap", true));if (d) {
        "end" === t.get("pageButtonPosition", true) ? g[i] += n[r] - c[r] : p[i] += c[r] + m;
      }g[1 - i] += h[a] / 2 - c[a] / 2, s.attr("position", f), l.attr("position", p), u.attr("position", g);var v = { x: 0, y: 0 };if (v[r] = d ? n[r] : h[r], v[a] = Math.max(h[a], c[a]), v[o] = Math.min(0, c[o] + g[1 - i]), l.__rectSize = n[r], d) {
        var y = { x: 0, y: 0 };y[r] = Math.max(n[r] - c[r] - m, 0), y[a] = v[a], l.setClipPath(new ev({ shape: y })), l.__rectSize = y[r];
      } else u.eachChild(function (t) {
        t.attr({ invisible: true, silent: true });
      });var _ = this._getPageInfo(t);return null != _.pageIndex && Qr(s, { position: _.contentPosition }, !!d && t), this._updatePageInfoView(t, _), v;
    }, _pageGo: function (t, e, n) {
      var i = this._getPageInfo(e)[t];null != i && n.dispatchAction({ type: "legendScroll", scrollDataIndex: i, legendId: e.id });
    }, _updatePageInfoView: function (t, e) {
      var n = this._controllerGroup;d(["pagePrev", "pageNext"], function (i) {
        var r = null != e[i + "DataIndex"],
            a = n.childOfName(i);a && (a.setStyle("fill", r ? t.get("pageIconColor", true) : t.get("pageIconInactiveColor", true)), a.cursor = r ? "pointer" : "default");
      });var i = n.childOfName("pageText"),
          r = t.get("pageFormatter"),
          a = e.pageIndex,
          o = null != a ? a + 1 : 0,
          s = e.pageCount;i && r && i.setStyle("text", w(r) ? r.replace("{current}", o).replace("{total}", s) : r({ current: o, total: s }));
    }, _getPageInfo: function (t) {
      function e(t) {
        if (t) {
          var e = t.getBoundingRect(),
              n = e[l] + t.position[o];return { s: n, e: n + e[s], i: t.__legendDataIndex };
        }
      }function n(t, e) {
        return t.e >= e && t.s <= e + a;
      }var i = t.get("scrollDataIndex", true),
          r = this.getContentGroup(),
          a = this._containerGroup.__rectSize,
          o = t.getOrient().index,
          s = jb[o],
          l = Ub[o],
          u = this._findTargetItemIndex(i),
          h = r.children(),
          c = h[u],
          d = h.length,
          f = d ? 1 : 0,
          p = { contentPosition: r.position.slice(), pageCount: f, pageIndex: f - 1, pagePrevDataIndex: null, pageNextDataIndex: null };if (!c) return p;var g = e(c);p.contentPosition[o] = -g.s;for (var m = u + 1, v = g, y = g, _ = null; m <= d; ++m) _ = e(h[m]), (!_ && y.e > v.s + a || _ && !n(_, v.s)) && (v = y.i > v.i ? y : _) && (null == p.pageNextDataIndex && (p.pageNextDataIndex = v.i), ++p.pageCount), y = _;for (var m = u - 1, v = g, y = g, _ = null; m >= -1; --m) _ = e(h[m]), _ && n(y, _.s) || !(v.i < y.i) || (y = v, null == p.pagePrevDataIndex && (p.pagePrevDataIndex = v.i), ++p.pageCount, ++p.pageIndex), v = _;return p;
    }, _findTargetItemIndex: function (t) {
      if (!this._showController) return 0;var e,
          n,
          i = this.getContentGroup();return i.eachChild(function (i, r) {
        var a = i.__legendDataIndex;null == n && null != a && (n = r), a === t && (e = r);
      }), null != e ? e : n;
    } });yl("legendScroll", "legendscroll", function (t, e) {
    var n = t.scrollDataIndex;null != n && e.eachComponent({ mainType: "legend", subType: "scroll", query: t }, function (t) {
      t.setScrollDataIndex(n);
    });
  });var qb = Oa,
      $b = Ea,
      Kb = Il({ type: "marker", dependencies: ["series", "grid", "polar", "geo"], init: function (t, e, n) {
      this.mergeDefaultAndTheme(t, n), this._mergeOption(t, n, false, true);
    }, isAnimationEnabled: function () {
      if (bf.node) return false;var t = this.__hostSeries;return this.getShallow("animation") && t && t.isAnimationEnabled();
    }, mergeOption: function (t, e) {
      this._mergeOption(t, e, false, false);
    }, _mergeOption: function (t, e, n, i) {
      var r = this.constructor,
          o = this.mainType + "Model";n || e.eachSeries(function (t) {
        var n = t.get(this.mainType, true),
            s = t[o];if (!n || !n.data) return undefined;s ? s._mergeOption(n, e, true) : (i && Ld(n), d(n.data, function (t) {
          t instanceof Array ? (Ld(t[0]), Ld(t[1])) : Ld(t);
        }), s = new r(n, this, e), a(s, { mainType: this.mainType, seriesIndex: t.seriesIndex, name: t.name, createdBySelf: true }), s.__hostSeries = t), t[o] = s;
      }, this);
    }, formatTooltip: function (t) {
      var e = this.getData(),
          n = this.getRawValue(t),
          i = _(n) ? f(n, qb).join(", ") : qb(n),
          r = e.getName(t),
          a = $b(this.name);return (null != n || r) && (a += "<br />"), r && (a += $b(r), null != n && (a += " : ")), null != n && (a += $b(i)), a;
    }, getData: function () {
      return this._data;
    }, setData: function (t) {
      this._data = t;
    } });h(Kb, Oy), Kb.extend({ type: "markLine", defaultOption: { zlevel: 0, z: 5, symbol: ["circle", "arrow"], symbolSize: [8, 16], precision: 2, tooltip: { trigger: "item" }, label: { show: true, position: "end", distance: 5 }, lineStyle: { type: "dashed" }, emphasis: { label: { show: true }, lineStyle: { width: 3 } }, animationEasing: "linear" } });var Qb = l,
      Jb = y,
      tS = { min: Jb(Nd, "min"), max: Jb(Nd, "max"), average: Jb(Nd, "average") },
      eS = Al({ type: "marker", init: function () {
      this.markerGroupMap = R();
    }, render: function (t, e, n) {
      var i = this.markerGroupMap;i.each(function (t) {
        t.__keep = false;
      });var r = this.type + "Model";e.eachSeries(function (t) {
        var i = t[r];i && this.renderSeries(t, i, e, n);
      }, this), i.each(function (t) {
        !t.__keep && this.group.remove(t.group);
      }, this);
    }, renderSeries: function () {} }),
      nS = function (t, e, r, o) {
    var s = t.getData(),
        l = o.type;if (!_(o) && ("min" === l || "max" === l || "average" === l || "median" === l || null != o.xAxis || null != o.yAxis)) {
      var u, h;if (null != o.yAxis || null != o.xAxis) u = e.getAxis(null != o.yAxis ? "y" : "x"), h = D(o.yAxis, o.xAxis);else {
        var c = zd(o, s, e, t);u = c.valueAxis;h = Vd(s, su(s, c.valueDataDim), l);
      }var d = "x" === u.dim ? 0 : 1,
          f = 1 - d,
          p = n(o),
          g = {};p.type = null, p.coord = [], g.coord = [], p.coord[f] = -Infinity, g.coord[f] = Infinity;var m = r.get("precision");m >= 0 && "number" == typeof h && (h = +h.toFixed(Math.min(m, 20))), p.coord[d] = g.coord[d] = h, o = [p, g, { type: l, valueIndex: o.valueIndex, value: h }];
    }return o = [Ed(t, o[0]), Ed(t, o[1]), a({}, o[2])], o[2].type = o[2].type || "", i(o[2], o[0]), i(o[2], o[1]), o;
  };eS.extend({ type: "markLine", updateTransform: function (t, e, n) {
      e.eachSeries(function (t) {
        var e = t.markLineModel;if (e) {
          var i = e.getData(),
              r = e.__from,
              a = e.__to;r.each(function (e) {
            Zd(r, e, true, t, n), Zd(a, e, false, t, n);
          }), i.each(function (t) {
            i.setItemLayout(t, [r.getItemLayout(t), a.getItemLayout(t)]);
          }), this.markerGroupMap.get(t.id).updateLayout();
        }
      }, this);
    }, renderSeries: function (t, e, n, i) {
      function r(e, n, r) {
        var a = e.getItemModel(n);Zd(e, n, r, t, i), e.setItemVisual(n, { symbolSize: a.get("symbolSize") || g[r ? 0 : 1], symbol: a.get("symbol", true) || p[r ? 0 : 1], color: a.get("itemStyle.color") || s.getVisual("color") });
      }var a = t.coordinateSystem,
          o = t.id,
          s = t.getData(),
          l = this.markerGroupMap,
          u = l.get(o) || l.set(o, new Wc());this.group.add(u.group);var h = Xd(a, t, e),
          c = h.from,
          d = h.to,
          f = h.line;e.__from = c, e.__to = d, e.setData(f);var p = e.get("symbol"),
          g = e.get("symbolSize");_(p) || (p = [p, p]), "number" == typeof g && (g = [g, g]), h.from.each(function (t) {
        r(c, t, true), r(d, t, false);
      }), f.each(function (t) {
        var e = f.getItemModel(t).get("lineStyle.color");f.setItemVisual(t, { color: e || c.getItemVisual(t, "color") }), f.setItemLayout(t, [c.getItemLayout(t), d.getItemLayout(t)]), f.setItemVisual(t, { fromSymbolSize: c.getItemVisual(t, "symbolSize"), fromSymbol: c.getItemVisual(t, "symbol"), toSymbolSize: d.getItemVisual(t, "symbolSize"), toSymbol: d.getItemVisual(t, "symbol") });
      }), u.updateData(f), h.line.eachItemGraphicEl(function (t, n) {
        t.traverse(function (t) {
          t.dataModel = e;
        });
      }), u.__keep = true, u.group.silent = e.get("silent") || t.get("silent");
    } }), gl(function (t) {
    t.markLine = t.markLine || {};
  }), Kb.extend({ type: "markArea", defaultOption: { zlevel: 0, z: 1, tooltip: { trigger: "item" }, animation: false, label: { show: true, position: "top" }, itemStyle: { borderWidth: 0 }, emphasis: { label: { show: true, position: "top" } } } });var iS = function (t, e, n, i) {
    var a = Ed(t, i[0]),
        o = Ed(t, i[1]),
        s = D,
        l = a.coord,
        u = o.coord;l[0] = s(l[0], -Infinity), l[1] = s(l[1], -Infinity), u[0] = s(u[0], Infinity), u[1] = s(u[1], Infinity);var h = r([{}, a, o]);return h.coord = [a.coord, o.coord], h.x0 = a.x, h.y0 = a.y, h.x1 = o.x, h.y1 = o.y, h;
  },
      rS = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]];eS.extend({ type: "markArea", updateTransform: function (t, e, n) {
      e.eachSeries(function (t) {
        var e = t.markAreaModel;if (e) {
          var i = e.getData();i.each(function (e) {
            var r = f(rS, function (r) {
              return qd(i, e, r, t, n);
            });i.setItemLayout(e, r), i.getItemGraphicEl(e).setShape("points", r);
          });
        }
      }, this);
    }, renderSeries: function (t, e, n, i) {
      var r = t.coordinateSystem,
          a = t.id,
          s = t.getData(),
          l = this.markerGroupMap,
          u = l.get(a) || l.set(a, { group: new Np() });this.group.add(u.group), u.__keep = true;var h = $d(r, t, e);e.setData(h), h.each(function (e) {
        h.setItemLayout(e, f(rS, function (n) {
          return qd(h, e, n, t, i);
        })), h.setItemVisual(e, { color: s.getVisual("color") });
      }), h.diff(u.__data).add(function (t) {
        var e = new Km({ shape: { points: h.getItemLayout(t) } });h.setItemGraphicEl(t, e), u.group.add(e);
      }).update(function (t, n) {
        var i = u.__data.getItemGraphicEl(n);Qr(i, { shape: { points: h.getItemLayout(t) } }, e, t), u.group.add(i), h.setItemGraphicEl(t, i);
      }).remove(function (t) {
        var e = u.__data.getItemGraphicEl(t);u.group.remove(e);
      }).execute(), h.eachItemGraphicEl(function (t, n) {
        var i = h.getItemModel(n),
            r = i.getModel("label"),
            a = i.getModel("emphasis.label"),
            s = h.getItemVisual(n, "color");t.useStyle(o(i.getModel("itemStyle").getItemStyle(), { fill: oe(s, .4), stroke: s })), t.hoverStyle = i.getModel("emphasis.itemStyle").getItemStyle(), Vr(t.style, t.hoverStyle, r, a, { labelFetcher: e, labelDataIndex: n, defaultText: h.getName(n) || "", isRectText: true, autoColor: s }), zr(t, {}), t.dataModel = e;
      }), u.__data = h, u.group.silent = e.get("silent") || t.get("silent");
    } }), gl(function (t) {
    t.markArea = t.markArea || {};
  }), $v.registerSubTypeDefaulter("dataZoom", function () {
    return "slider";
  });var aS = ["x", "y", "z", "radius", "angle", "single"],
      oS = ["cartesian2d", "polar", "singleAxis"],
      sS = function (t, e) {
    t = t.slice();var n = f(t, Ga);e = (e || []).slice();var i = f(e, Ga);return function (r, a) {
      d(t, function (t, o) {
        for (var s = { name: t, capital: n[o] }, l = 0; l < e.length; l++) s[e[l]] = t + i[l];r.call(a, s);
      });
    };
  }(aS, ["axisIndex", "axis", "index", "id"]),
      lS = function (t, e, n, i, r, a) {
    t = t || 0;var o = n[1] - n[0];if (null != r && (r = tf(r, [0, o])), null != a && (a = Math.max(a, null != r ? r : 0)), "all" === i) {
      var s = Math.abs(e[1] - e[0]);s = tf(s, [0, o]), r = a = tf(s, [r, a]), i = 0;
    }e[0] = tf(e[0], n), e[1] = tf(e[1], n);var l = Jd(e, i);e[i] += t;var u = r || 0,
        h = n.slice();l.sign < 0 ? h[0] += u : h[1] -= u, e[i] = tf(e[i], h);var c = Jd(e, i);null != r && (c.sign !== l.sign || c.span < r) && (e[1 - i] = e[i] + l.sign * r);var c = Jd(e, i);return null != a && c.span > a && (e[1 - i] = e[i] + c.sign * a), e;
  },
      uS = d,
      hS = _a,
      cS = function (t, e, n, i) {
    this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this._minMaxSpan, this.ecModel = i, this._dataZoomModel = n;
  };cS.prototype = { constructor: cS, hostedBy: function (t) {
      return this._dataZoomModel === t;
    }, getDataValueWindow: function () {
      return this._valueWindow.slice();
    }, getDataPercentWindow: function () {
      return this._percentWindow.slice();
    }, getTargetSeriesModels: function () {
      var t = [],
          e = this.ecModel;return e.eachSeries(function (n) {
        if (Kd(n.get("coordinateSystem"))) {
          var i = this._dimName,
              r = e.queryComponents({ mainType: i + "Axis", index: n.get(i + "AxisIndex"), id: n.get(i + "AxisId") })[0];this._axisIndex === (r && r.componentIndex) && t.push(n);
        }
      }, this), t;
    }, getAxisModel: function () {
      return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex);
    }, getOtherAxisModel: function () {
      var t,
          e,
          n = this._dimName,
          i = this.ecModel,
          r = this.getAxisModel(),
          a = "x" === n || "y" === n;a ? (e = "gridIndex", t = "x" === n ? "y" : "x") : (e = "polarIndex", t = "angle" === n ? "radius" : "angle");var o;return i.eachComponent(t + "Axis", function (t) {
        (t.get(e) || 0) === (r.get(e) || 0) && (o = t);
      }), o;
    }, getMinMaxSpan: function () {
      return n(this._minMaxSpan);
    }, calculateDataWindow: function (t) {
      function e(t, e, n, i, r) {
        var o = r ? "Span" : "ValueSpan";lS(0, t, n, "all", h["min" + o], h["max" + o]);for (var s = 0; s < 2; s++) e[s] = ma(t[s], n, i, true), r && (e[s] = a.parse(e[s]));
      }var n,
          i = this._dataExtent,
          r = this.getAxisModel(),
          a = r.axis.scale,
          o = this._dataZoomModel.getRangePropMode(),
          s = [0, 100],
          l = [],
          u = [];uS(["start", "end"], function (e, r) {
        var h = t[e],
            c = t[e + "Value"];"percent" === o[r] ? (null == h && (h = s[r]), c = a.parse(ma(h, s, i))) : (n = true, c = null == c ? i[r] : a.parse(c), h = ma(c, i, s)), u[r] = c, l[r] = h;
      }), hS(u), hS(l);var h = this._minMaxSpan;return n ? e(u, l, i, s, false) : e(l, u, s, i, true), { valueWindow: u, percentWindow: l };
    }, reset: function (t) {
      if (t === this._dataZoomModel) {
        var e = this.getTargetSeriesModels();this._dataExtent = ef(this, this._dimName, e), af(this);var n = this.calculateDataWindow(t.settledOption);this._valueWindow = n.valueWindow, this._percentWindow = n.percentWindow, rf(this);
      }
    }, restore: function (t) {
      t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, rf(this, true));
    }, filterData: function (t, e) {
      function n(t) {
        return t >= o[0] && t <= o[1];
      }if (t === this._dataZoomModel) {
        var i = this._dimName,
            r = this.getTargetSeriesModels(),
            a = t.get("filterMode"),
            o = this._valueWindow;"none" !== a && uS(r, function (t) {
          var e = t.getData(),
              r = e.mapDimension(i, true);r.length && ("weakFilter" === a ? e.filterSelf(function (t) {
            for (var n, i, a, s = 0; s < r.length; s++) {
              var l = e.get(r[s], t),
                  u = !isNaN(l),
                  h = l < o[0],
                  c = l > o[1];if (u && !h && !c) return true;u && (a = true), h && (n = true), c && (i = true);
            }return a && n && i;
          }) : uS(r, function (i) {
            if ("empty" === a) t.setData(e = e.map(i, function (t) {
              return n(t) ? t : NaN;
            }));else {
              var r = {};r[i] = o, e.selectRange(r);
            }
          }), uS(r, function (t) {
            e.setApproximateExtent(o, t);
          }));
        });
      }
    } };var dS = d,
      fS = sS,
      pS = Il({ type: "dataZoom", dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "singleAxis", "series"], defaultOption: { zlevel: 0, z: 4, orient: null, xAxisIndex: null, yAxisIndex: null, filterMode: "filter", throttle: null, start: 0, end: 100, startValue: null, endValue: null, minSpan: null, maxSpan: null, minValueSpan: null, maxValueSpan: null, rangeMode: null }, init: function (t, e, n) {
      this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this._autoThrottle = true, this._rangePropMode = ["percent", "percent"];var i = of(t);this.settledOption = i, this.mergeDefaultAndTheme(t, n), this.doInit(i);
    }, mergeOption: function (t) {
      var e = of(t);i(this.option, t, true), i(this.settledOption, e, true), this.doInit(e);
    }, doInit: function (t) {
      var e = this.option;bf.canvasSupported || (e.realtime = false), this._setDefaultThrottle(t), sf(this, t);var n = this.settledOption;dS([["start", "startValue"], ["end", "endValue"]], function (t, i) {
        "value" === this._rangePropMode[i] && (e[t[0]] = n[t[0]] = null);
      }, this), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies();
    }, _giveAxisProxies: function () {
      var t = this._axisProxies;this.eachTargetAxis(function (e, n, i, r) {
        var a = this.dependentModels[e.axis][n],
            o = a.__dzAxisProxy || (a.__dzAxisProxy = new cS(e.name, n, this, r));t[e.name + "_" + n] = o;
      }, this);
    }, _resetTarget: function () {
      var t = this.option,
          e = this._judgeAutoMode();fS(function (e) {
        var n = e.axisIndex;t[n] = Qn(t[n]);
      }, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient();
    }, _judgeAutoMode: function () {
      var t = this.option,
          e = false;fS(function (n) {
        null != t[n.axisIndex] && (e = true);
      }, this);var n = t.orient;return null == n && e ? "orient" : e ? undefined : (null == n && (t.orient = "horizontal"), "axisIndex");
    }, _autoSetAxisIndex: function () {
      var t = true,
          e = this.get("orient", true),
          n = this.option,
          i = this.dependentModels;if (t) {
        var r = "vertical" === e ? "y" : "x";i[r + "Axis"].length ? (n[r + "AxisIndex"] = [0], t = false) : dS(i.singleAxis, function (i) {
          t && i.get("orient", true) === e && (n.singleAxisIndex = [i.componentIndex], t = false);
        });
      }t && fS(function (e) {
        if (t) {
          var i = [],
              r = this.dependentModels[e.axis];if (r.length && !i.length) for (var a = 0, o = r.length; a < o; a++) "category" === r[a].get("type") && i.push(a);n[e.axisIndex] = i, i.length && (t = false);
        }
      }, this), t && this.ecModel.eachSeries(function (t) {
        this._isSeriesHasAllAxesTypeOf(t, "value") && fS(function (e) {
          var i = n[e.axisIndex],
              r = t.get(e.axisIndex),
              a = t.get(e.axisId);r = t.ecModel.queryComponents({ mainType: e.axis, index: r, id: a })[0].componentIndex, l(i, r) < 0 && i.push(r);
        });
      }, this);
    }, _autoSetOrient: function () {
      var t;this.eachTargetAxis(function (e) {
        !t && (t = e.name);
      }, this), this.option.orient = "y" === t ? "vertical" : "horizontal";
    }, _isSeriesHasAllAxesTypeOf: function (t, e) {
      var n = true;return fS(function (i) {
        var r = t.get(i.axisIndex),
            a = this.dependentModels[i.axis][r];a && a.get("type") === e || (n = false);
      }, this), n;
    }, _setDefaultThrottle: function (t) {
      if (t.hasOwnProperty("throttle") && (this._autoThrottle = false), this._autoThrottle) {
        var e = this.ecModel.option;this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20;
      }
    }, getFirstTargetAxisModel: function () {
      var t;return fS(function (e) {
        if (null == t) {
          var n = this.get(e.axisIndex);n.length && (t = this.dependentModels[e.axis][n[0]]);
        }
      }, this), t;
    }, eachTargetAxis: function (t, e) {
      var n = this.ecModel;fS(function (i) {
        dS(this.get(i.axisIndex), function (r) {
          t.call(e, i, r, this, n);
        }, this);
      }, this);
    }, getAxisProxy: function (t, e) {
      return this._axisProxies[t + "_" + e];
    }, getAxisModel: function (t, e) {
      var n = this.getAxisProxy(t, e);return n && n.getAxisModel();
    }, setRawRange: function (t) {
      var e = this.option,
          n = this.settledOption;dS([["start", "startValue"], ["end", "endValue"]], function (i) {
        null == t[i[0]] && null == t[i[1]] || (e[i[0]] = n[i[0]] = t[i[0]], e[i[1]] = n[i[1]] = t[i[1]]);
      }, this), sf(this, t);
    }, setCalculatedRange: function (t) {
      var e = this.option;dS(["start", "startValue", "end", "endValue"], function (n) {
        e[n] = t[n];
      });
    }, getPercentRange: function () {
      var t = this.findRepresentativeAxisProxy();if (t) return t.getDataPercentWindow();
    }, getValueRange: function (t, e) {
      if (null != t || null != e) return this.getAxisProxy(t, e).getDataValueWindow();var n = this.findRepresentativeAxisProxy();return n ? n.getDataValueWindow() : undefined;
    }, findRepresentativeAxisProxy: function (t) {
      if (t) return t.__dzAxisProxy;var e = this._axisProxies;for (var n in e) if (e.hasOwnProperty(n) && e[n].hostedBy(this)) return e[n];for (var n in e) if (e.hasOwnProperty(n) && !e[n].hostedBy(this)) return e[n];
    }, getRangePropMode: function () {
      return this._rangePropMode.slice();
    } }),
      gS = By.extend({ type: "dataZoom", render: function (t, e, n, i) {
      this.dataZoomModel = t, this.ecModel = e, this.api = n;
    }, getTargetCoordInfo: function () {
      function t(t, e, n, i) {
        for (var r, a = 0; a < n.length; a++) if (n[a].model === t) {
          r = n[a];break;
        }r || n.push(r = { model: t, axisModels: [], coordIndex: i }), r.axisModels.push(e);
      }var e = this.dataZoomModel,
          n = this.ecModel,
          i = {};return e.eachTargetAxis(function (e, r) {
        var a = n.getComponent(e.axis, r);if (a) {
          var o = a.getCoordSysModel();o && t(o, a, i[o.mainType] || (i[o.mainType] = []), o.componentIndex);
        }
      }, this), i;
    } }),
      mS = (pS.extend({ type: "dataZoom.slider", layoutMode: "box", defaultOption: { show: true, right: "ph", top: "ph", width: "ph", height: "ph", left: null, bottom: null, backgroundColor: "rgba(47,69,84,0)", dataBackground: { lineStyle: { color: "#2f4554", width: .5, opacity: .3 }, areaStyle: { color: "rgba(47,69,84,0.3)", opacity: .3 } }, borderColor: "#ddd", fillerColor: "rgba(167,183,204,0.4)", handleIcon: "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z", handleSize: "100%", handleStyle: { color: "#a7b7cc" }, labelPrecision: null, labelFormatter: null, showDetail: true, showDataShadow: "auto", realtime: true, zoomLock: false, textStyle: { color: "#333" } } }), ev),
      vS = ma,
      yS = _a,
      _S = v,
      xS = d,
      wS = "horizontal",
      bS = 5,
      SS = ["line", "bar", "candlestick", "scatter"],
      MS = gS.extend({ type: "dataZoom.slider", init: function (t, e) {
      this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._handleWidth, this._handleHeight, this._location, this._dragging, this._dataShadowInfo, this.api = e;
    }, render: function (t, e, n, i) {
      if (MS.superApply(this, "render", arguments), ds(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get("orient"), false === this.dataZoomModel.get("show")) return undefined;i && "dataZoom" === i.type && i.from === this.uid || this._buildView(), this._updateView();
    }, remove: function () {
      MS.superApply(this, "remove", arguments), fs(this, "_dispatchZoomAction");
    }, dispose: function () {
      MS.superApply(this, "dispose", arguments), fs(this, "_dispatchZoomAction");
    }, _buildView: function () {
      var t = this.group;t.removeAll(), this._resetLocation(), this._resetInterval();var e = this._displayables.barGroup = new Np();this._renderBackground(), this._renderHandle(), this._renderDataShadow(), t.add(e), this._positionGroup();
    }, _resetLocation: function () {
      var t = this.dataZoomModel,
          e = this.api,
          n = this._findCoordRect(),
          i = { width: e.getWidth(), height: e.getHeight() },
          r = this._orient === wS ? { right: i.width - n.x - n.width, top: i.height - 30 - 7, width: n.width, height: 30 } : { right: 7, top: n.y, width: 30, height: n.height },
          a = Ua(t.option);d(["right", "top", "width", "height"], function (t) {
        "ph" === a[t] && (a[t] = r[t]);
      });var o = Xa(a, i, t.padding);this._location = { x: o.x, y: o.y }, this._size = [o.width, o.height], "vertical" === this._orient && this._size.reverse();
    }, _positionGroup: function () {
      var t = this.group,
          e = this._location,
          n = this._orient,
          i = this.dataZoomModel.getFirstTargetAxisModel(),
          r = i && i.get("inverse"),
          a = this._displayables.barGroup,
          o = (this._dataShadowInfo || {}).otherAxisInverse;a.attr(n !== wS || r ? n === wS && r ? { scale: o ? [-1, 1] : [-1, -1] } : "vertical" !== n || r ? { scale: o ? [-1, -1] : [-1, 1], rotation: Math.PI / 2 } : { scale: o ? [1, -1] : [1, 1], rotation: Math.PI / 2 } : { scale: o ? [1, 1] : [1, -1] });var s = t.getBoundingRect([a]);t.attr("position", [e.x - s.x, e.y - s.y]);
    }, _getViewExtent: function () {
      return [0, this._size[0]];
    }, _renderBackground: function () {
      var t = this.dataZoomModel,
          e = this._size,
          n = this._displayables.barGroup;n.add(new mS({ silent: true, shape: { x: 0, y: 0, width: e[0], height: e[1] }, style: { fill: t.get("backgroundColor") }, z2: -40 })), n.add(new mS({ shape: { x: 0, y: 0, width: e[0], height: e[1] }, style: { fill: "transparent" }, z2: 0, onclick: v(this._onClickPanelClick, this) }));
    }, _renderDataShadow: function () {
      var t = this._dataShadowInfo = this._prepareDataShadowInfo();if (t) {
        var e = this._size,
            n = t.series,
            i = n.getRawData(),
            r = n.getShadowDim ? n.getShadowDim() : t.otherDim;if (null != r) {
          var a = i.getDataExtent(r),
              s = .3 * (a[1] - a[0]);a = [a[0] - s, a[1] + s];var l,
              u = [0, e[1]],
              h = [0, e[0]],
              c = [[e[0], 0], [0, 0]],
              d = [],
              f = h[1] / (i.count() - 1),
              p = 0,
              g = Math.round(i.count() / e[0]);i.each([r], function (t, e) {
            if (g > 0 && e % g) return undefined;var n = null == t || isNaN(t) || "" === t,
                i = n ? 0 : vS(t, a, u, true);n && !l && e ? (c.push([c[c.length - 1][0], 0]), d.push([d[d.length - 1][0], 0])) : !n && l && (c.push([p, 0]), d.push([p, 0])), c.push([p, i]), d.push([p, i]), p += f, l = n;
          });var m = this.dataZoomModel;this._displayables.barGroup.add(new Km({ shape: { points: c }, style: o({ fill: m.get("dataBackgroundColor") }, m.getModel("dataBackground.areaStyle").getAreaStyle()), silent: true, z2: -20 })), this._displayables.barGroup.add(new Qm({ shape: { points: d }, style: m.getModel("dataBackground.lineStyle").getLineStyle(), silent: true, z2: -19 }));
        }
      }
    }, _prepareDataShadowInfo: function () {
      var t = this.dataZoomModel,
          e = t.get("showDataShadow");if (false !== e) {
        var n,
            i = this.ecModel;return t.eachTargetAxis(function (r, a) {
          d(t.getAxisProxy(r.name, a).getTargetSeriesModels(), function (t) {
            if (!(n || true !== e && l(SS, t.get("type")) < 0)) {
              var o,
                  s = i.getComponent(r.axis, a).axis,
                  u = lf(r.name),
                  h = t.coordinateSystem;null != u && h.getOtherAxis && (o = h.getOtherAxis(s).inverse), u = t.getData().mapDimension(u), n = { thisAxis: s, series: t, thisDim: r.name, otherDim: u, otherAxisInverse: o };
            }
          }, this);
        }, this), n;
      }
    }, _renderHandle: function () {
      var t = this._displayables,
          e = t.handles = [],
          n = t.handleLabels = [],
          i = this._displayables.barGroup,
          r = this._size,
          a = this.dataZoomModel;i.add(t.filler = new mS({ draggable: true, cursor: uf(this._orient), drift: _S(this._onDragMove, this, "all"), ondragstart: _S(this._showDataInfo, this, true), ondragend: _S(this._onDragEnd, this), onmouseover: _S(this._showDataInfo, this, true), onmouseout: _S(this._showDataInfo, this, false), style: { fill: a.get("fillerColor"), textPosition: "inside" } })), i.add(new mS({ silent: true, subPixelOptimize: true, shape: { x: 0, y: 0, width: r[0], height: r[1] }, style: { stroke: a.get("dataBackgroundColor") || a.get("borderColor"), lineWidth: 1, fill: "rgba(0,0,0,0)" } })), xS([0, 1], function (t) {
        var r = oa(a.get("handleIcon"), { cursor: uf(this._orient), draggable: true, drift: _S(this._onDragMove, this, t), ondragend: _S(this._onDragEnd, this), onmouseover: _S(this._showDataInfo, this, true), onmouseout: _S(this._showDataInfo, this, false) }, { x: -1, y: 0, width: 2, height: 2 }),
            o = r.getBoundingRect();this._handleHeight = va(a.get("handleSize"), this._size[1]), this._handleWidth = o.width / o.height * this._handleHeight, r.setStyle(a.getModel("handleStyle").getItemStyle());var s = a.get("handleColor");null != s && (r.style.fill = s), i.add(e[t] = r);var l = a.textStyleModel;this.group.add(n[t] = new Hm({ silent: true, invisible: true, style: { x: 0, y: 0, text: "", textVerticalAlign: "middle", textAlign: "center", textFill: l.getTextColor(), textFont: l.getFont() }, z2: 10 }));
      }, this);
    }, _resetInterval: function () {
      var t = this._range = this.dataZoomModel.getPercentRange(),
          e = this._getViewExtent();this._handleEnds = [vS(t[0], [0, 100], e, true), vS(t[1], [0, 100], e, true)];
    }, _updateInterval: function (t, e) {
      var n = this.dataZoomModel,
          i = this._handleEnds,
          r = this._getViewExtent(),
          a = n.findRepresentativeAxisProxy().getMinMaxSpan(),
          o = [0, 100];lS(e, i, r, n.get("zoomLock") ? "all" : t, null != a.minSpan ? vS(a.minSpan, o, r, true) : null, null != a.maxSpan ? vS(a.maxSpan, o, r, true) : null);var s = this._range,
          l = this._range = yS([vS(i[0], r, o, true), vS(i[1], r, o, true)]);return !s || s[0] !== l[0] || s[1] !== l[1];
    }, _updateView: function (t) {
      var e = this._displayables,
          n = this._handleEnds,
          i = yS(n.slice()),
          r = this._size;xS([0, 1], function (t) {
        var i = e.handles[t],
            a = this._handleHeight;i.attr({ scale: [a / 2, a / 2], position: [n[t], r[1] / 2 - a / 2] });
      }, this), e.filler.setShape({ x: i[0], y: 0, width: i[1] - i[0], height: r[1] }), this._updateDataInfo(t);
    }, _updateDataInfo: function (t) {
      function e(t) {
        var e = ta(i.handles[t].parent, this.group),
            n = na(0 === t ? "right" : "left", e),
            s = this._handleWidth / 2 + bS,
            l = ea([c[t] + (0 === t ? -s : s), this._size[1] / 2], e);r[t].setStyle({ x: l[0], y: l[1], textVerticalAlign: a === wS ? "middle" : n, textAlign: a === wS ? n : "center", text: o[t] });
      }var n = this.dataZoomModel,
          i = this._displayables,
          r = i.handleLabels,
          a = this._orient,
          o = ["", ""];if (n.get("showDetail")) {
        var s = n.findRepresentativeAxisProxy();if (s) {
          var l = s.getAxisModel().axis,
              u = this._range,
              h = t ? s.calculateDataWindow({ start: u[0], end: u[1] }).valueWindow : s.getDataValueWindow();o = [this._formatLabel(h[0], l), this._formatLabel(h[1], l)];
        }
      }var c = yS(this._handleEnds.slice());e.call(this, 0), e.call(this, 1);
    }, _formatLabel: function (t, e) {
      var n = this.dataZoomModel,
          i = n.get("labelFormatter"),
          r = n.get("labelPrecision");null != r && "auto" !== r || (r = e.getPixelPrecision());var a = null == t || isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(r, 20));return x(i) ? i(t, a) : w(i) ? i.replace("{value}", a) : a;
    }, _showDataInfo: function (t) {
      t = this._dragging || t;var e = this._displayables.handleLabels;e[0].attr("invisible", !t), e[1].attr("invisible", !t);
    }, _onDragMove: function (t, e, n, i) {
      this._dragging = true, $f(i.event);var r = this._displayables.barGroup.getLocalTransform(),
          a = ea([e, n], r, true),
          o = this._updateInterval(t, a[0]),
          s = this.dataZoomModel.get("realtime");this._updateView(!s), o && s && this._dispatchZoomAction();
    }, _onDragEnd: function () {
      this._dragging = false, this._showDataInfo(false), !this.dataZoomModel.get("realtime") && this._dispatchZoomAction();
    }, _onClickPanelClick: function (t) {
      var e = this._size,
          n = this._displayables.barGroup.transformCoordToLocal(t.offsetX, t.offsetY);if (!(n[0] < 0 || n[0] > e[0] || n[1] < 0 || n[1] > e[1])) {
        var i = this._handleEnds,
            r = (i[0] + i[1]) / 2,
            a = this._updateInterval("all", n[0] - r);this._updateView(), a && this._dispatchZoomAction();
      }
    }, _dispatchZoomAction: function () {
      var t = this._range;this.api.dispatchAction({ type: "dataZoom", from: this.uid, dataZoomId: this.dataZoomModel.id, start: t[0], end: t[1] });
    }, _findCoordRect: function () {
      var t;if (xS(this.getTargetCoordInfo(), function (e) {
        if (!t && e.length) {
          var n = e[0].model.coordinateSystem;t = n.getRect && n.getRect();
        }
      }), !t) {
        var e = this.api.getWidth(),
            n = this.api.getHeight();t = { x: .2 * e, y: .2 * n, width: .6 * e, height: .6 * n };
      }return t;
    } });ml({ getTargetSeries: function (t) {
      var e = R();return t.eachComponent("dataZoom", function (t) {
        t.eachTargetAxis(function (t, n, i) {
          d(i.getAxisProxy(t.name, n).getTargetSeriesModels(), function (t) {
            e.set(t.uid, t);
          });
        });
      }), e;
    }, modifyOutputEnd: true, overallReset: function (t, e) {
      t.eachComponent("dataZoom", function (t) {
        t.eachTargetAxis(function (t, n, i) {
          i.getAxisProxy(t.name, n).reset(i, e);
        }), t.eachTargetAxis(function (t, n, i) {
          i.getAxisProxy(t.name, n).filterData(i, e);
        });
      }), t.eachComponent("dataZoom", function (t) {
        var e = t.findRepresentativeAxisProxy(),
            n = e.getDataPercentWindow(),
            i = e.getDataValueWindow();t.setCalculatedRange({ start: n[0], end: n[1], startValue: i[0], endValue: i[1] });
      });
    } }), yl("dataZoom", function (t, e) {
    var n = Qd(v(e.eachComponent, e, "dataZoom"), sS, function (t, e) {
      return t.get(e.axisIndex);
    }),
        i = [];e.eachComponent({ mainType: "dataZoom", query: t }, function (t, e) {
      i.push.apply(i, n(t).nodes);
    }), d(i, function (e, n) {
      e.setRawRange({ start: t.start, end: t.end, startValue: t.startValue, endValue: t.endValue });
    });
  }), pS.extend({ type: "dataZoom.inside", defaultOption: { disabled: false, zoomLock: false, zoomOnMouseWheel: true, moveOnMouseMove: true, moveOnMouseWheel: false, preventDefaultMouseMove: true } });var IS = "\0_ec_dataZoom_roams",
      AS = v,
      DS = gS.extend({ type: "dataZoom.inside", init: function (t, e) {
      this._range;
    }, render: function (t, e, n, i) {
      DS.superApply(this, "render", arguments), this._range = t.getPercentRange(), d(this.getTargetCoordInfo(), function (e, i) {
        var r = f(e, function (t) {
          return df(t.model);
        });d(e, function (e) {
          var a = e.model,
              o = {};d(["pan", "zoom", "scrollMove"], function (t) {
            o[t] = AS(TS[t], this, e, i);
          }, this), hf(n, { coordId: df(a), allCoordIds: r, containsPoint: function (t, e, n) {
              return a.coordinateSystem.containPoint([e, n]);
            }, dataZoomId: t.id, dataZoomModel: t, getRange: o });
        }, this);
      }, this);
    }, dispose: function () {
      cf(this.api, this.dataZoomModel.id), DS.superApply(this, "dispose", arguments), this._range = null;
    } }),
      TS = { zoom: function (t, e, n, i) {
      var r = this._range,
          a = r.slice(),
          o = t.axisModels[0];if (o) {
        var s = CS[e](null, [i.originX, i.originY], o, n, t),
            l = (s.signal > 0 ? s.pixelStart + s.pixelLength - s.pixel : s.pixel - s.pixelStart) / s.pixelLength * (a[1] - a[0]) + a[0],
            u = Math.max(1 / i.scale, 0);a[0] = (a[0] - l) * u + l, a[1] = (a[1] - l) * u + l;var h = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();return lS(0, a, [0, 100], 0, h.minSpan, h.maxSpan), this._range = a, r[0] !== a[0] || r[1] !== a[1] ? a : undefined;
      }
    }, pan: yf(function (t, e, n, i, r, a) {
      var o = CS[i]([a.oldX, a.oldY], [a.newX, a.newY], e, r, n);return o.signal * (t[1] - t[0]) * o.pixel / o.pixelLength;
    }), scrollMove: yf(function (t, e, n, i, r, a) {
      return CS[i]([0, 0], [a.scrollDelta, a.scrollDelta], e, r, n).signal * (t[1] - t[0]) * a.scrollDelta;
    }) },
      CS = { grid: function (t, e, n, i, r) {
      var a = n.axis,
          o = {},
          s = r.model.coordinateSystem.getRect();return t = t || [0, 0], "x" === a.dim ? (o.pixel = e[0] - t[0], o.pixelLength = s.width, o.pixelStart = s.x, o.signal = a.inverse ? 1 : -1) : (o.pixel = e[1] - t[1], o.pixelLength = s.height, o.pixelStart = s.y, o.signal = a.inverse ? -1 : 1), o;
    }, polar: function (t, e, n, i, r) {
      var a = n.axis,
          o = {},
          s = r.model.coordinateSystem,
          l = s.getRadiusAxis().getExtent(),
          u = s.getAngleAxis().getExtent();return t = t ? s.pointToCoord(t) : [0, 0], e = s.pointToCoord(e), "radiusAxis" === n.mainType ? (o.pixel = e[0] - t[0], o.pixelLength = l[1] - l[0], o.pixelStart = l[0], o.signal = a.inverse ? 1 : -1) : (o.pixel = e[1] - t[1], o.pixelLength = u[1] - u[0], o.pixelStart = u[0], o.signal = a.inverse ? -1 : 1), o;
    }, singleAxis: function (t, e, n, i, r) {
      var a = n.axis,
          o = r.model.coordinateSystem.getRect(),
          s = {};return t = t || [0, 0], "horizontal" === a.orient ? (s.pixel = e[0] - t[0], s.pixelLength = o.width, s.pixelStart = o.x, s.signal = a.inverse ? 1 : -1) : (s.pixel = e[1] - t[1], s.pixelLength = o.height, s.pixelStart = o.y, s.signal = a.inverse ? -1 : 1), s;
    } };t.version = "4.7.0", t.dependencies = A_, t.PRIORITY = k_, t.init = ll, t.connect = ul, t.disConnect = hl, t.disconnect = $_, t.dispose = cl, t.getInstanceByDom = dl, t.getInstanceById = fl, t.registerTheme = pl, t.registerPreprocessor = gl, t.registerProcessor = ml, t.registerPostUpdate = vl, t.registerAction = yl, t.registerCoordinateSystem = _l, t.getCoordinateSystemDimensions = xl, t.registerLayout = wl, t.registerVisual = bl, t.registerLoading = Ml, t.extendComponentModel = Il, t.extendComponentView = Al, t.extendSeriesModel = Dl, t.extendChartView = Tl, t.setCanvasCreator = Cl, t.registerMap = kl, t.getMap = Ll, t.dataTool = K_, t.zrender = Ag, t.number = zv, t.format = Hv, t.throttle = cs, t.helper = Ux, t.matrix = ip, t.vector = Wf, t.color = bp, t.parseGeoJSON = qx, t.parseGeoJson = Jx, t.util = tw, t.graphic = ew, t.List = lx, t.Model = ca, t.Axis = Qx, t.env = bf;
});