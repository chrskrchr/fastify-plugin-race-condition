To reproduce:

1. Run `npm install`
2. Run `node index.js`

### Expected Output

```
plugin0 register start
plugin0 register finish
plugin1 register start
plugin1 register finish
plugin2 register start
plugin2 register finish
starting server
{"level":30,"time":1645638489287,"pid":13851,"hostname":"AUS-CKARCHER","msg":"Server listening at http://127.0.0.1:3000"}
```

### Actual Output

```
plugin0 register start
plugin0 register finish
plugin1 register start
plugin1 register finish
plugin2 register start
starting server
plugin2 register finish
{"level":30,"time":1645638594807,"pid":13905,"hostname":"AUS-CKARCHER","msg":"Server listening at http://127.0.0.1:3000"}
```

The bug goes away if either `plugin0` registration on L12 - L15 is commented out or the 1ms sleep on L25 is commented out.  
