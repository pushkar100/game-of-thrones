(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(74)},65:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),o=a(14),s=a(7),i=a(32),u=a(4),m=a(5),d=a(8),h=a(6),p=a(9),E=a(76),f=a(75),b=a(77),v=a(78),g=function(){return r.a.createElement("div",{className:"description"},r.a.createElement("p",null,"Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones."),r.a.createElement("p",null,"Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years."))},N=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Discover Game of Thrones!"),r.a.createElement("h2",null,"Learn the details of various books, characters, and houses"))},k=a(11),y=a.n(k),O=a(15),D=a(33),j=a.n(D).a.create({baseURL:"https://www.anapioficeandfire.com/api"}),x={},P={},C={},w={},B={},H={},T=function(e){var t=e.topic,a=e.operation;return r.a.createElement("div",{className:"empty col-12"},r.a.createElement("p",{className:"empty-title h5"},"Loading ",t,"..."),r.a.createElement("p",{className:"empty-subtitle"},"Please give us a few seconds to ",a))},A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).getBooks=function(){return a.props.books.filter(function(e,t){return 0!==t})||[]},a.getPageData=function(){return a.props.books[0]instanceof Array?a.props.books[0]:[1,!1,!0]},a.fetchNextPage=function(){a.props.fetchBooks(a.getPageData()[0]+1)},a.fetchPrevPage=function(){a.props.fetchBooks(a.getPageData()[0]-1)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks(this.getPageData()[0])}},{key:"renderBooks",value:function(){return this.props.books.length?(console.log(this.getBooks()),this.getBooks().map(function(e){var t=e.url,a=e.name,n=e.authors,c=e.released,l=e.numberOfPages;return r.a.createElement("div",{key:t||0,className:"book col-3"},r.a.createElement("div",null,r.a.createElement(f.a,{to:"/books/".concat(t.split("/").pop())},r.a.createElement("h4",null,a),r.a.createElement("p",{className:"author"},n&&n[0]),r.a.createElement("p",{className:"date"},new Date(c).toLocaleDateString()),r.a.createElement("p",{className:"pages"},l," pages"))))})):r.a.createElement(T,{topic:"Books",operation:"fetch data"})}},{key:"renderPrev",value:function(){return this.getPageData()[1]?r.a.createElement("button",{className:"btn",onClick:this.fetchPrevPage},"Prev"):""}},{key:"renderNext",value:function(){return this.getPageData()[2]?r.a.createElement("button",{className:"btn",onClick:this.fetchNextPage},"Next"):""}},{key:"render",value:function(){return r.a.createElement("div",{className:"accordion"},r.a.createElement("input",{defaultChecked:!0,hidden:!0,id:"accordion-1",name:"accordion-checkbox",type:"checkbox"}),r.a.createElement("label",{className:"accordion-header",htmlFor:"accordion-1"},r.a.createElement("i",{className:"icon icon-arrow-right mr-1"})),r.a.createElement("h3",null,r.a.createElement("label",{className:"accordion-header",htmlFor:"accordion-1"},"Books")),r.a.createElement("div",{className:"accordion-body"},r.a.createElement("div",null,r.a.createElement("div",{className:"columns"},this.renderBooks()),r.a.createElement("div",{className:"columns pagination"},r.a.createElement("div",{className:"col-12 center"},this.renderPrev(),this.renderNext())))))}}]),t}(r.a.Component),S=Object(s.b)(function(e,t){return{books:e.books}},{fetchBooks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(O.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!x[e]){t.next=4;break}n=x[e],t.next=8;break;case 4:return t.next=6,j.get("/books",{params:{page:e}});case 6:n=t.sent,x[e]=n;case 8:a({type:"FETCH_BOOKS",payload:{data:n.data,pageData:[e,/rel="prev"/.test(n.headers.link),/rel="next"/.test(n.headers.link)]}});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(A),F=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).getCharacters=function(){return a.props.characters.filter(function(e,t){return 0!==t})||[]},a.getPageData=function(){return a.props.characters[0]instanceof Array?a.props.characters[0]:[1,!1,!0]},a.fetchNextPage=function(){a.props.fetchCharacters(a.getPageData()[0]+1)},a.fetchPrevPage=function(){a.props.fetchCharacters(a.getPageData()[0]-1)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCharacters(this.getPageData()[0])}},{key:"renderCharacters",value:function(){return this.props.characters.length?this.getCharacters().map(function(e){var t=e.url,a=e.name,n=e.aliases,c=e.gender,l=e.culture,o=e.playedBy;return r.a.createElement("div",{key:t,className:"character col-3"},r.a.createElement("div",null,r.a.createElement(f.a,{to:"/characters/".concat(t.split("/").pop())},r.a.createElement("h4",null,a||n[0]||"Unknown"),r.a.createElement("p",{className:"gender"},c),r.a.createElement("p",{className:"culture"},l),r.a.createElement("p",{className:"playedby"},o||"Unknown"))))}):r.a.createElement(T,{topic:"Characters",operation:"fetch data"})}},{key:"renderPrev",value:function(){return this.getPageData()[1]?r.a.createElement("button",{className:"btn",onClick:this.fetchPrevPage},"Prev"):""}},{key:"renderNext",value:function(){return this.getPageData()[2]?r.a.createElement("button",{className:"btn",onClick:this.fetchNextPage},"Next"):""}},{key:"render",value:function(){return r.a.createElement("div",{className:"accordion"},r.a.createElement("input",{hidden:!0,id:"accordion-2",name:"accordion-checkbox",type:"checkbox"}),r.a.createElement("label",{className:"accordion-header",htmlFor:"accordion-2"},r.a.createElement("i",{className:"icon icon-arrow-right mr-1"})),r.a.createElement("h3",null,r.a.createElement("label",{className:"accordion-header",htmlFor:"accordion-2"},"Characters")),r.a.createElement("div",{className:"accordion-body"},r.a.createElement("div",null,r.a.createElement("div",{className:"columns"},this.renderCharacters()),r.a.createElement("div",{className:"columns pagination"},r.a.createElement("div",{className:"col-12 center"},this.renderPrev(),this.renderNext())))))}}]),t}(r.a.Component),_=Object(s.b)(function(e,t){return{characters:e.characters}},{fetchCharacters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(O.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!P[e]){t.next=4;break}n=P[e],t.next=8;break;case 4:return t.next=6,j.get("/characters",{params:{page:e}});case 6:n=t.sent,P[e]=n;case 8:a({type:"FETCH_CHARACTERS",payload:{data:n.data,pageData:[e,/rel="prev"/.test(n.headers.link),/rel="next"/.test(n.headers.link)]}});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(F),L=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).getHouses=function(){return a.props.houses.filter(function(e,t){return 0!==t})||[]},a.getPageData=function(){return a.props.houses[0]instanceof Array?a.props.houses[0]:[1,!1,!0]},a.fetchNextPage=function(){a.props.fetchHouses(a.getPageData()[0]+1)},a.fetchPrevPage=function(){a.props.fetchHouses(a.getPageData()[0]-1)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchHouses(this.getPageData()[0])}},{key:"renderHouses",value:function(){return this.props.houses.length?this.getHouses().map(function(e){var t=e.url,a=e.name,n=e.region,c=e.words;return r.a.createElement("div",{key:t,className:"house col-3"},r.a.createElement("div",null,r.a.createElement(f.a,{to:"/houses/".concat(t.split("/").pop())},r.a.createElement("h4",null,a),r.a.createElement("p",{className:"region"},n||"unknown"),r.a.createElement("p",{className:"words"},c||"unknown"))))}):r.a.createElement(T,{topic:"Houses",operation:"fetch data"})}},{key:"renderPrev",value:function(){return this.getPageData()[1]?r.a.createElement("button",{className:"btn",onClick:this.fetchPrevPage},"Prev"):""}},{key:"renderNext",value:function(){return this.getPageData()[2]?r.a.createElement("button",{className:"btn",onClick:this.fetchNextPage},"Next"):""}},{key:"render",value:function(){return r.a.createElement("div",{className:"accordion"},r.a.createElement("input",{hidden:!0,id:"accordion-3",name:"accordion-checkbox",type:"checkbox"}),r.a.createElement("label",{className:"accordion-header",htmlFor:"accordion-3"},r.a.createElement("i",{className:"icon icon-arrow-right mr-1"})),r.a.createElement("h3",null,r.a.createElement("label",{className:"accordion-header",htmlFor:"accordion-3"},"Houses")),r.a.createElement("div",{className:"accordion-body"},r.a.createElement("div",null,r.a.createElement("div",{className:"columns"},this.renderHouses()),r.a.createElement("div",{className:"columns pagination"},r.a.createElement("div",{className:"col-12 center"},this.renderPrev(),this.renderNext())))))}}]),t}(r.a.Component),R=Object(s.b)(function(e,t){return{houses:e.houses}},{fetchHouses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(O.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!C[e]){t.next=4;break}n=C[e],t.next=8;break;case 4:return t.next=6,j.get("/houses",{params:{page:e}});case 6:n=t.sent,C[e]=n;case 8:a({type:"FETCH_HOUSES",payload:{data:n.data,pageData:[e,/rel="prev"/.test(n.headers.link),/rel="next"/.test(n.headers.link)]}});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(L),M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(_,null),r.a.createElement(R,null))},U=(a(65),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBookDetails(this.props.match.params.id)}},{key:"renderButtons",value:function(e){if(e&&e.length)return e.map(function(e,t){return r.a.createElement(f.a,{key:e,to:"/characters/".concat(e.split("/").pop())},r.a.createElement("button",{className:"btn"},e.split("/").pop()))})}},{key:"render",value:function(){var e=this.props.bookDetails;return e.name?r.a.createElement("div",{className:"book-details"},r.a.createElement("h3",{className:"name"},e.name),r.a.createElement("h4",{className:"sub-header"},"Information related to the book"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Authors"),r.a.createElement("td",null,e.authors&&e.authors.join(", "))),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Country"),r.a.createElement("td",null,e.country)),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"ISBN"),r.a.createElement("td",null,e.isbn)),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Media Type"),r.a.createElement("td",null,e.mediaType)),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Number of Pages"),r.a.createElement("td",null,e.numberOfPages)),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Publisher"),r.a.createElement("td",null,e.publisher)),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Released"),r.a.createElement("td",null,new Date(e.released).toLocaleString())),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Main Characters"),r.a.createElement("td",null,this.renderButtons(e.povCharacters))))),r.a.createElement("div",{className:"columns pagination"},r.a.createElement("div",{className:"col-12 center"},r.a.createElement(f.a,{to:"/"},r.a.createElement("button",{className:"btn"},"Home Page"))))):r.a.createElement(T,{topic:"Book",operation:"fetch book"})}}]),t}(r.a.Component)),I=Object(s.b)(function(e,t){return{bookDetails:e.bookDetails}},{fetchBookDetails:function(e){return function(){var t=Object(O.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!w[e]){t.next=4;break}n=w[e],t.next=8;break;case 4:return t.next=6,j.get("/books/".concat(e));case 6:n=t.sent,w[e]=n;case 8:a({type:"FETCH_BOOK_DETAILS",payload:n.data});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(U),G=(a(67),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCharacterDetails(this.props.match.params.id)}},{key:"renderButtons",value:function(e,t){if(e&&e.length)return e.map(function(e,a){return r.a.createElement(f.a,{key:e,to:"/".concat(t,"/").concat(e.split("/").pop())},r.a.createElement("button",{className:"btn"},e.split("/").pop()))})}},{key:"render",value:function(){var e=this.props.characterDetails;return e.gender?r.a.createElement("div",{className:"char-details"},r.a.createElement("h3",{className:"name"},e.name||"(Unknown)"),r.a.createElement("h4",{className:"sub-header"},"Character information"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Aliases"),r.a.createElement("td",null,e.aliases&&e.aliases.join(", ")||"None")),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Born"),r.a.createElement("td",null,e.born||"Unknown")),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Gender"),r.a.createElement("td",null,e.gender)),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Father / Mother / Spouse"),r.a.createElement("td",null,e.father&&this.renderButtons([e.father.trim()],"characters"),"/ ",e.mother&&this.renderButtons([e.mother.trim()],"characters"),"/ ",e.spouse&&this.renderButtons([e.spouse.trim()],"characters"))),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Played By"),r.a.createElement("td",null,e.playedBy&&e.playedBy.join(", ")||"Unknown")),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Titles"),r.a.createElement("td",null,e.titles&&e.titles.join(", ")||"None")),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Allegiances"),r.a.createElement("td",null,this.renderButtons(e.allegiances,"houses"))),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Books"),r.a.createElement("td",null,this.renderButtons(e.books,"books"))))),r.a.createElement("div",{className:"columns pagination"},r.a.createElement("div",{className:"col-12 center"},r.a.createElement(f.a,{to:"/"},r.a.createElement("button",{className:"btn"},"Home Page"))))):r.a.createElement(T,{topic:"Character",operation:"fetch character"})}}]),t}(r.a.Component)),W=Object(s.b)(function(e,t){return{characterDetails:e.characterDetails}},{fetchCharacterDetails:function(e){return function(){var t=Object(O.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!B[e]){t.next=4;break}n=B[e],t.next=8;break;case 4:return t.next=6,j.get("/characters/".concat(e));case 6:n=t.sent,B[e]=n;case 8:a({type:"FETCH_CHARACTER_DETAILS",payload:n.data});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(G),K=(a(69),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchHouseDetails(this.props.match.params.id)}},{key:"renderButtons",value:function(e,t){if(e&&e.length)return e.map(function(e,a){return r.a.createElement(f.a,{key:e,to:"/".concat(t,"/").concat(e.split("/").pop())},r.a.createElement("button",{className:"btn"},e.split("/").pop()))})}},{key:"render",value:function(){var e=this.props.houseDetails;return e.name?r.a.createElement("div",{className:"house-details"},r.a.createElement("h3",{className:"name"},e.name||"unknown"),r.a.createElement("h4",{className:"sub-header"},"House information"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Coat of arms"),r.a.createElement("td",null,e.coatOfArms)),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Region"),r.a.createElement("td",null,e.region)),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Overlord"),r.a.createElement("td",null,e.overlord&&this.renderButtons([e.overlord],"houses"))),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Seats"),r.a.createElement("td",null,e.seats&&e.seats.join(", "))),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Died Out"),r.a.createElement("td",null,e.diedOut||"No")),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Current Lord"),r.a.createElement("td",null,e.currentLord||"Unknown")),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Heir"),r.a.createElement("td",null,e.heir||"Unknown")),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Founded / Founder"),r.a.createElement("td",null,e.founded," / ",e.founder&&this.renderButtons([e.founder],"characters"))),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Ancestral Weapons"),r.a.createElement("td",null,e.ancestralWeapons&&e.ancestralWeapons.join(", "))),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Titles"),r.a.createElement("td",null,e.titles&&e.titles.join(", "))),r.a.createElement("tr",null,r.a.createElement("td",{className:"bold"},"Sworn Members"),r.a.createElement("td",null,e.overlord&&this.renderButtons(e.swornMembers,"characters"))))),r.a.createElement("div",{className:"columns pagination"},r.a.createElement("div",{className:"col-12 center"},r.a.createElement(f.a,{to:"/"},r.a.createElement("button",{className:"btn"},"Home Page"))))):r.a.createElement(T,{topic:"House",operation:"fetch house"})}}]),t}(r.a.Component)),J=Object(s.b)(function(e,t){return{houseDetails:e.houseDetails}},{fetchHouseDetails:function(e){return function(){var t=Object(O.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!H[e]){t.next=4;break}n=H[e],t.next=8;break;case 4:return t.next=6,j.get("/houses/".concat(e));case 6:n=t.sent,H[e]=n;case 8:a({type:"FETCH_HOUSE_DETAILS",payload:n.data});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(K),q=function(){return r.a.createElement("div",{className:"empty error-route col-12"},r.a.createElement("p",{className:"empty-title h5"},"Oops!..."),r.a.createElement("p",{className:"empty-subtitle"},"Seems like this route does not exist"),r.a.createElement("p",{className:"empty-subtitle"},r.a.createElement(f.a,{to:"/"},"Visit Home Page")))},V=(a(71),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column col-3 left"},r.a.createElement(f.a,{to:"/"},r.a.createElement("img",{alt:"GOT logo",className:"img-responsive",src:"/got.png"})),r.a.createElement(g,null)),r.a.createElement("div",{className:"column col-9 right"},r.a.createElement(N,null),r.a.createElement(b.a,null,r.a.createElement(v.a,{path:"/",component:M,exact:!0}),r.a.createElement(v.a,{path:"/books/:id",component:I,exact:!0}),r.a.createElement(v.a,{path:"/characters/:id",component:W,exact:!0}),r.a.createElement(v.a,{path:"/houses/:id",component:J,exact:!0}),r.a.createElement(v.a,{component:q,exact:!0}))))))}}]),t}(r.a.Component)),z=a(16),Q=Object(o.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKS":return[t.payload.pageData].concat(Object(z.a)(t.payload.data));default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CHARACTERS":return[t.payload.pageData].concat(Object(z.a)(t.payload.data));default:return e}},houses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_HOUSES":return[t.payload.pageData].concat(Object(z.a)(t.payload.data));default:return e}},bookDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOK_DETAILS":return t.payload;default:return e}},characterDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CHARACTER_DETAILS":return t.payload;default:return e}},houseDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_HOUSE_DETAILS":return t.payload;default:return e}}}),X=Object(o.d)(Q,Object(o.a)(i.a));l.a.render(r.a.createElement(s.a,{store:X},r.a.createElement(V,null)),document.querySelector("#root"))}},[[35,2,1]]]);
//# sourceMappingURL=main.1901dbb6.chunk.js.map