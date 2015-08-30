/**
 * Created by q4156_000 on 2015/8/30.
 */
function manproductshow(){
    var show_imgul=document.getElementById("manprodectshow_imgul");
    var show_img_li=show_imgul.getElementsByTagName("li");
    var bigimg=document.getElementById("manprodectshow_bigimg");

    show_img_li[0].style.border="2px solid #ffd400";
    show_img_li[0].style.opacity="1";

    for(var i=0;i<show_img_li.length;i++){
        show_img_li[i].aa=i;
        show_img_li[i].onclick=function(){
           var imgsrc=show_img_li[this.aa].getElementsByTagName("img")[0].src;
            bigimg.src=imgsrc;
            show_img_li[this.aa].style.border="2px solid #ffd400";
            show_img_li[this.aa].style.opacity="1";
            for(var j=0;j<show_img_li.length;j++){
                if(j!=this.aa){
                    show_img_li[j].style.border="2px solid silver";
                    show_img_li[j].style.opacity="0.6";
                }
            }
        }
    }
}