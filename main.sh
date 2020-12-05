# clean up
rm -rf es

# create package
npx rollup -c rollup-package.config.js

# install package
rm -rf node_modules/components
mkdir node_modules/components
cp -r es node_modules/components
cp components-package.json node_modules/components/package.json

# build app
npx rollup -c rollup-app.config.js

# display app
cat app-output/app.js