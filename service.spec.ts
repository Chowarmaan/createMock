import { Test, TestingModule } from '@nestjs/testing';
import { createMock } from '@golevelup/ts-jest';
import { ParentService, DependencyService} from './service';

describe('ParentService', () => {
	let service: ParentService;
	let TestConfig: DependencyService;

	afterEach( () => {
		jest.clearAllMocks();
	});

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				ParentService,
			],
		})
			.useMocker((value) => createMock(value))
			.compile();

		service = module.get<ParentService>(ParentService);
		TestConfig = module.get<DependencyService>(DependencyService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should have the configuration defined', () => {
		expect(TestConfig).toBeDefined();
	});

	it('should get the proper value from the dependency', () => {
		jest.spyOn(TestConfig, 'SomeSetting', 'get').mockReturnValueOnce(2).mockReturnValue(3);
		expect(TestConfig.SomeSetting).toBe(2);
		expect(TestConfig.SomeSetting).toBe(3);
		expect(TestConfig.SomeSetting).toBe(3);
	});

	it('should validate the getters values for testing', async () => {
		jest.spyOn(TestConfig, 'SomeSetting', 'get').mockReturnValue(5);
		expect(service.Setting).toBe(5);
	});

	it('should use the local value', () => {
		jest.spyOn(service, 'Setting', 'get').mockReturnValue(12);
		expect(service.Setting).toBe(12);
	});
});
