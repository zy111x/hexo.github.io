var posts=["posts/9/","posts/32968/","posts/d50a/","posts/50489/","posts/12843/","posts/41626/","posts/12051/","posts/53880/","posts/14375/","posts/19367/","posts/14373/","posts/5548/","posts/2729/","posts/22648/","posts/14307/"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}