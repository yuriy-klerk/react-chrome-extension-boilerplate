!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {exports: {}};
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function (a, b, c) {
        !function (c) {
            "use strict";
            "function" == typeof define && define.amd ? define(["jquery"], c) : "undefined" != typeof b && b.exports ? b.exports = c(a("jquery")) : c(jQuery)
        }(function (a) {
            "use strict";

            function b(b) {
                return !b.nodeName || a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) !== -1
            }

            function c(b) {
                return a.isFunction(b) || a.isPlainObject(b) ? b : {top: b, left: b}
            }

            var d = a.scrollTo = function (b, c, d) {
                return a(window).scrollTo(b, c, d)
            };
            return d.defaults = {axis: "xy", duration: 0, limit: !0}, a.fn.scrollTo = function (e, f, g) {
                "object" == typeof f && (g = f, f = 0), "function" == typeof g && (g = {onAfter: g}), "max" === e && (e = 9e9), g = a.extend({}, d.defaults, g), f = f || g.duration;
                var h = g.queue && g.axis.length > 1;
                return h && (f /= 2), g.offset = c(g.offset), g.over = c(g.over), this.each(function () {
                    function i(b) {
                        var c = a.extend({}, g, {
                            queue: !0, duration: f, complete: b && function () {
                                b.call(l, n, g)
                            }
                        });
                        m.animate(o, c)
                    }

                    if (null !== e) {
                        var j, k = b(this), l = k ? this.contentWindow || window : this, m = a(l), n = e, o = {};
                        switch (typeof n) {
                            case"number":
                            case"string":
                                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(n)) {
                                    n = c(n);
                                    break
                                }
                                n = k ? a(n) : a(n, l);
                            case"object":
                                if (0 === n.length) return;
                                (n.is || n.style) && (j = (n = a(n)).offset())
                        }
                        var p = a.isFunction(g.offset) && g.offset(l, n) || g.offset;
                        a.each(g.axis.split(""), function (a, b) {
                            var c = "x" === b ? "Left" : "Top", e = c.toLowerCase(), f = "scroll" + c, q = m[f](),
                                r = d.max(l, b);
                            if (j) o[f] = j[e] + (k ? 0 : q - m.offset()[e]), g.margin && (o[f] -= parseInt(n.css("margin" + c), 10) || 0, o[f] -= parseInt(n.css("border" + c + "Width"), 10) || 0), o[f] += p[e] || 0, g.over[e] && (o[f] += n["x" === b ? "width" : "height"]() * g.over[e]); else {
                                var s = n[e];
                                o[f] = s.slice && "%" === s.slice(-1) ? parseFloat(s) / 100 * r : s
                            }
                            g.limit && /^\d+$/.test(o[f]) && (o[f] = o[f] <= 0 ? 0 : Math.min(o[f], r)), !a && g.axis.length > 1 && (q === o[f] ? o = {} : h && (i(g.onAfterFirst), o = {}))
                        }), i(g.onAfter)
                    }
                })
            }, d.max = function (c, d) {
                var e = "x" === d ? "Width" : "Height", f = "scroll" + e;
                if (!b(c)) return c[f] - a(c)[e.toLowerCase()]();
                var g = "client" + e, h = c.ownerDocument || c.document, i = h.documentElement, j = h.body;
                return Math.max(i[f], j[f]) - Math.min(i[g], j[g])
            }, a.Tween.propHooks.scrollLeft = a.Tween.propHooks.scrollTop = {
                get: function (b) {
                    return a(b.elem)[b.prop]()
                }, set: function (b) {
                    var c = this.get(b);
                    if (b.options.interrupt && b._last && b._last !== c) return a(b.elem).stop();
                    var d = Math.round(b.now);
                    c !== d && (a(b.elem)[b.prop](d), b._last = this.get(b))
                }
            }, d
        })
    }, {jquery: 3}], 2: [function (a, b, c) {
        !function (d, e) {
            "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof c ? b.exports = e(a("jquery")) : e(d.jQuery)
        }(this, function (a) {
            function b(a) {
                if (a in l.style) return a;
                for (var b = ["Moz", "Webkit", "O", "ms"], c = a.charAt(0).toUpperCase() + a.substr(1), d = 0; d < b.length; ++d) {
                    var e = b[d] + c;
                    if (e in l.style) return e
                }
            }

            function c() {
                return l.style[m.transform] = "", l.style[m.transform] = "rotateY(90deg)", "" !== l.style[m.transform]
            }

            function d(a) {
                return "string" == typeof a && this.parse(a), this
            }

            function e(a, b, c) {
                b === !0 ? a.queue(c) : b ? a.queue(b, c) : a.each(function () {
                    c.call(this)
                })
            }

            function f(b) {
                var c = [];
                return a.each(b, function (b) {
                    b = a.camelCase(b), b = a.transit.propertyMap[b] || a.cssProps[b] || b, b = i(b), m[b] && (b = i(m[b])), a.inArray(b, c) === -1 && c.push(b)
                }), c
            }

            function g(b, c, d, e) {
                var g = f(b);
                a.cssEase[d] && (d = a.cssEase[d]);
                var h = "" + k(c) + " " + d;
                parseInt(e, 10) > 0 && (h += " " + k(e));
                var i = [];
                return a.each(g, function (a, b) {
                    i.push(b + " " + h)
                }), i.join(", ")
            }

            function h(b, c) {
                c || (a.cssNumber[b] = !0), a.transit.propertyMap[b] = m.transform, a.cssHooks[b] = {
                    get: function (c) {
                        var d = a(c).css("transit:transform");
                        return d.get(b)
                    }, set: function (c, d) {
                        var e = a(c).css("transit:transform");
                        e.setFromString(b, d), a(c).css({"transit:transform": e})
                    }
                }
            }

            function i(a) {
                return a.replace(/([A-Z])/g, function (a) {
                    return "-" + a.toLowerCase()
                })
            }

            function j(a, b) {
                return "string" != typeof a || a.match(/^[\-0-9\.]+$/) ? "" + a + b : a
            }

            function k(b) {
                var c = b;
                return "string" != typeof c || c.match(/^[\-0-9\.]+/) || (c = a.fx.speeds[c] || a.fx.speeds._default), j(c, "ms")
            }

            a.transit = {
                version: "0.9.12",
                propertyMap: {
                    marginLeft: "margin",
                    marginRight: "margin",
                    marginBottom: "margin",
                    marginTop: "margin",
                    paddingLeft: "padding",
                    paddingRight: "padding",
                    paddingBottom: "padding",
                    paddingTop: "padding"
                },
                enabled: !0,
                useTransitionEnd: !1
            };
            var l = document.createElement("div"), m = {}, n = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
            m.transition = b("transition"), m.transitionDelay = b("transitionDelay"), m.transform = b("transform"), m.transformOrigin = b("transformOrigin"), m.filter = b("Filter"), m.transform3d = c();
            var o = {
                transition: "transitionend",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                WebkitTransition: "webkitTransitionEnd",
                msTransition: "MSTransitionEnd"
            }, p = m.transitionEnd = o[m.transition] || null;
            for (var q in m) m.hasOwnProperty(q) && "undefined" == typeof a.support[q] && (a.support[q] = m[q]);
            return l = null, a.cssEase = {
                _default: "ease",
                "in": "ease-in",
                out: "ease-out",
                "in-out": "ease-in-out",
                snap: "cubic-bezier(0,1,.5,1)",
                easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
                easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                easeInOutExpo: "cubic-bezier(1,0,0,1)",
                easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                easeInSine: "cubic-bezier(.47,0,.745,.715)",
                easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
            }, a.cssHooks["transit:transform"] = {
                get: function (b) {
                    return a(b).data("transform") || new d
                }, set: function (b, c) {
                    var e = c;
                    e instanceof d || (e = new d(e)), "WebkitTransform" !== m.transform || n ? b.style[m.transform] = e.toString() : b.style[m.transform] = e.toString(!0), a(b).data("transform", e)
                }
            }, a.cssHooks.transform = {set: a.cssHooks["transit:transform"].set}, a.cssHooks.filter = {
                get: function (a) {
                    return a.style[m.filter]
                }, set: function (a, b) {
                    a.style[m.filter] = b
                }
            }, a.fn.jquery < "1.8" && (a.cssHooks.transformOrigin = {
                get: function (a) {
                    return a.style[m.transformOrigin]
                }, set: function (a, b) {
                    a.style[m.transformOrigin] = b
                }
            }, a.cssHooks.transition = {
                get: function (a) {
                    return a.style[m.transition]
                }, set: function (a, b) {
                    a.style[m.transition] = b
                }
            }), h("scale"), h("scaleX"), h("scaleY"), h("translate"), h("rotate"), h("rotateX"), h("rotateY"), h("rotate3d"), h("perspective"), h("skewX"), h("skewY"), h("x", !0), h("y", !0), d.prototype = {
                setFromString: function (a, b) {
                    var c = "string" == typeof b ? b.split(",") : b.constructor === Array ? b : [b];
                    c.unshift(a), d.prototype.set.apply(this, c)
                }, set: function (a) {
                    var b = Array.prototype.slice.apply(arguments, [1]);
                    this.setter[a] ? this.setter[a].apply(this, b) : this[a] = b.join(",")
                }, get: function (a) {
                    return this.getter[a] ? this.getter[a].apply(this) : this[a] || 0
                }, setter: {
                    rotate: function (a) {
                        this.rotate = j(a, "deg")
                    }, rotateX: function (a) {
                        this.rotateX = j(a, "deg")
                    }, rotateY: function (a) {
                        this.rotateY = j(a, "deg")
                    }, scale: function (a, b) {
                        void 0 === b && (b = a), this.scale = a + "," + b
                    }, skewX: function (a) {
                        this.skewX = j(a, "deg")
                    }, skewY: function (a) {
                        this.skewY = j(a, "deg")
                    }, perspective: function (a) {
                        this.perspective = j(a, "px")
                    }, x: function (a) {
                        this.set("translate", a, null)
                    }, y: function (a) {
                        this.set("translate", null, a)
                    }, translate: function (a, b) {
                        void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== a && void 0 !== a && (this._translateX = j(a, "px")), null !== b && void 0 !== b && (this._translateY = j(b, "px")), this.translate = this._translateX + "," + this._translateY
                    }
                }, getter: {
                    x: function () {
                        return this._translateX || 0
                    }, y: function () {
                        return this._translateY || 0
                    }, scale: function () {
                        var a = (this.scale || "1,1").split(",");
                        return a[0] && (a[0] = parseFloat(a[0])), a[1] && (a[1] = parseFloat(a[1])), a[0] === a[1] ? a[0] : a
                    }, rotate3d: function () {
                        for (var a = (this.rotate3d || "0,0,0,0deg").split(","), b = 0; b <= 3; ++b) a[b] && (a[b] = parseFloat(a[b]));
                        return a[3] && (a[3] = j(a[3], "deg")), a
                    }
                }, parse: function (a) {
                    var b = this;
                    a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (a, c, d) {
                        b.setFromString(c, d)
                    })
                }, toString: function (a) {
                    var b = [];
                    for (var c in this) if (this.hasOwnProperty(c)) {
                        if (!m.transform3d && ("rotateX" === c || "rotateY" === c || "perspective" === c || "transformOrigin" === c)) continue;
                        "_" !== c[0] && (a && "scale" === c ? b.push(c + "3d(" + this[c] + ",1)") : a && "translate" === c ? b.push(c + "3d(" + this[c] + ",0)") : b.push(c + "(" + this[c] + ")"))
                    }
                    return b.join(" ")
                }
            }, a.fn.transition = a.fn.transit = function (b, c, d, f) {
                var h = this, i = 0, j = !0, l = a.extend(!0, {}, b);
                "function" == typeof c && (f = c, c = void 0), "object" == typeof c && (d = c.easing, i = c.delay || 0, j = "undefined" == typeof c.queue || c.queue, f = c.complete, c = c.duration), "function" == typeof d && (f = d, d = void 0), "undefined" != typeof l.easing && (d = l.easing, delete l.easing), "undefined" != typeof l.duration && (c = l.duration, delete l.duration), "undefined" != typeof l.complete && (f = l.complete, delete l.complete), "undefined" != typeof l.queue && (j = l.queue, delete l.queue), "undefined" != typeof l.delay && (i = l.delay, delete l.delay), "undefined" == typeof c && (c = a.fx.speeds._default), "undefined" == typeof d && (d = a.cssEase._default), c = k(c);
                var n = g(l, c, d, i), o = a.transit.enabled && m.transition,
                    q = o ? parseInt(c, 10) + parseInt(i, 10) : 0;
                if (0 === q) {
                    var r = function (a) {
                        h.css(l), f && f.apply(h), a && a()
                    };
                    return e(h, j, r), h
                }
                var s = {}, t = function (b) {
                    var c = !1, d = function () {
                        c && h.unbind(p, d), q > 0 && h.each(function () {
                            this.style[m.transition] = s[this] || null
                        }), "function" == typeof f && f.apply(h), "function" == typeof b && b()
                    };
                    q > 0 && p && a.transit.useTransitionEnd ? (c = !0, h.bind(p, d)) : window.setTimeout(d, q), h.each(function () {
                        q > 0 && (this.style[m.transition] = n), a(this).css(l)
                    })
                }, u = function (a) {
                    this.offsetWidth, t(a)
                };
                return e(h, j, u), this
            }, a.transit.getTransitionValue = g, a
        })
    }, {jquery: 3}], 3: [function (a, b, c) {
        !function (a, c) {
            "object" == typeof b && "object" == typeof b.exports ? b.exports = a.document ? c(a, !0) : function (a) {
                if (!a.document) throw new Error("jQuery requires a window with a document");
                return c(a)
            } : c(a)
        }("undefined" != typeof window ? window : this, function (a, b) {
            function c(a) {
                var b = !!a && "length" in a && a.length, c = fa.type(a);
                return "function" !== c && !fa.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
            }

            function d(a, b, c) {
                if (fa.isFunction(b)) return fa.grep(a, function (a, d) {
                    return !!b.call(a, d, a) !== c
                });
                if (b.nodeType) return fa.grep(a, function (a) {
                    return a === b !== c
                });
                if ("string" == typeof b) {
                    if (pa.test(b)) return fa.filter(b, a, c);
                    b = fa.filter(b, a)
                }
                return fa.grep(a, function (a) {
                    return _.call(b, a) > -1 !== c
                })
            }

            function e(a, b) {
                for (; (a = a[b]) && 1 !== a.nodeType;) ;
                return a
            }

            function f(a) {
                var b = {};
                return fa.each(a.match(va) || [], function (a, c) {
                    b[c] = !0
                }), b
            }

            function g() {
                X.removeEventListener("DOMContentLoaded", g), a.removeEventListener("load", g), fa.ready()
            }

            function h() {
                this.expando = fa.expando + h.uid++
            }

            function i(a, b, c) {
                var d;
                if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Ca, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : Ba.test(c) ? fa.parseJSON(c) : c)
                    } catch (e) {
                    }
                    Aa.set(a, b, c)
                } else c = void 0;
                return c
            }

            function j(a, b, c, d) {
                var e, f = 1, g = 20, h = d ? function () {
                        return d.cur()
                    } : function () {
                        return fa.css(a, b, "")
                    }, i = h(), j = c && c[3] || (fa.cssNumber[b] ? "" : "px"),
                    k = (fa.cssNumber[b] || "px" !== j && +i) && Ea.exec(fa.css(a, b));
                if (k && k[3] !== j) {
                    j = j || k[3], c = c || [], k = +i || 1;
                    do f = f || ".5", k /= f, fa.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
                }
                return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
            }

            function k(a, b) {
                var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
                return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([a], c) : c
            }

            function l(a, b) {
                for (var c = 0, d = a.length; c < d; c++) za.set(a[c], "globalEval", !b || za.get(b[c], "globalEval"))
            }

            function m(a, b, c, d, e) {
                for (var f, g, h, i, j, m, n = b.createDocumentFragment(), o = [], p = 0, q = a.length; p < q; p++) if (f = a[p], f || 0 === f) if ("object" === fa.type(f)) fa.merge(o, f.nodeType ? [f] : f); else if (La.test(f)) {
                    for (g = g || n.appendChild(b.createElement("div")), h = (Ia.exec(f) || ["", ""])[1].toLowerCase(), i = Ka[h] || Ka._default, g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2], m = i[0]; m--;) g = g.lastChild;
                    fa.merge(o, g.childNodes), g = n.firstChild, g.textContent = ""
                } else o.push(b.createTextNode(f));
                for (n.textContent = "", p = 0; f = o[p++];) if (d && fa.inArray(f, d) > -1) e && e.push(f); else if (j = fa.contains(f.ownerDocument, f), g = k(n.appendChild(f), "script"), j && l(g), c) for (m = 0; f = g[m++];) Ja.test(f.type || "") && c.push(f);
                return n
            }

            function n() {
                return !0
            }

            function o() {
                return !1
            }

            function p() {
                try {
                    return X.activeElement
                } catch (a) {
                }
            }

            function q(a, b, c, d, e, f) {
                var g, h;
                if ("object" == typeof b) {
                    "string" != typeof c && (d = d || c, c = void 0);
                    for (h in b) q(a, h, c, d, b[h], f);
                    return a
                }
                if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = o; else if (!e) return a;
                return 1 === f && (g = e, e = function (a) {
                    return fa().off(a), g.apply(this, arguments)
                }, e.guid = g.guid || (g.guid = fa.guid++)), a.each(function () {
                    fa.event.add(this, b, e, d, c)
                })
            }

            function r(a, b) {
                return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
            }

            function s(a) {
                return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
            }

            function t(a) {
                var b = Sa.exec(a.type);
                return b ? a.type = b[1] : a.removeAttribute("type"), a
            }

            function u(a, b) {
                var c, d, e, f, g, h, i, j;
                if (1 === b.nodeType) {
                    if (za.hasData(a) && (f = za.access(a), g = za.set(b, f), j = f.events)) {
                        delete g.handle, g.events = {};
                        for (e in j) for (c = 0, d = j[e].length; c < d; c++) fa.event.add(b, e, j[e][c])
                    }
                    Aa.hasData(a) && (h = Aa.access(a), i = fa.extend({}, h), Aa.set(b, i))
                }
            }

            function v(a, b) {
                var c = b.nodeName.toLowerCase();
                "input" === c && Ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
            }

            function w(a, b, c, d) {
                b = Z.apply([], b);
                var e, f, g, h, i, j, l = 0, n = a.length, o = n - 1, p = b[0], q = fa.isFunction(p);
                if (q || n > 1 && "string" == typeof p && !da.checkClone && Ra.test(p)) return a.each(function (e) {
                    var f = a.eq(e);
                    q && (b[0] = p.call(this, e, f.html())), w(f, b, c, d)
                });
                if (n && (e = m(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
                    for (g = fa.map(k(e, "script"), s), h = g.length; l < n; l++) i = e, l !== o && (i = fa.clone(i, !0, !0), h && fa.merge(g, k(i, "script"))), c.call(a[l], i, l);
                    if (h) for (j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0; l < h; l++) i = g[l], Ja.test(i.type || "") && !za.access(i, "globalEval") && fa.contains(j, i) && (i.src ? fa._evalUrl && fa._evalUrl(i.src) : fa.globalEval(i.textContent.replace(Ta, "")))
                }
                return a
            }

            function x(a, b, c) {
                for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || fa.cleanData(k(d)), d.parentNode && (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")), d.parentNode.removeChild(d));
                return a
            }

            function y(a, b) {
                var c = fa(b.createElement(a)).appendTo(b.body), d = fa.css(c[0], "display");
                return c.detach(), d
            }

            function z(a) {
                var b = X, c = Va[a];
                return c || (c = y(a, b), "none" !== c && c || (Ua = (Ua || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ua[0].contentDocument, b.write(), b.close(), c = y(a, b), Ua.detach()), Va[a] = c), c
            }

            function A(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || Ya(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)), c && !da.pixelMarginRight() && Xa.test(g) && Wa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
            }

            function B(a, b) {
                return {
                    get: function () {
                        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                    }
                }
            }

            function C(a) {
                if (a in db) return a;
                for (var b = a[0].toUpperCase() + a.slice(1), c = cb.length; c--;) if (a = cb[c] + b, a in db) return a
            }

            function D(a, b, c) {
                var d = Ea.exec(b);
                return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
            }

            function E(a, b, c, d, e) {
                for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += fa.css(a, c + Fa[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + Fa[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Fa[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Fa[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + Fa[f] + "Width", !0, e)));
                return g
            }

            function F(a, b, c) {
                var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ya(a),
                    g = "border-box" === fa.css(a, "boxSizing", !1, f);
                if (e <= 0 || null == e) {
                    if (e = A(a, b, f), (e < 0 || null == e) && (e = a.style[b]), Xa.test(e)) return e;
                    d = g && (da.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
                }
                return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
            }

            function G(a, b) {
                for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) d = a[g], d.style && (f[g] = za.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ga(d) && (f[g] = za.access(d, "olddisplay", z(d.nodeName)))) : (e = Ga(d), "none" === c && e || za.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
                for (g = 0; g < h; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
                return a
            }

            function H(a, b, c, d, e) {
                return new H.prototype.init(a, b, c, d, e)
            }

            function I() {
                return a.setTimeout(function () {
                    eb = void 0
                }), eb = fa.now()
            }

            function J(a, b) {
                var c, d = 0, e = {height: a};
                for (b = b ? 1 : 0; d < 4; d += 2 - b) c = Fa[d], e["margin" + c] = e["padding" + c] = a;
                return b && (e.opacity = e.width = a), e
            }

            function K(a, b, c) {
                for (var d, e = (N.tweeners[b] || []).concat(N.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d
            }

            function L(a, b, c) {
                var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Ga(a),
                    p = za.get(a, "fxshow");
                c.queue || (h = fa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
                    h.unqueued || i()
                }), h.unqueued++, l.always(function () {
                    l.always(function () {
                        h.unqueued--, fa.queue(a, "fx").length || h.empty.fire()
                    })
                })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = fa.css(a, "display"), k = "none" === j ? za.get(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === fa.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function () {
                    n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
                }));
                for (d in b) if (e = b[d], gb.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0
                    }
                    m[d] = p && p[d] || fa.style(a, d)
                } else j = void 0;
                if (fa.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j); else {
                    p ? "hidden" in p && (o = p.hidden) : p = za.access(a, "fxshow", {}), f && (p.hidden = !o), o ? fa(a).show() : l.done(function () {
                        fa(a).hide()
                    }), l.done(function () {
                        var b;
                        za.remove(a, "fxshow");
                        for (b in m) fa.style(a, b, m[b])
                    });
                    for (d in m) g = K(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
                }
            }

            function M(a, b) {
                var c, d, e, f, g;
                for (c in a) if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
            }

            function N(a, b, c) {
                var d, e, f = 0, g = N.prefilters.length, h = fa.Deferred().always(function () {
                    delete i.elem
                }), i = function () {
                    if (e) return !1;
                    for (var b = eb || I(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
                }, j = h.promise({
                    elem: a,
                    props: fa.extend({}, b),
                    opts: fa.extend(!0, {specialEasing: {}, easing: fa.easing._default}, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: eb || I(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function (b, c) {
                        var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function (b) {
                        var c = 0, d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; c < d; c++) j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                    }
                }), k = j.props;
                for (M(k, j.opts.specialEasing); f < g; f++) if (d = N.prefilters[f].call(j, a, k, j.opts)) return fa.isFunction(d.stop) && (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)), d;
                return fa.map(k, K, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
                    elem: a,
                    anim: j,
                    queue: j.opts.queue
                })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
            }

            function O(a) {
                return a.getAttribute && a.getAttribute("class") || ""
            }

            function P(a) {
                return function (b, c) {
                    "string" != typeof b && (c = b, b = "*");
                    var d, e = 0, f = b.toLowerCase().match(va) || [];
                    if (fa.isFunction(c)) for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }

            function Q(a, b, c, d) {
                function e(h) {
                    var i;
                    return f[h] = !0, fa.each(a[h] || [], function (a, h) {
                        var j = h(b, c, d);
                        return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                    }), i
                }

                var f = {}, g = a === Ab;
                return e(b.dataTypes[0]) || !f["*"] && e("*")
            }

            function R(a, b) {
                var c, d, e = fa.ajaxSettings.flatOptions || {};
                for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
                return d && fa.extend(!0, a, d), a
            }

            function S(a, b, c) {
                for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                if (d) for (e in h) if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
                if (i[0] in c) f = i[0]; else {
                    for (e in c) {
                        if (!i[0] || a.converters[e + " " + i[0]]) {
                            f = e;
                            break
                        }
                        g || (g = e)
                    }
                    f = f || g
                }
                if (f) return f !== i[0] && i.unshift(f), c[f]
            }

            function T(a, b, c, d) {
                var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
                if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
                for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
                    if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                        b = g(b)
                    } catch (l) {
                        return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
                    }
                }
                return {state: "success", data: b}
            }

            function U(a, b, c, d) {
                var e;
                if (fa.isArray(b)) fa.each(b, function (b, e) {
                    c || Eb.test(a) ? d(a, e) : U(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
                }); else if (c || "object" !== fa.type(b)) d(a, b); else for (e in b) U(a + "[" + e + "]", b[e], c, d)
            }

            function V(a) {
                return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
            }

            var W = [], X = a.document, Y = W.slice, Z = W.concat, $ = W.push, _ = W.indexOf, aa = {}, ba = aa.toString,
                ca = aa.hasOwnProperty, da = {}, ea = "2.2.4", fa = function (a, b) {
                    return new fa.fn.init(a, b)
                }, ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ha = /^-ms-/, ia = /-([\da-z])/gi, ja = function (a, b) {
                    return b.toUpperCase()
                };
            fa.fn = fa.prototype = {
                jquery: ea, constructor: fa, selector: "", length: 0, toArray: function () {
                    return Y.call(this)
                }, get: function (a) {
                    return null != a ? a < 0 ? this[a + this.length] : this[a] : Y.call(this)
                }, pushStack: function (a) {
                    var b = fa.merge(this.constructor(), a);
                    return b.prevObject = this, b.context = this.context, b
                }, each: function (a) {
                    return fa.each(this, a)
                }, map: function (a) {
                    return this.pushStack(fa.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                }, slice: function () {
                    return this.pushStack(Y.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (a) {
                    var b = this.length, c = +a + (a < 0 ? b : 0);
                    return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: $, sort: W.sort, splice: W.splice
            }, fa.extend = fa.fn.extend = function () {
                var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
                for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d))) ? (e ? (e = !1, f = c && fa.isArray(c) ? c : []) : f = c && fa.isPlainObject(c) ? c : {}, g[b] = fa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
                return g
            }, fa.extend({
                expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
                    throw new Error(a)
                }, noop: function () {
                }, isFunction: function (a) {
                    return "function" === fa.type(a)
                }, isArray: Array.isArray, isWindow: function (a) {
                    return null != a && a === a.window
                }, isNumeric: function (a) {
                    var b = a && a.toString();
                    return !fa.isArray(a) && b - parseFloat(b) + 1 >= 0
                }, isPlainObject: function (a) {
                    var b;
                    if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a)) return !1;
                    if (a.constructor && !ca.call(a, "constructor") && !ca.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
                    for (b in a) ;
                    return void 0 === b || ca.call(a, b)
                }, isEmptyObject: function (a) {
                    var b;
                    for (b in a) return !1;
                    return !0
                }, type: function (a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ba.call(a)] || "object" : typeof a
                }, globalEval: function (a) {
                    var b, c = eval;
                    a = fa.trim(a), a && (1 === a.indexOf("use strict") ? (b = X.createElement("script"), b.text = a, X.head.appendChild(b).parentNode.removeChild(b)) : c(a))
                }, camelCase: function (a) {
                    return a.replace(ha, "ms-").replace(ia, ja)
                }, nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                }, each: function (a, b) {
                    var d, e = 0;
                    if (c(a)) for (d = a.length; e < d && b.call(a[e], e, a[e]) !== !1; e++) ; else for (e in a) if (b.call(a[e], e, a[e]) === !1) break;
                    return a
                }, trim: function (a) {
                    return null == a ? "" : (a + "").replace(ga, "")
                }, makeArray: function (a, b) {
                    var d = b || [];
                    return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : $.call(d, a)), d
                }, inArray: function (a, b, c) {
                    return null == b ? -1 : _.call(b, a, c)
                }, merge: function (a, b) {
                    for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
                    return a.length = e, a
                }, grep: function (a, b, c) {
                    for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                    return e
                }, map: function (a, b, d) {
                    var e, f, g = 0, h = [];
                    if (c(a)) for (e = a.length; g < e; g++) f = b(a[g], g, d), null != f && h.push(f); else for (g in a) f = b(a[g], g, d), null != f && h.push(f);
                    return Z.apply([], h)
                }, guid: 1, proxy: function (a, b) {
                    var c, d, e;
                    if ("string" == typeof b && (c = a[b], b = a, a = c), fa.isFunction(a)) return d = Y.call(arguments, 2), e = function () {
                        return a.apply(b || this, d.concat(Y.call(arguments)))
                    }, e.guid = a.guid = a.guid || fa.guid++, e
                }, now: Date.now, support: da
            }), "function" == typeof Symbol && (fa.fn[Symbol.iterator] = W[Symbol.iterator]), fa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
                aa["[object " + b + "]"] = b.toLowerCase()
            });
            var ka = function (a) {
                function b(a, b, c, d) {
                    var e, f, g, h, i, j, l, n, o = b && b.ownerDocument, p = b ? b.nodeType : 9;
                    if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p) return c;
                    if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, I)) {
                        if (11 !== p && (j = ra.exec(a))) if (e = j[1]) {
                            if (9 === p) {
                                if (!(g = b.getElementById(e))) return c;
                                if (g.id === e) return c.push(g), c
                            } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e) return c.push(g), c
                        } else {
                            if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                        }
                        if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                            if (1 !== p) o = b, n = a; else if ("object" !== b.nodeName.toLowerCase()) {
                                for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N), l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--;) l[f] = i + " " + m(l[f]);
                                n = l.join(","), o = sa.test(a) && k(b.parentNode) || b
                            }
                            if (n) try {
                                return $.apply(c, o.querySelectorAll(n)), c
                            } catch (q) {
                            } finally {
                                h === N && b.removeAttribute("id")
                            }
                        }
                    }
                    return B(a.replace(ha, "$1"), b, c, d)
                }

                function c() {
                    function a(c, d) {
                        return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                    }

                    var b = [];
                    return a
                }

                function d(a) {
                    return a[N] = !0, a
                }

                function e(a) {
                    var b = G.createElement("div");
                    try {
                        return !!a(b)
                    } catch (c) {
                        return !1
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b), b = null
                    }
                }

                function f(a, b) {
                    for (var c = a.split("|"), d = c.length; d--;) w.attrHandle[c[d]] = b
                }

                function g(a, b) {
                    var c = b && a,
                        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                    if (d) return d;
                    if (c) for (; c = c.nextSibling;) if (c === b) return -1;
                    return a ? 1 : -1
                }

                function h(a) {
                    return function (b) {
                        var c = b.nodeName.toLowerCase();
                        return "input" === c && b.type === a
                    }
                }

                function i(a) {
                    return function (b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a
                    }
                }

                function j(a) {
                    return d(function (b) {
                        return b = +b, d(function (c, d) {
                            for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        })
                    })
                }

                function k(a) {
                    return a && "undefined" != typeof a.getElementsByTagName && a
                }

                function l() {
                }

                function m(a) {
                    for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
                    return d
                }

                function n(a, b, c) {
                    var d = b.dir, e = c && "parentNode" === d, f = Q++;
                    return b.first ? function (b, c, f) {
                        for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
                    } : function (b, c, g) {
                        var h, i, j, k = [P, f];
                        if (g) {
                            for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                        } else for (; b = b[d];) if (1 === b.nodeType || e) {
                            if (j = b[N] || (b[N] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === P && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
                    }
                }

                function o(a) {
                    return a.length > 1 ? function (b, c, d) {
                        for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
                        return !0
                    } : a[0]
                }

                function p(a, c, d) {
                    for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
                    return d
                }

                function q(a, b, c, d, e) {
                    for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                    return g
                }

                function r(a, b, c, e, f, g) {
                    return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                        var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []),
                            s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                        if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--;) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                        if (d) {
                            if (f || a) {
                                if (f) {
                                    for (j = [], k = t.length; k--;) (l = t[k]) && j.push(s[k] = l);
                                    f(null, t = [], j, i)
                                }
                                for (k = t.length; k--;) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                            }
                        } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                    })
                }

                function s(a) {
                    for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                        return a === b
                    }, g, !0), j = n(function (a) {
                        return aa(b, a) > -1
                    }, g, !0), k = [function (a, c, d) {
                        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                        return b = null, e
                    }]; h < e; h++) if (c = w.relative[a[h].type]) k = [n(o(k), c)]; else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; d < e && !w.relative[a[d].type]; d++) ;
                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ha, "$1"), c, h < d && s(a.slice(h, d)), d < e && s(a = a.slice(d)), d < e && m(a))
                        }
                        k.push(c)
                    }
                    return o(k)
                }

                function t(a, c) {
                    var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
                        var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                        for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0, g || k.ownerDocument === G || (F(k), h = !I); m = a[l++];) if (m(k, g || G, h)) {
                                    i.push(k);
                                    break
                                }
                                j && (P = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, r, g, h);
                            if (d) {
                                if (n > 0) for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r)
                            }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u, C = s), p
                    };
                    return e ? d(g) : g
                }

                var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                    O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function (a, b) {
                        return a === b && (E = !0), 0
                    }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice,
                    aa = function (a, b) {
                        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
                        return -1
                    },
                    ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
                    fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
                    ga = new RegExp(ca + "+", "g"),
                    ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                    ia = new RegExp("^" + ca + "*," + ca + "*"),
                    ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                    ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), la = new RegExp(fa),
                    ma = new RegExp("^" + da + "$"), na = {
                        ID: new RegExp("^#(" + da + ")"),
                        CLASS: new RegExp("^\\.(" + da + ")"),
                        TAG: new RegExp("^(" + da + "|[*])"),
                        ATTR: new RegExp("^" + ea),
                        PSEUDO: new RegExp("^" + fa),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ba + ")$", "i"),
                        needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                    }, oa = /^(?:input|select|textarea|button)$/i, pa = /^h\d$/i, qa = /^[^{]+\{\s*\[native \w/,
                    ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sa = /[+~]/, ta = /'|\\/g,
                    ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), va = function (a, b, c) {
                        var d = "0x" + b - 65536;
                        return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                    }, wa = function () {
                        F()
                    };
                try {
                    $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
                } catch (xa) {
                    $ = {
                        apply: X.length ? function (a, b) {
                            Z.apply(a, _.call(b))
                        } : function (a, b) {
                            for (var c = a.length, d = 0; a[c++] = b[d++];) ;
                            a.length = c - 1
                        }
                    }
                }
                v = b.support = {}, y = b.isXML = function (a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return !!b && "HTML" !== b.nodeName
                }, F = b.setDocument = function (a) {
                    var b, c, d = a ? a.ownerDocument || a : O;
                    return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = G.documentElement, I = !y(G), (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), v.attributes = e(function (a) {
                        return a.className = "i", !a.getAttribute("className")
                    }), v.getElementsByTagName = e(function (a) {
                        return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length
                    }), v.getElementsByClassName = qa.test(G.getElementsByClassName), v.getById = e(function (a) {
                        return H.appendChild(a).id = N, !G.getElementsByName || !G.getElementsByName(N).length
                    }), v.getById ? (w.find.ID = function (a, b) {
                        if ("undefined" != typeof b.getElementById && I) {
                            var c = b.getElementById(a);
                            return c ? [c] : []
                        }
                    }, w.filter.ID = function (a) {
                        var b = a.replace(ua, va);
                        return function (a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete w.find.ID, w.filter.ID = function (a) {
                        var b = a.replace(ua, va);
                        return function (a) {
                            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                    } : function (a, b) {
                        var c, d = [], e = 0, f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                        if ("undefined" != typeof b.getElementsByClassName && I) return b.getElementsByClassName(a)
                    }, K = [], J = [], (v.qsa = qa.test(G.querySelectorAll)) && (e(function (a) {
                        H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                    }), e(function (a) {
                        var b = G.createElement("input");
                        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                    })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                        v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", fa)
                    }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function (a, b) {
                        if (b) for (; b = b.parentNode;) if (b === a) return !0;
                        return !1
                    }, U = b ? function (a, b) {
                        if (a === b) return E = !0, 0;
                        var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                    } : function (a, b) {
                        if (a === b) return E = !0, 0;
                        var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                        if (!e || !f) return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                        if (e === f) return g(a, b);
                        for (c = a; c = c.parentNode;) h.unshift(c);
                        for (c = b; c = c.parentNode;) i.unshift(c);
                        for (; h[d] === i[d];) d++;
                        return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0
                    }, G) : G
                }, b.matches = function (a, c) {
                    return b(a, null, null, c)
                }, b.matchesSelector = function (a, c) {
                    if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                        var d = L.call(a, c);
                        if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                    } catch (e) {
                    }
                    return b(c, G, null, [a]).length > 0
                }, b.contains = function (a, b) {
                    return (a.ownerDocument || a) !== G && F(a), M(a, b)
                }, b.attr = function (a, b) {
                    (a.ownerDocument || a) !== G && F(a);
                    var c = w.attrHandle[b.toLowerCase()],
                        d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                    return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                }, b.error = function (a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }, b.uniqueSort = function (a) {
                    var b, c = [], d = 0, e = 0;
                    if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                        for (; b = a[e++];) b === a[e] && (d = c.push(e));
                        for (; d--;) a.splice(c[d], 1)
                    }
                    return D = null, a
                }, x = b.getText = function (a) {
                    var b, c = "", d = 0, e = a.nodeType;
                    if (e) {
                        if (1 === e || 9 === e || 11 === e) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                        } else if (3 === e || 4 === e) return a.nodeValue
                    } else for (; b = a[d++];) c += x(b);
                    return c
                }, w = b.selectors = {
                    cacheLength: 50,
                    createPseudo: d,
                    match: na,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (a) {
                            return a[1] = a[1].replace(ua, va), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                        }, CHILD: function (a) {
                            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                        }, PSEUDO: function (a) {
                            var b, c = !a[6] && a[2];
                            return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (a) {
                            var b = a.replace(ua, va).toLowerCase();
                            return "*" === a ? function () {
                                return !0
                            } : function (a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                        }, CLASS: function (a) {
                            var b = R[a + " "];
                            return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
                                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                            })
                        }, ATTR: function (a, c, d) {
                            return function (e) {
                                var f = b.attr(e, a);
                                return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                            }
                        }, CHILD: function (a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                            return 1 === d && 0 === e ? function (a) {
                                return !!a.parentNode
                            } : function (b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                                    r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                                if (q) {
                                    if (f) {
                                        for (; p;) {
                                            for (m = b; m = m[p];) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                        for (m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();) if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [P, n, t];
                                            break
                                        }
                                    } else if (s && (m = b, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n), t === !1) for (; (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [P, t]), m !== b));) ;
                                    return t -= e, t === d || t % d === 0 && t / d >= 0
                                }
                            }
                        }, PSEUDO: function (a, c) {
                            var e,
                                f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                            return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                                for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                            }) : function (a) {
                                return f(a, 0, e)
                            }) : f
                        }
                    },
                    pseudos: {
                        not: d(function (a) {
                            var b = [], c = [], e = A(a.replace(ha, "$1"));
                            return e[N] ? d(function (a, b, c, d) {
                                for (var f, g = e(a, null, d, []), h = a.length; h--;) (f = g[h]) && (a[h] = !(b[h] = f))
                            }) : function (a, d, f) {
                                return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                            }
                        }), has: d(function (a) {
                            return function (c) {
                                return b(a, c).length > 0
                            }
                        }), contains: d(function (a) {
                            return a = a.replace(ua, va), function (b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                            }
                        }), lang: d(function (a) {
                            return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(), function (b) {
                                var c;
                                do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                        }), target: function (b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id
                        }, root: function (a) {
                            return a === H
                        }, focus: function (a) {
                            return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                        }, enabled: function (a) {
                            return a.disabled === !1
                        }, disabled: function (a) {
                            return a.disabled === !0
                        }, checked: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        }, selected: function (a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        }, empty: function (a) {
                            for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                            return !0
                        }, parent: function (a) {
                            return !w.pseudos.empty(a)
                        }, header: function (a) {
                            return pa.test(a.nodeName)
                        }, input: function (a) {
                            return oa.test(a.nodeName)
                        }, button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        }, text: function (a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                        }, first: j(function () {
                            return [0]
                        }), last: j(function (a, b) {
                            return [b - 1]
                        }), eq: j(function (a, b, c) {
                            return [c < 0 ? c + b : c]
                        }), even: j(function (a, b) {
                            for (var c = 0; c < b; c += 2) a.push(c);
                            return a
                        }), odd: j(function (a, b) {
                            for (var c = 1; c < b; c += 2) a.push(c);
                            return a
                        }), lt: j(function (a, b, c) {
                            for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                            return a
                        }), gt: j(function (a, b, c) {
                            for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                            return a
                        })
                    }
                }, w.pseudos.nth = w.pseudos.eq;
                for (u in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[u] = h(u);
                for (u in {submit: !0, reset: !0}) w.pseudos[u] = i(u);
                return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
                    var d, e, f, g, h, i, j, k = S[a + " "];
                    if (k) return c ? 0 : k.slice(0);
                    for (h = a, i = [], j = w.preFilter; h;) {
                        d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                            value: d,
                            type: e[0].replace(ha, " ")
                        }), h = h.slice(d.length));
                        for (g in w.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                            value: d,
                            type: g,
                            matches: e
                        }), h = h.slice(d.length));
                        if (!d) break
                    }
                    return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
                }, A = b.compile = function (a, b) {
                    var c, d = [], e = [], f = T[a + " "];
                    if (!f) {
                        for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                        f = T(a, t(e, d)), f.selector = a
                    }
                    return f
                }, B = b.select = function (a, b, c, d) {
                    var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
                    if (c = c || [], 1 === l.length) {
                        if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                            if (b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0], !b) return c;
                            j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                        }
                        for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);) if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                            break
                        }
                    }
                    return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b), c
                }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
                    return 1 & a.compareDocumentPosition(G.createElement("div"))
                }), e(function (a) {
                    return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
                }) || f("type|href|height|width", function (a, b, c) {
                    if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }), v.attributes && e(function (a) {
                    return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                }) || f("value", function (a, b, c) {
                    if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
                }), e(function (a) {
                    return null == a.getAttribute("disabled")
                }) || f(ba, function (a, b, c) {
                    var d;
                    if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                }), b
            }(a);
            fa.find = ka, fa.expr = ka.selectors, fa.expr[":"] = fa.expr.pseudos, fa.uniqueSort = fa.unique = ka.uniqueSort, fa.text = ka.getText, fa.isXMLDoc = ka.isXML, fa.contains = ka.contains;
            var la = function (a, b, c) {
                for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
                    if (e && fa(a).is(c)) break;
                    d.push(a)
                }
                return d
            }, ma = function (a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }, na = fa.expr.match.needsContext, oa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, pa = /^.[^:#\[\.,]*$/;
            fa.filter = function (a, b, c) {
                var d = b[0];
                return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function (a) {
                    return 1 === a.nodeType
                }))
            }, fa.fn.extend({
                find: function (a) {
                    var b, c = this.length, d = [], e = this;
                    if ("string" != typeof a) return this.pushStack(fa(a).filter(function () {
                        for (b = 0; b < c; b++) if (fa.contains(e[b], this)) return !0
                    }));
                    for (b = 0; b < c; b++) fa.find(a, e[b], d);
                    return d = this.pushStack(c > 1 ? fa.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
                }, filter: function (a) {
                    return this.pushStack(d(this, a || [], !1))
                }, not: function (a) {
                    return this.pushStack(d(this, a || [], !0))
                }, is: function (a) {
                    return !!d(this, "string" == typeof a && na.test(a) ? fa(a) : a || [], !1).length
                }
            });
            var qa, ra = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, sa = fa.fn.init = function (a, b, c) {
                var d, e;
                if (!a) return this;
                if (c = c || qa, "string" == typeof a) {
                    if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ra.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (d[1]) {
                        if (b = b instanceof fa ? b[0] : b, fa.merge(this, fa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : X, !0)), oa.test(d[1]) && fa.isPlainObject(b)) for (d in b) fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                        return this
                    }
                    return e = X.getElementById(d[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = X, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
            };
            sa.prototype = fa.fn, qa = fa(X);
            var ta = /^(?:parents|prev(?:Until|All))/, ua = {children: !0, contents: !0, next: !0, prev: !0};
            fa.fn.extend({
                has: function (a) {
                    var b = fa(a, this), c = b.length;
                    return this.filter(function () {
                        for (var a = 0; a < c; a++) if (fa.contains(this, b[a])) return !0
                    })
                }, closest: function (a, b) {
                    for (var c, d = 0, e = this.length, f = [], g = na.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                    return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f)
                }, index: function (a) {
                    return a ? "string" == typeof a ? _.call(fa(a), this[0]) : _.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (a, b) {
                    return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))))
                }, addBack: function (a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }
            }), fa.each({
                parent: function (a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null
                }, parents: function (a) {
                    return la(a, "parentNode")
                }, parentsUntil: function (a, b, c) {
                    return la(a, "parentNode", c)
                }, next: function (a) {
                    return e(a, "nextSibling")
                }, prev: function (a) {
                    return e(a, "previousSibling")
                }, nextAll: function (a) {
                    return la(a, "nextSibling")
                }, prevAll: function (a) {
                    return la(a, "previousSibling")
                }, nextUntil: function (a, b, c) {
                    return la(a, "nextSibling", c)
                }, prevUntil: function (a, b, c) {
                    return la(a, "previousSibling", c)
                }, siblings: function (a) {
                    return ma((a.parentNode || {}).firstChild, a)
                }, children: function (a) {
                    return ma(a.firstChild)
                }, contents: function (a) {
                    return a.contentDocument || fa.merge([], a.childNodes)
                }
            }, function (a, b) {
                fa.fn[a] = function (c, d) {
                    var e = fa.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (ua[a] || fa.uniqueSort(e), ta.test(a) && e.reverse()), this.pushStack(e)
                }
            });
            var va = /\S+/g;
            fa.Callbacks = function (a) {
                a = "string" == typeof a ? f(a) : fa.extend({}, a);
                var b, c, d, e, g = [], h = [], i = -1, j = function () {
                    for (e = a.once, d = b = !0; h.length; i = -1) for (c = h.shift(); ++i < g.length;) g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = g.length, c = !1);
                    a.memory || (c = !1), b = !1, e && (g = c ? [] : "")
                }, k = {
                    add: function () {
                        return g && (c && !b && (i = g.length - 1, h.push(c)), function d(b) {
                            fa.each(b, function (b, c) {
                                fa.isFunction(c) ? a.unique && k.has(c) || g.push(c) : c && c.length && "string" !== fa.type(c) && d(c)
                            })
                        }(arguments), c && !b && j()), this
                    }, remove: function () {
                        return fa.each(arguments, function (a, b) {
                            for (var c; (c = fa.inArray(b, g, c)) > -1;) g.splice(c, 1), c <= i && i--
                        }), this
                    }, has: function (a) {
                        return a ? fa.inArray(a, g) > -1 : g.length > 0
                    }, empty: function () {
                        return g && (g = []), this
                    }, disable: function () {
                        return e = h = [], g = c = "", this
                    }, disabled: function () {
                        return !g
                    }, lock: function () {
                        return e = h = [], c || (g = c = ""), this
                    }, locked: function () {
                        return !!e
                    }, fireWith: function (a, c) {
                        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                    }, fire: function () {
                        return k.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!d
                    }
                };
                return k
            }, fa.extend({
                Deferred: function (a) {
                    var b = [["resolve", "done", fa.Callbacks("once memory"), "resolved"], ["reject", "fail", fa.Callbacks("once memory"), "rejected"], ["notify", "progress", fa.Callbacks("memory")]],
                        c = "pending", d = {
                            state: function () {
                                return c
                            }, always: function () {
                                return e.done(arguments).fail(arguments), this
                            }, then: function () {
                                var a = arguments;
                                return fa.Deferred(function (c) {
                                    fa.each(b, function (b, f) {
                                        var g = fa.isFunction(a[b]) && a[b];
                                        e[f[1]](function () {
                                            var a = g && g.apply(this, arguments);
                                            a && fa.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                        })
                                    }), a = null
                                }).promise()
                            }, promise: function (a) {
                                return null != a ? fa.extend(a, d) : d
                            }
                        }, e = {};
                    return d.pipe = d.then, fa.each(b, function (a, f) {
                        var g = f[2], h = f[3];
                        d[f[1]] = g.add, h && g.add(function () {
                            c = h
                        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                            return e[f[0] + "With"](this === e ? d : this, arguments), this
                        }, e[f[0] + "With"] = g.fireWith
                    }), d.promise(e), a && a.call(e, e), e
                }, when: function (a) {
                    var b, c, d, e = 0, f = Y.call(arguments), g = f.length,
                        h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fa.Deferred(),
                        j = function (a, c, d) {
                            return function (e) {
                                c[a] = this, d[a] = arguments.length > 1 ? Y.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                            }
                        };
                    if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); e < g; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
                    return h || i.resolveWith(d, f), i.promise()
                }
            });
            var wa;
            fa.fn.ready = function (a) {
                return fa.ready.promise().done(a), this
            }, fa.extend({
                isReady: !1, readyWait: 1, holdReady: function (a) {
                    a ? fa.readyWait++ : fa.ready(!0)
                }, ready: function (a) {
                    (a === !0 ? --fa.readyWait : fa.isReady) || (fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (wa.resolveWith(X, [fa]), fa.fn.triggerHandler && (fa(X).triggerHandler("ready"), fa(X).off("ready"))))
                }
            }), fa.ready.promise = function (b) {
                return wa || (wa = fa.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? a.setTimeout(fa.ready) : (X.addEventListener("DOMContentLoaded", g), a.addEventListener("load", g))), wa.promise(b)
            }, fa.ready.promise();
            var xa = function (a, b, c, d, e, f, g) {
                var h = 0, i = a.length, j = null == c;
                if ("object" === fa.type(c)) {
                    e = !0;
                    for (h in c) xa(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, fa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(fa(a), c)
                })), b)) for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            }, ya = function (a) {
                return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
            };
            h.uid = 1, h.prototype = {
                register: function (a, b) {
                    var c = b || {};
                    return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                        value: c,
                        writable: !0,
                        configurable: !0
                    }), a[this.expando]
                }, cache: function (a) {
                    if (!ya(a)) return {};
                    var b = a[this.expando];
                    return b || (b = {}, ya(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                        value: b,
                        configurable: !0
                    }))), b
                }, set: function (a, b, c) {
                    var d, e = this.cache(a);
                    if ("string" == typeof b) e[b] = c; else for (d in b) e[d] = b[d];
                    return e
                }, get: function (a, b) {
                    return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
                }, access: function (a, b, c) {
                    var d;
                    return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, fa.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
                }, remove: function (a, b) {
                    var c, d, e, f = a[this.expando];
                    if (void 0 !== f) {
                        if (void 0 === b) this.register(a); else {
                            fa.isArray(b) ? d = b.concat(b.map(fa.camelCase)) : (e = fa.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(va) || [])), c = d.length;
                            for (; c--;) delete f[d[c]]
                        }
                        (void 0 === b || fa.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                    }
                }, hasData: function (a) {
                    var b = a[this.expando];
                    return void 0 !== b && !fa.isEmptyObject(b)
                }
            };
            var za = new h, Aa = new h, Ba = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ca = /[A-Z]/g;
            fa.extend({
                hasData: function (a) {
                    return Aa.hasData(a) || za.hasData(a)
                }, data: function (a, b, c) {
                    return Aa.access(a, b, c)
                }, removeData: function (a, b) {
                    Aa.remove(a, b)
                }, _data: function (a, b, c) {
                    return za.access(a, b, c)
                }, _removeData: function (a, b) {
                    za.remove(a, b)
                }
            }), fa.fn.extend({
                data: function (a, b) {
                    var c, d, e, f = this[0], g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = Aa.get(f), 1 === f.nodeType && !za.get(f, "hasDataAttrs"))) {
                            for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)), i(f, d, e[d])));
                            za.set(f, "hasDataAttrs", !0)
                        }
                        return e
                    }
                    return "object" == typeof a ? this.each(function () {
                        Aa.set(this, a)
                    }) : xa(this, function (b) {
                        var c, d;
                        if (f && void 0 === b) {
                            if (c = Aa.get(f, a) || Aa.get(f, a.replace(Ca, "-$&").toLowerCase()), void 0 !== c) return c;
                            if (d = fa.camelCase(a), c = Aa.get(f, d), void 0 !== c) return c;
                            if (c = i(f, d, void 0), void 0 !== c) return c
                        } else d = fa.camelCase(a), this.each(function () {
                            var c = Aa.get(this, d);
                            Aa.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && Aa.set(this, a, b)
                        })
                    }, null, b, arguments.length > 1, null, !0)
                }, removeData: function (a) {
                    return this.each(function () {
                        Aa.remove(this, a)
                    })
                }
            }), fa.extend({
                queue: function (a, b, c) {
                    var d;
                    if (a) return b = (b || "fx") + "queue", d = za.get(a, b), c && (!d || fa.isArray(c) ? d = za.access(a, b, fa.makeArray(c)) : d.push(c)), d || []
                }, dequeue: function (a, b) {
                    b = b || "fx";
                    var c = fa.queue(a, b), d = c.length, e = c.shift(), f = fa._queueHooks(a, b), g = function () {
                        fa.dequeue(a, b)
                    };
                    "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
                }, _queueHooks: function (a, b) {
                    var c = b + "queueHooks";
                    return za.get(a, c) || za.access(a, c, {
                        empty: fa.Callbacks("once memory").add(function () {
                            za.remove(a, [b + "queue", c])
                        })
                    })
                }
            }), fa.fn.extend({
                queue: function (a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                        var c = fa.queue(this, a, b);
                        fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a)
                    })
                }, dequeue: function (a) {
                    return this.each(function () {
                        fa.dequeue(this, a)
                    })
                }, clearQueue: function (a) {
                    return this.queue(a || "fx", [])
                }, promise: function (a, b) {
                    var c, d = 1, e = fa.Deferred(), f = this, g = this.length, h = function () {
                        --d || e.resolveWith(f, [f])
                    };
                    for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = za.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                    return h(), e.promise(b)
                }
            });
            var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Ea = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"), Fa = ["Top", "Right", "Bottom", "Left"],
                Ga = function (a, b) {
                    return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
                }, Ha = /^(?:checkbox|radio)$/i, Ia = /<([\w:-]+)/, Ja = /^$|\/(?:java|ecma)script/i, Ka = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Ka.optgroup = Ka.option, Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead, Ka.th = Ka.td;
            var La = /<|&#?\w+;/;
            !function () {
                var a = X.createDocumentFragment(), b = a.appendChild(X.createElement("div")),
                    c = X.createElement("input");
                c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
            }();
            var Ma = /^key/, Na = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Oa = /^([^.]*)(?:\.(.+)|)/;
            fa.event = {
                global: {},
                add: function (a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, n, o, p, q = za.get(a);
                    if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = fa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                        return "undefined" != typeof fa && fa.event.triggered !== b.type ? fa.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(va) || [""], j = b.length; j--;) h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = fa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = fa.event.special[n] || {}, k = fa.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && fa.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), fa.event.global[n] = !0)
                },
                remove: function (a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, n, o, p, q = za.hasData(a) && za.get(a);
                    if (q && (i = q.events)) {
                        for (b = (b || "").match(va) || [""], j = b.length; j--;) if (h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete i[n])
                        } else for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
                        fa.isEmptyObject(i) && za.remove(a, "handle events")
                    }
                },
                dispatch: function (a) {
                    a = fa.event.fix(a);
                    var b, c, d, e, f, g = [], h = Y.call(arguments), i = (za.get(this, "events") || {})[a.type] || [],
                        j = fa.event.special[a.type] || {};
                    if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                        for (g = fa.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();) for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, a.data = f.data, d = ((fa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                        return j.postDispatch && j.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function (a, b) {
                    var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                    if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? fa(e, this).index(i) > -1 : fa.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({elem: i, handlers: d})
                    }
                    return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (a, b) {
                        var c, d, e, f = b.button;
                        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || X, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                    }
                },
                fix: function (a) {
                    if (a[fa.expando]) return a;
                    var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                    for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                    return a.target || (a.target = X), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            if (this !== p() && this.focus) return this.focus(), !1
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            if (this === p() && this.blur) return this.blur(), !1
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && fa.nodeName(this, "input")) return this.click(), !1
                        }, _default: function (a) {
                            return fa.nodeName(a.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (a) {
                            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                        }
                    }
                }
            }, fa.removeEvent = function (a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c)
            }, fa.Event = function (a, b) {
                return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? n : o) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void (this[fa.expando] = !0)) : new fa.Event(a, b)
            }, fa.Event.prototype = {
                constructor: fa.Event,
                isDefaultPrevented: o,
                isPropagationStopped: o,
                isImmediatePropagationStopped: o,
                isSimulated: !1,
                preventDefault: function () {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = n, a && !this.isSimulated && a.preventDefault()
                },
                stopPropagation: function () {
                    var a = this.originalEvent;
                    this.isPropagationStopped = n, a && !this.isSimulated && a.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = n, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
                }
            }, fa.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (a, b) {
                fa.event.special[a] = {
                    delegateType: b, bindType: b, handle: function (a) {
                        var c, d = this, e = a.relatedTarget, f = a.handleObj;
                        return e && (e === d || fa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                    }
                }
            }), fa.fn.extend({
                on: function (a, b, c, d) {
                    return q(this, a, b, c, d)
                }, one: function (a, b, c, d) {
                    return q(this, a, b, c, d, 1)
                }, off: function (a, b, c) {
                    var d, e;
                    if (a && a.preventDefault && a.handleObj) return d = a.handleObj, fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                    if ("object" == typeof a) {
                        for (e in a) this.off(e, b, a[e]);
                        return this
                    }
                    return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = o), this.each(function () {
                        fa.event.remove(this, a, c, b)
                    })
                }
            });
            var Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                Qa = /<script|<style|<link/i, Ra = /checked\s*(?:[^=]|=\s*.checked.)/i, Sa = /^true\/(.*)/,
                Ta = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            fa.extend({
                htmlPrefilter: function (a) {
                    return a.replace(Pa, "<$1></$2>")
                }, clone: function (a, b, c) {
                    var d, e, f, g, h = a.cloneNode(!0), i = fa.contains(a.ownerDocument, a);
                    if (!(da.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a))) for (g = k(h), f = k(a), d = 0, e = f.length; d < e; d++) v(f[d], g[d]);
                    if (b) if (c) for (f = f || k(a), g = g || k(h), d = 0, e = f.length; d < e; d++) u(f[d], g[d]); else u(a, h);
                    return g = k(h, "script"), g.length > 0 && l(g, !i && k(a, "script")), h
                }, cleanData: function (a) {
                    for (var b, c, d, e = fa.event.special, f = 0; void 0 !== (c = a[f]); f++) if (ya(c)) {
                        if (b = c[za.expando]) {
                            if (b.events) for (d in b.events) e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
                            c[za.expando] = void 0
                        }
                        c[Aa.expando] && (c[Aa.expando] = void 0)
                    }
                }
            }), fa.fn.extend({
                domManip: w, detach: function (a) {
                    return x(this, a, !0)
                }, remove: function (a) {
                    return x(this, a)
                }, text: function (a) {
                    return xa(this, function (a) {
                        return void 0 === a ? fa.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                        })
                    }, null, a, arguments.length)
                }, append: function () {
                    return w(this, arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = r(this, a);
                            b.appendChild(a)
                        }
                    })
                }, prepend: function () {
                    return w(this, arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = r(this, a);
                            b.insertBefore(a, b.firstChild)
                        }
                    })
                }, before: function () {
                    return w(this, arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                }, after: function () {
                    return w(this, arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                    })
                }, empty: function () {
                    for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fa.cleanData(k(a, !1)), a.textContent = "");
                    return this
                }, clone: function (a, b) {
                    return a = null != a && a, b = null == b ? a : b, this.map(function () {
                        return fa.clone(this, a, b)
                    })
                }, html: function (a) {
                    return xa(this, function (a) {
                        var b = this[0] || {}, c = 0, d = this.length;
                        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                        if ("string" == typeof a && !Qa.test(a) && !Ka[(Ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = fa.htmlPrefilter(a);
                            try {
                                for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (fa.cleanData(k(b, !1)), b.innerHTML = a);
                                b = 0
                            } catch (e) {
                            }
                        }
                        b && this.empty().append(a)
                    }, null, a, arguments.length)
                }, replaceWith: function () {
                    var a = [];
                    return w(this, arguments, function (b) {
                        var c = this.parentNode;
                        fa.inArray(this, a) < 0 && (fa.cleanData(k(this)), c && c.replaceChild(b, this))
                    }, a)
                }
            }), fa.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (a, b) {
                fa.fn[a] = function (a) {
                    for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), fa(e[g])[b](c), $.apply(d, c.get());
                    return this.pushStack(d)
                }
            });
            var Ua, Va = {HTML: "block", BODY: "block"}, Wa = /^margin/,
                Xa = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"), Ya = function (b) {
                    var c = b.ownerDocument.defaultView;
                    return c && c.opener || (c = a), c.getComputedStyle(b)
                }, Za = function (a, b, c, d) {
                    var e, f, g = {};
                    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                    e = c.apply(a, d || []);
                    for (f in b) a.style[f] = g[f];
                    return e
                }, $a = X.documentElement;
            !function () {
                function b() {
                    h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", $a.appendChild(g);
                    var b = a.getComputedStyle(h);
                    c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, $a.removeChild(g)
                }

                var c, d, e, f, g = X.createElement("div"), h = X.createElement("div");
                h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), fa.extend(da, {
                    pixelPosition: function () {
                        return b(), c
                    }, boxSizingReliable: function () {
                        return null == d && b(), d
                    }, pixelMarginRight: function () {
                        return null == d && b(), e
                    }, reliableMarginLeft: function () {
                        return null == d && b(), f
                    }, reliableMarginRight: function () {
                        var b, c = h.appendChild(X.createElement("div"));
                        return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", $a.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), $a.removeChild(g), h.removeChild(c), b
                    }
                }))
            }();
            var _a = /^(none|table(?!-c[ea]).+)/, ab = {position: "absolute", visibility: "hidden", display: "block"},
                bb = {letterSpacing: "0", fontWeight: "400"}, cb = ["Webkit", "O", "Moz", "ms"],
                db = X.createElement("div").style;
            fa.extend({
                cssHooks: {
                    opacity: {
                        get: function (a, b) {
                            if (b) {
                                var c = A(a, "opacity");
                                return "" === c ? "1" : c
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {"float": "cssFloat"},
                style: function (a, b, c, d) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var e, f, g, h = fa.camelCase(b), i = a.style;
                        return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ea.exec(c)) && e[1] && (c = j(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (fa.cssNumber[h] ? "" : "px")), da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
                    }
                },
                css: function (a, b, c, d) {
                    var e, f, g, h = fa.camelCase(b);
                    return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = A(a, b, d)), "normal" === e && b in bb && (e = bb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
                }
            }), fa.each(["height", "width"], function (a, b) {
                fa.cssHooks[b] = {
                    get: function (a, c, d) {
                        if (c) return _a.test(fa.css(a, "display")) && 0 === a.offsetWidth ? Za(a, ab, function () {
                            return F(a, b, d)
                        }) : F(a, b, d)
                    }, set: function (a, c, d) {
                        var e, f = d && Ya(a), g = d && E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
                        return g && (e = Ea.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = fa.css(a, b)), D(a, c, g)
                    }
                }
            }), fa.cssHooks.marginLeft = B(da.reliableMarginLeft, function (a, b) {
                if (b) return (parseFloat(A(a, "marginLeft")) || a.getBoundingClientRect().left - Za(a, {marginLeft: 0}, function () {
                    return a.getBoundingClientRect().left
                })) + "px"
            }), fa.cssHooks.marginRight = B(da.reliableMarginRight, function (a, b) {
                if (b) return Za(a, {display: "inline-block"}, A, [a, "marginRight"])
            }), fa.each({margin: "", padding: "", border: "Width"}, function (a, b) {
                fa.cssHooks[a + b] = {
                    expand: function (c) {
                        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + Fa[d] + b] = f[d] || f[d - 2] || f[0];
                        return e
                    }
                }, Wa.test(a) || (fa.cssHooks[a + b].set = D)
            }), fa.fn.extend({
                css: function (a, b) {
                    return xa(this, function (a, b, c) {
                        var d, e, f = {}, g = 0;
                        if (fa.isArray(b)) {
                            for (d = Ya(a), e = b.length; g < e; g++) f[b[g]] = fa.css(a, b[g], !1, d);
                            return f
                        }
                        return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b)
                    }, a, b, arguments.length > 1)
                }, show: function () {
                    return G(this, !0)
                }, hide: function () {
                    return G(this)
                }, toggle: function (a) {
                    return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                        Ga(this) ? fa(this).show() : fa(this).hide()
                    })
                }
            }), fa.Tween = H, H.prototype = {
                constructor: H, init: function (a, b, c, d, e, f) {
                    this.elem = a, this.prop = c, this.easing = e || fa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
                }, cur: function () {
                    var a = H.propHooks[this.prop];
                    return a && a.get ? a.get(this) : H.propHooks._default.get(this)
                }, run: function (a) {
                    var b, c = H.propHooks[this.prop];
                    return this.options.duration ? this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : H.propHooks._default.set(this), this
                }
            }, H.prototype.init.prototype = H.prototype, H.propHooks = {
                _default: {
                    get: function (a) {
                        var b;
                        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                    }, set: function (a) {
                        fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[fa.cssProps[a.prop]] && !fa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : fa.style(a.elem, a.prop, a.now + a.unit)
                    }
                }
            }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
                set: function (a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            }, fa.easing = {
                linear: function (a) {
                    return a
                }, swing: function (a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                }, _default: "swing"
            }, fa.fx = H.prototype.init, fa.fx.step = {};
            var eb, fb, gb = /^(?:toggle|show|hide)$/, hb = /queueHooks$/;
            fa.Animation = fa.extend(N, {
                tweeners: {
                    "*": [function (a, b) {
                        var c = this.createTween(a, b);
                        return j(c.elem, a, Ea.exec(b), c), c
                    }]
                }, tweener: function (a, b) {
                    fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(va);
                    for (var c, d = 0, e = a.length; d < e; d++) c = a[d], N.tweeners[c] = N.tweeners[c] || [], N.tweeners[c].unshift(b)
                }, prefilters: [L], prefilter: function (a, b) {
                    b ? N.prefilters.unshift(a) : N.prefilters.push(a)
                }
            }), fa.speed = function (a, b, c) {
                var d = a && "object" == typeof a ? fa.extend({}, a) : {
                    complete: c || !c && b || fa.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !fa.isFunction(b) && b
                };
                return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                    fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
                }, d
            }, fa.fn.extend({
                fadeTo: function (a, b, c, d) {
                    return this.filter(Ga).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
                }, animate: function (a, b, c, d) {
                    var e = fa.isEmptyObject(a), f = fa.speed(b, c, d), g = function () {
                        var b = N(this, fa.extend({}, a), f);
                        (e || za.get(this, "finish")) && b.stop(!0)
                    };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                }, stop: function (a, b, c) {
                    var d = function (a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                        var b = !0, e = null != a && a + "queueHooks", f = fa.timers, g = za.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && hb.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        !b && c || fa.dequeue(this, a)
                    })
                }, finish: function (a) {
                    return a !== !1 && (a = a || "fx"), this.each(function () {
                        var b, c = za.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fa.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), fa.each(["toggle", "show", "hide"], function (a, b) {
                var c = fa.fn[b];
                fa.fn[b] = function (a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(J(b, !0), a, d, e)
                }
            }), fa.each({
                slideDown: J("show"),
                slideUp: J("hide"),
                slideToggle: J("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (a, b) {
                fa.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), fa.timers = [], fa.fx.tick = function () {
                var a, b = 0, c = fa.timers;
                for (eb = fa.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || fa.fx.stop(), eb = void 0
            }, fa.fx.timer = function (a) {
                fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop()
            }, fa.fx.interval = 13, fa.fx.start = function () {
                fb || (fb = a.setInterval(fa.fx.tick, fa.fx.interval))
            }, fa.fx.stop = function () {
                a.clearInterval(fb), fb = null
            }, fa.fx.speeds = {slow: 600, fast: 200, _default: 400}, fa.fn.delay = function (b, c) {
                return b = fa.fx ? fa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e)
                    }
                })
            }, function () {
                var a = X.createElement("input"), b = X.createElement("select"),
                    c = b.appendChild(X.createElement("option"));
                a.type = "checkbox", da.checkOn = "" !== a.value, da.optSelected = c.selected, b.disabled = !0, da.optDisabled = !c.disabled, a = X.createElement("input"), a.value = "t", a.type = "radio", da.radioValue = "t" === a.value
            }();
            var ib, jb = fa.expr.attrHandle;
            fa.fn.extend({
                attr: function (a, b) {
                    return xa(this, fa.attr, a, b, arguments.length > 1)
                }, removeAttr: function (a) {
                    return this.each(function () {
                        fa.removeAttr(this, a)
                    })
                }
            }), fa.extend({
                attr: function (a, b, c) {
                    var d, e, f = a.nodeType;
                    if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(), e = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void fa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = fa.find.attr(a, b), null == d ? void 0 : d))
                }, attrHooks: {
                    type: {
                        set: function (a, b) {
                            if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b), c && (a.value = c), b
                            }
                        }
                    }
                }, removeAttr: function (a, b) {
                    var c, d, e = 0, f = b && b.match(va);
                    if (f && 1 === a.nodeType) for (; c = f[e++];) d = fa.propFix[c] || c, fa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
                }
            }), ib = {
                set: function (a, b, c) {
                    return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c
                }
            }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function (a, b) {
                var c = jb[b] || fa.find.attr;
                jb[b] = function (a, b, d) {
                    var e, f;
                    return d || (f = jb[b], jb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, jb[b] = f), e
                }
            });
            var kb = /^(?:input|select|textarea|button)$/i, lb = /^(?:a|area)$/i;
            fa.fn.extend({
                prop: function (a, b) {
                    return xa(this, fa.prop, a, b, arguments.length > 1)
                }, removeProp: function (a) {
                    return this.each(function () {
                        delete this[fa.propFix[a] || a]
                    })
                }
            }), fa.extend({
                prop: function (a, b, c) {
                    var d, e, f = a.nodeType;
                    if (3 !== f && 8 !== f && 2 !== f) return 1 === f && fa.isXMLDoc(a) || (b = fa.propFix[b] || b, e = fa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                }, propHooks: {
                    tabIndex: {
                        get: function (a) {
                            var b = fa.find.attr(a, "tabindex");
                            return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                        }
                    }
                }, propFix: {"for": "htmlFor", "class": "className"}
            }), da.optSelected || (fa.propHooks.selected = {
                get: function (a) {
                    var b = a.parentNode;
                    return b && b.parentNode && b.parentNode.selectedIndex, null
                }, set: function (a) {
                    var b = a.parentNode;
                    b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
                }
            }), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                fa.propFix[this.toLowerCase()] = this
            });
            var mb = /[\t\r\n\f]/g;
            fa.fn.extend({
                addClass: function (a) {
                    var b, c, d, e, f, g, h, i = 0;
                    if (fa.isFunction(a)) return this.each(function (b) {
                        fa(this).addClass(a.call(this, b, O(this)))
                    });
                    if ("string" == typeof a && a) for (b = a.match(va) || []; c = this[i++];) if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = fa.trim(d), e !== h && c.setAttribute("class", h)
                    }
                    return this
                }, removeClass: function (a) {
                    var b, c, d, e, f, g, h, i = 0;
                    if (fa.isFunction(a)) return this.each(function (b) {
                        fa(this).removeClass(a.call(this, b, O(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof a && a) for (b = a.match(va) || []; c = this[i++];) if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                        for (g = 0; f = b[g++];) for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = fa.trim(d), e !== h && c.setAttribute("class", h)
                    }
                    return this
                }, toggleClass: function (a, b) {
                    var c = typeof a;
                    return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function (c) {
                        fa(this).toggleClass(a.call(this, c, O(this), b), b)
                    }) : this.each(function () {
                        var b, d, e, f;
                        if ("string" === c) for (d = 0, e = fa(this), f = a.match(va) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else void 0 !== a && "boolean" !== c || (b = O(this), b && za.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : za.get(this, "__className__") || ""))
                    })
                }, hasClass: function (a) {
                    var b, c, d = 0;
                    for (b = " " + a + " "; c = this[d++];) if (1 === c.nodeType && (" " + O(c) + " ").replace(mb, " ").indexOf(b) > -1) return !0;
                    return !1
                }
            });
            var nb = /\r/g, ob = /[\x20\t\r\n\f]+/g;
            fa.fn.extend({
                val: function (a) {
                    var b, c, d, e = this[0];
                    {
                        if (arguments.length) return d = fa.isFunction(a), this.each(function (c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fa.isArray(e) && (e = fa.map(e, function (a) {
                                return null == a ? "" : a + ""
                            })), b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        });
                        if (e) return b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c)
                    }
                }
            }), fa.extend({
                valHooks: {
                    option: {
                        get: function (a) {
                            var b = fa.find.attr(a, "value");
                            return null != b ? b : fa.trim(fa.text(a)).replace(ob, " ")
                        }
                    }, select: {
                        get: function (a) {
                            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++) if (c = d[i], (c.selected || i === e) && (da.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup"))) {
                                if (b = fa(c).val(), f) return b;
                                g.push(b)
                            }
                            return g
                        }, set: function (a, b) {
                            for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
                            return c || (a.selectedIndex = -1), f
                        }
                    }
                }
            }), fa.each(["radio", "checkbox"], function () {
                fa.valHooks[this] = {
                    set: function (a, b) {
                        if (fa.isArray(b)) return a.checked = fa.inArray(fa(a).val(), b) > -1
                    }
                }, da.checkOn || (fa.valHooks[this].get = function (a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                })
            });
            var pb = /^(?:focusinfocus|focusoutblur)$/;
            fa.extend(fa.event, {
                trigger: function (b, c, d, e) {
                    var f, g, h, i, j, k, l, m = [d || X], n = ca.call(b, "type") ? b.type : b,
                        o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
                    if (g = h = d = d || X, 3 !== d.nodeType && 8 !== d.nodeType && !pb.test(n + fa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[fa.expando] ? b : new fa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : fa.makeArray(c, [b]), l = fa.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                        if (!e && !l.noBubble && !fa.isWindow(d)) {
                            for (i = l.delegateType || n, pb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                            h === (d.ownerDocument || X) && m.push(h.defaultView || h.parentWindow || a)
                        }
                        for (f = 0; (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (za.get(g, "events") || {})[b.type] && za.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && ya(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                        return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !ya(d) || j && fa.isFunction(d[n]) && !fa.isWindow(d) && (h = d[j], h && (d[j] = null), fa.event.triggered = n, d[n](), fa.event.triggered = void 0, h && (d[j] = h)), b.result
                    }
                }, simulate: function (a, b, c) {
                    var d = fa.extend(new fa.Event, c, {type: a, isSimulated: !0});
                    fa.event.trigger(d, null, b)
                }
            }), fa.fn.extend({
                trigger: function (a, b) {
                    return this.each(function () {
                        fa.event.trigger(a, b, this)
                    })
                }, triggerHandler: function (a, b) {
                    var c = this[0];
                    if (c) return fa.event.trigger(a, b, c, !0)
                }
            }), fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
                fa.fn[b] = function (a, c) {
                    return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                }
            }), fa.fn.extend({
                hover: function (a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }
            }), da.focusin = "onfocusin" in a, da.focusin || fa.each({
                focus: "focusin",
                blur: "focusout"
            }, function (a, b) {
                var c = function (a) {
                    fa.event.simulate(b, a.target, fa.event.fix(a))
                };
                fa.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this, e = za.access(d, b);
                        e || d.addEventListener(a, c, !0), za.access(d, b, (e || 0) + 1)
                    }, teardown: function () {
                        var d = this.ownerDocument || this, e = za.access(d, b) - 1;
                        e ? za.access(d, b, e) : (d.removeEventListener(a, c, !0), za.remove(d, b))
                    }
                }
            });
            var qb = a.location, rb = fa.now(), sb = /\?/;
            fa.parseJSON = function (a) {
                return JSON.parse(a + "")
            }, fa.parseXML = function (b) {
                var c;
                if (!b || "string" != typeof b) return null;
                try {
                    c = (new a.DOMParser).parseFromString(b, "text/xml")
                } catch (d) {
                    c = void 0
                }
                return c && !c.getElementsByTagName("parsererror").length || fa.error("Invalid XML: " + b), c
            };
            var tb = /#.*$/, ub = /([?&])_=[^&]*/, vb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                wb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, xb = /^(?:GET|HEAD)$/, yb = /^\/\//,
                zb = {}, Ab = {}, Bb = "*/".concat("*"), Cb = X.createElement("a");
            Cb.href = qb.href, fa.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: qb.href,
                    type: "GET",
                    isLocal: wb.test(qb.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Bb,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": fa.parseJSON, "text xml": fa.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (a, b) {
                    return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a)
                },
                ajaxPrefilter: P(zb),
                ajaxTransport: P(Ab),
                ajax: function (b, c) {
                    function d(b, c, d, h) {
                        var j, l, s, t, v, x = c;
                        2 !== u && (u = 2, i && a.clearTimeout(i), e = void 0, g = h || "", w.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (t = S(m, w, d)), t = T(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fa.etag[f] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, !b && x || (x = "error", b < 0 && (b = 0))), w.status = b, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = void 0, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")))
                    }

                    "object" == typeof b && (c = b, b = void 0), c = c || {};
                    var e, f, g, h, i, j, k, l, m = fa.ajaxSetup({}, c), n = m.context || m,
                        o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event, p = fa.Deferred(),
                        q = fa.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled",
                        w = {
                            readyState: 0, getResponseHeader: function (a) {
                                var b;
                                if (2 === u) {
                                    if (!h) for (h = {}; b = vb.exec(g);) h[b[1].toLowerCase()] = b[2];
                                    b = h[a.toLowerCase()]
                                }
                                return null == b ? null : b
                            }, getAllResponseHeaders: function () {
                                return 2 === u ? g : null
                            }, setRequestHeader: function (a, b) {
                                var c = a.toLowerCase();
                                return u || (a = t[c] = t[c] || a, s[a] = b), this
                            }, overrideMimeType: function (a) {
                                return u || (m.mimeType = a), this
                            }, statusCode: function (a) {
                                var b;
                                if (a) if (u < 2) for (b in a) r[b] = [r[b], a[b]]; else w.always(a[w.status]);
                                return this
                            }, abort: function (a) {
                                var b = a || v;
                                return e && e.abort(b), d(0, b), this
                            }
                        };
                    if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || qb.href) + "").replace(tb, "").replace(yb, qb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(va) || [""], null == m.crossDomain) {
                        j = X.createElement("a");
                        try {
                            j.href = m.url, j.href = j.href, m.crossDomain = Cb.protocol + "//" + Cb.host != j.protocol + "//" + j.host
                        } catch (x) {
                            m.crossDomain = !0
                        }
                    }
                    if (m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), Q(zb, m, c, w), 2 === u) return w;
                    k = fa.event && m.global, k && 0 === fa.active++ && fa.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !xb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (sb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = ub.test(f) ? f.replace(ub, "$1_=" + rb++) : f + (sb.test(f) ? "&" : "?") + "_=" + rb++)), m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Bb + "; q=0.01" : "") : m.accepts["*"]);
                    for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
                    if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
                    v = "abort";
                    for (l in {success: 1, error: 1, complete: 1}) w[l](m[l]);
                    if (e = Q(Ab, m, c, w)) {
                        if (w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), 2 === u) return w;
                        m.async && m.timeout > 0 && (i = a.setTimeout(function () {
                            w.abort("timeout")
                        }, m.timeout));
                        try {
                            u = 1, e.send(s, d)
                        } catch (x) {
                            if (!(u < 2)) throw x;
                            d(-1, x)
                        }
                    } else d(-1, "No Transport");
                    return w
                },
                getJSON: function (a, b, c) {
                    return fa.get(a, b, c, "json")
                },
                getScript: function (a, b) {
                    return fa.get(a, void 0, b, "script")
                }
            }), fa.each(["get", "post"], function (a, b) {
                fa[b] = function (a, c, d, e) {
                    return fa.isFunction(c) && (e = e || d, d = c, c = void 0), fa.ajax(fa.extend({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    }, fa.isPlainObject(a) && a))
                }
            }), fa._evalUrl = function (a) {
                return fa.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
            }, fa.fn.extend({
                wrapAll: function (a) {
                    var b;
                    return fa.isFunction(a) ? this.each(function (b) {
                        fa(this).wrapAll(a.call(this, b))
                    }) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                        for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                        return a
                    }).append(this)), this)
                }, wrapInner: function (a) {
                    return fa.isFunction(a) ? this.each(function (b) {
                        fa(this).wrapInner(a.call(this, b))
                    }) : this.each(function () {
                        var b = fa(this), c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    })
                }, wrap: function (a) {
                    var b = fa.isFunction(a);
                    return this.each(function (c) {
                        fa(this).wrapAll(b ? a.call(this, c) : a)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), fa.expr.filters.hidden = function (a) {
                return !fa.expr.filters.visible(a)
            }, fa.expr.filters.visible = function (a) {
                return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
            };
            var Db = /%20/g, Eb = /\[\]$/, Fb = /\r?\n/g, Gb = /^(?:submit|button|image|reset|file)$/i,
                Hb = /^(?:input|select|textarea|keygen)/i;
            fa.param = function (a, b) {
                var c, d = [], e = function (a, b) {
                    b = fa.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
                if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a)) fa.each(a, function () {
                    e(this.name, this.value)
                }); else for (c in a) U(c, a[c], b, e);
                return d.join("&").replace(Db, "+")
            }, fa.fn.extend({
                serialize: function () {
                    return fa.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var a = fa.prop(this, "elements");
                        return a ? fa.makeArray(a) : this
                    }).filter(function () {
                        var a = this.type;
                        return this.name && !fa(this).is(":disabled") && Hb.test(this.nodeName) && !Gb.test(a) && (this.checked || !Ha.test(a))
                    }).map(function (a, b) {
                        var c = fa(this).val();
                        return null == c ? null : fa.isArray(c) ? fa.map(c, function (a) {
                            return {name: b.name, value: a.replace(Fb, "\r\n")}
                        }) : {name: b.name, value: c.replace(Fb, "\r\n")}
                    }).get()
                }
            }), fa.ajaxSettings.xhr = function () {
                try {
                    return new a.XMLHttpRequest
                } catch (b) {
                }
            };
            var Ib = {0: 200, 1223: 204}, Jb = fa.ajaxSettings.xhr();
            da.cors = !!Jb && "withCredentials" in Jb, da.ajax = Jb = !!Jb, fa.ajaxTransport(function (b) {
                var c, d;
                if (da.cors || Jb && !b.crossDomain) return {
                    send: function (e, f) {
                        var g, h = b.xhr();
                        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        for (g in e) h.setRequestHeader(g, e[g]);
                        c = function (a) {
                            return function () {
                                c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ib[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {binary: h.response} : {text: h.responseText}, h.getAllResponseHeaders()))
                            }
                        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                            4 === h.readyState && a.setTimeout(function () {
                                c && d()
                            })
                        }, c = c("abort");
                        try {
                            h.send(b.hasContent && b.data || null)
                        } catch (i) {
                            if (c) throw i
                        }
                    }, abort: function () {
                        c && c()
                    }
                }
            }), fa.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (a) {
                        return fa.globalEval(a), a
                    }
                }
            }), fa.ajaxPrefilter("script", function (a) {
                void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
            }), fa.ajaxTransport("script", function (a) {
                if (a.crossDomain) {
                    var b, c;
                    return {
                        send: function (d, e) {
                            b = fa("<script>").prop({
                                charset: a.scriptCharset,
                                src: a.url
                            }).on("load error", c = function (a) {
                                b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                            }), X.head.appendChild(b[0])
                        }, abort: function () {
                            c && c()
                        }
                    }
                }
            });
            var Kb = [], Lb = /(=)\?(?=&|$)|\?\?/;
            fa.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var a = Kb.pop() || fa.expando + "_" + rb++;
                    return this[a] = !0, a
                }
            }), fa.ajaxPrefilter("json jsonp", function (b, c, d) {
                var e, f, g,
                    h = b.jsonp !== !1 && (Lb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Lb.test(b.data) && "data");
                if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Lb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                    return g || fa.error(e + " was not called"), g[0]
                }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                    g = arguments
                }, d.always(function () {
                    void 0 === f ? fa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Kb.push(e)), g && fa.isFunction(f) && f(g[0]), g = f = void 0
                }), "script"
            }), fa.parseHTML = function (a, b, c) {
                if (!a || "string" != typeof a) return null;
                "boolean" == typeof b && (c = b, b = !1), b = b || X;
                var d = oa.exec(a), e = !c && [];
                return d ? [b.createElement(d[1])] : (d = m([a], b, e), e && e.length && fa(e).remove(), fa.merge([], d.childNodes))
            };
            var Mb = fa.fn.load;
            fa.fn.load = function (a, b, c) {
                if ("string" != typeof a && Mb) return Mb.apply(this, arguments);
                var d, e, f, g = this, h = a.indexOf(" ");
                return h > -1 && (d = fa.trim(a.slice(h)), a = a.slice(0, h)), fa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && fa.ajax({
                    url: a,
                    type: e || "GET",
                    dataType: "html",
                    data: b
                }).done(function (a) {
                    f = arguments, g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a)
                }).always(c && function (a, b) {
                    g.each(function () {
                        c.apply(this, f || [a.responseText, b, a])
                    })
                }), this
            }, fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
                fa.fn[b] = function (a) {
                    return this.on(b, a)
                }
            }), fa.expr.filters.animated = function (a) {
                return fa.grep(fa.timers, function (b) {
                    return a === b.elem
                }).length
            }, fa.offset = {
                setOffset: function (a, b, c) {
                    var d, e, f, g, h, i, j, k = fa.css(a, "position"), l = fa(a), m = {};
                    "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, fa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
                }
            }, fa.fn.extend({
                offset: function (a) {
                    if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                        fa.offset.setOffset(this, a, b)
                    });
                    var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
                    if (f) return b = f.documentElement, fa.contains(b, d) ? (e = d.getBoundingClientRect(), c = V(f), {
                        top: e.top + c.pageYOffset - b.clientTop,
                        left: e.left + c.pageXOffset - b.clientLeft
                    }) : e
                }, position: function () {
                    if (this[0]) {
                        var a, b, c = this[0], d = {top: 0, left: 0};
                        return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0), d.left += fa.css(a[0], "borderLeftWidth", !0)), {
                            top: b.top - d.top - fa.css(c, "marginTop", !0),
                            left: b.left - d.left - fa.css(c, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var a = this.offsetParent; a && "static" === fa.css(a, "position");) a = a.offsetParent;
                        return a || $a
                    })
                }
            }), fa.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
                var c = "pageYOffset" === b;
                fa.fn[a] = function (d) {
                    return xa(this, function (a, d, e) {
                        var f = V(a);
                        return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                    }, a, d, arguments.length)
                }
            }), fa.each(["top", "left"], function (a, b) {
                fa.cssHooks[b] = B(da.pixelPosition, function (a, c) {
                    if (c) return c = A(a, b), Xa.test(c) ? fa(a).position()[b] + "px" : c
                })
            }), fa.each({Height: "height", Width: "width"}, function (a, b) {
                fa.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
                    fa.fn[d] = function (d, e) {
                        var f = arguments.length && (c || "boolean" != typeof d),
                            g = c || (d === !0 || e === !0 ? "margin" : "border");
                        return xa(this, function (b, c, d) {
                            var e;
                            return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g)
                        }, b, f ? d : void 0, f, null)
                    }
                })
            }), fa.fn.extend({
                bind: function (a, b, c) {
                    return this.on(a, null, b, c)
                }, unbind: function (a, b) {
                    return this.off(a, null, b)
                }, delegate: function (a, b, c, d) {
                    return this.on(b, a, c, d)
                }, undelegate: function (a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                }, size: function () {
                    return this.length
                }
            }), fa.fn.andSelf = fa.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return fa
            });
            var Nb = a.jQuery, Ob = a.$;
            return fa.noConflict = function (b) {
                return a.$ === fa && (a.$ = Ob), b && a.jQuery === fa && (a.jQuery = Nb), fa
            }, b || (a.jQuery = a.$ = fa), fa
        })
    }, {}], 4: [function (a, b, c) {
        !function (a, b, c) {
            function d(b, c) {
                this.bodyOverflowX, this.callbacks = {
                    hide: [],
                    show: []
                }, this.checkInterval = null, this.Content, this.$el = a(b), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = a.extend({}, i, c), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
            }

            function e(b, c) {
                var d = !0;
                return a.each(b, function (a, e) {
                    if ("undefined" == typeof c[a] || b[a] !== c[a]) return d = !1, !1
                }), d
            }

            function f() {
                return !k && j
            }

            function g() {
                var a = c.body || c.documentElement, b = a.style, d = "transition";
                if ("string" == typeof b[d]) return !0;
                v = ["Moz", "Webkit", "Khtml", "O", "ms"], d = d.charAt(0).toUpperCase() + d.substr(1);
                for (var e = 0; e < v.length; e++) if ("string" == typeof b[v[e] + d]) return !0;
                return !1
            }

            var h = "tooltipster", i = {
                animation: "fade",
                arrow: !0,
                arrowColor: "",
                autoClose: !0,
                content: null,
                contentAsHTML: !1,
                contentCloning: !0,
                debug: !0,
                delay: 200,
                minWidth: 0,
                maxWidth: null,
                functionInit: function (a, b) {
                },
                functionBefore: function (a, b) {
                    b()
                },
                functionReady: function (a, b) {
                },
                functionAfter: function (a) {
                },
                icon: "(?)",
                iconCloning: !0,
                iconDesktop: !1,
                iconTouch: !1,
                iconTheme: "tooltipster-icon",
                interactive: !1,
                interactiveTolerance: 350,
                multiple: !1,
                offsetX: 0,
                offsetY: 0,
                onlyOne: !1,
                position: "top",
                positionTracker: !1,
                speed: 350,
                timer: 0,
                theme: "tooltipster-default",
                touchDevices: !0,
                trigger: "hover",
                updateAnimation: !0
            };
            d.prototype = {
                _init: function () {
                    var b = this;
                    if (c.querySelector) {
                        if (null !== b.options.content) b._content_set(b.options.content); else {
                            var d = b.$el.attr("title");
                            "undefined" == typeof d && (d = null), b._content_set(d)
                        }
                        var e = b.options.functionInit.call(b.$el, b.$el, b.Content);
                        "undefined" != typeof e && b._content_set(e), b.$el.removeAttr("title").addClass("tooltipstered"), !j && b.options.iconDesktop || j && b.options.iconTouch ? ("string" == typeof b.options.icon ? (b.$elProxy = a('<span class="' + b.options.iconTheme + '"></span>'), b.$elProxy.text(b.options.icon)) : b.options.iconCloning ? b.$elProxy = b.options.icon.clone(!0) : b.$elProxy = b.options.icon, b.$elProxy.insertAfter(b.$el)) : b.$elProxy = b.$el, "hover" == b.options.trigger ? (b.$elProxy.on("mouseenter." + b.namespace, function () {
                            f() && !b.options.touchDevices || (b.mouseIsOverProxy = !0, b._show())
                        }).on("mouseleave." + b.namespace, function () {
                            f() && !b.options.touchDevices || (b.mouseIsOverProxy = !1)
                        }), j && b.options.touchDevices && b.$elProxy.on("touchstart." + b.namespace, function () {
                            b._showNow()
                        })) : "click" == b.options.trigger && b.$elProxy.on("click." + b.namespace, function () {
                            f() && !b.options.touchDevices || b._show()
                        })
                    }
                }, _show: function () {
                    var a = this;
                    "shown" != a.Status && "appearing" != a.Status && (a.options.delay ? a.timerShow = setTimeout(function () {
                        ("click" == a.options.trigger || "hover" == a.options.trigger && a.mouseIsOverProxy) && a._showNow()
                    }, a.options.delay) : a._showNow())
                }, _showNow: function (c) {
                    var d = this;
                    d.options.functionBefore.call(d.$el, d.$el, function () {
                        if (d.enabled && null !== d.Content) {
                            c && d.callbacks.show.push(c), d.callbacks.hide = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null, d.options.onlyOne && a(".tooltipstered").not(d.$el).each(function (b, c) {
                                var d = a(c), e = d.data("tooltipster-ns");
                                a.each(e, function (a, b) {
                                    var c = d.data(b), e = c.status(), f = c.option("autoClose");
                                    "hidden" !== e && "disappearing" !== e && f && c.hide()
                                })
                            });
                            var e = function () {
                                d.Status = "shown", a.each(d.callbacks.show, function (a, b) {
                                    b.call(d.$el)
                                }), d.callbacks.show = []
                            };
                            if ("hidden" !== d.Status) {
                                var f = 0;
                                "disappearing" === d.Status ? (d.Status = "appearing", g() ? (d.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + d.options.animation + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.stop().fadeIn(e)) : "shown" === d.Status && e()
                            } else {
                                d.Status = "appearing";
                                var f = d.options.speed;
                                d.bodyOverflowX = a("body").css("overflow-x"), a("body").css("overflow-x", "hidden");
                                var h = "tooltipster-" + d.options.animation,
                                    i = "-webkit-transition-duration: " + d.options.speed + "ms; -webkit-animation-duration: " + d.options.speed + "ms; -moz-transition-duration: " + d.options.speed + "ms; -moz-animation-duration: " + d.options.speed + "ms; -o-transition-duration: " + d.options.speed + "ms; -o-animation-duration: " + d.options.speed + "ms; -ms-transition-duration: " + d.options.speed + "ms; -ms-animation-duration: " + d.options.speed + "ms; transition-duration: " + d.options.speed + "ms; animation-duration: " + d.options.speed + "ms;",
                                    k = d.options.minWidth ? "min-width:" + Math.round(d.options.minWidth) + "px;" : "",
                                    l = d.options.maxWidth ? "max-width:" + Math.round(d.options.maxWidth) + "px;" : "",
                                    m = d.options.interactive ? "pointer-events: auto;" : "";
                                if (d.$tooltip = a('<div class="tooltipster-base ' + d.options.theme + '" style="' + k + " " + l + " " + m + " " + i + '"><div class="tooltipster-content"></div></div>'), g() && d.$tooltip.addClass(h), d._content_insert(), d.$tooltip.appendTo("body"), d.reposition(), d.options.functionReady.call(d.$el, d.$el, d.$tooltip), g() ? (d.$tooltip.addClass(h + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.css("display", "none").fadeIn(d.options.speed, e), d._interval_set(), a(b).on("scroll." + d.namespace + " resize." + d.namespace, function () {
                                    d.reposition()
                                }), d.options.autoClose) if (a("body").off("." + d.namespace), "hover" == d.options.trigger) if (j && setTimeout(function () {
                                    a("body").on("touchstart." + d.namespace, function () {
                                        d.hide()
                                    })
                                }, 0), d.options.interactive) {
                                    j && d.$tooltip.on("touchstart." + d.namespace, function (a) {
                                        a.stopPropagation()
                                    });
                                    var n = null;
                                    d.$elProxy.add(d.$tooltip).on("mouseleave." + d.namespace + "-autoClose", function () {
                                        clearTimeout(n), n = setTimeout(function () {
                                            d.hide()
                                        }, d.options.interactiveTolerance)
                                    }).on("mouseenter." + d.namespace + "-autoClose", function () {
                                        clearTimeout(n)
                                    })
                                } else d.$elProxy.on("mouseleave." + d.namespace + "-autoClose", function () {
                                    d.hide()
                                }); else "click" == d.options.trigger && (setTimeout(function () {
                                    a("body").on("click." + d.namespace + " touchstart." + d.namespace, function () {
                                        d.hide()
                                    })
                                }, 0), d.options.interactive && d.$tooltip.on("click." + d.namespace + " touchstart." + d.namespace, function (a) {
                                    a.stopPropagation()
                                }))
                            }
                            d.options.timer > 0 && (d.timerHide = setTimeout(function () {
                                d.timerHide = null, d.hide()
                            }, d.options.timer + f))
                        }
                    })
                }, _interval_set: function () {
                    var b = this;
                    b.checkInterval = setInterval(function () {
                        if (0 === a("body").find(b.$el).length || 0 === a("body").find(b.$elProxy).length || "hidden" == b.Status || 0 === a("body").find(b.$tooltip).length) "shown" != b.Status && "appearing" != b.Status || b.hide(), b._interval_cancel(); else if (b.options.positionTracker) {
                            var c = b._repositionInfo(b.$elProxy), d = !1;
                            e(c.dimension, b.elProxyPosition.dimension) && ("fixed" === b.$elProxy.css("position") ? e(c.position, b.elProxyPosition.position) && (d = !0) : e(c.offset, b.elProxyPosition.offset) && (d = !0)), d || b.reposition()
                        }
                    }, 200)
                }, _interval_cancel: function () {
                    clearInterval(this.checkInterval), this.checkInterval = null
                }, _content_set: function (a) {
                    "object" == typeof a && null !== a && this.options.contentCloning && (a = a.clone(!0)), this.Content = a
                }, _content_insert: function () {
                    var a = this, b = this.$tooltip.find(".tooltipster-content");
                    "string" != typeof a.Content || a.options.contentAsHTML ? b.empty().append(a.Content) : b.text(a.Content)
                }, _update: function (a) {
                    var b = this;
                    b._content_set(a), null !== b.Content ? "hidden" !== b.Status && (b._content_insert(), b.reposition(), b.options.updateAnimation && (g() ? (b.$tooltip.css({
                        width: "",
                        "-webkit-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                        "-moz-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                        "-o-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                        "-ms-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                        transition: "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
                    }).addClass("tooltipster-content-changing"), setTimeout(function () {
                        "hidden" != b.Status && (b.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function () {
                            "hidden" !== b.Status && b.$tooltip.css({
                                "-webkit-transition": b.options.speed + "ms",
                                "-moz-transition": b.options.speed + "ms",
                                "-o-transition": b.options.speed + "ms",
                                "-ms-transition": b.options.speed + "ms",
                                transition: b.options.speed + "ms"
                            })
                        }, b.options.speed))
                    }, b.options.speed)) : b.$tooltip.fadeTo(b.options.speed, .5, function () {
                        "hidden" != b.Status && b.$tooltip.fadeTo(b.options.speed, 1)
                    }))) : b.hide()
                }, _repositionInfo: function (a) {
                    return {
                        dimension: {height: a.outerHeight(!1), width: a.outerWidth(!1)},
                        offset: a.offset(),
                        position: {left: parseInt(a.css("left")), top: parseInt(a.css("top"))}
                    }
                }, hide: function (c) {
                    var d = this;
                    c && d.callbacks.hide.push(c), d.callbacks.show = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null;
                    var e = function () {
                        a.each(d.callbacks.hide, function (a, b) {
                            b.call(d.$el)
                        }), d.callbacks.hide = []
                    };
                    if ("shown" == d.Status || "appearing" == d.Status) {
                        d.Status = "disappearing";
                        var f = function () {
                            d.Status = "hidden", "object" == typeof d.Content && null !== d.Content && d.Content.detach(), d.$tooltip.remove(), d.$tooltip = null, a(b).off("." + d.namespace), a("body").off("." + d.namespace).css("overflow-x", d.bodyOverflowX), a("body").off("." + d.namespace), d.$elProxy.off("." + d.namespace + "-autoClose"), d.options.functionAfter.call(d.$el, d.$el), e()
                        };
                        g() ? (d.$tooltip.clearQueue().removeClass("tooltipster-" + d.options.animation + "-show").addClass("tooltipster-dying"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(f)) : d.$tooltip.stop().fadeOut(d.options.speed, f)
                    } else "hidden" == d.Status && e();
                    return d
                }, show: function (a) {
                    return this._showNow(a), this
                }, update: function (a) {
                    return this.content(a)
                }, content: function (a) {
                    return "undefined" == typeof a ? this.Content : (this._update(a), this)
                }, reposition: function () {
                    function c() {
                        var c = a(b).scrollLeft();
                        C - c < 0 && (f = C - c, C = c), C + i - c > g && (f = C - (g + c - i), C = g + c - i)
                    }

                    function d(c, d) {
                        h.offset.top - a(b).scrollTop() - j - F - 12 < 0 && d.indexOf("top") > -1 && (H = c), h.offset.top + h.dimension.height + j + 12 + F > a(b).scrollTop() + a(b).height() && d.indexOf("bottom") > -1 && (H = c, E = h.offset.top - j - F - 12)
                    }

                    var e = this;
                    if (0 !== a("body").find(e.$tooltip).length) {
                        e.$tooltip.css("width", ""), e.elProxyPosition = e._repositionInfo(e.$elProxy);
                        var f = null, g = a(b).width(), h = e.elProxyPosition, i = e.$tooltip.outerWidth(!1),
                            j = (e.$tooltip.innerWidth() + 1, e.$tooltip.outerHeight(!1));
                        if (e.$elProxy.is("area")) {
                            var k = e.$elProxy.attr("shape"), l = e.$elProxy.parent().attr("name"),
                                m = a('img[usemap="#' + l + '"]'), n = m.offset().left, o = m.offset().top,
                                p = void 0 !== e.$elProxy.attr("coords") ? e.$elProxy.attr("coords").split(",") : void 0;
                            if ("circle" == k) {
                                var q = parseInt(p[0]), r = parseInt(p[1]), s = parseInt(p[2]);
                                h.dimension.height = 2 * s, h.dimension.width = 2 * s, h.offset.top = o + r - s, h.offset.left = n + q - s
                            } else if ("rect" == k) {
                                var q = parseInt(p[0]), r = parseInt(p[1]), t = parseInt(p[2]), u = parseInt(p[3]);
                                h.dimension.height = u - r, h.dimension.width = t - q, h.offset.top = o + r, h.offset.left = n + q
                            } else if ("poly" == k) {
                                for (var v = 0, w = 0, x = 0, y = 0, z = "even", A = 0; A < p.length; A++) {
                                    var B = parseInt(p[A]);
                                    "even" == z ? (B > x && (x = B, 0 === A && (v = x)), B < v && (v = B), z = "odd") : (B > y && (y = B, 1 == A && (w = y)), B < w && (w = B), z = "even")
                                }
                                h.dimension.height = y - w, h.dimension.width = x - v, h.offset.top = o + w, h.offset.left = n + v
                            } else h.dimension.height = m.outerHeight(!1), h.dimension.width = m.outerWidth(!1), h.offset.top = o, h.offset.left = n
                        }
                        var C = 0, D = 0, E = 0, F = parseInt(e.options.offsetY), G = parseInt(e.options.offsetX),
                            H = e.options.position;
                        if ("top" == H) {
                            var I = h.offset.left + i - (h.offset.left + h.dimension.width);
                            C = h.offset.left + G - I / 2, E = h.offset.top - j - F - 12, c(), d("bottom", "top")
                        }
                        if ("top-left" == H && (C = h.offset.left + G, E = h.offset.top - j - F - 12, c(), d("bottom-left", "top-left")), "top-right" == H && (C = h.offset.left + h.dimension.width + G - i, E = h.offset.top - j - F - 12, c(), d("bottom-right", "top-right")), "bottom" == H) {
                            var I = h.offset.left + i - (h.offset.left + h.dimension.width);
                            C = h.offset.left - I / 2 + G, E = h.offset.top + h.dimension.height + F + 12, c(), d("top", "bottom")
                        }
                        if ("bottom-left" == H && (C = h.offset.left + G, E = h.offset.top + h.dimension.height + F + 12, c(), d("top-left", "bottom-left")), "bottom-right" == H && (C = h.offset.left + h.dimension.width + G - i, E = h.offset.top + h.dimension.height + F + 12, c(), d("top-right", "bottom-right")), "left" == H) {
                            C = h.offset.left - G - i - 12, D = h.offset.left + G + h.dimension.width + 12;
                            var J = h.offset.top + j - (h.offset.top + h.dimension.height);
                            if (E = h.offset.top - J / 2 - F, C < 0 && D + i > g) {
                                var K = 2 * parseFloat(e.$tooltip.css("border-width")), L = i + C - K;
                                e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), C = h.offset.left - G - L - 12 - K, J = h.offset.top + j - (h.offset.top + h.dimension.height), E = h.offset.top - J / 2 - F
                            } else C < 0 && (C = h.offset.left + G + h.dimension.width + 12, f = "left")
                        }
                        if ("right" == H) {
                            C = h.offset.left + G + h.dimension.width + 12, D = h.offset.left - G - i - 12;
                            var J = h.offset.top + j - (h.offset.top + h.dimension.height);
                            if (E = h.offset.top - J / 2 - F, C + i > g && D < 0) {
                                var K = 2 * parseFloat(e.$tooltip.css("border-width")), L = g - C - K;
                                e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), J = h.offset.top + j - (h.offset.top + h.dimension.height), E = h.offset.top - J / 2 - F
                            } else C + i > g && (C = h.offset.left - G - i - 12, f = "right")
                        }
                        if (e.options.arrow) {
                            var M = "tooltipster-arrow-" + H;
                            if (e.options.arrowColor.length < 1) var N = e.$tooltip.css("background-color"); else var N = e.options.arrowColor;
                            if (f ? "left" == f ? (M = "tooltipster-arrow-right", f = "") : "right" == f ? (M = "tooltipster-arrow-left", f = "") : f = "left:" + Math.round(f) + "px;" : f = "", "top" == H || "top-left" == H || "top-right" == H) var O = parseFloat(e.$tooltip.css("border-bottom-width")),
                                P = e.$tooltip.css("border-bottom-color"); else if ("bottom" == H || "bottom-left" == H || "bottom-right" == H) var O = parseFloat(e.$tooltip.css("border-top-width")),
                                P = e.$tooltip.css("border-top-color"); else if ("left" == H) var O = parseFloat(e.$tooltip.css("border-right-width")),
                                P = e.$tooltip.css("border-right-color"); else if ("right" == H) var O = parseFloat(e.$tooltip.css("border-left-width")),
                                P = e.$tooltip.css("border-left-color"); else var O = parseFloat(e.$tooltip.css("border-bottom-width")),
                                P = e.$tooltip.css("border-bottom-color");
                            O > 1 && O++;
                            var Q = "";
                            if (0 !== O) {
                                var R = "", S = "border-color: " + P + ";";
                                M.indexOf("bottom") !== -1 ? R = "margin-top: -" + Math.round(O) + "px;" : M.indexOf("top") !== -1 ? R = "margin-bottom: -" + Math.round(O) + "px;" : M.indexOf("left") !== -1 ? R = "margin-right: -" + Math.round(O) + "px;" : M.indexOf("right") !== -1 && (R = "margin-left: -" + Math.round(O) + "px;"), Q = '<span class="tooltipster-arrow-border" style="' + R + " " + S + ';"></span>'
                            }
                            e.$tooltip.find(".tooltipster-arrow").remove();
                            var T = '<div class="' + M + ' tooltipster-arrow" style="' + f + '">' + Q + '<span style="border-color:' + N + ';"></span></div>';
                            e.$tooltip.append(T)
                        }
                        e.$tooltip.css({top: Math.round(E) + "px", left: Math.round(C) + "px"})
                    }
                    return e
                }, enable: function () {
                    return this.enabled = !0, this
                }, disable: function () {
                    return this.hide(), this.enabled = !1, this
                }, destroy: function () {
                    var b = this;
                    b.hide(), b.$el[0] !== b.$elProxy[0] && b.$elProxy.remove(), b.$el.removeData(b.namespace).off("." + b.namespace);
                    var c = b.$el.data("tooltipster-ns");
                    if (1 === c.length) {
                        var d = "string" == typeof b.Content ? b.Content : a("<div></div>").append(b.Content).html();
                        b.$el.removeClass("tooltipstered").attr("title", d).removeData(b.namespace).removeData("tooltipster-ns").off("." + b.namespace)
                    } else c = a.grep(c, function (a, c) {
                        return a !== b.namespace
                    }), b.$el.data("tooltipster-ns", c);
                    return b
                }, elementIcon: function () {
                    return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
                }, elementTooltip: function () {
                    return this.$tooltip ? this.$tooltip[0] : void 0
                }, option: function (a, b) {
                    return "undefined" == typeof b ? this.options[a] : (this.options[a] = b, this)
                }, status: function () {
                    return this.Status
                }
            }, a.fn[h] = function () {
                var b = arguments;
                if (0 === this.length) {
                    if ("string" == typeof b[0]) {
                        var c = !0;
                        switch (b[0]) {
                            case"setDefaults":
                                a.extend(i, b[1]);
                                break;
                            default:
                                c = !1
                        }
                        return !!c || this
                    }
                    return this
                }
                if ("string" == typeof b[0]) {
                    var e = "#*$~&";
                    return this.each(function () {
                        var c = a(this).data("tooltipster-ns"), d = c ? a(this).data(c[0]) : null;
                        if (!d) throw new Error("You called Tooltipster's \"" + b[0] + '" method on an uninitialized element');
                        if ("function" != typeof d[b[0]]) throw new Error('Unknown method .tooltipster("' + b[0] + '")');
                        var f = d[b[0]](b[1], b[2]);
                        if (f !== d) return e = f, !1
                    }), "#*$~&" !== e ? e : this
                }
                var f = [], g = b[0] && "undefined" != typeof b[0].multiple, h = g && b[0].multiple || !g && i.multiple,
                    j = b[0] && "undefined" != typeof b[0].debug, k = j && b[0].debug || !j && i.debug;
                return this.each(function () {
                    var c = !1, e = a(this).data("tooltipster-ns"), g = null;
                    e ? h ? c = !0 : k && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : c = !0, c && (g = new d(this, b[0]), e || (e = []), e.push(g.namespace), a(this).data("tooltipster-ns", e), a(this).data(g.namespace, g)), f.push(g)
                }), h ? f : this
            };
            var j = !!("ontouchstart" in b), k = !1;
            a("body").one("mousemove", function () {
                k = !0
            })
        }(jQuery, window, document)
    }, {}], 5: [function (a, b, c) {
        (function (b) {
            "use strict";
            !function (c, d) {
                function e() {
                    f(), h(p), i(c).bind("scroll mousewheel DOMMouseScroll resize", function () {
                        h(p)
                    }), o.on("click", g), l.insertVideo(), "PRODUCTION" == b.env && (!function (a, b, c, d, e, f, g) {
                        a.GoogleAnalyticsObject = e, a[e] = a[e] || function () {
                            (a[e].q = a[e].q || []).push(arguments)
                        }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g)
                    }(c, d, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-170982-36", "auto"), ga("send", "pageview")), j.pageLoadScrollOffset(100)
                }

                function f() {
                    switch (location.pathname) {
                        case"/":
                        case"/ad-index":
                        case"/ph":
                            j.injectScript("/js/index.js");
                            break;
                        case"/features":
                            j.injectScript("/js/features.js");
                            break;
                        case"/download":
                            j.injectScript("/js/download.js");
                            break;
                        case"/download/mac":
                        case"/download/windows":
                        case"/download/windows64":
                        case"/download/linux-deb":
                        case"/download/linux-gzip":
                            j.injectScript("/js/download-thankyou.js");
                            break;
                        case"/error":
                            j.injectScript("/js/error.js");
                            break;
                        case"/auth-connect-success":
                        case"/auth-connect-failure":
                            j.injectScript("/js/auth-connect.js");
                            break;
                        case"/activation-success":
                            j.injectScript("/js/thankyou-activation.js");
                            break;
                        case"/pro":
                            j.injectScript("/js/features.js"), j.injectScript("/js/pricing.js");
                            break;
                        case"/contact":
                        case"/enterprise":
                            j.injectScript("/js/contact.js");
                            break;
                        case"/faq":
                            j.injectScript("/js/faq.js");
                            break;
                        case"/ad":
                            j.injectScript("/js/ad.js");
                            break;
                        case"/art":
                            j.injectScript("/js/art.js");
                            break;
                        case"/art-submission":
                            j.injectScript("/js/contact.js");
                            break;
                        case"/shoptalk":
                            j.injectScript("js/ad.js");
                            break;
                        case"/index-ad":
                            j.injectScript("js/dynamic-index.js")
                    }
                    k.injectPC()
                }

                function g() {
                    n.hasClass("mobile-nav-open") ? (n.removeClass("mobile-nav-open"), o.removeClass("is-active")) : (n.addClass("mobile-nav-open"), o.addClass("is-active"))
                }

                function h(a) {
                    function b() {
                        a.addClass("is_stuck");
                        var b = a.outerHeight();
                        h || n.css("padding-top", b)
                    }

                    function d() {
                        a.removeClass("is_stuck"), n.css("padding-top", "")
                    }

                    var e = i(c).scrollTop(), f = i(c).width(), g = 0, h = !1;
                    n.hasClass("transparent-header") && (h = !0), f >= 783 && (g = 25), e >= g ? b() : d()
                }

                var i = a("jquery");
                c.$ = i, c.jQuery = i;
                var j = a("./utils.js"), k = a("./modules/on-prod.js"), l = a("./modules/video.js"), m = !1;
                a("jquery.scrollto"), a("jquery.transit"), a("tooltipster"), a("./modules/events.js");
                var n = i("body"), o = i(".mobile-nav-button"), p = i(".header-sticky");
                d.onreadystatechange = function () {
                    ~["complete", "interactive"].indexOf(d.readyState) && m === !1 && (m = !0, e())
                }
            }(window, document)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./modules/events.js": 6,
        "./modules/on-prod.js": 7,
        "./modules/video.js": 8,
        "./utils.js": 9,
        jquery: 3,
        "jquery.scrollto": 1,
        "jquery.transit": 2,
        tooltipster: 4
    }], 6: [function (a, b, c) {
        (function (a) {
            "use strict";
            var b = "Download", c = "PDF Download";
            $('a[href*="/downloads/"], a.ga-download').on("click", function (d) {
                var e = $(this).attr("href");
                if (e.indexOf("/") > -1) var f = e.split("/"), g = f.length - 1, h = f[g]; else var h = e;
                var i = $(this).attr("data-action");
                i && i.length && (c = i), "PRODUCTION" == a.env ? window.ga("send", "event", b, c, h) : window.console.log("window.ga('send', 'event', '" + b + "', '" + c + "', '" + h + "');")
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}], 7: [function (a, b, c) {
        (function (a) {
            "use strict";

            function c() {
                "PRODUCTION" == a.env && (window.purechatApi = {
                    l: [], t: [], on: function () {
                        this.l.push(arguments)
                    }
                }, function () {
                    var a = !1, b = document.createElement("script");
                    b.async = !0, b.type = "text/javascript", b.src = "https://app.purechat.com/VisitorWidget/WidgetScript", document.getElementsByTagName("HEAD").item(0).appendChild(b), b.onreadystatechange = b.onload = function (b) {
                        if (!(a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState)) {
                            new PCWidget({c: "d73ee80d-09db-4928-9541-6d4bf985c4be", f: !0});
                            a = !0
                        }
                    }
                }(window, document))
            }

            b.exports.injectPC = c
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}], 8: [function (a, b, c) {
        "use strict";

        function d() {
            $(".video-player__target").on("click", function () {
                if ($(this).hasClass("html5")) {
                    $(this).removeClass("video-player__thumbnail");
                    var a = $(this).children("video"), b = a.attr("poster");
                    b = b.slice(0, -4), a.append('<source src="' + b + '.webm" type="video/webm">'), a.append('<source src="' + b + '.mp4" type="video/mp4">'), a.get(0).play()
                } else if ($(this).hasClass("youtube")) {
                    $(this).removeClass("video-player__thumbnail").addClass("embed-container").addClass("embed-container--16-9");
                    var c = $(this).children("img"),
                        d = '<iframe src="//www.youtube.com/embed/' + $(c).attr("data-youtube") + '?rel=0&autoplay=1" allowfullscreen></iframe>';
                    c.replaceWith(d)
                }
            })
        }

        b.exports.insertVideo = d
    }, {}], 9: [function (a, b, c) {
        "use strict";
        !function (a, c) {
            function d(a, b) {
                var d = c.createElement("script");
                d.src = a + "?v=20170927", d.async = !b, c.body.appendChild(d)
            }

            function e(a) {
                return location.host.indexOf(".com") == -1 ? "https://devweb.axosoft.com" + a : "featuredev.axosoft.com" == location.hostname ? "https://devweb.axosoft.com" + a : "https://" + location.hostname + a
            }

            function f(a, b) {
                var c = a.getAttribute("class");
                if (c && c.length > 0) {
                    var d = c.split(" ");
                    d.indexOf(b) == -1 && (d.push(b), c = d.join(" "), a.setAttribute("class", c))
                } else a.setAttribute("class", b);
                return a
            }

            function g(a, b) {
                var c = a.getAttribute("class");
                if (c && c.length > 0) {
                    var d = c.split(" "), e = d.indexOf(b);
                    e > -1 && (d.splice(e, 1), c = d.join(" "), a.setAttribute("class", c))
                }
                return a
            }

            function h(a, b) {
                var c = a.getAttribute("class");
                if (c && c.length > 0) {
                    var d = c.split(" "), e = d.indexOf(b);
                    a = e > -1 ? g(a, b) : f(a, b)
                } else a.setAttribute("class", b);
                return a
            }

            function i() {
                for (var b, c = [], d = a.location.href.slice(a.location.href.indexOf("?") + 1).split("&"), e = 0; e < d.length; e++) b = d[e].split("="), c.push(b[0]), c[b[0]] = b[1];
                return c
            }

            function j(a) {
                for (var b = [], c = 0; c < a.sourceFields.length; c++) b.push($("#" + a.sourceFields[c]).val());
                var d = b.join(a.glue), e = a.newField, f = {name: e, value: d};
                return f
            }

            function k(b, c) {
                for (var d = c.name, e = !1, f = 0; f < b.length; f++) b[f].name.indexOf(d) !== -1 && (e = !0, b[f].value.indexOf(c.find) !== -1 ? b[f].value = c.replace : (a.console.log("will replace with: " + c.elseReplace), b[f].value = c.elseReplace));
                if (e === !1) {
                    var g = {name: c.name, value: c.elseReplace};
                    b.push(g)
                }
                return b
            }

            function l(a, b) {
                var c = b - a.toString().length + 1;
                return Array(+(c > 0 && c)).join("0") + a
            }

            function m() {
                var a = c.URL.split("?")[1];
                if (void 0 != a) {
                    var b = {};
                    if (a.indexOf("&") !== -1) for (var d = a.split("&"), e = 0; e < d.length; e++) {
                        var f = d[e].split("=");
                        b[f[0]] = f[1]
                    } else {
                        var f = a.split("=");
                        b[f[0]] = f[1]
                    }
                    return b
                }
                return !1
            }

            function n(a) {
                for (var b = a + "=", d = c.cookie.split(";"), e = 0; e < d.length; e++) {
                    for (var f = d[e]; " " == f.charAt(0);) f = f.substring(1);
                    if (0 == f.indexOf(b)) return f.substring(b.length, f.length)
                }
                return ""
            }

            function o() {
                var a, b = c.createElement("fakeelement"), d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                };
                for (a in d) if (void 0 !== b.style[a]) return d[a]
            }

            function p(b) {
                a.location.hash && (a.scrollTo(0, 0), setTimeout(function () {
                    a.scrollTo(0, 0)
                }, 1), setTimeout(function () {
                    if (null != $(a.location.hash).offset()) {
                        var c = $(a.location.hash).offset().top - b;
                        $(a).stop(!0).scrollTo(c, {duration: 800, interrupt: !1})
                    }
                }, 100))
            }

            function q(b) {
                $('a[href^="#"]').on("click", function (c) {
                    c.preventDefault();
                    var d = $(this.hash).offset().top - b;
                    $(a).stop(!0).scrollTo(d, {duration: 800, interrupt: !1})
                })
            }

            function r() {
                var b = arguments.length <= 0 || void 0 === arguments[0] ? 50 : arguments[0],
                    c = $(a).height() / (100 / b), d = $(a).height() - c, e = $(a).scrollTop(), f = e + c, g = e + d,
                    h = {vpPosInnerTop: f, vpPosInnerBtm: g};
                return h
            }

            function s(a) {
                var b = arguments.length <= 1 || void 0 === arguments[1] ? 50 : arguments[1], c = $(a);
                if (0 == c.length) return !1;
                var d = c.offset().top, e = d + $(c).height(), f = r(b);
                return f.vpPosInnerTop < e && f.vpPosInnerBtm > d
            }

            b.exports.injectScript = d, b.exports.endPoint = e, b.exports.redirectToPathname = function (b) {
                a.location.pathname = b
            }, b.exports.addClass = f, b.exports.removeClass = g, b.exports.toggleClass = h, b.exports.getUrlVars = i, b.exports.joinFields = j, b.exports.modifyFormArray = k, b.exports.zeroPad = l, b.exports.getQueryString = m, b.exports.getCookie = n, b.exports.whichTransitionEvent = o, b.exports.pageLoadScrollOffset = p, b.exports.scrollOffset = q, b.exports.getViewportPosition = r, b.exports.isIdInView = s
        }(window, document)
    }, {}]
}, {}, [5]);
