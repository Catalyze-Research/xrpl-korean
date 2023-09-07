"use strict";(self.webpackChunkxrpl_korean=self.webpackChunkxrpl_korean||[]).push([[4596],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=t.createContext({}),c=function(e){var n=t.useContext(f),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(f.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,f=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),s=a,g=p["".concat(f,".").concat(s)]||p[s]||d[s]||l;return r?t.createElement(g,o(o({ref:n},u),{},{components:r})):t.createElement(g,o({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var f in n)hasOwnProperty.call(n,f)&&(i[f]=n[f]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6177:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>f,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const l={sidebar_position:3,author:"wonj1012"},o="XRPL DEX \uc0d8\ud50c \ud504\ub85c\uc81d\ud2b8",i={unversionedId:"decentralized_exchange/dex_scenario",id:"decentralized_exchange/dex_scenario",title:"XRPL DEX \uc0d8\ud50c \ud504\ub85c\uc81d\ud2b8",description:"1. \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc0f \ubaa8\ub4c8 \uc784\ud3ec\ud2b8",source:"@site/docs/decentralized_exchange/03-dex_scenario.md",sourceDirName:"decentralized_exchange",slug:"/decentralized_exchange/dex_scenario",permalink:"/docs/decentralized_exchange/dex_scenario",draft:!1,editUrl:"https://github.com/Catalyze-Research/xrpl-korean/site/docs/decentralized_exchange/03-dex_scenario.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,author:"wonj1012"},sidebar:"tutorialSidebar",previous:{title:"XRPL\uc758 DEX",permalink:"/docs/decentralized_exchange/xrpl_dex"},next:{title:"AMM (Automated Market Maker)",permalink:"/docs/decentralized_exchange/amm"}},f={},c=[{value:"1. \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc0f \ubaa8\ub4c8 \uc784\ud3ec\ud2b8",id:"1-\ub77c\uc774\ube0c\ub7ec\ub9ac-\ubc0f-\ubaa8\ub4c8-\uc784\ud3ec\ud2b8",level:2},{value:"2. \uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589 \ub514\ub809\ud1a0\ub9ac \uc124\uc815",id:"2-\uc2a4\ud06c\ub9bd\ud2b8-\uc2e4\ud589-\ub514\ub809\ud1a0\ub9ac-\uc124\uc815",level:2},{value:"3. \uba54\uc778 \ud568\uc218 \uc815\uc758 \ubc0f \ucd08\uae30\ud654",id:"3-\uba54\uc778-\ud568\uc218-\uc815\uc758-\ubc0f-\ucd08\uae30\ud654",level:2},{value:"4. \uc6d0\ud558\ub294 \uac70\ub798 \uc870\uac74 \uc124\uc815",id:"4-\uc6d0\ud558\ub294-\uac70\ub798-\uc870\uac74-\uc124\uc815",level:2},{value:"5. XRPL \uc624\ub354\ubd81 \uc870\ud68c",id:"5-xrpl-\uc624\ub354\ubd81-\uc870\ud68c",level:2},{value:"6. \uc624\ub354\ubd81 <code>offer</code> \ubd84\uc11d",id:"6-\uc624\ub354\ubd81-offer-\ubd84\uc11d",level:2},{value:"7. <code>offer</code> \ubaa9\ub85d \uc21c\ud68c\ud558\uba70 \uc870\uac74 \ud655\uc778\ud558\uae30",id:"7-offer-\ubaa9\ub85d-\uc21c\ud68c\ud558\uba70-\uc870\uac74-\ud655\uc778\ud558\uae30",level:2},{value:"8. offer \ucd1d \ud569\uacc4 \ub85c\uae45",id:"8-offer-\ucd1d-\ud569\uacc4-\ub85c\uae45",level:2},{value:"9. \ub450 \ubc88\uc9f8 \uc624\ub354\ubd81 \uc815\ubcf4 \uc870\ud68c",id:"9-\ub450-\ubc88\uc9f8-\uc624\ub354\ubd81-\uc815\ubcf4-\uc870\ud68c",level:2},{value:"10. \ub450 \ubc88\uc9f8 \uc624\ub354\ubd81\uc758 offer \uc815\ubcf4 \ucc98\ub9ac",id:"10-\ub450-\ubc88\uc9f8-\uc624\ub354\ubd81\uc758-offer-\uc815\ubcf4-\ucc98\ub9ac",level:2},{value:"10. OfferCreate \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1",id:"10-offercreate-\ud2b8\ub79c\uc7ad\uc158-\uc804\uc1a1",level:2},{value:"11. \uc794\uc561 \ubcc0\ub3d9 \ud655\uc778",id:"11-\uc794\uc561-\ubcc0\ub3d9-\ud655\uc778",level:2},{value:"12. XRPL \uae08\uc561\uc744 \ubb38\uc790\uc5f4 \ubcc0\ud658",id:"12-xrpl-\uae08\uc561\uc744-\ubb38\uc790\uc5f4-\ubcc0\ud658",level:2},{value:"13. OfferCreate \ud2b8\ub79c\uc7ad\uc158 \uacb0\uacfc \ubd84\uc11d",id:"13-offercreate-\ud2b8\ub79c\uc7ad\uc158-\uacb0\uacfc-\ubd84\uc11d",level:2},{value:"14. \uac70\ub798 \uacb0\uacfc \ubd84\uc11d",id:"14-\uac70\ub798-\uacb0\uacfc-\ubd84\uc11d",level:2},{value:"16. \uc794\uc561 \ud655\uc778",id:"16-\uc794\uc561-\ud655\uc778",level:2},{value:"17. \uc2e4\ud589",id:"17-\uc2e4\ud589",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xrpl-dex-\uc0d8\ud50c-\ud504\ub85c\uc81d\ud2b8"},"XRPL DEX \uc0d8\ud50c \ud504\ub85c\uc81d\ud2b8"),(0,a.kt)("h2",{id:"1-\ub77c\uc774\ube0c\ub7ec\ub9ac-\ubc0f-\ubaa8\ub4c8-\uc784\ud3ec\ud2b8"},"1. \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc0f \ubaa8\ub4c8 \uc784\ud3ec\ud2b8"),(0,a.kt)("p",null,"XRP Ledger\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ud544\uc694\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \ubaa8\ub4c8\uc744 \ubd88\ub7ec\uc635\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom decimal import Decimal\n\nfrom xrpl.models.currencies import (\n    IssuedCurrency,\n    XRP,\n)\nfrom xrpl.utils import (\n    drops_to_xrp,\n    get_balance_changes,\n    xrp_to_drops,\n)\n\nfrom account import XrplAccount\nfrom transaction import XrplTransaction\nfrom request import XrplRequest\nfrom utils import Logger\n")),(0,a.kt)("h2",{id:"2-\uc2a4\ud06c\ub9bd\ud2b8-\uc2e4\ud589-\ub514\ub809\ud1a0\ub9ac-\uc124\uc815"},"2. \uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589 \ub514\ub809\ud1a0\ub9ac \uc124\uc815"),(0,a.kt)("p",null,"\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ud604\uc7ac \uc704\uce58\ub97c \uae30\ubc18\uc73c\ub85c \ub85c\uadf8 \ud30c\uc77c\uacfc \uc9c0\uac11 \uc815\ubcf4\uc640 \uac19\uc740 \ub2e4\ub978 \ub9ac\uc18c\uc2a4\uc758 \uacbd\ub85c\ub97c \ucc3e\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"DIR = os.path.dirname(__file__)\n")),(0,a.kt)("p",null,"\ub85c\uadf8 \ud30c\uc77c\uc758 \uc704\uce58\ub97c \uc704\ud574\uc11c \ud604\uc7ac \uc2a4\ud06c\ub9bd\ud2b8\uc758 \ub514\ub809\ud1a0\ub9ac\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"3-\uba54\uc778-\ud568\uc218-\uc815\uc758-\ubc0f-\ucd08\uae30\ud654"},"3. \uba54\uc778 \ud568\uc218 \uc815\uc758 \ubc0f \ucd08\uae30\ud654"),(0,a.kt)("p",null,"\uba54\uc778 \ud568\uc218\ub97c \uc2dc\uc791\ud558\uba74\uc11c \ud544\uc694\ud55c XRPL \uacc4\uc815\uacfc \ub85c\uadf8 \uae30\ub85d \ub3c4\uad6c\ub97c \uc900\ube44\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    account = XrplAccount(\n        wallet_path=os.path.join(DIR, "wallets", "dex_account.json"),\n        create=False,\n    )\n\n    logger = Logger(os.path.join(DIR, "logs", "dex_scenario.log"))\n')),(0,a.kt)("h2",{id:"4-\uc6d0\ud558\ub294-\uac70\ub798-\uc870\uac74-\uc124\uc815"},"4. \uc6d0\ud558\ub294 \uac70\ub798 \uc870\uac74 \uc124\uc815"),(0,a.kt)("p",null,"\uac70\ub798\ud558\ub824\ub294 \ud654\ud3d0\uc640 \uadf8\uc5d0 \ub300\ud55c \uac00\uaca9, \uadf8\ub9ac\uace0 \uc9c0\ubd88\ud560 \ud654\ud3d0\uc640 \uadf8 \uac00\uaca9\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'    # TST \ucf54\uc778\uc744 25\uac1c \uc0ac\ub824\uace0 \ud569\ub2c8\ub2e4.\n    we_want = {\n        "currency": IssuedCurrency(\n            currency="TST", issuer="rP9jPyP5kyvFRb6ZiRghAGw5u8SGAmU4bd"\n        ),\n        "value": "25",\n    }\n\n    # XRP\ub97c 10\uac1c\ub85c \uad50\ud658\ud558\ub824\uace0 \ud558\uace0, \ucd5c\ub300 15%\uc758 \uad50\ud658 \ube44\uc6a9\uae4c\uc9c0 \uc9c0\ubd88\ud558\ub824\uace0 \ud569\ub2c8\ub2e4.\n    # \uc800\ud76c\uac00 \uc6d0\ud558\ub294 \ube44\uc728\ubcf4\ub2e4 15% \ube44\uc2f8\ub2e4\uba74 (\ube44\uc728\uc774 \ub192\ub2e4\uba74) \uac70\ub798\ub97c \uc9c4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n    we_spend = {\n        "currency": XRP(),\n        # 25 TST * 10 XRP per TST * 15% \uad50\ud658 \ube44\uc6a9\n        "value": xrp_to_drops(25 * 10 * 1.15),\n    }\n\n    # taker\ub294 25 TST\ub97c 10 XRP\ub85c \uad50\ud658\ud558\ub824\uace0 \ud569\ub2c8\ub2e4.\n    # "Quality"\ub294 TakerPays / TakerGets\ub85c \uc815\uc758\ub429\ub2c8\ub2e4.\n    # "Quality" \uc22b\uc790\uac00 \uc791\uc744\uc218\ub85d offer\ub41c \uad50\ud658 \ube44\uc728\uc774 taker\uc5d0\uac8c \ub354 \uc720\ub9ac\ud569\ub2c8\ub2e4.\n    proposed_quality = Decimal(we_spend["value"]) / Decimal(we_want["value"])\n')),(0,a.kt)("h2",{id:"5-xrpl-\uc624\ub354\ubd81-\uc870\ud68c"},"5. XRPL \uc624\ub354\ubd81 \uc870\ud68c"),(0,a.kt)("p",null,"\ud2b9\uc815 \ud654\ud3d0 \uc30d\uc5d0 \ub300\ud55c offer\uc744 XRPL\uc758 \uc624\ub354\ubd81\uc5d0\uc11c \uac80\uc0c9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'orderbook_info = XrplRequest.get_orderbook_info(\n    client=account.client,\n    taker_gets=we_want["currency"],\n    taker_pays=we_spend["currency"],\n)\nlogger.log("\uc624\ub354\ubd81 \uc815\ubcf4")\nlogger.log(orderbook_info)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc774 \ucf54\ub4dc\ub294 XRPL\uc758 \uc624\ub354\ubd81\uc5d0\uc11c \ud2b9\uc815 \ud654\ud3d0 \uc30d\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uac00\uc838\uc635\ub2c8\ub2e4. \uc5ec\uae30\uc11c ",(0,a.kt)("inlineCode",{parentName:"li"},'we_want["currency"]'),"\ub294 \uc6d0\ud558\ub294 \ud654\ud3d0, ",(0,a.kt)("inlineCode",{parentName:"li"},'we_spend["currency"]'),"\ub294 \uc9c0\ubd88\ud560 \ud654\ud3d0\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"6-\uc624\ub354\ubd81-offer-\ubd84\uc11d"},"6. \uc624\ub354\ubd81 ",(0,a.kt)("inlineCode",{parentName:"h2"},"offer")," \ubd84\uc11d"),(0,a.kt)("p",null,"\uc624\ub354\ubd81\uc5d0\uc11c \ubc1b\uc544\uc628 offer\uc744 \ubd84\uc11d\ud558\uc5ec \uc6d0\ud558\ub294 \uc870\uac74\uc5d0 \ubd80\ud569\ud558\ub294 offer\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'offers = orderbook_info.get("offers", [])\nwant_amt = Decimal(we_want["value"])\nrunning_total = Decimal(0)\n\nif len(offers) == 0:\n    logger.log("\ub9e4\uce6d \uc624\ub354\ubd81\uc5d0 offer\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc989\uc2dc \uc2e4\ud589\ub420 \uac00\ub2a5\uc131\uc774 \ub0ae\uc2b5\ub2c8\ub2e4.")\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc624\ub354\ubd81\uc5d0\uc11c \uac00\uc838\uc628 offer\uc744 \ubd84\uc11d\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"offers"),"\uc5d0\ub294 \uc624\ub354\ubd81\uc758 offer \ubaa9\ub85d\uc774 \ub4e4\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"want_amt"),"\ub294 \uc6d0\ud558\ub294 \ud654\ud3d0\uc758 \uae08\uc561\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"7-offer-\ubaa9\ub85d-\uc21c\ud68c\ud558\uba70-\uc870\uac74-\ud655\uc778\ud558\uae30"},"7. ",(0,a.kt)("inlineCode",{parentName:"h2"},"offer")," \ubaa9\ub85d \uc21c\ud68c\ud558\uba70 \uc870\uac74 \ud655\uc778\ud558\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'else:\n        for o in offers:\n            if Decimal(o["quality"]) <= proposed_quality:\n                logger.log(\n                    f"\uc77c\uce58\ud558\ub294 \uc81c\uc548\uc774 \ubc1c\uacac\ub418\uc5c8\uace0, {o.get(\'owner_funds\')} "\n                    f"{we_want[\'currency\']}\ub85c \uc790\uae08\uc774 \ub9c8\ub828\ub418\uc5c8\uc2b5\ub2c8\ub2e4."\n                )\n                running_total += Decimal(o.get("owner_funds", Decimal(0)))\n                if running_total >= want_amt:\n                    logger.log("\uc804\uccb4 \uc81c\uc548\uc774 \uc989\uc2dc \uccb4\uacb0\ub420 \uac00\ub2a5\uc131\uc774 \ub192\uc2b5\ub2c8\ub2e4.")\n                    break\n            else:\n                logger.log("\ub098\uba38\uc9c0 \uc8fc\ubb38\uc740 \ub108\ubb34 \ube44\uc309\ub2c8\ub2e4.")\n                break\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"offer \ubaa9\ub85d\uc744 \uc21c\ud68c\ud558\uba70 \uac01 offer\uc758 ",(0,a.kt)("inlineCode",{parentName:"li"},"quality"),"\uac00 \uc6d0\ud558\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"quality"),"\ubcf4\ub2e4 \ub0ae\uc740\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9cc\uc57d offer\uc758 \ud488\uc9c8\uc774 \uc6d0\ud558\ub294 \ud488\uc9c8\ubcf4\ub2e4 \ub0ae\ub2e4\uba74, \uadf8 offer\uc758 \uc790\uae08\uc744 ",(0,a.kt)("inlineCode",{parentName:"li"},"running_total"),"\uc5d0 \ub354\ud569\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"8-offer-\ucd1d-\ud569\uacc4-\ub85c\uae45"},"8. offer \ucd1d \ud569\uacc4 \ub85c\uae45"),(0,a.kt)("p",null,"\uc870\uac74\uc5d0 \ubd80\ud569\ud558\ub294 offer\uc758 \ucd1d\ud569\uc744 \ub85c\uadf8\uc5d0 \uae30\ub85d\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'logger.log(f"\ucd1d \uc77c\uce58: {min(running_total, want_amt)} {we_want[\'currency\']}")\n        if 0 < running_total < want_amt:\n            logger.log(\n                f"\ub098\uba38\uc9c0 {want_amt - running_total} {we_want[\'currency\']} "\n                "\uc8fc\ubb38\uc7a5 \uc0c1\ub2e8\uc5d0 \ubc30\uce58\ub420 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."\n            )\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc624\ub354\ubd81\uc758 offer \uc911 \uc77c\ubd80 \ub610\ub294 \uc804\uccb4\uac00 \uc6d0\ud558\ub294 \uae08\uc561\uc5d0 \ub3c4\ub2ec\ud558\ub294\uc9c0 \ud655\uc778\ud558\uace0, \uc774\uc5d0 \ub530\ub77c \ub85c\uadf8\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"9-\ub450-\ubc88\uc9f8-\uc624\ub354\ubd81-\uc815\ubcf4-\uc870\ud68c"},"9. \ub450 \ubc88\uc9f8 \uc624\ub354\ubd81 \uc815\ubcf4 \uc870\ud68c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if running_total == 0:\n        logger.log("\ucd1d\ub7c9\uc774 0\uc785\ub2c8\ub2e4")\n        logger.log("\ub450 \ubc88\uc9f8 \uc8fc\ubb38\uc7a5 \uc815\ubcf4 \uc694\uccad \uc911...")\n        orderbook2_info = XrplRequest.get_orderbook_info(\n            client=account.client,\n            taker=account.address,\n            ledger_index="current",\n            taker_gets=we_spend["currency"],\n            taker_pays=we_want["currency"],\n            limit=10,\n        )\n\n        logger.log("\uc8fc\ubb38\uc7a52:")\n        logger.log(orderbook2_info)\n\n        # TakerGets/TakerPays\uac00 \ubc18\ub300\uc774\uae30 \ub54c\ubb38\uc5d0 quality\ub294 \uc5ed\uc218\uc785\ub2c8\ub2e4.\n        # 1 / proposed_quality\ub85c\ub3c4 \uacc4\uc0b0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n        offered_quality = Decimal(we_want["value"]) / Decimal(we_spend["value"])\n\n        tally_currency = we_spend["currency"]\n        if isinstance(tally_currency, XRP):\n            tally_currency = f"{tally_currency}\uc758 \ub4dc\ub86d"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uccab \ubc88\uc9f8 \uc624\ub354\ubd81\uc5d0\uc11c \uc6d0\ud558\ub294 offer\uc744 \ucc3e\uc9c0 \ubabb\ud55c \uacbd\uc6b0, \ub450 \ubc88\uc9f8 \uc624\ub354\ubd81\uc5d0\uc11c \uc815\ubcf4\ub97c \uac00\uc838\uc635\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"10-\ub450-\ubc88\uc9f8-\uc624\ub354\ubd81\uc758-offer-\uc815\ubcf4-\ucc98\ub9ac"},"10. \ub450 \ubc88\uc9f8 \uc624\ub354\ubd81\uc758 offer \uc815\ubcf4 \ucc98\ub9ac"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'offers2 = orderbook2_info.get("offers", [])\n        running_total2 = Decimal(0)\n        if len(offers2) == 0:\n            logger.log("\uc8fc\ubb38\uc7a5\uc5d0 \uc720\uc0ac\ud55c \uc81c\uc548\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac \uc81c\uc548\uc774 \uccab \ubc88\uc9f8\uc77c \uac83\uc785\ub2c8\ub2e4.")\n        else:\n            for o in offers2:\n                if Decimal(o["quality"]) <= offered_quality:\n                    logger.log(\n                        f"\uae30\uc874 \uc81c\uc548\uc774 \ubc1c\uacac\ub418\uc5c8\uace0, {o.get(\'owner_funds\')} "\n                        f"{tally_currency}\ub85c \uc790\uae08\uc774 \ub9c8\ub828\ub418\uc5c8\uc2b5\ub2c8\ub2e4."\n                    )\n                    running_total2 += Decimal(o.get("owner_funds", Decimal(0)))\n                else:\n                    logger.log("\ub098\uba38\uc9c0 \uc8fc\ubb38\uc740 \uc6b0\ub9ac \uc81c\uc548\ubcf4\ub2e4 \uc544\ub798\uc5d0 \ubc30\uce58\ub420 \uac83\uc785\ub2c8\ub2e4.")\n                    break\n\n            logger.log(\n                f"\uc6b0\ub9ac \uc81c\uc548\uc740 \uc801\uc5b4\ub3c4 {running_total2} " f"{tally_currency} \uc544\ub798\uc5d0 \ubc30\uce58\ub420 \uac83\uc785\ub2c8\ub2e4."\n            )\n            if 0 < running_total2 < want_amt:\n                logger.log(\n                    f"\ub098\uba38\uc9c0 {want_amt - running_total2} {tally_currency} "\n                    "\uc8fc\ubb38\uc7a5 \uc0c1\ub2e8\uc5d0 \ubc30\uce58\ub420 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."\n                )\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub450 \ubc88\uc9f8 \uc624\ub354\ubd81\uc5d0\uc11c \uac00\uc838\uc628 offer\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \uc624\ub354\ubd81\uc5d0\uc11c\uc758 \ucc98\ub9ac\uc640 \uc720\uc0ac\ud55c \ub85c\uc9c1\uc744 \uc0ac\uc6a9\ud558\ub418, \ud488\uc9c8 \uacc4\uc0b0\uc774 \uc870\uae08 \ub2e4\ub985\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc694\uc57d\ud558\uba74, \uc774 \ucf54\ub4dc\ub294 XRPL\uc758 \uc624\ub354\ubd81\uc5d0\uc11c \ud2b9\uc815 \ud654\ud3d0 \uc30d\uc5d0 \ub300\ud55c offer \uc815\ubcf4\ub97c \uac00\uc838\uc640 \uc6d0\ud558\ub294 \uae08\uc561\uc5d0 \ub3c4\ub2ec\ud560 \uc218 \uc788\ub294\uc9c0, \uadf8\ub9ac\uace0 \uc5b4\ub5a4 offer\uc774 \uc6d0\ud558\ub294 \ud488\uc9c8 \uc870\uac74\uc5d0 \ubd80\ud569\ud558\ub294\uc9c0\ub97c \ubd84\uc11d\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"10-offercreate-\ud2b8\ub79c\uc7ad\uc158-\uc804\uc1a1"},"10. OfferCreate \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'result = XrplTransaction.create_offer(\n    account=account,\n    taker_gets=we_spend["value"],\n    taker_pays=we_want["currency"].to_amount(we_want["value"]),\n)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XRPL\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"li"},"OfferCreate")," \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\uc1a1\ud558\uc5ec offer\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774\uc81c \ud310\ub9e4\uc790\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},'we_spend["value"]')," \ub9cc\ud07c\uc758 \uc790\uae08\uc744 \uc9c0\ubd88\ud558\uace0 ",(0,a.kt)("inlineCode",{parentName:"li"},'we_want["currency"]')," \ud654\ud3d0\ub97c \uc5bb\uae30\ub97c \uc6d0\ud569\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"11-\uc794\uc561-\ubcc0\ub3d9-\ud655\uc778"},"11. \uc794\uc561 \ubcc0\ub3d9 \ud655\uc778"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'balance_changes = get_balance_changes(result["meta"])\nlogger.log("\uc794\uc561 \ubcc0\ub3d9:")\nfor change in balance_changes:\n    logger.log(dict(change))\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc7ad\uc158 \uacb0\uacfc\uc5d0\uc11c \uc794\uc561\uc758 \ubcc0\ub3d9 \uc0ac\ud56d\uc744 \ud655\uc778\ud558\uace0 \ub85c\uadf8\uc5d0 \ucd9c\ub825\ud569\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"12-xrpl-\uae08\uc561\uc744-\ubb38\uc790\uc5f4-\ubcc0\ud658"},"12. XRPL \uae08\uc561\uc744 \ubb38\uc790\uc5f4 \ubcc0\ud658"),(0,a.kt)("p",null,"XRPL\uc5d0\uc11c\uc758 \uae08\uc561(\ud639\uc740 drop)\uc744 \ubcf4\uae30 \uc88b\uac8c \ubb38\uc790\uc5f4\ub85c \ubcc0\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def amt_str(amt) -> str:\n    if isinstance(amt, str):\n        return f\"{drops_to_xrp(amt)} XRP\"\n    else:\n        return f\"{amt['value']} {amt['currency']}.{amt['issuer']}\"\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h2",{id:"13-offercreate-\ud2b8\ub79c\uc7ad\uc158-\uacb0\uacfc-\ubd84\uc11d"},"13. OfferCreate \ud2b8\ub79c\uc7ad\uc158 \uacb0\uacfc \ubd84\uc11d"),(0,a.kt)("p",null,'\ud2b8\ub79c\uc7ad\uc158 \uacb0\uacfc\uc5d0\uc11c "AffectedNodes" \ud56d\ubaa9\uc744 \uc21c\ud68c\ud558\uc5ec \uacb0\uacfc\ub97c \ubd84\uc11d\ud569\ub2c8\ub2e4.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'offers_affected = 0\nfor affnode in result["meta"]["AffectedNodes"]:\n    ...\n')),(0,a.kt)("h2",{id:"14-\uac70\ub798-\uacb0\uacfc-\ubd84\uc11d"},"14. \uac70\ub798 \uacb0\uacfc \ubd84\uc11d"),(0,a.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \uacb0\uacfc\uc758 \uba54\ud0c0 \ub370\uc774\ud130\ub97c \ubd84\uc11d\ud558\uc5ec \uc601\ud5a5\uc744 \ubc1b\uc740 \ub178\ub4dc\uc640 offer\uc758 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\uace0 \ub85c\uae45\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if "ModifiedNode" in affnode:\n    if affnode["ModifiedNode"]["LedgerEntryType"] == "Offer":\n        # \uc77c\ubc18\uc801\uc73c\ub85c Offer \uc720\ud615\uc758 ModifiedNode\ub294\n        # \uc774\uc804 Offer\uac00 \uc774 Offer\uc5d0 \uc758\ud574 \ubd80\ubd84\uc801\uc73c\ub85c \uc18c\ube44\ub418\uc5c8\uc74c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.\n        offers_affected += 1\n    elif "DeletedNode" in affnode:\n        if affnode["DeletedNode"]["LedgerEntryType"] == "Offer":\n            # \uc81c\uac70\ub41c Offer\ub294 \uc644\uc804\ud788 \uc18c\ube44\ub418\uc5c8\uac70\ub098,\n            # \ub9cc\ub8cc\ub418\uac70\ub098 \ub610\ub294 \uc790\uae08\uc774 \ubd80\uc871\ud55c \uac83\uc73c\ub85c \ud655\uc778\ub418\uc5c8\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n            offers_affected += 1\n    elif "CreatedNode" in affnode:\n        if affnode["CreatedNode"]["LedgerEntryType"] == "RippleState":\n            logger.log("Trust line\uc744 \uc0dd\uc131\ud588\uc2b5\ub2c8\ub2e4.")\n        elif affnode["CreatedNode"]["LedgerEntryType"] == "Offer":\n            offer = affnode["CreatedNode"]["NewFields"]\n            logger.log(\n                f"{offer[\'Account\']}\uc758 \uc18c\uc720\uc778 Offer\uac00 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4. "\n                f"TakerGets={amt_str(offer[\'TakerGets\'])} \ubc0f "\n                f"TakerPays={amt_str(offer[\'TakerPays\'])}."\n            )\nlogger.log(f"\uc77c\uce58\ud558\ub294 Offer {offers_affected}\uac1c \uc218\uc815 \ub610\ub294 \uc81c\uac70")\n')),(0,a.kt)("h2",{id:"16-\uc794\uc561-\ud655\uc778"},"16. \uc794\uc561 \ud655\uc778"),(0,a.kt)("p",null,"\uac80\uc99d\ub41c \uc6d0\uc7a5\uc5d0\uc11c \uc8fc\uc18c\uc758 \uc794\uc561\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'logger.log("\uac80\uc99d\ub41c \uc6d0\uc7a5\uc758 \uc8fc\uc18c \uc794\uc561 \uac00\uc838\uc624\uae30...")\nbalances = XrplRequest.get_trust_lines(\n    client=account.client,\n    address=account.address,\n    ledger_index="validated",\n)\n\nlogger.log(balances)\n\nlogger.log("\uc131\uacf5\uc801\uc73c\ub85c \uc8fc\ubb38\uc744 \uc0dd\uc131\ud588\uc2b5\ub2c8\ub2e4!")\n')),(0,a.kt)("h2",{id:"17-\uc2e4\ud589"},"17. \uc2e4\ud589"),(0,a.kt)("p",null,"\uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc2e4\ud589\ub418\uba74 main \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uc55e\uc11c \uc815\uc758\ud55c \ubaa8\ub4e0 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if __name__ == "__main__":\n    main()\n')))}d.isMDXComponent=!0}}]);