---
layout: post
title: Instalando Docker Desktop em Windows 10 Home - Parte 2
permalink: docker_on_win10home-p2
date: '2020-05-01 12:00'
comments: false
description: "Tutorial para auxiliar na instalação do Docker Desktop em maquinas com Windows 10 Home Edition..."
keywords: "devops, docker, wsl, windows"
categories:
  - Tecnologia
tags:
  - DevOps
  - Docker
  - WSL
  - Windows 10 Home
---

Como comentei na postagem anterior, iniciei pensando em fazer um pequeno HowTo para facilitar a configuração do Docker Desktop para quem como eu tem Windows 10 Home e não podia utilizá-lo até este momento. Porém o documento começou a ficar bastante grande e por isso o separei em 2.

Nesta postagem teremos a conclusão do processo de instalação do ambiente, com a instalação e configuração do Docker Desktop e vou apresentar algumas formas como eu interajo com ele, espero que gostem.

Então vamos lá:

## Docker for Windows 10 Home

Enfim, com o WSL 2 instalado já é possível instalar o Docker. Para isso podemos baixar o instalador da [versão Edge do Docker Desktop](https://download.docker.com/win/edge/Docker%20Desktop%20Installer.exe).

Durante a instalação aparecerá a possibilidade de configurar a integração com a engine do WSL 2.

![Tela de instalação do docker com opção WSL 2 ativada](/assets/posts/DockerOnWin10Home/wsl2_docker_settings.jpg)

Após instalado e ativado a engine do WSL 2, é possivel vincular as distribuições Linux que estão instaladas na maquina com o Docker Desktop.

![Tela de instalação do docker com opção WSL 2 ativada](/assets/posts/DockerOnWin10Home/wsl2_docker_settings2.jpg)

Com isso já temos o Docker instalado e rodando na maquina, com Windows 10 Home. Agora só falta começar a subir os containers.

Eu realizei testes com a integração do Visual Studio Code e do Visual Studio 2019 e ambas funcionaram corretamente.

Testei fazer a exposição da porta 2375 e a integração com o Terraform funcionou corretamente também, logo pretendo fazer alguns posts sobre estes testes.

E por hoje é só pessoal, espero que tenham gostado do post, pretendo retomar as postagens no blog a partir de hoje, focando nesta parte de infraestrutura, desenvolvimento e DevOps. Mas sem deixar os assuntos aleatórios também.
