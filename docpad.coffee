# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    templateData:
        site:
            title:"担路网站建设"
            scripts:["/vendor/jquery.js","/scripts/q.js"]

		 getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

}

# Export the DocPad Configuration
module.exports = docpadConfig