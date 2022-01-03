FROM alpine:3.12

RUN apk update && apk upgrade && apk add --no-cache \
    openssl \
    nginx \
    curl \
    vim \
    sudo

RUN rm -rf /etc/nginx.conf

#configuration
COPY ./nginx.conf /etc/nginx.conf

# COPY ./*.html /usr/share/nginx/html/
# COPY ./*.css /usr/share/nginx/html/
# COPY ./*.js /usr/share/nginx/html/

COPY ./* /usr/share/nginx/html/

ENV			CERTS_DIR=/etc/openssl					\
			DOMAIN_NAME=mdesfont.fr					\
			CERT_PATH=/etc/ssl/mdesfont.fr.cert	\
			KEY_PATH=/etc/ssl/mdesfont.fr.key	\
			TLS_VERSION=1.3

COPY		./setup_nginx.sh /setup_nginx.sh
RUN			chmod -R +x /setup_nginx.sh

EXPOSE		8080 443

ENTRYPOINT	["sh", "setup_nginx.sh"]