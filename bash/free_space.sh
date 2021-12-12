#!/usr/bin/bash

# /*
#  * Adapt from free_space.sh by @alexandregv https://github.com/alexandregv/42toolbox
#  * Licence: GPL-3.0 
#  *
#  * File: free_space.sh
#  * Project: some_scripts
#  * File Created: Tuesday, 20th October 2020 10:09:47 am
#  * Author: Mel-Louie (mdesfont@student.42.fr)
#  * -----
#  * Last Modified: Sunday, 12th December 2021 1:18:50 pm
#  * Modified By: Mel-Louie (mdesfont@student.42.fr)
#  * -----
#  * Copyright 2020 - 2021 Mel-Louie
#  */

# A little scipt to perform, to free space on my MacBook

cd $HOME

initial_used_space=$(df -h $HOME | grep -v 'Filesystem' | awk '{ printf("%f", $3) } ')

# Show current used space
initial_df=$(df -h . | grep --color=always -E "Sized|Used|Avail|Capacity|[0-9]*Mi|[0-9]*\.*[0-9]*Gi|[0-9]+\.*[0-9]+% |$")

echo $'\033[0;34m'Current space:\\n$'\033[0;39m'"$initial_df"$'\033[0;39m'
echo $'\033[0;34m'\\nHome folder:$'\033[0;39m'
du -hd1 . 2>/dev/null | sort -h | grep --color=always "[0-9]*\.*[0-9]*M\t\|[0-9]*\.*[0-9]*G\t\|$"
echo

function delete() {
	read -p $'\033[0;34m'Delete\ $'\033[1;96m'$1$'\033[0;34m'\?\ [y/$'\033[1;96m'N$'\033[0;34m']$'\033[0;39m'\  input
	if [ -n "$input" ] && [ "$input" = "y" ]; then
		rm -rf $1
	fi
}

# Delete heavy files/folders
delete "./.cache"
delete "./Library/Containers/com.docker.docker/*"
delete "./Library/Containers/*"
delete "./Downloads/*"

# Brew cleanup
read -p $'\033[0;34m'Cleanup\ Homebrew?\ \($'\033[1;96m'brew\ cleanup$'\033[0;34m'\)\ [y/$'\033[1;96m'N$'\033[0;34m']$'\033[0;39m'\  input
if [ -n "$input" ] && [ "$input" = "y" ]; then
	brew cleanup ;:
fi

# Check ~/Library/Caches/
echo $'\033[0;34m'\\nSee if ~/Library/Caches/ is to heavy:$'\033[0;39m'
sudo du -s ~/Library/Caches/* | sort -h

# Delete ~/Library/Caches/
read -p $'\033[0;34m'Delete\ $'\033[1;96m'$1$'\033[0;34m'\?\ /!\\don\'t\ just\ delete\ all\ the\ contents\ of\ your\ cache\ folder\ without\ reason\ [y/$'\033[1;96m'N$'\033[0;34m']$'\033[0;39m'\  input
	if [ -n "$input" ] && [ "$input" = "y" ]; then
		rm -rf ~/Library/Caches/
	fi

# Show before/after
echo $'\033[0;34m'\\nSpace before:\\n$'\033[0;39m'"$initial_df"$'\033[0;34m'\\n\\nSpace after:$'\033[0;39m'
df -h . | grep --color=always -E "Size|Used|Avail|Capacity|[0-9]*\.*[0-9]*Mi|[0-9]*\.*[0-9]*Gi|[0-9]+\.*[0-9]+% |$"

