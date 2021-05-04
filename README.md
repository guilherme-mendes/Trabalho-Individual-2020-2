# Trabalho Individual 2020.2

[![API-CI](https://github.com/guilherme-mendes/Trabalho-Individual-2020-2/actions/workflows/api_ci.yml/badge.svg?branch=master)](https://github.com/guilherme-mendes/Trabalho-Individual-2020-2/actions/workflows/api_ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=guilherme-mendes_Trabalho-Individual-2020-2_api&metric=alert_status)](https://sonarcloud.io/dashboard?id=guilherme-mendes_Trabalho-Individual-2020-2_api)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=guilherme-mendes_Trabalho-Individual-2020-2_api&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=guilherme-mendes_Trabalho-Individual-2020-2_api)
[![Maintainability](https://api.codeclimate.com/v1/badges/fa17df98ca694d693c66/maintainability)](https://codeclimate.com/github/guilherme-mendes/Trabalho-Individual-2020-2/maintainability)
[![codecov](https://codecov.io/gh/guilherme-mendes/Trabalho-Individual-2020-2/branch/master/graph/badge.svg?token=EX9C7DY6IV)](https://codecov.io/gh/guilherme-mendes/Trabalho-Individual-2020-2)
<br>
[![CLIENT-CI](https://github.com/guilherme-mendes/Trabalho-Individual-2020-2/actions/workflows/client_ci.yml/badge.svg)](https://github.com/guilherme-mendes/Trabalho-Individual-2020-2/actions/workflows/client_ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=guilherme-mendes_Trabalho-Individual-2020-2_client&metric=alert_status)](https://sonarcloud.io/dashboard?id=guilherme-mendes_Trabalho-Individual-2020-2_client)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=guilherme-mendes_Trabalho-Individual-2020-2_client&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=guilherme-mendes_Trabalho-Individual-2020-2_client)


| Aluno | Matrícula |
| --- | --- |
| Guilherme Mendes Pereira | 17/0129411 |


### 1. Containerização

A containerização de toda aplicação se deu a partir dos três Dockerfiles do backend, frontend e banco de dados:
* [Dockerfile api](./api/Django.Dockerfile)
* [Dockerfile client](./client/Dockerfile)
* [Dockerfile postgress](./api/db/Postgresql.Dockerfile)

Já a orquestração dos containers foi feita utilizando o docker-compose, com a configuração descrita no arquivo [docker-compose.yaml](./docker-compose.yaml)

Comando para execução da aplicação:
```
docker-compose up --build
```

O resuldado do comando deve ser o seguinte:

![docker-compose-image](./client/src/assets/screen.png)

Após a build, o app pode ser acessado no `localhost:8080/`.

### 2. Integração contínua, Coverage e Deploy Contínuo

A integração contínua foi feita utilizando o GitHub Actions e foram criados três workflows:
* [API-CI](./.github/workflows/api_ci.yml)

![api-ci](./client/src/assets/api.png)

* Build
* Code quality<br>
[SonarCloud](https://sonarcloud.io/dashboard?id=guilherme-mendes_Trabalho-Individual-2020-2_api)<br>
[CodeClimate](https://codeclimate.com/github/guilherme-mendes/Trabalho-Individual-2020-2)<br>
[CodeCov](https://app.codecov.io/gh/guilherme-mendes/Trabalho-Individual-2020-2)<br>
[Pylint](https://github.com/guilherme-mendes/Trabalho-Individual-2020-2/runs/2503225056?check_suite_focus=true)

* Deploy<br>
[DockerHub](https://hub.docker.com/repository/docker/guilhermemp/gces-trabalho-individual-2020-2)

Comando para execução do deploy da imagem no DockerHub:
```
docker push guilhermemp/gces-trabalho-individual-2020-2:tagname
```

* [CLIENT-CI](./.github/workflows/client_ci.yml)

![api-ci](./client/src/assets/api.png)

* Build

* Code quality<br>
[SonarCloud](https://sonarcloud.io/dashboard?id=guilherme-mendes_Trabalho-Individual-2020-2_client)<br>
[CodeClimate](https://sonarcloud.io/dashboard?id=guilherme-mendes_Trabalho-Individual-2020-2_client)<br>

* [COV-CI](./.github/workflows/cov.yml)

![cov-ci](./client/src/assets/cov.png)

* Coverage 97% <br>
[CodeCov](https://app.codecov.io/gh/guilherme-mendes/Trabalho-Individual-2020-2)<br>
