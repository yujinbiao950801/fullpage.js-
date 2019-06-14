$(function(){
	k = $(window).height();
	var a=1;
	$(".next").click(function(event){
		$.fn.fullpage.moveSectionDown();
	});
	$("#fullpage").fullpage({
		navigation:true,
		scrollingSpeed: 1200,
		// loopBottom: true,
		afterLoad: function(anchorLink,index){
			if(index == 2 && a==1){
				$(".next").fadeOut();
				$(".search").show().animate({right:'370px'},1500,function(){
					$(".search-words").animate({opacity:1},1000,function(){
						$(".search").hide();
						$(".search-02-1").show().animate({right:'250px',bottom:'452px',height:'30px'},1000);
						$(".goods-02").show().animate({height:'218px'},1000);
						$(".words-02").animate({opacity:1},1000,function(){
							$(".next").fadeIn();
							a++;
						});
					})
				});
			}
		},
		onLeave: function(index,nextIndex,direction){
			$(".next").fadeOut();
			if(index ==2 && nextIndex ==3 && a == 2){
				$(".shirt-02").show().animate({bottom:250-k,left:260,width:207},2000,function(){
					$(".img-01-a").animate({opacity:1},500,function(){
						$(".btn-01-a").animate({opacity:1},500,function(){
							$(".next").fadeIn();
							a++;
						});
					})
				});
				$(".cover").show();
			}
			if(index == 3 && nextIndex == 4 && a==3){
			$(".next").fadeOut();
				$(".shirt-02").hide();
				$(".t1f").show().animate({bottom:200-k,left:260},2000,function(){
					$(this).hide();
					$(".t1f2").show();
					$(".car").animate({left:2000},2000,"easeInElastic",function(){
						$(".note").show();
						$(".words-04-a").animate({opacity:1},1000);
						$(".address").animate({opacity:1},1000,function(){
							$(".next").fadeIn();
							a++;
						});
					});
				});
			}
			if (index == 4 && nextIndex == 5  && a==4) {
				$(".next").fadeOut();
				$(".hand").animate({bottom:0},2000,function(){
					$(".mouse-a").animate({opacity:1},1000);
					$(".t1f5").animate({bottom:70},1000,function(){
						$(".order-05").animate({bottom:390},function(){
							$(".words-05").addClass("words-05-a");
							$(".next").fadeIn();
							a++;
						});
					})
				})
			}
			if (index == 5 && nextIndex == 6 && a==5) {
				$(".next").fadeOut();
				$(".box-06").animate({left:"38%"},1500,function(){
					$(this).animate({bottom:40},500,function(){
						$(this).hide();
						$(".words-06").show().animate({left:"40%"},4000,"easeInOutElastic",function(){
							$(this).hide();
						});
						$(".number6").animate({backgroundPositionX:"100%"},4000,function(){
						$(".shouhuodizhi").show();
						$(".man").animate({height:305,bottom:116},1000,function(){
							$(this).animate({right:500},500,function(){
								$(".door").animate({opacity:1},200,function(){
									$(".woman").show().animate({right:350,height:300},500,function(){
										$(".shouhuo").show();
										$(".words-06-a").animate({opacity:1});
										$(".next").fadeIn();
										a++;
									})
								});
							})
						})
					})
					})
				})
				$(".t1f5").hide();
				$(".t1f6").show().animate({top:k-555,left:"40%",width:65},1500,function(){
					$(this).hide();
				})
			}
			if (index == 6 && nextIndex == 7 && a==6) {
				$(".next").fadeOut();
				setTimeout(function(){
					$(".star").animate({width:120},500,function(){
						$(".haoping").show();
						$(".next").fadeIn();
						a++;
					})
				},1500)
			}
			$(".next").fadeOut();
			$(".btn-08").hover(function(){
				$(this).toggle();
			});
			$(document).mousemove(function(event){
				var x = event.pageX-$(".hand-08").width()/2-10;
				var y = event.pageY+10;
				var minY = k-449;
				if (y < minY) {
					$(".hand-08").css({left:x,top:minY});
				}else{
					$(".hand-08").css({left:x,top:y});
				}
			});
			$(".onemore").click(function(event){
				$.fn.fullpage.moveTo(1);
				$("img,.move").attr("style","")
				$(".number6").css({backgroundPositionX:"0%"})
				a=1;
				// location.reload();
			});
		}
	})
})