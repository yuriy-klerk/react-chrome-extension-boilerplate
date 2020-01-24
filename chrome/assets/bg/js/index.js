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
        "use strict";

        function d() {
            l = document.querySelector("#canvas-top"), n = document.querySelector("#canvas-bottom"), m = l.getContext("2d"), o = n.getContext("2d"), window.addEventListener("resize", e, !1), e()
        }

        function e() {
            p = t.manualWidth ? t.manualWidth : window.innerWidth, q = t.manualHeight ? t.manualHeight : window.innerHeight, f()
        }

        function f() {
            l.width = p, l.height = q, n.width = p, n.height = q, h(o), s = new v(t.numberOrbs, t.orbRadius, t.initialColorAngle, t.globalAlpha, t.colorAngleIncrement, t.colorFrequency), void 0 !== r && cancelAnimationFrame(r), g()
        }

        function g() {
            h(o), s.run(), setTimeout(function () {
                r = requestAnimationFrame(g)
            }, 40), setTimeout(function () {
                cancelAnimationFrame(r)
            }, 18e4)
        }

        function h(a) {
            a.fillStyle = t.background, a.fillRect(0, 0, p, q)
        }

        function i(a, b) {
            return Math.random() * (b - a) + a
        }

        var j = a("../modules/dl-buttons.js"), k = a("../modules/latest-version.js");
        k.getLatestVersion(j.doButtons), function () {
            function a(a, b, c) {
                this.x = a || 0, this.y = b || 0, this.z = c || 0
            }

            a.prototype = {
                negative: function () {
                    return new a((-this.x), (-this.y), (-this.z))
                }, add: function (b) {
                    return b instanceof a ? new a(this.x + b.x, this.y + b.y, this.z + b.z) : new a(this.x + b, this.y + b, this.z + b)
                }, subtract: function (b) {
                    return b instanceof a ? new a(this.x - b.x, this.y - b.y, this.z - b.z) : new a(this.x - b, this.y - b, this.z - b)
                }, multiply: function (b) {
                    return b instanceof a ? new a(this.x * b.x, this.y * b.y, this.z * b.z) : new a(this.x * b, this.y * b, this.z * b)
                }, divide: function (b) {
                    return b instanceof a ? new a(this.x / b.x, this.y / b.y, this.z / b.z) : new a(this.x / b, this.y / b, this.z / b)
                }, equals: function (a) {
                    return this.x == a.x && this.y == a.y && this.z == a.z
                }, dot: function (a) {
                    return this.x * a.x + this.y * a.y + this.z * a.z
                }, cross: function (b) {
                    return new a(this.y * b.z - this.z * b.y, this.z * b.x - this.x * b.z, this.x * b.y - this.y * b.x)
                }, length: function () {
                    return Math.sqrt(this.dot(this))
                }, unit: function () {
                    return this.divide(this.length())
                }, min: function () {
                    return Math.min(Math.min(this.x, this.y), this.z)
                }, max: function () {
                    return Math.max(Math.max(this.x, this.y), this.z)
                }, toAngles: function () {
                    return {theta: Math.atan2(this.z, this.x), phi: Math.asin(this.y / this.length())}
                }, angleTo: function (a) {
                    return Math.acos(this.dot(a) / (this.length() * a.length()))
                }, toArray: function (a) {
                    return [this.x, this.y, this.z].slice(0, a || 3)
                }, clone: function () {
                    return new a(this.x, this.y, this.z)
                }, init: function (a, b, c) {
                    return this.x = a, this.y = b, this.z = c, this
                }, noZ: function () {
                    return this.z = 0, this
                }
            }, a.negative = function (a, b) {
                return b.x = -a.x, b.y = -a.y, b.z = -a.z, b
            }, a.add = function (b, c, d) {
                return c instanceof a ? (d.x = b.x + c.x, d.y = b.y + c.y, d.z = b.z + c.z) : (d.x = b.x + c, d.y = b.y + c, d.z = b.z + c), d
            }, a.subtract = function (b, c, d) {
                return c instanceof a ? (d.x = b.x - c.x, d.y = b.y - c.y, d.z = b.z - c.z) : (d.x = b.x - c, d.y = b.y - c, d.z = b.z - c), d
            }, a.multiply = function (b, c, d) {
                return c instanceof a ? (d.x = b.x * c.x, d.y = b.y * c.y, d.z = b.z * c.z) : (d.x = b.x * c, d.y = b.y * c, d.z = b.z * c), d
            }, a.divide = function (b, c, d) {
                return c instanceof a ? (d.x = b.x / c.x, d.y = b.y / c.y, d.z = b.z / c.z) : (d.x = b.x / c, d.y = b.y / c, d.z = b.z / c), d
            }, a.cross = function (a, b, c) {
                return c.x = a.y * b.z - a.z * b.y, c.y = a.z * b.x - a.x * b.z, c.z = a.x * b.y - a.y * b.x, c
            }, a.unit = function (a, b) {
                var c = a.length();
                return b.x = a.x / c, b.y = a.y / c, b.z = a.z / c, b
            }, a.fromAngles = function (b, c) {
                return new a(Math.cos(b) * Math.cos(c), Math.sin(c), Math.sin(b) * Math.cos(c))
            }, a.randomDirection = function () {
                return a.fromAngles(Math.random() * Math.PI * 2, Math.asin(2 * Math.random() - 1))
            }, a.min = function (b, c) {
                return new a(Math.min(b.x, c.x), Math.min(b.y, c.y), Math.min(b.z, c.z))
            }, a.max = function (b, c) {
                return new a(Math.max(b.x, c.x), Math.max(b.y, c.y), Math.max(b.z, c.z))
            }, a.lerp = function (a, b, c) {
                return b.subtract(a).multiply(c).add(a)
            }, a.fromArray = function (b) {
                return new a(b[0], b[1], b[2])
            }, a.angleBetween = function (a, b) {
                return a.angleTo(b)
            }, window.Vector = a
        }();
        var l, m, n, o, p, q, r, s, t = {
            background: "#141422",
            numberOrbs: 30,
            maxVelocity: 1.5,
            orbRadius: 1,
            minProximity: 50,
            initialColorAngle: 7,
            colorFrequency: .03,
            colorAngleIncrement: .0000009,
            globalAlpha: .01,
            manualWidth: !1,
            manualHeight: !1
        }, u = function () {
            function a(a, b) {
                var c = i(0, p), d = i(0, q);
                this.position = new Vector(c, d);
                var e = i(0, t.maxVelocity);
                this.velocity = Vector.randomDirection().multiply(e).noZ(), this.radius = a, this.color = b
            }

            return a.prototype = {
                update: function () {
                    this.position = this.position.add(this.velocity), (this.position.x + this.radius >= p || this.position.x - this.radius <= 0) && (this.velocity.x = this.velocity.x * -1), (this.position.y + this.radius >= q || this.position.y - this.radius <= 0) && (this.velocity.y = this.velocity.y * -1)
                }, display: function () {
                    o.beginPath(), o.fillStyle = this.color, o.ellipse(this.position.x, this.position.y, this.radius, this.radius, 0, 0, 2 * Math.PI, !1), o.fill(), o.closePath()
                }, run: function () {
                    this.update(), this.display()
                }
            }, a
        }(), v = function () {
            function a(a, b, c, d, e, f) {
                this.orbs = [], this.colorAngle = c, this.colorAngleIncrement = e, this.globalAlpha = d, this.colorFrequency = f, this.color = null;
                for (var g = 0; g < a; g++) this.orbs.push(new u(b, this.color))
            }

            return a.prototype = {
                run: function () {
                    this.phaseColor();
                    for (var a = 0; a < this.orbs.length; a++) {
                        for (var b = a + 1; b < this.orbs.length; b++) this.compare(this.orbs[a], this.orbs[b]);
                        this.orbs[a].color = this.color, this.orbs[a].run()
                    }
                }, compare: function (a, b) {
                    var c = Math.abs(a.position.subtract(b.position).length());
                    c <= t.minProximity && (m.beginPath(), m.strokeStyle = this.color, m.globalAlpha = this.globalAlpha, m.moveTo(a.position.x, a.position.y), m.lineTo(b.position.x, b.position.y), m.stroke(), m.closePath())
                }, phaseColor: function () {
                    var a = Math.floor(127 * Math.sin(this.colorFrequency * this.colorAngle + 0 * Math.PI / 3) + 128),
                        b = Math.floor(127 * Math.sin(this.colorFrequency * this.colorAngle + 2 * Math.PI / 3) + 128),
                        c = Math.floor(127 * Math.sin(this.colorFrequency * this.colorAngle + 4 * Math.PI / 3) + 128);
                    this.color = "rgba(" + a + ", " + b + ", " + c + ", 1)", this.colorAngle += this.colorAngleIncrement
                }
            }, a
        }();
        d();
        var w = $(window).width();
        $(document).ready(function () {
            w <= 769 && $(".site-footer .artist").insertBefore(".site-footer .left")
        })
    }, {"../modules/dl-buttons.js": 2, "../modules/latest-version.js": 3}], 2: [function (a, b, c) {
        "use strict";

        function d(a) {
            var b, c, d, h = f.detectOS(), i = !1;
            if (h) {
                switch (h) {
                    case"Windows32":
                        b = "For (32-bit) Windows 7+", c = "windows", d = "/download/windows", i = !0;
                        break;
                    case"Windows64":
                        b = "For (64-bit) Windows 7+", c = "windows", d = "/download/windows64", i = !0;
                        break;
                    case"MacOS":
                        b = "For Mac OS 10.9+", c = "apple", d = "/download/mac", i = !0;
                        break;
                    case"Linux":
                        b = "For Ubuntu LTS 12.04+, Debian 8+", c = "linux", i = !0;
                        break;
                    default:
                        b = "Windows / Mac / Linux", d = "/download"
                }
                $(g).prepend('<a class="button os button--basic"><span class="maintext">Download GitKraken v3.0</span><span class="button__subtext"></span></a><div class="secondary-cta"><a class="all-downloads" href="/download">See All Platforms</a></div>');
                var j = $(".button.os");
                $(j).attr("class");
                "Linux" == h ? ($(j).addClass("multi-trigger"), $(j).attr("href", null), $(j).on("click", function () {
                    e()
                })) : ($(j).attr("href", d), $(j).addClass("direct-dl-link").attr("data-os", h));
                var k = $(".button.os .button__subtext"), l = $(".button.os .maintext");
                $(l).html();
                void 0 == c ? $(k).html(oldMainBtnSub) : $(k).html('<i class="fa mrs os fa-' + c + '"></i>' + b)
            }
            i === !1 ? $(".all-downloads").remove() : $(g).addClass("os-context")
        }

        function e(a) {
            var b = "/download/linux-deb", c = "/download/linux-gzip", d = document.createElement("a"),
                e = document.createElement("a");
            $(d).attr("class", "button--basic button multi direct-dl-link mrs"), $(e).attr("class", "button--basic button multi direct-dl-link mls"), $(d).attr("href", b), $(e).attr("href", c), $(d).attr("data-os", "Linux Deb").html('<span class="maintext">Deb Package</span>'), $(e).attr("data-os", "Linux Gzip").html('<span class="maintext">Gzip Package</span>'), $(g).prepend(e).prepend(d), $(".button.os").remove(), a && a()
        }

        var f = a("./os-detect.js"), g = $(".dl-container");
        $(".dl-container .button.all");
        b.exports.doButtons = d
    }, {"./os-detect.js": 4}], 3: [function (a, b, c) {
        "use strict";
        !function (a, c) {
            function d(a) {
                var b = {date: "Wednesday, September 27, 2017", name: "3.0.2"};
                a && a(b)
            }

            b.exports.getLatestVersion = d
        }(window, document)
    }, {}], 4: [function (a, b, c) {
        "use strict";
        var d = a("../utils.js");
        b.exports.detectOS = function () {
            var a = [{s: "Windows32", r: ["Windows", "Win32"]}, {s: "Windows64", r: ["WOW64", "Win64"]}, {
                s: "MacOS",
                r: ["MacPPC", "MacIntel", "Mac_PowerPC", "Macintosh"]
            }, {s: "Linux", r: ["X11", "Linux"]}], b = navigator.userAgent, c = "none";
            for (var e in a) {
                var f = a[e];
                for (var g in f.r) {
                    var h = f.r[g];
                    if (b.indexOf(h) != -1) {
                        c = f.s;
                        break
                    }
                }
            }
            var i = d.getQueryString();
            return i.os ? i.os : c
        }
    }, {"../utils.js": 5}], 5: [function (a, b, c) {
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
}, {}, [1]);
