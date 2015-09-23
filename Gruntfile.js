module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      build: {
        src: 'src/mailto-creation.js',
        dest: 'dist/mailto-creation.min.js'
      }
    }
  });

grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['uglify']);

};