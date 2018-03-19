import { NgModule, ModuleWithProviders } from '@angular/core';

// region: all modules
import { AdErrorCollectModule } from './error-collect/error-collect.module';
import { AdFooterToolbarModule } from './footer-toolbar/footer-toolbar.module';
import { AdSidebarNavModule } from './sidebar-nav/sidebar-nav.module';
import { AdDownFileModule } from './down-file/down-file.module';
import { AdImageModule } from './image/image.module';
import { AdAvatarListModule } from './avatar-list/avatar-list.module';
import { AdDescListModule } from './desc-list/desc-list.module';
import { AdEllipsisModule } from './ellipsis/ellipsis.module';
import { AdGlobalFooterModule } from './global-footer/global-footer.module';
import { AdExceptionModule } from './exception/exception.module';
import { AdNoticeIconModule } from './notice-icon/notice-icon.module';
import { AdNumberInfoModule } from './number-info/number-info.module';
import { AdPageHeaderModule } from './page-header/page-header.module';
import { AdResultModule } from './result/result.module';
import { AdStandardFormRowModule } from './standard-form-row/standard-form-row.module';
import { AdTagSelectModule } from './tag-select/tag-select.module';
import { AdTrendModule } from './trend/trend.module';
import { AdUtilsModule } from './utils/utils.module';
import { AdCountDownModule } from './count-down/count-down.module';
import { AdSimpleTableModule } from './simple-table/simple-table.module';
import { AdReuseTabModule } from './reuse-tab/reuse-tab.module';
import { AdFullContentModule } from './full-content/full-content.module';
import { AdXlsxModule } from './xlsx/xlsx.module';
import { AdZipModule } from './zip/zip.module';
import { AdNumberToChineseModule } from './number-to-chinese/number-to-chinese.module';
import { AdLodopModule } from './lodop/lodop.module';
// charts
import { AdG2BarModule } from './charts/bar/bar.module';
import { AdG2CardModule } from './charts/card/card.module';
import { AdG2ChartModule } from './charts/chart/chart.module';
import { AdG2GaugeModule } from './charts/gauge/gauge.module';
import { AdG2MiniAreaModule } from './charts/mini-area/mini-area.module';
import { AdG2MiniBarModule } from './charts/mini-bar/mini-bar.module';
import { AdG2MiniProgressModule } from './charts/mini-progress/mini-progress.module';
import { AdG2PieModule } from './charts/pie/pie.module';
import { AdG2RadarModule } from './charts/radar/radar.module';
import { AdG2TagCloudModule } from './charts/tag-cloud/tag-cloud.module';
import { AdG2TimelineModule } from './charts/timeline/timeline.module';
import { AdG2WaterWaveModule } from './charts/water-wave/water-wave.module';

const MODULES = [
    AdErrorCollectModule, AdFooterToolbarModule, AdSidebarNavModule, AdDownFileModule, AdImageModule,
    AdAvatarListModule, AdDescListModule, AdEllipsisModule, AdGlobalFooterModule, AdExceptionModule,
    AdNoticeIconModule, AdNumberInfoModule, AdPageHeaderModule, AdResultModule, AdStandardFormRowModule,
    AdTagSelectModule, AdTrendModule, AdUtilsModule, AdCountDownModule, AdSimpleTableModule,
    AdReuseTabModule, AdFullContentModule, AdXlsxModule, AdZipModule, AdNumberToChineseModule, AdLodopModule,
    // charts
    AdG2BarModule, AdG2CardModule, AdG2ChartModule, AdG2GaugeModule, AdG2MiniAreaModule, AdG2MiniBarModule,
    AdG2MiniProgressModule, AdG2PieModule, AdG2RadarModule, AdG2TagCloudModule, AdG2TimelineModule, AdG2WaterWaveModule
];

// endregion

// region: export

export * from './error-collect';
export * from './footer-toolbar';
export * from './sidebar-nav';
export * from './down-file';
export * from './image';
export * from './avatar-list';
export * from './desc-list';
export * from './ellipsis';
export * from './global-footer';
export * from './exception';
export * from './notice-icon';
export * from './number-info';
export * from './page-header';
export * from './result';
export * from './standard-form-row';
export * from './tag-select';
export * from './trend';
export * from './utils';
export * from './count-down';
export * from './simple-table';
export * from './reuse-tab';
export * from './full-content';
export * from './xlsx';
export * from './zip';
export * from './number-to-chinese';
export * from './lodop';
// charts
export * from './charts/bar';
export * from './charts/card';
export * from './charts/chart';
export * from './charts/gauge';
export * from './charts/mini-area';
export * from './charts/mini-bar';
export * from './charts/mini-progress';
export * from './charts/pie';
export * from './charts/radar';
export * from './charts/tag-cloud';
export * from './charts/timeline';
export * from './charts/water-wave';

// endregion

@NgModule({
    imports: [
        AdErrorCollectModule.forRoot(), AdFooterToolbarModule.forRoot(), AdSidebarNavModule.forRoot(), AdDownFileModule.forRoot(), AdImageModule.forRoot(),
        AdAvatarListModule.forRoot(), AdDescListModule.forRoot(), AdEllipsisModule.forRoot(), AdExceptionModule.forRoot(), AdExceptionModule.forRoot(),
        AdNoticeIconModule.forRoot(), AdNumberInfoModule.forRoot(), AdPageHeaderModule.forRoot(), AdResultModule.forRoot(), AdStandardFormRowModule.forRoot(),
        AdTagSelectModule.forRoot(), AdTrendModule.forRoot(), AdUtilsModule.forRoot(), AdCountDownModule.forRoot(), AdSimpleTableModule.forRoot(),
        AdReuseTabModule.forRoot(), AdFullContentModule.forRoot(), AdXlsxModule.forRoot(), AdZipModule.forRoot(), AdNumberToChineseModule.forRoot(), AdLodopModule.forRoot(),
        // charts
        AdG2BarModule.forRoot(), AdG2CardModule.forRoot(), AdG2ChartModule.forRoot(), AdG2GaugeModule.forRoot(), AdG2MiniAreaModule.forRoot(), AdG2MiniBarModule.forRoot(),
        AdG2MiniProgressModule.forRoot(), AdG2PieModule.forRoot(), AdG2RadarModule.forRoot(), AdG2TagCloudModule.forRoot(), AdG2TimelineModule.forRoot(), AdG2WaterWaveModule.forRoot()
    ],
    exports: MODULES
})
export class AlainABCRootModule {
}

@NgModule({ exports: MODULES })
export class AlainABCModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: AlainABCRootModule };
    }
}