//BEGIN DEFAULT CONFIG
var projectName = 'angulardemo';
var bowerPath = 'bower_components/';
var publicPath = 'public/';
var srcLessFile = 'assets/less/main.less';
var finalCss = 'css/app.min.css';
var finalJs = 'js/app.min.js';
var mainTemplatePath = 'index.html';
var assetSourcePath = 'assets/';
var vendorJsFiles = [ //Use only non minified versions here (because prod task do minify)
    'angular/angular.js',
    'angular-ui-router/release/angular-ui-router.js'
];
var projectJsFiles = [
    'app.js',
    'app/services/repository.js',
    'app/pages/home/home.js',
    'app/pages/product/product.js',
    'app/components/beg-product-list/beg-product-list.js',
    'app/components/beg-product-list-item/beg-product-list-item.js',
    'app/components/beg-rating/beg-rating.js',
    'app/components/beg-product-list-filter-is-new/beg-product-list-filter-is-new.js',
    'app/components/beg-product-list-filter-name/beg-product-list-filter-name.js'

];
var vendorCssFiles = [ //Import vendor less files in your project less file(s)
    'normalize.css/normalize.css',
    'milligram/dist/milligram.css'
];
var faviconBasePng = 'assets/images/square-logo.png'; // should be 260x260	or more for optimal results
var faviconBackgroundColor = '#fff';
var faviconMainColor = '#bb2c2d';
var faviconDirFromMainTemplate = './public';
//END DEFAULT CONFIG


var commonConcatSrc = [];
for (var i = 0; i < vendorJsFiles.length; i++) {
    commonConcatSrc.push(bowerPath + vendorJsFiles[i]);
}
for (i = 0; i < projectJsFiles.length; i++) {
    commonConcatSrc.push(projectJsFiles[i]);
}

var lessCommonFiles = {};
lessCommonFiles[publicPath + finalCss] = srcLessFile;
var cssMinCommonFiles = {};
cssMinCommonFiles[publicPath + finalCss] = [];
for (i = 0; i < vendorCssFiles.length; i++) {
    cssMinCommonFiles[publicPath + finalCss].push(bowerPath + vendorCssFiles[i]);
}
cssMinCommonFiles[publicPath + finalCss].push(publicPath + finalCss);

var cacheBreakMatchAssets = {};
cacheBreakMatchAssets[finalJs] = publicPath + finalJs;
cacheBreakMatchAssets[finalCss] = publicPath + finalCss;

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            common: {
                src: commonConcatSrc,
                dest: publicPath + finalJs
            }
        },
        removelogging: {
            prod: {
                src: publicPath + finalJs,
                dest: publicPath + finalJs
            }
        },
        uglify: {
            prod: {
                src: [publicPath + finalJs],
                dest: publicPath + finalJs
            }
        },

        less: {
            common: {
                options: {
                    paths: ['less'],
                    yuicompress: false
                },
                files: lessCommonFiles
            }
        },
        cssmin: {
            common: {
                files: cssMinCommonFiles
            }

        },
        copy: {
            vendorFonts: {
                expand: true,
                cwd: bowerPath,
                src: '**/fonts/**',
                dest: publicPath + 'fonts/',
                flatten: true,
                filter: 'isFile'
            },
            appFonts: {
                expand: true,
                cwd: assetSourcePath,
                src: '**/fonts/**',
                dest: publicPath + 'fonts/',
                flatten: true,
                filter: 'isFile'
            },
            images: {
                expand: true,
                cwd: assetSourcePath +'images',
                src: '**/*',
                dest: publicPath + 'images'
            }
        },

        realFavicon: {
            favicons: {
                src: faviconBasePng,
                dest: publicPath,
                options: {
                    iconsPath: faviconDirFromMainTemplate,
                    html: [mainTemplatePath],
                    design: {
                        ios: {
                            pictureAspect: 'backgroundAndMargin',
                            backgroundColor: faviconBackgroundColor,
                            margin: '14%',
                            assets: {
                                ios6AndPriorIcons: false,
                                ios7AndLaterIcons: false,
                                precomposedIcons: false,
                                declareOnlyDefaultIcon: true
                            }
                        },
                        desktopBrowser: {},
                        windows: {
                            pictureAspect: 'noChange',
                            backgroundColor: faviconMainColor,
                            onConflict: 'override',
                            assets: {
                                windows80Ie10Tile: false,
                                windows10Ie11EdgeTiles: {
                                    small: false,
                                    medium: true,
                                    big: false,
                                    rectangle: false
                                }
                            }
                        },
                        androidChrome: {
                            pictureAspect: 'backgroundAndMargin',
                            margin: '10%',
                            backgroundColor: faviconMainColor,
                            themeColor: faviconMainColor,
                            manifest: {
                                name: projectName,
                                display: 'standalone',
                                orientation: 'notSet',
                                onConflict: 'override',
                                declared: true
                            },
                            assets: {
                                legacyIcon: false,
                                lowResolutionIcons: false
                            }
                        },
                        safariPinnedTab: {
                            pictureAspect: 'blackAndWhite',
                            threshold: 60.15625,
                            themeColor: faviconMainColor
                        }
                    },
                    settings: {
                        scalingAlgorithm: 'Mitchell',
                        errorOnImageTooSmall: false
                    }
                }
            }
        },
        cachebreaker: {
            prod: {
                options: {
                    match: [cacheBreakMatchAssets],
                    replacement: 'md5'
                },
                files: {
                    src: [mainTemplatePath]
                }
            }
        },
        watch: {
            gruntFile:{
                files: 'Gruntfile.js',
                tasks: ['dev']
            },
            js: {
                files: projectJsFiles,
                tasks: ['concat', 'jshint']
            },
            less: {
                files: assetSourcePath + '**/*.less',
                tasks: ['less', 'cssmin']
            },
            copy: {
                files: [assetSourcePath + '**/fonts/**', assetSourcePath + 'images/**'],
                tasks: ['copy']
            }
        },
        jshint: {
            all: projectJsFiles
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-remove-logging');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-real-favicon');
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('dev', ['concat', 'less', 'cssmin', 'copy', 'jshint']);
    grunt.registerTask('dev:frontend', ['watch']);

    grunt.registerTask('default', ['dev']);
    grunt.registerTask('prod', ['concat', 'removelogging', 'uglify', 'less', 'cssmin', 'copy', 'cachebreaker', 'realFavicon']);

};