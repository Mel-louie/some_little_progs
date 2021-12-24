; "Hello world!" in ASM 64 bits, Intel syntax
; assembling with nasm and linking:
; OSX:
; nasm -f macho64 -o hello_world.o hello_world.asm && ld -macosx_version_min 11.6.0 -L /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/lib  -lSystem -no_pie -o hello_world -e main hello_world.o
; Linux:
; nasm -f elf64 -o hello_world.o hello_world.asm && ld hello_world.o -o hello_world

section .data
	hello_world db "Hello world!", 0x0A

section .text
	global main 			; global _start for linux

main:						; global _start for linux
	mov rax, 0x02000004		; mov rax, 4
	mov rdi, 1
	mov rsi, hello_world
	mov rdx, 13
	syscall

	; Terminate the programm
	mov rax, 0x02000001		; mov rax, 1
	mov rdi, 0
	syscall
