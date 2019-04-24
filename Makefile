.PHONY: clean all

all: public/index.html public/styles.css public/slim.js

DEV ?= false
public/index.html: html/index.html Makefile
	handlebarsjs-cli --dev=$(DEV) < html/index.html > artifacts/index.html
	mv artifacts/index.html public/index.html

public/styles.css: scss/styles.scss Makefile
	sass scss/styles.scss artifacts/styles.css
	mv artifacts/styles.css public/styles.css

public/slim.js: slim.js Makefile
	cp slim.js artifacts/slim.js
	mv artifacts/slim.js public/slim.js

clean:
	rm public/*

dev-loop:
	mkdir -p artifacts public
	ls \
		Makefile \
		slim.js \
		html/index.html \
		scss/styles.scss | \
		entr make DEV=true \
		&
	http-server public/ &
	livereload public/
