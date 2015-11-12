module.exports = function (grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['src/*.js', 'Gruntfile.js'],
            options: {
                loopfunc: true
            }
        },
        preprocess: {
            options: {
                context: {
                    VERSION: '<%= pkg.version %>'
                }
            },
            js: {
              files: {
                'dist/key_exporter.js': 'src/key_exporter.js',
                'dist/scanner.js': 'src/scanner.js',
              }
            },
            html: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-preprocess');

    // Tasks
    grunt.registerTask('default', ['jshint', 'preprocess']);

};
