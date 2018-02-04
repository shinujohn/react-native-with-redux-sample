#!/usr/bin/env bash


# Example: Upload master branch app binary to HockeyApp using the API
if [ "$APPCENTER_BRANCH" == "master" ];
then
   npm run single
else
    echo "Current branch is $APPCENTER_BRANCH"
fi