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
        @import url('./css/base-style-mdp.css') screen and (min-width: 420px);
        @import url('./css/base-style-hdp.css') screen and (min-width: 1000px);
        @import url('./css/base-style-xhdp.css') screen and (min-width: 1425px);
    </style>
    <link href="https://fonts.googleapis.com/css?family=Prata|Handlee" rel="stylesheet">
    <script src="./js/temi.js"></script>
</head>

<body>
    <div class="page-wrapper">
        <header id="header">
            <img alt="" class="site-icon" src="./media/logo-xx.fw.png" onclick="myPage.displayMenu();">
            <button class="right" onclick="temi.contactMe();">CONTACT</button>
        </header>
        <section id="home-sec">
            <div  class="col-flex" id="veil">
                <img alt="My Logo" src="./media/logo-white-xx.fw.png" id="body-icon">
                <h1><span id="my_name"></span><span id="cursor"></span></h1>
                <hr id="hr">
                <h3 id="slogan">Web Designer. Developer. Wordsmith. Foodie.</h3>
                <!--<p>
                    I am a junior full stack web developer, creative mind, Linux enthusiast and foodie
                    based in Nigeria. I ably create simple yet beautiful and attractive websites.
                    I love solving problems, drinking coffee and Game of thrones.<br>
                    I can <b>git</b> with teams and I'm always ready to learn. Right here, you have the right man.
                    <br>Valar Morghulis.
                </p-->
            </div>
        </section>
        <section class="col-flex" id="about-sec">
            <h1>Let Your Content Dictate The Design.</h1>
            <ul id="tech">
                <li>AngularJS</li>
                <li>CSS</li>
                <li>Git</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>MySQL</li>
                <li>PHP</li>
                <li>Problem Solving</li>
                <li>WordPress</li>
            </ul>
        </section>
        <section class="col-flex" id="skill-sec">
            <div class="skill-item">
                <div></div>
                <h3>Frontend Design</h3>
                <p>
                    With  guidance from your content and imaginations as welll as great attention to detail,
                    I create simple, beautiful and visually appealing web designs.
                    I also add an optimal dose of responsiveness to ensure your that
                    you reach your target users irrespective of the device they use.
                </p>
            </div>
            <div class="skill-item">
                <div></div>
                <h3>Backend Development</h3>
                <p>
                    Adding Logic and dynamism to your web application translates to more power and usefulness.
                    With top skill in PHP scripting and database design and implementation, I give your application the power it needs
                    to satisfy your end users.<br> Be it a simple or complex application.
                </p>
            </div>
            <div class="skill-item">
                <div></div>
                <h3>Post-work Support</h3>
                <p>
                    The world we live in is a pragmatic one and unforseen complications may arise at anytime.
                    I also understand that support is critical to successful projects. For this reason,
                    I am always available to provide help and a learned voice when needed. <br/>I am always a mail away.
                </p>
            </div>
        </section>
        <footer>
            <h1>"Every Hire Is A Gamble"</h1>
            <h3>- Donald J. Trump</h3>
        </footer>
    </div>
</body>
</html>
