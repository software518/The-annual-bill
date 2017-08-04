$('#fullpage').fullpage({
        'verticalCentered': false,
                'css3': true,
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6','page7'],
                'navigation': true,
                'navigationPosition': 'right',
                afterRender:function(){
                    $('.page0ne').find('.one-title').delay(500).animate({top:'15%',opacity:'1'},1500);
                    $('.page0ne').find('.up-bg').animate({width:'100%',top:'0%',left:'0%'});
                    $('.page0ne').find('.lump-box').animate({left:'0'});
                    $('.page0ne').find('.fu').animate({left:'3%'}); 
                    $('.page0ne').find('.fu').addClass('fuani'); 
                    $('.page0ne').find('.left-temple').animate({left:'0',transformOrigin:'0 0'},800);
                    $('.page0ne').find('.right-temple').animate({right:'-55%',transformOrigin:'0 0'},800); 
                    $('.page0ne').find('.bottom-bg').animate({left:'0',opacity:'1'},800); 
                    $('.page0ne').find('.gold-coin1').animate({left:'18%',opacity:'1'},800);
                    $('.page0ne').find('.gold-coin2').animate({right:'23%',opacity:'1'},800);
                    $('.page0ne').find('.cash-cow').animate({left:'4%'},800);
                    $('.page0ne').find('.chicken').animate({right:'-2%'},800);
                    $('.page0ne').find('.down-arrow').animate({opacity:'1'},800);
                    $('.page0ne').find('.three-person').animate({right:'7%'},800);
                    $('.page0ne').find('.lion').animate({left:'12%'},800);
                    if(login == '3'){
                        $('.pageSix').find('.sixLogin').animate({bottom:'5%',opacity:'0'});
                        $('.pageSix').find('.sixLogged').delay(2800).animate({bottom:'13%',opacity:'1'},800);
                    }
                },
                afterLoad:function(anchorLink,index){
                    if (index == 1) {
                        $('.page0ne').find('.one-title').delay(500).animate({top:'15%',opacity:'1'},1500);
                        $('.page0ne').find('.up-bg').animate({width:'100%',top:'0%',left:'0%'});
                        $('.page0ne').find('.lump-box').animate({left:'0'});
                        $('.page0ne').find('.fu').animate({left:'3%'}); 
                        $('.page0ne').find('.fu').addClass('fuani'); 
                        $('.page0ne').find('.left-temple').animate({left:'0',transformOrigin:'0 0'},500);
                        $('.page0ne').find('.right-temple').animate({right:'-55%',transformOrigin:'0 0'},500); 
                        $('.page0ne').find('.bottom-bg').animate({left:'0',opacity:'1'},500); 
                        $('.page0ne').find('.gold-coin1').animate({left:'18%',opacity:'1'},500);
                        $('.page0ne').find('.gold-coin2').animate({right:'23%',opacity:'1'},500);
                        $('.page0ne').find('.cash-cow').animate({left:'4%'},500);
                        $('.page0ne').find('.chicken').animate({right:'-2%'},500);
                        $('.page0ne').find('.down-arrow').animate({opacity:'1'},500);
                        $('.page0ne').find('.three-person').animate({right:'7%'},500);
                        $('.page0ne').find('.lion').animate({left:'12%'},500);
                        
                    }else if(index == 2){
                        $('.pageTwo').find('.two-title').animate({top:'19%',opacity:'1'},1000);
                        $('.pageTwo').find('.earth').animate({opacity:'1'},500);
                        $('.pageTwo').find('.topThree .circle').delay(500).animate({opacity:'1'},100);
                        $('.pageTwo').find('.topThree .slash').delay(600).animate({opacity:'1'},100);
                        $('.pageTwo').find('.topThree .line').delay(700).animate({width:'84%'},500);
                        $('.pageTwo').find('.topThree .text-box .threeText').delay(1200).animate({top:'0'});
                        $('.pageTwo').find('.topTwo .circle').delay(500).animate({opacity:'1'},100);
                        $('.pageTwo').find('.topTwo .slash').delay(600).animate({opacity:'1'},100);
                        $('.pageTwo').find('.topTwo .line').delay(700).animate({width:'84%'},500);
                        $('.pageTwo').find('.topTwo .text-box .threeText').delay(1200).animate({top:'0'});
                        $('.pageTwo').find('.topOne .circle').delay(500).animate({opacity:'1'},100);
                        $('.pageTwo').find('.topOne .slash').delay(600).animate({opacity:'1'},100);
                        $('.pageTwo').find('.topOne .line').delay(700).animate({width:'84%'},500);
                        $('.pageTwo').find('.topOne .text-box .threeText').delay(1200).animate({top:'0'});

                    }else if(index == 3){
                        $('.pageThree').find('.threeLeft').animate({top:'57%'},500,'easeOutBounce');
                        $('.pageThree').find('.threeRight').animate({top:'53%'},500,'easeOutBounce');
                        $('.pageThree').find('.person').animate({top:'39%'},800,'easeOutElastic');
                        $('.pageThree').find('.threeTitle').delay(800).animate({top:'19%',opacity:'1'},1000);
                        $('.pageThree').find('.threeGold').animate({opacity:'1'});
                        $('.pageThree').find('.threeChicken').animate({opacity:'1'});
                        $('.pageThree').find('.infoMan').delay(800).animate({opacity:'1',top:'50%'},1000);
                        $('.pageThree').find('.infoGirl').delay(800).animate({opacity:'1',top:'47%'},1000);
                    }else if(index == 4){
                        $('.pageFour').find('.fourBg').animate({bottom:'-6%'},500);
                        $('.pageFour').find('.fourLeft').animate({width:'31%',top:'65%',height:'15%'},500);
                        $('.pageFour').find('.fourRight').animate({width:'41%',top:'61%',height:'22%'},500);
                        $('.pageFour').find('.fourChicken').animate({bottom:'14%',width:'20%',height:'8%'},500);
                        $('.pageFour').find('.fourGlod').animate({bottom:'4%',width:'14%',height:'8%'},500);
                        $('.pageFour').find('.fourFlower').animate({bottom:'13%',width:'20%',height:'12%'},500);
                        $('.pageFour').find('.fourTitle').animate({top:'19%',opacity:'1'},500);
                        $('.pageFour').find('.leftCons').delay(500).animate({opacity:'1',width:'38%',height:'30%'},500,'easeOutElastic');
                        $('.pageFour').find('.rightCons').delay(500).animate({opacity:'1',width:'33.2%',height:'35%'},500,'easeOutElastic');
                        $('.pageFour').find('.fourLibra').delay(1000).animate({opacity:'1',width:'38%',height:'22%',top:'37%'},500);
                    }else if(index == 5){
                        $('.pageFive').find('.fiveBg').animate({bottom:'-11%'});
                        $('.pageFive').find('.fiveLeft').animate({top:'69%',width:'40%',height:'16%'});
                        $('.pageFive').find('.fiveRight').animate({top:'66%',width:'38%',height:'20%'});
                        $('.pageFive').find('.fiveChicken').animate({bottom:'11%',right:'10%',width:'20%',height:'8%'});
                        $('.pageFive').find('.fiveGlod').animate({width:'15%',height:'9%',bottom:'9%'});
                        $('.pageFive').find('.fiveFlower').animate({width:'22%',height:'12%',bottom:'7%'});
                        $('.pageFive').find('.fiveTitle').delay(500).animate({top:'19%',opacity:'1'},1000);
                        $('.pageFive').find('.fiveHistogram').delay(500).animate({opacity:'1'});
                        $('.pageFive').find('.one .fiveNum').delay(500).animate({top:'84%',opacity:'1'});
                        $('.pageFive').find('.one .pillars').delay(500).animate({height:'5%'});
                        $('.pageFive').find('.two .fiveNum').delay(500).animate({top:'77%',opacity:'1'});
                        $('.pageFive').find('.two .pillars').delay(500).animate({height:'12%'});
                        $('.pageFive').find('.three .fiveNum').delay(500).animate({top:'54%',opacity:'1'},1000);
                        $('.pageFive').find('.three .pillars').delay(500).animate({height:'35%'},1000);
                        $('.pageFive').find('.four .fiveNum').delay(500).animate({top:'-11%',opacity:'1'},1000);
                        $('.pageFive').find('.four .pillars').delay(500).animate({height:'100%'},1000);
                        $('.pageFive').find('.five .fiveNum').delay(500).animate({top:'48%',opacity:'1'},1000);
                        $('.pageFive').find('.five .pillars').delay(500).animate({height:'41%'},1000);
                        $('.pageFive').find('.six .fiveNum').delay(500).animate({top:'86%',opacity:'1'});
                        $('.pageFive').find('.six .pillars').delay(500).animate({height:'3%'});

                    }else if(index == 6){
                        
                        $('.pageSix').find('.sixBg').animate({bottom:'-8%'},800);
                        $('.pageSix').find('.sixLeft').animate({width:'46.4%',height:'18%',top:'64%'},800);
                        $('.pageSix').find('.sixRight').animate({width:'46.8%',height:'23%',top:"60%"},800);
                        $('.pageSix').find('.sixChicken').animate({right:'-2%',bottom:'7%'},800);
                        $('.pageSix').find('.sixFlower').animate({left:'9%',bottom:'6%'},800);
                        $('.pageSix').find('.sixDown').delay(800).animate({bottom:'0'},800);
                        $('.pageSix').find('.sixGlod').animate({bottom:'35%'},800);
                        
                        $('.pageSix').find('.img1').delay(1600).animate({width:'90%',height:'100%'},400,'easeOutElastic');
                        $('.pageSix').find('.number1').delay(1600).animate({opacity:'1'},400);
                        $('.pageSix').find('.img2').delay(2100).animate({width:'76%',height:'100%'},400,'easeOutElastic');
                        $('.pageSix').find('.img3').delay(2600).animate({width:'92%',height:'100%'},400,'easeOutElastic');
                        $('.pageSix').find('.number2').delay(2100).animate({opacity:'1'},400);
                        $('.pageSix').find('.number3').delay(2600).animate({opacity:'1'},400);
                        $('.pageSix').find('.sixTitle').delay(800).animate({opacity:'1'},500);
                        $('.pageSix').find('.person-count').delay(1000).animate({opacity:'1'},300);
                        if (login == '1' || login == '2') {
                            $('.pageSix').find('.sixLogin').delay(2800).animate({bottom:'14%',opacity:'1'},800);
                        }else if (login == '3') {
                            $('.pageSix').find('.sixLogged').delay(2800).animate({bottom:'13%',opacity:'1'},800);
                        }
                    }else if(index == 7){
                        data_id = "2";
                        isLogin();
                        $('.pageSeven').find('.sevenBg').animate({bottom:'-12%'},500);
                        $('.pageSeven').find('.sevenLeft').animate({top:'70%'},500);
                        $('.pageSeven').find('.sevenRight').animate({top:'66%'},500);
                        $('.pageSeven').find('.sevenFlower').animate({bottom:'7%'},500);
                        $('.pageSeven').find('.sevenDown').animate({bottom:'0'},500);
                        $('.pageSeven').find('.sevenText').delay(600).animate({opacity:'1'},500);
                        $('.pageSeven').find('.btn-test').delay(800).animate({opacity:'1'},1000);
                    }
                },
                onLeave:function(index,direction){
                    if (index == 1) {
                        $('.page0ne').find('.one-title').delay(500).animate({top:'10%',opacity:'0'},1500,'');
                        $('.page0ne').find('.up-bg').animate({width:'250%',top:'-10%',left:'-75%'});
                        $('.page0ne').find('.lump-box').animate({left:'-10%'});
                        $('.page0ne').find('.fu').animate({left:'-13%'});
                        $('.page0ne').find('.fu').removeClass('fuani');
                        $('.page0ne').find('.left-temple').animate({left:'-23%',transformOrigin:'100% 0'});
                        $('.page0ne').find('.right-temple').animate({right:'-80%',transformOrigin:'0 100%'}); 
                        $('.page0ne').find('.bottom-bg').animate({left:'50%',opacity:'0'});
                        $('.page0ne').find('.gold-coin1').animate({left:'10%',opacity:'0'});
                        $('.page0ne').find('.gold-coin2').animate({right:'17%',opacity:'0'});
                        $('.page0ne').find('.cash-cow').animate({left:'-7%'});
                        $('.page0ne').find('.chicken').animate({right:'-11%'});
                        $('.page0ne').find('.down-arrow').animate({opacity:'0'});
                        $('.page0ne').find('.lion').animate({left:'-35%'});
                        $('.page0ne').find('.three-person').animate({right:'-35%'});
                        
                    }else if(index == 2){
                        $('.pageTwo').find('.two-title').animate({top:'25%',opacity:'0'},1000);
                        $('.pageTwo').find('.earth').animate({opacity:'0'},500);
                        $('.pageTwo').find('.topThree .circle').animate({opacity:'0'});
                        $('.pageTwo').find('.topThree .slash').animate({opacity:'0'});
                        $('.pageTwo').find('.topThree .line').animate({width:'0'});
                        $('.pageTwo').find('.topThree .text-box .threeText').animate({top:'100%'});
                        $('.pageTwo').find('.topTwo .circle').animate({opacity:'0'});
                        $('.pageTwo').find('.topTwo .slash').animate({opacity:'0'});
                        $('.pageTwo').find('.topTwo .line').animate({width:'0'});
                        $('.pageTwo').find('.topTwo .text-box .threeText').animate({top:'100%'});
                        $('.pageTwo').find('.topOne .circle').animate({opacity:'0'});
                        $('.pageTwo').find('.topOne .slash').animate({opacity:'0'});
                        $('.pageTwo').find('.topOne .line').animate({width:'0'});
                        $('.pageTwo').find('.topOne .text-box .threeText').animate({top:'100%'});
                    }else if(index == 3){
                         $('.pageThree').find('.threeLeft').animate({top:'65%'});
                         $('.pageThree').find('.threeRight').animate({top:'60%'});
                         $('.pageThree').find('.person').animate({top:'50%'});
                         $('.pageThree').find('.threeTitle').animate({top:'25%',opacity:'0'});
                         $('.pageThree').find('.threeGold').animate({opacity:'0'});
                         $('.pageThree').find('.threeChicken').animate({opacity:'0'});
                         $('.pageThree').find('.infoMan').animate({opacity:'0',top:'60%'});
                         $('.pageThree').find('.infoGirl').animate({opacity:'0',top:'57%'});
                    }else if(index == 4){
                        $('.pageFour').find('.fourBg').animate({bottom:'0'});
                        $('.pageFour').find('.fourLeft').animate({width:'46.4%',top:'56%'});
                        $('.pageFour').find('.fourRight').animate({width:'46.8%',top:'53%',height:'23%'});
                        $('.pageFour').find('.fourChicken').animate({bottom:'20%',width:'24%',height:'10%'});
                        $('.pageFour').find('.fourGlod').animate({bottom:'6%',width:'17%',height:'10%'});
                        $('.pageFour').find('.fourFlower').animate({bottom:'18%',width:'26%',height:'14%'});
                        $('.pageFour').find('.fourTitle').animate({top:'25%',opacity:'0'});
                        $('.pageFour').find('.leftCons').animate({opacity:'0',width:'25%',height:'20%'});
                        $('.pageFour').find('.rightCons').animate({opacity:'0',width:'21%',height:'25%'});
                        $('.pageFour').find('.fourLibra').animate({opacity:'0',width:'20%',height:'12%',top:'43%'});

                    }else if(index == 5){
                        $('.pageFive').find('.fiveBg').animate({bottom:'0'});
                        $('.pageFive').find('.fiveLeft').animate({top:'56%',left:'0'});
                        $('.pageFive').find('.fiveLeft').animate({top:'56%',width:'46.4%',height:'18%'});
                        $('.pageFive').find('.fiveRight').animate({top:'53%',width:'46.8%',height:'23%'});
                        $('.pageFive').find('.fiveChicken').animate({bottom:'20%',right:'16%',width:'24%',height:'10%'});
                        $('.pageFive').find('.fiveGlod').animate({width:'17%',height:'10%',bottom:'15%'});
                        $('.pageFive').find('.fiveFlower').animate({width:'26%',height:'14%',bottom:'15%'});
                        $('.pageFive').find('.fiveTitle').animate({top:'25%',opacity:'0'});
                        $('.pageFive').find('.fiveHistogram').delay(500).animate({opacity:'0'});
                        $('.pageFive').find('.one .fiveNum').delay(500).animate({top:'90%',opacity:'0'});
                        $('.pageFive').find('.one .pillars').delay(500).animate({height:'0%'});
                        $('.pageFive').find('.two .fiveNum').delay(500).animate({top:'90%',opacity:'0'});
                        $('.pageFive').find('.two .pillars').delay(500).animate({height:'0%'});
                        $('.pageFive').find('.three .fiveNum').delay(500).animate({top:'90%',opacity:'0'});
                        $('.pageFive').find('.three .pillars').delay(500).animate({height:'0%'});
                        $('.pageFive').find('.four .fiveNum').delay(500).animate({top:'90%',opacity:'0'});
                        $('.pageFive').find('.four .pillars').delay(500).animate({height:'0%'});
                        $('.pageFive').find('.five .fiveNum').delay(500).animate({top:'90%',opacity:'0'});
                        $('.pageFive').find('.five .pillars').delay(500).animate({height:'0%'});

                    }else if(index == 6){
                        $('.pageSix').find('.sixBg').animate({bottom:'-13%'});
                        $('.pageSix').find('.sixLeft').animate({width:'38.4%',height:'15%',top:'71%'});
                        $('.pageSix').find('.sixRight').animate({width:'41.8%',height:'21%',top:"67%"});
                        $('.pageSix').find('.sixChicken').animate({right:'7%',bottom:'5%'});
                        $('.pageSix').find('.sixFlower').animate({left:'15%',bottom:'4%'});
                        $('.pageSix').find('.sixDown').animate({bottom:'-5%'});
                        $('.pageSix').find('.sixGlod').animate({bottom:'37%'});
                        
                        $('.pageSix').find('.img1').animate({width:'0',height:'0'});
                        $('.pageSix').find('.number1').animate({opacity:'0'});
                        $('.pageSix').find('.img2').animate({width:'0',height:'0'});
                        $('.pageSix').find('.img3').animate({width:'0',height:'0'});
                        $('.pageSix').find('.number2').animate({opacity:'0'});
                        $('.pageSix').find('.number3').animate({opacity:'0'});
                        $('.pageSix').find('.person-count').animate({opacity:'0'});
                        $('.pageSix').find('.sixTitle').animate({opacity:'0'});
                        if (login == '1' || login == '2') {
                            $('.pageSix').find('.sixLogin').animate({bottom:'5%',opacity:'0'});
                        }else if (login == '3') {
                            $('.pageSix').find('.sixLogged').animate({bottom:'5%',opacity:'0'});
                            $('.pageSix').find('.sixLogin').animate({bottom:'5%',opacity:'0'});
                        }
                    }else if(index == 7){
                        $('.pageSeven').find('.sevenBg').animate({bottom:'-7%'});
                        $('.pageSeven').find('.sevenLeft').animate({top:'65%'});
                        $('.pageSeven').find('.sevenRight').animate({top:'61%'});
                        $('.pageSeven').find('.sevenFlower').animate({bottom:'11%'});
                        $('.pageSeven').find('.sevenDown').animate({bottom:'-6%'});
                        $('.pageSeven').find('.sevenText').animate({opacity:'0'});
                        $('.pageSeven').find('.btn-test').animate({opacity:'0'});
                    }
                }
    });