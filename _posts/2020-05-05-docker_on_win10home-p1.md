---
layout: post
title: Instalando Docker Desktop em Windows 10 Home - Parte 1
permalink: docker_on_win10home-p1
date: '2020-05-05 12:00'
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

Iniciei a escrita deste post pensando em fazer um pequeno HowTo para facilitar a configuração do Docker Desktop para quem como eu tem Windows 10 Home e não podia utilizá-lo até este momento. Porém o documento começou a ficar bastante grande e por isso estou separando em 2.

Neste port inicial vou abordar a preparação do ambiente, com a ativação do WSL ainda na versão 1, os passos para aderir ao programa Windows Insider e a configuração do WSL versão 2. e no próximo vou abordar a instalação propriamente do Docker Desktop neste ambiente.

Então vamos lá:

## Preparando o ambiente

Para poder utilizar o Docker Desktop em maquinas Windows Home é necessário estar utilizando o WSL2.

### Windows Subsystem for Linux

Para quem não sabe exatamente o que é o *WSL (Windows Subsystem for Linux ou Subsistema Windows para Linux)*, ele é um recurso opcional disponivel no Windows 10 (a partir da versão 1607) que permite executar binários e scripts Linux diretamente no Windows. Com ele é possível ter um ambiente idêntico a de uma distribuição Linux, sem precisar usar uma maquina virtual ou algo do tipo.

O WSL permite que você instale múltiplas distribuições Linux na sua máquina, cada qual com uma estrutura de arquivos isolada e independente do sistema e de outras distribuições, similar com o que ocorre com uma máquina virtual.

Você pode ativar o WSL executando o comando a baixo em uma janela do PowerShell, rodando com permissão de administrador:

```posh
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

Após reiniciar sua máquina você pode instalar uma versão da sua distribuição preferida a partir da Microsoft Store. Digite Linux na barra de busca e você encontrará várias distribuições como Ubuntu, Debian, Suse e até o Kali Linux.

![Microsoft Store com pesquisa de termo linux](/assets/posts/DockerOnWin10Home/msstore.jpg)

Após instalar e executar o aplicativo da distribuição desejada, é solicitado que você crie um usuário e senha para usar como o sudo da sua distribuição.

Ao contrário de uma máquina virtual, o WSL é integrado com o sistema, permitindo o acesso dos arquivos tanto do sistema como os arquivos da distribuição.

---

### Sobre o WSL 2

Duas grandes limitações do WSL são a sua performance envolvendo operações de disco e a sua compatibilidade com algumas system calls específicas. Outra limitação é a compatibilidade com system calls. Embora grande parte das system calls funcione graças a implementação e melhorias adicionadas pela equipe do WSL.

Tendo em vista esses problemas, o time responsável pelo desenvolvimento anunciou o WLS 2, com o foco em melhorar a performance em disco e fornecer total compatibilidade com system calls em Linux, não mais traduzindo essas chamadas, mas fornecendo um kernel Linux dentro do Windows!

O WSL 2 utiliza uma arquitetura completamente diferente do WSL 1. Ao invés de traduzir as system calls, ele utiliza diretamente um kernel do Linux atualizado através de uma máquina virtual. Mas não estamos tratando de uma máquina virtual qualquer!

O WSL 2 utiliza as mais recentes tecnologias de virtualização fornecidas pelo Hyper-V para fornecer uma máquina virtual leve, rápida e altamente integrada com o Windows. Com isso é possível utilizar de todas as vantagens que o WSL 1 trouxe, mas agora com total compatibilidade do sistema, até para rodar Docker.

Graças ao uso dessa máquina virtual, a performance com operações em disco aumentaram drasticamente. Antes, seus arquivos eram armazenados diretamente no disco do sistema, agora todos os arquivos utilizados pelo WSL 2 estão dentro de uma disco virtual do formato VHD, conseguindo entregar uma performance até 5 vezes mais em operações como npm install nessa nova arquitetura.

Uma desvantagem dessa abordagem é que não temos acesso direto aos arquivos armazenados dentro do WSL 2, mas temos outras formas de acessar esses arquivos, através da rede ou com extensões especialidades nas nossas IDE, como a extensão Remote WSL do Visual Studio Code. Assim podemos utilizar da melhoria de performance em disco trazido pelo WSL 2.

---

### Aderindo ao programa Windows Insider

O processo de instalação do WSL 2 é muito próximo WSL 1. No momento ele está disponível na versão Insider do Windows 10 (build 18917 ou superior).

Para ter acesso a esta versão é necessário ingressar no [Programa Windows Insider](https://insider.windows.com/en-us/) e selecionar o anel modo Rápido ou Lento.

Para ingressar neste programa você pode clicar em:

> **Iniciar > Configurações > Atualização e Segurança > Programa Windows Insider > Começar agora**

Caso ocorra este erro:
![image.png](/assets/posts/DockerOnWin10Home/erro_insider.jpg)

Clique em Diagnóstico e Comentários e selecione a opção para enviar dados de diagnóstico completos:
![image.png](/assets/posts/DockerOnWin10Home/diagnosticos.jpg)

Em seguida, será necessário vincular a sua conta microsoft:

![Vincular contra microsoft](/assets/posts/DockerOnWin10Home/vincular_conta.jpg)

e se registrar no programa Windows Insider:

![Vincular contra microsoft](/assets/posts/DockerOnWin10Home/participar.jpg)

Após se registrar virá a próxima tela, caso esta tela esteja demorando muito cancele e refaça os últimos passos.

![Vincular contra microsoft](/assets/posts/DockerOnWin10Home/carregando.jpg)

Chegou a hora de escolher o modo de atualização, e o mais seguro é manter no Modo Lento, que já é o recomendado e te manterá numa versão um pouco mais estável das atualizações.

![Vincular contra microsoft](/assets/posts/DockerOnWin10Home/anel_de_atualizacao.jpg)

Aqui você pode ler a politica de privacidade e o contrato do programa insider, após ler clique em confirmar.

![Vincular contra microsoft](/assets/posts/DockerOnWin10Home/contrato.jpg)

Agora só falta reiniciar...

![Vincular contra microsoft](/assets/posts/DockerOnWin10Home/reiniciar.jpg)

---

### Ativando o WSL 2

Depois de ingressar no programa será necessário atualizar o Windows para obter as últimas versões do Windows e depois de atualizado já será possível iniciar a configuração do WSL 2. Para isso abra uma janela do PowerShell como administrador e execute os seguintes comendos, para habilitar a feature do Windows Subsystem for Linux e também o Virtual Machine Platform.

Depois de ingressar no programa será necessário atualizar o Windows para obter as últimas versões do Windows e depois de atualizado já será possível iniciar a configuração do WSL 2.

Para isso abra uma janela do PowerShell como administrador e execute os seguintes comendos, para habilitar a feature do Windows Subsystem for Linux e também o Virtual Machine Platform.

```posh
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

Feito isso, caso você já tenha uma distribuição Linux instalada a partir do Microsoft Store, você pode migrar essa distribuição para executar dentro do WSL 2 e poder assim utilizar de todas as suas melhorias.

Para listar as distribuições instaladas você pode utilizar o seguinte comando:

```posh
wsl --list --verbose
```

Para migrar uma distribuição você pode por exemplo, se você tem o Ubuntu 18.04 instalado, executar o comando abaixo:

```posh
wsl --set-version Ubuntu-18.04 2
```

Caso você receba esta mensagem:
> WSL 2 requer uma atualização para seu componente kernel. Para obter mais informações, visite https://aka.ms/wsl2kernel

Você pode acessar o link ou baixar o pacote de atualização direto [deste link](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi).

Baixando e instalando esta atualização você já deve conseguir converter as instalações do WSL 1 para o 2.

Listando novamente as distribuições você já poderá confirmar a mudança.

Caso esteja utilizando uma instalação limpa do Windows, você pode definir a versão padrão do WSL para a segunda versão com o comando:

```posh
wsl --set-default-version 2
```

Pelo motivo do WSL 2 ainda estar em desenvolvimento, podemos esperar que muitas melhorias sejam implementadas até seu lançamento final. Com a melhoria de performance e compatibilidade total com Linux, temos um ambiente de desenvolvimento com performance comparável o Linux instalado de forma nativa, o que é uma grande conquista.

O Docker para Windows irá se aproveitar do WSL 2, estando disponível na versão Edge do mesmo integração com o WSL 2, aproveitando também dos ganhos de performance com disco, um dos problemas que temos atualmente com o Docker ao usá-lo no Windows com aplicações que precisam de um grande volume de leitura e escrita em disco.

---

Espero que tenham gostado desta primeira parte, logo vou finalizar a segunda parte com a instalação do docker.

Até logo.