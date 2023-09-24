docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kachestvo_vody_v_rodnikakh_permskogo_kraya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kachestvo_vody_v_rodnikakh_permskogo_kraya-java/app ../../..
