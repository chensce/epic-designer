"use strict";const c=require("./_commonjsHelpers-6763f629.cjs"),l=require("./index-ecef3a12.cjs");var p={exports:{}};(function(_,k){(function(m,o){_.exports=o(l.requireDayjs_min())})(c.commonjsGlobal,function(m){function o(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var u=o(m);function a(e){return e>1&&e<5&&~~(e/10)!=1}function r(e,n,d,t){var s=e+" ";switch(d){case"s":return n||t?"pár sekúnd":"pár sekundami";case"m":return n?"minúta":t?"minútu":"minútou";case"mm":return n||t?s+(a(e)?"minúty":"minút"):s+"minútami";case"h":return n?"hodina":t?"hodinu":"hodinou";case"hh":return n||t?s+(a(e)?"hodiny":"hodín"):s+"hodinami";case"d":return n||t?"deň":"dňom";case"dd":return n||t?s+(a(e)?"dni":"dní"):s+"dňami";case"M":return n||t?"mesiac":"mesiacom";case"MM":return n||t?s+(a(e)?"mesiace":"mesiacov"):s+"mesiacmi";case"y":return n||t?"rok":"rokom";case"yy":return n||t?s+(a(e)?"roky":"rokov"):s+"rokmi"}}var i={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r}};return u.default.locale(i,null,!0),i})})(p);const M=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));exports.sk=M;
