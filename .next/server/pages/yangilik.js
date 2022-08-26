(() => {
var exports = {};
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 1150:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Yangiliklar_main__Cr3Of",
	"title": "Yangiliklar_title__azVb7",
	"desc": "Yangiliklar_desc__EKpsd",
	"boxHeader": "Yangiliklar_boxHeader__w03ob",
	"boxBody": "Yangiliklar_boxBody__7MIe6",
	"flexClass": "Yangiliklar_flexClass__y_su_",
	"ppp": "Yangiliklar_ppp__h2Txd",
	"parent": "Yangiliklar_parent__FS1Bg",
	"box": "Yangiliklar_box__XN05q"
};


/***/ }),

/***/ 4603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ yangilik),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/Yangiliklar.module.css
var Yangiliklar_module = __webpack_require__(1150);
var Yangiliklar_module_default = /*#__PURE__*/__webpack_require__.n(Yangiliklar_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./component/YangilikSection.js





const YangilikSection = ({ data  })=>{
    const { locale  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (Yangiliklar_module_default()).YangilikSection,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Yangiliklar_module_default()).container,
            children: [
                locale === "uz-UZ" ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (Yangiliklar_module_default()).main,
                    children: "Yangiliklar"
                }) : locale === "ru-RU" ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (Yangiliklar_module_default()).main,
                    children: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (Yangiliklar_module_default()).main,
                    children: "News"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Yangiliklar_module_default()).parent,
                    children: data.filter((p)=>p.languages_code === locale && p.news_id
                    ).map((el)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Yangiliklar_module_default()).box,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Yangiliklar_module_default()).boxHeader,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `https://admin.uzbekvoice.ai/assets/${el.news_image}`,
                                        alt: el.news_image
                                    }, el.id)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Yangiliklar_module_default()).boxBody,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: (Yangiliklar_module_default()).title,
                                            children: el.news_title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            dangerouslySetInnerHTML: {
                                                __html: el.news_content.split(" ", 20).join(" ")
                                            },
                                            className: (Yangiliklar_module_default()).desc
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (Yangiliklar_module_default()).flexClass,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `/yangilik/${el.news_id}`,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        children: [
                                                            locale === "uz-UZ" ? "Batafsil" : locale === "ru-RU" ? "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435" : "Read more",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/chevron-right.svg"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: (Yangiliklar_module_default()).ppp,
                                                    children: el.data_created.slice(0, 10)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, el.id);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const component_YangilikSection = (YangilikSection);

;// CONCATENATED MODULE: ./pages/yangilik/index.js



function yangilik({ data  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(component_YangilikSection, {
            data: data.data
        })
    });
};
async function getServerSideProps() {
    const res = await fetch("https://admin.uzbekvoice.ai/items/news_translations");
    const data = await res.json();
    return {
        props: {
            data
        }
    };
}


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664], () => (__webpack_exec__(4603)));
module.exports = __webpack_exports__;

})();