#!/bin/bash
find ~/42cursus -name "cronlog" -type f -mtime +2 -delete
git -C ~/42cursus add .
git -C ~/42cursus commit -m "auto commit"
git -C ~/42cursus push
echo "[`date`] modifications of 42cursus has been push on github" >> ~/42cursus/cronlog
