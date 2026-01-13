import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../servicos/produto.service';

@Component({
  selector: 'app-painel-principal',
  standalone: false,
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.css'],
})
export class PainelPrincipalComponent implements OnInit {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtoService.obterProdutos().subscribe((dados) => {
      this.produtos = dados;
    });
  }

  onImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/400x250/6c757d/ffffff?text=Imagem+Indispon%C3%ADvel';
  }

  excluirProduto(id: number): void {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.produtoService.deletarProduto(id).subscribe(() => {
        alert('Produto excluido com sucesso!');
        this.listarProdutos();
      });
    }
  }

  editarProduto(id: number): void {
    this.router.navigate(['/cadastro-produto', id]);
  }
}
