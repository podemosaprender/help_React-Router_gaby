(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,o){e.exports=o(41)},34:function(e,t,o){},36:function(e,t,o){},38:function(e,t,o){},41:function(e,t,o){"use strict";o.r(t);var a=o(0),i=o.n(a),r=o(20),n=o.n(r),l=o(9),u=o(5),c=o(22),s=o(24),m={customer:[]},d=Object(u.c)({customer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CUSTOMER":return Object(s.a)({},e,{customer:t.payload});default:return e}}}),p=[c.a],f=window.__REDUX_DEVTOOLS_EXTENSION__?Object(u.d)(u.a.apply(void 0,p),window.__REDUX_DEVTOOLS_EXTENSION__()):u.a.apply(void 0,p),v=Object(u.e)(d,{},f),g=(o(34),o(6)),P=o(7),E=o(10),h=o(8),b=o(11),x=(o(36),o(38),function(e){return i.a.createElement("div",{className:"logocss"},i.a.createElement("h1",null,e.logo))}),y=o(42),q=function(e){return i.a.createElement("nav",{className:"navMenu"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(y.a,{to:"/"},"Inicio")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(y.a,{to:"/portafolio"},"Portafolio"))))},O=function(e){return i.a.createElement("div",{className:"headerCSS"},i.a.createElement(x,{logo:"logo"}),i.a.createElement(q,null))},D=function(e){return i.a.createElement("div",{className:"portadaCSS"},i.a.createElement("div",{className:"portadaText"},e.textoPortada)," ",i.a.createElement("br",null),i.a.createElement("span",{className:"button"},e.buttonText))},j=function(e){var t=e.texto,o=e.imagen,a=e.descripcion;return i.a.createElement("div",{className:"services-flex"},i.a.createElement("span",{className:"iconcss"},o),i.a.createElement("h1",null,t),i.a.createElement("h2",null,a))},N=function(e){var t=e.consumirArray,o=e.ourServices;return console.log(t),i.a.createElement("div",{className:"services"},i.a.createElement("div",{className:"ourservices"},o),t&&t.length>0&&t.map(function(e){return i.a.createElement(j,{className:"servicios",key:e.textoServices,texto:e.textoServices,descripcion:e.descripcion,imagen:e.imagenServices})}))},B=function(e){var t=e.textoPortafolio,o=(e.descripcionPortafolio,e.imagenPortfolio),a=e.categoriaPortafolio,r=e.urlPath,n={backgroundImage:"url('img/".concat(o,".png')")},l=a.map(function(e){return i.a.createElement("div",{className:"categorias"},e)});return i.a.createElement("article",{style:n,className:"portafolioChild"},i.a.createElement("div",{className:"informacion-portafolio"},l,i.a.createElement(y.a,{to:"".concat(r).concat(t)},i.a.createElement("h1",null,t))))},S=function(e){var t=e.portafolioArray,o=e.portafolioTexto,a=e.urlPath;return i.a.createElement("div",{className:"portafolio"},i.a.createElement("div",{className:"textoportafolio"},o),t&&t.length>0&&t.filter(function(e,t){return t<4}).map(function(e){return i.a.createElement(B,{urlPath:a,key:e.textoPortafolio,textoPortafolio:e.textoPortafolio,descripcionPortafolio:e.descripcionPortafolio,imagenPortfolio:e.imagenPortfolio,categoriaPortafolio:e.categoriaPortafolio})}))},w=function(e){var t=e.body;return i.a.createElement("div",null,i.a.createElement("div",{className:"app-frame"},i.a.createElement("div",null,t)))},A={servicesArray:[{imagenServices:"WebDesing",textoServices:"What web do you",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{imagenServices:"LogoDesign",textoServices:"What Logo do you",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{imagenServices:"PrintDesign",textoServices:"What PrintDesign do you",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}],portafolioArray:[{imagenPortfolio:"a1",galeriaPortafolio:["a1","a1","a1","a1","a1","a1"],textoPortafolio:"Portada1",descripcionPortafolio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",categoriaPortafolio:["MyBB","Wordpress","Drupal"]},{imagenPortfolio:"a1",galeriaPortafolio:["a1","a1","a1","a1","a1","a1"],textoPortafolio:"Portada2",descripcionPortafolio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",categoriaPortafolio:["MyBB","Wordpress","Drupal"]},{imagenPortfolio:"a1",galeriaPortafolio:["a1","a1","a1","a1","a1","a1"],textoPortafolio:"Portada3",descripcionPortafolio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",categoriaPortafolio:["MyBB","Wordpress","Drupal"]},{imagenPortfolio:"a1",galeriaPortafolio:["a1","a1","a1","a1","a1","a1"],textoPortafolio:"Portada4",descripcionPortafolio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",categoriaPortafolio:["MyBB","Wordpress","Drupal"]},{imagenPortfolio:"a1",galeriaPortafolio:["a1","a1","a1","a1","a1","a1"],textoPortafolio:"Portada5",descripcionPortafolio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",categoriaPortafolio:["MyBB","Wordpress","Drupal"]},{imagenPortfolio:"a1",galeriaPortafolio:["a1","a1","a1","a1","a1","a1"],textoPortafolio:"Portada6",descripcionPortafolio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",categoriaPortafolio:["MyBB","Wordpress","Drupal"]},{imagenPortfolio:"a1",galeriaPortafolio:["a1","a1","a1","a1","a1","a1"],textoPortafolio:"Portada7",descripcionPortafolio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",categoriaPortafolio:["MyBB","Wordpress","Drupal"]},{imagenPortfolio:"a1",galeriaPortafolio:["a1","a1","a1","a1","a1","a1"],textoPortafolio:"Portada8",descripcionPortafolio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",categoriaPortafolio:["MyBB","Wordpress","Drupal"]}]},L=function(){return{type:"FETCH_CUSTOMER",payload:A}},C=function(e){function t(){var e,o;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(o=Object(E.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).renderBody=function(e){return i.a.createElement("div",null,i.a.createElement(D,{textoPortada:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . ',buttonText:"Ver productos"}),i.a.createElement(N,{consumirArray:e.servicesArray,ourServices:"Our Services"}),i.a.createElement(S,{urlPath:"portafolio/",portafolioTexto:"Portafolio",portafolioArray:e.portafolioArray}))},o}return Object(b.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCustomer()}},{key:"render",value:function(){var e=this.props.customer;return console.log(e),console.log(e.servicesArray),i.a.createElement("div",null,i.a.createElement(w,{body:this.renderBody(e)}))}}]),t}(a.Component),U=Object(l.b)(function(e){return{customer:e.customer.customer}},{fetchCustomer:L})(C),k=o(43),M=o(45),T=o(44),W=function(){return i.a.createElement("div",{className:"footer"},"Footer")},_=function(e){var t=e.tituloPagina;return i.a.createElement("div",{className:"TituloPagina"},t)},I=function(e){var t=e.portafolioArray,o=e.urlPath;return i.a.createElement("div",null,i.a.createElement(_,{tituloPagina:"Portafolio"}),t&&t.length>0&&t.map(function(e){return i.a.createElement(B,{urlPath:o,key:e.textoPortafolio,textoPortafolio:e.textoPortafolio,descripcionPortafolio:e.descripcionPortafolio,imagenPortfolio:e.imagenPortfolio,categoriaPortafolio:e.categoriaPortafolio})}))},F=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCustomer()}},{key:"render",value:function(){var e=this.props.customer.portafolioArray;return i.a.createElement(i.a.Fragment,null,i.a.createElement(I,{urlPath:"portafolio/",portafolioArray:e}))}}]),t}(a.Component),R=Object(l.b)(function(e){return{customer:e.customer.customer}},{fetchCustomer:L})(F),X=function(e){function t(){var e,o;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(o=Object(E.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).renderBody=function(){return i.a.createElement("div",null,i.a.createElement(_,{tituloPagina:"".concat(o.props.textoPortafolio)}))},o}return Object(b.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCustomer()}},{key:"render",value:function(){console.log(this.props.customer);var e=this.props.customer.portafolioArray;return console.log(e),i.a.createElement("div",null,i.a.createElement(w,{body:this.renderBody()}))}}]),t}(a.Component),V=Object(l.b)(function(e){return{customer:e.customer.customer}},{fetchCustomer:L})(X),H=function(e){e.avatar;var t=e.informacionuser;return i.a.createElement("div",{className:"containerAbout"},t)},J=function(){return i.a.createElement("div",null,i.a.createElement(_,{tituloPagina:"About"}),i.a.createElement(H,{informacionuser:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}))},$=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return i.a.createElement(k.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(O,null),i.a.createElement(M.a,null,i.a.createElement(T.a,{exact:!0,path:"/",component:U}),i.a.createElement(T.a,{exact:!0,path:"/portafolio",component:R}),i.a.createElement(T.a,{exact:!0,path:"/about",component:J}),i.a.createElement(T.a,{path:"/portafolio/:textoPortafolio",render:function(e){return i.a.createElement(V,{textoPortafolio:e.match.params.textoPortafolio})}})),i.a.createElement(W,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=i.a.createElement(l.a,{store:v},i.a.createElement($,null));n.a.render(z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.db9ed1a9.chunk.js.map