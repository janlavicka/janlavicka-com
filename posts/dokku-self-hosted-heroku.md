---
title: "Dokku: Self-hosted Heroku"
description: "UX of Heroku application deployment for a better price."
created: "2021-06-05"
---

Like many other developers, I tried to deploy [Heroku](https://heroku.com), and the whole process from setting up the database to push to deploy was a real wow moment. The only negative and quite crucial is the price, which is several times higher than the comparably powerful VPS servers at DigitalOcean, Vultr, Linode and others.

Fortunately, there is a solution called [Dokku](https://dokku.com) that provides UX Heroku UX on its own server in docker containers.

## Main features

- Apps and addons concept same as Heroku
- Support for [Buildpacks](https://devcenter.heroku.com/articles/buildpacks) from Heroku
- Easy to use CLI interface mirroring Heroku CLI
- Set of first party plugins/addons mantained by creators of Dokku
- Support for multi server deployment with [Kubernetes or Nomad plugins](https://dokku.com/docs/advanced-usage/schedulers/alternate-schedulers/)
- And of course price, which comes in form of a bill from your favorite VPS provider

## Apps

Apps can be configured throw CLI interface and deployed on git push to server. The build of the app is managed by Heroku Buildpacks and configuration files stored inside of your git repository like app.json and Procfile.

You can also deploy any docker image additionally to Heroku Buildpacks. This can be quite useful in combination with plugins, where you can link your custom docker container with the database plugin, expose it to a specific domain and protect it with Let's Encrypt HTTPS certificate. All manages by Dokku runtime.

## Plugins

Dokku comes with a set of ready-to-use addons with can be linked or modify apps in some sanse. Plugins I use are:

- PostgreSQL
- Redis
- Mongo
- Elasticsearch
- Let's Encrypt
- And more

All database plugins come with the ability to backup themselves periodically to your AWS S3 bucket.

## Conclusion

Dokku is a great money saver. You can have the identical environment and CLI UI as Heroku with a radically lower price just with a little bit of Linux knowledge.
