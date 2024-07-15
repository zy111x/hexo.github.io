var posts=["2024/07/14/hello-world/","2024/07/11/搭建个人hexo博客/","2024/07/11/telegraph-Image/","2024/07/07/Markdown-teaching/","2023/07/14/油猴插件的安装与使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };