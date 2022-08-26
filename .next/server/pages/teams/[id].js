(() => {
var exports = {};
exports.id = 661;
exports.ids = [661];
exports.modules = {

/***/ 6296:
/***/ ((module) => {

// Exports
module.exports = {
	"yangilikByIdHero": "TeamByID_yangilikByIdHero__SOLT0",
	"heroImg": "TeamByID_heroImg__uj2oJ",
	"heroBody": "TeamByID_heroBody__rq7_F",
	"heroTitleWrapper": "TeamByID_heroTitleWrapper__paBE_",
	"heroTitleRight": "TeamByID_heroTitleRight__seMwJ",
	"heroDescr": "TeamByID_heroDescr__x5gGl"
};


/***/ }),

/***/ 4683:
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
// EXTERNAL MODULE: ./styles/TeamByID.module.css
var TeamByID_module = __webpack_require__(6296);
var TeamByID_module_default = /*#__PURE__*/__webpack_require__.n(TeamByID_module);
;// CONCATENATED MODULE: ./component/Team.js




const Team = ({ data  })=>{
    const { locale , query  } = (0,router_.useRouter)();
    const dataFilter = data.filter((p)=>p.languages_code === locale && p.hackathon_teams_id === parseInt(query.id)
    )[0];
    // console.log(dataFilter);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (TeamByID_module_default()).yangilikByIdHero,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TeamByID_module_default()).heroImg,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: `https://admin.uzbekvoice.ai/assets/${dataFilter.team_image}`,
                    alt: "news-img"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TeamByID_module_default()).heroBody,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TeamByID_module_default()).heroTitleWrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: dataFilter.team_title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TeamByID_module_default()).heroTitleRight,
                                children: dataFilter.team_winner_place
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (TeamByID_module_default()).heroDescr,
                        dangerouslySetInnerHTML: {
                            __html: dataFilter.team_project_content
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: `https://admin.uzbekvoice.ai/assets/${dataFilter.team_project_file}`,
                        target: "_blank",
                        children: [
                            locale === "uz-UZ" ? "Jamoa loyihasi" : locale === "ru-RU" ? "\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442" : "Team project",
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/chevron-right.svg",
                                alt: "chevron"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const component_Team = (Team);

;// CONCATENATED MODULE: ./pages/teams/[id].js



const TeamByID = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(component_Team, {
            data: data.data
        })
    });
};
/* harmony default export */ const _id_ = (TeamByID);
async function getServerSideProps({ params  }) {
    const res = await fetch(`https://admin.uzbekvoice.ai/items/hackathon_teams_translations`);
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
var __webpack_exports__ = (__webpack_exec__(4683));
module.exports = __webpack_exports__;

})();