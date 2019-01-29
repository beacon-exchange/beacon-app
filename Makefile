.PHONY: clean all

all: public/index.html public/styles.css

DEV ?= false
public/index.html: html/index.html Makefile
	handlebarsjs-cli --dev=$(DEV) < html/index.html > artifacts/index.html
	mv artifacts/index.html public/index.html

public/styles.css: scss/styles.scss Makefile
	sass scss/styles.scss artifacts/styles.css
	mv artifacts/styles.css public/styles.css

clean:
	rm public/*

dev-loop:
	mkdir -p artifacts public
	ls \
		Makefile \
		html/index.html \
		scss/styles.scss | \
		entr make DEV=true \
		&
	http-server public/ &
	livereload public/
