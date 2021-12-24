; /*
;  * /!\ This header is not added as a part of my quine
;  * assembling with nasm and linking:
;  * OSX:
;  * nasm -f macho64 -o quine.o quine.asm && ld -macosx_version_min 11.6.0 -L /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/lib  -lSystem -no_pie -o quine -e main quine.o
;  * File: quine.asm
;  * Project: ASM
;  * File Created: Thursday, 23rd December 2021 5:23:15 pm
;  * Author: Mel-Louie (mdesfont@student.42.fr)
;  * -----
;  * Last Modified: Thursday, 23rd December 2021 5:23:59 pm
;  * Modified By: Mel-Louie (mdesfont@student.42.fr)
;  * -----
;  * Copyright 2021 - 2021 Mel-Louie
;  * Licence MIT
;  */

section	.data
	code db "section\t.data\nstring db", 0x0A

section	.text
	global	main

main:
	mov rax, 0x02000004
	mov rdi, 1
	mov rsi, code
	mov rdx, 13
	syscall

	mov rax, 0x02000001
	mov rdi, 0
	syscall
