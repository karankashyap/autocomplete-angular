/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.11.2
 */
!function (e, t, n) {
    "use strict";
    !function () {
        t.module("ngMaterial", ["ng", "ngAnimate", "ngAria", "material.core", "material.core.gestures", "material.core.layout", "material.core.theming.palette", "material.core.theming", "material.core.animate", "material.components.autocomplete", "material.components.backdrop", "material.components.bottomSheet", "material.components.button", "material.components.checkbox", "material.components.card", "material.components.chips", "material.components.content", "material.components.datepicker", "material.components.dialog", "material.components.divider", "material.components.fabActions", "material.components.fabShared", "material.components.fabSpeedDial", "material.components.fabTrigger", "material.components.fabToolbar", "material.components.gridList", "material.components.icon", "material.components.input", "material.components.list", "material.components.menu", "material.components.menuBar", "material.components.progressCircular", "material.components.progressLinear", "material.components.radioButton", "material.components.select", "material.components.sidenav", "material.components.slider", "material.components.sticky", "material.components.subheader", "material.components.swipe", "material.components.switch", "material.components.toast", "material.components.tabs", "material.components.toolbar", "material.components.tooltip", "material.components.virtualRepeat", "material.components.whiteframe"])
    }(), function () {
        function e(e, t) {
            e.decorator("$$rAF", ["$delegate", o]), t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("red").backgroundPalette("grey")
        }

        function n(e) {
            return {
                restrict: "A", scope: {template: "=mdTemplate"}, link: function (t, n) {
                    function o(o) {
                        n.html(o), e(n.contents())(t)
                    }

                    t.$watch("template", o)
                }
            }
        }

        function o(e) {
            return e.throttle = function (t) {
                var n, o, r, i;
                return function () {
                    n = arguments, i = this, r = t, o || (o = !0, e(function () {
                        r.apply(i, Array.prototype.slice.call(n)), o = !1
                    }))
                }
            }, e
        }

        t.module("material.core", ["ngAnimate", "material.core.animate", "material.core.layout", "material.core.gestures", "material.core.theming"]).directive("mdTemplate", n).config(e), e.$inject = ["$provide", "$mdThemingProvider"], n.$inject = ["$compile"]
    }(), function () {
        function e(e) {
            function t(e) {
                return n ? "webkit" + e.charAt(0).toUpperCase() + e.substring(1) : e
            }

            var n = /webkit/i.test(e.vendorPrefix);
            return {
                KEY_CODE: {
                    ENTER: 13,
                    ESCAPE: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT_ARROW: 37,
                    UP_ARROW: 38,
                    RIGHT_ARROW: 39,
                    DOWN_ARROW: 40,
                    TAB: 9,
                    BACKSPACE: 8,
                    DELETE: 46
                },
                CSS: {
                    TRANSITIONEND: "transitionend" + (n ? " webkitTransitionEnd" : ""),
                    ANIMATIONEND: "animationend" + (n ? " webkitAnimationEnd" : ""),
                    TRANSFORM: t("transform"),
                    TRANSFORM_ORIGIN: t("transformOrigin"),
                    TRANSITION: t("transition"),
                    TRANSITION_DURATION: t("transitionDuration"),
                    ANIMATION_PLAY_STATE: t("animationPlayState"),
                    ANIMATION_DURATION: t("animationDuration"),
                    ANIMATION_NAME: t("animationName"),
                    ANIMATION_TIMING: t("animationTimingFunction"),
                    ANIMATION_DIRECTION: t("animationDirection")
                },
                MEDIA: {
                    sm: "(max-width: 599px)",
                    "gt-sm": "(min-width: 600px)",
                    md: "(min-width: 600px) and (max-width: 959px)",
                    "gt-md": "(min-width: 960px)",
                    lg: "(min-width: 960px) and (max-width: 1199px)",
                    "gt-lg": "(min-width: 1200px)"
                },
                MEDIA_PRIORITY: ["gt-lg", "lg", "gt-md", "md", "gt-sm", "sm"]
            }
        }

        t.module("material.core").factory("$mdConstant", e), e.$inject = ["$sniffer"]
    }(), function () {
        function e(e, n) {
            function o() {
                return [].concat(E)
            }

            function r() {
                return E.length
            }

            function i(e) {
                return E.length && e > -1 && e < E.length
            }

            function a(e) {
                return e ? i(u(e) + 1) : !1
            }

            function d(e) {
                return e ? i(u(e) - 1) : !1
            }

            function c(e) {
                return i(e) ? E[e] : null
            }

            function s(e, t) {
                return E.filter(function (n) {
                    return n[e] === t
                })
            }

            function l(e, n) {
                return e ? (t.isNumber(n) || (n = E.length), E.splice(n, 0, e), u(e)) : -1
            }

            function m(e) {
                h(e) && E.splice(u(e), 1)
            }

            function u(e) {
                return E.indexOf(e)
            }

            function h(e) {
                return e && u(e) > -1
            }

            function p() {
                return E.length ? E[0] : null
            }

            function f() {
                return E.length ? E[E.length - 1] : null
            }

            function g(e, o, r, a) {
                r = r || b;
                for (var d = u(o); ;) {
                    if (!i(d))return null;
                    var c = d + (e ? -1 : 1), s = null;
                    if (i(c) ? s = E[c] : n && (s = e ? f() : p(), c = u(s)), null === s || c === a)return null;
                    if (r(s))return s;
                    t.isUndefined(a) && (a = c), d = c
                }
            }

            var b = function () {
                return !0
            };
            e && !t.isArray(e) && (e = Array.prototype.slice.call(e)), n = !!n;
            var E = e || [];
            return {
                items: o,
                count: r,
                inRange: i,
                contains: h,
                indexOf: u,
                itemAt: c,
                findBy: s,
                add: l,
                remove: m,
                first: p,
                last: f,
                next: t.bind(null, g, !1),
                previous: t.bind(null, g, !0),
                hasPrevious: d,
                hasNext: a
            }
        }

        t.module("material.core").config(["$provide", function (t) {
            t.decorator("$mdUtil", ["$delegate", function (t) {
                return t.iterator = e, t
            }])
        }])
    }(), function () {
        function e(e, n, o) {
            function r(e) {
                var n = u[e];
                t.isUndefined(n) && (n = u[e] = i(e));
                var o = p[n];
                return t.isUndefined(o) && (o = a(n)), o
            }

            function i(t) {
                return e.MEDIA[t] || ("(" !== t.charAt(0) ? "(" + t + ")" : t)
            }

            function a(e) {
                var t = h[e] = o.matchMedia(e);
                return t.addListener(d), p[t.media] = !!t.matches
            }

            function d(e) {
                n.$evalAsync(function () {
                    p[e.media] = !!e.matches
                })
            }

            function c(e) {
                return h[e]
            }

            function s(t, n) {
                for (var o = 0; o < e.MEDIA_PRIORITY.length; o++) {
                    var r = e.MEDIA_PRIORITY[o];
                    if (h[u[r]].matches) {
                        var i = m(t, n + "-" + r);
                        if (t[i])return t[i]
                    }
                }
                return t[m(t, n)]
            }

            function l(n, o, r) {
                var i = [];
                return n.forEach(function (n) {
                    var a = m(o, n);
                    o[a] && i.push(o.$observe(a, t.bind(void 0, r, null)));
                    for (var d in e.MEDIA) {
                        if (a = m(o, n + "-" + d), !o[a])return;
                        i.push(o.$observe(a, t.bind(void 0, r, d)))
                    }
                }), function () {
                    i.forEach(function (e) {
                        e()
                    })
                }
            }

            function m(e, t) {
                return f[t] || (f[t] = e.$normalize(t))
            }

            var u = {}, h = {}, p = {}, f = {};
            return r.getResponsiveAttribute = s, r.getQuery = c, r.watchResponsiveAttributes = l, r
        }

        t.module("material.core").factory("$mdMedia", e), e.$inject = ["$mdConstant", "$rootScope", "$window"]
    }(), function () {
        function o(o, i, a, d, c, s, l) {
            function m(e) {
                return e[0] || e
            }

            var u = s.startSymbol(), h = s.endSymbol(), p = "{{" === u && "}}" === h, f = {
                dom: {},
                now: e.performance ? t.bind(e.performance, e.performance.now) : Date.now || function () {
                    return (new Date).getTime()
                },
                clientRect: function (e, t, n) {
                    var o = m(e);
                    t = m(t || o.offsetParent || document.body);
                    var r = o.getBoundingClientRect(), i = n ? t.getBoundingClientRect() : {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    };
                    return {left: r.left - i.left, top: r.top - i.top, width: r.width, height: r.height}
                },
                offsetRect: function (e, t) {
                    return f.clientRect(e, t, !0)
                },
                nodesToArray: function (e) {
                    e = e || [];
                    for (var t = [], n = 0; n < e.length; ++n)t.push(e.item(n));
                    return t
                },
                scrollTop: function (e) {
                    e = t.element(e || o[0].body);
                    var r = e[0] == o[0].body ? o[0].body : n, i = r ? r.scrollTop + r.parentElement.scrollTop : 0;
                    return i || Math.abs(e[0].getBoundingClientRect().top)
                },
                findFocusTarget: function (e, n) {
                    function o(e, n) {
                        var o, r = e[0].querySelectorAll(n);
                        if (r && r.length) {
                            var i = /\s*\[?([\-a-z]*)\]?\s*/i, a = i.exec(n), d = a ? a[1] : null;
                            r.length && t.forEach(r, function (e) {
                                e = t.element(e);
                                var n = e[0].getAttribute(d), r = n && f.validateScope(e) ? e.scope().$eval(n) !== !1 : !0;
                                r && (o = e)
                            })
                        }
                        return o
                    }

                    var r, i = "[md-autofocus]";
                    return r = o(e, n || i), r || n == i || (r = o(e, "[md-auto-focus]"), r || (r = o(e, i))), r
                },
                disableScrollAround: function (e, n) {
                    function r(e) {
                        function n(e) {
                        }

                        function r(e) {
                            e.preventDefault()
                        }

                        e = t.element(e || d)[0];
                        var i = 50, a = t.element('<div class="md-scroll-mask" style="z-index: ' + i + '">  <div class="md-scroll-mask-bar"></div></div>');
                        return e.appendChild(a[0]), a.on("wheel", r), a.on("touchmove", r), o.on("keydown", n), function () {
                            a.off("wheel"), a.off("touchmove"), a[0].parentNode.removeChild(a[0]), o.off("keydown", n), delete f.disableScrollAround._enableScrolling
                        }
                    }

                    function i() {
                        var e = d.parentNode, t = e.getAttribute("style") || "", n = d.getAttribute("style") || "", o = f.scrollTop(d), r = d.clientWidth;
                        return d.scrollHeight > d.clientHeight && (a(d, {
                            position: "fixed",
                            width: "100%",
                            top: -o + "px"
                        }), a(e, {overflowY: "scroll"})), d.clientWidth < r && a(d, {overflow: "hidden"}), function () {
                            d.setAttribute("style", n), e.setAttribute("style", t), d.scrollTop = o
                        }
                    }

                    function a(e, t) {
                        for (var n in t)e.style[n] = t[n]
                    }

                    if (f.disableScrollAround._count = f.disableScrollAround._count || 0, ++f.disableScrollAround._count, f.disableScrollAround._enableScrolling)return f.disableScrollAround._enableScrolling;
                    e = t.element(e);
                    var d = o[0].body, c = i(), s = r(n);
                    return f.disableScrollAround._enableScrolling = function () {
                        --f.disableScrollAround._count || (c(), s(), delete f.disableScrollAround._enableScrolling)
                    }
                },
                enableScrolling: function () {
                    var e = this.disableScrollAround._enableScrolling;
                    e && e()
                },
                floatingScrollbars: function () {
                    if (this.floatingScrollbars.cached === n) {
                        var e = t.element('<div style="width: 100%; z-index: -1; position: absolute; height: 35px; overflow-y: scroll"><div style="height: 60;"></div></div>');
                        o[0].body.appendChild(e[0]), this.floatingScrollbars.cached = e[0].offsetWidth == e[0].childNodes[0].offsetWidth, e.remove()
                    }
                    return this.floatingScrollbars.cached
                },
                forceFocus: function (t) {
                    var n = t[0] || t;
                    document.addEventListener("click", function r(e) {
                        e.target === n && e.$focus && (n.focus(), e.stopImmediatePropagation(), e.preventDefault(), n.removeEventListener("click", r))
                    }, !0);
                    var o = document.createEvent("MouseEvents");
                    o.initMouseEvent("click", !1, !0, e, {}, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), o.$material = !0, o.$focus = !0, n.dispatchEvent(o)
                },
                createBackdrop: function (e, t) {
                    return a(f.supplant('<md-backdrop class="{0}">', [t]))(e)
                },
                supplant: function (e, t, n) {
                    return n = n || /\{([^\{\}]*)\}/g, e.replace(n, function (e, n) {
                        var o = n.split("."), r = t;
                        try {
                            for (var i in o)o.hasOwnProperty(i) && (r = r[o[i]])
                        } catch (a) {
                            r = e
                        }
                        return "string" == typeof r || "number" == typeof r ? r : e
                    })
                },
                fakeNgModel: function () {
                    return {
                        $fake: !0, $setTouched: t.noop, $setViewValue: function (e) {
                            this.$viewValue = e, this.$render(e), this.$viewChangeListeners.forEach(function (e) {
                                e()
                            })
                        }, $isEmpty: function (e) {
                            return 0 === ("" + e).length
                        }, $parsers: [], $formatters: [], $viewChangeListeners: [], $render: t.noop
                    }
                },
                debounce: function (e, t, o, r) {
                    var a;
                    return function () {
                        var d = o, c = Array.prototype.slice.call(arguments);
                        i.cancel(a), a = i(function () {
                            a = n, e.apply(d, c)
                        }, t || 10, r)
                    }
                },
                throttle: function (e, t) {
                    var n;
                    return function () {
                        var o = this, r = arguments, i = f.now();
                        (!n || i - n > t) && (e.apply(o, r), n = i)
                    }
                },
                time: function (e) {
                    var t = f.now();
                    return e(), f.now() - t
                },
                valueOnUse: function (e, t, n) {
                    var o = null, r = Array.prototype.slice.call(arguments), i = r.length > 3 ? r.slice(3) : [];
                    Object.defineProperty(e, t, {
                        get: function () {
                            return null === o && (o = n.apply(e, i)), o
                        }
                    })
                },
                nextUid: function () {
                    return "" + r++
                },
                validateScope: function (e) {
                    var n = e && t.isDefined(e.scope());
                    return n || l.warn("element.scope() is not available when 'debug mode' == false. @see https://docs.angularjs.org/guide/production!"), n
                },
                disconnectScope: function (e) {
                    if (e && e.$root !== e && !e.$$destroyed) {
                        var t = e.$parent;
                        e.$$disconnected = !0, t.$$childHead === e && (t.$$childHead = e.$$nextSibling), t.$$childTail === e && (t.$$childTail = e.$$prevSibling), e.$$prevSibling && (e.$$prevSibling.$$nextSibling = e.$$nextSibling), e.$$nextSibling && (e.$$nextSibling.$$prevSibling = e.$$prevSibling), e.$$nextSibling = e.$$prevSibling = null
                    }
                },
                reconnectScope: function (e) {
                    if (e && e.$root !== e && e.$$disconnected) {
                        var t = e, n = t.$parent;
                        t.$$disconnected = !1, t.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = t, n.$$childTail = t) : n.$$childHead = n.$$childTail = t
                    }
                },
                getClosest: function (e, n, o) {
                    if (e instanceof t.element && (e = e[0]), n = n.toUpperCase(), o && (e = e.parentNode), !e)return null;
                    do if (e.nodeName === n)return e; while (e = e.parentNode);
                    return null
                },
                elementContains: function (n, o) {
                    var r = e.Node && e.Node.prototype && Node.prototype.contains, i = r ? t.bind(n, n.contains) : t.bind(n, function (e) {
                        return n === o || !!(16 & this.compareDocumentPosition(e))
                    });
                    return i(o)
                },
                extractElementByName: function (e, n, o, r) {
                    function i(e) {
                        return a(e) || (o ? d(e) : null)
                    }

                    function a(e) {
                        if (e)for (var t = 0, o = e.length; o > t; t++)if (e[t].nodeName.toLowerCase() === n)return e[t];
                        return null
                    }

                    function d(e) {
                        var t;
                        if (e)for (var n = 0, o = e.length; o > n; n++) {
                            var r = e[n];
                            if (!t)for (var a = 0, d = r.childNodes.length; d > a; a++)t = t || i([r.childNodes[a]])
                        }
                        return t
                    }

                    var c = i(e);
                    return !c && r && l.warn(f.supplant("Unable to find node '{0}' in element '{1}'.", [n, e[0].outerHTML])), t.element(c || e)
                },
                initOptionalProperties: function (e, n, o) {
                    o = o || {}, t.forEach(e.$$isolateBindings, function (r, i) {
                        if (r.optional && t.isUndefined(e[i])) {
                            var a = t.isDefined(n[r.attrName]);
                            e[i] = t.isDefined(o[i]) ? o[i] : a
                        }
                    })
                },
                nextTick: function (e, t, n) {
                    function o() {
                        var e = n && n.$$destroyed, t = e ? [] : r.queue, o = e ? null : r.digest;
                        r.queue = [], r.timeout = null, r.digest = !1, t.forEach(function (e) {
                            e()
                        }), o && d.$digest()
                    }

                    var r = f.nextTick, a = r.timeout, c = r.queue || [];
                    return c.push(e), null == t && (t = !0), r.digest = r.digest || t, r.queue = c, a || (r.timeout = i(o, 0, !1))
                },
                processTemplate: function (e) {
                    return p ? e : e && t.isString(e) ? e.replace(/\{\{/g, u).replace(/}}/g, h) : e
                }
            };
            return f.dom.animator = c(f), f
        }

        var r = 0;
        t.module("material.core").factory("$mdUtil", o), o.$inject = ["$document", "$timeout", "$compile", "$rootScope", "$$mdAnimate", "$interpolate", "$log"], t.element.prototype.focus = t.element.prototype.focus || function () {
            return this.length && this[0].focus(), this
        }, t.element.prototype.blur = t.element.prototype.blur || function () {
            return this.length && this[0].blur(), this
        }
    }(), function () {
        function e(e, n, o) {
            function r(e, o, r) {
                var i = t.element(e)[0] || e;
                !i || i.hasAttribute(o) && 0 !== i.getAttribute(o).length || c(i, o) || (r = t.isString(r) ? r.trim() : "", r.length ? e.attr(o, r) : n.warn('ARIA: Attribute "', o, '", required for accessibility, is missing on node:', i))
            }

            function i(t, n, o) {
                e(function () {
                    r(t, n, o())
                })
            }

            function a(e, t) {
                i(e, t, function () {
                    return d(e)
                })
            }

            function d(e) {
                return e.text().trim()
            }

            function c(e, t) {
                function n(e) {
                    var t = e.currentStyle ? e.currentStyle : o.getComputedStyle(e);
                    return "none" === t.display
                }

                var r = e.hasChildNodes(), i = !1;
                if (r)for (var a = e.childNodes, d = 0; d < a.length; d++) {
                    var c = a[d];
                    1 === c.nodeType && c.hasAttribute(t) && (n(c) || (i = !0))
                }
                return i
            }

            return {expect: r, expectAsync: i, expectWithText: a}
        }

        t.module("material.core").service("$mdAria", e), e.$inject = ["$$rAF", "$log", "$window"]
    }(), function () {
        function e(e, n, o, r, i, a) {
            this.compile = function (d) {
                var c = d.templateUrl, s = d.template || "", l = d.controller, m = d.controllerAs, u = t.extend({}, d.resolve || {}), h = t.extend({}, d.locals || {}), p = d.transformTemplate || t.identity, f = d.bindToController;
                return t.forEach(u, function (e, n) {
                    t.isString(e) ? u[n] = o.get(e) : u[n] = o.invoke(e)
                }), t.extend(u, h), c ? u.$template = n.get(c, {cache: a}).then(function (e) {
                    return e.data
                }) : u.$template = e.when(s), e.all(u).then(function (e) {
                    var n, o = p(e.$template), a = d.element || t.element("<div>").html(o.trim()).contents(), c = r(a);
                    return n = {
                        locals: e, element: a, link: function (o) {
                            if (e.$scope = o, l) {
                                var r = i(l, e, !0);
                                f && t.extend(r.instance, e);
                                var d = r();
                                a.data("$ngControllerController", d), a.children().data("$ngControllerController", d), m && (o[m] = d), n.controller = d
                            }
                            return c(o)
                        }
                    }
                })
            }
        }

        t.module("material.core").service("$mdCompiler", e), e.$inject = ["$q", "$http", "$injector", "$compile", "$controller", "$templateCache"]
    }(), function () {
        function n() {
        }

        function o(n, o, r) {
            function i(e, t, n) {
                var o = p[t.replace(/^\$md./, "")];
                if (!o)throw new Error("Failed to register element with handler " + t + ". Available handlers: " + Object.keys(p).join(", "));
                return o.registerElement(e, n)
            }

            function a(e, o) {
                var r = new n(e);
                return t.extend(r, o), p[e] = r, h
            }

            var c = navigator.userAgent || navigator.vendor || e.opera, s = c.match(/ipad|iphone|ipod/i), m = c.match(/android/i), u = "undefined" != typeof e.jQuery && t.element === e.jQuery, h = {
                handler: a,
                register: i,
                isHijackingClicks: (s || m) && !u && !f
            };
            return h.isHijackingClicks && h.handler("click", {
                options: {maxDistance: 6}, onEnd: function (e, t) {
                    t.distance < this.state.options.maxDistance && this.dispatchEvent(e, "click")
                }
            }), h.handler("press", {
                onStart: function (e, t) {
                    this.dispatchEvent(e, "$md.pressdown")
                }, onEnd: function (e, t) {
                    this.dispatchEvent(e, "$md.pressup")
                }
            }).handler("hold", {
                options: {maxDistance: 6, delay: 500}, onCancel: function () {
                    r.cancel(this.state.timeout)
                }, onStart: function (e, n) {
                    return this.state.registeredParent ? (this.state.pos = {
                        x: n.x,
                        y: n.y
                    }, void(this.state.timeout = r(t.bind(this, function () {
                        this.dispatchEvent(e, "$md.hold"), this.cancel()
                    }), this.state.options.delay, !1))) : this.cancel()
                }, onMove: function (e, t) {
                    e.preventDefault();
                    var n = this.state.pos.x - t.x, o = this.state.pos.y - t.y;
                    Math.sqrt(n * n + o * o) > this.options.maxDistance && this.cancel()
                }, onEnd: function () {
                    this.onCancel()
                }
            }).handler("drag", {
                options: {minDistance: 6, horizontal: !0, cancelMultiplier: 1.5},
                onStart: function (e) {
                    this.state.registeredParent || this.cancel()
                },
                onMove: function (e, t) {
                    var n, o;
                    e.preventDefault(), this.state.dragPointer ? this.dispatchDragMove(e) : (this.state.options.horizontal ? (n = Math.abs(t.distanceX) > this.state.options.minDistance, o = Math.abs(t.distanceY) > this.state.options.minDistance * this.state.options.cancelMultiplier) : (n = Math.abs(t.distanceY) > this.state.options.minDistance, o = Math.abs(t.distanceX) > this.state.options.minDistance * this.state.options.cancelMultiplier), n ? (this.state.dragPointer = d(e), l(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragstart", this.state.dragPointer)) : o && this.cancel())
                },
                dispatchDragMove: o.throttle(function (e) {
                    this.state.isRunning && (l(e, this.state.dragPointer), this.dispatchEvent(e, "$md.drag", this.state.dragPointer))
                }),
                onEnd: function (e, t) {
                    this.state.dragPointer && (l(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragend", this.state.dragPointer))
                }
            }).handler("swipe", {
                options: {minVelocity: .65, minDistance: 10}, onEnd: function (e, t) {
                    if (Math.abs(t.velocityX) > this.state.options.minVelocity && Math.abs(t.distanceX) > this.state.options.minDistance) {
                        var n = "left" == t.directionX ? "$md.swipeleft" : "$md.swiperight";
                        this.dispatchEvent(e, n)
                    }
                }
            })
        }

        function r(e) {
            this.name = e, this.state = {}
        }

        function i() {
            function n(e, n, o) {
                o = o || u;
                var r = new t.element.Event(n);
                r.$material = !0, r.pointer = o, r.srcEvent = e, t.extend(r, {
                    clientX: o.x,
                    clientY: o.y,
                    screenX: o.x,
                    screenY: o.y,
                    pageX: o.x,
                    pageY: o.y,
                    ctrlKey: e.ctrlKey,
                    altKey: e.altKey,
                    shiftKey: e.shiftKey,
                    metaKey: e.metaKey
                }), t.element(o.target).trigger(r)
            }

            function o(t, n, o) {
                o = o || u;
                var r;
                "click" === n ? (r = document.createEvent("MouseEvents"), r.initMouseEvent("click", !0, !0, e, t.detail, o.x, o.y, o.x, o.y, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, t.button, t.relatedTarget || null)) : (r = document.createEvent("CustomEvent"), r.initCustomEvent(n, !0, !0, {})), r.$material = !0, r.pointer = o, r.srcEvent = t, o.target.dispatchEvent(r)
            }

            var i = "undefined" != typeof e.jQuery && t.element === e.jQuery;
            return r.prototype = {
                options: {},
                dispatchEvent: i ? n : o,
                onStart: t.noop,
                onMove: t.noop,
                onEnd: t.noop,
                onCancel: t.noop,
                start: function (e, n) {
                    if (!this.state.isRunning) {
                        var o = this.getNearestParent(e.target), r = o && o.$mdGesture[this.name] || {};
                        this.state = {
                            isRunning: !0,
                            options: t.extend({}, this.options, r),
                            registeredParent: o
                        }, this.onStart(e, n)
                    }
                },
                move: function (e, t) {
                    this.state.isRunning && this.onMove(e, t)
                },
                end: function (e, t) {
                    this.state.isRunning && (this.onEnd(e, t), this.state.isRunning = !1)
                },
                cancel: function (e, t) {
                    this.onCancel(e, t), this.state = {}
                },
                getNearestParent: function (e) {
                    for (var t = e; t;) {
                        if ((t.$mdGesture || {})[this.name])return t;
                        t = t.parentNode
                    }
                    return null
                },
                registerElement: function (e, t) {
                    function n() {
                        delete e[0].$mdGesture[o.name], e.off("$destroy", n)
                    }

                    var o = this;
                    return e[0].$mdGesture = e[0].$mdGesture || {}, e[0].$mdGesture[this.name] = t || {}, e.on("$destroy", n), n
                }
            }, r
        }

        function a(e, n) {
            function o(e, t) {
                var o;
                for (var r in p)o = p[r], o instanceof n && ("start" === e && o.cancel(), o[e](t, u))
            }

            function r(e) {
                if (!u) {
                    var t = +Date.now();
                    h && !c(e, h) && t - h.endTime < 1500 || (u = d(e), o("start", e))
                }
            }

            function i(e) {
                u && c(e, u) && (l(e, u), o("move", e))
            }

            function a(e) {
                u && c(e, u) && (l(e, u), u.endTime = +Date.now(), o("end", e), h = u, u = null)
            }

            document.contains || (document.contains = function (e) {
                return document.body.contains(e)
            }), !b && e.isHijackingClicks && (document.addEventListener("click", function (e) {
                var t = 0 === e.clientX && 0 === e.clientY;
                t || e.$material || e.isIonicTap || s(e) ? (g = null, "label" == e.target.tagName.toLowerCase() && (g = {
                    x: e.x,
                    y: e.y
                })) : (e.preventDefault(), e.stopPropagation(), g = null)
            }, !0), b = !0);
            var m = "mousedown touchstart pointerdown", f = "mousemove touchmove pointermove", E = "mouseup mouseleave touchend touchcancel pointerup pointercancel";
            t.element(document).on(m, r).on(f, i).on(E, a).on("$$mdGestureReset", function () {
                h = u = null
            })
        }

        function d(e) {
            var t = m(e), n = {startTime: +Date.now(), target: e.target, type: e.type.charAt(0)};
            return n.startX = n.x = t.pageX, n.startY = n.y = t.pageY, n
        }

        function c(e, t) {
            return e && t && e.type.charAt(0) === t.type
        }

        function s(e) {
            return g && g.x == e.x && g.y == e.y
        }

        function l(e, t) {
            var n = m(e), o = t.x = n.pageX, r = t.y = n.pageY;
            t.distanceX = o - t.startX, t.distanceY = r - t.startY, t.distance = Math.sqrt(t.distanceX * t.distanceX + t.distanceY * t.distanceY), t.directionX = t.distanceX > 0 ? "right" : t.distanceX < 0 ? "left" : "", t.directionY = t.distanceY > 0 ? "up" : t.distanceY < 0 ? "down" : "", t.duration = +Date.now() - t.startTime, t.velocityX = t.distanceX / t.duration, t.velocityY = t.distanceY / t.duration
        }

        function m(e) {
            return e = e.originalEvent || e, e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e
        }

        var u, h, p = {}, f = !1, g = null, b = !1;
        t.module("material.core.gestures", []).provider("$mdGesture", n).factory("$$MdGestureHandler", i).run(a), n.prototype = {
            skipClickHijack: function () {
                return f = !0
            }, $get: ["$$MdGestureHandler", "$$rAF", "$timeout", function (e, t, n) {
                return new o(e, t, n)
            }]
        }, o.$inject = ["$$MdGestureHandler", "$$rAF", "$timeout"], a.$inject = ["$mdGesture", "$$MdGestureHandler"]
    }(), function () {
        function e() {
            function e(e) {
                function n(e) {
                    return c.optionsFactory = e.options, c.methods = (e.methods || []).concat(a), s
                }

                function o(e, t) {
                    return d[e] = t, s
                }

                function r(t, n) {
                    if (n = n || {}, n.methods = n.methods || [], n.options = n.options || function () {
                            return {}
                        }, /^cancel|hide|show$/.test(t))throw new Error("Preset '" + t + "' in " + e + " is reserved!");
                    if (n.methods.indexOf("_options") > -1)throw new Error("Method '_options' in " + e + " is reserved!");
                    return c.presets[t] = {
                        methods: n.methods.concat(a),
                        optionsFactory: n.options,
                        argOption: n.argOption
                    }, s
                }

                function i(n, o) {
                    function r(e) {
                        return e = e || {}, e._options && (e = e._options), m.show(t.extend({}, l, e))
                    }

                    function i(e) {
                        return m.destroy(e)
                    }

                    function a(t, n) {
                        var r = {};
                        return r[e] = u, o.invoke(t || function () {
                            return n
                        }, {}, r)
                    }

                    var s, l, m = n(), u = {hide: m.hide, cancel: m.cancel, show: r, destroy: i};
                    return s = c.methods || [], l = a(c.optionsFactory, {}), t.forEach(d, function (e, t) {
                        u[t] = e
                    }), t.forEach(c.presets, function (e, n) {
                        function o(e) {
                            this._options = t.extend({}, r, e)
                        }

                        var r = a(e.optionsFactory, {}), i = (e.methods || []).concat(s);
                        if (t.extend(r, {$type: n}), t.forEach(i, function (e) {
                                o.prototype[e] = function (t) {
                                    return this._options[e] = t, this
                                }
                            }), e.argOption) {
                            var d = "show" + n.charAt(0).toUpperCase() + n.slice(1);
                            u[d] = function (e) {
                                var t = u[n](e);
                                return u.show(t)
                            }
                        }
                        u[n] = function (n) {
                            return arguments.length && e.argOption && !t.isObject(n) && !t.isArray(n) ? (new o)[e.argOption](n) : new o(n)
                        }
                    }), u
                }

                var a = ["onHide", "onShow", "onRemove"], d = {}, c = {presets: {}}, s = {
                    setDefaults: n,
                    addPreset: r,
                    addMethod: o,
                    $get: i
                };
                return s.addPreset("build", {methods: ["controller", "controllerAs", "resolve", "template", "templateUrl", "themable", "transformTemplate", "parent"]}), i.$inject = ["$$interimElement", "$injector"], s
            }

            function o(e, o, r, i, a, d, c, s, l, m, u) {
                return function () {
                    function u(e) {
                        e = e || {};
                        var t = new g(e || {}), n = !e.skipHide && M.length ? b.hide() : o.when(!0);
                        return n["finally"](function () {
                            M.push(t), t.show()["catch"](function (e) {
                                return e
                            })
                        }), t.deferred.promise
                    }

                    function h(e, t) {
                        function r(n) {
                            return n.remove(e || v, !1, t || {})["catch"](function (e) {
                                return e
                            }), n.deferred.promise
                        }

                        if (!M.length)return o.when(e || v);
                        if (t = t || {}, t.closeAll) {
                            var i = o.all(M.reverse().map(r));
                            return M = [], i
                        }
                        if (t.closeTo !== n)return o.all(M.splice(t.closeTo).map(r));
                        var a = M.pop();
                        return r(a)
                    }

                    function p(e, t) {
                        var n = M.shift();
                        return n ? (n.remove(e || E, !0, t || {})["catch"](function (e) {
                            return e
                        }), n.deferred.promise) : o.when(e || E)
                    }

                    function f() {
                        var e = M.shift();
                        return e ? e.remove(E, !1, {$destroy: !0}) : o.when(E)
                    }

                    function g(u) {
                        function h() {
                            return o(function (e, t) {
                                function n(e) {
                                    A.deferred.reject(e), t(e)
                                }

                                g(u).then(function (t) {
                                    C = E(t, u), T = $(C, u, t.controller).then(e, n)
                                }, n)
                            })
                        }

                        function p(e, n, r) {
                            function i(e) {
                                A.deferred.resolve(e)
                            }

                            function a(e) {
                                A.deferred.reject(e)
                            }

                            return C ? (u = t.extend(u || {}, r || {}), u.cancelAutoHide && u.cancelAutoHide(), u.element.triggerHandler("$mdInterimElementRemove"), u.$destroy === !0 ? y(u.element, u) : (o.when(T)["finally"](function () {
                                y(u.element, u).then(function () {
                                    n && a(e) || i(e)
                                }, a)
                            }), A.deferred.promise)) : o.when(!1)
                        }

                        function f(e) {
                            return e = e || {}, e.template && (e.template = s.processTemplate(e.template)), t.extend({
                                preserveScope: !1,
                                cancelAutoHide: t.noop,
                                scope: e.scope || i.$new(e.isolateScope),
                                onShow: function (e, t, n) {
                                    return c.enter(t, n.parent)
                                },
                                onRemove: function (e, t) {
                                    return t && c.leave(t) || o.when()
                                }
                            }, e)
                        }

                        function g(e) {
                            var t = e.skipCompile ? null : l.compile(e);
                            return t || o(function (t) {
                                    t({
                                        locals: {}, link: function () {
                                            return e.element
                                        }
                                    })
                                })
                        }

                        function E(e, n) {
                            t.extend(e.locals, n);
                            var o = e.link(n.scope);
                            return n.element = o, n.parent = v(o, n), n.themable && m(o), o
                        }

                        function v(n, o) {
                            var r = o.parent;
                            if (r = t.isFunction(r) ? r(o.scope, n, o) : t.isString(r) ? t.element(e[0].querySelector(r)) : t.element(r), !(r || {}).length) {
                                var i;
                                return d[0] && d[0].querySelector && (i = d[0].querySelector(":not(svg) > body")), i || (i = d[0]), "#comment" == i.nodeName && (i = e[0].body), t.element(i)
                            }
                            return r
                        }

                        function M() {
                            var e, o = t.noop;
                            u.hideDelay && (e = a(b.hide, u.hideDelay), o = function () {
                                a.cancel(e)
                            }), u.cancelAutoHide = function () {
                                o(), u.cancelAutoHide = n
                            }
                        }

                        function $(e, n, r) {
                            var i = n.onComplete || t.noop;
                            return o(function (t, a) {
                                try {
                                    o.when(n.onShow(n.scope, e, n, r)).then(function () {
                                        i(n.scope, e, n), M(), t(e)
                                    }, a)
                                } catch (d) {
                                    a(d.message)
                                }
                            })
                        }

                        function y(e, n) {
                            var o = n.onRemoving || t.noop;
                            return r(function (t, i) {
                                try {
                                    var a = r.when(n.onRemove(n.scope, e, n) || !0);
                                    o(e, a), 1 == n.$destroy ? t(e) : a.then(function () {
                                        !n.preserveScope && n.scope && n.scope.$destroy(), t(e)
                                    }, i)
                                } catch (d) {
                                    i(d.message)
                                }
                            })
                        }

                        var A, C, T = o.when(!0);
                        return u = f(u), A = {options: u, deferred: o.defer(), show: h, remove: p}
                    }

                    var b, E = !1, v = !0, M = [];
                    return b = {show: u, hide: h, cancel: p, destroy: f}
                }
            }

            return e.$get = o, o.$inject = ["$document", "$q", "$$q", "$rootScope", "$timeout", "$rootElement", "$animate", "$mdUtil", "$mdCompiler", "$mdTheming", "$log"], e
        }

        t.module("material.core").provider("$$interimElement", e)
    }(), function () {
        !function () {
            function e(e) {
                function r(r, i) {
                    var c = !1, s = ["", "-sm", "-gt-sm", "-md", "-gt-md", "-lg", "-gt-lg"];
                    return t.forEach(s, function (t) {
                        if (e === "layout" + t) {
                            var s = o(r, "md-layout" + t, i), l = i.$normalize(e), m = i[l] ? i[l].replace(/\s+/g, "-") : "row", u = m ? !n(m) : !1, h = n(m);
                            u && r.addClass(a.supplant("md-layout{0}-{1}", [t, m])), h && i.$observe(l, s), d.removeAttributes && r.removeAttr(e), c = !0
                        }
                    }), c
                }

                function i(t, r, i) {
                    var a = o(r, e, i), c = i.$normalize(e), s = i[c] ? i[c].replace(/\s+/g, "-") : null, l = s ? !n(s) : !1, m = n(s);
                    l && r.addClass(e + "-" + s), m && i.$observe(c, a), l || m || r.addClass(e), d.removeAttributes && r.removeAttr(e)
                }

                return ["$mdUtil", "$$mdLayout", "$document", "$parse", "$interpolate", function (e, n, o, l, m) {
                    return a = e, d = n, c = l, s = m, {
                        restrict: "A", compile: function (e, n) {
                            return r(e, n) ? t.noop : (i(null, e, n), i)
                        }
                    }
                }]
            }

            function n(e) {
                return (e || "").indexOf(s.startSymbol()) > -1
            }

            function o(e, t, n) {
                var o;
                return function (n) {
                    var r = String(n || "").replace(/\s+/g, "-");
                    e.removeClass(o), o = r ? t + "-" + r : t, e.addClass(o), d.removeAttributes && e.removeAttr(t)
                }
            }

            function r(e) {
                function t(t, n) {
                    n.addClass(e), d.removeAttributes && n.removeAttr(e)
                }

                return ["$$mdLayout", "$document", function (e, n) {
                    return d = e, {
                        restrict: "A", compile: function (e, n) {
                            return t(null, e), t
                        }
                    }
                }]
            }

            function i(e) {
                var n = e.split("-");
                return ["$log", function (o) {
                    return o.warn(e + "has been deprecated. Please use a `" + n[0] + "-gt-<xxx>` variant."), t.noop
                }]
            }

            var a, d, c, s;
            t.module("material.core.layout", ["ng"]).factory("$$mdLayout", function () {
                return {removeAttributes: !0}
            }).directive("layout", e("layout")).directive("layoutSm", e("layout-sm")).directive("layoutGtSm", e("layout-gt-sm")).directive("layoutMd", e("layout-md")).directive("layoutGtMd", e("layout-gt-md")).directive("layoutLg", e("layout-lg")).directive("layoutGtLg", e("layout-gt-lg")).directive("flex", e("flex")).directive("flexSm", e("flex-sm")).directive("flexGtSm", e("flex-gt-sm")).directive("flexMd", e("flex-md")).directive("flexGtMd", e("flex-gt-md")).directive("flexLg", e("flex-lg")).directive("flexGtLg", e("flex-gt-lg")).directive("layoutAlign", e("layout-align")).directive("layoutAlignSm", e("layout-align-sm")).directive("layoutAlignGtSm", e("layout-align-gt-sm")).directive("layoutAlignMd", e("layout-align-md")).directive("layoutAlignGtMd", e("layout-align-gt-md")).directive("layoutAlignLg", e("layout-align-lg")).directive("layoutAlignGtLg", e("layout-align-gt-lg")).directive("flexOrder", e("flex-order")).directive("flexOrderSm", e("flex-order-sm")).directive("flexOrderGtSm", e("flex-order-gt-sm")).directive("flexOrderMd", e("flex-order-md")).directive("flexOrderGtMd", e("flex-order-gt-md")).directive("flexOrderLg", e("flex-order-lg")).directive("flexOrderGtLg", e("flex-order-gt-lg")).directive("offset", e("offset")).directive("offsetSm", e("offset-sm")).directive("offsetGtSm", e("offset-gt-sm")).directive("offsetMd", e("offset-md")).directive("offsetGtMd", e("offset-gt-md")).directive("offsetLg", e("offset-lg")).directive("offsetGtLg", e("offset-gt-lg")).directive("layoutMargin", r("layout-margin")).directive("layoutPadding", r("layout-padding")).directive("layoutWrap", r("layout-wrap")).directive("layoutFill", r("layout-fill")).directive("hide", r("hide")).directive("hideSm", r("hide-sm")).directive("hideGtSm", r("hide-gt-sm")).directive("hideMd", r("hide-md")).directive("hideGtMd", r("hide-gt-md")).directive("hideLg", r("hide-lg")).directive("hideGtLg", r("hide-gt-lg")).directive("show", r("show")).directive("showSm", r("show-sm")).directive("showGtSm", r("show-gt-sm")).directive("showMd", r("show-md")).directive("showGtMd", r("show-gt-md")).directive("showLg", r("show-lg")).directive("showGtLg", r("show-gt-lg")).directive("layoutLtMd", i("layout-lt-md", !0)).directive("layoutLtLg", i("layout-lt-lg", !0)).directive("flexLtMd", i("flex-lt-md", !0)).directive("flexLtLg", i("flex-lt-lg", !0)).directive("layoutAlignLtMd", i("layout-align-lt-md")).directive("layoutAlignLtLg", i("layout-align-lt-lg")).directive("flexOrderLtMd", i("flex-order-lt-md")).directive("flexOrderLtLg", i("flex-order-lt-lg")).directive("offsetLtMd", i("offset-lt-md")).directive("offsetLtLg", i("offset-lt-lg")).directive("hideLtMd", i("hide-lt-md")).directive("hideLtLg", i("hide-lt-lg")).directive("showLtMd", i("show-lt-md")).directive("showLtLg", i("show-lt-lg"))
        }()
    }(), function () {
        function e(e, n) {
            function o(e) {
                return e && "" !== e
            }

            var r, i = [], a = {};
            return r = {
                notFoundError: function (t) {
                    e.error("No instance found for handle", t)
                }, getInstances: function () {
                    return i
                }, get: function (e) {
                    if (!o(e))return null;
                    var t, n, r;
                    for (t = 0, n = i.length; n > t; t++)if (r = i[t], r.$$mdHandle === e)return r;
                    return null
                }, register: function (e, n) {
                    function o() {
                        var t = i.indexOf(e);
                        -1 !== t && i.splice(t, 1)
                    }

                    function r() {
                        var t = a[n];
                        t && (t.resolve(e), delete a[n])
                    }

                    return n ? (e.$$mdHandle = n, i.push(e), r(), o) : t.noop
                }, when: function (e) {
                    if (o(e)) {
                        var t = n.defer(), i = r.get(e);
                        return i ? t.resolve(i) : a[e] = t, t.promise
                    }
                    return n.reject("Invalid `md-component-id` value.")
                }
            }
        }

        t.module("material.core").factory("$mdComponentRegistry", e), e.$inject = ["$log", "$q"]
    }(), function () {
        !function () {
            function e(e) {
                function n(e) {
                    return e.hasClass("md-icon-button") ? {
                        isMenuItem: e.hasClass("md-menu-item"),
                        fitRipple: !0,
                        center: !0
                    } : {isMenuItem: e.hasClass("md-menu-item"), dimBackground: !0}
                }

                return {
                    attach: function (o, r, i) {
                        return i = t.extend(n(r), i), e.attach(o, r, i)
                    }
                }
            }

            t.module("material.core").factory("$mdButtonInkRipple", e), e.$inject = ["$mdInkRipple"]
        }()
    }(), function () {
        !function () {
            function e(e) {
                function n(n, o, r) {
                    return e.attach(n, o, t.extend({center: !0, dimBackground: !1, fitRipple: !0}, r))
                }

                return {attach: n}
            }

            t.module("material.core").factory("$mdCheckboxInkRipple", e), e.$inject = ["$mdInkRipple"]
        }()
    }(), function () {
        !function () {
            function e(e) {
                function n(n, o, r) {
                    return e.attach(n, o, t.extend({center: !1, dimBackground: !0, outline: !1, rippleSize: "full"}, r))
                }

                return {attach: n}
            }

            t.module("material.core").factory("$mdListInkRipple", e), e.$inject = ["$mdInkRipple"]
        }()
    }(), function () {
        function e(e, n) {
            return {
                controller: t.noop, link: function (t, o, r) {
                    r.hasOwnProperty("mdInkRippleCheckbox") ? n.attach(t, o) : e.attach(t, o)
                }
            }
        }

        function n(e) {
            function n(n, r, i) {
                return r.controller("mdNoInk") ? t.noop : e.instantiate(o, {$scope: n, $element: r, rippleOptions: i})
            }

            return {attach: n}
        }

        function o(e, n, o, r, i, a) {
            this.$window = r, this.$timeout = i, this.$mdUtil = a, this.$scope = e, this.$element = n, this.options = o, this.mousedown = !1, this.ripples = [], this.timeout = null, this.lastRipple = null, a.valueOnUse(this, "container", this.createContainer), a.valueOnUse(this, "color", this.getColor, 1), a.valueOnUse(this, "background", this.getColor, .5), (n.controller("mdInkRipple") || {}).createRipple = t.bind(this, this.createRipple), this.bindEvents()
        }

        function r() {
            return {controller: t.noop}
        }

        t.module("material.core").factory("$mdInkRipple", n).directive("mdInkRipple", e).directive("mdNoInk", r).directive("mdNoBar", r).directive("mdNoStretch", r);
        var i = 450;
        e.$inject = ["$mdButtonInkRipple", "$mdCheckboxInkRipple"], n.$inject = ["$injector"], o.$inject = ["$scope", "$element", "rippleOptions", "$window", "$timeout", "$mdUtil"], o.prototype.getColor = function (e) {
            function t() {
                var e = this.options.colorElement && this.options.colorElement[0];
                return e = e || this.$element[0], e ? this.$window.getComputedStyle(e).color : "rgb(0,0,0)"
            }

            function n(t) {
                function n(e) {
                    var t = "#" === e[0] ? e.substr(1) : e, n = t.length / 3, o = t.substr(0, n), r = t.substr(n, n), i = t.substr(2 * n);
                    return 1 === n && (o += o, r += r, i += i), "rgba(" + parseInt(o, 16) + "," + parseInt(r, 16) + "," + parseInt(i, 16) + ",0.1)"
                }

                function o(e) {
                    return e.replace(")", ", 0.1)").replace("(", "a(")
                }

                if (t)return 0 === t.indexOf("rgba") ? t.replace(/\d?\.?\d*\s*\)\s*$/, (.1 * e).toString() + ")") : 0 === t.indexOf("rgb") ? o(t) : 0 === t.indexOf("#") ? n(t) : void 0
            }

            return e = e || 1, n(this.$element.attr("md-ink-ripple")) || n(t.call(this))
        }, o.prototype.bindEvents = function () {
            this.$element.on("mousedown", t.bind(this, this.handleMousedown)), this.$element.on("mouseup", t.bind(this, this.handleMouseup)), this.$element.on("mouseleave", t.bind(this, this.handleMouseup))
        }, o.prototype.handleMousedown = function (e) {
            this.mousedown || (e.hasOwnProperty("originalEvent") && (e = e.originalEvent), this.mousedown = !0, this.options.center ? this.createRipple(this.container.prop("clientWidth") / 2, this.container.prop("clientWidth") / 2) : this.createRipple(e.layerX, e.layerY))
        }, o.prototype.handleMouseup = function () {
            if (this.mousedown || this.lastRipple) {
                var e = this;
                this.mousedown = !1, this.$mdUtil.nextTick(function () {
                    e.clearRipples()
                }, !1)
            }
        }, o.prototype.clearRipples = function () {
            for (var e = 0; e < this.ripples.length; e++)this.fadeInComplete(this.ripples[e])
        }, o.prototype.createContainer = function () {
            var e = t.element('<div class="md-ripple-container"></div>');
            return this.$element.append(e), e
        }, o.prototype.clearTimeout = function () {
            this.timeout && (this.$timeout.cancel(this.timeout), this.timeout = null)
        }, o.prototype.isRippleAllowed = function () {
            var e = this.$element[0];
            do {
                if (!e.tagName || "BODY" === e.tagName)break;
                if (e && e.hasAttribute && e.hasAttribute("disabled"))return !1
            } while (e = e.parentNode);
            return !0
        }, o.prototype.createRipple = function (e, n) {
            function o(e) {
                return e ? e.replace("rgba", "rgb").replace(/,[^\),]+\)/, ")") : "rgb(0,0,0)"
            }

            function r(e, t, n) {
                return e ? Math.max(t, n) : Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2))
            }

            if (this.isRippleAllowed()) {
                var a = this, d = t.element('<div class="md-ripple"></div>'), c = this.$element.prop("clientWidth"), s = this.$element.prop("clientHeight"), l = 2 * Math.max(Math.abs(c - e), e), m = 2 * Math.max(Math.abs(s - n), n), u = r(this.options.fitRipple, l, m);
                d.css({
                    left: e + "px",
                    top: n + "px",
                    background: "black",
                    width: u + "px",
                    height: u + "px",
                    backgroundColor: o(this.color),
                    borderColor: o(this.color)
                }), this.lastRipple = d, this.clearTimeout(), this.timeout = this.$timeout(function () {
                    a.clearTimeout(), a.mousedown || a.fadeInComplete(d)
                }, .35 * i, !1), this.options.dimBackground && this.container.css({backgroundColor: this.background}), this.container.append(d), this.ripples.push(d), d.addClass("md-ripple-placed"), this.$mdUtil.nextTick(function () {
                    d.addClass("md-ripple-scaled md-ripple-active"), a.$timeout(function () {
                        a.clearRipples()
                    }, i, !1)
                }, !1)
            }
        }, o.prototype.fadeInComplete = function (e) {
            this.lastRipple === e ? this.timeout || this.mousedown || this.removeRipple(e) : this.removeRipple(e)
        }, o.prototype.removeRipple = function (e) {
            var t = this, n = this.ripples.indexOf(e);
            0 > n || (this.ripples.splice(this.ripples.indexOf(e), 1), e.removeClass("md-ripple-active"), 0 === this.ripples.length && this.container.css({backgroundColor: ""}), this.$timeout(function () {
                t.fadeOutComplete(e)
            }, i, !1))
        }, o.prototype.fadeOutComplete = function (e) {
            e.remove(), this.lastRipple = null
        }
    }(), function () {
        !function () {
            function e(e) {
                function n(n, o, r) {
                    return e.attach(n, o, t.extend({center: !1, dimBackground: !0, outline: !1, rippleSize: "full"}, r))
                }

                return {attach: n}
            }

            t.module("material.core").factory("$mdTabInkRipple", e), e.$inject = ["$mdInkRipple"]
        }()
    }(), function () {
        t.module("material.core.theming.palette", []).constant("$mdColorPalette", {
            red: {
                50: "#ffebee",
                100: "#ffcdd2",
                200: "#ef9a9a",
                300: "#e57373",
                400: "#ef5350",
                500: "#f44336",
                600: "#e53935",
                700: "#d32f2f",
                800: "#c62828",
                900: "#b71c1c",
                A100: "#ff8a80",
                A200: "#ff5252",
                A400: "#ff1744",
                A700: "#d50000",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300 A100",
                contrastStrongLightColors: "400 500 600 700 A200 A400 A700"
            },
            pink: {
                50: "#fce4ec",
                100: "#f8bbd0",
                200: "#f48fb1",
                300: "#f06292",
                400: "#ec407a",
                500: "#e91e63",
                600: "#d81b60",
                700: "#c2185b",
                800: "#ad1457",
                900: "#880e4f",
                A100: "#ff80ab",
                A200: "#ff4081",
                A400: "#f50057",
                A700: "#c51162",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100",
                contrastStrongLightColors: "500 600 A200 A400 A700"
            },
            purple: {
                50: "#f3e5f5",
                100: "#e1bee7",
                200: "#ce93d8",
                300: "#ba68c8",
                400: "#ab47bc",
                500: "#9c27b0",
                600: "#8e24aa",
                700: "#7b1fa2",
                800: "#6a1b9a",
                900: "#4a148c",
                A100: "#ea80fc",
                A200: "#e040fb",
                A400: "#d500f9",
                A700: "#aa00ff",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100",
                contrastStrongLightColors: "300 400 A200 A400 A700"
            },
            "deep-purple": {
                50: "#ede7f6",
                100: "#d1c4e9",
                200: "#b39ddb",
                300: "#9575cd",
                400: "#7e57c2",
                500: "#673ab7",
                600: "#5e35b1",
                700: "#512da8",
                800: "#4527a0",
                900: "#311b92",
                A100: "#b388ff",
                A200: "#7c4dff",
                A400: "#651fff",
                A700: "#6200ea",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100",
                contrastStrongLightColors: "300 400 A200"
            },
            indigo: {
                50: "#e8eaf6",
                100: "#c5cae9",
                200: "#9fa8da",
                300: "#7986cb",
                400: "#5c6bc0",
                500: "#3f51b5",
                600: "#3949ab",
                700: "#303f9f",
                800: "#283593",
                900: "#1a237e",
                A100: "#8c9eff",
                A200: "#536dfe",
                A400: "#3d5afe",
                A700: "#304ffe",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100",
                contrastStrongLightColors: "300 400 A200 A400"
            },
            blue: {
                50: "#e3f2fd",
                100: "#bbdefb",
                200: "#90caf9",
                300: "#64b5f6",
                400: "#42a5f5",
                500: "#2196f3",
                600: "#1e88e5",
                700: "#1976d2",
                800: "#1565c0",
                900: "#0d47a1",
                A100: "#82b1ff",
                A200: "#448aff",
                A400: "#2979ff",
                A700: "#2962ff",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300 400 A100",
                contrastStrongLightColors: "500 600 700 A200 A400 A700"
            },
            "light-blue": {
                50: "#e1f5fe",
                100: "#b3e5fc",
                200: "#81d4fa",
                300: "#4fc3f7",
                400: "#29b6f6",
                500: "#03a9f4",
                600: "#039be5",
                700: "#0288d1",
                800: "#0277bd",
                900: "#01579b",
                A100: "#80d8ff",
                A200: "#40c4ff",
                A400: "#00b0ff",
                A700: "#0091ea",
                contrastDefaultColor: "dark",
                contrastLightColors: "600 700 800 900 A700",
                contrastStrongLightColors: "600 700 800 A700"
            },
            cyan: {
                50: "#e0f7fa",
                100: "#b2ebf2",
                200: "#80deea",
                300: "#4dd0e1",
                400: "#26c6da",
                500: "#00bcd4",
                600: "#00acc1",
                700: "#0097a7",
                800: "#00838f",
                900: "#006064",
                A100: "#84ffff",
                A200: "#18ffff",
                A400: "#00e5ff",
                A700: "#00b8d4",
                contrastDefaultColor: "dark",
                contrastLightColors: "700 800 900",
                contrastStrongLightColors: "700 800 900"
            },
            teal: {
                50: "#e0f2f1",
                100: "#b2dfdb",
                200: "#80cbc4",
                300: "#4db6ac",
                400: "#26a69a",
                500: "#009688",
                600: "#00897b",
                700: "#00796b",
                800: "#00695c",
                900: "#004d40",
                A100: "#a7ffeb",
                A200: "#64ffda",
                A400: "#1de9b6",
                A700: "#00bfa5",
                contrastDefaultColor: "dark",
                contrastLightColors: "500 600 700 800 900",
                contrastStrongLightColors: "500 600 700"
            },
            green: {
                50: "#e8f5e9",
                100: "#c8e6c9",
                200: "#a5d6a7",
                300: "#81c784",
                400: "#66bb6a",
                500: "#4caf50",
                600: "#43a047",
                700: "#388e3c",
                800: "#2e7d32",
                900: "#1b5e20",
                A100: "#b9f6ca",
                A200: "#69f0ae",
                A400: "#00e676",
                A700: "#00c853",
                contrastDefaultColor: "dark",
                contrastLightColors: "600 700 800 900",
                contrastStrongLightColors: "600 700"
            },
            "light-green": {
                50: "#f1f8e9",
                100: "#dcedc8",
                200: "#c5e1a5",
                300: "#aed581",
                400: "#9ccc65",
                500: "#8bc34a",
                600: "#7cb342",
                700: "#689f38",
                800: "#558b2f",
                900: "#33691e",
                A100: "#ccff90",
                A200: "#b2ff59",
                A400: "#76ff03",
                A700: "#64dd17",
                contrastDefaultColor: "dark",
                contrastLightColors: "700 800 900",
                contrastStrongLightColors: "700 800 900"
            },
            lime: {
                50: "#f9fbe7",
                100: "#f0f4c3",
                200: "#e6ee9c",
                300: "#dce775",
                400: "#d4e157",
                500: "#cddc39",
                600: "#c0ca33",
                700: "#afb42b",
                800: "#9e9d24",
                900: "#827717",
                A100: "#f4ff81",
                A200: "#eeff41",
                A400: "#c6ff00",
                A700: "#aeea00",
                contrastDefaultColor: "dark",
                contrastLightColors: "900",
                contrastStrongLightColors: "900"
            },
            yellow: {
                50: "#fffde7",
                100: "#fff9c4",
                200: "#fff59d",
                300: "#fff176",
                400: "#ffee58",
                500: "#ffeb3b",
                600: "#fdd835",
                700: "#fbc02d",
                800: "#f9a825",
                900: "#f57f17",
                A100: "#ffff8d",
                A200: "#ffff00",
                A400: "#ffea00",
                A700: "#ffd600",
                contrastDefaultColor: "dark"
            },
            amber: {
                50: "#fff8e1",
                100: "#ffecb3",
                200: "#ffe082",
                300: "#ffd54f",
                400: "#ffca28",
                500: "#ffc107",
                600: "#ffb300",
                700: "#ffa000",
                800: "#ff8f00",
                900: "#ff6f00",
                A100: "#ffe57f",
                A200: "#ffd740",
                A400: "#ffc400",
                A700: "#ffab00",
                contrastDefaultColor: "dark"
            },
            orange: {
                50: "#fff3e0",
                100: "#ffe0b2",
                200: "#ffcc80",
                300: "#ffb74d",
                400: "#ffa726",
                500: "#ff9800",
                600: "#fb8c00",
                700: "#f57c00",
                800: "#ef6c00",
                900: "#e65100",
                A100: "#ffd180",
                A200: "#ffab40",
                A400: "#ff9100",
                A700: "#ff6d00",
                contrastDefaultColor: "dark",
                contrastLightColors: "800 900",
                contrastStrongLightColors: "800 900"
            },
            "deep-orange": {
                50: "#fbe9e7",
                100: "#ffccbc",
                200: "#ffab91",
                300: "#ff8a65",
                400: "#ff7043",
                500: "#ff5722",
                600: "#f4511e",
                700: "#e64a19",
                800: "#d84315",
                900: "#bf360c",
                A100: "#ff9e80",
                A200: "#ff6e40",
                A400: "#ff3d00",
                A700: "#dd2c00",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300 400 A100 A200",
                contrastStrongLightColors: "500 600 700 800 900 A400 A700"
            },
            brown: {
                50: "#efebe9",
                100: "#d7ccc8",
                200: "#bcaaa4",
                300: "#a1887f",
                400: "#8d6e63",
                500: "#795548",
                600: "#6d4c41",
                700: "#5d4037",
                800: "#4e342e",
                900: "#3e2723",
                A100: "#d7ccc8",
                A200: "#bcaaa4",
                A400: "#8d6e63",
                A700: "#5d4037",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200",
                contrastStrongLightColors: "300 400"
            },
            grey: {
                50: "#fafafa",
                100: "#f5f5f5",
                200: "#eeeeee",
                300: "#e0e0e0",
                400: "#bdbdbd",
                500: "#9e9e9e",
                600: "#757575",
                700: "#616161",
                800: "#424242",
                900: "#212121",
                1000: "#000000",
                A100: "#ffffff",
                A200: "#eeeeee",
                A400: "#bdbdbd",
                A700: "#616161",
                contrastDefaultColor: "dark",
                contrastLightColors: "600 700 800 900"
            },
            "blue-grey": {
                50: "#eceff1",
                100: "#cfd8dc",
                200: "#b0bec5",
                300: "#90a4ae",
                400: "#78909c",
                500: "#607d8b",
                600: "#546e7a",
                700: "#455a64",
                800: "#37474f",
                900: "#263238",
                A100: "#cfd8dc",
                A200: "#b0bec5",
                A400: "#78909c",
                A700: "#455a64",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300",
                contrastStrongLightColors: "400 500"
            }
        })
    }(), function () {
        function e(e) {
            function o(e, t) {
                return t = t || {}, l[e] = a(e, t), b
            }

            function r(e, n) {
                return a(e, t.extend({}, l[e] || {}, n))
            }

            function a(e, t) {
                var n = C.filter(function (e) {
                    return !t[e]
                });
                if (n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1", n.join(", ")).replace("%2", e));
                return t
            }

            function d(e, n) {
                if (m[e])return m[e];
                n = n || "default";
                var o = "string" == typeof n ? m[n] : n, r = new c(e);
                return o && t.forEach(o.colors, function (e, n) {
                    r.colors[n] = {name: e.name, hues: t.extend({}, e.hues)}
                }), m[e] = r, r
            }

            function c(e) {
                function n(e) {
                    if (e = 0 === arguments.length ? !0 : !!e, e !== o.isDark) {
                        o.isDark = e, o.foregroundPalette = o.isDark ? p : h, o.foregroundShadow = o.isDark ? f : g;
                        var n = o.isDark ? A : y, r = o.isDark ? y : A;
                        return t.forEach(n, function (e, t) {
                            var n = o.colors[t], i = r[t];
                            if (n)for (var a in n.hues)n.hues[a] === i[a] && (n.hues[a] = e[a])
                        }), o
                    }
                }

                var o = this;
                o.name = e, o.colors = {}, o.dark = n, n(!1), M.forEach(function (e) {
                    var n = (o.isDark ? A : y)[e];
                    o[e + "Palette"] = function (r, i) {
                        var a = o.colors[e] = {name: r, hues: t.extend({}, n, i)};
                        return Object.keys(a.hues).forEach(function (e) {
                            if (!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1", e).replace("%2", o.name).replace("%3", r).replace("%4", Object.keys(n).join(", ")))
                        }), Object.keys(a.hues).map(function (e) {
                            return a.hues[e]
                        }).forEach(function (t) {
                            if (-1 == C.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1", t).replace("%2", o.name).replace("%3", e).replace("%4", r).replace("%5", C.join(", ")))
                        }), o
                    }, o[e + "Color"] = function () {
                        var t = Array.prototype.slice.call(arguments);
                        return console.warn("$mdThemingProviderTheme." + e + "Color() has been deprecated. Use $mdThemingProviderTheme." + e + "Palette() instead."), o[e + "Palette"].apply(o, t)
                    }
                })
            }

            function u(e, o) {
                function r(e) {
                    return e === n || "" === e ? !0 : i.THEMES[e] !== n
                }

                function i(t, o) {
                    o === n && (o = t, t = n), t === n && (t = e), i.inherit(o, o)
                }

                return i.inherit = function (n, i) {
                    function a(e) {
                        r(e) || o.warn("Attempted to use unregistered theme '" + e + "'. Register it with $mdThemingProvider.theme().");
                        var t = n.data("$mdThemeName");
                        t && n.removeClass("md-" + t + "-theme"), n.addClass("md-" + e + "-theme"), n.data("$mdThemeName", e), d && n.data("$mdThemeController", d)
                    }

                    var d = i.controller("mdTheme"), c = n.attr("md-theme-watch");
                    if ((v || t.isDefined(c)) && "false" != c) {
                        var s = e.$watch(function () {
                            return d && d.$mdTheme || E
                        }, a);
                        n.on("$destroy", s)
                    } else {
                        var l = d && d.$mdTheme || E;
                        a(l)
                    }
                }, i.THEMES = t.extend({}, m), i.defaultTheme = function () {
                    return E
                }, i.registered = r, i
            }

            l = {}, m = {};
            var b, E = "default", v = !1;
            return t.extend(l, e), u.$inject = ["$rootScope", "$log"], b = {
                definePalette: o,
                extendPalette: r,
                theme: d,
                setDefaultTheme: function (e) {
                    E = e
                },
                alwaysWatchTheme: function (e) {
                    v = e
                },
                $get: u,
                _LIGHT_DEFAULT_HUES: y,
                _DARK_DEFAULT_HUES: A,
                _PALETTES: l,
                _THEMES: m,
                _parseRules: i,
                _rgba: s
            }
        }

        function o(e, t, n) {
            return {
                priority: 100, link: {
                    pre: function (o, r, i) {
                        var a = {
                            $setTheme: function (t) {
                                e.registered(t) || n.warn("attempted to use unregistered theme '" + t + "'"), a.$mdTheme = t
                            }
                        };
                        r.data("$mdThemeController", a), a.$setTheme(t(i.mdTheme)(o)), i.$observe("mdTheme", a.$setTheme)
                    }
                }
            }
        }

        function r(e) {
            return e
        }

        function i(e, n, o) {
            d(e, n), o = o.replace(/THEME_NAME/g, e.name);
            var r = [], i = e.colors[n], a = new RegExp(".md-" + e.name + "-theme", "g"), c = new RegExp("('|\")?{{\\s*(" + n + ")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?", "g"), m = /'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g, u = l[i.name];
            return o = o.replace(m, function (t, n, o, r, i) {
                return "foreground" === n ? "shadow" == o ? e.foregroundShadow : e.foregroundPalette[o] || e.foregroundPalette[1] : (0 === o.indexOf("hue") && (o = e.colors[n].hues[o]), s((l[e.colors[n].name][o] || "")[i ? "contrast" : "value"], r))
            }), t.forEach(i.hues, function (t, n) {
                var i = o.replace(c, function (e, n, o, r, i) {
                    return s(u[t]["color" === r ? "value" : "contrast"], i)
                });
                "default" !== n && (i = i.replace(a, ".md-" + e.name + "-theme.md-" + n)), "default" == e.name && (i = i.replace(/\.md-default-theme/g, "")), r.push(i)
            }), r
        }

        function a(e) {
            function n(e) {
                var n = e.contrastDefaultColor, o = e.contrastLightColors || [], r = e.contrastStrongLightColors || [], i = e.contrastDarkColors || [];
                "string" == typeof o && (o = o.split(" ")), "string" == typeof r && (r = r.split(" ")), "string" == typeof i && (i = i.split(" ")), delete e.contrastDefaultColor, delete e.contrastLightColors, delete e.contrastStrongLightColors, delete e.contrastDarkColors, t.forEach(e, function (a, d) {
                    function s() {
                        return "light" === n ? i.indexOf(d) > -1 ? b : r.indexOf(d) > -1 ? v : E : o.indexOf(d) > -1 ? r.indexOf(d) > -1 ? v : E : b
                    }

                    if (!t.isObject(a)) {
                        var l = c(a);
                        if (!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1", a).replace("%2", e.name).replace("%3", d));
                        e[d] = {value: l, contrast: s()}
                    }
                })
            }

            var o = document.getElementsByTagName("head")[0], r = o ? o.firstElementChild : null, a = e.has("$MD_THEME_CSS") ? e.get("$MD_THEME_CSS") : "";
            if (r && 0 !== a.length) {
                t.forEach(l, n);
                var d = {}, s = a.split(/\}(?!(\}|'|"|;))/).filter(function (e) {
                    return e && e.length
                }).map(function (e) {
                    return e.trim() + "}"
                }), h = new RegExp("md-(" + M.join("|") + ")", "g");
                M.forEach(function (e) {
                    d[e] = ""
                }), s.forEach(function (e) {
                    for (var t, n = (e.match(h), 0); t = M[n]; n++)if (e.indexOf(".md-" + t) > -1)return d[t] += e;
                    for (n = 0; t = M[n]; n++)if (e.indexOf(t) > -1)return d[t] += e;
                    return d[$] += e
                }), t.forEach(m, function (e) {
                    u[e.name] || (M.forEach(function (t) {
                        for (var n = i(e, t, d[t]); n.length;) {
                            var a = document.createElement("style");
                            a.setAttribute("type", "text/css"), a.appendChild(document.createTextNode(n.shift())), o.insertBefore(a, r)
                        }
                    }), e.colors.primary.name == e.colors.accent.name && console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec."), u[e.name] = !0)
                })
            }
        }

        function d(e, t) {
            if (!l[(e.colors[t] || {}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1", e.name).replace("%2", t).replace("%3", Object.keys(l).join(", ")))
        }

        function c(e) {
            if (t.isArray(e) && 3 == e.length)return e;
            if (/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g, "").split(",").map(function (e, t) {
                return 3 == t ? parseFloat(e, 10) : parseInt(e, 10)
            });
            if ("#" == e.charAt(0) && (e = e.substring(1)), /^([a-fA-F0-9]{3}){1,2}$/g.test(e)) {
                var n = e.length / 3, o = e.substr(0, n), r = e.substr(n, n), i = e.substr(2 * n);
                return 1 === n && (o += o, r += r, i += i), [parseInt(o, 16), parseInt(r, 16), parseInt(i, 16)]
            }
        }

        function s(e, n) {
            return e ? (4 == e.length && (e = t.copy(e), n ? e.pop() : n = e.pop()), n && ("number" == typeof n || "string" == typeof n && n.length) ? "rgba(" + e.join(",") + "," + n + ")" : "rgb(" + e.join(",") + ")") : "rgb('0,0,0')"
        }

        t.module("material.core.theming", ["material.core.theming.palette"]).directive("mdTheme", o).directive("mdThemable", r).provider("$mdTheming", e).run(a);
        var l, m, u = {}, h = {
            name: "dark",
            1: "rgba(0,0,0,0.87)",
            2: "rgba(0,0,0,0.54)",
            3: "rgba(0,0,0,0.26)",
            4: "rgba(0,0,0,0.12)"
        }, p = {
            name: "light",
            1: "rgba(255,255,255,1.0)",
            2: "rgba(255,255,255,0.7)",
            3: "rgba(255,255,255,0.3)",
            4: "rgba(255,255,255,0.12)"
        }, f = "1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)", g = "", b = c("rgba(0,0,0,0.87)"), E = c("rgba(255,255,255,0.87"), v = c("rgb(255,255,255)"), M = ["primary", "accent", "warn", "background"], $ = "primary", y = {
            accent: {
                "default": "A200",
                "hue-1": "A100",
                "hue-2": "A400",
                "hue-3": "A700"
            }, background: {"default": "A100", "hue-1": "300", "hue-2": "800", "hue-3": "900"}
        }, A = {background: {"default": "800", "hue-1": "600", "hue-2": "300", "hue-3": "900"}};
        M.forEach(function (e) {
            var t = {"default": "500", "hue-1": "300", "hue-2": "800", "hue-3": "A100"};
            y[e] || (y[e] = t), A[e] || (A[e] = t)
        });
        var C = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "A100", "A200", "A400", "A700"];
        e.$inject = ["$mdColorPalette"], o.$inject = ["$mdTheming", "$interpolate", "$log"], r.$inject = ["$mdTheming"], a.$inject = ["$injector"]
    }(), function () {
        function e(e, n, o, r, i) {
            var a;
            return a = {
                translate3d: function (e, t, n, o) {
                    function r(n) {
                        return i(e, {
                            to: n || t,
                            addClass: o.transitionOutClass,
                            removeClass: o.transitionInClass
                        }).start()
                    }

                    return i(e, {from: t, to: n, addClass: o.transitionInClass}).start().then(function () {
                        return r
                    })
                }, waitTransitionEnd: function (e, t) {
                    var i = 3e3;
                    return n(function (n, a) {
                        function d(t) {
                            t && t.target !== e[0] || (t && o.cancel(c), e.off(r.CSS.TRANSITIONEND, d), n())
                        }

                        t = t || {};
                        var c = o(d, t.timeout || i);
                        e.on(r.CSS.TRANSITIONEND, d)
                    })
                }, calculateZoomToOrigin: function (n, o) {
                    var r = o.element, i = "translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )", d = t.bind(null, e.supplant, i), c = d({
                        centerX: 0,
                        centerY: 0,
                        scaleX: .5,
                        scaleY: .5
                    });
                    if (r) {
                        var s = a.clientRect(r) || a.copyRect(o.bounds), l = a.copyRect(n[0].getBoundingClientRect()), m = a.centerPointFor(l), u = a.centerPointFor(s);
                        c = d({
                            centerX: u.x - m.x,
                            centerY: u.y - m.y,
                            scaleX: Math.round(100 * Math.min(.5, s.width / l.width)) / 100,
                            scaleY: Math.round(100 * Math.min(.5, s.height / l.height)) / 100
                        })
                    }
                    return c
                }, toCss: function (e) {
                    function n(e, n, r) {
                        t.forEach(n.split(" "), function (e) {
                            o[e] = r
                        })
                    }

                    var o = {}, i = "left top right bottom width height x y min-width min-height max-width max-height";
                    return t.forEach(e, function (e, a) {
                        if (!t.isUndefined(e))if (i.indexOf(a) >= 0)o[a] = e + "px"; else switch (a) {
                            case"transition":
                                n(a, r.CSS.TRANSITION, e);
                                break;
                            case"transform":
                                n(a, r.CSS.TRANSFORM, e);
                                break;
                            case"transformOrigin":
                                n(a, r.CSS.TRANSFORM_ORIGIN, e)
                        }
                    }), o
                }, toTransformCss: function (e, n, o) {
                    var i = {};
                    return t.forEach(r.CSS.TRANSFORM.split(" "), function (t) {
                        i[t] = e
                    }), n && (o = o || "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important", i.transition = o), i
                }, copyRect: function (e, n) {
                    return e ? (n = n || {}, t.forEach("left top right bottom width height".split(" "), function (t) {
                        n[t] = Math.round(e[t])
                    }), n.width = n.width || n.right - n.left, n.height = n.height || n.bottom - n.top, n) : null
                }, clientRect: function (e) {
                    var n = t.element(e)[0].getBoundingClientRect(), o = function (e) {
                        return e && e.width > 0 && e.height > 0
                    };
                    return o(n) ? a.copyRect(n) : null
                }, centerPointFor: function (e) {
                    return {x: Math.round(e.left + e.width / 2), y: Math.round(e.top + e.height / 2)}
                }
            }
        }

        t.module("material.core").factory("$$mdAnimate", ["$q", "$timeout", "$mdConstant", "$animateCss", function (t, n, o, r) {
            return function (i) {
                return e(i, t, n, o, r)
            }
        }])
    }(), function () {
        t.version.minor >= 4 ? t.module("material.core.animate", []) : !function () {
            function e(e) {
                return e.replace(/-[a-z]/g, function (e) {
                    return e.charAt(1).toUpperCase()
                })
            }

            var n = t.forEach, o = t.isDefined(document.documentElement.style.WebkitAppearance), r = o ? "-webkit-" : "", i = (o ? "webkitTransitionEnd " : "") + "transitionend", a = (o ? "webkitAnimationEnd " : "") + "animationend", d = ["$document", function (e) {
                return function () {
                    return e[0].body.clientWidth + 1
                }
            }], c = ["$$rAF", function (e) {
                return function () {
                    var t = !1;
                    return e(function () {
                        t = !0
                    }), function (n) {
                        t ? n() : e(n)
                    }
                }
            }], s = ["$q", "$$rAFMutex", function (e, o) {
                function r(e) {
                    this.setHost(e), this._doneCallbacks = [], this._runInAnimationFrame = o(), this._state = 0
                }

                var i = 0, a = 1, d = 2;
                return r.prototype = {
                    setHost: function (e) {
                        this.host = e || {}
                    }, done: function (e) {
                        this._state === d ? e() : this._doneCallbacks.push(e)
                    }, progress: t.noop, getPromise: function () {
                        if (!this.promise) {
                            var t = this;
                            this.promise = e(function (e, n) {
                                t.done(function (t) {
                                    t === !1 ? n() : e()
                                })
                            })
                        }
                        return this.promise
                    }, then: function (e, t) {
                        return this.getPromise().then(e, t)
                    }, "catch": function (e) {
                        return this.getPromise()["catch"](e)
                    }, "finally": function (e) {
                        return this.getPromise()["finally"](e)
                    }, pause: function () {
                        this.host.pause && this.host.pause()
                    }, resume: function () {
                        this.host.resume && this.host.resume()
                    }, end: function () {
                        this.host.end && this.host.end(), this._resolve(!0)
                    }, cancel: function () {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    }, complete: function (e) {
                        var t = this;
                        t._state === i && (t._state = a, t._runInAnimationFrame(function () {
                            t._resolve(e)
                        }))
                    }, _resolve: function (e) {
                        this._state !== d && (n(this._doneCallbacks, function (t) {
                            t(e)
                        }), this._doneCallbacks.length = 0, this._state = d)
                    }
                }, r
            }];
            t.module("material.core.animate", []).factory("$$forceReflow", d).factory("$$AnimateRunner", s).factory("$$rAFMutex", c).factory("$animateCss", ["$window", "$$rAF", "$$AnimateRunner", "$$forceReflow", "$$jqLite", "$timeout", function (t, d, c, s, l, m) {
                function u(o, d) {
                    var s = [], l = M(o);
                    d.transitionStyle && s.push([r + "transition", d.transitionStyle]), d.keyframeStyle && s.push([r + "animation", d.keyframeStyle]), d.delay && s.push([r + "transition-delay", d.delay + "s"]), d.duration && s.push([r + "transition-duration", d.duration + "s"]);
                    var u = d.keyframeStyle || d.to && (d.duration > 0 || d.transitionStyle), f = !!d.addClass || !!d.removeClass, y = u || f;
                    $(o, !0), E(o, d);
                    var A, C, T = !1;
                    return {
                        close: t.close, start: function () {
                            function t() {
                                return T ? void 0 : (T = !0, A && C && o.off(A, C), h(o, d), b(o, d), n(s, function (t) {
                                    l.style[e(t[0])] = ""
                                }), u.complete(!0), u)
                            }

                            var u = new c;
                            return g(function () {
                                if ($(o, !1), !y)return t();
                                n(s, function (t) {
                                    var n = t[0], o = t[1];
                                    l.style[e(n)] = o
                                }), h(o, d);
                                var c = p(o);
                                if (0 === c.duration)return t();
                                var u = [];
                                d.easing && (c.transitionDuration && u.push([r + "transition-timing-function", d.easing]), c.animationDuration && u.push([r + "animation-timing-function", d.easing])), d.delay && c.animationDelay && u.push([r + "animation-delay", d.delay + "s"]), d.duration && c.animationDuration && u.push([r + "animation-duration", d.duration + "s"]), n(u, function (t) {
                                    var n = t[0], o = t[1];
                                    l.style[e(n)] = o, s.push(t)
                                });
                                var f = c.delay, g = 1e3 * f, b = c.duration, E = 1e3 * b, M = Date.now();
                                A = [], c.transitionDuration && A.push(i), c.animationDuration && A.push(a), A = A.join(" "), C = function (e) {
                                    e.stopPropagation();
                                    var n = e.originalEvent || e, o = n.timeStamp || Date.now(), r = parseFloat(n.elapsedTime.toFixed(3));
                                    Math.max(o - M, 0) >= g && r >= b && t()
                                }, o.on(A, C), v(o, d), m(t, g + 1.5 * E, !1)
                            }), u
                        }
                    }
                }

                function h(e, t) {
                    t.addClass && (l.addClass(e, t.addClass), t.addClass = null), t.removeClass && (l.removeClass(e, t.removeClass), t.removeClass = null)
                }

                function p(e) {
                    function n(e) {
                        return o ? "Webkit" + e.charAt(0).toUpperCase() + e.substr(1) : e
                    }

                    var r = M(e), i = t.getComputedStyle(r), a = f(i[n("transitionDuration")]), d = f(i[n("animationDuration")]), c = f(i[n("transitionDelay")]), s = f(i[n("animationDelay")]);
                    d *= parseInt(i[n("animationIterationCount")], 10) || 1;
                    var l = Math.max(d, a), m = Math.max(s, c);
                    return {
                        duration: l,
                        delay: m,
                        animationDuration: d,
                        transitionDuration: a,
                        animationDelay: s,
                        transitionDelay: c
                    }
                }

                function f(e) {
                    var t = 0, o = (e || "").split(/\s*,\s*/);
                    return n(o, function (e) {
                        "s" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), e = parseFloat(e) || 0, t = t ? Math.max(e, t) : e
                    }), t
                }

                function g(e) {
                    y && y(), A.push(e), y = d(function () {
                        y = null;
                        for (var e = s(), t = 0; t < A.length; t++)A[t](e);
                        A.length = 0
                    })
                }

                function b(e, t) {
                    E(e, t), v(e, t)
                }

                function E(e, t) {
                    t.from && (e.css(t.from), t.from = null)
                }

                function v(e, t) {
                    t.to && (e.css(t.to), t.to = null)
                }

                function M(e) {
                    for (var t = 0; t < e.length; t++)if (1 === e[t].nodeType)return e[t]
                }

                function $(t, n) {
                    var o = M(t), i = e(r + "transition-delay");
                    o.style[i] = n ? "-9999s" : ""
                }

                var y, A = [];
                return u
            }])
        }()
    }(), function () {
        t.module("material.components.autocomplete", ["material.core", "material.components.icon", "material.components.virtualRepeat"])
    }(), function () {
        t.module("material.components.backdrop", ["material.core"]).directive("mdBackdrop", ["$mdTheming", "$animate", "$rootElement", "$window", "$log", "$$rAF", "$document", function (e, t, n, o, r, i, a) {
            function d(d, s, l) {
                var m = o.getComputedStyle(a[0].body);
                if ("fixed" == m.position) {
                    var u = parseInt(m.height, 10) + Math.abs(parseInt(m.top, 10));
                    s.css({height: u + "px"})
                }
                t.pin && t.pin(s, n), i(function () {
                    var t = s.parent()[0];
                    if (t) {
                        var n = o.getComputedStyle(t);
                        "static" == n.position && r.warn(c)
                    }
                    e.inherit(s, s.parent())
                })
            }

            var c = "<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";
            return {restrict: "E", link: d}
        }])
    }(), function () {
        function e(e) {
            return {
                restrict: "E", link: function (t, n, o) {
                    t.$on("$destroy", function () {
                        e.destroy()
                    })
                }
            }
        }

        function n(e) {
            function n(e, n, i, a, d, c, s) {
                function l(o, r, s, l) {
                    r = i.extractElementByName(r, "md-bottom-sheet"), h = i.createBackdrop(o, "md-bottom-sheet-backdrop md-opaque"), h.on("click", function () {
                        i.nextTick(d.cancel, !0)
                    }), a.inherit(h, s.parent), e.enter(h, s.parent, null);
                    var m = new u(r, s.parent);
                    return s.bottomSheet = m, s.targetEvent && t.element(s.targetEvent.target).blur(), a.inherit(m.element, s.parent), s.disableParentScroll && (s.restoreScroll = i.disableScrollAround(m.element, s.parent)), e.enter(m.element, s.parent).then(function () {
                        var e = i.findFocusTarget(r) || t.element(r[0].querySelector("button") || r[0].querySelector("a") || r[0].querySelector("[ng-click]"));
                        e.focus(), s.escapeToClose && (s.rootElementKeyupCallback = function (e) {
                            e.keyCode === n.KEY_CODE.ESCAPE && i.nextTick(d.cancel, !0)
                        }, c.on("keyup", s.rootElementKeyupCallback))
                    })
                }

                function m(n, o, r) {
                    var i = r.bottomSheet;
                    return e.leave(h), e.leave(i.element).then(function () {
                        r.disableParentScroll && (r.restoreScroll(), delete r.restoreScroll), i.cleanup(), r.targetEvent && t.element(r.targetEvent.target).focus()
                    })
                }

                function u(e, t) {
                    function a(t) {
                        e.css(n.CSS.TRANSITION_DURATION, "0ms")
                    }

                    function c(t) {
                        var o = t.pointer.distanceY;
                        5 > o && (o = Math.max(-r, o / 2)), e.css(n.CSS.TRANSFORM, "translate3d(0," + (r + o) + "px,0)")
                    }

                    function l(t) {
                        if (t.pointer.distanceY > 0 && (t.pointer.distanceY > 20 || Math.abs(t.pointer.velocityY) > o)) {
                            var r = e.prop("offsetHeight") - t.pointer.distanceY, a = Math.min(r / t.pointer.velocityY * .75, 500);
                            e.css(n.CSS.TRANSITION_DURATION, a + "ms"), i.nextTick(d.cancel, !0)
                        } else e.css(n.CSS.TRANSITION_DURATION, ""), e.css(n.CSS.TRANSFORM, "")
                    }

                    var m = s.register(t, "drag", {horizontal: !1});
                    return t.on("$md.dragstart", a).on("$md.drag", c).on("$md.dragend", l), {
                        element: e,
                        cleanup: function () {
                            m(), t.off("$md.dragstart", a), t.off("$md.drag", c), t.off("$md.dragend", l)
                        }
                    }
                }

                var h;
                return {
                    themable: !0,
                    targetEvent: null,
                    onShow: l,
                    onRemove: m,
                    escapeToClose: !0,
                    disableParentScroll: !0
                }
            }

            var o = .5, r = 80;
            return n.$inject = ["$animate", "$mdConstant", "$mdUtil", "$mdTheming", "$mdBottomSheet", "$rootElement", "$mdGesture"], e("$mdBottomSheet").setDefaults({
                methods: ["disableParentScroll", "escapeToClose", "targetEvent"],
                options: n
            })
        }

        t.module("material.components.bottomSheet", ["material.core", "material.components.backdrop"]).directive("mdBottomSheet", e).provider("$mdBottomSheet", n), e.$inject = ["$mdBottomSheet"], n.$inject = ["$$interimElementProvider"]
    }(), function () {
        function e(e, n, o, r) {
            function i(e) {
                return t.isDefined(e.href) || t.isDefined(e.ngHref) || t.isDefined(e.ngLink) || t.isDefined(e.uiSref)
            }

            function a(e, t) {
                return i(t) ? '<a class="md-button" ng-transclude></a>' : '<button class="md-button" ng-transclude></button>'
            }

            function d(a, d, c) {
                var s = d[0];
                n(d), e.attach(a, d);
                var l = s.textContent.trim();
                l || o.expect(d, "aria-label"), i(c) && t.isDefined(c.ngDisabled) && a.$watch(c.ngDisabled, function (e) {
                    d.attr("tabindex", e ? -1 : 0)
                }), d.on("click", function (e) {
                    c.disabled === !0 && (e.preventDefault(), e.stopImmediatePropagation())
                }), a.mouseActive = !1, d.on("mousedown", function () {
                    a.mouseActive = !0, r(function () {
                        a.mouseActive = !1
                    }, 100)
                }).on("focus", function () {
                    a.mouseActive === !1 && d.addClass("md-focused")
                }).on("blur", function (e) {
                    d.removeClass("md-focused")
                })
            }

            return {restrict: "EA", replace: !0, transclude: !0, template: a, link: d}
        }

        t.module("material.components.button", ["material.core"]).directive("mdButton", e), e.$inject = ["$mdButtonInkRipple", "$mdTheming", "$mdAria", "$timeout"]
    }(), function () {
        function e(e, n, o, r, i, a) {
            function d(d, s) {
                return s.type = "checkbox", s.tabindex = s.tabindex || "0", d.attr("role", s.type), d.on("click", function (e) {
                    this.hasAttribute("disabled") && e.stopImmediatePropagation()
                }), function (d, s, l, m) {
                    function u(e, t, n) {
                        l[e] && d.$watch(l[e], function (e) {
                            n[e] && s.attr(t, n[e])
                        })
                    }

                    function h(e) {
                        var t = e.which || e.keyCode;
                        (t === o.KEY_CODE.SPACE || t === o.KEY_CODE.ENTER) && (e.preventDefault(), s.hasClass("md-focused") || s.addClass("md-focused"), p(e))
                    }

                    function p(e) {
                        s[0].hasAttribute("disabled") || d.$apply(function () {
                            var t = l.ngChecked ? l.checked : !m.$viewValue;
                            m.$setViewValue(t, e && e.type), m.$render()
                        })
                    }

                    function f() {
                        m.$viewValue ? s.addClass(c) : s.removeClass(c)
                    }

                    m = m || i.fakeNgModel(), r(s), l.ngChecked && d.$watch(d.$eval.bind(d, l.ngChecked), m.$setViewValue.bind(m)), u("ngDisabled", "tabindex", {
                        "true": "-1",
                        "false": l.tabindex
                    }), n.expectWithText(s, "aria-label"), e.link.pre(d, {
                        on: t.noop,
                        0: {}
                    }, l, [m]), d.mouseActive = !1, s.on("click", p).on("keypress", h).on("mousedown", function () {
                        d.mouseActive = !0, a(function () {
                            d.mouseActive = !1
                        }, 100)
                    }).on("focus", function () {
                        d.mouseActive === !1 && s.addClass("md-focused")
                    }).on("blur", function () {
                        s.removeClass("md-focused")
                    }), m.$render = f
                }
            }

            e = e[0];
            var c = "md-checked";
            return {
                restrict: "E",
                transclude: !0,
                require: "?ngModel",
                priority: 210,
                template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',
                compile: d
            }
        }

        t.module("material.components.checkbox", ["material.core"]).directive("mdCheckbox", e), e.$inject = ["inputDirective", "$mdAria", "$mdConstant", "$mdTheming", "$mdUtil", "$timeout"]
    }(), function () {
        function e(e) {
            return {
                restrict: "E", link: function (t, n, o) {
                    e(n)
                }
            }
        }

        t.module("material.components.card", ["material.core"]).directive("mdCard", e), e.$inject = ["$mdTheming"]
    }(), function () {
        t.module("material.components.chips", ["material.core", "material.components.autocomplete"])
    }(), function () {
        function e(e) {
            function t(e, t) {
                this.$scope = e, this.$element = t
            }

            return {
                restrict: "E", controller: ["$scope", "$element", t], link: function (t, o, r) {
                    o[0];
                    e(o), t.$broadcast("$mdContentLoaded", o), n(o[0])
                }
            }
        }

        function n(e) {
            t.element(e).on("$md.pressdown", function (t) {
                "t" === t.pointer.type && (t.$materialScrollFixed || (t.$materialScrollFixed = !0, 0 === e.scrollTop ? e.scrollTop = 1 : e.scrollHeight === e.scrollTop + e.offsetHeight && (e.scrollTop -= 1)))
            })
        }

        t.module("material.components.content", ["material.core"]).directive("mdContent", e), e.$inject = ["$mdTheming"]
    }(), function () {
        !function () {
            function e() {
                return {
                    template: '<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="' + (r - o) + '"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody role="rowgroup" md-virtual-repeat="i in ctrl.items" md-calendar-month md-month-offset="$index" class="md-calendar-month" md-start-index="ctrl.getSelectedMonthIndex()" md-item-size="' + o + '"></tbody></table></md-virtual-repeat-container></div>',
                    scope: {minDate: "=mdMinDate", maxDate: "=mdMaxDate"},
                    require: ["ngModel", "mdCalendar"],
                    controller: n,
                    controllerAs: "ctrl",
                    bindToController: !0,
                    link: function (e, t, n, o) {
                        var r = o[0], i = o[1];
                        i.configureNgModel(r)
                    }
                }
            }

            function n(e, t, n, o, r, i, a, c, s, l, m) {
                if (a(e), this.items = {length: 2e3}, this.maxDate && this.minDate) {
                    var u = c.getMonthDistance(this.minDate, this.maxDate) + 1;
                    u = Math.max(u, 1), u += 1, this.items.length = u
                }
                if (this.$animate = o, this.$q = r, this.$mdInkRipple = l, this.$mdUtil = m, this.keyCode = i.KEY_CODE, this.dateUtil = c, this.dateLocale = s, this.$element = e, this.$scope = n, this.calendarElement = e[0].querySelector(".md-calendar"), this.calendarScroller = e[0].querySelector(".md-virtual-repeat-scroller"), this.today = this.dateUtil.createDateAtMidnight(), this.firstRenderableDate = this.dateUtil.incrementMonths(this.today, -this.items.length / 2), this.minDate && this.minDate > this.firstRenderableDate)this.firstRenderableDate = this.minDate; else if (this.maxDate) {
                    this.items.length - 2;
                    this.firstRenderableDate = this.dateUtil.incrementMonths(this.maxDate, -(this.items.length - 2))
                }
                this.id = d++, this.ngModelCtrl = null, this.selectedDate = null, this.displayDate = null, this.focusDate = null, this.isInitialized = !1,
                    this.isMonthTransitionInProgress = !1, t.tabindex || e.attr("tabindex", "-1");
                var h = this;
                this.cellClickHandler = function () {
                    var e = this;
                    this.hasAttribute("data-timestamp") && n.$apply(function () {
                        var t = Number(e.getAttribute("data-timestamp"));
                        h.setNgModelValue(h.dateUtil.createDateAtMidnight(t))
                    })
                }, this.attachCalendarEventListeners()
            }

            t.module("material.components.datepicker", ["material.core", "material.components.icon", "material.components.virtualRepeat"]).directive("mdCalendar", e);
            var o = 265, r = 45, i = "md-calendar-selected-date", a = "md-focus", d = 0;
            n.$inject = ["$element", "$attrs", "$scope", "$animate", "$q", "$mdConstant", "$mdTheming", "$$mdDateUtil", "$mdDateLocale", "$mdInkRipple", "$mdUtil"], n.prototype.configureNgModel = function (e) {
                this.ngModelCtrl = e;
                var t = this;
                e.$render = function () {
                    t.changeSelectedDate(t.ngModelCtrl.$viewValue)
                }
            }, n.prototype.buildInitialCalendarDisplay = function () {
                this.buildWeekHeader(), this.hideVerticalScrollbar(), this.displayDate = this.selectedDate || this.today, this.isInitialized = !0
            }, n.prototype.hideVerticalScrollbar = function () {
                var e = this.$element[0], t = e.querySelector(".md-calendar-scroll-mask"), n = this.calendarScroller, o = e.querySelector(".md-calendar-day-header").clientWidth, r = n.offsetWidth - n.clientWidth;
                t.style.width = o + "px", n.style.width = o + r + "px", n.style.paddingRight = r + "px"
            }, n.prototype.attachCalendarEventListeners = function () {
                this.$element.on("keydown", t.bind(this, this.handleKeyEvent))
            }, n.prototype.handleKeyEvent = function (e) {
                var t = this;
                this.$scope.$apply(function () {
                    if (e.which == t.keyCode.ESCAPE || e.which == t.keyCode.TAB)return t.$scope.$emit("md-calendar-close"), void(e.which == t.keyCode.TAB && e.preventDefault());
                    if (e.which === t.keyCode.ENTER)return t.setNgModelValue(t.displayDate), void e.preventDefault();
                    var n = t.getFocusDateFromKeyEvent(e);
                    n && (n = t.boundDateByMinAndMax(n), e.preventDefault(), e.stopPropagation(), t.changeDisplayDate(n).then(function () {
                        t.focus(n)
                    }))
                })
            }, n.prototype.getFocusDateFromKeyEvent = function (e) {
                var t = this.dateUtil, n = this.keyCode;
                switch (e.which) {
                    case n.RIGHT_ARROW:
                        return t.incrementDays(this.displayDate, 1);
                    case n.LEFT_ARROW:
                        return t.incrementDays(this.displayDate, -1);
                    case n.DOWN_ARROW:
                        return e.metaKey ? t.incrementMonths(this.displayDate, 1) : t.incrementDays(this.displayDate, 7);
                    case n.UP_ARROW:
                        return e.metaKey ? t.incrementMonths(this.displayDate, -1) : t.incrementDays(this.displayDate, -7);
                    case n.PAGE_DOWN:
                        return t.incrementMonths(this.displayDate, 1);
                    case n.PAGE_UP:
                        return t.incrementMonths(this.displayDate, -1);
                    case n.HOME:
                        return t.getFirstDateOfMonth(this.displayDate);
                    case n.END:
                        return t.getLastDateOfMonth(this.displayDate);
                    default:
                        return null
                }
            }, n.prototype.getSelectedMonthIndex = function () {
                return this.dateUtil.getMonthDistance(this.firstRenderableDate, this.selectedDate || this.today)
            }, n.prototype.scrollToMonth = function (e) {
                if (this.dateUtil.isValidDate(e)) {
                    var t = this.dateUtil.getMonthDistance(this.firstRenderableDate, e);
                    this.calendarScroller.scrollTop = t * o
                }
            }, n.prototype.setNgModelValue = function (e) {
                this.$scope.$emit("md-calendar-change", e), this.ngModelCtrl.$setViewValue(e), this.ngModelCtrl.$render()
            }, n.prototype.focus = function (e) {
                var t = e || this.selectedDate || this.today, n = this.calendarElement.querySelector(".md-focus");
                n && n.classList.remove(a);
                var o = this.getDateId(t), r = document.getElementById(o);
                r ? (r.classList.add(a), r.focus()) : this.focusDate = t
            }, n.prototype.boundDateByMinAndMax = function (e) {
                var t = e;
                return this.minDate && e < this.minDate && (t = new Date(this.minDate.getTime())), this.maxDate && e > this.maxDate && (t = new Date(this.maxDate.getTime())), t
            }, n.prototype.changeSelectedDate = function (e) {
                var t = this, n = this.selectedDate;
                this.selectedDate = e, this.changeDisplayDate(e).then(function () {
                    if (n) {
                        var o = document.getElementById(t.getDateId(n));
                        o && (o.classList.remove(i), o.setAttribute("aria-selected", "false"))
                    }
                    if (e) {
                        var r = document.getElementById(t.getDateId(e));
                        r && (r.classList.add(i), r.setAttribute("aria-selected", "true"))
                    }
                })
            }, n.prototype.changeDisplayDate = function (e) {
                if (!this.isInitialized)return this.buildInitialCalendarDisplay(), this.$q.when();
                if (!this.dateUtil.isValidDate(e) || this.isMonthTransitionInProgress)return this.$q.when();
                this.isMonthTransitionInProgress = !0;
                var t = this.animateDateChange(e);
                this.displayDate = e;
                var n = this;
                return t.then(function () {
                    n.isMonthTransitionInProgress = !1
                }), t
            }, n.prototype.animateDateChange = function (e) {
                return this.scrollToMonth(e), this.$q.when()
            }, n.prototype.buildWeekHeader = function () {
                for (var e = this.dateLocale.firstDayOfWeek, t = this.dateLocale.shortDays, n = document.createElement("tr"), o = 0; 7 > o; o++) {
                    var r = document.createElement("th");
                    r.textContent = t[(o + e) % 7], n.appendChild(r)
                }
                this.$element.find("thead").append(n)
            }, n.prototype.getDateId = function (e) {
                return ["md", this.id, e.getFullYear(), e.getMonth(), e.getDate()].join("-")
            }
        }()
    }(), function () {
        !function () {
            function e() {
                return {
                    require: ["^^mdCalendar", "mdCalendarMonth"],
                    scope: {offset: "=mdMonthOffset"},
                    controller: n,
                    controllerAs: "mdMonthCtrl",
                    bindToController: !0,
                    link: function (e, t, n, o) {
                        var r = o[0], i = o[1];
                        i.calendarCtrl = r, i.generateContent(), e.$watch(function () {
                            return i.offset
                        }, function (e, t) {
                            e != t && i.generateContent()
                        })
                    }
                }
            }

            function n(e, t, n) {
                this.dateUtil = t, this.dateLocale = n, this.$element = e, this.calendarCtrl = null, this.offset, this.focusAfterAppend = null
            }

            t.module("material.components.datepicker").directive("mdCalendarMonth", e);
            var o = "md-calendar-date-today", r = "md-calendar-selected-date", i = "md-focus";
            n.$inject = ["$element", "$$mdDateUtil", "$mdDateLocale"], n.prototype.generateContent = function () {
                var e = this.calendarCtrl, t = this.dateUtil.incrementMonths(e.firstRenderableDate, this.offset);
                this.$element.empty(), this.$element.append(this.buildCalendarForMonth(t)), this.focusAfterAppend && (this.focusAfterAppend.classList.add(i), this.focusAfterAppend.focus(), this.focusAfterAppend = null)
            }, n.prototype.buildDateCell = function (e) {
                var t = this.calendarCtrl, n = document.createElement("td");
                if (n.tabIndex = -1, n.classList.add("md-calendar-date"), n.setAttribute("role", "gridcell"), e) {
                    n.setAttribute("tabindex", "-1"), n.setAttribute("aria-label", this.dateLocale.longDateFormatter(e)), n.id = t.getDateId(e), n.setAttribute("data-timestamp", e.getTime()), this.dateUtil.isSameDay(e, t.today) && n.classList.add(o), this.dateUtil.isValidDate(t.selectedDate) && this.dateUtil.isSameDay(e, t.selectedDate) && (n.classList.add(r), n.setAttribute("aria-selected", "true"));
                    var i = this.dateLocale.dates[e.getDate()];
                    if (this.dateUtil.isDateWithinRange(e, this.calendarCtrl.minDate, this.calendarCtrl.maxDate)) {
                        var a = document.createElement("span");
                        n.appendChild(a), a.classList.add("md-calendar-date-selection-indicator"), a.textContent = i, n.addEventListener("click", t.cellClickHandler), t.focusDate && this.dateUtil.isSameDay(e, t.focusDate) && (this.focusAfterAppend = n)
                    } else n.classList.add("md-calendar-date-disabled"), n.textContent = i
                }
                return n
            }, n.prototype.buildDateRow = function (e) {
                var t = document.createElement("tr");
                return t.setAttribute("role", "row"), t.setAttribute("aria-label", this.dateLocale.weekNumberFormatter(e)), t
            }, n.prototype.buildCalendarForMonth = function (e) {
                var t = this.dateUtil.isValidDate(e) ? e : new Date, n = this.dateUtil.getFirstDateOfMonth(t), o = this.getLocaleDay_(n), r = this.dateUtil.getNumberOfDaysInMonth(t), i = document.createDocumentFragment(), a = 1, d = this.buildDateRow(a);
                i.appendChild(d);
                var c = this.offset === this.calendarCtrl.items.length - 1, s = 0, l = document.createElement("td");
                if (l.classList.add("md-calendar-month-label"), this.calendarCtrl.maxDate && n > this.calendarCtrl.maxDate && l.classList.add("md-calendar-month-label-disabled"), l.textContent = this.dateLocale.monthHeaderFormatter(t), 2 >= o) {
                    l.setAttribute("colspan", "7");
                    var m = this.buildDateRow();
                    if (m.appendChild(l), i.insertBefore(m, d), c)return i
                } else s = 2, l.setAttribute("colspan", "2"), d.appendChild(l);
                for (var u = s; o > u; u++)d.appendChild(this.buildDateCell());
                for (var h = o, p = n, f = 1; r >= f; f++) {
                    if (7 === h) {
                        if (c)return i;
                        h = 0, a++, d = this.buildDateRow(a), i.appendChild(d)
                    }
                    p.setDate(f);
                    var g = this.buildDateCell(p);
                    d.appendChild(g), h++
                }
                for (; d.childNodes.length < 7;)d.appendChild(this.buildDateCell());
                for (; i.childNodes.length < 6;) {
                    for (var b = this.buildDateRow(), u = 0; 7 > u; u++)b.appendChild(this.buildDateCell());
                    i.appendChild(b)
                }
                return i
            }, n.prototype.getLocaleDay_ = function (e) {
                return (e.getDay() + (7 - this.dateLocale.firstDayOfWeek)) % 7
            }
        }()
    }(), function () {
        !function () {
            t.module("material.components.datepicker").config(["$provide", function (e) {
                function t() {
                    this.months = null, this.shortMonths = null, this.days = null, this.shortDays = null, this.dates = null, this.firstDayOfWeek = 0, this.formatDate = null, this.parseDate = null, this.monthHeaderFormatter = null, this.weekNumberFormatter = null, this.longDateFormatter = null, this.msgCalendar = "", this.msgOpenCalendar = ""
                }

                t.prototype.$get = function (e) {
                    function t(e) {
                        if (!e)return "";
                        var t = e.toLocaleTimeString(), n = e;
                        return 0 != e.getHours() || -1 === t.indexOf("11:") && -1 === t.indexOf("23:") || (n = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 1, 0, 0)), n.toLocaleDateString()
                    }

                    function n(e) {
                        return new Date(e)
                    }

                    function o(e) {
                        e = e.trim();
                        var t = /^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;
                        return t.test(e)
                    }

                    function r(e) {
                        return u.shortMonths[e.getMonth()] + " " + e.getFullYear()
                    }

                    function i(e) {
                        return "Week " + e
                    }

                    function a(e) {
                        return [u.days[e.getDay()], u.months[e.getMonth()], u.dates[e.getDate()], e.getFullYear()].join(" ")
                    }

                    for (var d = e.DATETIME_FORMATS.DAY.map(function (e) {
                        return e[0]
                    }), c = Array(32), s = 1; 31 >= s; s++)c[s] = s;
                    var l = "Calendar", m = "Open calendar", u = {
                        months: this.months || e.DATETIME_FORMATS.MONTH,
                        shortMonths: this.shortMonths || e.DATETIME_FORMATS.SHORTMONTH,
                        days: this.days || e.DATETIME_FORMATS.DAY,
                        shortDays: this.shortDays || d,
                        dates: this.dates || c,
                        firstDayOfWeek: this.firstDayOfWeek || 0,
                        formatDate: this.formatDate || t,
                        parseDate: this.parseDate || n,
                        isDateComplete: this.isDateComplete || o,
                        monthHeaderFormatter: this.monthHeaderFormatter || r,
                        weekNumberFormatter: this.weekNumberFormatter || i,
                        longDateFormatter: this.longDateFormatter || a,
                        msgCalendar: this.msgCalendar || l,
                        msgOpenCalendar: this.msgOpenCalendar || m
                    };
                    return u
                }, t.prototype.$get.$inject = ["$locale"], e.provider("$mdDateLocale", new t)
            }])
        }()
    }(), function () {
        !function () {
            function n() {
                return {
                    template: '<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" md-svg-icon="md-calendar"></md-icon></md-button><div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"><md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button></div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-min-date="ctrl.minDate" md-max-date="ctrl.maxDate"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>',
                    require: ["ngModel", "mdDatepicker"],
                    scope: {minDate: "=mdMinDate", maxDate: "=mdMaxDate", placeholder: "@mdPlaceholder"},
                    controller: o,
                    controllerAs: "ctrl",
                    bindToController: !0,
                    link: function (e, t, n, o) {
                        var r = o[0], i = o[1];
                        i.configureNgModel(r)
                    }
                }
            }

            function o(e, n, o, r, i, a, d, c, s, l, m, u) {
                this.$compile = r, this.$timeout = i, this.$window = a, this.dateLocale = l, this.dateUtil = m, this.$mdConstant = d, this.$mdUtil = s, this.$$rAF = u, this.ngModelCtrl = null, this.inputElement = n[0].querySelector("input"), this.ngInputElement = t.element(this.inputElement), this.inputContainer = n[0].querySelector(".md-datepicker-input-container"), this.calendarPane = n[0].querySelector(".md-datepicker-calendar-pane"), this.calendarButton = n[0].querySelector(".md-datepicker-button"), this.inputMask = n[0].querySelector(".md-datepicker-input-mask-opaque"), this.$element = n, this.$attrs = o, this.$scope = e, this.date = null, this.isFocused = !1, this.isDisabled, this.setDisabled(n[0].disabled || t.isString(o.disabled)), this.isCalendarOpen = !1, this.calendarPaneOpenedFrom = null, this.calendarPane.id = "md-date-pane" + s.nextUid(), c(n), this.bodyClickHandler = t.bind(this, this.handleBodyClick), this.windowResizeHandler = s.debounce(t.bind(this, this.closeCalendarPane), 100), o.tabindex || n.attr("tabindex", "-1"), this.installPropertyInterceptors(), this.attachChangeListeners(), this.attachInteractionListeners();
                var h = this;
                e.$on("$destroy", function () {
                    h.detachCalendarPane()
                })
            }

            t.module("material.components.datepicker").directive("mdDatepicker", n);
            var r = 3, i = "md-datepicker-invalid", a = 500, d = 368, c = 360;
            o.$inject = ["$scope", "$element", "$attrs", "$compile", "$timeout", "$window", "$mdConstant", "$mdTheming", "$mdUtil", "$mdDateLocale", "$$mdDateUtil", "$$rAF"], o.prototype.configureNgModel = function (e) {
                this.ngModelCtrl = e;
                var t = this;
                e.$render = function () {
                    t.date = t.ngModelCtrl.$viewValue, t.inputElement.value = t.dateLocale.formatDate(t.date), t.resizeInputElement(), t.setErrorFlags()
                }
            }, o.prototype.attachChangeListeners = function () {
                var e = this;
                e.$scope.$on("md-calendar-change", function (t, n) {
                    e.ngModelCtrl.$setViewValue(n), e.date = n, e.inputElement.value = e.dateLocale.formatDate(n), e.closeCalendarPane(), e.resizeInputElement(), e.inputContainer.classList.remove(i)
                }), e.ngInputElement.on("input", t.bind(e, e.resizeInputElement)), e.ngInputElement.on("input", e.$mdUtil.debounce(e.handleInputEvent, a, e))
            }, o.prototype.attachInteractionListeners = function () {
                var e = this, t = this.$scope, n = this.$mdConstant.KEY_CODE;
                e.ngInputElement.on("keydown", function (o) {
                    o.altKey && o.keyCode == n.DOWN_ARROW && (e.openCalendarPane(o), t.$digest())
                }), t.$on("md-calendar-close", function () {
                    e.closeCalendarPane()
                })
            }, o.prototype.installPropertyInterceptors = function () {
                var e = this;
                if (this.$attrs.ngDisabled) {
                    var t = this.$mdUtil.validateScope(this.$element) ? this.$element.scope() : null;
                    t && t.$watch(this.$attrs.ngDisabled, function (t) {
                        e.setDisabled(t)
                    })
                }
                Object.defineProperty(this, "placeholder", {
                    get: function () {
                        return e.inputElement.placeholder
                    }, set: function (t) {
                        e.inputElement.placeholder = t || ""
                    }
                })
            }, o.prototype.setDisabled = function (e) {
                this.isDisabled = e, this.inputElement.disabled = e, this.calendarButton.disabled = e
            }, o.prototype.setErrorFlags = function () {
                this.dateUtil.isValidDate(this.date) && (this.dateUtil.isValidDate(this.minDate) && (this.ngModelCtrl.$error.mindate = this.date < this.minDate), this.dateUtil.isValidDate(this.maxDate) && (this.ngModelCtrl.$error.maxdate = this.date > this.maxDate))
            }, o.prototype.resizeInputElement = function () {
                this.inputElement.size = this.inputElement.value.length + r
            }, o.prototype.handleInputEvent = function () {
                var e = this.inputElement.value, t = this.dateLocale.parseDate(e);
                this.dateUtil.setDateTimeToMidnight(t), "" === e ? (this.ngModelCtrl.$setViewValue(null), this.date = null, this.inputContainer.classList.remove(i)) : this.dateUtil.isValidDate(t) && this.dateLocale.isDateComplete(e) && this.dateUtil.isDateWithinRange(t, this.minDate, this.maxDate) ? (this.ngModelCtrl.$setViewValue(t), this.date = t, this.inputContainer.classList.remove(i)) : this.inputContainer.classList.toggle(i, e)
            }, o.prototype.attachCalendarPane = function () {
                var e = this.calendarPane;
                e.style.transform = "", this.$element.addClass("md-datepicker-open");
                var t = this.inputContainer.getBoundingClientRect(), n = document.body.getBoundingClientRect(), o = t.top - n.top, r = t.left - n.left, i = document.body.scrollTop, a = i + this.$window.innerHeight, s = document.body.scrollLeft, l = document.body.scrollLeft + this.$window.innerWidth;
                if (r + c > l) {
                    if (l - c > 0)r = l - c; else {
                        r = s;
                        var m = this.$window.innerWidth / c;
                        e.style.transform = "scale(" + m + ")"
                    }
                    e.classList.add("md-datepicker-pos-adjusted")
                }
                o + d > a && a - d > i && (o = a - d, e.classList.add("md-datepicker-pos-adjusted")), e.style.left = r + "px", e.style.top = o + "px", document.body.appendChild(e), this.inputMask.style.left = t.width + "px", this.$$rAF(function () {
                    e.classList.add("md-pane-open")
                })
            }, o.prototype.detachCalendarPane = function () {
                this.$element.removeClass("md-datepicker-open"), this.calendarPane.classList.remove("md-pane-open"), this.calendarPane.classList.remove("md-datepicker-pos-adjusted"), this.calendarPane.parentNode && this.calendarPane.parentNode.removeChild(this.calendarPane)
            }, o.prototype.openCalendarPane = function (t) {
                if (!this.isCalendarOpen && !this.isDisabled) {
                    this.isCalendarOpen = !0, this.calendarPaneOpenedFrom = t.target, this.attachCalendarPane(), this.focusCalendar(), this.$mdUtil.disableScrollAround(this.calendarPane);
                    var n = this;
                    this.$mdUtil.nextTick(function () {
                        document.body.addEventListener("click", n.bodyClickHandler)
                    }, !1), e.addEventListener("resize", this.windowResizeHandler)
                }
            }, o.prototype.closeCalendarPane = function () {
                this.isCalendarOpen && (this.isCalendarOpen = !1, this.detachCalendarPane(), this.calendarPaneOpenedFrom.focus(), this.calendarPaneOpenedFrom = null, this.$mdUtil.enableScrolling(), document.body.removeEventListener("click", this.bodyClickHandler), e.removeEventListener("resize", this.windowResizeHandler))
            }, o.prototype.getCalendarCtrl = function () {
                return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")
            }, o.prototype.focusCalendar = function () {
                var e = this;
                this.$mdUtil.nextTick(function () {
                    e.getCalendarCtrl().focus()
                }, !1)
            }, o.prototype.setFocused = function (e) {
                this.isFocused = e
            }, o.prototype.handleBodyClick = function (e) {
                if (this.isCalendarOpen) {
                    var t = this.$mdUtil.getClosest(e.target, "md-calendar");
                    t || this.closeCalendarPane(), this.$scope.$digest()
                }
            }
        }()
    }(), function () {
        !function () {
            t.module("material.components.datepicker").factory("$$mdDateUtil", function () {
                function e(e) {
                    return new Date(e.getFullYear(), e.getMonth(), 1)
                }

                function n(e) {
                    return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()
                }

                function o(e) {
                    return new Date(e.getFullYear(), e.getMonth() + 1, 1)
                }

                function r(e) {
                    return new Date(e.getFullYear(), e.getMonth() - 1, 1)
                }

                function i(e, t) {
                    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()
                }

                function a(e, t) {
                    return e.getDate() == t.getDate() && i(e, t)
                }

                function d(e, t) {
                    var n = o(e);
                    return i(n, t)
                }

                function c(e, t) {
                    var n = r(e);
                    return i(t, n)
                }

                function s(e, t) {
                    return b((e.getTime() + t.getTime()) / 2)
                }

                function l(t) {
                    var n = e(t);
                    return Math.floor((n.getDay() + t.getDate() - 1) / 7)
                }

                function m(e, t) {
                    return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t)
                }

                function u(e, t) {
                    var o = new Date(e.getFullYear(), e.getMonth() + t, 1), r = n(o);
                    return r < e.getDate() ? o.setDate(r) : o.setDate(e.getDate()), o
                }

                function h(e, t) {
                    return 12 * (t.getFullYear() - e.getFullYear()) + (t.getMonth() - e.getMonth())
                }

                function p(e) {
                    return new Date(e.getFullYear(), e.getMonth(), n(e))
                }

                function f(e) {
                    return null != e && e.getTime && !isNaN(e.getTime())
                }

                function g(e) {
                    f(e) && e.setHours(0, 0, 0, 0)
                }

                function b(e) {
                    var n;
                    return n = t.isUndefined(e) ? new Date : new Date(e), g(n), n
                }

                function E(e, n, o) {
                    return (!t.isDate(n) || e >= n) && (!t.isDate(o) || o >= e)
                }

                return {
                    getFirstDateOfMonth: e,
                    getNumberOfDaysInMonth: n,
                    getDateInNextMonth: o,
                    getDateInPreviousMonth: r,
                    isInNextMonth: d,
                    isInPreviousMonth: c,
                    getDateMidpoint: s,
                    isSameMonthAndYear: i,
                    getWeekOfMonth: l,
                    incrementDays: m,
                    incrementMonths: u,
                    getLastDateOfMonth: p,
                    isSameDay: a,
                    getMonthDistance: h,
                    isValidDate: f,
                    setDateTimeToMidnight: g,
                    createDateAtMidnight: b,
                    isDateWithinRange: E
                }
            })
        }()
    }(), function () {
        function e(e, n, o) {
            return {
                restrict: "E", link: function (r, i, a) {
                    n(i), e(function () {
                        function e() {
                            i.toggleClass("md-content-overflow", a.scrollHeight > a.clientHeight)
                        }

                        var n, a = i[0].querySelector("md-dialog-content");
                        a && (n = a.getElementsByTagName("img"), e(), t.element(n).on("load", e)), r.$on("$destroy", function () {
                            o.destroy()
                        })
                    })
                }
            }
        }

        function n(e) {
            function n(e, t) {
                return {
                    template: ['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" class="{{ dialog.css }}">', ' <md-dialog-content role="document" tabIndex="-1">', '   <h2 class="md-title">{{ dialog.title }}</h2>', '   <div class="md-dialog-content-body" md-template="::dialog.mdContent"></div>', " </md-dialog-content>", ' <div class="md-actions">', '   <md-button ng-if="dialog.$type == \'confirm\'"     ng-click="dialog.abort()" class="md-primary">', "     {{ dialog.cancel }}", "   </md-button>", '   <md-button ng-click="dialog.hide()" class="md-primary" md-autofocus="dialog.$type!=\'confirm\'">', "     {{ dialog.ok }}", "   </md-button>", " </div>", "</md-dialog>"].join("").replace(/\s\s+/g, ""),
                    controller: function () {
                        this.hide = function () {
                            e.hide(!0)
                        }, this.abort = function () {
                            e.cancel()
                        }
                    },
                    controllerAs: "dialog",
                    bindToController: !0,
                    theme: t.defaultTheme()
                }
            }

            function o(e, n, o, r, i, a, d, c) {
                function s(e, n, r, i) {
                    function d() {
                        function e() {
                            var e = n[0].querySelector(".dialog-close");
                            if (!e) {
                                var o = n[0].querySelectorAll(".md-actions button");
                                e = o[o.length - 1]
                            }
                            return t.element(e)
                        }

                        if (r.focusOnOpen) {
                            var i = o.findFocusTarget(n) || e();
                            i.focus()
                        }
                    }

                    function c() {
                        if (i) {
                            var e = /<\/[\w-]*>/gm, t = i.content || r.content || "", n = e.test(t);
                            n || (t = o.supplant("<p>{0}</p>", [t])), i.mdContent = t
                        }
                    }

                    return t.element(a[0].body).addClass("md-dialog-is-showing"), c(), m(n, r), p(n.find("md-dialog"), r), h(e, n, r), b(n, r).then(function () {
                        u(n, r), f(n, r), d()
                    })
                }

                function l(e, n, o) {
                    function r() {
                        return E(n, o)
                    }

                    function i() {
                        t.element(a[0].body).removeClass("md-dialog-is-showing"), n.remove(), o.$destroy || o.origin.focus()
                    }

                    return o.deactivateListeners(), o.unlockScreenReader(), o.hideBackdrop(o.$destroy), o.$destroy ? i() : r().then(i)
                }

                function m(e, n) {
                    n.origin = t.extend({element: null, bounds: null, focus: t.noop}, n.origin || {});
                    var o = t.element((n.targetEvent || {}).target);
                    if (o && o.length && (n.origin.element = o, n.origin.bounds = o[0].getBoundingClientRect(), n.origin.focus = function () {
                            o.focus()
                        }), t.isString(n.parent)) {
                        var r = n.parent, i = a[0].querySelectorAll(r);
                        n.parent = i.length ? i[0] : null
                    }
                    n.parent = t.element(n.parent || c)
                }

                function u(n, i) {
                    var a = t.element(d), c = o.debounce(function () {
                        g(n, i)
                    }, 60), s = [], l = function () {
                        var t = "alert" == i.$type ? e.hide : e.cancel;
                        o.nextTick(t, !0)
                    };
                    if (i.escapeToClose) {
                        var m = i.parent, u = function (e) {
                            e.keyCode === r.KEY_CODE.ESCAPE && (e.stopPropagation(), e.preventDefault(), l())
                        };
                        n.on("keyup", u), m.on("keyup", u), a.on("resize", c), s.push(function () {
                            n.off("keyup", u), m.off("keyup", u), a.off("resize", c)
                        })
                    }
                    if (i.clickOutsideToClose) {
                        var m = n, h = function (e) {
                            e.target === m[0] && (e.stopPropagation(), e.preventDefault(), l())
                        };
                        m.on("click", h), s.push(function () {
                            m.off("click", h)
                        })
                    }
                    i.deactivateListeners = function () {
                        s.forEach(function (e) {
                            e()
                        }), i.deactivateListeners = null
                    }
                }

                function h(e, t, n) {
                    n.disableParentScroll && (n.restoreScroll = o.disableScrollAround(t, n.parent)), n.hasBackdrop && (n.backdrop = o.createBackdrop(e, "md-dialog-backdrop md-opaque"), i.enter(n.backdrop, n.parent)), n.hideBackdrop = function (e) {
                        n.backdrop && (e ? n.backdrop.remove() : i.leave(n.backdrop)), n.disableParentScroll && (n.restoreScroll(), delete n.restoreScroll), n.hideBackdrop = null
                    }
                }

                function p(e, t) {
                    var r = "alert" === t.$type ? "alertdialog" : "dialog", i = e.find("md-dialog-content"), a = e.attr("id") || "dialog_" + o.nextUid();
                    e.attr({
                        role: r,
                        tabIndex: "-1"
                    }), 0 === i.length && (i = e), i.attr("id", a), e.attr("aria-describedby", a), t.ariaLabel ? n.expect(e, "aria-label", t.ariaLabel) : n.expectAsync(e, "aria-label", function () {
                        var e = i.text().split(/\s+/);
                        return e.length > 3 && (e = e.slice(0, 3).concat("...")), e.join(" ")
                    })
                }

                function f(e, t) {
                    function n(e) {
                        for (; e.parentNode;) {
                            if (e === document.body)return;
                            for (var t = e.parentNode.children, r = 0; r < t.length; r++)e === t[r] || v(t[r], ["SCRIPT", "STYLE"]) || t[r].setAttribute("aria-hidden", o);
                            n(e = e.parentNode)
                        }
                    }

                    var o = !0;
                    n(e[0]), t.unlockScreenReader = function () {
                        o = !1, n(e[0]), t.unlockScreenReader = null
                    }
                }

                function g(e, t) {
                    var n = "fixed" == d.getComputedStyle(a[0].body).position, r = t.backdrop ? d.getComputedStyle(t.backdrop[0]) : null, i = r ? Math.min(a[0].body.clientHeight, Math.ceil(Math.abs(parseInt(r.height, 10)))) : 0;
                    return e.css({top: (n ? o.scrollTop(t.parent) : 0) + "px", height: i ? i + "px" : "100%"}), e
                }

                function b(e, t) {
                    t.parent.append(e), g(e, t);
                    var n = e.find("md-dialog"), r = o.dom.animator, i = r.calculateZoomToOrigin, a = {
                        transitionInClass: "md-transition-in",
                        transitionOutClass: "md-transition-out"
                    }, d = r.toTransformCss(i(n, t.origin)), c = r.toTransformCss("");
                    return r.translate3d(n, d, c, a).then(function (e) {
                        return t.reverseAnimate = function () {
                            return delete t.reverseAnimate, e(r.toTransformCss(i(n, t.origin)))
                        }, !0
                    })
                }

                function E(e, t) {
                    return t.reverseAnimate()
                }

                function v(e, t) {
                    return -1 !== t.indexOf(e.nodeName) ? !0 : void 0
                }

                return {
                    hasBackdrop: !0,
                    isolateScope: !0,
                    onShow: s,
                    onRemove: l,
                    clickOutsideToClose: !1,
                    escapeToClose: !0,
                    targetEvent: null,
                    focusOnOpen: !0,
                    disableParentScroll: !0,
                    transformTemplate: function (e) {
                        function t(e) {
                            return /<\/md-dialog>/g.test(e) ? e : "<md-dialog>" + e + "</md-dialog>"
                        }

                        return '<div class="md-dialog-container">' + t(e) + "</div>"
                    }
                }
            }

            return n.$inject = ["$mdDialog", "$mdTheming"], o.$inject = ["$mdDialog", "$mdAria", "$mdUtil", "$mdConstant", "$animate", "$document", "$window", "$rootElement"], e("$mdDialog").setDefaults({
                methods: ["disableParentScroll", "hasBackdrop", "clickOutsideToClose", "escapeToClose", "targetEvent", "parent"],
                options: o
            }).addPreset("alert", {
                methods: ["title", "content", "ariaLabel", "ok", "theme", "css"],
                options: n
            }).addPreset("confirm", {
                methods: ["title", "content", "ariaLabel", "ok", "cancel", "theme", "css"],
                options: n
            })
        }

        t.module("material.components.dialog", ["material.core", "material.components.backdrop"]).directive("mdDialog", e).provider("$mdDialog", n), e.$inject = ["$$rAF", "$mdTheming", "$mdDialog"], n.$inject = ["$$interimElementProvider"]
    }(), function () {
        function e(e) {
            return {restrict: "E", link: e}
        }

        t.module("material.components.divider", ["material.core"]).directive("mdDivider", e), e.$inject = ["$mdTheming"]
    }(), function () {
        !function () {
            function e() {
                return {
                    restrict: "E", require: ["^?mdFabSpeedDial", "^?mdFabToolbar"], compile: function (e, n) {
                        var o = e.children(), r = !1;
                        t.forEach(["", "data-", "x-"], function (e) {
                            r = r || (o.attr(e + "ng-repeat") ? !0 : !1)
                        }), r ? o.addClass("md-fab-action-item") : o.wrap('<div class="md-fab-action-item">')
                    }
                }
            }

            t.module("material.components.fabActions", ["material.core"]).directive("mdFabActions", e)
        }()
    }(), function () {
        !function () {
            function n(n, o, r, i, a) {
                function d() {
                    S.direction = S.direction || "down", S.isOpen = S.isOpen || !1, p()
                }

                function c() {
                    var e = ["mousedown", "mouseup", "click", "touchstart", "touchend", "focusin", "focusout"];
                    t.forEach(e, function (e) {
                        o.on(e, u)
                    }), n.$on("$destroy", function () {
                        t.forEach(e, function (e) {
                            o.off(e, u)
                        }), E()
                    })
                }

                function s() {
                    O = []
                }

                function l(e) {
                    var n, o, r, i = 0;
                    do o = e.map(function (e) {
                        return e.replace("?", "")
                    }), n = t.equals(O, o), n || (e = m(e), r = e.length >= O.length && e.length !== o.length); while (10 > i && !n && r);
                    return n
                }

                function m(e) {
                    var t = !1;
                    return e.filter(function (e) {
                        return t || -1 === e.indexOf("?") ? !0 : (t = !0, !1)
                    })
                }

                function u(e) {
                    return O.push(e.type), l(["mousedown", "focusout?", "focusin?", "mouseup", "click"]) ? (N(e), void s()) : l(["touchstart?", "touchend?", "click"]) ? (N(e), void s()) : l(["focusin"]) ? (S.open(), void s()) : l(["focusout"]) ? (S.close(), void s()) : void h()
                }

                function h() {
                    D && e.clearTimeout(D), D = e.setTimeout(function () {
                        s()
                    }, 250)
                }

                function p() {
                    S.currentActionIndex = -1
                }

                function f() {
                    n.$watch("vm.direction", function (e, t) {
                        r.removeClass(o, "md-" + t), r.addClass(o, "md-" + e), p()
                    });
                    var e, t;
                    n.$watch("vm.isOpen", function (n) {
                        p(), e && t || (e = _(), t = H()), n ? b() : E();
                        var i = n ? "md-is-open" : "", a = n ? "" : "md-is-open";
                        e.attr("aria-haspopup", !0), e.attr("aria-expanded", n), t.attr("aria-hidden", !n), r.setClass(o, i, a)
                    })
                }

                function g() {
                    i.nextTick(function () {
                        r.addClass(o, "md-noop")
                    })
                }

                function b() {
                    t.element(document).on("keydown", v)
                }

                function E() {
                    t.element(document).off("keydown", v)
                }

                function v(e) {
                    switch (e.which) {
                        case a.KEY_CODE.SPACE:
                            return e.preventDefault(), !1;
                        case a.KEY_CODE.ESCAPE:
                            return S.close(), e.preventDefault(), !1;
                        case a.KEY_CODE.LEFT_ARROW:
                            return A(e), !1;
                        case a.KEY_CODE.UP_ARROW:
                            return C(e), !1;
                        case a.KEY_CODE.RIGHT_ARROW:
                            return T(e), !1;
                        case a.KEY_CODE.DOWN_ARROW:
                            return k(e), !1
                    }
                }

                function M(e) {
                    y(e, -1)
                }

                function $(e) {
                    y(e, 1)
                }

                function y(e, n) {
                    var o = H()[0].querySelectorAll(".md-fab-action-item");
                    t.forEach(o, function (e) {
                        t.element(t.element(e).children()[0]).attr("tabindex", -1)
                    }), S.currentActionIndex = S.currentActionIndex + n, S.currentActionIndex = Math.min(o.length - 1, S.currentActionIndex), S.currentActionIndex = Math.max(0, S.currentActionIndex);
                    var r = t.element(o[S.currentActionIndex]).children()[0];
                    t.element(r).attr("tabindex", 0), r.focus(), e.preventDefault(), e.stopImmediatePropagation()
                }

                function A(e) {
                    "left" === S.direction ? $(e) : M(e)
                }

                function C(e) {
                    "down" === S.direction ? M(e) : $(e)
                }

                function T(e) {
                    "left" === S.direction ? M(e) : $(e)
                }

                function k(e) {
                    "up" === S.direction ? M(e) : $(e)
                }

                function w(e) {
                    return i.getClosest(e, "md-fab-trigger")
                }

                function x(e) {
                    return i.getClosest(e, "md-fab-actions")
                }

                function N(e) {
                    w(e.target) && S.toggle(), x(e.target) && S.close()
                }

                function _() {
                    return o.find("md-fab-trigger")
                }

                function H() {
                    return o.find("md-fab-actions")
                }

                var S = this;
                S.open = function () {
                    n.$evalAsync("vm.isOpen = true")
                }, S.close = function () {
                    n.$evalAsync("vm.isOpen = false"), o.find("md-fab-trigger")[0].focus()
                }, S.toggle = function () {
                    n.$evalAsync("vm.isOpen = !vm.isOpen")
                }, d(), c(), f(), g();
                var D, O = []
            }

            t.module("material.components.fabShared", ["material.core"]).controller("FabController", n), n.$inject = ["$scope", "$element", "$animate", "$mdUtil", "$mdConstant"]
        }()
    }(), function () {
        !function () {
            function n() {
                function e(e, t) {
                    t.prepend('<div class="md-css-variables"></div>')
                }

                return {
                    restrict: "E",
                    scope: {direction: "@?mdDirection", isOpen: "=?mdOpen"},
                    bindToController: !0,
                    controller: "FabController",
                    controllerAs: "vm",
                    link: e
                }
            }

            function o() {
                function n(n) {
                    var o = n[0], r = n.controller("mdFabSpeedDial"), i = o.querySelectorAll(".md-fab-action-item"), a = o.querySelector("md-fab-trigger"), d = o.querySelector(".md-css-variables"), c = parseInt(e.getComputedStyle(d).zIndex);
                    t.forEach(i, function (e, t) {
                        var n = e.style;
                        n.transform = n.webkitTransform = "", n.transitionDelay = "", n.opacity = 1, n.zIndex = i.length - t + c
                    }), a.style.zIndex = c + i.length + 1, r.isOpen || t.forEach(i, function (e, t) {
                        var n, o, i = e.style;
                        switch (r.direction) {
                            case"up":
                                n = e.scrollHeight * (t + 1), o = "Y";
                                break;
                            case"down":
                                n = -e.scrollHeight * (t + 1), o = "Y";
                                break;
                            case"left":
                                n = e.scrollWidth * (t + 1), o = "X";
                                break;
                            case"right":
                                n = -e.scrollWidth * (t + 1), o = "X"
                        }
                        var a = "translate" + o + "(" + n + "px)";
                        i.transform = i.webkitTransform = a
                    })
                }

                return {
                    addClass: function (e, t, o) {
                        e.hasClass("md-fling") && (n(e), o())
                    }, removeClass: function (e, t, o) {
                        n(e), o()
                    }
                }
            }

            function r() {
                function e(e) {
                    var o = e[0], r = e.controller("mdFabSpeedDial"), i = o.querySelectorAll(".md-fab-action-item");
                    t.forEach(i, function (e, t) {
                        var o = e.style, a = t * n;
                        o.opacity = r.isOpen ? 1 : 0, o.transform = o.webkitTransform = r.isOpen ? "scale(1)" : "scale(0)", o.transitionDelay = (r.isOpen ? a : i.length - a) + "ms"
                    })
                }

                var n = 65;
                return {
                    addClass: function (t, n, o) {
                        e(t), o()
                    }, removeClass: function (t, n, o) {
                        e(t), o()
                    }
                }
            }

            t.module("material.components.fabSpeedDial", ["material.core", "material.components.fabShared", "material.components.fabTrigger", "material.components.fabActions"]).directive("mdFabSpeedDial", n).animation(".md-fling", o).animation(".md-scale", r).service("mdFabSpeedDialFlingAnimation", o).service("mdFabSpeedDialScaleAnimation", r)
        }()
    }(), function () {
        !function () {
            function e() {
                return {restrict: "E", require: ["^?mdFabSpeedDial", "^?mdFabToolbar"]}
            }

            t.module("material.components.fabTrigger", ["material.core"]).directive("mdFabTrigger", e)
        }()
    }(), function () {
        !function () {
            function n() {
                function e(e, t, n) {
                    t.addClass("md-fab-toolbar"), t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>')
                }

                return {
                    restrict: "E",
                    transclude: !0,
                    template: '<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',
                    scope: {direction: "@?mdDirection", isOpen: "=?mdOpen"},
                    bindToController: !0,
                    controller: "FabController",
                    controllerAs: "vm",
                    link: e
                }
            }

            function o() {
                function n(n, o, r) {
                    if (o) {
                        var i = n[0], a = n.controller("mdFabToolbar"), d = i.querySelector(".md-fab-toolbar-background"), c = i.querySelector("md-fab-trigger button"), s = i.querySelector("md-toolbar"), l = i.querySelector("md-fab-trigger button md-icon"), m = n.find("md-fab-actions").children();
                        if (c && d) {
                            var u = e.getComputedStyle(c).getPropertyValue("background-color"), h = i.offsetWidth, p = (i.offsetHeight, 2 * h);
                            d.style.backgroundColor = u, d.style.borderRadius = h + "px", a.isOpen ? (s.style.pointerEvents = "initial", d.style.width = p + "px", d.style.height = p + "px", d.style.top = -(p / 2) + "px", n.hasClass("md-right") && (d.style.left = -(p / 2) + "px", d.style.right = null), n.hasClass("md-left") && (d.style.right = -(p / 2) + "px", d.style.left = null), d.style.transitionDelay = "0ms", l && (l.style.transitionDelay = ".3s"), t.forEach(m, function (e, t) {
                                e.style.transitionDelay = 25 * (m.length - t) + "ms"
                            })) : (s.style.pointerEvents = "none", d.style.width = c.offsetWidth + "px", d.style.height = c.offsetHeight + "px", d.style.top = "0px", n.hasClass("md-right") && (d.style.left = "0px", d.style.right = null),
                            n.hasClass("md-left") && (d.style.right = "0px", d.style.left = null), d.style.transitionDelay = "200ms", l && (l.style.transitionDelay = "0ms"), t.forEach(m, function (e, t) {
                                e.style.transitionDelay = 200 + 25 * t + "ms"
                            }))
                        }
                    }
                }

                return {
                    addClass: function (e, t, o) {
                        n(e, t, o), o()
                    }, removeClass: function (e, t, o) {
                        n(e, t, o), o()
                    }
                }
            }

            t.module("material.components.fabToolbar", ["material.core", "material.components.fabShared", "material.components.fabTrigger", "material.components.fabActions"]).directive("mdFabToolbar", n).animation(".md-fab-toolbar", o).service("mdFabToolbarAnimation", o)
        }()
    }(), function () {
        function e(e, o, r, i) {
            function a(n, a, d, c) {
                function s() {
                    for (var e in o.MEDIA)i(e), i.getQuery(o.MEDIA[e]).addListener(A);
                    return i.watchResponsiveAttributes(["md-cols", "md-row-height"], d, m)
                }

                function l() {
                    c.layoutDelegate = t.noop, C();
                    for (var e in o.MEDIA)i.getQuery(o.MEDIA[e]).removeListener(A)
                }

                function m(e) {
                    null == e ? c.invalidateLayout() : i(e) && c.invalidateLayout()
                }

                function u(e) {
                    var o = g(), i = {tileSpans: b(o), colCount: E(), rowMode: $(), rowHeight: M(), gutter: v()};
                    if (e || !t.equals(i, T)) {
                        var d = r(i.colCount, i.tileSpans, o).map(function (e, n) {
                            return {
                                grid: {element: a, style: f(i.colCount, n, i.gutter, i.rowMode, i.rowHeight)},
                                tiles: e.map(function (e, r) {
                                    return {
                                        element: t.element(o[r]),
                                        style: p(e.position, e.spans, i.colCount, n, i.gutter, i.rowMode, i.rowHeight)
                                    }
                                })
                            }
                        }).reflow().performance();
                        n.mdOnLayout({$event: {performance: d}}), T = i
                    }
                }

                function h(e) {
                    return k + e + w
                }

                function p(e, t, n, o, r, i, a) {
                    var d = 1 / n * 100, c = (n - 1) / n, s = x({
                        share: d,
                        gutterShare: c,
                        gutter: r
                    }), l = {
                        left: N({unit: s, offset: e.col, gutter: r}),
                        width: _({unit: s, span: t.col, gutter: r}),
                        paddingTop: "",
                        marginTop: "",
                        top: "",
                        height: ""
                    };
                    switch (i) {
                        case"fixed":
                            l.top = N({unit: a, offset: e.row, gutter: r}), l.height = _({
                                unit: a,
                                span: t.row,
                                gutter: r
                            });
                            break;
                        case"ratio":
                            var m = d / a, u = x({share: m, gutterShare: c, gutter: r});
                            l.paddingTop = _({unit: u, span: t.row, gutter: r}), l.marginTop = N({
                                unit: u,
                                offset: e.row,
                                gutter: r
                            });
                            break;
                        case"fit":
                            var h = (o - 1) / o, m = 1 / o * 100, u = x({share: m, gutterShare: h, gutter: r});
                            l.top = N({unit: u, offset: e.row, gutter: r}), l.height = _({
                                unit: u,
                                span: t.row,
                                gutter: r
                            })
                    }
                    return l
                }

                function f(e, t, n, o, r) {
                    var i = {height: "", paddingBottom: ""};
                    switch (o) {
                        case"fixed":
                            i.height = _({unit: r, span: t, gutter: n});
                            break;
                        case"ratio":
                            var a = 1 === e ? 0 : (e - 1) / e, d = 1 / e * 100, c = d * (1 / r), s = x({
                                share: c,
                                gutterShare: a,
                                gutter: n
                            });
                            i.paddingBottom = _({unit: s, span: t, gutter: n});
                            break;
                        case"fit":
                    }
                    return i
                }

                function g() {
                    return [].filter.call(a.children(), function (e) {
                        return "MD-GRID-TILE" == e.tagName
                    })
                }

                function b(e) {
                    return [].map.call(e, function (e) {
                        var n = t.element(e).controller("mdGridTile");
                        return {
                            row: parseInt(i.getResponsiveAttribute(n.$attrs, "md-rowspan"), 10) || 1,
                            col: parseInt(i.getResponsiveAttribute(n.$attrs, "md-colspan"), 10) || 1
                        }
                    })
                }

                function E() {
                    var e = parseInt(i.getResponsiveAttribute(d, "md-cols"), 10);
                    if (isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";
                    return e
                }

                function v() {
                    return y(i.getResponsiveAttribute(d, "md-gutter") || 1)
                }

                function M() {
                    var e = i.getResponsiveAttribute(d, "md-row-height");
                    switch ($()) {
                        case"fixed":
                            return y(e);
                        case"ratio":
                            var t = e.split(":");
                            return parseFloat(t[0]) / parseFloat(t[1]);
                        case"fit":
                            return 0
                    }
                }

                function $() {
                    var e = i.getResponsiveAttribute(d, "md-row-height");
                    return "fit" == e ? "fit" : -1 !== e.indexOf(":") ? "ratio" : "fixed"
                }

                function y(e) {
                    return /\D$/.test(e) ? e : e + "px"
                }

                a.attr("role", "list"), c.layoutDelegate = u;
                var A = t.bind(c, c.invalidateLayout), C = s();
                n.$on("$destroy", l);
                var T, k = e.startSymbol(), w = e.endSymbol(), x = e(h("share") + "% - (" + h("gutter") + " * " + h("gutterShare") + ")"), N = e("calc((" + h("unit") + " + " + h("gutter") + ") * " + h("offset") + ")"), _ = e("calc((" + h("unit") + ") * " + h("span") + " + (" + h("span") + " - 1) * " + h("gutter") + ")")
            }

            return {restrict: "E", controller: n, scope: {mdOnLayout: "&"}, link: a}
        }

        function n(e) {
            this.layoutInvalidated = !1, this.tilesInvalidated = !1, this.$timeout_ = e.nextTick, this.layoutDelegate = t.noop
        }

        function o(e) {
            function n(t, n) {
                var o, a, d, c, s, l;
                return c = e.time(function () {
                    a = r(t, n)
                }), o = {
                    layoutInfo: function () {
                        return a
                    }, map: function (t) {
                        return s = e.time(function () {
                            var e = o.layoutInfo();
                            d = t(e.positioning, e.rowCount)
                        }), o
                    }, reflow: function (t) {
                        return l = e.time(function () {
                            var e = t || i;
                            e(d.grid, d.tiles)
                        }), o
                    }, performance: function () {
                        return {tileCount: n.length, layoutTime: c, mapTime: s, reflowTime: l, totalTime: c + s + l}
                    }
                }
            }

            function o(e, t) {
                e.element.css(e.style), t.forEach(function (e) {
                    e.element.css(e.style)
                })
            }

            function r(e, t) {
                function n(t, n) {
                    if (t.col > e)throw"md-grid-list: Tile at position " + n + " has a colspan (" + t.col + ") that exceeds the column count (" + e + ")";
                    for (var a = 0, l = 0; l - a < t.col;)d >= e ? o() : (a = s.indexOf(0, d), -1 !== a && -1 !== (l = i(a + 1)) ? d = l + 1 : (a = l = 0, o()));
                    return r(a, t.col, t.row), d = a + t.col, {col: a, row: c}
                }

                function o() {
                    d = 0, c++, r(0, e, -1)
                }

                function r(e, t, n) {
                    for (var o = e; e + t > o; o++)s[o] = Math.max(s[o] + n, 0)
                }

                function i(e) {
                    var t;
                    for (t = e; t < s.length; t++)if (0 !== s[t])return t;
                    return t === s.length ? t : void 0
                }

                function a() {
                    for (var t = [], n = 0; e > n; n++)t.push(0);
                    return t
                }

                var d = 0, c = 0, s = a();
                return {
                    positioning: t.map(function (e, t) {
                        return {spans: e, position: n(e, t)}
                    }), rowCount: c + Math.max.apply(Math, s)
                }
            }

            var i = o;
            return n.animateWith = function (e) {
                i = t.isFunction(e) ? e : o
            }, n
        }

        function r(e) {
            function n(n, o, r, i) {
                o.attr("role", "listitem");
                var a = e.watchResponsiveAttributes(["md-colspan", "md-rowspan"], r, t.bind(i, i.invalidateLayout));
                i.invalidateTiles(), n.$on("$destroy", function () {
                    a(), i.invalidateLayout()
                }), t.isDefined(n.$parent.$index) && n.$watch(function () {
                    return n.$parent.$index
                }, function (e, t) {
                    e !== t && i.invalidateTiles()
                })
            }

            return {
                restrict: "E",
                require: "^mdGridList",
                template: "<figure ng-transclude></figure>",
                transclude: !0,
                scope: {},
                controller: ["$attrs", function (e) {
                    this.$attrs = e
                }],
                link: n
            }
        }

        function i() {
            return {template: "<figcaption ng-transclude></figcaption>", transclude: !0}
        }

        t.module("material.components.gridList", ["material.core"]).directive("mdGridList", e).directive("mdGridTile", r).directive("mdGridTileFooter", i).directive("mdGridTileHeader", i).factory("$mdGridLayout", o), e.$inject = ["$interpolate", "$mdConstant", "$mdGridLayout", "$mdMedia"], n.$inject = ["$mdUtil"], n.prototype = {
            invalidateTiles: function () {
                this.tilesInvalidated = !0, this.invalidateLayout()
            }, invalidateLayout: function () {
                this.layoutInvalidated || (this.layoutInvalidated = !0, this.$timeout_(t.bind(this, this.layout)))
            }, layout: function () {
                try {
                    this.layoutDelegate(this.tilesInvalidated)
                } finally {
                    this.layoutInvalidated = !1, this.tilesInvalidated = !1
                }
            }
        }, o.$inject = ["$mdUtil"], r.$inject = ["$mdMedia"]
    }(), function () {
        t.module("material.components.icon", ["material.core"])
    }(), function () {
        function e(e, t) {
            function n(t, n, o) {
                e(n)
            }

            function o(e, n, o) {
                var r = this;
                r.isErrorGetter = o.mdIsError && t(o.mdIsError), r.delegateClick = function () {
                    r.input.focus()
                }, r.element = n, r.setFocused = function (e) {
                    n.toggleClass("md-input-focused", !!e)
                }, r.setHasValue = function (e) {
                    n.toggleClass("md-input-has-value", !!e)
                }, r.setHasMessages = function (e) {
                    n.toggleClass("md-input-has-messages", !!e)
                }, r.setHasPlaceholder = function (e) {
                    n.toggleClass("md-input-has-placeholder", !!e)
                }, r.setInvalid = function (e) {
                    n.toggleClass("md-input-invalid", !!e)
                }, e.$watch(function () {
                    return r.label && r.input
                }, function (e) {
                    e && !r.label.attr("for") && r.label.attr("for", r.input.attr("id"))
                })
            }

            return o.$inject = ["$scope", "$element", "$attrs"], {restrict: "E", link: n, controller: o}
        }

        function n() {
            return {
                restrict: "E", require: "^?mdInputContainer", link: function (e, t, n, o) {
                    o && !n.mdNoFloat && (o.label = t, e.$on("$destroy", function () {
                        o.label = null
                    }))
                }
            }
        }

        function o(e, n, o) {
            function r(r, i, a, d) {
                function c(e) {
                    return m.setHasValue(!h.$isEmpty(e)), e
                }

                function s() {
                    m.setHasValue(i.val().length > 0 || (i[0].validity || {}).badInput)
                }

                function l() {
                    function o(e) {
                        return f(), e
                    }

                    function a() {
                        if (l.style.height = l.offsetHeight + "px", i.addClass("md-no-flex"), isNaN(u)) {
                            s.style.height = "auto", s.scrollTop = 0;
                            var e = d();
                            e && (s.style.height = e + "px")
                        } else {
                            s.setAttribute("rows", 1), p || (s.style.minHeight = "0", p = i.prop("clientHeight"), s.style.minHeight = null);
                            var t = Math.max(u, Math.round(s.scrollHeight / p));
                            s.setAttribute("rows", t)
                        }
                        i.removeClass("md-no-flex"), l.style.height = "auto"
                    }

                    function d() {
                        var e = s.scrollHeight - s.offsetHeight;
                        return s.offsetHeight + (e > 0 ? e : 0)
                    }

                    function c(e) {
                        s.scrollTop = 0;
                        var t = s.scrollHeight - s.offsetHeight, n = s.offsetHeight + t;
                        s.style.height = n + "px"
                    }

                    if (!t.isDefined(i.attr("md-no-autogrow"))) {
                        var s = i[0], l = m.element[0], u = NaN, p = null;
                        s.hasAttribute("rows") && (u = parseInt(s.getAttribute("rows")));
                        var f = e.debounce(a, 1);
                        h ? (h.$formatters.push(o), h.$viewChangeListeners.push(o)) : f(), i.on("keydown input", f), isNaN(u) && (i.attr("rows", "1"), i.on("scroll", c)), t.element(n).on("resize", f), r.$on("$destroy", function () {
                            t.element(n).off("resize", f)
                        })
                    }
                }

                var m = d[0], u = !!d[1], h = d[1] || e.fakeNgModel(), p = t.isDefined(a.readonly);
                if (m) {
                    if (m.input)throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");
                    m.input = i, m.label || o.expect(i, "aria-label", i.attr("placeholder")), i.addClass("md-input"), i.attr("id") || i.attr("id", "input_" + e.nextUid()), "textarea" === i[0].tagName.toLowerCase() && l(), u || s();
                    var f = m.isErrorGetter || function () {
                            return h.$invalid && h.$touched
                        };
                    r.$watch(f, m.setInvalid), h.$parsers.push(c), h.$formatters.push(c), i.on("input", s), p || i.on("focus", function (e) {
                        m.setFocused(!0)
                    }).on("blur", function (e) {
                        m.setFocused(!1), s()
                    }), r.$on("$destroy", function () {
                        m.setFocused(!1), m.setHasValue(!1), m.input = null
                    })
                }
            }

            return {restrict: "E", require: ["^?mdInputContainer", "?ngModel"], link: r}
        }

        function r(e) {
            function n(n, o, r, i) {
                function a(e) {
                    return l.text((o.val() || e || "").length + "/" + d), e
                }

                var d, c = i[0], s = i[1], l = t.element('<div class="md-char-counter">'), m = t.element(s.element[0].querySelector("[md-maxlength]"));
                r.$set("ngTrim", "false");
                var u = ["ng-messages", "data-ng-messages", "x-ng-messages", "[ng-messages]", "[data-ng-messages]", "[x-ng-messages]"], h = s.element[0].querySelector(u.join(","));
                h ? t.element(h).prepend(l) : m.after(l), c.$formatters.push(a), c.$viewChangeListeners.push(a), o.on("input keydown", function () {
                    a()
                }), n.$watch(r.mdMaxlength, function (n) {
                    d = n, t.isNumber(n) && n > 0 ? (l.parent().length || e.enter(l, s.element, m), a()) : e.leave(l)
                }), c.$validators["md-maxlength"] = function (e, n) {
                    return !t.isNumber(d) || 0 > d ? !0 : (e || o.val() || n || "").length <= d
                }
            }

            return {restrict: "A", require: ["ngModel", "^mdInputContainer"], link: n}
        }

        function i(e) {
            function n(e, n, o, r) {
                if (r) {
                    r.setHasPlaceholder(!0);
                    var i = r.element.find("label"), a = t.isDefined(r.element.attr("md-no-float"));
                    if (!(i && i.length || a)) {
                        var d = o.placeholder;
                        if (n.removeAttr("placeholder"), r.input && "MD-SELECT" != r.input[0].nodeName) {
                            var c = '<label ng-click="delegateClick()">' + d + "</label>";
                            r.element.addClass("md-icon-float"), r.element.prepend(c)
                        }
                    }
                }
            }

            return {restrict: "A", require: "^^?mdInputContainer", priority: 200, link: n}
        }

        function a() {
            function e(e, t, n, o) {
                o && (o.setHasMessages(!0), e.$on("$destroy", function () {
                    o.setHasMessages(!1)
                }))
            }

            return {restrict: "EA", link: e, require: "^^?mdInputContainer"}
        }

        t.module("material.components.input", ["material.core"]).directive("mdInputContainer", e).directive("label", n).directive("input", o).directive("textarea", o).directive("mdMaxlength", r).directive("placeholder", i).directive("ngMessages", a), e.$inject = ["$mdTheming", "$parse"], o.$inject = ["$mdUtil", "$window", "$mdAria"], r.$inject = ["$animate"], i.$inject = ["$log"]
    }(), function () {
        function e(e) {
            return {
                restrict: "E", compile: function (t) {
                    return t[0].setAttribute("role", "list"), e
                }
            }
        }

        function n(e, n, o, r) {
            var i = ["md-checkbox", "md-switch"];
            return {
                restrict: "E", controller: "MdListController", compile: function (a, d) {
                    function c() {
                        for (var e, t, n = ["md-switch", "md-checkbox"], o = 0; t = n[o]; ++o)if ((e = a.find(t)[0]) && !e.hasAttribute("aria-label")) {
                            var r = a.find("p")[0];
                            if (!r)return;
                            e.setAttribute("aria-label", "Toggle " + r.textContent)
                        }
                    }

                    function s(n) {
                        var o;
                        if ("div" == n)o = t.element('<div class="md-no-style md-list-item-inner">'), o.append(a.contents()), a.addClass("md-proxy-focus"); else {
                            o = t.element('<md-button class="md-no-style"><div class="md-list-item-inner"></div></md-button>');
                            var r = ["ng-click", "aria-label", "ng-disabled"];
                            t.forEach(r, function (e) {
                                a[0].hasAttribute(e) && (o[0].setAttribute(e, a[0].getAttribute(e)), a[0].removeAttribute(e))
                            }), o.children().eq(0).append(a.contents())
                        }
                        if (a[0].setAttribute("tabindex", "-1"), a.append(o), p && p.hasAttribute("ng-click")) {
                            e.expect(p, "aria-label");
                            var i = t.element('<md-button class="md-secondary-container md-icon-button">');
                            i.attr("ng-click", p.getAttribute("ng-click")), p.removeAttribute("ng-click"), p.setAttribute("tabindex", "-1"), p.classList.remove("md-secondary"), i.append(p), p = i[0]
                        }
                        p && (p.hasAttribute("ng-click") || d.ngClick && l(p)) && (a.addClass("md-with-secondary"), a.append(p))
                    }

                    function l(e) {
                        return -1 != i.indexOf(e.nodeName.toLowerCase())
                    }

                    function m(e, a, d, c) {
                        function s() {
                            var e = a.children();
                            e.length && !e[0].hasAttribute("ng-click") && t.forEach(i, function (e) {
                                t.forEach(u.querySelectorAll(e), function (e) {
                                    m.push(e)
                                })
                            })
                        }

                        function l() {
                            (m.length || h) && (a.addClass("md-clickable"), c.attachRipple(e, t.element(a[0].querySelector(".md-no-style"))))
                        }

                        var m = [], u = a[0].firstElementChild, h = u && u.hasAttribute("ng-click");
                        s(), l(), a.hasClass("md-proxy-focus") && m.length && t.forEach(m, function (n) {
                            n = t.element(n), e.mouseActive = !1, n.on("mousedown", function () {
                                e.mouseActive = !0, r(function () {
                                    e.mouseActive = !1
                                }, 100)
                            }).on("focus", function () {
                                e.mouseActive === !1 && a.addClass("md-focused"), n.on("blur", function t() {
                                    a.removeClass("md-focused"), n.off("blur", t)
                                })
                            })
                        }), h || m.length || u && u.addEventListener("keypress", function (e) {
                            if ("INPUT" != e.target.nodeName && "TEXTAREA" != e.target.nodeName) {
                                var t = e.which || e.keyCode;
                                t == n.KEY_CODE.SPACE && u && (u.click(), e.preventDefault(), e.stopPropagation())
                            }
                        }), a.off("click"), a.off("keypress"), m.length && u && a.children().eq(0).on("click", function (e) {
                            var n = o.getClosest(e.target, "BUTTON");
                            !n && u.contains(e.target) && t.forEach(m, function (n) {
                                e.target === n || n.contains(e.target) || t.element(n).triggerHandler("click")
                            })
                        })
                    }

                    var u, h, p = a[0].querySelector(".md-secondary");
                    if (a[0].setAttribute("role", "listitem"), d.ngClick)s("button"); else {
                        for (var f, g = 0; f = i[g]; ++g)if (h = a[0].querySelector(f)) {
                            u = !0;
                            break
                        }
                        u ? s("div") : a[0].querySelector("md-button") || a.addClass("md-no-proxy")
                    }
                    return c(), m
                }
            }
        }

        function o(e, t, n) {
            function o(e, t) {
                var o = {};
                n.attach(e, t, o)
            }

            var r = this;
            r.attachRipple = o
        }

        t.module("material.components.list", ["material.core"]).controller("MdListController", o).directive("mdList", e).directive("mdListItem", n), e.$inject = ["$mdTheming"], n.$inject = ["$mdAria", "$mdConstant", "$mdUtil", "$timeout"], o.$inject = ["$scope", "$element", "$mdListInkRipple"]
    }(), function () {
        t.module("material.components.menu", ["material.core", "material.components.backdrop"])
    }(), function () {
        t.module("material.components.menuBar", ["material.core", "material.components.menu"])
    }(), function () {
        function e(e, o, r) {
            function i(e) {
                return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), a
            }

            function a(i, a, h) {
                function p() {
                    h.$observe("value", function (e) {
                        var t = d(e);
                        a.attr("aria-valuenow", t), v() == m && b(t)
                    }), h.$observe("mdMode", function (e) {
                        switch (e) {
                            case m:
                            case u:
                                y.removeClass("ng-hide"), y.removeClass(M), y.addClass(M = "md-mode-" + e);
                                break;
                            default:
                                y.removeClass(M), y.addClass("ng-hide"), M = n
                        }
                    })
                }

                function f() {
                    $.css(A({transform: o.supplant("scale( {0} )", [E()])}))
                }

                function g() {
                    if (t.isUndefined(h.mdMode)) {
                        var e = t.isDefined(h.value), n = e ? m : u, i = "Auto-adding the missing md-mode='{0}' to the ProgressCircular element";
                        r.debug(o.supplant(i, [n])), a.attr("md-mode", n), h.mdMode = n
                    }
                }

                function b(e) {
                    if (v()) {
                        C = C || t.element(a[0].querySelector(".md-left > .md-half-circle")), T = T || t.element(a[0].querySelector(".md-right > .md-half-circle")), k = k || t.element(a[0].querySelector(".md-gap"));
                        var n = c({
                            borderBottomColor: 50 >= e ? "transparent !important" : "",
                            transition: 50 >= e ? "" : "borderBottomColor 0.1s linear"
                        }), r = c({
                            transition: 50 >= e ? "transform 0.1s linear" : "",
                            transform: o.supplant("rotate({0}deg)", [50 >= e ? 135 : (e - 50) / 50 * 180 + 135])
                        }), i = c({
                            transition: e >= 50 ? "transform 0.1s linear" : "",
                            transform: o.supplant("rotate({0}deg)", [e >= 50 ? 45 : e / 50 * 180 - 135])
                        });
                        C.css(A(r)), T.css(A(i)), k.css(A(n))
                    }
                }

                function E() {
                    if (!h.mdDiameter)return l;
                    var e = /([0-9]*)%/.exec(h.mdDiameter), t = Math.max(0, e && e[1] / 100 || parseFloat(h.mdDiameter));
                    return t > 1 ? t / s : t
                }

                function v() {
                    var e = (h.mdMode || "").trim();
                    if (e)switch (e) {
                        case m:
                        case u:
                            break;
                        default:
                            e = n
                    }
                    return e
                }

                e(a);
                var M, $ = a, y = t.element(a.children()[0]), A = o.dom.animator.toCss;
                a.attr("md-mode", v()), f(), g(), p();
                var C, T, k
            }

            function d(e) {
                return Math.max(0, Math.min(e || 0, 100))
            }

            function c(e) {
                for (var t in e)e.hasOwnProperty(t) && "" == e[t] && delete e[t];
                return e
            }

            var s = 100, l = .5, m = "determinate", u = "indeterminate";
            return {
                restrict: "E",
                scope: !0,
                template: '<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',
                compile: i
            }
        }

        t.module("material.components.progressCircular", ["material.core"]).directive("mdProgressCircular", e), e.$inject = ["$mdTheming", "$mdUtil", "$log"]
    }(), function () {
        function e(e, o, r) {
            function i(e, t, n) {
                return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), a
            }

            function a(i, a, u) {
                function h() {
                    u.$observe("value", function (e) {
                        var t = d(e);
                        a.attr("aria-valuenow", t), f() != m && g(M, t)
                    }), u.$observe("mdBufferValue", function (e) {
                        g(v, d(e))
                    }), u.$observe("mdMode", function (e) {
                        switch (e) {
                            case m:
                            case l:
                            case c:
                            case s:
                                $.removeClass("ng-hide " + b), $.addClass(b = "md-mode-" + e);
                                break;
                            default:
                                $.removeClass(b), $.addClass("ng-hide"), b = n
                        }
                    })
                }

                function p() {
                    if (t.isUndefined(u.mdMode)) {
                        var e = t.isDefined(u.value), n = e ? c : s, i = "Auto-adding the missing md-mode='{0}' to the ProgressLinear element";
                        r.debug(o.supplant(i, [n])), a.attr("md-mode", n), u.mdMode = n
                    }
                }

                function f() {
                    var e = (u.mdMode || "").trim();
                    if (e)switch (e) {
                        case c:
                        case s:
                        case l:
                        case m:
                            break;
                        default:
                            e = n
                    }
                    return e
                }

                function g(e, n) {
                    if (f()) {
                        var r = o.supplant("translateX({0}%) scale({1},1)", [(n - 100) / 2, n / 100]), i = E({transform: r});
                        t.element(e).css(i)
                    }
                }

                e(a);
                var b, E = o.dom.animator.toCss, v = t.element(a[0].querySelector(".md-bar1")), M = t.element(a[0].querySelector(".md-bar2")), $ = t.element(a[0].querySelector(".md-container"));
                a.attr("md-mode", f()), p(), h()
            }

            function d(e) {
                return Math.max(0, Math.min(e || 0, 100))
            }

            var c = "determinate", s = "indeterminate", l = "buffer", m = "query";
            return {
                restrict: "E",
                template: '<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',
                compile: i
            }
        }

        t.module("material.components.progressLinear", ["material.core"]).directive("mdProgressLinear", e), e.$inject = ["$mdTheming", "$mdUtil", "$log"]
    }(), function () {
        function e(e, n, o, r) {
            function i(i, a, d, c) {
                function s() {
                    a.hasClass("md-focused") || a.addClass("md-focused")
                }

                function l(o) {
                    var r = o.which || o.keyCode;
                    switch (r) {
                        case n.KEY_CODE.LEFT_ARROW:
                        case n.KEY_CODE.UP_ARROW:
                            o.preventDefault(), m.selectPrevious(), s();
                            break;
                        case n.KEY_CODE.RIGHT_ARROW:
                        case n.KEY_CODE.DOWN_ARROW:
                            o.preventDefault(), m.selectNext(), s();
                            break;
                        case n.KEY_CODE.ENTER:
                            var i = t.element(e.getClosest(a[0], "form"));
                            i.length > 0 && i.triggerHandler("submit")
                    }
                }

                o(a);
                var m = c[0], u = c[1] || e.fakeNgModel();
                m.init(u), i.mouseActive = !1, a.attr({
                    role: "radiogroup",
                    tabIndex: a.attr("tabindex") || "0"
                }).on("keydown", l).on("mousedown", function (e) {
                    i.mouseActive = !0, r(function () {
                        i.mouseActive = !1
                    }, 100)
                }).on("focus", function () {
                    i.mouseActive === !1 && m.$element.addClass("md-focused")
                }).on("blur", function () {
                    m.$element.removeClass("md-focused")
                })
            }

            function a(e) {
                this._radioButtonRenderFns = [], this.$element = e
            }

            function d() {
                return {
                    init: function (e) {
                        this._ngModelCtrl = e, this._ngModelCtrl.$render = t.bind(this, this.render)
                    }, add: function (e) {
                        this._radioButtonRenderFns.push(e)
                    }, remove: function (e) {
                        var t = this._radioButtonRenderFns.indexOf(e);
                        -1 !== t && this._radioButtonRenderFns.splice(t, 1)
                    }, render: function () {
                        this._radioButtonRenderFns.forEach(function (e) {
                            e()
                        })
                    }, setViewValue: function (e, t) {
                        this._ngModelCtrl.$setViewValue(e, t), this.render()
                    }, getViewValue: function () {
                        return this._ngModelCtrl.$viewValue
                    }, selectNext: function () {
                        return c(this.$element, 1)
                    }, selectPrevious: function () {
                        return c(this.$element, -1)
                    }, setActiveDescendant: function (e) {
                        this.$element.attr("aria-activedescendant", e)
                    }
                }
            }

            function c(n, o) {
                var r = e.iterator(n[0].querySelectorAll("md-radio-button"), !0);
                if (r.count()) {
                    var i = function (e) {
                        return !t.element(e).attr("disabled")
                    }, a = n[0].querySelector("md-radio-button.md-checked"), d = r[0 > o ? "previous" : "next"](a, i) || r.first();
                    t.element(d).triggerHandler("click")
                }
            }

            return a.prototype = d(), {
                restrict: "E",
                controller: ["$element", a],
                require: ["mdRadioGroup", "?ngModel"],
                link: {pre: i}
            }
        }

        function n(e, t, n) {
            function o(o, i, a, d) {
                function c(e) {
                    if (!d)throw"RadioGroupController not found.";
                    d.add(l), a.$observe("value", l), i.on("click", s).on("$destroy", function () {
                        d.remove(l)
                    })
                }

                function s(e) {
                    i[0].hasAttribute("disabled") || o.$apply(function () {
                        d.setViewValue(a.value, e && e.type)
                    })
                }

                function l() {
                    function e(e) {
                        "MD-RADIO-GROUP" != i.parent()[0].nodeName && i.parent()[e ? "addClass" : "removeClass"](r)
                    }

                    var t = d.getViewValue() == a.value;
                    t !== u && (u = t, i.attr("aria-checked", t), t ? (e(!0), i.addClass(r), d.setActiveDescendant(i.attr("id"))) : (e(!1), i.removeClass(r)))
                }

                function m(n, o) {
                    function r() {
                        return a.id || "radio_" + t.nextUid()
                    }

                    o.ariaId = r(), n.attr({
                        id: o.ariaId,
                        role: "radio",
                        "aria-checked": "false"
                    }), e.expectWithText(n, "aria-label")
                }

                var u;
                n(i), m(i, o), c()
            }

            var r = "md-checked";
            return {
                restrict: "E",
                require: "^mdRadioGroup",
                transclude: !0,
                template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',
                link: o
            }
        }

        t.module("material.components.radioButton", ["material.core"]).directive("mdRadioGroup", e).directive("mdRadioButton", n), e.$inject = ["$mdUtil", "$mdConstant", "$mdTheming", "$timeout"], n.$inject = ["$mdAria", "$mdUtil", "$mdTheming"]
    }(), function () {
        function e(e, o, r, i, a, d) {
            function c(c, s) {
                var l = t.element("<md-select-value><span></span></md-select-value>");
                if (l.append('<span class="md-select-icon" aria-hidden="true"></span>'), l.addClass("md-select-value"), l[0].hasAttribute("id") || l.attr("id", "select_value_label_" + o.nextUid()), c.find("md-content").length || c.append(t.element("<md-content>").append(c.contents())), s.mdOnOpen && (c.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="{{progressMode}}" ng-hide="$$loadingAsyncDone"></md-progress-circular></div>')), c.find("md-option").attr("ng-show", "$$loadingAsyncDone")), s.name) {
                    var m = t.element('<select class="md-visually-hidden">');
                    m.attr({name: "." + s.name, "ng-model": s.ngModel, "aria-hidden": "true", tabindex: "-1"});
                    var u = c.find("md-option");
                    t.forEach(u, function (e) {
                        var n = t.element("<option>" + e.innerHTML + "</option>");
                        e.hasAttribute("ng-value") ? n.attr("ng-value", e.getAttribute("ng-value")) : e.hasAttribute("value") && n.attr("value", e.getAttribute("value")), m.append(n)
                    }), c.parent().append(m)
                }
                var h = t.isDefined(s.multiple) ? "multiple" : "", p = '<div class="md-select-menu-container"><md-select-menu {0}>{1}</md-select-menu></div>';
                return p = o.supplant(p, [h, c.html()]), c.empty().append(l), s.tabindex = s.tabindex || "0", function (c, s, l, m) {
                    function u() {
                        var e = s.attr("placeholder");
                        !e && M && M.label && (e = M.label.text()), i.expect(s, "aria-label", e)
                    }

                    function h() {
                        w && (N = N || w.find("md-select-menu").controller("mdSelectMenu"), $.setLabelText(N.selectedLabels()))
                    }

                    function f() {
                        M && M.setHasValue(N.selectedLabels().length > 0 || (s[0].validity || {}).badInput)
                    }

                    function g() {
                        w = t.element(p);
                        var e = w.find("md-select-menu");
                        if (e.data("$ngModelController", y), e.data("$mdSelectController", $), x = c.$new(), r.inherit(w, s), s.attr("md-container-class")) {
                            var n = w[0].getAttribute("class") + " " + s.attr("md-container-class");
                            w[0].setAttribute("class", n)
                        }
                        w = a(w)(x), N = w.find("md-select-menu").controller("mdSelectMenu")
                    }

                    function b(e) {
                        var n = [32, 13, 38, 40];
                        if (-1 != n.indexOf(e.keyCode))e.preventDefault(), E(e); else if (e.keyCode <= 90 && e.keyCode >= 31) {
                            e.preventDefault();
                            var o = N.optNodeForKeyboardSearch(e);
                            if (!o)return;
                            var r = t.element(o).controller("mdOption");
                            N.isMultiple || N.deselect(Object.keys(N.selected)[0]), N.select(r.hashKey, r.value), N.refreshViewValue(), y.$render()
                        }
                    }

                    function E() {
                        x.isOpen = !0, e.show({
                            scope: x,
                            preserveScope: !0,
                            skipCompile: !0,
                            element: w,
                            target: s[0],
                            hasBackdrop: !0,
                            loadingAsync: l.mdOnOpen ? c.$eval(l.mdOnOpen) || !0 : !1
                        }).then(function () {
                            x.isOpen = !1
                        })
                    }

                    var v, M = m[0], $ = m[1], y = m[2], A = m[3], C = s.find("md-select-value"), T = t.isDefined(l.readonly);
                    if (M) {
                        var k = M.isErrorGetter || function () {
                                return y.$invalid && y.$touched
                            };
                        if (M.input)throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");
                        M.input = s, M.label || i.expect(s, "aria-label", s.attr("placeholder")), c.$watch(k, M.setInvalid)
                    }
                    var w, x, N;
                    if (g(), r(s), l.name && A) {
                        var _ = s.parent()[0].querySelector('select[name=".' + l.name + '"]'), H = t.element(_).controller();
                        H && A.$removeControl(H)
                    }
                    A && o.nextTick(function () {
                        A.$setPristine()
                    });
                    var S = y.$render;
                    y.$render = function () {
                        S(), h(), f()
                    }, l.$observe("placeholder", y.$render), $.setLabelText = function (e) {
                        $.setIsPlaceholder(!e);
                        var t = l.placeholder || (M && M.label ? M.label.text() : "");
                        e = e || t || "";
                        var n = C.children().eq(0);
                        n.text(e)
                    }, $.setIsPlaceholder = function (e) {
                        e ? (C.addClass("md-select-placeholder"), M && M.label && M.label.addClass("md-placeholder md-static")) : (C.removeClass("md-select-placeholder"), M && M.label && M.label.removeClass("md-placeholder"))
                    }, T || s.on("focus", function (e) {
                        M && M.element.hasClass("md-input-has-value") && M.setFocused(!0)
                    }).on("blur", function (e) {
                        M && M.setFocused(!1), f()
                    }), $.triggerClose = function () {
                        d(l.mdOnClose)(c)
                    }, c.$$postDigest(function () {
                        u(), h()
                    });
                    var D;
                    l.$observe("ngMultiple", function (e) {
                        D && D();
                        var t = d(e);
                        D = c.$watch(function () {
                            return t(c)
                        }, function (e, t) {
                            (e !== n || t !== n) && (e ? s.attr("multiple", "multiple") : s.removeAttr("multiple"), w && (N.setMultiple(e), S = y.$render, y.$render = function () {
                                S(), h()
                            }, N.refreshViewValue(), y.$render()))
                        })
                    }), l.$observe("disabled", function (e) {
                        t.isString(e) && (e = !0), (v === n || v !== e) && (v = e, e ? (s.attr({
                            tabindex: -1,
                            "aria-disabled": "true"
                        }), s.off("click", E), s.off("keydown", b)) : (s.attr({
                            tabindex: l.tabindex,
                            "aria-disabled": "false"
                        }), s.on("click", E), s.on("keydown", b)))
                    }), l.disabled || l.ngDisabled || (s.attr({
                        tabindex: l.tabindex,
                        "aria-disabled": "false"
                    }), s.on("click", E), s.on("keydown", b));
                    var O = {role: "combobox", "aria-expanded": "false"};
                    s[0].hasAttribute("id") || (O.id = "select_" + o.nextUid()), s.attr(O), c.$on("$destroy", function () {
                        e.destroy()["finally"](function () {
                            w && w.remove(), M && (M.setFocused(!1), M.setHasValue(!1), M.input = null)
                        })
                    })
                }
            }

            return {
                restrict: "E",
                require: ["^?mdInputContainer", "mdSelect", "ngModel", "?^form"],
                compile: c,
                controller: function () {
                }
            }
        }

        function o(e, o, r) {
            function i(e, n, i, a) {
                function d() {
                    n.attr({
                        id: "select_menu_" + o.nextUid(),
                        role: "listbox",
                        "aria-multiselectable": l.isMultiple ? "true" : "false"
                    })
                }

                function c(e) {
                    (13 == e.keyCode || 32 == e.keyCode) && s(e)
                }

                function s(n) {
                    var r = o.getClosest(n.target, "md-option"), i = r && t.element(r).data("$mdOptionController");
                    if (r && i) {
                        if (r.hasAttribute("disabled"))return n.stopImmediatePropagation(), !1;
                        var a = l.hashGetter(i.value), d = t.isDefined(l.selected[a]);
                        e.$apply(function () {
                            l.isMultiple ? d ? l.deselect(a) : l.select(a, i.value) : d || (l.deselect(Object.keys(l.selected)[0]), l.select(a, i.value)), l.refreshViewValue()
                        })
                    }
                }

                var l = a[0], m = a[1];
                r(n), n.on("click", s), n.on("keypress", c), m && l.init(m), d()
            }

            function a(r, i, a) {
                function d() {
                    var e = l.ngModel.$modelValue || l.ngModel.$viewValue || [];
                    if (t.isArray(e)) {
                        var n = Object.keys(l.selected), o = e.map(l.hashGetter), r = n.filter(function (e) {
                            return -1 === o.indexOf(e)
                        });
                        r.forEach(l.deselect), o.forEach(function (t, n) {
                            l.select(t, e[n])
                        })
                    }
                }

                function s() {
                    var e = l.ngModel.$viewValue || l.ngModel.$modelValue;
                    Object.keys(l.selected).forEach(l.deselect), l.select(l.hashGetter(e), e)
                }

                var l = this;
                l.isMultiple = t.isDefined(i.multiple), l.selected = {}, l.options = {}, r.$watch(function () {
                    return l.options
                }, function () {
                    l.ngModel.$render()
                }, !0);
                var m;
                l.setMultiple = function (e) {
                    function n(e, n) {
                        return t.isArray(e || n || [])
                    }

                    var o = l.ngModel;
                    l.isMultiple = e, m && m(), l.isMultiple ? (o.$validators["md-multiple"] = n, o.$render = d, r.$watchCollection(i.ngModel, function (e) {
                        n(e) && d(e), l.ngModel.$setPristine()
                    })) : (delete o.$validators["md-multiple"], o.$render = s)
                };
                var u, h, p, f = "", g = 300;
                l.optNodeForKeyboardSearch = function (e) {
                    u && clearTimeout(u), u = setTimeout(function () {
                        u = n, f = "", p = n, h = n
                    }, g), f += String.fromCharCode(e.keyCode);
                    var o = new RegExp("^" + f, "i");
                    h || (h = a.find("md-option"), p = new Array(h.length), t.forEach(h, function (e, t) {
                        p[t] = e.textContent.trim()
                    }));
                    for (var r = 0; r < p.length; ++r)if (o.test(p[r]))return h[r]
                }, l.init = function (n) {
                    if (l.ngModel = n, n.$options && n.$options.trackBy) {
                        var o = {}, i = e(n.$options.trackBy);
                        l.hashGetter = function (e, t) {
                            return o.$value = e, i(t || r, o)
                        }
                    } else l.hashGetter = function (e) {
                        return t.isObject(e) ? "object_" + (e.$$mdSelectId || (e.$$mdSelectId = ++c)) : e
                    };
                    l.setMultiple(l.isMultiple)
                }, l.selectedLabels = function () {
                    var e = o.nodesToArray(a[0].querySelectorAll("md-option[selected]"));
                    return e.length ? e.map(function (e) {
                        return e.textContent
                    }).join(", ") : ""
                }, l.select = function (e, t) {
                    var n = l.options[e];
                    n && n.setSelected(!0), l.selected[e] = t
                }, l.deselect = function (e) {
                    var t = l.options[e];
                    t && t.setSelected(!1), delete l.selected[e]
                }, l.addOption = function (e, n) {
                    if (t.isDefined(l.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "' + n.value + '" found.');
                    l.options[e] = n, t.isDefined(l.selected[e]) && (l.select(e, n.value), l.refreshViewValue())
                }, l.removeOption = function (e) {
                    delete l.options[e]
                }, l.refreshViewValue = function () {
                    var e, t = [];
                    for (var n in l.selected)(e = l.options[n]) ? t.push(e.value) : t.push(l.selected[n]);
                    l.ngModel.$setViewValue(l.isMultiple ? t : t[0])
                }
            }

            return a.$inject = ["$scope", "$attrs", "$element"], {
                restrict: "E",
                require: ["mdSelectMenu", "?ngModel"],
                controller: a,
                link: {pre: i}
            }
        }

        function r(e, n) {
            function o(e, n) {
                return e.append(t.element('<div class="md-text">').append(e.contents())), e.attr("tabindex", n.tabindex || "0"), r
            }

            function r(o, r, i, a) {
                function d(e, t) {
                    var n = l.hashGetter(t, o), r = l.hashGetter(e, o);
                    s.hashKey = r, s.value = e, l.removeOption(n, s), l.addOption(r, s)
                }

                function c() {
                    var e = {role: "option", "aria-selected": "false"};
                    r[0].hasAttribute("id") || (e.id = "select_option_" + n.nextUid()), r.attr(e)
                }

                var s = a[0], l = a[1];
                t.isDefined(i.ngValue) ? o.$watch(i.ngValue, d) : t.isDefined(i.value) ? d(i.value) : o.$watch(function () {
                    return r.text()
                }, d), i.$observe("disabled", function (e) {
                    e ? r.attr("tabindex", "-1") : r.attr("tabindex", "0")
                }), o.$$postDigest(function () {
                    i.$observe("selected", function (e) {
                        t.isDefined(e) && ("string" == typeof e && (e = !0), e ? (l.isMultiple || l.deselect(Object.keys(l.selected)[0]), l.select(s.hashKey, s.value)) : l.deselect(s.hashKey), l.refreshViewValue(), l.ngModel.$render())
                    })
                }), e.attach(o, r), c(), o.$on("$destroy", function () {
                    l.removeOption(s.hashKey, s)
                })
            }

            function i(e) {
                this.selected = !1, this.setSelected = function (t) {
                    t && !this.selected ? e.attr({
                        selected: "selected",
                        "aria-selected": "true"
                    }) : !t && this.selected && (e.removeAttr("selected"), e.attr("aria-selected", "false")), this.selected = t
                }
            }

            return i.$inject = ["$element"], {
                restrict: "E",
                require: ["mdOption", "^^mdSelectMenu"],
                controller: i,
                compile: o
            }
        }

        function i() {
            function e(e, n) {
                var o = e.find("label");
                o.length || (o = t.element("<label>"), e.prepend(o)), n.label && o.text(n.label)
            }

            return {restrict: "E", compile: e}
        }

        function a(e) {
            function o(e, o, c, s, l, m, u, h) {
                function p(e, t, n) {
                    function o() {
                        return u(t, {addClass: "md-leave"}).start()
                    }

                    function r() {
                        g(n.target, !1), t.attr("opacity", 0), t.removeClass("md-active"), E(t, n), b(n), !n.$destroy && n.restoreFocus && n.target.focus()
                    }

                    return n = n || {}, n.cleanupInteraction(), n.cleanupResizing(), n.hideBackdrop(), n.$destroy === !0 ? r() : o().then(r)
                }

                function f(r, i, a) {
                    function d(e, t, n) {
                        return n.parent.append(t), l(function (e, n) {
                            try {
                                u(t, {removeClass: "md-leave", duration: 0}).start().then(p).then(e)
                            } catch (o) {
                                n(o)
                            }
                        })
                    }

                    function p() {
                        return l(function (e) {
                            if (a.isRemoved)return l.reject(!1);
                            var t = v(r, i, a);
                            t.container.element.css($.toCss(t.container.styles)), t.dropDown.element.css($.toCss(t.dropDown.styles)), m(function () {
                                i.addClass("md-active"), t.dropDown.element.css($.toCss({transform: ""})), b(a.focusedNode), e()
                            })
                        })
                    }

                    function f(e, t, n) {
                        return n.disableParentScroll && !c.getClosest(n.target, "MD-DIALOG") ? n.restoreScroll = c.disableScrollAround(n.element, n.parent) : n.disableParentScroll = !1, n.hasBackdrop && (n.backdrop = c.createBackdrop(e, "md-select-backdrop md-click-catcher"), h.enter(n.backdrop, n.parent, null, {duration: 0})), function () {
                            n.backdrop && n.backdrop.remove(), n.disableParentScroll && n.restoreScroll(), delete n.restoreScroll
                        }
                    }

                    function b(e) {
                        e && !e.hasAttribute("disabled") && e.focus()
                    }

                    function E(e, n) {
                        var o = i.find("md-select-menu");
                        if (!n.target)throw new Error(c.supplant(M, [n.target]));
                        t.extend(n, {
                            isRemoved: !1,
                            target: t.element(n.target),
                            parent: t.element(n.parent),
                            selectEl: o,
                            contentEl: i.find("md-content"),
                            optionNodes: o[0].getElementsByTagName("md-option")
                        })
                    }

                    function y() {
                        var e = function (e, t, n) {
                            return function () {
                                if (!n.isRemoved) {
                                    var o = v(e, t, n), r = o.container, i = o.dropDown;
                                    r.element.css($.toCss(r.styles)), i.element.css($.toCss(i.styles))
                                }
                            }
                        }(r, i, a), n = t.element(s);
                        return n.on("resize", e), n.on("orientationchange", e), function () {
                            n.off("resize", e), n.off("orientationchange", e)
                        }
                    }

                    function A() {
                        a.loadingAsync && !a.isRemoved && (r.$$loadingAsyncDone = !1, r.progressMode = "indeterminate", l.when(a.loadingAsync).then(function () {
                            r.$$loadingAsyncDone = !0, r.progressMode = "", delete a.loadingAsync
                        }).then(function () {
                            m(p)
                        }))
                    }

                    function C() {
                        function t(t) {
                            t.preventDefault(), t.stopPropagation(), a.restoreFocus = !1, c.nextTick(e.hide, !0)
                        }

                        function r(t) {
                            var n = o.KEY_CODE;
                            switch (t.keyCode) {
                                case n.UP_ARROW:
                                    return l();
                                case n.DOWN_ARROW:
                                    return s();
                                case n.SPACE:
                                case n.ENTER:
                                    var r = c.getClosest(t.target, "md-option");
                                    r && (u.triggerHandler({type: "click", target: r}), t.preventDefault()), m(t);
                                    break;
                                case n.TAB:
                                case n.ESCAPE:
                                    t.preventDefault(), a.restoreFocus = !0, c.nextTick(e.hide, !0);
                                    break;
                                default:
                                    if (t.keyCode >= 31 && t.keyCode <= 90) {
                                        var i = u.controller("mdSelectMenu").optNodeForKeyboardSearch(t);
                                        a.focusedNode = i || a.focusedNode, i && i.focus()
                                    }
                            }
                        }

                        function d(e) {
                            var t, o = c.nodesToArray(a.optionNodes), r = o.indexOf(a.focusedNode);
                            do-1 === r ? r = 0 : "next" === e && r < o.length - 1 ? r++ : "prev" === e && r > 0 && r--, t = o[r], t.hasAttribute("disabled") && (t = n); while (!t && r < o.length - 1 && r > 0);
                            t && t.focus(), a.focusedNode = t
                        }

                        function s() {
                            d("next")
                        }

                        function l() {
                            d("prev")
                        }

                        function m(t) {
                            function n() {
                                var e = !1;
                                if (t && t.currentTarget.children.length > 0) {
                                    var n = t.currentTarget.children[0], o = n.scrollHeight > n.clientHeight;
                                    if (o && n.children.length > 0) {
                                        var r = t.pageX - t.currentTarget.getBoundingClientRect().left;
                                        r > n.querySelector("md-option").offsetWidth && (e = !0)
                                    }
                                }
                                return e
                            }

                            t && "mouseup" == t.type && t.currentTarget != u[0] || n() || h.isMultiple || (a.restoreFocus = !0, c.nextTick(function () {
                                e.hide(h.ngModel.$viewValue)
                            }, !0))
                        }

                        if (!a.isRemoved) {
                            var u = a.selectEl, h = u.controller("mdSelectMenu") || {};
                            return i.addClass("md-clickable"), a.backdrop && a.backdrop.on("click", t), u.on("keydown", r), u.on("mouseup", m), function () {
                                a.backdrop && a.backdrop.off("click", t), u.off("keydown", r), u.off("mouseup", m), i.removeClass("md-clickable"), a.isRemoved = !0
                            }
                        }
                    }

                    return A(), E(r, a), g(a.target), a.hideBackdrop = f(r, i, a), d(r, i, a).then(function (e) {
                        return a.alreadyOpen = !0, a.cleanupInteraction = C(), a.cleanupResizing = y(), e
                    }, a.hideBackdrop)
                }

                function g(e, n) {
                    n = t.isUndefined(n) ? "true" : "false", e && e.attr("aria-expanded", n)
                }

                function b(e) {
                    var t = e.selectEl.controller("mdSelect");
                    if (t) {
                        var n = e.selectEl.controller("mdSelectMenu");
                        t.setLabelText(n.selectedLabels()), t.triggerClose()
                    }
                }

                function E(e, t) {
                    e[0].parentNode === t.parent[0] && t.parent[0].removeChild(e[0])
                }

                function v(e, n, o) {
                    var l, m, u = n[0], h = o.target[0].firstElementChild, p = o.parent[0], f = o.selectEl[0], g = o.contentEl[0], b = p.getBoundingClientRect(), E = h.getBoundingClientRect(), v = !1, M = {
                        left: b.left + d,
                        top: d,
                        bottom: b.height - d,
                        right: b.width - d - (c.floatingScrollbars() ? 16 : 0)
                    }, $ = {
                        top: E.top - M.top,
                        left: E.left - M.left,
                        right: M.right - (E.left + E.width),
                        bottom: M.bottom - (E.top + E.height)
                    }, y = b.width - 2 * d, A = g.scrollHeight > g.offsetHeight, C = f.querySelector("md-option[selected]"), l = f.getElementsByTagName("md-option"), T = f.getElementsByTagName("md-optgroup"), k = r(o.loadingAsync);
                    m = k ? g.firstElementChild || g : C ? C : T.length ? T[0] : l.length ? l[0] : g.firstElementChild || g, g.offsetWidth > y && (g.style["max-width"] = y + "px"), v && (g.style["min-width"] = E.width + "px"), A && f.classList.add("md-overflow");
                    var w = m;
                    "MD-OPTGROUP" === (w.tagName || "").toUpperCase() && (w = l[0] || g.firstElementChild || g, m = w), o.focusedNode = w;
                    var x = f.getBoundingClientRect(), N = a(m);
                    if (m) {
                        var _ = s.getComputedStyle(m);
                        N.paddingLeft = parseInt(_.paddingLeft, 10) || 0, N.paddingRight = parseInt(_.paddingRight, 10) || 0
                    }
                    if (A) {
                        var H = g.offsetHeight / 2;
                        g.scrollTop = N.top + N.height / 2 - H, $.top < H ? g.scrollTop = Math.min(N.top, g.scrollTop + H - $.top) : $.bottom < H && (g.scrollTop = Math.max(N.top + N.height - x.height, g.scrollTop - H + $.bottom))
                    }
                    var S, D, O, I;
                    v ? (S = E.left, D = E.top + E.height, O = "50% 0", D + x.height > M.bottom && (D = E.top - x.height, O = "50% 100%")) : (S = E.left + N.left - N.paddingLeft + 2, D = Math.floor(E.top + E.height / 2 - N.height / 2 - N.top + g.scrollTop) + 2, O = N.left + E.width / 2 + "px " + (N.top + N.height / 2 - g.scrollTop) + "px 0px", I = E.width + N.paddingLeft + N.paddingRight);
                    var R = u.getBoundingClientRect(), L = Math.round(100 * Math.min(E.width / x.width, 1)) / 100, P = Math.round(100 * Math.min(E.height / x.height, 1)) / 100;
                    return {
                        container: {
                            element: t.element(u),
                            styles: {
                                left: Math.floor(i(M.left, S, M.right - R.width)),
                                top: Math.floor(i(M.top, D, M.bottom - R.height)),
                                "min-width": I
                            }
                        },
                        dropDown: {
                            element: t.element(f),
                            styles: {
                                transformOrigin: O,
                                transform: o.alreadyOpen ? "" : c.supplant("scale({0},{1})", [L, P])
                            }
                        }
                    }
                }

                var M = "$mdSelect.show() expected a target element in options.target but got '{0}'!", $ = c.dom.animator;
                return {parent: "body", themable: !0, onShow: f, onRemove: p, hasBackdrop: !0, disableParentScroll: !0}
            }

            function r(e) {
                return e && t.isFunction(e.then)
            }

            function i(e, t, n) {
                return Math.max(e, Math.min(t, n))
            }

            function a(e) {
                return e ? {
                    left: e.offsetLeft,
                    top: e.offsetTop,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                } : {left: 0, top: 0, width: 0, height: 0}
            }

            return o.$inject = ["$mdSelect", "$mdConstant", "$mdUtil", "$window", "$q", "$$rAF", "$animateCss", "$animate"], e("$mdSelect").setDefaults({
                methods: ["target"],
                options: o
            })
        }

        var d = 8, c = 0;
        t.module("material.components.select", ["material.core", "material.components.backdrop"]).directive("mdSelect", e).directive("mdSelectMenu", o).directive("mdOption", r).directive("mdOptgroup", i).provider("$mdSelect", a), e.$inject = ["$mdSelect", "$mdUtil", "$mdTheming", "$mdAria", "$compile", "$parse"], o.$inject = ["$parse", "$mdUtil", "$mdTheming"], r.$inject = ["$mdButtonInkRipple", "$mdUtil"], a.$inject = ["$$interimElementProvider"]
    }(), function () {
        function e(e, n) {
            return function (o) {
                function r() {
                    return e.when(o).then(function (e) {
                        return d = e, e
                    })
                }

                var i, a = "SideNav '" + o + "' is not available!", d = e.get(o);
                return d || e.notFoundError(o), i = {
                    isOpen: function () {
                        return d && d.isOpen()
                    }, isLockedOpen: function () {
                        return d && d.isLockedOpen()
                    }, toggle: function () {
                        return d ? d.toggle() : n.reject(a)
                    }, open: function () {
                        return d ? d.open() : n.reject(a)
                    }, close: function () {
                        return d ? d.close() : n.reject(a)
                    }, then: function (e) {
                        var o = d ? n.when(d) : r();
                        return o.then(e || t.noop)
                    }
                }
            }
        }

        function o() {
            return {
                restrict: "A", require: "^mdSidenav", link: function (e, t, n, o) {
                }
            }
        }

        function r(e, o, r, i, a, d, c, s, l, m) {
            function u(d, u, h, p) {
                function f(e, t) {
                    d.isLockedOpen = e, e === t ? u.toggleClass("md-locked-open", !!e) : a[e ? "addClass" : "removeClass"](u, "md-locked-open"), k.toggleClass("md-locked-open", !!e)
                }

                function g(e) {
                    var t = o.findFocusTarget(u) || o.findFocusTarget(u, "[md-sidenav-focus]") || u, n = u.parent();
                    return n[e ? "on" : "off"]("keydown", v), k[e ? "on" : "off"]("click", M), e && (y = m[0].activeElement), b(e), A = l.all([e ? a.enter(k, n) : a.leave(k), a[e ? "removeClass" : "addClass"](u, "md-closed")]).then(function () {
                        d.isOpen && t && t.focus()
                    })
                }

                function b(e) {
                    var o = u.parent();
                    e && !$ ? ($ = o.css("overflow"), o.css("overflow", "hidden")) : t.isDefined($) && (o.css("overflow", $), $ = n)
                }

                function E(e) {
                    return d.isOpen == e ? l.when(!0) : l(function (t) {
                        d.isOpen = e, o.nextTick(function () {
                            A.then(function (e) {
                                d.isOpen || (y && y.focus(), y = null), t(e)
                            })
                        })
                    })
                }

                function v(e) {
                    var t = e.keyCode === r.KEY_CODE.ESCAPE;
                    return t ? M(e) : l.when(!0)
                }

                function M(e) {
                    return e.preventDefault(), e.stopPropagation(), p.close()
                }

                var $, y = null, A = l.when(!0), C = c(h.mdIsLockedOpen), T = function () {
                    return C(d.$parent, {
                        $media: function (t) {
                            return s.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."), e(t)
                        }, $mdMedia: e
                    })
                }, k = o.createBackdrop(d, "md-sidenav-backdrop md-opaque ng-enter");
                i.inherit(k, u), u.on("$destroy", function () {
                    k.remove(), p.destroy()
                }), d.$on("$destroy", function () {
                    k.remove()
                }), d.$watch(T, f), d.$watch("isOpen", g), p.$toggleOpen = E
            }

            return {
                restrict: "E",
                scope: {isOpen: "=?mdIsOpen"},
                controller: "$mdSidenavController",
                compile: function (e) {
                    return e.addClass("md-closed"), e.attr("tabIndex", "-1"), u
                }
            }
        }

        function i(e, t, n, o, r) {
            var i = this;
            i.isOpen = function () {
                return !!e.isOpen
            }, i.isLockedOpen = function () {
                return !!e.isLockedOpen
            }, i.open = function () {
                return i.$toggleOpen(!0)
            }, i.close = function () {
                return i.$toggleOpen(!1)
            }, i.toggle = function () {
                return i.$toggleOpen(!e.isOpen)
            }, i.$toggleOpen = function (t) {
                return r.when(e.isOpen = t)
            }, i.destroy = o.register(i, n.mdComponentId)
        }

        t.module("material.components.sidenav", ["material.core", "material.components.backdrop"]).factory("$mdSidenav", e).directive("mdSidenav", r).directive("mdSidenavFocus", o).controller("$mdSidenavController", i), e.$inject = ["$mdComponentRegistry", "$q"], r.$inject = ["$mdMedia", "$mdUtil", "$mdConstant", "$mdTheming", "$animate", "$compile", "$parse", "$log", "$q", "$document"], i.$inject = ["$scope", "$element", "$attrs", "$mdComponentRegistry", "$q"]
    }(), function () {
        function e(e, n, o, r, i, a, d, c, s) {
            function l(e, t) {
                return e.attr({tabIndex: 0, role: "slider"}), o.expect(e, "aria-label"), m
            }

            function m(o, l, m, u) {
                function h() {
                    v(), A(), E()
                }

                function p(e) {
                    K = parseFloat(e), l.attr("aria-valuemin", e), h()
                }

                function f(e) {
                    G = parseFloat(e), l.attr("aria-valuemax", e), h()
                }

                function g(e) {
                    X = parseFloat(e), E()
                }

                function b(e) {
                    l.attr("aria-disabled", !!e)
                }

                function E() {
                    if (t.isDefined(m.mdDiscrete) && !t.isUndefined(X)) {
                        if (0 >= X) {
                            var e = "Slider step value must be greater than zero when in discrete mode";
                            throw s.error(e), new Error(e)
                        }
                        var o = Math.floor((G - K) / X);
                        if (!Q) {
                            Q = t.element('<canvas style="position:absolute;">'), j.append(Q);
                            var r = n.getComputedStyle(j[0]);
                            Z = Q[0].getContext("2d"), Z.fillStyle = r.backgroundColor || "black"
                        }
                        var i = M();
                        Q[0].width = i.width, Q[0].height = i.height;
                        for (var a, d = 0; o >= d; d++)a = Math.floor(i.width * (d / o)), Z.fillRect(a - 1, 0, 2, i.height)
                    }
                }

                function v() {
                    J = q[0].getBoundingClientRect()
                }

                function M() {
                    return V(), J
                }

                function $(e) {
                    if (!l[0].hasAttribute("disabled")) {
                        var t;
                        e.keyCode === i.KEY_CODE.LEFT_ARROW ? t = -X : e.keyCode === i.KEY_CODE.RIGHT_ARROW && (t = X), t && ((e.metaKey || e.ctrlKey || e.altKey) && (t *= 4), e.preventDefault(), e.stopPropagation(), o.$evalAsync(function () {
                            y(u.$viewValue + t)
                        }))
                    }
                }

                function y(e) {
                    u.$setViewValue(C(T(e)))
                }

                function A() {
                    isNaN(u.$viewValue) && (u.$viewValue = u.$modelValue);
                    var e = (u.$viewValue - K) / (G - K);
                    o.modelValue = u.$viewValue, l.attr("aria-valuenow", u.$viewValue), k(e), B.text(u.$viewValue)
                }

                function C(e) {
                    return t.isNumber(e) ? Math.max(K, Math.min(G, e)) : void 0
                }

                function T(e) {
                    if (t.isNumber(e)) {
                        var n = Math.round(e / X) * X;
                        return Math.round(1e3 * n) / 1e3
                    }
                }

                function k(e) {
                    z.css("width", 100 * e + "%"), U.css("left", 100 * e + "%"), l.toggleClass("md-min", 0 === e)
                }

                function w(e) {
                    if (!P()) {
                        l.addClass("md-active"), l[0].focus(), v();
                        var t = R(I(e.pointer.x)), n = C(T(t));
                        o.$apply(function () {
                            y(n), k(L(n))
                        })
                    }
                }

                function x(e) {
                    if (!P()) {
                        l.removeClass("md-dragging md-active");
                        var t = R(I(e.pointer.x)), n = C(T(t));
                        o.$apply(function () {
                            y(n), A()
                        })
                    }
                }

                function N(e) {
                    P() || (ee = !0, e.stopPropagation(), l.addClass("md-dragging"), S(e))
                }

                function _(e) {
                    ee && (e.stopPropagation(), S(e))
                }

                function H(e) {
                    ee && (e.stopPropagation(), ee = !1)
                }

                function S(e) {
                    te ? O(e.pointer.x) : D(e.pointer.x)
                }

                function D(e) {
                    o.$evalAsync(function () {
                        y(R(I(e)))
                    })
                }

                function O(e) {
                    var t = R(I(e)), n = C(T(t));
                    k(I(e)), B.text(n)
                }

                function I(e) {
                    return Math.max(0, Math.min(1, (e - J.left) / J.width))
                }

                function R(e) {
                    return K + e * (G - K)
                }

                function L(e) {
                    return (e - K) / (G - K)
                }

                a(l), u = u || {
                    $setViewValue: function (e) {
                        this.$viewValue = e, this.$viewChangeListeners.forEach(function (e) {
                            e()
                        })
                    }, $parsers: [], $formatters: [], $viewChangeListeners: []
                };
                var P = t.noop;
                null != m.disabled ? P = function () {
                    return !0
                } : m.ngDisabled && (P = t.bind(null, c(m.ngDisabled), o.$parent));
                var F = t.element(l[0].querySelector(".md-thumb")), B = t.element(l[0].querySelector(".md-thumb-text")), U = F.parent(), q = t.element(l[0].querySelector(".md-track-container")), z = t.element(l[0].querySelector(".md-track-fill")), j = t.element(l[0].querySelector(".md-track-ticks")), V = r.throttle(v, 5e3);
                t.isDefined(m.min) ? m.$observe("min", p) : p(0), t.isDefined(m.max) ? m.$observe("max", f) : f(100), t.isDefined(m.step) ? m.$observe("step", g) : g(1);
                var W = t.noop;
                m.ngDisabled && (W = o.$parent.$watch(m.ngDisabled, b)), d.register(l, "drag"), l.on("keydown", $).on("$md.pressdown", w).on("$md.pressup", x).on("$md.dragstart", N).on("$md.drag", _).on("$md.dragend", H), setTimeout(h, 0);
                var Y = e.throttle(h);
                t.element(n).on("resize", Y), o.$on("$destroy", function () {
                    t.element(n).off("resize", Y), W()
                }), u.$render = A, u.$viewChangeListeners.push(A), u.$formatters.push(C), u.$formatters.push(T);
                var K, G, X, Q, Z, J = {};
                v();
                var ee = !1, te = t.isDefined(m.mdDiscrete)
            }

            return {
                scope: {},
                require: "?ngModel",
                template: '<div class="md-slider-wrapper"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div>',
                compile: l
            }
        }

        t.module("material.components.slider", ["material.core"]).directive("mdSlider", e), e.$inject = ["$$rAF", "$window", "$mdAria", "$mdUtil", "$mdConstant", "$mdTheming", "$mdGesture", "$parse", "$log"]
    }(), function () {
        function e(e, o, r, i) {
            function a(e) {
                function t(e, t) {
                    t.addClass("md-sticky-clone");
                    var n = {element: e, clone: t};
                    return f.items.push(n), i.nextTick(function () {
                        h.prepend(n.clone)
                    }), p(), function () {
                        f.items.forEach(function (t, n) {
                            t.element[0] === e[0] && (f.items.splice(n, 1), t.clone.remove())
                        }), p()
                    }
                }

                function a() {
                    f.items.forEach(d), f.items = f.items.sort(function (e, t) {
                        return e.top < t.top ? -1 : 1
                    });
                    for (var e, t = h.prop("scrollTop"), n = f.items.length - 1; n >= 0; n--)if (t > f.items[n].top) {
                        e = f.items[n];
                        break
                    }
                    l(e)
                }

                function d(e) {
                    var t = e.element[0];
                    for (e.top = 0, e.left = 0; t && t !== h[0];)e.top += t.offsetTop, e.left += t.offsetLeft, t = t.offsetParent;
                    e.height = e.element.prop("offsetHeight"), e.clone.css("margin-left", e.left + "px"), i.floatingScrollbars() && e.clone.css("margin-right", "0")
                }

                function s() {
                    var e = h.prop("scrollTop"), t = e > (s.prevScrollTop || 0);
                    if (s.prevScrollTop = e, 0 === e)return void l(null);
                    if (t) {
                        if (f.next && f.next.top <= e)return void l(f.next);
                        if (f.current && f.next && f.next.top - e <= f.next.height)return void u(f.current, e + (f.next.top - f.next.height - e))
                    }
                    if (!t) {
                        if (f.current && f.prev && e < f.current.top)return void l(f.prev);
                        if (f.next && f.current && e >= f.next.top - f.current.height)return void u(f.current, e + (f.next.top - e - f.current.height))
                    }
                    f.current && u(f.current, e)
                }

                function l(e) {
                    if (f.current !== e) {
                        f.current && (u(f.current, null), m(f.current, null)), e && m(e, "active"), f.current = e;
                        var t = f.items.indexOf(e);
                        f.next = f.items[t + 1], f.prev = f.items[t - 1], m(f.next, "next"), m(f.prev, "prev")
                    }
                }

                function m(e, t) {
                    e && e.state !== t && (e.state && (e.clone.attr("sticky-prev-state", e.state), e.element.attr("sticky-prev-state", e.state)), e.clone.attr("sticky-state", t), e.element.attr("sticky-state", t), e.state = t)
                }

                function u(e, t) {
                    e && (null === t || t === n ? e.translateY && (e.translateY = null, e.clone.css(o.CSS.TRANSFORM, "")) : (e.translateY = t, e.clone.css(o.CSS.TRANSFORM, "translate3d(" + e.left + "px," + t + "px,0)")))
                }

                var h = e.$element, p = r.throttle(a);
                c(h), h.on("$scrollstart", p), h.on("$scroll", s);
                var f;
                return f = {prev: null, current: null, next: null, items: [], add: t, refreshElements: a}
            }

            function d(n) {
                var o, r = t.element("<div>");
                e[0].body.appendChild(r[0]);
                for (var i = ["sticky", "-webkit-sticky"], a = 0; a < i.length; ++a)if (r.css({
                        position: i[a],
                        top: 0,
                        "z-index": 2
                    }), r.css("position") == i[a]) {
                    o = i[a];
                    break
                }
                return r.remove(), o
            }

            function c(e) {
                function t() {
                    +i.now() - o > a ? (n = !1, e.triggerHandler("$scrollend")) : (e.triggerHandler("$scroll"), r.throttle(t))
                }

                var n, o, a = 200;
                e.on("scroll touchmove", function () {
                    n || (n = !0, r.throttle(t), e.triggerHandler("$scrollstart")), e.triggerHandler("$scroll"), o = +i.now()
                })
            }

            var s = d();
            return function (e, t, n) {
                var o = t.controller("mdContent");
                if (o)if (s)t.css({position: s, top: 0, "z-index": 2}); else {
                    var r = o.$element.data("$$sticky");
                    r || (r = a(o), o.$element.data("$$sticky", r));
                    var i = r.add(t, n || t.clone());
                    e.$on("$destroy", i)
                }
            }
        }

        t.module("material.components.sticky", ["material.core", "material.components.content"]).factory("$mdSticky", e), e.$inject = ["$document", "$mdConstant", "$$rAF", "$mdUtil"]
    }(), function () {
        function e(e, n, o, r) {
            return {
                restrict: "E",
                replace: !0,
                transclude: !0,
                template: '<div class="md-subheader">  <div class="md-subheader-inner">    <span class="md-subheader-content"></span>  </div></div>',
                link: function (i, a, d, c, s) {
                    function l(e) {
                        return t.element(e[0].querySelector(".md-subheader-content"))
                    }

                    o(a);
                    var m = a[0].outerHTML;
                    s(i, function (e) {
                        l(a).append(e)
                    }), a.hasClass("md-no-sticky") || s(i, function (t) {
                        var o = '<div class="md-subheader-wrapper">' + m + "</div>", d = n(o)(i);
                        e(i, a, d), r.nextTick(function () {
                            l(d).append(t)
                        })
                    })
                }
            }
        }

        t.module("material.components.subheader", ["material.core", "material.components.sticky"]).directive("mdSubheader", e), e.$inject = ["$mdSticky", "$compile", "$mdTheming", "$mdUtil"]
    }(), function () {
        function e(e) {
            function t(e) {
                function t(t, r, i) {
                    var a = e(i[n]);
                    r.on(o, function (e) {
                        t.$apply(function () {
                            a(t, {$event: e})
                        })
                    })
                }

                return {restrict: "A", link: t}
            }

            var n = "md" + e, o = "$md." + e.toLowerCase();
            return t.$inject = ["$parse"], t
        }

        t.module("material.components.swipe", ["material.core"]).directive("mdSwipeLeft", e("SwipeLeft")).directive("mdSwipeRight", e("SwipeRight"))
    }(), function () {
        function e(e, n, o, r, i, a) {
            function d(e, d) {
                var s = c.compile(e, d);
                return e.addClass("md-dragging"), function (e, d, c, l) {
                    function m(t) {
                        f && f(e) || (t.stopPropagation(), d.addClass("md-dragging"), E = {width: g.prop("offsetWidth")}, d.removeClass("transition"))
                    }

                    function u(e) {
                        if (E) {
                            e.stopPropagation(), e.srcEvent && e.srcEvent.preventDefault();
                            var t = e.pointer.distanceX / E.width, n = l.$viewValue ? 1 + t : t;
                            n = Math.max(0, Math.min(1, n)), g.css(o.CSS.TRANSFORM, "translate3d(" + 100 * n + "%,0,0)"), E.translate = n
                        }
                    }

                    function h(e) {
                        if (E) {
                            e.stopPropagation(), d.removeClass("md-dragging"), g.css(o.CSS.TRANSFORM, "");
                            var t = l.$viewValue ? E.translate > .5 : E.translate < .5;
                            t && p(!l.$viewValue), E = null
                        }
                    }

                    function p(t) {
                        e.$apply(function () {
                            l.$setViewValue(t), l.$render()
                        })
                    }

                    l = l || n.fakeNgModel();
                    var f = null;
                    null != c.disabled ? f = function () {
                        return !0
                    } : c.ngDisabled && (f = r(c.ngDisabled));
                    var g = t.element(d[0].querySelector(".md-thumb-container")), b = t.element(d[0].querySelector(".md-container"));
                    i(function () {
                        d.removeClass("md-dragging")
                    }), s(e, d, c, l), f && e.$watch(f, function (e) {
                        d.attr("tabindex", e ? -1 : 0)
                    }), a.register(b, "drag"), b.on("$md.dragstart", m).on("$md.drag", u).on("$md.dragend", h);
                    var E
                }
            }

            var c = e[0];
            return {
                restrict: "E",
                priority: 210,
                transclude: !0,
                template: '<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',
                require: "?ngModel",
                compile: d
            }
        }

        t.module("material.components.switch", ["material.core", "material.components.checkbox"]).directive("mdSwitch", e), e.$inject = ["mdCheckboxDirective", "$mdUtil", "$mdConstant", "$parse", "$$rAF", "$mdGesture"]
    }(), function () {
        function e(e) {
            return {
                restrict: "E", link: function (t, n, o) {
                    t.$on("$destroy", function () {
                        e.destroy()
                    })
                }
            }
        }

        function n(e) {
            function t(e, t, o) {
                function r(r, i, c) {
                    return n = c.content, i = o.extractElementByName(i, "md-toast", !0), c.onSwipe = function (e, n) {
                        i.addClass("md-" + e.type.replace("$md.", "")), o.nextTick(t.cancel)
                    }, c.openClass = a(c.position), c.parent.addClass(c.openClass), i.on(d, c.onSwipe), i.addClass(c.position.split(" ").map(function (e) {
                        return "md-" + e
                    }).join(" ")), e.enter(i, c.parent)
                }

                function i(t, n, o) {
                    return n.off(d, o.onSwipe), o.parent.removeClass(o.openClass), 1 == o.$destroy ? n.remove() : e.leave(n)
                }

                function a(e) {
                    return "md-toast-open-" + (e.indexOf("top") > -1 ? "top" : "bottom")
                }

                var d = "$md.swipeleft $md.swiperight";
                return {onShow: r, onRemove: i, position: "bottom left", themable: !0, hideDelay: 3e3}
            }

            var n, o = "ok", r = e("$mdToast").setDefaults({
                methods: ["position", "hideDelay", "capsule", "parent"],
                options: t
            }).addPreset("simple", {
                argOption: "content",
                methods: ["content", "action", "highlightAction", "theme", "parent"],
                options: ["$mdToast", "$mdTheming", function (e, t) {
                    var r = {
                        template: ['<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">', "<span flex>{{ toast.content }}</span>", '<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">', "{{ toast.action }}", "</md-button>", "</md-toast>"].join(""),
                        controller: ["$scope", function (t) {
                            var r = this;
                            t.$watch(function () {
                                return n
                            }, function () {
                                r.content = n
                            }), this.resolve = function () {
                                e.hide(o)
                            }
                        }],
                        theme: t.defaultTheme(),
                        controllerAs: "toast",
                        bindToController: !0
                    };
                    return r
                }]
            }).addMethod("updateContent", function (e) {
                n = e
            });
            return t.$inject = ["$animate", "$mdToast", "$mdUtil"], r
        }

        t.module("material.components.toast", ["material.core", "material.components.button"]).directive("mdToast", e).provider("$mdToast", n), e.$inject = ["$mdToast"], n.$inject = ["$$interimElementProvider"]
    }(), function () {
        t.module("material.components.tabs", ["material.core", "material.components.icon"])
    }(), function () {
        function e(e, n, o, r, i) {
            var a = t.bind(null, o.supplant, "translate3d(0,{0}px,0)");
            return {
                restrict: "E", link: function (d, c, s) {
                    function l() {
                        function r(e) {
                            var t = c.parent().find("md-content");
                            !f && t.length && l(null, t), e = d.$eval(e), e === !1 ? g() : g = u()
                        }

                        function l(e, t) {
                            t && c.parent()[0] === t.parent()[0] && (f && f.off("scroll", M), f = t, g = u())
                        }

                        function m(e) {
                            var t = e ? e.target.scrollTop : E;
                            $(), b = Math.min(p / v, Math.max(0, b + t - E)), c.css(n.CSS.TRANSFORM, a([-b * v])), f.css(n.CSS.TRANSFORM, a([(p - b) * v])), E = t, o.nextTick(function () {
                                var e = c.hasClass("md-whiteframe-z1");
                                e && !b ? i.removeClass(c, "md-whiteframe-z1") : !e && b && i.addClass(c, "md-whiteframe-z1")
                            })
                        }

                        function u() {
                            return f ? (f.on("scroll", M), f.attr("scroll-shrink", "true"), e(h), function () {
                                f.off("scroll", M), f.attr("scroll-shrink", "false"), e(h)
                            }) : t.noop
                        }

                        function h() {
                            p = c.prop("offsetHeight");
                            var e = -p * v + "px";
                            f.css({"margin-top": e, "margin-bottom": e}), m()
                        }

                        var p, f, g = t.noop, b = 0, E = 0, v = s.mdShrinkSpeedFactor || .5, M = e.throttle(m), $ = o.debounce(h, 5e3);
                        d.$on("$mdContentLoaded", l), s.$observe("mdScrollShrink", r), d.$on("$destroy", g)
                    }

                    r(c), t.isDefined(s.mdScrollShrink) && l()
                }
            }
        }

        t.module("material.components.toolbar", ["material.core", "material.components.content"]).directive("mdToolbar", e), e.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming", "$animate"]
    }(), function () {
        function e(e, n, o, r, i, a, d, c, s) {
            function l(l, h, p) {
                function f() {
                    t.isDefined(p.mdDelay) || (l.delay = m)
                }

                function g() {
                    l.$on("$destroy", function () {
                        l.visible = !1, h.remove(), t.element(n).off("resize", D)
                    }), l.$watch("visible", function (e) {
                        e ? C() : T()
                    })
                }

                function b() {
                    w.attr("aria-label") || w.text().trim() || w.attr("aria-label", h.text().trim())
                }

                function E() {
                    h.detach(), h.attr("role", "tooltip")
                }

                function v() {
                    for (var e = h.parent(); $("pointer-events", "none", e);)e = e.parent();
                    return e
                }

                function M() {
                    for (var e = h.parent()[0]; e && e !== d[0] && e !== document.body;)e = e.parentNode;
                    return e
                }

                function $(e, o, r) {
                    var i = !1;
                    if (r && r.length) {
                        e = p.$normalize(e), r = r[0] || h[0];
                        var a = n.getComputedStyle(r);
                        i = t.isDefined(a[e]) && a[e] == o
                    }
                    return i
                }

                function y() {
                    var e = !1, o = t.element(n), i = function () {
                        a = document.activeElement === w[0]
                    }, a = !1;
                    o.on("blur", i), l.$on("$destroy", function () {
                        o.off("blur", i)
                    });
                    var d = function (e) {
                        return "focus" === e.type && a ? void(a = !1) : (w.on("blur mouseleave touchend touchcancel", c), void A(!0))
                    }, c = function () {
                        var t = l.hasOwnProperty("autohide") ? l.autohide : p.hasOwnProperty("mdAutohide");
                        (t || e || r[0].activeElement !== w[0]) && (w.off("blur mouseleave touchend touchcancel", c), w.triggerHandler("blur"), A(!1)), e = !1
                    };
                    w.on("mousedown", function () {
                        e = !0
                    }), w.on("focus mouseenter touchstart", d), t.element(n).on("resize", D)
                }

                function A(t) {
                    A.value = !!t, A.queued || (t ? (A.queued = !0, e(function () {
                        l.visible = A.value, A.queued = !1
                    }, l.delay)) : i.nextTick(function () {
                        l.visible = !1
                    }))
                }

                function C() {
                    return S.append(h), $("display", "none") ? (l.visible = !1, void h.detach()) : (k(), void t.forEach([h, x, N], function (e) {
                        c.addClass(e, "md-show")
                    }))
                }

                function T() {
                    var e = [];
                    t.forEach([h, x, N], function (t) {
                        t.parent() && t.hasClass("md-show") && e.push(c.removeClass(t, "md-show"))
                    }), s.all(e).then(function () {
                        l.visible || h.detach()
                    })
                }

                function k() {
                    function e() {
                        var e = "left" === _ || "right" === _ ? 2 * Math.sqrt(Math.pow(o.width, 2) + Math.pow(o.height / 2, 2)) : 2 * Math.sqrt(Math.pow(o.width / 2, 2) + Math.pow(o.height, 2)), t = "left" === _ ? {
                            left: 100,
                            top: 50
                        } : "right" === _ ? {left: 0, top: 50} : "top" === _ ? {left: 50, top: 100} : {
                            left: 50,
                            top: 0
                        };
                        x.css({width: e + "px", height: e + "px", left: t.left + "%", top: t.top + "%"})
                    }

                    function t(e) {
                        var t = {left: e.left, top: e.top};
                        return t.left = Math.min(t.left, S.prop("scrollWidth") - o.width - u), t.left = Math.max(t.left, u), t.top = Math.min(t.top, S.prop("scrollHeight") - o.height - u), t.top = Math.max(t.top, u), t
                    }

                    function n(e) {
                        return "left" === e ? {
                            left: r.left - o.width - u,
                            top: r.top + r.height / 2 - o.height / 2
                        } : "right" === e ? {
                            left: r.left + r.width + u,
                            top: r.top + r.height / 2 - o.height / 2
                        } : "top" === e ? {
                            left: r.left + r.width / 2 - o.width / 2,
                            top: r.top - o.height - u
                        } : {left: r.left + r.width / 2 - o.width / 2, top: r.top + r.height + u}
                    }

                    var o = i.offsetRect(h, S), r = i.offsetRect(w, S), a = n(_);
                    _ ? a = t(a) : a.top > h.prop("offsetParent").scrollHeight - o.height - u && (a = t(n("top"))), h.css({
                        top: a.top + "px",
                        left: a.left + "px"
                    }), e()
                }

                a(h);
                var w = v(), x = t.element(h[0].getElementsByClassName("md-background")[0]), N = t.element(h[0].getElementsByClassName("md-content")[0]), _ = p.mdDirection, H = M(), S = t.element(H || document.body), D = o.throttle(function () {
                    l.visible && k()
                });
                f(), E(), y(), g(), b()
            }

            var m = 300, u = 8;
            return {
                restrict: "E",
                transclude: !0,
                priority: 210,
                template: '<div class="md-background"></div><div class="md-content" ng-transclude></div>',
                scope: {visible: "=?mdVisible", delay: "=?mdDelay", autohide: "=?mdAutohide"},
                link: l
            }
        }

        t.module("material.components.tooltip", ["material.core"]).directive("mdTooltip", e), e.$inject = ["$timeout", "$window", "$$rAF", "$document", "$mdUtil", "$mdTheming", "$rootElement", "$animate", "$q"]
    }(), function () {
        function e() {
            return {
                controller: o, template: n, compile: function (e, t) {
                    e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal") ? "md-orient-horizontal" : "md-orient-vertical")
                }
            }
        }

        function n(e) {
            return '<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">' + e[0].innerHTML + "</div></div>"
        }

        function o(e, n, o, r) {
            this.$scope = n, this.$element = o, this.$attrs = r, this.size = 0, this.scrollSize = 0, this.scrollOffset = 0, this.horizontal = this.$attrs.hasOwnProperty("mdOrientHorizontal"), this.repeater = null, this.autoShrink = this.$attrs.hasOwnProperty("mdAutoShrink"), this.autoShrinkMin = parseInt(this.$attrs.mdAutoShrinkMin, 10) || 0, this.originalSize = null, this.offsetSize = parseInt(this.$attrs.mdOffsetSize, 10) || 0, this.scroller = o[0].getElementsByClassName("md-virtual-repeat-scroller")[0], this.sizer = this.scroller.getElementsByClassName("md-virtual-repeat-sizer")[0], this.offsetter = this.scroller.getElementsByClassName("md-virtual-repeat-offsetter")[0], e(t.bind(this, this.updateSize)), r.ngHide && n.$watch(r.ngHide, t.bind(this, function (n) {
                n || e(t.bind(this, this.updateSize))
            }))
        }

        function r(e) {
            return {
                controller: i,
                priority: 1e3,
                require: ["mdVirtualRepeat", "^^mdVirtualRepeatContainer"],
                restrict: "A",
                terminal: !0,
                transclude: "element",
                compile: function (t, n) {
                    var o = n.mdVirtualRepeat, r = o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/), i = r[1], a = e(r[2]), d = n.mdExtraName && e(n.mdExtraName);
                    return function (e, t, n, o, r) {
                        o[0].link_(o[1], r, i, a, d)
                    }
                }
            }
        }

        function i(e, n, o, r, i, a) {
            this.$scope = e, this.$element = n, this.$attrs = o, this.$browser = r, this.$document = i, this.$$rAF = a, this.onDemand = o.hasOwnProperty("mdOnDemand"), this.browserCheckUrlChange = r.$$checkUrlChange, this.newStartIndex = 0, this.newEndIndex = 0, this.newVisibleEnd = 0, this.startIndex = 0, this.endIndex = 0, this.itemSize = e.$eval(o.mdItemSize) || null, this.isFirstRender = !0, this.itemsLength = 0, this.unwatchItemSize_ = t.noop, this.blocks = {}, this.pooledBlocks = []
        }

        function a(e) {
            if (!t.isFunction(e.getItemAtIndex) || !t.isFunction(e.getLength))throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");
            this.model = e
        }

        t.module("material.components.virtualRepeat", ["material.core"]).directive("mdVirtualRepeatContainer", e).directive("mdVirtualRepeat", r);
        var d = 1533917, c = 3;
        o.$inject = ["$$rAF", "$scope", "$element", "$attrs"], o.prototype.register = function (e) {
            this.repeater = e, t.element(this.scroller).on("scroll wheel touchmove touchend", t.bind(this, this.handleScroll_))
        }, o.prototype.isHorizontal = function () {
            return this.horizontal
        }, o.prototype.getSize = function () {
            return this.size
        }, o.prototype.setSize_ = function (e) {
            this.size = e, this.$element[0].style[this.isHorizontal() ? "width" : "height"] = e + "px"
        }, o.prototype.updateSize = function () {
            this.originalSize || (this.size = this.isHorizontal() ? this.$element[0].clientWidth : this.$element[0].clientHeight, this.repeater && this.repeater.containerUpdated())
        }, o.prototype.getScrollSize = function () {
            return this.scrollSize
        }, o.prototype.sizeScroller_ = function (e) {
            var t = this.isHorizontal() ? "width" : "height", n = this.isHorizontal() ? "height" : "width";
            if (d > e)this.sizer.style[t] = e + "px"; else {
                this.sizer.innerHTML = "", this.sizer.style[t] = "auto", this.sizer.style[n] = "auto";
                var o = Math.floor(e / d), r = document.createElement("div");
                r.style[t] = d + "px", r.style[n] = "1px";
                for (var i = 0; o > i; i++)this.sizer.appendChild(r.cloneNode(!1));
                r.style[t] = e - o * d + "px", this.sizer.appendChild(r)
            }
        }, o.prototype.autoShrink_ = function (e) {
            var t = Math.max(e, this.autoShrinkMin * this.repeater.getItemSize());
            this.autoShrink && t !== this.size && (t < (this.originalSize || this.size) ? (this.originalSize || (this.originalSize = this.size), this.setSize_(t)) : this.originalSize && (this.setSize_(this.originalSize), this.originalSize = null))
        }, o.prototype.setScrollSize = function (e) {
            var t = e + this.offsetSize;
            this.scrollSize !== t && (this.sizeScroller_(t), this.autoShrink_(t), this.scrollSize = t)
        }, o.prototype.getScrollOffset = function () {
            return this.scrollOffset
        }, o.prototype.scrollTo = function (e) {
            this.scroller[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = e, this.handleScroll_()
        }, o.prototype.resetScroll = function () {
            this.scrollTo(0)
        }, o.prototype.handleScroll_ = function () {
            var e = this.isHorizontal() ? this.scroller.scrollLeft : this.scroller.scrollTop;
            if (e !== this.scrollOffset) {
                var t = this.repeater.getItemSize();
                if (t) {
                    var n = Math.max(0, Math.floor(e / t) - c), o = this.isHorizontal() ? "translateX(" : "translateY(";
                    o += n * t + "px)", this.scrollOffset = e, this.offsetter.style.webkitTransform = o, this.offsetter.style.transform = o, this.repeater.containerUpdated()
                }
            }
        }, r.$inject = ["$parse"], i.$inject = ["$scope", "$element", "$attrs", "$browser", "$document", "$$rAF"], i.Block, i.prototype.link_ = function (e, n, o, r, i) {
            this.container = e, this.transclude = n, this.repeatName = o, this.rawRepeatListExpression = r, this.extraName = i, this.sized = !1, this.repeatListExpression = t.bind(this, this.repeatListExpression_), this.container.register(this)
        }, i.prototype.readItemSize_ = function () {
            if (!this.itemSize) {
                this.items = this.repeatListExpression(this.$scope), this.parentNode = this.$element[0].parentNode;
                var e = this.getBlock_(0);
                e.element[0].parentNode || this.parentNode.appendChild(e.element[0]), this.itemSize = e.element[0][this.container.isHorizontal() ? "offsetWidth" : "offsetHeight"] || null, this.blocks[0] = e, this.poolBlock_(0), this.itemSize && this.containerUpdated()
            }
        }, i.prototype.repeatListExpression_ = function (e) {
            var t = this.rawRepeatListExpression(e);
            if (this.onDemand && t) {
                var n = new a(t);
                return n.$$includeIndexes(this.newStartIndex, this.newVisibleEnd), n
            }
            return t
        }, i.prototype.containerUpdated = function () {
            return this.itemSize ? (this.sized || (this.items = this.repeatListExpression(this.$scope)), this.sized || (this.unwatchItemSize_(), this.sized = !0, this.$scope.$watchCollection(this.repeatListExpression, t.bind(this, this.virtualRepeatUpdate_))), this.updateIndexes_(), void((this.newStartIndex !== this.startIndex || this.newEndIndex !== this.endIndex || this.container.getScrollOffset() > this.container.getScrollSize()) && (this.items instanceof a && this.items.$$includeIndexes(this.newStartIndex, this.newEndIndex), this.virtualRepeatUpdate_(this.items, this.items)))) : (this.unwatchItemSize_ = this.$scope.$watchCollection(this.repeatListExpression, t.bind(this, function (e) {
                e && e.length && this.$$rAF(t.bind(this, this.readItemSize_))
            })), void(this.$scope.$root.$$phase || this.$scope.$digest()))
        }, i.prototype.getItemSize = function () {
            return this.itemSize
        }, i.prototype.virtualRepeatUpdate_ = function (e, n) {
            var o = e ? e.length : 0, r = !1;
            if (o !== this.itemsLength && (r = !0, this.itemsLength = o), this.items && o < this.items.length && 0 !== this.container.getScrollOffset())return this.items = e, void this.container.resetScroll();
            if (this.items = e, (e !== n || r) && this.updateIndexes_(), this.parentNode = this.$element[0].parentNode, r && this.container.setScrollSize(o * this.itemSize), this.isFirstRender) {
                this.isFirstRender = !1;
                var i = this.$attrs.mdStartIndex ? this.$scope.$eval(this.$attrs.mdStartIndex) : 0;
                this.container.scrollTo(i * this.itemSize);
            }
            Object.keys(this.blocks).forEach(function (e) {
                var t = parseInt(e, 10);
                (t < this.newStartIndex || t >= this.newEndIndex) && this.poolBlock_(t)
            }, this), this.$browser.$$checkUrlChange = t.noop;
            var a, d, c = [], s = [];
            for (a = this.newStartIndex; a < this.newEndIndex && null == this.blocks[a]; a++)d = this.getBlock_(a), this.updateBlock_(d, a), c.push(d);
            for (; null != this.blocks[a]; a++)this.updateBlock_(this.blocks[a], a);
            for (var l = a - 1; a < this.newEndIndex; a++)d = this.getBlock_(a), this.updateBlock_(d, a), s.push(d);
            c.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(c), this.$element[0].nextSibling), s.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(s), this.blocks[l] && this.blocks[l].element[0].nextSibling), this.$browser.$$checkUrlChange = this.browserCheckUrlChange, this.startIndex = this.newStartIndex, this.endIndex = this.newEndIndex
        }, i.prototype.getBlock_ = function (e) {
            if (this.pooledBlocks.length)return this.pooledBlocks.pop();
            var n;
            return this.transclude(t.bind(this, function (t, o) {
                n = {element: t, "new": !0, scope: o}, this.updateScope_(o, e), this.parentNode.appendChild(t[0])
            })), n
        }, i.prototype.updateBlock_ = function (e, t) {
            this.blocks[t] = e, (e["new"] || e.scope.$index !== t || e.scope[this.repeatName] !== this.items[t]) && (e["new"] = !1, this.updateScope_(e.scope, t), this.$scope.$root.$$phase || e.scope.$digest())
        }, i.prototype.updateScope_ = function (e, t) {
            e.$index = t, e[this.repeatName] = this.items && this.items[t], this.extraName && (e[this.extraName(this.$scope)] = this.items[t])
        }, i.prototype.poolBlock_ = function (e) {
            this.pooledBlocks.push(this.blocks[e]), this.parentNode.removeChild(this.blocks[e].element[0]), delete this.blocks[e]
        }, i.prototype.domFragmentFromBlocks_ = function (e) {
            var t = this.$document[0].createDocumentFragment();
            return e.forEach(function (e) {
                t.appendChild(e.element[0])
            }), t
        }, i.prototype.updateIndexes_ = function () {
            var e = this.items ? this.items.length : 0, t = Math.ceil(this.container.getSize() / this.itemSize);
            this.newStartIndex = Math.max(0, Math.min(e - t, Math.floor(this.container.getScrollOffset() / this.itemSize))), this.newVisibleEnd = this.newStartIndex + t + c, this.newEndIndex = Math.min(e, this.newVisibleEnd), this.newStartIndex = Math.max(0, this.newStartIndex - c)
        }, a.prototype.$$includeIndexes = function (e, t) {
            for (var n = e; t > n; n++)this.hasOwnProperty(n) || (this[n] = this.model.getItemAtIndex(n));
            this.length = this.model.getLength()
        }
    }(), function () {
        t.module("material.components.whiteframe", [])
    }(), function () {
        function e(e, o, a, d, c, s, l, m, u, h) {
            function p() {
                a.initOptionalProperties(e, u, {
                    searchText: null,
                    selectedItem: null
                }), c(o), E(), a.nextTick(function () {
                    M(), g(), b(), o.on("focus", b)
                })
            }

            function f() {
                function t() {
                    var e = re.scrollContainer.getBoundingClientRect(), t = {};
                    e.right > d.right - i && (t.left = n.right - e.width + "px"), re.$.scrollContainer.css(t)
                }

                if (!re)return a.nextTick(f, !1, e);
                var n = re.wrap.getBoundingClientRect(), o = re.snap.getBoundingClientRect(), d = re.root.getBoundingClientRect(), c = o.bottom - d.top, s = d.bottom - o.top, l = n.left - d.left, m = n.width, u = {
                    left: l + "px",
                    minWidth: m + "px",
                    maxWidth: Math.max(n.right - d.left, d.right - n.left) - i + "px"
                };
                c > s && d.height - n.bottom - i < r ? (u.top = "auto", u.bottom = s + "px", u.maxHeight = Math.min(r, n.top - d.top - i) + "px") : (u.top = c + "px", u.bottom = "auto", u.maxHeight = Math.min(r, d.bottom - n.bottom - i) + "px"), re.$.scrollContainer.css(u), a.nextTick(t, !1)
            }

            function g() {
                re.$.root.length && (c(re.$.scrollContainer), re.$.scrollContainer.detach(), re.$.root.append(re.$.scrollContainer), l.pin && l.pin(re.$.scrollContainer, m))
            }

            function b() {
                e.autofocus && re.input.focus()
            }

            function E() {
                var n = parseInt(e.delay, 10) || 0;
                u.$observe("disabled", function (e) {
                    te.isDisabled = e
                }), u.$observe("required", function (e) {
                    te.isRequired = null !== e
                }), e.$watch("searchText", n ? a.debounce(D, n) : D), e.$watch("selectedItem", w), t.element(s).on("resize", f), e.$on("$destroy", v)
            }

            function v() {
                if (t.element(s).off("resize", f), re) {
                    var e = "ul scroller scrollContainer input".split(" ");
                    t.forEach(e, function (e) {
                        re.$[e].remove()
                    })
                }
            }

            function M() {
                re = {
                    main: o[0],
                    scrollContainer: o[0].getElementsByClassName("md-virtual-repeat-container")[0],
                    scroller: o[0].getElementsByClassName("md-virtual-repeat-scroller")[0],
                    ul: o.find("ul")[0],
                    input: o.find("input")[0],
                    wrap: o.find("md-autocomplete-wrap")[0],
                    root: document.body
                }, re.li = re.ul.getElementsByTagName("li"), re.snap = $(), re.$ = y(re)
            }

            function $() {
                for (var e = o; e.length; e = e.parent())if (t.isDefined(e.attr("md-autocomplete-snap")))return e[0];
                return re.wrap
            }

            function y(e) {
                var n = {};
                for (var o in e)e.hasOwnProperty(o) && (n[o] = t.element(e[o]));
                return n
            }

            function A(t, n) {
                !t && n ? (f(), re && a.nextTick(function () {
                    a.disableScrollAround(re.ul)
                }, !1, e)) : t && !n && a.nextTick(function () {
                    a.enableScrolling()
                }, !1, e)
            }

            function C() {
                ae = !0
            }

            function T() {
                ae = !1, ce || (te.hidden = !0)
            }

            function k() {
                re.input.focus()
            }

            function w(t, n) {
                t && P(t).then(function (o) {
                    e.searchText = o, _(t, n)
                }), t !== n && x()
            }

            function x() {
                t.isFunction(e.itemChange) && e.itemChange(F(e.selectedItem))
            }

            function N() {
                t.isFunction(e.textChange) && e.textChange()
            }

            function _(e, t) {
                de.forEach(function (n) {
                    n(e, t)
                })
            }

            function H(e) {
                -1 == de.indexOf(e) && de.push(e)
            }

            function S(e) {
                var t = de.indexOf(e);
                -1 != t && de.splice(t, 1)
            }

            function D(t, n) {
                te.index = B(), t !== n && P(e.selectedItem).then(function (o) {
                    t !== o && (e.selectedItem = null, t !== n && N(), z() ? J() : (te.loading = !1, te.matches = [], te.hidden = U(), K()))
                })
            }

            function O() {
                ce = !1, ae || (te.hidden = !0)
            }

            function I() {
                ce = !0, t.isString(e.searchText) || (e.searchText = ""), e.minLength > 0 || (te.hidden = U(), te.hidden || J())
            }

            function R(e) {
                switch (e.keyCode) {
                    case d.KEY_CODE.DOWN_ARROW:
                        if (te.loading)return;
                        e.stopPropagation(), e.preventDefault(), te.index = Math.min(te.index + 1, te.matches.length - 1), X(), K();
                        break;
                    case d.KEY_CODE.UP_ARROW:
                        if (te.loading)return;
                        e.stopPropagation(), e.preventDefault(), te.index = te.index < 0 ? te.matches.length - 1 : Math.max(0, te.index - 1), X(), K();
                        break;
                    case d.KEY_CODE.TAB:
                    case d.KEY_CODE.ENTER:
                        if (te.hidden || te.loading || te.index < 0 || te.matches.length < 1)return;
                        e.stopPropagation(), e.preventDefault(), V(te.index);
                        break;
                    case d.KEY_CODE.ESCAPE:
                        e.stopPropagation(), e.preventDefault(), W(), te.matches = [], te.hidden = !0, te.index = B()
                }
            }

            function L() {
                return t.isNumber(e.minLength) ? e.minLength : 1
            }

            function P(t) {
                function n(t) {
                    return t && e.itemText ? e.itemText(F(t)) : null
                }

                return h.when(n(t) || t)
            }

            function F(e) {
                if (!e)return n;
                var t = {};
                return te.itemName && (t[te.itemName] = e), t
            }

            function B() {
                return e.autoselect ? 0 : -1
            }

            function U() {
                return z() && te.matches.length ? void 0 : !0
            }

            function q() {
                return P(te.matches[te.index])
            }

            function z() {
                return t.isDefined(e.searchText) && e.searchText.length >= L()
            }

            function j(e, t, n) {
                Object.defineProperty(te, e, {
                    get: function () {
                        return n
                    }, set: function (e) {
                        var o = n;
                        n = e, t(e, o)
                    }
                })
            }

            function V(t) {
                a.nextTick(function () {
                    P(te.matches[t]).then(function (e) {
                        var t = re.$.input.controller("ngModel");
                        t.$setViewValue(e), t.$render()
                    })["finally"](function () {
                        e.selectedItem = te.matches[t], te.loading = !1, te.hidden = !0, te.index = 0, te.matches = []
                    })
                }, !1)
            }

            function W() {
                e.searchText = "", V(-1);
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("input", !0, !0, {value: e.searchText}), re.input.dispatchEvent(t), re.input.focus()
            }

            function Y(n) {
                function o(t) {
                    ie[i] = t, n === e.searchText && (te.matches = t, te.hidden = U(), e.selectOnMatch && ee(), K(), f())
                }

                var r = e.$parent.$eval(oe), i = n.toLowerCase();
                t.isArray(r) ? o(r) : r && a.nextTick(function () {
                    te.loading = !0, r.success && r.success(o), r.then && r.then(o), r["finally"] && r["finally"](function () {
                        te.loading = !1
                    })
                }, !0, e)
            }

            function K() {
                q().then(function (e) {
                    te.messages = [G(), e]
                })
            }

            function G() {
                if (se === te.matches.length)return "";
                switch (se = te.matches.length, te.matches.length) {
                    case 0:
                        return "There are no matches available.";
                    case 1:
                        return "There is 1 match available.";
                    default:
                        return "There are " + te.matches.length + " matches available."
                }
            }

            function X() {
                if (re.li[0]) {
                    var e = re.li[0].offsetHeight, t = e * te.index, n = t + e, o = re.scroller.clientHeight, r = re.scroller.scrollTop;
                    r > t ? Q(t) : n > r + o && Q(n - o)
                }
            }

            function Q(e) {
                re.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)
            }

            function Z() {
                return !te.matches.length && !te.loading && te.scope.searchText && ce && !te.scope.selectedItem
            }

            function J() {
                var t = e.searchText, n = t.toLowerCase();
                !e.noCache && ie[n] ? (te.matches = ie[n], K()) : Y(t), ce && (te.hidden = U())
            }

            function ee() {
                var t = e.searchText, n = te.matches, o = n[0];
                1 === n.length && P(o).then(function (e) {
                    t == e && V(0)
                })
            }

            var te = this, ne = e.itemsExpr.split(/ in /i), oe = ne[1], re = null, ie = {}, ae = !1, de = [], ce = !1, se = 0;
            return j("hidden", A, !0), te.scope = e, te.parent = e.$parent, te.itemName = ne[0], te.matches = [], te.loading = !1, te.hidden = !0, te.index = null, te.messages = [], te.id = a.nextUid(), te.isDisabled = null, te.isRequired = null, te.keydown = R, te.blur = O, te.focus = I, te.clear = W, te.select = V, te.listEnter = C, te.listLeave = T, te.mouseUp = k, te.getCurrentDisplayValue = q, te.registerSelectedItemWatcher = H, te.unregisterSelectedItemWatcher = S, te.notFoundVisible = Z, p()
        }

        t.module("material.components.autocomplete").controller("MdAutocompleteCtrl", e);
        var o = 41, r = 5.5 * o, i = 8;
        e.$inject = ["$scope", "$element", "$mdUtil", "$mdConstant", "$mdTheming", "$window", "$animate", "$rootElement", "$attrs", "$q"]
    }(), function () {
        function e() {
            return {
                controller: "MdAutocompleteCtrl",
                controllerAs: "$mdAutocompleteCtrl",
                scope: {
                    inputName: "@mdInputName",
                    inputMinlength: "@mdInputMinlength",
                    inputMaxlength: "@mdInputMaxlength",
                    searchText: "=?mdSearchText",
                    selectedItem: "=?mdSelectedItem",
                    itemsExpr: "@mdItems",
                    itemText: "&mdItemText",
                    placeholder: "@placeholder",
                    noCache: "=?mdNoCache",
                    selectOnMatch: "=?mdSelectOnMatch",
                    itemChange: "&?mdSelectedItemChange",
                    textChange: "&?mdSearchTextChange",
                    minLength: "=?mdMinLength",
                    delay: "=?mdDelay",
                    autofocus: "=?mdAutofocus",
                    floatingLabel: "@?mdFloatingLabel",
                    autoselect: "=?mdAutoselect",
                    menuClass: "@?mdMenuClass",
                    inputId: "@?mdInputId"
                },
                template: function (e, t) {
                    function n() {
                        var t = e.find("md-item-template").detach(), n = t.length ? t.html() : e.html();
                        return t.length || e.empty(), "<md-autocomplete-parent-scope md-autocomplete-replace>" + n + "</md-autocomplete-parent-scope>"
                    }

                    function o() {
                        var t = e.find("md-not-found").detach(), n = t.length ? t.html() : "";
                        return n ? '<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>' + n + "</li>" : ""
                    }

                    function r() {
                        return t.mdFloatingLabel ? '            <md-input-container flex ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  ng-focus="$mdAutocompleteCtrl.focus()"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>' + d + "</div>            </md-input-container>" : '            <input flex type="search"                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus()"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear()">              <md-icon md-svg-icon="md-close"></md-icon>              <span class="md-visually-hidden">Clear</span>            </button>                '
                    }

                    var i = o(), a = n(), d = e.html();
                    return '        <md-autocomplete-wrap            layout="row"            ng-class="{ \'md-whiteframe-z1\': !floatingLabel, \'md-menu-showing\': !$mdAutocompleteCtrl.hidden }"            role="listbox">          ' + r() + '          <md-progress-linear              ng-if="$mdAutocompleteCtrl.loading && !$mdAutocompleteCtrl.hidden"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-hide="$mdAutocompleteCtrl.hidden && !$mdAutocompleteCtrl.notFoundVisible()"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}"                ng-mouseenter="$mdAutocompleteCtrl.listEnter()"                ng-mouseleave="$mdAutocompleteCtrl.listLeave()"                ng-mouseup="$mdAutocompleteCtrl.mouseUp()">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  ' + a + "                  </li>" + i + '            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>'
                }
            }
        }

        t.module("material.components.autocomplete").directive("mdAutocomplete", e)
    }(), function () {
        function e(e, t) {
            function n(n, o, r) {
                function i(e, o) {
                    d[o] = n[e], n.$watch(e, function (e) {
                        t.nextTick(function () {
                            d[o] = e
                        })
                    })
                }

                var a = n.$mdAutocompleteCtrl, d = a.parent.$new(), c = a.itemName;
                i("$index", "$index"), i("item", c), e(o.contents())(d), r.hasOwnProperty("mdAutocompleteReplace") && (o.after(o.contents()), o.remove())
            }

            return {restrict: "AE", link: n, terminal: !0}
        }

        t.module("material.components.autocomplete").directive("mdAutocompleteParentScope", e), e.$inject = ["$compile", "$mdUtil"]
    }(), function () {
        function e(e, n, o) {
            function r(r, i) {
                var d = null, c = null, s = o.mdHighlightFlags || "", l = e.$watch(function (e) {
                    return {term: r(e), unsafeText: i(e)}
                }, function (e, o) {
                    (null === d || e.unsafeText !== o.unsafeText) && (d = t.element("<div>").text(e.unsafeText).html()), (null === c || e.term !== o.term) && (c = a(e.term, s)), n.html(d.replace(c, '<span class="highlight">$&</span>'))
                }, !0);
                n.on("$destroy", function () {
                    l()
                })
            }

            function i(e) {
                return e && e.replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g, "\\$&")
            }

            function a(e, t) {
                var n = "";
                return t.indexOf("^") >= 1 && (n += "^"), n += e, t.indexOf("$") >= 1 && (n += "$"), new RegExp(i(n), t.replace(/[\$\^]/g, ""))
            }

            this.init = r
        }

        t.module("material.components.autocomplete").controller("MdHighlightCtrl", e), e.$inject = ["$scope", "$element", "$attrs"]
    }(), function () {
        function e(e, t) {
            return {
                terminal: !0, controller: "MdHighlightCtrl", compile: function (n, o) {
                    var r = t(o.mdHighlightText), i = e(n.html());
                    return function (e, t, n, o) {
                        o.init(r, i)
                    }
                }
            }
        }

        t.module("material.components.autocomplete").directive("mdHighlightText", e), e.$inject = ["$interpolate", "$parse"]
    }(), function () {
        function e(e, o) {
            function r(n, r) {
                return n.append(o.processTemplate(i)), function (n, o, r, i) {
                    o.addClass("md-chip"), e(o), i && t.element(o[0].querySelector(".md-chip-content")).on("blur", function () {
                        i.selectedChip = -1
                    })
                }
            }

            var i = o.processTemplate(n);
            return {restrict: "E", require: "^?mdChips", compile: r}
        }

        t.module("material.components.chips").directive("mdChip", e);
        var n = '    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';
        e.$inject = ["$mdTheming", "$mdUtil"]
    }(), function () {
        function e(e) {
            function t(t, n, o, r) {
                n.on("click", function (e) {
                    t.$apply(function () {
                        r.removeChip(t.$$replacedScope.$index)
                    })
                }), e(function () {
                    n.attr({tabindex: -1, ariaHidden: !0}), n.find("button").attr("tabindex", "-1")
                })
            }

            return {restrict: "A", require: "^mdChips", scope: !1, link: t}
        }

        t.module("material.components.chips").directive("mdChipRemove", e), e.$inject = ["$timeout"]
    }(), function () {
        function e(e) {
            function t(t, n, o) {
                var r = t.$parent.$mdChipsCtrl, i = r.parent.$new(!1, r.parent);
                i.$$replacedScope = t, i.$chip = t.$chip, i.$index = t.$index, i.$mdChipsCtrl = r;
                var a = r.$scope.$eval(o.mdChipTransclude);
                n.html(a), e(n.contents())(i)
            }

            return {restrict: "EA", terminal: !0, link: t, scope: !1}
        }

        t.module("material.components.chips").directive("mdChipTransclude", e), e.$inject = ["$compile"]
    }(), function () {
        function e(e, t, n, o, r) {
            this.$timeout = r, this.$mdConstant = t, this.$scope = e, this.parent = e.$parent, this.$log = n, this.$element = o, this.ngModelCtrl = null, this.userInputNgModelCtrl = null, this.userInputElement = null, this.items = [], this.selectedChip = -1, this.hasAutocomplete = !1, this.deleteHint = "Press delete to remove this chip.", this.deleteButtonLabel = "Remove", this.chipBuffer = "", this.useOnAppend = !1, this.useOnSelect = !1
        }

        t.module("material.components.chips").controller("MdChipsCtrl", e), e.$inject = ["$scope", "$mdConstant", "$log", "$element", "$timeout"], e.prototype.inputKeydown = function (e) {
            var t = this.getChipBuffer();
            switch (e.keyCode) {
                case this.$mdConstant.KEY_CODE.ENTER:
                    if (this.hasAutocomplete && this.requireMatch || !t)break;
                    e.preventDefault(), this.appendChip(t), this.resetChipBuffer();
                    break;
                case this.$mdConstant.KEY_CODE.BACKSPACE:
                    if (t)break;
                    e.preventDefault(), e.stopPropagation(), this.items.length && this.selectAndFocusChipSafe(this.items.length - 1)
            }
        }, e.prototype.chipKeydown = function (e) {
            if (!this.getChipBuffer())switch (e.keyCode) {
                case this.$mdConstant.KEY_CODE.BACKSPACE:
                case this.$mdConstant.KEY_CODE.DELETE:
                    if (this.selectedChip < 0)return;
                    e.preventDefault(), this.removeAndSelectAdjacentChip(this.selectedChip);
                    break;
                case this.$mdConstant.KEY_CODE.LEFT_ARROW:
                    e.preventDefault(), this.selectedChip < 0 && (this.selectedChip = this.items.length), this.items.length && this.selectAndFocusChipSafe(this.selectedChip - 1);
                    break;
                case this.$mdConstant.KEY_CODE.RIGHT_ARROW:
                    e.preventDefault(), this.selectAndFocusChipSafe(this.selectedChip + 1);
                    break;
                case this.$mdConstant.KEY_CODE.ESCAPE:
                case this.$mdConstant.KEY_CODE.TAB:
                    if (this.selectedChip < 0)return;
                    e.preventDefault(), this.onFocus()
            }
        }, e.prototype.getPlaceholder = function () {
            var e = this.items.length && ("" == this.secondaryPlaceholder || this.secondaryPlaceholder);
            return e ? this.placeholder : this.secondaryPlaceholder
        }, e.prototype.removeAndSelectAdjacentChip = function (e) {
            var n = this.getAdjacentChipIndex(e);
            this.removeChip(e), this.$timeout(t.bind(this, function () {
                this.selectAndFocusChipSafe(n)
            }))
        }, e.prototype.resetSelectedChip = function () {
            this.selectedChip = -1
        }, e.prototype.getAdjacentChipIndex = function (e) {
            var t = this.items.length - 1;
            return 0 == t ? -1 : e == t ? e - 1 : e
        }, e.prototype.appendChip = function (e) {
            this.useOnAppend && this.onAppend && (e = this.onAppend({$chip: e})), this.items.indexOf(e) + 1 || this.items.push(e)
        }, e.prototype.useOnAppendExpression = function () {
            this.useOnAppend = !0
        }, e.prototype.useOnRemoveExpression = function () {
            this.useOnRemove = !0
        }, e.prototype.useOnSelectExpression = function () {
            this.useOnSelect = !0
        }, e.prototype.getChipBuffer = function () {
            return this.userInputElement ? this.userInputNgModelCtrl ? this.userInputNgModelCtrl.$viewValue : this.userInputElement[0].value : this.chipBuffer
        }, e.prototype.resetChipBuffer = function () {
            this.userInputElement ? this.userInputNgModelCtrl ? (this.userInputNgModelCtrl.$setViewValue(""), this.userInputNgModelCtrl.$render()) : this.userInputElement[0].value = "" : this.chipBuffer = ""
        }, e.prototype.removeChip = function (e) {
            var t = this.items.splice(e, 1);
            t && t.length && this.useOnRemove && this.onRemove && this.onRemove({$chip: t[0], $index: e})
        }, e.prototype.removeChipAndFocusInput = function (e) {
            this.removeChip(e), this.onFocus()
        }, e.prototype.selectAndFocusChipSafe = function (e) {
            return this.items.length ? e === this.items.length ? this.onFocus() : (e = Math.max(e, 0), e = Math.min(e, this.items.length - 1), this.selectChip(e), void this.focusChip(e)) : (this.selectChip(-1), void this.onFocus())
        }, e.prototype.selectChip = function (e) {
            e >= -1 && e <= this.items.length ? (this.selectedChip = e, this.useOnSelect && this.onSelect && this.onSelect({$chip: this.items[this.selectedChip]})) : this.$log.warn("Selected Chip index out of bounds; ignoring.")
        }, e.prototype.selectAndFocusChip = function (e) {
            this.selectChip(e), -1 != e && this.focusChip(e)
        }, e.prototype.focusChip = function (e) {
            this.$element[0].querySelector('md-chip[index="' + e + '"] .md-chip-content').focus()
        }, e.prototype.configureNgModel = function (e) {
            this.ngModelCtrl = e;
            var t = this;
            e.$render = function () {
                t.items = t.ngModelCtrl.$viewValue
            }
        }, e.prototype.onFocus = function () {
            var e = this.$element[0].querySelector("input");
            e && e.focus(), this.resetSelectedChip()
        }, e.prototype.onInputFocus = function () {
            this.inputHasFocus = !0, this.resetSelectedChip()
        }, e.prototype.onInputBlur = function () {
            this.inputHasFocus = !1
        }, e.prototype.configureUserInput = function (e) {
            this.userInputElement = e;
            var n = e.controller("ngModel");
            n != this.ngModelCtrl && (this.userInputNgModelCtrl = n);
            var o = this.$scope, r = this, i = function (e, n) {
                o.$evalAsync(t.bind(r, n, e))
            };
            e.attr({tabindex: 0}).on("keydown", function (e) {
                i(e, r.inputKeydown)
            }).on("focus", function (e) {
                i(e, r.onInputFocus)
            }).on("blur", function (e) {
                i(e, r.onInputBlur)
            })
        }, e.prototype.configureAutocomplete = function (e) {
            e && (this.hasAutocomplete = !0, e.registerSelectedItemWatcher(t.bind(this, function (e) {
                e && (this.appendChip(e), this.resetChipBuffer())
            })), this.$element.find("input").on("focus", t.bind(this, this.onInputFocus)).on("blur", t.bind(this, this.onInputBlur)))
        }, e.prototype.hasFocus = function () {
            return this.inputHasFocus || this.selectedChip >= 0
        }
    }(), function () {
        function e(e, t, a, d, c) {
            function s(n, o) {
                function r(e) {
                    if (o.ngModel) {
                        var t = i[0].querySelector(e);
                        return t && t.outerHTML
                    }
                }

                var i = o.$mdUserTemplate;
                o.$mdUserTemplate = null;
                var s = r("md-chips>*[md-chip-remove]") || m.remove, l = r("md-chips>md-chip-template") || m["default"], u = r("md-chips>md-autocomplete") || r("md-chips>input") || m.input, h = i.find("md-chip");
                return i[0].querySelector("md-chip-template>*[md-chip-remove]") && d.warn("invalid placement of md-chip-remove within md-chip-template."), function (n, r, i, d) {
                    t.initOptionalProperties(n, o), e(r);
                    var p = d[0];
                    if (p.chipContentsTemplate = l, p.chipRemoveTemplate = s, p.chipInputTemplate = u, r.attr({
                            ariaHidden: !0,
                            tabindex: -1
                        }).on("focus", function () {
                            p.onFocus()
                        }), o.ngModel && (p.configureNgModel(r.controller("ngModel")), i.mdOnAppend && p.useOnAppendExpression(), i.mdOnRemove && p.useOnRemoveExpression(), i.mdOnSelect && p.useOnSelectExpression(), u != m.input && n.$watch("$mdChipsCtrl.readonly", function (e) {
                            e || t.nextTick(function () {
                                0 === u.indexOf("<md-autocomplete") && p.configureAutocomplete(r.find("md-autocomplete").controller("mdAutocomplete")), p.configureUserInput(r.find("input"))
                            })
                        })), h.length > 0) {
                        var f = a(h.clone())(n.$parent);
                        c(function () {
                            r.find("md-chips-wrap").prepend(f)
                        })
                    }
                }
            }

            function l() {
                return {
                    chips: t.processTemplate(n),
                    input: t.processTemplate(o),
                    "default": t.processTemplate(r),
                    remove: t.processTemplate(i)
                }
            }

            var m = l();
            return {
                template: function (e, t) {
                    return t.$mdUserTemplate = e.clone(), m.chips
                },
                require: ["mdChips"],
                restrict: "E",
                controller: "MdChipsCtrl",
                controllerAs: "$mdChipsCtrl",
                bindToController: !0,
                compile: s,
                scope: {
                    readonly: "=readonly",
                    placeholder: "@",
                    secondaryPlaceholder: "@",
                    onAppend: "&mdOnAppend",
                    onRemove: "&mdOnRemove",
                    onSelect: "&mdOnSelect",
                    deleteHint: "@",
                    deleteButtonLabel: "@",
                    requireMatch: "=?mdRequireMatch"
                }
            }
        }

        t.module("material.components.chips").directive("mdChips", e);
        var n = '      <md-chips-wrap          ng-if="!$mdChipsCtrl.readonly || $mdChipsCtrl.items.length > 0"          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(), \'md-readonly\': !$mdChipsCtrl.ngModelCtrl }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="!$mdChipsCtrl.readonly"               class="md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl"            class="md-chip-input-container"            md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>', o = '        <input            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">', r = "      <span>{{$chip}}</span>", i = '      <button          class="md-chip-remove"          ng-if="!$mdChipsCtrl.readonly"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-icon="md-close"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';
        e.$inject = ["$mdTheming", "$mdUtil", "$compile", "$log", "$timeout"]
    }(), function () {
        function e() {
            this.selectedItem = null, this.searchText = ""
        }

        t.module("material.components.chips").controller("MdContactChipsCtrl", e), e.prototype.queryContact = function (e) {
            var n = this.contactQuery({$query: e});
            return this.filterSelected ? n.filter(t.bind(this, this.filterSelectedContacts)) : n
        }, e.prototype.itemName = function (e) {
            return e[this.contactName]
        }, e.prototype.filterSelectedContacts = function (e) {
            return -1 == this.contacts.indexOf(e)
        }
    }(), function () {
        function e(e, t) {
            function o(n, o) {
                return function (n, r, i, a) {
                    t.initOptionalProperties(n, o), e(r), r.attr("tabindex", "-1")
                }
            }

            return {
                template: function (e, t) {
                    return n
                },
                restrict: "E",
                controller: "MdContactChipsCtrl",
                controllerAs: "$mdContactChipsCtrl",
                bindToController: !0,
                compile: o,
                scope: {
                    contactQuery: "&mdContacts",
                    placeholder: "@",
                    secondaryPlaceholder: "@",
                    contactName: "@mdContactName",
                    contactImage: "@mdContactImage",
                    contactEmail: "@mdContactEmail",
                    contacts: "=ngModel",
                    requireMatch: "=?mdRequireMatch",
                    highlightFlags: "@?mdHighlightFlags"
                }
            }
        }

        t.module("material.components.chips").directive("mdContactChips", e);
        var n = '      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';
        e.$inject = ["$mdTheming", "$mdUtil"]
    }(), function () {
        function e(e, t, n) {
            function o(o, r, i) {
                function a() {
                    var e = r.parent();
                    return e.attr("aria-label") || e.text() ? !0 : e.parent().attr("aria-label") || e.parent().text() ? !0 : !1
                }

                function d() {
                    function t() {
                        return !o.fontIcon && !o.fontSet
                    }

                    o.svgIcon || o.svgSrc || (o.fontIcon && r.addClass("md-font " + o.fontIcon), o.fontSet && r.addClass(e.fontSet(o.fontSet)), t() && r.addClass(e.fontSet()))
                }

                t(r), d();
                var c = i.alt || o.fontIcon || o.svgIcon || r.text(), s = i.$normalize(i.$attr.mdSvgIcon || i.$attr.mdSvgSrc || "");
                i["aria-label"] || ("" == c || a() ? r.text() || n.expect(r, "aria-hidden", "true") : (n.expect(r, "aria-label", c), n.expect(r, "role", "img"))), s && i.$observe(s, function (t) {
                    r.empty(), t && e(t).then(function (e) {
                        r.append(e)
                    })
                })
            }

            return {
                scope: {fontSet: "@mdFontSet", fontIcon: "@mdFontIcon", svgIcon: "@mdSvgIcon", svgSrc: "@mdSvgSrc"},
                restrict: "E",
                link: o
            }
        }

        t.module("material.components.icon").directive("mdIcon", ["$mdIcon", "$mdTheming", "$mdAria", e])
    }(), function () {
        function e() {
        }

        function n(e, t) {
            this.url = e, this.viewBoxSize = t || r.defaultViewBoxSize
        }

        function o(e, n, o, r, i) {
            function a(t) {
                if (t = t || "", b[t])return o.when(b[t].clone());
                if (E.test(t))return m(t).then(c(t));
                -1 == t.indexOf(":") && (t = "$default:" + t);
                var n = e[t] ? s : l;
                return n(t).then(c(t))
            }

            function d(n) {
                var o = t.isUndefined(n) || !(n && n.length);
                if (o)return e.defaultFontSet;
                var r = n;
                return t.forEach(e.fontSets, function (e) {
                    e.alias == n && (r = e.fontSet || r)
                }), r
            }

            function c(t) {
                return function (n) {
                    return b[t] = h(n) ? n : new p(n, e[t]), b[t].clone()
                }
            }

            function s(t) {
                var n = e[t];
                return m(n.url).then(function (e) {
                    return new p(e, n)
                })
            }

            function l(t) {
                function n(e) {
                    var n = t.slice(t.lastIndexOf(":") + 1), o = e.querySelector("#" + n);
                    return o ? new p(o, d) : i(t)
                }

                function i(e) {
                    var t = "icon " + e + " not found";
                    return r.warn(t), o.reject(t || e)
                }

                var a = t.substring(0, t.lastIndexOf(":")) || "$default", d = e[a];
                return d ? m(d.url).then(n) : i(t)
            }

            function m(e) {
                return n.get(e, {cache: i}).then(function (e) {
                    return t.element("<div>").append(e.data).find("svg")[0]
                })["catch"](u)
            }

            function u(e) {
                var n = t.isString(e) ? e : e.message || e.data || e.statusText;
                return r.warn(n), o.reject(n)
            }

            function h(e) {
                return t.isDefined(e.element) && t.isDefined(e.config)
            }

            function p(e, n) {
                "svg" != e.tagName && (e = t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]), e.getAttribute("xmlns") || e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.element = e, this.config = n, this.prepare()
            }

            function f() {
                var n = this.config ? this.config.viewBoxSize : e.defaultViewBoxSize;
                t.forEach({
                    fit: "",
                    height: "100%",
                    width: "100%",
                    preserveAspectRatio: "xMidYMid meet",
                    viewBox: this.element.getAttribute("viewBox") || "0 0 " + n + " " + n
                }, function (e, t) {
                    this.element.setAttribute(t, e)
                }, this), t.forEach({"pointer-events": "none", display: "block"}, function (e, t) {
                    this.element.style[t] = e
                }, this)
            }

            function g() {
                return this.element.cloneNode(!0)
            }

            var b = {}, E = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;
            return p.prototype = {clone: g, prepare: f}, a.fontSet = d, a
        }

        t.module("material.components.icon").provider("$mdIcon", e);
        var r = {defaultViewBoxSize: 24, defaultFontSet: "material-icons", fontSets: []};
        e.prototype = {
            icon: function (e, t, o) {
                return -1 == e.indexOf(":") && (e = "$default:" + e), r[e] = new n(t, o), this
            }, iconSet: function (e, t, o) {
                return r[e] = new n(t, o), this
            }, defaultIconSet: function (e, t) {
                var o = "$default";
                return r[o] || (r[o] = new n(e, t)), r[o].viewBoxSize = t || r.defaultViewBoxSize, this
            }, defaultViewBoxSize: function (e) {
                return r.defaultViewBoxSize = e, this
            }, fontSet: function (e, t) {
                return r.fontSets.push({alias: e, fontSet: t || e}), this
            }, defaultFontSet: function (e) {
                return r.defaultFontSet = e ? e : "", this
            }, defaultIconSize: function (e) {
                return r.defaultIconSize = e, this
            }, preloadIcons: function (e) {
                var t = this, n = [{
                    id: "md-tabs-arrow",
                    url: "md-tabs-arrow.svg",
                    svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'
                }, {
                    id: "md-close",
                    url: "md-close.svg",
                    svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'
                }, {
                    id: "md-cancel",
                    url: "md-cancel.svg",
                    svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'
                }, {
                    id: "md-menu",
                    url: "md-menu.svg",
                    svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>'
                }, {
                    id: "md-toggle-arrow",
                    url: "md-toggle-arrow-svg",
                    svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'
                }, {
                    id: "md-calendar",
                    url: "md-calendar.svg",
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>'
                }];
                n.forEach(function (n) {
                    t.icon(n.id, n.url), e.put(n.url, n.svg)
                })
            }, $get: ["$http", "$q", "$log", "$templateCache", function (e, t, n, i) {
                return this.preloadIcons(i), o(r, e, t, n, i)
            }]
        }, o.$inject = ["config", "$http", "$q", "$log", "$templateCache"]
    }(), function () {
        function e(e, o, r, i, a, d) {
            var c, s, l = this;
            this.nestLevel = parseInt(o.mdNestLevel, 10) || 0, this.init = function (e, t) {
                t = t || {}, c = e, s = r[0].querySelector("[ng-click],[ng-mouseenter]"), this.isInMenuBar = t.isInMenuBar, this.nestedMenus = a.nodesToArray(c[0].querySelectorAll(".md-nested-menu")), this.enableHoverListener(), c.on("$mdInterimElementRemove", function () {
                    l.isOpen = !1
                })
            }, this.enableHoverListener = function () {
                i.$on("$mdMenuOpen", function (e, t) {
                    c[0].contains(t[0]) && (l.currentlyOpenMenu = t.controller("mdMenu"), l.isAlreadyOpening = !1, l.currentlyOpenMenu.registerContainerProxy(l.triggerContainerProxy.bind(l)))
                }), i.$on("$mdMenuClose", function (e, t) {
                    c[0].contains(t[0]) && (l.currentlyOpenMenu = n)
                });
                var e, o = t.element(a.nodesToArray(c[0].querySelectorAll("md-menu-item")));
                o.on("mouseenter", function (n) {
                    if (!l.isAlreadyOpening) {
                        var o = n.target.querySelector("md-menu") || a.getClosest(n.target, "MD-MENU");
                        e = d(function () {
                            if (o && (o = t.element(o).controller("mdMenu")), l.currentlyOpenMenu && l.currentlyOpenMenu != o) {
                                var e = l.nestLevel + 1;
                                l.currentlyOpenMenu.close(!0, {closeTo: e})
                            } else o && !o.isOpen && o.open && (l.isAlreadyOpening = !0, o.open())
                        }, o ? 100 : 250);
                        var r = n.currentTarget.querySelector("[tabindex]");
                        r && r.focus()
                    }
                }), o.on("mouseleave", function (t) {
                    e && (d.cancel(e), e = n)
                })
            }, this.open = function (t) {
                t && t.stopPropagation(), t && t.preventDefault(), l.isOpen || (l.isOpen = !0, s = s || (t ? t.target : r[0]), i.$emit("$mdMenuOpen", r), e.show({
                    scope: i,
                    mdMenuCtrl: l,
                    nestLevel: l.nestLevel,
                    element: c,
                    target: s,
                    preserveElement: l.isInMenuBar || l.nestedMenus.length > 0,
                    parent: l.isInMenuBar ? r : "body"
                }))
            }, i.$mdOpenMenu = this.open, i.$watch(function () {
                return l.isOpen
            }, function (e) {
                e ? (s.setAttribute("aria-expanded", "true"), r[0].classList.add("md-open"), t.forEach(l.nestedMenus, function (e) {
                    e.classList.remove("md-open")
                })) : (s && s.setAttribute("aria-expanded", "false"), r[0].classList.remove("md-open")), i.$mdMenuIsOpen = l.isOpen
            }), this.focusMenuContainer = function () {
                var e = c[0].querySelector("[md-menu-focus-target]");
                e || (e = c[0].querySelector(".md-button")), e.focus()
            }, this.registerContainerProxy = function (e) {
                this.containerProxy = e
            }, this.triggerContainerProxy = function (e) {
                this.containerProxy && this.containerProxy(e)
            }, this.destroy = function () {
                return e.destroy()
            }, this.close = function (n, o) {
                if (l.isOpen && (l.isOpen = !1, i.$emit("$mdMenuClose", r), e.hide(null, o), !n)) {
                    var a = l.restoreFocusTo || r.find("button")[0];
                    a instanceof t.element && (a = a[0]), a && a.focus()
                }
            }, this.positionMode = function () {
                var e = (o.mdPositionMode || "target").split(" ");
                return 1 == e.length && e.push(e[0]), {left: e[0], top: e[1]}
            }, this.offsets = function () {
                var e = (o.mdOffset || "0 0").split(" ").map(parseFloat);
                if (2 == e.length)return {left: e[0], top: e[1]};
                if (1 == e.length)return {top: e[0], left: e[0]};
                throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")
            }
        }

        t.module("material.components.menu").controller("mdMenuCtrl", e), e.$inject = ["$mdMenu", "$attrs", "$element", "$scope", "$mdUtil", "$timeout"]
    }(), function () {
        function e(e) {
            function o(n) {
                n.addClass("md-menu");
                var o = n.children()[0];
                if (o.hasAttribute("ng-click") || (o = o.querySelector("[ng-click],[ng-mouseenter]") || o), !o || "MD-BUTTON" != o.nodeName && "BUTTON" != o.nodeName || o.hasAttribute("type") || o.setAttribute("type", "button"), 2 != n.children().length)throw Error(i + "Expected two children elements.");
                o && o.setAttribute("aria-haspopup", "true");
                var a = n[0].querySelectorAll("md-menu"), d = parseInt(n[0].getAttribute("md-nest-level"), 10) || 0;
                return a && t.forEach(e.nodesToArray(a), function (e) {
                    e.hasAttribute("md-position-mode") || e.setAttribute("md-position-mode", "cascade"), e.classList.add("md-nested-menu"), e.setAttribute("md-nest-level", d + 1), e.setAttribute("role", "menu")
                }), r
            }

            function r(e, o, r, i) {
                var a = i[0], d = i[1] != n, c = t.element('<div class="md-open-menu-container md-whiteframe-z2"></div>'), s = o.children()[1];
                c.append(s), d && (o.append(c), c[0].style.display = "none"), a.init(c, {isInMenuBar: d}), e.$on("$destroy", function () {
                    a.destroy()["finally"](function () {
                        c.remove()
                    })
                })
            }

            var i = "Invalid HTML for md-menu: ";
            return {restrict: "E", require: ["mdMenu", "?^mdMenuBar"], controller: "mdMenuCtrl", scope: !0, compile: o}
        }

        t.module("material.components.menu").directive("mdMenu", e), e.$inject = ["$mdUtil"]
    }(), function () {
        function e(e) {
            function o(e, o, a, d, c, s, l, m, u) {
                function h(n, o, r) {
                    return r.nestLevel ? t.noop : (r.disableParentScroll && !e.getClosest(r.target, "MD-DIALOG") ? r.restoreScroll = e.disableScrollAround(r.element, r.parent) : r.disableParentScroll = !1, r.hasBackdrop && (r.backdrop = e.createBackdrop(n, "md-menu-backdrop md-click-catcher"), u.enter(r.backdrop, r.parent)), function () {
                        r.backdrop && r.backdrop.remove(), r.disableParentScroll && r.restoreScroll()
                    })
                }

                function p(e, t, n) {
                    function o() {
                        return m(t, {addClass: "md-leave"}).start()
                    }

                    function r() {
                        t.removeClass("md-active"), E(t, n), n.alreadyOpen = !1
                    }

                    return n.cleanupInteraction(), n.cleanupResizing(), n.hideBackdrop(), n.$destroy === !0 ? r() : o().then(r)
                }

                function f(n, r, i) {
                    function d() {
                        return i.preserveElement ? r[0].style.display = "" : i.parent.append(r), s(function (e) {
                            var t = v(r, i);
                            r.removeClass("md-leave"), m(r, {
                                addClass: "md-active",
                                from: M.toCss(t),
                                to: M.toCss({transform: ""})
                            }).start().then(e)
                        })
                    }

                    function u() {
                        if (!i.target)throw Error("$mdMenu.show() expected a target to animate from in options.target");
                        t.extend(i, {
                            alreadyOpen: !1,
                            isRemoved: !1,
                            target: t.element(i.target),
                            parent: t.element(i.parent),
                            menuContentEl: t.element(r[0].querySelector("md-menu-content"))
                        })
                    }

                    function p() {
                        var e = function (e, t) {
                            return l.throttle(function () {
                                if (!i.isRemoved) {
                                    var n = v(e, t);
                                    e.css(M.toCss(n))
                                }
                            })
                        }(r, i);
                        return c.addEventListener("resize", e), c.addEventListener("orientationchange", e), function () {
                            c.removeEventListener("resize", e), c.removeEventListener("orientationchange", e)
                        }
                    }

                    function f() {
                        function t(t) {
                            var n;
                            a.KEY_CODE;
                            switch (t.keyCode) {
                                case a.KEY_CODE.ESCAPE:
                                    i.mdMenuCtrl.close(!0, {closeAll: !0}), n = !0;
                                    break;
                                case a.KEY_CODE.UP_ARROW:
                                    g(t, i.menuContentEl, i, -1) || i.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                                    break;
                                case a.KEY_CODE.DOWN_ARROW:
                                    g(t, i.menuContentEl, i, 1) || i.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                                    break;
                                case a.KEY_CODE.LEFT_ARROW:
                                    i.nestLevel ? i.mdMenuCtrl.close() : i.mdMenuCtrl.triggerContainerProxy(t), n = !0;
                                    break;
                                case a.KEY_CODE.RIGHT_ARROW:
                                    var o = e.getClosest(t.target, "MD-MENU");
                                    o && o != i.parent[0] ? t.target.click() : i.mdMenuCtrl.triggerContainerProxy(t), n = !0
                            }
                            n && (t.preventDefault(), t.stopImmediatePropagation())
                        }

                        function o(e) {
                            e.preventDefault(), e.stopPropagation(), n.$apply(function () {
                                i.mdMenuCtrl.close(!0, {closeAll: !0})
                            })
                        }

                        function d(t) {
                            function o() {
                                n.$apply(function () {
                                    i.mdMenuCtrl.close(!0, {closeAll: !0})
                                })
                            }

                            function r(e, t) {
                                if (!e)return !1;
                                for (var n, o = 0; n = t[o]; ++o)for (var r, i = [n, "data-" + n, "x-" + n], a = 0; r = i[a]; ++a)if (e.hasAttribute(r))return !0;
                                return !1
                            }

                            var a = t.target;
                            do {
                                if (a == i.menuContentEl[0])return;
                                if (r(a, ["ng-click", "ng-href", "ui-sref"]) || "BUTTON" == a.nodeName || "MD-BUTTON" == a.nodeName) {
                                    var d = e.getClosest(a, "MD-MENU");
                                    a.hasAttribute("disabled") || d && d != i.parent[0] || o();
                                    break
                                }
                            } while (a = a.parentNode)
                        }

                        r.addClass("md-clickable"), i.backdrop && i.backdrop.on("click", o), i.menuContentEl.on("keydown", t), i.menuContentEl[0].addEventListener("click", d, !0);
                        var c = i.menuContentEl[0].querySelector("[md-menu-focus-target]");
                        if (!c && s) {
                            var s = i.menuContentEl[0].firstElementChild;
                            c = s.querySelector("[tabindex]") || s.firstElementChild
                        }
                        return c && c.focus(), function () {
                            r.removeClass("md-clickable"), i.backdrop && i.backdrop.off("click", o), i.menuContentEl.off("keydown", t), i.menuContentEl[0].removeEventListener("click", d, !0)
                        }
                    }

                    return u(i), o.inherit(i.menuContentEl, i.target), i.cleanupResizing = p(), i.hideBackdrop = h(n, r, i), d().then(function (e) {
                        return i.alreadyOpen = !0, i.cleanupInteraction = f(), e
                    })
                }

                function g(t, n, o, r) {
                    for (var i, a = e.getClosest(t.target, "MD-MENU-ITEM"), d = e.nodesToArray(n[0].children), c = d.indexOf(a), s = c + r; s >= 0 && s < d.length; s += r) {
                        var l = d[s].querySelector(".md-button");
                        if (i = b(l))break
                    }
                    return i
                }

                function b(e) {
                    return e && -1 != e.getAttribute("tabindex") ? (e.focus(), d[0].activeElement == e) : void 0
                }

                function E(e, t) {
                    t.preserveElement ? r(e).style.display = "none" : r(e).parentNode === r(t.parent) && r(t.parent).removeChild(r(e))
                }

                function v(t, o) {
                    function r(e) {
                        e.top = Math.max(Math.min(e.top, E.bottom - l.offsetHeight), E.top), e.left = Math.max(Math.min(e.left, E.right - l.offsetWidth), E.left)
                    }

                    function a() {
                        for (var e = 0; e < m.children.length; ++e)if ("none" != c.getComputedStyle(m.children[e]).display)return m.children[e]
                    }

                    var s, l = t[0], m = t[0].firstElementChild, u = m.getBoundingClientRect(), h = d[0].body, p = h.getBoundingClientRect(), f = c.getComputedStyle(m), g = o.target[0].querySelector("[md-menu-origin]") || o.target[0], b = g.getBoundingClientRect(), E = {
                        left: p.left + i,
                        top: Math.max(p.top, 0) + i,
                        bottom: Math.max(p.bottom, Math.max(p.top, 0) + p.height) - i,
                        right: p.right - i
                    }, v = {top: 0, left: 0, right: 0, bottom: 0}, M = {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }, $ = o.mdMenuCtrl.positionMode();
                    ("target" == $.top || "target" == $.left || "target-right" == $.left) && (s = a(), s && (s = s.firstElementChild || s, s = s.querySelector("[md-menu-align-target]") || s, v = s.getBoundingClientRect(), M = {
                        top: parseFloat(l.style.top || 0),
                        left: parseFloat(l.style.left || 0)
                    }));
                    var y = {}, A = "top ";
                    switch ($.top) {
                        case"target":
                            y.top = M.top + b.top - v.top;
                            break;
                        case"cascade":
                            y.top = b.top - parseFloat(f.paddingTop) - g.style.top;
                            break;
                        case"bottom":
                            y.top = b.top + b.height;
                            break;
                        default:
                            throw new Error('Invalid target mode "' + $.top + '" specified for md-menu on Y axis.')
                    }
                    switch ($.left) {
                        case"target":
                            y.left = M.left + b.left - v.left, A += "left";
                            break;
                        case"target-right":
                            y.left = b.right - u.width + (u.right - v.right), A += "right";
                            break;
                        case"cascade":
                            var C = b.right + u.width < E.right;
                            y.left = C ? b.right - g.style.left : b.left - g.style.left - u.width, A += C ? "left" : "right";
                            break;
                        case"left":
                            y.left = b.left, A += "left";
                            break;
                        default:
                            throw new Error('Invalid target mode "' + $.left + '" specified for md-menu on X axis.')
                    }
                    var T = o.mdMenuCtrl.offsets();
                    y.top += T.top, y.left += T.left, r(y);
                    var k = Math.round(100 * Math.min(b.width / l.offsetWidth, 1)) / 100, w = Math.round(100 * Math.min(b.height / l.offsetHeight, 1)) / 100;
                    return {
                        top: Math.round(y.top),
                        left: Math.round(y.left),
                        transform: o.alreadyOpen ? n : e.supplant("scale({0},{1})", [k, w]),
                        transformOrigin: A
                    }
                }

                var M = e.dom.animator;
                return {
                    parent: "body",
                    onShow: f,
                    onRemove: p,
                    hasBackdrop: !0,
                    disableParentScroll: !0,
                    skipCompile: !0,
                    preserveScope: !0,
                    skipHide: !0,
                    themable: !0
                }
            }

            function r(e) {
                return e instanceof t.element && (e = e[0]), e
            }

            var i = 8;
            return o.$inject = ["$mdUtil", "$mdTheming", "$mdConstant", "$document", "$window", "$q", "$$rAF", "$animateCss", "$animate"], e("$mdMenu").setDefaults({
                methods: ["target"],
                options: o
            })
        }

        t.module("material.components.menu").provider("$mdMenu", e), e.$inject = ["$$interimElementProvider"]
    }(), function () {
        function e(e, n, r, i, a, d, c) {
            this.$element = n, this.$attrs = r, this.$mdConstant = i, this.$mdUtil = d, this.$document = a, this.$scope = e, this.$timeout = c;
            var s = this;
            t.forEach(o, function (e) {
                s[e] = t.bind(s, s[e])
            })
        }

        t.module("material.components.menuBar").controller("MenuBarController", e);
        var o = ["handleKeyDown", "handleMenuHover", "scheduleOpenHoveredMenu", "cancelScheduledOpen"];
        e.$inject = ["$scope", "$element", "$attrs", "$mdConstant", "$document", "$mdUtil", "$timeout"], e.prototype.init = function () {
            var e = this.$element, o = this.$mdUtil, r = this.$scope, i = this;
            e.on("keydown", this.handleKeyDown), this.parentToolbar = o.getClosest(e, "MD-TOOLBAR"), r.$on("$mdMenuOpen", function (t, n) {
                -1 != i.getMenus().indexOf(n[0]) && (e[0].classList.add("md-open"), n[0].classList.add("md-open"), i.currentlyOpenMenu = n.controller("mdMenu"), i.currentlyOpenMenu.registerContainerProxy(i.handleKeyDown), i.enableOpenOnHover())
            }), r.$on("$mdMenuClose", function (t, r) {
                var a = i.getMenus();
                if (-1 != a.indexOf(r[0]) && (e[0].classList.remove("md-open"), r[0].classList.remove("md-open")), e[0].contains(r[0])) {
                    for (var d = r[0]; d && -1 == a.indexOf(d);)d = o.getClosest(d, "MD-MENU", !0);
                    d && (d.querySelector("button").focus(), i.currentlyOpenMenu = n, i.disableOpenOnHover(), i.setKeyboardMode(!0))
                }
            }), t.element(this.getMenus()).on("mouseenter", this.handleMenuHover), this.setKeyboardMode(!0)
        }, e.prototype.setKeyboardMode = function (e) {
            e ? this.$element[0].classList.add("md-keyboard-mode") : this.$element[0].classList.remove("md-keyboard-mode")
        }, e.prototype.enableOpenOnHover = function () {
            if (!this.openOnHoverEnabled) {
                this.openOnHoverEnabled = !0;
                var e;
                this.$element;
                (e = this.parentToolbar) && (e.dataset.mdRestoreStyle = e.getAttribute("style"), e.style.position = "relative", e.style.zIndex = 100)
            }
        }, e.prototype.handleMenuHover = function (e) {
            this.setKeyboardMode(!1), this.openOnHoverEnabled && this.scheduleOpenHoveredMenu(e)
        }, e.prototype.disableOpenOnHover = function () {
            if (this.openOnHoverEnabled) {
                this.openOnHoverEnabled = !1;
                var e;
                (e = this.parentToolbar) && e.setAttribute("style", e.dataset.mdRestoreStyle || "")
            }
        }, e.prototype.scheduleOpenHoveredMenu = function (e) {
            var n = t.element(e.currentTarget), o = n.controller("mdMenu");
            this.setKeyboardMode(!1), this.scheduleOpenMenu(o)
        }, e.prototype.scheduleOpenMenu = function (e) {
            var t = this, o = this.$timeout;
            e != t.currentlyOpenMenu && (o.cancel(t.pendingMenuOpen), t.pendingMenuOpen = o(function () {
                t.pendingMenuOpen = n, t.currentlyOpenMenu && t.currentlyOpenMenu.close(!0, {closeAll: !0}), e.open()
            }, 200, !1))
        }, e.prototype.handleKeyDown = function (e) {
            var n = this.$mdConstant.KEY_CODE, o = this.currentlyOpenMenu, r = o && o.isOpen;
            this.setKeyboardMode(!0);
            var i;
            switch (e.keyCode) {
                case n.DOWN_ARROW:
                    o ? o.focusMenuContainer() : this.openFocusedMenu(), i = !0;
                    break;
                case n.UP_ARROW:
                    o && o.close(), i = !0;
                    break;
                case n.LEFT_ARROW:
                    var a = this.focusMenu(-1);
                    if (r) {
                        var d = t.element(a).controller("mdMenu");
                        this.scheduleOpenMenu(d)
                    }
                    i = !0;
                    break;
                case n.RIGHT_ARROW:
                    var a = this.focusMenu(1);
                    if (r) {
                        var d = t.element(a).controller("mdMenu");
                        this.scheduleOpenMenu(d)
                    }
                    i = !0
            }
            i && (e && e.preventDefault && e.preventDefault(), e && e.stopImmediatePropagation && e.stopImmediatePropagation())
        }, e.prototype.focusMenu = function (e) {
            var t = this.getMenus(), n = this.getFocusedMenuIndex();
            -1 == n && (n = this.getOpenMenuIndex());
            var o = !1;
            return -1 == n ? n = 0 : (0 > e && n > 0 || e > 0 && n < t.length - e) && (n += e, o = !0), o ? (t[n].querySelector("button").focus(), t[n]) : void 0
        }, e.prototype.openFocusedMenu = function () {
            var e = this.getFocusedMenu();
            e && t.element(e).controller("mdMenu").open()
        }, e.prototype.getMenus = function () {
            var e = this.$element;
            return this.$mdUtil.nodesToArray(e[0].children).filter(function (e) {
                return "MD-MENU" == e.nodeName
            })
        }, e.prototype.getFocusedMenu = function () {
            return this.getMenus()[this.getFocusedMenuIndex()]
        }, e.prototype.getFocusedMenuIndex = function () {
            var e = this.$mdUtil, t = (this.$element, e.getClosest(this.$document[0].activeElement, "MD-MENU"));
            if (!t)return -1;
            var n = this.getMenus().indexOf(t);
            return n
        }, e.prototype.getOpenMenuIndex = function () {
            for (var e = this.getMenus(), t = 0; t < e.length; ++t)if (e[t].classList.contains("md-open"))return t;
            return -1
        }
    }(), function () {
        function e(e, n) {
            return {
                restrict: "E", require: "mdMenuBar", controller: "MenuBarController", compile: function (o, r) {
                    return r.ariaRole || o[0].setAttribute("role", "menubar"), t.forEach(o[0].children, function (n) {
                        if ("MD-MENU" == n.nodeName) {
                            n.hasAttribute("md-position-mode") || n.setAttribute("md-position-mode", "left bottom"), n.setAttribute("role", "menu");
                            var o = e.nodesToArray(n.querySelectorAll("md-menu-content"));
                            t.forEach(o, function (e) {
                                e.classList.add("md-menu-bar-menu"), e.classList.add("md-dense"), e.hasAttribute("width") || e.setAttribute("width", 5)
                            })
                        }
                    }), function (e, t, o, r) {
                        n(e, t), r.init()
                    }
                }
            }
        }

        t.module("material.components.menuBar").directive("mdMenuBar", e), e.$inject = ["$mdUtil", "$mdTheming"]
    }(), function () {
        function e() {
            return {
                restrict: "E", compile: function (e, t) {
                    t.role || e[0].setAttribute("role", "separator")
                }
            }
        }

        t.module("material.components.menuBar").directive("mdMenuDivider", e)
    }(), function () {
        function e(e, t, n) {
            this.$element = t, this.$attrs = n, this.$scope = e
        }

        t.module("material.components.menuBar").controller("MenuItemController", e), e.$inject = ["$scope", "$element", "$attrs"], e.prototype.init = function (e) {
            var t = this.$element, n = this.$attrs;
            this.ngModel = e, ("checkbox" == n.type || "radio" == n.type) && (this.mode = n.type, this.iconEl = t[0].children[0], this.buttonEl = t[0].children[1], e && this.initClickListeners())
        }, e.prototype.initClickListeners = function () {
            function e() {
                if ("radio" == d) {
                    var e = i.ngValue ? r.$eval(i.ngValue) : i.value;
                    return o.$modelValue == e
                }
                return o.$modelValue
            }

            function n(e) {
                e ? s.off("click", l) : s.on("click", l)
            }

            var o = this.ngModel, r = this.$scope, i = this.$attrs, a = this.$element, d = this.mode;
            this.handleClick = t.bind(this, this.handleClick);
            var c = this.iconEl, s = t.element(this.buttonEl), l = this.handleClick;
            i.$observe("disabled", n), n(i.disabled), o.$render = function () {
                e() ? (c.style.display = "", a.attr("aria-checked", "true")) : (c.style.display = "none", a.attr("aria-checked", "false"))
            }, r.$$postDigest(o.$render)
        }, e.prototype.handleClick = function (e) {
            var t, n = this.mode, o = this.ngModel, r = this.$attrs;
            "checkbox" == n ? t = !o.$modelValue : "radio" == n && (t = r.ngValue ? this.$scope.$eval(r.ngValue) : r.value), o.$setViewValue(t), o.$render()
        }
    }(), function () {
        function e() {
            return {
                require: ["mdMenuItem", "?ngModel"], compile: function (e, n) {
                    function o(t, n) {
                        e[0].hasAttribute(t) || e[0].setAttribute(t, n)
                    }

                    function r(t) {
                        if (e[0].hasAttribute(t)) {
                            var n = e[0].getAttribute(t);
                            a[0].setAttribute(t, n), e[0].removeAttribute(t)
                        }
                    }

                    if ("checkbox" == n.type || "radio" == n.type) {
                        var i = e[0].textContent, a = t.element('<md-button type="button"></md-button>');
                        a.html(i), a.attr("tabindex", "0"), e.html(""), e.append(t.element('<md-icon md-svg-icon="check"></md-icon>')), e.append(a), e[0].classList.add("md-indent"), o("role", "checkbox" == n.type ? "menuitemcheckbox" : "menuitemradio"), t.forEach(["ng-disabled"], r)
                    } else o("role", "menuitem");
                    return function (e, t, n, o) {
                        var r = o[0], i = o[1];
                        r.init(i)
                    }
                }, controller: "MenuItemController"
            }
        }

        t.module("material.components.menuBar").directive("mdMenuItem", e)
    }(), function () {
        function e() {
            function e(e, n, o, r) {
                if (r) {
                    var i = r.getTabElementIndex(n), a = n.find("md-tab-body").eq(0).remove(), d = n.find("md-tab-label").eq(0).remove(), c = r.insertTab({
                        scope: e,
                        parent: e.$parent,
                        index: i,
                        element: n,
                        template: a.html(),
                        label: d.html()
                    }, i);
                    e.select = e.select || t.noop, e.deselect = e.deselect || t.noop, e.$watch("active", function (e) {
                        e && r.select(c.getIndex())
                    }), e.$watch("disabled", function () {
                        r.refreshIndex()
                    }), e.$watch(function () {
                        return r.getTabElementIndex(n)
                    }, function (e) {
                        c.index = e, r.updateTabOrder()
                    }), e.$on("$destroy", function () {
                        r.removeTab(c)
                    })
                }
            }

            return {
                require: "^?mdTabs",
                terminal: !0,
                compile: function (n, o) {
                    var r = n.find("md-tab-label"), i = n.find("md-tab-body");
                    if (0 == r.length && (r = t.element("<md-tab-label></md-tab-label>"), o.label ? r.text(o.label) : r.append(n.contents())), 0 == i.length) {
                        var a = n.contents().detach();
                        i = t.element("<md-tab-body></md-tab-body>"), i.append(a)
                    }
                    return n.append(r), i.html() && n.append(i), e
                },
                scope: {
                    active: "=?mdActive",
                    disabled: "=?ngDisabled",
                    select: "&?mdOnSelect",
                    deselect: "&?mdOnDeselect"
                }
            }
        }

        t.module("material.components.tabs").directive("mdTab", e)
    }(), function () {
        function e() {
            return {
                require: "^?mdTabs", link: function (e, t, n, o) {
                    o && o.attachRipple(e, t)
                }
            }
        }

        t.module("material.components.tabs").directive("mdTabItem", e)
    }(), function () {
        function e() {
            return {terminal: !0}
        }

        t.module("material.components.tabs").directive("mdTabLabel", e)
    }(), function () {
        function e(e) {
            return {
                restrict: "A", compile: function (t, n) {
                    var o = e(n.mdTabScroll, null, !0);
                    return function (e, t) {
                        t.on("mousewheel", function (t) {
                            e.$apply(function () {
                                o(e, {$event: t})
                            })
                        })
                    }
                }
            }
        }

        t.module("material.components.tabs").directive("mdTabScroll", e), e.$inject = ["$parse"]
    }(), function () {
        function e(e, n, o, r, i, a, d, c, s, l) {
            function m() {
                ae.selectedIndex = ae.selectedIndex || 0, u(), p(), h(), l(n), a.nextTick(function () {
                    te(), Q(), ne(), ae.tabs[ae.selectedIndex] && ae.tabs[ae.selectedIndex].scope.select(), me = !0, W()
                })
            }

            function u() {
                var e = c.$mdTabsTemplate, n = t.element(ce.data);
                n.html(e), s(n.contents())(ae.parent), delete c.$mdTabsTemplate
            }

            function h() {
                t.element(o).on("resize", D), e.$on("$destroy", b)
            }

            function p() {
                e.$watch("$mdTabsCtrl.selectedIndex", T)
            }

            function f(e, t) {
                var n = c.$normalize("md-" + e);
                t && V(e, t), c.$observe(n, function (t) {
                    ae[e] = t
                })
            }

            function g(e, t) {
                function n(t) {
                    ae[e] = "false" !== t
                }

                var o = c.$normalize("md-" + e);
                t && V(e, t), c.hasOwnProperty(o) && n(c[o]), c.$observe(o, n)
            }

            function b() {
                le = !0, t.element(o).off("resize", D)
            }

            function E(e) {
                t.element(ce.wrapper).toggleClass("md-stretch-tabs", U()), ne()
            }

            function v(e) {
                ae.shouldCenterTabs = q()
            }

            function M(e, t) {
                e !== t && a.nextTick(ae.updateInkBarStyles)
            }

            function $(e, t) {
                e !== t && (ae.maxTabWidth = Y(), ae.shouldCenterTabs = q(), a.nextTick(function () {
                    ae.maxTabWidth = Y(), Q(ae.selectedIndex)
                }))
            }

            function y(e) {
                n[e ? "removeClass" : "addClass"]("md-no-tab-content")
            }

            function A(n) {
                var o = ae.shouldCenterTabs ? "" : "-" + n + "px";
                t.element(ce.paging).css(r.CSS.TRANSFORM, "translate3d(" + o + ", 0, 0)"), e.$broadcast("$mdTabsPaginationChanged")
            }

            function C(e, t) {
                e !== t && ce.tabs[e] && (Q(), X())
            }

            function T(t, n) {
                t !== n && (ae.selectedIndex = j(t), ae.lastSelectedIndex = n, ae.updateInkBarStyles(), te(), Q(t), e.$broadcast("$mdTabsChanged"), ae.tabs[n] && ae.tabs[n].scope.deselect(), ae.tabs[t] && ae.tabs[t].scope.select())
            }

            function k(e) {
                var t = n[0].getElementsByTagName("md-tab");
                return Array.prototype.indexOf.call(t, e[0])
            }

            function w() {
                w.watcher || (w.watcher = e.$watch(function () {
                    a.nextTick(function () {
                        w.watcher && n.prop("offsetParent") && (w.watcher(), w.watcher = null, D())
                    }, !1)
                }))
            }

            function x(e) {
                switch (e.keyCode) {
                    case r.KEY_CODE.LEFT_ARROW:
                        e.preventDefault(), G(-1, !0);
                        break;
                    case r.KEY_CODE.RIGHT_ARROW:
                        e.preventDefault(), G(1, !0);
                        break;
                    case r.KEY_CODE.SPACE:
                    case r.KEY_CODE.ENTER:
                        e.preventDefault(), de || (ae.selectedIndex = ae.focusIndex)
                }
                ae.lastClick = !1
            }

            function N(e) {
                de || (ae.focusIndex = ae.selectedIndex = e), ae.lastClick = !0, a.nextTick(function () {
                    ae.tabs[e].element.triggerHandler("click")
                }, !1)
            }

            function _(e) {
                ae.shouldPaginate && (e.preventDefault(), ae.offsetLeft = re(ae.offsetLeft - e.wheelDelta))
            }

            function H() {
                var e, t, n = ce.canvas.clientWidth, o = n + ae.offsetLeft;
                for (e = 0; e < ce.tabs.length && (t = ce.tabs[e], !(t.offsetLeft + t.offsetWidth > o)); e++);
                ae.offsetLeft = re(t.offsetLeft)
            }

            function S() {
                var e, t;
                for (e = 0; e < ce.tabs.length && (t = ce.tabs[e], !(t.offsetLeft + t.offsetWidth >= ae.offsetLeft)); e++);
                ae.offsetLeft = re(t.offsetLeft + t.offsetWidth - ce.canvas.clientWidth)
            }

            function D() {
                ae.lastSelectedIndex = ae.selectedIndex, ae.offsetLeft = re(ae.offsetLeft), a.nextTick(function () {
                    ae.updateInkBarStyles(), W()
                })
            }

            function O(e) {
                t.element(ce.inkBar).toggleClass("ng-hide", e)
            }

            function I(e) {
                n.toggleClass("md-dynamic-height", e)
            }

            function R(e) {
                if (!le) {
                    var t = ae.selectedIndex, n = ae.tabs.splice(e.getIndex(), 1)[0];
                    ee(), ae.selectedIndex === t && (n.scope.deselect(), ae.tabs[ae.selectedIndex] && ae.tabs[ae.selectedIndex].scope.select()), a.nextTick(function () {
                        W(), ae.offsetLeft = re(ae.offsetLeft)
                    })
                }
            }

            function L(e, n) {
                var o = me, r = {
                    getIndex: function () {
                        return ae.tabs.indexOf(i)
                    }, isActive: function () {
                        return this.getIndex() === ae.selectedIndex
                    }, isLeft: function () {
                        return this.getIndex() < ae.selectedIndex
                    }, isRight: function () {
                        return this.getIndex() > ae.selectedIndex
                    }, shouldRender: function () {
                        return !ae.noDisconnect || this.isActive()
                    }, hasFocus: function () {
                        return !ae.lastClick && ae.hasFocus && this.getIndex() === ae.focusIndex
                    }, id: a.nextUid()
                }, i = t.extend(r, e);
                return t.isDefined(n) ? ae.tabs.splice(n, 0, i) : ae.tabs.push(i), Z(), J(), a.nextTick(function () {
                    W(), o && ae.autoselect && a.nextTick(function () {
                        a.nextTick(function () {
                            N(ae.tabs.indexOf(i))
                        })
                    })
                }), i
            }

            function P() {
                var e = {};
                return e.wrapper = n[0].getElementsByTagName("md-tabs-wrapper")[0], e.data = n[0].getElementsByTagName("md-tab-data")[0], e.canvas = e.wrapper.getElementsByTagName("md-tabs-canvas")[0], e.paging = e.canvas.getElementsByTagName("md-pagination-wrapper")[0], e.tabs = e.paging.getElementsByTagName("md-tab-item"), e.dummies = e.canvas.getElementsByTagName("md-dummy-tab"), e.inkBar = e.paging.getElementsByTagName("md-ink-bar")[0], e.contentsWrapper = n[0].getElementsByTagName("md-tabs-content-wrapper")[0], e.contents = e.contentsWrapper.getElementsByTagName("md-tab-content"), e
            }

            function F() {
                return ae.offsetLeft > 0
            }

            function B() {
                var e = ce.tabs[ce.tabs.length - 1];
                return e && e.offsetLeft + e.offsetWidth > ce.canvas.clientWidth + ae.offsetLeft
            }

            function U() {
                switch (ae.stretchTabs) {
                    case"always":
                        return !0;
                    case"never":
                        return !1;
                    default:
                        return !ae.shouldPaginate && o.matchMedia("(max-width: 600px)").matches
                }
            }

            function q() {
                return ae.centerTabs && !ae.shouldPaginate
            }

            function z() {
                if (ae.noPagination || !me)return !1;
                var e = n.prop("clientWidth");
                return t.forEach(ce.dummies, function (t) {
                    e -= t.offsetWidth
                }), 0 > e
            }

            function j(e) {
                if (-1 === e)return -1;
                var t, n, o = Math.max(ae.tabs.length - e, e);
                for (t = 0; o >= t; t++) {
                    if (n = ae.tabs[e + t], n && n.scope.disabled !== !0)return n.getIndex();
                    if (n = ae.tabs[e - t], n && n.scope.disabled !== !0)return n.getIndex()
                }
                return e
            }

            function V(e, t, n) {
                Object.defineProperty(ae, e, {
                    get: function () {
                        return n
                    }, set: function (e) {
                        var o = n;
                        n = e, t && t(e, o)
                    }
                })
            }

            function W() {
                ae.shouldPaginate = z()
            }

            function Y() {
                return n.prop("clientWidth")
            }

            function K() {
                var e = ae.tabs[ae.selectedIndex], t = ae.tabs[ae.focusIndex];
                ae.tabs = ae.tabs.sort(function (e, t) {
                    return e.index - t.index
                }), ae.selectedIndex = ae.tabs.indexOf(e), ae.focusIndex = ae.tabs.indexOf(t)
            }

            function G(e, t) {
                var n, o = t ? "focusIndex" : "selectedIndex", r = ae[o];
                for (n = r + e; ae.tabs[n] && ae.tabs[n].scope.disabled; n += e);
                ae.tabs[n] && (ae[o] = n)
            }

            function X() {
                ce.dummies[ae.focusIndex].focus()
            }

            function Q(e) {
                if (null == e && (e = ae.focusIndex), ce.tabs[e] && !ae.shouldCenterTabs) {
                    var t = ce.tabs[e], n = t.offsetLeft, o = t.offsetWidth + n;
                    ae.offsetLeft = Math.max(ae.offsetLeft, re(o - ce.canvas.clientWidth + 64)), ae.offsetLeft = Math.min(ae.offsetLeft, re(n))
                }
            }

            function Z() {
                se.forEach(function (e) {
                    a.nextTick(e)
                }), se = []
            }

            function J() {
                var e = !1;
                t.forEach(ae.tabs, function (t) {
                    t.template && (e = !0)
                }), ae.hasContent = e
            }

            function ee() {
                ae.selectedIndex = j(ae.selectedIndex), ae.focusIndex = j(ae.focusIndex)
            }

            function te() {
                if (!ae.dynamicHeight)return n.css("height", "");
                if (!ae.tabs.length)return se.push(te);
                var e = ce.contents[ae.selectedIndex], t = e ? e.offsetHeight : 0, o = ce.wrapper.offsetHeight, r = t + o, i = n.prop("clientHeight");
                if (i !== r) {
                    de = !0;
                    var c = {height: i + "px"}, s = {height: r + "px"};
                    n.css(c), d(n, {
                        from: c,
                        to: s,
                        easing: "cubic-bezier(0.35, 0, 0.25, 1)",
                        duration: .5
                    }).start().done(function () {
                        n.css({transition: "none", height: ""}), a.nextTick(function () {
                            n.css("transition", "")
                        }), de = !1
                    })
                }
            }

            function ne() {
                if (!ce.tabs[ae.selectedIndex])return void t.element(ce.inkBar).css({left: "auto", right: "auto"});
                if (!ae.tabs.length)return se.push(ae.updateInkBarStyles);
                if (!n.prop("offsetParent"))return w();
                var e, o = ae.selectedIndex, r = ce.paging.offsetWidth, i = ce.tabs[o], d = i.offsetLeft, c = r - d - i.offsetWidth;
                ae.shouldCenterTabs && (e = Array.prototype.slice.call(ce.tabs).reduce(function (e, t) {
                    return e + t.offsetWidth
                }, 0), r > e && a.nextTick(ne, !1)), oe(), t.element(ce.inkBar).css({left: d + "px", right: c + "px"})
            }

            function oe() {
                var e = ae.selectedIndex, n = ae.lastSelectedIndex, o = t.element(ce.inkBar);
                t.isNumber(n) && o.toggleClass("md-left", n > e).toggleClass("md-right", e > n)
            }

            function re(e) {
                if (!ce.tabs.length || !ae.shouldPaginate)return 0;
                var t = ce.tabs[ce.tabs.length - 1], n = t.offsetLeft + t.offsetWidth;
                return e = Math.max(0, e), e = Math.min(n - ce.canvas.clientWidth, e)
            }

            function ie(e, n) {
                var o = {colorElement: t.element(ce.inkBar)};
                i.attach(e, n, o)
            }

            var ae = this, de = !1, ce = P(), se = [], le = !1, me = !1;
            f("stretchTabs", E), V("focusIndex", C, ae.selectedIndex || 0), V("offsetLeft", A, 0), V("hasContent", y, !1), V("maxTabWidth", M, Y()), V("shouldPaginate", $, !1), g("noInkBar", O), g("dynamicHeight", I), g("noPagination"), g("swipeContent"), g("noDisconnect"), g("autoselect"), g("centerTabs", v), g("enableDisconnect"), ae.scope = e, ae.parent = e.$parent, ae.tabs = [], ae.lastSelectedIndex = null, ae.hasFocus = !1, ae.lastClick = !0, ae.shouldCenterTabs = q(), ae.updatePagination = a.debounce(W, 100), ae.redirectFocus = X, ae.attachRipple = ie, ae.insertTab = L, ae.removeTab = R, ae.select = N, ae.scroll = _, ae.nextPage = H, ae.previousPage = S, ae.keydown = x, ae.canPageForward = B, ae.canPageBack = F, ae.refreshIndex = ee, ae.incrementIndex = G, ae.getTabElementIndex = k, ae.updateInkBarStyles = a.debounce(ne, 100), ae.updateTabOrder = a.debounce(K, 100), m()
        }

        t.module("material.components.tabs").controller("MdTabsController", e), e.$inject = ["$scope", "$element", "$window", "$mdConstant", "$mdTabInkRipple", "$mdUtil", "$animateCss", "$attrs", "$compile", "$mdTheming"]
    }(), function () {
        function e() {
            return {
                scope: {selectedIndex: "=?mdSelected"}, template: function (e, t) {
                    return t.$mdTabsTemplate = e.html(), '<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-next-button> <md-tabs-canvas tabindex="0" aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" style="max-width: {{ $mdTabsCtrl.maxTabWidth + \'px\' }}" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <div class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </div> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0"> <md-tab-content id="tab-content-{{::tab.id}}" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="$mdTabsCtrl.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>';
                }, controller: "MdTabsController", controllerAs: "$mdTabsCtrl", bindToController: !0
            }
        }

        t.module("material.components.tabs").directive("mdTabs", e)
    }(), function () {
        function e(e, t) {
            function n(n, o, r, i) {
                function a() {
                    n.$watch("connected", function (e) {
                        e === !1 ? d() : c()
                    }), n.$on("$destroy", c)
                }

                function d() {
                    i.enableDisconnect && t.disconnectScope(s)
                }

                function c() {
                    i.enableDisconnect && t.reconnectScope(s)
                }

                if (i) {
                    var s = i.enableDisconnect ? n.compileScope.$new() : n.compileScope;
                    return o.html(n.template), e(o.contents())(s), o.on("DOMSubtreeModified", function () {
                        i.updatePagination(), i.updateInkBarStyles()
                    }), t.nextTick(a)
                }
            }

            return {
                restrict: "A",
                link: n,
                scope: {template: "=mdTabsTemplate", connected: "=?mdConnectedIf", compileScope: "=mdScope"},
                require: "^?mdTabs"
            }
        }

        t.module("material.components.tabs").directive("mdTabsTemplate", e), e.$inject = ["$compile", "$mdUtil"]
    }(), function () {
        t.module("material.core").constant("$MD_THEME_CSS", "md-autocomplete.md-THEME_NAME-theme {  background: '{{background-50}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled] {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions-container.md-THEME_NAME-theme {  background: '{{background-50}}'; }  .md-autocomplete-suggestions-container.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop {  background-color: '{{background-900-0.0}}'; }  md-backdrop.md-opaque.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):hover {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme:not([disabled]).md-focused {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover, .md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {  background-color: transparent; }a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab md-icon, .md-button.md-THEME_NAME-theme.md-fab md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-primary, .md-button.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }  a.md-button.md-THEME_NAME-theme.md-primary.md-raised, a.md-button.md-THEME_NAME-theme.md-primary.md-fab, .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {    color: '{{primary-contrast}}';    background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {      color: '{{primary-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {      background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {      background-color: '{{primary-600}}'; }  a.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {    color: '{{primary-color}}'; }a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-raised, .md-button.md-THEME_NAME-theme.md-raised {  color: '{{background-contrast}}';  background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon {    color: '{{background-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {    background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {    background-color: '{{background-200}}'; }a.md-button.md-THEME_NAME-theme.md-warn, .md-button.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }  a.md-button.md-THEME_NAME-theme.md-warn.md-raised, a.md-button.md-THEME_NAME-theme.md-warn.md-fab, .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {    color: '{{warn-contrast}}';    background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {      color: '{{warn-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {      background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {      background-color: '{{warn-700}}'; }  a.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {    color: '{{warn-color}}'; }a.md-button.md-THEME_NAME-theme.md-accent, .md-button.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-accent.md-raised, a.md-button.md-THEME_NAME-theme.md-accent.md-fab, .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {    color: '{{accent-contrast}}';    background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {      background-color: '{{accent-700}}'; }  a.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {    color: '{{accent-color}}'; }a.md-button.md-THEME_NAME-theme[disabled], a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], a.md-button.md-THEME_NAME-theme.md-accent[disabled], a.md-button.md-THEME_NAME-theme.md-warn[disabled], .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-accent[disabled], .md-button.md-THEME_NAME-theme.md-warn[disabled] {  color: '{{foreground-3}}';  cursor: not-allowed; }  a.md-button.md-THEME_NAME-theme[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon, .md-button.md-THEME_NAME-theme[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {    color: '{{foreground-3}}'; }a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {  background-color: '{{foreground-4}}'; }a.md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme[disabled] {  background-color: transparent; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-card.md-THEME_NAME-theme {  background-color: '{{background-color}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{background-300}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }md-chips.md-THEME_NAME-theme .md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme .md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme .md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-content.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }/** Theme styles for mdCalendar. */.md-calendar.md-THEME_NAME-theme {  color: '{{foreground-1}}'; }  .md-calendar.md-THEME_NAME-theme tr:last-child td {    border-bottom-color: '{{background-200}}'; }.md-THEME_NAME-theme .md-calendar-day-header {  background: '{{background-hue-1}}';  color: '{{foreground-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {  border: 1px solid '{{primary-500}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {  color: '{{primary-500-0.6}}'; }.md-THEME_NAME-theme .md-calendar-date.md-focus .md-calendar-date-selection-indicator {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator, .md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {  background: '{{primary-500}}';  color: '{{primary-500-contrast}}';  border-color: transparent; }.md-THEME_NAME-theme .md-calendar-date-disabled, .md-THEME_NAME-theme .md-calendar-month-label-disabled {  color: '{{foreground-3}}'; }/** Theme styles for mdDatepicker. */md-datepicker.md-THEME_NAME-theme {  background: '{{background-color}}'; }.md-THEME_NAME-theme .md-datepicker-input {  color: '{{background-contrast}}';  background: '{{background-color}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder, .md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-input-container {  border-bottom-color: '{{background-300}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {    border-bottom-color: '{{primary-500}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid {    border-bottom-color: '{{warn-500}}'; }.md-THEME_NAME-theme .md-datepicker-calendar-pane {  border-color: '{{background-300}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle {  border-top-color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button:hover .md-datepicker-expand-triangle {  border-top-color: '{{foreground-2}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  fill: '{{primary-500}}'; }.md-THEME_NAME-theme .md-datepicker-calendar, .md-THEME_NAME-theme .md-datepicker-input-mask-opaque {  background: '{{background-color}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-color}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme ng-messages :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [ng-messages] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme data-ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme x-ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [data-ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [x-ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [ng-message-exp] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [data-ng-message-exp] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [x-ng-message-exp] :not(.md-char-counter) {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid.md-input-focused label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled], [disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-3}}' 0%, '{{foreground-3}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-3}}' 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-list.md-THEME_NAME-theme md-list-item button {  background-color: '{{background-color}}'; }  md-list.md-THEME_NAME-theme md-list-item button.md-button:not([disabled]):hover {    background-color: '{{background-color}}'; }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{foreground-4}}'; }md-menu-bar.md-THEME_NAME-theme > button.md-button {  color: '{{foreground-2}}';  border-radius: 2px; }md-menu-bar.md-THEME_NAME-theme md-menu.md-open > button, md-menu-bar.md-THEME_NAME-theme md-menu > button:focus {  outline: none;  background: '{{background-200}}'; }md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover > button {  background-color: '{{ background-500-0.2}}'; }md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover, md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus {  background: transparent; }md-menu-content.md-THEME_NAME-theme .md-menu > .md-button:after {  color: '{{foreground-2}}'; }md-menu-content.md-THEME_NAME-theme .md-menu.md-open > .md-button {  background-color: '{{ background-500-0.2}}'; }md-toolbar.md-THEME_NAME-theme.md-menu-toolbar {  background-color: '{{background-color}}';  color: '{{foreground-1}}'; }  md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler {    background-color: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon {      color: '{{primary-contrast}}'; }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled], md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked:not([disabled]).md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  border-bottom-color: transparent;  background-image: linear-gradient(to right, '{{foreground-3}}' 0%, '{{foreground-3}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-3}}' 100%); }md-select.md-THEME_NAME-theme .md-select-value {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme.ng-invalid.ng-dirty .md-select-value {  color: '{{warn-500}}' !important;  border-bottom-color: '{{warn-500}}' !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-option[disabled] {  color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  color: '{{primary-500}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    color: '{{primary-600}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    color: '{{accent-500}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      color: '{{accent-600}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-toast.md-THEME_NAME-theme {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{accent-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{primary-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{warn-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{primary-contrast}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{accent-contrast}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{warn-contrast}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }");
    }()
}(window, window.angular);