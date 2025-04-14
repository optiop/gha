# Optiop GitHub Actions


## Changelog

| Version            | Date       | Title |
| ------------------ | ---------- | ----------- |
| [v1.0.0](#v1.0.0)  | 2025-02-15 | Initial Pipeline to build Grafana images, yamllinter and pr-checks |

## v1.0.0

```yaml
# Build Grafana image
permissions:
  contents: read
  packages: write

jobs:
  build-grafana-image:
    uses:
      optiop/gha/.github/workflows/build-grafana-image.yaml@v1.0.0
    with:
      project-name: grafana-enlighten
```

```yaml
# Build Grafana frontend image
permissions:
  contents: read
  packages: write

jobs:
  build-custom-grafana:
    permissions: write-all
    uses:
      optiop/gha/.github/workflows/build-custom-grafana.yaml@v1.0.0
    secrets:
      grafana-access-policy-token: ${{ secrets.GRAFANA_ACCESS_POLICY_TOKEN }}

# values.yaml
grafana:
  image: ghcr.io/optiop/grafana-enlighten
  tag: 8aaa7f53

frontend:
  image: ghcr.io/optiop/enlighten-cyber-intelligence
```


## Build image
```yaml
permissions:
  contents: read
  packages: write

jobs:
  build-exporter-image:
    permissions: write-all
    uses:
      optiop/gha/.github/workflows/build-image.yaml@v1.1.0
    inputs:
      context: src/exporter
      name: exporter
```


## Build
```bash
npm install
ncc build pr-checks/index.ts  
mv dist/index.js pr-checks
```

## References
[Javascript Action](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-javascript-action)