<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8" />
	<title>{{ document.title }}</title>
	<meta content="{{ document.description }}" name="description">
	<meta content="{{ document.keywords }}" name="keywords">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="renderer" content="webkit">
	{{ getBlock("styles").add(["/styles/cloud.css"]).toHTML() }}
    {{ getBlock("styles").add(["/styles/dm-base.css"]).add(["/styles/wj-css.css"]).add(["/styles/style.css"]).toHTML() }}
</head>
<body>
    <div class="wp-welcome">
        <div class="wp-welcome-content">
            <div class="wp-hello">嗨，欢迎来到担路云官网！</div>
            <div class="wp-top-phone_login">全国咨询热线：400-855-5051<a href="http://www.demlution.com/account/login/" class="wp-top-login">登陆</a>&nbsp;/&nbsp;
                <span class="animation-color"><a class="font_color" href="http://www.demlution.com/account/signup/">免费注册</a></span>&nbsp;/&nbsp;
                <a href="http://www.danlu.net/agent/">
                    <img src="images/ZC.gif">申请代理商</a>
            </div>
        </div>
    </div>
	{{ document.content|safe }}
	{{ getBlock("scripts").add(["/vendor/jquery.js", "/vendor/masonry.pkgd.js", "/vendor/underscore.js", "/vendor/backbone.js", "/scripts/library-app.js", "/scripts/scripts.js"]).toHTML() }}
</body>

</html>
