var posts=["posts/d50a.html","posts/54ee.html","posts/50489.html","posts/12843.html","posts/41626.html","posts/12051.html","posts/53880.html","posts/14375.html","posts/19367.html","posts/14373.html","posts/9.html","posts/5548.html","posts/32968.html","posts/2729.html","posts/22648.html","posts/14307.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}