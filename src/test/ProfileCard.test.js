import { mayorDeEdad  } from '../components/ProfileCard';

describe('funciones dentro del componente ProfileCard', () => {

    describe('mayorDeEdad', () => {

        test('debe devolver un boolean', () => {
            expect(typeof mayorDeEdad(19)).toBe('boolean');
        });

        test('si es mayor de edad devuelve true', () => {
            expect(mayorDeEdad(34)).toBeTruthy();
        });

        test('si la edad es 18 debe devolver true', () => {
            expect(mayorDeEdad(18)).toBeTruthy();
        });

        test('si la edad es menor de 18 devuelve false', () => {
            expect(mayorDeEdad(4)).toBeFalsy();
        });

        test('si la edad es negativa nos devuelve un null', () => {
            expect(mayorDeEdad(-21)).toBeNull();
        });

    })


})

