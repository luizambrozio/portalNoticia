function NoticiasDAO(connection){
  this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
  this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(idnoticia, callback){
  this._connection.query('select * from noticias where idnoticia = ' + idnoticia.idnoticia , callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
  this._connection.query('insert into noticias set ?', noticia, callback)
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){

  this._connection.query('select * from noticias order by date_created desc limit 5', callback);

}

module.exports = function(){
  return NoticiasDAO;
}
