#!/usr/bin/env bash

set -u -e -o pipefail

readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}

PACKAGES=(theme
    abc
    acl
    auth
    cache
    mock)

VERSION_PREFIX=$(node -p "require('./package.json').version")
VERSION_SUFFIX="-$(git log --oneline -1 | awk '{print $1}')"

runRollup() {

}

rm -rf dist
rm -rf .lib
mkdir -p dist
cp -r packages dist/packages
node ./scripts/inline-template.js

# $(npm bin)/tsc -p tsconfig-build.json
$(npm bin)/ngc -p tsconfig-build.json

