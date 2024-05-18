module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css/stylesheets.css');
    eleventyConfig.addPassthroughCopy('./src/upload');

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}