const express = require('express')
const app = express()
const port = 3000

express.static.mime.define({'application/wasm': ['wasm']})

app.use(express.static('./webapp/dist2', {
    setHeaders: (res) => {
        res.set('Cross-Origin-Opener-Policy', 'same-origin');
        res.set('Cross-Origin-Embedder-Policy', 'require-corp');
    }
}));
app.use(express.static('.', {
    setHeaders: (res) => {
        res.set('Cross-Origin-Opener-Policy', 'same-origin');
        res.set('Cross-Origin-Embedder-Policy', 'require-corp');
    }
}));

app.get('/', (req, res) => {
    res.end(`<html lang="ja"><head><meta charset="utf-8"><title>トップ</title></head><body><div id="container"></div><script src="/index.js" type="module"></script></body></html>`)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})