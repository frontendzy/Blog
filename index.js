const express = require ('express');

const app = express();

app.use(require('cors')())
app.use(express.json())

app.set('secret', 'asfiuhewrknew')

require('./routes/admin')(app)
require('./routes/webs')(app)
require('./plugins/db')(app)

app.use('/', express.static( __dirname + '/public/webs' ))
app.use('/admin', express.static( __dirname + '/public/admin' ))
app.use('/uploads', express.static( __dirname + '/uploads' ))

app.listen(2700, () => {
  console.log('启动成功');
})
