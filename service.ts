import { Injectable} from '@nestjs/common';

@Injectable()
export class DependencyService {

	/**
	 * Getters for the Configuration settings
	 */
	get SomeSetting(): number { return 1; }

	public GetAnotherValue(): number { return 9; }

}

@Injectable()
export class ParentService {

	constructor(private readonly Config_: DependencyService) {}

	/**
	 * Getters for the Configuration settings
	 */
	get Setting(): number {
		return this.Config_.SomeSetting;
	}

}
