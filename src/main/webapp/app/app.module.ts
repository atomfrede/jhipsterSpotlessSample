import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterSpotlessSampleSharedModule, UserRouteAccessService } from './shared';
import { JhipsterSpotlessSampleAppRoutingModule} from './app-routing.module';
import { JhipsterSpotlessSampleHomeModule } from './home/home.module';
import { JhipsterSpotlessSampleAdminModule } from './admin/admin.module';
import { JhipsterSpotlessSampleAccountModule } from './account/account.module';
import { JhipsterSpotlessSampleEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSpotlessSampleAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSpotlessSampleSharedModule,
        JhipsterSpotlessSampleHomeModule,
        JhipsterSpotlessSampleAdminModule,
        JhipsterSpotlessSampleAccountModule,
        JhipsterSpotlessSampleEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSpotlessSampleAppModule {}
