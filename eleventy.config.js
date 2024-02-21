module.exports = function (eleventyConfig) {
    //Copy the contents of the 'public' folder to the output folder
    eleventyConfig.addPassthroughCopy({
        "./assets/": "/"
    });

    return {
        dir: {
            input: "content",
            output: "_site",
        },
    };
};
