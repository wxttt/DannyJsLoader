module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['src/*.js', 'src/modules/*.js'],
            options:{
                globals:{
                    console: true,
                    document: true,
                    strict: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', ['jshint'])
};
