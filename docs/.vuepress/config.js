module.exports = {
  title: "个人博客",
  description: "天堂的来客的博客",
  host: "0.0.0.0",
  port: "8082",
  dest: "public",
  configureWebpack: {
    // output: {
    //   publicPath: "./"
    // }
  },

  themeConfig: {
    editLinks: false,
    docsDir: "docs",
    nav: [
      { text: "个人主页", link: "/" },
      { text: "自动化部署", link: "/AutoDeploy/" },
      { text: "webpack", link: "/webpack/" },
      { text: "百度", link: "https://baidu.com" }
    ],
    sidebar: {
      "/AutoDeploy/": [
        {
          title: "jenkins",
          collapsable: false,
          children: [
            "jenkins/install",
            "jenkins/windows-install",
            "jenkins/vue-task",
            "jenkins/jenkins-git",
            "jenkins/buildtasks"
          ]
        },
        {
          title: "ansible",
          collapsable: false,
          children: ["ansible/install", "ansible/modules", "ansible/playbook"]
        }
      ],
      "/webpack/": [
        {
          title: "webpack基础",
          collapsable: false,
          children: ["base/init", "base/environment", "base/staticfile"]
        },
        {
          title: "重要文件处理",
          collapsable: false,
          children: ["important/css", "important/js", "important/project"]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: false
  }
};
