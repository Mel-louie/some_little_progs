OS_NAME := $(shell uname -s | tr A-Z a-z)

os:
	@echo $(OS_NAME)
