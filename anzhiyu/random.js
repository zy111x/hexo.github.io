var posts=["posts/1/","posts/d50a/","posts/14373/","posts/5548/","posts/58960/","posts/16107/","posts/32968/","posts/2729/","posts/22648/","posts/14307/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };