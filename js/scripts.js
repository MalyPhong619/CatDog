$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#cat").append("<li>hello</li>");
    $("ul#dog").append("<li>Hey whats up cat</li>");
    $("ul").children("li").click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#cat").append("<li>goodbye</li>");
    $("ul#dog").append("<li>Peace Dude</li>");
    $("ul").children("li").click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#cat").append("<li>stop</li>");
    $("ul#dog").append("<li>No, you stop!</li>");
    $("ul").children("li").click(function() {
      $(this).remove();
    });
  });
});
