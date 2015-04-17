//cat ~/.ssh/id_rsa.pub | ssh sruizcou@shell.gridhost.co.uk "mkdir -p ~/.ssh && cat >>  ~/.ssh/authorized_keys"
//rsync -Pav ~/Airstream/ sruizcou@shell.gridhost.co.uk:~/public_html/wp/wp-content/themes/sruizTheme
//

module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2,
            report: 'min'
          },
          files: {
            // target.css file: source.less file
            "css/style.css": "theme.less"
          }
        }
      },
      watch: {
          styles: {
            // Which files to watch (all .less files recursively in the less directory)
            files: ['less/*.less','less/mixins/*.less', 'theme.less', 'variables.less'],
            tasks: ['less'],
            options: {
              nospawn: true
            }
          }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};