import { Component, ElementRef } from '@angular/core'

import BRHeader from '@govbr-ds/core/dist/components/header/header'
import { environment } from '../../../environments/environment'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HeaderService } from './header.service'
import { Header } from './header.interface'
import { headerLinks } from './header.links'

@Component({
  selector: 'br-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class BrHeaderComponent {
  public header: Header = {
    titulo: '',
    subtitulo: '',
    logo: {
      url: ''
    },
    assinatura: ''
  }

  public links: any[] = headerLinks
  

  instance: any // Instância do componente angular

  constructor(private brHeader: ElementRef, private headerService: HeaderService) { }
  ngOnInit() {
    this.headerService.getHeader().subscribe((data: any) => {
      this.header = data.data
      this.header.logo.url = `${environment.STRAPI_API + this.header.logo.url}`
    });
  }
  ngAfterViewInit() {
    this.instance = new BRHeader('.br-header', this.brHeader.nativeElement.querySelector('.br-header'))
  }


}
