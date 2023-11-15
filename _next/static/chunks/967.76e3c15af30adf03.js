"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[967],{70967:function(e,t,s){s.r(t),s.d(t,{diagram:function(){return v}});var a=s(49137),o=s(45625),r=s(6424),i=s(65054),n=s(67064);s(27484),s(17967),s(95481),s(76836),s(39354);const d="rect",c="rectWithTitle",l="statediagram",p="transition",g="parent",b="note",h="----parent",u="fill:none",y="fill: #333",f="text",m="normal";let w={},x=0;function T(e="",t=0,s="",a="----"){return`state-${e}${null!==s&&s.length>0?`${a}${s}`:""}-${t}`}const S=(e,t,s,o,r,n)=>{const l=s.id,p=void 0===(S=o[l])||null===S?"":S.classes?S.classes.join(" "):"";var S;if("root"!==l){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==a.D&&(t=s.type),w[l]||(w[l]={id:l,shape:t,description:i.e.sanitizeText(l,(0,i.c)()),classes:`${p} statediagram-state`});const o=w[l];s.description&&(Array.isArray(o.description)?(o.shape=c,o.description.push(s.description)):o.description.length>0?(o.shape=c,o.description===l?o.description=[s.description]:o.description=[o.description,s.description]):(o.shape=d,o.description=s.description),o.description=i.e.sanitizeTextOrArray(o.description,(0,i.c)())),1===o.description.length&&o.shape===c&&(o.shape=d),!o.type&&s.doc&&(i.l.info("Setting cluster for ",l,D(s)),o.type="group",o.dir=D(s),o.shape=s.type===a.a?"divider":"roundedWithTitle",o.classes=o.classes+" statediagram-cluster "+(n?"statediagram-cluster-alt":""));const r={labelStyle:"",shape:o.shape,labelText:o.description,classes:o.classes,style:"",id:l,dir:o.dir,domId:T(l,x),type:o.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:"statediagram-note",style:"",id:l+"----note-"+x,domId:T(l,x,b),type:o.type,padding:15},a={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:o.classes,style:"",id:l+h,domId:T(l,x,g),type:"group",padding:0};x++;const i=l+h;e.setNode(i,a),e.setNode(t.id,t),e.setNode(l,r),e.setParent(l,i),e.setParent(t.id,i);let n=l,d=t.id;"left of"===s.note.position&&(n=t.id,d=l),e.setEdge(n,d,{arrowhead:"none",arrowType:"",style:u,labelStyle:"",classes:"transition note-edge",arrowheadStyle:y,labelpos:"c",labelType:f,thickness:m})}else e.setNode(l,r)}t&&"root"!==t.id&&(i.l.trace("Setting node ",l," to be child of its parent ",t.id),e.setParent(l,t.id)),s.doc&&(i.l.trace("Adding nodes children "),k(e,s,s.doc,o,r,!n))},k=(e,t,s,o,r,n)=>{i.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case a.b:case a.D:S(e,t,s,o,r,n);break;case a.S:{S(e,t,s.state1,o,r,n),S(e,t,s.state2,o,r,n);const a={id:"edge"+x,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:u,labelStyle:"",label:i.e.sanitizeText(s.description,(0,i.c)()),arrowheadStyle:y,labelpos:"c",labelType:f,thickness:m,classes:p};e.setEdge(s.state1.id,s.state2.id,a,x),x++}}}))},D=(e,t=a.c)=>{let s=t;if(e.doc)for(let a=0;a<e.doc.length;a++){const t=e.doc[a];"dir"===t.stmt&&(s=t.value)}return s},$={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){i.l.trace("Extracting classes"),t.db.clear();try{return t.parser.parse(e),t.db.extract(t.db.getRootDocV2()),t.db.getClasses()}catch(s){return s}},draw:async function(e,t,s,a){i.l.info("Drawing state diagram (v2)",t),w={},a.db.getDirection();const{securityLevel:c,state:p}=(0,i.c)(),g=p.nodeSpacing||50,b=p.rankSpacing||50;i.l.info(a.db.getRootDocV2()),a.db.extract(a.db.getRootDocV2()),i.l.info(a.db.getRootDocV2());const h=a.db.getStates(),u=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:D(a.db.getRootDocV2()),nodesep:g,ranksep:b,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;S(u,void 0,a.db.getRootDocV2(),h,a.db,!0),"sandbox"===c&&(y=(0,r.Ys)("#i"+t));const f="sandbox"===c?(0,r.Ys)(y.nodes()[0].contentDocument.body):(0,r.Ys)("body"),m=f.select(`[id="${t}"]`),x=f.select("#"+t+" g");await(0,n.r)(x,u,["barb"],l,t);i.u.insertTitle(m,"statediagramTitleText",p.titleTopMargin,a.db.getDiagramTitle());const T=m.node().getBBox(),k=T.width+16,$=T.height+16;m.attr("class",l);const v=m.node().getBBox();(0,i.i)(m,$,k,p.useMaxWidth);const A=`${v.x-8} ${v.y-8} ${k} ${$}`;i.l.debug(`viewBox ${A}`),m.attr("viewBox",A);const B=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const o of B){const e=o.getBBox(),t=document.createElementNS("http://www.w3.org/2000/svg",d);t.setAttribute("rx",0),t.setAttribute("ry",0),t.setAttribute("width",e.width),t.setAttribute("height",e.height),o.insertBefore(t,o.firstChild)}}},v={parser:a.p,db:a.d,renderer:$,styles:a.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,a.d.clear()}}}}]);