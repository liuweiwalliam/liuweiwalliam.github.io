/**
 * Created by walliam on 2017/2/7.
 */
let content = [
	['dev1 env', 'http://hrmlocal.dev.mila66.com'],
	['dev2 env', 'http://hrmlocal.dev2.mila66.com'],//http://localhost:3003/
	['test env', 'http://hrmv3.x.mila66.com'],
	['3003:admin', 'http://localhost:3003'],
	['product:admin', 'http://h28uan.que360.com'],
	['test:admin', 'http://localhost:3003'],
	['help:3005', 'http://localhost:3005/'],
	['local.oauth', 'http://local.oauth.com'],
	['local.account','http://local.account.com'],
	['local.milaweb','http://milaweb.dev.mila66.com/#edition'],
	['test.milaweb','http://www.x.mila66.com/#edition'],
	['test.saasAdmin','http://saasadmin.x2.mila66.com'],
	['saasAdmin 权限添加','http://saasadmin.x2.mila66.com/api-docs'],
	['测试', 'http://hrmv3.x.mila66.com/home?redirect=1'],
	['总部后台', 'http://admin.x.mila66.com/comp/bill-manager?uuid=QjAyRjZERTEtNzc0Mi0xRkIxLTQ0N0ItM0Y1QThBMzZERDI3'],
	['社保', 'http://www.shebao520.com/aboutus'],
	['商城', 'http://mall.que360.com/'],
	['taiga', 'http://taiga.mila66.com/'],
	['gitlab', 'http://gitlab.mila66.com'],
	['google', 'https://www.google.com'],
	['react首页', 'https://facebook.github.io/react/'],
	['阮一峰react系列', 'http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html'],
	['我的小米', 'https://i.mi.com/#homenew'],
	['知乎', 'https://www.zhihu.com/'],
	['知乎Live', 'https://www.zhihu.com/lives/users/003881100aa941f379502ed508aa2bff'],
	['jsfiddle', 'https://jsfiddle.net/reactjs/69z2wepo/'],
	['github', 'https://github.com/'],
	['hao123', 'https://www.hao123.com'],
	['简书', 'http://www.jianshu.com/p/43bf4f2e0d57'],
	['IFE', 'http://ife.baidu.com/'],
	['w3scholl sql', 'http://www.w3school.com.cn/sql'],
	['developers google', 'https://developers.google.cn/products/'],
	['weui', 'https://github.com/logoove/weui'],
	['jqweui', 'http://jqweui.com/download'],
	['zepto', 'http://www.css88.com/doc/zeptojs_api/#show'],
	['菜鸟', 'http://www.runoob.com/'],
	['h-ui', 'http://www.h-ui.net/Hui-notes-htmlStructure.shtml'],
	['极客学院', 'http://jiuye.jikexueyuan.com/myclass'],
	['react 中文', 'http://react-china.org/'],
	['mdn', 'https://developer.mozilla.org/zh-CN /docs/Web/JavaScript/Reference/Global_Objects/Array/prototype'],
	['phpDoc', 'http://php.net/manual/zh/function.preg-match.php'],
	['segmentFault', 'https://segmentfault.com/'],
	['Hexo在github上构建免费的Web应用', 'http://blog.fens.me/hexo-blog-github/'],
	['腾讯前端IMWEB团队', 'http://imweb.github.io/hire/'],
	['阿里巴巴国际UED团队', 'http://www.aliued.com/'],
	['zepto touch 库源码分析', 'https://segmentfault.com/a/1190000005882908'],
	['regexr', 'http://regexr.com/'],
	['miaov JQ', 'http://jquery.miaov.com/'],
	['大搜车前端博客', 'http://f2e.souche.com/blog/'],
	['站点及仓库地址', 'http://note.youdao.com/share/?token=FCBEB4452EC647E6B35E45C5326AEFAE&gid=2680421#/'],
	['前端开发规范', 'http://note.youdao.com/share/?token=9F18BDF0A44E475089828DAB4860DCCC&gid=2680421#/'],
	['xhr', 'https://segmentfault.com/a/1190000004322487'],
	['60个常用css片段', 'http://blog.poetries.top/2016/08/13/%E5%AE%9E%E7%94%A8%E7%9A%8460%E4%B8%AACSS%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/'],
	['H5常见问题汇总', 'http://www.open-open.com/lib/view/open1449325854077.html'],
	['阮一峰-js模块化编程', 'http://www.ruanyifeng.com/blog/2012/11/require_js.html'],
	['阮一峰-flex', 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html'],
	['alloy team', 'http://x.alloyteam.com/'],
	['alloy team 组件化', 'http://www.alloyteam.com/2015/11/we-will-be-componentized-web-long-text/'],
	['作用域和闭包', 'https://segmentfault.com/a/1190000007791657'],
	['微信 token', 'https://mp.weixin.qq.com/wiki/11/0e4b294685f817b95cbed85ba5e82b8f.html'],
	['实现mvvm', 'http://foio.github.io/mvvm-overview/'],
	['react学习资源<br/>awesomes', 'https://www.awesomes.cn/subject/react'],
	['react环境配置', 'http://www.tuicool.com/articles/mE7ZnqZ'],
	['React-Router阮一峰', 'http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu'],
	['函数式编程-阮一峰', 'http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html'],
	['简书', 'http://www.jianshu.com/p/43bf4f2e0d57'],
	['阮一峰的js全篇教程', 'http://javascript.ruanyifeng.com/nodejs/module.html#toc0'],
	['node学习github版', 'https://github.com/wwsun/awesome-javascript'],
	['e-charts', 'http://echarts.baidu.com/'],
	['react实现的SPA后台管理系统', 'https://segmentfault.com/p/1210000008498798?share_user=1030000008431166&utm_source=Weibo&utm_medium=shareLink&utm_campaign=socialShare'],
	['phpDoc', 'http://php.net/manual/zh/function.preg-match.php'],
	['草料二维码', 'http://cli.im/'],
	['reactRouter-RYF', 'http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu'],
	['webpack配置', 'https://www.talkingcoder.com/article/6310080842228107877'],
	['饥人谷z-index', 'http://www.jianshu.com/p/5e9dbf9bfe52'],
	['墨刀', 'https://v3.modao.cc/app/geWjAHBkgDJqekbVj56wf92IFWjni0u#screen=s3E466728601496913164472'],
	['lavas PWA', 'https://lavas.baidu.com/doc/why-is-progressive'],
	['elemnetUI', 'http://element.eleme.io/#/zh-CN/component/installation'],
	['js多种算法 及实现', 'https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md'],
	['vue-resouce', 'https://github.com/pagekit/vue-resource'],
	['vue-router', 'https://router.vuejs.org/zh-cn/'],
	['正则表达式', 'https://regexper.com/'],
	['网易编译原理', 'http://mooc.study.163.com/learn/1000002001?tid=1000003000#/learn/content'],
	['网易编译原理', 'http://mooc.study.163.com/learn/1000002001?tid=1000003000#/learn/content'],
	['网易数据结构', 'http://www.icourse163.org/learn/ZJU-93001?tid=1002261004#/learn/content'],
	['中国大学慕课', 'http://www.icourse163.org/home.htm?userId=1016593350#/home/course'],
	['airBnb 规范', 'https://www.w3cschool.cn/rtuhtw/3idpuozt.html'],
	['airBnb JSX规范', 'https://github.com/JasonBoy/javascript/tree/master/react'],
	['可视化正则', 'https://jex.im/regulex/'],
	['你不知道的前端知识点 justjavac', 'https://github.com/justjavac/the-front-end-knowledge-you-may-not-know'],
	['babel-在线实验', 'http://babeljs.io'],
	['redux 中文文档', 'http://www.redux.org.cn/docs/introduction/Motivation.html'],
	['swagger-dev', 'http://hrmapi.dev.mila66.com/'],
	['swagger-dev2', 'http://hrmapi.dev2.mila66.com/'],
	['swagger-test', 'http://hrmapi.x.mila66.com'],
	['swagger-oauth授权', 'http://oauth.dev2.mila66.com/api-docs'],
	["在线代码调试","https://tool.lu/coderunner/"]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
	// ["":""]
];


