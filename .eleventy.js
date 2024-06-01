module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css/stylesheets.css');
    eleventyConfig.addPassthroughCopy('./src/upload');
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy('./src/blog');
    eleventyConfig.addWatchTarget("src/**/*.scss");
    eleventyConfig.addWatchTarget("src/**/*.css");
    eleventyConfig.addWatchTarget("src/**/*.js");
    eleventyConfig.addWatchTarget("src/**/*.yml");
    eleventyConfig.addWatchTarget("src/**/*.md");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
    
}

const passthroughFolders = [
    "src/upload",
    "src/blog"
  ]

  passthroughFolders.forEach(
    folder => {
      eleventyConfig.addPassthroughCopy(folder);
      eleventyConfig.ignores.add(folder);
    }
  );
