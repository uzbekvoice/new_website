exports.id = 701;
exports.ids = [701];
exports.modules = {

/***/ 2977:
/***/ ((module) => {

// Exports
module.exports = {
	"initpartners": "InitiativePartners_initpartners__1AFi5",
	"partnersForHak": "InitiativePartners_partnersForHak__d7lLc",
	"item": "InitiativePartners_item__BsRgq",
	"active": "InitiativePartners_active__QgHjQ",
	"partners": "InitiativePartners_partners__c4fui"
};


/***/ }),

/***/ 701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InitiativePartners)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_InitiativePartners_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2977);
/* harmony import */ var _styles_InitiativePartners_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_InitiativePartners_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



var $ = __webpack_require__(2947);
if (false) {}





const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\component\\InitiativePartners.js -> " + "react-owl-carousel"
        ]
    },
    ssr: false
});
function InitiativePartners(props) {
    const { locale , pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { HomeContent: HomeContent1 , partners , status  } = props;
    const Responsive = {
        0: {
            items: 2,
            margin: 5
        },
        580: {
            items: 2,
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_InitiativePartners_module_css__WEBPACK_IMPORTED_MODULE_5___default().initpartners) + " initpartners",
        children: [
            HomeContent1.partner.filter((p)=>p.languages_code === locale
            ).map((HomeContent, i)=>{
                const { title , desc  } = HomeContent;
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: status === "active" && (_styles_InitiativePartners_module_css__WEBPACK_IMPORTED_MODULE_5___default().active),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: pathname === "/hakaton/[id]" && (_styles_InitiativePartners_module_css__WEBPACK_IMPORTED_MODULE_5___default().partnersForHak),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: desc
                        })
                    ]
                }, i);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_InitiativePartners_module_css__WEBPACK_IMPORTED_MODULE_5___default().sliders) + " sliders",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OwlCarousel, {
                    className: (_styles_InitiativePartners_module_css__WEBPACK_IMPORTED_MODULE_5___default().slider),
                    loop: true,
                    margin: 10,
                    dots: false,
                    nav: true,
                    responsive: Responsive,
                    autoplay: true,
                    autoplayTimeout: 1500000,
                    children: partners.map(({ id , partner_link , partner_image , partner_title  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: partner_link,
                            target: "_blank",
                            className: (_styles_InitiativePartners_module_css__WEBPACK_IMPORTED_MODULE_5___default().item),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `https://admin.uzbekvoice.ai/assets/${partner_image}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: partner_title
                                })
                            ]
                        }, id)
                    )
                })
            })
        ]
    });
};


/***/ })

};
;