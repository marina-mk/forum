import $ from "jquery";

function closeMobileMenu(event) {
  const COLLAPSIBLE_ID = "#collapsibleNavbar";
  const TARGET_DATA_KEY = "target";

  const target = $(event.target);
  const targetParent = target.parent();
  const targetDataId = target.data(TARGET_DATA_KEY) || targetParent.data(TARGET_DATA_KEY);

  if (targetDataId !== COLLAPSIBLE_ID) {
    $(COLLAPSIBLE_ID).removeClass("show");
  }
}

$(window).scroll(closeMobileMenu);
$("#root").click(closeMobileMenu);
