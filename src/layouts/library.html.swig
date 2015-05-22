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
<div class="tipcolor"><div class="tipc"><div class="tipc1"></div><div class="tipc2"></div><div class="tipc3"></div><div class="tipc4"></div></div></div>
<div class="cy-header">
    <div class="cy-hcot">
        <h1>
            <a href="/" class="cy-logo">创意库</a>
        </h1>
        <div class="cy-nav">
            <ul>
            <li><a href="http://www.danlu.net/case/1/" class="on"><span>普通类</span></a></li>
            <li><a href="http://www.danlu.net/case/2/"><span>精品类</span></a></li>
            <li><a href="http://www.danlu.net/case/3/"><span>商城类</span></a></li>
            <li><a href="http://www.danlu.net/case/4/"><span>平台类</span></a></li>
            <li><a href="http://www.danlu.net/case/5/"><span>论坛类</span></a></li>
            <li><a href="http://www.danlu.net/case/10/"><span>定制型</span></a></li>
            </ul>
        </div>
    </div>
</div>

	{{ document.content|safe }}
	{{ getBlock("scripts").add(["/vendor/jquery.js", "/vendor/masonry.pkgd.js", "/vendor/underscore.js", "/vendor/backbone.js", "/scripts/library-app.js", "/scripts/scripts.js"]).toHTML() }}
</body>

</html>
