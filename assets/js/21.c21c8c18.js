(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{302:function(a,t,s){"use strict";s.r(t);var e=s(28),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"centos7-环境下部署-jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos7-环境下部署-jenkins"}},[a._v("#")]),a._v(" centos7 环境下部署 Jenkins")]),a._v(" "),s("h2",{attrs:{id:"安装-weget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-weget"}},[a._v("#")]),a._v(" 安装 weget")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" yum install wget -y\n")])])]),s("h2",{attrs:{id:"安装-jenkins-yum-源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-jenkins-yum-源"}},[a._v("#")]),a._v(" 安装 jenkins yum 源")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("  wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins.io/redhat-stable/jenkins.repo\n")])])]),s("h2",{attrs:{id:"下载并导入-yum-仓库的-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载并导入-yum-仓库的-key"}},[a._v("#")]),a._v(" 下载并导入 yum 仓库的 key")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("  rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key\n")])])]),s("h2",{attrs:{id:"安装-java-环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-java-环境"}},[a._v("#")]),a._v(" 安装 java 环境")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" yum install java -y\n")])])]),s("h2",{attrs:{id:"安装-jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-jenkins"}},[a._v("#")]),a._v(" 安装 Jenkins")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("  yum install jenkins -y\n")])])]),s("h2",{attrs:{id:"创建-deploy-用户作为系统服务用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-deploy-用户作为系统服务用户"}},[a._v("#")]),a._v(" 创建 deploy 用户作为系统服务用户")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("  vi /etc/sysconfig/jenkins\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);