(() => {
var exports = {};
exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 552:
/***/ ((module) => {

// Exports
module.exports = {
	"yangilikByIdHero": "YangiliByIdHero_yangilikByIdHero__NR2EF",
	"heroImg": "YangiliByIdHero_heroImg__cY8Tp",
	"heroBody": "YangiliByIdHero_heroBody__9p45b",
	"heroDate": "YangiliByIdHero_heroDate__APR7U",
	"heroTitleWrapper": "YangiliByIdHero_heroTitleWrapper__8xqDN",
	"heroTitleRight": "YangiliByIdHero_heroTitleRight__bUF0l",
	"heroDescr": "YangiliByIdHero_heroDescr__2jSI1",
	"iconWrapper": "YangiliByIdHero_iconWrapper__AoGXG"
};


/***/ }),

/***/ 5234:
/***/ ((module) => {

// Exports
module.exports = {
	"relevantThemeTitle": "YangilikByIdRelevantTheme_relevantThemeTitle__jfOwi",
	"moreBtn": "YangilikByIdRelevantTheme_moreBtn__rMHbw",
	"title": "YangilikByIdRelevantTheme_title__XfGIJ",
	"desc": "YangilikByIdRelevantTheme_desc___ZpWn",
	"boxHeader": "YangilikByIdRelevantTheme_boxHeader__iBrZV",
	"boxBody": "YangilikByIdRelevantTheme_boxBody__rFSrz",
	"flexClass": "YangilikByIdRelevantTheme_flexClass__IbqVn",
	"ppp": "YangilikByIdRelevantTheme_ppp__HEfgk",
	"parent": "YangilikByIdRelevantTheme_parent__t9aaj",
	"box": "YangilikByIdRelevantTheme_box__32KNr",
	"mobileSlider": "YangilikByIdRelevantTheme_mobileSlider__Pq8i0"
};


/***/ }),

/***/ 1518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _yangilikById_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/YangiliByIdHero.module.css
var YangiliByIdHero_module = __webpack_require__(552);
var YangiliByIdHero_module_default = /*#__PURE__*/__webpack_require__.n(YangiliByIdHero_module);
;// CONCATENATED MODULE: external "next-share"
const external_next_share_namespaceObject = require("next-share");
;// CONCATENATED MODULE: ./component/YangilikByIdHero.js





const YangilikByIdHero = ({ data  })=>{
    const { locale  } = (0,router_.useRouter)();
    const router = (0,router_.useRouter)();
    const dataFilter = data.data.filter((p)=>p.languages_code === locale
    )[0];
    console.log(router);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (YangiliByIdHero_module_default()).yangilikByIdHero,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (YangiliByIdHero_module_default()).heroImg,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: `https://admin.uzbekvoice.ai/assets/${dataFilter.news_image}`,
                    alt: "news-img"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (YangiliByIdHero_module_default()).heroBody,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (YangiliByIdHero_module_default()).heroDate,
                        children: dataFilter.data_created.slice(0, 10) + " " + dataFilter.data_created.slice(11, 16)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (YangiliByIdHero_module_default()).heroTitleWrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: dataFilter.news_title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (YangiliByIdHero_module_default()).heroTitleRight,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: locale === "uz-UZ" ? "Ulashish:" : locale === "ru-RU" ? "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0432:" : "Share to:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.FacebookShareButton, {
                                        url: `${"https://new.uzbekvoice.ai/" + router.locale + router.asPath}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/facebookNews.svg",
                                            alt: "facebook"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.TwitterShareButton, {
                                        url: `${"https://new.uzbekvoice.ai/" + router.locale + router.asPath}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/twitterNews.svg",
                                            alt: "twitter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.TelegramShareButton, {
                                        url: `${"https://new.uzbekvoice.ai/" + router.locale + router.asPath}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/telegramNews.svg",
                                            alt: "tg"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (YangiliByIdHero_module_default()).heroDescr,
                        children: dataFilter.news_content
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const component_YangilikByIdHero = (YangilikByIdHero);

// EXTERNAL MODULE: ./styles/YangilikByIdRelevantTheme.module.css
var YangilikByIdRelevantTheme_module = __webpack_require__(5234);
var YangilikByIdRelevantTheme_module_default = /*#__PURE__*/__webpack_require__.n(YangilikByIdRelevantTheme_module);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./component/YangilikByIdRelevantTheme.js



var $ = __webpack_require__(2947);
if (false) {}





const OwlCarousel = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\component\\YangilikByIdRelevantTheme.js -> " + "react-owl-carousel"
        ]
    },
    ssr: false
});
const YangilikByIdRelevantTheme = ({ data  })=>{
    const { locale , query  } = (0,router_.useRouter)();
    const { 0: more , 1: setMore  } = (0,external_react_.useState)(3);
    const Responsive = {
        0: {
            items: 1,
            margin: 5
        },
        580: {
            items: 1,
            margin: 10
        },
        900: {
            items: 3,
            margin: 20
        },
        1200: {
            items: 4,
            margin: 20
        },
        1400: {
            items: 4,
            margin: 10
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (YangilikByIdRelevantTheme_module_default()).yangilikByIdRelevantTheme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (YangilikByIdRelevantTheme_module_default()).relevantThemeTitle,
                children: locale === "uz-UZ" ? "Mavzuga oid" : locale === "ru-RU" ? "\u041F\u043E \u0442\u0435\u043C\u0435" : "On the subject"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (YangilikByIdRelevantTheme_module_default()).parent,
                children: data.filter((p)=>p.languages_code === locale && p.news_id !== parseInt(query.yangilikById) && p.news_id !== null
                ).slice(0, more).map((el)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (YangilikByIdRelevantTheme_module_default()).box,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (YangilikByIdRelevantTheme_module_default()).boxHeader,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `https://admin.uzbekvoice.ai/assets/${el.news_image}`,
                                    alt: el.news_image
                                }, el.id)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (YangilikByIdRelevantTheme_module_default()).boxBody,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (YangilikByIdRelevantTheme_module_default()).title,
                                        children: el.news_title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        dangerouslySetInnerHTML: {
                                            __html: el.news_content.split(" ", 20).join(" ")
                                        },
                                        className: (YangilikByIdRelevantTheme_module_default()).desc
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (YangilikByIdRelevantTheme_module_default()).flexClass,
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
                                                className: (YangilikByIdRelevantTheme_module_default()).ppp,
                                                children: el.data_created.slice(0, 10)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, el.id);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (YangilikByIdRelevantTheme_module_default()).moreBtn,
                onClick: ()=>setMore(more + 3)
                ,
                children: locale === "uz-UZ" ? "Yana yuklash" : locale === "ru-RU" ? "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435" : "Load more"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (YangilikByIdRelevantTheme_module_default()).mobileSlider,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "\u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0435\u0449\u0435"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(OwlCarousel, {
                        className: (YangilikByIdRelevantTheme_module_default()).slider,
                        loop: true,
                        margin: 10,
                        responsive: Responsive,
                        autoplay: true,
                        autoplayTimeout: 300000,
                        dots: true,
                        children: data.filter((p)=>p.languages_code === locale && p.news_id !== parseInt(query.yangilikById) && p.news_id !== null
                        ).map((el)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (YangilikByIdRelevantTheme_module_default()).box,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (YangilikByIdRelevantTheme_module_default()).boxHeader,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `https://admin.uzbekvoice.ai/assets/${el.news_image}`,
                                            alt: el.news_image
                                        }, el.id)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (YangilikByIdRelevantTheme_module_default()).boxBody,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: (YangilikByIdRelevantTheme_module_default()).title,
                                                children: el.news_title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                dangerouslySetInnerHTML: {
                                                    __html: el.news_content.split(" ", 20).join(" ")
                                                },
                                                className: (YangilikByIdRelevantTheme_module_default()).desc
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (YangilikByIdRelevantTheme_module_default()).flexClass,
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
                                                        className: (YangilikByIdRelevantTheme_module_default()).ppp,
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
        ]
    });
};
/* harmony default export */ const component_YangilikByIdRelevantTheme = (YangilikByIdRelevantTheme);

;// CONCATENATED MODULE: ./pages/yangilik/[yangilikById].js




const YangilikById = ({ data , dataTheme  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(component_YangilikByIdHero, {
                data: data
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(component_YangilikByIdRelevantTheme, {
                data: dataTheme.data
            })
        ]
    });
};
/* harmony default export */ const _yangilikById_ = (YangilikById);
async function getServerSideProps({ params  }) {
    const res = await fetch(`https://admin.uzbekvoice.ai/items/news_translations/?filter[news_id]=${params.yangilikById}`);
    const res2 = await fetch("https://admin.uzbekvoice.ai/items/news_translations");
    const data = await res.json();
    const dataTheme = await res2.json();
    return {
        props: {
            data,
            dataTheme
        }
    };
}


/***/ }),

/***/ 2947:
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664,152], () => (__webpack_exec__(1518)));
module.exports = __webpack_exports__;

})();