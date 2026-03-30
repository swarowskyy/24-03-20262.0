import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao=[
    {
      tecnologia:'HTML',
      descricao:'Se a internet fosse um corpo, o HTML seriam os ossos. É através dele que damos significado e hierarquia à informação, transformando linhas de código na base de tudo o que você vê e interage online.'
    },
    {
      tecnologia:'CSS',
      descricao:'Se o HTML é a fundação, o CSS é o design de interiores. É a ferramenta que nos permite controlar cada pixel na tela, trazendo personalidade, harmonia visual e usabilidade para o mundo digital.'
    },
    {
      tecnologia:'JavaScript',
      descricao:'Enquanto o HTML estrutura e o CSS embeleza, o JavaScript executa. É a linguagem que possibilita a interatividade, o processamento de dados e o comportamento inteligente que define a web moderna.'
    }
    
  ];
}
