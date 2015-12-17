# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    templateData:
        site:
            title:"担路产品-企业互联网工具提供商"
            keywords:"担路网, 网站建设, 网站制作, 商城制作, 手机网站制作, 手机商城, 上海网站制作, 松江网站制作, 上海最便宜的网站制作, 网络推广, 网站优化"                        
            description:"担路为企业提供互联网工具，产品包括五大部分：信息展示/营销模块/客户转化/客户管理/数据统计分析--云官网/云商城/CRM/会员管理系统/400电话。",
            scripts:["/vendor/jquery.js","/scripts/q.js"]

        getPreparedTitle: -> if @document.title then "#{@document.title}-#{@site.title}" else @site.title
       
        # Get the prepared site/document description
        getPreparedDescription: ->
            # if we have a document description, then we should use that, otherwise use the site's description
            @document.description or @site.description

        # Get the prepared site/document keywords
        getPreparedKeywords: ->
            # Merge the document keywords with the site keywords
            @site.keywords.concat(@document.keywords or []).join(', ')

}

# Export the DocPad Configuration
module.exports = docpadConfig
