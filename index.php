<!DOCTYPE html>
<?php
    require_once "./back/process.php";
?>
<html>
<head>
    <title>O. O. Nathan</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Full Stack Web Developer. Creative Thinker. Problem Solver. Writer.">
    <style>
        @import url('./css/base-style.css');
        @import url('./css/grid.css');
        @import url('./css/base-style-mdp.css') only screen and (min-width: 480px);
        @import url('./css/base-style-hdp.css') only screen and (min-width: 700px);
        @import url('./css/base-style-xhdp.css') only screen and (min-width: 1024px);
    </style>
</head>

<body>
    <div class="page-wrapper">
        <header>
            <img alt="" class="site-icon" src="./media/logo-white-xx.fw.png" onclick="myPage.displayMenu();">
            <button class="contact-btn" onclick="myPage.showElement('contact-sec', 20);">CONTACT</button>
        </header>
        <section class="home">
            <img alt="" src="./media/logo-white-xx.fw.png">
            <h1>OGUNTUBERU NATHAN</h1>
            <hr>
            <h3>WEB DESIGNER. DEVELOPER. WORDSMITH. FOODIE.</h3>
        </section>
        <section class="about">
            <!-- <div class="about-content-wrapper">
                <h1>Full-Stack Web Developer. Creative Thinker. Writer. Artist. Foodie.</h1>
                <div class="info-holder">
                    <div class="info">
                        <img alt=" " src="./media/front-end-xx.fw.png">
                        <p>
                            I am able to create beautiful, clean and engaging web site user interfaces
                            with great user experience using HTML, CSS, Javascript and a few powerful libraries.
                        </p>
                    </div>
                    <div class="info">
                        <img alt=" " src="./media/back-end-xx.fw.png">
                        <p>
                            Server side logic, data storage and manipulation are no problem for me. I
                            script in PHP and store in MySQL - giving your web applications more power. 
                        </p>
                    </div>
                    <div class="info">
                        <img alt=" " src="./media/responsive-xx.fw.png">
                        <p>
                            In today's world, building web applications to support a wide range of devices
                            is critical to staying relevant. I deliver on that as easily as I sip water - yes, a sip.
                        </p>
                    </div>
                </div>
            </div> -->
        </section>
        <section class="contact" id="contact-sec" onclick="myPage.hideElement('contact-sec', 20);">
            <div class="contact-wrapper" onclick="myPage.doNothing();">
                <h3>Need help with your project? Send me a message.</h3>
                <div class="c-form">
                    <form name="c_form" method="post" action="">
                        <input name="c_name" class="input-txt left" type="text" placeholder="Fullname"/>
                        <input name="c_mail" class="input-txt right" type="email" placeholder="Email Address"/>
                        <input name="c_sub" type="text" placeholder="Subject"/>
                        <textarea name="c_body" placeholder="Your Message"></textarea>
                        <input name="c_btn" class="input-btn" type="submit" value="Send Message"/>
                    </form>
                </div>
                <div onclick="myPage.hideElement('contact-sec', 20);">Close</div>
            </div>
        </section>
        <!--<footer>
            <p>&copy; OGUNTUBERU NATHAN 2017.</p>
        </footer> -->
    </div>
    <script src="./js/temi.js">
    </script>
</body>
</html>
