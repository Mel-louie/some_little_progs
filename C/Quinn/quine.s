	;gcc -S quine.c 
	
	.section	__TEXT,__text,regular,pure_instructions
	.build_version macos, 11, 0	sdk_version 11, 3
	.globl	_main                           ## -- Begin function main
	.p2align	4, 0x90
_main:                                  ## @main
	.cfi_startproc
## %bb.0:
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register %rbp
	subq	$160, %rsp
	movl	$0, -4(%rbp)
	leaq	L_.str(%rip), %rax
	movq	%rax, -16(%rbp)
	movq	-16(%rbp), %rdi
	movq	-16(%rbp), %rax
	movl	$10, %ecx
	movl	%ecx, %esi
	movl	%ecx, %edx
	movl	$9, %r8d
	movl	%ecx, -20(%rbp)                 ## 4-byte Spill
	movl	%r8d, %ecx
	movl	-20(%rbp), %r8d                 ## 4-byte Reload
	movl	-20(%rbp), %r9d                 ## 4-byte Reload
	movl	$9, (%rsp)
	movl	$9, 8(%rsp)
	movl	$10, 16(%rsp)
	movl	$10, 24(%rsp)
	movl	$9, 32(%rsp)
	movl	$32, 40(%rsp)
	movl	$32, 48(%rsp)
	movl	$34, 56(%rsp)
	movq	%rax, 64(%rsp)
	movl	$34, 72(%rsp)
	movl	$59, 80(%rsp)
	movl	$10, 88(%rsp)
	movl	$9, 96(%rsp)
	movl	$10, 104(%rsp)
	movl	$9, 112(%rsp)
	movl	$10, 120(%rsp)
	movl	$10, 128(%rsp)
	movb	$0, %al
	callq	_printf
	xorl	%ecx, %ecx
	movl	%eax, -24(%rbp)                 ## 4-byte Spill
	movl	%ecx, %eax
	addq	$160, %rsp
	popq	%rbp
	retq
	.cfi_endproc
                                        ## -- End function
	.section	__TEXT,__cstring,cstring_literals
L_.str:                                 ## @.str
	.asciz	"#include <stdio.h>%c%cint%cmain(void)%c{%c%cchar%c*s;%c%c%cs%c=%c%c%s%c%c%c%cprintf(s, 10, 10, 9, 10, 10, 9, 9, 10, 10, 9, 32, 32, 34, s, 34, 59, 10, 9);%c%creturn (0);%c}%c"

.subsections_via_symbols
