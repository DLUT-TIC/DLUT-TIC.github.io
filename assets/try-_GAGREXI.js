import{f as i,_ as o,o as r,c as s,d as e,n as m,F as c,g as d,t as l}from"./app-C5VNeVq1.js";const u=i({name:"MemberShowcase",data(){return{members:[{id:1,avatar:"avatars/Wzy.jpg",nickname:"😊组长",link:"https://github.com/SimonWuZY"},{id:2,avatar:"avatars/Lyd.png",nickname:"lyydsheep",link:"https://lyydsheep.github.io/"},{id:3,avatar:"avatars/Saber.jpg",nickname:"saber",link:"https://emisaber.github.io/White_Box/"},{id:4,avatar:"avatars/Qym.png",nickname:"Q",link:"https://github.com/madaoQ"},{id:5,avatar:"avatars/Wyh.png",nickname:"无敌外援",link:"https://github.com/Nanami14138"},{id:6,avatar:"avatar6.png",nickname:"User6",link:"https://example.com/user6"},{id:7,avatar:"avatar7.png",nickname:"User7",link:"https://example.com/user7"},{id:8,avatar:"avatar8.png",nickname:"User8",link:"https://example.com/user8"}],currentIndex:0,memberBoxWidth:166,membersToShow:5}},computed:{currentOffset(){return this.currentIndex*this.memberBoxWidth},maxIndex(){return Math.max(0,Math.ceil(this.members.length/this.membersToShow)-1)}},methods:{next(){this.currentIndex<this.maxIndex&&this.currentIndex++},prev(){this.currentIndex>0&&this.currentIndex--}}}),h={class:"member-container"},p={class:"viewport"},v=["src"],k={class:"nickname"},b=["href"];function g(t,n,f,x,_,y){return r(),s("div",h,[e("button",{onClick:n[0]||(n[0]=(...a)=>t.prev&&t.prev(...a)),class:"nav-button left"},"‹"),e("div",p,[e("div",{class:"member-wrapper",style:m({transform:`translateX(-${t.currentOffset}px)`})},[(r(!0),s(c,null,d(t.members,a=>(r(),s("div",{class:"member-box",key:a.id},[e("img",{src:a.avatar,alt:"头像",class:"avatar"},null,8,v),e("div",k,l(a.nickname),1),e("a",{href:a.link,target:"_blank",class:"link"},"访问链接",8,b)]))),128))],4)]),e("button",{onClick:n[1]||(n[1]=(...a)=>t.next&&t.next(...a)),class:"nav-button right"},"›")])}const B=o(u,[["render",g],["__scopeId","data-v-d412c32a"],["__file","try.vue"]]);export{B as default};
