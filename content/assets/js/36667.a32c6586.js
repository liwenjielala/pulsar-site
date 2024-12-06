"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[36667],{36667:(e,t,r)=>{r.d(t,{A:()=>R});var n=r(96540),o=r(34164),a=r(74136),i=r(75659);function l(e){try{return e.matches(":focus-visible")}catch(t){0}return!1}var s=r(28466),p=r(22871),u=r(90423),c=r(96389),y=r(58312);var h=r(49559);function g(e=[]){return([,t])=>t&&function(e,t=[]){if(!function(e){return"string"==typeof e.main}(e))return!1;for(const r of t)if(!e.hasOwnProperty(r)||"string"!=typeof e[r])return!1;return!0}(t,e)}var d=r(46126),m=r(39599),b=r(74848);var v=r(38413),f=r(57936);function w(e){return(0,f.Ay)("MuiTypography",e)}(0,v.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const x={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},A=m.A,S=(0,p.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,s.A)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((0,h.A)((({theme:e})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter((([e,t])=>"inherit"!==e&&t&&"object"==typeof t)).map((([e,t])=>({props:{variant:e},style:t}))),...Object.entries(e.palette).filter(g()).map((([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))),...Object.entries(e.palette?.text||{}).filter((([,e])=>"string"==typeof e)).map((([t])=>({props:{color:`text${(0,s.A)(t)}`},style:{color:(e.vars||e).palette.text[t]}}))),{props:({ownerState:e})=>"inherit"!==e.align,style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:e})=>e.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:e})=>e.paragraph,style:{marginBottom:16}}]})))),C={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},k=n.forwardRef((function(e,t){const{color:r,...n}=(0,d.b)({props:e,name:"MuiTypography"}),a=A({...n,...!x[r]&&{color:r}}),{align:l="inherit",className:p,component:u,gutterBottom:c=!1,noWrap:y=!1,paragraph:h=!1,variant:g="body1",variantMapping:m=C,...v}=a,f={...a,align:l,color:r,className:p,component:u,gutterBottom:c,noWrap:y,paragraph:h,variant:g,variantMapping:m},k=u||(h?"p":m[g]||C[g])||"span",B=(e=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:a,classes:l}=e,p={root:["root",a,"inherit"!==e.align&&`align${(0,s.A)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,i.A)(p,w,l)})(f);return(0,b.jsx)(S,{as:k,ref:t,className:(0,o.A)(B.root,p),...v,ownerState:f,style:{..."inherit"!==l&&{"--Typography-textAlign":l},...v.style}})}));function B(e){return(0,f.Ay)("MuiLink",e)}const $=(0,v.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var L=r(93539);const M=({theme:e,ownerState:t})=>{const r=t.color,n=(0,L.Yn)(e,`palette.${r}`,!1)||t.color,o=(0,L.Yn)(e,`palette.${r}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,a.X4)(n,.4)},W={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},D=(0,p.Ay)(k,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`underline${(0,s.A)(r.underline)}`],"button"===r.component&&t.button]}})((0,h.A)((({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:e,ownerState:t})=>"always"===e&&"inherit"!==t.color,style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter(g()).map((([t])=>({props:{underline:"always",color:t},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.4)`:(0,a.X4)(e.palette[t].main,.4)}}))),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,a.X4)(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:(0,a.X4)(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${$.focusVisible}`]:{outline:"auto"}}}]})))),R=n.forwardRef((function(e,t){const r=(0,d.b)({props:e,name:"MuiLink"}),a=function(){const e=(0,u.A)(c.A);return e[y.A]||e}(),{className:p,color:h="primary",component:g="a",onBlur:m,onFocus:v,TypographyClasses:f,underline:w="always",variant:x="inherit",sx:A,...S}=r,[C,k]=n.useState(!1),$={...r,color:h,component:g,focusVisible:C,underline:w,variant:x},L=(e=>{const{classes:t,component:r,focusVisible:n,underline:o}=e,a={root:["root",`underline${(0,s.A)(o)}`,"button"===r&&"button",n&&"focusVisible"]};return(0,i.A)(a,B,t)})($);return(0,b.jsx)(D,{color:h,className:(0,o.A)(L.root,p),classes:f,component:g,onBlur:e=>{l(e.target)||k(!1),m&&m(e)},onFocus:e=>{l(e.target)&&k(!0),v&&v(e)},ref:t,ownerState:$,variant:x,...S,sx:[...void 0===W[h]?[{color:h}]:[],...Array.isArray(A)?A:[A]],style:{...S.style,..."always"===w&&"inherit"!==h&&!W[h]&&{"--Link-underlineColor":M({theme:a,ownerState:$})}}})}))}}]);