.PHONY: serve open clean

serve:
	python3 -m http.server 4000

open:
	open http://localhost:4000

clean:
	rm -rf _site
