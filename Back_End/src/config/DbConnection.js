const mysql = require('mysql');

    const db_config = {
      host: 'us-cdbr-iron-east-05.cleardb.net',
      user: 'b6eff54d624261', 
      password: '3d4b44df',
      database: 'heroku_9471a4d9588bb3f'// ya lo modifique con la nueva dB
    }   
    var connection; //mani mira pave
    
    /* function handleDisconnect() { */
     connection = mysql.createPool(db_config); // Recreate the connection, since
                                                      // the old one cannot be reused.
    
      /* connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
          console.log('error when connecting to db:', err);
          setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
      });                                     // process asynchronous requests in the meantime.
                                              // If you're also serving http, display a 503 error.
      connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
          handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
          throw err;                                  // server variable configures this)
        }
      });
    }
    //si señor error de code en mi API deja y la reviso a ver d
    handleDisconnect(); */
module.exports = connection; //prueba oa ve





