QUIC protocol example app
=========================

Simple NodeJS app rendered via Caddy-enabled proxy
to support [QUIC](https://en.wikipedia.org/wiki/QUIC) protocol

Deployed to Heroku using [Dockhero](https://dockhero.io) addon

![Screenshot](https://monosnap.com/file/ekJ6F5L55iZEpMsCF59A6sMEfTiMN2.png)

NOTE: you may need to [enable QUIC protocol support in Chrome](https://github.com/mholt/caddy/wiki/QUIC) in order to test this

Endpoints
---------

```
GET /              # some intro in HTML
GET /pets          # list of pets, just their names
GET /pets/:name    # pet's details (by name)
POST /pets         # creates a new pet
```

To add new pets via CURL:

```bash
curl -H "Content-Type: application/json" -X POST -d '{"name":"kitty","species":"cat"}' https://vital-sun-4864.dockhero.io/pets
```

Deployment to Heroku
--------------------

First checkout the repo and deploy it to Heroku. Make sure it is available via `*.herokuapp.com` URL:

```bash
heroku create
git push heroku master
heroku open
```

Then install Dockhero addon and [CLI plugin](https://github.com/cloudcastle/dockhero-cli)

```bash
heroku addons:create dockhero
heroku plugins:install dockhero
heroku dh:wait
```

Now spin up the stack described by dockhero-compose.yml

```bash
heroku dh:compose up -d
```

and check the logs with

```bash
heroku logs --tail -p dockhero
```

If everything went fine, you should be able to see the app via Dockhero URL:

```bash
heroku dh:open
```
