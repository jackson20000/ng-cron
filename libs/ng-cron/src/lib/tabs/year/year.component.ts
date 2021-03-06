import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Segment, CoreService } from '@sbzen/cron-core';

import { QuartzCronService } from './../../cron.service';
import { TabSingleSegmentComponent } from './../tab-single-segment.component';

@Component({
	selector: 'quartz-cron-year',
	templateUrl: './year.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class YearComponent extends TabSingleSegmentComponent {
	yearCodes = this.coreService.getList(Segment.year, true);
	years = this.coreService.getList(Segment.year);

	constructor(
		private coreService: CoreService,
		cd: ChangeDetectorRef,
		quartzCron: QuartzCronService
	) {
		super(Segment.year, quartzCron, cd);
	}
}
