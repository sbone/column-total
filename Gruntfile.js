module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: false
      },
      build: {
        files: {
          'bookmarklet.js': ['js/script.js']
        }
      }
    },
    watch: {
      scripts: {
        files: 'src/*.js',
        tasks: ['uglify']
      }
    }
  });

  grunt.registerTask('default', ['uglify']);
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
