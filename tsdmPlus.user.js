// ==UserScript==
// @name         天使动漫JS增强
// @author       AurevoirXavier eroko
// @version      1.0
// @description  页面集成打工与签到按钮，优化了回到顶部功能
// @include     *://www.tsdm.live/forum.php*
// @include     *://www.tsdm.live/plugin.php?id=np_cliworkdz:work*
// @include     *://www.tsdm.live/forum.php?mod=viewthread&tid=321479
// @grant        GM_addStyle
// @namespace
// ==/UserScript==

GM_addStyle("#check, #work{padding:0; width:48px; border-radius: 5px; line-height: 28px;height: 28px;margin: 4px 0px;font-size: 12px;border-width: 0 !important;border-image-width: 0 !important;background-color: rgba(0,0,0,0.4)!important;} #check:hover, #work:hover{cursor:pointer;}");

jQuery(document).ready(function($) {
    var container1=$("<li id='container1' class='scbar_btn_td'></li>");
    var container2=$("<li id='container2' class='scbar_btn_td'></li>");
    var check=$("<button id='check'></button>");
    var textcheck=$("<strong class='xi2 xs2'> 签到 </strong>");
    var work=$("<button id='work'></button>");
    var textwork=$("<strong class='xi2 xs2'> 打工 </strong>");

    $("li.scbar_btn_td").after(container1);
    $(container1).after(container2);
    $("#container1").append(check);
    $(check).append(textcheck);
    $("#container2").append(work);
    $(work).append(textwork);

    $("#check").click(function() {
        showWindow("dsu_paulsign", "plugin.php?id=dsu_paulsign:sign&616cdca8");
        setTimeout(function(){
            Icon_selected("kx");
            $("#todaysay").val("哈哈哈");
            showWindow('qwindow', 'qiandao', 'post', '0');
        },2000);
    });

    $("#work").click(function() {
        window.location = "https://www.tsdm.live/plugin.php?id=np_cliworkdz:work";
    });

    // 修改回到顶部功能
    $("#scrolltop").removeAttr("onclick");
    $("#scrolltop").click(function(){
        $('body,html').animate({ scrollTop:0 },500);
        return false;
    });

    // 聚焦到搜索框后清除默认值
    var scbar_txt = $("#scbar_txt").val();
    $("#scbar_txt").focus(function() {
        if(this.value == scbar_txt){
            this.value = "";
        }
    });
    $("#scbar_txt").blur(function() {
        if(this.value == ""){
            this.value = scbar_txt;
        }
    });

});


//   实现自动打工功能
var url=window.location.href;
if(url.match("tid=321479"))
window.location.href='plugin.php?id=np_cliworkdz:work';

jQuery(document).ready(function($){
//   setTimeout(function(){$('#advids').children().children().trigger("click");}, 100);
     setTimeout(function(){$('#np_advid1').children().trigger("click");},300);
     setTimeout(function(){$('#np_advid2').children().trigger("click");},600);
     setTimeout(function(){$('#np_advid4').children().trigger("click");},900);
     setTimeout(function(){$('#np_advid6').children().trigger("click");},1200);
     setTimeout(function(){$('#np_advid7').children().trigger("click");},1500);
     setTimeout(function(){$('#np_advid9').children().trigger("click");},1800);
//    document.getcre.submit();
    setTimeout(function(){document.getcre.submit();},2500);
//    setTimeout(function(){$('#stopad').children().trigger("click");},2000);
});