module.exports = {
  title: "个人博客",
  description: "天堂的来客的博客",
  host: "0.0.0.0",
  port: "8082",
  themeConfig: {
    editLinks: false,
    docsDir: "docs",
    nav: [
      { text: "个人主页", link: "/" },
      { text: "自动化部署", link: "/AutoDeploy/" },
      { text: "百度", link: "https://baidu.com" }
    ],
    sidebar: [
      {
        title: "自动化部署简介",
        collapsable: false,
        children: [
          {
            title: "jenkins",
            collapsable: false,
            children: [
              "AutoDeploy/jenkins/install",
              "AutoDeploy/jenkins/jenkins-git",
              "AutoDeploy/jenkins/buildtasks"
            ]
          },
          {
            title: "ansible",
            collapsable: false,
            children: [
              "AutoDeploy/ansible/install",
              "AutoDeploy/ansible/modules",
              "AutoDeploy/ansible/playbook"
            ]
          }
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: false
  }
};
