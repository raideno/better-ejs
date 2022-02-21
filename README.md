# Better-Ejs:

![](https://img.shields.io/badge/-In%20developement-yellow)
<img alt="badge" src="https://img.shields.io/badge/-In%20developement-yellow">

***Not fully ready to use***

## Install:

```
npm install better-ejs
```

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
  res.render('index', { user });
});

app.listen(3000, () => console.log('[Port]:', 3000));
```

**views/index.bjs**

```html
<body>
  {{ include("./components/navbar.bjs", { user }); }}
  <h1>Home<h1>
  <h2>User: <a href="#">{{ out(user) }}</a></h2>
  <h3>
  {{
    if (user === "admin")
    {
      out("It's an admin !");
    }
    else out("It's not and admin !");
  }}
  <h3>
</body>
```

**views/components/navbar.bjs**

```html
<nav>
  <h1>
    NavBar: 
    {{
      if (user) {
        out(user)     
      } else {
        out("<a href='/login'>Login</a>");
      }
    }}
  </h1>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/contacts">Contacts</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

## Documentation

`out(...data:string)`: To output something to the Html Document
