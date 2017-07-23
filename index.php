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
        /*@import url('./css/base-style-mdp.css') screen and (min-width: 420px);
        @import url('./css/base-style-hdp.css') screen and (min-width: 700px);*/
        @import url('./css/base-style-xhdp.css') screen and (min-width: 1425px);
    </style>
    <link href="https://fonts.googleapis.com/css?family=Prata|Handlee" rel="stylesheet">
    <script src="./js/temi.js"></script>
</head>

<body>
    <div class="page-wrapper">
        <header>
            <img alt="" class="site-icon" src="./media/logo-xx.fw.png" onclick="myPage.displayMenu();">
            <button class="right" onclick="myPage.showElement('contact-sec', 20);">CONTACT</button>
        </header>
        <section id="home-sec">
            <div  class="col-flex" id="veil">
                <img alt="My Logo" src="./media/logo-white-xx.fw.png">
                <h1>Oguntuberu Nathan</h1>
                <hr>
                <h3>Web Designer. Developer. Wordsmith. Foodie.</h3>
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
            <h1>Be Beautiful. Stand Out. Soar</h1>
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
                <h3>Responsive Web Design</h3>
                <p>Let your content determine the design, keeping it clean, beautiful and appealing.
                A responsive site is most desirable. Let's make your site fit a wide range of devices.</p>
            </div>
            <div class="skill-item">
                <div></div>
                <h3>Backend Development</h3>
                <p>Give your sites and apps more power with logic and dynamism, without breaking them.</p>
            </div>
            <div class="skill-item">
                <div></div>
                <h3>Database Design</h3>
                <p>Add more power to your apps with optimized databases. I design and implement in MySQL.</p>
            </div>
        </section>
        <footer>
            <h3>Do feel free to leave me a message.</h3>
        </footer>
    </div>
</body>
</html>
