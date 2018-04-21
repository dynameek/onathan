var temi = {
    docIsReady: false, //   Tell when the document is ready
    isScrollUp: false,
    prevScrollPosition: 0,
    headerIsDisplayed: false,
    isPageScrollDownHandled: true,
    isPageScrollUpHandled: false,
    isTechDisplayed: false,
    isSkillDisplayed: false,
    
    /*
     *  Methods
    */
    ready: function(func){
        /*
         *  This function checks if the document is ready.
         *  It takes in a parameter:
         *      a function to be executed
         *
         *
         *  PS: I want this function create a working space for other functions
        */
        window.addEventListener("load", function(){
           func(); 
        });
    },
    addEvent: function(element, eventName, eventHandler){
        /*
         *  This function sets an event and its handler to an element
         *  It takes three parameters:
         *      1. element (DOM object)
         *      2. eventName (string)
         *      3. eventHandler (function)
        */
        element.addEventListener(eventName, eventHandler());
    },
    changeBackgroundColor: function(element, color){
        /*
         *  This function changes the background color of an element
         *  It takes two parameters:
         *      1. element (DOM Object)
         *      2. color (String)
        */
        element.style.backgroundColor = color;
    },
    changeBorderColor: function(element, color){
        /*
         *  This function changes the border color of an element
         *  It takes two parameters:
         *      1. element (DOM Object)
         *      2. color (String)
        */
        element.style.borderColor = color;
    },
    changeFontColor: function(element, color){
        /*
         *  This function changes the font color of an element
         *  It takes two parameters:
         *      1. element(DOM Object)
         *      2. color (String)
        */
        element.style.color = color;
    },
    checkScrollDirection: function(){
        var currScrollPosition = window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;
        var scrollDiff = this.prevScrollPosition - currScrollPosition;
        if(scrollDiff > 0){
            this.isScrollUp = true;
        }else{
            this.isScrollUp = false;
        }
        //
        this.prevScrollPosition = currScrollPosition;
    },
    contactMe: function(){
        //  Redirect to a mail address
        window.location = "mailto:nateoguns.work@gmail.com";
    },
    displayContent: function(){
        //get about section and skill container
        var about = document.getElementById("about-sec");
        var tech = document.getElementById("tech");
        var skill = document.getElementById("skill-sec");
        var aboutHeight = about.clientHeight;
        var docTop = window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;
        
        /*  Delay Execution */
        if(docTop >= aboutHeight){
            setTimeout(function(){
                if(!temi.isTechDisplayed){
                    temi.isTechDisplayed = true;
                    temi.fadeIn(about.children[0], 1000);
                    var i = 0;
                    var displayTech = setInterval(function(){
                        if(i < tech.children.length){
                            temi.fadeIn(tech.children[i], 500);
                            i++;
                        }else{
                            clearInterval(displayTech);
                        }
                    }, 500);
                }
            }, 500);
        }
        
        if(docTop >= (aboutHeight + (skill.clientHeight/2))){
            setTimeout(function(){
                if(!temi.isSkillDisplayed){
                    temi.isSkillDisplayed = true;
                    var j = 0;
                    var displaySkill = setInterval(function(){
                        if(j < skill.children.length){
                            temi.fadeIn(skill.children[j], 500);
                            j++;
                        }else{
                            clearInterval(displaySkill);
                        }
                    }, 500);
                }
            }, 250);
        }
        
        if(docTop === 0){
            /*  If user scrolls to the top most part of the page    */
            about.children[0].style.opacity = 0;
            for(i = 0; i < tech.children.length; i++){
                tech.children[i].style.opacity = 0;
                temi.isTechDisplayed = false;
            }
            for(i = 0; i < skill.children.length; i++){
                skill.children[i].style.opacity = 0;
                temi.isSkillDisplayed = false;
            }
        }
},
    fadeIn: function(element, duration){
        /*
         *  This function fades in an element
         *  It takes in two parameters:
         *      1. element (DOM Object)
         *      2. duration (integer) in milliseconds
        */
        var step = (duration/10); //    get duration for each step of the fade
        var opacity = 0;
        var fade = setInterval(function(){
                if(opacity < 1){
                    element.style.opacity = opacity;
                    opacity += 0.1;
                }else{
                    clearInterval(fade);
                }
            }, step);
    },
    fadeOut: function(element, duration){
        /*
         *  This function fades out an element
         *  It takes in two parameters:
         *      1. element (DOM object)
         *      2. duration (Integer) in milliseconds
        */
        var step = (duration/10);
        var opacity = 1.0;
        var fade = setInterval(function(){
            if(opacity > 0){
                element.style.opacity = opacity;
                opacity -= 0.1;
            }else{
                clearInterval(fade);
            }
        }, step);
    },
    handleScrollDown: function(){
        this.isPageScrollDownHandled = true;
        this.isPageScrollUpHandled = false;
    },
    handleScrollUp: function(){
        this.isPageScrollDownHandled = false;
        this.isPageScrollUpHandled = true;
    },
    slideDown: function(element, from, to, step){
        /*
         *  This function moves an element from a more negative number to a more positive one
         *  It takes four parameters:
         *  1. element (DOM Object) - Element to be moved
         *  2. from (Integer) - Position to leave
         *  3. to (Integer) - Destination position
         *  4. step (Integer) - number of pixels to move
         *
        */
        element.style.backgroundColor = "white";
        var slide = setInterval(function(){
            if(from < to){
                from += step;
                element.style.top = from+"px";
            }else{
                from = to;
                element.style.top = from+"px";
                clearInterval(slide);
            }
        }, 25);
    },
    slideUp: function(element, from, to, step){
        /*
         *  This function moves an element from a more positive number to a more negative one
         *  It takes four parameters:
         *  1. element (DOM Object) - Element to be moved
         *  2. from (Integer) - Position to leave
         *  3. to (Integer) - Destination position
         *  4. step (Integer) - number of pixels to move
         *
        */
        element.style.backgroundColor = "white";
        var slide = setInterval(function(){
            if(from > to){
                from -= step;
                element.style.top = from+"px";
            }else{
                from = to;
                element.style.top = from+"px";
                clearInterval(slide);
            }
        }, 25);
    },
    
    /*
     *  WORKER METHODS
     *  Serve as interface
    */
    
    displayHeader: function(element){
        if(!this.headerIsDisplayed){
            //  get contact button
            var contact_btn = element.children[1];
            
            //
            this.changeBackgroundColor(element, "#ffffff");
            //  change button Fontcolor and borderColor
            this.changeBorderColor(contact_btn, "#008C8C");
            this.changeFontColor(contact_btn, "#008C8C");
            
            // fade in header
            this.fadeIn(element, 500);
            
            //signify that header is displayed
            this.headerIsDisplayed = true;
        }
    },
    hideHeader: function(element){
        //  check if header is displayed
        if(this.headerIsDisplayed){
            //  get contact button
            var contact_btn = element.children[1];
            
            //  change button Fontcolor and borderColor
            this.changeBorderColor(contact_btn, "#FFFFFF");
            this.changeFontColor(contact_btn, "#FFFFFF");
            
            // fade in header
            this.fadeOut(element, 500);
        
            //signify that header is displayed
            this.headerIsDisplayed = false;
        }
    },
};

/*
 *  Works
*/
//var header = document.getElementById("header");
//var contact_btn = header.children[1];
window.addEventListener('scroll', function(event){
    event.preventDefault();
    var home = document.getElementById('home-sec');
    var header = document.getElementById("header");
    var header_height = header.clientHeight;
    var button = header.children[1];
    temi.checkScrollDirection();
    /*
     *  check if scroll direction is upwards and scrollUp event is not handled
    */
    if(temi.isScrollUp && (!temi.isPageScrollUpHandled)){
        temi.handleScrollUp();
        temi.slideDown(header, (-header_height), (0), 5);
        
        /*  Check if top of the page is reached */
        if(document.scrollingElement.scrollTop === 0){
            temi.changeBackgroundColor(header, "transparent");
            temi.changeBorderColor(button, "#ffffff");
            temi.changeFontColor(button, "#ffffff");
            alert(home.style.top);
        }else
        {
            temi.changeBackgroundColor(header, "#FFFFFF");
            temi.changeBorderColor(button, "#008C8C");
            temi.changeFontColor(button, "#008C8C");
        }
    }
    
    
    /*
     *  check if scroll direction is downwards and scrolldown event is not handled
    */
    if((!temi.isScrollUp) && (!temi.isPageScrollDownHandled)){
        temi.handleScrollDown();
        temi.slideUp(header, (0), (-header_height), 5);
    }
    
    
    /*
     *  Display technologies
    */
    temi.displayContent();
});

window.onload = function(){
    
    /*
     *  On Document load:
     *  1. fade in the body logo through 1500ms
     *  2. display the cursor and cause it flicker for 1500ms
     *  3. display the name, letter by letter
     *  4. fade in horizontal bar
     *  5. fade in slogan
     *  6. End
    */
    
    /*  Collect relevant elements   */
    var logo = document.getElementById("body-icon");
    var slogan = document.getElementById("slogan");
    var hr = document.getElementById("hr");
    var name_container = document.getElementById("my_name");
    var cursor = document.getElementById("cursor");
    var time = 250;
    var opc = 0;
    var i = 0;
    var name = "Oguntuberu Nathan";
    var nameShown = "";
    
    /*    Fade in Body Icon   */
    temi.fadeIn(logo, 1500);
    
    /*    Cursor flicker Animation    */
    setTimeout(function(){
        cursor.innerHTML = "_"; //  Display the cursor
        
        /*  cause the cursor to flicker */
        setInterval(function(){
            /*
             *  If cursor opacity is 0,
             *  1. set it to 1
             *  2. set opc to 1
             *  Else
             *  1. set it to 0
             *  2. set opc to 0
             *
             *  NOTE: opc is a control variable for opacity
            */
            if(opc === 0){
                cursor.style.opacity = 1;
                opc = 1;
            }else{
                cursor.style.opacity = 0;
                opc = 0;
            }
        }, time);
    }, 1500);
    
    /*    Name Displaying Animation   */
    setTimeout(function(){
        //  Display the name, letter by letter
        var displayName = setInterval(function(){
            nameShown += name[i];
            name_container.innerHTML = nameShown;
            i++;
            if(i === name.length){
                /*
                 *  If last letter in name has been displayed,
                 *  1. stop the animation
                 *  2. wait 500ms then fade in horizontal bar
                 *  3. wait 500ms then fade in slogan through 1000ms
                 *
                */
                clearInterval(displayName);
                setTimeout(function(){
                      temi.fadeIn(hr, 500);
                      setTimeout(function(){
                          temi.fadeIn(slogan, 1000);
                      }, 500);
                }, 500);
            }
        }, time);
    }, 3000);
};