self-sign-cert:
	[ -e certs ] || mkdir certs
	[ -e certs/fullchain.pem ] && [ -e certs/privkey.pem ] || \
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certs/privkey.pem -out certs/fullchain.pem \
	-subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"

# Define default domain (can be overridden when running 'make')
DOMAIN ?= your.domain.com

letsencrypt-cert:
	# Create the certs directory if it doesn't exist
	[ -e certs ] || mkdir -p certs

	# Request the certificate from Let's Encrypt
	certbot certonly --standalone -d $(DOMAIN)

	# Copy the certificates to the project certs directory
	cp /etc/letsencrypt/live/$(DOMAIN)/fullchain.pem certs/fullchain.pem
	cp /etc/letsencrypt/live/$(DOMAIN)/privkey.pem certs/privkey.pem

help:
	@echo "Usage:"
	@echo "  make self-sign-cert      Generate a self-signed TLS certificate (valid for 1 year) in ./certs"
	@echo "  make letsencrypt-cert    Request a Let's Encrypt TLS certificate for DOMAIN (default: your.domain.com)"
	@echo ""
	@echo "Variables:"
	@echo "  DOMAIN=<your.domain>     Override the default domain when requesting a Let's Encrypt certificate"
	@echo ""
	@echo "Examples:"
	@echo "  make self-sign-cert"
	@echo "  make letsencrypt-cert DOMAIN=example.com"
