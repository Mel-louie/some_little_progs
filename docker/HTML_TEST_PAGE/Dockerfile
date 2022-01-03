FROM nginx:1.15.8-alpine

#config
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN			rm -f /etc/nginx/nginx.conf
RUN			rm -f /usr/share/nginx/html/index.html
COPY		./nginx.conf /etc/nginx/nginx.conf

#content, comment out the ones you dont need!
COPY ./appMeteo/*.html /usr/share/nginx/html/
COPY ./appMeteo/*.css /usr/share/nginx/html/
COPY ./appMeteo/ressources/chargement /usr/share/nginx/html/ressources/chargement
COPY ./appMeteo/ressources/jour /usr/share/nginx/html/ressources/jour
COPY ./appMeteo/ressources/nuit /usr/share/nginx/html/ressources/nuit
COPY ./appMeteo/scripts/ /usr/share/nginx/html/scripts
