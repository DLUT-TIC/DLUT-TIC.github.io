import{f as i,_ as o,o as s,c as r,d as t,n as m,F as c,g as d,t as u}from"./app-Di1LncBp.js";const h=i({name:"MemberShowcase",data(){return{members:[{id:1,avatar:"avatars/Wzy.jpg",nickname:"😊组长",link:"https://github.com/SimonWuZY"},{id:2,avatar:"avatars/Lyd.png",nickname:"lyydsheep",link:"https://lyydsheep.github.io/"},{id:3,avatar:"avatars/Saber.jpg",nickname:"saber",link:"https://emisaber.github.io/White_Box/"},{id:4,avatar:"avatars/Qym.png",nickname:"Q",link:"https://github.com/madaoQ"},{id:5,avatar:"avatars/Wyh.png",nickname:"无敌外援",link:"https://github.com/Nanami14138"},{id:6,avatar:"avatars/Wkk.png",nickname:"Sazerac-kk",link:"http://www.sazerac.asia/"},{id:7,avatar:"avatars/Xwt.png",nickname:"aoxuexinghuo",link:"https://github.com/aoxuexinghuo"},{id:8,avatar:"avatar8.png",nickname:"User8",link:"https://example.com/user8"}],currentIndex:0,memberBoxWidth:166,membersToShow:7}},computed:{currentOffset(){return this.currentIndex*this.memberBoxWidth},maxIndex(){return Math.max(0,Math.ceil(this.members.length/this.membersToShow)-1)}},methods:{next(){this.currentIndex<this.maxIndex&&this.currentIndex++},prev(){this.currentIndex>0&&this.currentIndex--}}}),l={class:"member-container"},p={class:"viewport"},v=["src"],k={class:"nickname"},b=["href"];function g(e,n,x,f,_,y){return s(),r("div",l,[t("button",{onClick:n[0]||(n[0]=(...a)=>e.prev&&e.prev(...a)),class:"nav-button left"},"‹"),t("div",p,[t("div",{class:"member-wrapper",style:m({transform:`translateX(-${e.currentOffset}px)`})},[(s(!0),r(c,null,d(e.members,a=>(s(),r("div",{class:"member-box",key:a.id},[t("img",{src:a.avatar,alt:"头像",class:"avatar"},null,8,v),t("div",k,u(a.nickname),1),t("a",{href:a.link,target:"_blank",class:"link"},"访问链接",8,b)]))),128))],4)]),t("button",{onClick:n[1]||(n[1]=(...a)=>e.next&&e.next(...a)),class:"nav-button right"},"›")])}const I=o(h,[["render",g],["__scopeId","data-v-2e9b5c21"],["__file","try.vue"]]);export{I as default};
