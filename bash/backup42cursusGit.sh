#!/bin/bash

# if find a conlog older than 2 days, it will be deleted
find ~/42cursus -name "cronlog" -type f -mtime +2 -delete

git -C ~/42cursus add .
git -C ~/42cursus commit -m "auto commit"
git -C ~/42cursus push

# put the log in a cronlog file
echo "[`date`] modifications of 42cursus has been push on github" >> ~/42cursus/cronlog
