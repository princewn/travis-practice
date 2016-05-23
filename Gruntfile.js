module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt); //加载所有的任务
    require('time-grunt')(grunt); //如果要使用 time-grunt 插件

    grunt.initConfig({
        connect: {
            options: {
                port: 9001,
                hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
                livereload: 35719 //声明给 watch 监听的端口
            },

            server: {
                options: {
                    open: true, //自动打开网页 http://
                    base: [
                        '' //主目录
                    ]
                }
            }
        },
        browserify: {
            all: {
                src: 'src/**/*.js',
                dest: 'build/index.js'
            }
        },

        less: {
            build: {
                expand: true,
                cwd: "src/css",
                src: 'index.less',
                dest: 'build',
                ext: '.css'
            }
        },
        uglify: {
            build: {
                files: [{
                    expand: true,
                    cwd: "src",
                    src: '**/*.js',
                    dest: 'build',
                    ext: '.js'
                }]
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    cwd: "src",
                    src: '**/*.html',
                    dest: 'build',
                    ext: '.html'
                }]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['src/**/*.js']
        },
        // underscore_jst: {
        //     options: {
        //         outputSettings: {
        //             style: 'amd'
        //         },
        //     },
        //     main: {
        //         files: [{
        //             expand: true,
        //             cwd: 'src/tpl',
        //             src: '*.tpl',
        //             ext: '.tpl.js',
        //             dest: 'src/tpl'
        //         }]
        //     }
        // },
        watch: {
            livereload: {
                options: {
                    livereload: '<%=connect.options.livereload%>' //监听前面声明的端口  35729
                },

                files: [ //下面文件的改变就会实时刷新网页
                    'src/**/*'
                ]
            },
            // jst: {
            //     files: 'src/tpl/*.tpl',
            //     tasks: 'newer:underscore_jst:main'
            // },
            copy: {
                files: 'src/**/*.*',
                tasks: 'copy:build'
            },

            less: {
                files: 'src/**/*.less',
                tasks: 'less:build'
            },
            browserify: {
                files: 'src/**/*.js',
                tasks: 'browserify'
            }
            //            uglify: {
            //              files: 'src/**/*.js',
            //            tasks: 'uglify:build'
            //      }
        },
        env: {
          coverage: {
            APP_DIR_FOR_CODE_COVERAGE: '../test/coverage/instrument/app/'
          }
        },
        instrument: {
          files: 'app/*.js',
          options: {
            lazy: true,
            basePath: 'test/coverage/instrument/'
          }
        },
        mochaTest: {
          options: {
            reporter: 'spec'
          },
          src: ['test/*.js']
        },
        storeCoverage: {
          options: {
            dir: 'test/coverage/reports'
          }
        },
        makeReport: {
          src: 'test/coverage/reports/**/*.json',
          options: {
            type: 'lcov',
            dir: 'test/coverage/reports',
            print: 'detail'
          }
        }
    });

    grunt.registerTask('default', ['serve']);
    // grunt.registerTask('jst', ['underscore_jst:main'])

    grunt.registerTask('serve', [
        'connect:server',
        'watch'
    ]);

    grunt.loadNpmTasks('grunt-istanbul');

    grunt.registerTask('coverage', ['env:coverage', 'instrument', 'mochaTest',
        'storeCoverage', 'makeReport']);
}