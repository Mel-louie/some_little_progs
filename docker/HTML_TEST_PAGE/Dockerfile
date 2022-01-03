#  docker build . -t our-server
#  docker run -it --rm -p 8080:80 our-server

FROM nginx:1.15.8-alpine

#config
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN			rm -f /etc/nginx/nginx.conf
RUN			rm -f /usr/share/nginx/html/index.html
COPY		./nginx.conf /etc/nginx/nginx.conf

#content, comment out the ones you dont need!
COPY ./appMeteo/*.html /usr/share/nginx/html/
COPY ./appMeteo/*.css /usr/share/nginx/html/
COPY ./appMeteo/*.js /usr/share/nginx/html/
COPY ./appMeteo/ressources/ /usr/share/nginx/html/ressources/
COPY ./appMeteo/scripts/ /usr/share/nginx/html/scripts
