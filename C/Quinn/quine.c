/*
 * My 1st quine
 * /!\ This header is not added as a part of my quine
 * File: quine.c
 * Project: Quin
 * File Created: Sunday, 12th December 2021 1:46:33 pm
 * Author: Mel-Louie (mdesfont@student.42.fr)
 * -----
 * Last Modified: Sunday, 12th December 2021 2:40:33 pm
 * Modified By: Mel-Louie (mdesfont@student.42.fr)
 * -----
 * Copyright 2021 - 2021 Mel-Louie
 * Licence MIT
 */
#include <stdio.h>

int	main(void)
{
	char	*s;

	s = "#include <stdio.h>%c%cint%cmain(void)%c{%c%cchar%c*s;%c%c%cs%c=%c%c%s%c%c%c%cprintf(s, 10, 10, 9, 10, 10, 9, 9, 10, 10, 9, 32, 32, 34, s, 34, 59, 10, 9);%c%creturn (0);%c}%c";
	printf(s, 10, 10, 9, 10, 10, 9, 9, 10, 10, 9, 32, 32, 34, s, 34, 59, 10, 9, 10, 9, 10, 10);
	return (0);
}
