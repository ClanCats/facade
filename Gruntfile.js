module.exports = function(grunt) {
    grunt.initConfig({

    	// some configuraion value
    	distpath: './dist/assets/',
        srcpath: './src',

        less: {
            build: {
                options: {
                    paths: ["./less"],
                    yuicompress: true
                },
                files: {
                    "<%= distpath %>/css/ccstyle.css": "<%= srcpath %>/less/style.less"
                }
            }
        },

        cssmin: {
            compress: {
                options: {
                    report: 'min',
                    keepSpecialComments: 0
                },
                files: {
                    '<%= distpath %>/css/ccstyle.min.css': [
                        '<%= distpath %>/css/ccstyle.css',
                    ]
                }
            }
        },

        concat: {
            all: {
                files: {
                    '<%= distpath %>/js/base.js': [
                        './node_modules/bootstrap/dist/js/bootstrap.min.js',
                        '<%= srcpath %>/js/*.js'
                    ],
                }
            }
        },

        uglify: {
        	all: {
        		files: {
                  	'<%= distpath %>/js/base.min.js': '<%= distpath %>/js/base.js'
                }
        	}
        },

        copy: {
            fonts: {
                dest: '<%= distpath %>/fonts/',
                src: './node_modules/bootstrap/fonts/*',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
        },

        watch: {
            files: "./less/*",
            tasks: ["less"]
        }
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['less', 'cssmin', 'concat', 'uglify', 'copy']);
};