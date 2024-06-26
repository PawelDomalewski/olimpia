module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css/stylesheets.css");
    eleventyConfig.addPassthroughCopy("./src/upload");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPassthroughCopy("./src/blog");
    eleventyConfig.addWatchTarget("src/**/*.scss");
    eleventyConfig.addWatchTarget("src/**/*.css");
    eleventyConfig.addWatchTarget("src/**/*.js");
    eleventyConfig.addWatchTarget("./src/**/*.jpg");
    eleventyConfig.addWatchTarget("src/admin/config.yml");
    eleventyConfig.addWatchTarget("src/admin/*.html");
    eleventyConfig.addWatchTarget("src/**/*.md");
    eleventyConfig.addWatchTarget("./src/blog/");

    return {
        dir: {
            input: "src",
            output: "_site",
        }
    }

}

