import {fireEvent} from "@testing-library/react";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Counter test', () => {
    test('Test router', async () => {
        const {getByTestId} =
            renderTestApp(null, {
                route: '/',
                initialState: {
                    counter: {
                        value: 10
                    }
                }
            })


        const incrementBtn = getByTestId('increment-btn')

        expect(getByTestId('value-title')).toHaveTextContent('10')
        fireEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toHaveTextContent('11')

    })
})