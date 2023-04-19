(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{358:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"latex-on-linux配置指南-texlive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latex-on-linux配置指南-texlive"}},[t._v("#")]),t._v(" LaTex on Linux配置指南 - TexLive")]),t._v(" "),s("blockquote",[s("p",[t._v("系统：Ubuntu 17.04"),s("br"),t._v("\n软件搭配：texLive2017 + VSCode")])]),t._v(" "),s("h2",{attrs:{id:"简述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),s("p",[t._v("导师要求我用英文写周报，而且强制要求用LaTex完成，于是乎就花了点时间配置了一下LaTex环境。目前有很多IDE形式的LaTex集成环境了，但是我喜欢用一个编辑器搞定所有事情，于是选用了TexLive + VSCode的配置，其他配置可以参考这个"),s("a",{attrs:{href:"https://www.zhihu.com/question/19954023",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎答案"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/16968934/30162000-78822d32-9405-11e7-9094-7d234b2a1b2a.png",alt:"2017-09-07 19-21-20"}})]),t._v(" "),s("h2",{attrs:{id:"安装vscode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装vscode"}},[t._v("#")]),t._v(" 安装VSCode")]),t._v(" "),s("p",[t._v("VSCode是微软出的新一代编辑器，拥有很强大的插件市场支持，几乎可以胜任所有的开发工作。安装步骤如下：")]),t._v(" "),s("ol",[s("li",[t._v("从"),s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v("下载"),s("code",[t._v(".deb")]),t._v("安装包；")]),t._v(" "),s("li",[t._v("在命令行中，切换到安装包所在目录，执行"),s("code",[t._v("dpkg -i 安装包名字.deb")]),t._v("；")]),t._v(" "),s("li",[t._v("安装安装包所需依赖，继续输入"),s("code",[t._v("apt-get -f install")]),t._v("。")])]),t._v(" "),s("p",[t._v("至此VSCode就安装完成了，打开VSCode，按下快捷键"),s("code",[t._v("CTRL+SHIFT+X")]),t._v("，搜索插件"),s("strong",[t._v("LaTex Workshop")]),t._v("，安装并重启编辑器。")]),t._v(" "),s("p",[t._v("至此，编辑器就装好了。")]),t._v(" "),s("h2",{attrs:{id:"安装texlive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装texlive"}},[t._v("#")]),t._v(" 安装TexLive")]),t._v(" "),s("p",[t._v("TexLive是一个tex发行版，其他的介绍就不啰嗦了，直接开始安装。")]),t._v(" "),s("p",[t._v("安装过程很简单，执行以下命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get install texlive-xetex texlive-latex-extra texlive-science\n")])])]),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("打开VSCode，新建一个目录，然后在目录中新建一个"),s("code",[t._v(".tex")]),t._v("文件，即可使用tex进行写作了，如果要开启即时预览功能，需要先编译该tex文件，按下"),s("code",[t._v("F1")]),t._v("，输入命令"),s("code",[t._v("build LaTex project")]),t._v("并回车，你会发现目录下面生成了一堆乱七八糟的东西，不用管，再次按下"),s("code",[t._v("F1")]),t._v("，输入命令"),s("code",[t._v("View PDF file in new tab")]),t._v("，就可以开启即时预览了，每一次保存后，预览窗口就会自动刷新。")]),t._v(" "),s("p",[t._v("此外，为了支持中文，需要修改"),s("code",[t._v("Latex Workshop")]),t._v("的设置项，在VScode的设置文件中添加下面几行：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"latex-workshop.latex.recipes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tools"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bibtex->xelatex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tools"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bibtex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"latex-workshop.latex.tools"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"args"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%DOC%.tex"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bibtex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bibtex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"args"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%DOCFILE%"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("这里笔者提供了两条编译命令流，一个是不需要引用的纯"),s("code",[t._v("xelatex")]),t._v("，一般用于课程设计报告的书写；另一个是包含了"),s("code",[t._v("bibtex")]),t._v("的命令流，一般用于会议论文的书写。")]),t._v(" "),s("p",[t._v("然后新建一个文件测试一下：")]),t._v(" "),s("div",{staticClass:"language-latex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-latex"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\documentclass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("12pt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("article")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\usepackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fontspec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\setmainfont")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("宋体"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("镜中"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("张枣"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    只要想起一生中后悔的事情"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n    梅花便落了下来"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n    比如看她游泳到河的另一岸"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n    比如登上一株松木梯子"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n    危险的事情固然美丽"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n    不如看她骑马归来"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n    面颊温暖，"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n    羞愧。低下头，回答着皇帝"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n    一面镜子永远等候她"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n    让她坐到镜中常坐的地方"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n    望着窗外，只要想起一生中后悔的事情"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n    梅花便落满了南山"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function selector"}},[t._v("\\end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/16968934/33229051-22acaa0a-d202-11e7-9eb8-a7f9e9d1719f.png",alt:"_code_20171125165943"}})]),t._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"http://blog.csdn.net/matricer/article/details/52253658",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux下texLive的安装和配置"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://blog.jqian.net/post/xelatex.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用xelatex生成中文pdf"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);