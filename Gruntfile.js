'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist'],
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {

                src: [
                    'Gruntfile.js',
                    'app/scripts/**/*.js'
                ]
            }

        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "assets/css/main.css": 'assets/less/main.less'// destination file and source file
                    // "app/css/mediaQuery.css": 'app/less/mediaQuery.less', // destination file and source file
                    // "app/css/timeline.css": 'app/less/timeline.less', // destination file and source file
                    // "app/css/videogular.css": 'app/less/videogular.less' // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['assets/less/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        /*livereload  : {
            options   : {
              base    : 'app',
            },
            files     : ['app/index.html']
        },*/
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**', '!js/**', '!**/*.css', '/../bower_components/bootstrap/fonts'],
                    dest: 'dist/'
                }, {
                    expand: true,
                    cwd: 'app/bower_components/bootstrap/fonts',
                    dest: 'dist/fonts',
                    src: ['**/*']
                }, {
                    expand: true,
                    cwd: 'app/bower_components/font-awesome/fonts',
                    dest: 'dist/fonts',
                    src: ['**/*']
                }]
            },
            distsandbox: {
                files: [{
                    expand: true,
                    cwd: 'app/',
                    dest: 'dist/',
                    src: ['**/*']
                }]
            }
        },

        rev: {
            files: {
                src: ['dist/**/*.{js,css}']
            }
        },

        useminPrepare: {
            html: 'app/index.html'
        },

        usemin: {
            html: ['dist/index.html']
        },

        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },

        bowerInstall: {

            target: {

                // Point to the files that should be updated when 
                // you run `grunt bower-install` 
                src: [
                    'app/index.html' // .html support... 
                ],

                // Optional: 
                // --------- 
                cwd: '',
                dependencies: true,
                devDependencies: false,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');

    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
        'clean', 'copy:dist', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'rev', 'usemin'
    ]);

    // Task for Sandbox/Development Environment
    //TODO: Make sandbox build easy to debug
    grunt.registerTask('sandbox', [
        'clean', 'copy:dist', 'copy:distsandbox'
    ]);
};
