#!/usr/bin/env bash


# Example: Upload master branch app binary to HockeyApp using the API
if [ "$APPCENTER_BRANCH" == "master" ];
then
   npm install asyncawait
   npm install -g mocha
   npm run single
else
    echo "Current branch is $APPCENTER_BRANCH"
fi