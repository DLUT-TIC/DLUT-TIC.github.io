import{f as i,_ as o,o as s,c as r,b as a,n as m,F as c,g as u,t as d}from"./app-uYif5SGq.js";const h=i({name:"MemberShowcase",data(){return{members:[{id:1,avatar:"avatars/Wzy.jpg",nickname:"😊组长",link:"https://github.com/SimonWuZY"},{id:2,avatar:"avatars/Lyd.png",nickname:"lyydsheep",link:"https://lyydsheep.github.io/"},{id:3,avatar:"avatars/Saber.jpg",nickname:"saber",link:"https://emisaber.github.io/White_Box/"},{id:4,avatar:"avatars/Qym.png",nickname:"Q",link:"https://github.com/madaoQ"},{id:5,avatar:"avatars/Wyh.png",nickname:"无敌外援",link:"https://github.com/Nanami14138"},{id:6,avatar:"avatars/Wkk.png",nickname:"Sazerac-kk",link:"https://example.com/user6"},{id:7,avatar:"avatars/Xwt.png",nickname:"aoxuexinghuo",link:"https://github.com/aoxuexinghuo"},{id:7,avatar:"/logo.jpg",nickname:"期待您加入！",link:"https://github.com/DLUT-TIC"}],currentIndex:0,memberBoxWidth:166,membersToShow:2}},computed:{currentOffset(){return this.currentIndex*this.memberBoxWidth},maxIndex(){return Math.max(0,Math.ceil(this.members.length/this.membersToShow)-1)}},methods:{next(){this.currentIndex<this.maxIndex&&this.currentIndex++},prev(){this.currentIndex>0&&this.currentIndex--}}}),l={class:"member-container"},p={class:"viewport"},k=["src"],v={class:"nickname"},b=["href"];function g(e,n,x,f,_,y){return s(),r("div",l,[a("button",{onClick:n[0]||(n[0]=(...t)=>e.prev&&e.prev(...t)),class:"nav-button left"},"‹"),a("div",p,[a("div",{class:"member-wrapper",style:m({transform:`translateX(-${e.currentOffset}px)`})},[(s(!0),r(c,null,u(e.members,t=>(s(),r("div",{class:"member-box",key:t.id},[a("img",{src:t.avatar,alt:"头像",class:"avatar"},null,8,k),a("div",v,d(t.nickname),1),a("a",{href:t.link,target:"_blank",class:"link"},"访问链接",8,b)]))),128))],4)]),a("button",{onClick:n[1]||(n[1]=(...t)=>e.next&&e.next(...t)),class:"nav-button right"},"›")])}const B=o(h,[["render",g],["__scopeId","data-v-50c13962"],["__file","try.vue"]]);export{B as default};