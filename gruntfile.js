module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            options: {
                // We need to `freeze` browsers versions for testing purposes.
                browsers: ['opera 12', 'ff 15', 'chrome 25']
            },
            no_dest_multiple: {
                src: 'css/*.css'
            },
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['autoprefixer']);
};