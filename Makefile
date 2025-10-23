.PHONY: install test build clean

install:
	bundle install

test:
	bundle exec jekyll serve --livereload --watch --drafts

build:
	bundle exec jekyll build

clean:
	bundle exec jekyll clean
