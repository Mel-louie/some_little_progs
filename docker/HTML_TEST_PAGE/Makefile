#!make

#	COLORS	#
B_RED		= "\033[1;31m"
B_GREEN		= "\033[1;32m"

NAME		= serv

BUILD		=	docker build . -t our-server

RUN			=	docker run -it --rm -d --name serv -p 8080:80 our-server

RM			=	rm -rf

all: run

run: build
	$(RUN)

build:
	$(BUILD)

stop:
	@printf $(B_RED)"Stoping container\n"$(_END)
	@docker stop $(NAME)

start:
	@printf $(B_GREEN)"Starting container\n"$(_END)
	@docker start $(NAME)

purge:
	@docker system prune -a

re: purge all

.PHONY: all build stop start purge run 