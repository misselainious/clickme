(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"A",image:"./images/FAMSAV15.png",clicked:!1},{id:2,name:"B",image:"./images/FBO-ESG14.png",clicked:!1},{id:3,name:"C",image:"./images/FBO-VVI13.png",clicked:!1},{id:4,name:"D",image:"./images/FCP-SJR16.png",clicked:!1},{id:5,name:"E",image:"./images/FJD-GBR17.png",clicked:!1},{id:6,name:"F",image:"./images/FLR-HEL05.png",clicked:!1},{id:7,name:"G",image:"./images/FMU-CHB08.png",clicked:!1},{id:8,name:"H",image:"./images/FMU-SJR16.png",clicked:!1},{id:9,name:"I",image:"./images/FPC-PAF17.png",clicked:!1},{id:10,name:"J",image:"./images/FMP-CMR17.png",clicked:!1},{id:11,name:"K",image:"./images/FFO-SCA17.png",clicked:!1},{id:12,name:"L",image:"./images/FRX-QUI17.png",clicked:!1}]},,,,,,,,function(e,a,n){e.exports=n(20)},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),i=n(3),r=n.n(i),s=n(4),l=n(5),m=n(7),o=n(6),d=n(8);n(15);var g=function(e){return c.a.createElement("span",{onClick:function(){return e.removeFriend(e.id)},className:"remove"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})),c.a.createElement("div",{className:"content"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("strong",null,"Name:")," ",e.name)))))};n(16);var u=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};n(17);var h=function(e){return c.a.createElement("h1",{className:"title"},e.children)};n(18);var f=function(e){return c.a.createElement("div",null,c.a.createElement("h1",{className:"scores"},"Your Score: ",e.scores),c.a.createElement("h1",{className:"highscore"},"High Score: ",e.highscore),c.a.createElement("h5",{className:"message"},e.message))},k=n(1),p=function(e){function a(){var e,n;Object(s.a)(this,a);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={friends:k,currentScore:0,highscore:0,message:"",clicked:[]},n.removeFriend=function(e){n.setState({friends:k}),n.shuffleFriends(k),n.handleClick(e)},n.shuffleFriends=function(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),t=[e[n],e[a]];e[a]=t[0],e[n]=t[1]}return e},n.handleClick=function(e){console.log(n.state.clicked.indexOf(e)),-1===n.state.clicked.indexOf(e)?(n.handleScore(),n.setState({clicked:n.state.clicked.concat(e)}),console.log("new click")):(console.log("abc"),n.setState({message:"Oh no! You have already clicked on that one!"}),n.handleReset())},n.handleScore=function(){var e=n.state.currentScore+1;n.setState({currentScore:e}),e>=n.state.highscore?(console.log("current score",n.state.currentScore),n.setState({highscore:e})):12===e&&n.setState({message:"Wow! A perfect Score! Your memory must be really sharp..."}),n.shuffleFriends(k)},n.handleReset=function(){n.setState({currentScore:0,highscore:n.state.highscore,message:"",clicked:[]}),n.shuffleFriends(k)},n}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(u,null,c.a.createElement(h,null,"Wine List"),c.a.createElement(f,{scores:this.state.currentScore,highscore:this.state.highscore,message:this.state.message}),c.a.createElement("div",{className:"row"}),this.state.friends.map(function(a){return c.a.createElement(g,{removeFriend:e.removeFriend,id:a.id,key:a.id,name:a.name,image:a.image,handleClick:e.handleClick,handleReset:e.handleReset})}))}}]),a}(t.Component);n(19);r.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.30823545.chunk.js.map