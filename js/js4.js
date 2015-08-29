function fun1(){
var modelstyleshow_left=document.getElementById('modelstyleshow_left');
var modelstyleshow_right=document.getElementById('modelstyleshow_right');
var arr1=['images/women_model_details_bigger_01.jpg','images/women_model_details_bigger_02.jpg','images/women_model_details_bigger_03.jpg',
    'images/women_model_details_bigger_04.jpg','images/women_model_details_bigger_05.jpg','images/women_model_details_bigger_06.jpg',
    'images/women_model_details_bigger_07.jpg','images/women_model_details_bigger_08.jpg',
    'images/women_model_bigger_01.jpg','images/women_model_bigger_02.jpg','images/women_model_bigger_03.jpg','images/women_model_bigger_04.jpg',
        'images/women_model_bigger_05.jpg','images/women_model_bigger_06.jpg','images/women_model_bigger_07.jpg','images/women_model_bigger_08.jpg'];
modelstyleshow_left.innerHTML="<img src='"+arr1[8]+"'>";
modelstyleshow_right.children[8].children[1].style.background='rgba(0,0,0,0)';
for(var i=0;i<modelstyleshow_right.children.length;i++){
    modelstyleshow_right.children[i].index=i;
    modelstyleshow_right.children[i].onclick=function(){
        this.children[1].style.background='rgba(0,0,0,0)';
        for(var j=0;j<modelstyleshow_right.children.length;j++){
            if(j!=this.index){
                modelstyleshow_right.children[j].children[1].style.background='rgba(0,0,0,0.7)';
            }
        }
        modelstyleshow_left.innerHTML="<img src='"+arr1[this.index]+"'>"

    }
}

var aas=document.getElementsByClassName("aa");
aas[0].onclick=function(){
    window.scrollTo(0,120);
}
aas[1].onclick=function(){
    window.scrollTo(0,820);
}
    var womenfashion_showvedio=document.getElementById("womenfashion_showvedio");
    womenfashion_showvedio.onclick=function(){
       var video01=document.getElementById("video01");
        video01.setAttribute("controls",true)
       video01.play();
    }
}


function fun2(){
    var modelstyleshow_left=document.getElementById('modelstyleshow_left');
    var modelstyleshow_right=document.getElementById('modelstyleshow_right');
    var arr1=['images/men_model_bigger_01.jpg','images/men_model_details_bigger_01.jpg','images/men_model_bigger_02.jpg',
        'images/men_model_details_bigger_02.jpg','images/men_model_bigger_03.jpg','images/men_model_details_bigger_03.jpg',
        'images/men_model_bigger_04.jpg','images/men_model_details_bigger_04.jpg',
        'images/men_model_bigger_05.jpg','images/men_model_details_bigger_05.jpg','images/men_model_bigger_06.jpg','images/men_model_details_bigger_06.jpg',
        'images/men_model_bigger_07.jpg','images/men_model_details_bigger_07.jpg','images/men_model_bigger_08.jpg','images/men_model_details_bigger_08.jpg'];
    modelstyleshow_left.innerHTML="<img src='"+arr1[0]+"'>";
    modelstyleshow_right.children[0].children[1].style.background='rgba(0,0,0,0)';
    for(var i=0;i<modelstyleshow_right.children.length;i++){
        modelstyleshow_right.children[i].index=i;
        modelstyleshow_right.children[i].onclick=function(){
            this.children[1].style.background='rgba(0,0,0,0)';
            for(var j=0;j<modelstyleshow_right.children.length;j++){
                if(j!=this.index){
                    modelstyleshow_right.children[j].children[1].style.background='rgba(0,0,0,0.7)';
                }
            }
            modelstyleshow_left.innerHTML="<img src='"+arr1[this.index]+"'>"

        }
    }

    var aas=document.getElementsByClassName("aa");
    aas[0].onclick=function(){
        window.scrollTo(0,120);
    }
    aas[1].onclick=function(){
        window.scrollTo(0,820);
    }
    aas[2].onclick=function(){
        window.scrollTo(0,1620);
    }
    var womenfashion_showvedio=document.getElementById("womenfashion_showvedio");
    womenfashion_showvedio.onclick=function(){
        var video01=document.getElementById("video01");
        video01.setAttribute("controls",true)
        video01.play();
    }
}

function fun3(){
    $(function(){
        var flag=0;
        $(".sunglassseries_ul01 li").hover(function(){
            var v1=$(this).index();
            if(flag==0){
               if(v1==0){
                   $(this).children("img").attr("src",'images/0505_Fendi_ORCHIDEA_02.jpg')
               }
                else if(v1==1){
                   $(this).children("img").attr("src",'images/0505_Fendi_ORCHIDEA_03.jpg')
               }
            }
            else if(flag==1){
                if(v1==0){
                    $(this).children("img").attr("src",'images/0505_Fendi_ORCHIDEA_12.jpg')
                }
                else if(v1==1){
                    $(this).children("img").attr("src",'images/0505_Fendi_ORCHIDEA_13.jpg')
                }
            }
            $(this).children("img").css({webkitTransform:"scale(1.2)",
            webkitTransition:'all 1s linear',
                transform:"scale(1.2)",
                transition:'all 1s linear'})
          $(this).children("div").animate({opacity:1},1000)
        }, function(){
            $(this).children("img").css({webkitTransform:"scale(1.0)",
            webkitTransition:'all 1s linear',
            transform:"scale(1.0)",
            transition:'all 1s linear'})
            $(this).children("div").animate({opacity:0},1000,function(){
                if(flag==0){flag=1;}
                else if(flag==1){flag=0;}

            })

        })

        $(".sunglassseries_ul02 li").hover(function(){
            $(this).children("img").css({webkitTransform:"scale(1.2)",
                webkitTransition:'all 1s linear',
                transform:"scale(1.2)",
                transition:'all 1s linear'})
            $(this).children("div").animate({opacity:1},1000)
        },function(){
            $(this).children("img").css({webkitTransform:"scale(1.0)",
                webkitTransition:'all 1s linear',
                transform:"scale(1.0)",
                transition:'all 1s linear'})
            $(this).children("div").animate({opacity:0},1000)
        })
        $(".sunglassseries_ul03 li").hover(function(){
            $(this).children("img").css({webkitTransform:"scale(1.2)",
                webkitTransition:'all 1s linear',
                transform:"scale(1.2)",
                transition:'all 1s linear'})
            $(this).children("div").animate({opacity:1},1000)
        },function(){
            $(this).children("img").css({webkitTransform:"scale(1.0)",
                webkitTransition:'all 1s linear',
                transform:"scale(1.0)",
                transition:'all 1s linear'})
            $(this).children("div").animate({opacity:0},1000)
        })

    });
}



function fun4(){
    $(function(){
        var arr2=["video/fendi_orchidea_cutted_v16_ns.mp4" ,"video/20150218_fendi_16s_bis_720p_ns.mp4" ,
            "video/iridia.mp4" ,"video/fendista.mp4" ];
        var arr3=['ORCHIDEA 系列','THIERRY LASRY 系列','IRIDIA 系列','THE FENDISTA 系列'];
        var arr4=['百媚千娇 如兰绽放','独特造型 缤纷用色','闪耀秀款','经典双F'];
        var arr5=['womensunglass1.html','womensunglass2.html','womensunglass3.html','womensunglass4.html']
        var arr6=['images/orchidea_515_150.png','images/08b.png','images/01b1.png',
            'images/05.png']
        $(".sunglass_ul01 li").click(function(){
            var v1=$(this).index();
            $(".sunglass_ul01 li:nth-child(n):not("+(v1)+")").css({
                color:'#ffd400' ,
                background:'rgba(0,0,0,0.8)'
            })
            $(this).css({
                color:'rgba(0,0,0,0.8)' ,
                background:'#ffd400'
            })
            $("video").attr("src",arr2[v1]);
           document.getElementsByTagName("h2")[0].innerHTML=arr3[v1];
            document.getElementsByTagName("h3")[0].innerHTML=arr4[v1];
            $(".sunglass_d3 a").attr("href",arr5[v1])
            $("img").attr("src",arr6[v1])
        })

    })
}