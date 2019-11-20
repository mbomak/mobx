import {toJS} from 'mobx';
import Store from './store';
import transformToTypes from 'helpers/transformToTypes';


describe('Should be valid user data',  () => {
    const store = new Store();
    const mockData = {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
    };

    const objectOfTypesData = transformToTypes(mockData);
    let fetchedData: Object | null;
    let fetchedDataOfTypes: Object | null;

    beforeAll(async () => {
        await store.getData();
        fetchedData = toJS(store.data);
        fetchedDataOfTypes = transformToTypes(fetchedData);
    });

    test('Should be valid values', () => {
        expect(fetchedData).toEqual(mockData)
    });

    test('Should be valid types', () => {
        expect(fetchedDataOfTypes).toEqual(objectOfTypesData)
    });
});
