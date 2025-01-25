# Optiop GitHub Actions


## Build
```bash
cd pr-checks
npm i -g @vercel/ncc
ncc build index.js
mv dist/index.js .
```

## References
[Javascript Action](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-javascript-action)