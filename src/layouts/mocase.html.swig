{% extends "default.html.swig" %}


{% block bodyclass_block %}{% endblock %}
{% block top_block %}
<div class="cy-header">
    <div class="cy-hcot">
        <h1>
            <a href="/pc-library.html" class="cy-logo">手机创意库</a>
        </h1>
        <div class="s-left">
        <form id="search-form" action="#">
            <input class="s-txt" type="text" name="query" value="" placeholder="模板编号">
            <input class="s-btn" type="submit" value=""></form>
        </div>
    </div>
</div>
{% endblock %}
{% block focus_block %}
{% endblock %}