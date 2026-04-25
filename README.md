# DariusNafar.github.io

Personal site of Aliakbar Nafar (Darius) — CS PhD @ MSU. Built with [MkDocs](https://www.mkdocs.org/) using the Cinder theme. Source content lives in `docs/`; configuration in `mkdocs.yml`.

Live at: https://www.anafar.me/ (also https://dariusnafar.github.io)

## Local preview

```bash
mkdocs serve
```

## Deploy

Pushing to `main` auto-deploys via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) — MkDocs builds the site and publishes it to the `gh-pages` branch.

```bash
git push origin main
```
