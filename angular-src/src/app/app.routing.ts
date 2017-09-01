import { TourComponent } from './components/tour/tour.component';
import { BronxPageComponent } from './components/bronx-page/bronx-page.component';
import { BrooklynPageComponent } from './components/brooklyn-page/brooklyn-page.component';
import { ManhattanPageComponent } from './components/manhattan-page/manhattan-page.component';
import { QueensPageComponent } from './components/queens-page/queens-page.component';
import { StatenPageComponent } from './components/staten-page/staten-page.component';


export const AppRoutes: any = [
  {path: 'tour', component: TourComponent},
  {path: 'bronx_page', component: BronxPageComponent},
  {path: 'brooklyn_page', component: BrooklynPageComponent},
  {path: 'manhattan_page', component: ManhattanPageComponent},
  {path: 'queens_page', component: QueensPageComponent},
  {path:'staten_page', component: StatenPageComponent},





];
 
export const AppComponents: any = [
    TourComponent,
    BronxPageComponent,
    BrooklynPageComponent,
    QueensPageComponent,
    ManhattanPageComponent,
    StatenPageComponent,
];