(() => {
var exports = {};
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 5270:
/***/ ((module) => {

// Exports
module.exports = {
	"qollanmaMain": "QollanmaMain_qollanmaMain__qrNXV",
	"gradientOne": "QollanmaMain_gradientOne__wiY3D",
	"gradientTwo": "QollanmaMain_gradientTwo__glZV0",
	"gradientThree": "QollanmaMain_gradientThree__AU9GS",
	"gradientFour": "QollanmaMain_gradientFour__xPlUZ",
	"gradientFive": "QollanmaMain_gradientFive__8sy7W",
	"qollanmaCard": "QollanmaMain_qollanmaCard__6x86N",
	"qollanmaCardBody": "QollanmaMain_qollanmaCardBody__YDyPH",
	"qollanmaCardMobileHeader": "QollanmaMain_qollanmaCardMobileHeader__YVc7B",
	"qollanmaCardHeader": "QollanmaMain_qollanmaCardHeader__Uo2gR"
};


/***/ }),

/***/ 6958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ guide),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/QollanmaMain.module.css
var QollanmaMain_module = __webpack_require__(5270);
var QollanmaMain_module_default = /*#__PURE__*/__webpack_require__.n(QollanmaMain_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./component/QollanmaMain.js





const QollanmaMain = ({ data  })=>{
    const { locale  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (QollanmaMain_module_default()).qollanmaMain,
        children: [
            locale === "uz-UZ" ? /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Qo`llanma\\Instruksia"
            }) : locale === "ru-RU" ? /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E\\\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Guide\\Instruction"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (QollanmaMain_module_default()).gradientOne
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (QollanmaMain_module_default()).gradientTwo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (QollanmaMain_module_default()).gradientThree
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (QollanmaMain_module_default()).gradientFour
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (QollanmaMain_module_default()).gradientFive
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: data.filter((p)=>p.languages_code === locale
                ).map(({ id , guideline_title , guidelines_id , guidline_video , gudline_created_date , guideline_content  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (QollanmaMain_module_default()).qollanmaCard,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (QollanmaMain_module_default()).qollanmaCardMobileHeader,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                    poster: "/video-poster.jpg",
                                    src: `https://admin.uzbekvoice.ai/assets/${guidline_video}`,
                                    controls: true,
                                    muted: true,
                                    loop: true
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (QollanmaMain_module_default()).qollanmaCardBody,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: gudline_created_date.slice(0, 10)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: guideline_title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        dangerouslySetInnerHTML: {
                                            __html: guideline_content.split(" ", 40).join(" ")
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/guide/${guidelines_id}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                locale === "uz-UZ" ? "Batafsil" : locale === "ru-RU" ? "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435" : "Read more",
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/chevron-right.svg"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (QollanmaMain_module_default()).qollanmaCardHeader,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                    poster: "/video-poster.jpg",
                                    src: `https://admin.uzbekvoice.ai/assets/${guidline_video}`,
                                    controls: true,
                                    muted: true,
                                    loop: true
                                })
                            })
                        ]
                    }, id)
                )
            })
        ]
    });
};
/* harmony default export */ const component_QollanmaMain = (QollanmaMain);

;// CONCATENATED MODULE: ./pages/guide/index.js



function guide({ data  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(component_QollanmaMain, {
            data: data.data
        })
    });
};
async function getServerSideProps() {
    const res = await fetch("https://admin.uzbekvoice.ai/items/guidelines_translations");
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
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664], () => (__webpack_exec__(6958)));
module.exports = __webpack_exports__;

})();