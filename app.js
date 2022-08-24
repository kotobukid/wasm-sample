const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

express.static.mime.define({'application/wasm': ['wasm']})

app.set('view engine', 'pug')

app.use(express.static('webapp/dist2', {
    setHeaders: (res) => {
        res.set('Cross-Origin-Opener-Policy', 'same-origin');
        res.set('Cross-Origin-Embedder-Policy', 'require-corp');
    }
}));

app.use(express.static('webapp/dist2/vite', {
    setHeaders: (res) => {
        res.set('Cross-Origin-Opener-Policy', 'same-origin');
        res.set('Cross-Origin-Embedder-Policy', 'require-corp');
    }
}));

app.use(express.static('public', {
    setHeaders: (res) => {
        res.set('Cross-Origin-Opener-Policy', 'same-origin');
        res.set('Cross-Origin-Embedder-Policy', 'require-corp');
    }
}));

app.get('/', (req, res) => {
    // res.render('index', {});
    fs.readFile('./webapp/dist2/vite/index.html', 'utf-8', (err, data) => {
        if (err) throw err;
        res.end(data);
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})