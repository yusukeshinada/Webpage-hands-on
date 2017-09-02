function changeCategory(type){
  if(type =='all'){
    var projects = $('.projects__item').css("display","inline-flex");
    //change category to selected
    $('.nav__category').removeClass('nav__category--selected');
    $('.nav__category-all').addClass('nav__category--selected');
  }

  else {
    var projectTag = '.tag-' + type;
    var navTag = '.nav__category-' + type;

    var projects = $('.projects__item').css("display","none");
    var projects = $(projectTag).css("display","inline-flex");
    //change category to selected
    $('.nav__category').removeClass('nav__category--selected');
    $(navTag).addClass('nav__category--selected');
  }
}
function load(){
  changeCategory('all');
}
window.onload = load;
