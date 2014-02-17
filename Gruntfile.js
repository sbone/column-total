module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        files: {
          'js/counter.js': ['counter.js']
        }
      }
    },
    watch: {
      js: {
        files: ['counter.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.registerTask('default', ['uglify']);
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
