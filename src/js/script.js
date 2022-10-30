$('.menu__nav-list').on('click', 'li:not(.menu__nav-item_active)', function() {
    $(this)
      .addClass('menu__nav-item_active').siblings().removeClass('menu__nav-item_active')
      .closest('body').find('div.menu__content').removeClass('menu__content_active').eq($(this).index()).addClass('menu__content_active').siblings().removeClass('menu__content_active');
});