module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'assets/js',
                    src: '**/*.js',
                    dest: '.tmp/js'
                    }]
                }
          },
          copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'assets/images',
                    src: ['**'],
                    dest: '.tmp/images'
                }]
            }
        },
        clean: [".tmp"]
       });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean','copy','uglify']);
};