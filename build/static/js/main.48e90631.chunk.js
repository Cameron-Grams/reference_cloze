(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{66:function(e,t,a){},73:function(e,t,a){e.exports=a(90)},78:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(60),c=a.n(o),i=(a(78),a(15)),l=a(16),s=a(19),u=a(17),p=a(18),m=a(93),d=a(96),h=a(97),b=a(10),f="REGISTER_ORIGINAL_TEXT",E="ADD_VOCABULARY_WORD",v="UPDATE_WORD_DISPLAY",O="RESET",g="IMPROPER_INPUT_RECEIVED",y=a(5),j=a(72),x=a(21),w={errorMessage:!1,title:"",originalText:" Mystery Text... ",paragraphs:[],wordObjects:[{}],vocabularyList:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(x.a)({},e,{title:t.data.title,paragraphs:t.data.paragraphs,wordObjects:t.data.wordObjects,errorMessage:!e.errorMessage});case g:return Object(x.a)({},e,{errorMessage:!e.errorMessage});case E:return Object(x.a)({},e,{vocabularyList:Object(j.a)(e.vocabularyList).concat([t.data.vocabularyList])});case v:return Object(x.a)({},e,{wordObjects:t.data.wordObjects});case O:return Object(x.a)({},w);default:return e}},N=a(95),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.c,k=Object(y.b)({reducer:T,form:N.a.plugin({moreVocab:function(e,t){switch(t.type){case E:return;default:return e}}})}),C=Object(y.d)(k,_()),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"landingDiv"},n.a.createElement("h3",null,"Introduction"),n.a.createElement("p",null,"This site is a web-based tool for teachers to create Cloze ( fill in the blanks ) exercises.  Advance through the pages and complete the following steps:"),n.a.createElement("div",{id:"landingListDiv"},n.a.createElement("ul",null,n.a.createElement("li",null,'Chose a title for the exercise and enter the title into the "Exercise Title".'),n.a.createElement("li",null,'Copy and paste the original text into the "Exercise Text" area and advance to Build the Cloze.'),n.a.createElement("li",null,"Select the words to remove from the original text and add to the vocabulary words."),n.a.createElement("li",null,"Add additional vocabulary words that students can consider for the exercise, such as synonyms."),n.a.createElement("li",null,"Advance to observe the exercise worksheet, return to edit or confirm print."),n.a.createElement("li",null,"Print the worksheet or save it as a pdf under the selection of the printer."))),n.a.createElement("button",{className:"submitButton",onClick:function(t){return e.props.history.push("/input-text")}},"Advace to Input Text"))))}}]),t}(n.a.Component),S=Object(b.b)(function(e){return Object(x.a)({},e)},{})(I),A=a(94),W=a(92),D=function(e){return n.a.createElement("div",{className:"overallFormDiv"},n.a.createElement("form",{className:"textForm",onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(A.a,{className:"textTitle generalInput",name:"textTitleInput",component:"input",placeholder:"Exercise Title"})),n.a.createElement("div",null,n.a.createElement(A.a,{className:"textField generalInput",name:"originalTextInput",component:"textarea",placeholder:"Exercise Text"})),n.a.createElement("button",{className:"submitButton",type:"submit"},"Next Step")))},L=D=Object(W.a)({form:"InputText"})(D);function V(){return{type:O}}a(82);var z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).enterText=function(e){e.originalTextInput?(a.props.registerOriginalText(e),a.props.history.push("/build-cloze")):a.props.improperInput()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.errorMessage?n.a.createElement("p",{className:"errorMessage"},"Please Enter Exercise Text"):null;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h2",null,"Input Text:"),n.a.createElement("p",null,"Add a title and text to create the worksheet:"),e,n.a.createElement(L,{onSubmit:this.enterText})))}}]),t}(n.a.Component),B=Object(b.b)(function(e){return{errorMessage:e.reducer.errorMessage}},{registerOriginalText:function(e){var t=[],a=[];e.originalTextInput.split("\n").filter(function(e){return""!==e}).forEach(function(e,r){var n=e.split(" ").map(function(e,t){var n={};return n.paragraph=r,n.position=t,n.originalWord=e,n.displayShowing=e,n.selected=!1,a.push(n),n});return t.push(n),t});var r=e.textTitleInput;return{type:f,data:Object(x.a)({},e,{title:r,wordObjects:a.concat(),paragraphs:t.concat()})}},improperInput:function(){return{type:g}}})(z),P=a(22),M=function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(A.a,{className:"newVocab generalInput targetTitle",name:"additionalVocabulary",component:"input",placeholder:"Enter Additonal Vocabulary Words"})),n.a.createElement("button",{className:"submitButton",type:"submit"},"Add Vocabulary Words"))},R=M=Object(W.a)({form:"moreVocab"})(M),F=function(e){return e.allParagraphs.map(function(t,a){var r=t.map(function(t){return n.a.createElement("span",{className:"wordSpan",id:"paragraph_".concat(t.paragraph,"_word_").concat(t.position),key:t.position,onClick:function(a){return e.onClick(t.paragraph,t.position)},value:t.displayText},t.displayShowing," ")});return n.a.createElement("p",{className:e.className,key:a},r)})},U=function(e){return function(e){for(var t,a,r=e.length;r;)a=Math.floor(Math.random()*r--),t=e[r],e[r]=e[a],e[a]=t;return e}(e.vocab).map(function(e,t){return n.a.createElement("span",{className:"vocabularySpan",key:t},e," ")})},X=(a(84),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).recognizeWord=a.recognizeWord.bind(Object(P.a)(Object(P.a)(a))),a.moreVocab=a.moreVocab.bind(Object(P.a)(Object(P.a)(a))),a.goToConfirm=a.goToConfirm.bind(Object(P.a)(Object(P.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"recognizeWord",value:function(e,t){var a=null,r=this.props.wordObjects.map(function(r){if(r.paragraph===e&&r.position===t){var n=r.originalWord.match(/['!"#$%&\\'()*+,\-.\/:;<=>?@[\\\]^_`{|}~']/g,"");a=n?n[0]:"",r.displayShowing="_____________"+a}return r}),n=this.props.wordObjects.filter(function(a){return a.paragraph===e&&a.position===t});this.props.updateWordDisplay(r),this.props.vocabularyWord(n[0].originalWord)}},{key:"moreVocab",value:function(e){var t=this;e.additionalVocabulary.split(" ").forEach(function(e){return t.props.vocabularyWord(e)})}},{key:"goToConfirm",value:function(){this.props.history.push("/confirm-cloze")}},{key:"startNew",value:function(){this.props.history.push("input-text"),this.props.resetExercise()}},{key:"render",value:function(){var e=this,t=this.props.vocabularyList.length>=1?n.a.createElement("div",null,n.a.createElement("h3",null,"Text Vocbaulary:"),n.a.createElement("p",{className:"displayForVocab"},n.a.createElement(U,{vocab:this.props.vocabularyList}))):null;return n.a.createElement("div",{className:"ClozeDiv App"},n.a.createElement("div",{id:"buttonDiv"},n.a.createElement("button",{className:"clozeButton submitButton",onClick:function(t){return e.startNew()}},"Start Over"),n.a.createElement("button",{className:"submitButton",onClick:this.goToConfirm},"Confirm Worksheet and Print")),n.a.createElement("header",{className:"App-header"},n.a.createElement("h3",{className:"targetTitle"},"Target Text:"),n.a.createElement(F,{className:"displayTargetText",allParagraphs:this.props.paragraphs,onClick:function(t,a){return e.recognizeWord(t,a)}}),t,n.a.createElement(R,{onSubmit:this.moreVocab})))}}]),t}(n.a.Component)),$=Object(b.b)(function(e){return{paragraphs:e.reducer.paragraphs,wordObjects:e.reducer.wordObjects,vocabularyList:e.reducer.vocabularyList}},{vocabularyWord:function(e){var t=e.replace(/['!"#$%&\\'()*+,\-.\/:;<=>?@[\\\]^_`{|}~']/g,"");return{type:E,data:{vocabularyList:t}}},updateWordDisplay:function(e){return{type:v,data:{wordObjects:e}}},resetExercise:V})(X),G=a(70),J=a.n(G),Y=(a(66),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"finalForm"},n.a.createElement("header",{className:"finalForm-header"},n.a.createElement("div",{id:"printComponentDiv"},n.a.createElement("h2",{id:"finalTitle"},this.props.title),n.a.createElement("h4",null,"Exercise Vocabulary:"),n.a.createElement("p",{className:"textToPrint"},n.a.createElement(U,{vocab:this.props.vocabularyList})),n.a.createElement("h4",null,"Exercise Text:"),n.a.createElement(F,{className:"textToPrint",allParagraphs:this.props.paragraphs,onClick:function(e){return null}}))))}}]),t}(n.a.Component)),q=Object(b.b)(function(e){return{title:e.reducer.title,paragraphs:e.reducer.paragraphs,vocabularyList:e.reducer.vocabularyList}},{})(Y),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).startNew=a.startNew.bind(Object(P.a)(Object(P.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"startNew",value:function(){this.props.history.push("input-text"),this.props.resetExercise()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{id:"buttonDiv"},n.a.createElement("button",{className:"clozeButton submitButton",onClick:function(t){return e.startNew()}},"Start Over"),n.a.createElement("button",{className:"clozeButton submitButton",onClick:function(t){return e.props.history.push("build-cloze")}},"Return to editing"),n.a.createElement(J.a,{trigger:function(){return n.a.createElement("div",null,n.a.createElement("button",{className:"clozeButton submitButton"},"Print this form"))},content:function(){return e.componentRef}})),n.a.createElement(q,{ref:function(t){return e.componentRef=t}}))}}]),t}(n.a.Component),K=Object(b.b)(function(e){return Object(x.a)({},e)},{resetExercise:V})(H),Q=(a(87),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(b.a,{store:C},n.a.createElement(m.a,null,n.a.createElement(d.a,null,n.a.createElement(h.a,{exact:!0,path:"/",component:S}),n.a.createElement(h.a,{exact:!0,path:"/input-text",component:B}),n.a.createElement(h.a,{exact:!0,path:"/build-cloze",component:$}),n.a.createElement(h.a,{exact:!0,path:"/confirm-cloze",component:K}))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[73,2,1]]]);
//# sourceMappingURL=main.48e90631.chunk.js.map