module.exports.formulario_inclusao_noticia = function(application, req, res){
  res.render("admin/form_add_noticia", {validacao:{}, noticia:{}});

}

module.exports.noticias_salvar = function(application, req, res){

  var noticia = req.body;

  req.assert('titulo', 'Titulo Obrigatorio').notEmpty();
  req.assert('resumo', 'O Resumo deve conter de 10 a 100 caracteres').len(10, 100);
  req.assert('autor', 'Autor Obrigatorio').notEmpty();

  var erros = req.validationErrors();
  console.log(erros.length);

  if(erros){
    res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
    return;
  }

  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.salvarNoticia(noticia, function(error, result){
      res.redirect('/noticias');
  });

}
