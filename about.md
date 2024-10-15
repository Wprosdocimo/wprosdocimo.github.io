---
layout: page
title: O autor
permalink: /about/
slug: about
---

{%   assign actualMonth = site.time | date: '%m'      %}
{%   assign actualYear = site.time | date: '%Y'      %}
{%   assign diferenceMonth = actualMonth | minus: '06' %}
{% if diferenceMonth > 0  %}
  {% assign myAge = actualYear | minus: '1979' %}
{% else %}
  {% assign myAge = actualYear | minus: '1979' | minus: 1 %}
{% endif %}

{:.about_author}
![Wilson Luiz Prosdocimo](/images/author.jpg)

Meu nome é Wilson Luiz Prosdocimo, mas muitos me chamam simplesmente de **Prosdocimo**. Tenho **{{myAge}} anos**, sou casado, pai orgulhoso do Tiago e do Felipe, e nascido em Curitiba.

Sou pós-graduado em Redes de Computadores e Segurança de Redes, além de ser um entusiasta da programação, especialmente em Python. Nos últimos anos, venho atuando na área de SRE/DevOps, onde combino meu conhecimento técnico com a paixão pela solução de problemas e integração de sistemas complexos.

Além da tecnologia, sou fotógrafo amador, escotista e radioamador. Tenho uma sede insaciável por conhecimento, sempre me aventurando em novos temas, linguagens e habilidades. Meu aprendizado é contínuo, e a curiosidade sempre me motiva a buscar mais.

Desde o início de 2023, atuo voluntariamente como escotista no [Grupo Escoteiro União Juventus 90/PR](https://geuniaojuventus.org.br). Comecei como assistente no Ramo Escoteiro e, atualmente, sou Chefe Hathi 🐘 no Ramo Lobinho, onde apoio e oriento os jovens, inspirando-os através das histórias da Jângal, de Rudyard Kipling.

Em julho de 2023, conquistei minha Licença de Radioamador Classe "C" e desde então venho integrando a comunicação por rádio ao movimento escoteiro. Recentemente, também obtive a insígnia de radioescotista, unindo duas paixões que me permitem impactar positivamente a vida dos jovens.

Minha missão de vida é clara: ajudar as pessoas a encontrar equilíbrio e plenitude, seja no contexto pessoal ou profissional. Acredito que, ao auxiliar os outros a alcançarem novos patamares de vida, também estou evoluindo.

Definido por alguns como um nerd incurável, por outros como um sonhador incansável, sou alguém que vê no aprendizado e na ajuda ao próximo o verdadeiro propósito da vida.

![Pelo Caminho...](/images/bicicleta.jpg)
