# /*
#  * File: Makefile
#  * Project: Quin
#  * File Created: Sunday, 12th December 2021 2:32:24 pm
#  * Author: Mel-Louie (mdesfont@student.42.fr)
#  * -----
#  * Last Modified: Sunday, 12th December 2021 2:40:13 pm
#  * Modified By: Mel-Louie (mdesfont@student.42.fr)
#  * -----
#  * Copyright 2021 - 2021 Mel-Louie
#  * Licence MIT
#  */


NAME = 1stquine

SRCS_FILE	= quine.c

OBJS	= $(SRCS_FILE:.c=.o)

CFLAGS			= -Wall -Wextra -Werror -O3 -g3
CC				= clang

all: launch

launch:
	@$(MAKE) $(NAME)

$(NAME): $(OBJS)
	@$(CC) $(CFLAGS) $(OBJS) -o $(NAME)

$(OBJS): %.o: %.c
	@$(CC) $(CFLAGS) -c $< -o $@

clean:
	@rm -rf $(OBJS)

fclean: clean
	@rm -f $(NAME)

re:
	@$(MAKE) -s fclean
	@$(MAKE) -s
