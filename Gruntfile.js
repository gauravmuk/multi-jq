module.exports = function (grunt) {
    grunt.initConfig({
        requirejs: {
            app: {
                options: {
                    mainConfigFile: 'require-config.js',
                    name: 'src/app',
                    out: 'dist/app.min.js',
                    onModuleBundleComplete: function (data) {
                        var fs = require('fs'),
                            amdclean = require('amdclean'),
                            outputFile = data.path,
                            cleanedCode = amdclean.clean({
                                'filePath': outputFile
                            });
                        fs.writeFileSync(outputFile, cleanedCode);
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
};
