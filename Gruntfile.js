module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: [
          // App
          'src/javascripts/app.js',
          'src/javascripts/controllers.js'
        ],
        dest: 'public/js/compiled.js',
        options: {
          separator: ';'
        }
      }
    },
    uglify: {
      js: {
        src: 'public/js/compiled.js',
        dest: 'public/js/compiled.min.js'
      }
    },
    watch: {
      js: {
        files: ['src/javascripts/*.js'],
        tasks: ['default'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify']);

};