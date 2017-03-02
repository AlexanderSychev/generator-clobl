'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Генерирующий генератор для блоков ' + chalk.red('Clobl') + '!'
    ));

    var prompts = [
        {
            type: 'input',
            name: 'BlockNamespace',
            message: 'ПространствоИмен',
            default: 'cl.gBlock'
        },
        {
            type: 'input',
            name: 'BlockName',
            message: 'Имя блока',
            default: 'Block'
        },
        {
            type: 'input',
            name: 'ViewName',
            message: 'Имя представления',
            default: 'View'
        },
        {
            type: 'input',
            name: 'TemplateName',
            message: 'Имя шаблона',
            default: 'Template'
        },
        {
            type: 'input',
            name: 'TemplateEntryName',
            message: 'Точка входа в шаблон',
            default: 'block'
        },
        {
            type: 'input',
            name: 'RootCssClass',
            message: 'Главный CSS-класс',
            default: 'b-block'
        },
        {
            type: 'input',
            name: 'FactoryFullName',
            message: 'Полное имя фабрики',
            default: 'cl.iCloblFactory.CloblFactory'
        }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.blockname = this.appname.replace(/\s+/g, '-');
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_control.js'),
      this.destinationPath(this.props.RootCssClass + '.js'), this.props
    );
    this.fs.copyTpl(
      this.templatePath('Params.js'),
      this.destinationPath('Params.js'), this.props
    );
    this.fs.copyTpl(
      this.templatePath('_view.js'),
      this.destinationPath('View.js'), this.props
    );
    this.fs.copyTpl(
      this.templatePath('_template.soy'),
      this.destinationPath(this.props.RootCssClass + '.soy'), this.props
    );
    this.fs.copyTpl(
      this.templatePath('_styles.scss'),
      this.destinationPath(this.props.RootCssClass + '.scss'), this.props
    );
  }
});
