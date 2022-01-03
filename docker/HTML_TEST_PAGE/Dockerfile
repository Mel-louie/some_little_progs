FROM		alpine:3.12

RUN			apk update && apk upgrade && apk add --no-cache	\
											openssl			\
											nginx			\
											curl			\
											vim				\
											sudo

RUN			rm -f /etc/nginx/nginx.conf
RUN			rm -f /usr/share/nginx/html/index.html
COPY		./nginx.conf /etc/nginx/nginx.conf

COPY ./appMeteo/*.html /usr/share/nginx/html/
COPY ./appMeteo/*css /usr/share/nginx/html/
COPY ./appMeteo/ressources/ /usr/share/nginx/html/
COPY ./appMeteo/scripts/ /usr/share/nginx/html/


RUN			mkdir /run/nginx &&	\
			chown nginx:nginx /run/nginx

ENV			CERTS_DIR=/etc/openssl					\
			DOMAIN_NAME=mdesfont.42.fr					\
			CERT_PATH=/etc/ssl/mdesfont.42.fr.cert	\
			KEY_PATH=/etc/ssl/mdesfont.42.fr.key	\
			PHP_FPM_HOST=php-fpm					\
			PHP_FPM_PORT=9000						\
			TLS_VERSION=1.3

COPY		./setup_nginx.sh /setup_nginx.sh
RUN			chmod -R +x /setup_nginx.sh
RUN			chmod -R +x /usr/share/nginx/html/

EXPOSE		443

ENTRYPOINT	["sh", "setup_nginx.sh"]