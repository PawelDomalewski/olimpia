module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css/stylesheets.css');
    eleventyConfig.addPassthroughCopy('./src/upload');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/blog');
    eleventyConfig.addWatchTarget("src/**/*.scss");
    eleventyConfig.addWatchTarget("src/**/*.css");
    eleventyConfig.addWatchTarget("src/**/*.js");
    eleventyConfig.addWatchTarget("src/**/*.yml");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
    
}

