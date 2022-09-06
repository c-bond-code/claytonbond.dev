"use strict";
function AutoTyping(e1) {
    let t, i1 = 0, l1 = 0, n = 0, s1 = !1, o = 1, p1 = null, r = 0, y = null;
    null != e1.id ? (null != e1.typeText && Array.isArray(e1.typeText) || (console.log('*AutoTyping* : (option "typeText") Must add Array vith string/s!'), e1.typeText = [
        "Welcome to AutoTyping"
    ]), null != e1.textColor && "string" == typeof e1.textColor || (e1.textColor = "#000"), null != e1.typeSpeed && "number" == typeof e1.typeSpeed || (e1.typeSpeed = 100), null != e1.typeRandom && 0 != e1.typeRandom && "boolean" == typeof e1.typeRandom || (e1.typeRandom = !1), null != e1.typeDelay && "number" == typeof e1.typeDelay || (e1.typeDelay = 100), null != e1.cursor && "string" == typeof e1.cursor || (e1.cursor = "|"), null != e1.cursorColor && "string" == typeof e1.cursorColor || (e1.cursorColor = "#000"), null != e1.cursorSpeed && "number" == typeof e1.cursorSpeed || (e1.cursorSpeed = 300), null != e1.deleteSpeed && "number" == typeof e1.deleteSpeed || (e1.deleteSpeed = 50), null != e1.deleteDelay && "number" == typeof e1.deleteDelay || (e1.deleteDelay = 2e3), null != e1.textDeleteOptions && "object" == typeof e1.textDeleteOptions ? s1 = !0 : null != e1.textDeleteOptions && "object" != typeof e1.textDeleteOptions ? (console.log('*AutoTyping* : (option "textDeleteOptions") Must be Object!'), e1.textDeleteOptions = null) : e1.textDeleteOptions = null, null != e1.callBack && "object" == typeof e1.callBack ? (p1 = e1.callBack.method, null != e1.callBack.counter && "number" == typeof e1.callBack.counter && (y = e1.callBack.counter)) : null != e1.callBack && "object" != typeof e1.callBack && console.log('*AutoTyping* : (option "callBack") Must be Object!'), null == e1.typeInfinity || 1 == e1.typeInfinity || "boolean" != typeof e1.typeInfinity ? e1.typeInfinity = !0 : e1.typeInfinity = !1, this.typingElement = document.querySelector("#" + e1.id), this.typingArea = this.typingElement.appendChild(document.createElement("span")), this.cursor = this.typingElement.appendChild(document.createElement("span")), this.typeSpeed = e1.typeSpeed, this.typeSpeedRandom = e1.typeRandom, this.typingArea.style.color = e1.textColor, this.cursor.style.color = e1.cursorColor, this.cursor.innerHTML = e1.cursor, this.cursorSpeed = e1.cursorSpeed, this.typeText = e1.typeText, this.deleteSpeed = e1.deleteSpeed, this.deleteDelay = e1.deleteDelay, this.typeDelay = e1.typeDelay, this.typeInfinity = e1.typeInfinity, this.callBack = p1, this.userCounter = y, this.deleteOptions = e1.textDeleteOptions, this.helpingElement = this.typingElement.appendChild(document.createElement("span")), this.helpingElement.innerHTML = ".", this.helpingElement.style.visibility = "hidden", this.init = function() {
        let p = (function() {
            r && this.callBack && (r = 0, this.callBack(this.userCounter), "number" == typeof this.userCounter && (this.userCounter > 0 ? this.userCounter-- : this.userCounter = y));
            clearInterval(t), this.cursor.style.visibility = "visible";
            let u = [], h = this.typeText[i1].split("");
            s1 && (n = this.typeText.indexOf(this.typeText[l1]));
            ++i1 == this.typeText.length && (i1 = 0, o = this.typeInfinity ? 1 : 0);
            let c = (function() {
                let i = h.shift();
                u.push(i), this.typingArea.innerHTML += i, this.typeSpeedRandom ? this.typeSpeed += Math.floor(200 * Math.random()) : this.typeSpeed;
                let l = setTimeout(c, this.typeSpeed);
                if (this.typeSpeed = e1.typeSpeed, 0 == h.length) {
                    clearTimeout(l);
                    let e = 0, i = (function() {
                        0 == e ? (this.cursor.style.visibility = "hidden", e = 1) : (this.cursor.style.visibility = "visible", e = 0);
                    }).bind(this);
                    t = setInterval(i, this.cursorSpeed), setTimeout(d, this.deleteDelay);
                }
            }).bind(this);
            c();
            let d = (function() {
                clearInterval(t), this.cursor.style.visibility = "visible", u.pop();
                let e = "";
                for(let t1 = 0; t1 < u.length; t1++)e += u[t1];
                if (this.typingArea.innerHTML = e, s1 && n == l1) {
                    for(let e in this.deleteOptions)if (e == n && this.deleteOptions[e].deleteToChar == u.length) return h = this.deleteOptions[e].continueThis.split(""), n++, void setTimeout(c, this.typeSpeedRandom ? this.typeSpeed += Math.floor(200 * Math.random()) : this.typeSpeed);
                }
                let i = setTimeout(d, this.deleteSpeed);
                if (0 == u.length) {
                    clearTimeout(i);
                    let e = 0, s = (function() {
                        0 == e ? (this.cursor.style.visibility = "hidden", e = 1) : (this.cursor.style.visibility = "visible", e = 0);
                    }).bind(this);
                    if (t = setInterval(s, this.cursorSpeed), !this.typeInfinity && !o) return clearInterval(t), void (this.cursor.style.visibility = "hidden");
                    this.callBack && r++, n = ++l1, l1 == this.typeText.length && (l1 = 0), setTimeout(p, this.typeDelay);
                }
            }).bind(this);
        }).bind(this);
        return p(), this;
    }, this.stop = function() {
        this.typeInfinity = !1;
    }) : this.init = function() {
        console.log('*AutoTyping* : (option "id") Must add element id!');
    };
}

//# sourceMappingURL=index.f2d4b5df.js.map
