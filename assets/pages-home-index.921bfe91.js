import{u as t,d as a,v as e,r as s,o,x as n,a as r,y as i,w as l,b as u,t as c,z as d,F as p,A as m,B as f,e as E,f as _,j as T}from"./index-df7de27a.js";import{_ as b,a as v}from"./uni-nav-bar.7af5b083.js";const y=a=>{console.log("###",{VITE_ENV:"product",VITE_SERVER:"https://product.cn",VITE_TITLE:"Hello Vite + React + typescript + mobx",VITE_USER_NODE_ENV:"production",VITE_ROOT_DIR:"/home/runner/work/uniapp-boat/uniapp-boat",BASE_URL:"/uniapp-boat/",MODE:"production",DEV:!1,PROD:!0},a.url);const e="https://product.cn"+a.url;return new Promise(((s,o)=>{t({...a,url:e,timeout:a.timeout||6e4,header:{...a.header,"Content-Type":"application/json;charset=UTF-8"},success(t){200!==t.statusCode?o(t.data):s(t.data)},fail(t){o(t)}})}))},V=(t,a,e)=>y({...e,url:t,data:a,method:"GET"}),h=v(a({__name:"index",props:{msg:{default:"学uniapp的走起",type:String,required:!1}},setup(t){const v=e();let y=s([]);const h=async()=>{y.value=await V("/students")};function k(){f()}return a({name:"HelloWorld"}),(t,a)=>{const e=E(_("uni-nav-bar"),b),s=T;return o(),n(p,null,[r(e,{dark:"",fixed:!0,shadow:"","background-color":"#007AFF","status-bar":"","left-icon":"left","left-text":"返回",title:"detail",onClickLeft:k}),i("div",{class:"title"},"欢迎来到详情页"),i("div",{class:"btns"},[r(s,{type:"primary",onClick:d(v).increment},{default:l((()=>[u("count is: "+c(d(v).count),1)])),_:1},8,["onClick"]),r(s,{type:"primary",onClick:h},{default:l((()=>[u("请求数据")])),_:1})]),(o(!0),n(p,null,m(d(y),(t=>(o(),n("div",{key:null==t?void 0:t.id,class:"list"},c(null==t?void 0:t.name),1)))),128))],64)}}}),[["__scopeId","data-v-711f0fc5"]]);export{h as default};