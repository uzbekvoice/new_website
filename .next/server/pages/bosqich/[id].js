(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 9654:
/***/ ((module) => {

// Exports
module.exports = {
	"isContinue": "Bosqich_isContinue__C4QC6",
	"bosqichPage": "Bosqich_bosqichPage__WfTW4",
	"scheduleDate": "Bosqich_scheduleDate__CThxq",
	"goal": "Bosqich_goal__On8WV",
	"goalIcon": "Bosqich_goalIcon__qEKSJ",
	"card1": "Bosqich_card1__xPJM7",
	"card2": "Bosqich_card2__E_UI6",
	"block": "Bosqich_block__bDWEv",
	"rules": "Bosqich_rules__dkZhV",
	"rulesCard": "Bosqich_rulesCard__E2x_D",
	"rule1": "Bosqich_rule1__yYDU5"
};


/***/ }),

/***/ 7565:
/***/ ((module) => {

// Exports
module.exports = {
	"hakatonTeams": "BosqichPrizes_hakatonTeams__nVB3_",
	"hakatonTeams_title": "BosqichPrizes_hakatonTeams_title__PPEEB",
	"hakatonTeams_wrapper": "BosqichPrizes_hakatonTeams_wrapper__GNxxg",
	"hakatonTeams_card": "BosqichPrizes_hakatonTeams_card__ILXLw",
	"hakatonTeams_cardHeader": "BosqichPrizes_hakatonTeams_cardHeader__T4Ql_",
	"hakatonTeams_cardBody": "BosqichPrizes_hakatonTeams_cardBody__4hQJd",
	"hakatonTeams_cardBadge": "BosqichPrizes_hakatonTeams_cardBadge__RnQE9"
};


/***/ }),

/***/ 2501:
/***/ ((module) => {

// Exports
module.exports = {
	"prizesPictures": "Prizes_prizesPictures__PsyNz",
	"ceremony": "Prizes_ceremony__QktTt",
	"hakatonFoto_title": "Prizes_hakatonFoto_title__5Svnd",
	"hakatonFoto": "Prizes_hakatonFoto__niOWO",
	"hakatonFoto_card": "Prizes_hakatonFoto_card__mIAKR",
	"hakatonFoto_wrapper": "Prizes_hakatonFoto_wrapper__SonWb"
};


/***/ }),

/***/ 3242:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "Topuser_content__f7kq3",
	"grid": "Topuser_grid__y8EQK",
	"card": "Topuser_card__iHckw",
	"item": "Topuser_item__MNJGM",
	"block": "Topuser_block__MHfVg",
	"modal_bg": "Topuser_modal_bg__ObTIu",
	"container": "Topuser_container__NvoY1",
	"modal_content": "Topuser_modal_content__rvaVR",
	"modal_close": "Topuser_modal_close__QipFX",
	"title": "Topuser_title__c91fE",
	"card_user": "Topuser_card_user__mLJIN",
	"item_user": "Topuser_item_user__pzSJA",
	"block_user": "Topuser_block_user__VJ5an",
	"detailall": "Topuser_detailall__WClng",
	"listner": "Topuser_listner__Du4bC",
	"voice": "Topuser_voice__SkhiQ"
};


/***/ }),

/***/ 4634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HakatonTeams)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_BosqichPrizes_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7565);
/* harmony import */ var _styles_BosqichPrizes_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BosqichPrizes_module_css__WEBPACK_IMPORTED_MODULE_3__);




function HakatonTeams({ resGifts , title  }) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const dataGifts = resGifts.data.filter((p)=>p.languages_code === locale
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_BosqichPrizes_module_css__WEBPACK_IMPORTED_MODULE_3___default().hakatonTeams),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_styles_BosqichPrizes_module_css__WEBPACK_IMPORTED_MODULE_3___default().hakatonTeams_title),
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_BosqichPrizes_module_css__WEBPACK_IMPORTED_MODULE_3___default().hakatonTeams_wrapper),
                children: dataGifts.map(({ contest_gifts_id , gift_name , gift_image , place  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_BosqichPrizes_module_css__WEBPACK_IMPORTED_MODULE_3___default().hakatonTeams_card),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_BosqichPrizes_module_css__WEBPACK_IMPORTED_MODULE_3___default().hakatonTeams_cardHeader),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `https://admin.uzbekvoice.ai/assets/${gift_image}`,
                                    alt: "img"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_BosqichPrizes_module_css__WEBPACK_IMPORTED_MODULE_3___default().hakatonTeams_cardBody),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: gift_name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_BosqichPrizes_module_css__WEBPACK_IMPORTED_MODULE_3___default().hakatonTeams_cardBadge),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: place
                                })
                            })
                        ]
                    }, contest_gifts_id)
                )
            })
        ]
    });
};


/***/ }),

/***/ 8084:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Prizes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4366);
/* harmony import */ var _styles_Prizes_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2501);
/* harmony import */ var _styles_Prizes_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Prizes_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_2__]);
photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Prizes({ prize , galleryID , title  }) {
    const { 0: more , 1: setMore  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(8);
    let loop = more - prize.length;
    if (loop > 0) {
        for(let i = 0; i < loop; i++){
            prize.push("");
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let lightbox = new photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_2__["default"]({
            gallery: "#" + galleryID,
            children: "a",
            showAnimationDuration: 200,
            hideAnimationDuration: 50,
            pswpModule: ()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 3293))
        });
        lightbox.init();
        return ()=>{
            lightbox.destroy();
            lightbox = null;
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Prizes_module_css__WEBPACK_IMPORTED_MODULE_3___default().ceremony),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_Prizes_module_css__WEBPACK_IMPORTED_MODULE_3___default().hakatonFoto_title),
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Prizes_module_css__WEBPACK_IMPORTED_MODULE_3___default().prizesPictures) + " pswp-gallery",
                id: galleryID,
                children: prize.map((value, index)=>value ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `https://admin.uzbekvoice.ai/assets/${value}`,
                        target: "_blank",
                        rel: "noreferrer",
                        "data-pswp-width": "1200",
                        "data-pswp-height": "800",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `https://admin.uzbekvoice.ai/assets/${value}`,
                            alt: value
                        })
                    }, galleryID + "-" + index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                )
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Winners)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3242);
/* harmony import */ var _styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






function Winners({ users , userslist , bosqich  }) {
    const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [showModal2, setShowModal2] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
        style: {
            marginTop: bosqich && "130px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: locale === "uz-UZ" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Yetakchi a'zolar"
                }) : locale === "ru-RU" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "\u0421\u0430\u043C\u044B\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u044C"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Leading members"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().listner),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: locale === "uz-UZ" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Eng faol tinglovchi"
                                }) : locale === "ru-RU" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "The most active listener"
                                })
                            }),
                            users.slice(0, 3).map((dates)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().item),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().block),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: "/leader.png",
                                                        width: 72,
                                                        height: 72,
                                                        alt: "Leader"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        children: dates.username
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: dates.total
                                            })
                                        ]
                                    })
                                }, dates.clientHash)
                            ),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().detailall),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setShowModal(true)
                                    ,
                                    children: locale === "uz-UZ" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Batafsil"
                                    }) : locale === "ru-RU" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Read more"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().voice),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: locale === "uz-UZ" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Eng faol so'zlovchi"
                                }) : locale === "ru-RU" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "\u0421\u0430\u043C\u044B\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u043F\u0438\u043A\u0435\u0440"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "The most active speaker"
                                })
                            }),
                            userslist.slice(0, 3).map((dates)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().item),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().block),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: "/leader.png",
                                                        width: 72,
                                                        height: 72,
                                                        alt: "Leader"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        children: dates.username
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: dates.total
                                            })
                                        ]
                                    })
                                }, dates.clientHash)
                            ),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().detailall),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setShowModal2(true)
                                    ,
                                    children: locale === "uz-UZ" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Batafsil"
                                    }) : locale === "ru-RU" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Read more"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().voice_user),
                                children: showModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>setShowModal(false)
                                        ,
                                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_bg),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: (e)=>e.stopPropagation()
                                            ,
                                            className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_content),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_heading),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_close),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>setShowModal(false)
                                                            ,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiXCircle, {
                                                                    size: 30
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                            children: [
                                                                " ",
                                                                locale === "uz-UZ" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Eng faol tinglovchi"
                                                                }) : locale === "ru-RU" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438"
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "The most active listener"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
                                                        children: users.map((dates)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_user),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().item_user),
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().block_user),
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                    children: dates.position + 1
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                    children: dates.username
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: dates.total
                                                                        })
                                                                    ]
                                                                })
                                                            }, dates.clientHash)
                                                        )
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }) : null
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().voice_user),
                                children: showModal2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>setShowModal2(false)
                                        ,
                                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_bg),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: (e)=>e.stopPropagation()
                                            ,
                                            className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_content),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_heading),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal_close),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>setShowModal2(false)
                                                            ,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiXCircle, {
                                                                    size: 30
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            children: locale === "uz-UZ" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Eng faol so'zlovchi"
                                                            }) : locale === "ru-RU" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "\u0421\u0430\u043C\u044B\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u043F\u0438\u043A\u0435\u0440"
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "The most active speaker"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
                                                        children: userslist.map((data)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_user),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().item_user),
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: (_styles_Topuser_module_css__WEBPACK_IMPORTED_MODULE_5___default().block_user),
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                    children: data.position + 1
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                    children: data.username
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: data.total
                                                                        })
                                                                    ]
                                                                })
                                                            }, data.clientHash)
                                                        )
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }) : null
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 7218:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bosqich),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9654);
/* harmony import */ var _styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_Winners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(353);
/* harmony import */ var _component_Prizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8084);
/* harmony import */ var _component_BosqichPrizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4634);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Prizes__WEBPACK_IMPORTED_MODULE_5__]);
_component_Prizes__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








async function getServerSideProps() {
    const res = await fetch("https://commonvoice.mozilla.org/api/v1/uz/clips/leaderboard");
    const res2 = await fetch("https://api.ry.team/leaderboard/votes/all");
    const res3 = await fetch("https://admin.uzbekvoice.ai/items/contest_stages_translations");
    const res4 = await fetch("https://admin.uzbekvoice.ai/items/contest_gifts_translations");
    const data = await res.json();
    const users = await res2.json();
    const dataContest = await res3.json();
    const resGifts = await res4.json();
    return {
        props: {
            users: data,
            userslist: users,
            dataContest,
            resGifts
        }
    };
}
function Bosqich({ users , userslist , dataContest , resGifts  }) {
    const { locale , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const data = dataContest.data.filter((p)=>p.languages_id === locale && p.contest_stages_id === parseInt(query.id)
    );
    const dataRules = data[0].contest_rules;
    const prize = [];
    for(const key in data[0]){
        if (key.slice(-6) === "_image") {
            prize.push(data[0][key]);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().bosqichPage),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().isContinue) + " " + data[0].contest_status + " bosqich",
                children: data[0].contest_status
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: data[0].contest_title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().scheduleDate),
                children: data[0].contest_period
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().goal),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().card1),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().block),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().goalIcon),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: "/bosqichIcon1.png",
                                        width: 100,
                                        height: 100,
                                        alt: "bosqich"
                                    })
                                })
                            }),
                            locale === "uz-UZ" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Ko'zlangan maqsad"
                            }) : locale === "ru-RU" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "\u041F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u0446\u0435\u043B\u044C"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "The intended purpose"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: data[0].contest_expactations
                            })
                        ]
                    }),
                    data[0].contest_status !== "faol" && data[0].contest_status !== "active" && data[0].contest_status !== "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().card2),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().block),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().goalIcon),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: "/bosqichIcon2.svg",
                                        width: 100,
                                        height: 100,
                                        alt: "bosqich2"
                                    })
                                })
                            }),
                            locale === "uz-UZ" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Erishilgan natija"
                            }) : locale === "ru-RU" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "The result achieved"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: data[0].contest_result
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BosqichPrizes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: data[0].contest_gifts,
                resGifts: resGifts
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().rules),
                children: [
                    locale === "uz-UZ" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Konkurs qoidalari"
                    }) : locale === "ru-RU" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Contest rules"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().rulesCard),
                        children: dataRules.map(({ contest_rule , rule  }, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Bosqich_module_css__WEBPACK_IMPORTED_MODULE_7___default().rule1),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: rule
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: contest_rule
                                    })
                                ]
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Winners__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                bosqich: true,
                users: users,
                userslist: userslist
            }),
            data[0].contest_status !== "faol" && data[0].contest_status !== "active" && data[0].contest_status !== "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Prizes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: data[0].contest_award_ceremony,
                prize: prize,
                galleryID: "my-test-gallery"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3293:
/***/ ((module) => {

"use strict";
module.exports = import("photoswipe");;

/***/ }),

/***/ 4366:
/***/ ((module) => {

"use strict";
module.exports = import("photoswipe/lightbox");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,397,675], () => (__webpack_exec__(7218)));
module.exports = __webpack_exports__;

})();