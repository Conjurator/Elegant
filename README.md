[![Build Status](https://travis-ci.org/Conjurator/Elegant.svg?branch=dev)](https://travis-ci.org/Conjurator/Elegant)
[![Test Coverage](https://coveralls.io/repos/github/Conjurator/Elegant/badge.svg?branch=dev)](https://coveralls.io/github/Conjurator/Elegant)

# Elegant
a series of public functional method

# Publish steps

`npm run unit-win/unit` to confirm past unit test, use `npm run build` to generate min pack in /dist. commit what you do and push to github

through `npm whoami` to confirm log information

if not login, just enter `npm login`(need to confirm registry is not cnpm) then enter Usernam(not email)、 Password、Email to login

after success login, run `npm version from-git` to update your local version

then run `npm version patch` to add a new version tag for this package (just like git tag)

use `git commit -am 'version info' && git push` to confirm what you edit, just run `npm publish` to publish your modification