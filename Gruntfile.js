module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ''
      },
      dist: {
        src: ['src/counter.js'],
        dest: 'js/script.js'
      }
    },
    uglify: {
      build: {
        files: {
          'js/script.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    watch: {
      scripts: {
        files: 'src/*.js',
        tasks: ['concat', 'uglify']
      }
    }
  });

  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
};
