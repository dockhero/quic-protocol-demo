QUIC protocol example app
=========================

Simple NodeJS app rendered via Caddy-enabled proxy
to support [QUIC](https://en.wikipedia.org/wiki/QUIC) protocol

Deployed to Heroku using [Dockhero](https://dockhero.io) addon

Proof: https://vital-sun-4864.dockhero.io/pets

![screenshot](https://d1ro8r1rbfn3jf.cloudfront.net/ms_37246/NgV6vJB76ofiyKgcVhwVXzdRvIW86f/https%253A%252Fvital-sun-4864.dockhero.io%252Fpets%2B2016-08-29%2B12-03-12.png?Expires=1472544290&Signature=XI~wUH2vwDood16HkmGXe1UCTdGzKyXhbcl6j4piviYlQDDne90g9vSLd3K2Wg92h03X1yknUOK2pzjTkBWj6TpA05Bh3HAIsJCGGpHNNdp8fkvGRcDlRH4soOzMeI~JTZhK89ljX9XefO2rG6YV1t~2gHaIbMwI8rfj5x5GkIHDdizCIalFW0DCDD0uI9qERVWMA81FBAZK2Wla4hYlfdx8OnF7SXwEOKC7haJ8EQdl2qaiWGvc2XsI2fm3NUMt~h4nrYeZpNudR~jhGnhIyY00v4eijk3qIYur5hqxFUpUsTFNuHJf8ltyDgFIdDxVc4Xhvaj9pihSeYsnUoxIzA__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

NOTE: you may need to [enable QUIC protocol support in Chrome](https://github.com/mholt/caddy/wiki/QUIC) in order to test this

Endpoints
---------

```
GET /pets          # list of pets, just their names
GET /pets/:name    # pet's details (by name)
POST /pets         # creates a new pet
```

To add new pets, try this in your console:

```bash
curl -H "Content-Type: application/json" -X POST -d '{"name":"kitty","species":"cat"}' https://vital-sun-4864.dockhero.io/pets
```
