# Jenkins部署

## 安装weget
```
 yum install wget -y
```

## 安装jenkins yum源
```
  wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins.io/redhat-stable/jenkins.repo
```

## 下载并导入yum仓库的key
```
  rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
```



## 安装java环境
```
 yum install java -y
```

## 安装Jenkins
```
  yum install jenkins -y
```

## 创建deploy用户作为系统服务用户
```
  yum install jenkins -y
  vi /etc/sysconfig/jenkins
```