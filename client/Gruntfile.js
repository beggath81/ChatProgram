module.exports = function ( grunt ) {
//grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-min');
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.registerTask('default', ['concat',  'cssmin', 'uglify']);
 var taskConfig = {
   jshint: {
     src: ['**/*.js'],
     gruntfile: ['Gruntfile.js'],
     options: {
     	options: {
  curly:  true,
  immed:  true,
  newcap: true,
  noarg:  true,
  sub:    true,
  boss:   true,
  eqnull: true,
  node:   true,
  undef:  true,
  globals: {
    _:       false,
    jQuery:  false,
    angular: false,
    moment:  false,
    console: false,
    $:       false,
    io:      false
  }
 }

     }
   },

   concat: {
  js: {
    src: 'build/*.js',
    dest: 'dest/js/concat.js'
  },
  css: {
    src: 'build/*.css',
    dest: 'dest/css/concat.css'
  }
},

min: {
  js: {
    src: 'dest/js/concat.js',
    dest: 'dest/js/concat.min.js'
  }
},

cssmin: {
  css:{
    src: 'dest/css/concat.css',
    dest: 'dest/css/concat.min.css'
  }
},

uglify: {
  js: {
    src: 'dest/js/concat.min.js',
    dest: 'dest/js/uglify.js'
  },
  css: {
    src: 'dest/css/concat.min.css',
    dest: 'dest/css/uglify.css'
  }
}
 };
 grunt.initConfig(taskConfig);
}