---
layout: post
title: (Depreciado) Instalando Docker Desktop em Windows 10 Home - Parte 2
permalink: docker_on_win10home-p2
date: '2020-05-07 12:01'
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

Com o WSL 2 instalado já é possível instalar o Docker. Para isso podemos baixar o instalador da [versão Edge do Docker Desktop](https://download.docker.com/win/edge/Docker%20Desktop%20Installer.exe).

Já na primeira tela aparecerá a possibilidade de ativar a integração com a engine do WSL 2.

![Tela de instalação do docker com opção WSL 2 ativada](/assets/posts/DockerOnWin10Home/wsl2_docker_install.jpg)

Clicando em OK a instalação prosseguira e se tudo correr bem deverá aparecer a seguinte mensagem:

> **ATENÇÃO: ao clicar em "Close and log out" sua sessão será desconectada.**


![Tela de instalação do docker com opção WSL 2 ativada](/assets/posts/DockerOnWin10Home/wsl2_docker_installed.jpg)

Após instalado e ativado a engine do WSL 2, é possivel vincular as distribuições Linux que estão instaladas na maquina com o Docker Desktop.

![icone do docker desktop na área de trabalho](/assets/posts/DockerOnWin10Home/docker-icon.jpg)

Clicando nele você iá visualizar o dashboard do docker e terá a possibilidade de executar o tutorial básico para conhecer o docker.

![Tela de apresentação e primeiros passos](/assets/posts/DockerOnWin10Home/wsl2_docker_tutorial.jpg)

Acessando o ícone de configuração, teremos as seguintes opções na categoria *"General"*.

Eu normalmente desmarco a opção *"Start Docker Desktop when your log in"*, pois gosto de ativar o docker apenas quando vou utilizar.

Além desta eu gosto de ativar a opção *"Expose daemon on tcp://localhost:2375 without TLS"* para utilizar o docker em conjunto com o terraform.

![Tela de configuração geral do docker desktop](/assets/posts/DockerOnWin10Home/wsl2_docker_settings.jpg)

Na categoria *"Resources > WSL Integration"* é possivel selecionar com qual distro a integração WSL vai se conectar.

![Tela de configuração de recursos e integração WSL](/assets/posts/DockerOnWin10Home/wsl2_docker_settings2.jpg)

Finalizando estas configurações e clicando em *"Apply & Restart"* o docker estará instalado, configurado e rodando na maquina, com Windows 10 Home.

Agora só falta começar a subir os contêineres.

Eu realizei testes com a integração do Visual Studio Code e do Visual Studio 2019 e ambas funcionaram corretamente.

Testei também a integração com o *Terraform*, que funcionou muito bem.

Logo pretendo fazer alguns posts sobre estes testes.

Por hoje é só pessoal, espero que tenham gostado do post, pretendo retomar as postagens no blog, focando nesta parte de infraestrutura, desenvolvimento e DevOps. Mas sem deixar os assuntos aleatórios também.

Até breve.
