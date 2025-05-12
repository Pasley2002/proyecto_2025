import { Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { ListaPersonasComponent } from './Paginas/lista-personas/lista-personas.component';

export const routes: Routes = [
    {path: '', component: PersonaComponent},
    {path: 'persona', component: PersonaComponent},
    {path: 'persona/:idPersona', component: PersonaComponent},
    {path: 'listaPersonas', component: ListaPersonasComponent}
];