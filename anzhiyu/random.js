var posts=["posts/d50a/","posts/5548/","posts/47193/","posts/58960/","posts/16107/","posts/32968/","posts/2729/","posts/22648/","posts/14307/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };