# Optiop GitHub Actions


## Changelog

| Version            | Date       | Title |
| ------------------ | ---------- | ----------- |
| [v1.0.0](#v1.0.0)  | 2025-02-15 | Initial Pipeline to build Grafana images, yamllinter and pr-checks |

## v1.0.0
```yaml
# Build Grafana image
permissions:
  packages: write

jobs:
  build-grafana-image:
    uses:
      optiop/gha/.github/workflows/build-grafana-image.yaml@v1.0.0
    with:
      project-name: grafana-enlighten
```

## Build
```bash
npm install
ncc build pr-checks/index.ts  
mv dist/index.js pr-checks
```

## References
[Javascript Action](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-javascript-action)