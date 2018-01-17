$(function () {
  $('#fullpage').fullpage({
    verticalCentered: false,
    navigation: true,
    continuousVertical: true,
    afterLoad: function (anchorLink, index) {
      // 进入第一屏
      if (index == 1) {
        $(".s1_wrap").removeClass("s1_wrap_beigin");
      };
      //进入第二屏
      if (index == 2) {
        //
        $(".s2").css("overflow", "visible");
        $(".s2_wrap").removeClass("s2_wrap_begin");
      };
      //进入第三屏
      if (index ==3) {
        $(".s3_wrap").removeClass("s3_wrap_begin");
      };
      // 进入第四屏
      if(index==4){
        $(".s4_wrap").removeClass("s4_wrap_begin");
      }
    },
    onLeave: function (index, nextIndex, direction) {
      //不是第一屏把背景倾斜
      if (!(nextIndex == 1)) {
        $(".banner_box").addClass("banner_box_rotate");
      } else {
        $(".banner_box").removeClass("banner_box_rotate");
      }
      // 离开第一屏时把初始样式重新加上
      if (index == 1) {
        $(".s1_wrap").addClass("s1_wrap_beigin");
      };
      //离开第二屏样式加上注意灯离开的动画执行完在加上
      if (index == 2) {
        $(".s2_wrap").addClass("s2_wrap_leave");
        setTimeout(function () {
          $(".s2_wrap").addClass("s2_wrap_begin").removeClass("s2_wrap_leave");
          // 注意第二屏离开记得加上超出隐藏
          $(".s2").css("overflow", "hidden");
        }, 1000);
      };
      // 离开第三屏
      if (index==3) {
        $(".s3_wrap").addClass("s3_wrap_begin");
      };
      // 离开第四屏
      if (index==4) {
        $(".s4_wrap").addClass("s4_wrap_begin");
      };
    }
  });
});