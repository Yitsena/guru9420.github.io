var posts=["2025/09/21/Hexo搭建个人博客/","2025/09/21/gi提交到远程/","2025/09/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };