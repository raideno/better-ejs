# Better-Ejs:

## How to use:

**index.js:**

```js
const app = express();
const bjs = require('better-ejs');

/*Tell express about better-ejs*/
bjs(app);
/*Set the default express view engine to better-ejs*/
app.set('view engine', 'bjs');

app.get('/:user?', (req, res) => {
  const user = req.params.user | 'No One';
  res.render('index', { user: user });
});

app.listen(3000, () => console.log('[Port]:', 3000));
```

**views/index.bjs**

```html
<body>
  <h1>Home<h1>
  <h2>User: <a href="#">{{ out(user) }}</a></h2>
</body>
```
