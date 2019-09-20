import $ from 'jquery';

function closeMobileMenu(event) {
  const COLLAPSIBLE_ID = '#collapsibleNavbar';
  const TARGET_DATA_KEY = 'target';

  const target = $(event.target);
  const targetParent = target.parent();
  const targetDataId = target.data(TARGET_DATA_KEY) || targetParent.data(TARGET_DATA_KEY);

  if (targetDataId !== COLLAPSIBLE_ID) {
    $(COLLAPSIBLE_ID).removeClass('show');
  }
}

function setContainerHeight() {
  const headerImgHeight = $('#header_image').height() + $('#footer').height() * 2;
  $('#content_container').attr('style', `min-height:calc(100vh - ${headerImgHeight}px)!important;`);
}

$(document).ready(() => {
  $(window).scroll(closeMobileMenu);
  $('#root').click(closeMobileMenu);
  $(window).resize(setContainerHeight);
  $('#header_image').on('load', setContainerHeight);
});
