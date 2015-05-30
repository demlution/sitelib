<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>{{ document.title }}</title>
        <meta content="{{ document.description }}" name="description">
        <meta content="{{ document.keywords }}" name="keywords">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="renderer" content="webkit">
        <meta name="viewport" content="target-densitydpi=device-dpi, width=1200px, user-scalable=yes">
        {{ getBlock("styles").add(["/styles/dm-base.css"]).add(["/styles/wj-css.css"]).add(["/styles/style.css"]).add(["/styles/online.css"]).add(document.styles).toHTML() }}
    </head>

    <body>
        <div {% block bodyclass_block %}class="wj-body"{% endblock %}>
        {% block top_block %}
            <div class="wj-tip">
                <div class="wj-tipcot">
                <div class="head_left">
                        <a title="担路首页" href="http://www.demlution.com/" target="_blank">担路首页</a>
                        <span class="topRegLink">|</span>
                        <a href="http://www.demlution.com/index.html"><span>担路平台</span></a>
                        <span class="topRegLink">|</span>
                        <a href="http://www.demlution.com/about/about/" target="_blank"><span>担路介绍</span></a>
                        <span class="topRegLink">|</span>
                        <a href="http://www.demlution.com/about/help/" target="_blank"><span>担路帮助</span></a>
                </div>
                <ul class="head_right">
                <li class="li01"><a target="_blank" class="qqtc" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1439391305&amp;site=qq&amp;menu=yes"><ins>QQ联系</ins></a></li>
                <li class="li02"><a target="_blank" title="微信" href="/weixin.html"><ins>微信联系</ins></a></li>
                <li class="li03"><a title="官方微博" target="_blank" href="http://weibo.com/demlution"><ins>官方微博</ins></a></li>
                </ul>
                <div class="head_tel">
                    <span>服务热线：
                        <font class="num">400-855-5051</font>
                    </span>
                    <span class="topRegLink">|</span>
                    <a href="http://www.demlution.com/account/login/" target="_blank">登录</a>
                    <span class="topRegLink">|</span>
                    <a title="免费网站注册" href="http://www.demlution.com/account/signup/" target="_blank">注册</a>
                </div>
                </div>
                <!--Center -->
            </div>
            <div class="wj-header" id="tophome">
                <div class="wj-hcot">
                    <h1>
                        <a href="/" class="wj-logo">担路网-网站建设</a>
                    </h1>
                    <div class="wj-nav">
                        <div class="wj-navcot">

                            <ul>
                                <li>
                                    <a href="/index.html"><span>概览</span></a>
                                </li>
                                <!--
                                <li>
                                    <a href="/pc.html"><span>PC网站</span></a>
                                </li>
                                -->
                                <!-- <li><a href="/case/2/"><span>代理专区</span></a></li>-->
                                <li>
                                    <a href="/cpc.html"><span>云官网</span></a>
                                </li>
                                <li>
                                    <a href="/cmall.html" ><span>云商城</span></a>
                                </li>
                                <li>
                                    <a href="/zeus5.html"><span>会员系统</span></a>
                                </li>
                                <li>
                                    <a href="/400tel.html"><span>企业400</span></a>
                                </li>
                                <li>
                                    <a href="/article/"><span>产品资讯</span></a>
                                </li>
                                <!--
                                <li>
                                    <a href="/marketing.html"><span>网络推广</span></a>
                                </li>
                                <li>
                                    <a href="/article.html"><span>新闻中心</span></a>
                                </li>-->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
{% endblock %}
            {% block focus_block %}
            <div class="wj-focusbg">
            <div class="wj-focus" id="flashBg">
                <div class="f-txt">
                    <div class="hd">担路，一路担当</div>
                    <div class="bd">我们致力于互联网信息展示、客户挖掘转化、客户关系维护，为您打造高性价比的一体化互联网解决方案！</div>
                </div>
                <div class="f-phone">热线电话：
                    <em>400-855-5051</em>
                </div>
            </div>
            </div>
            {% endblock %}

            {% block wrap_block %}
            {{ document.content|safe }}
            {% endblock %}
        {% block foot_block %}
        <div class="wj-fotbg">
            <div class="wfot-help">
                <div class="wfot-ad">
                <ul class="feature clearfix">
                    <li class="fe-1">
                                <b class="ico">近万客户见证</b>
                            </li>
                    <li class="fe-2">
                                <b class="ico">7x8小时售后服务</b>
                            </li>
                    <li class="fe-3">
                                <b class="ico">免费的产品培训</b>
                            </li>
                    <li class="fe-4">
                                <b class="ico">基于SAAS的云架构</b>
                            </li>
                </ul>
                </div>
            <div class="fh-all clearfix">
                <ul>
                <li class="fh-site">
                    <dl>
                    <dt>旗下网站</dt>
                    <dd><a target="_blank" href="http://www.demlution.com/index.html">担路平台</a></dd>
                    <dd><a target="_blank" href="http://www.danlu.net/">担路产品</a></dd>
                    <dd><a target="_blank" href="http://www.demlution.com/about/help/">担路帮助</a></dd>
                    <dd><a target="_blank" href="http://www.danlu.net/agent.html">加盟代理</a></dd>
                    </dl>
                </li>
                <li class="fh-about">
                    <dl>
                    <dt>了解担路</dt>
                    <dd><a target="_blank" href="http://www.demlution.com/about/about/">关于我们</a></dd>
                    <dd><a target="_blank" href="http://www.demlution.com/about/hr/">人才招聘</a></dd>
                    <dd><a target="_blank" href="http://www.demlution.com/about/terms/">担路协议</a></dd>
                    <dd><a target="_blank" href="http://www.demlution.com/about/terms2/">隐私条款</a></dd>
                    </dl>
                </li>
                <li class="fh-member">
                    <dl>
                    <dt>用户中心</dt>
                    <dd><a target="_blank" href="http://www.demlution.com/account/signup/">立即注册</a></dd>
                    <dd><a target="_blank" href="#">常见问题</a></dd>
                    <dd><a target="_blank" href="#">新手上路</a></dd>
                    <dd><a target="_blank" href="http://www.demlution.com/about/jifen/">积分评价</a></dd>
                    </dl>
                </li>
                <li class="fh-cotact">
                    <dl>
                    <dt>服务支持</dt>
                    <dd><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1439391305&site=qq&menu=yes">在线沟通>></a>(9:00-22:00 非工作日9:00-20:00)</dd>
                    <dd>售后专线：021-39517056(24小时服务热线)</dd>
                    <dd>客服邮箱：<a target="_blank" href="mailto:lx@demlution.com">lx@demlution.com</a></dd>
                    </dl>
                </li>
                <li class="fh-ico">
                    <div class="i1"><a target="_blank" href="http://weibo.com/demlution"><div class="icon-weibo"></div></a>&nbsp;
                    <a target="_blank" class="a-wx" href="/weixin.html"><div class="icon-comments-alt"></div></a></div>
                    <div class="i2">热线电话：<b>400-855-5051</b></div>
                </li>
                </ul>
            </div>
        </div>
            <div class="fot-cop">
                <p class="black9">Copyright 2011-2015
                    <a href="http://www.demlution.com/">担路网</a>(Demlution.com) 版权所有 沪ICP备12018506号-1
                    <script type="text/javascript">
                        var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
                        document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F75fb47e8b856d549e2e9b28533498cdb' type='text/javascript'%3E%3C/script%3E"));
                    </script>
                </p>
            </div>
        </div>
        {% endblock %}
        </div>
        <div id="online_qq_layer">
            <div id="online_qq_tab">
                <div class="online_icon">
                    <a title="" id="floatShow" style="display:block" href="javascript:void(0);">&nbsp;</a>
                    <a title="" id="floatHide" style="display:none" href="javascript:void(0);">&nbsp;</a>
                </div>
                <!--online_icon end-->
            </div>
            <div id="onlineService" style="display: none;">
                <div class="online_windows overz">
                    <div class="online_w_top"></div>
                    <!--online_w_top end-->
                    <div class="online_w_c overz">
                        <div class="online_bar expand" id="onlineSort1">
                            <h2>
                                <a href="javascript:viod(0)">地区加盟</a>
                            </h2>
                            <div class="online_content overz" id="onlineType1">
                                <ul class="overz">
                                    <li>
                                        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1439391305&amp;site=qq&amp;menu=yes" class="qq_icon">王先生</a>
                                    </li>
                                    <li>电话：
                                        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1439391305&amp;site=qq&amp;menu=yes">15021125231</a>
                                    </li>
                                </ul>
                            </div>
                            <!--online_content end-->
                        </div>
                        <!--online_bar end-->
                        <div class="online_bar expand" id="onlineSort2">
                            <h2>
                                <a href="javascript:viod(0)">售前咨询</a>
                            </h2>
                            <div class="online_content overz" id="onlineType2">
                                <ul class="overz">
                                    <li>
                                        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1439391305&amp;site=qq&amp;menu=yes" class="qq_icon">李先生</a>
                                    </li>
                                    <li>电话：
                                        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1439391305&amp;site=qq&amp;menu=yes">021-39517056</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--online_bar end-->
                        <div class="online_bar expand" id="onlineSort3">
                            <h2>
                                <a href="javascript:viod(0)">售后支持</a>
                            </h2>
                            <div class="online_content overz" id="onlineType3">
                                <ul class="overz">
                                    <li>
                                        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1439391305&amp;site=qq&amp;menu=yes" class="qq_icon">李先生</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1439391305&amp;site=qq&amp;menu=yes" class="qq_icon">投诉专线</a>
                                    </li>
                                    <li>电话：
                                        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1439391305&amp;site=qq&amp;menu=yes">15121033560</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--online_bar end-->
                    </div>
                    <!--online_w_c end-->
                    <div class="online_w_bottom"></div>
                    <!--online_w_bottom end-->
                </div>
                <!--online_windows end-->
            </div>
        </div>
        {{ getBlock("scripts").add(site.scripts).toHTML() }}
        {{ getBlock("scripts").add(document.scripts).toHTML() }}
        
<link rel="stylesheet" type="text/css" href="http://s2.d2scdn.com/static/mobile_theme/style1/font-awesome/css/font-awesome.css" media="all" />
    </body>
</html>
