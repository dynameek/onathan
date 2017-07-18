/**/
var myPage = {
    currSec: "home",
    displayMenu: function(){
        //alert("displayMenu()");
        var e = document.getElementById('nav-wrap');
        var l = -200;
        //alert("called");
        setInterval(function(){
            if(l < 0){
                l += 10;
                e.style.left = l + "px";
            }
        }, 10);
    },
    hideMenu: function(){
        var e = document.getElementById('nav-wrap');
        var l = 0;
        setInterval(function(){
            if(l > -(200)){
                l -= 10;
                e.style.left = l + "px";
            }
        }, 10);
    },
    setMenuColor: function(sec){
        var menu = document.getElementById('nav-wrap');
        var mGrans = menu.children[1].children;
        var bg;
        switch(sec){
            case 'about':
                bg = "#008c8c";
                fc = "#A3CECE";
                break;
            case 'skill':
                bg = "#1caee5";
                fc = "#9BD9EF";
                break;
            case 'contact':
                bg = "#ff90c9";
                fc = "#fff";
                break;
            default:
                bg = "#fff";
                fc = "#727272";
                break;
        }
        menu.style.backgroundColor = bg;
        for(var i = 0; i < mGrans.length; i++){
            mGrans[i].style.color = mGrans[i].style.borderBottomColor = fc;
        }
    },
    fadeSec: function(sec){
        //we can only fade out the current section
        var cs = document.getElementById(this.currSec); //get current section
        var ns = document.getElementById(sec); //get new section
        var csKids = cs.children; //get immediate children of current section
        var csGrans = csKids[1].children; //get body contents of current section
        var nsKids = ns.children; //get immediate children of new section
        var nsGrans = nsKids[1].children; //get body contents of new section
        //
        cs.style.opacity = 1.0; //set current section's opacity to 1.0
        ns.style.opacity = 0; //set new section's opacity to 0
        nsKids[0].style.opacity = 0; //make new section's header transparent
        for(i = 0; i < nsGrans.length; i++){
            nsGrans[i].style.opacity = 0; //make the contents of new section transparent
        }
        //
        var j = csGrans.length - 1, opc = 1.0;
        //
        var fdOut = setInterval(function(){
            if(j >= 0 && opc > 0){
                opc -= 0.1; //decrease opacity by 0.1
                csGrans[j].style.opacity = opc;
                if(opc <= 0){ //check if the item is completely transparent
                    opc = 1.0; //reset the opacity variable
                    j--; //move to next item
                }
            }else{
                clearInterval(fdOut);
                //fade the header
                var fadeHeader = setInterval(function(){
                    if(opc > 0){ //if opacity is greater than 0
                        opc -= 0.1; //derease it by 0.1
                        csKids[0].style.opacity = opc; //set header opacity to opc
                    }else{
                        clearInterval(fadeHeader);
                        opc = 1.0; //reset opacity
                        var fdBg = setInterval(function(){ //this fades the background of current section
                            if(opc > 0){
                                opc -= 0.02; //decrease opc by 0.02
                                cs.style.opacity = opc; //set current section to opc
                            }else{
                                clearInterval(fdBg);
                                j = opc = 0; //set opc to complete transparency(0)
                                cs.style.display = "none"; //hide current section
                                cs.style.opacity = 1; //reset the replaced section's opacity to 1
                                cs.style.height = cs.style.width = "100%";
                                for(var i = 0; i < csGrans.length; i++){
                                    csGrans[i].style.opacity = 1.0;
                                }
                                ns.style.display = "block"; //make new section visible
                                ns.style.width = ns.style.height = "100%";
                                var fadInBg = setInterval(function(){ //to fade in the background of the new section
                                    if(opc < 1){ //if opacity is not 1
                                        opc += 0.02; //increase it by 0.02
                                        ns.style.opacity = opc; //set new section's opacity to the value of opc
                                    }else{
                                        clearInterval(fadInBg);
                                        opc = 0; //reset opc
                                        //fade in header
                                        var fdInHeader = setInterval(function(){
                                            if(opc < 1){
                                                opc += 0.05;
                                                nsKids[0].style.opacity = opc;
                                            }else{
                                                clearInterval(fdInHeader);
                                                opc = 0; //reset opc
                                                nsKids[1].style.opacity = 1;
                                                //fade in content
                                                var fdInContent = setInterval(function(){
                                                    if(j < nsGrans.length && opc < 1.0){
                                                        opc += 0.1;
                                                        nsGrans[j].style.opacity = opc;
                                                        if(opc >= 1.0){
                                                            opc = 0;
                                                            j++;
                                                        }
                                                    }else{
                                                        clearInterval(fdInContent);
                                                    }
                                                }, 50);
                                            }
                                        }, 50);
                                    }
                                }, 25);
                            }
                        }, 25);
                    }
                }, 50);
            }
        }, 50);
    },
    shrinkGrow: function(sec){
        //get current section
        var cs = document.getElementById(this.currSec); //get current sec
        var ns = document.getElementById(sec); //get new sec
        
        //hide the children of the current section
        for(var i = 0; i < cs.children.length; i++){
            cs.children[i].style.opacity = 0;
        }
        //hide contents of new section
        for(var i = 0; i < ns.children.length; i++){
            ns.children[i].style.opacity = 0;
        }
        var dw = window.screen.width; //get screen width
        var dh = window.screen.height; //get screen height
        var c;
        if(dw < dh){
            c = dh;
        }else{
            c = dw;
        }
        var shrink = setInterval(function(){
            if(c > 0){
                c -= 10; //decrease by 10px
                cs.style.height = cs.style.width = c + "px"; //decrease the width and height
            }else{
                clearInterval(shrink);
                c  = 0; //set c to 0
                cs.style.display = "none"; //hide the current sec
                cs.style.height = cs.style.width = "100%"; //reset height and width property
                //reset replaced section children display property
                for(var i = 0; i < cs.children.length; i++){
                    cs.children[i].style.opacity = 1;
                }
                //set replacement section width an d height to 0px and display to block
                ns.style.width = ns.style.height = "0px";
                ns.style.display = "block";
                //grow replacement section
                var grow = setInterval(function(){
                    if(c < dh || c < dw){
                        c += 10;
                        ns.style.width = ns.style.height = c + "px"; //grow by 10px
                    }else{
                        clearInterval(grow);
                        ns.style.width = ns.style.height = "100%"; //set to max screen size
                        c = 0; var opc = 0;
                        var shwKid = setInterval(function(){
                            if(c < ns.children.length && opc < 1){
                                //display the header and contents
                                opc += 0.1;
                                ns.children[c].style.opacity = opc;
                                if(opc >= 1){
                                    opc = 0;
                                    c++;
                                }
                            }else{
                                clearInterval(shwKid);
                            }
                        }, 50);
                    }
                }, 10);
            }
        }, 10);
    },
    fallRise: function(sec){
        //get current section
        var cs = document.getElementById(this.currSec); //get current sec
        var ns = document.getElementById(sec);
        
        //hide children of the current section
        for(var i = 0; i < cs.children.length; i++){
            cs.children[i].style.opacity = 0;
        }
        var dh = window.screen.height;
        var c = dh;
        var fall = setInterval(function(){
            if(c > 0){
                c -= 10;
                cs.style.height = c + "px"; //fall by 10px
            }else{
                clearInterval(fall);
                cs.style.display = "none";
                cs.style.height = "100%"; //reset replaced sec height
                //redisplay hidden items
                for(var i = 0; i < cs.children.length; i++){
                    cs.children[i].style.opacity = 0;
                }
                
                ns.style.width = "100%";//set incoming section's width to max
                //hide contents of new section
                for(var i = 0; i < ns.children.length; i++){
                    ns.children[i].style.opacity = 0;
                }
                //set replacement section width an d height to 0px and display to block
                ns.style.height = "0px";
                ns.style.display = "flex";
                //grow replacement section
                var rise = setInterval(function(){
                    if(c < dh){
                        c += 10;
                        ns.style.height = c + "px"; //grow by 10px
                    }else{
                        clearInterval(rise); 
                        ns.style.height = "100%"; //set height of new section to max
                        c = 0; var opc = 0;
                        var shwKid = setInterval(function(){
                            if(c < ns.children.length && opc < 1){
                                opc += 0.1;
                                ns.children[c].style.opacity = opc;
                                if(opc >= 1){
                                    opc = 0;
                                    c++;
                                }
                            }else{
                                clearInterval(shwKid);
                            }
                        }, 50);
                    }
                }, 10);
            }
        }, 10);
    },
    closeOpen: function(sec){
        var cs = document.getElementById(this.currSec);
        var ns = document.getElementById(sec);
        var dw = window.screen.width;
        var a = dw;
        
        //hide content of current sec
        for(var i = 0; i < cs.children.length; i++){
            cs.children[i].style.opacity = 0;
        }
        var close = setInterval(function(){
            if(a > 0){
                a -= 10;
                cs.style.width = a + "px"; //close by 10px
            }else{
                clearInterval(close);
                a = 0;
                cs.style.display = "none";
                cs.style.width = "100%"; //reset width to max
                //reset display property of replaced section's kids
                for(var i = 0; i < cs.children.length; i++){
                    cs.children[i].style.opacity = 0;
                }
                
                // hide contents of new section
                for(i = 0; i < ns.children.length; i++){
                    ns.children[i].style.opacity = 0;
                }
                ns.style.width = "0px"; //set width to minimum
                ns.style.display = "block";
                var open = setInterval(function(){
                    if(a < dw){
                        a += 10;
                        ns.style.width = a + "px"; //open by 10px
                    }else{
                        clearInterval(open);
                        ns.style.width = "100%"; //set the width to max
                        a = 0; var opc = 0;
                        var shwCon = setInterval(function(){
                            if(a < ns.children.length && opc < 1){
                                opc += 0.1;
                                ns.children[a].style.opacity = opc;
                                if(opc >= 1){
                                    opc = 0;
                                    a++;
                                }
                            }else{
                                clearInterval(shwCon);
                            }
                        }, 50);
                    }
                }, 20);
            }
        }, 20);
    },
    hideElement: function(elementId, delay){
        var concernedElement  = document.getElementById(elementId);
        var opacity = 1.0;
        var hideTransition = setInterval(function(){ // animate
            opacity -= 0.025; //reduce the opacity
            if(opacity <= 0){
                opacity = 0;
                clearInterval(hideTransition); 
                concernedElement.style.visibility = "hidden"; //disable visibility
            }
            concernedElement.style.opacity = opacity; //set opacity on element
        }, delay);
    },
    showElement: function(elementId, delay){
        var concernedElement  = document.getElementById(elementId);
        concernedElement.style.visibility = "visible"; //disable visibility
        var opacity = 0;
        var hideTransition = setInterval(function(){
            opacity += 0.025;
            if(opacity >= 1){
                opacity = 1;
                clearInterval(hideTransition);
            }
            concernedElement.style.opacity = opacity;
        }, delay);
    },
    doNothing: function(){
        event.stopPropagation();
    },
    gotoSec: function(secId){
        this.hideMenu();
        switch(secId){
            case 'about':
                this.shrinkGrow(secId);
                break;
            case 'skill':
                this.fadeSec(secId);
                break;
            case 'home':
                this.fallRise(secId);
                break;
            default:
                this.closeOpen(secId);
                break;
        }
        this.currSec = secId;
    }
};
