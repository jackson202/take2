import { TestBed } from '@angular/core/testing';
import { DataServiceService } from './data-service.service';
describe('DataServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DataServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data-service.service.spec.js.map