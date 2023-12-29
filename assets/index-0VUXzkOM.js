var ke=Object.defineProperty;var we=(e,t,n)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>(we(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();function v(){}function _e(e){return e()}function te(){return Object.create(null)}function M(e){e.forEach(_e)}function pe(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let P;function C(e,t){return e===t?!0:(P||(P=document.createElement("a")),P.href=t,e===P.href)}function Oe(e){return Object.keys(e).length===0}function Ae(e,...t){if(e==null){for(const r of t)r(void 0);return v}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function be(e,t,n){e.$$.on_destroy.push(Ae(t,n))}function p(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function Q(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function D(e){return document.createTextNode(e)}function L(){return D(" ")}function Ie(){return D("")}function ve(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ne(e){return Array.from(e.childNodes)}function ee(e,t){t=""+t,e.data!==t&&(e.data=t)}let F;function H(e){F=e}function ye(){if(!F)throw new Error("Function called outside component initialization");return F}function Re(e){ye().$$.on_mount.push(e)}const I=[],ne=[];let y=[];const re=[],Te=Promise.resolve();let X=!1;function He(){X||(X=!0,Te.then(Se))}function Y(e){y.push(e)}const J=new Set;let O=0;function Se(){if(O!==0)return;const e=F;do{try{for(;O<I.length;){const t=I[O];O++,H(t),Ce(t.$$)}}catch(t){throw I.length=0,O=0,t}for(H(null),I.length=0,O=0;ne.length;)ne.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];J.has(n)||(J.add(n),n())}y.length=0}while(I.length);for(;re.length;)re.pop()();X=!1,J.clear(),H(e)}function Ce(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}function Le(e){const t=[],n=[];y.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),y=t}const z=new Set;let Fe;function K(e,t){e&&e.i&&(z.delete(e),e.i(t))}function Z(e,t,n,r){if(e&&e.o){if(z.has(e))return;z.add(e),Fe.c.push(()=>{z.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function N(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function x(e){e&&e.c()}function j(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),Y(()=>{const c=e.$$.on_mount.map(_e).filter(pe);e.$$.on_destroy?e.$$.on_destroy.push(...c):M(c),e.$$.on_mount=[]}),i.forEach(Y)}function G(e,t){const n=e.$$;n.fragment!==null&&(Le(n.after_update),M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ue(e,t){e.$$.dirty[0]===-1&&(I.push(e),He(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function V(e,t,n,r,i,c,u=null,d=[-1]){const h=F;H(e);const s=e.$$={fragment:null,ctx:[],props:c,update:v,not_equal:i,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:te(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};u&&u(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(l,a,...f)=>{const $=f.length?f[0]:a;return s.ctx&&i(s.ctx[l],s.ctx[l]=$)&&(!s.skip_bound&&s.bound[l]&&s.bound[l]($),o&&Ue(e,l)),a}):[],s.update(),o=!0,M(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const l=Ne(t.target);s.fragment&&s.fragment.l(l),l.forEach(S)}else s.fragment&&s.fragment.c();t.intro&&K(e.$$.fragment),j(e,t.target,t.anchor),Se()}H(h)}class W{constructor(){B(this,"$$");B(this,"$$set")}$destroy(){G(this,1),this.$destroy=v}$on(t,n){if(!pe(n))return v;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const De="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(De);class $e{constructor(t,n){this.suit=t,this.rank=n}getSuit(){return this.suit}getRank(){return this.rank}getImageSource(){return`images/${ie(this.suit)}/${ce(this.rank)}.svg`}toString(){return`${ie(this.suit)}_${ce(this.rank)}`}}const T=Object.freeze({HEARTS:0,DIAMONDS:1,SPADES:2,CLUBS:3}),b=Object.freeze({ACE:12,KING:11,QUEEN:10,JACK:9,TEN:8,NINE:7,EIGHT:6,SEVEN:5,SIX:4,FIVE:3,FOUR:2,THREE:1,TWO:0});function ie(e){switch(e){case T.HEARTS:return"hearts";case T.DIAMONDS:return"diamonds";case T.SPADES:return"spades";case T.CLUBS:return"clubs"}}function ce(e){switch(e){case b.ACE:return"ace";case b.KING:return"king";case b.QUEEN:return"queen";case b.JACK:return"jack";case b.TEN:return"ten";case b.NINE:return"nine";case b.EIGHT:return"eight";case b.SEVEN:return"seven";case b.SIX:return"six";case b.FIVE:return"five";case b.FOUR:return"four";case b.THREE:return"three";case b.TWO:return"two"}}const w=new $e(-1,-1),k=Object.freeze({ROYAL_FLUSH:100,STRAIGHT_FLUSH:75,FOUR_KIND:50,FULL_HOUSE:25,FLUSH:20,STRAIGHT:15,THREE_KIND:10,TWO_PAIRS:5,PAIR:2,NONE:0}),A=[];function Pe(e,t=v){let n;const r=new Set;function i(d){if(U(e,d)&&(e=d,n)){const h=!A.length;for(const s of r)s[1](),A.push(s,e);if(h){for(let s=0;s<A.length;s+=2)A[s][0](A[s+1]);A.length=0}}}function c(d){i(d(e))}function u(d,h=v){const s=[d,h];return r.add(s),r.size===1&&(n=t(i,c)||v),d(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:i,update:c,subscribe:u}}const q=Pe(w);function se(e){let t,n;return{c(){t=_("img"),C(t.src,n="images/card_placeholder.svg")||m(t,"src",n),m(t,"alt","card back")},m(r,i){E(r,t,i)},d(r){r&&S(t)}}}function ue(e){let t,n,r;return{c(){t=_("img"),C(t.src,n=e[1].getImageSource())||m(t,"src",n),m(t,"alt",r=e[1].toString())},m(i,c){E(i,t,c)},p(i,c){c&2&&!C(t.src,n=i[1].getImageSource())&&m(t,"src",n),c&2&&r!==(r=i[1].toString())&&m(t,"alt",r)},d(i){i&&S(t)}}}function ze(e){let t,n,r,i,c,u,d,h,s=e[0].length>0&&se(),o=e[1]!==w&&ue(e);return{c(){t=_("div"),n=_("div"),r=_("button"),s&&s.c(),i=L(),c=_("div"),u=_("div"),o&&o.c(),m(r,"class","card_item svelte-s96hbi"),m(r,"id","undealt"),r.disabled=e[2],m(u,"class","card_item svelte-s96hbi"),m(u,"id","dealt"),m(t,"class","deck_container svelte-s96hbi")},m(l,a){E(l,t,a),p(t,n),p(n,r),s&&s.m(r,null),p(t,i),p(t,c),p(c,u),o&&o.m(u,null),d||(h=ve(r,"click",e[3]),d=!0)},p(l,[a]){l[0].length>0?s||(s=se(),s.c(),s.m(r,null)):s&&(s.d(1),s=null),a&4&&(r.disabled=l[2]),l[1]!==w?o?o.p(l,a):(o=ue(l),o.c(),o.m(u,null)):o&&(o.d(1),o=null)},i:v,o:v,d(l){l&&S(t),s&&s.d(),o&&o.d(),d=!1,h()}}}function Ke(e,t,n){let r,i;be(e,q,o=>n(1,i=o));let c=[];function u(){n(0,c=[]),Object.values(T).forEach(o=>{Object.values(b).forEach(l=>{console.log(`${o} ${l}`),c.push(new $e(o,l))})})}function d(){let o=c.length*4;for(;o-- >0;){let l=Math.floor(Math.random()*c.length),a=Math.floor(Math.random()*c.length);n(0,c[a]=[c[l],n(0,c[l]=c[a],c)][0],c)}}function h(){u(),d(),n(0,c=c.slice(0,25))}Re(h);function s(){q.set(c.pop())}return e.$$.update=()=>{e.$$.dirty&3&&n(2,r=i!==w||c.length===0)},[c,i,r,s]}class je extends W{constructor(t){super(),V(this,t,Ke,ze,U,{})}}class Ge{constructor(){this.card=w,this.occupied=!1}setItem(t){this.occupied||(this.card=t,this.occupied=!0)}}function qe(){let e=[[],[],[],[],[]],n=0;for(;n<5;){let r=0;for(;r<5;)e[n][r]=new Ge,r++;n++}return e}function Me(e){let t=null;return e.reduce((n,r)=>(n&&t!==null?(n=r.suit===t,t=r.suit):t===null&&(t=r.suit),n),!0)}function Ve(e,t){const n=t.rank-e.rank;return n!==0?n:t.suit-e.suit}function Ee(e){if(e.length===0)return!1;if(e.length>0&&e[0].rank===b.ACE){const n=e.shift(),r=Ee(e);return e.unshift(n),!!(r&&(e[e.length-1].rank===b.TEN||e[e.length-1].rank===b.TWO))}else{let n=null;return e.reduce((r,i)=>(r&&n!==null?(r=i.rank-n===-1,n=i.rank):n===null&&(n=i.rank),r),!0)}}function We(e){let t={};return e.forEach(n=>{t[n.rank]=t[n.rank]?t[n.rank]+1:1}),t}function Be(e){let t=0;return Object.values(e).forEach(n=>{n>t&&(t=n)}),t}function Je(e){let t=0;return Object.values(e).forEach(n=>{n>=2&&t++}),t}function le(e){e=e.sort(Ve);const t=e.length===5,n=Me(e),r=Ee(e),i=We(e),c=Be(i),u=Je(i);if(t&&n&&e[4].rank===b.TEN)return k.ROYAL_FLUSH;if(t&&n&&r)return k.STRAIGHT_FLUSH;if(c===4)return k.FOUR_KIND;const o=c===3,l=u===2;return o&&l?k.FULL_HOUSE:t&&n?k.FLUSH:t&&r?k.STRAIGHT:o?k.THREE_KIND:l?k.TWO_PAIRS:u===1?k.PAIR:k.NONE}function oe(e,t,n){const r=e.slice();return r[8]=t[n],r}function fe(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function ae(e,t,n){const r=e.slice();return r[14]=t[n],r[16]=n,r}function Qe(e){let t,n,r,i;function c(){return e[4](e[14],e[13],e[16])}return{c(){t=_("button"),m(t,"class","card_item"),t.disabled=n=e[14].occupied},m(u,d){E(u,t,d),r||(i=ve(t,"click",c),r=!0)},p(u,d){e=u,d&1&&n!==(n=e[14].occupied)&&(t.disabled=n)},d(u){u&&S(t),r=!1,i()}}}function Xe(e){let t,n,r,i;return{c(){t=_("div"),n=_("img"),C(n.src,r=e[14].card.getImageSource())||m(n,"src",r),m(n,"alt",i=e[14].card.toString()),m(t,"class","card_item")},m(c,u){E(c,t,u),p(t,n)},p(c,u){u&1&&!C(n.src,r=c[14].card.getImageSource())&&m(n,"src",r),u&1&&i!==(i=c[14].card.toString())&&m(n,"alt",i)},d(c){c&&S(t)}}}function de(e){let t;function n(c,u){return c[14].occupied?Xe:Qe}let r=n(e),i=r(e);return{c(){i.c(),t=Ie()},m(c,u){i.m(c,u),E(c,t,u)},p(c,u){r===(r=n(c))&&i?i.p(c,u):(i.d(1),i=r(c),i&&(i.c(),i.m(t.parentNode,t)))},d(c){c&&S(t),i.d(c)}}}function he(e){let t,n,r,i,c=e[1][e[13]]+"",u,d=N(e[11]),h=[];for(let s=0;s<d.length;s+=1)h[s]=de(ae(e,d,s));return{c(){t=_("span");for(let s=0;s<h.length;s+=1)h[s].c();n=L(),r=_("div"),i=_("div"),u=D(c),m(i,"id","row_score"),m(i,"class","svelte-gzmu4k"),m(r,"class","card_item svelte-gzmu4k"),m(r,"id","row_item"),m(t,"class","card_row svelte-gzmu4k")},m(s,o){E(s,t,o);for(let l=0;l<h.length;l+=1)h[l]&&h[l].m(t,null);p(t,n),p(t,r),p(r,i),p(i,u)},p(s,o){if(o&9){d=N(s[11]);let l;for(l=0;l<d.length;l+=1){const a=ae(s,d,l);h[l]?h[l].p(a,o):(h[l]=de(a),h[l].c(),h[l].m(t,n))}for(;l<h.length;l+=1)h[l].d(1);h.length=d.length}o&2&&c!==(c=s[1][s[13]]+"")&&ee(u,c)},d(s){s&&S(t),Q(h,s)}}}function ge(e){let t,n,r=e[8]+"",i;return{c(){t=_("div"),n=_("div"),i=D(r),m(n,"id","column_score"),m(n,"class","svelte-gzmu4k"),m(t,"class","card_item svelte-gzmu4k"),m(t,"id","column_item")},m(c,u){E(c,t,u),p(t,n),p(n,i)},p(c,u){u&4&&r!==(r=c[8]+"")&&ee(i,r)},d(c){c&&S(t)}}}function Ye(e){let t,n,r,i,c,u,d=e[1].concat(e[2]).reduce(me,0)+"",h,s=N(e[0]),o=[];for(let f=0;f<s.length;f+=1)o[f]=he(fe(e,s,f));let l=N(e[2]),a=[];for(let f=0;f<l.length;f+=1)a[f]=ge(oe(e,l,f));return{c(){t=_("div");for(let f=0;f<o.length;f+=1)o[f].c();n=L(),r=_("span");for(let f=0;f<a.length;f+=1)a[f].c();i=L(),c=_("div"),u=_("div"),h=D(d),m(u,"id","total_score"),m(u,"class","svelte-gzmu4k"),m(c,"class","card_item svelte-gzmu4k"),m(c,"id","total_item"),m(r,"class","svelte-gzmu4k"),m(t,"class","grid_container svelte-gzmu4k")},m(f,$){E(f,t,$);for(let g=0;g<o.length;g+=1)o[g]&&o[g].m(t,null);p(t,n),p(t,r);for(let g=0;g<a.length;g+=1)a[g]&&a[g].m(r,null);p(r,i),p(r,c),p(c,u),p(u,h)},p(f,[$]){if($&11){s=N(f[0]);let g;for(g=0;g<s.length;g+=1){const R=fe(f,s,g);o[g]?o[g].p(R,$):(o[g]=he(R),o[g].c(),o[g].m(t,n))}for(;g<o.length;g+=1)o[g].d(1);o.length=s.length}if($&4){l=N(f[2]);let g;for(g=0;g<l.length;g+=1){const R=oe(f,l,g);a[g]?a[g].p(R,$):(a[g]=ge(R),a[g].c(),a[g].m(r,i))}for(;g<a.length;g+=1)a[g].d(1);a.length=l.length}$&6&&d!==(d=f[1].concat(f[2]).reduce(me,0)+"")&&ee(h,d)},i:v,o:v,d(f){f&&S(t),Q(o,f),Q(a,f)}}}const me=(e,t)=>e+t;function Ze(e,t,n){let r;be(e,q,l=>n(5,r=l));let i=qe(),c=[0,0,0,0,0],u=[0,0,0,0,0];function d(l){const a=i[l].filter(f=>f.occupied).map(f=>f.card);n(1,c[l]=le(a),c)}function h(l){let a=[];i.forEach(f=>{f[l].occupied&&a.push(f[l].card)}),n(2,u[l]=le(a),u)}function s(l,a,f){r!==w&&(l.setItem(r),d(a),h(f),q.set(w),n(0,i))}return[i,c,u,s,(l,a,f)=>s(l,a,f)]}class xe extends W{constructor(t){super(),V(this,t,Ze,Ye,U,{})}}function et(e){let t,n,r,i,c;return n=new je({}),i=new xe({}),{c(){t=_("span"),x(n.$$.fragment),r=L(),x(i.$$.fragment),m(t,"class","svelte-4pcqvp")},m(u,d){E(u,t,d),j(n,t,null),p(t,r),j(i,t,null),c=!0},p:v,i(u){c||(K(n.$$.fragment,u),K(i.$$.fragment,u),c=!0)},o(u){Z(n.$$.fragment,u),Z(i.$$.fragment,u),c=!1},d(u){u&&S(t),G(n),G(i)}}}class tt extends W{constructor(t){super(),V(this,t,null,et,U,{})}}function nt(e){let t,n,r;return n=new tt({}),{c(){t=_("div"),x(n.$$.fragment),m(t,"class","svelte-4q8cqv")},m(i,c){E(i,t,c),j(n,t,null),r=!0},p:v,i(i){r||(K(n.$$.fragment,i),r=!0)},o(i){Z(n.$$.fragment,i),r=!1},d(i){i&&S(t),G(n)}}}class rt extends W{constructor(t){super(),V(this,t,null,nt,U,{})}}new rt({target:document.getElementById("app")});