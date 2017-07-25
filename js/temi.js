var temi = {
    docIsReady: false, //   Tell when the document is ready
    isScrollUp: false,
    prevScrollPosition: 0,
    headerIsDisplayed: false,
    isPageScrollDownHandled: false,
    isPageScrollUpHandled: false,
    
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
        element.style.fontColor = color;
    },
    checkScrollDirection: function(){
        var currScrollPosition = document.body.scrollTop;
        var scrollDiff = this.prevScrollPosition - currScrollPosition;
        if(scrollDiff > 0){
            this.isScrollUp = true;
        }else{
            this.isScrollUp = false;
        }
        //
        this.prevScrollPosition = currScrollPosition;
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
            
            //  change button Fontcolor and borderColor
            this.changeBorderColor(contact_btn, "#008C8C");
            this.changeFontColor(contact_btn, "#008C8C");
            this.changeBackgroundColor(element, "#ffffff");
            
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
window.addEventListener('scroll', function(){
    console.log(document.body.scrollTop);
    var header = document.getElementById("header");
    temi.checkScrollDirection();
    if(temi.isScrollUp && (!temi.isPageScrollUpHandled)){
        //page moves up
        temi.handleScrollUp();
        temi.slideDown(header, (-70), 0, 5);
    }
    if((!temi.isScrollUp) && (!temi.isPageScrollDownHandled)){
        //page moves down
        temi.handleScrollDown();
        temi.slideUp(header, (0), (-70), 5);
    }
});

