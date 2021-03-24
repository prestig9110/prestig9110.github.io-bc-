/* ---------- map2d ---------- */
$(function () {
  $(".modal-trigger").on("click", function () {
    $(".md-modal-1").addClass("md-show");
  });

  $(".md-close").on("click", function () {
    $(".md-modal-1").removeClass("md-show");
  });
});
/* ---------- map3d ---------- */
$(function () {
  $(".modal-trigger-2").on("click", function () {
    $(".md-modal-2").addClass("md-show");
  });

  $(".md-close").on("click", function () {
    $(".md-modal-2").removeClass("md-show");
  });
});
