import { c as l } from "./_commonjsHelpers-c5d32002.js";
import { r as c } from "./index-db7dae58.js";
var M = { exports: {} };
(function(_, p) {
  (function(d, n) {
    _.exports = n(c());
  })(l, function(d) {
    function n(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = n(d), r = { words: { m: ["jedan minut", "jednog minuta"], mm: ["%d minut", "%d minuta", "%d minuta"], h: ["jedan sat", "jednog sata"], hh: ["%d sat", "%d sata", "%d sati"], d: ["jedan dan", "jednog dana"], dd: ["%d dan", "%d dana", "%d dana"], M: ["jedan mesec", "jednog meseca"], MM: ["%d mesec", "%d meseca", "%d meseci"], y: ["jednu godinu", "jedne godine"], yy: ["%d godinu", "%d godine", "%d godina"] }, correctGrammarCase: function(e, t) {
      return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? t[0] : t[1] : t[2];
    }, relativeTimeFormatter: function(e, t, a, u) {
      var o = r.words[a];
      if (a.length === 1)
        return a === "y" && t ? "jedna godina" : u || t ? o[0] : o[1];
      var i = r.correctGrammarCase(e, o);
      return a === "yy" && t && i === "%d godinu" ? e + " godina" : i.replace("%d", e);
    } }, m = { name: "sr", weekdays: "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"), weekdaysShort: "Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"), monthsShort: "Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"), weekStart: 1, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: r.relativeTimeFormatter, mm: r.relativeTimeFormatter, h: r.relativeTimeFormatter, hh: r.relativeTimeFormatter, d: r.relativeTimeFormatter, dd: r.relativeTimeFormatter, M: r.relativeTimeFormatter, MM: r.relativeTimeFormatter, y: r.relativeTimeFormatter, yy: r.relativeTimeFormatter }, ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } };
    return s.default.locale(m, null, !0), m;
  });
})(M);
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  f as s
};
