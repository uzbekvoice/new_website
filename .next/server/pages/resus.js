(() => {
var exports = {};
exports.id = 951;
exports.ids = [951];
exports.modules = {

/***/ 3832:
/***/ ((module) => {

// Exports
module.exports = {
	"resursMain": "ResursMain_resursMain__Zg95M",
	"resursMainTitle": "ResursMain_resursMainTitle__mNVvd",
	"parts": "ResursMain_parts__Gqd5E",
	"activeBtn": "ResursMain_activeBtn__h6Wo9",
	"resursCard": "ResursMain_resursCard__ZfjcV",
	"resursCardBody": "ResursMain_resursCardBody__LMuKn",
	"descr": "ResursMain_descr__oQw6v",
	"resursCardHeader": "ResursMain_resursCardHeader__04dRM",
	"partInfoMobile": "ResursMain_partInfoMobile__Bssj0",
	"resursMobileCard": "ResursMain_resursMobileCard__hErSm",
	"resursMobileCardHeader": "ResursMain_resursMobileCardHeader__jZauz",
	"resursMobileCardBody": "ResursMain_resursMobileCardBody__my2yl",
	"partInfo": "ResursMain_partInfo__xrHGG"
};


/***/ }),

/***/ 4127:
/***/ ((module) => {

// Exports
module.exports = {
	"resursHero": "ResusHero_resursHero__YtlTD"
};


/***/ }),

/***/ 8790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ resus),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/ResursMain.module.css
var ResursMain_module = __webpack_require__(3832);
var ResursMain_module_default = /*#__PURE__*/__webpack_require__.n(ResursMain_module);
;// CONCATENATED MODULE: ./component/ResursMain.js





const ResursMain = ({ data  })=>{
    const { 0: tagFilter , 1: setTagFilter  } = (0,external_react_.useState)("all");
    const { locale  } = (0,router_.useRouter)();
    let tags = [];
    let tags2 = [];
    const filterData = data.filter((p)=>p.languages_code === locale
    );
    for(let i2 = 0; i2 < filterData.length; i2++){
        tags = [
            ...tags,
            filterData[i2].resource_tags
        ];
    }
    for(let i1 = 0; i1 < tags.length; i1++){
        for(let j = 0; j < tags[i1].length; j++){
            tags2 = [
                ...tags2,
                tags[i1][j]
            ];
        }
    }
    let tag3 = tags2.filter((c, index)=>{
        return tags2.indexOf(c) === index;
    });
    const filterTag = (value)=>{
        setTagFilter(value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ResursMain_module_default()).resursMain,
        children: [
            locale === "uz-UZ" ? /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: (ResursMain_module_default()).resursMainTitle,
                children: "Siz uchun nima muhimligini bilib oling"
            }) : locale === "ru-RU" ? /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: (ResursMain_module_default()).resursMainTitle,
                children: "\u0423\u0437\u043D\u0430\u0439\u0442\u0435, \u0447\u0442\u043E \u0432\u0430\u0436\u043D\u043E \u0434\u043B\u044F \u0432\u0430\u0441"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: (ResursMain_module_default()).resursMainTitle,
                children: "Discover what matters to you"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ResursMain_module_default()).parts,
                children: tag3.map((value, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        onClick: ()=>filterTag(value)
                        ,
                        className: tagFilter == value && (ResursMain_module_default()).activeBtn,
                        children: value
                    }, i)
                )
            }),
            data.filter((p)=>p.languages_code === locale && p.resource_tags.includes(tagFilter)
            ).map(({ id , resource_author , resource_content , resource_image , resource_link , resource_title  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (ResursMain_module_default()).partInfo,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (ResursMain_module_default()).resursCard,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (ResursMain_module_default()).resursCardBody,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: resource_title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (ResursMain_module_default()).descr,
                                                dangerouslySetInnerHTML: {
                                                    __html: resource_content
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: resource_link,
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
                                        className: (ResursMain_module_default()).resursCardHeader,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `https://admin.uzbekvoice.ai/assets/${resource_image}`,
                                            alt: "image"
                                        })
                                    })
                                ]
                            }, id)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (ResursMain_module_default()).partInfoMobile,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (ResursMain_module_default()).resursMobileCard,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (ResursMain_module_default()).resursMobileCardHeader,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `https://admin.uzbekvoice.ai/assets/${resource_image}`,
                                            alt: "image"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (ResursMain_module_default()).resursMobileCardBody,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: resource_title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: resource_content
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: resource_link,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        children: [
                                                            locale === "uz-UZ" ? "Batafsil" : locale === "ru-RU" ? "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435" : "Read more",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/chevron-right.svg"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }, id)
                        })
                    ]
                }, id)
            )
        ]
    });
};
/* harmony default export */ const component_ResursMain = (ResursMain);

// EXTERNAL MODULE: ./styles/ResusHero.module.css
var ResusHero_module = __webpack_require__(4127);
var ResusHero_module_default = /*#__PURE__*/__webpack_require__.n(ResusHero_module);
;// CONCATENATED MODULE: ./component/ResusHero.js




const ResusHero = ()=>{
    const { locale  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ResusHero_module_default()).resursHero,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container__fluid",
            children: locale === "uz-UZ" ? /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: "Resurslar"
            }) : locale === "ru-RU" ? /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: "\u0420\u0435\u0441\u0443\u0440\u0441\u044B"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: "Resources"
            })
        })
    });
};
/* harmony default export */ const component_ResusHero = (ResusHero);

;// CONCATENATED MODULE: ./pages/resus.js




function resus({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(component_ResusHero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(component_ResursMain, {
                data: data.data
            })
        ]
    });
};
async function getServerSideProps() {
    const res = await fetch("https://admin.uzbekvoice.ai/items/resources_translations");
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
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664], () => (__webpack_exec__(8790)));
module.exports = __webpack_exports__;

})();