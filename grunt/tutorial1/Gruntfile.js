module.exports = function(grunt) {

  const sass = require('node-sass');

  // configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'build/main.js'
      },
      css: {
        //src: ['css/*.css'], this not pay attention to file order
        src: ['css/reset.css','css/bootstrap.css','css/styles.css'],
        dest: 'build/styles.css'
      }
    },
    sass: {
      build: {
        files: [{
          src: 'css/sass/styles.scss',
          dest: 'css/styles.css'
        }],
      },
      options: {
        implementation: sass,
        sourceMap: false
      }
    },
    uglify: {
      build: {
        files: [{
          src: 'build/main.js',
          dest: 'build/main.js'
        }],
      }
    }
  });;

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // register tasks
  grunt.registerTask('concat-js', ['concat:js']);

  grunt.registerTask('concat-css', ['concat:css']);

  grunt.registerTask('sleep', function(){
    console.log('I am sleeping')
  });

  grunt.registerTask('deploy', ['sleep', 'run'])

};
