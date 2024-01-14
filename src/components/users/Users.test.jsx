import {fireEvent, render, screen} from "@testing-library/react";
import {Users} from "./Users";
import axios from "axios";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {UserDetailPage} from "../../pages/UserDetailPage";
import AppRouter from "../../router/AppRouter";
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";

jest.mock('axios')

describe('Users test', () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell"
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch"
                }
            ]
        }
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response)
        render(<Users />)

        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
        expect(axios.get).toBeCalledTimes(1)
        screen.debug()
    })

    test('test redirect to details page', async () => {
        axios.get.mockReturnValue(response)
        render(renderWithRouter(<Users />))

        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)

        fireEvent.click(users[0])
        expect(screen.getByTestId('user-page')).toBeInTheDocument()
    })
})