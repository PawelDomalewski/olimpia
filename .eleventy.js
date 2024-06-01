module.exports = function(eleventyConfig) {
    
    eleventyConfig.addWatchTarget("src/**/*.scss");
    eleventyConfig.addWatchTarget("src/**/*.css");
    eleventyConfig.addWatchTarget("src/**/*.js");
    eleventyConfig.addWatchTarget("src/admin/config.yml");
    eleventyConfig.addWatchTarget("src/admin/*.html");
    eleventyConfig.addWatchTarget("src/**/*.md");
	eleventyConfig.addWatchTarget("./src/blog/");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
    
}

