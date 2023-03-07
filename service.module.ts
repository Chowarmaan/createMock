import { Module } from '@nestjs/common';
import { ParentService, DependencyService } from './service';

@Module({
	imports: [],
	providers: [
		DependencyService, ParentService
	],
	exports: [DependencyService, ParentService],
})
export class ServiceModule {}
