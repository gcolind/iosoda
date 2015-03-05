module.exports = function(grunt){
  // Do grunt stuff

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/css/style.css': 'public/scss/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);

};
