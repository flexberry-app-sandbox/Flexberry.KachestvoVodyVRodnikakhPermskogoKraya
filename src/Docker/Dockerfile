FROM node:12 as ember_app

COPY /src/ember-app /src/ember-app

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  cd /src/ember-app/; \
  ember build --environment=docker

FROM mono:latest as backend

COPY /src/Kachestvo_vody_v_rodnikakh_permskogo_kraya /src/Kachestvo_vody_v_rodnikakh_permskogo_kraya

RUN \
 cd /src/Kachestvo_vody_v_rodnikakh_permskogo_kraya ;\
 nuget restore Kachestvo_vody_v_rodnikakh_permskogo_kraya.sln; \
 msbuild /p:Configuration=Release Kachestvo_vody_v_rodnikakh_permskogo_kraya.sln

FROM flexberry/mono-xsp:latest

MAINTAINER mail@flexberry.net

COPY --from=backend /src/Kachestvo_vody_v_rodnikakh_permskogo_kraya/ODataBackend /app
COPY --from=ember_app /src/ember-app/dist /app
WORKDIR /app
