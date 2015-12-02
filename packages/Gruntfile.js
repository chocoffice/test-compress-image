module.exports = function (grunt) {

    // Plugin load (Automated by load-grunt-tasks)
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pngmin: {
            compile: {
                options: {
                    ext: '.png',
                    force: true
                },
                files: [
                    {
                       src: '../assets/image/*.png',
                       dest: '../image/'
                    }
                ]
            }
        },
        clean: {
            options: {
                force: true
            },
            image: {
                src: ["../image/*.png"]
            },
        }
    });

    grunt.registerTask('default', [
        'clean:image',
        'pngmin:compile'
    ]);

};