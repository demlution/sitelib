# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    templateData:
        site:
            title:"担路网"
            scripts:["/vendor/jquery.js"]

		 getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

}

# Export the DocPad Configuration
module.exports = docpadConfig