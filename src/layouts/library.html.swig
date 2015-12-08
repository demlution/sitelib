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
            <a href="/pc-library.html" class="cy-logo">创意库</a>
        </h1>
        <div class="s-left">
        <form id="search-form" action="#">
            <input class="s-txt" type="text" name="query" value="" placeholder="模板编号" />
            <input class="s-btn" type="submit" value=''/></form>
        </div>
        <div class="cy-nav">
            <ul>
            <li><a href="#/t/k1" class="on"><span>PC普通</span></a></li>
            <li><a href="#/t/k2"><span>PC精品</span></a></li>
            <li><a href="#/t/k15"><span>PC尊豪</span></a></li>
            <li><a href="#/t/k3"><span>PC商城</span></a></li>
            <!--<li><a href="#/t/k4"><span>平台类</span></a></li>
            <li><a href="#/t/k5"><span>论坛类</span></a></li>-->
            <li><a href="#/t/k10"><span>定制</span></a></li>
            <li><a href="/mobile-case.html"><span>手机模板</span></a></li>
            </ul>
        </div>
    </div>
</div>

	{{ document.content|safe }}
	{{ getBlock("scripts").add(["/vendor/jquery.js", "/vendor/json2.js", "/vendor/masonry.pkgd.js", "/vendor/underscore.js", "/vendor/backbone.js", "/vendor/backbone.fetch-cache.js", "/vendor/backbone-tastypie.js", "/scripts/library-app.js", "/scripts/scripts.js"]).toHTML() }}
</body>

</html>
