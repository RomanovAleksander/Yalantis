(this["webpackJsonpyalantis-test-task"]=this["webpackJsonpyalantis-test-task"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){t.exports=n(24)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),s=(n(17),n(8)),u=n(9),i=n(1),l=n(2),m=n(5),h=n(4),f=n(6),d=(n(18),function(t){var e=t.firstName,n=t.lastName,a=t.dob;return r.a.createElement("div",{className:"user"},r.a.createElement("p",{className:"name"},"Name: ",e," ",n),r.a.createElement("p",null," DOB: ",a))}),p=(n(19),function(t){var e=t.users,n=e.map((function(t){var e=t.id,n=Object(f.a)(t,["id"]);return r.a.createElement("div",{key:e},r.a.createElement(d,n))}));return e?r.a.createElement("div",{className:"user-list"},n):null}),v=n(3),b=n.n(v),O=n(7),j=new(function(){function t(){Object(i.a)(this,t),this._url="https://yalantis-react-school-api.yalantis.com/api/task0/users",this.errObj=function(t,e){return{message:"Invalid request: ".concat(t,", status ").concat(e),status:e}}}return Object(l.a)(t,[{key:"fetchData",value:function(){var t=Object(O.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this._url));case 2:if((e=t.sent).ok){t.next=5;break}throw this.errObj("".concat(this._url),e.status);case 5:return t.abrupt("return",e.json());case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(O.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.fetchData());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}()),y=(n(21),n(22),function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={color:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.count;t>=11?this.setState({color:"red"}):t<11&&t>=7?this.setState({color:"green"}):t<7&&t>=3?this.setState({color:"blue"}):t<3&&this.setState({color:"grey"}),console.log(this.state.color)}},{key:"render",value:function(){var t=this.props,e=t.name,n=t.count,a=t.changeFilter;return r.a.createElement("div",{className:"user ".concat(this.state.color),onMouseOver:a},e,", ",n)}}]),n}(r.a.Component)),g=(n(23),function(t){var e=t.months,n=t.changeFilter,a=e.map((function(t){var e=t.id,a=Object(f.a)(t,["id"]);return r.a.createElement("div",{key:e},r.a.createElement(y,Object.assign({},a,{changeFilter:function(){return n(e)}})))}));return e?r.a.createElement("div",{className:"month-list"},a):null}),k=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).updateMonthsArray=function(t){var e=a.state.months.findIndex((function(e){return e.id===t.id}));a.setState((function(t){var n,a,r=t.months;return{months:[].concat(Object(s.a)(r.slice(0,e)),[(n=r[e],a=1,Object(u.a)(Object(u.a)({},n),{},{count:n.count+a}))],Object(s.a)(r.slice(e+1)))}}))},a.onFilterChange=function(t){a.setState({filter:t})},a.state={users:[],months:[{id:0,name:"January",count:0},{id:1,name:"February",count:0},{id:2,name:"March",count:0},{id:3,name:"April",count:0},{id:4,name:"May",count:0},{id:5,name:"June",count:0},{id:6,name:"July",count:0},{id:7,name:"August",count:0},{id:8,name:"September",count:0},{id:9,name:"October",count:0},{id:10,name:"November",count:0},{id:11,name:"December",count:0}],filter:null,loaded:!1,err:{}},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;j.get().then((function(e){t.setState({users:e}),e.forEach((function(e){var n=new Date(e.dob);t.state.months.forEach((function(e){e.id===Number(n.getMonth())&&t.updateMonthsArray(e)}))})),t.setState({loaded:!0}),console.log(t.state.months)})).catch((function(e){t.setState({err:e})}))}},{key:"render",value:function(){var t=this.state,e=t.months,n=t.users,a=t.loaded,c=t.filter,o=n.filter((function(t){return Number(new Date(t.dob).getMonth())===c}));return r.a.createElement("div",{className:"wrapper"},a&&r.a.createElement(g,{months:e,changeFilter:this.onFilterChange}),null===c?"Hold":r.a.createElement(p,{users:o}))}}]),n}(r.a.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.a59db204.chunk.js.map