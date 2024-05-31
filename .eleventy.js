module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css/stylesheets.css');
    eleventyConfig.addPassthroughCopy('./src/upload');
    eleventyConfig.addWatchTarget("src/**/*.scss");
    eleventyConfig.addWatchTarget("src/**/*.css");
    eleventyConfig.addWatchTarget("src/**/*.js");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
    
}

