(() => {
var exports = {};
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 483:
/***/ ((module) => {

// Exports
module.exports = {
	"yangilikByIdHero": "GuideByID_yangilikByIdHero__no8WR",
	"heroImg": "GuideByID_heroImg__5jIgV",
	"heroBody": "GuideByID_heroBody__vCCS4",
	"heroTitleWrapper": "GuideByID_heroTitleWrapper__YFq7J",
	"heroTitleRight": "GuideByID_heroTitleRight__b_wHI",
	"heroDescr": "GuideByID_heroDescr__NsKOD"
};


/***/ }),

/***/ 9493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/GuideByID.module.css
var GuideByID_module = __webpack_require__(483);
var GuideByID_module_default = /*#__PURE__*/__webpack_require__.n(GuideByID_module);
;// CONCATENATED MODULE: ./component/GuideByID.js




const GuideByID = ({ data  })=>{
    const { locale , query  } = (0,router_.useRouter)();
    const dataFilter = data.filter((p)=>p.languages_code === locale && p.guidelines_id === parseInt(query.id)
    )[0];
    // console.log(data);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (GuideByID_module_default()).yangilikByIdHero,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (GuideByID_module_default()).heroImg,
                children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                    poster: "/video-poster.jpg",
                    src: `https://admin.uzbekvoice.ai/assets/${dataFilter.guidline_video}`,
                    controls: true,
                    muted: true,
                    loop: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (GuideByID_module_default()).heroBody,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (GuideByID_module_default()).heroTitleWrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: dataFilter.guideline_title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (GuideByID_module_default()).heroTitleRight,
                                children: dataFilter.gudline_created_date.slice(0, 10)
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (GuideByID_module_default()).heroDescr,
                        dangerouslySetInnerHTML: {
                            __html: dataFilter.guideline_content
                        }
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const component_GuideByID = (GuideByID);

;// CONCATENATED MODULE: ./pages/guide/[id].js



const GuideBy = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(component_GuideByID, {
            data: data.data
        })
    });
};
/* harmony default export */ const _id_ = (GuideBy);
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
var __webpack_exports__ = (__webpack_exec__(9493));
module.exports = __webpack_exports__;

})();