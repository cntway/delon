import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AlainThemeModule } from '@delon/theme';
import { AlainABCModule, SimpleTableConfig, FullContentService } from '@delon/abc';
import { AlainACLModule } from '@delon/acl';
import { DelonMockModule } from '@delon/mock';

// third libs
import { CountdownModule } from 'ngx-countdown';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        AlainThemeModule.forChild(),
        AlainABCModule,
        AlainACLModule,
        DelonMockModule,
        // third libs
        CountdownModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgZorroAntdModule,
        AlainThemeModule,
        AlainABCModule,
        AlainACLModule,
        DelonMockModule,
        // third libs
        CountdownModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                // @delon/abc
                SimpleTableConfig,
                FullContentService
            ]
        };
    }
}
