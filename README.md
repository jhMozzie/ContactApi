## Initialize Pnpm project
```bash
pnpm init
pnpm add express morgan
```

# Don't forget to install types of packages
```bash
pnpm add -D typescript ts-node-dev @types/node @types/express @types/morgan
```

## Install ts config
```bash
pnpm tsc --init
```

## Add dev into scripts
```bash
"dev":"ts-node-dev --respawn src/index.ts"
```