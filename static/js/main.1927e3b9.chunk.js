(this["webpackJsonpfootball-memory-card"]=this["webpackJsonpfootball-memory-card"]||[]).push([[0],[,,,,,,,,,,function(e,i,c){},function(e,i,c){},function(e,i,c){},function(e,i,c){},function(e,i,c){"use strict";c.r(i);var a=c(1),r=c.n(a),t=c(4),n=c.n(t),d=c(0);function s(){return Object(d.jsx)("div",{id:"footer",children:Object(d.jsxs)("p",{children:["Copyright \xa9 Created by"," ",Object(d.jsx)("a",{href:"https://github.com/krimoelbahri",children:" Elbahri "}),". TOP project"]})})}function l(){return Object(d.jsx)("div",{id:"header",children:Object(d.jsxs)("div",{id:"websiteTitle",children:[Object(d.jsx)("h1",{className:"pd-5px",children:"Foot"}),Object(d.jsx)("i",{className:"fas fa-futbol pd-5px bounce-1"}),Object(d.jsx)("h1",{className:"pd-5px",children:"Memory Card"})]})})}var o=c(2);function p(e){return Object(d.jsxs)("div",{onClick:e.handleClick,className:"card mrg-5px","data-index":e.index,children:[Object(d.jsx)("div",{"data-index":e.index,className:"card-img-div",children:Object(d.jsx)("img",{src:e.imgSrc,alt:e.playerName,"data-index":e.index})}),Object(d.jsx)("div",{className:"card-playerName pd-5px","data-index":e.index,children:Object(d.jsx)("h6",{"data-index":e.index,children:e.playerName})})]})}var m=[{imgSrc:"https://cdn.britannica.com/34/212134-050-A7289400/Lionel-Messi-2018.jpg",playerName:"Lionel Messi",playerId:"LM10",index:0},{imgSrc:"https://i.pinimg.com/736x/1e/fe/6e/1efe6ee1f8d80bb9486697c28928e485.jpg",playerName:"Cristiano Ronaldo",playerId:"CR7",index:1},{imgSrc:"https://images.caradisiac.com/logos/0/8/0/2/140802/S0-Apres-la-Coupe-du-Monde-Ronaldo-risque-de-perdre-son-permis-51968.jpg",playerName:"Nazario Ronaldo",playerId:"R9",index:2},{imgSrc:"https://i.pinimg.com/736x/b1/b3/b8/b1b3b8e1921d9c5906d750a5fc93d75c.jpg",playerName:"Ronaldinho Ga\xfacho",playerId:"RG10",index:3},{imgSrc:"https://i.pinimg.com/474x/bb/f7/29/bbf729c0c40edb225834beff62678064.jpg",playerName:"Marcelo da Silva",playerId:"MD12",index:4},{imgSrc:"https://www.thesun.co.uk/wp-content/uploads/2021/01/59b5de56-74ca-4635-b11c-8312f76ab93e.jpg",playerName:"Willian da Silva",playerId:"WB12",index:5},{imgSrc:"https://i2.wp.com/i.dailymail.co.uk/1s/2021/02/27/22/39846128-9307777-image-m-38_1614463517551.jpg",playerName:"Gerard Piqu\xe9",playerId:"GP3",index:6},{imgSrc:"https://i2-prod.dailystar.co.uk/incoming/article21244202.ece/ALTERNATES/s1200c/1_JS202853778.jpg",playerName:"Kylian Mbapp\xe9",playerId:"KM10",index:7},{imgSrc:"https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/26/75152.jpg",playerName:"Zlatan Ibrahimovich",playerId:"ZI9",index:8},{imgSrc:"https://i.pinimg.com/originals/fb/05/57/fb0557a657629e13c80dbbf67b8e2e53.jpg",playerName:"Zinedine Zidane",playerId:"Zizo10",index:9},{imgSrc:"https://sportstar.thehindu.com/incoming/article34775301.ece/ALTERNATES/LANDSCAPE_1200/Neymarjpg",playerName:"Neymar da Silva J\xfanior",playerId:"NJ10",index:10},{imgSrc:"https://static.toiimg.com/thumb/msid-79250859,imgsize-98293,width-400,resizemode-4/79250859.jpg",playerName:"Riyad Mahrez",playerId:"RM7",index:11}];function j(e){return Math.floor(Math.random()*e)}function b(e){for(var i=j(e.length),c=[],a=[],r=0;r<e.length;r++){for(;c.includes(i);)i=j(e.length);c.push(i),a[r]=e[i]}return a}function h(e){var i=Object(a.useState)(m),c=Object(o.a)(i,2),t=c[0],n=c[1],s=function(i){n(b(m));var c=i.target.dataset.index;e.handleScore(m[c])};return Object(a.useEffect)((function(){return n(b(m)),function(){}}),[]),Object(d.jsx)("div",{id:"cards-container",children:t.map((function(e,i){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)(p,{handleClick:s,imgSrc:e.imgSrc,playerName:e.playerName,index:e.index})},e.playerId+i)}))})}function x(e){return Object(d.jsxs)("div",{className:"score-board mrg-5px flex-r",children:[Object(d.jsxs)("div",{className:"current-score mrg-5px flex-r",children:[Object(d.jsx)("p",{className:"pd-5px",children:"Current Score:"}),Object(d.jsx)("p",{className:"pd-5px",children:e.currentScore})]}),Object(d.jsxs)("div",{className:"high-score mrg-5px flex-r",children:[Object(d.jsx)("p",{className:"pd-5px",children:"High Score:"}),Object(d.jsx)("p",{className:"pd-5px",children:e.highScore})]})]})}function u(){var e=Object(a.useState)(0),i=Object(o.a)(e,2),c=i[0],r=i[1],t=Object(a.useState)(0),n=Object(o.a)(t,2),s=n[0],l=n[1],p=Object(a.useState)([]),m=Object(o.a)(p,2),j=m[0],b=m[1];return Object(d.jsxs)("div",{id:"main",children:[Object(d.jsx)(x,{currentScore:c,highScore:s}),Object(d.jsx)(h,{handleScore:function(e){j.includes(e)?(b([]),r(0)):(b((function(i){return i.concat(e)})),r((function(e){return e+1})),l((function(e){return c<e?e:c+1})))}})]})}var g=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l,{}),Object(d.jsx)(u,{}),Object(d.jsx)(s,{})]})},f=(c(10),c(11),c(12),c(13),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(i){var c=i.getCLS,a=i.getFID,r=i.getFCP,t=i.getLCP,n=i.getTTFB;c(e),a(e),r(e),t(e),n(e)}))});n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),f()}],[[14,1,2]]]);
//# sourceMappingURL=main.1927e3b9.chunk.js.map