module.exports = function(grunt){
  grunt.initConfig({
    // Removes the contents of the public directory
    clean: ["public/"],
    // Builds Sass

    sass: {
      dev: {
        files: {
          'public/stylesheets/application.css': 'public/sass/application.scss'
        },
        options: {
          includePaths: ['node_modules/govuk_frontend_toolkit/govuk_frontend_toolkit/stylesheets'],
          outputStyle: 'expanded'
        } 
      }
    },

    // Copies templates and assets from external modules and dirs
    copy: {
      govuk_template: {
        src: 'node_modules/govuk_template_mustache/views/layouts/govuk_template.html',
        dest: 'views/layouts/',
        expand: true,
        flatten: true,
        filter: 'isFile'
      },
      govuk_assets: {
        files: [
          {
            expand: true,
            src: '**',
            cwd: 'node_modules/govuk_template_mustache/assets',
            dest: 'public/'
          }
        ]
      }
    },
    // Watches styles and specs for changes
    watch: {
      css: {
        files: ['public/sass/**/*.scss'],
        tasks: ['sass'],
        options: { nospawn: true }
      }
    }
  });

  [
    'grunt-contrib-clean',
    'grunt-contrib-copy',
    'grunt-contrib-watch',
    'grunt-sass'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', [
    'sass',
    'copy:govuk_template',
    'copy:govuk_assets',
    'watch'
  ]);
};
