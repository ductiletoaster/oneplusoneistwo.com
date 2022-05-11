(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{1838:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/details",function(){return t(4059)}])},4059:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return N},default:function(){return W}});var i=t(5893),r=t(7294),o=t(7948),a=t(3366),s=t(7462),c=t(6010),l=t(5408),d=t(9707),m=t(7192),u=t(1496),g=t(4502);var p=r.createContext(),x=t(8979);function h(n){return(0,x.Z)("MuiGrid",n)}const f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var w=(0,t(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((n=>`spacing-xs-${n}`)),...["column-reverse","column","row-reverse","row"].map((n=>`direction-xs-${n}`)),...["nowrap","wrap-reverse","wrap"].map((n=>`wrap-xs-${n}`)),...f.map((n=>`grid-xs-${n}`)),...f.map((n=>`grid-sm-${n}`)),...f.map((n=>`grid-md-${n}`)),...f.map((n=>`grid-lg-${n}`)),...f.map((n=>`grid-xl-${n}`))]);const S=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function $(n){const e=parseFloat(n);return`${e}${String(n).replace(String(e),"")||"px"}`}function b(n,e,t={}){if(!e||!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`];const{xs:i,sm:r,md:o,lg:a,xl:s}=n;return[Number(i)>0&&(t[`spacing-xs-${String(i)}`]||`spacing-xs-${String(i)}`),Number(r)>0&&(t[`spacing-sm-${String(r)}`]||`spacing-sm-${String(r)}`),Number(o)>0&&(t[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(t[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(t[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const v=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,e)=>{const{container:t,direction:i,item:r,lg:o,md:a,sm:s,spacing:c,wrap:l,xl:d,xs:m,zeroMinWidth:u}=n.ownerState;return[e.root,t&&e.container,r&&e.item,u&&e.zeroMinWidth,...b(c,t,e),"row"!==i&&e[`direction-xs-${String(i)}`],"wrap"!==l&&e[`wrap-xs-${String(l)}`],!1!==m&&e[`grid-xs-${String(m)}`],!1!==s&&e[`grid-sm-${String(s)}`],!1!==a&&e[`grid-md-${String(a)}`],!1!==o&&e[`grid-lg-${String(o)}`],!1!==d&&e[`grid-xl-${String(d)}`]]}})((({ownerState:n})=>(0,s.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})),(function({theme:n,ownerState:e}){const t=(0,l.P$)({values:e.direction,breakpoints:n.breakpoints.values});return(0,l.k9)({theme:n},t,(n=>{const e={flexDirection:n};return 0===n.indexOf("column")&&(e[`& > .${w.item}`]={maxWidth:"none"}),e}))}),(function({theme:n,ownerState:e}){const{container:t,rowSpacing:i}=e;let r={};if(t&&0!==i){const e=(0,l.P$)({values:i,breakpoints:n.breakpoints.values});r=(0,l.k9)({theme:n},e,(e=>{const t=n.spacing(e);return"0px"!==t?{marginTop:`-${$(t)}`,[`& > .${w.item}`]:{paddingTop:$(t)}}:{}}))}return r}),(function({theme:n,ownerState:e}){const{container:t,columnSpacing:i}=e;let r={};if(t&&0!==i){const e=(0,l.P$)({values:i,breakpoints:n.breakpoints.values});r=(0,l.k9)({theme:n},e,(e=>{const t=n.spacing(e);return"0px"!==t?{width:`calc(100% + ${$(t)})`,marginLeft:`-${$(t)}`,[`& > .${w.item}`]:{paddingLeft:$(t)}}:{}}))}return r}),(function({theme:n,ownerState:e}){let t;return n.breakpoints.keys.reduce(((i,r)=>{let o={};if(e[r]&&(t=e[r]),!t)return i;if(!0===t)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=(0,l.P$)({values:e.columns,breakpoints:n.breakpoints.values}),c="object"===typeof a?a[r]:a;if(void 0===c||null===c)return i;const d=Math.round(t/c*1e8)/1e6+"%";let m={};if(e.container&&e.item&&0!==e.columnSpacing){const t=n.spacing(e.columnSpacing);if("0px"!==t){const n=`calc(${d} + ${$(t)})`;m={flexBasis:n,maxWidth:n}}}o=(0,s.Z)({flexBasis:d,flexGrow:0,maxWidth:d},m)}return 0===n.breakpoints.values[r]?Object.assign(i,o):i[n.breakpoints.up(r)]=o,i}),{})}));var y=r.forwardRef((function(n,e){const t=(0,g.Z)({props:n,name:"MuiGrid"}),o=(0,d.Z)(t),{className:l,columns:u,columnSpacing:x,component:f="div",container:w=!1,direction:$="row",item:y=!1,lg:Z=!1,md:j=!1,rowSpacing:k,sm:N=!1,spacing:W=0,wrap:M="wrap",xl:_=!1,xs:z=!1,zeroMinWidth:B=!1}=o,G=(0,a.Z)(o,S),P=k||W,T=x||W,C=r.useContext(p),E=w?u||12:C,D=(0,s.Z)({},o,{columns:E,container:w,direction:$,item:y,lg:Z,md:j,sm:N,rowSpacing:P,columnSpacing:T,wrap:M,xl:_,xs:z,zeroMinWidth:B}),O=(n=>{const{classes:e,container:t,direction:i,item:r,lg:o,md:a,sm:s,spacing:c,wrap:l,xl:d,xs:u,zeroMinWidth:g}=n,p={root:["root",t&&"container",r&&"item",g&&"zeroMinWidth",...b(c,t),"row"!==i&&`direction-xs-${String(i)}`,"wrap"!==l&&`wrap-xs-${String(l)}`,!1!==u&&`grid-xs-${String(u)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,m.Z)(p,h,e)})(D);return(0,i.jsx)(p.Provider,{value:E,children:(0,i.jsx)(v,(0,s.Z)({ownerState:D,className:(0,c.Z)(O.root,l),as:f,ref:e},G))})})),Z=t(5861),j=t(7357),k=t(797),N=!0,W=function(){return(0,i.jsxs)(j.Z,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh",textAlign:"center"},children:[(0,i.jsxs)(o.Z,{component:"main",sx:{mt:8,mb:2},maxWidth:"sm",children:[(0,i.jsx)(j.Z,{sx:{py:2,px:4,mb:4},children:(0,i.jsxs)(y,{container:!0,spacing:2.5,alignContent:"center",alignItems:"center",justifyContent:"center",textAlign:"center",children:[(0,i.jsx)(y,{item:!0,children:(0,i.jsxs)(Z.Z,{variant:"subtitle1",component:"h2",gutterBottom:!0,sx:{fontStyle:"italic"},children:["Together with their families,",(0,i.jsx)("br",{}),"Macy Olivas and Brian Gebel request your presence on their wedding day Friday the eleventh of November two thousand and twenty two at ",(0,i.jsx)("br",{}),"The Guild Hotel in San Diego."]})}),(0,i.jsx)(y,{item:!0,children:(0,i.jsx)(Z.Z,{variant:"h2",component:"h1",gutterBottom:!0,children:"THE DETAILS"})}),(0,i.jsx)(y,{item:!0,children:(0,i.jsx)(Z.Z,{variant:"body1",component:"p",gutterBottom:!0,children:"A block of rooms has been reserved for your convience at the hotel. Please let us know if you are interested in a room so we provide additional details."})}),(0,i.jsx)(y,{item:!0,children:(0,i.jsx)(Z.Z,{variant:"body1",component:"p",gutterBottom:!0,children:"The ceremony will be held in the courtyard while cocktails, dinner and entertainment will be held in the beautiful garden."})})]})}),(0,i.jsx)(Z.Z,{variant:"body1",children:"Macy & Brian"}),(0,i.jsx)(Z.Z,{variant:"body2",children:"11.11.2022"})]}),(0,i.jsx)(j.Z,{component:"footer",sx:{py:3,px:2,mt:"auto"},children:(0,i.jsx)(o.Z,{maxWidth:"sm",children:(0,i.jsx)(k.Z,{})})})]})}},797:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var i=t(5893),r=(t(7294),t(5861)),o=t(122);function a(){return(0,i.jsxs)(r.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9",(0,i.jsx)(o.Z,{color:"inherit",href:"https://briangebel.com",children:"briangebel.com"})," ",(new Date).getFullYear(),"."]})}}},function(n){n.O(0,[828,774,888,179],(function(){return e=1838,n(n.s=e);var e}));var e=n.O();_N_E=e}]);